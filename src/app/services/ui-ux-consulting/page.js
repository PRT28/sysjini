'use client'
import { TechDNAHelix, HolographicCode } from "../../../../components/3D"

export default function UIUXConsulting() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-sage-50 to-mint-50">
                    <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-sage-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-mint-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-1000"></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-500"></div>
                </div>

                {/* 3D DNA Helix for User Journey */}
                <div className="absolute top-10 right-10 w-96 h-96 opacity-40 hidden lg:block">
                    <TechDNAHelix />
                </div>

                {/* 3D Holographic Code for Design Process */}
                <div className="absolute bottom-10 left-10 w-80 h-80 opacity-30 hidden xl:block">
                    <HolographicCode />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center shadow-green animated-element animate-scale-in">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animated-element animate-fade-in-up">
                            <span className="bg-gradient-to-r from-sage-600 via-mint-600 to-emerald-700 bg-clip-text text-transparent">
                                UI/UX Consulting
                            </span>
                            <br />
                            <span className="text-gray-800">Services</span>
                        </h1>

                        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-600 leading-relaxed animated-element animate-fade-in-up delay-200">
                            We provide comprehensive UI/UX consulting services to help businesses create intuitive, engaging, and accessible digital products through
                            <span className="text-sage-600 font-semibold"> strategic design thinking</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animated-element animate-fade-in-up delay-400">
                            <a href="/contact" className="btn-primary hover-lift text-lg px-8 py-4">
                                Improve Your UX
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="/contact" className="btn-secondary text-lg px-8 py-4">
                                Get Free Quote
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-sage-600 via-mint-600 to-emerald-700 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-float delay-1000"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 animated-element animate-fade-in-up">
                            Ready to Enhance Your User Experience?
                        </h2>
                        <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed animated-element animate-fade-in-up delay-200">
                            Let&apos;s create intuitive and engaging user experiences that delight your users and drive business growth. Our UX experts will help you design products that users love.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animated-element animate-fade-in-up delay-400">
                            <a href="/contact" className="bg-white text-sage-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-emerald-50">
                                Start UX Consultation
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="tel:+917500269270" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-sage-600 transition-all duration-300 transform hover:scale-105">
                                Call: +91 7500269270
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animated-element animate-fade-in-up delay-600">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">User Research</h3>
                                <p className="text-emerald-100">Deep insights into user behavior and preferences</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Design Systems</h3>
                                <p className="text-emerald-100">Consistent and scalable design frameworks</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Usability Testing</h3>
                                <p className="text-emerald-100">Validated designs through user testing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}