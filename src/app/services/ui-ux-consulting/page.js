export default function Home() {
    return (
        <>
            <section className="bg-forest-green text-white py-16 md:py-20 text-center rounded-bl-[80px]">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animated-element animate-fade-in-up">UI/UX Consulting Services</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto animated-element animate-fade-in-up delay-200">We provide comprehensive UI/UX consulting services to help businesses create intuitive, engaging, and accessible digital products. Our approach combines in-depth user research, strategic design thinking, and iterative prototyping to deliver solutions that not only look great but also perform exceptionally and meet user needs effectively.</p>
            </section>
            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-100">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">What We Offer in UI/UX Consulting</h3>
                <p className="text-gray-700 leading-relaxed">
                    We provide comprehensive UI/UX consulting services, from user research and persona development to wireframing, prototyping, and usability testing. Our solutions are designed to enhance user satisfaction, improve accessibility, and drive business success through effective design.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>User Research & Analysis (Interviews, Surveys, Usability Testing)</li>
                    <li>User Experience (UX) Strategy & Roadmapping</li>
                    <li>Information Architecture & Wireframing</li>
                    <li>User Interface (UI) Design & Prototyping</li>
                    <li>Interaction Design & Animation</li>
                    <li>Accessibility (WCAG) Compliance Consulting</li>
                    <li>Design System Development & Implementation</li>
                    <li>Heuristic Evaluation & UX Audit</li>
                </ul>
            </section>

            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-200">
               <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">Our Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">🔬</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">User-Centric Approach</h4>
                            <p className="text-gray-600">Placing the user at the core of every design decision to create truly intuitive experiences.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">💡</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Strategic Insights</h4>
                            <p className="text-gray-600">Translating complex user data into actionable design strategies that align with business goals.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">✨</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Aesthetic & Functional Design</h4>
                            <p className="text-gray-600">Balancing beautiful aesthetics with seamless functionality for optimal user engagement.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">🤝</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Collaborative Process</h4>
                            <p className="text-gray-600">Working closely with your team to ensure designs meet your vision and objectives.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">📊</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Measurable Results</h4>
                            <p className="text-gray-600">Focusing on designs that improve key metrics like conversion rates and user retention.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">♿</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Accessibility Compliance</h4>
                            <p className="text-gray-600">Ensuring your digital products are usable by people of all abilities, adhering to WCAG standards.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-300">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">Industries We Serve</h3>
                <div className="flex flex-wrap gap-4 text-gray-700">
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Software & SaaS</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">E-commerce & Retail</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Fintech</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Healthcare</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Education</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Media & Entertainment</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Automotive</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                     Our UI/UX consulting expertise spans diverse industries, helping businesses create digital products that are not only visually appealing but also highly functional and user-friendly.
                </p>
            </section>

            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-400">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">Our Expertise</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">UX Research & Strategy</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>User Interviews & Surveys</li>
                            <li>Persona & User Journey Mapping</li>
                            <li>Competitive Analysis</li>
                            <li>UX Audits & Heuristic Evaluations</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">UI Design & Prototyping</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Wireframing & Low-Fidelity Prototypes</li>
                            <li>High-Fidelity UI Design</li>
                            <li>Interactive Prototypes</li>
                            <li>Design Systems & Style Guides</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Interaction Design</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Micro-interactions</li>
                            <li>Animation & Transitions</li>
                            <li>User Flow Optimization</li>
                            <li>Feedback Mechanisms</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Usability Testing</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Moderated & Unmoderated Testing</li>
                            <li>A/B Testing</li>
                            <li>Eye-Tracking & Heatmaps</li>
                            <li>Post-Test Analysis & Recommendations</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Accessibility (A11y)</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>WCAG Compliance Audits</li>
                            <li>Accessible Design Implementation</li>
                            <li>Assistive Technology Testing</li>
                            <li>Accessibility Training</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Tools & Technologies</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Figma, Sketch, Adobe XD</li>
                            <li>Miro, Mural</li>
                            <li>UserTesting, Hotjar</li>
                            <li>Google Analytics</li>
                        </ul>
                    </div>
                </div>
            </section>

          <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-500">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">Ongoing UI/UX Support & Optimization</h3>
                <p className="text-gray-700 leading-relaxed">
                    UI/UX is an iterative process. We offer continuous support and optimization services to ensure your digital products remain user-friendly, competitive, and aligned with evolving user behaviors and market trends.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Regular UX Audits & Performance Reviews</li>
                    <li>A/B Testing & Conversion Rate Optimization (CRO)</li>
                    <li>User Feedback Integration & Iterative Design</li>
                    <li>Design System Maintenance & Updates</li>
                    <li>Accessibility Compliance Monitoring</li>
                    <li>New Feature UI/UX Design & Integration</li>
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
                    We collaborate with clients globally, providing expert UI/UX consulting services to enhance digital products and user experiences worldwide.
                </p>
                <div className="flex flex-wrap gap-4 text-gray-700">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">USA</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">Canada</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">UK</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">Australia</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">Germany</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">India</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">UAE</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">Singapore</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">Japan</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">Netherlands</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">Sweden</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">Brazil</span>
                </div>
            </section>

            <section className="px-8 md:px-24 py-8 md:py-12 flex flex-col items-center bg-green-50 p-8 rounded-xl shadow-inner animate-fade-in-up delay-800">
                <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">Ready to Start Your Project?</h3>
                <p className="text-lg text-gray-700 mb-8 text-center">
                    Fill out the form below to get a free consultation and discuss your UI/UX consulting needs.
                </p>
                <div className="max-md:w-full w-[50rem]">
                    <form id="contact-form" className="space-y-6" style={{ maxWidth: '100%'}}>
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