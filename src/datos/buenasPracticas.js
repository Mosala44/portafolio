import {
  TbStack2,
  TbCode,
  TbCopyOff,
  TbFeather,
  TbScissors,
  TbLayoutColumns,
  TbPuzzle,
  TbStack3,
  TbCircles,
  TbApi,
  TbGitBranch,
  TbRefresh,
  TbVariable,
  TbShieldLock,
  TbMessageCode,
  TbMarkdown,
} from 'react-icons/tb'
import { SiGithub, SiSwagger, SiDocker } from 'react-icons/si'

// Colores por categoría (los logos de marca usan su propio color)
const COLOR_DISENO = '#a3e635'
const COLOR_ARQUITECTURA = '#38bdf8'
const COLOR_EQUIPO = '#fb923c'
const COLOR_SEGURIDAD = '#f87171'
const COLOR_DOCUMENTACION = '#c084fc'

// Buenas prácticas agrupadas por categoría.
// Se muestran con el mismo componente que Tecnologías.
// "descripcion" es el texto del tooltip al pasar el mouse.
export const gruposBuenasPracticas = [
  {
    titulo: 'Diseño de código',
    tecnologias: [
      {
        nombre: 'Principios SOLID',
        Icono: TbStack2,
        color: COLOR_DISENO,
        descripcion: 'Cinco principios para que el código orientado a objetos sea mantenible y extensible.',
      },
      {
        nombre: 'Clean Code',
        Icono: TbCode,
        color: COLOR_DISENO,
        descripcion: 'Código legible, con nombres claros y funciones pequeñas que hacen una sola cosa.',
      },
      {
        nombre: 'DRY',
        Icono: TbCopyOff,
        color: COLOR_DISENO,
        descripcion: '"Don\'t Repeat Yourself": evitar duplicar lógica para mantener una única fuente de verdad.',
      },
      {
        nombre: 'KISS',
        Icono: TbFeather,
        color: COLOR_DISENO,
        descripcion: '"Keep It Simple": preferir la solución más simple que resuelva el problema.',
      },
      {
        nombre: 'YAGNI',
        Icono: TbScissors,
        color: COLOR_DISENO,
        descripcion: '"You Aren\'t Gonna Need It": no construir funcionalidades hasta que realmente se necesiten.',
      },
      {
        nombre: 'Separación de responsabilidades',
        Icono: TbLayoutColumns,
        color: COLOR_DISENO,
        descripcion: 'Cada módulo se encarga de una sola parte del sistema.',
      },
      {
        nombre: 'Patrones de diseño',
        Icono: TbPuzzle,
        color: COLOR_DISENO,
        descripcion: 'Soluciones probadas a problemas comunes de diseño de software.',
      },
    ],
  },
  {
    titulo: 'Arquitectura',
    tecnologias: [
      {
        nombre: 'Arquitectura por capas',
        Icono: TbStack3,
        color: COLOR_ARQUITECTURA,
        descripcion: 'Separar presentación, lógica de negocio y acceso a datos en capas independientes.',
      },
      {
        nombre: 'Clean Architecture',
        Icono: TbCircles,
        color: COLOR_ARQUITECTURA,
        descripcion: 'El dominio en el centro, independiente de frameworks, bases de datos e interfaces.',
      },
      {
        nombre: 'API REST',
        Icono: TbApi,
        color: COLOR_ARQUITECTURA,
        descripcion: 'APIs basadas en recursos, verbos HTTP y respuestas consistentes.',
      },
    ],
  },
  {
    titulo: 'Trabajo en equipo',
    tecnologias: [
      {
        nombre: 'Git y GitHub',
        Icono: SiGithub,
        color: '#ffffff',
        descripcion: 'Control de versiones y colaboración con ramas, pull requests y revisiones de código.',
      },
      {
        nombre: 'Git Flow',
        Icono: TbGitBranch,
        color: COLOR_EQUIPO,
        descripcion: 'Flujo de ramas (main, develop, feature, hotfix) para ordenar el desarrollo y las versiones.',
      },
      {
        nombre: 'Metodologías ágiles',
        Icono: TbRefresh,
        color: COLOR_EQUIPO,
        descripcion: 'Trabajo iterativo en ciclos cortos, con entregas frecuentes y mejora continua.',
      },
    ],
  },
  {
    titulo: 'Seguridad',
    tecnologias: [
      {
        nombre: 'Variables de entorno',
        Icono: TbVariable,
        color: COLOR_SEGURIDAD,
        descripcion: 'Credenciales y configuración fuera del código, en archivos .env que no se suben al repositorio.',
      },
      {
        nombre: 'Autenticación JWT y roles',
        Icono: TbShieldLock,
        color: COLOR_SEGURIDAD,
        descripcion: 'Sesiones con tokens JWT y permisos según el rol de cada usuario.',
      },
    ],
  },
  {
    titulo: 'Documentación',
    tecnologias: [
      {
        nombre: 'Código comentado',
        Icono: TbMessageCode,
        color: COLOR_DOCUMENTACION,
        descripcion: 'Comentarios que explican el porqué de las decisiones, no solo el qué.',
      },
      {
        nombre: 'README en proyectos',
        Icono: TbMarkdown,
        color: COLOR_DOCUMENTACION,
        descripcion: 'Cada proyecto explica qué hace, cómo instalarlo y cómo ejecutarlo.',
      },
      {
        nombre: 'Documentación de APIs (Swagger/Postman)',
        Icono: SiSwagger,
        color: '#85ea2d',
        descripcion: 'Endpoints documentados con Swagger y colecciones de Postman listas para probar.',
      },
    ],
  },
  {
    titulo: 'Despliegue',
    tecnologias: [
      {
        nombre: 'Docker',
        Icono: SiDocker,
        color: '#2496ed',
        descripcion: 'Contenedores para que la aplicación funcione igual en cualquier entorno.',
      },
    ],
  },
]
