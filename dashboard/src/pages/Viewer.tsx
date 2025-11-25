import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SERVER_BASE =
  import.meta.env.VITE_TEMPLATES_HOST ?? "http://localhost:8888";

export default function Viewer() {
  const { category, folder } = useParams();

  useEffect(() => {
    if (!category || !folder) return;
    const url = `${SERVER_BASE.replace(
      /\/$/,
      ""
    )}/templates/${encodeURIComponent(category)}/${encodeURIComponent(folder)}/`;
    window.location.href = url;
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
