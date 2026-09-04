import { Link } from 'react-router-dom'
import { Logo } from './Icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo />
            <p style={{ marginTop: 14 }}>
              Soluciones financieras hechas a tu medida. Cuentas, préstamos, tarjetas y un banco
              que te acompaña en cada meta.
            </p>
            <div className="seals">
              <span className="seal">Superintendencia de Bancos</span>
              <span className="seal">Tu Balboa con Sentido</span>
            </div>
          </div>
          <div>
            <h4>Personas</h4>
            <Link to="/cuentas">Cuentas</Link>
            <Link to="/tarjetas">Tarjetas</Link>
            <Link to="/prestamos">Préstamos</Link>
            <Link to="/casa-mas">Casa Más</Link>
            <Link to="/propiedades">Propiedades</Link>
          </div>
          <div>
            <h4>Canales</h4>
            <Link to="/banca-en-linea">Banca en línea</Link>
            <Link to="/servicios#app">App móvil</Link>
            <Link to="/servicios#sucursales">Sucursales y cajeros</Link>
            <Link to="/abre-tu-cuenta">Abre tu cuenta</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
          <div>
            <h4>Estamos para ti</h4>
            <div className="contact-box">
              <div>
                <strong>Call center</strong>
                <p>800-2252 (800-CAJA)</p>
              </div>
              <div>
                <strong>Correo</strong>
                <p>atencionalcliente@cajadeahorros.com.pa</p>
              </div>
              <Link to="/contacto">Línea Ética Digital</Link>
            </div>
          </div>
        </div>
        <div className="legal">
          <p>© {new Date().getFullYear()} Caja de Ahorros. Todos los derechos reservados. Proyecto demostrativo.</p>
          <p>Aviso de privacidad · Protección de datos personales</p>
        </div>
      </div>
    </footer>
  )
}
