// Normaliza y replica plantillas para que existan en minúsculas y bajo /templates.
import { access, cp, mkdir } from 'fs/promises';
import { join } from 'path';

const root = process.cwd();
const srcCapital = join(root, 'public', 'Plantillas'); // carpeta original que subiste
const srcLower = join(root, 'public', 'plantillas');   // destino principal (minúsculas)
const destTemplates = join(root, 'public', 'templates'); // alias para rutas absolutas "/templates"

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function ensureLowercase() {
  if (await exists(srcLower)) return;
  if (!(await exists(srcCapital))) {
    console.error('No se encontró public/Plantillas ni public/plantillas. Asegúrate de tener las plantillas antes de compilar.');
    process.exit(1);
  }
  await mkdir(join(root, 'public'), { recursive: true });
  await cp(srcCapital, srcLower, { recursive: true, force: true });
  console.log('Copiado public/Plantillas -> public/plantillas');
}

async function copyToTemplates() {
  if (!(await exists(srcLower))) {
    console.error('No existe public/plantillas para copiar a templates.');
    process.exit(1);
  }
  await mkdir(join(root, 'public'), { recursive: true });
  await cp(srcLower, destTemplates, { recursive: true, force: true });
  console.log('Copiado public/plantillas -> public/templates');
}

async function main() {
  await ensureLowercase();
  await copyToTemplates();
}

main().catch((err) => {
  console.error('Error en sync-plantillas:', err);
  process.exit(1);
});
