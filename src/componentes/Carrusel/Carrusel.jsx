import { useState } from 'react'
import './Carrusel.css'

// Carrusel simple: flechas, puntos indicadores y deslizamiento entre fotos.
// "clase" permite agregar una clase CSS extra (por ejemplo, para cambiar la proporción).
function Carrusel({ fotos, clase = '' }) {
  const [fotoActual, setFotoActual] = useState(0)
  const totalFotos = fotos.length

  const irAnterior = () => setFotoActual((actual) => (actual - 1 + totalFotos) % totalFotos)
  const irSiguiente = () => setFotoActual((actual) => (actual + 1) % totalFotos)

  return (
    <div className={`carrusel ${clase}`}>
      <div className="carrusel-pista" style={{ transform: `translateX(-${fotoActual * 100}%)` }}>
        {fotos.map((foto, indice) => (
          <img
            key={indice}
            src={foto.url}
            alt={foto.descripcion}
            className="carrusel-foto"
            loading="lazy"
          />
        ))}
      </div>

      <button className="carrusel-flecha izquierda" onClick={irAnterior} aria-label="Foto anterior">
        &#8249;
      </button>
      <button className="carrusel-flecha derecha" onClick={irSiguiente} aria-label="Foto siguiente">
        &#8250;
      </button>

      <div className="carrusel-puntos">
        {fotos.map((_, indice) => (
          <button
            key={indice}
            className={`carrusel-punto ${indice === fotoActual ? 'activo' : ''}`}
            onClick={() => setFotoActual(indice)}
            aria-label={`Ir a la foto ${indice + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carrusel
