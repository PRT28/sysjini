'use client'
import { useState, useEffect } from 'react';
import Head from "next/head";
import { ScrollProgress } from "../../../components/Animation/ModernEffects";
import ContactModal from "../../../components/ContactModal/ContactModal";
import useContactModal from "../../../hooks/useContactModal";
import ErrorBoundary from "../../../components/ErrorBoundary/ErrorBoundary";
import LandingHeader from "../../../components/Header/LandingHeader";
import { FloatingTechCube, TechDNAHelix, NetworkNodes, CircuitBoard } from "../../../components/3D";

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isModalOpen: isOpen, openModal, closeModal } = useContactModal();

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '100000',
    message: ''
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setFormState({ isSubmitting: false, isSubmitted: true, error: null });
        setFormData({
          name: '',
          email: '',
          service: '',
          budget: '100000',
          message: ''
        });
      } else {
        setFormState({
          isSubmitting: false,
          isSubmitted: false,
          error: result.errors ? result.errors.join(', ') : result.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState({ isSubmitting: false, isSubmitted: false, error: 'Failed to send message. Please try again.' });
    }
  };

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Add a subtle highlight effect to the contact form
      setTimeout(() => {
        const contactForm = contactSection.querySelector('form');
        if (contactForm) {
          contactForm.style.transform = 'scale(1.02)';
          contactForm.style.transition = 'transform 0.3s ease';
          setTimeout(() => {
            contactForm.style.transform = 'scale(1)';
          }, 300);
        }
      }, 800);
    }
  };

  // Smooth scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    setIsLoaded(true);

    // Auto-open contact modal after 3 seconds
    const timer = setTimeout(() => {
      console.log('🚀 Attempting to open modal...');

      // Check if modal should be shown (not shown in current session)
      const hasShownInSession = sessionStorage.getItem('contactModalShown');
      if (!hasShownInSession) {
        // openModal();
        sessionStorage.setItem('contactModalShown', true);
        console.log('📱 Modal opened and session storage set');
      } else {
        console.log('⏭️ Modal already shown in this session');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [openModal]);

  // Debug effect to monitor modal state
  useEffect(() => {
    console.log('🔍 Modal state changed:', { isOpen });
  }, [isOpen]);

  // Hide global header and footer for landing page
  useEffect(() => {
    // Hide global header
    const globalHeader = document.querySelector('header:not([data-landing-header])');
    const globalFooter = document.querySelector('footer:not([data-landing-footer])');
    // Hide global floating buttons (but not our landing page ones)
    const globalFloatingButtons = document.querySelectorAll('.floating-button:not([data-landing-floating])');

    if (globalHeader) globalHeader.style.display = 'none';
    if (globalFooter) globalFooter.style.display = 'none';
    globalFloatingButtons.forEach(btn => btn.style.display = 'none');

    // Cleanup function to restore global elements when leaving the page
    return () => {
      if (globalHeader) globalHeader.style.display = '';
      if (globalFooter) globalFooter.style.display = '';
      globalFloatingButtons.forEach(btn => btn.style.display = '');
    };
  }, []);

  const services = [
    {
      title: "Web & Mobile App Development",
      description: "Full-stack development solutions with modern frameworks",
      icon: "💻",
      gradient: "from-emerald-500 to-forest-600",
      features: ["React & Next.js", "Node.js Backend", "Mobile Apps", "Cloud Deployment"]
    },
    {
      title: "Digital Marketing & SEO",
      description: "Data-driven marketing strategies for growth",
      icon: "📈",
      gradient: "from-forest-500 to-emerald-600",
      features: ["SEO Optimization", "Social Media", "PPC Campaigns", "Analytics"]
    },
    {
      title: "Design & Branding",
      description: "Creative visual identity and brand development",
      icon: "🎨",
      gradient: "from-sage-500 to-mint-600",
      features: ["Logo Design", "Brand Identity", "UI/UX Design", "Print Design"]
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store development and optimization",
      icon: "🛒",
      gradient: "from-mint-500 to-emerald-600",
      features: ["Shopify Development", "Payment Integration", "Inventory Management", "SEO"]
    },
    {
      title: "Cloud & DevOps",
      description: "Modern infrastructure and deployment solutions",
      icon: "☁️",
      gradient: "from-forest-500 to-sage-600",
      features: ["AWS/Azure", "CI/CD Pipelines", "Docker", "Monitoring"]
    },
    {
      title: "UI/UX Consulting",
      description: "User-centered design and experience optimization",
      icon: "🔍",
      gradient: "from-sage-500 to-emerald-600",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    }
  ];

  const timeline = [
    {
      phase: "Discovery",
      duration: "Week 1",
      description: "Understanding your requirements and goals",
      icon: "🔍"
    },
    {
      phase: "Planning",
      duration: "Week 2",
      description: "Strategic planning and architecture design",
      icon: "📋"
    },
    {
      phase: "Development",
      duration: "Weeks 3-8",
      description: "Agile development with regular updates",
      icon: "⚡"
    },
    {
      phase: "Testing",
      duration: "Week 9",
      description: "Comprehensive testing and quality assurance",
      icon: "🧪"
    },
    {
      phase: "Launch",
      duration: "Week 10",
      description: "Deployment and go-live support",
      icon: "🚀"
    }
  ];

  return (
    <ErrorBoundary>
      <div className={`min-h-screen transition-opacity duration-1000 ₹{isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ paddingTop: 0 }}>
        <Head>
          <title>Sysjini - Complete Digital Solutions | Landing</title>
          <meta name="description" content="Transform your business with our comprehensive digital solutions - from web development to digital marketing." />
        </Head>

        <LandingHeader onContactClick={scrollToContact} />
        <ScrollProgress />
        <ContactModal isOpen={isOpen} onClose={closeModal} />

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917500269270?text=Hi%20Sysjini,%20I'm%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-button whatsapp group"
            data-landing-floating="true"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>

          {/* Call Button */}
          <a
            href="tel:+917500269270"
            className="floating-button group"
            aria-label="Call us"
          >
            <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-forest-50 to-sage-50">
            <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-forest-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-sage-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-500"></div>
          </div>

          {/* 3D Floating Tech Cube */}
          <div className="absolute top-20 right-20 w-96 h-96 opacity-60 hidden lg:block">
            <FloatingTechCube />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animated-element animate-fade-in-up">
                <span className="bg-gradient-to-r from-emerald-600 via-forest-600 to-sage-700 bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="text-gray-800">Digitally</span>
              </h1>

              <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-600 leading-relaxed animated-element animate-fade-in-up delay-200">
                Complete digital solutions from 
                <span className="text-emerald-600 font-semibold"> web development</span> to 
                <span className="text-forest-600 font-semibold"> digital marketing</span>. 
                We help businesses thrive in the digital world.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animated-element animate-fade-in-up delay-400">
                <button
                  onClick={scrollToContact}
                  className="btn-primary hover-lift text-lg px-8 py-4"
                >
                  Start Your Project
                  <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  onClick={scrollToServices}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-10 w-80 h-80 opacity-30 hidden xl:block">
            <TechDNAHelix />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-emerald-50 relative">
          {/* 3D DNA Helix Background */}
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 animated-element animate-fade-in-up">
                <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animated-element animate-fade-in-up delay-200">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="group modern-card p-8 rounded-3xl hover-lift animated-element animate-slide-up"
                  style={{ animationDelay: `₹{index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ₹{service.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={scrollToContact}
                    className="w-full btn-outline group-hover:btn-primary transition-all duration-300"
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* 3D Network Nodes Background */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-40 hidden lg:block">
            <NetworkNodes />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-element animate-fade-in-up">
                <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                  Our Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animated-element animate-fade-in-up delay-200">
                A proven methodology that ensures project success from start to finish
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((phase, index) => (
                <div
                  key={phase.phase}
                  className="flex items-center mb-12 animated-element animate-slide-up"
                  style={{ animationDelay: `₹{index * 150}ms` }}
                >
                  {/* Timeline Line */}
                  <div className="hidden md:flex flex-col items-center mr-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-forest-600 flex items-center justify-center text-2xl shadow-green ₹{index === 0 ? 'animate-pulse' : ''}`}>
                      {phase.icon}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-1 h-20 bg-gradient-to-b from-emerald-400 to-forest-600 mt-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 modern-card p-6 rounded-2xl hover-lift">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{phase.phase}</h3>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
          {/* 3D Circuit Board Background */}
          <div className="absolute bottom-0 left-0 w-80 h-80 opacity-30 hidden xl:block">
            <CircuitBoard />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-element animate-fade-in-up">
                <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                  Technology Stack
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto animated-element animate-fade-in-up delay-200">
                We use cutting-edge technologies to build scalable, secure, and high-performance solutions
              </p>
            </div>

            <div className="flex justify-center animated-element animate-scale-in delay-300">
              <div className="modern-card p-8 rounded-3xl max-w-4xl w-full">
                <img
                  src="/stack.svg"
                  alt="Technology Stack"
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-emerald-50 to-forest-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-forest-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-element animate-fade-in-up">
              <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animated-element animate-fade-in-up delay-200">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about their experience with Sysjini.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-100">
              <div className="flex items-center mb-6">
                <div className="flex text-emerald-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                Sysjini transformed our online presence. Their development team is incredibly skilled and attentive to detail. Highly recommend!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  NK
                </div>
                <div>
                  <p className="font-bold text-gray-800">Navdeep Kambhoj</p>
                  <p className="text-sm text-gray-600">Co Founder, Glazia Windoors</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-200">
              <div className="flex items-center mb-6">
                <div className="flex text-emerald-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                Their digital marketing strategies boosted our leads by 200%. Sysjini is truly a partner for growth!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-forest-400 to-forest-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RP
                </div>
                <div>
                  <p className="font-bold text-gray-800">Rohan Pal</p>
                  <p className="text-sm text-gray-600">Founder, Meat Wala</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="modern-card hover-lift p-8 rounded-2xl animated-element animate-scale-in delay-300">
              <div className="flex items-center mb-6">
                <div className="flex text-emerald-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                The design work was exceptional! They captured our brand essence perfectly. A fantastic experience from start to finish.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  YM
                </div>
                <div>
                  <p className="font-bold text-gray-800">Yash Manocha</p>
                  <p className="text-sm text-gray-600">Co Founder, Karvaann</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Past Projects Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
          {/* 3D Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-40 hidden lg:block">
            <FloatingTechCube />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-element animate-fade-in-up">
                <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                  Our Recent Projects
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animated-element animate-fade-in-up delay-200">
                Take a look at some of our recent work and see how we&apos;ve helped businesses transform their digital presence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Project 1 - Glazia */}
              <div className="modern-card hover-lift p-8 rounded-3xl animated-element animate-scale-in delay-100">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Glazia</h3>
                      <p className="text-gray-600">Beauty & Wellness Platform</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">Glazia Windoors</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Glazia is a tech-enabled aggregator empowering fabricators and businesses with efficient, cost-effective, and high-quality procurement solutions for aluminium profiles, hardware, and accessories.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">React</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Node.js</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">MongoDB</span>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://www.glazia.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center hover-lift"
                    >
                      View Live Site
                      <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 - Meat Wala */}
              <div className="modern-card hover-lift p-8 rounded-3xl animated-element animate-scale-in delay-200">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Meat Wala</h3>
                      <p className="text-gray-600">Fresh Meat Delivery</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">Meat Wala - Fresh Delivery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    An online fresh meat delivery platform offering premium quality meat products with
                    real-time inventory management, order tracking, and secure payment processing.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">E-commerce</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Flutter</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Payment Gateway</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Inventory</span>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://meat-wala.sysjini.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center hover-lift"
                    >
                      View Live Site
                      <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 animated-element animate-fade-in-up delay-400">
              <p className="text-xl text-gray-600 mb-8">
                Ready to see your project come to life?
              </p>
              <button
                onClick={scrollToContact}
                className="btn-primary hover-lift text-lg px-8 py-4"
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="py-20 md:py-32 bg-gradient-to-br from-emerald-600 via-forest-600 to-sage-700 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-float"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-float delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 animated-element animate-fade-in-up">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed animated-element animate-fade-in-up delay-200">
                Let&apos;s discuss your ideas and turn them into reality. Get a free consultation and quote today.
              </p>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Contact Info */}
                <div className="text-left animated-element animate-fade-in-up delay-400">
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-emerald-100 text-sm">Phone</div>
                        <div className="text-white font-semibold">+91 7500269270</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-emerald-100 text-sm">Email</div>
                        <div className="text-white font-semibold">prithvi.raj@sysjini.com</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-emerald-100 text-sm">Location</div>
                        <div className="text-white font-semibold">Gurugram, India</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="animated-element animate-fade-in-up delay-600">
                  {formState.isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-emerald-100 mb-6">Thank you for contacting us. We&apos;ll get back to you soon.</p>
                      <button
                        onClick={() => setFormState({ isSubmitting: false, isSubmitted: false, error: null })}
                        className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200"
                          required
                          disabled={formState.isSubmitting}
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200"
                          required
                          disabled={formState.isSubmitting}
                        />
                      </div>

                      <div>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200"
                          required
                          disabled={formState.isSubmitting}
                        >
                          <option value="" className="text-gray-800">Select Service</option>
                          <option value="web-development" className="text-gray-800">Web & Mobile Development</option>
                          <option value="digital-marketing" className="text-gray-800">Digital Marketing & SEO</option>
                          <option value="design-branding" className="text-gray-800">Design & Branding</option>
                          <option value="ecommerce" className="text-gray-800">E-commerce Solutions</option>
                          <option value="cloud-devops" className="text-gray-800">Cloud & DevOps</option>
                          <option value="ui-ux" className="text-gray-800">UI/UX Consulting</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-emerald-100 text-sm font-semibold mb-3">
                          Budget Range: ₹20,000 - ₹5,00,000
                        </label>
                        <div className="space-y-4">
                          <input
                            type="range"
                            name="budget"
                            min="20000"
                            max="500000"
                            step="5000"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                            style={{
                              background: `linear-gradient(to right, #10b981 0%, #10b981 ${((formData.budget - 20000) / (500000 - 20000)) * 100}%, rgba(255,255,255,0.2) ${((formData.budget - 20000) / (500000 - 20000)) * 100}%, rgba(255,255,255,0.2) 100%)`
                            }}
                            disabled={formState.isSubmitting}
                          />
                          <div className="text-center text-emerald-100 font-semibold text-lg">
                            ₹{parseInt(formData.budget).toLocaleString('en-IN')}
                          </div>
                        </div>
                      </div>

                      <div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="3"
                          placeholder="Brief project description (optional)..."
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200 resize-none"
                          disabled={formState.isSubmitting}
                        />
                      </div>

                      {formState.error && (
                        <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-xl">
                          <p className="text-red-200 text-sm">{formState.error}</p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={formState.isSubmitting}
                        className="w-full bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-emerald-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {formState.isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-emerald-600 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer data-landing-footer="true" className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-forest-600 rounded-xl flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold">Sysjini</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Transforming businesses through innovative digital solutions.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/services/web-and-mobile-app-development" className="hover:text-emerald-400 transition-colors">Web Development</a></li>
                  <li><a href="/services/digital-marketing-and-seo" className="hover:text-emerald-400 transition-colors">Digital Marketing</a></li>
                  <li><a href="/services/design-and-branding" className="hover:text-emerald-400 transition-colors">Design & Branding</a></li>
                  <li><a href="/services/e-commerce-solutions" className="hover:text-emerald-400 transition-colors">E-commerce</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                  <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                  <li><a href="/blog" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                  <li><a href="/careers" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Sysjini. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}
