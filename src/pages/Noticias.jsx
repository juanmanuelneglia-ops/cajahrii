import { Link, useParams } from 'react-router-dom'
import { news } from '../data'

export default function Noticias() {
  const { slug } = useParams()
  const article = news.find((n) => n.slug === slug)

  if (slug && article) {
    return (
      <>
        <section className="page-hero">
          <div className="wrap">
            <p className="kicker">{article.date}</p>
            <h1>{article.title}</h1>
          </div>
        </section>
        <section className="page">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <p>
              Caja de Ahorros continúa impulsando iniciativas que fortalecen la inclusión, la
              innovación y la sostenibilidad en Panamá. Esta nota resume el anuncio y su impacto
              para clientes, colaboradores y el país.
            </p>
            <p className="lead" style={{ marginTop: 16 }}>
              Para más información, escribe a atencionalcliente@cajadeahorros.com.pa o llama al
              800-2252.
            </p>
            <Link className="btn btn-ghost" to="/noticias" style={{ marginTop: 20 }}>
              Volver a noticias
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Sala de prensa</p>
          <h1>Noticias más recientes</h1>
        </div>
      </section>
      <section className="page">
        <div className="wrap">
          <div className="grid-cards">
            {news.map((item) => (
              <Link className="card" key={item.slug} to={`/noticias/${item.slug}`}>
                <div className="card-body">
                  <span className="rate">{item.date}</span>
                  <h3>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
