import { redes } from '../../datos/redes'
import './RedesSociales.css'

// Botones con enlace a cada red social, con su ícono y color de marca.
function RedesSociales() {
  return (
    <section className="redes-sociales">
      {redes.map(({ nombre, enlace, Icono, clase }) => {
        const esCorreo = enlace.startsWith('mailto:')

        return (
          <a
            key={nombre}
            href={enlace}
            className={`boton-red ${clase}`}
            // Los enlaces externos se abren en otra pestaña; el correo no
            target={esCorreo ? undefined : '_blank'}
            rel={esCorreo ? undefined : 'noreferrer'}
          >
            <Icono className="boton-red-icono" aria-hidden="true" />
            <span>{nombre}</span>
          </a>
        )
      })}
    </section>
  )
}

export default RedesSociales
