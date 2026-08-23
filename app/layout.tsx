import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HAIP Law Firm | Kantor Advokat & Konsultan Hukum Boutique Jakarta",
  description: "H A I P Law Firm adalah kantor hukum boutique terkemuka di Jakarta yang berdedikasi memberikan solusi hukum komprehensif, mulai dari litigasi kompleks hingga konsultasi bisnis korporasi dengan standar integritas tertinggi.",
  keywords: "Kantor Hukum Jakarta, Pengacara Litigasi, Konsultan Hukum Bisnis, HAIP Law Firm, Advokat Indonesia, Hukum Perusahaan, Hukum Perdata, Hukum Pidana",
  authors: [{ name: "H A I P Law Firm" }],
  openGraph: {
    title: "HAIP Law Firm | Kantor Advokat & Konsultan Hukum Boutique Jakarta",
    description: "Integritas Hukum. Otoritas dalam Tindakan. Hubungi kami untuk konsultasi hukum profesional.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#fcfcfc]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


