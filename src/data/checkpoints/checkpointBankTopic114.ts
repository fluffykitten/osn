import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_114: Record<string, CheckpointQuizItem[]> = {
  // =========================================================================
  // PRASYARAT 1: Konsep Dasar Redoks & 8 Kaidah Baku Bilangan Oksidasi (Biloks)
  // =========================================================================
  'konsep-dasar-redoks-dan-kaidah-bilangan-oksidasi': [
    {
      id: 'cp-114-prereq1-q1',
      type: 'multiple_choice',
      question: 'Bilangan oksidasi atom oksigen ($\\ce{O}$) dalam senyawa hidrogen peroksida ($\\ce{H2O2}$) dan kalium superoksida ($\\ce{KO2}$) berturut-turut adalah ....',
      options: [
        '$-2$ dan $-2$',
        '$-1$ dan $-1/2$',
        '$-1$ dan $-2$',
        '$+2$ dan $-1$',
      ],
      correctAnswer: 1,
      explanation: 'Sesuai kaidah IUPAC: pada peroksida (seperti $\\ce{H2O2}$ dan $\\ce{Na2O2}$), atom oksigen memiliki biloks $-1$ karena terdapat ikatan kovalen tunggal $\\ce{O-O}$. Pada superoksida (seperti $\\ce{KO2}$ di mana ion $\\ce{K+}$ bermuatan $+1$), ion superoksida adalah $\\ce{O2-}$ sehingga setiap atom $\\ce{O}$ memiliki biloks $-1/2$. Biloks $\\ce{O} = -2$ hanya berlaku pada oksida biner umum.',
    },
    {
      id: 'cp-114-prereq1-q2',
      type: 'true_false',
      question: 'Pada reaksi disproporsionasi (autoredoks), satu spesi zat yang sama mengalami kenaikan bilangan oksidasi (oksidasi) sekaligus penurunan bilangan oksidasi (reduksi).',
      correctAnswer: true,
      explanation: 'Benar. Reaksi autoredoks/disproporsionasi adalah reaksi di mana satu reaktan bertindak sebagai reduktor sekaligus oksidator. Contoh klasiknya: $\\ce{Cl2 + 2OH- -> Cl- + ClO- + H2O}$, di mana gas klorin ($0$) tereduksi menjadi $\\ce{Cl-} (-1)$ dan teroksidasi menjadi $\\ce{ClO-} (+1)$.',
    },
    {
      id: 'cp-114-prereq1-q3',
      type: 'multiple_choice',
      question: 'Di antara reaksi-reaksi berikut, yang **BUKAN** merupakan reaksi reduksi-oksidasi (redoks) adalah ....',
      options: [
        '$\\ce{2Na + 2H2O -> 2NaOH + H2}$',
        '$\\ce{CaCO3 + 2HCl -> CaCl2 + H2O + CO2}$',
        '$\\ce{Zn + CuSO4 -> ZnSO4 + Cu}$',
        '$\\ce{CH4 + 2O2 -> CO2 + 2H2O}$',
      ],
      correctAnswer: 1,
      explanation: 'Pada reaksi $\\ce{CaCO3 + 2HCl -> CaCl2 + H2O + CO2}$, biloks seluruh atom tetap: $\\ce{Ca} (+2)$, $\\ce{C} (+4)$, $\\ce{O} (-2)$, $\\ce{H} (+1)$, dan $\\ce{Cl} (-1)$. Ini adalah reaksi penetralan asam-basa (penggaraman), bukan reaksi redoks.',
    },
  ],

  // =========================================================================
  // PRASYARAT 2: Penyetaraan Reaksi Redoks: Metode PBO vs Setengah Reaksi
  // =========================================================================
  'penyetaraan-reaksi-redoks-pbo-dan-setengah-reaksi': [
    {
      id: 'cp-114-prereq2-q1',
      type: 'multiple_choice',
      question: 'Pada penyetaraan reaksi redoks suasana basa dengan metode ion-elektron setengah reaksi, langkah yang benar untuk menetralkan ion $\\ce{H+}$ yang ditambahkan adalah ....',
      options: [
        'Menghapus ion $\\ce{H+}$ dan menggantinya langsung dengan molekul $\\ce{H2O}$',
        'Menambahkan ion $\\ce{OH-}$ sejumlah ion $\\ce{H+}$ pada sisi yang sama saja',
        'Menambahkan ion $\\ce{OH-}$ sejumlah ion $\\ce{H+}$ pada kedua sisi reaksi, lalu menggabungkan $\\ce{H+ + OH- -> H2O}$',
        'Mengalikan seluruh koefisien reaksi dengan muatan ion hidroksida',
      ],
      correctAnswer: 2,
      explanation: 'Pada suasana basa, setiap ion $\\ce{H+}$ dinetralkan dengan menambahkan ion $\\ce{OH-}$ dalam jumlah yang sama pada KEDUA sisi persamaan reaksi. Di sisi yang terdapat $\\ce{H+}$, ion $\\ce{H+}$ dan $\\ce{OH-}$ bergabung membentuk $\\ce{H2O}$, sementara di sisi seberangnya ion $\\ce{OH-}$ tetap sebagai reaktan/produk basa bebas.',
    },
    {
      id: 'cp-114-prereq2-q2',
      type: 'true_false',
      question: 'Suatu persamaan reaksi redoks sudah pasti setara apabila jumlah setiap atom di ruas kiri telah sama dengan jumlah atom di ruas kanan, tanpa perlu memeriksa total muatan listrik kedua ruas.',
      correctAnswer: false,
      explanation: 'Salah! Ini adalah salah satu jebakan paling fatal dalam kimia SMA. Persamaan redoks ionic dikatakan setara HANYA jika kesetaraan atom terpenuhi DAN jumlah muatan listrik di ruas kiri tepat sama dengan jumlah muatan listrik di ruas kanan. Contoh: $\\ce{Fe^2+ + Ag+ -> Fe^3+ + Ag}$ atomnya sama dan muatannya sama ($+3 = +3$), tetapi jika ada muatan yang timpang, reaksi belum setara secara elektrokimiawi.',
    },
    {
      id: 'cp-114-prereq2-q3',
      type: 'multiple_choice',
      question: 'Perhatikan reaksi ion belum setara: $\\ce{MnO4- + C2O4^2- + H+ -> Mn^2+ + CO2 + H2O}$. Jumlah mol ion permanganat ($\\ce{MnO4-}$) yang dibutuhkan untuk mengoksidasi tepat $5\\text{ mol}$ ion oksalat ($\\ce{C2O4^2-}$) adalah ....',
      options: [
        '$1\\text{ mol}$',
        '$2\\text{ mol}$',
        '$3\\text{ mol}$',
        '$5\\text{ mol}$',
      ],
      correctAnswer: 1,
      explanation: 'Setengah reaksi oksidasi: $\\ce{C2O4^2- -> 2CO2 + 2e-}$ (melepas $2e^-$ per mol oksalat, untuk $5\\text{ mol}$ oksalat dilepas $10\\text{ mol } e^-$). Setengah reaksi reduksi: $\\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O}$ (menerima $5e^-$ per mol permanganat). Agar elektron setara ($10e^-$), dibutuhkan $10 / 5 = 2\\text{ mol } \\ce{MnO4-}$. Persamaan setara: $\\ce{2MnO4- + 5C2O4^2- + 16H+ -> 2Mn^2+ + 10CO2 + 8H2O}$.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 1: Sel Volta / Galvani & Deret Kereaktifan Logam
  // =========================================================================
  'sel-volta-galvani-dan-deret-kereaktifan-logam': [
    {
      id: 'cp-114-core1-q1',
      type: 'multiple_choice',
      question: 'Pada rangkaian Sel Volta Daniell ($\\ce{Zn - Cu}$), pernyataan yang **BENAR** mengenai fungsi dan cara kerja jembatan garam adalah ....',
      options: [
        'Mengalirkan elektron dari setengah sel anoda ke setengah sel katoda',
        'Mempercepat reaksi oksidasi seng dengan menyuplai elektron tambahan',
        'Menjaga netralitas listrik kedua larutan dengan mengalirkan kation ke katoda dan anion ke anoda',
        'Mencegah kontak antara larutan dengan elektroda logam',
      ],
      correctAnswer: 2,
      explanation: 'Elektron HANYA mengalir melalui kawat logam sirkuit eksternal dari anoda ke katoda. Jembatan garam berfungsi menjaga netralitas muatan larutan di sirkuit internal: kation (misal $\\ce{K+}$) bergerak ke katoda untuk mengimbangi berkurangnya kation $\\ce{Cu^2+}$, sedangkan anion (misal $\\ce{NO3-}$ atau $\\ce{Cl-}$) bergerak ke anoda untuk menetralkan kelebihan ion $\\ce{Zn^2+}$. Tanpa jembatan garam, arus listrik seketika berhenti.',
    },
    {
      id: 'cp-114-core1-q2',
      type: 'true_false',
      question: 'Berdasarkan Deret Volta, sepotong logam seng ($\\ce{Zn}$) yang dicelupkan ke dalam larutan tembaga(II) sulfat ($\\ce{CuSO4}$) akan bereaksi secara spontan membentuk endapan tembaga murni.',
      correctAnswer: true,
      explanation: 'Benar. Dalam deret kereaktifan Volta: $\\ce{Zn}$ terletak di sebelah kiri $\\ce{Cu}$ ($E^\\circ_{\\ce{Zn^2+/Zn}} = -0.76\\text{ V} < E^\\circ_{\\ce{Cu^2+/Cu}} = +0.34\\text{ V}$). Logam di sebelah kiri memiliki kecenderungan oksidasi lebih kuat sehingga mampu mendesak (mereduksi) kation logam di sebelah kanannya: $\\ce{Zn(s) + Cu^2+(aq) -> Zn^2+(aq) + Cu(s)}$ spontan.',
    },
    {
      id: 'cp-114-core1-q3',
      type: 'multiple_choice',
      question: 'Sesuai konvensi baku IUPAC, penulisan notasi sel yang benar untuk sel Volta yang tersusun atas elektroda aluminium dan tembaga adalah ....',
      options: [
        '$\\ce{Cu(s) | Cu^2+(aq) || Al^3+(aq) | Al(s)}$',
        '$\\ce{Al(s) | Al^3+(aq) || Cu^2+(aq) | Cu(s)}$',
        '$\\ce{Al^3+(aq) | Al(s) || Cu(s) | Cu^2+(aq)}$',
        '$\\ce{Al(s) | Cu^2+(aq) || Al^3+(aq) | Cu(s)}$',
      ],
      correctAnswer: 1,
      explanation: 'Notasi sel IUPAC disusun dengan format: $\\text{Anoda (s)} \\mid \\text{Ion Anoda (aq)} \\parallel \\text{Ion Katoda (aq)} \\mid \\text{Katoda (s)}$. Karena $E^\\circ_{\\ce{Al}} = -1.66\\text{ V}$ lebih negatif dari $E^\\circ_{\\ce{Cu}} = +0.34\\text{ V}$, aluminium mengalami oksidasi (anoda di sisi kiri) dan tembaga mengalami reduksi (katoda di sisi kanan): $\\ce{Al(s) | Al^3+(aq) || Cu^2+(aq) | Cu(s)}$.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 2: Potensial Sel Standar (E°sel), Relasi ΔG°, & Persamaan Nernst
  // =========================================================================
  'potensial-sel-standar-termodinamika-dan-persamaan-nernst': [
    {
      id: 'cp-114-core2-q1',
      type: 'multiple_choice',
      question: 'Diketahui: $\\ce{Mg^2+ + 2e- -> Mg} \\quad (E^\\circ = -2.37\\text{ V})$ dan $\\ce{Ag+ + e- -> Ag} \\quad (E^\\circ = +0.80\\text{ V})$. Bila reaksi katoda dikalikan 2 menjadi $\\ce{2Ag+ + 2e- -> 2Ag}$, maka nilai potensial sel standar ($E^\\circ_{\\text{sel}}$) reaksi $\\ce{Mg + 2Ag+ -> Mg^2+ + 2Ag}$ adalah ....',
      options: [
        '$+3.17\\text{ Volt}$',
        '$+3.97\\text{ Volt}$',
        '$+1.57\\text{ Volt}$',
        '$+0.77\\text{ Volt}$',
      ],
      correctAnswer: 0,
      explanation: 'Potensial reduksi standar ($E^\\circ$) adalah sifat intensif materi (energi per satuan muatan, $\\text{Joule/Coulomb}$), sehingga nilainya TIDAK BOLEH dikalikan dengan koefisien reaksi! $E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = (+0.80\\text{ V}) - (-2.37\\text{ V}) = +3.17\\text{ Volt}$.',
    },
    {
      id: 'cp-114-core2-q2',
      type: 'true_false',
      question: 'Suatu reaksi redoks berlangsung spontan pada keadaan standar jika dan hanya jika $E^\\circ_{\\text{sel}} > 0$ dan $\\Delta G^\\circ < 0$.',
      correctAnswer: true,
      explanation: 'Benar. Hubungan termodinamika fundamental elektrokimia adalah $\\Delta G^\\circ = -nFE^\\circ_{\\text{sel}}$. Karena muatan elektron ($n$) dan tetapan Faraday ($F$) selalu bernilai positif, maka ketika $E^\\circ_{\\text{sel}} > 0$, nilai perubahan energi bebas Gibbs standar $\\Delta G^\\circ$ bernilai negatif ($< 0$), yang merupakan syarat mutlak reaksi termodinamika spontan.',
    },
    {
      id: 'cp-114-core2-q3',
      type: 'multiple_choice',
      question: 'Pada sel konsentrasi seng $\\ce{Zn(s) | Zn^2+(aq, 0.01 M) || Zn^2+(aq, 1.0 M) | Zn(s)}$, kompartemen yang mengalami reaksi oksidasi (anoda) adalah kompartemen dengan konsentrasi ....',
      options: [
        '$1.0\\text{ M}$, karena semakin pekat semakin mudah teroksidasi',
        '$0.01\\text{ M}$, karena sistem spontan melarutkan logam seng untuk menaikkan konsentrasi ion menuju kesetimbangan',
        'Kedua kompartemen tidak dapat bereaksi karena jenis logamnya identik',
        '$1.0\\text{ M}$, karena potensial standarnya lebih besar dari nol',
      ],
      correctAnswer: 1,
      explanation: 'Pada sel konsentrasi ($E^\\circ_{\\text{sel}} = 0$), sistem berusaha mencapai kesetimbangan (konsentrasi kedua larutan menjadi sama). Larutan encer ($0.01\\text{ M}$) akan bertindak sebagai ANODA di mana $\\ce{Zn(s) -> Zn^2+ + 2e-}$ agar konsentrasi $\\ce{Zn^2+}$ naik, sedangkan larutan pekat ($1.0\\text{ M}$) bertindak sebagai KATODA di mana $\\ce{Zn^2+ + 2e- -> Zn(s)}$ agar konsentrasi $\\ce{Zn^2+}$ turun.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 3: Baterai Komersial & Fenomena Korosi Besi Beserta Pencegahannya
  // =========================================================================
  'baterai-komersial-dan-fenomena-korosi-besi': [
    {
      id: 'cp-114-core3-q1',
      type: 'multiple_choice',
      question: 'Pada saat akumulator (aki timbal-asam) sedang digunakan menyalakan kendaraan (*discharging* / pengosongan arus), proses kimia yang terjadi pada kedua elektrodanya adalah ....',
      options: [
        'Anoda $\\ce{Pb}$ dan katoda $\\ce{PbO2}$ sama-sama berubah menjadi endapan timbal(II) sulfat ($\\ce{PbSO4}$), sementara kadar asam sulfat larutan berkurang',
        'Anoda $\\ce{Pb}$ melepaskan gas hidrogen dan katoda $\\ce{PbO2}$ melepaskan gas oksigen',
        'Kadar asam sulfat ($\\ce{H2SO4}$) di dalam aki bertambah pekat',
        'Logam timbal murni diendapkan pada kedua elektroda',
      ],
      correctAnswer: 0,
      explanation: 'Saat pengosongan aki, terjadi reaksi: $\\ce{Pb(s) + PbO2(s) + 2H2SO4(aq) -> 2PbSO4(s) + 2H2O(l)}$. Anoda $\\ce{Pb}$ dan katoda $\\ce{PbO2}$ keduanya diubah menjadi $\\ce{PbSO4}$. Asam sulfat dikonsumsi dan air terbentuk, sehingga massa jenis elektrolit aki menurun (menjadi lebih encer).',
    },
    {
      id: 'cp-114-core3-q2',
      type: 'true_false',
      question: 'Besi yang dilapisi timah ($\\ce{Sn}$) pada kaleng makanan akan berkarat jauh lebih cepat daripada besi tanpa pelapis apabila lapisan pelindung timah tersebut tergores hingga retak.',
      correctAnswer: true,
      explanation: 'Benar. Dalam deret Volta, $E^\\circ_{\\ce{Sn^2+/Sn}} = -0.14\\text{ V}$ lebih positif daripada $E^\\circ_{\\ce{Fe^2+/Fe}} = -0.44\\text{ V}$. Ketika lapisan timah utuh, besi terlindungi secara mekanik. Namun jika tergores, besi yang lebih reaktif akan bertindak sebagai anoda dan timah sebagai katoda, sehingga besi teroksidasi jauh lebih cepat terakselerasi dibandingkan besi murni tanpa timah!',
    },
    {
      id: 'cp-114-core3-q3',
      type: 'multiple_choice',
      question: 'Metode perlindungan korosi pada pipa baja bawah tanah dengan menghubungkannya ke batangan magnesium ($\\ce{Mg}$) dinamakan ....',
      options: [
        'Elektroplating katodik',
        'Proteksi katodik dengan anoda korban (*sacrificial anode*)',
        'Pasivasi permukaan asam nitrat pekat',
        'Galvanisasi celup panas',
      ],
      correctAnswer: 1,
      explanation: 'Karena $E^\\circ_{\\ce{Mg^2+/Mg}} = -2.37\\text{ V}$ jauh lebih negatif dari besi ($-0.44\\text{ V}$), magnesium lebih mudah teroksidasi sehingga mengorbankan dirinya terkorosi habis (anoda korban) sambil menyuplai elektron ke pipa besi agar pipa besi dipaksa bertindak sebagai katoda permanen dan tidak berkarat.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 4: Sel Elektrolisis: Reaksi di Anoda & Katoda (Lelehan vs Larutan)
  // =========================================================================
  'sel-elektrolisis-reaksi-anoda-katoda-lelehan-larutan': [
    {
      id: 'cp-114-core4-q1',
      type: 'multiple_choice',
      question: 'Jika larutan natrium klorida ($\\ce{NaCl(aq)}$) dielektrolisis menggunakan elektroda karbon (C) inert, zat yang dihasilkan di katoda dan anoda berturut-turut adalah ....',
      options: [
        'Logam natrium ($\\ce{Na}$) dan gas klorin ($\\ce{Cl2}$)',
        'Gas hidrogen ($\\ce{H2}$) dan gas klorin ($\\ce{Cl2}$)',
        'Gas hidrogen ($\\ce{H2}$) dan gas oksigen ($\\ce{O2}$)',
        'Logam natrium ($\\ce{Na}$) dan gas oksigen ($\\ce{O2}$)',
      ],
      correctAnswer: 1,
      explanation: 'Di katoda, kation $\\ce{Na+}$ berasal dari logam alkali aktif golongan IA ($E^\\circ = -2.71\\text{ V} < -0.83\\text{ V}$), sehingga pelarut air yang tereduksi menghasilkan gas hidrogen: $\\ce{2H2O + 2e- -> H2 + 2OH-}$. Di anoda, elektroda karbon bersifat inert dan ion $\\ce{Cl-}$ merupakan halida yang mudah teroksidasi menghasilkan gas klorin: $\\ce{2Cl- -> Cl2 + 2e-}$. Logam $\\ce{Na}$ hanya dapat dihasilkan jika yang dielektrolisis adalah LELEHAN $\\ce{NaCl}$ murni tanpa air!',
    },
    {
      id: 'cp-114-core4-q2',
      type: 'true_false',
      question: 'Pada elektrolisis larutan tembaga(II) sulfat ($\\ce{CuSO4}$) dengan anoda tembaga ($\\ce{Cu}$ aktif), air di anoda akan teroksidasi menghasilkan gas oksigen ($\\ce{O2}$).',
      correctAnswer: false,
      explanation: 'Salah! Karena elektroda anoda adalah tembaga (bukan elektroda inert seperti Pt/C/Au), anoda tembaga itu sendiri yang memiliki kecenderungan oksidasi lebih tinggi dan akan melarut teroksidasi menjadi ion tembaga: $\\ce{Cu(s) -> Cu^2+(aq) + 2e-}$. Ini adalah prinsip dasar proses pemurnian tembaga blister dan penyepuhan logam (*electroplating*).',
    },
    {
      id: 'cp-114-core4-q3',
      type: 'multiple_choice',
      question: 'Perhatikan kaidah reaksi sel elektrolisis. Air akan teroksidasi di anoda menghasilkan gas $\\ce{O2}$ dan ion $\\ce{H+}$ ($\\ce{2H2O -> O2 + 4H+ + 4e-}$) apabila ....',
      options: [
        'Anoda terbuat dari logam tembaga dan larutan mengandung ion klorida',
        'Anoda bersifat inert (Pt atau C) dan larutan mengandung anion sisa asam oksi seperti $\\ce{SO4^2-}$ atau $\\ce{NO3-}$',
        'Katoda bermuatan positif dan dialiri arus bolak-balik (AC)',
        'Elektrolit yang digunakan berupa lelehan garam anhidrat',
      ],
      correctAnswer: 1,
      explanation: 'Bila anoda inert (Pt, C, Au) dan anion yang ada di larutan merupakan sisa asam oksi (seperti $\\ce{SO4^2-}$, $\\ce{NO3-}$, $\\ce{PO4^3-}$ di mana atom pusat sudah mencapai bilangan oksidasi maksimalnya), anion tersebut tidak dapat dioksidasi lagi sehingga molekul air yang teroksidasi menghasilkan gas $\\ce{O2}$ dan asam $\\ce{H+}$.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 5: Stoikiometri Kuantitatif Elektrolisis: Hukum Faraday I & II
  // =========================================================================
  'stoikiometri-kuantitatif-hukum-faraday-dan-sel-seri': [
    {
      id: 'cp-114-core5-q1',
      type: 'multiple_choice',
      question: 'Muatan listrik sebesar $1\\text{ Faraday}$ ($1\\text{ F}$) dialirkan ke dalam larutan perak nitrat ($\\ce{AgNO3}$, $A_r = 108$) dan larutan tembaga(II) sulfat ($\\ce{CuSO4}$, $A_r = 63.5$). Massa endapan logam perak dan tembaga yang dihasilkan berturut-turut adalah ....',
      options: [
        '$108\\text{ gram}$ dan $63.5\\text{ gram}$',
        '$108\\text{ gram}$ dan $31.75\\text{ gram}$',
        '$54\\text{ gram}$ dan $31.75\\text{ gram}$',
        '$216\\text{ gram}$ dan $63.5\\text{ gram}$',
      ],
      correctAnswer: 1,
      explanation: '$1\\text{ F} = 1\\text{ mol elektron}$. Untuk perak: $\\ce{Ag+ + e- -> Ag}$, valensi $n = 1$, sehingga $1\\text{ mol } e^-$ menghasilkan $1\\text{ mol } \\ce{Ag} = 108\\text{ gram}$. Untuk tembaga: $\\ce{Cu^2+ + 2e- -> Cu}$, valensi $n = 2$, sehingga $1\\text{ mol } e^-$ menghasilkan $0.5\\text{ mol } \\ce{Cu} = 0.5 \\times 63.5 = 31.75\\text{ gram}$. Sesuai formula Faraday: $w = e \\times F = \\frac{A_r}{n} \\times F$.',
    },
    {
      id: 'cp-114-core5-q2',
      type: 'true_false',
      question: 'Bila dua sel elektrolisis disusun secara seri, massa endapan logam yang dihasilkan pada katoda sel pertama selalu sama dengan massa endapan logam pada katoda sel kedua.',
      correctAnswer: false,
      explanation: 'Salah! Pada rangkaian seri, yang sama adalah jumlah muatan listrik atau mol elektron ($F$) yang mengalir pada kedua sel. Massa endapan masing-masing elektroda berbanding lurus dengan massa ekuivalen kimianya ($e = A_r / n$): $\\frac{w_1}{w_2} = \\frac{e_1}{e_2}$ (Hukum Faraday II). Logam dengan massa ekuivalen lebih besar akan menghasilkan massa endapan lebih besar.',
    },
    {
      id: 'cp-114-core5-q3',
      type: 'multiple_choice',
      question: 'Arus listrik sebesar $9.65\\text{ Ampere}$ dialirkan selama $1000\\text{ detik}$ ke dalam larutan asam sulfat encer dengan elektroda inert. Volume gas hidrogen ($\\ce{H2}$) yang terbentuk di katoda pada kondisi $STP$ ($22.4\\text{ L/mol}$) adalah ....',
      options: [
        '$1.12\\text{ Liter}$',
        '$2.24\\text{ Liter}$',
        '$0.56\\text{ Liter}$',
        '$4.48\\text{ Liter}$',
      ],
      correctAnswer: 0,
      explanation: 'Hitung mol elektron: $F = \\frac{I \\times t}{96.500} = \\frac{9.65 \\times 1000}{96.500} = 0.10\\text{ mol } e^-$. Reaksi di katoda: $\\ce{2H+ + 2e- -> H2}$. Koefisien reaksi menunjukkan $2\\text{ mol } e^- \\equiv 1\\text{ mol } \\ce{H2}$, maka mol $\\ce{H2} = \\frac{1}{2} \\times 0.10 = 0.05\\text{ mol}$. Volume pada $STP$: $V = 0.05\\text{ mol} \\times 22.4\\text{ L/mol} = 1.12\\text{ Liter}$.',
    },
  ],
};
