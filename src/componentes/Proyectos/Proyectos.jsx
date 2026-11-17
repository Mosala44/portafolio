import TarjetaProyecto from '../TarjetaProyecto/TarjetaProyecto'
import { proyectos } from '../../datos/proyectos'
import './Proyectos.css'

function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">
      <h2>Mis proyectos</h2>
      <div className="cuadricula-proyectos">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  )
}

export default Proyectos
