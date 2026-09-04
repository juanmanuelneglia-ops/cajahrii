import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { catalogMeta, products } from '../data'

export default function Catalog() {
  const category = useLocation().pathname.replace('/', '')
  const meta = catalogMeta[category] || catalogMeta.cuentas
  const [filter, setFilter] = useState('todos')

  useEffect(() => {
    setFilter('todos')
  }, [category])

  const list = useMemo(() => {
    return products.filter((p) => {
      if (p.category !== category) return false
      if (filter === 'todos') return true
      return p.filter === filter
    })
  }, [category, filter])

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">{meta.kicker}</p>
          <h1>{meta.title}</h1>
          <p className="lead">{meta.lead}</p>
        </div>
      </section>
      <section className="page">
        <div className="wrap">
          <div className="chips">
            {meta.filters.map((item) => (
              <button
                key={item.id}
                className={`chip ${filter === item.id ? 'active' : ''}`}
                type="button"
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="grid-cards">
            {list.map((item) => (
              <article className="card" key={item.slug}>
                <img src={item.image} alt="" />
                <div className="card-body">
                  <span className="rate">{item.rate}</span>
                  <h3>{item.name}</h3>
                  <p>{item.summary}</p>
                  <ul>
                    {item.benefits.slice(0, 3).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="card-actions">
                    <Link className="btn btn-navy" to={item.slug === 'casa-mas' ? '/casa-mas' : `/productos/${item.slug}`}>
                      Solicitar ahora
                    </Link>
                    <Link className="btn btn-ghost" to={item.slug === 'casa-mas' ? '/casa-mas' : `/productos/${item.slug}`}>
                      Más información
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {list.length === 0 && <p>No hay productos en esta categoría por ahora.</p>}
        </div>
      </section>
    </>
  )
}
