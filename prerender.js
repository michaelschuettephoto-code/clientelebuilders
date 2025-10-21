import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { supabase } from './prerender-supabase.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Import the server render function
async function importServerModule() {
  try {
    const serverModule = await import('./dist/server/entry-server.js');
    return serverModule.render;
  } catch (error) {
    console.error('Failed to import server module:', error);
    console.log('Skipping prerender - SSR bundle not found');
    return null;
  }
}

async function prerender() {
  console.log('Starting prerender process...');

  const render = await importServerModule();
  if (!render) {
    return;
  }

  // Read the client-side HTML template
  const template = fs.readFileSync(
    path.resolve(__dirname, 'dist/index.html'),
    'utf-8'
  );

  // Define static routes
  const staticRoutes = [
    { path: '/', title: 'Home' },
    { path: '/blog', title: 'Blog' },
    { path: '/about', title: 'About' },
    { path: '/newsletter', title: 'Newsletter' },
    { path: '/contact', title: 'Contact' },
    { path: '/privacy', title: 'Privacy Policy' },
    { path: '/terms', title: 'Terms of Service' },
  ];

  // Fetch dynamic routes from Supabase
  console.log('Fetching blog posts...');
  const { data: posts } = await supabase
    .from('posts')
    .select('slug, title')
    .eq('is_published', true);

  console.log('Fetching tags...');
  const { data: tags } = await supabase
    .from('tags')
    .select('slug, name');

  // Build dynamic routes
  const dynamicRoutes = [
    ...(posts || []).map(post => ({
      path: `/story/${post.slug}`,
      title: post.title,
    })),
    ...(tags || []).map(tag => ({
      path: `/tag/${tag.slug}`,
      title: `Tag: ${tag.name}`,
    })),
  ];

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  console.log(`Pre-rendering ${allRoutes.length} routes...`);

  // Pre-render each route
  for (const route of allRoutes) {
    try {
      console.log(`Rendering ${route.path}...`);
      
      const { html: appHtml } = render(route.path);
      
      // Replace the placeholder with the rendered app HTML
      let finalHtml = template.replace('<!--app-html-->', appHtml);
      
      // Optionally update the title tag
      finalHtml = finalHtml.replace(
        /<title>.*?<\/title>/,
        `<title>${route.title}</title>`
      );

      // Determine output path
      let outputPath;
      if (route.path === '/') {
        outputPath = path.resolve(__dirname, 'dist/index.html');
      } else {
        const routePath = route.path.replace(/^\//, '');
        const dir = path.resolve(__dirname, 'dist', routePath);
        fs.mkdirSync(dir, { recursive: true });
        outputPath = path.join(dir, 'index.html');
      }

      // Write the pre-rendered HTML
      fs.writeFileSync(outputPath, finalHtml);
      console.log(`✓ Generated ${outputPath}`);
    } catch (error) {
      console.error(`Error rendering ${route.path}:`, error);
    }
  }

  console.log('Prerender completed successfully!');
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
