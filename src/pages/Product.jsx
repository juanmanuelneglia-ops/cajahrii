import { Link, useParams } from 'react-router-dom'
import { products } from '../data'

export default function Product() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <section className="page">
        <div className="wrap">
          <h1>Producto no encontrado</h1>
          <Link className="btn btn-navy" to="/cuentas">
            Volver a cuentas
          </Link>
        </div>
      </section>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="lead">{product.summary}</p>
        </div>
      </section>
      <section className="page">
        <div className="wrap product-layout">
          <div>
            <img src={product.image} alt="" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 20 }} />
            <h2 style={{ margin: '24px 0 12px' }}>Beneficios</h2>
            <ul>
              {product.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <h2 style={{ margin: '24px 0 12px' }}>Requisitos habituales</h2>
            <ul>
              <li>Cédula o pasaporte vigente</li>
              <li>Comprobante de ingresos o ficha de la CSS, según el producto</li>
              <li>Evaluación crediticia y políticas vigentes de la entidad</li>
            </ul>
          </div>
          <aside className="card">
            <div className="card-body">
              <span className="rate">{product.rate}</span>
              <h3>Solicítalo en minutos</h3>
              <p>Completa tus datos y un asesor te contactará para continuar el proceso.</p>
              <Link className="btn btn-orange" to={`/abre-tu-cuenta?producto=${product.slug}`}>
                Solicitar ahora
              </Link>
              <Link className="btn btn-ghost" to="/contacto">
                Hablar con un asesor
              </Link>
            </div>
          </aside>
        </div>
        <div className="wrap related">
          <h2>Productos relacionados</h2>
          <div className="grid-cards">
            {related.map((item) => (
              <Link className="card" key={item.slug} to={`/productos/${item.slug}`}>
                <img src={item.image} alt="" />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
