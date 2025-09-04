'use client'
import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/logoGnRm2.png',
        '/og-image.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        });
      }
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        script.defer = true;
      });
    };

    // Implement service worker for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js')
            .then(registration => {
              console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
              console.log('SW registration failed: ', registrationError);
            });
        });
      }
    };

    // Optimize CSS delivery
    const optimizeCSSDelivery = () => {
      // Load non-critical CSS asynchronously
      const nonCriticalCSS = document.querySelectorAll('link[data-async-css]');
      nonCriticalCSS.forEach(link => {
        link.media = 'print';
        link.onload = function() {
          this.media = 'all';
        };
      });
    };

    // Reduce layout shifts
    const reduceLayoutShifts = () => {
      // Add aspect ratio containers for images
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        if (img.naturalWidth && img.naturalHeight) {
          const aspectRatio = (img.naturalHeight / img.naturalWidth) * 100;
          const container = img.parentElement;
          if (container && !container.style.aspectRatio) {
            container.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
          }
        }
      });
    };

    // Optimize animations for performance
    const optimizeAnimations = () => {
      // Respect user's motion preferences
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      if (prefersReducedMotion.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--transition-duration', '0.01ms');
      }

      // Use transform and opacity for animations
      const animatedElements = document.querySelectorAll('[class*="animate-"]');
      animatedElements.forEach(element => {
        element.style.willChange = 'transform, opacity';
      });
    };

    // Monitor Core Web Vitals with custom implementation
    const monitorCoreWebVitals = () => {
      // Monitor LCP (Largest Contentful Paint)
      const observeLCP = () => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }
      };

      // Monitor FID (First Input Delay)
      const observeFID = () => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              console.log('FID:', entry.processingStart - entry.startTime);
            });
          });
          observer.observe({ entryTypes: ['first-input'] });
        }
      };

      // Monitor CLS (Cumulative Layout Shift)
      const observeCLS = () => {
        if ('PerformanceObserver' in window) {
          let clsValue = 0;
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                console.log('CLS:', clsValue);
              }
            });
          });
          observer.observe({ entryTypes: ['layout-shift'] });
        }
      };

      // Monitor FCP (First Contentful Paint)
      const observeFCP = () => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                console.log('FCP:', entry.startTime);
              }
            });
          });
          observer.observe({ entryTypes: ['paint'] });
        }
      };

      // Monitor TTFB (Time to First Byte)
      const observeTTFB = () => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.entryType === 'navigation') {
                console.log('TTFB:', entry.responseStart - entry.requestStart);
              }
            });
          });
          observer.observe({ entryTypes: ['navigation'] });
        }
      };

      // Initialize all observers
      observeLCP();
      observeFID();
      observeCLS();
      observeFCP();
      observeTTFB();
    };

    // Resource hints for better performance
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'images.unsplash.com'
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical origins
      const criticalOrigins = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      criticalOrigins.forEach(origin => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = origin;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Initialize all optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeThirdPartyScripts();
    registerServiceWorker();
    optimizeCSSDelivery();
    reduceLayoutShifts();
    optimizeAnimations();
    monitorCoreWebVitals();
    addResourceHints();

    // Cleanup function
    return () => {
      // Remove any event listeners or observers if needed
    };
  }, []);

  return null; // This component doesn't render anything
}

// Utility function to measure performance
export const measurePerformance = (name, fn) => {
  return (...args) => {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  };
};

// Utility function to debounce expensive operations
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Utility function to throttle scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};
