import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lastri Spa Home Service Banyuwangi | Layanan Pijat Panggilan Profesional",
  description: "Layanan Pijat Panggilan & Spa Home Service Profesional di Banyuwangi. Terapis master berlisensi (Terapis Lastri) datang langsung ke rumah, hotel, atau vila Anda membawa peralatan steril lengkap.",
  keywords: ["spa banyuwangi", "home service spa banyuwangi", "pijat panggilan banyuwangi", "massage panggilan banyuwangi", "lastri spa home service", "pijat hotel banyuwangi"],
  authors: [{ name: "Lastri Spa Home Service Banyuwangi" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-[#1B1B1B] font-sans selection:bg-[#1B4332]/15 selection:text-[#1B4332]">
        {children}
      </body>
    </html>
  );
}
