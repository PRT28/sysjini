
'use client'
import { useState } from 'react';

// Note: Metadata moved to layout.js since this is a client component

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        budget: '100000',
        message: ''
    });

    const [formState, setFormState] = useState({
        isSubmitting: false,
        isSubmitted: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState({ isSubmitting: true, isSubmitted: false, error: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                setFormState({ isSubmitting: false, isSubmitted: true, error: null });
                setFormData({
                    name: '',
                    email: '',
                    service: '',
                    budget: '100000',
                    message: ''
                });
            } else {
                setFormState({
                    isSubmitting: false,
                    isSubmitted: false,
                    error: result.errors ? result.errors.join(', ') : result.message || 'Failed to send message. Please try again.'
                });
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setFormState({ isSubmitting: false, isSubmitted: false, error: 'Failed to send message. Please try again.' });
        }
    };

    return (
        <>
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
                                Get in Touch
                            </span>
                            <br />
                            <span className="text-gray-800">with Sysjini</span>
                        </h1>

                        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-600 leading-relaxed">
                            We&apos;d love to hear from you. Reach out to discuss your project or
                            <span className="text-emerald-600 font-semibold"> any inquiries </span>
                            you might have.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="#contact-form" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                                Send Message
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>
                            <a href="tel:+917017197678" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                                Call Now: +91 7017197678
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
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                                    Send Us a Message
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Ready to start your project? Fill out the form below and we&apos;ll get back to you within 24 hours.
                            </p>

                            <div className="modern-card p-8 rounded-2xl">
                                {formState.isSubmitted ? (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                                        <p className="text-gray-600 mb-6">Thank you for contacting us. We&apos;ll get back to you soon.</p>
                                        <button
                                            onClick={() => setFormState({ isSubmitting: false, isSubmitted: false, error: null })}
                                            className="btn-outline"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-3">Name *</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                                                    placeholder="Your Name"
                                                    required
                                                    disabled={formState.isSubmitting}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-3">Email *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                                                    placeholder="your@example.com"
                                                    required
                                                    disabled={formState.isSubmitting}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="service" className="block text-gray-700 text-sm font-semibold mb-3">Service *</label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                                                required
                                                disabled={formState.isSubmitting}
                                            >
                                                <option value="">Select Service</option>
                                                <option value="web-development">Web & Mobile Development</option>
                                                <option value="digital-marketing">Digital Marketing & SEO</option>
                                                <option value="design-branding">Design & Branding</option>
                                                <option value="ecommerce">E-commerce Solutions</option>
                                                <option value="cloud-devops">Cloud & DevOps</option>
                                                <option value="ui-ux">UI/UX Consulting</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="block text-gray-700 text-sm font-semibold mb-3">
                                                Budget Range: ₹20,000 - ₹5,00,000
                                            </label>
                                            <div className="space-y-4">
                                                <input
                                                    type="range"
                                                    id="budget"
                                                    name="budget"
                                                    min="20000"
                                                    max="500000"
                                                    step="5000"
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                                    style={{
                                                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${((formData.budget - 20000) / (500000 - 20000)) * 100}%, #e5e7eb ${((formData.budget - 20000) / (500000 - 20000)) * 100}%, #e5e7eb 100%)`
                                                    }}
                                                    disabled={formState.isSubmitting}
                                                />
                                                <div className="text-center text-gray-700 font-semibold text-lg">
                                                    ₹{parseInt(formData.budget).toLocaleString('en-IN')}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-3">Project Details (Optional)</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="4"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                                                placeholder="Brief project description (optional)..."
                                                disabled={formState.isSubmitting}
                                            ></textarea>
                                        </div>

                                        {formState.error && (
                                            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                                                <p className="text-red-600 text-sm">{formState.error}</p>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={formState.isSubmitting}
                                            className="w-full bg-gradient-to-r from-emerald-600 to-forest-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-emerald-700 hover:to-forest-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        >
                                            {formState.isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                        {/* Contact Information */}
                        <div className="">
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
                                        <p className="text-gray-600">hello@sysjini.in</p>
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
                                        <p className="text-gray-600">+91 7017197678</p>
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
                                        <p className="text-gray-600">Gurugram, Haryana<br />India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="modern-card p-4 rounded-2xl">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d76.84467985!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
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