import { useState } from 'react'

export default function Contacto() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Estamos para ti</p>
          <h1>Contacto y Línea Ética Digital</h1>
          <p className="lead">Call center 800-2252 · atencionalcliente@cajadeahorros.com.pa</p>
        </div>
      </section>
      <section className="page">
        <div className="wrap" style={{ maxWidth: 720 }}>
          {sent ? (
            <div className="toast">Mensaje enviado. Te responderemos en horario hábil.</div>
          ) : (
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <div className="two">
                <div className="field">
                  <label htmlFor="nombre">Nombre</label>
                  <input id="nombre" required />
                </div>
                <div className="field">
                  <label htmlFor="correo">Correo</label>
                  <input id="correo" type="email" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="tema">Tema</label>
                <select id="tema">
                  <option>Consulta de producto</option>
                  <option>Soporte Banca en línea</option>
                  <option>Reclamo</option>
                  <option>Línea Ética Digital</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="msg">Mensaje</label>
                <textarea id="msg" rows="5" required />
              </div>
              <button className="btn btn-navy" type="submit">
                Enviar
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
