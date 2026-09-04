import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CasaMasMark, Mascot } from './Icons'
import './Hero.css'

const slides = [
  { id: 'casa', type: 'casa' },
  {
    id: 'banca',
    type: 'plain',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=80',
    title: 'La banca en línea que conecta con todos',
    text: 'Transfiere, paga y consulta desde donde estés, con una experiencia renovada.',
    cta: 'Ir a Banca en línea',
    to: '/banca-en-linea',
  },
  {
    id: 'tarjeta',
    type: 'plain',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1800&q=80',
    title: 'La tarjeta que todos quieren',
    text: 'Crédito y débito con beneficios reales para tu día a día.',
    cta: 'Ver tarjetas',
    to: '/tarjetas',
  },
  {
    id: 'app',
    type: 'plain',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1800&q=80',
    title: 'Tu banco en la palma de tu mano',
    text: 'Descarga la app y lleva tus cuentas, pagos y préstamos en el bolsillo.',
    cta: 'Conocer la app',
    to: '/servicios#app',
  },
  {
    id: 'traslado',
    type: 'plain',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80',
    title: 'Trasladá tu hipoteca y respira mejor',
    text: 'Condiciones claras, plazos de hasta 30 años y acompañamiento en cada paso.',
    cta: 'Solicitar traslado',
    to: '/productos/traslado-hipoteca',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 8000)
    return () => clearInterval(id)
  }, [])

  const slide = slides[index]

  return (
    <section className="hero" aria-label="Promociones">
      {slide.type === 'casa' ? (
        <div className="hero-slide casa">
          <div className="hero-inner">
            <div className="scene">
              <img
                className="person"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80"
                alt="Cliente revisando su teléfono"
              />
              <div className="phone" />
              <div className="bubble b1">Tasa de interés desde 6%*</div>
              <div className="bubble b2">Desembolso en 15 días**</div>
              <div className="bubble b3">Avalúo gratis***</div>
              <div className="toxic t1">Tu tasa subió</div>
              <div className="toxic t2">Nuevo cargo</div>
              <div className="toxic t3">Otro trámite</div>
            </div>

            <div className="hero-copy">
              <h1>
                Evítate un tóxico.
                <br />
                Haz que pase con
              </h1>
              <CasaMasMark />
              <p className="sub">Préstamos con garantía hipotecaria</p>
            </div>

            <div className="hero-right">
              <div className="badge-wrap">
                <Mascot />
                <div className="ribbon">GARANTIZADO</div>
              </div>
              <Link className="btn btn-orange" to="/casa-mas">
                ¡Solicítalo aquí!
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="hero-slide plain hero-plain" style={{ backgroundImage: `url(${slide.image})` }}>
          <div className="hero-inner">
            <h1>{slide.title}</h1>
            <p className="sub">{slide.text}</p>
            <Link className="btn btn-orange" to={slide.to}>
              {slide.cta}
            </Link>
          </div>
        </div>
      )}

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
