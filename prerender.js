import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define directories
const clientDistDir = path.join(__dirname, 'dist');
const serverBundlePath = path.join(__dirname, 'dist', 'server', 'entry-server.js');

async function runPrerender() {
  try {
    // 1. Import render and project data from built SSR bundle
    if (!fs.existsSync(serverBundlePath)) {
      throw new Error(`Server bundle not found at ${serverBundlePath}. Run vite build --ssr first.`);
    }
    const serverBundleUrl = pathToFileURL(serverBundlePath).href;
    const { 
      render, 
      figmaProjects, 
      researchProjects
    } = await import(serverBundleUrl);

    // 2. Read index.html template from client build
    const indexHtmlPath = path.join(clientDistDir, 'index.html');
    const template = fs.readFileSync(indexHtmlPath, 'utf-8');

    // 3. Compile all unique project detail IDs
    const activeProjectIds = new Set();
    
    // Add figma detail routes
    figmaProjects.forEach(p => activeProjectIds.add(p.id));
    // Add research detail routes
    researchProjects.forEach(p => activeProjectIds.add(p.id));

    const projectList = [
      ...figmaProjects,
      ...researchProjects
    ].filter((p, i, self) => self.findIndex(x => x.id === p.id) === i);

    // 4. Define static routes to render
    const routes = [
      { url: '/', title: 'shwetapandya', desc: 'Website developed by Shweta to showcase her software development projects.' },
      { url: '/projects', title: 'Projects | Shweta Pandya', desc: 'Showcase of Shweta Pandya\'s UI/UX Design and Research projects.' },
      { url: '/resume', title: 'resume-shwetapandya', desc: 'Resume of Shweta Pandya.' }
    ];

    // Add dynamic project detail routes
    activeProjectIds.forEach(id => {
      const proj = projectList.find(p => p.id === id);
      if (proj) {
        const title = `${proj.title} | Projects | Shweta Pandya`;
        const desc = proj.description || (proj.aboutText ? proj.aboutText.slice(0, 160) : 'Detailed project review and showcase.');
        routes.push({
          url: `/projects/${id}`,
          title,
          desc,
          project: proj
        });
      }
    });

    console.log(`Starting SSG Pre-rendering for ${routes.length} routes...`);

    // 5. Generate routes
    for (const route of routes) {
      const appHtml = render(route.url);
      
      // Determine schema
      let schema = null;
      if (route.url === '/') {
        schema = {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": {
            "@type": "Person",
            "name": "Shweta Pandya",
            "jobTitle": "Multidisciplinary Builder & Software Engineer",
            "description": "Multidisciplinary problem solver with hands-on experience at the intersection of technology, design, and operations.",
            "url": "https://pandyashweta.in",
            "sameAs": [
              "https://www.linkedin.com/in/pandyashweta/",
              "https://github.com/Pandyashweta",
              "https://www.figma.com/@pandyashweta"
            ]
          }
        };
      } else if (route.project) {
        const proj = route.project;
        schema = {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": proj.title,
          "description": proj.description || (proj.aboutText ? proj.aboutText.slice(0, 200) : 'Detailed project showcase'),
          "url": `https://pandyashweta.in/projects/${proj.id}`,
          "creator": {
            "@type": "Person",
            "name": "Shweta Pandya"
          },
          "dateCreated": proj.year || "2025"
        };
      }

      // Format schema script tag
      const schemaScript = schema 
        ? `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>` 
        : '';

      const canonicalUrl = `https://pandyashweta.in${route.url}`;
      
      // Build header tags
      const metaTags = `
    <title>${route.title}</title>
    <meta name="description" content="${route.desc.replace(/"/g, '&quot;')}" />
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${route.desc.replace(/"/g, '&quot;')}" />
    <meta property="og:image" content="https://pandyashweta.in/assets/projects_thumbnail_new.webp" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${canonicalUrl}" />
    <meta property="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />
    <meta property="twitter:description" content="${route.desc.replace(/"/g, '&quot;')}" />
    <meta property="twitter:image" content="https://pandyashweta.in/assets/projects_thumbnail_new.webp" />
    
    ${schemaScript}
      `;

      // Replace template values
      let html = template
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
        // Replace existing title
        .replace(/<title>[^<]*<\/title>/, '')
        // Replace existing description
        .replace(/<meta name="description"[^>]*\/>/, '');

      // Insert our rich SEO tags in the head
      html = html.replace('</head>', `${metaTags}\n  </head>`);

      // 6. Write output file
      if (route.url === '/') {
        fs.writeFileSync(indexHtmlPath, html);
      } else {
        const routeDir = path.join(clientDistDir, route.url);
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, 'index.html'), html);
      }
      
      console.log(`✓ Pre-rendered: ${route.url}`);
    }

    // 7. Generate sitemap.xml
    const today = new Date().toISOString().split('T')[0];
    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    routes.forEach(route => {
      sitemapXml += `  <url>
    <loc>https://pandyashweta.in${route.url === '/' ? '' : route.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.url === '/' ? '1.0' : '0.8'}</priority>
  </url>
`;
    });

    sitemapXml += `</urlset>`;
    fs.writeFileSync(path.join(clientDistDir, 'sitemap.xml'), sitemapXml);
    console.log('✓ Generated sitemap.xml');

    // 8. Generate robots.txt
    const robotsTxt = `User-agent: *
Allow: /
Disallow: /dist/

Sitemap: https://pandyashweta.in/sitemap.xml
`;
    fs.writeFileSync(path.join(clientDistDir, 'robots.txt'), robotsTxt);
    console.log('✓ Generated robots.txt');

    // 9. Clean up server bundle to keep dist clean
    const serverDir = path.join(clientDistDir, 'server');
    if (fs.existsSync(serverDir)) {
      fs.rmSync(serverDir, { recursive: true, force: true });
      console.log('✓ Cleaned up temporary SSR server bundle.');
    }

    console.log('SSG Pre-rendering completed successfully!');
  } catch (error) {
    console.error('Error during SSG Pre-rendering:', error);
    process.exit(1);
  }
}

runPrerender();
