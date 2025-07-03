export default function Home() {
    return (
        <>
            <section className="bg-forest-green text-white py-16 md:py-20 text-center rounded-bl-[80px]">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animated-element animate-fade-in-up">Cloud and Devops</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto animated-element animate-fade-in-up delay-200">Accelerating your digital transformation with robust cloud infrastructure and streamlined DevOps practices for efficiency and scalability.</p>
            </section>
            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-100">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">What We Offer in Cloud and Devops</h3>
                <p className="text-gray-700 leading-relaxed">
                    We provide comprehensive Cloud and DevOps solutions to optimize your software development lifecycle, enhance collaboration, and ensure seamless deployment and operations. Our expertise covers cloud migration, infrastructure automation, CI/CD pipelines, and robust monitoring, all designed to improve reliability and accelerate your time to market.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Cloud Strategy & Consulting (AWS, Azure, GCP)</li>
                    <li>Cloud Migration & Modernization</li>
                    <li>Infrastructure as Code (IaC) Implementation (Terraform, Ansible)</li>
                    <li>CI/CD Pipeline Automation (Jenkins, GitLab CI, Azure DevOps)</li>
                    <li>Containerization & Orchestration (Docker, Kubernetes)</li>
                    <li>Cloud Security & Compliance</li>
                    <li>Monitoring, Logging & Alerting Solutions</li>
                </ul>
            </section>

            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-200">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">Our Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">⚙️</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Automation & Efficiency</h4>
                            <p className="text-gray-600">Automating repetitive tasks to reduce manual errors and accelerate development and deployment cycles.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">🔗</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Seamless Integration</h4>
                            <p className="text-gray-600">Integrating development, operations, and security tools for a unified and efficient workflow.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">⏱️</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Faster Time-to-Market</h4>
                            <p className="text-gray-600">Accelerating software delivery through efficient CI/CD pipelines and streamlined processes.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">📈</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Improved Scalability & Reliability</h4>
                            <p className="text-gray-600">Designing cloud infrastructure that scales with demand, ensuring high availability and performance.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">📊</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Real-time Monitoring & Insights</h4>
                            <p className="text-gray-600">Providing comprehensive monitoring and logging to proactively identify and resolve issues.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl">🛡️</div>
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Enhanced Security & Compliance</h4>
                            <p className="text-gray-600">Implementing robust security measures and ensuring compliance with industry standards.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-300">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">Industries We Serve</h3>
                <div className="flex flex-wrap gap-4 text-gray-700">
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Fintech</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">SaaS & Software</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">E-commerce</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Healthcare</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Gaming</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Telecommunications</span>
                    <span className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full shadow-sm">Manufacturing</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    We have a proven track record of delivering successful digital marketing campaigns across diverse industries, understanding their unique market dynamics and consumer behaviors.
                </p>
            </section>

            <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-400">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">Our Expertise</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Cloud Platforms</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Amazon Web Services (AWS)</li>
                            <li>Microsoft Azure</li>
                            <li>Google Cloud Platform (GCP)</li>
                            <li>Hybrid Cloud Solutions</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">DevOps Tools & CI/CD</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Jenkins, GitLab CI, CircleCI</li>
                            <li>Azure DevOps, Travis CI</li>
                            <li>Jira, Confluence</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Containerization & Orchestration</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Docker</li>
                            <li>Kubernetes (EKS, AKS, GKE)</li>
                            <li>Helm</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Infrastructure as Code (IaC)</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Terraform</li>
                            <li>Ansible</li>
                            <li>CloudFormation</li>
                            <li>Puppet, Chef</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Monitoring & Logging</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Prometheus, Grafana</li>
                            <li>ELK Stack (Elasticsearch, Logstash, Kibana)</li>
                            <li>Splunk, Datadog</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-lime-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-green-700 mb-3">Security & Compliance</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Cloud Security Best Practices</li>
                            <li>Compliance Audits (ISO, SOC 2)</li>
                            <li>Vulnerability Management</li>
                        </ul>
                    </div>
                </div>
            </section>

          <section className="px-8 md:px-24 py-8 md:py-12 space-y-6 animate-slide-up delay-500">
                <h3 className="text-3xl font-bold text-green-700 border-b-2 border-lime-300 pb-3">Ongoing Cloud and Devops Support</h3>
                <p className="text-gray-700 leading-relaxed">
                    Our commitment extends to providing continuous support and optimization for your cloud infrastructure and DevOps pipelines, ensuring peak performance, security, and cost efficiency.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>24/7 Infrastructure Monitoring & Management</li>
                    <li>CI/CD Pipeline Maintenance & Optimization</li>
                    <li>Cloud Cost Optimization & Management</li>
                    <li>Security Patching & Vulnerability Assessments</li>
                    <li>Disaster Recovery & Backup Solutions</li>
                    <li>Scalability Planning & Resource Management</li>
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
                    We serve clients globally, providing expert Cloud and DevOps solutions to help businesses achieve agility and operational excellence worldwide.
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

            <section className="px-8 md:px-24 py-8 md:py-12 flex flex-col items-center bg-green-50 p-8 rounded-xl shadow-inner animate-fade-in-up delay-800">
                <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">Ready to Start Your Project?</h3>
                <p className="text-lg text-gray-700 mb-8 text-center">
                   Fill out the form below to get a free consultation and discuss your cloud and DevOps project.
                </p>
                <form className="max-md:w-full w-[50rem]">
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
            </section>
        </>
    );
}