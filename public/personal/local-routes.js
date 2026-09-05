document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('error', () => {
    img.style.display = 'none'
  })
})

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
  }
}, true)
