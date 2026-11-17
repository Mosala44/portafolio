import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { SiCredly, SiGmail } from 'react-icons/si'

// Redes sociales que se muestran como botones.
// "clase" define el color del botón según la red (ver RedesSociales.css).
export const redes = [
  {
    nombre: 'LinkedIn',
    enlace: 'https://www.linkedin.com/in/javier-varas-bolados-285070231',
    Icono: FaLinkedin,
    clase: 'linkedin',
  },
  {
    nombre: 'GitHub',
    enlace: 'https://github.com/Mosala44',
    Icono: FaGithub,
    clase: 'github',
  },
  {
    nombre: 'Instagram',
    enlace: 'https://www.instagram.com/mxx_sala44?cplk=YmgxZ2J4Njd4ZjQ2',
    Icono: FaInstagram,
    clase: 'instagram',
  },
  {
    nombre: 'Credly',
    enlace: 'https://www.credly.com/users/javier-varas.9011df4e/badges/credly',
    Icono: SiCredly,
    clase: 'credly',
  },
  {
    nombre: 'Gmail',
    // Abre la ventana de "Redactar" de Gmail web con tu correo como destinatario.
    // (Un "mailto:" solo funciona si quien visita tiene un programa de correo configurado.)
    enlace: 'https://mail.google.com/mail/?view=cm&fs=1&to=javiervarasbolados@gmail.com',
    Icono: SiGmail,
    clase: 'gmail',
  },
]
