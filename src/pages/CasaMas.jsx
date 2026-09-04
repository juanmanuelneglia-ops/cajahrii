import { Link } from 'react-router-dom'
import { CasaMasMark } from '../components/Icons'

export default function CasaMas() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <CasaMasMark />
          <h1>Evítate un tóxico. Haz que pase.</h1>
          <p className="lead">
            Préstamo de consumo con garantía hipotecaria: tasa desde 6%*, desembolso en 15 días**
            y avalúo gratis***.
          </p>
          <div style={{ marginTop: 22 }}>
            <Link className="btn btn-orange" to="/abre-tu-cuenta?producto=casa-mas">
              ¡Solicítalo aquí!
            </Link>
          </div>
        </div>
      </section>
      <section className="page">
        <div className="wrap grid-cards">
          {[
            ['Hasta 90%', 'Del valor del avalúo para impulsar tus proyectos.'],
            ['Hasta 30 años', 'Plazo largo para que la cuota se acomode a ti.'],
            ['Desde 6%*', 'Tasa fija garantizada por cinco años.'],
            ['15 días**', 'Desembolso a tu cuenta de ahorros activa.'],
          ].map(([title, text]) => (
            <article className="card" key={title}>
              <div className="card-body">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: 40 }}>
          <h2>Requisitos de solicitud</h2>
          <ul>
            <li>Cédula de identidad personal vigente</li>
            <li>Carta o certificado de trabajo vigente</li>
            <li>Último talonario de pago o ficha de la Caja de Seguro Social</li>
            <li>Avalúo de la propiedad (gratis desde $80,000.01***)</li>
          </ul>
          <p className="lead" style={{ marginTop: 20 }}>
            *Tasa fija por cinco años; luego se ajusta a la tasa vigente del segmento. **Hasta 15
            días hábiles, sujeto a validación. ***Aplica a financiamientos desde $80,000.01.
            Promoción de referencia vigente hasta el 31 de octubre de 2026.
          </p>
        </div>
      </section>
    </>
  )
}
