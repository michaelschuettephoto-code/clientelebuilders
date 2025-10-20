import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Static routes only - no Supabase dependency
const staticRoutes = [
  '/',
  '/blog',
  '/about',
  '/newsletter',
  '/contact',
  '/privacy',
  '/terms',
  '/admin/login',
  '/admin/signup',
  '/admin',
  '/admin/posts',
  '/admin/posts/new',
  '/admin/readme',
]

;(async () => {
  console.log('Starting pre-rendering...')
  
  // Validate build artifacts exist
  if (!fs.existsSync(toAbsolute('dist/index.html'))) {
    console.error('Error: dist/index.html not found. Run build:client first.')
    process.exit(1)
  }

  if (!fs.existsSync(toAbsolute('dist/server/entry-server.js'))) {
    console.error('Error: dist/server/entry-server.js not found. Run build:server first.')
    process.exit(1)
  }

  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
  const { render } = await import('./dist/server/entry-server.js')
  
  console.log(`Pre-rendering ${staticRoutes.length} routes...`)
  
  let successCount = 0
  let errorCount = 0
  
  for (const url of staticRoutes) {
    try {
      const appHtml = render(url)
      const html = template.replace(`<!--app-html-->`, appHtml)
      
      const filePath = url === '/' ? 'dist/index.html' : `dist${url}.html`
      const dir = path.dirname(toAbsolute(filePath))
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      
      fs.writeFileSync(toAbsolute(filePath), html)
      successCount++
      console.log(`✓ ${url}`)
    } catch (error) {
      errorCount++
      console.error(`✗ ${url}:`, error.message)
    }
  }
  
  console.log(`\nPre-rendering complete!`)
  console.log(`Success: ${successCount}, Errors: ${errorCount}`)
  
  if (errorCount > 0) {
    console.warn(`\nWarning: ${errorCount} routes failed to render`)
  }
  
  console.log(`\n✓ Static routes pre-rendered successfully!`)
})()
