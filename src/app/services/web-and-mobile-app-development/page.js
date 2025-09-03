'use client'
import { FloatingTechCube, NetworkNodes } from "../../../../components/3D";

export default function WebAndMobileAppDevelopment() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-forest-50 to-sage-50">
                    <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-forest-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-1000"></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-sage-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-500"></div>
                </div>

                {/* 3D Floating Tech Cube */}
                <div className="absolute top-20 right-20 w-80 h-80 opacity-50 hidden lg:block">
                    <FloatingTechCube />
                </div>

                {/* 3D Network Nodes */}
                <div className="absolute bottom-20 left-20 w-72 h-72 opacity-40 hidden xl:block">
                    <NetworkNodes />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-green animated-element animate-scale-in">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animated-element animate-fade-in-up">
                            <span className="bg-gradient-to-r from-emerald-600 via-forest-600 to-sage-700 bg-clip-text text-transparent">
                                Web & Mobile App
                            </span>
                            <br />
                            <span className="text-gray-800">Development</span>
                        </h1>

                        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-600 leading-relaxed animated-element animate-fade-in-up delay-200">
                            Crafting innovative and robust digital solutions for both web and mobile platforms, ensuring a
                            <span className="text-emerald-600 font-semibold"> seamless user experience </span>
                            and strong online presence.
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
                            <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                                What We Offer
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto animated-element animate-fade-in-up delay-200">
                            We provide comprehensive end-to-end development services for both web and mobile applications. From conceptualization and UI/UX design to development, testing, and deployment, our expertise ensures secure, scalable, and user-friendly solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-100">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Custom Web Applications</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Frontend & Backend development with modern frameworks and technologies.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-200">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-forest-400 to-forest-600 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">E-commerce Solutions</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Complete online store development with payment integration and CMS.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-300">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">iOS App Development</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Native and cross-platform iOS applications with seamless performance.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-400">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-mint-400 to-mint-600 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Android App Development</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Native and cross-platform Android applications optimized for performance.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-500">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-forest-500 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Progressive Web Apps</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Fast, reliable web applications that work offline and feel like native apps.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-600">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-forest-400 to-sage-500 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">UI/UX Design</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Responsive design for web and mobile with focus on user experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-emerald-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-element animate-fade-in-up">
                            <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                                Our Key Features
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto animated-element animate-fade-in-up delay-200">
                            We deliver exceptional digital solutions with cutting-edge features and industry best practices.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-100 group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-emerald-600 transition-colors duration-300">Innovative UI/UX Design</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Crafting visually appealing and intuitive interfaces that ensure a seamless user experience across all devices.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-200 group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-forest-400 to-forest-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-forest-600 transition-colors duration-300">Robust Security</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Implementing industry-best security practices to protect your web and mobile applications and user data.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-300 group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-sage-600 transition-colors duration-300">High Performance</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Optimizing web and mobile apps for speed and efficiency to provide a smooth user experience.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-400 group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-mint-400 to-mint-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-mint-600 transition-colors duration-300">Scalability & Flexibility</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Building scalable architectures that can grow with your business needs and adapt to future changes.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-500 group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-forest-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-emerald-600 transition-colors duration-300">Seamless Integration</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Integrating third-party APIs and services effortlessly to enhance application functionality.</p>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-600 group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-forest-400 to-sage-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-forest-600 transition-colors duration-300">Advanced Analytics</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Incorporating analytics tools to track performance and user behavior for data-driven decisions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve Section */}
            <section className="py-20 md:py-32 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-element animate-fade-in-up">
                            <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                                Industries We Serve
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto animated-element animate-fade-in-up delay-200">
                            Our team has extensive experience delivering tailored development solutions across a wide range of industries, understanding their unique challenges and requirements.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <span className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-100">Healthcare</span>
                        <span className="bg-gradient-to-r from-forest-100 to-forest-200 text-forest-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-200">Fintech</span>
                        <span className="bg-gradient-to-r from-sage-100 to-sage-200 text-sage-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-300">E-commerce</span>
                        <span className="bg-gradient-to-r from-mint-100 to-mint-200 text-mint-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-400">Education</span>
                        <span className="bg-gradient-to-r from-emerald-100 to-forest-200 text-emerald-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-500">Real Estate</span>
                        <span className="bg-gradient-to-r from-forest-100 to-sage-200 text-forest-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-600">Logistics</span>
                        <span className="bg-gradient-to-r from-sage-100 to-mint-200 text-sage-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 animated-element animate-scale-in delay-700">Entertainment</span>
                    </div>
                </div>
            </section>

            {/* Our Expertise Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-emerald-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-element animate-fade-in-up">
                            <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                                Our Technical Expertise
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto animated-element animate-fade-in-up delay-200">
                            We leverage cutting-edge technologies and frameworks to deliver exceptional digital solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Frontend Development</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>React.js, Angular, Vue.js</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>Next.js, Gatsby</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>HTML5, CSS3, JavaScript</li>
                            </ul>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Backend Development</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-center"><span className="w-2 h-2 bg-forest-500 rounded-full mr-3"></span>Node.js (Express)</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-forest-500 rounded-full mr-3"></span>Python (Django, Flask)</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-forest-500 rounded-full mr-3"></span>PHP (Laravel)</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-forest-500 rounded-full mr-3"></span>Ruby on Rails</li>
                            </ul>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-300">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Mobile Development</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-center"><span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>React Native</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>Flutter</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>Native iOS & Android</li>
                            </ul>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-400">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Databases & Cloud</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-center"><span className="w-2 h-2 bg-mint-500 rounded-full mr-3"></span>MongoDB, MySQL, PostgreSQL</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-mint-500 rounded-full mr-3"></span>Firebase, AWS, GCP, Azure</li>
                            </ul>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-500">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">UI/UX Design</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>Figma, Sketch, Adobe XD</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>Wireframing & Prototyping</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>User Research & Testing</li>
                            </ul>
                        </div>

                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-600">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">DevOps & QA</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-center"><span className="w-2 h-2 bg-forest-500 rounded-full mr-3"></span>CI/CD, Docker, Kubernetes</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-forest-500 rounded-full mr-3"></span>Manual & Automated Testing</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-forest-500 rounded-full mr-3"></span>Performance & Security Testing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-emerald-600 via-forest-600 to-sage-700 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-float delay-1000"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 animated-element animate-fade-in-up">
                            Ready to Transform Your Digital Presence?
                        </h2>
                        <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed animated-element animate-fade-in-up delay-200">
                            Let&apos;s collaborate to create innovative web and mobile applications that drive your business forward. Our expert team is ready to bring your vision to life with cutting-edge technology.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animated-element animate-fade-in-up delay-400">
                            <a href="/contact" className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-emerald-50">
                                Get Started Today
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="tel:+917500269270" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105">
                                Call: +91 7500269270
                            </a>
                        </div>

                        {/* Additional Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animated-element animate-fade-in-up delay-600">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
                                <p className="text-emerald-100">Quick turnaround times without compromising quality</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Quality Assured</h3>
                                <p className="text-emerald-100">Rigorous testing and quality control processes</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                                <p className="text-emerald-100">Ongoing support and maintenance services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}