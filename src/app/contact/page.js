
export default function Contact() {
    return (
        <>
            <section className="bg-forest-green text-white py-16 md:py-20 text-center rounded-bl-[80px]">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animated-element animate-fade-in-up">Get in Touch with Sysjini</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto animated-element animate-fade-in-up delay-200">We&apos; love to hear from you. Reach out to discuss your project or any inquiries.</p>
            </section>

            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-forest-green mb-12 animated-element animate-fade-in-up">Send Us a Message</h2>
                    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg card-shadow animated-element animate-scale-in delay-100">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent" placeholder="Your Name" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent" placeholder="your@example.com" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-2">Subject</label>
                                <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent" placeholder="Subject of your inquiry" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                                <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent" placeholder="Tell us about your project or inquiry..." required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-forest-green text-white py-3 rounded-md font-semibold text-lg shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="mt-12 text-center text-gray-600 animated-element animate-fade-in-up delay-200">
                        <h3 className="text-2xl font-bold text-forest-green mb-4">Contact Information</h3>
                        <p className="text-lg mb-2"><strong>Email:</strong> contact@sysjini.in</p>
                        <p className="text-lg mb-2"><strong>Phone:</strong> +91-7017197678</p>
                        <p className="text-lg mb-2"><strong>Address:</strong> 123 Digital Way, Innovation City, New Delhi, India</p>
                        <div className="mt-8">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112127.46044824395!2d76.94825085820312!3d28.46010505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1910f13e15fb%3A0x289601bcf07c3e57!2sGurgaon%2C%20Haryana!5e0!3m2!1sen!2sin!4v1719726600000!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{border: '0'}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            <p className="text-sm text-gray-500 mt-2">Find us on the map!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}