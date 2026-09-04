import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { properties } from '../data'

export default function Propiedades() {
  const [params] = useSearchParams()
  const initial = params.get('tipo') || 'todos'
  const [tipo, setTipo] = useState(initial)

  const list = useMemo(() => {
    if (tipo === 'todos') return properties
    return properties.filter((p) => p.tipo === tipo)
  }, [tipo])

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Propiedades</p>
          <h1>Tu oportunidad inmobiliaria</h1>
          <p className="lead">
            Bienes nuevos y reposeídos para que encuentres vivienda o inversión con el respaldo de
            Caja de Ahorros.
          </p>
        </div>
      </section>
      <section className="page">
        <div className="wrap">
          <div className="chips">
            {[
              ['todos', 'Todos'],
              ['nuevas', 'Bienes nuevos'],
              ['reposeidas', 'Reposeídos'],
            ].map(([id, label]) => (
              <button key={id} className={`chip ${tipo === id ? 'active' : ''}`} type="button" onClick={() => setTipo(id)}>
                {label}
              </button>
            ))}
          </div>
          <div className="grid-cards">
            {list.map((item) => (
              <article className="card" key={item.id}>
                <img src={item.image} alt="" />
                <div className="card-body">
                  <span className="rate">{item.price}</span>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  <p>
                    {item.beds} hab · {item.baths} baños · {item.area}
                  </p>
                  <a className="btn btn-navy" href="/contacto">
                    Agendar visita
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
