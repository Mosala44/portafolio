import Particulas from '../Particulas/Particulas'
import './Inicio.css'

// Portada a pantalla completa con el mensaje de bienvenida.
function Inicio() {
  return (
    <section className="inicio">
      <Particulas />
      <h1>Bienvenido a mi portafolio</h1>
      <a href="#proyectos" className="indicador-bajar" aria-label="Bajar a proyectos">
        Ver proyectos
        <span className="flecha-bajar">&#8595;</span>
      </a>
    </section>
  )
}

export default Inicio
