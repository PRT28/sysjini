'use client'
import { useState, useEffect } from 'react'
import NoSSR from "../../../components/NoSSR/NoSSR"
import ErrorBoundary from "../../../components/ErrorBoundary/ErrorBoundary"
// Note: Metadata moved to layout.js since this is a client component

export default function Services() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-forest-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }
    return (
        <ErrorBoundary>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-forest-50 to-sage-50">
                    <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-forest-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-sage-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                            <span className="bg-gradient-to-r from-emerald-600 via-forest-600 to-sage-700 bg-clip-text text-transparent">
                                Our Comprehensive
                            </span>
                            <br />
                            <span className="text-gray-800">Services</span>
                        </h1>

                        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-600 leading-relaxed">
                            From concept to launch, we provide
                            <span className="text-emerald-600 font-semibold"> end-to-end digital solutions </span>
                            tailored to your business needs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="#services" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                                Explore Services
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>
                            <a href="/contact" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                                Get Quote
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 md:py-32 relative">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                                What We Offer
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive digital solutions designed to elevate your business and drive measurable results.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <a href='/services/web-and-mobile-app-development' className="modern-card hover-lift p-8 rounded-2xl text-center group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-green group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-200 rounded-full"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">Web & App Development</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We craft responsive, fast, and scalable websites and applications using the latest technologies like React.js, Next.js, and more. Your digital presence, perfected for performance and user experience.
                            </p>
                            <div className="mt-6 text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                Learn More →
                            </div>
                        </a>

                        <a href='/services/digital-marketing-and-seo' className="modern-card hover-lift p-8 rounded-2xl text-center group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-forest-400 to-forest-600 rounded-2xl flex items-center justify-center shadow-green group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-forest-200 rounded-full"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-forest-600 transition-colors duration-300">Digital Marketing & SEO</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Boost your online visibility and reach your target audience with our comprehensive SEO and digital marketing strategies. We drive organic growth, paid campaign efficiency, and brand awareness.
                            </p>
                            <div className="mt-6 text-forest-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                Learn More →
                            </div>
                        </a>

                        <a href='/services/design-and-branding' className="modern-card hover-lift p-8 rounded-2xl text-center  group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center shadow-green group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-sage-200 rounded-full "></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-sage-600 transition-colors duration-300">Designing & Branding</h3>
                            <p className="text-gray-600 leading-relaxed">
                                From captivating UI/UX design to a cohesive brand identity, we create visuals that speak your brand&apos;s language and resonate with your audience. Memorable and impactful design is our forte.
                            </p>
                            <div className="mt-6 text-sage-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                Learn More →
                            </div>
                        </a>

                        <a href='/services/e-commerce-solutions' className="modern-card hover-lift p-8 rounded-2xl text-center  group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-mint-400 to-mint-600 rounded-2xl flex items-center justify-center shadow-green group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-mint-200 rounded-full "></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-mint-600 transition-colors duration-300">E-commerce Solutions</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Build powerful and secure online stores that drive sales. We offer end-to-end e-commerce development, from platform selection to payment gateway integration.
                            </p>
                            <div className="mt-6 text-mint-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                Learn More →
                            </div>
                        </a>

                        <a href='/services/cloud-and-devops' className="modern-card hover-lift p-8 rounded-2xl text-center  group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-500 to-forest-500 rounded-2xl flex items-center justify-center shadow-green group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-5-5V8a2 2 0 00-2-2H6a2 2 0 00-2 2v7z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-200 rounded-full "></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">Cloud & DevOps</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Optimize your infrastructure with scalable cloud solutions and streamline your development pipeline with robust DevOps practices for efficiency and speed.
                            </p>
                            <div className="mt-6 text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                Learn More →
                            </div>
                        </a>

                        <a href='/services/ui-ux-consulting' className="modern-card hover-lift p-8 rounded-2xl text-center  group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-forest-400 to-sage-500 rounded-2xl flex items-center justify-center shadow-green group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-forest-200 rounded-full "></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-forest-600 transition-colors duration-300">UI/UX Consulting</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Enhance user satisfaction and engagement with expert UI/UX consulting. We help you create intuitive and visually appealing interfaces.
                            </p>
                            <div className="mt-6 text-forest-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                Learn More →
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Background with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-forest-600 to-sage-700">
                    <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Ready to Transform Your
                            <span className="block bg-gradient-to-r from-emerald-200 to-mint-200 bg-clip-text text-transparent">
                                Digital Presence?
                            </span>
                        </h2>

                        <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Let&apos;s discuss your project and turn your vision into a stunning reality.
                            Get started with a free consultation today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a
                                href="/contact"
                                className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold py-4 px-10 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg"
                            >
                                Get a Free Consultation
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>

                            <a
                                href="tel:+917017197678"
                                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 text-lg"
                            >
                                Call Now: +91 7017197678
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>
    )
}