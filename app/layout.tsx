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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lastri.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lastri Spa Banyuwangi | Pijat Panggilan Profesional",
  description: "Pijat panggilan & spa home service profesional di Banyuwangi. Terapis wanita bersertifikat ke rumah, hotel & vila dengan peralatan steril lengkap.",
  keywords: [
    "spa banyuwangi",
    "pijat panggilan banyuwangi",
    "spa home service banyuwangi",
    "massage panggilan banyuwangi",
    "pijat panggilan klatak",
    "spa klatak banyuwangi",
    "pijat hotel banyuwangi",
    "pijat villa banyuwangi",
    "lastri spa banyuwangi",
    "pijat tradisional banyuwangi",
    "terapis panggilan banyuwangi kota",
    "spa panggilan banyuwangi 24 jam"
  ],
  authors: [{ name: "Lastri Spa Home Service Banyuwangi" }],
  creator: "Lastri Spa",
  publisher: "Lastri Spa",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.jpg",
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Lastri Spa Banyuwangi",
    title: "Lastri Spa Banyuwangi | Pijat Panggilan Profesional",
    description: "Pijat panggilan & spa home service profesional di Banyuwangi. Terapis wanita bersertifikat ke rumah, hotel & vila dengan peralatan steril lengkap.",
    images: [
      {
        url: "/spa1.jpg",
        width: 1200,
        height: 630,
        alt: "Lastri Spa Home Service Banyuwangi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lastri Spa Banyuwangi | Pijat Panggilan Profesional",
    description: "Pijat panggilan & spa home service profesional di Banyuwangi. Terapis wanita bersertifikat hadir langsung ke tempat Anda.",
    images: ["/spa1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "name": "Lastri Spa Home Service Banyuwangi",
  "image": `${siteUrl}/spa1.jpg`,
  "url": siteUrl,
  "telephone": "+62895347499653",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Area Klatak & Kota Banyuwangi",
    "addressLocality": "Banyuwangi",
    "addressRegion": "Jawa Timur",
    "postalCode": "68421",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.1755,
    "longitude": 114.3755
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Klatak" },
    { "@type": "AdministrativeArea", "name": "Kota Banyuwangi" },
    { "@type": "AdministrativeArea", "name": "Giri" },
    { "@type": "AdministrativeArea", "name": "Glagah" },
    { "@type": "AdministrativeArea", "name": "Licin" },
    { "@type": "AdministrativeArea", "name": "Kabat" },
    { "@type": "AdministrativeArea", "name": "Rogojampi" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.95",
    "reviewCount": "128"
  }
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
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8F5EE] text-[#534D2B] font-sans selection:bg-[#C7AF90]/40 selection:text-[#302310]">
        {children}
      </body>
    </html>
  );
}
