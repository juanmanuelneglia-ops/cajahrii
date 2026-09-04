import { Link } from 'react-router-dom'
import { products } from '../data'
import './Home.css'

export default function Empresas() {
  const list = products.filter((p) => p.segment === 'empresas')

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Empresas</p>
          <h1>El respaldo que tu negocio necesita para crecer</h1>
          <p className="lead">
            Cuentas, plazos fijos y financiamiento comercial con Caja en Línea para operar con
            agilidad.
          </p>
        </div>
      </section>
      <section className="page">
        <div className="wrap actions" style={{ marginTop: 0 }}>
          <Link className="action" to="/cuentas">
            <span className="action-icon">$</span>
            <h3>Cuentas empresariales</h3>
            <p>Liquidez, chequera y operación digital para el día a día.</p>
          </Link>
          <Link className="action" to="/productos/prestamo-comercial">
            <span className="action-icon">%</span>
            <h3>Financiamiento</h3>
            <p>Capital de trabajo y activos con acompañamiento especializado.</p>
          </Link>
          <Link className="action" to="/banca-en-linea">
            <span className="action-icon">BL</span>
            <h3>Caja en Línea comercial</h3>
            <p>Pagos, transferencias y control de tesorería desde un solo lugar.</p>
          </Link>
          <Link className="action" to="/servicios">
            <span className="action-icon">+</span>
            <h3>Servicios</h3>
            <p>Nómina, ACH y red de sucursales a nivel nacional.</p>
          </Link>
        </div>
        <div className="wrap" style={{ marginTop: 40 }}>
          <h2>Productos para empresas</h2>
          <div className="grid-cards">
            {list.map((item) => (
              <article className="card" key={item.slug}>
                <img src={item.image} alt="" />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>{item.summary}</p>
                  <Link className="btn btn-navy" to={`/productos/${item.slug}`}>
                    Más información
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
