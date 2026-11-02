import { Language } from '../types';

export interface Treatment {
  id: string;
  name: string;
  category: 'Massage' | 'Face' | 'Body' | 'Special';
  shortDesc: {
    en: string;
    id: string;
  };
  fullDesc: {
    en: string;
    id: string;
  };
  duration: {
    en: string;
    id: string;
  };
  isHomeService: boolean;
  isInStudio: boolean;
  price?: string;
  image: string;
  fallbackImage?: string;
  benefits: {
    en: string[];
    id: string[];
  };
  steps: {
    en: string[];
    id: string[];
  };
}

export const treatmentsData: Treatment[] = [
  {
    id: "balinese-massage",
    name: "Full Body / Balinese Massage",
    category: "Massage",
    shortDesc: {
      id: "Pijat tradisional Bali untuk melancarkan sirkulasi dan relaksasi tubuh.",
      en: "Traditional Balinese massage to boost circulation and deep body relaxation."
    },
    fullDesc: {
      id: "Terapi pijat tradisional khas Bali memadukan urutan lembut ritmis, akupresur, dan aromaterapi minyak esensial alami. Bermanfaat memperlancar peredaran darah, meredakan ketegangan otot lelah, dan mengembalikan kesegaran tubuh secara menyeluruh.",
      en: "Authentic Balinese traditional massage combining rhythmic palm pressure, gentle acupressure, and natural herbal aromatherapy oils. Restores blood circulation, eases muscular tension, and revitalizes total well-being."
    },
    duration: {
      id: "60 / 90 / 120 Menit",
      en: "60 / 90 / 120 Mins"
    },
    isHomeService: true,
    isInStudio: true,
    image: "/full.png",
    fallbackImage: "/spa1.jpg",
    benefits: {
      id: ["Melancarkan aliran darah", "Meredakan stres & pegal seluruh tubuh", "Meningkatkan kualitas tidur"],
      en: ["Enhance blood circulation", "Relieve full-body tension & fatigue", "Promote deeper restful sleep"]
    },
    steps: {
      id: ["Foot Bath ritual herbal", "Pijat seluruh tubuh teknik Balinese", "Aromatherapy relaxing balm", "Penyegaran handuk hangat"],
      en: ["Herbal Foot Bath ritual", "Full-body Balinese massage strokes", "Aromatherapy relaxing balm", "Warm refreshing towel wrap"]
    }
  },
  {
    id: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    category: "Massage",
    shortDesc: {
      id: "Pijatan intensif bertekanan mantap untuk melemaskan simpul otot kaku kronis.",
      en: "Firm deep pressure massage to release chronic tension and tight muscle knots."
    },
    fullDesc: {
      id: "Teknik pijat intensif dengan tekanan mantap menggunakan jari, telapak, dan siku untuk menjangkau lapisan otot terdalam dan jaringan ikat (fascia). Sangat ideal bagi yang sering berolahraga berat atau mengalami otot kaku berkepanjangan.",
      en: "Intensive deep massage technique applying firm sustained strokes and friction along muscles and connective fascia. Ideal for soothing post-workout soreness and chronic postural tightness."
    },
    duration: {
      id: "60 Menit",
      en: "60 Mins"
    },
    isHomeService: true,
    isInStudio: true,
    image: "/tissue.png",
    fallbackImage: "/spa2.jpg",
    benefits: {
      id: ["Melepaskan simpul otot tegang", "Mengurangi rasa sakit & kram kronis", "Memperbaiki postur dan fleksibilitas"],
      en: ["Release tight muscular knots", "Alleviate chronic ache & stiffness", "Improve mobility and posture"]
    },
    steps: {
      id: ["Pemanasan otot awal", "Penekanan lambat & mendalam pada titik kaku", "Peregangan pasif otot utama", "Aplikasi minyak hangat relaksasi"],
      en: ["Initial muscle warm-up", "Slow deep pressure on tension points", "Targeted passive stretching", "Warm relaxing oil application"]
    }
  },
  {
    id: "lomi-lomi-massage",
    name: "Lomi Lomi Massage",
    category: "Massage",
    shortDesc: {
      id: "Pijatan ritmis khas Hawaii yang mengalir lembut bagai ombak samudra.",
      en: "Rhythmic Hawaiian massage flowing gently like soothing ocean waves."
    },
    fullDesc: {
      id: "Seni pijat holistik asal Hawaii (Loving Hands Massage) yang menggunakan usapan panjang dan mengalir menyerupai ombak samudra. Memadukan kerja nafas dan gerakan berkesinambungan untuk mengharmonikan pikiran, jiwa, dan merelaksasi seluruh sistem saraf tubuh.",
      en: "Traditional Hawaiian healing massage using long continuous forearm strokes resembling rolling ocean waves. Harmonizes mind, breath, and body while gently releasing accumulated stress."
    },
    duration: {
      id: "60 / 90 Menit",
      en: "60 / 90 Mins"
    },
    isHomeService: true,
    isInStudio: true,
    image: "/lomi.png",
    fallbackImage: "/spa3.jpg",
    benefits: {
      id: ["Menyelaraskan energi & pikiran", "Melancarkan sistem limfatik", "Memberikan rasa damai dan relaksasi total"],
      en: ["Harmonize energy & mind", "Support lymphatic circulation", "Deliver complete inner serenity"]
    },
    steps: {
      id: ["Ritual pembuka relaksasi pernapasan", "Pijatan ritmis lengan bawah menyeluruh", "Peregangan lembut sendi", "Finishing relaksasi tenang"],
      en: ["Mindful breathwork opening", "Continuous forearm flowing strokes", "Gentle joint mobility stretches", "Quiet finishing relaxation"]
    }
  },
  {
    id: "stone-massage",
    name: "Hot Stone Massage",
    category: "Massage",
    shortDesc: {
      id: "Sensasi batu basal hangat untuk melancarkan cakra dan melegakan otot.",
      en: "Heated basalt volcanic stones to balance energy and soothe tired muscles."
    },
    fullDesc: {
      id: "Perawatan eksklusif menggunakan batu vulkanik hangat pilihan yang diletakkan pada titik-titik cakra tubuh dan diusapkan perlahan bersama minyak aromaterapi. Kehangatan batu meresap ke dalam jaringan otot untuk meredakan pegal secara instan.",
      en: "Exclusive ritual utilizing heated volcanic basalt stones placed along energy meridians and gently glided with aromatic oils. Heat penetrates deeply to melt away tension instantly."
    },
    duration: {
      id: "90 Menit",
      en: "90 Mins"
    },
    isHomeService: true,
    isInStudio: true,
    image: "/hotstone.png",
    fallbackImage: "/spa2.jpg",
    benefits: {
      id: ["Meredakan nyeri otot mendalam", "Mengurangi stres & kecemasan", "Memperbaiki sirkulasi energi vital"],
      en: ["Soothe deep muscular soreness", "Melt away stress & anxiety", "Improve vital bodily circulation"]
    },
    steps: {
      id: ["Pemanasan tubuh ringan", "Penempatan batu hangat pada cakra tubuh", "Pijatan ritmis dengan batu basal dan minyak hangat"],
      en: ["Gentle initial warm-up", "Strategic stone placement on key meridians", "Rhythmic stone gliding with warm oils"]
    }
  },
  {
    id: "body-scrub-massage",
    name: "Body Scrub + Massage",
    category: "Body",
    shortDesc: {
      id: "Eksfoliasi lulur alami pengangkat kulit kusam dipadu pijatan relaksasi.",
      en: "Natural herbal body scrub exfoliation paired with relaxing full-body massage."
    },
    fullDesc: {
      id: "Perpaduan perawatan lulur tradisional kaya nutrisi dengan pijatan relaksasi tubuh. Berfungsi mengangkat sel kulit mati, meregenerasi sel baru, menghaluskan tekstur kulit, sekaligus menenangkan tubuh dari kepenatan.",
      en: "Nutrient-rich traditional spice scrub combined with a soothing body massage. Gently exfoliates dead skin cells, softens skin texture, and deeply refreshes the entire body."
    },
    duration: {
      id: "90 Menit",
      en: "90 Mins"
    },
    isHomeService: true,
    isInStudio: true,
    image: "/scrb.png",
    fallbackImage: "/spa4.jpg",
    benefits: {
      id: ["Mengangkat sel kulit mati & kusam", "Menghaluskan dan mencerahkan kulit", "Merelaksasi otot seluruh tubuh"],
      en: ["Exfoliate dead skin & dullness", "Nourish and soften smooth skin", "Ease tired muscles completely"]
    },
    steps: {
      id: ["Pembersihan tubuh & pembasuhan", "Pijat relaksasi tubuh", "Aplikasi lulur rempah organik & eksfoliasi", "Pembersihan air hangat & lotion pelembap"],
      en: ["Warm cleansing & preparation", "Full body relaxing massage", "Organic spice scrub exfoliation", "Warm rinse & moisturizing finish"]
    }
  },
  {
    id: "pregnant-massage",
    name: "Pregnant Massage",
    category: "Special",
    shortDesc: {
      id: "Pijatan lembut khusus ibu hamil untuk kenyamanan pinggang dan kaki lelah.",
      en: "Gentle prenatal massage dedicated to soothing back pain and tired legs."
    },
    fullDesc: {
      id: "Perawatan khusus yang dirancang dengan posisi tubuh aman dan teknik usapan lembut penuh perhatian oleh terapis terlatih. Meringankan beban di area pinggang, punggung bawah, meredakan pembengkakan kaki, serta memberikan kenyamanan bagi calon ibu.",
      en: "Specialized gentle prenatal care designed with safe ergonomic side-lying positioning. Comfortably alleviates lower back pressure, reduces leg swelling, and promotes maternal peace."
    },
    duration: {
      id: "90 Menit",
      en: "90 Mins"
    },
    isHomeService: false,
    isInStudio: true,
    image: "/preg.png",
    fallbackImage: "/spa5.jpg",
    benefits: {
      id: ["Meringankan nyeri punggung & pinggang", "Mengurangi retensi cairan & kaki bengkak", "Menenangkan pikiran dan suasana hati ibu"],
      en: ["Relieve back & hip discomfort", "Reduce fluid retention in legs", "Calm maternal mood and fatigue"]
    },
    steps: {
      id: ["Pengaturan posisi nyaman menyamping dengan bantal", "Usapan lembut relaksasi punggung & pinggul", "Pijatan sirkulasi kaki & lengan", "Relaksasi lembut kepala & leher"],
      en: ["Ergonomic pillow positioning", "Gentle back & hip relaxation", "Circulation strokes on arms & legs", "Subtle scalp & neck soothing"]
    }
  },
  {
    id: "face-acupressure",
    name: "Face Acupressure / Totok Wajah",
    category: "Face",
    shortDesc: {
      id: "Totok wajah herbal untuk meredakan mata lelah dan meremajakan kulit.",
      en: "Herbal facial acupressure to soothe eye fatigue and rejuvenate facial skin."
    },
    fullDesc: {
      id: "Teknik penekanan presisi pada titik-titik akupresur wajah untuk memperlancar sirkulasi darah, mengencangkan kulit, serta meredakan ketegangan mata, leher, dan dahi akibat aktivitas layar maupun stres.",
      en: "Precise stimulation on facial meridian pressure points to boost circulation, tone skin, and release head, eye, and brow strain from digital fatigue."
    },
    duration: {
      id: "30 Menit",
      en: "30 Mins"
    },
    isHomeService: true,
    isInStudio: true,
    image: "/face.png",
    fallbackImage: "/spa6.jpg",
    benefits: {
      id: ["Mencerahkan wajah secara alami", "Meredakan mata lelah & sakit kepala", "Meningkatkan elastisitas kulit wajah"],
      en: ["Restore natural facial radiance", "Ease screen eye strain & tension", "Enhance natural skin firmness"]
    },
    steps: {
      id: ["Cleansing wajah lembut", "Penekanan titik meridian akupresur", "Pijatan ringan leher & pundak", "Mist aromaterapi penyegar"],
      en: ["Gentle facial cleansing", "Meridian acupressure stimulation", "Light neck & shoulder massage", "Refreshing botanical mist"]
    }
  },
  {
    id: "foot-massage",
    name: "Reflexology / Foot Massage",
    category: "Massage",
    shortDesc: {
      id: "Pijatan refleksi telapak dan betis untuk mengembalikan kesegaran kaki lelah.",
      en: "Targeted foot & calf reflexology to restore stamina and refresh tired legs."
    },
    fullDesc: {
      id: "Perawatan terarah pada area telapak, jari-jemari, dan betis kaki dengan menstimulasi titik-titik refleksi utama yang terhubung langsung ke organ vital tubuh. Membantu melancarkan sirkulasi cairan serta mengusir rasa lelah berlebih.",
      en: "Focused pressure point therapy on soles, toes, and calves linked to bodily vitality. Promotes fluid drainage, relieves travel aches, and revives overall energy."
    },
    duration: {
      id: "30 Menit",
      en: "30 Mins"
    },
    isHomeService: true,
    isInStudio: true,
    image: "/foot.png",
    fallbackImage: "/spa3.jpg",
    benefits: {
      id: ["Meredakan kaki pegal & tegang", "Memperbaiki peredaran darah", "Mengembalikan stamina tubuh segar"],
      en: ["Relieve aching feet & tightness", "Improve lower body circulation", "Restore refreshed physical energy"]
    },
    steps: {
      id: ["Rendam kaki air herbal hangat", "Pemijatan titik saraf refleksi kaki", "Pijatan ringan betis", "Penyegaran handuk hangat"],
      en: ["Warm herbal foot bath soak", "Precision foot nerve point therapy", "Gentle calf muscle strokes", "Warm cleansing towel finish"]
    }
  },
  {
    id: "ear-candle",
    name: "Ear Candle",
    category: "Special",
    shortDesc: {
      id: "Terapi lilin herbal hangat untuk melegakan tekanan sinus dan kepala berat.",
      en: "Warm herbal candle therapy to soothe sinus pressure and clear heavy head."
    },
    fullDesc: {
      id: "Terapi relaksasi menggunakan lilin aromatik berongga khusus yang diletakkan perlahan pada telinga. Menghasilkan rasa hangat menenangkan, membantu melegakan tekanan sinus dan kepala, serta menenangkan indra pendengaran.",
      en: "Holistic relaxation utilizing gentle hollow aromatic herbal cones placed near the ear. Creates soothing warmth to relieve sinus tension and quiet mental stress."
    },
    duration: {
      id: "30 Menit",
      en: "30 Mins"
    },
    isHomeService: true,
    isInStudio: true,
    image: "/ear.png",
    fallbackImage: "/spa1.jpg",
    benefits: {
      id: ["Meringankan rasa berat di kepala", "Membantu relaksasi telinga & sinus", "Menenangkan pikiran stres"],
      en: ["Lighten head heaviness & fatigue", "Support ear & sinus soothing", "Calm mental tension & worry"]
    },
    steps: {
      id: ["Pemeriksaan telinga awal", "Penyalaan lilin herbal ear candle lembut", "Pijatan ringan area pelipis & daun telinga"],
      en: ["Initial gentle ear examination", "Slow herbal cone therapy", "Gentle temple & outer ear massage"]
    }
  },
  {
    id: "hair-mask",
    name: "Hair Mask",
    category: "Special",
    shortDesc: {
      id: "Masker rambut dan pijatan relaksasi kepala bernutrisi untuk rambut berkilau.",
      en: "Nourishing hair mask and relaxing scalp massage for soft, glossy hair."
    },
    fullDesc: {
      id: "Perawatan intensif menggunakan masker kaya vitamin untuk menutrisi batang dan akar rambut, dipadukan dengan pemijatan lembut kulit kepala dan leher guna meredakan kepenatan serta menjaga rambut tetap sehat berkilau.",
      en: "Intensive vitamin-rich hair cream conditioning paired with relaxing scalp, neck, and shoulder pressure to relieve mental fatigue and nourish hair from root to tip."
    },
    duration: {
      id: "30 Menit",
      en: "30 Mins"
    },
    isHomeService: false,
    isInStudio: true,
    image: "/hair.png",
    fallbackImage: "/spa7.jpg",
    benefits: {
      id: ["Menutrisi rambut & kulit kepala", "Merelaksasi kepala, leher & bahu", "Rambut lebih halus dan sehat"],
      en: ["Deeply nourish hair and scalp", "Relax head, neck, and shoulders", "Leaves hair silky and manageable"]
    },
    steps: {
      id: ["Aplikasi masker rambut nutrisi merata", "Pijatan relaksasi kulit kepala & pundak", "Peresapan nutrisi", "Penyelesaian bilasan segar"],
      en: ["Even conditioning mask application", "Scalp & shoulder relaxation massage", "Nutrient infusion resting time", "Fresh clean finishing rinse"]
    }
  },
  {
    id: "couple-massage",
    name: "Couple Massage",
    category: "Massage",
    shortDesc: {
      id: "Pengalaman pijat relaksasi berdua dalam satu ruangan privat yang tenang dan intim.",
      en: "Harmonious side-by-side relaxation massage experience in a peaceful private setting."
    },
    fullDesc: {
      id: "Sesi relaksasi istimewa untuk dinikmati bersama pasangan dalam satu ruangan privat yang nyaman. Mengombinasikan teknik pijat relaksasi lembut dengan minyak aromaterapi pilihan untuk melepaskan ketegangan tubuh, menyegarkan pikiran, dan menghadirkan momen kebersamaan yang menenangkan.",
      en: "A dedicated side-by-side relaxation journey designed for couples in a tranquil private ambience. Blends rhythmic pressure strokes with soothing botanical essential oils to melt away tension, restore vitality, and share restorative calm."
    },
    duration: {
      id: "60 / 90 / 120 Menit",
      en: "60 / 90 / 120 Mins"
    },
    isHomeService: true,
    isInStudio: true,
    image: "/spa1.jpg",
    fallbackImage: "/spa1.jpg",
    benefits: {
      id: ["Meredakan stres dan kelelahan berdua", "Meningkatkan relaksasi pikiran dan tubuh", "Momen kebersamaan yang intim dan berkesan"],
      en: ["Relieve fatigue & stress together", "Enhance mental and physical calm", "Memorable shared relaxation bonding"]
    },
    steps: {
      id: ["Penyambutan foot bath herbal hangat bersama", "Pijat relaksasi tubuh beriringan", "Aromaterapi menenangkan", "Penyegaran handuk hangat"],
      en: ["Warm herbal foot bath welcome", "Synchronized soothing body massage", "Calming aromatherapy balm", "Warm towel refreshment"]
    }
  },
  {
    id: "hot-oil-massage",
    name: "Hot Oil Massage",
    category: "Massage",
    shortDesc: {
      id: "Pijatan dengan minyak hangat aromatik untuk melegakan otot kaku dan menutrisi kulit.",
      en: "Soothing massage using warm herbal oils to melt stiff muscles and nourish dry skin."
    },
    fullDesc: {
      id: "Terapi pijat menggunakan minyak alami hangat yang diratakan ke seluruh tubuh dengan usapan lembut dan mantap. Kehangatan minyak membantu melonggarkan otot-otot yang kaku, melancarkan peredaran darah, sekaligus memberikan kelembapan ekstra bagi kulit.",
      en: "Indulgent therapy utilizing warmed pure botanical oils poured gently and massaged along tired muscles. The soothing warmth eases muscular tightness, promotes circulation, and restores deep hydration to the skin."
    },
    duration: {
      id: "60 / 90 Menit",
      en: "60 / 90 Mins"
    },
    isHomeService: true,
    isInStudio: true,
    image: "/spa2.jpg",
    fallbackImage: "/spa2.jpg",
    benefits: {
      id: ["Melegakan otot kaku dan pegal mendalam", "Menutrisi dan melembapkan kulit kering", "Memberikan rasa hangat dan relaksasi total"],
      en: ["Melt away stiffness and muscle aches", "Deeply nourish and moisturize dry skin", "Delivers comforting warmth and peace"]
    },
    steps: {
      id: ["Pemanasan awal dan perataan minyak hangat", "Pijatan ritmis melancarkan peredaran darah", "Penekanan lembut area leher dan punggung", "Penyelesaian handuk hangat"],
      en: ["Gentle warm oil application & glide", "Rhythmic circulation massage strokes", "Soothing tension release on back & neck", "Warm towel cleansing finish"]
    }
  },
  {
    id: "aromatherapy-massage",
    name: "Aromaterapi Massage",
    category: "Massage",
    shortDesc: {
      id: "Pijatan lembut berpadu minyak esensial aromatik murni untuk menenangkan pikiran dan jiwa.",
      en: "Gentle healing massage infused with pure essential oils to quiet the mind and senses."
    },
    fullDesc: {
      id: "Pijat relaksasi holistik yang memadukan usapan lembut mengalir dengan wewangian minyak esensial alami pilihan seperti lavender, lemongrass, atau kenanga. Bekerja menyeimbangkan sistem saraf, meredakan kecemasan, serta memulihkan kualitas tidur alami.",
      en: "A holistic relaxation massage blending flowing rhythmic touch with pure therapeutic essential oils such as lavender, lemongrass, or ylang-ylang. Restores nervous system equilibrium, relieves anxiety, and invites restorative sleep."
    },
    duration: {
      id: "60 / 90 Menit",
      en: "60 / 90 Mins"
    },
    isHomeService: true,
    isInStudio: true,
    image: "/spa4.jpg",
    fallbackImage: "/spa4.jpg",
    benefits: {
      id: ["Meredakan kecemasan dan stres emosional", "Membantu memperbaiki pola tidur nyenyak", "Mengurangi rasa lelah fisik dan mental"],
      en: ["Soothe anxiety and emotional stress", "Encourage deep, restful night sleep", "Relieve physical and mental exhaustion"]
    },
    steps: {
      id: ["Inhalasi aroma pembuka pernapasan rileks", "Pijatan ritmis lembut seluruh tubuh", "Sentuhan akupresur ringan kepala & pelipis", "Penyegaran aroma segar penutup"],
      en: ["Opening aromatherapy breathing ritual", "Flowing gentle full-body massage strokes", "Light acupressure on temples & scalp", "Refreshing botanical mist finish"]
    }
  }
];
