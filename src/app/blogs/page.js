export default function Home() {
    return (
        <>
            <section class="bg-forest-green text-white py-16 md:py-20 text-center rounded-bl-[80px]">
                <h1 class="text-4xl md:text-5xl font-extrabold mb-4 animated-element animate-fade-in-up">Our Latest Blogs</h1>
                <p class="text-lg md:text-xl max-w-2xl mx-auto animated-element animate-fade-in-up delay-200">Stay updated with insights on web development, digital marketing, AI, and more.</p>
            </section>

            <section class="py-16 md:py-24 bg-white">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap justify-center gap-4 mb-12 animated-element animate-fade-in-up delay-100">
                        <button class="px-6 py-2 rounded-full bg-forest-green text-white font-medium hover:bg-green-700 transition duration-300">All</button>
                        <button class="px-6 py-2 rounded-full border border-forest-green text-forest-green font-medium hover:bg-forest-green hover:text-white transition duration-300" data-category="web-dev">Web Development</button>
                        <button class="px-6 py-2 rounded-full border border-forest-green text-forest-green font-medium hover:bg-forest-green hover:text-white transition duration-300" data-category="digital-marketing">Digital Marketing</button>
                        <button class="px-6 py-2 rounded-full border border-forest-green text-forest-green font-medium hover:bg-forest-green hover:text-white transition duration-300" data-category="ai-ml">AI/ML</button>
                        <button class="px-6 py-2 rounded-full border border-forest-green text-forest-green font-medium hover:bg-forest-green hover:text-white transition duration-300" data-category="devops">DevOps</button>
                    </div>

                    <div id="blog-posts-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <a href="blog-post-1.html" class="blog-post-item bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animated-element animate-scale-in delay-200" data-category="web-dev">
                            <img src="https://placehold.co/400x250/228B22/FFFFFF?text=Web+Dev+Trends" alt="Blog Post Image" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <span class="text-sm text-gray-500 mb-2 block">Web Development - June 10, 2025</span>
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">The Future of Web Development: Trends to Watch</h3>
                                <p class="text-gray-600 text-sm">Discover the cutting-edge technologies and methodologies shaping the web development landscape in 2025...</p>
                                <span class="text-forest-green hover:underline font-medium mt-4 block">Read More &rarr;</span>
                            </div>
                        </a>
                        <a href="blog-post-2.html" class="blog-post-item bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animated-element animate-scale-in delay-300" data-category="digital-marketing" >
                            <img src="https://placehold.co/400x250/228B22/FFFFFF?text=SEO+Guide" alt="Blog Post Image" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <span class="text-sm text-gray-500 mb-2 block">Digital Marketing - June 5, 2025</span>
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Mastering SEO: A Guide for Small Businesses</h3>
                                <p class="text-gray-600 text-sm">Unlock the secrets to higher search rankings and organic traffic with our essential SEO tips...</p>
                                <span class="text-forest-green hover:underline font-medium mt-4 block">Read More &rarr;</span>
                            </div>
                        </a>
                        <a href="blog-post-3.html" class="blog-post-item bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animated-element animate-scale-in delay-400" data-category="ai-ml">
                            <img src="https://placehold.co/400x250/228B22/FFFFFF?text=AI+Innovations" alt="Blog Post Image" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <span class="text-sm text-gray-500 mb-2 block">AI/ML - May 28, 2025</span>
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">The Rise of AI in Business: Innovations & Impact</h3>
                                <p class="text-gray-600 text-sm">Explore how artificial intelligence and machine learning are revolutionizing industries...</p>
                                <span class="text-forest-green hover:underline font-medium mt-4 block">Read More &rarr;</span>
                            </div>
                        </a>
                        <a href="blog-post-4.html" class="blog-post-item bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animated-element animate-scale-in delay-500" data-category="devops">
                            <img src="https://placehold.co/400x250/228B22/FFFFFF?text=DevOps+Best" alt="Blog Post Image" class="w-full h-48 object-cover" />
                            <div class="p-6">
                                <span class="text-sm text-gray-500 mb-2 block">DevOps - May 20, 2025</span>
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">DevOps Best Practices for Seamless Deployment</h3>
                                <p class="text-gray-600 text-sm">Learn how to streamline your development and operations for faster, more reliable software delivery...</p>
                                <span class="text-forest-green hover:underline font-medium mt-4 block">Read More &rarr;</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}