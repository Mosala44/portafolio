import Carrusel from '../Carrusel/Carrusel'
import './TarjetaProyecto.css'

function TarjetaProyecto({ proyecto }) {
  return (
    <article className="tarjeta-proyecto">
      <Carrusel fotos={proyecto.fotos} />
      <div className="tarjeta-contenido">
        <span className="etiqueta-ejemplo">Esto es ejemplo</span>
        <h3>{proyecto.titulo}</h3>
        <p>{proyecto.descripcion}</p>
        <ul className="lista-tecnologias">
          {proyecto.tecnologias.map((tecnologia) => (
            <li key={tecnologia}>{tecnologia}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default TarjetaProyecto
