export default function Glossary() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-32 md:py-40 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-forest-50 to-sage-50">
                    <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-forest-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-1000"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10 pt-20">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animated-element animate-fade-in-up">
                        <span className="bg-gradient-to-r from-emerald-600 via-forest-600 to-sage-700 bg-clip-text text-transparent">
                            Digital Terms
                        </span>
                        <br />
                        <span className="text-gray-800">Glossary</span>
                    </h1>

                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-600 leading-relaxed animated-element animate-fade-in-up delay-200">
                        Understand the key concepts in
                        <span className="text-emerald-600 font-semibold"> web development, digital marketing, </span>
                        and more.
                    </p>
                </div>
            </section>
            {/* Glossary Terms Section */}
            <section className="py-20 md:py-32 relative">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8">
                        <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-fade-in-up delay-100">
                            <h3 className="text-2xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                                    SEO (Search Engine Optimization)
                                </span>
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                The practice of increasing the quantity and quality of traffic to your website through organic search engine results. It involves optimizing website content, structure, and off-page factors to rank higher in search engine results pages (SERPs).
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md animated-element animate-fade-in-up delay-200">
                            <h3 className="text-2xl font-semibold text-forest-green mb-2">UI/UX Design (User Interface/User Experience Design)</h3>
                            <p className="text-gray-700">
                                <strong>UI Design</strong> focuses on the look and feel of an application&apos;s interface (buttons, typography, colors). <strong>UX Design</strong> focuses on the overall experience a user has with a product, ensuring it&apos;s intuitive, efficient, and enjoyable.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md animated-element animate-fade-in-up delay-300">
                            <h3 className="text-2xl font-semibold text-forest-green mb-2">CMS (Content Management System)</h3>
                            <p className="text-gray-700">
                                A software application that allows users to create, manage, and modify content on a website without the need for specialized technical knowledge. Examples include WordPress, Joomla, and Drupal.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md animated-element animate-fade-in-up delay-400">
                            <h3 className="text-2xl font-semibold text-forest-green mb-2">API (Application Programming Interface)</h3>
                            <p className="text-gray-700">
                                A set of defined rules that enable different applications to communicate with each other. APIs allow applications to exchange data and functionality, facilitating integration and extending capabilities.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md animated-element animate-fade-in-up delay-500">
                            <h3 className="text-2xl font-semibold text-forest-green mb-2">DevOps (Development Operations)</h3>
                            <p className="text-gray-700">
                                A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide continuous delivery with high software quality. It emphasizes communication, collaboration, integration, and automation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}