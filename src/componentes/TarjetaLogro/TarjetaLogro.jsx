import './TarjetaLogro.css'

// Obtiene las iniciales del título para mostrarlas cuando no hay imagen
const obtenerIniciales = (texto) =>
  texto
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((palabra) => palabra[0].toUpperCase())
    .join('')

// Tarjeta para un badge, certificación o curso.
function TarjetaLogro({ logro }) {
  const contenido = (
    <>
      <div
        className={`logro-imagen ${logro.imagen ? 'con-imagen' : ''} ${logro.imagenAncha ? 'imagen-ancha' : ''}`}
      >
        {logro.imagen ? (
          <img src={logro.imagen} alt={logro.titulo} loading="lazy" />
        ) : logro.Icono ? (
          <logro.Icono className="logro-icono" style={{ color: logro.colorIcono }} aria-hidden="true" />
        ) : (
          <span>{obtenerIniciales(logro.titulo)}</span>
        )}
      </div>
      <div className="logro-info">
        <h4>{logro.titulo}</h4>
        <p>{logro.entidad}</p>
        {logro.detalle && <p className="logro-detalle">{logro.detalle}</p>}
        {logro.fecha && <span className="logro-fecha">{logro.fecha}</span>}
        {logro.codigo && (
          <span className="logro-codigo">Código de verificación: {logro.codigo}</span>
        )}
      </div>
    </>
  )

  // Si tiene enlace, toda la tarjeta es clickeable
  return logro.enlace ? (
    <a href={logro.enlace} target="_blank" rel="noreferrer" className="tarjeta-logro con-enlace">
      {contenido}
    </a>
  ) : (
    <div className="tarjeta-logro">{contenido}</div>
  )
}

export default TarjetaLogro
