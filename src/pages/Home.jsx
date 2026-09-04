import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { faqs, news, products } from '../data'
import { img } from '../media'
import './Home.css'

const actions = [
  { title: 'Abrir cuenta', text: 'Abre tu cuenta y gestiona tus finanzas fácilmente', to: '/cuentas' },
  { title: 'Obtener préstamo', text: 'Solicita tu préstamo y alcanza tus objetivos financieros', to: '/prestamos' },
  { title: 'Abrir plazo fijo', text: 'Haz crecer tus ahorros con seguridad y excelentes tasas', to: '/productos/plazo-fijo' },
  { title: 'Obtener tarjeta', text: 'Solicita tu tarjeta y aprovecha ventajas exclusivas', to: '/tarjetas' },
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
  const featured = products.find((p) => p.category === 'prestamos' && p.filter === loan)

  return (
    <>
      <Hero />

      <section className="solutions">
        <div className="wrap">
          <h2>
            Soluciones financieras hechas a tu <span className="mark">medida</span>
          </h2>
          <p className="lead">
            Sabemos lo importante que es contar con el respaldo adecuado para alcanzar tus metas
            personales. Por eso, ofrecemos soluciones financieras diseñadas para satisfacer tus
            necesidades individuales.
          </p>
          <div className="actions">
            {actions.map((item) => (
              <Link className="action" key={item.title} to={item.to}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section property">
        <div className="wrap split">
          <img src={img.casa} alt="Oportunidad inmobiliaria" />
          <div>
            <h2>Tu oportunidad inmobiliaria</h2>
            <p className="lead">
              Conoce nuestra variedad de opciones disponibles para que encuentres la oportunidad
              ideal. Ya sea que busques un espacio cómodo para ti o una inversión segura, tenemos
              alternativas que se ajustan a tus necesidades.
            </p>
            <p className="lead">
              Explora nuestros catálogos de bienes nuevos y reposeídos y da el siguiente paso hacia
              tu nuevo hogar.
            </p>
            <Link className="btn btn-navy" to="/propiedades">
              Ver catálogos
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Haz realidad tus proyectos con nuestros préstamos</h2>
          <p className="lead">
            Cuentas con el apoyo que necesitas para alcanzar tus metas, ya sea financiar un
            proyecto personal, mejorar tu hogar o emprender nuevos desafíos.
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
          {featured && (
            <article className="loan-feature">
              <img src={featured.image} alt="" />
              <div>
                <h3>{featured.name}</h3>
                <p>{featured.summary}</p>
                <Link className="btn btn-navy" to={featured.slug === 'casa-mas' ? '/casa-mas' : `/productos/${featured.slug}`}>
                  ¡Solicitar ahora!
                </Link>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="kicker">Entérate de las</p>
          <h2>Noticias más recientes</h2>
          <div className="news-grid">
            {news.slice(0, 4).map((item) => (
              <Link className="news-card" key={item.slug} to={`/noticias/${item.slug}`}>
                <img src={img.news[item.slug]} alt="" />
                <div>
                  <span>{item.date}</span>
                  <strong>{item.title}</strong>
                </div>
              </Link>
            ))}
          </div>
          <Link className="btn btn-ghost" to="/noticias">
            Ver todas las noticias
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap split faq-split">
          <div>
            <p className="kicker">Respuestas a tus dudas comunes</p>
            <h2>Preguntas frecuentes</h2>
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
          <aside className="contact-aside">
            <p>Call center</p>
            <strong>800-2252</strong>
            <p>Extranjero o desde celular</p>
            <strong>+507 508-3456</strong>
            <p>atencionalcliente@cajadeahorros.com.pa</p>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split app-row">
          <div>
            <p className="kicker">Descarga nuestra app móvil</p>
            <h2>Tu banco en la palma de tu mano</h2>
            <p className="lead">
              Accede a tus cuentas, realiza transacciones y consulta tus saldos desde la comodidad
              de tu celular.
            </p>
            <div className="stores">
              <span className="store">App Store</span>
              <span className="store">Google Play</span>
            </div>
          </div>
          <img src={img.app} alt="App Banca Móvil" />
        </div>
      </section>
    </>
  )
}
