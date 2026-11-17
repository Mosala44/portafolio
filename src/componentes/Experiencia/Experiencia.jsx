import TarjetaLogro from '../TarjetaLogro/TarjetaLogro'
import { badges, certificaciones, cursos } from '../../datos/experiencia'
import './Experiencia.css'

// Cada grupo de la sección, con su título y su lista de logros
const grupos = [
  { titulo: 'Badges', elementos: badges },
  { titulo: 'Certificaciones', elementos: certificaciones },
  { titulo: 'Cursos completados', elementos: cursos },
]

function Experiencia() {
  return (
    <section id="experiencia" className="experiencia">
      <h2>Experiencia</h2>

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
