document.addEventListener('click', (event) => {
  const link = event.target.closest('a')
  if (!link || !link.href) return
  const href = link.getAttribute('href') || ''
  if (href.startsWith('#') || href.startsWith('javascript:')) return

  const rules = [
    [/ecaja\.cajadeahorros\.com\.pa|loginC\.jsp|cajaenlinea/i, '/comercial'],
    [/enlinea\.cajadeahorros\.com\.pa|canales-digitales\/banca-en-linea|\/personal/i, '/banca-en-linea'],
    [/prestamo-de-casa-mas|casa-mas|tus-proyectos-realidad-con-casa-mas/i, '/casa-mas'],
    [/aperturadecuentaca|list-account/i, '/abre-tu-cuenta'],
    [/\/empresas\/?$/i, '/empresas'],
    [/\/cuentas/i, '/cuentas'],
    [/\/tarjetas/i, '/tarjetas'],
    [/\/prestamos/i, '/prestamos'],
    [/\/seguros/i, '/seguros'],
    [/\/propiedades/i, '/propiedades'],
    [/\/sala-de-prensa|\/noticias/i, '/noticias'],
    [/\/contacto|\/andrea/i, '/contacto'],
    [/cajadeahorros\.com\.pa\/?$/i, '/'],
  ]

  for (const [pattern, path] of rules) {
    if (pattern.test(link.href) || pattern.test(href)) {
      event.preventDefault()
      window.top.location.href = path
      return
    }
  }
}, true)
