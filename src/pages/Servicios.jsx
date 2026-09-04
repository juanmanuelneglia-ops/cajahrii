import { Link } from 'react-router-dom'
import { branches } from '../data'

export default function Servicios() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Servicios</p>
          <h1>Canales y gestiones para tu día a día</h1>
        </div>
      </section>
      <section className="page">
        <div className="wrap grid-cards">
          <article className="card" id="app">
            <div className="card-body">
              <h3>App móvil</h3>
              <p>Lleva tu banco en el bolsillo: saldos, transferencias y pagos.</p>
              <Link className="btn btn-navy" to="/banca-en-linea">
                Ir a canales digitales
              </Link>
            </div>
          </article>
          <article className="card" id="ach">
            <div className="card-body">
              <h3>Transferencias ACH</h3>
              <p>Envía y recibe hacia otros bancos del sistema nacional.</p>
            </div>
          </article>
          <article className="card">
            <div className="card-body">
              <h3>Gestiones</h3>
              <p>Actualización de datos, reclamos y Línea Ética Digital.</p>
              <Link className="btn btn-ghost" to="/contacto">
                Contactar
              </Link>
            </div>
          </article>
        </div>
        <div className="wrap" id="sucursales" style={{ marginTop: 48 }}>
          <h2>Sucursales y cajeros</h2>
          <div className="grid-cards">
            {branches.map((b) => (
              <article className="card" key={b.name}>
                <div className="card-body">
                  <h3>{b.name}</h3>
                  <p>{b.place}</p>
                  <p>{b.hours}</p>
                  <span className="rate">{b.atm ? 'Cajero disponible' : 'Sin cajero en sitio'}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
