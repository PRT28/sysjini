'use client'
import { useState, useEffect } from 'react';

export default function ClientWrapper({ children, fallback = null, delay = 100 }) {
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);
    
    // Add a small delay to ensure all components are ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Show fallback during SSR and initial client load
  if (!isClient || !isLoaded) {
    return fallback || (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-forest-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return children;
}
