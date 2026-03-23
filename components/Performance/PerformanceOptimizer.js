"use client";

import { useEffect } from "react";

export default function PerformanceOptimizer() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
      });
    });

    if ("caches" in window) {
      caches.keys().then((cacheKeys) => {
        cacheKeys.forEach((cacheKey) => {
          caches.delete(cacheKey);
        });
      });
    }
  }, []);

  return null;
}
