import "./globals.css";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
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
        {gtmId ? (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer',${JSON.stringify(gtmId)});`,
            }}
          />
        ) : null}
      </head>
      <body className={`${manrope.className} site-bg`}>
        <ThemeProvider>
        <ErrorBoundary>
          {gtmId ? (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          ) : null}
          <NoSSR>
            <PerformanceOptimizer />
          </NoSSR>
          <StructuredData schema={organizationSchema} />
          <StructuredData schema={websiteSchema} />
          <Header />
          {children}
          <NoSSR fallback={null}>
            <a href="tel:+917017197678" className="floating-button" aria-label="Call Sysjini">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.31.56 3.55.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3.99a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.19 2.43.56 3.55a1 1 0 0 1-.24 1z" />
              </svg>
            </a>
            <a
              href="https://wa.me/7017197678"
              target="_blank"
              rel="noopener noreferrer"
              className="floating-button whatsapp"
              aria-label="Chat with Sysjini on WhatsApp"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.49 1.33 5.01L2 22l5.12-1.3A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.06M12 20.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.04.77.81-2.97-.2-.31A8.18 8.18 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4A8.14 8.14 0 0 1 20.2 12c0 4.52-3.68 8.2-8.2 8.2m4.5-6.16c-.25-.13-1.47-.73-1.7-.81-.23-.09-.39-.13-.56.12-.16.25-.64.81-.78.97-.14.17-.28.19-.53.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.41h-.48c-.17 0-.44.06-.67.31s-.88.86-.88 2.1.9 2.44 1.03 2.61c.12.17 1.76 2.69 4.27 3.77.6.26 1.08.42 1.44.54.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29" />
              </svg>
            </a>
          </NoSSR>
          <Footer />
        </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
