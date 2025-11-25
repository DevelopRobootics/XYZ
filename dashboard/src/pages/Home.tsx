import type React from "react";
import { useEffect, useMemo, useState } from "react";

type TemplateInfo = {
  name: string;
  folder: string;
  category: string;
  url?: string;
};

type CategoryInfo = {
  name: string;
  templates: TemplateInfo[];
};

type ApiResponse = {
  baseDir?: string;
  categories?: CategoryInfo[];
};

const API_URL =
  import.meta.env.VITE_TEMPLATES_API ?? "http://localhost:8888/api/categories";

const SERVER_BASE =
  (import.meta.env.VITE_TEMPLATES_HOST ??
    API_URL.replace(/\/?api\/.+$/, "")) ||
  "http://localhost:8888";

const containerStyle: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "40px 32px 56px",
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginBottom: 24,
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: 16,
};

const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  padding: "18px 20px",
  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
  transition: "transform 120ms ease, box-shadow 120ms ease, border-color 120ms",
};

const cardTitle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  margin: 0,
  color: "#0f172a",
};

const cardSubtitle: React.CSSProperties = {
  margin: "6px 0 0",
  color: "#475569",
  fontSize: 13,
};

export default function Home() {
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [baseDir, setBaseDir] = useState<string | undefined>();

  useEffect(() => {
    const load = async () => {
      try {
        const resp = await fetch(API_URL);
        if (!resp.ok) throw new Error(`API error ${resp.status}`);
        const data = (await resp.json()) as ApiResponse;
        setCategories(data.categories ?? []);
        setBaseDir(data.baseDir);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "No se pudo cargar";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const serverBaseClean = useMemo(() => SERVER_BASE.replace(/\/$/, ""), []);

  const buildTemplateUrl = (tpl: TemplateInfo) => {
    const relative =
      tpl.url ??
      `/templates/${encodeURIComponent(tpl.category)}/${encodeURIComponent(
        tpl.folder
      )}/`;
    if (/^https?:/i.test(relative)) return relative;
    return `${serverBaseClean}${relative.startsWith("/") ? "" : "/"}${relative}`;
  };

  if (error) {
    return (
      <div style={containerStyle}>
        <h1 style={{ margin: 0 }}>Dashboard de Plantillas</h1>
        <p style={{ color: "#b42318", background: "#fee4e2", padding: 12 }}>
          Error al cargar las plantillas: {error}. Asegurate de que el servidor{" "}
          <code style={{ background: "#f2f4f7", padding: "2px 6px" }}>
            {API_URL}
          </code>{" "}
          este ejecutandose.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={containerStyle}>
        <h1 style={{ margin: 0 }}>Dashboard de Plantillas</h1>
        <p style={{ color: "#475569" }}>
          Cargando plantillas desde {API_URL}...
        </p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: 34, letterSpacing: -0.5 }}>
          Dashboard de Plantillas
        </h1>
        <p style={{ margin: 0, color: "#475569" }}>
          Servidor:{" "}
          <code style={{ background: "#eef2ff", padding: "3px 8px" }}>
            {serverBaseClean}
          </code>{" "}
          {baseDir ? ` · Carpeta: ${baseDir}` : ""}
        </p>
      </div>

      {categories.map((cat) => (
        <section key={cat.name} style={{ marginTop: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <h2 style={{ margin: 0 }}>{cat.name}</h2>
            <span style={{ color: "#94a3b8", fontSize: 13 }}>
              {cat.templates.length} plantillas
            </span>
          </div>

          <div style={gridStyle}>
            {cat.templates.map((tpl) => {
              const href = buildTemplateUrl(tpl);
              return (
                <a
                  key={`${tpl.category}-${tpl.folder}`}
                  href={href}
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    target.style.transform = "translateY(-2px)";
                    target.style.boxShadow =
                      "0 16px 40px rgba(15, 23, 42, 0.12)";
                    target.style.borderColor = "#cbd5e1";
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget;
                    target.style.transform = "translateY(0)";
                    target.style.boxShadow =
                      "0 10px 30px rgba(15, 23, 42, 0.08)";
                    target.style.borderColor = "#e5e7eb";
                  }}
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
  );
}
