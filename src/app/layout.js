import "./globals.css";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PerformanceOptimizer from "../../components/Performance/PerformanceOptimizer";
import StructuredData, {
  organizationSchema,
  websiteSchema,
} from "../../components/SEO/StructuredData";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import NoSSR from "../../components/NoSSR/NoSSR";
import ThemeProvider from "../../components/theme/ThemeProvider";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Sysjini | Web, App, AI and Growth Solutions",
  description:
    "Sysjini delivers professional web development, app development, AI implementation, design, cloud, and growth systems for modern businesses.",
  keywords:
    "Sysjini, web development, app development, AI solutions, full stack development, UI UX, branding, cloud, devops, SEO, digital marketing",
  authors: [{ name: "Sysjini" }],
  creator: "Sysjini",
  publisher: "Sysjini",
  metadataBase: new URL("https://sysjini.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sysjini | Web, App, AI and Growth Solutions",
    description:
      "Modern digital systems for companies that need polished execution across product, AI, design, cloud, and growth.",
    url: "https://sysjini.in",
    siteName: "Sysjini",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sysjini | Web, App, AI and Growth Solutions",
    description:
      "Professional digital execution across web, mobile, AI, design, growth, and infrastructure.",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sysjini",
    url: "https://sysjini.in",
    logo: "https://sysjini.in/logoGnRm2.png",
    description:
      "Professional web development, app development, AI implementation, design, growth, and cloud delivery company.",
    sameAs: ["https://www.linkedin.com/company/sysjini"],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = localStorage.getItem('sysjini-theme');
                const theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                document.documentElement.dataset.theme = theme;
              } catch (e) {
                document.documentElement.dataset.theme = 'dark';
              }
            })();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P7HG7KGW');`,
          }}
        />
      </head>
      <body className={`${manrope.className} site-bg`}>
        <ThemeProvider>
        <ErrorBoundary>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-P7HG7KGW"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <NoSSR>
            <PerformanceOptimizer />
          </NoSSR>
          <StructuredData schema={organizationSchema} />
          <StructuredData schema={websiteSchema} />
          <Header />
          {children}
          <NoSSR fallback={null}>
            <a href="tel:+917017197678" className="floating-button" aria-label="Call Sysjini">
              <FaPhoneAlt className="h-5 w-5" color="#FFF" />
            </a>
            <a
              href="https://wa.me/7017197678"
              target="_blank"
              rel="noopener noreferrer"
              className="floating-button whatsapp"
              aria-label="Chat with Sysjini on WhatsApp"
            >
              <IoLogoWhatsapp className="h-5 w-5" color="#FFF" />
            </a>
          </NoSSR>
          <Footer />
        </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
