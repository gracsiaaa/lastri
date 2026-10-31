export interface Review {
  id: string;
  name: string;
  roleOrLocation: string;
  avatar: string;
  rating: number;
  treatmentName: string;
  comment: string;
  date: string;
}

export const reviewsData: Review[] = [
  {
    id: "rev-1",
    name: "Clarissa Maharani",
    roleOrLocation: "Tamu Vila Banyuwangi",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    treatmentName: "Balinese Massage & Body Scrub",
    comment: "Terapis Lastri datang tepat waktu ke vila kami di Banyuwangi membawa perlengkapan steril lengkap. Pijatan Balinese Deep Tissue benar-benar meredakan pegal sehabis trip!",
    date: "2 minggu yang lalu"
  },
  {
    id: "rev-2",
    name: "Dimas Anggara",
    roleOrLocation: "Tamu Hotel Banyuwangi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    treatmentName: "Warm Stone Massage",
    comment: "Sangat praktis tanpa perlu keluar hotel dan macet-macetan. Pijat batu hangat di kamar hotel sangat profesional, bersih, dan membuat tubuh kembali segar.",
    date: "1 bulan yang lalu"
  },
  {
    id: "rev-3",
    name: "Nadia Putri",
    roleOrLocation: "Residensi Kota Banyuwangi",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    treatmentName: "Facial Acupressure & Gua Sha",
    comment: "Pesan layanan lulur dan totok wajah langsung ke rumah. Terapisnya sangat sopan, ramah, dan mengutamakan kebersihan serta privasi.",
    date: "3 minggu yang lalu"
  },
  {
    id: "rev-4",
    name: "dr. Ryan Ardiansyah",
    roleOrLocation: "Tamu Hotel Banyuwangi",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    treatmentName: "Himalayan Salt Reflexology",
    comment: "Pelayanan home service yang sangat profesional! Terapis membawa linen steril, minyak aromaterapi murni, dan musik relaksasi langsung ke tempat saya.",
    date: "1 bulan yang lalu"
  }
];
