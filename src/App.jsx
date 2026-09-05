import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import OficialHome from './pages/OficialHome'
import Empresas from './pages/Empresas'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import CasaMas from './pages/CasaMas'
import AbrirCuenta from './pages/AbrirCuenta'
import BancaEnLinea from './pages/BancaEnLinea'
import Comercial from './pages/Comercial'
import Propiedades from './pages/Propiedades'
import Servicios from './pages/Servicios'
import Noticias from './pages/Noticias'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OficialHome />} />
      <Route path="/banca-en-linea" element={<BancaEnLinea />} />
      <Route path="/personal" element={<BancaEnLinea />} />
      <Route path="/comercial" element={<Comercial />} />
      <Route element={<Layout />}>
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/cuentas" element={<Catalog />} />
        <Route path="/tarjetas" element={<Catalog />} />
        <Route path="/prestamos" element={<Catalog />} />
        <Route path="/seguros" element={<Catalog />} />
        <Route path="/productos/:slug" element={<Product />} />
        <Route path="/casa-mas" element={<CasaMas />} />
        <Route path="/abre-tu-cuenta" element={<AbrirCuenta />} />
        <Route path="/propiedades" element={<Propiedades />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:slug" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
