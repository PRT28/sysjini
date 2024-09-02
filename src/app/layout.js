import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css/animate.compat.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sysjini</title>
        <meta name="description" content="Transforming Ideas into Impactful Digital Experiences, One Tailored Solution at a Time"></meta>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
