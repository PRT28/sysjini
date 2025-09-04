// src/app/sitemap.xml.js

const baseUrl = 'https://sysjini.in'; // Replace with your site's domain

export async function GET() {
  // Define the pages with their priorities and change frequencies
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/web-and-mobile-app-development', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/digital-marketing-and-seo', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/design-and-branding', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/e-commerce-solutions', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/cloud-and-devops', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/ui-ux-consulting', priority: '0.8', changefreq: 'monthly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/blogs', priority: '0.6', changefreq: 'weekly' },
    { url: '/glossary', priority: '0.5', changefreq: 'monthly' }
  ];

  // Fetch dynamic pages if needed
  const dynamicPages = await getDynamicPaths(); // This is an example of fetching dynamic routes

  const allPages = [...staticPages, ...dynamicPages];

  // Create the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map((page) => {
          const pageData = typeof page === 'string' ? { url: page, priority: '0.5', changefreq: 'monthly' } : page;
          return `
            <url>
              <loc>${baseUrl}${pageData.url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${pageData.changefreq}</changefreq>
              <priority>${pageData.priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  // Return the response with XML headers
  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

// Example function to fetch dynamic paths (replace with your logic)
async function getDynamicPaths() {
  // Fetch dynamic data here if needed
  // Example: const posts = await fetch('https://api.example.com/posts');
  // return posts.map(post => `/posts/${post.id}`);
  return []; // Replace with actual dynamic paths
}
