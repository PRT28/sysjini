import Image from "next/image";

export default function About() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-forest-50 to-sage-50">
                    <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-forest-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-1000"></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-sage-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-500"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animated-element animate-fade-in-up">
                            <span className="bg-gradient-to-r from-emerald-600 via-forest-600 to-sage-700 bg-clip-text text-transparent">
                                About
                            </span>
                            <br />
                            <span className="text-gray-800">Sysjini</span>
                        </h1>

                        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-600 leading-relaxed animated-element animate-fade-in-up delay-200">
                            Discover our story, mission, and the
                            <span className="text-emerald-600 font-semibold"> passionate team </span>
                            behind our digital solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animated-element animate-fade-in-up delay-400">
                            <a href="#story" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                                Our Story
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>
                            <a href="/contact" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                                Join Our Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section id="story" className="py-20 md:py-32 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 animated-element animate-fade-in-up">
                                <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                                    Who We Are
                                </span>
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8 animated-element animate-fade-in-up delay-100">
                                At Sysjini, we believe in the power of innovation and creativity to transform businesses. We are a team of passionate experts dedicated to delivering bespoke digital solutions that not only meet but exceed your expectations.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8 animated-element animate-fade-in-up delay-200">
                                Founded with a vision to empower businesses in the digital realm, Sysjini brings together a diverse group of talented individuals specializing in web and app development, digital marketing, SEO, and cutting-edge design.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6 animated-element animate-fade-in-up delay-300">
                                <div className="text-center p-4 modern-card rounded-xl">
                                    <div className="text-3xl font-bold text-emerald-600 mb-2">5+</div>
                                    <div className="text-gray-600">Years Experience</div>
                                </div>
                                <div className="text-center p-4 modern-card rounded-xl">
                                    <div className="text-3xl font-bold text-forest-600 mb-2">100+</div>
                                    <div className="text-gray-600">Projects Delivered</div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center items-center animated-element animate-scale-in delay-400">
                            <div className="relative">
                                <div className="modern-card p-4 rounded-3xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                        alt="Our Team"
                                        width={500}
                                        height={350}
                                        className="rounded-2xl w-full h-auto shadow-lg"
                                    />
                                </div>
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-200 rounded-full animate-pulse opacity-60"></div>
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-forest-200 rounded-full animate-pulse opacity-60 delay-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-emerald-50 to-forest-50 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-64 h-64 bg-forest-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-1000"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-element animate-fade-in-up">
                            <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                                Our Mission & Values
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto animated-element animate-fade-in-up delay-200">
                            The principles that guide us in delivering exceptional digital solutions and building lasting relationships.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="modern-card hover-lift p-8 rounded-2xl text-center animated-element animate-scale-in delay-100">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-green">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-200 rounded-full animate-pulse"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Constantly exploring new technologies and creative approaches to deliver groundbreaking solutions that push boundaries.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="modern-card hover-lift p-8 rounded-2xl text-center animated-element animate-scale-in delay-200">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-forest-400 to-forest-600 rounded-2xl flex items-center justify-center shadow-green">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-forest-200 rounded-full animate-pulse delay-300"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Client Success</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our ultimate goal is the success of our clients, building long-term partnerships based on trust and mutual growth.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="modern-card hover-lift p-8 rounded-2xl text-center animated-element animate-scale-in delay-300">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center shadow-green">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-sage-200 rounded-full animate-pulse delay-600"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Integrity</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Upholding the highest ethical standards in all our interactions and projects, ensuring transparency and honesty.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}