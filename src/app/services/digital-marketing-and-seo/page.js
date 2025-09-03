'use client'
import { TechDNAHelix, CircuitBoard } from "../../../components/3D"

export default function DigitalMarketingAndSEO() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-forest-50 to-sage-50">
                    <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-forest-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-1000"></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-sage-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-500"></div>
                </div>

                {/* 3D DNA Helix for Growth */}
                <div className="absolute top-10 right-10 w-96 h-96 opacity-40 hidden lg:block">
                    <TechDNAHelix />
                </div>

                {/* 3D Circuit Board for Analytics */}
                <div className="absolute bottom-10 left-10 w-80 h-80 opacity-30 hidden xl:block">
                    <CircuitBoard />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-forest-400 to-forest-600 rounded-2xl flex items-center justify-center shadow-green animated-element animate-scale-in">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animated-element animate-fade-in-up">
                            <span className="bg-gradient-to-r from-forest-600 via-emerald-600 to-sage-700 bg-clip-text text-transparent">
                                Digital Marketing
                            </span>
                            <br />
                            <span className="text-gray-800">& SEO Services</span>
                        </h1>

                        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-600 leading-relaxed animated-element animate-fade-in-up delay-200">
                            Boosting your online visibility and driving targeted traffic to achieve your business goals through
                            <span className="text-forest-600 font-semibold"> comprehensive digital marketing strategies</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animated-element animate-fade-in-up delay-400">
                            <a href="#services" className="btn-primary hover-lift text-lg px-8 py-4">
                                Explore Our Services
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>
                            <a href="/contact" className="btn-secondary text-lg px-8 py-4">
                                Get Free Quote
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* What We Offer Section */}
            <section id="services" className="py-20 md:py-32 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-element animate-fade-in-up">
                            <span className="bg-gradient-to-r from-forest-600 to-emerald-700 bg-clip-text text-transparent">
                                What We Offer
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto animated-element animate-fade-in-up delay-200">
                            We provide a full spectrum of digital marketing services designed to enhance your brand&apos;s online presence, engage your target audience, and convert leads into loyal customers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-100">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-forest-400 to-forest-600 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Search Engine Optimization</h3>
                            <p className="text-gray-600 text-center leading-relaxed">On-page, off-page, and technical SEO to improve your search rankings.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-200">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">PPC & Google Ads</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Strategic pay-per-click advertising and Google Ads management for maximum ROI.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-300">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Social Media Marketing</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Strategy and campaign management across all social media platforms.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-400">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-mint-400 to-mint-600 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Content Marketing</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Strategy, creation, and distribution of engaging content that converts.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-500">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-forest-500 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Email Marketing</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Automated email campaigns and marketing automation for lead nurturing.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-600">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-forest-400 to-sage-500 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Analytics & Reporting</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Comprehensive performance tracking and detailed reporting for data-driven decisions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-forest-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-element animate-fade-in-up">
                            <span className="bg-gradient-to-r from-forest-600 to-emerald-700 bg-clip-text text-transparent">
                                Our Key Features
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto animated-element animate-fade-in-up delay-200">
                            We deliver exceptional digital marketing results with data-driven strategies and proven methodologies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-100 group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-forest-400 to-forest-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-forest-600 transition-colors duration-300">Data-Driven Strategies</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Utilizing in-depth analytics and market research to formulate effective marketing plans.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-200 group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-emerald-600 transition-colors duration-300">Targeted Campaigns</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Reaching the right audience with precision to maximize conversion rates.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-300 group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-sage-600 transition-colors duration-300">Transparent Reporting</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Providing clear and regular reports on campaign performance and ROI.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-400 group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-mint-400 to-mint-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-mint-600 transition-colors duration-300">Continuous Optimization</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Constantly analyzing and refining strategies for improved results and efficiency.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-500 group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-forest-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-emerald-600 transition-colors duration-300">Integrated Approach</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Combining various digital channels for a cohesive and powerful marketing presence.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-600 group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-forest-400 to-sage-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-forest-600 transition-colors duration-300">Growth-Oriented Solutions</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Focusing on sustainable growth and long-term success for your business.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve Section */}
            <section className="py-20 md:py-32 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-element animate-fade-in-up">
                            <span className="bg-gradient-to-r from-forest-600 to-emerald-700 bg-clip-text text-transparent">
                                Industries We Serve
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto animated-element animate-fade-in-up delay-200">
                            We have a proven track record of delivering successful digital marketing campaigns across diverse industries, understanding their unique market dynamics and consumer behaviors.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <span className="bg-gradient-to-r from-forest-100 to-forest-200 text-forest-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-100">E-commerce & Retail</span>
                        <span className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-200">Healthcare & Pharma</span>
                        <span className="bg-gradient-to-r from-sage-100 to-sage-200 text-sage-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-300">Real Estate</span>
                        <span className="bg-gradient-to-r from-mint-100 to-mint-200 text-mint-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-400">Education & EdTech</span>
                        <span className="bg-gradient-to-r from-emerald-100 to-forest-200 text-emerald-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-500">Hospitality & Travel</span>
                        <span className="bg-gradient-to-r from-forest-100 to-sage-200 text-forest-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-600">Financial Services</span>
                        <span className="bg-gradient-to-r from-sage-100 to-mint-200 text-sage-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-700">Technology & SaaS</span>
                        <span className="bg-gradient-to-r from-mint-100 to-emerald-200 text-mint-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-800">Automotive</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-forest-600 via-emerald-600 to-sage-700 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-float delay-1000"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 animated-element animate-fade-in-up">
                            Ready to Boost Your Online Presence?
                        </h2>
                        <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed animated-element animate-fade-in-up delay-200">
                            Let&apos;s create data-driven digital marketing campaigns that drive real results. Our expert team is ready to help you reach your target audience and grow your business online.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animated-element animate-fade-in-up delay-400">
                            <a href="/contact" className="bg-white text-forest-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-emerald-50">
                                Get Free Marketing Audit
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="tel:+917500269270" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-forest-600 transition-all duration-300 transform hover:scale-105">
                                Call: +91 7500269270
                            </a>
                        </div>

                        {/* Additional Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animated-element animate-fade-in-up delay-600">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                                <p className="text-emerald-100">Track record of increasing ROI and conversions</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Data-Driven</h3>
                                <p className="text-emerald-100">Analytics-based strategies for maximum impact</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Full Support</h3>
                                <p className="text-emerald-100">Ongoing optimization and campaign management</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}