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
      { url: '/icon.png', sizes: '48x48 96x96 192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'DaySpa',
  name: 'Lastri Spa Home Service Banyuwangi',
  image: 'https://lastrispa.com/logo.jpg',
  url: 'https://lastrispa.com',
  telephone: '+62895347499653',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Area Klatak & Kota Banyuwangi',
    addressLocality: 'Banyuwangi',
    addressRegion: 'Jawa Timur',
    postalCode: '68421',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -8.1755,
    longitude: 114.3755,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Klatak' },
    { '@type': 'AdministrativeArea', name: 'Kota Banyuwangi' },
    { '@type': 'AdministrativeArea', name: 'Giri' },
    { '@type': 'AdministrativeArea', name: 'Glagah' },
    { '@type': 'AdministrativeArea', name: 'Licin' },
    { '@type': 'AdministrativeArea', name: 'Kabat' },
    { '@type': 'AdministrativeArea', name: 'Rogojampi' },
  ],
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  }],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.95',
    reviewCount: '156',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan Spa & Pijat Panggilan Banyuwangi',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pijat Balinese Deep Tissue', description: 'Pijat tekanan mendalam Bali dengan kompres boreh rempah hangat' }, priceCurrency: 'IDR', price: '650000' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facial Herbal & Gua Sha Batu Giok', description: 'Perawatan wajah organik dengan masker madu dan pijat Gua Sha' }, priceCurrency: 'IDR', price: '550000' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lulur Kelapa & Rempah Herbal', description: 'Lulur badan kelapa parut segar dan kunyit dengan pijat aromaterapi' }, priceCurrency: 'IDR', price: '480000' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Refleksologi Garam Himalaya', description: 'Pijat refleksi kaki dengan batu garam Himalaya dan singing bowl' }, priceCurrency: 'IDR', price: '420000' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paket Royal Body Refresh', description: 'Kombinasi Balinese Massage, lulur rempah, dan totok wajah' }, priceCurrency: 'IDR', price: '450000' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paket Couple Harmony', description: 'Pijat aromaterapi berdampingan untuk pasangan di hotel atau vila' }, priceCurrency: 'IDR', price: '850000' },
    ],
  },
  sameAs: [
    'https://www.instagram.com/lastri.spa',
    'https://www.tiktok.com/@lastri.spa',
  ],
  description: 'Layanan pijat panggilan dan spa home service profesional 24 jam di Banyuwangi. Terapis wanita bersertifikat ke rumah, hotel, dan vila.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Bagaimana cara memesan layanan Lastri Spa Home Service?',
      acceptedAnswer: { '@type': 'Answer', text: 'Klik tombol Pesan Sekarang atau hubungi via WhatsApp ke 0895347499653. Pilih paket, tentukan waktu, dan kirimkan alamat rumah/hotel/vila Anda.' },
    },
    {
      '@type': 'Question',
      name: 'Apakah layanan ini 100% profesional dan sopan?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ya. Lastri Spa murni melayani terapi pijat kebugaran, relaksasi, dan spa kecantikan oleh terapis wanita profesional. Kami menolak permintaan non-terapeutik.' },
    },
    {
      '@type': 'Question',
      name: 'Apa saja yang perlu disiapkan di lokasi?',
      acceptedAnswer: { '@type': 'Answer', text: 'Cukup ruangan atau kasur yang nyaman. Terapis membawa seluruh perlengkapan: alas linen steril, minyak aromaterapi, kain penutup, dan musik relaksasi.' },
    },
    {
      '@type': 'Question',
      name: 'Area mana saja di Banyuwangi yang dilayani?',
      acceptedAnswer: { '@type': 'Answer', text: 'Klatak, Kota Banyuwangi, Glagah, Licin, Giri, Kabat, Rogojampi, serta hotel dan vila di sekitarnya.' },
    },
    {
      '@type': 'Question',
      name: 'Berapa harga pijat panggilan di Lastri Spa Banyuwangi?',
      acceptedAnswer: { '@type': 'Answer', text: 'Harga mulai dari Rp 420.000 untuk refleksologi hingga Rp 850.000 untuk paket couple. Sudah termasuk perlengkapan steril dan minyak aromaterapi.' },
    },
    {
      '@type': 'Question',
      name: 'Apakah bisa pesan spa panggilan tengah malam?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ya, Lastri Spa beroperasi 24 jam setiap hari. Bisa pesan kapan saja ke rumah, hotel, atau vila Anda di Banyuwangi.' },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8F5EE] text-[#534D2B] font-sans selection:bg-[#C7AF90]/40 selection:text-[#302310]">
        {children}
      </body>
    </html>
  );
}
