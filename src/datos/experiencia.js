import { SiUdemy } from 'react-icons/si'

// Datos de la sección Experiencia: cursos completados y certificaciones.
// Campos de cada elemento:
//   titulo  → nombre del curso o certificación
//   entidad → quién lo emite (empresa, plataforma, institución)
//   detalle → (opcional) texto extra, por ejemplo las asignaturas
//   fecha   → (opcional) cuándo lo obtuviste
//   codigo  → (opcional) código de verificación
//   imagen  → (opcional) ruta a la imagen, por ejemplo '/badges/mi-badge.png'
//   imagenAncha → (opcional) true si la imagen es un logo alargado (ej. INACAP)
//   Icono / colorIcono → (opcional) ícono de react-icons y su color, si no hay imagen
//   enlace  → (opcional) link para verificarlo

// Cursos completados.
//   - Cisco: se verifican en tu perfil de Credly.
//   - Udemy: se verifican con el link ude.my/UC-... de cada certificado.
const PERFIL_CREDLY = 'https://www.credly.com/users/javier-varas.9011df4e/badges/credly'

export const cursos = [
  {
    id: 1,
    titulo: 'Python Essentials 1',
    entidad: 'Cisco Networking Academy',
    imagen: '/badges/python-essentials-1.png',
    enlace: PERFIL_CREDLY,
  },
  {
    id: 2,
    titulo: 'Introduction to Modern AI',
    entidad: 'Cisco Networking Academy',
    imagen: '/badges/introduction-to-modern-ai.png',
    enlace: PERFIL_CREDLY,
  },
  {
    id: 3,
    titulo: 'Introduction to Data Science',
    entidad: 'Cisco Networking Academy',
    imagen: '/badges/introduction-to-data-science.png',
    enlace: PERFIL_CREDLY,
  },
  {
    id: 4,
    titulo: 'Curso de PHP Moderno',
    entidad: 'Udemy · Héctor de León · 10,5 horas',
    fecha: 'Noviembre 2026',
    Icono: SiUdemy,
    colorIcono: '#a435f0',
    enlace: 'https://ude.my/UC-0b4602f7-940f-45a6-945a-67736e75e25b',
  },
]

// Certificados de INACAP. Se verifican con el código de verificación en el validador oficial:
const VALIDADOR_INACAP = 'https://siga.inacap.cl/Inacap.VerificacionCertificados/Default.aspx'
const LOGO_INACAP = '/logos/inacap.png'

export const certificaciones = [
  {
    id: 1,
    titulo: 'Desarrollador Full Stack',
    entidad: 'INACAP · 162 horas',
    detalle: 'Programación Front End y Programación Back End',
    fecha: 'Noviembre 2026',
    codigo: '3E986084C868F532',
    enlace: VALIDADOR_INACAP,
    imagen: LOGO_INACAP,
    imagenAncha: true,
  },
  {
    id: 2,
    titulo: 'Desarrollo de Aplicaciones Básicas',
    entidad: 'INACAP · 162 horas',
    detalle: 'Introducción a la Programación y Programación Orientada a Objetos',
    fecha: 'Noviembre 2026',
    codigo: 'D6A67AAFC517683F',
    enlace: VALIDADOR_INACAP,
    imagen: LOGO_INACAP,
    imagenAncha: true,
  },
  {
    id: 3,
    titulo: 'Diseño y Gestión de Base de Datos',
    entidad: 'INACAP · 126 horas',
    detalle: 'Fundamentos de Base de Datos y Bases de Datos No Estructuradas',
    fecha: 'Noviembre 2026',
    codigo: '891A34DC89CB762A',
    enlace: VALIDADOR_INACAP,
    imagen: LOGO_INACAP,
    imagenAncha: true,
  },
  {
    id: 4,
    titulo: 'Diseño Ágil de Sistemas',
    entidad: 'INACAP · 126 horas',
    detalle: 'Desarrollo Ágil y Diseño de Sistemas',
    fecha: 'Noviembre 2026',
    codigo: 'CE39BD240127CA2B',
    enlace: VALIDADOR_INACAP,
    imagen: LOGO_INACAP,
    imagenAncha: true,
  },
]
