// Proyectos de ejemplo (estáticos). Reemplázalos por tus proyectos reales.
// Cada proyecto tiene 5 fotos para el carrusel.

const crearFotos = (semilla) =>
  Array.from({ length: 5 }, (_, indice) => ({
    url: `https://picsum.photos/seed/${semilla}-${indice + 1}/800/500`,
    descripcion: `Foto ${indice + 1} del proyecto`,
  }))

export const proyectos = [
  {
    id: 1,
    titulo: 'Proyecto de ejemplo 1',
    descripcion: 'Esto es un ejemplo. Aquí irá la descripción de tu proyecto.',
    tecnologias: ['React', 'CSS'],
    fotos: crearFotos('proyecto-a'),
  },
  {
    id: 2,
    titulo: 'Proyecto de ejemplo 2',
    descripcion: 'Esto es un ejemplo. Aquí irá la descripción de tu proyecto.',
    tecnologias: ['JavaScript', 'Node.js'],
    fotos: crearFotos('proyecto-b'),
  },
  {
    id: 3,
    titulo: 'Proyecto de ejemplo 3',
    descripcion: 'Esto es un ejemplo. Aquí irá la descripción de tu proyecto.',
    tecnologias: ['HTML', 'CSS'],
    fotos: crearFotos('proyecto-c'),
  },
  {
    id: 4,
    titulo: 'Proyecto de ejemplo 4',
    descripcion: 'Esto es un ejemplo. Aquí irá la descripción de tu proyecto.',
    tecnologias: ['React', 'API'],
    fotos: crearFotos('proyecto-d'),
  },
]
