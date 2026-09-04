import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { img } from '../media'
import './Hero.css'

const slides = [
  { id: 'casa', image: img.casaMas, to: '/casa-mas', cta: '¡Solicítalo aquí!' },
  { id: 'estadio', image: img.estadio, to: '/tarjetas', cta: '¡Participa aquí!' },
  { id: 'banca', image: img.banca, to: '/banca-en-linea', cta: 'Ir a Banca en línea' },
  { id: 'tarjeta', image: img.tarjeta, to: '/tarjetas', cta: '¡Solicítalo aquí!' },
  { id: 'traslado', image: img.traslado, to: '/productos/traslado-hipoteca', cta: '¡Solicítalo aquí!' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000)
    return () => clearInterval(id)
  }, [])

  const slide = slides[index]

  return (
    <section className="hero" aria-label="Promociones">
      <div className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
        <Link className="btn btn-orange hero-cta" to={slide.to}>
          {slide.cta}
        </Link>
      </div>
      <div className="hero-dots">
        {slides.map((item, i) => (
          <button
            key={item.id}
            className={i === index ? 'on' : ''}
            type="button"
            aria-label={`Ir a la diapositiva ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
      <button className="hero-next" type="button" aria-label="Siguiente" onClick={() => setIndex((i) => (i + 1) % slides.length)}>
        ›
      </button>
    </section>
  )
}
