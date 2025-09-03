export default function Blogs() {
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
                            Our Latest
                        </span>
                        <br />
                        <span className="text-gray-800">Blogs</span>
                    </h1>

                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-600 leading-relaxed animated-element animate-fade-in-up delay-200">
                        Stay updated with insights on
                        <span className="text-emerald-600 font-semibold"> web development, digital marketing, AI, </span>
                        and more.
                    </p>
                </div>
            </section>

            {/* Blog Posts Section */}
            <section className="py-20 md:py-32 relative">
                <div className="container mx-auto px-4">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16 animated-element animate-fade-in-up delay-100">
                        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-forest-600 text-white font-semibold hover:from-emerald-700 hover:to-forest-700 transition-all duration-300 shadow-lg">All</button>
                        <button className="px-8 py-3 rounded-xl border-2 border-emerald-600 text-emerald-600 font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300" data-category="web-dev">Web Development</button>
                        <button className="px-8 py-3 rounded-xl border-2 border-forest-600 text-forest-600 font-semibold hover:bg-forest-600 hover:text-white transition-all duration-300" data-category="digital-marketing">Digital Marketing</button>
                        <button className="px-8 py-3 rounded-xl border-2 border-sage-600 text-sage-600 font-semibold hover:bg-sage-600 hover:text-white transition-all duration-300" data-category="ai-ml">AI/ML</button>
                        <button className="px-8 py-3 rounded-xl border-2 border-mint-600 text-mint-600 font-semibold hover:bg-mint-600 hover:text-white transition-all duration-300" data-category="devops">DevOps</button>
                    </div>

                    <div id="blog-posts-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <a href="blog-post-1.html" className="blog-post-item bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animated-element animate-scale-in delay-200" data-category="web-dev">
                            <img src="https://placehold.co/400x250/228B22/FFFFFF?text=Web+Dev+Trends" alt="Blog Post Image" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <span className="text-sm text-gray-500 mb-2 block">Web Development - June 10, 2025</span>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">The Future of Web Development: Trends to Watch</h3>
                                <p className="text-gray-600 text-sm">Discover the cutting-edge technologies and methodologies shaping the web development landscape in 2025...</p>
                                <span className="text-forest-green hover:underline font-medium mt-4 block">Read More &rarr;</span>
                            </div>
                        </a>
                        <a href="blog-post-2.html" className="blog-post-item bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animated-element animate-scale-in delay-300" data-category="digital-marketing" >
                            <img src="https://placehold.co/400x250/228B22/FFFFFF?text=SEO+Guide" alt="Blog Post Image" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <span className="text-sm text-gray-500 mb-2 block">Digital Marketing - June 5, 2025</span>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mastering SEO: A Guide for Small Businesses</h3>
                                <p className="text-gray-600 text-sm">Unlock the secrets to higher search rankings and organic traffic with our essential SEO tips...</p>
                                <span className="text-forest-green hover:underline font-medium mt-4 block">Read More &rarr;</span>
                            </div>
                        </a>
                        <a href="blog-post-3.html" className="blog-post-item bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animated-element animate-scale-in delay-400" data-category="ai-ml">
                            <img src="https://placehold.co/400x250/228B22/FFFFFF?text=AI+Innovations" alt="Blog Post Image" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <span className="text-sm text-gray-500 mb-2 block">AI/ML - May 28, 2025</span>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">The Rise of AI in Business: Innovations & Impact</h3>
                                <p className="text-gray-600 text-sm">Explore how artificial intelligence and machine learning are revolutionizing industries...</p>
                                <span className="text-forest-green hover:underline font-medium mt-4 block">Read More &rarr;</span>
                            </div>
                        </a>
                        <a href="blog-post-4.html" className="blog-post-item bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animated-element animate-scale-in delay-500" data-category="devops">
                            <img src="https://placehold.co/400x250/228B22/FFFFFF?text=DevOps+Best" alt="Blog Post Image" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <span className="text-sm text-gray-500 mb-2 block">DevOps - May 20, 2025</span>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">DevOps Best Practices for Seamless Deployment</h3>
                                <p className="text-gray-600 text-sm">Learn how to streamline your development and operations for faster, more reliable software delivery...</p>
                                <span className="text-forest-green hover:underline font-medium mt-4 block">Read More &rarr;</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}