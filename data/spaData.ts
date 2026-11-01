import { Treatment, SpaPackage, GalleryItem, Therapist, LocalizedText } from '../types';

export const SPA_INFO = {
  name: "Lastri Spa Home Service",
  tagline: {
    en: "The Best On-Call Massage Service in Banyuwangi",
    id: "Layanan Pijat Panggilan Terbaik di Banyuwangi"
  },
  headline: {
    en: "Enjoy a Premium Spa Experience, Right at Your Doorstep.",
    id: "Nikmati Pengalaman Spa Premium di Tempat Anda"
  },
  subtagline: {
    en: "No need to travel for a spa experience. Enjoy personalized treatments in the comfort of your home, hotel, or villa, delivered by our professional female therapists.",
    id: "Tak perlu bepergian untuk menikmati perawatan spa. Kami hadir di rumah, hotel, atau vila Anda dengan layanan personal dari terapis wanita profesional"
  },
  address: "Layanan Panggilan / On-Call ke Rumah, Hotel & Vila (Area Kota Banyuwangi & Sekitarnya)",
  phone: "0895347499653",
  whatsapp: "+62 895 3474 99653",
  whatsappMessage: "Halo Lastri Spa Home Service, saya tertarik untuk pesan layanan anda",
  email: "anisdkill@gmail.com",
  hours: {
    en: "Every Day: 08:00 AM – 10:00 PM (WIB)",
    id: "Setiap Hari, 08.00 – 22.00 WIB"
  },
  stats: [
    { label: { en: "Master Therapist Experience", id: "Pengalaman Terapis Master" }, value: "10+ Thn" },
    { label: { en: "Natural & Pure Aromatherapy", id: "Bahan Alami & Aromaterapi Murni" }, value: "100%" },
    { label: { en: "Sterile Linen & Equipment", id: "Linen & Perlengkapan Steril" }, value: "Higienis" },
    { label: { en: "Customer Satisfaction", id: "Kepuasan Pelanggan" }, value: "4.95 ★" }
  ]
};

export const DIRECT_WA_URL = "https://wa.me/62895347499653?text=Halo%20Lastri%20Spa%20Home%20Service%2C%20saya%20tertarik%20untuk%20pesan%20layanan%20anda";

export const getWhatsAppUrl = (_itemTitle?: string) => {
  return DIRECT_WA_URL;
};

export const REVIEWS = [
  {
    id: "r1",
    name: "Siti Rahma",
    role: "Pelanggan Villa Banyuwangi",
    rating: 5,
    treatment: "Balinese Deep Tissue Massage",
    comment: {
      en: "The therapist arrived right on time at our villa with complete sterile equipment and soothing aromatherapy oils. The deep tissue massage was incredibly relaxing after a long day trip!",
      id: "Terapis datang tepat waktu ke vila kami dengan membawa perlengkapan steril dan minyak aromaterapi. Pijatan Balinese Deep Tissue benar-benar menghilangkan pegal setelah perjalanan jauh!"
    },
    avatar: "/spa1.jpg"
  },
  {
    id: "r2",
    name: "Budi Santoso",
    role: "Tamu Hotel Banyuwangi",
    rating: 5,
    treatment: "Warm Stone Massage",
    comment: {
      en: "Such a convenient home service! Didn't have to deal with traffic or waiting lines. The warm stone massage in my hotel room was 100% professional and deeply soothing.",
      id: "Sangat praktis tanpa perlu keluar hotel dan macet-macetan. Pijat batu hangat di kamar hotel sangat profesional, bersih, dan membuat tubuh kembali segar."
    },
    avatar: "/spa2.jpg"
  },
  {
    id: "r3",
    name: "Elena Rostova",
    role: "International Tourist",
    rating: 5,
    treatment: "Couple Romance Sanctuary",
    comment: {
      en: "Best home spa experience in Banyuwangi! Professional female therapists came to our resort with fresh botanicals and relaxing music. 10/10 recommended!",
      id: "Pengalaman home spa terbaik di Banyuwangi! Terapis wanita profesional datang ke resort kami membawa racikan rempah murni dan musik relaksasi. Sangat recommended!"
    },
    avatar: "/spa3.jpg"
  },
  {
    id: "r4",
    name: "Anita Wijaya",
    role: "Residensi Kota Banyuwangi",
    rating: 5,
    treatment: "Body Scrub / Lulur Herbal",
    comment: {
      en: "The organic coconut & turmeric scrub brought right to my home left my skin glowing and silky smooth. Super polite therapist and very hygienic service.",
      id: "Lulur kelapa & kunyit organik dipesan langsung ke rumah. Kulit jadi halus dan harum. Terapisnya sangat sopan, ramah, dan mengutamakan kebersihan."
    },
    avatar: "/spa4.jpg"
  }
];

