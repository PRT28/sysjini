export default function Home() {
    return (
        <>
            <section className="bg-forest-green text-white py-16 md:py-20 text-center rounded-bl-[80px]">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animated-element animate-fade-in-up">Our Comprehensive Services</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto animated-element animate-fade-in-up delay-200">From concept to launch, we provide end-to-end digital solutions tailored to your business needs.</p>
            </section>

            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-forest-green mb-12 animated-element animate-fade-in-up">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <a href='/services/web-and-mobile-app-development' className="bg-white rounded-lg p-8 shadow-lg card-shadow transform hover:scale-105 transition duration-300 hover-darken animated-element animate-scale-in delay-100">
                            <div className="text-center mb-6">
                                <svg className="w-16 h-16 mx-auto text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-4m0 0l4 4m-4-4v-9m4 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v8a2 2 0 01-2 2h-4"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Web & App Development</h3>
                            <p className="text-gray-600 text-center">
                                We craft responsive, fast, and scalable websites and applications using the latest technologies like React.js, Next.js, and more. Your digital presence, perfected for performance and user experience.
                            </p>
                        </a>

                        <a href='/services/digital-marketing-and-seo' className="bg-white rounded-lg p-8 shadow-lg card-shadow transform hover:scale-105 transition duration-300 hover-darken animated-element animate-scale-in delay-200">
                            <div className="text-center mb-6">
                                <svg className="w-16 h-16 mx-auto text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8L11 2m7 12l-3-3m0 0L4 18M4 18h8m-8 0v-8"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Digital Marketing & SEO</h3>
                            <p className="text-gray-600 text-center">
                                Boost your online visibility and reach your target audience with our comprehensive SEO and digital marketing strategies. We drive organic growth, paid campaign efficiency, and brand awareness.
                            </p>
                        </a>

                        <a href='/services/design-and-branding' className="bg-white rounded-lg p-8 shadow-lg card-shadow transform hover:scale-105 transition duration-300 hover-darken animated-element animate-scale-in delay-300">
                            <div className="text-center mb-6">
                                <svg className="w-16 h-16 mx-auto text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Designing & Branding</h3>
                            <p className="text-gray-600 text-center">
                                From captivating UI/UX design to a cohesive brand identity, we create visuals that speak your brand&apos;s language and resonate with your audience. Memorable and impactful design is our forte.
                            </p>
                        </a>

                        <a href='/services/e-commerce-solutions' className="bg-white rounded-lg p-8 shadow-lg card-shadow transform hover:scale-105 transition duration-300 hover-darken animated-element animate-scale-in delay-400">
                            <div className="text-center mb-6">
                                <svg className="w-16 h-16 mx-auto text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">E-commerce Solutions</h3>
                            <p className="text-gray-600 text-center">
                                Build powerful and secure online stores that drive sales. We offer end-to-end e-commerce development, from platform selection to payment gateway integration.
                            </p>
                        </a>

                        <a href='/services/cloud-and-devops' className="bg-white rounded-lg p-8 shadow-lg card-shadow transform hover:scale-105 transition duration-300 hover-darken animated-element animate-scale-in delay-500">
                            <div className="text-center mb-6">
                                <svg className="w-16 h-16 mx-auto text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 005-5V7a2 2 0 00-2-2H7a2 2 0 00-2 2v2m0 0l-2 2h2m0 0l2 2m-2-2h-2m2 2V9m0 0h2m0 0l2-2h-2m0 0V5"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Cloud & DevOps</h3>
                            <p className="text-gray-600 text-center">
                                Optimize your infrastructure with scalable cloud solutions and streamline your development pipeline with robust DevOps practices for efficiency and speed.
                            </p>
                        </a>

                        <a href='/services/ui-ux-consulting' className="bg-white rounded-lg p-8 shadow-lg card-shadow transform hover:scale-105 transition duration-300 hover-darken animated-element animate-scale-in delay-600">
                            <div className="text-center mb-6">
                                <svg className="w-16 h-16 mx-auto text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L12 19.25L14.25 17m-4.5 0h4.5m-4.5 0v-4.5m4.5 0h-4.5m0-4.5v4.5M12 4.75V2m0 0L9.75 4.75M14.25 4.75L12 2"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">UI/UX Consulting</h3>
                            <p className="text-gray-600 text-center">
                                Enhance user satisfaction and engagement with expert UI/UX consulting. We help you create intuitive and visually appealing interfaces.
                            </p>
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-forest-green text-white py-16 md:py-20 rounded-tr-[80px]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 animated-element animate-fade-in-up">Ready to Transform Your Digital Presence?</h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 animated-element animate-fade-in-up delay-100">
                        Let&apos;s discuss your project and turn your vision into a stunning reality.
                    </p>
                    <a href="contact.html" className="bg-white text-forest-green hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animated-element animate-fade-in-up delay-200">
                        Get a Free Consultation
                    </a>
                </div>
            </section>
        </>
    )
}