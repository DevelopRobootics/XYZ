import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const baseDir = path.join(root, "public", "plantillas");
const force = process.env.FORCE_BUILD_PLANTILLAS === "1";
const devShell = process.env.npm_config_script_shell || "C:\\\\Windows\\\\System32\\\\cmd.exe";
const envKey = process.env.GEMINI_API_KEY || process.env.API_KEY || "DUMMY_KEY_FOR_BUILD";

const isDirectory = (dir) => fs.existsSync(dir) && fs.statSync(dir).isDirectory();

const ensureLocalPostcss = (templateDir) => {
  const localConfig = path.join(templateDir, "postcss.config.cjs");
  if (fs.existsSync(localConfig)) return { created: false, path: localConfig };
  const content = "module.exports = { plugins: [] };\n";
  fs.writeFileSync(localConfig, content, "utf8");
  return { created: true, path: localConfig };
};

const fixDistPaths = (distDir, rel) => {
  const distIndex = path.join(distDir, "index.html");
  if (!fs.existsSync(distIndex)) {
    console.warn(`- Aviso: no se encontró dist/index.html en ${rel} para reescribir rutas`);
    return;
  }

  const distCss = path.join(distDir, "index.css");
  if (!fs.existsSync(distCss)) {
    fs.writeFileSync(distCss, "/* placeholder css */\n", "utf8");
  }

  let html = fs.readFileSync(distIndex, "utf8");
  html = html
    .replace(/href=\"\/index\.css\"/g, 'href="./index.css"')
    .replace(/(href|src)=\"\/assets\//g, '$1="./assets/');
  fs.writeFileSync(distIndex, html, "utf8");
};

const buildTemplate = (templateDir, rel) => {
  const pkgJson = path.join(templateDir, "package.json");
  const lockFile = path.join(templateDir, "package-lock.json");
  const distDir = path.join(templateDir, "dist");
  const distIndex = path.join(templateDir, "dist", "index.html");
  const commonEnv = {
    ...process.env,
    GEMINI_API_KEY: envKey,
    API_KEY: envKey,
    npm_config_script_shell: devShell,
  };

  if (!fs.existsSync(pkgJson)) {
    console.log(`- Omitido (sin package.json): ${rel}`);
    return;
  }

  if (!force && fs.existsSync(distIndex)) {
    console.log(`- Ya existe dist, ajustando rutas: ${rel}`);
    fixDistPaths(distDir, rel);
    return;
  }

  if (force && fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }

  const postcssConfig = ensureLocalPostcss(templateDir);

  console.log(`- Construyendo ${rel}`);
  const installCmd = fs.existsSync(lockFile)
    ? "npm ci --no-fund --no-audit"
    : "npm install --no-fund --no-audit";
  execSync(installCmd, { cwd: templateDir, stdio: "inherit", shell: true, env: commonEnv });

  const viteBin = path.join("node_modules", "vite", "bin", "vite.js");
  const buildCmd = fs.existsSync(path.join(templateDir, viteBin))
    ? `node ${viteBin} build`
    : "npm run build";
  execSync(buildCmd, {
    cwd: templateDir,
    stdio: "inherit",
    shell: true,
    env: commonEnv,
  });

  if (!fs.existsSync(distIndex)) {
    throw new Error(`No se generó dist/index.html en ${rel}`);
  }

  fixDistPaths(distDir, rel);

  const nodeModules = path.join(templateDir, "node_modules");
  if (isDirectory(nodeModules)) {
    try {
      fs.rmSync(nodeModules, { recursive: true, force: true });
    } catch (err) {
      console.warn(`- Aviso: no se pudo borrar node_modules en ${rel}: ${err}`);
    }
  }

  if (postcssConfig.created && fs.existsSync(postcssConfig.path)) {
    fs.rmSync(postcssConfig.path, { force: true });
  }
};

const main = () => {
  if (!isDirectory(baseDir)) {
    throw new Error(`No se encontró ${baseDir}`);
  }

  const categories = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const category of categories) {
    const catDir = path.join(baseDir, category);
    const templates = fs
      .readdirSync(catDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    for (const template of templates) {
      const templateDir = path.join(catDir, template);
      const rel = path.join("plantillas", category, template);
      buildTemplate(templateDir, rel);
    }
  }
};

try {
  main();
  console.log("Plantillas listas en public/plantillas/*/dist");
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
}
