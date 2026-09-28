import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_109: Record<string, CheckpointQuizItem[]> = {
  // =========================================================================
  // PRASYARAT 1: Kesetimbangan Autoprotolisis Air (Kw) & Skala pH Sørensen
  // =========================================================================
  'prasyarat-autoprotolisis-air-dan-skala-ph': [
    {
      id: 'cp-109-prereq1-q1',
      type: 'true_false',
      question: 'Pada temperatur $60^\\circ\\text{C}$ di mana tetapan ionisasi air $K_w = 1.0 \\times 10^{-13}$, air murni memiliki $\\text{pH} = 6.5$, sehingga air murni pada kondisi tersebut bersifat asam.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Klasik pH Netral). Sifat netral didefinisikan sebagai kondisi saat konsentrasi $[\\ce{H+}] = [\\ce{OH-}]$. Pada $60^\\circ\\text{C}$, $[\\ce{H+}] = [\\ce{OH-}] = \\sqrt{1.0 \\times 10^{-13}} \\approx 3.16 \\times 10^{-7}\\text{ M}$, yang menghasilkan $\\text{pH} = 6.5$. Karena konsentrasi ion hidrogen dan hidroksida tetap seimbang sempurna, air murni tersebut tetap NETRAL, hanya saja titik netralnya bergeser dari 7.00 menjadi 6.50 akibat sifat endotermik autoionisasi air.',
    },
    {
      id: 'cp-109-prereq1-q2',
      type: 'multiple_choice',
      question: 'Suatu larutan basa pada temperatur $25^\\circ\\text{C}$ ($K_w = 1.0 \\times 10^{-14}$) memiliki konsentrasi ion hidroksida $[\\ce{OH-}] = 2.0 \\times 10^{-4}\\text{ M}$. Diketahui $\\log 2 \\approx 0.30$. Nilai pH larutan tersebut adalah ....',
      options: [
        '3.70',
        '4.30',
        '9.70',
        '10.30',
      ],
      correctAnswer: 3,
      explanation: 'Perhitungan pOH dan pH:\n$$\\text{pOH} = -\\log[\\ce{OH-}] = -\\log(2.0 \\times 10^{-4}) = 4 - \\log 2 = 4 - 0.30 = 3.70$$\n$$\\text{pH} = 14.00 - \\text{pOH} = 14.00 - 3.70 = \\mathbf{10.30}$$.',
    },
    {
      id: 'cp-109-prereq1-q3',
      type: 'true_false',
      question: 'Larutan dengan $\\text{pH} = 2$ memiliki tingkat keasaman (konsentrasi ion $[\\ce{H+}]$) dua kali lipat lebih pekat daripada larutan dengan $\\text{pH} = 4$.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Skala Logaritma). Skala pH Sørensen berbasis logaritma basis 10 ($-\\log_{10}[\\ce{H+}]$). Setiap penurunan 1 satuan pH berarti konsentrasi $[\\ce{H+}]$ naik $10$ kali lipat. Selisih $2$ satuan pH (dari 4 ke 2) berarti larutan ber-pH 2 memiliki keasaman $10^2 = \\mathbf{100\\text{ kali lipat}}$ lebih pekat, bukan 2 kali.',
    },
  ],

  // =========================================================================
  // PRASYARAT 2: Stoikiometri Larutan & Konsep Valensi Asam-Basa
  // =========================================================================
  'prasyarat-stoikiometri-volumetri-dan-molaritas-ekuivalen': [
    {
      id: 'cp-109-prereq2-q1',
      type: 'true_false',
      question: 'Untuk menetralkan sempurna $100\\text{ mL}$ larutan asam sulfat $\\ce{H2SO4 } 0.10\\text{ M}$, dibutuhkan volume larutan $\\ce{NaOH } 0.10\\text{ M}$ yang tepat sama, yakni $100\\text{ mL}$.',
      correctAnswer: false,
      explanation: 'Salah. Asam sulfat adalah asam diprotik (valensi $a = 2$), sehingga $100\\text{ mL } \\ce{H2SO4 } 0.10\\text{ M}$ melepaskan $100 \\times 0.10 \\times 2 = 20\\text{ mmol } \\ce{H+}$. Sementara $\\ce{NaOH}$ adalah basa monovalen ($b = 1$). Agar netral sempurna ($n(\\ce{H+}) = n(\\ce{OH-})$), dibutuhkan $20\\text{ mmol } \\ce{OH-}$, yang setara dengan volume $\\ce{NaOH} = \\frac{20\\text{ mmol}}{0.10\\text{ M}} = \\mathbf{200\\text{ mL}}$.',
    },
    {
      id: 'cp-109-prereq2-q2',
      type: 'multiple_choice',
      question: 'Berapa volume larutan barium hidroksida $\\ce{Ba(OH)2 } 0.050\\text{ M}$ yang diperlukan untuk menetralkan tepat $25.0\\text{ mL}$ larutan $\\ce{HCl } 0.200\\text{ M}$?',
      options: [
        '12.5 mL',
        '25.0 mL',
        '50.0 mL',
        '100.0 mL',
      ],
      correctAnswer: 2,
      explanation: 'Gunakan asas ekuivalensi netralisasi:\n$$V_a \\times M_a \\times a = V_b \\times M_b \\times b$$\nDiketahui $a = 1$ (untuk $\\ce{HCl}$) dan $b = 2$ (untuk $\\ce{Ba(OH)2}$):\n$$25.0\\text{ mL} \\times 0.200\\text{ M} \\times 1 = V_b \\times 0.050\\text{ M} \\times 2$$\n$$5.00\\text{ mmol} = V_b \\times 0.100\\text{ M} \\implies V_b = \\frac{5.00}{0.100} = \\mathbf{50.0\\text{ mL}}$$.',
    },
    {
      id: 'cp-109-prereq2-q3',
      type: 'true_false',
      question: 'Valensi suatu asam selalu tepat sama dengan jumlah total atom hidrogen (H) yang tertulis pada rumus molekul kimianya.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Rumus Molekul). Valensi asam hanya menghitung jumlah atom hidrogen yang dapat terionisasi menjadi ion $\\ce{H+}$ dalam larutan. Contohnya: Asam asetat ($\\ce{CH3COOH}$) memiliki 4 atom H, tetapi hanya 1 atom H pada gugus karboksilat ($-COOH$) yang bersifat asam (valensi $a = 1$). Tiga atom H pada gugus metil ($-CH3$) terikat kovalen nonpolar kuat pada karbon dan tidak dapat terlepas.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 1: Tiga Teori Asam-Basa (Arrhenius, Brønsted-Lowry & Lewis)
  // =========================================================================
  'tiga-teori-asam-basa-evolusi-dan-komparasi': [
    {
      id: 'cp-109-core1-q1',
      type: 'true_false',
      question: 'Menurut teori asam-basa Brønsted-Lowry, pada reaksi $\\ce{HCO3-(aq) + H2O(l) <=> H2CO3(aq) + OH-(aq)}$, ion bikarbonat ($\\ce{HCO3-}$) bertindak sebagai asam karena memiliki atom hidrogen.',
      correctAnswer: false,
      explanation: 'Salah. Pada reaksi tersebut, ion $\\ce{HCO3-}$ menerima ion proton $\\ce{H+}$ dari molekul $\\ce{H2O}$ untuk berubah menjadi $\\ce{H2CO3}$. Karena bertindak sebagai AKSEPTOR PROTON, ion $\\ce{HCO3-}$ berperan sebagai BASA Brønsted-Lowry, sedangkan $\\ce{H2O}$ bertindak sebagai donor proton (ASAM). Pasangan konjugasinya adalah $\\ce{H2CO3}$ (asam konjugasi) dan $\\ce{HCO3-}$ (basa).',
    },
    {
      id: 'cp-109-core1-q2',
      type: 'multiple_choice',
      question: 'Pada reaksi pembentukan senyawa koordinasi aduk Lewis:\n$$\\ce{BF3 + NH3 -> F3B:NH3}$$\npernyataan berikut yang paling tepat mengenai peran masing-masing molekul adalah ....',
      options: [
        '$\\ce{NH3}$ adalah asam Lewis karena memiliki atom hidrogen terionisasi',
        '$\\ce{BF3}$ adalah basa Lewis karena melepaskan pasangan elektron',
        '$\\ce{BF3}$ adalah asam Lewis karena memiliki orbital kosong yang menerima pasangan elektron bebas (PEB)',
        'Reaksi ini bukan reaksi asam-basa karena tidak melibatkan ion $\\ce{OH-}$ dalam air',
      ],
      correctAnswer: 2,
      explanation: 'Menurut Teori Lewis: Asam adalah akseptor pasangan elektron bebas (PEB) yang menyediakan orbital kosong, sedangkan Basa adalah donor PEB. Pada molekul $\\ce{BF3}$, atom pusat Boron hanya dikelilingi 6 elektron valensi (kurang dari oktet) sehingga memiliki orbital $2p$ kosong yang siap menerima PEB dari atom Nitrogen pada $\\ce{NH3}$ membentuk ikatan kovalen koordinasi.',
    },
    {
      id: 'cp-109-core1-q3',
      type: 'true_false',
      question: 'Basa konjugasi dari suatu asam kuat mineral seperti $\\ce{HCl}$ (yakni ion $\\ce{Cl-}$) merupakan basa yang sangat kuat di dalam larutan air.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Kekuatan Pasangan Konjugasi). Terdapat hubungan terbalik yang tegas: Semakin kuat suatu asam, maka basa konjugasinya semakin LEMAH (inert). Karena $\\ce{HCl}$ adalah asam yang sangat kuat dengan kecenderungan melepas proton mendekati $100\\%$, maka ion klorida ($\\ce{Cl-}$) sama sekali tidak memiliki afinitas untuk menarik kembali proton di dalam air, sehingga $\\ce{Cl-}$ merupakan basa konjugasi yang luar biasa lemah (praktis netral).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 2: Algoritma Perhitungan pH Asam-Basa Kuat & Lemah
  // =========================================================================
  'perhitungan-ph-asam-basa-kuat-dan-lemah': [
    {
      id: 'cp-109-core2-q1',
      type: 'true_false',
      question: 'Jika suatu larutan asam asetat encer ditambahkan akuades hingga volumenya menjadi 10 kali lipat semula, maka derajat ionisasi ($\\alpha$) asam asetat tersebut akan membesar.',
      correctAnswer: true,
      explanation: 'Benar. Menurut Hukum Pengenceran Wilhelm Ostwald: $\\alpha = \\sqrt{\\frac{K_a}{C_a}}$. Ketika larutan diencerkan, konsentrasi asam $C_a$ menurun. Akibatnya, nilai derajat ionisasi $\\alpha$ akan meningkat demi mempertahankan kesetimbangan aksi massa reaksi $\\ce{CH3COOH <=> CH3COO- + H+}$.',
    },
    {
      id: 'cp-109-core2-q2',
      type: 'multiple_choice',
      question: 'Suatu larutan asam lemah monoprotik $\\ce{HA } 0.10\\text{ M}$ memiliki nilai $\\text{pH} = 3.00$. Nilai tetapan ionisasi asam ($K_a$) asam lemah tersebut adalah ....',
      options: [
        '$1.0 \\times 10^{-3}$',
        '$1.0 \\times 10^{-4}$',
        '$1.0 \\times 10^{-5}$',
        '$1.0 \\times 10^{-6}$',
      ],
      correctAnswer: 2,
      explanation: 'Langkah perhitungan:\n1. $[\\ce{H+}] = 10^{-\\text{pH}} = 10^{-3.00} = 1.0 \\times 10^{-3}\\text{ M}$.\n2. Gunakan rumus kesetimbangan asam lemah: $[\\ce{H+}] = \\sqrt{K_a \\times C_a}$.\n$$[\\ce{H+}]^2 = K_a \\times C_a \\implies K_a = \\frac{[\\ce{H+}]^2}{C_a} = \\frac{(1.0 \\times 10^{-3})^2}{0.10} = \\frac{1.0 \\times 10^{-6}}{10^{-1}} = \\mathbf{1.0 \\times 10^{-5}}$$.',
    },
    {
      id: 'cp-109-core2-q3',
      type: 'true_false',
      question: 'Larutan $\\ce{HCl}$ yang sangat encer dengan konsentrasi $1.0 \\times 10^{-8}\\text{ M}$ akan menghasilkan larutan basa dengan $\\text{pH} = 8.00$.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Pengenceran Ekstrem). Larutan asam tidak akan pernah berubah menjadi basa hanya karena diencerkan! Pada konsentrasi asam yang sangat encer ($[\\ce{HCl}] \\le 10^{-6}\\text{ M}$), sumbangan ion $[\\ce{H+}]$ dari autoionisasi air ($1.0 \\times 10^{-7}\\text{ M}$) tidak boleh diabaikan. Melalui neraca muatan: $[\\ce{H+}]_{\\text{total}} = [\\ce{HCl}] + [\\ce{H+}]_{\\text{air}} \\approx 1.05 \\times 10^{-7}\\text{ M}$, sehingga $\\text{pH} \\approx 6.98$ (mendekati netral tetapi tetap sedikit di bawah 7).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 3: Indikator Asam-Basa & Trayek Perubahan Warna
  // =========================================================================
  'indikator-asam-basa-dan-trayek-ph': [
    {
      id: 'cp-109-core3-q1',
      type: 'true_false',
      question: 'Indikator fenolftalein (PP) yang memiliki trayek pH 8.3–10.0 (tak berwarna ke merah muda) sangat tepat digunakan untuk mendeteksi titik ekuivalen pada titrasi asam kuat dengan basa lemah seperti $\\ce{HCl}$ dengan $\\ce{NH3}$.',
      correctAnswer: false,
      explanation: 'Salah. Titik ekuivalen titrasi asam kuat dengan basa lemah menghasilkan garam yang mengalami hidrolisis kationik sehingga bersifat ASAM ($\\text{pH} < 7$, biasanya berkisar antara 5.0 hingga 5.5). Fenolftalein baru berubah warna pada pH di atas 8.3, sehingga akan menghasilkan galat titrasi yang sangat besar. Indikator yang tepat untuk titrasi ini adalah Metil Merah (trayek pH 4.4–6.2).',
    },
    {
      id: 'cp-109-core3-q2',
      type: 'multiple_choice',
      question: 'Suatu sampel air limbah diuji dengan 3 indikator:\n- Metil Jingga (trayek 3.1–4.4: merah-kuning): warna Kuning\n- Bromtimol Biru (trayek 6.0–7.6: kuning-biru): warna Hijau\n- Fenolftalein (trayek 8.3–10.0: tak berwarna-merah muda): Tak Berwarna\nRentang perkiraan pH air limbah tersebut adalah ....',
      options: [
        '$\\text{pH} \\le 4.4$',
        '$4.4 \\le \\text{pH} \\le 6.0$',
        '$6.0 \\le \\text{pH} \\le 7.6$',
        '$7.6 \\le \\text{pH} \\le 8.3$',
      ],
      correctAnswer: 2,
      explanation: 'Analisis irisan rentang pH masing-masing indikator:\n1. Metil Jingga berwarna kuning $\\implies \\text{pH} \\ge 4.4$.\n2. Bromtimol Biru berwarna HIJAU (warna transisi di tengah trayek) $\\implies \\mathbf{6.0 \\le \\text{pH} \\le 7.6}$.\n3. Fenolftalein tak berwarna $\\implies \\text{pH} \\le 8.3$.\nIrisan serempak dari ketiga kondisi di atas dikunci secara presisi oleh warna transisi Bromtimol Biru, yakni $\\mathbf{6.0 \\le \\text{pH} \\le 7.6}$.',
    },
    {
      id: 'cp-109-core3-q3',
      type: 'true_false',
      question: 'Pada larutan dengan nilai pH tepat sama dengan $\\text{p}K_{\\text{In}}$ indikator ($\\text{pH} = \\text{p}K_{\\text{In}}$), konsentrasi molekul asam indikator $[\\ce{HIn}]$ tepat seimbang dengan ion basa konjugasinya $[\\ce{In-}]$ sehingga tampak warna campuran transisi.',
      correctAnswer: true,
      explanation: 'Benar. Indikator asam-basa adalah asam organik lemah: $\\ce{HIn <=> H+ + In-}$. Berdasarkan persamaan Henderson-Hasselbalch: $\\text{pH} = \\text{p}K_{\\text{In}} + \\log\\frac{[\\ce{In-}]}{[\\ce{HIn}]}$. Jika $\\text{pH} = \\text{p}K_{\\text{In}}$, maka rasio $\\frac{[\\ce{In-}]}{[\\ce{HIn}]} = 1$, yang berarti kedua bentuk warna memiliki proporsi persis sama (50% : 50%).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 4: Titrasi Asidimetri-Alkalimetri & Analisis Kurva Titrasi
  // =========================================================================
  'titrasi-asam-basa-dan-analisis-kurva-titrasi': [
    {
      id: 'cp-109-core4-q1',
      type: 'true_false',
      question: 'Pada titrasi asam asetat (asam lemah) dengan larutan standar $\\ce{NaOH}$ (basa kuat), titik ekuivalen selalu berada tepat pada $\\text{pH} = 7.00$ karena seluruh mol asam dan basa tepat habis bereaksi.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Utama Titik Ekuivalen). Saat asam asetat tepat habis bereaksi dengan $\\ce{NaOH}$, terbentuk garam natrium asetat ($\\ce{CH3COONa}$). Anion asetat ($\\ce{CH3COO-}$) merupakan basa konjugasi yang mengalami hidrolisis parsial: $\\ce{CH3COO- + H2O <=> CH3COOH + OH-}$. Produksi ion $\\ce{OH-}$ ini menyebabkan pH larutan pada titik ekuivalen selalu berada pada suasana BASA ($\\mathbf{\\text{pH} > 7}$, biasanya sekitar 8.7–9.0).',
    },
    {
      id: 'cp-109-core4-q2',
      type: 'multiple_choice',
      question: 'Sebanyak $20.0\\text{ mL}$ larutan asam lemah monoprotik $\\ce{HA } 0.10\\text{ M}$ ($\\text{p}K_a = 4.80$) dititrasi dengan $\\ce{NaOH } 0.10\\text{ M}$. Nilai pH larutan ketika volume penambahan titran $\\ce{NaOH}$ baru mencapai $10.0\\text{ mL}$ (titik setengah ekuivalen) adalah ....',
      options: [
        '2.40',
        '4.80',
        '7.00',
        '9.20',
      ],
      correctAnswer: 1,
      explanation: 'Pada titik setengah ekuivalen ($V = 10.0\\text{ mL}$ dari total $20.0\\text{ mL}$ yang dibutuhkan untuk titik ekuivalen):\n- Mol $\\ce{HA}$ awal $= 2.0\\text{ mmol}$, mol $\\ce{NaOH}$ masuk $= 1.0\\text{ mmol}$.\n- Mol $\\ce{HA}$ sisa $= 1.0\\text{ mmol}$, mol $\\ce{A-}$ terbentuk $= 1.0\\text{ mmol}$.\nKarena $[\\ce{HA}] = [\\ce{A-}]$, larutan membentuk sistem penyangga (buffer) ideal. Sesuai persamaan Henderson-Hasselbalch:\n$$\\text{pH} = \\text{p}K_a + \\log\\frac{[\\ce{A-}]}{[\\ce{HA}]} = 4.80 + \\log(1) = 4.80 + 0 = \\mathbf{4.80}$$.',
    },
    {
      id: 'cp-109-core4-q3',
      type: 'true_false',
      question: 'Titik akhir titrasi (*end point*) adalah titik teoretis saat mol ion $\\ce{H+}$ tepat ekuivalen secara stoikiometri dengan mol ion $\\ce{OH-}$, sedangkan titik ekuivalen (*equivalence point*) adalah saat indikator berubah warna di lab.',
      correctAnswer: false,
      explanation: 'Salah (Istilah Terbalik). TITIK EKUIVALEN adalah kondisi teoretis ideal saat mol ion $\\ce{H+}$ tepat bereaksi habis dengan mol ion $\\ce{OH-}$ sesuai rasio stoikiometri. Sedangkan TITIK AKHIR TITRASI adalah saat indikator mengalami perubahan warna fisik yang diamati oleh praktikan di laboratorium. Pemilihan indikator yang baik bertujuan agar titik akhir titrasi sedekat mungkin dengan titik ekuivalen untuk meminimalkan galat titrasi.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 5: Asam Poliprotik & Titrasi Multi-Tahap
  // =========================================================================
  'titrasi-asam-poliprotik-dan-titik-setara-ganda': [
    {
      id: 'cp-109-core5-q1',
      type: 'true_false',
      question: 'Untuk titrasi asam diprotik $\\ce{H2A}$ dengan titran basa kuat monovalen, volume titran yang diperlukan untuk mencapai titik ekuivalen kedua ($V_2$) selalu tepat dua kali lipat volume untuk mencapai titik ekuivalen pertama ($V_2 = 2 V_1$).',
      correctAnswer: true,
      explanation: 'Benar. Reaksi pelepasan proton asam diprotik berlangsung secara bertahap:\nTahap 1: $\\ce{H2A + OH- -> HA- + H2O}$ (membutuhkan volume titran $V_1$).\nTahap 2: $\\ce{HA- + OH- -> A^2- + H2O}$ (membutuhkan mol $\\ce{OH-}$ yang persis sama dengan Tahap 1, sehingga menambah volume sebesar $V_1$).\nTotal volume titran hingga titik ekuivalen kedua adalah $V_2 = V_1 + V_1 = \\mathbf{2 V_1}$.',
    },
    {
      id: 'cp-109-core5-q2',
      type: 'multiple_choice',
      question: 'Dua lonjakan sigmoid yang terpisah tegas pada kurva titrasi asam diprotik $\\ce{H2A}$ hanya dapat teramati dengan jelas pada eksperimen volumetri apabila rasio tetapan ionisasinya memenuhi kriteria ....',
      options: [
        '$K_{a1} / K_{a2} \\ge 10^4$',
        '$K_{a1} \\approx K_{a2}$',
        '$K_{a1} / K_{a2} \\le 10$',
        '$K_{a2} > K_{a1}$',
      ],
      correctAnswer: 0,
      explanation: 'Agar dua lonjakan pH pada kurva titrasi poliprotik terlihat terpisah tegas tanpa saling tumpang tindih, tetapan ionisasi pertama harus jauh lebih besar daripada tetapan ionisasi kedua dengan rasio minimal $\\mathbf{K_{a1} / K_{a2} \\ge 10^4}$ (selisih $\\Delta\\text{p}K_a \\ge 4$). Jika rasionya terlalu dekat, kedua tahap ionisasi akan terjadi serempak sehingga kurva titrasi hanya memperlihatkan satu lonjakan yang landai.',
    },
    {
      id: 'cp-109-core5-q3',
      type: 'true_false',
      question: 'Spesi kimia dominan yang terdapat di dalam larutan pada titik ekuivalen pertama titrasi asam diprotik $\\ce{H2A}$ dengan $\\ce{NaOH}$ adalah ion amfiprotik $\\ce{HA-}$.',
      correctAnswer: true,
      explanation: 'Benar. Pada titik ekuivalen pertama, seluruh molekul $\\ce{H2A}$ telah bereaksi habis dengan $1$ ekuivalen $\\ce{OH-}$ menghasilkan garam amfiprotik $\\ce{NaHA}$. Di dalam air, ion $\\ce{HA-}$ dapat bertindak sekaligus sebagai asam maupun basa, dan nilai pH-nya diestimasi melalui formula rata-rata: $\\text{pH} \\approx \\frac{1}{2}(\\text{p}K_{a1} + \\text{p}K_{a2})$.',
    },
  ],

  // =========================================================================
  // PENGAYAAN HOTS: Leveling Effect Pelarut & Asas HSAB Pearson
  // =========================================================================
  'pengayaan-teori-asam-basa-lanjut-dan-solusi-kuadratik-eksak': [
    {
      id: 'cp-109-core6-q1',
      type: 'true_false',
      question: 'Di dalam pelarut air, larutan asam perklorat ($\\ce{HClO4}$) dan asam klorida ($\\ce{HCl}$) menunjukkan kekuatan asam yang sama persis akibat adanya efek perataan pelarut (*leveling effect*) oleh air.',
      correctAnswer: true,
      explanation: 'Benar. Air adalah basa yang cukup kuat untuk mendeprotonasi seluruh asam kuat secara kuantitatif ($100\\%$). Akibatnya, spesies asam paling kuat yang dapat eksis secara termodinamika di dalam pelarut air hanyalah ion hidronium ($\\ce{H3O+}$). Perbedaan kekuatan intrinsik antara $\\ce{HClO4}$ dan $\\ce{HCl}$ baru dapat dibedakan (diferensiasi) jika menggunakan pelarut yang lebih sukar menerima proton seperti asam asetat glasial.',
    },
    {
      id: 'cp-109-core6-q2',
      type: 'multiple_choice',
      question: 'Berdasarkan Teori Asam-Basa Keras-Lunak (HSAB) Pearson, ion perak $\\ce{Ag+}$ (yang merupakan asam lunak berukuran relatif besar dan sangat terpolarisasi) akan membentuk ikatan paling kuat dan endapan paling sukar larut ($K_{sp}$ terkecil) jika bereaksi dengan anion basa ....',
      options: [
        '$\\ce{F-}$ (basa keras)',
        '$\\ce{OH-}$ (basa keras)',
        '$\\ce{I-}$ (basa lunak)',
        '$\\ce{NO3-}$ (basa keras)',
      ],
      correctAnswer: 2,
      explanation: 'Asas Fundamental HSAB menyatakan: "Asam keras lebih menyukai basa keras (ikatan didominasi gaya elektrostatik ionik), sedangkan asam lunak lebih menyukai basa lunak (ikatan didominasi tumpang-tindih kovalen polarisabel)". Karena $\\ce{Ag+}$ adalah asam lunak dan $\\ce{I-}$ adalah basa lunak yang mudah terpolarisasi awan elektronnya, ikatan kovalen $\\ce{Ag-I}$ luar biasa stabil sehingga kelarutan $\\ce{AgI}$ di dalam air sangat rendah ($K_{sp} \\approx 8.5 \\times 10^{-17}$) dibandingkan $\\ce{AgF}$ yang sangat mudah larut.',
    },
  ],
};
