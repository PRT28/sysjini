export default function Home() {
    return (
        <>
            <section className="bg-forest-green text-white py-16 md:py-20 text-center rounded-bl-[80px]">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animated-element animate-fade-in-up">E-commerce Solutions</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto animated-element animate-fade-in-up delay-200">Building robust, scalable, and secure online stores that drive sales and provide an exceptional shopping experience for your customers.</p>
            </section>
            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-100">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">What We Offer in E-commerce Solutions</h3>
                <p className="text-gray-700 leading-relaxed">
                    We provide comprehensive e-commerce development services, from custom online store creation to platform migration, integration, and ongoing optimization. Our solutions are designed to maximize your sales, streamline operations, and deliver a seamless purchasing journey for your customers.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Custom E-commerce Website Development</li>
                    <li>Platform-based Solutions (Shopify, WooCommerce, Magento, BigCommerce)</li>
                    <li>Payment Gateway Integration</li>
                    <li>Inventory Management Systems</li>
                    <li>CRM & ERP Integration</li>
                    <li>E-commerce SEO & Marketing Strategy</li>
                    <li>Mobile Commerce (M-commerce) Solutions</li>
                </ul>
            </section>

            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-200">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">Our Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">🛒</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">User-Friendly Shopping Cart</h4>
                            <p className="text-gray-600">Intuitive and efficient checkout processes to reduce cart abandonment.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">🔒</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Secure Payment Gateways</h4>
                            <p className="text-gray-600">Integrating trusted and secure payment options for customer confidence.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">📱</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Mobile Responsiveness</h4>
                            <p className="text-gray-600">Optimized for seamless shopping experiences across all devices.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">📈</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Scalable & High Performance</h4>
                            <p className="text-gray-600">Built to handle increasing traffic and product catalogs without compromising speed.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">📦</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Integrated Inventory Management</h4>
                            <p className="text-gray-600">Efficiently track and manage your product stock in real-time.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">🔍</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">SEO-Friendly Product Pages</h4>
                            <p className="text-gray-600">Optimized product listings for better search engine visibility and organic traffic.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-300">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">Industries We Serve</h3>
                <div className="flex flex-wrap gap-4 text-gray-700">
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Fashion & Apparel</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Electronics</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Home Goods & Furniture</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Food & Beverage</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Health & Beauty</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Automotive Parts</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Digital Products & Services</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    We have extensive experience in delivering tailored e-commerce solutions across a wide range of industries, helping businesses to thrive in the competitive online marketplace.
                </p>
            </section>

            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-400">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">Our Expertise</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">E-commerce Platforms</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Shopify & Shopify Plus</li>
                            <li>WooCommerce (WordPress)</li>
                            <li>Magento</li>
                            <li>BigCommerce</li>
                            <li>Custom E-commerce Development</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Payment & Shipping</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Stripe, PayPal, Square</li>
                            <li>Custom Payment Gateway Integration</li>
                            <li>Shipping Carrier Integrations</li>
                            <li>Tax Calculation & Compliance</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Integrations</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>CRM (Salesforce, HubSpot)</li>
                            <li>ERP (SAP, Oracle)</li>
                            <li>Marketing Automation Tools</li>
                            <li>Analytics & Reporting Tools</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Design & UX</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Custom Storefront Design</li>
                            <li>Product Page Optimization</li>
                            <li>Checkout Flow Optimization</li>
                            <li>Mobile-First Design</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Marketing & SEO</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>E-commerce SEO Strategy</li>
                            <li>PPC & Social Media Advertising</li>
                            <li>Email Marketing Automation</li>
                            <li>Conversion Rate Optimization (CRO)</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Security & Performance</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>SSL Certificates & Data Encryption</li>
                            <li>PCI DSS Compliance</li>
                            <li>Performance Optimization (Speed & Loading)</li>
                            <li>Regular Security Audits</li>
                        </ul>
                    </div>
                </div>
            </section>

          <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-500">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">Ongoing E-commerce Support</h3>
                <p className="text-gray-700 leading-relaxed">
                    We empower businesses globally with robust e-commerce solutions, helping them reach customers and expand their sales worldwide.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Platform Updates & Security Patches</li>
                    <li>Performance Monitoring & Optimization</li>
                    <li>Bug Fixing & Technical Support</li>
                    <li>Feature Enhancements & Integrations</li>
                    <li>Product Data Management</li>
                    <li>Conversion Rate Optimization (CRO) Services</li>
                </ul>
            </section>

            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-600">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">What Our Clients Say</h3>
                <div id="testimonials-container" className="grid md:grid-cols-2 gap-6">
                    <p className="text-gray-600 col-span-2 text-center">Loading testimonials...</p>
                </div>
                <div className="text-center mt-8">
                    <button
                        onClick="alert('Functionality to add testimonials is not implemented in this static page.');"
                        className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-300 transform hover:scale-105"
                    >
                        Share Your Experience
                    </button>
                </div>
            </section>

            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-700">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">Countries We Serve</h3>
                <p className="text-gray-700 leading-relaxed">
                    We are proud to serve clients globally, delivering high-quality mobile app development solutions across continents.
                </p>
                <div className="flex flex-wrap gap-4 text-gray-700">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">USA</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">Canada</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">UK</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">Australia</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">Germany</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">India</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">UAE</span>
                </div>
            </section>

            <section className="px-8 md:px-24 py-8 md:py-12 flex flex-col items-stretch bg-green-50 p-8 rounded-xl shadow-inner animate-fade-in-up delay-800">
                <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">Ready to Start Your Project?</h3>
                <p className="text-lg text-gray-700 mb-8 text-center">
                    Fill out the form below to get a free consultation and quote for your mobile app idea.
                </p>
                <div className="max-md:w-full w-[50rem]">
                    <form id="contact-form" className="space-y-6 max-w-[30rem]">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message/Project Details:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                            placeholder="Tell us about your app idea or project requirements..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300 transform hover:scale-105"
                    >
                        Submit Your Inquiry
                    </button>
                    <p id="form-status" className="text-center mt-4"></p>
                </form>
                </div>
                
            </section>
        </>
    );
}