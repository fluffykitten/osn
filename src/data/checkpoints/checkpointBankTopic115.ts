import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_115: Record<string, CheckpointQuizItem[]> = {
  // =========================================================================
  // PRASYARAT 1: Tren Sifat Periodik: Muatan Inti Efektif (Zeff) & Jari-Jari Atom
  // =========================================================================
  'tren-sifat-periodik-dan-muatan-inti-efektif': [
    {
      id: 'cp-115-prereq1-q1',
      type: 'multiple_choice',
      question: 'Penyebab utama jari-jari atom mengalami penyusutan (mengecil) dari kiri ke kanan dalam satu periode yang sama pada tabel periodik adalah ....',
      options: [
        'Jumlah kulit utama elektron berkurang secara bertahap',
        'Muatan inti efektif ($Z_{\\text{eff}}$) meningkat tajam karena bertambahnya proton tanpa penambahan kulit baru, sehingga elektron terluar ditarik lebih kuat ke arah inti',
        'Massa atom semakin ringan sehingga atom mengerut',
        'Gaya tolak-menolak antar-elektron terluar melebihi tarikan inti atom',
      ],
      correctAnswer: 1,
      explanation: 'Dalam satu periode dari kiri ke kanan, jumlah proton ($Z$) bertambah sementara elektron tambahan masuk ke kulit utama yang sama. Efek perisaian elektron kulit yang sama sangat lemah, sehingga muatan inti efektif ($Z_{\\text{eff}} = Z - S$) meningkat pesat. Tarikan inti yang kian kuat menarik awan elektron lebih dekat ke inti, menyebabkan jari-jari atom mengecil.',
    },
    {
      id: 'cp-115-prereq1-q2',
      type: 'true_false',
      question: 'Unsur dengan jari-jari atom yang lebih besar dan energi ionisasi yang lebih rendah memiliki kecenderungan lebih kuat untuk bertindak sebagai reduktor (mengalami oksidasi).',
      correctAnswer: true,
      explanation: 'Benar. Energi ionisasi yang rendah berarti elektron valensi terluar terikat sangat lemah dan sangat mudah dilepaskan membentuk kation. Kemudahan melepas elektron inilah definisi sifat elektropositif logam dan daya pereduksi (reduktor kuat), seperti pada logam alkali (Cs, Rb, K).',
    },
    {
      id: 'cp-115-prereq1-q3',
      type: 'multiple_choice',
      question: 'Di antara spesi-spesi isoelektronik berikut (masing-masing memiliki 10 elektron), spesi yang memiliki jari-jari ion terkecil adalah ....',
      options: [
        '$\\ce{O^2-}$ (Nomor atom $Z = 8$)',
        '$\\ce{F-}$ (Nomor atom $Z = 9$)',
        '$\\ce{Na+}$ (Nomor atom $Z = 11$)',
        '$\\ce{Al^3+}$ (Nomor atom $Z = 13$)',
      ],
      correctAnswer: 3,
      explanation: 'Untuk spesi isoelektronik (jumlah elektron sama = 10), jari-jari ion semata-mata ditentukan oleh jumlah proton dalam inti. Ion $\\ce{Al^3+}$ memiliki 13 proton untuk menarik 10 elektron ($Z_{\\text{eff}}$ terbesar), sehingga awan elektron ditarik paling rapat dan menghasilkan jari-jari ion paling kecil.',
    },
  ],

  // =========================================================================
  // PRASYARAT 2: Konfigurasi Elektron Subkulit d & Aturan Setengah Penuh/Penuh
  // =========================================================================
  'konfigurasi-elektron-orbital-d-dan-aturan-setengah-penuh': [
    {
      id: 'cp-115-prereq2-q1',
      type: 'multiple_choice',
      question: 'Konfigurasi elektron keadaan dasar yang benar untuk atom kromium ($\\ce{Cr}$, nomor atom $Z = 24$) menurut asas kestabilan orbital adalah ....',
      options: [
        '$[\\ce{Ar}]\\, 4s^2 3d^4$',
        '$[\\ce{Ar}]\\, 4s^1 3d^5$',
        '$[\\ce{Ar}]\\, 4s^0 3d^6$',
        '$[\\ce{Ar}]\\, 3d^6$',
      ],
      correctAnswer: 1,
      explanation: 'Kromium mengalami anomali kestabilan orbital setengah penuh (*half-filled*). Konfigurasi $[\\ce{Ar}]\\, 4s^1 3d^5$ memiliki simetri bola yang sempurna dan energi pertukaran kuantum (*exchange energy*) maksimal, yang jauh lebih stabil secara termodinamika dibandingkan konfigurasi $[\\ce{Ar}]\\, 4s^2 3d^4$.',
    },
    {
      id: 'cp-115-prereq2-q2',
      type: 'true_false',
      question: 'Saat atom besi ($\\ce{Fe}$, $Z = 26$) terionisasi membentuk ion $\\ce{Fe^2+}$, dua elektron yang dilepaskan berasal dari subkulit $3d$ karena orbital $3d$ ditulis paling belakang.',
      correctAnswer: false,
      explanation: 'Salah! Ini adalah salah satu jebakan paling sering di ujian SMA. Meskipun saat pengisian orbital $3d$ diisi setelah $4s$, elektron pada kulit terluar ($n = 4$, yaitu subkulit $4s$) memiliki jarak rata-rata terjauh dari inti sehingga SELALU dilepaskan terlebih dahulu! Konfigurasi $\\ce{Fe}$: $[\\ce{Ar}]\\, 4s^2 3d^6 \\implies \\ce{Fe^2+}$: $[\\ce{Ar}]\\, 3d^6$.',
    },
    {
      id: 'cp-115-prereq2-q3',
      type: 'multiple_choice',
      question: 'Konfigurasi elektron ion tembaga(II) ($\\ce{Cu^2+}$, nomor atom $Z = 29$) adalah ....',
      options: [
        '$[\\ce{Ar}]\\, 4s^1 3d^8$',
        '$[\\ce{Ar}]\\, 4s^2 3d^7$',
        '$[\\ce{Ar}]\\, 3d^9$',
        '$[\\ce{Ar}]\\, 3d^{10}$',
      ],
      correctAnswer: 2,
      explanation: 'Atom netral $\\ce{Cu}$ memiliki konfigurasi anomali penuh: $[\\ce{Ar}]\\, 4s^1 3d^{10}$. Saat terionisasi menjadi $\\ce{Cu^2+}$, ia melepas 2 elektron: 1 elektron dari subkulit terluar $4s$ dan 1 elektron dari subkulit $3d$, menghasilkan konfigurasi $[\\ce{Ar}]\\, 3d^9$.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 1: Logam Alkali (IA) & Alkali Tanah (IIA): Sifat, Kelarutan, Uji Nyala
  // =========================================================================
  'logam-alkali-ia-dan-alkali-tanah-iia-sifat-kelarutan-uji-nyala': [
    {
      id: 'cp-115-core1-q1',
      type: 'multiple_choice',
      question: 'Pernyataan yang **BENAR** mengenai perbandingan tren kelarutan senyawa basa hidroksida dan garam sulfat dari logam alkali tanah (Golongan IIA: $\\ce{Mg, Ca, Sr, Ba}$) dalam air adalah ....',
      options: [
        'Kelarutan hidroksida $\\ce{M(OH)2}$ makin berkurang ke bawah, sedangkan sulfat $\\ce{MSO4}$ makin mudah larut',
        'Kelarutan hidroksida $\\ce{M(OH)2}$ makin meningkat ke bawah, sedangkan sulfat $\\ce{MSO4}$ makin sukar larut (mengendap)',
        'Seluruh senyawa hidroksida dan sulfat golongan IIA sama-sama mudah larut sempurna dalam air',
        'Kelarutan kedua kelompok senyawa tidak memiliki pola periodik yang teratur',
      ],
      correctAnswer: 1,
      explanation: 'Dalam golongan IIA: kelarutan basa hidroksida $\\ce{M(OH)2}$ MENINGKAT dari atas ke bawah ($\\ce{Mg(OH)2}$ sukar larut antasida, $\\ce{Ba(OH)2}$ basa kuat larut sempurna). Sebaliknya, kelarutan garam sulfat $\\ce{MSO4}$ MENURUN drastis dari atas ke bawah ($\\ce{MgSO4}$ garam Inggris sangat larut, sedangkan $\\ce{BaSO4}$ sangat sukar larut mengendap putih pekat).',
    },
    {
      id: 'cp-115-core1-q2',
      type: 'true_false',
      question: 'Warna nyala kuning terang yang dipancarkan garam natrium saat uji nyala bunsen timbul akibat emisi foton ketika elektron valensi tereksitasi jatuh kembali (*deeksitasi*) ke tingkat energi dasar.',
      correctAnswer: true,
      explanation: 'Benar. Energi termal api bunsen mengeksitasi elektron ke tingkat energi tinggi; saat elektron kembali turun (deeksitasi) ke orbital asalnya, selisih energi dilepaskan dalam bentuk foton cahaya tampak ($\Delta E = hc/\\lambda$). Untuk natrium, emisi doublet D pada $\\lambda \\approx 589\\text{ nm}$ menghasilkan warna kuning emas khas.',
    },
    {
      id: 'cp-115-core1-q3',
      type: 'multiple_choice',
      question: 'Pada uji nyala bunsen laboratorium, garam kalium ($\\ce{K}$) dan garam barium ($\\ce{Ba}$) memancarkan warna nyala api berturut-turut adalah ....',
      options: [
        'Kuning emas dan merah krimson',
        'Ungu muda (lilac) dan hijau apel',
        'Merah bata dan biru tua',
        'Hijau apel dan ungu muda (lilac)',
      ],
      correctAnswer: 1,
      explanation: 'Warna nyala khas kation alkali dan alkali tanah: Litium = merah tua/karmin, Natrium = kuning terang, Kalium = ungu muda/lilac, Kalsium = merah bata/jingga, Stronsium = merah krimson, dan Barium = hijau apel segar.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 2: Halogen (VIIA) & Gas Mulia (VIIIA): Daya Oksidasi, Pendesakan, Xenon
  // =========================================================================
  'halogen-viia-dan-gas-mulia-viia-daya-oksidasi-senyawa-xenon': [
    {
      id: 'cp-115-core2-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan deret daya oksidasi halogen ($\\ce{F2 > Cl2 > Br2 > I2}$), reaksi redoks berikut yang dapat berlangsung secara **spontan** adalah ....',
      options: [
        '$\\ce{I2(s) + 2NaF(aq) -> 2NaI(aq) + F2(g)}$',
        '$\\ce{Br2(l) + 2NaCl(aq) -> 2NaBr(aq) + Cl2(g)}$',
        '$\\ce{Cl2(g) + 2NaBr(aq) -> 2NaCl(aq) + Br2(l)}$',
        '$\\ce{I2(s) + 2KBr(aq) -> 2KI(aq) + Br2(l)}$',
      ],
      correctAnswer: 2,
      explanation: 'Kaidah pendesakan halogen: halogen yang berada di posisi lebih atas memiliki daya oksidasi lebih kuat sehingga mampu mendesak (mengoksidasi) ion halida di bawahnya. Klorin ($\\ce{Cl2}$, $E^\\circ = +1.36\\text{ V}$) terletak di atas bromin ($\\ce{Br2}$, $E^\\circ = +1.07\\text{ V}$), sehingga reaksi $\\ce{Cl2 + 2NaBr -> 2NaCl + Br2}$ berlangsung spontan.',
    },
    {
      id: 'cp-115-core2-q2',
      type: 'true_false',
      question: 'Asam fluorida ($\\ce{HF}$) merupakan asam paling kuat di antara seluruh asam halida karena atom fluorin memiliki keelektronegatifan paling tinggi di alam.',
      correctAnswer: false,
      explanation: 'Salah! Ini adalah miskonsepsi klasik. $\\ce{HF}$ justru merupakan satu-satunya ASAM LEMAH di antara asam halida! Jari-jari atom fluorin sangat kecil sehingga energi ikatan $\\ce{H-F}$ teramat kuat ($565\\text{ kJ/mol}$), membuat proton $\\ce{H+}$ sukar lepas di air. Urutan kekuatan asam halida yang benar adalah $\\ce{HF \\ll HCl < HBr < HI}$ (HI asam terkuat).',
    },
    {
      id: 'cp-115-core2-q3',
      type: 'multiple_choice',
      question: 'Berdasarkan teori domain elektron (VSEPR), bentuk molekul dan jumlah pasangan elektron bebas (PEB) pada atom pusat senyawa xenon tetrafluorida ($\\ce{XeF4}$) adalah ....',
      options: [
        'Tetrahedral tanpa PEB ($AX_4$)',
        'Bujur sangkar (*square planar*) dengan 2 PEB aksial ($AX_4E_2$)',
        'Bipiramida trigonal dengan 1 PEB ($AX_4E$)',
        'Oktahedral tanpa PEB ($AX_6$)',
      ],
      correctAnswer: 1,
      explanation: 'Atom pusat $\\ce{Xe}$ memiliki 8 elektron valensi, berikatan tunggal dengan 4 atom $\\ce{F}$ ($4$ PEI) dan menyisakan 4 elektron non-ikatan ($2$ PEB). Tipe molekulnya adalah $AX_4E_2$ dengan geometri domain oktahedral. Kedua PEB menempati posisi aksial saling berseberangan untuk meminimalkan tolakan, menghasilkan geometri molekul bujur sangkar (*square planar*).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 3: Unsur Periode Ketiga: Sifat Logam-Nonlogam & Amfoterisme Al(OH)3
  // =========================================================================
  'unsur-periode-ketiga-sifat-logam-dan-amfoter-aloh3': [
    {
      id: 'cp-115-core3-q1',
      type: 'multiple_choice',
      question: 'Di antara unsur-unsur periode ketiga ($\\ce{Na, Mg, Al, Si, P, S, Cl, Ar}$), unsur yang memiliki titik leleh tertinggi dan unsur non-logam molekular dengan titik leleh tertinggi berturut-turut adalah ....',
      options: [
        'Aluminium ($\\ce{Al}$) dan Klorin ($\\ce{Cl2}$)',
        'Silikon ($\\ce{Si}$) dan Belerang ($\\ce{S8}$)',
        'Natrium ($\\ce{Na}$) dan Fosforus ($\\ce{P4}$)',
        'Silikon ($\\ce{Si}$) dan Fosforus ($\\ce{P4}$)',
      ],
      correctAnswer: 1,
      explanation: 'Silikon ($\\ce{Si}$) memiliki titik leleh tertinggi ($1410^\\circ\\text{C}$) di antara seluruh unsur periode 3 karena membentuk struktur jaringan kovalen raksasa (*giant covalent network*) mirip intan. Di antara molekul non-logam sederhana ($\\ce{P4, S8, Cl2}$), belerang ($\\ce{S8}$) memiliki massa molekul terbesar ($M_r = 256$), sehingga gaya dispersi London-nya paling kuat dan titik lelehnya tertinggi ($115^\\circ\\text{C}$).',
    },
    {
      id: 'cp-115-core3-q2',
      type: 'true_false',
      question: 'Aluminium hidroksida ($\\ce{Al(OH)3}$) bersifat amfoter, yang berarti endapan ini dapat melarut baik ketika direaksikan dengan larutan asam kuat maupun dengan larutan basa kuat berlebih.',
      correctAnswer: true,
      explanation: 'Benar. Dalam suasana asam kuat, $\\ce{Al(OH)3}$ bertindak sebagai basa membentuk kation terhidrasi: $\\ce{Al(OH)3 + 3H+ -> Al^3+ + 3H2O}$. Dalam suasana basa kuat berlebih, ia bertindak sebagai asam membentuk anion kompleks: $\\ce{Al(OH)3 + OH- -> [Al(OH)4]-}$ (tetrahidroksoaluminat yang larut jernih).',
    },
    {
      id: 'cp-115-core3-q3',
      type: 'multiple_choice',
      question: 'Urutan sifat asam senyawa hidroksida unsur periode ketiga dari yang paling lemah ke yang paling kuat adalah ....',
      options: [
        '$\\ce{HClO4 < H2SO4 < H3PO4 < H4SiO4}$',
        '$\\ce{NaOH < Mg(OH)2 < Al(OH)3 < H4SiO4 < H3PO4 < H2SO4 < HClO4}$',
        '$\\ce{Al(OH)3 < Mg(OH)2 < NaOH < H4SiO4 < H2SO4}$',
        '$\\ce{HClO4 < H2SO4 < Al(OH)3 < NaOH}$',
      ],
      correctAnswer: 1,
      explanation: 'Dari kiri ke kanan dalam satu periode, keelektronegatifan atom pusat meningkat sehingga ikatan O-H makin terpolarisasi dan makin mudah melepaskan proton $\\ce{H+}$. Urutan sifat asam meningkat teratur: $\\ce{NaOH}$ (basa kuat) $<$ $\\ce{Mg(OH)2}$ (basa lemah) $<$ $\\ce{Al(OH)3}$ (amfoter) $<$ $\\ce{H4SiO4}$ (asam sangat lemah) $<$ $\\ce{H3PO4}$ (asam sedang) $<$ $\\ce{H2SO4}$ (asam kuat) $<$ $\\ce{HClO4}$ (asam perklorat, asam terkuat).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 4: Logam Transisi Periode 4: Biloks, Warna Ion, Kemagnetan
  // =========================================================================
  'logam-transisi-periode-4-biloks-warna-ion-dan-kemagnetan': [
    {
      id: 'cp-115-core4-q1',
      type: 'multiple_choice',
      question: 'Di antara ion-ion logam berikut, pasangan ion yang larutannya di dalam air **TIDAK BERWARNA (bening)** adalah ....',
      options: [
        '$\\ce{Cu^2+}$ dan $\\ce{Fe^3+}$',
        '$\\ce{Cr^3+}$ dan $\\ce{Ni^2+}$',
        '$\\ce{Sc^3+}$ dan $\\ce{Zn^2+}$',
        '$\\ce{Co^2+}$ dan $\\ce{Ti^3+}$',
      ],
      correctAnswer: 2,
      explanation: 'Syarat mutlak terjadinya warna pada ion transisi adalah adanya eksitasi elektron melalui transisi $d-d$, yang mensyaratkan subkulit $d$ terisi sebagian ($d^1$ sampai $d^9$). Ion $\\ce{Sc^3+}$ memiliki konfigurasi $[\\ce{Ar}]\\, 3d^0$ (tanpa elektron $d$) dan $\\ce{Zn^2+}$ memiliki konfigurasi $[\\ce{Ar}]\\, 3d^{10}$ (subkulit $d$ terisi penuh), sehingga keduanya tidak dapat melakukan transisi $d-d$ dan tidak berwarna (bening).',
    },
    {
      id: 'cp-115-core4-q2',
      type: 'true_false',
      question: 'Ion $\\ce{Fe^3+}$ ($Z = 26$) memiliki 5 elektron tidak berpasangan pada subkulit $3d$-nya sehingga bersifat paramagnetik lebih kuat dibandingkan ion $\\ce{Fe^2+}$.',
      correctAnswer: true,
      explanation: 'Benar. $\\ce{Fe^3+}$ berkonfigurasi $[\\ce{Ar}]\\, 3d^5$, dengan 5 elektron tak berpasangan ($n = 5 \\implies \\mu_s = \\sqrt{5(7)} \\approx 5.92\\text{ BM}$). Sedangkan $\\ce{Fe^2+}$ berkonfigurasi $[\\ce{Ar}]\\, 3d^6$, di mana 2 elektron telah berpasangan sehingga hanya memiliki 4 elektron tak berpasangan ($n = 4 \\implies \\mu_s = \\sqrt{4(6)} \\approx 4.90\\text{ BM}$).',
    },
    {
      id: 'cp-115-core4-q3',
      type: 'multiple_choice',
      question: 'Unsur transisi periode 4 yang memiliki variasi tingkat bilangan oksidasi paling banyak (dari $+2$ hingga $+7$) dalam senyawanya adalah ....',
      options: [
        'Titanium ($\\ce{Ti}$)',
        'Mangan ($\\ce{Mn}$)',
        'Besi ($\\ce{Fe}$)',
        'Tembaga ($\\ce{Cu}$)',
      ],
      correctAnswer: 1,
      explanation: 'Mangan ($\\ce{Mn}$, $Z = 25$) memiliki konfigurasi valensi $4s^2 3d^5$. Karena memiliki 7 elektron valensi yang seluruhnya belum berpasangan pada subkulit $d$, mangan dapat melepaskan elektron secara bertahap menghasilkan rentang biloks terlengkap: $+2, +3, +4, +6,$ dan $+7$ (pada senyawa $\\ce{KMnO4}$).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 5: Metalurgi & Ekstraksi Kimia Industri
  // =========================================================================
  'proses-metalurgi-ekstraksi-industri-kimia-anorganik': [
    {
      id: 'cp-115-core5-q1',
      type: 'multiple_choice',
      question: 'Pada pengolahan bijih besi hematit ($\\ce{Fe2O3}$) dalam tanur tiup (*blast furnace*), fungsi utama penambahan batu kapur ($\\ce{CaCO3}$) adalah ....',
      options: [
        'Sebagai bahan bakar utama penghasil panas tinggi',
        'Sebagai zat pereduksi langsung untuk mengubah hematit menjadi besi cair',
        'Mengikat pengotor asam silika ($\\ce{SiO2}$) membentuk terak cair kalsium silikat ($\\ce{CaSiO3}$) yang mengapung di atas cairan besi',
        'Mencegah keluarnya gas karbon monoksida dari cerobong tanur',
      ],
      correctAnswer: 2,
      explanation: 'Batu kapur terurai oleh panas menjadi $\\ce{CaO}$: $\\ce{CaCO3 -> CaO + CO2}$. Kalsium oksida yang bersifat basa bereaksi dengan pengotor pasir silika ($\\ce{SiO2}$, oksida asam) membentuk terak kalsium silikat cair: $\\ce{CaO + SiO2 -> CaSiO3}$. Terak ini mengapung di atas lelehan besi, melindungi besi cair dari oksidasi ulang dan memudahkan pemisahan pengotor.',
    },
    {
      id: 'cp-115-core5-q2',
      type: 'true_false',
      question: 'Pada proses isolasi aluminium Hall-Héroult, penambahan kriolit ($\\ce{Na3AlF6}$) berfungsi melarutkan alumina ($\\ce{Al2O3}$) dan menurunkan titik leleh campuran dari $>2000^\\circ\\text{C}$ menjadi sekitar $950^\\circ\\text{C}$.',
      correctAnswer: true,
      explanation: 'Benar. Alumina murni meleleh pada temperatur ekstrem ($>2050^\\circ\\text{C}$) yang sangat boros energi. Kriolit cair bertindak sebagai pelarut lelehan yang menurunkan titik lebur operasional menjadi $\\sim 950^\\circ\\text{C}$ dan meningkatkan daya hantar listrik elektrolit lelehan.',
    },
    {
      id: 'cp-115-core5-q3',
      type: 'multiple_choice',
      question: 'Katalis padat yang digunakan pada tahap oksidasi belerang dioksida menjadi belerang trioksida ($\\ce{2SO2 + O2 <=> 2SO3}$) dalam industri pembuatan asam sulfat melalui **Proses Kontak** adalah ....',
      options: [
        'Serbuk besi murni ($\\ce{Fe}$)',
        'Vanadium pentoksida ($\\ce{V2O5}$)',
        'Mangan dioksida ($\\ce{MnO2}$)',
        'Nikel Raney ($\\ce{Ni}$)',
      ],
      correctAnswer: 1,
      explanation: 'Proses Kontak menggunakan katalis vanadium(V) oksida ($\\ce{V2O5}$) pada suhu optimum sekitar $450^\\circ\\text{C}$ untuk mempercepat reaksi kesetimbangan eksotermik oksidasi $\\ce{SO2}$ menjadi $\\ce{SO3}$. Katalis besi digunakan pada Proses Haber-Bosch untuk sintesis amonia.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 6: Pengayaan Koordinasi & Teorema Distorsi Jahn-Teller
  // =========================================================================
  'pengayaan-kimia-koordinasi-distorsi-jahn-teller': [
    {
      id: 'cp-115-core6-q1',
      type: 'multiple_choice',
      question: 'Teorema Jahn-Teller meramalkan bahwa molekul atau kompleks oktahedral nonlinear akan mengalami distorsi geometris spontan apabila ....',
      options: [
        'Seluruh elektron valensi telah berpasangan sempurna',
        'Berada dalam keadaan elektronik dasar yang terdegenerasi (orbital setara terisi secara asimetris)',
        'Memiliki bilangan koordinasi lebih besar dari delapan',
        'Hanya mengandung ligan bidentat berukuran besar',
      ],
      correctAnswer: 1,
      explanation: 'Teorema Jahn-Teller menyatakan bahwa setiap sistem molekul nonlinear yang memiliki keadaan elektronik terdegenerasi (seperti orbital $e_g$ yang terisi asimetris pada ion $d^9$) tidak stabil secara termodinamika dan akan mengalami distorsi geometris untuk memecah degenerasi energi tersebut dan mencapai tingkat energi total yang lebih rendah.',
    },
    {
      id: 'cp-115-core6-q2',
      type: 'true_false',
      question: 'Pada ion kompleks heksaaquotembaga(II) $[\\ce{Cu(H2O)6}]^2+$ ($d^9$), distorsi Jahn-Teller tipe *z-out* menyebabkan dua ikatan ligan aksial pada sumbu $z$ menjadi lebih panjang daripada empat ikatan ligan ekuatorial.',
      correctAnswer: true,
      explanation: 'Benar. Pada distorsi pemanjangan aksial (*z-out*), dua ligan aksial menjauh sehingga tolakan terhadap orbital yang mengandung komponen $z$ ($d_{z^2}$) berkurang, menurunkan energi orbital $d_{z^2}$ yang terisi sepasang elektron. Hasilnya, panjang ikatan $\\ce{Cu-O}$ aksial ($\approx 230\\text{ pm}$) terukur nyata lebih panjang daripada ikatan ekuatorial ($\approx 197\\text{ pm}$).',
    },
    {
      id: 'cp-115-core6-q3',
      type: 'multiple_choice',
      question: 'Konfigurasi elektron ion kompleks oktahedral medan kuat (*low spin*) berikut yang **TIDAK** mengalami distorsi Jahn-Teller karena orbitalnya terisi simetris adalah ....',
      options: [
        '$d^9$ (misal $\\ce{Cu^2+}$)',
        '$d^7$ medan kuat',
        '$d^6$ medan kuat ($t_{2g}^6 e_g^0$, misal $\\ce{[Fe(CN)6]^4-}$)',
        '$d^4$ medan kuat ($t_{2g}^4 e_g^0$)',
      ],
      correctAnswer: 2,
      explanation: 'Pada ion $d^6$ oktahedral medan kuat ($t_{2g}^6 e_g^0$), seluruh orbital $t_{2g}$ terisi penuh berpasangan sempurna dan orbital $e_g$ kosong total. Karena distribusinya simetris sempurna dan tidak ada orbital terdegenerasi asimetris, sistem ini stabil sempurna dan tidak mengalami distorsi Jahn-Teller.',
    },
  ],
};
