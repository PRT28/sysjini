'use client'
import { useState, useEffect } from 'react';

export default function LandingHeader({ onContactClick }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            data-landing-header="true"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-emerald-100'
                    : 'bg-white/90 backdrop-blur-sm py-4 shadow-sm'
            }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo Section */}
                <div className="flex items-center gap-3 animated-element animate-fade-in delay-100">
                    <div className="relative">
                        <img
                            src="/logoGnRm2.png"
                            alt="Sysjini Logo"
                            className="h-12 w-12 rounded-xl shadow-md hover:shadow-green transition-all duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-forest-600/20 rounded-xl"></div>
                    </div>
                    <a href="/" className="text-2xl font-bold text-gray-800 hover:text-emerald-600 transition-all duration-300">
                        Sysjini
                    </a>
                </div>

                {/* Minimal Navigation - Only Contact */}
                <div className="flex items-center gap-4">
                    {/* Contact Button */}
                    <button
                        onClick={onContactClick}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </header>
    );
}
