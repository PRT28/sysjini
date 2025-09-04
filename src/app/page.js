'use client'
import { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import { ScrollProgress, GradientOrbs, FloatingParticles } from "../../components/Animation/ModernEffects";
import { FloatingTechCube, TechDNAHelix, NetworkNodes, HolographicCode, CircuitBoard } from "../../components/3D";
import ClientWrapper from "../../components/ClientWrapper/ClientWrapper";
import NoSSR from "../../components/NoSSR/NoSSR";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure we're on the client side
    setIsMounted(true);

    // Ensure page is fully loaded before showing content
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    console.log('Clicked');
  }

  // Show loading state while components are initializing
  if (!isMounted || !isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-forest-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  return (
    <ErrorBoundary>
      <Head>
        <link rel="canonical" href="https://sysjini.in" />
      </Head>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-forest-50 to-sage-50">
          <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-forest-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-sage-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-500"></div>
        </div>

        {/* 3D Floating Tech Cube */}
        <NoSSR fallback={<div className="absolute top-20 right-20 w-96 h-96 opacity-60 hidden lg:block"></div>}>
          <div className="absolute top-20 right-20 w-96 h-96 opacity-60 hidden lg:block">
            <FloatingTechCube />
          </div>
        </NoSSR>

        <div className="container mx-auto px-4 text-center relative z-10 pt-20">
          <div className="max-w-5xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animated-element animate-fade-in-up">
              <span className="bg-gradient-to-r from-emerald-600 via-forest-600 to-sage-700 bg-clip-text text-transparent">
                Elevate Your Business
              </span>
              <br />
              <span className="text-gray-800">
                in the Digital Landscape
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-600 leading-relaxed animated-element animate-fade-in-up delay-200">
              Sysjini is a dynamic service provider offering
              <span className="text-emerald-600 font-semibold"> customized solutions </span>
              in web and app development, SEO, digital marketing, and designing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animated-element animate-fade-in-up delay-400">
              <a href="/services" className="btn-primary hover-lift text-lg px-8 py-4">
                Explore Our Services
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button
                onClick={openModal}
                className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
              >
                Get Free Quote
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animated-element animate-fade-in delay-1000">
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
        <NoSSR fallback={<div className="absolute bottom-10 left-10 w-80 h-80 opacity-30 hidden xl:block"></div>}>
          <div className="absolute bottom-10 left-10 w-80 h-80 opacity-30 hidden xl:block">
            <TechDNAHelix />
          </div>
        </NoSSR>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-element animate-fade-in-up">
              <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                Why Choose Sysjini?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animated-element animate-fade-in-up delay-200">
              We combine innovation, expertise, and dedication to deliver exceptional digital solutions that drive your business forward.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="modern-card hover-lift p-8 rounded-2xl text-center animated-element animate-scale-in delay-100">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-green">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-200 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our professionals are highly skilled and dedicated to delivering excellence with cutting-edge technologies and best practices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="modern-card hover-lift p-8 rounded-2xl text-center animated-element animate-scale-in delay-200">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-forest-400 to-forest-600 rounded-2xl flex items-center justify-center shadow-green">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1v-1a2 2 0 114 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-forest-200 rounded-full animate-pulse delay-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Customized Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                We tailor every solution to fit your unique business requirements perfectly, ensuring maximum impact and ROI.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="modern-card hover-lift p-8 rounded-2xl text-center animated-element animate-scale-in delay-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center shadow-green">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-sage-200 rounded-full animate-pulse delay-600"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Results-Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Our focus is on delivering measurable results that drive your business forward with data-driven strategies and proven methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Timeline Process Section */}
      <section id="roadmap" className="py-20 md:py-32 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-forest-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-morph-circle"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-forest-200 rounded-full mix-blend-multiply filter blur-3xl animate-morph-circle" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sage-200 rounded-full mix-blend-multiply filter blur-3xl animate-morph-circle" style={{animationDelay: '4s'}}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-emerald-100 to-forest-100 text-emerald-700 rounded-full text-sm font-semibold tracking-wide uppercase animate-slide-in-timeline">
                Our Process
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 animated-element animate-fade-in-up">
              <span className="bg-gradient-to-r from-emerald-600 via-forest-600 to-sage-700 bg-clip-text text-transparent">
                Journey to
              </span>
              <br />
              <span className="text-gray-800">Digital Excellence</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animated-element animate-fade-in-up delay-200">
              Experience our revolutionary 4-step process that transforms your vision into
              <span className="text-emerald-600 font-semibold"> digital reality </span>
              with precision and creativity.
            </p>
          </div>

          {/* Vertical Zigzag Timeline */}
          <div className="timeline-container relative">
            {/* Central Timeline Line */}
            <div className="timeline-line" id="timeline-line">
              <div className="timeline-progress" id="timeline-progress"></div>
            </div>

            {/* Timeline Steps in Zigzag Pattern */}
            <div className="relative z-10">

              {/* Step 1 - Discovery (Left Side) */}
              <div className="timeline-step animated-element animate-step-reveal delay-100 group">
                {/* Step Number - Centered on Timeline */}
                <div className="timeline-step-number">
                  <div className="step-number w-20 h-20 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl border-4 border-white animate-glow-pulse">
                    01
                  </div>
                </div>

                {/* Content Card */}
                <div className="timeline-content">
                  <div className="modern-card p-8 rounded-3xl group-hover:scale-105 transition-all duration-500 relative overflow-hidden shadow-lg">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-emerald-500 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                      <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-emerald-400 rounded-full animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
                    </div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-6 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">Discovery & Vision</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Share your dreams and requirements. We dive deep into understanding your vision through detailed discovery calls and strategic planning sessions.
                      </p>

                      {/* Interactive Elements */}
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 - Strategy (Right Side) */}
              <div className="timeline-step animated-element animate-step-reveal delay-200 group">
                {/* Step Number - Centered on Timeline */}
                <div className="timeline-step-number">
                  <div className="step-number w-20 h-20 bg-gradient-to-br from-forest-400 via-forest-500 to-forest-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl border-4 border-white animate-glow-pulse" style={{animationDelay: '0.5s'}}>
                    02
                  </div>
                </div>

                {/* Content Card */}
                <div className="timeline-content">
                  <div className="modern-card p-8 rounded-3xl group-hover:scale-105 transition-all duration-500 relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 left-4 w-20 h-20 border-2 border-forest-500 rounded-lg animate-pulse" style={{animationDuration: '3s'}}></div>
                      <div className="absolute bottom-4 right-4 w-14 h-14 border-2 border-forest-400 rounded-lg animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
                    </div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-6 bg-gradient-to-br from-forest-100 to-forest-200 rounded-2xl flex items-center justify-center ml-auto">
                        <svg className="w-8 h-8 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-forest-600 transition-colors duration-300">Strategic Planning</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        We craft the perfect solution architecture. Choose between our dedicated development teams or project-based delivery models.
                      </p>

                      <div className="flex space-x-2 justify-end">
                        <div className="w-2 h-2 bg-forest-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-forest-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-forest-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 - Foundation (Left Side) */}
              <div className="timeline-step animated-element animate-step-reveal delay-300 group">
                {/* Step Number - Centered on Timeline */}
                <div className="timeline-step-number">
                  <div className="step-number w-20 h-20 bg-gradient-to-br from-sage-400 via-sage-500 to-sage-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl border-4 border-white animate-glow-pulse" style={{animationDelay: '1s'}}>
                    03
                  </div>
                </div>

                {/* Content Card */}
                <div className="timeline-content">
                  <div className="modern-card p-8 rounded-3xl group-hover:scale-105 transition-all duration-500 relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 right-4 w-18 h-18 border-2 border-sage-500 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
                      <div className="absolute bottom-4 left-4 w-10 h-10 border-2 border-sage-400 rounded-full animate-ping" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
                    </div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-6 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-sage-600 transition-colors duration-300">Foundation Building</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        With your approval, we establish a rock-solid foundation. Our team sets up the infrastructure for a seamless development experience.
                      </p>

                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-sage-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-sage-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-sage-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 - Excellence (Right Side) */}
              <div className="timeline-step animated-element animate-step-reveal delay-400 group">
                {/* Step Number - Centered on Timeline */}
                <div className="timeline-step-number">
                  <div className="step-number w-20 h-20 bg-gradient-to-br from-mint-400 via-mint-500 to-mint-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl border-4 border-white animate-glow-pulse" style={{animationDelay: '1.5s'}}>
                    04
                  </div>
                </div>

                {/* Content Card */}
                <div className="timeline-content">
                  <div className="modern-card p-8 rounded-3xl group-hover:scale-105 transition-all duration-500 relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 left-4 w-16 h-16 border-2 border-mint-500 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
                      <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-mint-400 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
                    </div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-6 bg-gradient-to-br from-mint-100 to-mint-200 rounded-2xl flex items-center justify-center ml-auto">
                        <svg className="w-8 h-8 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-mint-600 transition-colors duration-300">Excellence Delivered</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Launch in just 5 days! Experience our commitment to excellence with a seamless delivery that exceeds expectations and promises.
                      </p>

                      <div className="flex space-x-2 justify-end">
                        <div className="w-2 h-2 bg-mint-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-mint-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-mint-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 animated-element animate-fade-in-up delay-500">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-emerald-50 to-forest-50 px-8 py-4 rounded-2xl border border-emerald-200">
              <span className="text-lg font-semibold text-gray-700">Ready to start your journey?</span>
              <a href="/contact" className="bg-gradient-to-r from-emerald-600 to-forest-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-forest-700 transition-all duration-300 hover:scale-105 shadow-lg">
                Begin Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="technology-stack" className="py-20 md:py-32 relative overflow-hidden">
        {/* 3D Network Nodes Background */}
        <NoSSR fallback={<div className="absolute top-0 right-0 w-96 h-96 opacity-40 hidden lg:block"></div>}>
          <div className="absolute top-0 right-0 w-96 h-96 opacity-40 hidden lg:block">
            <NetworkNodes />
          </div>
        </NoSSR>

        {/* 3D Circuit Board Background */}
        <NoSSR fallback={<div className="absolute bottom-0 left-0 w-80 h-80 opacity-30 hidden xl:block"></div>}>
          <div className="absolute bottom-0 left-0 w-80 h-80 opacity-30 hidden xl:block">
            <CircuitBoard />
          </div>
        </NoSSR>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-element animate-fade-in-up">
              <span className="bg-gradient-to-r from-emerald-600 to-forest-700 bg-clip-text text-transparent">
                Our Technology Stack
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animated-element animate-fade-in-up delay-200">
              Our software engineers are among the world&apos;s best specialists in their fields. Your app will benefit from
              unmatched development expertise from a team familiar with the latest approaches and technologies.
            </p>
          </div>

          {/* Technology Stack Visual - 3D Holographic Code */}
          <div className="flex justify-center animated-element animate-scale-in delay-300">
            <div className="modern-card p-8 rounded-3xl max-w-4xl w-full h-96 relative overflow-hidden">
              <NoSSR fallback={<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-forest-900/20"></div>}>
                <div className="absolute inset-0">
                  <HolographicCode />
                </div>
              </NoSSR>

              {/* Overlay with tech stack info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <Image
                    src="/stack.svg"
                    alt="Technology Stack"
                    width={1000}
                    height={1000}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Technology Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animated-element animate-fade-in-up delay-400">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-forest-400 to-forest-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Frontend</h3>
              <p className="text-gray-600">React, Next.js, Vue.js, Angular</p>
            </div>

            <div className="text-center animated-element animate-fade-in-up delay-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-forest-400 to-forest-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Backend</h3>
              <p className="text-gray-600">Node.js, Python, PHP, .NET</p>
            </div>

            <div className="text-center animated-element animate-fade-in-up delay-600">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Database</h3>
              <p className="text-gray-600">MongoDB, PostgreSQL, MySQL</p>
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

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-forest-600 to-sage-700">
          <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float delay-500"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 animated-element animate-fade-in-up">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-emerald-200 to-mint-200 bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-12 leading-relaxed animated-element animate-fade-in-up delay-200">
              Let&apos;s discuss your project and turn your vision into a stunning reality.
              Get started with a free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animated-element animate-fade-in-up delay-400">
              <a
                href="/contact"
                className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold py-4 px-10 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg"
              >
                Get a Free Consultation
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="tel:+917017197678"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Call Now: +91 7017197678
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animated-element animate-fade-in-up delay-600">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+ Years</div>
                <div className="text-emerald-200">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-emerald-200">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-emerald-200">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <button
        onClick={openModal}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-emerald-600 to-forest-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 hover:scale-110 transition-all duration-300 group"
        aria-label="Open contact form"
      >
        <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>

        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-emerald-600 animate-ping opacity-20"></div>
      </button>
    </ErrorBoundary>
  );
}
