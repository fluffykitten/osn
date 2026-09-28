import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_OSN_02: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Struktur Lewis, Aturan Oktet, & Tiga Pengecualian Oktet
  'ikatan-kovalen-lewis': [
    {
      id: 'chk-osn02-pre1-q1',
      type: 'multiple_choice',
      question: 'Molekul boron trifluorida $(\\ce{BF3})$ merupakan senyawa kovalen stabil pada suhu ruang meskipun atom pusat boron tidak memenuhi aturan oktet (hanya memiliki 6 elektron valensi). Konsekuensi kimiawi terpenting dari oktet tak lengkap ini adalah:',
      options: [
        '$\\ce{BF3}$ bersifat sebagai basa Lewis yang sangat kuat karena melepaskan pasangan elektron',
        '$\\ce{BF3}$ bersifat sebagai asam Lewis kuat yang sangat reaktif menerima pasangan elektron bebas dari spesi donor seperti $\\ce{NH3}$',
        '$\\ce{BF3}$ membentuk dimer tetrahedral planar yang terhubung oleh ikatan hidrogen',
        'Ikatan $\\ce{B-F}$ menjadi bersifat ionik murni dengan transfer 3 elektron',
      ],
      correctAnswer: 1,
      explanation: 'Karena atom pusat $\\ce{B}$ pada $\\ce{BF3}$ hanya memiliki 6 elektron valensi (orbital $2p_z$ kosong), molekul ini adalah asam Lewis kuat. Spesi ini dengan sangat cepat menerima pasangan elektron bebas (PEB) dari basa Lewis seperti ammonia membentuk aduk stabil $\\ce{F3B\\bond{<-}NH3}$ di mana atom boron akhirnya mencapai konfigurasi oktet stabil.',
      misconceptionTarget: 'Mengira senyawa dengan oktet tak lengkap bersifat basa Lewis atau tidak reaktif',
    },
    {
      id: 'chk-osn02-pre1-q2',
      type: 'true_false',
      question: 'Molekul nitrogen monoksida $(\\ce{NO})$ tergolong molekul radikal bebas stabil yang memiliki jumlah elektron valensi ganjil (11 elektron), sehingga secara fisik mustahil bagi seluruh atom di dalamnya untuk memenuhi aturan oktet secara bersamaan.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Jumlah elektron valensi total $\\ce{NO}$ adalah $5 + 6 = 11$ elektron (ganjil). Pada molekul dengan jumlah elektron ganjil (radikal bebas), pasti terdapat minimal satu elektron tak berpasangan, sehingga aturan oktet mustahil terpenuhi sempurna untuk kedua atom sekaligus.',
      misconceptionTarget: 'Mengira semua molekul biner stabil wajib memenuhi aturan oktet untuk seluruh atom penyusunnya',
    },
    {
      id: 'chk-osn02-pre1-q3',
      type: 'multiple_choice',
      question: 'Manakah dari unsur-unsur berikut yang TIDAK PERNAH dapat mengalami perluasan kulit valensi (oktet berkembang / hipervalen lebih dari 8 elektron) dalam senyawa apa pun?',
      options: [
        'Fosfor $(\\ce{P})$',
        'Belerang $(\\ce{S})$',
        'Nitrogen $(\\ce{N})$',
        'Klorin $(\\ce{Cl})$',
      ],
      correctAnswer: 2,
      explanation: 'Nitrogen adalah unsur Periode 2 dengan konfigurasi valensi $2s^2 2p^3$. Unsur periode 2 hanya memiliki orbital $2s$ dan $2p$ (maksimal 4 orbital spasial $\\implies$ maksimal menampung 8 elektron). Unsur periode 2 tidak memiliki subkulit $d$ berenergi rendah pada kulit valensinya, sehingga mustahil membentuk spesi hipervalen seperti $\\ce{NF5}$ (senyawa $\\ce{NF5}$ tidak pernah ada, sedangkan $\\ce{PF5}$ sangat stabil).',
      misconceptionTarget: 'Mengira unsur periode 2 seperti Nitrogen dapat membentuk senyawa hipervalen berikatan 5 seperti fosfor',
    },
  ],

  // Prasyarat 2: Kalkulasi Muatan Formal & Resonansi Struktur Lewis
  'muatan-formal-resonansi': [
    {
      id: 'chk-osn02-pre2-q1',
      type: 'multiple_choice',
      question: 'Perhatikan ion tiosianat $(\\ce{[SCN]-})$. Pada struktur Lewis $[\,\\ce{S=C=N}\,]^-$, berapakah muatan formal atom $\\ce{S}$, $\\ce{C}$, dan $\\ce{N}$ secara berurutan?',
      options: [
        '$0, 0, -1$',
        '$-1, 0, 0$',
        '$+1, 0, -2$',
        '$0, +1, -2$',
      ],
      correctAnswer: 0,
      explanation: 'Rumus muatan formal: $FC = V - N_{\\text{non-ikatan}} - \\frac{1}{2} N_{\\text{ikatan}}$.\\n- Untuk $\\ce{S}$ ($V=6$, 4 elektron bebas, 2 ikatan): $FC = 6 - 4 - 2 = 0$.\\n- Untuk $\\ce{C}$ ($V=4$, 0 elektron bebas, 4 ikatan): $FC = 4 - 0 - 4 = 0$.\\n- Untuk $\\ce{N}$ ($V=5$, 4 elektron bebas, 2 ikatan): $FC = 5 - 4 - 2 = -1$.\\nTotal muatan formal $= 0 + 0 + (-1) = -1$ (sesuai muatan ion).',
      misconceptionTarget: 'Salah menghitung muatan formal dengan mengabaikan elektron bebas atau salah membagi ikatan kovalen',
    },
    {
      id: 'chk-osn02-pre2-q2',
      type: 'true_false',
      question: 'Fenomena resonansi menggambarkan bahwa molekul nyata berosilasi dan berganti wujud secara fisik bolak-balik dengan frekuensi sangat tinggi di antara struktur-struktur kanonikal Lewis penyusunnya.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Resonansi bukanlah osilasi fisik atau kesetimbangan kimia dinamis di mana molekul melompat bolak-balik antar-struktur. Struktur nyata adalah satu molekul tunggal permanen yang merupakan hibrida resonansi (bobot rata-rata), di mana elektron $\\pi$ terdelokalisasi merata di seluruh kerangka molekul.',
      misconceptionTarget: 'Membayangkan resonansi sebagai proses berkedip bolak-balik antar struktur Lewis',
    },
    {
      id: 'chk-osn02-pre2-q3',
      type: 'multiple_choice',
      question: 'Di antara kriteria berikut, manakah struktur resonansi yang memberikan KONTRIBUSI TERBESAR (kontributor mayor) terhadap hibrida resonansi molekul?',
      options: [
        'Struktur dengan pemisahan muatan formal sebesar-besarnya',
        'Struktur di mana seluruh atom memenuhi oktet dan muatan formal negatif terletak pada atom yang paling elektronegatif',
        'Struktur yang memiliki muatan formal positif pada atom halogen terluar',
        'Struktur dengan ikatan tunggal terbanyak mengorbankan aturan oktet',
      ],
      correctAnswer: 1,
      explanation: 'Kaidah stabilitas resonansi: 1) Jumlah atom beroktet maksimal; 2) Jumlah ikatan kovalen terbanyak; 3) Pemisahan muatan formal seminimal mungkin; 4) Jika ada muatan formal negatif, wajib dialokasikan pada atom dengan elektronegativitas tertinggi.',
      misconceptionTarget: 'Mengabaikan faktor elektronegativitas dalam penempatan muatan formal negatif pada struktur resonansi mayor',
    },
  ],

  // Prasyarat 3: Kepolaran Ikatan & Resultan Vektor Momen Dipol
  'kepolaran-momen-dipol': [
    {
      id: 'chk-osn02-pre3-q1',
      type: 'multiple_choice',
      question: 'Molekul karbon dioksida $(\\ce{CO2})$ memiliki dua ikatan $\\ce{C=O}$ yang sangat polar karena selisih keelektronegatifan $\\ce{O}$ dan $\\ce{C}$ cukup besar $(\\Delta \\chi = 1.0)$. Namun secara eksperimen, momen dipol total molekul $\\ce{CO2}$ adalah nol mutlak $(\\mu = 0\\text{ D})$. Penyebab fundamental fenomena ini adalah:',
      options: [
        'Elektron pada ikatan $\\ce{C=O}$ berubah menjadi nonpolar pada fasa gas',
        'Geometri molekul $\\ce{CO2}$ adalah linear simetris ($180^\\circ$), sehingga kedua vektor momen dipol ikatan sama besar dan saling meniadakan secara vektor',
        'Atom karbon menyerap seluruh polaritas oksigen menjadi gaya dispersi',
        'Kedua ikatan $\\ce{C=O}$ saling beresonansi memusnahkan muatan parsial',
      ],
      correctAnswer: 1,
      explanation: 'Momen dipol molekul adalah besaran vektor ($\\vec{\\mu} = \\sum \\vec{\\mu}_i$). Meskipun masing-masing ikatan $\\ce{C=O}$ memiliki momen dipol ikatan polar yang kuat, geometri linear ($180^\\circ$) simetris menyebabkan kedua vektor dipol berlawanan arah tepat $180^\\circ$ dan saling membatalkan: $\\vec{\\mu}_{\\text{total}} = \\vec{\\mu}_1 + \\vec{\\mu}_2 = 0$.',
      misconceptionTarget: 'Menganggap molekul yang memiliki ikatan polar pasti selalu menjadi molekul polar secara keseluruhan',
    },
    {
      id: 'chk-osn02-pre3-q2',
      type: 'true_false',
      question: 'Momen dipol molekul ammonia $(\\ce{NH3}: \\mu = 1.47\\text{ D})$ jauh lebih besar daripada nitrogen trifluorida $(\\ce{NF3}: \\mu = 0.24\\text{ D})$, meskipun ikatan $\\ce{N-F}$ memiliki perbedaan keelektronegatifan yang jauh lebih besar daripada $\\ce{N-H}$.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Pada $\\ce{NH3}$, arah momen dipol ketiga ikatan $\\ce{N-H}$ mengarah ke atom pusat $\\ce{N}$ (karena $\\ce{N}$ lebih elektronegatif dari $\\ce{H}$), yang searah dengan momen dipol pasangan elektron bebas (PEB), sehingga keduanya saling memperkuat. Sebaliknya pada $\\ce{NF3}$, $\\ce{F}$ lebih elektronegatif dari $\\ce{N}$, sehingga dipol ketiga ikatan $\\ce{N-F}$ mengarah ke bawah menjauhi $\\ce{N}$, berlawanan arah dengan momen dipol PEB di puncak piramida dan saling melemahkan.',
      misconceptionTarget: 'Mengira momen dipol molekul hanya ditentukan oleh selisih elektronegativitas tanpa memperhitungkan arah vektor momen dipol pasangan elektron bebas',
    },
    {
      id: 'chk-osn02-pre3-q3',
      type: 'multiple_choice',
      question: 'Manakah dari molekul berikut yang memiliki momen dipol permanen TIDAK NOL $(\\mu \\ne 0)$?',
      options: [
        'Boron trifluorida $(\\ce{BF3})$',
        'Metana $(\\ce{CH4})$',
        'Belerang tetrafluorida $(\\ce{SF4})$',
        'Sulfur heksafluorida $(\\ce{SF6})$',
      ],
      correctAnswer: 2,
      explanation: '$\\ce{BF3}$ (trigonal planar), $\\ce{CH4}$ (tetrahedral), dan $\\ce{SF6}$ (oktahedral) memiliki geometri simetris sempurna tanpa PEB ekuatorial tak berpasangan, sehingga resultan momen dipolnya nol (nonpolar). $\\ce{SF4}$ memiliki tipe sterik $AX_4E_1$ dengan bentuk jungkat-jungkit (seesaw) asimetris, menghasilkan momen dipol netto permanen $(\\mu = 0.63\\text{ D})$.',
      misconceptionTarget: 'Mengira semua molekul dengan 4 ligan identik (seperti SF4) otomatis bersifat simetris nonpolar',
    },
  ],

  // Konsep Inti 1: Teori VSEPR Lanjutan & Aturan Bent (Bent's Rule)
  'vsepr-lanjutan-aturan-bent': [
    {
      id: 'chk-osn02-core1-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan Teori Tolakan Pasangan Elektron Kulit Valensi (VSEPR), urutan kekuatan gaya tolak-menolak antar-domain elektron di sekitar atom pusat yang benar adalah:',
      options: [
        '$\\text{Tolakan BP-BP} > \\text{Tolakan LP-BP} > \\text{Tolakan LP-LP}$',
        '$\\text{Tolakan LP-LP} > \\text{Tolakan LP-BP} > \\text{Tolakan BP-BP}$',
        '$\\text{Tolakan LP-BP} > \\text{Tolakan LP-LP} > \\text{Tolakan BP-BP}$',
        'Semua tolakan pasangan elektron bernilai identik sama besar',
      ],
      correctAnswer: 1,
      explanation: 'Pasangan elektron bebas (Lone Pair / LP) hanya ditarik oleh satu inti atom sehingga awan elektronnya lebih membesar, difus, dan menempati volume sudut yang lebih luas. Akibatnya tolakan LP-LP paling kuat, diikuti tolakan LP-BP, dan tolakan antar pasangan ikatan (Bonding Pair / BP-BP) paling lemah.',
      misconceptionTarget: 'Tertukar antara kekuatan tolakan lone pair dengan bonding pair',
    },
    {
      id: 'chk-osn02-core1-q2',
      type: 'true_false',
      question: 'Menurut Aturan Bent (Bent\'s Rule), atom pusat mengarahkan orbital dengan karakter-$p$ lebih tinggi (karakter-$s$ lebih rendah) ke arah ligan yang lebih elektronegatif.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Ligan yang sangat elektronegatif menarik densitas elektron ikatan menjauhi atom pusat. Karena elektron tersebut berada jauh dari inti atom pusat, atom pusat lebih menguntungkan secara termodinamika mengalokasikan orbital dengan karakter-$s$ rendah (karakter-$p$ tinggi) ke arah ligan tersebut, dan menyimpan orbital berkarakter-$s$ tinggi (yang energinya lebih rendah dan stabil dekat inti) untuk pasangan elektron bebas atau ligan yang lebih elektropositif.',
      misconceptionTarget: 'Mengira ligan elektronegatif lebih menyukai orbital dengan karakter-s tinggi',
    },
    {
      id: 'chk-osn02-core1-q3',
      type: 'multiple_choice',
      question: 'Pada molekul fosforus trifluorida diklorida $(\\ce{PCl2F3})$ yang memiliki geometri dasar bipiramida trigonal ($sp^3d$), di manakah kedua atom klorin $(\\ce{Cl})$ dan ketiga atom fluorin $(\\ce{F})$ akan menempati posisi orbital berdasarkan Aturan Bent?',
      options: [
        'Kedua atom $\\ce{Cl}$ menempati posisi aksial, ketiga atom $\\ce{F}$ menempati posisi ekuatorial',
        'Kedua atom $\\ce{Cl}$ menempati posisi ekuatorial, dua atom $\\ce{F}$ menempati posisi aksial dan satu atom $\\ce{F}$ menempati posisi ekuatorial',
        'Seluruh atom $\\ce{F}$ menempati posisi aksial secara acak terdistribusi',
        'Kedua atom $\\ce{Cl}$ dan ketiga atom $\\ce{F}$ terdistribusi bebas tanpa preferensi posisi',
      ],
      correctAnswer: 1,
      explanation: 'Pada bipiramida trigonal, posisi aksial dibentuk oleh hibrida $pd$ (karakter-$s = 0\\%$) sedangkan posisi ekuatorial dibentuk oleh hibrida $sp^2$ (karakter-$s = 33.3\\%$). Sesuai Aturan Bent, ligan yang paling elektronegatif ($\\ce{F}, \\chi = 4.0$) memprioritaskan posisi dengan karakter-$s$ paling rendah (posisi aksial), sehingga kedua posisi aksial ditempati oleh $\\ce{F}$. Ligan yang kurang elektronegatif ($\\ce{Cl}, \\chi = 3.0$) menempati posisi ekuatorial bersama sisa satu atom $\\ce{F}$.',
      misconceptionTarget: 'Menempatkan ligan lebih besar (Cl) di aksial atau mengabaikan distribusi karakter-s pada bipiramida trigonal',
    },
  ],

  // Konsep Inti 2: Hibridisasi Orbital Atom & Tinjauan Ikatan sigma / pi
  'hibridisasi-orbital-valensi': [
    {
      id: 'chk-osn02-core2-q1',
      type: 'multiple_choice',
      question: 'Suatu atom karbon dalam senyawa organik memiliki karakter-$s$ sebesar $50\\%$ pada orbital hibridanya. Manakah pernyataan berikut yang BENAR mengenai atom karbon tersebut?',
      options: [
        'Atom karbon tersebut berhibridisasi $sp^3$ dengan sudut ikatan $109.5^\\circ$',
        'Atom karbon tersebut berhibridisasi $sp^2$ dan membentuk 1 ikatan $\\pi$',
        'Atom karbon tersebut berhibridisasi $sp$ dengan geometri linear $180^\\circ$ dan panjang ikatan $\\ce{C-H}$ paling pendek',
        'Atom karbon tersebut tidak dapat membentuk ikatan kovalen rangkap',
      ],
      correctAnswer: 2,
      explanation: 'Hibridisasi $sp$ terdiri dari 1 bagian orbital $s$ dan 1 bagian orbital $p$, sehingga fraksi karakter-$s = 50\\%$. Karena orbital $s$ lebih dekat ke inti dibanding orbital $p$, peningkatan karakter-$s$ menarik elektron ikatan lebih dekat ke inti, menghasilkan ikatan $\\ce{C-H}$ yang paling pendek dan paling kuat serta keasaman proton paling tinggi.',
      misconceptionTarget: 'Tertukar menghitung persentase karakter-s pada hibridisasi sp (50%), sp2 (33.3%), dan sp3 (25%)',
    },
    {
      id: 'chk-osn02-core2-q2',
      type: 'true_false',
      question: 'Ikatan kovalen $\\pi$ (pi) terbentuk melalui tumpang-tindih orbital atom secara sejajar/menyamping (lateral/side-to-side overlap) dan memiliki simetri silindris sempurna mengelilingi sumbu antar-inti.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Ikatan yang memiliki simetri silindris mengelilingi sumbu antar-inti adalah ikatan $\\sigma$ (sigma, tumpang-tindih ujung-ke-ujung / head-on). Ikatan $\\pi$ terbentuk melalui tumpang-tindih menyamping dan memiliki bidang simpul (nodal plane) tepat pada sumbu antar-inti dengan densitas elektron berada di atas dan di bawah sumbu.',
      misconceptionTarget: 'Mengira ikatan pi memiliki simetri silindris seperti ikatan sigma',
    },
    {
      id: 'chk-osn02-core2-q3',
      type: 'multiple_choice',
      question: 'Berapakah bilangan sterik dan tipe hibridisasi atom pusat klorin $(\\ce{Cl})$ pada molekul klorin trifluorida $(\\ce{ClF3})$?',
      options: [
        'Bilangan sterik 3, hibridisasi $sp^2$',
        'Bilangan sterik 4, hibridisasi $sp^3$',
        'Bilangan sterik 5, hibridisasi $sp^3d$',
        'Bilangan sterik 6, hibridisasi $sp^3d^2$',
      ],
      correctAnswer: 2,
      explanation: 'Atom pusat $\\ce{Cl}$ memiliki 7 elektron valensi. Tiga elektron berikatan tunggal dengan tiga atom $\\ce{F}$ (3 PEI), menyisakan 4 elektron non-ikatan yang membentuk 2 pasangan elektron bebas (2 PEB). Bilangan sterik $= 3 + 2 = 5$. Tipe molekul $AX_3E_2$ dengan hibridisasi $sp^3d$ (bentuk molekul Huruf-T / T-shaped).',
      misconceptionTarget: 'Lupa menghitung 2 pasangan elektron bebas pada ClF3 sehingga mengira hibridisasinya sp2',
    },
  ],

  // Konsep Inti 3: Teori Orbital Molekul (Molecular Orbital Theory / MOT)
  'teori-orbital-molekul-mot': [
    {
      id: 'chk-osn02-core3-q1',
      type: 'multiple_choice',
      question: 'Eksperimen membuktikan bahwa oksigen cair $(\\ce{O2})$ dapat ditarik dan tertahan melayang di antara kutub magnet kuat (bersifat paramagnetik). Teori Orbital Molekul (MOT) menjelaskan fakta ini dengan adanya:',
      options: [
        'Dua elektron tak berpasangan pada orbital molekul ikatan $\\pi_{2p}$',
        'Dua elektron tak berpasangan pada orbital molekul anti-ikatan $\\pi^*_{2p}$ dengan spin sejajar',
        'Satu elektron tak berpasangan pada orbital $\\sigma^*_{2s}$',
        'Pemutusan ikatan kovalen $\\ce{O=O}$ menjadi dua atom oksigen bebas',
      ],
      correctAnswer: 1,
      explanation: 'Konfigurasi MOT valensi molekul $\\ce{O2}$ (12 elektron valensi): $(\\sigma_{2s})^2 (\\sigma^*_{2s})^2 (\\sigma_{2p_z})^2 (\\pi_{2p_x})^2 (\\pi_{2p_y})^2 (\\pi^*_{2p_x})^1 (\\pi^*_{2p_y})^1$. Berdasarkan aturan Hund, dua elektron terakhir menempati sepasang orbital anti-ikatan terdegenerasi $\\pi^*_{2p}$ secara terpisah dengan spin paralel, menghasilkan 2 elektron tak berpasangan (paramagnetik murni).',
      misconceptionTarget: 'Mengira oksigen bersifat diamagnetik karena struktur Lewis memperlihatkan seluruh elektron tampak berpasangan (O=O)',
    },
    {
      id: 'chk-osn02-core3-q2',
      type: 'true_false',
      question: 'Pada molekul diatomik homonuklir sebelum oksigen seperti $\\ce{B2}$, $\\ce{C2}$, dan $\\ce{N2}$, orbital ikatan $\\pi_{2p}$ memiliki tingkat energi lebih rendah daripada $\\sigma_{2p_z}$ akibat terjadinya pencampuran kuat antara orbital $2s$ dan $2p_z$ ($s-p\\text{ mixing}$).',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Pada $\\ce{B2}$, $\\ce{C2}$, dan $\\ce{N2}$, selisih energi antara orbital atom $2s$ dan $2p$ cukup kecil ($< 12\\text{ eV}$), memicu interaksi pencampuran simetri ($s-p\\text{ mixing}$) yang mendorong orbital $\\sigma_{2p_z}$ ke tingkat energi lebih tinggi di atas $\\pi_{2p}$. Pada $\\ce{O2}$ dan $\\ce{F2}$, muatan inti yang besar memperlebar jarak energi $2s-2p$ sehingga $s-p\\text{ mixing}$ diabaikan dan urutan energi kembali normal ($\\sigma_{2p_z} < \\pi_{2p}$).',
      misconceptionTarget: 'Menggunakan satu urutan tingkat energi MOT yang sama untuk seluruh molekul diatomik periode 2',
    },
    {
      id: 'chk-osn02-core3-q3',
      type: 'multiple_choice',
      question: 'Berapakah orde ikatan (bond order) untuk spesi kation nitrosonium $(\\ce{NO+})$ berdasarkan Teori Orbital Molekul?',
      options: [
        '$1.5$',
        '$2.0$',
        '$2.5$',
        '$3.0$',
      ],
      correctAnswer: 3,
      explanation: 'Spesi $\\ce{NO+}$ memiliki jumlah elektron valensi $= 5 (\\text{dari N}) + 6 (\\text{dari O}) - 1 (\\text{muatan } +1) = 10$ elektron valensi (isoelektronik dengan $\\ce{N2}$ dan $\\ce{CO}$). Seluruh 8 elektron ikatan menempati orbital ikatan ($\\sigma_{2s}^2 \\pi_{2p}^4 \\sigma_{2p_z}^2$) dan 2 elektron di orbital anti-ikatan ($\\sigma_{2s}^{*2}$). Orde ikatan $= \\frac{N_b - N_a}{2} = \\frac{8 - 2}{2} = 3.0$ (ikatan rangkap tiga kuat).',
      misconceptionTarget: 'Salah menghitung jumlah elektron valensi ion atau keliru menerapkan rumus orde ikatan',
    },
  ],

  // Konsep Inti 4: Gaya Antarmolekul & Fenomena Ikatan Hidrogen
  'gaya-antarmolekul-ikatan-hidrogen': [
    {
      id: 'chk-osn02-core4-q1',
      type: 'multiple_choice',
      question: 'Di antara senyawa hidrida golongan 16 berikut: $\\ce{H2O}$, $\\ce{H2S}$, $\\ce{H2Se}$, dan $\\ce{H2Te}$, air $(\\ce{H2O})$ memiliki titik didih yang melonjak sangat tinggi $(\\approx 100^\\circ\\text{C})$ dibanding $\\ce{H2S}$ $(-60^\\circ\\text{C})$. Faktor utama penyebab anomali termodinamika ini adalah:',
      options: [
        'Ikatan kovalen $\\ce{H-O}$ di dalam molekul air sangat kuat sehingga sulit diputuskan',
        'Kemampuan setiap molekul $\\ce{H2O}$ membentuk rata-rata 4 ikatan hidrogen antarmolekul dalam jaringan tetrahedral 3D yang sangat kokoh',
        'Berat molekul $\\ce{H2O}$ lebih berat dibanding hidrida lainnya',
        'Air mengalami ionisasi sempurna menjadi ion $\\ce{H3O+}$ dan $\\ce{OH-}$ dalam fasa cair',
      ],
      correctAnswer: 1,
      explanation: 'Setiap molekul $\\ce{H2O}$ memiliki tepat 2 atom hidrogen terpolarisasi positif dan 2 pasang elektron bebas pada oksigen elektronegatif, memungkinkan pembentukan jaringan ikatan hidrogen 3D yang optimal (rata-rata 4 ikatan hidrogen per molekul). Pendidihan mengatasi gaya antarmolekul ini, bukan memutus ikatan kovalen intramolekul.',
      misconceptionTarget: 'Mengira pendidihan air memutus ikatan kovalen intramolekul O-H, bukan ikatan hidrogen antarmolekul',
    },
    {
      id: 'chk-osn02-core4-q2',
      type: 'true_false',
      question: 'Gaya dispersi London hanya terjadi pada molekul-molekul nonpolar (seperti $\\ce{CH4}$ dan $\\ce{He}$), sedangkan molekul polar tidak memiliki gaya dispersi London sama sekali.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Gaya dispersi London (fluktuasi dipol sesaat-dipol terimbas) hadir pada SEMUA molekul materi tanpa pengecualian, baik polar maupun nonpolar. Pada molekul polar berukuran besar (seperti $\\ce{HI}$), gaya dispersi London bahkan menyumbang porsi terbesar terhadap total gaya tarik antarmolekul dibanding gaya dipol-dipol.',
      misconceptionTarget: 'Menganggap gaya dispersi London hanya ada pada zat nonpolar',
    },
    {
      id: 'chk-osn02-core4-q3',
      type: 'multiple_choice',
      question: 'Ion hidrogen difluorida $(\\ce{[F-H-F]-})$ memperlihatkan fenomena ikatan hidrogen simetris terkuat di alam semesta dengan energi ikatan mencapai $> 160\\text{ kJ/mol}$. Struktur ini paling tepat dijelaskan melalui model:',
      options: [
        'Interaksi dipol-dipol klasik elektrostatik murni',
        'Ikatan 3-pusat 4-elektron (3-center 4-electron / 3c-4e bond) dengan proton terletak tepat di tengah simetris antara kedua atom fluorin',
        'Gaya dispersi London kuat akibat polarisabilitas tinggi fluorin',
        'Ikatan kovalen koordinasi rangkap dua',
      ],
      correctAnswer: 1,
      explanation: 'Pada anion $\\ce{[F-H-F]-}$, energi ikatan hidrogen begitu dahsyat sehingga kurva potensial sumur ganda runtuh menjadi satu sumur tunggal simetris di tengah. Fenomena ini dimodelkan sebagai ikatan 3-pusat 4-elektron (3c-4e) di mana orbital molekul $\\sigma$ terdelokalisasi merata melintasi kerangka linear $\\ce{F-H-F}$.',
      misconceptionTarget: 'Menganggap semua ikatan hidrogen selalu asimetris dan murni bersifat elektrostatik klasik',
    },
  ],

  // Konsep Inti 5: Termodinamika Senyawa Ionik & Siklus Born-Haber
  'energi-kisi-born-haber': [
    {
      id: 'chk-osn02-core5-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan Persamaan Kapustinskii, energi kisi kristal ionik $(U_L)$ berbanding lurus dengan:',
      options: [
        'Jumlah elektron valensi kation',
        'Hasil kali muatan ion $(|z_+ z_-|)$ dan berbanding terbalik dengan jarak antar-inti $(r_+ + r_-)$',
        'Massa molar senyawa kristal',
        'Volume sel satuan dipangkatkan tiga',
      ],
      correctAnswer: 1,
      explanation: 'Persamaan Kapustinskii menyatakan bahwa energi kisi ionik dirumuskan oleh $U_L = -\\frac{K \\cdot \\nu \\cdot |z_+ z_-|}{r_+ + r_-} \\left(1 - \\frac{d}{r_+ + r_-}\\right)$. Secara dominan, energi kisi sebanding langsung dengan hasil kali muatan kation-anion ($|z_+ z_-|$) dan berbanding terbalik dengan jarak antar-inti ion ($r_+ + r_-$).',
      misconceptionTarget: 'Mengira ukuran ion lebih dominan menentukan energi kisi daripada muatan ion (padahal muatan berlipat kuadratik)',
    },
    {
      id: 'chk-osn02-core5-q2',
      type: 'true_false',
      question: 'Meskipun energi ionisasi kedua magnesium $(\\ce{Mg -> Mg^2+ + 2e-})$ membutuhkan energi sangat besar $(> 2180\\text{ kJ/mol})$, senyawa $\\ce{MgCl2}$ di alam jauh lebih stabil dibanding hipotetis $\\ce{MgCl}$ karena energi kisi kristal $\\ce{MgCl2}$ melepaskan energi yang jauh lebih eksotermik akibat muatan kation $+2$.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Energi kisi kristal $\\ce{MgCl2}$ bernilai sekitar $-2526\\text{ kJ/mol}$, sedangkan energi kisi $\\ce{MgCl}$ hipotetis (kation $+1$) hanya sekitar $-750\\text{ kJ/mol}$. Keuntungan kestabilan energi kisi sebesar $> 1750\\text{ kJ/mol}$ pada $\\ce{MgCl2}$ jauh melampaui biaya energi ionisasi $IE_2$ magnesium, membuktikan mengapa $\\ce{MgCl}$ tidak stabil dan terdisproporsionasi spontan menjadi $\\ce{MgCl2}$ dan $\\ce{Mg}$.',
      misconceptionTarget: 'Gagal memahami bahwa pelepasan energi kisi kristal (U_L) adalah pendorong termodinamika utama valensi ionik logam',
    },
    {
      id: 'chk-osn02-core5-q3',
      type: 'multiple_choice',
      question: 'Di antara pasangan senyawa ionik berikut, manakah yang memiliki energi kisi kristal $(U_L)$ PALING BESAR (paling eksotermik)?',
      options: [
        '$\\ce{NaCl}$',
        '$\\ce{KCl}$',
        '$\\ce{MgO}$',
        '$\\ce{CaO}$',
      ],
      correctAnswer: 2,
      explanation: 'Bandingkan muatan ion: $\\ce{NaCl}$ dan $\\ce{KCl}$ memiliki muatan $+1/-1$ ($|z_+ z_-| = 1$), sedangkan $\\ce{MgO}$ dan $\\ce{CaO}$ memiliki muatan $+2/-2$ ($|z_+ z_-| = 4$). Muatan $+2/-2$ melipatgandakan energi kisi hingga empat kali lipat! Di antara $\\ce{MgO}$ dan $\\ce{CaO}$, ion $\\ce{Mg^2+}$ ($72\\text{ pm}$) jauh lebih kecil daripada $\\ce{Ca^2+}$ ($100\\text{ pm}$), sehingga jarak antar-inti $\\ce{MgO}$ lebih pendek dan energi kisinya paling dahsyat ($-3791\\text{ kJ/mol}$).',
      misconceptionTarget: 'Mengabaikan faktor perkalian muatan ionik (|z+ z-|) yang berlipat 4x lipat pada kisi oksida alkali tanah',
    },
  ],

  // Konsep Inti 6: Teori Pita Elektronik, Model Su-Schrieffer-Heeger (SSH) & Distorsi Peierls
  'teori-pita-ssh-peierls': [
    {
      id: 'chk-osn02-core6-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan Teorema Distorsi Peierls, sebuah rantai kisi periodik satu dimensi (1D) dengan jarak kisi seragam $a_0$ dan satu elektron valensi per atom (half-filled band) selalu tidak stabil secara termodinamika pada suhu rendah karena:',
      options: [
        'Terjadinya dimerisasi kisi $(a = 2a_0)$ yang membelah Zona Brillouin dan membuka celah pita energi (bandgap) pada permukaan Fermi',
        'Terjadinya peluruhan radioaktif inti atom karbon pada rantai polimer',
        'Rantai 1D mengalami evaporasi fasa spontan menjadi gas diatomik',
        'Elektron valensi terlempar keluar membentuk superkonduktor temperatur kamar',
      ],
      correctAnswer: 0,
      explanation: 'Distorsi Peierls adalah analogi keadaan padat dari Efek Jahn-Teller pada molekul diskret. Dimerisasi kisi menggandakan periode kisi menjadi $a = 2a_0$, membelah Zona Brillouin menjadi dua. Tingkat energi tepat pada tingkat Fermi terbelah membuka celah pita (bandgap), menurunkan energi seluruh elektron pada pita valensi dan mengubah sistem dari logam konduktor menjadi semikonduktor berenergi total lebih rendah.',
      misconceptionTarget: 'Mengira poliasetilena murni tanpa dimerisasi bersifat semikonduktor alami tanpa pengaruh distorsi kisi',
    },
    {
      id: 'chk-osn02-core6-q2',
      type: 'true_false',
      question: 'Dalam Model Hamiltonian Su-Schrieffer-Heeger (SSH) untuk trans-poliasetilena, besar celah pita energi (bandgap, $E_g$) pada batas Zona Brillouin $(k = \\pi/a)$ berbanding lurus dengan parameter dimerisasi kisi: $E_g = 2|t_2 - t_1| = 4\\alpha |\\delta|$.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Pada Hamiltonian SSH, integral transfer ikatan tunggal dan ikatan rangkap adalah $t_1 = t_0 - \\alpha\\delta$ dan $t_2 = t_0 + \\alpha\\delta$. Pada batas zona $k = \\pi/a$, dispersi pita menghasilkan energi $E = \\pm |t_2 - t_1|$, sehingga lebar celah pita terlarang adalah $E_g = 2|t_2 - t_1| = 4\\alpha|\\delta|$. Jika tidak ada dimerisasi $(\\delta = 0)$, celah pita lenyap ($E_g = 0$).',
      misconceptionTarget: 'Mengira celah pita bandgap SSH bernilai konstan dan tidak bergantung pada parameter pergeseran dimerisasi kisi delta',
    },
    {
      id: 'chk-osn02-core6-q3',
      type: 'multiple_choice',
      question: 'Defek topologis soliton netral $(S^0)$ pada trans-poliasetilena memperlihatkan fenomena kuantum pemisahan muatan dan spin (spin-charge separation), di mana soliton netral memiliki:',
      options: [
        'Muatan $q = +e$ dan Spin $s = 0$',
        'Muatan $q = -e$ dan Spin $s = 0$',
        'Muatan $q = 0$ dan Spin $s = 1/2$',
        'Muatan $q = +2e$ dan Spin $s = 1$',
      ],
      correctAnswer: 2,
      explanation: 'Soliton netral $(S^0)$ terbentuk pada dinding domain batas antara dua fasa dimerisasi degenerate. Keadaan terikat tepat di tengah celah pita (mid-gap state pada $E=0$) terisi oleh tepat 1 elektron valensi tak berpasangan. Akibatnya, muatan nettonya adalah nol ($q = 0$), namun ia membawa spin fermion $s = 1/2$ (radikal bebas terdelokalisasi).',
      misconceptionTarget: 'Tertukar antara karakteristik muatan dan spin pada soliton netral S0 vs soliton bermuatan S+ atau S-',
    },
  ],

  // Konsep Inti 7: Teori Grup Simetri Molekul, Tabel Karakter & Pembentukan SALC Orbital Molekul
  'teori-grup-simetri-salc': [
    {
      id: 'chk-osn02-core7-q1',
      type: 'multiple_choice',
      question: 'Molekul air $(\\ce{H2O})$ memiliki unsur-unsur simetri: Identitas $(E)$, sumbu rotasi $C_2$, serta dua bidang pantul vertikal $\\sigma_v(xz)$ dan $\\sigma_v\'(yz)$. Grup titik simetri Schoenflies untuk molekul air adalah:',
      options: [
        '$C_{2h}$',
        '$C_{2v}$',
        '$D_{2h}$',
        '$C_{\\infty v}$',
      ],
      correctAnswer: 1,
      explanation: 'Molekul air memiliki satu sumbu rotasi utama berorde dua ($C_2$) dan dua bidang simetri vertikal yang memuat sumbu tersebut tanpa adanya bidang refleksi horizontal ($\\sigma_h$). Sesuai konvensi Schoenflies, molekul ini masuk ke dalam grup titik $C_{2v}$ dengan orde grup $h = 4$.',
      misconceptionTarget: 'Tertukar antara bidang simetri vertikal sigma_v pada C2v dengan bidang horizontal sigma_h pada C2h',
    },
    {
      id: 'chk-osn02-core7-q2',
      type: 'true_false',
      question: 'Berdasarkan label simetri Mulliken, simbol huruf $A$ menandakan bahwa representasi tersebut bersifat simetris $(+1)$ terhadap rotasi sumbu utama $C_n$, sedangkan simbol huruf $B$ menandakan sifat antisimetris $(-1)$ terhadap $C_n$.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Notasi 1-dimensi Mulliken mengelompokkan representasi simetri: jika karakter rotasi utama $\\chi(C_n) = +1$ maka dilabeli $A$, sedangkan jika $\\chi(C_n) = -1$ maka dilabeli $B$. Subskrip $g$ (gerade) dan $u$ (ungerade) mengindikasikan simetri terhadap pusat inversi $i$.',
      misconceptionTarget: 'Tertukar antara notasi Mulliken A/B (simetri terhadap rotasi Cn) dengan g/u (simetri terhadap inversi i)',
    },
    {
      id: 'chk-osn02-core7-q3',
      type: 'multiple_choice',
      question: 'Pada konstruksi diagram Orbital Molekul $(\\ce{H2O})$ grup titik $C_{2v}$, orbital valensi atom pusat oksigen $2p_x$ memiliki simetri $B_1$. Karena kombinasi linear orbital ligan hidrogen (SALC) hanya menghasilkan simetri $A_1$ dan $B_2$, apa yang terjadi pada orbital oksigen $2p_x$?',
      options: [
        'Membentuk ikatan kovalen $\\sigma$ aksial dengan kedua atom hidrogen',
        'Mengalami delokalisasi membentuk celah pita konduksi',
        'Menjadi Orbital Non-Ikatan murni $(1b_1)$ yang menampung pasangan elektron bebas (PEB) pada atom oksigen',
        'Mengalami pembalikan spin membentuk orbital anti-ikatan $\\sigma^*$ tanpa pasangan',
      ],
      correctAnswer: 2,
      explanation: 'Syarat mutlak pembentukan ikatan pada Teori Orbital Molekul berbasis Teori Grup adalah kecocokan simetri (simetri orbital atom pusat harus identik dengan simetri SALC ligan). Karena SALC hidrogen hanya memiliki simetri $A_1$ dan $B_2$, orbital oksigen $2p_x$ ($B_1$) tidak memiliki pasangan tumpang-tindih simetri sama sekali, sehingga energinya tidak berubah dan bertindak sebagai orbital non-ikatan murni ($1b_1$) penyimpan pasangan elektron bebas.',
      misconceptionTarget: 'Mengira orbital atom yang tidak memiliki pasangan simetri akan lenyap atau membentuk ikatan terlarang',
    },
  ],
};
