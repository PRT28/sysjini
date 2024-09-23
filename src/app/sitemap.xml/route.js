// src/app/sitemap.xml.js

const baseUrl = 'https://sysjini.in'; // Replace with your site's domain

export async function GET() {
  // Define the paths that you want to include in your sitemap
  const staticPages = ['', '/about', '/contact']; // Add your static routes here

  // Fetch dynamic pages if needed
  const dynamicPages = await getDynamicPaths(); // This is an example of fetching dynamic routes

  const allPages = [...staticPages, ...dynamicPages];

  // Create the XML sitemap
  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
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
