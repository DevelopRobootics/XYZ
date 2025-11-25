import { useEffect } from "react";
import { useParams } from "react-router-dom";

const TEMPLATES_BASE =
  (import.meta.env.VITE_TEMPLATES_BASE as string | undefined) ?? "/Plantillas";

export default function Viewer() {
  const { category, folder } = useParams();

  useEffect(() => {
    if (!category || !folder) return;
    const base = TEMPLATES_BASE.replace(/\/$/, "");
    const target = `${base}/${encodeURIComponent(
      category
    )}/${encodeURIComponent(folder)}/`;
    window.location.href = target.startsWith("/") ? target : `/${target}`;
  }, [category, folder]);

  if (!category || !folder) {
    return <div style={{ padding: 20 }}>Ruta incompleta.</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      Abriendo la plantilla{" "}
      <strong>
        {category}/{folder}
      </strong>
      ...
    </div>
  );
}
