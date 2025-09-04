'use client'
import { CircuitBoard, TechDNAHelix } from "../../../../components/3D"

// Note: Metadata moved to layout.js since this is a client component

export default function EcommerceSolutions() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-mint-50 to-forest-50">
                    <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-mint-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 "></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 "></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-forest-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 "></div>
                </div>

                {/* 3D Circuit Board for E-commerce Infrastructure */}
                <div className="absolute top-10 right-10 w-96 h-96 opacity-40 hidden lg:block">
                    <CircuitBoard />
                </div>

                {/* 3D DNA Helix for Growth */}
                <div className="absolute bottom-10 left-10 w-80 h-80 opacity-30 hidden xl:block">
                    <TechDNAHelix />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-mint-400 to-mint-600 rounded-2xl flex items-center justify-center shadow-green">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                            <span className="bg-gradient-to-r from-mint-600 via-emerald-600 to-forest-700 bg-clip-text text-transparent">
                                E-commerce
                            </span>
                            <br />
                            <span className="text-gray-800">Solutions</span>
                        </h1>

                        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-600 leading-relaxed">
                            Building robust, scalable, and secure online stores that drive sales and provide
                            <span className="text-mint-600 font-semibold"> exceptional shopping experiences</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="/contact" className="btn-primary hover-lift text-lg px-8 py-4">
                                Start Your Store
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
            <section className="py-20 md:py-32 bg-gradient-to-br from-mint-600 via-emerald-600 to-forest-700 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 "></div>
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 "></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Ready to Launch Your Online Store?
                        </h2>
                        <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed">
                            Let&apos;s build a powerful e-commerce platform that converts visitors into customers. Our expert team will create a seamless shopping experience that drives sales and grows your business.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="/contact" className="bg-white text-mint-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-emerald-50">
                                Start Selling Online
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="tel:+917017197678" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-mint-600 transition-all duration-300 transform hover:scale-105">
                                Call: +91 7017197678
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Complete Solutions</h3>
                                <p className="text-emerald-100">Full-featured e-commerce platforms with all integrations</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Secure Payments</h3>
                                <p className="text-emerald-100">Multiple payment gateways with top-level security</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Sales Growth</h3>
                                <p className="text-emerald-100">Optimized for conversions and revenue growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}