document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('error', () => {
    img.style.display = 'none'
  })
})

const styles = document.createElement('style')
styles.textContent = `
  .ca-pass { width: 100%; max-width: 500px; }
  .ca-pass__hello {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 8px 0 28px;
  }
  .ca-pass__avatar {
    width: 72px;
    height: 72px;
    min-width: 72px;
    border-radius: 12px;
    background: #0b6cb3;
    display: grid;
    place-items: center;
    overflow: hidden;
  }
  .ca-pass__copy p:first-child {
    font-size: 16px;
    font-weight: 600;
    color: #06243e;
    margin: 0 0 4px;
  }
  .ca-pass__copy p:last-child {
    font-size: 12px;
    color: #506578;
    margin: 0;
    line-height: 1.4;
  }
  .ca-pass .z-input { position: relative; }
  .ca-pass__eye {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    background: transparent;
    padding: 0;
    cursor: pointer;
    color: #7b8b99;
  }
  .ca-pass .z-button.disabled {
    pointer-events: none;
    opacity: .45;
  }
  .ca-spinner-btn {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255,255,255,.35);
    border-top-color: #fff;
    border-radius: 50%;
    animation: ca-spin .7s linear infinite;
  }
  .ca-loading {
    min-height: 280px;
    display: grid;
    place-items: center;
    width: 100%;
  }
  .ca-loading__ring {
    width: 48px;
    height: 48px;
    border: 4px solid #d7e4ef;
    border-top-color: #005199;
    border-radius: 50%;
    animation: ca-spin .7s linear infinite;
  }
  @keyframes ca-spin {
    to { transform: rotate(360deg); }
  }
`
document.head.appendChild(styles)

function usernameInput() {
  return document.querySelector('input[placeholder="Usuario"]')
}

function continueButton() {
  return [...document.querySelectorAll('button')].find((button) =>
    /^continuar/i.test((button.textContent || '').trim()),
  )
}

function formRoot() {
  return document.querySelector('personal-user-login-form section')
}

let userStepHtml = ''

function syncContinue() {
  const input = usernameInput()
  const button = continueButton()
  if (!input || !button) return
  const ready = input.value.trim().length > 0
  button.classList.toggle('disabled', !ready)
  button.disabled = !ready
  button.style.pointerEvents = ready ? 'auto' : 'none'
}

function passwordMarkup() {
  return `
    <div class="ca-pass">
      <div class="ca-pass__hello">
        <div class="ca-pass__avatar" aria-hidden="true">
          <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="29" cy="22" r="10" fill="#f4d7a8"/>
            <ellipse cx="18" cy="16" rx="6" ry="8" fill="#3b2a1a"/>
            <ellipse cx="40" cy="16" rx="6" ry="8" fill="#3b2a1a"/>
            <circle cx="25" cy="21" r="2" fill="#1a1a1a"/>
            <circle cx="33" cy="21" r="2" fill="#1a1a1a"/>
            <path d="M26 26c1.6 1.4 4.4 1.4 6 0" stroke="#1a1a1a" stroke-width="1.4" stroke-linecap="round"/>
            <path d="M16 36c4 10 22 10 26 0 0 12-26 12-26 0z" fill="#0a4f86"/>
          </svg>
        </div>
        <div class="ca-pass__copy">
          <p>Hola</p>
          <p>Asegúrate de que esta sea tu imagen de confianza antes de ingresar tu contraseña</p>
        </div>
      </div>
      <label for="password" class="text-[12px] font-medium text-[#06243E]"> Contraseña </label>
      <div class="relative flex items-center w-full z-input">
        <input id="password" type="password" placeholder="Contraseña" class="z-input__input" autocomplete="current-password">
        <button type="button" class="ca-pass__eye" data-toggle-password aria-label="Mostrar contraseña">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </button>
      </div>
      <p class="text-[12px] cursor-pointer text-gray-400 hover:underline self-end mt-3" style="text-align:right">¿Olvidaste tu contraseña?</p>
      <button type="button" class="gap-3 items-center justify-center mt-8 z-button z-primary flex flex-row disabled" data-login disabled> Iniciar sesión </button>
      <button type="button" class="z-button z-primary-outline max-w-[500px] mt-4" data-back> Volver </button>
    </div>
  `
}

function showUserStep() {
  const root = formRoot()
  if (!root || !userStepHtml) return
  root.innerHTML = userStepHtml
  syncContinue()
  usernameInput()?.focus()
}

function showPasswordStep() {
  const root = formRoot()
  if (!root) return
  if (!userStepHtml) userStepHtml = root.innerHTML
  root.innerHTML = passwordMarkup()
  const password = root.querySelector('#password')
  const login = root.querySelector('[data-login]')
  const toggle = root.querySelector('[data-toggle-password]')
  const back = root.querySelector('[data-back]')

  password?.focus()
  password?.addEventListener('input', () => {
    const ready = password.value.trim().length > 0
    login.classList.toggle('disabled', !ready)
    login.disabled = !ready
  })
  toggle?.addEventListener('click', () => {
    password.type = password.type === 'password' ? 'text' : 'password'
  })
  back?.addEventListener('click', showUserStep)
  login?.addEventListener('click', () => {
    if (!password.value.trim()) return
    showLoading()
  })
  password?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && password.value.trim()) {
      event.preventDefault()
      showLoading()
    }
  })
}

function showLoading() {
  const root = formRoot()
  if (!root) return
  const login = root.querySelector('[data-login]')
  if (login) {
    login.disabled = true
    login.classList.add('disabled')
    login.innerHTML = '<span class="ca-spinner-btn" aria-hidden="true"></span>'
  }
  const back = root.querySelector('[data-back]')
  if (back) back.disabled = true
  setTimeout(() => {
    root.innerHTML = '<div class="ca-loading" role="status" aria-label="Cargando"><div class="ca-loading__ring"></div></div>'
  }, 350)
}

document.addEventListener('input', syncContinue)
document.addEventListener('click', (event) => {
  const logo = event.target.closest('z-icon[name="ca-logo-white"]')
  if (logo) {
    event.preventDefault()
    window.top.location.href = '/'
    return
  }

  const contact = event.target.closest('.cursor-pointer')
  if (contact && /contáctanos/i.test(contact.textContent || '')) {
    event.preventDefault()
    window.top.location.href = '/contacto'
    return
  }

  const button = event.target.closest('button')
  if (button && continueButton() && button === continueButton()) {
    if (!usernameInput()?.value.trim()) return
    event.preventDefault()
    event.stopPropagation()
    showPasswordStep()
  }
}, true)

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return
  if (event.target === usernameInput() && usernameInput()?.value.trim()) {
    event.preventDefault()
    showPasswordStep()
  }
})

syncContinue()
