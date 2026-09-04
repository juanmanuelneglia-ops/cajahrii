import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BancaEnLinea() {
  const [mode, setMode] = useState('login')
  const [session, setSession] = useState(false)
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const user = String(data.get('usuario') || '')
    const pass = String(data.get('clave') || '')
    if (user.length < 4 || pass.length < 4) {
      setError('Ingresa usuario y clave de al menos 4 caracteres.')
      return
    }
    setError('')
    setSession({ user, saldo: 1840.55, cuenta: '04-210-00123456' })
  }

  if (session) {
    return (
      <section className="page">
        <div className="wrap">
          <p className="kicker">Caja en Línea</p>
          <h1>Hola, {session.user}</h1>
          <div className="grid-cards" style={{ marginTop: 24 }}>
            <article className="card">
              <div className="card-body">
                <span className="rate">Cuenta de ahorros</span>
                <h3>{session.cuenta}</h3>
                <p>Saldo disponible</p>
                <h2>B/. {session.saldo.toFixed(2)}</h2>
              </div>
            </article>
            <article className="card">
              <div className="card-body">
                <h3>Transferir</h3>
                <p>Envía a cuentas propias o a terceros ACH.</p>
                <button className="btn btn-navy" type="button">Nueva transferencia</button>
              </div>
            </article>
            <article className="card">
              <div className="card-body">
                <h3>Pagar</h3>
                <p>Servicios, préstamos y tarjetas en un solo lugar.</p>
                <button className="btn btn-ghost" type="button">Ir a pagos</button>
              </div>
            </article>
          </div>
          <button className="btn btn-ghost" type="button" style={{ marginTop: 20 }} onClick={() => setSession(false)}>
            Cerrar sesión
          </button>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Canales digitales</p>
          <h1>La banca en línea que conecta con todos</h1>
          <p className="lead">
            Gestiona tus finanzas con rapidez y seguridad. Esta pantalla es una demostración.
          </p>
        </div>
      </section>
      <section className="page">
        <div className="wrap login-layout">
          <form className="card" onSubmit={submit}>
            <div className="card-body">
              <div className="chips">
                <button type="button" className={`chip ${mode === 'login' ? 'active' : ''}`} onClick={() => setMode('login')}>
                  Ingresar
                </button>
                <button type="button" className={`chip ${mode === 'afiliar' ? 'active' : ''}`} onClick={() => setMode('afiliar')}>
                  Afíliate aquí
                </button>
              </div>
              <h3>{mode === 'login' ? 'Inicia sesión' : 'Afíliate a Caja en Línea'}</h3>
              <div className="field">
                <label htmlFor="usuario">Usuario o cédula</label>
                <input id="usuario" name="usuario" required />
              </div>
              <div className="field">
                <label htmlFor="clave">Clave</label>
                <input id="clave" name="clave" type="password" required />
              </div>
              {error && <p style={{ color: '#b42318' }}>{error}</p>}
              <button className="btn btn-navy" type="submit">
                {mode === 'login' ? 'Entrar' : 'Continuar afiliación'}
              </button>
              <Link to="/contacto">Olvidé mi usuario o clave</Link>
            </div>
          </form>
          <div>
            <h2>Beneficios</h2>
            <ul>
              <li>Transferencias, pagos y consultas 24/7</li>
              <li>Afiliación con cédula o pasaporte</li>
              <li>Misma experiencia en web y app</li>
              <li>Soporte al 800-2252</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
