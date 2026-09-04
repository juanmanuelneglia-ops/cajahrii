import { Link } from 'react-router-dom'
import { Logo } from './Icons'
import { img } from '../media'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo white />
          <table className="phones">
            <tbody>
              <tr><td>Call center</td><td>800-2252</td></tr>
              <tr><td>Extranjero</td><td>+507 508-3456</td></tr>
              <tr><td>A.N.D.R.E.A</td><td>+507 6949-0076</td></tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4>Conócenos</h4>
          <Link to="/contacto">Acerca de nosotros</Link>
          <Link to="/noticias">Sala de prensa</Link>
          <Link to="/contacto">Sostenibilidad</Link>
          <Link to="/contacto">Trabaja con nosotros</Link>
        </div>
        <div>
          <h4>Servicios bancarios</h4>
          <Link to="/banca-en-linea">Banca en línea</Link>
          <Link to="/servicios#sucursales">Cajeros automáticos</Link>
          <Link to="/servicios">Caja amiga</Link>
          <Link to="/servicios#ach">Transferencias</Link>
        </div>
        <div>
          <h4>Enlaces de interés</h4>
          <Link to="/propiedades">Propiedades</Link>
          <Link to="/noticias">Sala de prensa</Link>
          <Link to="/contacto">Aviso de privacidad</Link>
          <Link to="/contacto">Tarifario</Link>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="wrap">
          <span>Aviso de Privacidad · Recomendaciones de Seguridad</span>
          <span>Copyright © {new Date().getFullYear()} Caja de Ahorros. Todos los derechos reservados.</span>
        </div>
      </div>
      <div className="seals-bar">
        <div className="wrap">
          <div className="seals">
            <img src={img.super} alt="Superintendencia de Bancos" />
            <img src={img.balboa} alt="Tu Balboa con Sentido" />
          </div>
          <div className="etica">
            <div>
              <strong>Línea Ética Digital</strong>
              <span>Tu canal privado de denuncias</span>
            </div>
            <img src={img.etica} alt="" width="32" height="32" />
          </div>
        </div>
      </div>
    </footer>
  )
}
