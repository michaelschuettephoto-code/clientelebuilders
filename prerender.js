import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define routes to prerender based on App.tsx
const routesToPrerender = [
  '/',
  '/blog',
  '/about',
  '/newsletter',
  '/contact',
  '/privacy',
  '/terms',
  '/admin/login',
  '/admin',
  '/admin/posts',
  '/admin/posts/new',
  '/admin/readme',
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    // Handle nested routes by creating subdirectories
    const filePath = url === '/' ? 'dist/index.html' : `dist${url}.html`
    const dir = path.dirname(toAbsolute(filePath))
    
    // Ensure directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
