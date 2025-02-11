import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css/animate.compat.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Providers } from "./provider";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sysjini",
    "url": "https://sysjini.in",
    "logo": "https://sysjini.in/logo.png",
    "description": "Sysjini offers web development, app development, SEO, digital marketing, and cloud solutions for businesses.",
    "sameAs": [
      "https://www.linkedin.com/company/sysjini",
    ]
  };

  return (
    <html lang="en">
      <head>
        <title>Sysjini - Web Development, App Development & Digital Solutions</title>
        <meta name="description" content="Sysjini offers cutting-edge web development, app development, SEO, digital marketing, and cloud solutions. Boost your business with secure, scalable, and customized digital services." />
        <meta name="keywords" content="Sysjini, Web Development, App Development, SEO Services, Digital Marketing, Cloud Solutions, Shopify Integration, Full-Stack Development, AWS Hosting, Secure Web Applications" />
        <meta property="og:title" content="Sysjini - Empowering Your Digital Journey" />
        <meta property="og:description" content="Discover Sysjini's expert web and app development services. We help businesses grow with SEO, digital marketing, and secure cloud solutions." />
        <meta property="og:image" content="https://sysjini.in/logo.png" />
        <meta property="og:url" content="https://sysjini.in" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sysjini - Full-Stack Digital Solutions" />
        <meta name="twitter:description" content="Leading the way in web development, app development, SEO, and digital marketing. Partner with Sysjini for growth-driven digital solutions." />
        {/* <meta name="twitter:image" content="https://sysjini.in/twitter-image.jpg"> */}
        <link rel="canonical" href="https://sysjini.in/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />


      </head>
      <body className={inter.className}>
        <Header />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
