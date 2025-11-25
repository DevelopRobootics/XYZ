// Replica public/plantillas en public/templates para servir assets absolutos "/templates/...".
import { cp, constants, stat } from 'fs';
import { join } from 'path';

const src = join(process.cwd(), 'public', 'plantillas');
const dest = join(process.cwd(), 'public', 'templates');

const copy = () => {
  cp(src, dest, { recursive: true, force: true }, (err) => {
    if (err) {
      console.error('Error al copiar plantillas -> templates:', err);
      process.exit(1);
    }
    console.log('Copiado plantillas -> templates');
  });
};

stat(src, constants.F_OK, (err) => {
  if (err) {
    console.error('No existe public/plantillas; ejecuta primero build:plantillas');
    process.exit(1);
  }
  copy();
});
