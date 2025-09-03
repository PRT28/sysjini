'use client'
import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';

const ContactModal = ({ isOpen, onClose, autoOpened = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';

            // Small delay to ensure DOM is ready before animation
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 10);

            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
            // Re-enable body scroll when modal is closed
            document.body.style.overflow = 'unset';

            // Reset animation state after close animation
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Cleanup function to restore scroll when component unmounts
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300); // Wait for animation to complete
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    // Don't render anything if modal is not open and not animating
    if (!isOpen && !isAnimating) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 transition-all duration-300 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleBackdropClick}
            style={{
                visibility: isAnimating || isOpen ? 'visible' : 'hidden',
                pointerEvents: isVisible ? 'auto' : 'none'
            }}
        >
            {/* Backdrop */}
            <div className={`absolute inset-0 bg-[#00000060] backdrop-blur-sm transition-opacity duration-300 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}></div>

            {/* Modal Content */}
            <div
                className={`relative w-full max-w-2xl h-full sm:h-auto sm:max-h-[90vh] flex flex-col bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl transform transition-all duration-300 ease-out ${
                    isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'
                } overflow-hidden`}
            >
                {/* Modal Header */}
                <div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 truncate">Get In Touch</h2>
                            <p className="text-gray-600 mt-1 text-sm sm:text-base">
                                {autoOpened
                                    ? "👋 Welcome! Let's discuss your project"
                                    : "Let's discuss your project requirements"
                                }
                            </p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 ml-2"
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Special message for auto-opened modal */}
                    {autoOpened && (
                        <div className="mt-3 p-2 sm:p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-emerald-700 text-xs sm:text-sm font-medium">
                                    🎯 Ready to transform your digital presence? Let&apos;s start the conversation!
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Modal Body - Scrollable */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6">
                    <ContactForm onSuccess={handleClose} isModal={true} />
                </div>

                {/* Modal Footer */}
                <div className="flex-shrink-0 bg-gray-50 border-t border-gray-200 px-4 sm:px-6 py-3 sm:py-4 rounded-b-2xl sm:rounded-b-2xl">
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <div className="flex items-center">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="hidden sm:inline">24h response time</span>
                                <span className="sm:hidden">24h response</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span className="hidden sm:inline">Secure & private</span>
                                <span className="sm:hidden">Secure</span>
                            </div>
                        </div>
                        <button
                            onClick={handleClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-xs sm:text-sm"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
