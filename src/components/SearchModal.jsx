import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { products, news } from '../data'
import { IconClose } from './Icons'
import './Widgets.css'

export default function SearchModal({ onClose }) {
  const [q, setQ] = useState('')

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (term.length < 2) return []
    const prod = products
      .filter((p) => `${p.name} ${p.summary}`.toLowerCase().includes(term))
      .map((p) => ({ to: `/productos/${p.slug}`, title: p.name, hint: p.summary }))
    const notes = news
      .filter((n) => n.title.toLowerCase().includes(term))
      .map((n) => ({ to: `/noticias/${n.slug}`, title: n.title, hint: n.date }))
    return [...prod, ...notes].slice(0, 8)
  }, [q])

  return (
    <div className="search-modal" onClick={onClose}>
      <div className="search-box" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Buscar en Caja de Ahorros</h3>
          <button className="close" type="button" onClick={onClose} aria-label="Cerrar">
            <IconClose />
          </button>
        </div>
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cuentas, Casa Más, sucursales..."
        />
        {results.map((item) => (
          <Link className="result" key={item.to} to={item.to} onClick={onClose}>
            <strong>{item.title}</strong>
            <span>{item.hint}</span>
          </Link>
        ))}
        {q.length >= 2 && results.length === 0 && <p>No encontramos resultados para “{q}”.</p>}
      </div>
    </div>
  )
}
