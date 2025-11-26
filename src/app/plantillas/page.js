import { categories as staticCategories } from "../../data/plantillas";

const PUBLIC_BASE = "/plantillas";

const container = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "48px 24px 64px",
};

const header = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginBottom: 28,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: 16,
};

const card = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: 12,
  padding: "18px 20px",
  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
  transition: "transform 120ms ease, box-shadow 120ms ease, border-color 120ms",
  textDecoration: "none",
};

const cardTitle = {
  fontSize: 16,
  fontWeight: 700,
  margin: 0,
  color: "#0f172a",
};

const cardSubtitle = {
  margin: "6px 0 0",
  color: "#475569",
  fontSize: 13,
};

const normalizedCategories = staticCategories.map((cat) => ({
  ...cat,
  templates: cat.templates.map((tpl) => ({
    ...tpl,
    category: tpl.category ?? cat.slug ?? cat.name,
  })),
}));

const buildTemplateUrl = (tpl) => {
  const base = PUBLIC_BASE.replace(/\/$/, "");
  const category = encodeURIComponent(tpl.category ?? "");
  const folder = encodeURIComponent(tpl.folder);
  const relative = tpl.url ?? `${base}/${category}/${folder}/`;
  if (/^https?:/i.test(relative)) return relative;
  return relative.startsWith("/") ? relative : `/${relative}`;
};

export default function Plantillas() {
  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <div style={container}>
        <div style={header}>
          <p style={{ margin: 0, color: "#64748b", fontSize: 13, letterSpacing: 1.1, textTransform: "uppercase" }}>
            Biblioteca de plantillas
          </p>
          <h1 style={{ margin: 0, fontSize: 34, letterSpacing: -0.5 }}>
            Explora las plantillas disponibles
          </h1>
          <p style={{ margin: 0, color: "#475569" }}>
            Las rutas bajo <code style={{ background: "#eef2ff", padding: "3px 8px", borderRadius: 8 }}>{PUBLIC_BASE}</code> sirven cada plantilla directamente.
          </p>
        </div>

        {normalizedCategories.map((cat) => (
          <section key={cat.name} style={{ marginTop: 32 }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                marginBottom: 14,
                flexWrap: "wrap",
              }}
            >
              <h2 style={{ margin: 0 }}>{cat.name}</h2>
              <span style={{ color: "#94a3b8", fontSize: 13 }}>
                {cat.templates.length} plantillas
              </span>
            </div>

            <div style={grid}>
              {cat.templates.map((tpl) => {
                const href = buildTemplateUrl(tpl);
                return (
                  <a
                    key={`${tpl.category}-${tpl.folder}`}
                    href={href}
                    style={card}
                  >
                    <h3 style={cardTitle}>{tpl.name}</h3>
                    <p style={cardSubtitle}>{tpl.folder}</p>
                  </a>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
