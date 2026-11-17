import { useEffect, useRef } from 'react'
import './Particulas.css'

// Configuración de las partículas
const CANTIDAD_PARTICULAS = 70
const RADIO_MINIMO = 1.5
const RADIO_MAXIMO = 4
const VELOCIDAD_MAXIMA = 0.35

// Crea una partícula en una posición aleatoria dentro del lienzo
const crearParticula = (ancho, alto) => ({
  x: Math.random() * ancho,
  y: Math.random() * alto,
  radio: RADIO_MINIMO + Math.random() * (RADIO_MAXIMO - RADIO_MINIMO),
  velocidadX: (Math.random() - 0.5) * VELOCIDAD_MAXIMA,
  velocidadY: -(0.1 + Math.random() * VELOCIDAD_MAXIMA), // suben lentamente
  opacidad: 0.3 + Math.random() * 0.6,
  fase: Math.random() * Math.PI * 2, // para el parpadeo suave
})

// Fondo animado de partículas blancas que flotan detrás del contenido
function Particulas() {
  const referenciaLienzo = useRef(null)

  useEffect(() => {
    const lienzo = referenciaLienzo.current
    const contexto = lienzo.getContext('2d')
    let particulas = []
    let idAnimacion

    // Ajusta el tamaño del lienzo a su contenedor (nítido en pantallas retina)
    const ajustarTamano = () => {
      const escala = window.devicePixelRatio || 1
      const { width, height } = lienzo.getBoundingClientRect()
      lienzo.width = width * escala
      lienzo.height = height * escala
      contexto.setTransform(escala, 0, 0, escala, 0, 0)
      particulas = Array.from({ length: CANTIDAD_PARTICULAS }, () => crearParticula(width, height))
    }

    const dibujar = () => {
      const { width: ancho, height: alto } = lienzo.getBoundingClientRect()
      contexto.clearRect(0, 0, ancho, alto)

      for (const particula of particulas) {
        particula.x += particula.velocidadX
        particula.y += particula.velocidadY
        particula.fase += 0.02

        // Si sale por arriba, reaparece por abajo; si sale por los lados, por el lado contrario
        if (particula.y < -particula.radio) {
          particula.y = alto + particula.radio
          particula.x = Math.random() * ancho
        }
        if (particula.x < -particula.radio) particula.x = ancho + particula.radio
        if (particula.x > ancho + particula.radio) particula.x = -particula.radio

        const brillo = particula.opacidad * (0.7 + 0.3 * Math.sin(particula.fase))
        contexto.beginPath()
        contexto.arc(particula.x, particula.y, particula.radio, 0, Math.PI * 2)
        contexto.fillStyle = `rgba(255, 255, 255, ${brillo})`
        contexto.shadowColor = 'rgba(255, 255, 255, 0.8)'
        contexto.shadowBlur = particula.radio * 3
        contexto.fill()
      }

      idAnimacion = requestAnimationFrame(dibujar)
    }

    ajustarTamano()
    dibujar()
    window.addEventListener('resize', ajustarTamano)

    // Limpieza al desmontar el componente
    return () => {
      cancelAnimationFrame(idAnimacion)
      window.removeEventListener('resize', ajustarTamano)
    }
  }, [])

  return <canvas ref={referenciaLienzo} className="particulas" aria-hidden="true" />
}

export default Particulas
