import type React from "react";
import { useMemo } from "react";
import { categories as staticCategories } from "../data/templates";

type TemplateInfo = {
  name: string;
  folder: string;
  category?: string;
  url?: string;
};

type CategoryInfo = {
  name: string;
  slug?: string;
  templates: TemplateInfo[];
};

const PUBLIC_BASE =
  (import.meta.env.VITE_TEMPLATES_BASE as string | undefined) ?? "/plantillas";

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
  const normalizedCategories = useMemo(() => {
    return staticCategories.map((cat: CategoryInfo) => ({
      ...cat,
      templates: cat.templates.map((tpl) => ({
        ...tpl,
        category: tpl.category ?? cat.slug ?? cat.name,
      })),
    }));
  }, []);

  const serverBaseClean = useMemo(() => {
    const trimmed = PUBLIC_BASE.replace(/\/$/, "");
    if (typeof window === "undefined") return trimmed;
    return `${window.location.origin}${trimmed}`;
  }, []);

  const buildTemplateUrl = (tpl: TemplateInfo) => {
    const base = PUBLIC_BASE.replace(/\/$/, "");
    const category = encodeURIComponent(tpl.category ?? "");
    const folder = encodeURIComponent(tpl.folder);
    const relative = tpl.url ?? `${base}/${category}/${folder}/index.html`;
    if (/^https?:/i.test(relative)) return relative;
    return `${relative.startsWith("/") ? relative : `/${relative}`}`;
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: 34, letterSpacing: -0.5 }}>
          Dashboard de Plantillas
        </h1>
        <p style={{ margin: 0, color: "#475569" }}>
          Servido desde{" "}
          <code style={{ background: "#eef2ff", padding: "3px 8px" }}>
            {serverBaseClean || PUBLIC_BASE}
          </code>
        </p>
      </div>

      {normalizedCategories.map((cat) => (
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
