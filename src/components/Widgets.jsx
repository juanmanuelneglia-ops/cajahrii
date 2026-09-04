import { useState } from 'react'
import { IconAccess, IconClose, IconHeadset } from './Icons'
import './Widgets.css'

export function AccessibilityFab() {
  const [open, setOpen] = useState(false)

  const toggle = (cls) => {
    document.body.classList.toggle(cls)
  }

  return (
    <>
      <button className="fab fab-access" type="button" aria-label="Accesibilidad" onClick={() => setOpen((v) => !v)}>
        <IconAccess />
      </button>
      {open && (
        <div className="panel">
          <h3>Accesibilidad</h3>
          <label>
            <input type="checkbox" onChange={() => toggle('a11y-lg')} /> Texto más grande
          </label>
          <label>
            <input type="checkbox" onChange={() => toggle('a11y-contrast')} /> Alto contraste
          </label>
          <label>
            <input type="checkbox" onChange={() => toggle('a11y-spacing')} /> Más espaciado
          </label>
        </div>
      )}
    </>
  )
}

export function ChatFab() {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hola, soy A.N.D.R.E.A. ¿En qué te puedo orientar hoy?' },
  ])

  const send = (event) => {
    event.preventDefault()
    if (!text.trim()) return
    const next = text.trim()
    setMessages((list) => [
      ...list,
      { from: 'me', text: next },
      {
        from: 'bot',
        text: 'Puedo ayudarte con cuentas, Casa Más o sucursales. También puedes llamar al 800-2252.',
      },
    ])
    setText('')
  }

  return (
    <>
      <button className="fab fab-chat" type="button" aria-label="Chatea con ANDREA" onClick={() => setOpen((v) => !v)}>
        <IconHeadset />
      </button>
      {open && (
        <div className="chat">
          <div className="chat-head">
            <strong>Chatea con A.N.D.R.E.A</strong>
            <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar">
              <IconClose />
            </button>
          </div>
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div className={`msg ${msg.from === 'me' ? 'me' : ''}`} key={i}>
                {msg.text}
              </div>
            ))}
          </div>
          <form className="chat-form" onSubmit={send}>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Escribe tu consulta" />
            <button className="btn btn-navy" type="submit">
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  )
}
