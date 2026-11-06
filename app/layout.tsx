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
  metadataBase: new URL('https://lastrispa.com'),
  title: 'Lastri Spa Banyuwangi | Layanan Spa & Pijat Panggilan Home Service',
  description: 'Layanan pijat dan spa panggilan Banyuwangi terbaik dari Lastri Spa. Hadirkan relaksasi tubuh langsung ke rumah atau hotel Anda bersama terapis profesional.',
  keywords: [
    'spa banyuwangi',
    'spa panggilan banyuwangi',
    'massage banyuwangi',
    'pijat panggilan banyuwangi',
    'lastri spa',
    'home service spa banyuwangi',
  ],
  authors: [{ name: "Lastri Spa Home Service Banyuwangi" }],
  creator: "Lastri Spa",
  publisher: "Lastri Spa",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: 'https://lastrispa.com',
  },
  openGraph: {
    title: 'Lastri Spa Banyuwangi | Layanan Spa & Pijat Panggilan',
    description: 'Pijat dan spa panggilan profesional langsung ke rumah atau hotel Anda di Banyuwangi.',
    url: 'https://lastrispa.com',
    siteName: 'Lastri Spa',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Lastri Spa Banyuwangi',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lastri Spa Banyuwangi | Layanan Spa & Pijat Panggilan',
    description: 'Pijat dan spa panggilan profesional langsung ke rumah atau hotel Anda di Banyuwangi.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'DaySpa',
  name: 'Lastri Spa Banyuwangi',
  image: 'https://lastrispa.com/logo.jpg',
  url: 'https://lastrispa.com',
  telephone: '+62895347499653',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Banyuwangi',
    addressRegion: 'Jawa Timur',
    addressCountry: 'ID',
  },
  areaServed: {
    '@type': 'City',
    name: 'Banyuwangi',
  },
  description: 'Layanan pijat dan spa panggilan profesional home service di area Banyuwangi dan sekitarnya.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8F5EE] text-[#534D2B] font-sans selection:bg-[#C7AF90]/40 selection:text-[#302310]">
        {children}
      </body>
    </html>
  );
}
