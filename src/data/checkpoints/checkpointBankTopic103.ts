import type { CheckpointQuizItem } from '../materialsData';

export const CHECKPOINTS_TOPIC_103: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Kestabilan Gas Mulia, Kaidah Oktet-Duplet & Simbol Titik Lewis
  'elektron-valensi-dan-kaidah-oktet': [
    {
      id: 'chk-103-pre1-q1',
      type: 'multiple_choice',
      question: 'Mengapa atom helium $(\\ce{He})$ stabil dengan konfigurasi duplet (2 elektron valensi), sedangkan unsur gas mulia lainnya $(\\ce{Ne, Ar, Kr, Xe})$ stabil dengan konfigurasi oktet (8 elektron valensi)?',
      options: [
        'Karena inti atom helium terlalu ringan untuk menampung lebih dari 2 elektron',
        'Karena kulit pertama $(n=1)$ hanya memiliki satu subkulit yaitu $1s$, yang kapasitas maksimumnya tepat terisi penuh oleh $2$ elektron',
        'Karena helium tidak memiliki proton di dalam intinya',
        'Karena helium dapat membentuk ikatan kovalen rangkap tiga dengan dirinya sendiri',
      ],
      correctAnswer: 1,
      explanation: 'Kestabilan gas mulia bersumber dari terisinya seluruh orbital pada kulit terluar. Untuk kulit $n=1$, hanya ada orbital $1s$ dengan kapasitas maksimal 2 elektron ($1s^2$), sehingga konfigurasi duplet telah memenuhi kulit tersebut. Untuk kulit $n \\ge 2$, terdapat orbital $s$ dan $p$ yang memerlukan total 8 elektron ($ns^2 np^6$) untuk terisi penuh (oktet).',
      misconceptionTarget: 'Mengira semua unsur tanpa kecuali wajib memiliki 8 elektron untuk stabil',
    },
    {
      id: 'chk-103-pre1-q2',
      type: 'true_false',
      question: 'Setiap molekul kovalen stabil di alam semesta wajib memenuhi kaidah oktet (8 elektron) di sekitar atom pusatnya tanpa terkecuali.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Terdapat tiga kelompok pengecualian kaidah oktet yang sangat umum: (1) Hipooktet/sub-oktet seperti $\\ce{BF3}$ (hanya 6 elektron) dan $\\ce{BeCl2}$ (4 elektron); (2) Radikal bebas berelektron ganjil seperti $\\ce{NO2}$; dan (3) Hiperoktet/ekspansi oktet pada unsur periode 3 ke atas seperti $\\ce{SF6}$ (12 elektron) dan $\\ce{PCl5}$ (10 elektron).',
      misconceptionTarget: 'Menganggap kaidah oktet adalah hukum mutlak yang tidak memiliki pengecualian',
    },
    {
      id: 'chk-103-pre1-q3',
      type: 'multiple_choice',
      question: 'Dalam mengevaluasi struktur Lewis alternatif melalui muatan formal (*formal charge*), struktur manakah yang paling stabil dan memberikan kontribusi terbesar pada hibrida resonansi?',
      options: [
        'Struktur dengan muatan formal bernilai sebesar-besarnya pada setiap atom',
        'Struktur dengan muatan formal mendekati nol untuk sebanyak mungkin atom, dan muatan negatif berada pada atom yang paling elektronegatif',
        'Struktur yang menempatkan muatan formal negatif pada atom yang paling elektropositif',
        'Struktur yang memiliki jumlah ikatan kovalen paling sedikit',
      ],
      correctAnswer: 1,
      explanation: 'Prinsip muatan formal menetapkan bahwa struktur Lewis yang paling berkontribusi adalah struktur yang meminimalkan besaran muatan formal (sebisa mungkin nol di semua atom), meminimalkan pemisahan muatan, dan jika ada muatan formal negatif, muatan tersebut harus berada pada atom dengan keelektronegatifan tertinggi.',
      misconceptionTarget: 'Mengabaikan keelektronegatifan saat menentukan posisi muatan formal negatif',
    },
  ],

  // Prasyarat 2: Skala Elektronegativitas Pauling & Spektrum Kontinum Karakter Ikatan
  'elektronegativitas-dan-karakter-ikatan': [
    {
      id: 'chk-103-pre2-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan skala Pauling, sifat ikatan kimia merupakan spektrum kontinum. Kapan suatu ikatan kovalen diklasifikasikan sebagai ikatan kovalen polar?',
      options: [
        'Ketika kedua atom memiliki keelektronegatifan yang persis sama $(\\Delta EN = 0)$',
        'Ketika terdapat perbedaan keelektronegatifan yang moderat $(0.4 < \\Delta EN < 1.7)$ sehingga pasangan elektron ikatan ditarik lebih kuat ke salah satu atom',
        'Ketika perbedaan keelektronegatifan sangat besar $(\\Delta EN > 2.0)$ sehingga terjadi transfer elektron penuh',
        'Ketika kedua atom merupakan unsur logam dari golongan yang sama',
      ],
      correctAnswer: 1,
      explanation: 'Jika $\\Delta EN \\approx 0$, pasangan elektron terbagi merata (kovalen nonpolar). Jika $0.4 < \\Delta EN < 1.7$, elektron ditarik condong ke atom yang lebih elektronegatif membentuk dipol $\\delta^+$ dan $\\delta^-$ (kovalen polar). Jika $\\Delta EN > 2.0$, terjadi transfer elektron penuh menghasilkan ikatan berkarakter ionik dominan.',
      misconceptionTarget: 'Menganggap batas antara kovalen dan ionik adalah dinding kaku tanpa daerah abu-abu (kontinum)',
    },
    {
      id: 'chk-103-pre2-q2',
      type: 'true_false',
      question: 'Ikatan antara atom karbon dan hidrogen pada molekul metana $(\\ce{CH4})$ diklasifikasikan sebagai ikatan kovalen nonpolar karena selisih keelektronegatifannya sangat kecil $(\\Delta EN \\approx 0.35)$.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Nilai elektronegativitas karbon adalah $2.55$ dan hidrogen adalah $2.20$. Selisihnya $\\Delta EN = 0.35$ tergolong di bawah ambang batas $0.4$, sehingga kerapatan elektron terdistribusi nyaris merata dan ikatan $\\ce{C-H}$ diperlakukan sebagai ikatan kovalen nonpolar dalam kimia organik.',
      misconceptionTarget: 'Mengira ikatan antara dua atom yang berbeda unsur selalu otomatis berkarakter polar kuat',
    },
    {
      id: 'chk-103-pre2-q3',
      type: 'multiple_choice',
      question: 'Menurut Kaidah Fajans, senyawa aluminium iodida $(\\ce{AlI3})$ memiliki karakter kovalen yang sangat nyata meskipun tersusun dari kation logam dan anion nonlogam. Faktor apakah yang memicu polarisasi kuat ini?',
      options: [
        'Kation $\\ce{Al^3+}$ memiliki ukuran sangat besar dan muatan rendah',
        'Kation $\\ce{Al^3+}$ memiliki densitas muatan sangat tinggi (muatan $+3$, ukuran kecil) sehingga mampu mendistorsi/menarik awan elektron dari anion $\\ce{I-}$ yang besar dan mudah dipolarisasi',
        'Iodium merupakan unsur paling elektronegatif di tabel periodik',
        'Aluminium tidak dapat melepaskan elektron membentuk kation',
      ],
      correctAnswer: 1,
      explanation: 'Kaidah Fajans menjelaskan karakter kovalen pada senyawa biner: Kation berukuran kecil dengan muatan tinggi memiliki daya mempolarisasi (*polarizing power*) yang sangat kuat. Anion berukuran besar seperti $\\ce{I-}$ memiliki awan elektron longgar yang mudah dipolarisasi. Tarikan ini menarik elektron kembali ke ruang antar-inti, menghasilkan karakter kovalen dominan.',
      misconceptionTarget: 'Menganggap semua kombinasi logam + nonlogam pasti 100% berkarakter ionik murni',
    },
  ],

  // Konsep Inti 1: Ikatan Ion (Elektrovalen), Energi Kisi Kristal & Sifat Fisik Senyawa Ionik
  'ikatan-ion-dan-energi-kisi': [
    {
      id: 'chk-103-core1-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan Hukum Coulomb, energi kisi kristal berbanding lurus dengan hasil kali muatan ion dan berbanding terbalik dengan jarak antar-inti: $E_{\\text{kisi}} \\propto \\frac{|q_1 q_2|}{r_0}$. Mengapa kristal magnesium oksida $(\\ce{MgO})$ memiliki energi kisi $(-3791\\text{ kJ/mol})$ yang hampir empat kali lipat lebih besar dibanding kristal natrium klorida $(\\ce{NaCl}, -787\\text{ kJ/mol})$?',
      options: [
        'Karena massa molar $\\ce{MgO}$ lebih berat dibanding $\\ce{NaCl}$',
        'Karena ion $\\ce{Mg^2+}$ dan $\\ce{O^2-}$ bermuatan $\\pm 2$ sehingga hasil kali muatannya $|(+2)(-2)| = 4$, sedangkan pada $\\ce{NaCl}$ bernilai $|(+1)(-1)| = 1$',
        'Karena natrium merupakan logam yang lebih reaktif dibanding magnesium',
        'Karena oksigen berwujud gas pada kondisi standar sedangkan klorin berwujud cair',
      ],
      correctAnswer: 1,
      explanation: 'Faktor penentu utama energi kisi adalah perkalian besar muatan kation dan anion. Ion $\\ce{Mg^2+}$ dan $\\ce{O^2-}$ memiliki muatan ganda $(2 \\times 2 = 4)$, yang memperkuat tarikan elektrostatik kisi sekitar empat kali lipat lebih besar dibanding ion bervalensi satu pada $\\ce{Na+}$ dan $\\ce{Cl-}$ $(1 \\times 1 = 1)$.',
      misconceptionTarget: 'Mengira energi kisi hanya ditentukan oleh massa molekul atau nomor atom',
    },
    {
      id: 'chk-103-core1-q2',
      type: 'true_false',
      question: 'Garam dapur padat $(\\ce{NaCl(s)})$ merupakan konduktor listrik yang sangat baik pada suhu kamar karena tersusun atas ion-ion $\\ce{Na+}$ dan $\\ce{Cl-}$.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Meskipun tersusun atas ion-ion, dalam fasa padat seluruh ion $\\ce{Na+}$ dan $\\ce{Cl-}$ terkunci kokoh pada kisi kristal tiga dimensi dan tidak memiliki mobilitas untuk mengalirkan arus listrik. Garam dapur baru menghantarkan arus listrik jika dilelehkan $(\\ce{NaCl(l)})$ atau dilarutkan dalam air $(\\ce{NaCl(aq)})$.',
      misconceptionTarget: 'Mengira keberadaan ion otomatis membuat padatan ionik menghantarkan arus listrik',
    },
    {
      id: 'chk-103-core1-q3',
      type: 'multiple_choice',
      question: 'Mengapa kristal garam ionik bersifat keras namun rapuh (*brittle*) dan mudah retak berkeping-keping saat dipukul dengan palu mekanik?',
      options: [
        'Karena ikatan ionik sangat lemah sehingga mudah putus oleh getaran udara',
        'Karena pukulan palu menggeser lapisan kisi kristal, menyebabkan ion-ion bermuatan sejenis berada saling berhadapan sehingga timbul gaya tolak elektrostatik dahsyat yang membelah kristal',
        'Karena kristal garam mengandung kantong-kantong udara bertekanan tinggi di dalamnya',
        'Karena elektron-elektron valensi terlepas seketika menjadi gas',
      ],
      correctAnswer: 1,
      explanation: 'Dalam kisi kristal ionik, kation dan anion tersusun berselang-seling. Ketika diberi gaya mekanik (pukulan), satu lapisan ion bergeser. Pergeseran ini menempatkan kation berhadapan dengan kation lain, dan anion berhadapan dengan anion lain. Tolakan elektrostatik muatan sejenis seketika meretakkan dan menghancurkan kristal.',
      misconceptionTarget: 'Mengira sifat getas kristal ionik disebabkan oleh lemahnya ikatan ion',
    },
  ],

  // Konsep Inti 2: Ikatan Kovalen, Kovalen Koordinasi (Datif) & Anomali Pengecualian Kaidah Oktet
  'ikatan-kovalen-dan-kovalen-koordinasi': [
    {
      id: 'chk-103-core2-q1',
      type: 'multiple_choice',
      question: 'Pada reaksi pembentukan ion amonium: $\\ce{NH3 + H+ -> NH4+}$, jenis ikatan yang terbentuk antara atom nitrogen dan ion $\\ce{H+}$ adalah:',
      options: [
        'Ikatan ionik murni karena melibatkan ion $\\ce{H+}$',
        'Ikatan kovalen koordinasi (datif), di mana pasangan elektron ikatan disumbangkan seutuhnya oleh atom nitrogen',
        'Ikatan hidrogen antarmolekul yang bersifat sementara',
        'Ikatan logam akibat lautan elektron pada atom nitrogen',
      ],
      correctAnswer: 1,
      explanation: 'Ion $\\ce{H+}$ tidak memiliki elektron sama sekali (orbital $1s$ kosong). Atom nitrogen pada $\\ce{NH3}$ memiliki satu Pasangan Elektron Bebas (PEB). Pembentukan ikatan terjadi melalui sumbangan sepihak PEB dari nitrogen ke orbital kosong $\\ce{H+}$, yang merupakan definisi dari ikatan kovalen koordinasi (datif).',
      misconceptionTarget: 'Mengira adanya kation H+ selalu menghasilkan pembentukan ikatan ionik',
    },
    {
      id: 'chk-103-core2-q2',
      type: 'true_false',
      question: 'Setelah ion amonium $(\\ce{NH4+})$ terbentuk sempurna, satu ikatan kovalen koordinasi di dalamnya memiliki panjang ikatan dan energi yang dapat dibedakan dari tiga ikatan kovalen biasa lainnya melalui spektroskopi.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Setelah ikatan kovalen koordinasi terbentuk, pasangan elektron terdelokalisasi secara simetris di seluruh molekul. Keempat ikatan $\\ce{N-H}$ pada $\\ce{NH4+}$ identik sempurna dalam hal panjang ikatan ($102\\text{ pm}$) dan energi disosiasi; kita tidak dapat membedakan mana ikatan yang berasal dari koordinasi dan mana yang kovalen biasa.',
      misconceptionTarget: 'Membayangkan ikatan koordinasi mempertahankan sifat berbeda setelah terbentuk',
    },
    {
      id: 'chk-103-core2-q3',
      type: 'multiple_choice',
      question: 'Molekul gas nitrogen dioksida $(\\ce{NO2})$ memiliki warna cokelat kemerahan dan bersifat paramagnetik. Berdasarkan struktur Lewisnya, fenomena ini terjadi karena $\\ce{NO2}$ merupakan contoh dari:',
      options: [
        'Senyawa hiperoktet dengan 12 elektron di sekitar atom nitrogen',
        'Molekul dengan jumlah elektron valensi ganjil (*odd-electron molecule* / radikal bebas) yang memiliki satu elektron tidak berpasangan',
        'Senyawa ionik yang mengalami disosiasi sempurna di fasa gas',
        'Kompleks logam transisi dengan orbital $d$ terisi penuh',
      ],
      correctAnswer: 1,
      explanation: 'Total elektron valensi $\\ce{NO2}$ adalah $5 + (2 \\times 6) = 17$ elektron (ganjil!). Menurut mekanika kuantum, tidak mungkin memasangkan seluruh elektron jika jumlahnya ganjil. Satu elektron tunggal tak berpasangan pada atom nitrogen menjadikan $\\ce{NO2}$ sebuah radikal bebas dan paramagnetik (tertarik medan magnet).',
      misconceptionTarget: 'Memaksakan seluruh molekul stabil memiliki jumlah elektron genap berpasangan',
    },
  ],

  // Konsep Inti 3: Teori VSEPR, Notasi Domain Elektron & Prediksi Geometri Ruang Molekul
  'teori-vsepr-dan-geometri-molekul': [
    {
      id: 'chk-103-core3-q1',
      type: 'multiple_choice',
      question: 'Molekul air $(\\ce{H2O})$ memiliki 4 domain elektron di sekitar atom pusat oksigen (tipe $AX_2E_2$), namun sudut ikatan $\\ce{H-O-H}$ bernilai $104.5^\\circ$, lebih kecil dari sudut tetrahedral ideal $(109.5^\\circ)$. Mengapa penyempitan sudut ini terjadi?',
      options: [
        'Karena atom hidrogen saling menarik satu sama lain dengan gaya gravitasi kuat',
        'Karena pasangan elektron bebas (PEB) hanya terikat pada satu inti sehingga awan elektronnya lebih mengembang dan memberikan gaya tolak lebih kuat (PEB-PEB > PEB-PEI > PEI-PEI), menekan sudut ikatan ikatan',
        'Karena ikatan $\\ce{O-H}$ adalah ikatan rangkap dua yang sangat kaku',
        'Karena molekul air kehilangan elektron saat berada di fasa cair',
      ],
      correctAnswer: 1,
      explanation: 'Hierarki tolakan domain elektron menurut teori VSEPR adalah: Tolakan PEB-PEB > PEB-PEI > PEI-PEI. Pasangan Elektron Bebas (PEB) hanya ditarik oleh satu inti atom sehingga awan elektronnya lebih gemuk dan memakan ruang lebih besar, mendesak pasangan ikatan $\\ce{O-H}$ saling mendekat sehingga sudutnya menyempit dari $109.5^\\circ$ menjadi $104.5^\\circ$.',
      misconceptionTarget: 'Mengira semua domain elektron memiliki kekuatan tolakan yang identik',
    },
    {
      id: 'chk-103-core3-q2',
      type: 'true_false',
      question: 'Dalam teori VSEPR, ikatan kovalen rangkap dua (seperti pada $\\ce{O=C=O}$) dihitung sebagai dua domain elektron terpisah saat menentukan geometri molekul.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Dalam teori domain elektron VSEPR, setiap ikatan kimia—baik ikatan tunggal, ikatan rangkap dua, maupun ikatan rangkap tiga—dihitung sebagai SATU domain elektron karena seluruh elektron ikatan tersebut terkonsentrasi di daerah ruang yang sama di antara kedua inti atom. Oleh karena itu, $\\ce{CO2}$ memiliki 2 domain elektron ($AX_2$, linear $180^\\circ$).',
      misconceptionTarget: 'Menghitung ikatan rangkap dua sebagai dua domain geometri terpisah',
    },
    {
      id: 'chk-103-core3-q3',
      type: 'multiple_choice',
      question: 'Molekul belerang tetrafluorida $(\\ce{SF4})$ memiliki rumus domain elektron $AX_4E$ (4 pasangan ikatan dan 1 pasangan elektron bebas). Posisi manakah yang ditempati oleh pasangan elektron bebas (PEB) tersebut pada kerangka bipiramida trigonal untuk meminimalkan tolakan?',
      options: [
        'Posisi aksial (membentuk sudut $90^\\circ$ dengan 3 ikatan ekuatorial)',
        'Posisi ekuatorial (membentuk sudut $90^\\circ$ hanya dengan 2 ikatan aksial dan sudut $120^\\circ$ dengan 2 ikatan ekuatorial)',
        'Bergantian secara acak setiap detik antara posisi aksial dan ekuatorial',
        'Tepat di tengah-tengah inti atom belerang',
      ],
      correctAnswer: 1,
      explanation: 'Tolakan pada sudut $90^\\circ$ sangat kuat dan mendominasi energi potensial. Jika PEB berada di posisi ekuatorial, ia hanya berinteraksi $90^\\circ$ dengan 2 ligan aksial. Jika diletakkan di aksial, ia akan berinteraksi $90^\\circ$ dengan 3 ligan ekuatorial. Oleh karena itu, PEB wajib memilih posisi ekuatorial menghasilkan geometri jungkat-jungkit (*seesaw*).',
      misconceptionTarget: 'Mengira penempatan PEB pada posisi aksial atau ekuatorial menghasilkan energi tolakan yang sama',
    },
  ],

  // Konsep Inti 4: Kepolaran Senyawa, Momen Dipol & Kriteria Simetri Molekul
  'kepolaran-senyawa-dan-momen-dipol': [
    {
      id: 'chk-103-core4-q1',
      type: 'multiple_choice',
      question: 'Ikatan kovalen $\\ce{C-Cl}$ memiliki polaritas yang cukup tinggi $(\\Delta EN \\approx 0.96)$. Namun demikian, molekul karbon tetraklorida $(\\ce{CCl4})$ bersifat nonpolar murni dengan momen dipol total $\\mu = 0\\text{ D}$. Penjelasan ilmiah yang tepat untuk fenomena ini adalah:',
      options: [
        'Karbon tetraklorida mengalami netralisasi muatan secara spontan saat bereaksi dengan udara',
        'Bentuk molekul tetrahedral yang simetris sempurna menyebabkan resultan vektor dari keempat momen dipol ikatan $\\ce{C-Cl}$ saling meniadakan secara vektor ($\\sum \\vec{\\mu} = 0$)',
        'Elektron pada ikatan $\\ce{C-Cl}$ tidak bergerak sehingga tidak menimbulkan medan listrik',
        'Empat atom klorin bermuatan positif dan atom karbon bermuatan negatif',
      ],
      correctAnswer: 1,
      explanation: 'Momen dipol molekul adalah besaran vektor. Meskipun masing-masing ikatan $\\ce{C-Cl}$ bersifat polar, orientasi spasial tetrahedral yang sangat simetris menyebabkan keempat vektor momen dipol ikatan yang sama besar mengarah ke empat sudut tetrahedral yang berlawanan, sehingga jumlah vektor totalnya saling meniadakan menjadi nol ($\\mu = 0$).',
      misconceptionTarget: 'Mengira adanya ikatan kovalen polar otomatis membuat molekul pasti bersifat polar',
    },
    {
      id: 'chk-103-core4-q2',
      type: 'true_false',
      question: 'Molekul boron trifluorida $(\\ce{BF3})$ bersifat nonpolar $(\\mu = 0)$, sedangkan molekul amonia $(\\ce{NH3})$ bersifat polar $(\\mu \\ne 0)$, meskipun kedua molekul memiliki rumus tipe yang sama-sama berikatan dengan tiga ligan.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. $\\ce{BF3}$ memiliki geometri segitiga datar (*trigonal planar*, $AX_3$) simetris tanpa PEB, sehingga ketiga vektor dipol ikatan saling meniadakan (nonpolar). Sebaliknya, $\\ce{NH3}$ memiliki satu PEB ($AX_3E$, *trigonal pyramidal*) yang asimetris, menghasilkan momen dipol netto ke arah puncak PEB (polar).',
      misconceptionTarget: 'Menilai kepolaran molekul hanya dari jumlah ligan yang terikat tanpa melihat geometri ruang dan PEB',
    },
    {
      id: 'chk-103-core4-q3',
      type: 'multiple_choice',
      question: 'Berdasarkan prinsip kepolaran "like dissolves like", mengapa bensin (campuran senyawa hidrokarbon rantai nonpolar) tidak dapat bercampur larut dengan air murni $(\\ce{H2O})$?',
      options: [
        'Karena massa jenis bensin lebih kecil sehingga molekul bensin tidak memiliki energi kinetik',
        'Karena tarikan ikatan hidrogen antarmolekul air sangat kuat dan kompak, sehingga molekul bensin yang nonpolar tidak mampu menggantikan energi ikatan hidrogen tersebut',
        'Karena molekul bensin membentuk ikatan ionik dengan ion hidroksida',
        'Karena air bereaksi secara eksoterm meledak jika bersentuhan dengan senyawa karbon',
      ],
      correctAnswer: 1,
      explanation: 'Molekul air terikat satu sama lain oleh jaringan ikatan hidrogen yang sangat kuat. Interaksi dispersi lemah antara bensin nonpolar dan molekul air tidak mampu mengompensasi energi yang diperlukan untuk memutus jaringan ikatan hidrogen antarmolekul air, sehingga sistem memisah menjadi dua lapisan.',
      misconceptionTarget: 'Mengira bensin dan air menolak satu sama lain karena gaya tolak elektrostatik aktif',
    },
  ],

  // Konsep Inti 5: Ikatan Logam, Model Lautan Elektron & Penjelasan Ilmiah Sifat Fisik Logam
  'ikatan-logam-dan-sifat-khas': [
    {
      id: 'chk-103-core5-q1',
      type: 'multiple_choice',
      question: 'Model "lautan elektron" Drude-Lorentz menggambarkan logam sebagai kumpulan kation yang tersusun teratur di dalam kabut elektron valensi yang terdelokalisasi. Mengapa model ini dapat menjelaskan daya hantar listrik logam yang luar biasa?',
      options: [
        'Karena kation logam bergerak bebas mengalir menuju kutub positif',
        'Karena elektron-elektron valensi tidak terikat kaku pada satu atom tertentu dan bebas bergerak mengalir melalui kisi kation saat diberi beda potensial listrik',
        'Karena logam mengandung molekul gas terperangkap yang terionisasi',
        'Karena ikatan logam secara berkala berubah menjadi ikatan kovalen koordinasi',
      ],
      correctAnswer: 1,
      explanation: 'Dalam ikatan logam, elektron valensi meninggalkan orbital atom individualnya dan terdelokalisasi melintasi seluruh kristal membentuk "lautan elektron". Ketika kutub listrik dipasang, elektron-elektron bermuatan negatif ini dengan leluasa melayang mengalir ke arah anoda (kutub positif).',
      misconceptionTarget: 'Mengira konduktivitas listrik logam disebabkan oleh pergerakan inti/kation logam',
    },
    {
      id: 'chk-103-core5-q2',
      type: 'true_false',
      question: 'Logam memiliki sifat dapat ditempa (*malleable*) dan dapat diregangkan menjadi kawat (*ductile*) tanpa pecah karena lautan elektron yang fleksibel terus mempertahankan ikatan kohesif kation meskipun lapisan kristal tergeser.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Berbeda dengan kristal ionik yang kaku dan getas, dalam logam pergeseran lapisan kation akibat pukulan mekanik tidak memicu tolakan fatal, karena lautan elektron terdelokalisasi langsung menyesuaikan diri membungkus kation-kation baru tersebut dan mempertahankan keutuhan ikatan logam.',
      misconceptionTarget: 'Mengira logam tidak bisa retak karena atom-atomnya tidak memiliki susunan kristal',
    },
    {
      id: 'chk-103-core5-q3',
      type: 'multiple_choice',
      question: 'Logam transisi seperti wolfram $(\\ce{W})$ memiliki titik leleh yang sangat tinggi $(>3400^\\circ\\text{C})$, sedangkan logam alkali seperti natrium $(\\ce{Na})$ meleleh pada suhu rendah $(98^\\circ\\text{C})$. Penyebab utama perbedaan dramatis ini adalah:',
      options: [
        'Natrium memiliki nomor massa lebih besar dibanding wolfram',
        'Wolfram mengikutsertakan elektron-elektron subkulit $5d$ yang belum berpasangan ke dalam ikatan logam di samping elektron $6s$, menghasilkan ikatan logam yang jauh lebih kuat dibanding natrium yang hanya menyumbang satu elektron $3s$',
        'Wolfram merupakan senyawa ionik sedangkan natrium adalah senyawa kovalen murni',
        'Natrium bereaksi secara spontan dengan elektronnya sendiri',
      ],
      correctAnswer: 1,
      explanation: 'Kekuatan ikatan logam berbanding lurus dengan jumlah elektron valensi yang disumbangkan ke dalam lautan elektron dan muatan kation inti. Natrium (golongan 1) hanya menyumbangkan 1 elektron valensi per atom ($3s^1$). Logam transisi seperti wolfram mengikutsertakan elektron subkulit $d$ ke dalam lautan elektron, melipatgandakan energi kohesi kisi logam.',
      misconceptionTarget: 'Mengira semua unsur logam memiliki kekuatan ikatan logam yang setara',
    },
  ],

  // Konsep Inti 6: Gaya Antarmolekul (Van der Waals & Ikatan Hidrogen) serta Anomali Sifat Fisik Air
  'gaya-antarmolekul-dan-ikatan-hidrogen': [
    {
      id: 'chk-103-core6-q1',
      type: 'multiple_choice',
      question: 'Manakah urutan kekuatan gaya tarik antarmolekul dari yang paling LEMAH hingga paling KUAT di antara zat-zat dengan ukuran molekul sebanding berikut?',
      options: [
        'Ikatan Hidrogen < Interaksi Dipol-dipol < Gaya Dispersi London',
        'Gaya Dispersi London < Interaksi Dipol-dipol < Ikatan Hidrogen',
        'Interaksi Dipol-dipol < Gaya Dispersi London < Ikatan Hidrogen',
        'Ikatan Hidrogen < Gaya Dispersi London < Interaksi Dipol-dipol',
      ],
      correctAnswer: 1,
      explanation: 'Untuk molekul dengan massa molar dan ukuran sebanding: Gaya dispersi London (dipol sesaat-dipol terimbas) adalah yang paling lemah; interaksi dipol-dipol permanen berada di tengah; dan ikatan hidrogen (dipol-dipol ekstrim antara H dan N/O/F) adalah yang paling kuat.',
      misconceptionTarget: 'Tertukar urutan kekuatan antara gaya London dan dipol-dipol permanen',
    },
    {
      id: 'chk-103-core6-q2',
      type: 'true_false',
      question: 'Ikatan hidrogen adalah ikatan kovalen intramolekul yang menghubungkan atom hidrogen dengan atom oksigen di dalam molekul air yang sama.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Miskonsepsi fundamental: ikatan hidrogen BUKAN ikatan kimia intramolekul (seperti kovalen). Ikatan kovalen $\\ce{H-O}$ berada di DALAM satu molekul air (energi $\\approx 460\\text{ kJ/mol}$). Ikatan hidrogen adalah gaya tarik elektrostatik ANTARMOLEKUL sekunder antara atom H dari satu molekul air dengan PEB atom O dari molekul air tetangganya (energi $\\approx 20\\text{ kJ/mol}$).',
      misconceptionTarget: 'Mengira ikatan hidrogen adalah ikatan kovalen di dalam molekul air',
    },
    {
      id: 'chk-103-core6-q3',
      type: 'multiple_choice',
      question: 'Mengapa es batu terapung di permukaan air cair pada suhu $0^\\circ\\text{C}$ (anomali massa jenis air)?',
      options: [
        'Karena es batu menyerap gelembung gas nitrogen dari atmosfer saat membeku',
        'Ketika membeku, ikatan hidrogen mengunci molekul-molekul $\\ce{H2O}$ ke dalam kisi kristal heksagonal terbuka yang memiliki banyak rongga kosong, sehingga volumenya mengembang dan massa jenisnya menurun',
        'Karena molekul air pada es batu terurai menjadi gas hidrogen yang ringan',
        'Karena air cair mengalami peningkatan massa molar saat suhunya naik',
      ],
      correctAnswer: 1,
      explanation: 'Pada fasa cair, molekul air bergerak bebas dan saling menyusup ke celah antarmolekul. Saat membeku menjadi es, setiap molekul $\\ce{H2O}$ terikat secara tetrahedral dengan 4 molekul lain melalui ikatan hidrogen kaku, membentuk kisi heksagonal terbuka penuh rongga kosong. Rongga ini membuat es lebih renggang (massa jenis es $\\approx 0.917\\text{ g/cm}^3 <$ air cair $1.000\\text{ g/cm}^3$).',
      misconceptionTarget: 'Menganggap zat padat selalu pasti lebih rapat/padat dibanding fasa cairnya',
    },
  ],
};
