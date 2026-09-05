const step = document.getElementById('step')

function userStep() {
  step.innerHTML = `
    <div class="field">
      <img src="./loginp1.svg" alt="">
      <input id="company" type="text" maxlength="10" placeholder="CODIGO EMPRESA" autocomplete="off">
    </div>
    <div class="field">
      <img src="./loginp1.svg" alt="">
      <input id="user" type="text" maxlength="14" placeholder="USUARIO" autocomplete="off">
    </div>
    <div class="actions">
      <button class="btn" id="continue" type="button">Continuar</button>
    </div>
  `
  const company = step.querySelector('#company')
  const user = step.querySelector('#user')
  ;[company, user].forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.toUpperCase()
    })
  })
  company.focus()
  step.querySelector('#continue').addEventListener('click', () => {
    if (!company.value.trim() || !user.value.trim()) return
    passwordStep()
  })
}

function passwordStep() {
  step.innerHTML = `
    <div class="field">
      <img src="./loginp1.svg" alt="">
      <input id="password" type="password" maxlength="20" placeholder="CLAVE" autocomplete="current-password">
    </div>
    <div class="actions" style="flex-direction:column;align-items:flex-end">
      <button class="btn" id="login" type="button">Continuar</button>
      <button class="btn btn-outline" id="back" type="button">Volver</button>
    </div>
  `
  const password = step.querySelector('#password')
  const login = step.querySelector('#login')
  password.focus()
  const go = () => {
    if (!password.value.trim()) return
    login.disabled = true
    login.innerHTML = '<span class="spin-btn"></span>'
    setTimeout(() => {
      step.innerHTML = '<div class="loading" role="status" aria-label="Cargando"><div class="ring"></div></div>'
    }, 350)
  }
  login.addEventListener('click', go)
  password.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') go()
  })
  step.querySelector('#back').addEventListener('click', userStep)
}

userStep()
