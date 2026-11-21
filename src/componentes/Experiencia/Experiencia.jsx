import TarjetaLogro from '../TarjetaLogro/TarjetaLogro'
import ExperienciaLaboral from '../ExperienciaLaboral/ExperienciaLaboral'
import Tecnologias from '../Tecnologias/Tecnologias'
import { gruposTecnologias } from '../../datos/tecnologias'
import { gruposBuenasPracticas } from '../../datos/buenasPracticas'
import { certificaciones, cursos } from '../../datos/experiencia'
import './Experiencia.css'

// Cada grupo de la sección, con su título y su lista de logros
const grupos = [
  { titulo: 'Certificaciones', elementos: certificaciones },
  { titulo: 'Cursos completados', elementos: cursos },
]

function Experiencia() {
  return (
    <section id="experiencia" className="experiencia">
      <h2>Experiencia</h2>

      <div className="experiencia-grupo">
        <h3>Experiencia laboral</h3>
        <ExperienciaLaboral />
      </div>

      <div className="experiencia-grupo">
        <h3>Tecnologías</h3>
        <Tecnologias grupos={gruposTecnologias} />
      </div>

      <div className="experiencia-grupo">
        <h3>Buenas prácticas</h3>
        <Tecnologias grupos={gruposBuenasPracticas} />
      </div>

      {grupos.map((grupo) => (
        <div key={grupo.titulo} className="experiencia-grupo">
          <h3>{grupo.titulo}</h3>
          <div className="cuadricula-logros">
            {grupo.elementos.map((logro) => (
              <TarjetaLogro key={logro.id} logro={logro} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experiencia
