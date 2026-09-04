import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data'

const steps = ['Producto', 'Tus datos', 'Confirmación']

export default function AbrirCuenta() {
  const [params] = useSearchParams()
  const preset = params.get('producto') || 'ahorro-en-linea'
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    producto: preset,
    nombre: '',
    cedula: '',
    correo: '',
    telefono: '',
    ingresos: '',
  })

  const product = useMemo(
    () => products.find((p) => p.slug === form.producto),
    [form.producto],
  )

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const next = (e) => {
    e.preventDefault()
    if (step < 2) setStep((s) => s + 1)
    else setDone(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Solicitud</p>
          <h1>Abre tu cuenta o solicita un producto</h1>
          <p className="lead">Proceso demostrativo. No se envían datos a un banco real.</p>
        </div>
      </section>
      <section className="page">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="chips">
            {steps.map((label, i) => (
              <span className={`chip ${step === i ? 'active' : ''}`} key={label}>
                {i + 1}. {label}
              </span>
            ))}
          </div>

          {done ? (
            <div className="toast">
              Recibimos tu solicitud de {product?.name}. Un asesor te contactará en horario hábil.
              Número de referencia CA-{Math.floor(100000 + Math.random() * 900000)}.
            </div>
          ) : (
            <form className="form" onSubmit={next}>
              {step === 0 && (
                <div className="field">
                  <label htmlFor="producto">Producto</label>
                  <select id="producto" value={form.producto} onChange={update('producto')}>
                    {products.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                  {product && <p className="lead">{product.summary}</p>}
                </div>
              )}
              {step === 1 && (
                <>
                  <div className="two">
                    <div className="field">
                      <label htmlFor="nombre">Nombre completo</label>
                      <input id="nombre" required value={form.nombre} onChange={update('nombre')} />
                    </div>
                    <div className="field">
                      <label htmlFor="cedula">Cédula o pasaporte</label>
                      <input id="cedula" required value={form.cedula} onChange={update('cedula')} />
                    </div>
                  </div>
                  <div className="two">
                    <div className="field">
                      <label htmlFor="correo">Correo</label>
                      <input id="correo" type="email" required value={form.correo} onChange={update('correo')} />
                    </div>
                    <div className="field">
                      <label htmlFor="telefono">Teléfono</label>
                      <input id="telefono" required value={form.telefono} onChange={update('telefono')} />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="ingresos">Ingresos mensuales aproximados</label>
                    <input id="ingresos" value={form.ingresos} onChange={update('ingresos')} />
                  </div>
                </>
              )}
              {step === 2 && (
                <div className="card">
                  <div className="card-body">
                    <h3>Revisa tu solicitud</h3>
                    <p><strong>Producto:</strong> {product?.name}</p>
                    <p><strong>Nombre:</strong> {form.nombre}</p>
                    <p><strong>Documento:</strong> {form.cedula}</p>
                    <p><strong>Contacto:</strong> {form.correo} · {form.telefono}</p>
                  </div>
                </div>
              )}
              <button className="btn btn-navy" type="submit">
                {step === 2 ? 'Enviar solicitud' : 'Continuar'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
