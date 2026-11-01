export interface Review {
  id: string;
  name: string;
  timeAgo: string;
  avatar: string;
  rating: number;
  treatmentName: string;
  comment: string;
}

export const reviewsData: Review[] = [
  {
    id: "rev-1",
    name: "Dewi Lestari",
    timeAgo: "1 minggu yang lalu",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    treatmentName: "Balinese Massage",
    comment: "Sangat puas dengan pelayanannya. Terapis datang tepat waktu ke hotel, ramah dan sopan. Pijatannya mantap bikin badan enteng setelah seharian keliling Banyuwangi. Recommended banget!"
  },
  {
    id: "rev-2",
    name: "Bambang Kurniawan",
    timeAgo: "2 minggu yang lalu",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    treatmentName: "Deep Tissue Massage",
    comment: "Home service terbaik di Banyuwangi! Terapis bawa perlengkapan lengkap, kainnya wangi dan bersih. Pijatan punggungnya pas di titik-titik pegal, badan langsung segar kembali."
  },
  {
    id: "rev-3",
    name: "Rina Anggraeni",
    timeAgo: "3 minggu yang lalu",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    treatmentName: "Body Scrub & Massage",
    comment: "Enak banget ga perlu ribet keluar rumah. Lulurnya wangi herbal alami, kulit jadi halus dan bersih. Terapisnya sangat profesional dan menjaga privasi tamu."
  },
  {
    id: "rev-4",
    name: "Ahmad Fauzi",
    timeAgo: "1 bulan yang lalu",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    treatmentName: "Reflexology & Foot Massage",
    comment: "Pesan pijat kaki dan refleksi ke vila malam-malam dilayani dengan sangat baik. Titik refleksinya tepat, tidur jadi pulas sekali. Pasti langganan kalau ke Banyuwangi lagi."
  },
  {
    id: "rev-5",
    name: "Siti Rahmawati",
    timeAgo: "1 bulan yang lalu",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    treatmentName: "Totok Wajah & Relaksasi",
    comment: "Totok wajahnya bikin rileks maksimal, pusing dan pegal leher langsung hilang. Pelayanan super higienis dan terapisnya sangat telaten. Terima kasih Lastri Spa!"
  }
];
