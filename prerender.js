import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import { supabase } from './prerender-supabase.js'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Fetch dynamic routes
async function fetchDynamicRoutes() {
  const routes = []
  
  try {
    // Fetch all published posts
    const { data: posts, error: postsError } = await supabase
      .from('posts')
      .select('slug')
      .eq('is_published', true)
    
    if (postsError) {
      console.error('Error fetching posts:', postsError)
    } else if (posts) {
      posts.forEach(post => {
        routes.push(`/story/${post.slug}`)
      })
    }
    
    // Fetch all tags
    const { data: tags, error: tagsError } = await supabase
      .from('tags')
      .select('slug')
    
    if (tagsError) {
      console.error('Error fetching tags:', tagsError)
    } else if (tags) {
      tags.forEach(tag => {
        routes.push(`/tag/${tag.slug}`)
      })
    }
  } catch (error) {
    console.error('Error fetching dynamic routes:', error)
  }
  
  return routes
}

// Fetch data for a specific route
async function fetchRouteData(url) {
  try {
    if (url.startsWith('/story/')) {
      const slug = url.replace('/story/', '')
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          tags:post_tags(
            tags(name, slug)
          )
        `)
        .eq('slug', slug)
        .eq('is_published', true)
        .single()
      
      return error ? null : { post: data }
    }
    
    if (url.startsWith('/tag/')) {
      const slug = url.replace('/tag/', '')
      const { data: tagData, error: tagError } = await supabase
        .from('tags')
        .select('*')
        .eq('slug', slug)
        .single()
      
      if (tagError) return null
      
      const { data: postTags, error: postTagsError } = await supabase
        .from('post_tags')
        .select(`
          posts(*)
        `)
        .eq('tag_id', tagData.id)
      
      if (postTagsError) return null
      
      const posts = postTags
        .map(pt => pt.posts)
        .filter(post => post.is_published)
        .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))
      
      return { tag: tagData, posts }
    }
    
    if (url === '/' || url === '/blog') {
      const { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        .eq('is_published', true)
        .order('publish_date', { ascending: false })
        .limit(url === '/' ? 4 : 100)
      
      return error ? null : { posts }
    }
  } catch (error) {
    console.error(`Error fetching data for ${url}:`, error)
  }
  
  return null
}

// Static routes
const staticRoutes = [
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
  console.log('Starting pre-rendering...')
  
  // Fetch dynamic routes
  const dynamicRoutes = await fetchDynamicRoutes()
  const allRoutes = [...staticRoutes, ...dynamicRoutes]
  
  console.log(`Pre-rendering ${allRoutes.length} routes...`)
  
  let successCount = 0
  let errorCount = 0
  
  for (const url of allRoutes) {
    try {
      // Fetch data for this route
      const initialData = await fetchRouteData(url)
      
      // Render with data
      const appHtml = render(url, initialData)
      const html = template.replace(`<!--app-html-->`, appHtml)
      
      // Handle nested routes by creating subdirectories
      const filePath = url === '/' ? 'dist/index.html' : `dist${url}.html`
      const dir = path.dirname(toAbsolute(filePath))
      
      // Ensure directory exists
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
})()
