import { FaBriefcase } from 'react-icons/fa'
import { experienciaLaboral } from '../../datos/experienciaLaboral'
import './ExperienciaLaboral.css'

// Lista de trabajos: cargo, empresa, periodo y lo que desarrollé en cada uno.
function ExperienciaLaboral() {
  return (
    <div className="experiencia-laboral">
      {experienciaLaboral.map((trabajo) => (
        <article key={trabajo.id} className="tarjeta-trabajo">
          <div className="trabajo-icono" aria-hidden="true">
            <FaBriefcase />
          </div>

          <div className="trabajo-contenido">
            <h4>{trabajo.cargo}</h4>
            {(trabajo.empresa || trabajo.periodo) && (
              <p className="trabajo-subtitulo">
                {[trabajo.empresa, trabajo.periodo].filter(Boolean).join(' · ')}
              </p>
            )}
            {trabajo.logros?.length > 0 && (
              <ul className="trabajo-logros">
                {trabajo.logros.map((logro) => (
                  <li key={logro}>{logro}</li>
                ))}
              </ul>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

export default ExperienciaLaboral
