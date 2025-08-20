import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Excenta AS",
  description: "Skreddersydde møbler og interiør.",
  keywords: 'skreddersydde møbler, interiør, møbeldesign, Excenta, Norge',
  authors: [{ name: 'Excenta AS' }],
  creator: 'Excenta AS',
  openGraph: {
    title: 'Excenta AS',
    description: 'Skreddersydde møbler og interiør.',
    url: 'https://excenta.no',
    siteName: 'Excenta AS',
    locale: 'nb_NO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-[#f9f6ef] text-gray-900 antialiased`}>
        <Navbar /> {/* client-komponent, helt ok å importere her */}
        <main className="pt-nav">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
