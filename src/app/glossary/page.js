export default function Home() {
    return (
        <>
            <section class="bg-forest-green text-white py-16 md:py-20 text-center rounded-bl-[80px]">
                <h1 class="text-4xl md:text-5xl font-extrabold mb-4 animated-element animate-fade-in-up">Glossary of Digital Terms</h1>
                <p class="text-lg md:text-xl max-w-2xl mx-auto animated-element animate-fade-in-up delay-200">Understand the key concepts in web development, digital marketing, and more.</p>
            </section>
            <section class="py-16 md:py-24 bg-white">
                <div class="container mx-auto px-4 max-w-4xl">
                    <div class="space-y-8">
                        <div class="bg-gray-50 p-6 rounded-lg shadow-md animated-element animate-fade-in-up delay-100">
                            <h3 class="text-2xl font-semibold text-forest-green mb-2">SEO (Search Engine Optimization)</h3>
                            <p class="text-gray-700">
                                The practice of increasing the quantity and quality of traffic to your website through organic search engine results. It involves optimizing website content, structure, and off-page factors to rank higher in search engine results pages (SERPs).
                            </p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg shadow-md animated-element animate-fade-in-up delay-200">
                            <h3 class="text-2xl font-semibold text-forest-green mb-2">UI/UX Design (User Interface/User Experience Design)</h3>
                            <p class="text-gray-700">
                                <strong>UI Design</strong> focuses on the look and feel of an application's interface (buttons, typography, colors). <strong>UX Design</strong> focuses on the overall experience a user has with a product, ensuring it's intuitive, efficient, and enjoyable.
                            </p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg shadow-md animated-element animate-fade-in-up delay-300">
                            <h3 class="text-2xl font-semibold text-forest-green mb-2">CMS (Content Management System)</h3>
                            <p class="text-gray-700">
                                A software application that allows users to create, manage, and modify content on a website without the need for specialized technical knowledge. Examples include WordPress, Joomla, and Drupal.
                            </p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg shadow-md animated-element animate-fade-in-up delay-400">
                            <h3 class="text-2xl font-semibold text-forest-green mb-2">API (Application Programming Interface)</h3>
                            <p class="text-gray-700">
                                A set of defined rules that enable different applications to communicate with each other. APIs allow applications to exchange data and functionality, facilitating integration and extending capabilities.
                            </p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg shadow-md animated-element animate-fade-in-up delay-500">
                            <h3 class="text-2xl font-semibold text-forest-green mb-2">DevOps (Development Operations)</h3>
                            <p class="text-gray-700">
                                A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide continuous delivery with high software quality. It emphasizes communication, collaboration, integration, and automation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}