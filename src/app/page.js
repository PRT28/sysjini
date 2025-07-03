import Head from "next/head";

import Travel from "../../components/Animation/Travel";

export default function Home() {

  return (
    <>
    <Head>
      <link rel="canonical" href="https://sysjini.in" />
    </Head>
    <section id="home" className="relative bg-forest-green text-white py-20 md:py-32 overflow-hidden rounded-bl-[80px]">
        <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animated-element animate-fade-in-up">
                Elevate Your Business in the Digital Landscape
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90 animated-element animate-fade-in-up delay-200">
                Sysjini is a dynamic service provider offering customized solutions in web and app development, SEO, digital marketing, and designing.
            </p>
            <a href="services.html" className="bg-white text-forest-green hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animated-element animate-fade-in-up delay-400">
                Explore Our Services
            </a>
        </div>
        <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="currentColor">
                <path d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,160C672,160,768,192,864,192C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>
    </section>

    <section id="why-choose-us" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-forest-green mb-12 animated-element animate-fade-in-up">Why Choose Sysjini?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md animated-element animate-scale-in delay-100">
                    <svg className="w-20 h-20 mb-4 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 20v-3m0 0l-1.403-1.403M12 17l1.403-1.403M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5m-4 5h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2z"></path>
                    </svg>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our professionals are highly skilled and dedicated to delivering excellence.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md animated-element animate-scale-in delay-200">
                    <svg className="w-20 h-20 mb-4 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2S9 11.105 9 10s1.343-2 3-2z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c-1.657 0-3 .895-3 2s1.343 2 3 2S15 17.105 15 16s-1.343-2-3-2z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"></path>
                    </svg>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Customized Solutions</h3>
                    <p className="text-gray-600">We tailor every solution to fit your unique business requirements perfectly.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md animated-element animate-scale-in delay-300">
                    <svg className="w-20 h-20 mb-4 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Results-Driven</h3>
                    <p className="text-gray-600">Our focus is on delivering measurable results that drive your business forward.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="roadmap" className="max-md:hidden py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-forest-green mb-12 animated-element animate-fade-in-up">Our Simple Process</h2>
            <div className="relative flex flex-col items-center md:flex-row md:justify-center md:items-start gap-8 md:gap-16">
                <svg className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-2" viewBox="0 0 4 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2" y1="0" x2="2" y2="500" stroke="#E0E0E0" strokeWidth="4" strokeLinecap="round" className="roadmap-svg-line" />
                </svg>


                <div className="flex flex-col md:w-1/2 md:pr-16 space-y-12 md:space-y-24">
                    <div className="flex flex-col gap-[1rem] md:flex-row-reverse items-center md:justify-between w-full relative z-10 animated-element animate-fade-in-up delay-100 roadmap-step-item">
                        <div className="flex-shrink-0 w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">1</div>
                        <div className="text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tell us what you need</h3>
                            <p className="text-gray-600">Share your requirements and get on a discovery call so that the team can align with your objectives.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[1rem] md:flex-row-reverse items-center md:justify-between w-full relative z-10 animated-element animate-fade-in-up delay-300 roadmap-step-item">
                        <div className="flex-shrink-0 w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">3</div>
                        <div className="text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">The stage is set</h3>
                            <p className="text-gray-600">Once you give the nod, a strong foundation is laid down for the engagement to ensure a hassle-free experience.</p>
                        </div>
                    </div>

                   
                </div>

                <div className="flex flex-col md:w-1/2 md:pl-16 space-y-12 md:space-y-24 mt-0 md:mt-24">
                    <div className="flex flex-col gap-[1rem] md:flex-row items-center md:justify-between w-full relative z-10 animated-element animate-fade-in-up delay-200 roadmap-step-item">
                        <div className="flex-shrink-0 w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">2</div>
                        <div className="text-center md:text-left w-full md:w-auto mt-4 md:mt-0">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Get a well-suited option</h3>
                            <p className="text-gray-600">The ideal option is suggested for you - Dedicated Web Developer Team OR Project-based Delivery.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[1rem] md:flex-row items-center md:justify-between w-full relative z-10 animated-element animate-fade-in-up delay-400 roadmap-step-item">
                        <div className="flex-shrink-0 w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">4</div>
                        <div className="text-center md:text-left w-full md:w-auto mt-4 md:mt-0">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Get excellence delivered</h3>
                            <p className="text-gray-600">Get the ball rolling in 5 days. Expect a seamless experience with a team that delivers its promise.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="roadmap" className="max-md:block hidden py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-forest-green mb-12 animated-element animate-fade-in-up">Our Simple Process</h2>
            <div className="relative flex flex-col items-center md:flex-row md:justify-center md:items-start gap-8 md:gap-16">
                <svg className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-2" viewBox="0 0 4 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2" y1="0" x2="2" y2="500" stroke="#E0E0E0" strokeWidth="4" strokeLinecap="round" className="roadmap-svg-line" />
                </svg>


                
                    <div className="flex flex-col gap-[1rem] md:flex-row-reverse items-center md:justify-between w-full relative z-10 animated-element animate-fade-in-up delay-100 roadmap-step-item">
                        <div className="flex-shrink-0 w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">1</div>
                        <div className="text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tell us what you need</h3>
                            <p className="text-gray-600">Share your requirements and get on a discovery call so that the team can align with your objectives.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[1rem] md:flex-row items-center md:justify-between w-full relative z-10 animated-element animate-fade-in-up delay-200 roadmap-step-item">
                        <div className="flex-shrink-0 w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">2</div>
                        <div className="text-center md:text-left w-full md:w-auto mt-4 md:mt-0">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Get a well-suited option</h3>
                            <p className="text-gray-600">The ideal option is suggested for you - Dedicated Web Developer Team OR Project-based Delivery.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[1rem] md:flex-row-reverse items-center md:justify-between w-full relative z-10 animated-element animate-fade-in-up delay-300 roadmap-step-item">
                        <div className="flex-shrink-0 w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">3</div>
                        <div className="text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">The stage is set</h3>
                            <p className="text-gray-600">Once you give the nod, a strong foundation is laid down for the engagement to ensure a hassle-free experience.</p>
                        </div>
                    </div>

                   

               
                    

                    <div className="flex flex-col gap-[1rem] md:flex-row items-center md:justify-between w-full relative z-10 animated-element animate-fade-in-up delay-400 roadmap-step-item">
                        <div className="flex-shrink-0 w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">4</div>
                        <div className="text-center md:text-left w-full md:w-auto mt-4 md:mt-0">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Get excellence delivered</h3>
                            <p className="text-gray-600">Get the ball rolling in 5 days. Expect a seamless experience with a team that delivers its promise.</p>
                        </div>
                    </div>
            </div>
        </div>
    </section>

    <section id="technology-stack" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-6 animated-element animate-fade-in-up">Our Technology Stack</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 animated-element animate-fade-in-up delay-100">
                Our software engineers are among the world&apos;s best specialists in their fields. Your app will benefit from
                unmatched development expertise from a team familiar with the latest approaches and technologies.
            </p>
            <img src="/stack.svg" alt="Technology Stack" className="animate-fade-in-up delay-200" />
        </div>
    </section>

    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-forest-green mb-12 animated-element animate-fade-in-up">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md animated-element animate-scale-in delay-100">
                    <p className="text-lg italic text-gray-700 mb-6">&ldquo;Sysjini transformed our online presence. Their development team is incredibly skilled and attentive to detail. Highly recommend!&ldquo;</p>
                    <div className="flex items-center">
                        <img src="https://placehold.co/60x60/228B22/FFFFFF?text=JD" alt="Client Avatar" className="w-16 h-16 rounded-full mr-4 border-2 border-forest-green" />
                        <div>
                            <p className="font-bold text-gray-800">Jane Doe</p>
                            <p className="text-sm text-gray-600">CEO, Tech Innovators</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md animated-element animate-scale-in delay-200">
                    <p className="text-lg italic text-gray-700 mb-6">&ldquo;Their digital marketing strategies boosted our leads by 200%. Sysjini is truly a partner for growth!&ldquo;</p>
                    <div className="flex items-center">
                        <img src="https://placehold.co/60x60/228B22/FFFFFF?text=MS" alt="Client Avatar" className="w-16 h-16 rounded-full mr-4 border-2 border-forest-green" />
                        <div>
                            <p className="font-bold text-gray-800">Mark Smith</p>
                            <p className="text-sm text-gray-600">Marketing Director, Global Brands</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md animated-element animate-scale-in delay-300">
                    <p className="text-lg italic text-gray-700 mb-6">&ldquo;The design work was exceptional! They captured our brand essence perfectly. A fantastic experience from start to finish.&ldquo;</p>
                    <div className="flex items-center">
                        <img src="https://placehold.co/60x60/228B22/FFFFFF?text=LC" alt="Client Avatar" className="w-16 h-16 rounded-full mr-4 border-2 border-forest-green" />
                        <div>
                            <p className="font-bold text-gray-800">Lisa Chen</p>
                            <p className="text-sm text-gray-600">Founder, Creative Studios</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-forest-green text-white py-16 md:py-20 rounded-tr-[80px]">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animated-element animate-fade-in-up">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 animated-element animate-fade-in-up delay-100">
                Let&apos;s discuss your project and turn your vision into a stunning reality.
            </p>
            <a href="contact.html" className="bg-white text-forest-green hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animated-element animate-fade-in-up delay-200">
                Get a Free Consultation
            </a>
        </div>
    </section>
    </>
  );
}