export const FAQS = [
  {
    id: "f1",
    question: {
      en: "How do I book Lastri Spa Home Service?",
      id: "Bagaimana cara memesan layanan Lastri Spa Home Service?"
    },
    answer: {
      en: "Simply click the 'Book Now' button or contact us via WhatsApp at 0895347499653. Choose your package, specify the time slot, and share your complete home, hotel, or villa address.",
      id: "Cukup klik tombol 'Pesan Sekarang' atau hubungi kami via WhatsApp ke 0895347499653. Pilih paket, tentukan waktu, dan kirimkan alamat lengkap rumah/hotel/vila Anda."
    }
  },
  {
    id: "f2",
    question: {
      en: "Is this service 100% professional and polite?",
      id: "Apakah layanan ini 100% profesional dan sopan?"
    },
    answer: {
      en: "Yes. Lastri Spa strictly provides wellness bodywork, health relaxation, and beauty spa treatments by trained female therapists. We strictly decline all non-therapeutic requests.",
      id: "Ya. Lastri Spa murni melayani terapi pijat kebugaran, relaksasi kesehatan, dan spa kecantikan profesional oleh terapis wanita. Kami menolak segala bentuk permintaan non-terapeutik."
    }
  },
  {
    id: "f3",
    question: {
      en: "What do I need to prepare at my location?",
      id: "Apa saja yang perlu saya siapkan di lokasi?"
    },
    answer: {
      en: "You only need to provide a comfortable bed or space to rest. Our therapist brings all necessary equipment (sanitized linen mats, aromatherapy oils, coverage sheets, and soothing music).",
      id: "Anda hanya perlu menyediakan ruangan atau kasur yang nyaman untuk beristirahat. Terapis kami membawa seluruh perlengkapan (alas linen steril, minyak aromaterapi, kain penutup, dan musik relaksasi)."
    }
  },
  {
    id: "f4",
    question: {
      en: "Which service areas in Banyuwangi are covered?",
      id: "Area mana saja di Banyuwangi yang dapat dijangkau?"
    },
    answer: {
      en: "We serve Banyuwangi City, Glagah, Licin, Giri, Kabat, Rogojampi, as well as surrounding hotels and villas.",
      id: "Kami melayani area Kota Banyuwangi, Glagah, Licin, Giri, Kabat, Rogojampi, serta hotel dan vila di sekitarnya."
    }
  }
];

export const PHILOSOPHY_CONTENT = {
  subheading: {
    en: "About Lastri Spa",
    id: "Tentang Lastri Spa"
  },
  title: {
    en: "Enjoy Spa Treatments in the Comfort of Your Private Space",
    id: "Nikmati Perawatan Spa di Tempat Anda"
  },
  subtitle: {
    en: "Enjoy a relaxing spa treatment without leaving your space",
    id: "Perawatan spa yang nyaman, tanpa perlu meninggalkan tempat Anda"
  },
  story: {
    en: "Lastri Spa Home Service brings professional spa treatments to your home, hotel, or villa in Banyuwangi. Our experienced therapists provide personalized treatments in the comfort and privacy of your own space, so you can relax without having to travel.",
    id: "Lastri Spa Home Service menyediakan layanan perawatan spa di rumah, hotel, atau vila Anda di Banyuwangi. Dengan terapis berpengalaman, kami membantu Anda menikmati waktu relaksasi dalam suasana yang nyaman dan privat, tanpa perlu bepergian"
  },
  pillars: [
    {
      icon: "Leaf",
      title: { en: "Natural Ingredients", id: "Bahan Alami Pilihan" },
      description: {
        en: "Pure aromatherapy oils and organic herbal blends safe for all skin types.",
        id: "Minyak aromaterapi murni dan racikan herbal organik murni."
      }
    },
    {
      icon: "ShieldCheck",
      title: { en: "Skilled Therapists", id: "Terapis Berpengalaman" },
      description: {
        en: "Certified female therapists trained in deep relaxation and vital acupressure.",
        id: "Terapis wanita terlatih menguasai akupresur dan relaksasi mendalam."
      }
    },
    {
      icon: "Sparkles",
      title: { en: "100% Hygienic", id: "100% Higienis & Steril" },
      description: {
        en: "Sanitized linen mats and single-use disposable kits for every session.",
        id: "Linen steril dan perlengkapan higienis selalu baru di tiap sesi."
      }
    }
  ]
};

