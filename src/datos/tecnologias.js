import {
  SiPhp,
  SiLaravel,
  SiJavascript,
  SiPython,
  SiVite,
  SiReact,
  SiExpo,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPostman,
  SiLinux,
  SiMysql,
  SiMongodb,
  SiVirtualbox,
  SiLivewire,
} from 'react-icons/si'
import { TbPlugConnected } from 'react-icons/tb'

// Tecnologías con las que he trabajado, agrupadas por área.
// "color" es el color de marca de cada tecnología (se usa en el ícono).
export const gruposTecnologias = [
  {
    titulo: 'Lenguajes',
    tecnologias: [
      { nombre: 'PHP', Icono: SiPhp, color: '#777bb4' },
      { nombre: 'JavaScript', Icono: SiJavascript, color: '#f7df1e' },
      { nombre: 'Python', Icono: SiPython, color: '#3776ab' },
      { nombre: 'HTML', Icono: SiHtml5, color: '#e34f26' },
      { nombre: 'CSS', Icono: SiCss, color: '#663399' },
    ],
  },
  {
    titulo: 'Frontend',
    tecnologias: [
      { nombre: 'React', Icono: SiReact, color: '#61dafb' },
      { nombre: 'Vite', Icono: SiVite, color: '#9135ff' },
      { nombre: 'Bootstrap', Icono: SiBootstrap, color: '#7952b3' },
      { nombre: 'Tailwind CSS', Icono: SiTailwindcss, color: '#06b6d4' },
    ],
  },
  {
    titulo: 'Backend',
    tecnologias: [
      { nombre: 'Laravel', Icono: SiLaravel, color: '#ff2d20' },
      { nombre: 'Livewire', Icono: SiLivewire, color: '#fb70a9' },
      { nombre: 'WebSocket', Icono: TbPlugConnected, color: '#4ade80' },
    ],
  },
  {
    titulo: 'Bases de datos',
    tecnologias: [
      { nombre: 'MySQL', Icono: SiMysql, color: '#4479a1' },
      { nombre: 'MongoDB', Icono: SiMongodb, color: '#47a248' },
    ],
  },
  {
    titulo: 'Mobile',
    tecnologias: [
      { nombre: 'React Native', Icono: SiReact, color: '#61dafb' },
      { nombre: 'Expo Go', Icono: SiExpo, color: '#ffffff' },
    ],
  },
  {
    titulo: 'Herramientas',
    tecnologias: [
      { nombre: 'Git', Icono: SiGit, color: '#f05032' },
      { nombre: 'Docker', Icono: SiDocker, color: '#2496ed' },
      { nombre: 'Postman', Icono: SiPostman, color: '#ff6c37' },
      { nombre: 'Linux', Icono: SiLinux, color: '#fcc624' },
      { nombre: 'VirtualBox', Icono: SiVirtualbox, color: '#2f61b4' },
    ],
  },
]
