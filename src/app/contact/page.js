
import ContactForm from '../../../components/ContactForm/ContactForm';

export default function Contact() {
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

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animated-element animate-fade-in-up">
                            <span className="bg-gradient-to-r from-emerald-600 via-forest-600 to-sage-700 bg-clip-text text-transparent">
                                Get in Touch
                            </span>
                            <br />
                            <span className="text-gray-800">with Sysjini</span>
                        </h1>

                        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-600 leading-relaxed animated-element animate-fade-in-up delay-200">
                            We&apos;d love to hear from you. Reach out to discuss your project or
                            <span className="text-emerald-600 font-semibold"> any inquiries </span>
                            you might have.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animated-element animate-fade-in-up delay-400">
                            <a href="#contact-form" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                                Send Message
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>
                            <a href="tel:+917500269270" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                                Call Now: +91 7500269270
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="py-20 md:py-32 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 animated-element animate-fade-in-up">
                                <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                                    Send Us a Message
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 animated-element animate-fade-in-up delay-100">
                                Ready to start your project? Fill out the form below and we&apos;ll get back to you within 24 hours.
                            </p>

                            <ContactForm />
                        </div>
                        {/* Contact Information */}
                        <div className="animated-element animate-fade-in-up delay-300">
                            <h3 className="text-3xl font-bold mb-8">
                                <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                                    Contact Information
                                </span>
                            </h3>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-center p-4 modern-card rounded-xl hover-lift">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Email</p>
                                        <p className="text-gray-600">info@sysjini.in</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 modern-card rounded-xl hover-lift">
                                    <div className="w-12 h-12 bg-gradient-to-br from-forest-400 to-forest-600 rounded-xl flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Phone</p>
                                        <p className="text-gray-600">+91 7500269270</p>
                                    </div>
                                </div>

                                <div className="flex items-start p-4 modern-card rounded-xl hover-lift">
                                    <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-600 rounded-xl flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Address</p>
                                        <p className="text-gray-600">Hyderabad, Telangana<br />India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="modern-card p-4 rounded-2xl">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.0402333749!2d78.12787485!3d17.412608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="300"
                                    style={{border: '0', borderRadius: '12px'}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                <p className="text-sm text-gray-500 mt-3 text-center">Find us on the map!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}