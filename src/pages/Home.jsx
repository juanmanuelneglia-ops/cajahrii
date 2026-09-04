import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { faqs, news, products } from '../data'
import './Home.css'

const actions = [
  { title: 'Abrir cuenta', text: 'Abre tu cuenta y gestiona tus finanzas fácilmente.', to: '/abre-tu-cuenta', icon: 'CA' },
  { title: 'Obtener préstamo', text: 'Solicita tu préstamo y alcanza tus objetivos financieros.', to: '/prestamos', icon: '$' },
  { title: 'Abrir plazo fijo', text: 'Haz crecer tus ahorros con seguridad y tasas competitivas.', to: '/productos/plazo-fijo', icon: '%' },
  { title: 'Obtener tarjeta', text: 'Solicita tu tarjeta y aprovecha ventajas exclusivas.', to: '/tarjetas', icon: 'MC' },
]

const loanCats = [
  { id: 'prendarios', label: 'Prendarios' },
  { id: 'personales', label: 'Personales' },
  { id: 'autos', label: 'Vehículos' },
  { id: 'hipotecarios', label: 'Hipotecarios' },
  { id: 'verdes', label: 'Verdes' },
]

export default function Home() {
  const [loan, setLoan] = useState('hipotecarios')
  const [openFaq, setOpenFaq] = useState(0)
  const loans = products.filter((p) => p.category === 'prestamos' && p.filter === loan).slice(0, 3)

  return (
    <>
      <Hero />

      <section className="solutions">
        <div className="wrap">
          <h2>
            Soluciones financieras hechas a tu <span className="mark">medida</span>
          </h2>
          <p className="lead">
            Sabemos lo importante que es contar con el respaldo adecuado para alcanzar tus metas.
            Por eso diseñamos productos que se ajustan a tu momento de vida.
          </p>
          <div className="actions">
            {actions.map((item) => (
              <Link className="action" key={item.title} to={item.to}>
                <span className="action-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="rate">Empezar →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split">
          <div>
            <p className="kicker">Tu oportunidad inmobiliaria</p>
            <h2>Encuentra el espacio o la inversión que buscas</h2>
            <p className="lead">
              Explora catálogos de bienes nuevos y reposeídos. Da el siguiente paso hacia tu hogar
              o una inversión con respaldo.
            </p>
            <div style={{ marginTop: 22 }}>
              <Link className="btn btn-navy" to="/propiedades">
                Ver propiedades
              </Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Vivienda moderna"
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Haz realidad tus proyectos</p>
          <h2>Nuestros préstamos</h2>
          <p className="lead">
            Ya sea un proyecto personal, mejorar tu hogar o emprender, tienes el apoyo para
            avanzar con claridad.
          </p>
          <div className="loan-tabs">
            {loanCats.map((cat) => (
              <button
                key={cat.id}
                className={`chip ${loan === cat.id ? 'active' : ''}`}
                type="button"
                onClick={() => setLoan(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="loan-grid">
            {loans.map((item) => (
              <article className="card" key={item.slug}>
                <img src={item.image} alt="" />
                <div className="card-body">
                  <span className="rate">{item.rate}</span>
                  <h3>{item.name}</h3>
                  <p>{item.summary}</p>
                  <div className="card-actions">
                    <Link className="btn btn-navy" to={`/productos/${item.slug}`}>
                      Solicitar ahora
                    </Link>
                    <Link className="btn btn-ghost" to={`/productos/${item.slug}`}>
                      Más información
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="kicker">Entérate de las</p>
          <h2>Noticias más recientes</h2>
          <div className="news-list">
            {news.slice(0, 4).map((item) => (
              <Link className="news-item" key={item.slug} to={`/noticias/${item.slug}`}>
                <span>{item.date}</span>
                <strong>{item.title}</strong>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 18 }}>
            <Link className="btn btn-ghost" to="/noticias">
              Ver todas las noticias
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="kicker">Respuestas a tus dudas comunes</p>
            <h2>Preguntas frecuentes</h2>
            <div style={{ marginTop: 16 }}>
              {faqs.map((item, i) => (
                <div className="faq-item" key={item.q}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    {item.q}
                    <span>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && <p>{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="kicker">Call center</p>
            <h3>800-2252</h3>
            <p className="lead">atencionalcliente@cajadeahorros.com.pa</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="app-banner" id="app">
            <div>
              <p className="kicker" style={{ color: 'var(--cyan)' }}>
                Descarga nuestra app móvil
              </p>
              <h2>Tu banco en la palma de tu mano</h2>
              <p>
                Accede a tus cuentas, realiza transacciones y consulta saldos desde tu celular.
              </p>
              <div className="stores">
                <span className="store">App Store</span>
                <span className="store">Google Play</span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80"
              alt="App móvil"
              style={{ borderRadius: 18, height: 240, objectFit: 'cover', width: '100%' }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
