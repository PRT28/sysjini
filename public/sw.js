const CACHE_NAME = 'sysjini-v1.0.0';
const STATIC_CACHE_NAME = 'sysjini-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'sysjini-dynamic-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/blogs',
  '/glossary',
  '/logoGnRm2.png',
  '/favicon.ico',
  '/site.webmanifest'
];

// Assets to cache on first request
const DYNAMIC_ASSETS = [
  '/services/web-and-mobile-app-development',
  '/services/digital-marketing-and-seo',
  '/services/design-and-branding',
  '/services/e-commerce-solutions',
  '/services/cloud-and-devops',
  '/services/ui-ux-consulting'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');

  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Error caching static assets', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Skip API requests
  if (url.pathname.startsWith('/api/')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache', request.url);
          return cachedResponse;
        }

        // Clone the request for caching
        const fetchRequest = request.clone();

        return fetch(fetchRequest)
          .then((response) => {
            // Check if response is valid
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response for caching
            const responseToCache = response.clone();

            // Determine which cache to use
            const cacheName = STATIC_ASSETS.includes(url.pathname)
              ? STATIC_CACHE_NAME
              : DYNAMIC_CACHE_NAME;

            // Cache the response
            caches.open(cacheName)
              .then((cache) => {
                console.log('Service Worker: Caching new resource', request.url);
                cache.put(request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('Service Worker: Fetch failed', error);
            throw error;
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  }
});

// Helper function to sync contact form data
async function syncContactForm() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE_NAME);
    const requests = await cache.keys();

    const contactFormRequests = requests.filter(request =>
      request.url.includes('/api/contact') && request.method === 'POST'
    );

    for (const request of contactFormRequests) {
      try {
        await fetch(request);
        await cache.delete(request);
        console.log('Service Worker: Contact form synced successfully');
      } catch (error) {
        console.error('Service Worker: Failed to sync contact form', error);
      }
    }
  } catch (error) {
    console.error('Service Worker: Error in syncContactForm', error);
  }
}