'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-emerald-100'
                : 'bg-white/90 backdrop-blur-sm py-4 shadow-sm'
        }`}>
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo Section */}
                <div className="flex items-center gap-3 animated-element animate-fade-in delay-100">
                    <div className="relative">
                        <Image
                            src="/logoGnRm2.png"
                            alt="Sysjini Logo"
                            width={48}
                            height={48}
                            className="h-12 w-12 rounded-xl shadow-md hover:shadow-green transition-all duration-300 hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-forest-600/20 rounded-xl"></div>
                    </div>
                    <a href="/" className="text-2xl font-bold text-gray-800 hover:text-emerald-600 transition-all duration-300">
                        Sysjini
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {[
                        { href: '/', label: 'Home' },
                        { href: '/services', label: 'Services' },
                        { href: '/about', label: 'About Us' },
                        { href: '/blogs', label: 'Blogs' },
                        { href: '/glossary', label: 'Glossary' },
                        { href: '/contact', label: 'Contact' }
                    ].map((item, index) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group`}
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-forest-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="/contact"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 rounded-lg hover:bg-emerald-50 transition-colors duration-300 text-gray-700"
                >
                    <svg
                        className={`w-6 h-6 text-gray-700 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${
                isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="bg-white/95 backdrop-blur-md mx-4 mt-2 rounded-2xl border border-emerald-100 shadow-lg">
                    <nav className="py-4">
                        {[
                            { href: '/', label: 'Home' },
                            { href: '/services', label: 'Services' },
                            { href: '/about', label: 'About Us' },
                            { href: '/blogs', label: 'Blogs' },
                            { href: '/glossary', label: 'Glossary' },
                            { href: '/contact', label: 'Contact' }
                        ].map((item, index) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="block px-6 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-300 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="px-6 pt-4">
                            <a
                                href="/contact"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full text-center block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Started
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