export const TREATMENTS: Treatment[] = [
  {
    id: "royal-balinese",
    title: {
      en: "Royal Balinese Boreh & Deep Tissue Ritual",
      id: "Pijat Royal Balinese & Kompres Boreh"
    },
    category: "massage",
    duration: "90 Mins / 120 Mins",
    price: 650000,
    formattedPrice: {
      en: "IDR 650,000 (~$42)",
      id: "Rp 650.000"
    },
    excerpt: {
      en: "A deeply restorative combination of long palm strokes, gentle stretching, warm clove & ginger Boreh paste application.",
      id: "Kombinasi pijat tekanan mendalam Bali dengan baluran lulur hangat Boreh cengkeh & jahe untuk meredakan pegal."
    },
    fullDescription: {
      en: "Inspired by ancient Balinese rice farmers who used warming herbal pastes to ease joint aches after harvest, the Royal Balinese Boreh is our signature deep body ritual. It blends firm palm friction, thumb pressure along energetic meridians, and warm herbal compress therapy to melt away chronic muscle tension and stimulate circulation.",
      id: "Terinspirasi dari tradisi petani Bali yang mengusapkan ramuan lulur hangat untuk meredakan nyeri otot, ritual Royal Balinese Boreh menyatukan pijatan tekanan telapak tangan, meridian energi, dan kompres herbal hangat untuk melancarkan sirkulasi darah."
    },
    steps: [
      {
        stepNumber: 1,
        title: { en: "Ritual Foot Washing & Floral Soak", id: "Pembersihan Kaki & Rendaman Bunga" },
        description: {
          en: "Soaking feet in warm water infused with kaffir lime slices, sea salt, and wild frangipani blossoms.",
          id: "Merendam kaki dalam air hangat bertabur irisan jeruk purut, garam laut, dan bunga kamboja segar."
        },
        durationMin: 10
      },
      {
        stepNumber: 2,
        title: { en: "Balinese Meridian Deep Tissue Bodywork", id: "Pijat Mendalam Meridian Bali" },
        description: {
          en: "Full-body deep pressure strokes using warm organic sandalwood & frangipani coconut oil.",
          id: "Pijat seluruh tubuh dengan minyak kelapa cendana & kamboja hangat untuk melepaskan ketegangan otot."
        },
        durationMin: 55
      },
      {
        stepNumber: 3,
        title: { en: "Warming Warm Spice Boreh Application", id: "Baluran Boreh Rempah Hangat" },
        description: {
          en: "Application of hand-ground clove, cinnamon, ginger, and rice powder pasty envelope across shoulders and back.",
          id: "Baluran racikan lulur jahe, cengkeh, kayu manis, dan beras tumbuk hangat di area punggung dan bahu."
        },
        durationMin: 20
      },
      {
        stepNumber: 4,
        title: { en: "Sacred Ginger & Palm Sugar Elixir", id: "Seduhan Jamu Jahe & Gula Aren" },
        description: {
          en: "Relaxing in the lounge with a steaming cup of handcrafted honeyed ginger tea.",
          id: "Menikmati secangkir seduhan jahe hangat dan madu murni di ruang santai."
        },
        durationMin: 5
      }
    ],
    ingredients: ["Fresh Wild Ginger", "Sandalwood Oil", "Clove Bud", "Rice Flour Powder", "Kaffir Lime", "Cold-pressed Coconut Oil"],
    bestFor: {
      en: "Relieving deep muscle stiffness, fatigue, poor blood circulation, and physical exhaustion.",
      id: "Meredakan kelelahan berat, kaku otot, pegal linu, serta melancarkan sirkulasi darah."
    },
    contraindications: {
      en: "Not suitable during early pregnancy (first trimester) or active skin fever/rashes.",
      id: "Tidak disarankan untuk kehamilan trimester pertama atau kondisi demam/iritasi kulit."
    },
    image: "/spa1.jpg",
    rating: 4.98,
    popular: true
  },
  {
    id: "celestial-facial",
    title: {
      en: "Celestial Lotus & Jade Stone Facial",
      id: "Facial Herbal Lotus & Batu Giok Radiant"
    },
    category: "facial",
    duration: "75 Mins",
    price: 550000,
    formattedPrice: {
      en: "IDR 550,000 (~$36)",
      id: "Rp 550.000"
    },
    excerpt: {
      en: "Organic lotus petal infusion, nutrient-rich honey mask, and lymphatic drainage with cooling Gua Sha jade wands.",
      id: "Perawatan wajah organik dengan ekstrak bunga lotus, masker madu murni, dan pijat Gua Sha batu giok."
    },
    fullDescription: {
      en: "A deeply hydrating and skin-plumping facial designed to restore radiant glow without harsh chemicals. Using raw Balinese forest honey, crushed organic white lotus petals, and rose hip oil, this ritual concludes with gentle cooling Gua Sha sculpting to drain toxins and lift facial contours.",
      id: "Perawatan wajah yang memberikan hidrasi mendalam dan kilau alami tanpa bahan kimia keras. Menggunakan madu hutan Bali, kelopak lotus putih, dan minyak rosehip, diakhiri dengan pijatan sculpting Gua Sha batu giok."
    },
    steps: [
      {
        stepNumber: 1,
        title: { en: "Aromatic Botanical Cleansing", id: "Pembersihan Wajah Botanis" },
        description: {
          en: "Gentle double cleanse using cucumber water and organic jojoba oil.",
          id: "Pembersihan ganda lembut menggunakan air timun dan minyak jojoba organik."
        },
        durationMin: 15
      },
      {
        stepNumber: 2,
        title: { en: "Lotus & Rice Enzyme Exfoliation", id: "Eksfoliasi Enzim Lotus & Beras" },
        description: {
          en: "Micro-fine polish to smooth texture and brighten skin tone.",
          id: "Eksfoliasi halus untuk melembutkan tekstur dan mencerahkan kulit wajah."
        },
        durationMin: 15
      },
      {
        stepNumber: 3,
        title: { en: "Jade Wand Lymphatic Sculpting", id: "Pijat Gua Sha Batu Giok" },
        description: {
          en: "Cooling facial acupressure and contour lifting using polished nephrite jade.",
          id: "Pijat akupresur dan pembentukan kontur wajah dengan batu giok dingin."
        },
        durationMin: 25
      },
      {
        stepNumber: 4,
        title: { en: "Forest Honey & Rose Clay Mask", id: "Masker Madu Hutan & Clay Mawar" },
        description: {
          en: "Hydrating mask paired with a soothing neck and decollete massage.",
          id: "Masker hidrasi disertai pijat relaksasi leher dan pundak."
        },
        durationMin: 20
      }
    ],
    ingredients: ["White Lotus Extract", "Raw Wild Honey", "Rosehip Seed Oil", "French Pink Clay", "Aloe Vera Juice"],
    bestFor: {
      en: "Dull skin, dehydration, puffiness, fine lines, and stress tension around the jaw.",
      id: "Kulit kusam, dehidrasi, wajah sembap, serta ketegangan otot rahang dan dahi."
    },
    contraindications: {
      en: "Severe active cystic acne or open facial wounds.",
      id: "Jerawat radang parah atau luka terbuka di area wajah."
    },
    image: "/spa5.jpg",
    rating: 4.95,
    popular: false
  },
  {
    id: "herbal-bath",
    title: {
      en: "Sacred Rose & Coconut Jamu Body Scrub",
      id: "Lulur Kelapa & Rempah Herbal On-Call"
    },
    category: "massage",
    duration: "60 Mins / 90 Mins",
    price: 480000,
    formattedPrice: {
      en: "IDR 480,000 (~$31)",
      id: "Rp 480.000"
    },
    excerpt: {
      en: "Gentle body scrub with fresh grated coconut & turmeric, followed by warm aromatic relaxation delivered to your room.",
      id: "Lulur kelapa parut & kunyit murni, dilanjutkan relaksasi aromaterapi hangat di tempat Anda."
    },
    fullDescription: {
      en: "Enjoy a soothing body treatment in the privacy of your home or hotel room. Your skin is polished with a blend of freshly grated organic coconut, wild turmeric, and sea salt, followed by a warm botanical oil massage.",
      id: "Manjakan diri dengan perawatan tubuh alami di kediaman atau kamar hotel Anda. Diawali dengan lulur badan kelapa parut segar, kunyit murni, dan garam laut, dilanjutkan pijat minyak aromaterapi murni."
    },
    steps: [
      {
        stepNumber: 1,
        title: { en: "Turmeric & Organic Coconut Scrub", id: "Lulur Kelapa & Kunyit Organik" },
        description: {
          en: "Exfoliating dry skin cells while locking in essential fatty acid moisture.",
          id: "Mengangkat sel kulit mati sekaligus memberikan kelembaban alami."
        },
        durationMin: 30
      },
      {
        stepNumber: 2,
        title: { en: "Terrazzo Floral Hydrotherapy Soak", id: "Rendaman Bunga Di Terrazzo Tub" },
        description: {
          en: "Immersion in a warm bath enriched with essential oils and fresh flower petals.",
          id: "Berendam air hangat bertabur minyak esensial dan kelopak bunga segar."
        },
        durationMin: 25
      },
      {
        stepNumber: 3,
        title: { en: "Hydrating Body Butter Hydration", id: "Aplikasi Body Butter Lembut" },
        description: {
          en: "Application of light coconut lemongrass body butter.",
          id: "Pengolesan body butter sereh kelapa yang menenangkan."
        },
        durationMin: 5
      }
    ],
    ingredients: ["Fresh Coconut Flakes", "Fresh Wild Turmeric", "Red Rose Petals", "Lemongrass Essential Oil", "Epsom Sea Salt"],
    bestFor: {
      en: "Dry flaky skin, romantic relaxation, stress relief, and body detoxification.",
      id: "Kulit kering, relaksasi romantis, pereda stres, dan penyegaran tubuh."
    },
    contraindications: {
      en: "Turmeric may temporary stain ultra-pale swimwear; disposable underwear provided.",
      id: "Kunyit dapat meninggalkan noda pada kain terang; kami menyediakan celana sekali pakai."
    },
    image: "/spa4.jpg",
    rating: 4.97,
    popular: true
  },
  {
    id: "himalayan-reflexology",
    title: {
      en: "Sound Bath & Himalayan Salt Reflexology",
      id: "Refleksologi Garam Himalaya & Tibetan Sound Bath"
    },
    category: "reflexology",
    duration: "60 Mins",
    price: 420000,
    formattedPrice: {
      en: "IDR 420,000 (~$27)",
      id: "Rp 420.000"
    },
    excerpt: {
      en: "Targeted foot pressure point therapy combined with warm Himalayan salt stones and resonant Tibetan singing bowls.",
      id: "Terapi pijat titik refleksi kaki dipadu batu garam Himalaya hangat & getaran mangkuk bernyanyi Tibet."
    },
    fullDescription: {
      en: "Focusing on key pressure zone meridians in the feet that correspond to internal organs, this therapy restores body equilibrium. Warm Himalayan salt blocks release soothing heat into fatigued arches, accompanied by meditative sound vibrations from hand-hammered singing bowls.",
      id: "Fokus pada titik-titik refleksi telapak kaki yang terhubung dengan organ tubuh. Dipadukan dengan kehangatan batu garam Himalaya serta getaran nada menenangkan dari Tibetan singing bowl."
    },
    steps: [
      {
        stepNumber: 1,
        title: { en: "Warm Salt & Peppermint Foot Scrub", id: "Scrub Kaki Peppermint & Garam" },
        description: {
          en: "Deep cleansing of lower legs with cooling mint and sea minerals.",
          id: "Pembersihan area betis dan kaki dengan mint dan mineral laut."
        },
        durationMin: 10
      },
      {
        stepNumber: 2,
        title: { en: "Precision Pressure Point Work", id: "Pijat Presisi Titik Refleksi" },
        description: {
          en: "Thumb pressure targeting spinal, digestive, and nervous system zones.",
          id: "Pijatan jempol menargetkan titik refleks organ tubuh dan saraf."
        },
        durationMin: 35
      },
      {
        stepNumber: 3,
        title: { en: "Himalayan Salt Stone Gliding & Sound Wave", id: "Pijat Batu Garam & Sound Bath" },
        description: {
          en: "Gliding warm mineral salt blocks across calves while singing bowls resonate.",
          id: "Usapan batu garam hangat di betis diiringi gelombang suara singing bowl."
        },
        durationMin: 15
      }
    ],
    ingredients: ["Himalayan Pink Salt", "Peppermint Oil", "Eucalyptus", "Sweet Almond Oil"],
    bestFor: {
      en: "Heavy legs from walking/travel, insomnia, anxiety, and sluggish digestion.",
      id: "Kaki pegal setelah perjalanan jauh, insomnia, kecemasan, dan perlambatan metabolisme."
    },
    contraindications: {
      en: "Foot open wounds, deep vein thrombosis, or foot fractures.",
      id: "Luka terbuka di kaki, varises parah, atau riwayat patah tulang kaki."
    },
    image: "/spa3.jpg",
    rating: 4.92,
    popular: false
  },
  {
    id: "shirodhara-flow",
    title: {
      en: "Ayurvedic Shirodhara & Warm Oil Scalp Flow",
      id: "Ayurveda Shirodhara & Terapi Minyak Rambut Hangat"
    },
    category: "massage",
    duration: "75 Mins",
    price: 620000,
    formattedPrice: {
      en: "IDR 620,000 (~$40)",
      id: "Rp 620.000"
    },
    excerpt: {
      en: "Continuous warm herbal oil stream poured over the third eye, paired with marma point scalp massage.",
      id: "Kucuran minyak herbal hangat yang mengalir di dahi (mata ketiga) dipadu pijat kepala marma."
    },
    fullDescription: {
      en: "Shirodhara is a classical 5,000-year-old Ayurvedic therapy where a continuous stream of warm herbal oil flows gracefully over the forehead (third eye). It induces a deep state of meditative theta brainwave relaxation, calming nervous burnout and clearing mental chatter.",
      id: "Shirodhara adalah terapi Ayurveda 5.000 tahun di mana kucuran minyak herbal hangat mengalir di area dahi (mata ketiga). Terapi ini membawa otak ke gelombang theta yang sangat tenang, mengatasi stres dan kelelahan mental."
    },
    steps: [
      {
        stepNumber: 1,
        title: { en: "Head, Neck & Shoulder Marma Massage", id: "Pijat Marma Kepala & Pundak" },
        description: {
          en: "Releasing upper back tension to prepare energy channels.",
          id: "Melepaskan ketegangan leher dan pundak untuk membuka jalur energi."
        },
        durationMin: 20
      },
      {
        stepNumber: 2,
        title: { en: "Rhythmic Shirodhara Warm Oil Pouring", id: "Kucuran Minyak Shirodhara Hangat" },
        description: {
          en: "30 minutes of continuous warm sesame & brahmi oil stream across third eye.",
          id: "30 menit kucuran kontinyu minyak wijen & brahmi hangat di dahi."
        },
        durationMin: 35
      },
      {
        stepNumber: 3,
        title: { en: "Warm Towel Wrap & Herbal Tea", id: "Bungkus Handuk Hangat & Teh Herbal" },
        description: {
          en: "Gentle scalp towel wrap and quiet grounding meditation.",
          id: "Pembungkus kepala handuk hangat dan meditasi pemulihan."
        },
        durationMin: 20
      }
    ],
    ingredients: ["Black Sesame Oil", "Brahmi Leaf", "Rosemary Extract", "Gotu Kola"],
    bestFor: {
      en: "Chronic stress, migraine headaches, jetlag, mental exhaustion, and insomnia.",
      id: "Stres kronis, migrain, keletihan mental, jetlag, dan gangguan tidur."
    },
    contraindications: {
      en: "Recent neck injuries or severe ear infections.",
      id: "Cedera leher baru atau infeksi telinga."
    },
    image: "/spa2.jpg",
    rating: 4.96,
    popular: true
  }
];

