export interface Treatment {
  id: string;
  name: string;
  category: 'Massage' | 'Face' | 'Body' | 'Special';
  shortDesc: string;
  fullDesc: string;
  duration: string;
  isHomeService: boolean;
  isInStudio: boolean;
  price?: string;
  image: string;
  fallbackImage?: string;
  benefits: string[];
  steps: string[];
}

export const treatmentsData: Treatment[] = [
  {
    id: "balinese-massage",
    name: "Full Body / Balinese Massage",
    category: "Massage",
    shortDesc: "Pijat tradisional Bali untuk melancarkan sirkulasi dan relaksasi tubuh.",
    fullDesc: "Terapi pijat tradisional khas Bali memadukan urutan lembut ritmis, akupresur, dan aromaterapi minyak esensial alami. Bermanfaat memperlancar peredaran darah, meredakan ketegangan otot lelah, dan mengembalikan kesegaran tubuh secara menyeluruh.",
    duration: "60 / 90 / 120 Menit",
    isHomeService: true,
    isInStudio: true,
    image: "/full.png",
    fallbackImage: "/spa1.jpg",
    benefits: ["Melancarkan aliran darah", "Meredakan stres & pegal seluruh tubuh", "Meningkatkan kualitas tidur"],
    steps: ["Foot Bath ritual herbal", "Pijat seluruh tubuh teknik Balinese", "Aromatherapy relaxing balm", "Penyegaran handuk hangat"]
  },
  {
    id: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    category: "Massage",
    shortDesc: "Pijatan intensif bertekanan mantap untuk melemaskan simpul otot kaku kronis.",
    fullDesc: "Teknik pijat intensif dengan tekanan mantap menggunakan jari, telapak, dan siku untuk menjangkau lapisan otot terdalam dan jaringan ikat (fascia). Sangat ideal bagi yang sering berolahraga berat atau mengalami otot kaku berkepanjangan.",
    duration: "60 Menit",
    isHomeService: true,
    isInStudio: true,
    image: "/tissue.png",
    fallbackImage: "/spa2.jpg",
    benefits: ["Melepaskan simpul otot tegang", "Mengurangi rasa sakit & kram kronis", "Memperbaiki postur dan fleksibilitas"],
    steps: ["Pemanasan otot awal", "Penekanan lambat & mendalam pada titik kaku", "Peregangan pasif otot utama", "Aplikasi minyak hangat relaksasi"]
  },
  {
    id: "lomi-lomi-massage",
    name: "Lomi Lomi Massage",
    category: "Massage",
    shortDesc: "Pijatan ritmis khas Hawaii yang mengalir lembut bagai ombak samudra.",
    fullDesc: "Seni pijat holistik asal Hawaii (Loving Hands Massage) yang menggunakan usapan panjang dan mengalir menyerupai ombak samudra. Memadukan kerja nafas dan gerakan berkesinambungan untuk mengharmonikan pikiran, jiwa, dan merelaksasi seluruh sistem saraf tubuh.",
    duration: "60 / 90 Menit",
    isHomeService: true,
    isInStudio: true,
    image: "/lomi.png",
    fallbackImage: "/spa3.jpg",
    benefits: ["Menyelaraskan energi & pikiran", "Melancarkan sistem limfatik", "Memberikan rasa damai dan relaksasi total"],
    steps: ["Ritual pembuka relaksasi pernapasan", "Pijatan ritmis lengan bawah menyeluruh", "Peregangan lembut sendi", "Finishing relaksasi tenang"]
  },
  {
    id: "stone-massage",
    name: "Hot Stone Massage",
    category: "Massage",
    shortDesc: "Sensasi batu basal hangat untuk melancarkan cakra dan melegakan otot.",
    fullDesc: "Perawatan eksklusif menggunakan batu vulkanik hangat pilihan yang diletakkan pada titik-titik cakra tubuh dan diusapkan perlahan bersama minyak aromaterapi. Kehangatan batu meresap ke dalam jaringan otot untuk meredakan pegal secara instan.",
    duration: "90 Menit",
    isHomeService: true,
    isInStudio: true,
    image: "/hotstone.png",
    fallbackImage: "/spa2.jpg",
    benefits: ["Meredakan nyeri otot mendalam", "Mengurangi stres & kecemasan", "Memperbaiki sirkulasi energi vital"],
    steps: ["Pemanasan tubuh ringan", "Penempatan batu hangat pada cakra tubuh", "Pijatan ritmis dengan batu basal dan minyak hangat"]
  },
  {
    id: "body-scrub-massage",
    name: "Body Scrub + Massage",
    category: "Body",
    shortDesc: "Eksfoliasi lulur alami pengangkat kulit kusam dipadu pijatan relaksasi.",
    fullDesc: "Perpaduan perawatan lulur tradisional kaya nutrisi dengan pijatan relaksasi tubuh. Berfungsi mengangkat sel kulit mati, meregenerasi sel baru, menghaluskan tekstur kulit, sekaligus menenangkan tubuh dari kepenatan.",
    duration: "90 Menit",
    isHomeService: true,
    isInStudio: true,
    image: "/scrb.png",
    fallbackImage: "/spa4.jpg",
    benefits: ["Mengangkat sel kulit mati & kusam", "Menghaluskan dan mencerahkan kulit", "Merelaksasi otot seluruh tubuh"],
    steps: ["Pembersihan tubuh & pembasuhan", "Pijat relaksasi tubuh", "Aplikasi lulur rempah organik & eksfoliasi", "Pembersihan air hangat & lotion pelembap"]
  },
  {
    id: "pregnant-massage",
    name: "Pregnant Massage",
    category: "Special",
    shortDesc: "Pijatan lembut khusus ibu hamil untuk kenyamanan pinggang dan kaki lelah.",
    fullDesc: "Perawatan khusus yang dirancang dengan posisi tubuh aman dan teknik usapan lembut penuh perhatian oleh terapis terlatih. Meringankan beban di area pinggang, punggung bawah, meredakan pembengkakan kaki, serta memberikan kenyamanan bagi calon ibu.",
    duration: "90 Menit",
    isHomeService: false,
    isInStudio: true,
    image: "/preg.png",
    fallbackImage: "/spa5.jpg",
    benefits: ["Meringankan nyeri punggung & pinggang", "Mengurangi retensi cairan & kaki bengkak", "Menenangkan pikiran dan suasana hati ibu"],
    steps: ["Pengaturan posisi nyaman menyamping dengan bantal", "Usapan lembut relaksasi punggung & pinggul", "Pijatan sirkulasi kaki & lengan", "Relaksasi lembut kepala & leher"]
  },
  {
    id: "face-acupressure",
    name: "Face Acupressure / Totok Wajah",
    category: "Face",
    shortDesc: "Totok wajah herbal untuk meredakan mata lelah dan meremajakan kulit.",
    fullDesc: "Teknik penekanan presisi pada titik-titik akupresur wajah untuk memperlancar sirkulasi darah, mengencangkan kulit, serta meredakan ketegangan mata, leher, dan dahi akibat aktivitas layar maupun stres.",
    duration: "30 Menit",
    isHomeService: true,
    isInStudio: true,
    image: "/face.png",
    fallbackImage: "/spa6.jpg",
    benefits: ["Mencerahkan wajah secara alami", "Meredakan mata lelah & sakit kepala", "Meningkatkan elastisitas kulit wajah"],
    steps: ["Cleansing wajah lembut", "Penekanan titik meridian akupresur", "Pijatan ringan leher & pundak", "Mist aromaterapi penyegar"]
  },
  {
    id: "foot-massage",
    name: "Reflexology / Foot Massage",
    category: "Massage",
    shortDesc: "Pijatan refleksi telapak dan betis untuk mengembalikan kesegaran kaki lelah.",
    fullDesc: "Perawatan terarah pada area telapak, jari-jemari, dan betis kaki dengan menstimulasi titik-titik refleksi utama yang terhubung langsung ke organ vital tubuh. Membantu melancarkan sirkulasi cairan serta mengusir rasa lelah berlebih.",
    duration: "30 Menit",
    isHomeService: true,
    isInStudio: true,
    image: "/foot.png",
    fallbackImage: "/spa3.jpg",
    benefits: ["Meredakan kaki pegal & tegang", "Memperbaiki peredaran darah", "Mengembalikan stamina tubuh segar"],
    steps: ["Rendam kaki air herbal hangat", "Pemijatan titik saraf refleksi kaki", "Pijatan ringan betis", "Penyegaran handuk hangat"]
  },
  {
    id: "ear-candle",
    name: "Ear Candle",
    category: "Special",
    shortDesc: "Terapi lilin herbal hangat untuk melegakan tekanan sinus dan kepala berat.",
    fullDesc: "Terapi relaksasi menggunakan lilin aromatik berongga khusus yang diletakkan perlahan pada telinga. Menghasilkan rasa hangat menenangkan, membantu melegakan tekanan sinus dan kepala, serta menenangkan indra pendengaran.",
    duration: "30 Menit",
    isHomeService: true,
    isInStudio: true,
    image: "/ear.png",
    fallbackImage: "/spa1.jpg",
    benefits: ["Meringankan rasa berat di kepala", "Membantu relaksasi telinga & sinus", "Menenangkan pikiran stres"],
    steps: ["Pemeriksaan telinga awal", "Penyalaan lilin herbal ear candle lembut", "Pijatan ringan area pelipis & daun telinga"]
  },
  {
    id: "hair-mask",
    name: "Hair Mask",
    category: "Special",
    shortDesc: "Masker rambut dan pijatan relaksasi kepala bernutrisi untuk rambut berkilau.",
    fullDesc: "Perawatan intensif menggunakan masker kaya vitamin untuk menutrisi batang dan akar rambut, dipadukan dengan pemijatan lembut kulit kepala dan leher guna meredakan kepenatan serta menjaga rambut tetap sehat berkilau.",
    duration: "30 Menit",
    isHomeService: false,
    isInStudio: true,
    image: "/hair.png",
    fallbackImage: "/spa7.jpg",
    benefits: ["Menutrisi rambut & kulit kepala", "Merelaksasi kepala, leher & bahu", "Rambut lebih halus dan sehat"],
    steps: ["Aplikasi masker rambut nutrisi merata", "Pijatan relaksasi kulit kepala & pundak", "Peresapan nutrisi", "Penyelesaian bilasan segar"]
  }
];
