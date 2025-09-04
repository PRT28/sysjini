import Head from 'next/head';

export default function SEOHead({
  title = "Sysjini - Web Development, App Development & Digital Solutions",
  description = "Sysjini offers cutting-edge web development, app development, SEO, digital marketing, and cloud solutions. Boost your business with secure, scalable, and customized digital services.",
  keywords = "web development, app development, SEO, digital marketing, cloud solutions, mobile app development, e-commerce development, UI/UX design, DevOps, digital transformation",
  canonicalUrl = "https://sysjini.in",
  ogImage = "https://sysjini.in/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData = null,
  noindex = false,
  nofollow = false
}) {
  const fullTitle = title.includes('Sysjini') ? title : `${title} | Sysjini`;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sysjini",
    "url": "https://sysjini.in",
    "logo": "https://sysjini.in/logoGnRm2.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7017197678",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/sysjini",
      "https://wa.me/7017197678"
    ],
    "offers": {
      "@type": "Offer",
      "category": "Digital Services",
      "itemOffered": [
        {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom web application development with modern frameworks"
        },
        {
          "@type": "Service", 
          "name": "Mobile App Development",
          "description": "Native and cross-platform mobile application development"
        },
        {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Search engine optimization to improve online visibility"
        },
        {
          "@type": "Service",
          "name": "Digital Marketing",
          "description": "Comprehensive digital marketing strategies and campaigns"
        },
        {
          "@type": "Service",
          "name": "Cloud Solutions",
          "description": "Cloud infrastructure and DevOps services"
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sysjini" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#059669" />
      
      {/* Robots Meta */}
      <meta 
        name="robots" 
        content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`} 
      />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${title} - Sysjini`} />
      <meta property="og:site_name" content="Sysjini" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${title} - Sysjini`} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
    </Head>
  );
}
