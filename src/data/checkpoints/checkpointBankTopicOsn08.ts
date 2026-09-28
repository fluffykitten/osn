import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_OSN_08: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Struktur Senyawa Kompleks, Bilangan Koordinasi, Klasifikasi Ligan, & Efek Kelat
  'prasyarat-struktur-senyawa-koordinasi-kelat': [
    {
      id: 'chk-osn08-pre1-q1',
      type: 'true_false',
      question: 'Efek kelat termodinamika (*chelate effect*) menyebabkan kompleks kelat jauh lebih stabil dibandingkan analog monodentat terutama karena dorongan kenaikan entropi ($\\Delta S^\\circ \\gg 0$) akibat bertambahnya jumlah partikel bebas terlarut, bukan semata-mata kekuatan ikatan entalpi ($\\Delta H^\\circ$).',
      correctAnswer: true,
      explanation: 'Benar! Pada reaksi pembentukan $[\\ce{Ni(en)3}]^{2+}$ dari $[\\ce{Ni(H2O)6}]^{2+}$, 4 partikel pereaksi menghasilkan 7 partikel bebas ($1$ kompleks $+ 6$ molekul $\\ce{H2O}$ lepas). Kenaikan jumlah partikel independen ini menghasilkan lonjakan entropi translasi masif ($\\Delta S^\\circ \\gg 0$), sehingga $-T\\Delta S^\\circ$ bernilai sangat negatif dan menstabilkan kompleks secara spektakuler.',
      misconceptionTarget: 'Menganggap efek kelat semata-mata disebabkan oleh ikatan kovalen koordinasi yang secara intrinsik jauh lebih kuat (entalpi eksotermik raksasa), padahal pendorong termodinamika utamanya adalah faktor entropik pertambahan partikel bebas.',
    },
    {
      id: 'chk-osn08-pre1-q2',
      type: 'multiple_choice',
      question: 'Ligan etilendiamintetraasetat ($\\ce{EDTA^4-}$) merupakan ligan polidentat istimewa yang memiliki dentisitas bergigi berapa dalam mengurung ion logam oktahedral?',
      options: [
        'Bidentat (2 atom donor)',
        'Tridentat (3 atom donor)',
        'Tetradentat (4 atom donor)',
        'Heksadentat (6 atom donor: 2 atom N dan 4 atom O)',
      ],
      correctAnswer: 3,
      explanation: '$\\ce{EDTA^4-}$ memiliki 2 atom nitrogen amina tersier dan 4 gugus karboksilat ($\\ce{-COO-}$), sehingga bertindak sebagai ligan heksadentat (bergigi enam). Ligan ini membungkus kation logam oktahedral dalam satu kurungan molekul polikelat dengan tetapan pembentukan ($K_f$) yang sangat tinggi.',
      misconceptionTarget: 'Mengira EDTA hanya mengikat via 4 gugus karboksilatnya (tetradentat), melupakan 2 atom donor nitrogen pada tulang punggung etilendiamin.',
    },
    {
      id: 'chk-osn08-pre1-q3',
      type: 'multiple_choice',
      question: 'Ligan yang memiliki dua atau lebih atom donor berbeda tetapi hanya dapat mengikat logam pusat melalui salah satu atom donor pada satu waktu disebut ligan ambidentat. Pasangan rumus berikut yang keduanya merupakan ligan ambidentat adalah...',
      options: [
        '$\\ce{H2O}$ dan $\\ce{NH3}$',
        '$\\ce{SCN-}$ dan $\\ce{NO2-}$',
        '$\\ce{en}$ dan $\\ce{ox^2-}$',
        '$\\ce{Cl-}$ dan $\\ce{CO}$',
      ],
      correctAnswer: 1,
      explanation: 'Ion tiosianat ($\\ce{SCN-}$) dapat mengikat via sulfur (tiosianato, $\\ce{M-SCN}$) atau via nitrogen (isotiosianato, $\\ce{M-NCS}$). Ion nitrit ($\\ce{NO2-}$) dapat mengikat via nitrogen (nitro, $\\ce{M-NO2}$) atau via oksigen (nitrito, $\\ce{M-ONO}$). Keduanya adalah contoh klasik ligan ambidentat pemicu isomerisme ikatan (*linkage isomerism*).',
      misconceptionTarget: 'Mengacaukan ligan ambidentat (satu ligan dengan opsi atom donor bergantian) dengan ligan polidentat/kelat (satu ligan yang mengikat secara simultan melalui banyak atom donor).',
    },
  ],

  // Prasyarat 2: Tata Nama Resmi IUPAC Senyawa Koordinasi & Bilangan Oksidasi
  'prasyarat-tatanama-iupac-senyawa-koordinasi': [
    {
      id: 'chk-osn08-pre2-q1',
      type: 'true_false',
      question: 'Jika suatu entitas koordinasi merupakan anion kompleks bermuatan negatif, nama atom pusat logam wajib ditulis menggunakan akar kata bahasa Latin dan diakhiri dengan akhiran "-at" (misalnya besi menjadi ferat, tembaga menjadi kuprat).',
      correctAnswer: true,
      explanation: 'Benar! Dalam tata nama resmi IUPAC, jika kompleks bermuatan negatif (anionik), nama logam berakhiran -at dengan akar bahasa Latin (Ferrum $\\to$ ferat, Cuprum $\\to$ kuprat, Aurum $\\to$ aurat, Plumbum $\\to$ plumbat, Argentum $\\to$ argentat). Jika kompleks netral atau kationik, digunakan nama umum Indonesia (besi, tembaga).',
      misconceptionTarget: 'Mengira nama logam selalu ditulis sama apa pun muatan kompleksnya, atau menambahkan akhiran -at pada kation kompleks.',
    },
    {
      id: 'chk-osn08-pre2-q2',
      type: 'multiple_choice',
      question: 'Berapakah bilangan oksidasi logam kobalt dan nama IUPAC resmi untuk senyawa $[\\ce{Co(NH3)5Cl}]\\ce{Cl2}$?',
      options: [
        '+2; Kloropentaamminakobalt(II) klorida',
        '+3; Pentaamminaklorokobalt(III) klorida',
        '+3; Kloropentaamminakobaltat(III) diklorida',
        '+1; Pentaamminaklorokobalt(I) klorida',
      ],
      correctAnswer: 1,
      explanation: 'Ion lawan adalah $2\\ce{Cl-}$ (muatan $-2$), sehingga kation kompleks bermuatan $+2$: $[\\ce{Co(NH3)5Cl}]^{2+}$. Ligan $\\ce{NH3}$ netral ($0$) dan $\\ce{Cl-}$ bermuatan $-1$. Maka biloks $\\ce{Co} = +2 - (-1) = +3$. Urutan alfabetis ligan: ammina (A) mendahului kloro (K) $\\implies$ pentaamminakloro. Logam berada di kation sehingga dinamai kobalt(III). Nama lengkap: Pentaamminaklorokobalt(III) klorida.',
      misconceptionTarget: 'Menamai ligan kloro terlebih dahulu karena tidak memperhatikan urutan alfabetik IUPAC, atau memberi akhiran -at padahal kompleks bermuatan positif.',
    },
    {
      id: 'chk-osn08-pre2-q3',
      type: 'multiple_choice',
      question: 'Awalan multiplikatif bis-, tris-, tetrakis- wajib digunakan dalam penamaan senyawa kompleks apabila...',
      options: [
        'Logam pusat memiliki bilangan oksidasi di atas +3',
        'Kompleks berbentuk tetrahedral bukan oktahedral',
        'Nama ligan sudah mengandung awalan bilangan angka (seperti etilendiamin) atau merupakan ligan kelat organik poliatomik',
        'Seluruh ligan bermuatan negatif',
      ],
      correctAnswer: 2,
      explanation: 'Awalan bis-, tris-, tetrakis-, pentakis- digunakan untuk menghindari kerancuan fonetik bila ligan sudah memiliki awalan numeral di dalam namanya (misal "etilendiamin", penambahan di- akan menghasilkan "dietilendiamin" yang merupakan zat kimia berbeda) atau ligan pengkelat poliatomik kompleks. Nama ligan tersebut kemudian diletakkan di dalam tanda kurung.',
      misconceptionTarget: 'Mengira awalan bis/tris hanya formalitas estetika yang dapat dipertukarkan bebas dengan di/tri tanpa aturan IUPAC.',
    },
  ],

  // Prasyarat 3: Teori Ikatan Valensi (VBT) Pauling & Hibridisasi
  'prasyarat-teori-ikatan-valensi-vbt-hibridisasi': [
    {
      id: 'chk-osn08-pre3-q1',
      type: 'true_false',
      question: 'Kompleks oktahedral orbital dalam (*inner orbital complex*) menggunakan orbital hibrida $d^2sp^3$ yang melibatkan subkulit $(n-1)d$ bagian dalam, sehingga umumnya memiliki jumlah elektron tak berpasangan lebih sedikit (spin rendah) dibanding kompleks orbital luar $sp^3d^2$.',
      correctAnswer: true,
      explanation: 'Benar! Dalam Teori Ikatan Valensi Pauling, jika ligan mampu mendesak elektron-elektron orbital $(n-1)d$ untuk berpasangan, dua orbital $(n-1)d$ kosong dapat dihibridisasi bersama $ns$ dan $np$ membentuk hibrida $d^2sp^3$ (orbital dalam, spin rendah). Sebaliknya jika elektron tidak berpasangan, digunakan orbital kulit luar $nd$ membentuk $sp^3d^2$ (orbital luar, spin tinggi).',
      misconceptionTarget: 'Menganggap $d^2sp^3$ dan $sp^3d^2$ identik secara magnetik dan hanya berbeda urutan penulisan huruf dalam buku teks.',
    },
    {
      id: 'chk-osn08-pre3-q2',
      type: 'multiple_choice',
      question: 'Ion kompleks $[\\ce{Ni(CN)4}]^{2-}$ dan $[\\ce{NiCl4}]^{2-}$ sama-sama memiliki ion pusat $\\ce{Ni^2+} (3d^8)$ dengan bilangan koordinasi 4. Berdasarkan model hibridisasi dan pengamatan eksperimen, geometri dan sifat kemagnetan kedua kompleks berturut-turut adalah...',
      options: [
        'Tetrahedral & paramagnetik; Bujur sangkar & diamagnetik',
        'Bujur sangkar & diamagnetik ($dsp^2$); Tetrahedral & paramagnetik ($sp^3$)',
        'Keduanya tetrahedral dan paramagnetik',
        'Keduanya bujur sangkar dan diamagnetik',
      ],
      correctAnswer: 1,
      explanation: 'Ligan $\\ce{CN-}$ mendesak dua elektron tak berpasangan $3d$ untuk berpasangan, menyisakan satu orbital $3d$ kosong yang berhibridisasi menjadi $dsp^2$ (bujur sangkar, 0 elektron tak berpasangan $\\implies$ diamagnetik). Sebaliknya, ligan $\\ce{Cl-}$ tidak mampu memaksa perpasangan elektron sehingga hibridisasi melibatkan $4s$ dan $4p$ menjadi $sp^3$ (tetrahedral, 2 elektron tak berpasangan $\\implies$ paramagnetik).',
      misconceptionTarget: 'Mengira semua kompleks bilangan koordinasi 4 selalu bergeometri tetrahedral tanpa memperhatikan kekuatan ligan dan hibridisasi dsp2 vs sp3.',
    },
    {
      id: 'chk-osn08-pre3-q3',
      type: 'multiple_choice',
      question: 'Kelemahan mendasar Teori Ikatan Valensi (VBT) Pauling yang menyebabkan teori ini harus digantikan oleh Teori Medan Kristal (CFT) adalah ketidakmampuannya dalam...',
      options: [
        'Menentukan rumus empiris senyawa kompleks',
        'Menjelaskan mengapa kompleks logam transisi berwarna dan spektra absorbsi elektronik $d-d$',
        'Menghitung massa molar senyawa koordinasi',
        'Menjelaskan keberadaan ikatan kovalen koordinasi',
      ],
      correctAnswer: 1,
      explanation: 'VBT memandang ikatan koordinasi murni sebagai tumpang tindih orbital ikatan terlokalisasi tanpa memisahkan tingkat energi degenerasi subkulit $d$. Akibatnya, VBT tidak berdaya menjelaskan warna senyawa kompleks, transisi elektronik absorbsi cahaya tampak, ketergantungan kemagnetan terhadap temperatur, dan deret spektrokimia ligan.',
      misconceptionTarget: 'Mengira VBT gagal karena salah memprediksi bilangan koordinasi, padahal kelemahan terbesarnya adalah pada spektroskopi warna dan kuantisasi energi pemisahan d-d.',
    },
  ],

  // Konsep Inti 1: Teori Medan Kristal (CFT): Pemisahan Orbital d Oktahedral, Tetrahedral, & Bujur Sangkar
  'konsep-teori-medan-kristal-cft-oktahedral-tetrahedral': [
    {
      id: 'chk-osn08-c1-q1',
      type: 'true_false',
      question: 'Parameter pemisahan medan tetrahedral bernilai jauh lebih kecil daripada medan oktahedral ($\\Delta_t = \\frac{4}{9}\\Delta_o$), sehingga hampir seluruh kompleks tetrahedral mengadopsi konfigurasi spin tinggi (*high-spin*).',
      correctAnswer: true,
      explanation: 'Benar! Pada geometri tetrahedral, hanya terdapat 4 ligan (bukan 6) dan cuping orbital tidak bertatapan tepat segaris dengan ligan. Akibatnya $\\Delta_t \\approx 0.44\\Delta_o$. Nilai $\\Delta_t$ ini hampir selalu lebih kecil daripada energi perpasangan elektron ($P$), sehingga elektron selalu memilih melompati celah energi untuk memaksimalkan spin (spin tinggi).',
      misconceptionTarget: 'Menganggap kompleks tetrahedral bisa membentuk konfigurasi spin rendah jika diberi ligan kuat seperti CN-, padahal Delta_t hampir tidak pernah melampaui energi perpasangan P.',
    },
    {
      id: 'chk-osn08-c1-q2',
      type: 'multiple_choice',
      question: 'Dalam medan oktahedral ($O_h$), mengapa orbital $e_g$ ($d_{x^2-y^2}$ dan $d_{z^2}$) mengalami destabilisasi energi sebesar $+0.6\\Delta_o$ di atas barisentrum?',
      options: [
        'Karena cuping orbital $e_g$ berada pada sudut $45^\\circ$ di antara sumbu kartesius',
        'Karena cuping orbital $e_g$ mengarah tepat sepanjang sumbu kartesius $\\pm x, \\pm y, \\pm z$ bertatapan langsung dengan pendekatan ligan',
        'Karena orbital $e_g$ tidak memiliki elektron valensi',
        'Karena orbital $e_g$ memiliki ukuran lebih kecil dibanding orbital $t_{2g}$',
      ],
      correctAnswer: 1,
      explanation: 'Pada medan oktahedral, 6 ligan mendekati kation logam sepanjang sumbu $\\pm x, \\pm y,$ dan $\\pm z$. Orbital $d_{x^2-y^2}$ dan $d_{z^2}$ memiliki cuping yang mengarah persis sepanjang sumbu-sumbu tersebut, sehingga mengalami tolakan elektrostatik maksimum dan energinya terangkat $+0.6\\Delta_o$. Sebaliknya orbital $t_{2g}$ mengarah di antara sumbu sehingga terstabilkan $-0.4\\Delta_o$.',
      misconceptionTarget: 'Tertukar antara orientasi spasial cuping orbital t2g (antara sumbu) dengan orbital eg (tepat pada sumbu).',
    },
    {
      id: 'chk-osn08-c1-q3',
      type: 'multiple_choice',
      question: 'Pada medan kristal bujur sangkar (*square planar*, $D_{4h}$), orbital $d$ yang memiliki tingkat energi paling tinggi secara mencolok adalah...',
      options: [
        '$d_{z^2}$',
        '$d_{xy}$',
        '$d_{x^2-y^2}$',
        '$d_{xz}$ dan $d_{yz}$',
      ],
      correctAnswer: 2,
      explanation: 'Pada geometri bujur sangkar di bidang $xy$, empat ligan berada langsung di sepanjang sumbu $x$ dan $y$. Orbital $d_{x^2-y^2}$ bertatapan frontal langsung dengan keempat ligan tersebut tanpa ada ligan di sumbu $z$, sehingga mengalami tolakan Coulombik terbesar dan energinya melonjak paling tinggi ($\\Delta_{\\text{sp}} \\gg \\Delta_o$).',
      misconceptionTarget: 'Mengira dz2 memiliki energi tertinggi karena bentuk cincin donatnya, padahal pada bujur sangkar ligan aksial sumbu z telah dihilangkan sempurna.',
    },
  ],

  // Konsep Inti 2: CFSE, Deret Spektrokimia, High-Spin vs Low-Spin
  'konsep-cfse-spin-tinggi-rendah-deret-spektrokimia': [
    {
      id: 'chk-osn08-c2-q1',
      type: 'true_false',
      question: 'Fenomena pilihan antara spin tinggi (*high-spin*) dan spin rendah (*low-spin*) pada medan oktahedral hanya dapat terjadi pada konfigurasi elektron ion logam $d^4, d^5, d^6,$ dan $d^7$.',
      correctAnswer: true,
      explanation: 'Benar! Untuk $d^1, d^2, d^3$, elektron selalu mengisi orbital $t_{2g}$ secara berturut-turut tanpa berpasangan (hanya 1 kemungkinan). Untuk $d^8, d^9, d^{10}$, orbital $t_{2g}$ pasti terisi penuh 6 elektron dan sisanya masuk $e_g$ (hanya 1 kemungkinan). Hanya pada $d^4$ hingga $d^7$ terjadi persaingan apakah elektron ke-4 dst. melompati $\\Delta_o$ ke $e_g$ (spin tinggi) atau berpasangan di $t_{2g}$ (spin rendah).',
      misconceptionTarget: 'Mengira ion d8 seperti Ni2+ atau d3 seperti Cr3+ dapat memiliki konfigurasi spin rendah dan spin tinggi dalam medan oktahedral reguler.',
    },
    {
      id: 'chk-osn08-c2-q2',
      type: 'multiple_choice',
      question: 'Ligan seperti $\\ce{CO}$ dan $\\ce{CN-}$ menempati posisi paling ujung kanan dalam deret spektrokimia (menghasilkan $\\Delta_o$ sangat besar) terutama karena...',
      options: [
        'Ukurannya sangat kecil sehingga mendekat sangat dekat',
        'Bertindak sebagai ligan $\\pi$-akseptor yang membentuk ikatan balik $\\pi$ ($\\pi$-backbonding) dengan orbital $t_{2g}$ logam',
        'Mendonorkan 4 pasangan elektron sekaligus',
        'Memiliki momen dipol negatif permanen paling besar',
      ],
      correctAnswer: 1,
      explanation: 'Ligan $\\ce{CO}$ dan $\\ce{CN-}$ memiliki orbital molekul $\\pi^*$ kosong berenergi rendah yang menerima densitas elektron dari orbital $t_{2g}$ logam (ikatan balik $\\pi$). Interaksi bonding ini menurunkan tingkat energi orbital $t_{2g}$ secara drastis, sehingga selisih energi $\\Delta_o = E(e_g) - E(t_{2g})$ melebar menjadi raksasa.',
      misconceptionTarget: 'Menjelaskan posisi ligan medan kuat murni dari elektronegativitas atau muatan formal, mengabaikan peran kunci ikatan balik pi (pi-backbonding) orbital molekul.',
    },
    {
      id: 'chk-osn08-c2-q3',
      type: 'multiple_choice',
      question: 'Berapakah nilai Energi Penstabilan Medan Kristal (CFSE) untuk ion kompleks oktahedral $d^6$ spin rendah ($t_{2g}^6 e_g^0$) jika diperhitungkan pembentukan pasangan elektron tambahan dibandingkan ion gas bebas?',
      options: [
        '$-0.4\\Delta_o$',
        '$-2.4\\Delta_o$',
        '$-2.4\\Delta_o + 2P$',
        '$-1.2\\Delta_o + P$',
      ],
      correctAnswer: 2,
      explanation: 'Dengan 6 elektron di $t_{2g}$ dan 0 di $e_g$: penstabilan orbital $= 6(-0.4\\Delta_o) = -2.4\\Delta_o$. Pada ion gas bebas $d^6$, penataan Hund memiliki 1 pasangan elektron. Pada kompleks $t_{2g}^6$, terdapat 3 pasangan elektron. Berarti terbentuk $3 - 1 = 2$ pasangan elektron baru, sehingga penalti energi perpasangan adalah $+2P$. Total $\\text{CFSE} = -2.4\\Delta_o + 2P$.',
      misconceptionTarget: 'Lupa memperhitungkan energi perpasangan P atau keliru mengalikan 3P karena tidak mengurangkan pasangan elektron asal yang sudah ada pada ion bebas.',
    },
  ],

  // Konsep Inti 3: Teorema Jahn-Teller: Distorsi Tetragonal & Kompleks Tembaga(II)
  'konsep-efek-jahn-teller-distorsi-tetragonal': [
    {
      id: 'chk-osn08-c3-q1',
      type: 'true_false',
      question: 'Teorema Jahn-Teller menyatakan bahwa setiap molekul non-linier dengan keadaan dasar elektronik terdegenerasi akan mengalami distorsi geometris spontan untuk menghilangkan degenerasi dan menurunkan energi total sistem.',
      correctAnswer: true,
      explanation: 'Benar! Dirumuskan oleh H.A. Jahn dan E. Teller (1937), prinsip ini menyatakan bahwa sistem orbital yang terisi tidak simetris pada tingkat energi yang sama bersifat tidak stabil secara termodinamika. Sistem akan menurunkan simetrinya secara spontan (misalnya dari $O_h$ menjadi tetragonal $D_{4h}$) agar orbital terbelah energinya dan elektron menempati orbital yang lebih stabil.',
      misconceptionTarget: 'Mengira distorsi Jahn-Teller dipicu oleh gaya luar atau tumbukan pelarut, padahal merupakan fenomena kuantum elektronik intrinsik spontan.',
    },
    {
      id: 'chk-osn08-c3-q2',
      type: 'multiple_choice',
      question: 'Di antara konfigurasi elektron ion logam oktahedral berikut, manakah yang menunjukkan efek Jahn-Teller PALING KUAT yang dapat diamati jelas secara kristalografi?',
      options: [
        '$d^3$ ($t_{2g}^3$)',
        '$d^8$ ($t_{2g}^6 e_g^2$)',
        '$d^9$ ($t_{2g}^6 e_g^3$, seperti $[\\ce{Cu(H2O)6}]^{2+}$)',
        '$d^6$ spin rendah ($t_{2g}^6 e_g^0$)',
      ],
      correctAnswer: 2,
      explanation: 'Distorsi Jahn-Teller bernilai kuat dan teramati nyata jika asimetri elektron terjadi pada himpunan orbital $e_g$ ($d_{x^2-y^2}$ dan $d_{z^2}$) karena cupingnya mengarah langsung ke ligan. Konfigurasi $d^9$ ($t_{2g}^6 e_g^3$) memiliki 1 elektron pada satu orbital $e_g$ dan 2 elektron pada orbital $e_g$ lainnya, memicu distorsi tetragonal kuat berupa 2 ikatan aksial panjang dan 4 ikatan ekuatorial pendek.',
      misconceptionTarget: 'Mengira konfigurasi d8 mengalami distorsi Jahn-Teller kuat, padahal eg2 terisi simetris sempurna (1 elektron di dz2 dan 1 elektron di dx2-y2).',
    },
    {
      id: 'chk-osn08-c3-q3',
      type: 'multiple_choice',
      question: 'Pada distorsi tetragonal jenis elongasi-$z$ (*z-out*) kompleks $[\\ce{Cu(H2O)6}]^{2+}$, mengapa dua ikatan aksial sepanjang sumbu $z$ memanjang sedangkan empat ikatan ekuatorial memendek?',
      options: [
        'Karena orbital $d_{z^2}$ terisi 2 elektron sehingga tolakan terhadap ligan aksial lebih besar, mendorong ligan menjauh dan menstabilkan energi orbital berkarakter $z$',
        'Karena ligan air pada sumbu $z$ terionisasi menjadi $\\ce{OH-}$',
        'Karena kation tembaga mengalami oksidasi menjadi $\\ce{Cu^3+}$',
        'Karena terjadi pelepasan ligan membentuk kompleks bujur sangkar secara spontan',
      ],
      correctAnswer: 0,
      explanation: 'Ketika sepasang elektron menempati orbital $d_{z^2}$ dan elektron tunggal berada di $d_{x^2-y^2}$, tolakan elektrostatik di sepanjang sumbu $z$ jauh lebih besar. Kedua ligan aksial bergerak menjauh (elongasi-$z$), menurunkan tolakan dan menstabilkan orbital $d_{z^2}$ ke tingkat energi lebih rendah. Karena orbital berenergi rendah ini dihuni 2 elektron sementara orbital yang naik hanya dihuni 1 elektron, sistem meraih energi stabilisasi netto $\\frac{1}{2}\\delta_1$.',
      misconceptionTarget: 'Mengira pemanjangan ikatan terjadi acak pada sembarang sumbu tanpa keterkaitan langsung dengan distribusi populasi orbital dz2 vs dx2-y2.',
    },
  ],

  // Konsep Inti 4: Kemagnetan (mu_eff) & Warna Kompleks (Transisi d-d & CT)
  'konsep-kemagnetan-warna-spektra-elektronik': [
    {
      id: 'chk-osn08-c4-q1',
      type: 'true_false',
      question: 'Berdasarkan formula momen magnetik spin-only $\\mu_{\\text{eff}} = \\sqrt{n(n+2)}\\ \\mu_B$, kompleks ion dengan 3 elektron tak berpasangan ($n = 3$) akan memiliki momen magnetik teoretis sekitar $3.87\\ \\mu_B$.',
      correctAnswer: true,
      explanation: 'Benar! $\\mu_{\\text{eff}} = \\sqrt{3(3+2)} = \\sqrt{15} \\approx 3.873\\ \\mu_B$. Pengukuran suseptibilitas magnetik eksperimen (neraca Gouy/Evans) yang menghasilkan nilai mendekati $3.9\\ \\mu_B$ mengonfirmasi keberadaan tepat 3 elektron tak berpasangan pada kompleks (misalnya $[\\ce{Cr(H2O)6}]^{3+}$).',
      misconceptionTarget: 'Lupa menambahkan angka 2 di dalam tanda akar (menghitung n^2 atau sqrt(n) saja) sehingga salah memprediksi momen magnetik.',
    },
    {
      id: 'chk-osn08-c4-q2',
      type: 'multiple_choice',
      question: 'Larutan ion $\\ce{Mn^2+}(aq)$ berkonfigurasi $3d^5$ spin tinggi menunjukkan warna merah muda yang sangat pucat hampir tidak terlihat ($\\varepsilon < 1\\text{ M}^{-1}\\text{cm}^{-1}$). Alasan spektroskopis utama dari kepucatan warna ini adalah...',
      options: [
        'Transisi $d-d$ terlarang oleh aturan Laporte dan juga terlarang oleh aturan Seleksi Spin ($\\Delta S \\neq 0$)',
        'Ion $\\ce{Mn^2+}$ sama sekali tidak menyerap cahaya tampak',
        'Kompleks mangan bersifat diamagnetik sempurna',
        'Ligan air melepaskan elektron membentuk ikatan hidrogen rapat',
      ],
      correctAnswer: 0,
      explanation: 'Pada $\\ce{Mn^2+}$ spin tinggi ($t_{2g}^3 e_g^2$), kelima orbital $d$ terisi tepat satu elektron paralel ($S = 5/2$). Setiap eksitasi elektron ke orbital lain mengharuskan terjadinya pembalikan tanda spin elektron ($\\Delta S \\neq 0$). Karena transisi terlarang spin (*spin-forbidden*) dan sekaligus terlarang Laporte (*Laporte-forbidden*), intensitas absorpsinya sangat amat lemah.',
      misconceptionTarget: 'Mengira kompleks berwarna pucat berarti tidak ada absorbsi cahaya sama sekali, padahal absorbsi tetap terjadi namun memiliki koefisien ekstingsi molar amat kecil karena pelanggaran aturan seleksi spin.',
    },
    {
      id: 'chk-osn08-c4-q3',
      type: 'multiple_choice',
      question: 'Ion permanganat ($\\ce{MnO4-}$) memiliki warna ungu sangat gelap dan menyala dengan koefisien ekstingsi raksasa ($\\varepsilon > 10,000\\text{ M}^{-1}\\text{cm}^{-1}$), padahal atom pusat $\\ce{Mn(VII)}$ memiliki konfigurasi $d^0$ (tanpa elektron $d$). Asal usul warna ini adalah...',
      options: [
        'Transisi elektronik $d-d$ yang diizinkan Laporte',
        'Transfer Muatan Ligan-ke-Logam (*Ligand-to-Metal Charge Transfer* / LMCT) dari orbital oksigen ke orbital kosong mangan',
        'Pendaran radioaktif inti atom mangan',
        'Resonansi ikatan hidrogen pelarut air',
      ],
      correctAnswer: 1,
      explanation: 'Karena $\\ce{Mn^7+}$ adalah ion $d^0$, warna ungu tua mustahil berasal dari transisi $d-d$. Foton diserap untuk mengeksitasi elektron dari orbital molekul terisi berkarakter ligan oksigen ($\\ce{O^2-}$) menuju orbital molekul kosong berkarakter logam mangan (LMCT). Transisi transfer muatan ini diizinkan penuh oleh aturan seleksi Laporte dan Spin, menghasilkan intensitas warna yang spektakuler.',
      misconceptionTarget: 'Menganggap seluruh warna senyawa kompleks logam transisi pasti diakibatkan oleh transisi d-d, melupakan fenomena transfer muatan (LMCT/MLCT) pada kation biloks tinggi.',
    },
  ],

  // Konsep Inti 5: Isomerisme Kompleks, Kinetika Substitusi & Efek Trans
  'konsep-isomerisme-kinetika-efek-trans': [
    {
      id: 'chk-osn08-c5-q1',
      type: 'true_false',
      question: 'Pada kation kompleks oktahedral diklorobis(etilendiamin)kobalt(III), $[\\ce{Co(en)2Cl2}]^+$, isomer *trans* bersifat akiral karena memiliki pusat inversi ($i$), sedangkan isomer *cis* bersifat kiral dan eksis sebagai sepasang enantiomer optis aktif ($\\Delta$ dan $\\Lambda$).',
      correctAnswer: true,
      explanation: 'Benar! Pada isomer *trans*, kedua ligan kloro saling berseberangan ($180^\\circ$) menghasilkan pusat simetri inversi ($i$) dan bidang cermin, sehingga akiral (tidak aktif optis). Pada isomer *cis*, kedua kloro berjarak $90^\\circ$ merusak seluruh elemen simetri inversi dan cermin, sehingga terbentuk sepasang bayangan cermin yang non-superimposabel (enantiomer optis kiral).',
      misconceptionTarget: 'Mengira kedua isomer cis dan trans sama-sama aktif optis karena sama-sama mengikat ligan kelat etilendiamin.',
    },
    {
      id: 'chk-osn08-c5-q2',
      type: 'multiple_choice',
      question: 'Berdasarkan prinsip efek trans Platina(II) di mana $\\ce{Cl- > NH3}$, untuk mensintesis obat antikanker Cisplatin (*cis*-$[\\ce{Pt(NH3)2Cl2}]$) secara selektif, zat pereaksi awal yang harus digunakan adalah...',
      options: [
        '$[\\ce{Pt(NH3)4}]^{2+}$ direaksikan bertahap dengan $\\ce{Cl-}$',
        '$[\\ce{PtCl4}]^{2-}$ direaksikan bertahap dengan $\\ce{NH3}$',
        'Logam platina murni direaksikan dengan gas $\\ce{Cl2}$ dan $\\ce{NH3}$ bersamaan',
        '$[\\ce{Pt(H2O)4}]^{2+}$ direaksikan dengan larutan asam klorida pekat',
      ],
      correctAnswer: 1,
      explanation: 'Mulai dari $[\\ce{PtCl4}]^{2-}$, substitusi $\\ce{NH3}$ pertama menghasilkan $[\\ce{PtCl3(NH3)}]-$. Pada tahap kedua, ligan $\\ce{Cl-}$ memiliki efek trans lebih kuat daripada $\\ce{NH3}$, sehingga mengarahkan molekul $\\ce{NH3}$ kedua masuk pada posisi *trans* terhadap $\\ce{Cl-}$ lain (yang otomatis berposisi *cis* terhadap $\\ce{NH3}$ pertama). Terbentuk murni Cisplatin! Jika mulai dari $[\\ce{Pt(NH3)4}]^{2+}$, justru akan terbentuk Transplatin.',
      misconceptionTarget: 'Mengira reagen awal bebas dipilih sembarang karena mengabaikan kontrol kinetika stereoselektif efek trans.',
    },
    {
      id: 'chk-osn08-c5-q3',
      type: 'multiple_choice',
      question: 'Kompleks oktahedral berumus $[\\ce{MA3B3}]$ dapat membentuk dua jenis stereoisomer geometris, yaitu...',
      options: [
        'Enantiomer $R$ dan $S$',
        'Isomer konformasi *boat* dan *chair*',
        'Isomer *facial* (*fac*) dan *meridional* (*mer*)',
        'Isomer ionisasi dan hidrat',
      ],
      correctAnswer: 2,
      explanation: 'Pada $[\\ce{MA3B3}]$, jika tiga ligan $\\ce{A}$ menempati satu wajah segitiga oktahedron yang sama (seluruh sudut $\\angle \\ce{A-M-A} = 90^\\circ$), dinamakan isomer *facial* (*fac*). Jika tiga ligan $\\ce{A}$ berada pada bidang meridian yang membelah pusat oktahedron (dua sudut $90^\\circ$ dan satu sudut $180^\\circ$), dinamakan isomer *meridional* (*mer*).',
      misconceptionTarget: 'Menyebut isomer MA3B3 sebagai cis-trans biasa, padahal nomenklatur resmi oktahedral MA3B3 adalah facial (fac) dan meridional (mer).',
    },
  ],

  // Konsep Inti 6: Aturan Wade-Mingos, Parameter Racah & Katalisis Organologam
  'kluster-boran-wade-mingos-organologam': [
    {
      id: 'chk-osn08-c6-q1',
      type: 'true_false',
      question: 'Berdasarkan Aturan Wade-Mingos (PSEPT), kluster borana dengan $n$ verteks yang memiliki $n + 2$ pasangan elektron kerangka (SEP) diklasifikasikan sebagai struktur *nido*, yang diturunkan dari deltahedron *closo* yang kehilangan 1 verteks.',
      correctAnswer: true,
      explanation: 'Benar! Dalam PSEPT: $n+1$ SEP = *closo* (sangkar tertutup lengkap), $n+2$ SEP = *nido* (sarang terbuka, deltahedron minus 1 puncak), $n+3$ SEP = *arachno* (jaring laba-laba, minus 2 puncak), dan $n+4$ SEP = *hypho* (minus 3 puncak).',
      misconceptionTarget: 'Tertukar antara urutan pasangan elektron kerangka closo (n+1) dan nido (n+2) atau keliru menghitung jumlah puncak yang hilang.',
    },
    {
      id: 'chk-osn08-c6-q2',
      type: 'multiple_choice',
      question: 'Rasio nefelauxetik $\\beta = \\frac{B_{\\text{kompleks}}}{B_0} < 1$ mengukur derajat ekspansi awan elektron logam akibat pembentukan ikatan kovalen dengan ligan. Semakin KECIL nilai $\\beta$, maka...',
      options: [
        'Ikatan antara logam dan ligan semakin murni elektrostatik ionik',
        'Derajat kovalensi ikatan dan delokalisasi elektron ke arah ligan semakin tinggi',
        'Kompleks pasti bersifat diamagnetik',
        'Bilangan oksidasi logam selalu bernilai nol',
      ],
      correctAnswer: 1,
      explanation: 'Parameter Racah $B$ mengukur repulsi antar-elektron orbital $d$. Ketika ligan membentuk ikatan kovalen kuat melalui tumpang tindih orbital, awan elektron $d$ berekspansi ke arah ligan (efek nefelauxetik), mengurangi tolakan elektrostatik sehingga $B_{\\text{kompleks}} < B_0$. Nilai $\\beta$ yang semakin kecil mencerminkan kovalensi ikatan yang semakin dominan (misal pada ligan polarisabel $\\ce{I-}$ dan $\\ce{Br-}$).',
      misconceptionTarget: 'Mengira beta kecil berarti ligan terikat lemah secara ionik, padahal justru menandakan kovalensi dan tumpang tindih orbital yang sangat ekstensif.',
    },
    {
      id: 'chk-osn08-c6-q3',
      type: 'multiple_choice',
      question: 'Pada siklus katalisis hidrogenasi alkena menggunakan Katalis Wilkinson $[\\ce{RhCl(PPh3)3}]$, tahap di mana molekul hidrogen ($\\ce{H2}$) berikatan ke pusat $\\ce{Rh(I)}$ disertai kenaikan bilangan oksidasi logam menjadi $\\ce{Rh(III)}$ dan bilangan koordinasi dari 4 menjadi 6 disebut tahap...',
      options: [
        'Insersi migrasi (*Migratory insertion*)',
        'Eliminasi reduktif (*Reductive elimination*)',
        'Adisi oksidatif (*Oxidative addition*)',
        'Eliminasi $\\beta$-hidrida (*$\\beta$-Hydride elimination*)',
      ],
      correctAnswer: 2,
      explanation: 'Tahap adisi oksidatif (*oxidative addition*) melibatkan pemutusan ikatan tunggal kovalen substrat (seperti $\\ce{H-H}$) dan pengikatan kedua fragmen ke pusat logam, menaikkan bilangan oksidasi logam sebesar $+2$, bilangan koordinasi $+2$, dan elektron valensi $+2e^-$. Tahap kebalikannya pada akhir siklus adalah eliminasi reduktif.',
      misconceptionTarget: 'Mengira adisi oksidatif sama dengan insersi migrasi, padahal insersi migrasi tidak mengubah bilangan oksidasi logam.',
    },
  ],
};
