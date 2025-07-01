import Image from "next/image";
import styles from "./page.module.css";

export default function about () {
    return (
        <div>
            <section className="bg-forest-green text-white py-16 md:py-20 text-center rounded-bl-[80px]">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animated-element animate-fade-in-up">About Sysjini</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto animated-element animate-fade-in-up delay-200">Discover our story, mission, and the passionate team behind our digital solutions.</p>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-6 animated-element animate-fade-in-up">Who We Are</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 animated-element animate-fade-in-up delay-100">
                            At Sysjini, we believe in the power of innovation and creativity to transform businesses. We are a team of passionate experts dedicated to delivering bespoke digital solutions that not only meet but exceed your expectations. Our focus is on crafting unique online presences that truly represent your brand.
                        </p>
                        <p className="text-md text-gray-600 leading-relaxed animated-element animate-fade-in-up delay-200">
                            Founded with a vision to empower businesses in the digital realm, Sysjini brings together a diverse group of talented individuals specializing in web and app development, digital marketing, SEO, and cutting-edge design. We thrive on challenges and are committed to staying ahead of industry trends to provide our clients with the most effective and future-proof solutions.
                        </p>
                    </div>
                    <div className="flex justify-center items-center animated-element animate-scale-in delay-300">
                        <img src="https://placehold.co/500x350/228B22/FFFFFF?text=Our+Team" alt="About Sysjini" className="rounded-lg shadow-xl max-w-full h-auto" />
                    </div>
                </div>

                <div className="container mx-auto px-4 mt-16 md:mt-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-forest-green mb-12 animated-element animate-fade-in-up">Our Mission & Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-lg p-8 shadow-md text-center animated-element animate-scale-in delay-100">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h3>
                            <p className="text-gray-600">Constantly exploring new technologies and creative approaches to deliver groundbreaking solutions.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-8 shadow-md text-center animated-element animate-scale-in delay-200">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Client Success</h3>
                            <p className="text-gray-600">Our ultimate goal is the success of our clients, building long-term partnerships based on trust.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-8 shadow-md text-center animated-element animate-scale-in delay-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Integrity</h3>
                            <p className="text-gray-600">Upholding the highest ethical standards in all our interactions and projects.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}