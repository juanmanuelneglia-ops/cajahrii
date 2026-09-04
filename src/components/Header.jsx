import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navMenus } from '../data'
import { IconChevron, IconComputer, IconMenu, IconSearch, Logo } from './Icons'
import './Header.css'

export default function Header({ onSearch }) {
  const location = useLocation()
  const isEmpresas = location.pathname.startsWith('/empresas')
  const [open, setOpen] = useState(false)

  return (
    <header className={`header ${open ? 'open' : ''}`}>
      <div className="topbar">
        <div className="wrap">
          <Link to={isEmpresas ? '/empresas' : '/'} onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav className="segments" aria-label="Segmento">
            <NavLink to="/" className={() => (isEmpresas ? '' : 'active')}>
              Personas
            </NavLink>
            <NavLink to="/empresas" className={() => (isEmpresas ? 'active' : '')}>
              Empresas
            </NavLink>
          </nav>

          <div className="top-actions">
            <button className="search-btn" type="button" onClick={onSearch}>
              <span>Buscar</span>
              <IconSearch />
            </button>
            <Link className="btn btn-ghost" to="/abre-tu-cuenta" onClick={() => setOpen(false)}>
              Abre tu cuenta
            </Link>
            <Link className="btn btn-navy" to="/banca-en-linea" onClick={() => setOpen(false)}>
              <IconComputer /> Banca en línea <IconChevron />
            </Link>
            <button className="menu-btn" type="button" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú">
              <IconMenu />
            </button>
          </div>
        </div>
      </div>

      <nav className="navbar" aria-label="Productos">
        <div className="wrap">
          {navMenus.map((menu) => (
            <div className="nav-item" key={menu.id}>
              <Link to={menu.path}>
                {menu.label} <IconChevron />
              </Link>
              <div className="mega">
                {menu.groups.map((group) => (
                  <div key={group.title}>
                    <h4>{group.title}</h4>
                    {group.links.map((link) => (
                      <Link key={link.path} to={link.path}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>

      <div className="mobile-nav">
        <Link to="/" onClick={() => setOpen(false)}>Personas</Link>
        <Link to="/empresas" onClick={() => setOpen(false)}>Empresas</Link>
        {navMenus.map((menu) => (
          <Link key={menu.id} to={menu.path} onClick={() => setOpen(false)}>
            {menu.label}
          </Link>
        ))}
        <button type="button" onClick={() => { setOpen(false); onSearch() }}>
          Buscar
        </button>
      </div>
    </header>
  )
}
