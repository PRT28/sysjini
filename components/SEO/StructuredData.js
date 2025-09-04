export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sysjini",
  "url": "https://sysjini.in",
  "logo": "https://sysjini.in/logoGnRm2.png",
  "description": "Sysjini offers cutting-edge web development, app development, SEO, digital marketing, and cloud solutions. Boost your business with secure, scalable, and customized digital services.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7017197678",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"],
    "areaServed": "Worldwide"
  },
  "sameAs": [
    "https://www.linkedin.com/company/sysjini",
    "https://wa.me/7017197678"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom web application development with modern frameworks like React, Next.js, and Node.js"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Native and cross-platform mobile application development for iOS and Android"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Search engine optimization to improve online visibility and organic traffic"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing",
          "description": "Comprehensive digital marketing strategies including social media and PPC advertising"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Solutions",
          "description": "Cloud infrastructure setup and DevOps services with AWS, Azure, and Google Cloud"
        }
      }
    ]
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sysjini",
  "url": "https://sysjini.in",
  "description": "Professional web development, app development, SEO, and digital marketing services",
  "publisher": {
    "@type": "Organization",
    "name": "Sysjini"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://sysjini.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sysjini",
  "image": "https://sysjini.in/logoGnRm2.png",
  "url": "https://sysjini.in",
  "telephone": "+91-7017197678",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "India"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/sysjini"
  ]
};

export const serviceSchema = (serviceName, description, url) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "url": url,
  "provider": {
    "@type": "Organization",
    "name": "Sysjini",
    "url": "https://sysjini.in"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": serviceName,
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": serviceName,
          "description": description
        }
      }
    ]
  }
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const articleSchema = (title, description, author, datePublished, dateModified, url, image) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Person",
    "name": author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Sysjini",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sysjini.in/logoGnRm2.png"
    }
  },
  "datePublished": datePublished,
  "dateModified": dateModified,
  "url": url,
  "image": image,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  }
});

export const reviewSchema = (reviews) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sysjini",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": reviews.length.toString()
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5"
    },
    "reviewBody": review.text
  }))
});

// Component to inject structured data
export default function StructuredData({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
