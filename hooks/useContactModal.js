'use client'
import { useState, useEffect } from 'react';

const useContactModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [autoOpened, setAutoOpened] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    // Detect if user comes from Google or Meta ads
    const detectTrafficSource = () => {
        if (typeof window === 'undefined') return null;

        const urlParams = new URLSearchParams(window.location.search);
        const referrer = document.referrer.toLowerCase();
        
        // Check URL parameters for ad campaigns
        const utmSource = urlParams.get('utm_source')?.toLowerCase();
        const utmMedium = urlParams.get('utm_medium')?.toLowerCase();
        const gclid = urlParams.get('gclid'); // Google Ads click ID
        const fbclid = urlParams.get('fbclid'); // Facebook click ID
        
        // Check for Google Ads traffic
        if (gclid || 
            utmSource?.includes('google') || 
            utmMedium?.includes('cpc') ||
            utmMedium?.includes('ppc') ||
            referrer.includes('googleads') ||
            referrer.includes('google.com/aclk')) {
            return 'google_ads';
        }
        
        // Check for Meta (Facebook/Instagram) Ads traffic
        if (fbclid ||
            utmSource?.includes('facebook') ||
            utmSource?.includes('instagram') ||
            utmSource?.includes('meta') ||
            utmMedium?.includes('social') ||
            referrer.includes('facebook.com') ||
            referrer.includes('instagram.com') ||
            referrer.includes('m.facebook.com')) {
            return 'meta_ads';
        }
        
        // Check for other paid traffic indicators
        if (utmMedium?.includes('paid') ||
            utmMedium?.includes('ad') ||
            utmSource?.includes('ads')) {
            return 'paid_traffic';
        }
        
        return 'organic';
    };

    // Check if modal should be shown (not shown in current session)
    const shouldShowModal = () => {
        if (typeof window === 'undefined') return false;
        
        // Check sessionStorage to avoid showing multiple times in same session
        const hasShownInSession = sessionStorage.getItem('contactModalShown');
        return !hasShownInSession && !hasShown;
    };

    // Mark modal as shown
    const markModalAsShown = () => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('contactModalShown', 'true');
        }
        setHasShown(true);
    };

    // Open modal manually
    const openModal = () => {
        setIsModalOpen(true);
        setAutoOpened(false);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setAutoOpened(false);
    };

    // Auto-open modal based on traffic source
    useEffect(() => {
        // Check if modal is enabled via environment variable
        const isModalEnabled = process.env.NEXT_PUBLIC_ENABLE_CONTACT_MODAL !== 'false';
        if (!isModalEnabled || !shouldShowModal()) return;

        // Ensure DOM is fully loaded before proceeding
        const initializeModal = () => {
            const trafficSource = detectTrafficSource();

            if (trafficSource === 'google_ads' || trafficSource === 'meta_ads' || trafficSource === 'paid_traffic') {
                // Open immediately for paid traffic
                console.log(`🎯 Detected ${trafficSource} traffic - opening contact modal immediately`);
                setTimeout(() => {
                    if (shouldShowModal()) {
                        setIsModalOpen(true);
                        setAutoOpened(true);
                        markModalAsShown();
                    }
                }, 800); // Slightly longer delay to ensure page is fully loaded
            } else {
                // Open after configurable delay for organic traffic
                const minDelay = parseInt(process.env.NEXT_PUBLIC_MODAL_DELAY_MIN) || 2500;
                const maxDelay = parseInt(process.env.NEXT_PUBLIC_MODAL_DELAY_MAX) || 3000;
                const delay = Math.random() * (maxDelay - minDelay) + minDelay;

                console.log(`🌱 Organic traffic detected - opening contact modal in ${Math.round(delay)}ms`);

                const timer = setTimeout(() => {
                    if (shouldShowModal()) {
                        setIsModalOpen(true);
                        setAutoOpened(true);
                        markModalAsShown();
                    }
                }, delay);

                return () => clearTimeout(timer);
            }
        };

        // Wait for page to be fully loaded
        if (document.readyState === 'complete') {
            initializeModal();
        } else {
            const handleLoad = () => {
                initializeModal();
                window.removeEventListener('load', handleLoad);
            };
            window.addEventListener('load', handleLoad);

            return () => {
                window.removeEventListener('load', handleLoad);
            };
        }
    }, []);

    // Track modal interactions for analytics
    const trackModalEvent = (event, data = {}) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', event, {
                event_category: 'Contact Modal',
                event_label: autoOpened ? 'Auto Opened' : 'Manual',
                ...data
            });
        }
        
        console.log('Contact Modal Event:', event, data);
    };

    // Track when modal opens
    useEffect(() => {
        if (isModalOpen) {
            trackModalEvent('modal_opened', {
                auto_opened: autoOpened,
                traffic_source: detectTrafficSource()
            });
        }
    }, [isModalOpen, autoOpened]);

    return {
        isModalOpen,
        autoOpened,
        openModal,
        closeModal,
        trackModalEvent
    };
};

export default useContactModal;
