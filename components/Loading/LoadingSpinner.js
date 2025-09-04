'use client'
import { useState, useEffect } from 'react';

export default function LoadingSpinner({ 
  size = 'medium', 
  color = 'emerald', 
  message = 'Loading...', 
  showMessage = true,
  fullScreen = false,
  delay = 0 
}) {
  const [isVisible, setIsVisible] = useState(delay === 0);

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  const sizeClasses = {
    small: 'h-6 w-6',
    medium: 'h-12 w-12',
    large: 'h-16 w-16',
    xlarge: 'h-24 w-24'
  };

  const colorClasses = {
    emerald: 'border-emerald-600',
    forest: 'border-forest-600',
    sage: 'border-sage-600',
    gray: 'border-gray-600'
  };

  const containerClasses = fullScreen 
    ? 'min-h-screen bg-gradient-to-br from-emerald-50 to-forest-50 flex items-center justify-center'
    : 'flex items-center justify-center p-4';

  if (!isVisible) {
    return null;
  }

  return (
    <div className={containerClasses}>
      <div className="text-center">
        <div className={`animate-spin rounded-full border-b-2 ${sizeClasses[size]} ${colorClasses[color]} mx-auto ${showMessage ? 'mb-4' : ''}`}></div>
        {showMessage && (
          <p className="text-gray-600 animate-pulse">{message}</p>
        )}
      </div>
    </div>
  );
}

// Skeleton loader component
export function SkeletonLoader({ className = "", lines = 3, height = "h-4" }) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div 
          key={index}
          className={`bg-gray-200 rounded ${height} ${index < lines - 1 ? 'mb-2' : ''}`}
          style={{ width: `${Math.random() * 40 + 60}%` }}
        ></div>
      ))}
    </div>
  );
}

// Card skeleton loader
export function CardSkeleton({ className = "" }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
      <div className="space-y-2">
        <div className="bg-gray-200 rounded h-4 w-3/4"></div>
        <div className="bg-gray-200 rounded h-4 w-1/2"></div>
        <div className="bg-gray-200 rounded h-4 w-5/6"></div>
      </div>
    </div>
  );
}

// Page loading component with progress
export function PageLoader({ progress = 0, message = "Loading page..." }) {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayProgress(prev => {
        if (prev < progress) {
          return Math.min(prev + 2, progress);
        }
        return prev;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-forest-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="mb-8">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Sysjini</h2>
          <p className="text-gray-600">{message}</p>
        </div>
        
        {progress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-forest-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${displayProgress}%` }}
            ></div>
          </div>
        )}
        
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Hydration-safe loading wrapper
export function HydrationLoader({ children, fallback = null, timeout = 3000 }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [showTimeout, setShowTimeout] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    setIsHydrated(true);

    // Set timeout for slow hydration
    const timer = setTimeout(() => {
      setShowTimeout(true);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout]);

  if (!isHydrated) {
    return fallback || <LoadingSpinner fullScreen message="Initializing..." />;
  }

  if (showTimeout && !isHydrated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-forest-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="mb-6">
            <svg className="w-16 h-16 text-yellow-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Taking longer than expected</h2>
          <p className="text-gray-600 mb-4">The page is still loading. Please wait a moment.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return children;
}

// Progressive loading component
export function ProgressiveLoader({ stages = [], currentStage = 0 }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-forest-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="mb-8">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading</h2>
        </div>
        
        <div className="space-y-2">
          {stages.map((stage, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full ${
                index < currentStage ? 'bg-green-500' : 
                index === currentStage ? 'bg-emerald-500 animate-pulse' : 
                'bg-gray-300'
              }`}></div>
              <span className={`text-sm ${
                index <= currentStage ? 'text-gray-800' : 'text-gray-500'
              }`}>
                {stage}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