export const SPA_PACKAGES: SpaPackage[] = [
  {
    id: "royal-body-refresh",
    title: {
      en: "Royal Body Refresh Package",
      id: "Paket Royal Body Refresh"
    },
    duration: "120 Menit",
    price: 450000,
    formattedPrice: {
      en: "IDR 450,000",
      id: "Rp 450.000"
    },
    excerpt: {
      en: "Combination of Balinese Massage + Traditional Spice Scrub + Relaxing Facial Acupressure.",
      id: "Kombinasi Balinese Massage + Lulur Rempah Tradisional + Totok Wajah Relaksasi."
    },
    fullDescription: {
      en: "Our most practical on-call refresh package delivered directly to your room. Combines full-body Balinese deep massage, traditional spice scrub exfoliation, and soothing facial acupressure.",
      id: "Kombinasi Balinese Massage + Lulur Rempah Tradisional + Totok Wajah Relaksasi. Terapis wanita profesional datang membawa perlengkapan steril langsung ke rumah, hotel, atau vila Anda."
    },
    inclusions: {
      en: [
        "Aromatherapy foot bath ritual",
        "Full body Balinese Massage",
        "Fine traditional spice scrub exfoliation",
        "Refreshing facial acupressure"
      ],
      id: [
        "Cuci kaki aromaterapi",
        "Pijat seluruh tubuh (Balinese Massage)",
        "Eksfoliasi lulur halus rempah",
        "Totok wajah penyegar relaksasi"
      ]
    },
    timeline: [
      { time: "00:00 - 00:10", activity: { en: "Aromatherapy Foot Bath", id: "Cuci Kaki Aromaterapi" } },
      { time: "00:10 - 01:10", activity: { en: "Full Body Balinese Massage", id: "Pijat Seluruh Tubuh" } },
      { time: "01:10 - 01:40", activity: { en: "Fine Spice Scrub Exfoliation", id: "Eksfoliasi Lulur Halus" } },
      { time: "01:40 - 02:00", activity: { en: "Refreshing Facial Acupressure", id: "Totok Wajah Penyegar" } }
    ],
    image: "/spa1.jpg",
    badge: { en: "Best Seller", id: "Paling Populer" },
    popular: true
  },
  {
    id: "harmony-couple",
    title: {
      en: "Harmony Couple Package",
      id: "Paket Harmony Couple"
    },
    duration: "150 Menit",
    price: 850000,
    formattedPrice: {
      en: "IDR 850,000 (For 2 Persons)",
      id: "Rp 850.000 (Untuk 2 Orang)"
    },
    excerpt: {
      en: "Side-by-side relaxing massage session for couples in your hotel room or private villa.",
      id: "Sesi pijat relaksasi berdampingan untuk pasangan di kamar hotel atau vila pribadi."
    },
    fullDescription: {
      en: "Side-by-side relaxing massage session for couples in your hotel room or private villa. Includes ylang-ylang & jasmine aromatherapy massage, shoulder relaxation, and tired feet reflexology.",
      id: "Sesi pijat relaksasi berdampingan untuk pasangan di kamar hotel atau vila pribadi. Nikmati kehangatan minyak aromaterapi kenanga & melati, relaksasi pundak, dan refleksi kaki lelah."
    },
    inclusions: {
      en: [
        "Couple aromatherapy foot soak",
        "Ylang-ylang & jasmine aromatherapy massage",
        "Shoulder & neck relaxation",
        "Tired feet reflexology"
      ],
      id: [
        "Cuci kaki aromaterapi",
        "Pijat aromaterapi kenanga & melati",
        "Relaksasi pundak",
        "Refleksi kaki lelah"
      ]
    },
    timeline: [
      { time: "00:00 - 00:15", activity: { en: "Couple Foot Bath Ceremony", id: "Cuci Kaki Aromaterapi" } },
      { time: "00:15 - 01:45", activity: { en: "Aromatherapy Massage", id: "Pijat Aromaterapi Kenanga & Melati" } },
      { time: "01:45 - 02:15", activity: { en: "Shoulder & Neck Relief", id: "Relaksasi Pundak" } },
      { time: "02:15 - 02:30", activity: { en: "Tired Feet Reflexology", id: "Refleksi Kaki Lelah" } }
    ],
    image: "/spa7.jpg",
    badge: { en: "For Couples", id: "Spesial Pasangan" },
    popular: true
  },
  {
    id: "total-recovery-glow",
    title: {
      en: "Total Recovery & Glow Package",
      id: "Paket Total Recovery & Glow"
    },
    duration: "150 Menit",
    price: 600000,
    formattedPrice: {
      en: "IDR 600,000",
      id: "Rp 600.000"
    },
    excerpt: {
      en: "Full head-to-toe treatment to restore stamina after exploring Banyuwangi.",
      id: "Perawatan lengkap dari ujung kepala hingga kaki untuk memulihkan stamina sehabis perjalanan wisata Banyuwangi."
    },
    fullDescription: {
      en: "Full head-to-toe treatment to restore stamina after exploring Banyuwangi. Includes Warm Stone Massage, Gua Sha Facial Acupressure, and Scalp Creambath Relaxation.",
      id: "Perawatan lengkap dari ujung kepala hingga kaki untuk memulihkan stamina sehabis perjalanan wisata Banyuwangi. Menyatukan Warm Stone Massage, Totok Wajah Gua Sha, dan Creambath relaksasi kepala."
    },
    inclusions: {
      en: [
        "Warm Stone Massage",
        "Gua Sha Facial Acupressure",
        "Scalp & shoulder creambath relaxation",
        "Herbal warming sensation"
      ],
      id: [
        "Warm Stone Massage",
        "Totok Wajah Gua Sha",
        "Creambath relaksasi kepala",
        "Sensasi kehangatan herbal murni"
      ]
    },
    timeline: [
      { time: "00:00 - 01:00", activity: { en: "Warm Stone Massage", id: "Warm Stone Massage" } },
      { time: "01:00 - 01:45", activity: { en: "Gua Sha Facial Acupressure", id: "Totok Wajah Gua Sha" } },
      { time: "01:45 - 02:30", activity: { en: "Scalp Creambath Relaxation", id: "Creambath Relaksasi Kepala" } }
    ],
    image: "/spa6.jpg",
    badge: { en: "Stamina Reset", id: "Pemulihan Total" },
    popular: false
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: { en: "Sterile Equipment Set", id: "Set Perlengkapan Steril" },
    category: "equipment",
    image: "/spa1.jpg",
    location: "Home Service Setup",
    description: {
      en: "Hygienic tools, clean towels, and disposable linens brought directly by our therapist.",
      id: "Alat higienis, handuk bersih, dan linen sekali pakai yang dibawa terapis."
    }
  },
  {
    id: "g2",
    title: { en: "Pure Aromatherapy & Natural Oils", id: "Aromaterapi Murni & Minyak Alami" },
    category: "botanicals",
    image: "/spa3.jpg",
    location: "Natural Botanicals",
    description: {
      en: "Natural essential oils and freshly compounded traditional spice scrubs.",
      id: "Minyak esensial alami dan lulur rempah racikan segar."
    }
  },
  {
    id: "g3",
    title: { en: "Foot Bath Ritual Setup", id: "Foot Bath Ritual Setup" },
    category: "equipment",
    image: "/bath.png",
    location: "Ritual Foot Soak",
    description: {
      en: "Aromatherapy foot bath setup with kaffir lime and mineral salt.",
      id: "Perlengkapan cuci kaki aromaterapi dengan jeruk purut dan garam mineral."
    }
  },
  {
    id: "g4",
    title: { en: "Facial Acupressure & Relaxation", id: "Totok Wajah & Relaksasi" },
    category: "session",
    image: "/face.png",
    location: "On-Call Session",
    description: {
      en: "Facial acupressure treatment delivered in the comfort of your room.",
      id: "Perawatan akupresur wajah di kenyamanan tempat tinggal Anda."
    }
  },
  {
    id: "g5",
    title: { en: "Couple Massage Session", id: "Sesi Pijat Relaksasi Pasangan" },
    category: "session",
    image: "/spa7.jpg",
    location: "Hotel & Villa Service",
    description: {
      en: "Side-by-side aromatherapy massage session in your hotel room or private villa.",
      id: "Sesi pijat aromaterapi berdampingan di kamar hotel atau vila pribadi Anda."
    }
  },
  {
    id: "g6",
    title: { en: "Sanitised Linen & Disposable Kit", id: "Linen & Perlengkapan Steril" },
    category: "equipment",
    image: "/spa2.jpg",
    location: "Hygiene Standard",
    description: {
      en: "Sterile linen mats and disposable items sanitized before and after every session.",
      id: "Alas linen steril dan celana sekali pakai yang disanitasi sebelum dan sesudah sesi."
    }
  }
];

export const THERAPISTS: Therapist[] = [
  {
    id: "terapis-lastri",
    name: "Terapis Lastri Ayu",
    title: { en: "Founder & Master Therapist (10+ Yrs Exp)", id: "Pendiri & Terapis Master Berlisensi (10+ Thn)" },
    experience: "10+ Years",
    photo: "/spa7.jpg",
    bio: {
      en: "Lastri Spa Home Service offers a selection of treatments, including traditional Balinese massage, deep tissue massage, and herbal body scrubs. Each treatment is personally delivered by the therapist, with careful attention to comfort, privacy, and hygiene.",
      id: "Lastri Spa Home Service menawarkan berbagai perawatan, mulai dari pijat tradisional Bali, deep tissue, hingga lulur rempah. Setiap perawatan dilakukan secara personal oleh terapis dengan memperhatikan kenyamanan, privasi, dan kebersihan selama layanan berlangsung."
    },
    specialties: {
      en: ["Hygienic Treatments", "In-Home Spa Service", "Professional Therapist"],
      id: ["Perawatan Higienis", "Layanan Home Service", "Terapis Profesional"]
    }
  }
];
