'use client'
import { useState, useEffect, useRef } from 'react';

export default function HydrationSafeAnimation({ 
  children, 
  className = "", 
  animationClass = "animate-fade-in-up",
  delay = 0,
  threshold = 0.1,
  fallback = null 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const element = elementRef.current;
    if (!element) return;

    // Use IntersectionObserver for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isMounted, delay, threshold]);

  // During SSR or before mount, show fallback or static content
  if (!isMounted) {
    return fallback || (
      <div ref={elementRef} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div 
      ref={elementRef} 
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
      style={{
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  );
}

// Hook for intersection observer
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isMounted, options]);

  return [elementRef, isIntersecting && isMounted];
}

// Hydration-safe scroll progress component
export function HydrationSafeScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    const throttledUpdate = throttle(updateScrollProgress, 16); // ~60fps
    window.addEventListener('scroll', throttledUpdate);
    updateScrollProgress(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledUpdate);
    };
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-emerald-500 to-forest-600 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

// Utility function for throttling
function throttle(func, limit) {
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
}

// Hydration-safe counter component
export function HydrationSafeCounter({ end, duration = 2000, className = "" }) {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !isVisible) return;

    let startTime;
    const startCount = 0;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - startCount) + startCount));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isMounted, isVisible, end, duration]);

  return (
    <span ref={ref} className={className}>
      {isMounted ? count : 0}
    </span>
  );
}

// Hydration-safe reveal animation
export function HydrationSafeReveal({ children, direction = 'up', className = "" }) {
  const [ref, isVisible] = useIntersectionObserver();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getTransform = () => {
    if (!isMounted || !isVisible) {
      switch (direction) {
        case 'up': return 'translateY(50px)';
        case 'down': return 'translateY(-50px)';
        case 'left': return 'translateX(50px)';
        case 'right': return 'translateX(-50px)';
        default: return 'translateY(50px)';
      }
    }
    return 'translate(0)';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isMounted && isVisible ? 1 : 0,
        transform: getTransform(),
      }}
    >
      {children}
    </div>
  );
}
