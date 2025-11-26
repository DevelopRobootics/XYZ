import { redirect } from "next/navigation";

export default function TemplateRedirect({ params }) {
  const category = encodeURIComponent(params.category);
  const folder = encodeURIComponent(params.folder);
  const target = `/plantillas/${category}/${folder}/`;

  redirect(target);
}
