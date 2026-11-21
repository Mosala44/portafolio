import './Tecnologias.css'

// Muestra grupos de chips (ícono + nombre), cada grupo con su subtítulo.
// Se usa para "Tecnologías" y para "Buenas prácticas".
// Si un elemento tiene "descripcion", se muestra como tooltip al pasar el mouse
// (o al enfocarlo con el teclado).
function Tecnologias({ grupos }) {
  return (
    <div className="tecnologias">
      {grupos.map((grupo) => (
        <div key={grupo.titulo} className="grupo-tecnologias">
          <h4>{grupo.titulo}</h4>
          <ul className="lista-chips">
            {grupo.tecnologias.map(({ nombre, Icono, color, descripcion }) => (
              <li
                key={nombre}
                className={`chip-tecnologia ${descripcion ? 'con-tooltip' : ''}`}
                data-tooltip={descripcion}
                tabIndex={descripcion ? 0 : undefined}
              >
                <Icono style={{ color }} aria-hidden="true" />
                <span>{nombre}</span>
                {descripcion && <span className="solo-lectores">: {descripcion}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Tecnologias
