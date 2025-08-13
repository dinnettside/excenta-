import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Excenta AS",
  description: "Skreddersydde møbler og interiør.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className={`${inter.className} bg-[#f9f6ef] text-gray-900 antialiased`}>
        <Navbar /> {/* client-komponent, helt ok å importere her */}
        <main className="pt-nav">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
