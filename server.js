import { createServer } from 'node:http'
import { existsSync, readFileSync, statSync } from 'node:fs'
import { extname, join, normalize, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('./dist', import.meta.url)))
const port = Number(process.env.PORT) || 3000

const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
}

function safeFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0])
  const target = normalize(join(root, clean))
  if (!target.startsWith(root + sep) && target !== root) return null
  return target
}

function send(res, code, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(code, { 'Content-Type': type })
  res.end(body)
}

const server = createServer((req, res) => {
  const requested = safeFile(req.url || '/')
  if (!requested) return send(res, 400, 'Bad request')

  let file = requested
  try {
    if (statSync(file).isDirectory()) file = join(file, 'index.html')
  } catch {
    file = join(root, 'index.html')
  }

  if (!existsSync(file)) file = join(root, 'index.html')
  if (!existsSync(file)) return send(res, 500, 'Build missing. Run npm run build.')

  try {
    send(res, 200, readFileSync(file), types[extname(file)] || 'application/octet-stream')
  } catch {
    send(res, 404, 'Not found')
  }
})

server.listen(port, '0.0.0.0', () => {
  console.log(`Caja de Ahorros listening on ${port}`)
})
