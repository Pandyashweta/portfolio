import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define directories
const clientDistDir = path.join(__dirname, 'dist');
const serverBundlePath = path.join(__dirname, 'dist', 'server', 'entry-server.js');
const SITE_URL = 'https://shw3ta.site';

async function runPrerender() {
  try {
    // 1. Import render and project data from built SSR bundle
    if (!fs.existsSync(serverBundlePath)) {
      throw new Error(`Server bundle not found at ${serverBundlePath}. Run vite build --ssr first.`);
    }
    const serverBundleUrl = pathToFileURL(serverBundlePath).href;
    const {
      render,
      allProjects,
      figmaProjects
    } = await import(serverBundleUrl);
    const projectList = allProjects || figmaProjects;

    // 2. Read index.html template from client build
    const indexHtmlPath = path.join(clientDistDir, 'index.html');
    const template = fs.readFileSync(indexHtmlPath, 'utf-8');

    // 3. Static routes to render
    const routes = [
      {
        url: '/',
        title: 'pandyashweta',
        desc: 'Portfolio of Shweta Pandya. Multidisciplinary builder with hands-on experience across web development, business operations, data analysis, and UI/UX design.',
        type: 'website',
        includeInSitemap: true
      },
      {
        url: '/projects',
        title: 'Work',
        desc: 'Showcase of software engineering, developer tools, and interactive UI/UX design projects created by Shweta Pandya.',
        type: 'website',
        includeInSitemap: true
      },
      {
        url: '/creative',
        title: '404',
        desc: '404 — Page not found.',
        type: 'website',
        includeInSitemap: false
      },
      {
        url: '/404',
        title: '404',
        desc: '404 — Page not found.',
        type: 'website',
        includeInSitemap: false,
        outputFile: '404.html'
      }
    ];

    // Add dynamic project detail routes
    projectList.forEach(proj => {
      const title = proj.title;
      const desc = proj.description || (proj.aboutText ? proj.aboutText.slice(0, 160) : 'Detailed project review and showcase.');
      routes.push({
        url: `/projects/${proj.id}`,
        title,
        desc,
        type: 'article',
        image: proj.image,
        project: proj,
        includeInSitemap: true
      });
    });

    console.log(`Starting SSG Pre-rendering for ${routes.length} routes...`);

    // 4. Generate routes
    for (const route of routes) {
      const appHtml = render(route.url);
      
      // Determine schema
      let schema = null;
      if (route.url === '/') {
        schema = {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${SITE_URL}/#person`,
              "name": "Shweta Pandya",
              "alternateName": "Pandyashweta",
              "jobTitle": "Multidisciplinary Builder & Software Engineer",
              "description": "Multidisciplinary problem solver with hands-on experience across web development, business operations, data analysis, UI/UX design, backend technologies, and product database management.",
              "url": SITE_URL,
              "image": `${SITE_URL}/avatar.png`,
              "email": "mailto:pandyashweta.in@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/pandyashweta/",
                "https://github.com/Pandyashweta",
                "https://www.figma.com/@pandyashweta"
              ],
              "knowsAbout": [
                "Web Development",
                "Business Operations",
                "Data Analysis",
                "UI/UX Design",
                "Backend Technologies",
                "Database Management",
                "Cybersecurity"
              ]
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              "url": SITE_URL,
              "name": "Shweta Pandya Portfolio",
              "description": "Personal portfolio website of Shweta Pandya showcasing software engineering projects, data analytics, and design work.",
              "author": {
                "@id": `${SITE_URL}/#person`
              }
            },
            {
              "@type": "ProfilePage",
              "@id": `${SITE_URL}/#webpage`,
              "url": SITE_URL,
              "name": route.title,
              "description": route.desc,
              "isPartOf": {
                "@id": `${SITE_URL}/#website`
              },
              "mainEntity": {
                "@id": `${SITE_URL}/#person`
              }
            }
          ]
        };
      } else if (route.project) {
        const proj = route.project;
        schema = {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": proj.title,
          "headline": proj.title,
          "description": proj.description || (proj.aboutText ? proj.aboutText.slice(0, 200) : 'Detailed project showcase'),
          "url": `${SITE_URL}/projects/${proj.id}`,
          "image": proj.image ? `${SITE_URL}${proj.image}` : `${SITE_URL}/og-image.png`,
          "author": {
            "@type": "Person",
            "name": "Shweta Pandya",
            "url": SITE_URL
          },
          "creator": {
            "@type": "Person",
            "name": "Shweta Pandya",
            "url": SITE_URL
          },
          "dateCreated": proj.year || "2025",
          "keywords": proj.tags && Array.isArray(proj.tags) ? proj.tags.join(', ') : undefined
        };
      } else if (route.url === '/projects' || route.url === '/projects/category/coding') {
        schema = {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": route.title,
          "description": route.desc,
          "url": `${SITE_URL}${route.url}`,
          "author": {
            "@type": "Person",
            "name": "Shweta Pandya",
            "url": SITE_URL
          }
        };
      } else if (route.url === '/resume') {
        schema = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": route.title,
          "description": route.desc,
          "url": `${SITE_URL}/resume`,
          "author": {
            "@type": "Person",
            "name": "Shweta Pandya",
            "url": SITE_URL
          }
        };
      }

      // Format schema script tag
      const schemaScript = schema 
        ? `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>` 
        : '';

      const canonicalUrl = `${SITE_URL}${route.url === '/' ? '' : route.url}`;
      const ogImageUrl = route.image ? `${SITE_URL}${route.image}` : `${SITE_URL}/og-image.png`;
      const ogType = route.type || 'website';
      const robotsContent = route.includeInSitemap ? 'index, follow' : 'noindex, nofollow';
      const googlebotContent = route.includeInSitemap
        ? 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        : 'noindex, nofollow';
      
      // Build header tags
      const metaTags = `
    <title>${route.title}</title>
    <meta name="description" content="${route.desc.replace(/"/g, '&quot;')}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta name="robots" content="${robotsContent}" />
    <meta name="googlebot" content="${googlebotContent}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:site_name" content="Shweta Pandya Portfolio" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${route.desc.replace(/"/g, '&quot;')}" />
    <meta property="og:image" content="${ogImageUrl}" />
    <meta property="og:image:alt" content="${route.title.replace(/"/g, '&quot;')}" />

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />
    <meta name="twitter:description" content="${route.desc.replace(/"/g, '&quot;')}" />
    <meta name="twitter:image" content="${ogImageUrl}" />
    <meta name="twitter:image:alt" content="${route.title.replace(/"/g, '&quot;')}" />
    
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

      // 5. Write output file
      if (route.outputFile) {
        fs.writeFileSync(path.join(clientDistDir, route.outputFile), html);
      } else if (route.url === '/') {
        fs.writeFileSync(indexHtmlPath, html);
      } else {
        const routeDir = path.join(clientDistDir, route.url);
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, 'index.html'), html);
      }
      
      console.log(`✓ Pre-rendered: ${route.url}`);
    }

    // 6. Generate sitemap.xml
    const today = new Date().toISOString().split('T')[0];
    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    routes.filter(r => r.includeInSitemap).forEach(route => {
      sitemapXml += `  <url>
    <loc>${SITE_URL}${route.url === '/' ? '' : route.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.url === '/' ? '1.0' : '0.8'}</priority>
  </url>
`;
    });

    sitemapXml += `</urlset>`;
    fs.writeFileSync(path.join(clientDistDir, 'sitemap.xml'), sitemapXml);
    console.log('✓ Generated sitemap.xml');

    // 7. Generate robots.txt
    const robotsTxt = `User-agent: *
Allow: /
Disallow: /dist/

Sitemap: ${SITE_URL}/sitemap.xml
`;
    fs.writeFileSync(path.join(clientDistDir, 'robots.txt'), robotsTxt);
    console.log('✓ Generated robots.txt');

    // 8. Clean up server bundle to keep dist clean
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
