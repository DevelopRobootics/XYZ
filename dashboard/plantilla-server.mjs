import express from "express";
import path from "node:path";
import fs from "node:fs";
import process from "node:process";
import { execSync } from "node:child_process";
import AdmZip from "adm-zip";

const PORT = process.env.PORT ? Number(process.env.PORT) : 8888;
const baseDir =
  process.env.PLANTILLAS_DIR ||
  path.join(process.env.USERPROFILE ?? "", "Desktop", "Plantillas");

const app = express();

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,OPTIONS");
  next();
});

const ensureBaseDir = () => {
  if (!fs.existsSync(baseDir)) {
    throw new Error(`No existe la carpeta de plantillas: ${baseDir}`);
  }
};

const ensureTemplateDir = (category, template) => {
  const dir = path.join(baseDir, category, template);
  if (!fs.existsSync(dir)) return null;
  return dir;
};

const prettifyName = (name) =>
  name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

const ensureExtracted = (category, template) => {
  const targetDir = path.join(baseDir, category, template);
  if (fs.existsSync(targetDir)) return targetDir;

  const zipPath = path.join(baseDir, category, `${template}.zip`);
  if (fs.existsSync(zipPath)) {
    fs.mkdirSync(targetDir, { recursive: true });
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(targetDir, true);
    return targetDir;
  }

  return null;
};

const listCategories = () => {
  ensureBaseDir();
  const categories = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory());

  return categories.map((dirent) => {
    const categoryName = dirent.name;
    const categoryPath = path.join(baseDir, categoryName);
    const entries = fs.readdirSync(categoryPath, { withFileTypes: true });

    const folders = [];

    for (const entry of entries) {
      if (entry.isDirectory()) {
        folders.push(entry.name);
        continue;
      }

      if (entry.isFile() && entry.name.toLowerCase().endsWith(".zip")) {
        const folderName = path.parse(entry.name).name;
        ensureExtracted(categoryName, folderName);
        folders.push(folderName);
      }
    }

    const templates = folders.map((folder) => ({
      name: prettifyName(folder),
      folder,
      category: categoryName,
      url: `/templates/${encodeURIComponent(
        categoryName
      )}/${encodeURIComponent(folder)}/`,
    }));

    return { name: categoryName, templates };
  });
};

app.get("/api/categories", (_req, res) => {
  try {
    res.json({ baseDir, categories: listCategories() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

const rewriteIndexPaths = (indexPath, basePath) => {
  let html = fs.readFileSync(indexPath, "utf8");

  const relBase = basePath.endsWith("/") ? basePath : `${basePath}/`;

  // Make asset paths relative to the template mount.
  html = html.replace(/(href|src)=\"\/assets\/(.*?)\"/g, (_, p1, p2) =>
    `${p1}="${relBase}assets/${p2}"`
  );
  // Fix root-relative css/icons/scripts that some templates leave.
  html = html.replace(/href=\"\/(index\.css)\"/g, (_, p1) => `href="${relBase}${p1}"`);
  html = html.replace(/href=\"\/(favicon\.[\w\d]+)\"/g, (_, p1) => `href="${relBase}${p1}"`);
  html = html.replace(/src=\"\/(index\.(t|j)sx?)\"/g, (_, p1) => `src="${relBase}${p1}"`);

  fs.writeFileSync(indexPath, html, "utf8");
};

const ensureBuilt = (category, template) => {
  const extractedDir = ensureExtracted(category, template);
  const templateDir = extractedDir ?? ensureTemplateDir(category, template);

  if (!templateDir) {
    throw new Error(`Plantilla no encontrada: ${category}/${template}`);
  }

  const distDir = path.join(templateDir, "dist");
  const distIndex = path.join(distDir, "index.html");

  const ensureCssAndRewrite = () => {
    const cssPath = path.join(distDir, "index.css");
    if (!fs.existsSync(cssPath)) {
      fs.writeFileSync(cssPath, "/* generado para evitar 404 */\n", "utf8");
    }
    const basePath = `/templates/${encodeURIComponent(category)}/${encodeURIComponent(
      template
    )}/`;
    rewriteIndexPaths(distIndex, basePath);
  };

  if (!fs.existsSync(distIndex)) {
    const hasNodeModules = fs.existsSync(path.join(templateDir, "node_modules"));
    const cmdOpts = { cwd: templateDir, stdio: "inherit" };

    if (!hasNodeModules) {
      console.log(`Instalando dependencias en ${templateDir}...`);
      execSync("npm install", cmdOpts);
    }

    console.log(`Construyendo ${templateDir}...`);
    execSync("npm run build", cmdOpts);

    if (!fs.existsSync(distIndex)) {
      throw new Error(`No se encontró dist/index.html en ${templateDir} tras build`);
    }
  }

  ensureCssAndRewrite();
  return distDir;
};

// Fallbacks para peticiones absolutas legacy
app.get("/index.css", (_req, res) => {
  res.type("text/css").send("/* placeholder css (ruta absoluta) */");
});

app.get("/index.tsx", (_req, res) => {
  res.status(404).send("index.tsx no está disponible en producción");
});

// Siempre entrega el index reescrito de dist para la ruta raíz de la plantilla
app.get("/templates/:category/:template/", (req, res, next) => {
  try {
    const category = decodeURIComponent(req.params.category);
    const template = decodeURIComponent(req.params.template);
    const distDir = ensureBuilt(category, template);
    const distIndex = path.join(distDir, "index.html");
    return res.sendFile(distIndex);
  } catch (err) {
    return next(err);
  }
});

app.use("/templates/:category/:template", (req, res, next) => {
  try {
    const category = decodeURIComponent(req.params.category);
    const template = decodeURIComponent(req.params.template);
    const distDir = ensureBuilt(category, template);

    return express.static(distDir, {
      index: ["index.html", "home.html"],
    })(req, res, next);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(
        err instanceof Error ? err.message : "Error sirviendo la plantilla"
      );
  }
});

app.get("/", (_req, res) => {
  res.send(
    `<h1>Servidor de Plantillas</h1><p>API en <code>/api/categories</code>. Plantillas en <code>/templates/:categoria/:plantilla</code>.</p>`
  );
});

app.listen(PORT, () => {
  console.log(`Servidor de plantillas listo en http://localhost:${PORT}`);
  console.log(`Leyendo desde: ${baseDir}`);
});
