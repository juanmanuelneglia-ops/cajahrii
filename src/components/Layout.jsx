import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SearchModal from './SearchModal'
import { AccessibilityFab, ChatFab } from './Widgets'

export default function Layout() {
  const [search, setSearch] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const titles = {
      '/': 'Caja de Ahorros | Personas',
      '/empresas': 'Caja de Ahorros | Empresas',
      '/cuentas': 'Cuentas | Caja de Ahorros',
      '/tarjetas': 'Tarjetas | Caja de Ahorros',
      '/prestamos': 'Préstamos | Caja de Ahorros',
      '/seguros': 'Seguros y asistencias | Caja de Ahorros',
      '/casa-mas': 'Casa Más | Caja de Ahorros',
      '/abre-tu-cuenta': 'Abre tu cuenta | Caja de Ahorros',
      '/banca-en-linea': 'Banca en línea | Caja de Ahorros',
      '/propiedades': 'Propiedades | Caja de Ahorros',
      '/servicios': 'Servicios | Caja de Ahorros',
      '/noticias': 'Noticias | Caja de Ahorros',
      '/contacto': 'Contacto | Caja de Ahorros',
    }
    document.title = titles[location.pathname] || 'Caja de Ahorros'
  }, [location.pathname])

  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <Header onSearch={() => setSearch(true)} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <AccessibilityFab />
      <ChatFab />
      {search && <SearchModal onClose={() => setSearch(false)} />}
    </>
  )
}
