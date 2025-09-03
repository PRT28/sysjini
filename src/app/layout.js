import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Script from "next/script"; // ✅ use next/script

import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sysjini - Web Development, App Development & Digital Solutions",
  description: "Sysjini offers cutting-edge web development, app development, SEO, digital marketing, and cloud solutions. Boost your business with secure, scalable, and customized digital services.",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sysjini",
    "url": "https://sysjini.in",
    "logo": "https://sysjini.in/logo.png",
    "description": "Sysjini offers web development, app development, SEO, digital marketing, and cloud solutions for businesses.",
    "sameAs": ["https://www.linkedin.com/company/sysjini"],
  };

  return (
    <html lang="en">
      <head>
        {/* If you're using Next.js 13+, metadata is managed via export not <title> directly */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <a href="tel:+917500269270" className="floating-button" aria-label="Call Us">
            <FaPhoneAlt className="w-6 h-6" color="#FFF" />
        </a>

        <a href="https://wa.me/7500269270" target="_blank" rel="noopener noreferrer" className="floating-button whatsapp" aria-label="Chat on WhatsApp">
            <IoLogoWhatsapp className="w-6 h-6" color="#FFF" />
        </a>
        <Footer />

        {/* ✅ Modern animation script */}
        <Script src="/modern-animation.js" strategy="afterInteractive" />
        {/* ✅ Timeline animations */}
        <Script src="/timeline-animations.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
