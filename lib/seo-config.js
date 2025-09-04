// SEO Configuration for Sysjini
export const seoConfig = {
  defaultTitle: "Sysjini - Web Development, App Development & Digital Solutions",
  titleTemplate: "%s | Sysjini",
  defaultDescription: "Sysjini offers cutting-edge web development, app development, SEO, digital marketing, and cloud solutions. Boost your business with secure, scalable, and customized digital services.",
  siteUrl: "https://sysjini.in",
  defaultImage: "/og-image.jpg",
  
  // Page-specific SEO configurations
  pages: {
    home: {
      title: "Sysjini - Web Development, App Development & Digital Solutions",
      description: "Sysjini offers cutting-edge web development, app development, SEO, digital marketing, and cloud solutions. Boost your business with secure, scalable, and customized digital services.",
      keywords: "web development, app development, SEO, digital marketing, cloud solutions, mobile app development, e-commerce development, UI/UX design, DevOps, digital transformation, React, Next.js, Node.js, Python, AWS, Google Cloud",
      path: "/",
    },
    about: {
      title: "About Us - Expert Digital Solutions Team",
      description: "Learn about Sysjini's expert team of developers, designers, and digital marketing specialists. We deliver innovative web development, app development, and digital solutions for businesses worldwide.",
      keywords: "about sysjini, web development team, app development experts, digital marketing specialists, software development company, technology solutions provider",
      path: "/about",
    },
    services: {
      title: "Our Services - Web Development, App Development & Digital Marketing",
      description: "Explore Sysjini's comprehensive digital services: web development, mobile app development, SEO, digital marketing, cloud solutions, UI/UX design, and e-commerce development. Transform your business with our expert solutions.",
      keywords: "web development services, mobile app development, SEO services, digital marketing, cloud solutions, UI/UX design, e-commerce development, DevOps services, digital transformation, custom software development",
      path: "/services",
    },
    contact: {
      title: "Contact Us - Get in Touch with Sysjini | Free Consultation",
      description: "Contact Sysjini for web development, app development, SEO, and digital marketing services. Get a free consultation and quote for your project. Call +91-7500269270 or fill our contact form.",
      keywords: "contact sysjini, web development consultation, app development quote, digital marketing services, free consultation, project inquiry, software development contact",
      path: "/contact",
    },
    blogs: {
      title: "Tech Blogs & Insights | Web Development, Digital Marketing Tips",
      description: "Read the latest tech blogs and insights on web development, mobile app development, digital marketing, SEO, and technology trends. Expert tips and tutorials from Sysjini's development team.",
      keywords: "tech blogs, web development blog, mobile app development blog, digital marketing tips, SEO tips, technology insights, programming tutorials, development best practices",
      path: "/blogs",
    },
    glossary: {
      title: "Tech Glossary | Web Development & Digital Marketing Terms",
      description: "Comprehensive tech glossary explaining web development, digital marketing, SEO, and technology terms. Learn key concepts in software development, programming, and digital solutions.",
      keywords: "tech glossary, web development terms, digital marketing glossary, SEO terms, programming glossary, technology definitions, software development terms",
      path: "/glossary",
    },
    webDevelopment: {
      title: "Web & Mobile App Development Services | React, Next.js, Flutter",
      description: "Professional web and mobile app development services using React, Next.js, Flutter, React Native. Custom web applications, e-commerce solutions, iOS/Android apps, and progressive web apps by expert developers.",
      keywords: "web development, mobile app development, React development, Next.js development, Flutter development, React Native, iOS app development, Android app development, progressive web apps, custom web applications, e-commerce development",
      path: "/services/web-and-mobile-app-development",
    },
    digitalMarketing: {
      title: "Digital Marketing & SEO Services | Boost Your Online Presence",
      description: "Professional digital marketing and SEO services to boost your online presence. Search engine optimization, social media marketing, PPC advertising, content marketing, and analytics by certified experts.",
      keywords: "digital marketing, SEO services, search engine optimization, social media marketing, PPC advertising, content marketing, online marketing, digital advertising, Google Ads, Facebook marketing, Instagram marketing",
      path: "/services/digital-marketing-and-seo",
    },
    designBranding: {
      title: "Design & Branding Services | UI/UX Design, Logo Design",
      description: "Professional design and branding services including UI/UX design, logo design, brand identity, graphic design, and visual branding. Create a memorable brand identity with our expert designers.",
      keywords: "design services, branding services, UI/UX design, logo design, brand identity, graphic design, visual branding, creative design, brand strategy, design consultation",
      path: "/services/design-and-branding",
    },
    ecommerce: {
      title: "E-commerce Solutions | Online Store Development | Shopify, WooCommerce",
      description: "Professional e-commerce development services including Shopify, WooCommerce, custom online stores, payment integration, inventory management, and e-commerce optimization for maximum sales.",
      keywords: "e-commerce development, online store development, Shopify development, WooCommerce development, e-commerce solutions, online shopping, payment integration, inventory management, e-commerce optimization",
      path: "/services/e-commerce-solutions",
    },
    cloudDevops: {
      title: "Cloud & DevOps Services | AWS, Azure, Google Cloud | CI/CD",
      description: "Professional cloud and DevOps services including AWS, Azure, Google Cloud setup, CI/CD pipelines, containerization with Docker, Kubernetes, infrastructure automation, and cloud migration.",
      keywords: "cloud services, DevOps services, AWS services, Azure cloud, Google Cloud Platform, CI/CD pipelines, Docker containerization, Kubernetes, infrastructure automation, cloud migration, DevOps consulting",
      path: "/services/cloud-and-devops",
    },
    uiuxConsulting: {
      title: "UI/UX Consulting Services | User Experience Design | Usability Testing",
      description: "Expert UI/UX consulting services including user experience design, usability testing, design audits, user research, wireframing, prototyping, and design system creation for optimal user engagement.",
      keywords: "UI/UX consulting, user experience design, usability testing, design audit, user research, wireframing, prototyping, design systems, user interface design, UX consulting",
      path: "/services/ui-ux-consulting",
    },
  },
  
  // Organization information
  organization: {
    name: "Sysjini",
    url: "https://sysjini.in",
    logo: "https://sysjini.in/logoGnRm2.png",
    description: "Professional web development, app development, SEO, and digital marketing services",
    address: {
      country: "IN",
      region: "India",
    },
    contact: {
      phone: "+91-7500269270",
      email: "info@sysjini.in",
    },
    social: {
      linkedin: "https://www.linkedin.com/company/sysjini",
      whatsapp: "https://wa.me/7500269270",
    },
  },
  
  // Default Open Graph settings
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sysjini",
  },
  
  // Twitter settings
  twitter: {
    cardType: "summary_large_image",
    site: "@sysjini",
    creator: "@sysjini",
  },
  
  // Additional meta tags
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "theme-color",
      content: "#059669",
    },
    {
      name: "language",
      content: "English",
    },
    {
      name: "geo.region",
      content: "IN",
    },
    {
      name: "geo.country",
      content: "India",
    },
    {
      name: "distribution",
      content: "global",
    },
    {
      name: "rating",
      content: "general",
    },
  ],
  
  // Robots settings
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Helper function to generate page-specific SEO data
export function generateSEOData(pageKey, customData = {}) {
  const pageConfig = seoConfig.pages[pageKey] || seoConfig.pages.home;
  const baseUrl = seoConfig.siteUrl;
  
  return {
    title: customData.title || pageConfig.title,
    description: customData.description || pageConfig.description,
    keywords: customData.keywords || pageConfig.keywords,
    canonical: `${baseUrl}${pageConfig.path}`,
    openGraph: {
      title: customData.title || pageConfig.title,
      description: customData.description || pageConfig.description,
      url: `${baseUrl}${pageConfig.path}`,
      images: [
        {
          url: customData.image || seoConfig.defaultImage,
          width: 1200,
          height: 630,
          alt: `${pageConfig.title} - Sysjini`,
        },
      ],
      type: seoConfig.openGraph.type,
      locale: seoConfig.openGraph.locale,
      siteName: seoConfig.openGraph.siteName,
    },
    twitter: {
      card: seoConfig.twitter.cardType,
      title: customData.title || pageConfig.title,
      description: customData.description || pageConfig.description,
      images: [customData.image || seoConfig.defaultImage],
      site: seoConfig.twitter.site,
      creator: seoConfig.twitter.creator,
    },
  };
}

// Helper function to generate structured data
export function generateStructuredData(type = "organization", customData = {}) {
  const org = seoConfig.organization;
  
  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: org.name,
      url: org.url,
      logo: org.logo,
      description: org.description,
      address: {
        "@type": "PostalAddress",
        addressCountry: org.address.country,
        addressRegion: org.address.region,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: org.contact.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [org.social.linkedin, org.social.whatsapp],
      ...customData,
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: org.name,
      url: org.url,
      description: org.description,
      publisher: {
        "@type": "Organization",
        name: org.name,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${org.url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
      ...customData,
    },
  };
  
  return schemas[type] || schemas.organization;
}
