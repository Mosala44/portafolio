import Carrusel from '../Carrusel/Carrusel'
import { fotosPerfil } from '../../datos/perfil'
import './Perfil.css'

// Sección "Sobre mí": fotos en carrusel a la izquierda y texto a la derecha.
function Perfil() {
  return (
    <section className="perfil-contenedor">
      <div className="perfil">
        <div className="perfil-fotos">
          <Carrusel fotos={fotosPerfil} clase="carrusel-perfil" />
        </div>

        <div className="perfil-texto">
          <h1>Sobre mí</h1>
          <p>
            ¡Hola! Soy Javier, tengo 24 años y soy de Chile. Soy analista programador y llevo más
            de dos años trabajando en el desarrollo de software.
          </p>
          <p>
            Fuera del código, soy un apasionado del deporte: amo el fútbol, soy hincha de la gloriosa
            Universidad de Chile y un gran fanático de la lucha libre. También disfruto mucho la
            naturaleza; hacer senderismo y contemplar paisajes tranquilos es mi forma favorita de
            desconectarme.
          </p>

          <h2>Sobre mi trabajo</h2>
          <p>
            Actualmente me desempeño como desarrollador fullstack. El frontend es lo que más disfruto,
            pero también me desenvuelvo con soltura en proyectos backend y móviles.
          </p>
          <p>
            Me motiva aprender constantemente nuevas tecnologías, herramientas y tendencias para
            mejorar mi eficiencia y la calidad de mis resultados. Mi gran sueño es crear una
            inteligencia artificial avanzada.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Perfil
