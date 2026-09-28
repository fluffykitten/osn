import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_110: Record<string, CheckpointQuizItem[]> = {
  // =========================================================================
  // PRASYARAT 1: Pasangan Asam-Basa Konjugasi & Kesetimbangan Asam/Basa Lemah
  // =========================================================================
  'prasyarat-konjugasi-dan-kesetimbangan-lemah': [
    {
      id: 'cp-110-prereq1-q1',
      type: 'true_false',
      question: 'Larutan yang dibuat dengan mencampurkan larutan asam kuat $\\ce{HCl}$ dengan garam $\\ce{NaCl}$ akan membentuk larutan penyangga (buffer) karena keduanya mengandung ion klorida ($\\ce{Cl-}$) senama.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Komponen Penyangga). Larutan penyangga HANYA dapat terbentuk dari: (1) asam lemah dengan basa konjugasinya, atau (2) basa lemah dengan asam konjugasinya. Asam kuat seperti $\\ce{HCl}$ dan garamnya $\\ce{NaCl}$ TIDAK BISA membentuk larutan penyangga karena ion $\\ce{Cl-}$ merupakan basa konjugasi yang luar biasa lemah (inert) dan tidak mampu menyerap penambahan ion $\\ce{H+}$.',
    },
    {
      id: 'cp-110-prereq1-q2',
      type: 'multiple_choice',
      question: 'Pasangan spesi kimia berikut yang BUKAN merupakan komponen sistem larutan penyangga (buffer) adalah ....',
      options: [
        '$\\ce{CH3COOH}$ dan $\\ce{CH3COONa}$',
        '$\\ce{NH3}$ dan $\\ce{NH4Cl}$',
        '$\\ce{H2CO3}$ dan $\\ce{NaHCO3}$',
        '$\\ce{HNO3}$ dan $\\ce{NaNO3}$',
      ],
      correctAnswer: 3,
      explanation: '$\\ce{HNO3}$ adalah asam kuat dan $\\ce{NaNO3}$ adalah garamnya. Karena asam nitrat terionisasi 100% dan anion $\\ce{NO3-}$ tidak bereaksi dengan ion $\\ce{H+}$, campuran ini tidak memiliki kapasitas aksi penyangga. Pilihan lain adalah buffer asam lemah / basa lemah dengan pasangan konjugasinya.',
    },
    {
      id: 'cp-110-prereq1-q3',
      type: 'true_false',
      question: 'Derajat ionisasi ($\\alpha$) asam asetat di dalam air murni akan anjlok secara drastis jika ke dalam larutan tersebut ditambahkan kristal garam natrium asetat ($\\ce{CH3COONa}$).',
      correctAnswer: true,
      explanation: 'Benar. Berdasarkan Asas Le Chatelier dan Efek Ion Senama (*Common-Ion Effect*), penambahan kristal $\\ce{CH3COONa}$ membanjiri sistem dengan ion asetat ($\\ce{CH3COO-}$). Kesetimbangan ionisasi $\\ce{CH3COOH <=> H+ + CH3COO-}$ terdesak jauh ke arah kiri, sehingga jumlah molekul asam asetat yang terurai menjadi jauh lebih sedikit (nilai $\\alpha$ menurun tajam).',
    },
  ],

  // =========================================================================
  // PRASYARAT 2: Stoikiometri Pembentukan Campuran: Habis Reaksi vs Sisa
  // =========================================================================
  'prasyarat-stoikiometri-reaksi-asam-basa-sisa': [
    {
      id: 'cp-110-prereq2-q1',
      type: 'true_false',
      question: 'Jika $100\\text{ mL}$ larutan $\\ce{CH3COOH } 0.10\\text{ M}$ dicampurkan dengan $100\\text{ mL}$ larutan $\\ce{NaOH } 0.10\\text{ M}$, campuran yang terbentuk merupakan larutan penyangga asam karena menghasilkan garam $\\ce{CH3COONa}$.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Fatal Buffer vs Hidrolisis Garam). Pada campuran tersebut, mol $\\ce{CH3COOH} = 10\\text{ mmol}$ dan mol $\\ce{NaOH} = 10\\text{ mmol}$. Kedua pereaksi TEPAT HABIS BEREAKSI membentuk garam $\\ce{CH3COONa}$. Karena TIDAK ADA sisa asam lemah $\\ce{CH3COOH}$, larutan ini BUKAN larutan penyangga, melainkan sistem HIDROLISIS GARAM yang bersifat basa (pH > 7).',
    },
    {
      id: 'cp-110-prereq2-q2',
      type: 'multiple_choice',
      question: 'Campuran larutan berikut yang akan menghasilkan sistem larutan penyangga (buffer) dengan sifat asam ($\\text{pH} < 7$) setelah reaksi selesai adalah ....',
      options: [
        '$50\\text{ mL } \\ce{HCl } 0.10\\text{ M} + 50\\text{ mL } \\ce{NaOH } 0.10\\text{ M}$',
        '$100\\text{ mL } \\ce{CH3COOH } 0.10\\text{ M} + 50\\text{ mL } \\ce{NaOH } 0.10\\text{ M}$',
        '$50\\text{ mL } \\ce{CH3COOH } 0.10\\text{ M} + 100\\text{ mL } \\ce{NaOH } 0.10\\text{ M}$',
        '$100\\text{ mL } \\ce{NH3 } 0.10\\text{ M} + 50\\text{ mL } \\ce{HCl } 0.10\\text{ M}$',
      ],
      correctAnswer: 1,
      explanation: 'Untuk membentuk larutan buffer asam via reaksi tidak langsung, asam lemah harus BERSISA dan basa kuat harus HABIS (pereaksi pembatas):\n- Mol $\\ce{CH3COOH} = 100 \\times 0.10 = 10\\text{ mmol}$.\n- Mol $\\ce{NaOH} = 50 \\times 0.10 = 5\\text{ mmol}$.\nReaksi menyisakan $5\\text{ mmol } \\ce{CH3COOH}$ dan membentuk $5\\text{ mmol } \\ce{CH3COONa}$, membentuk buffer asam sejati.',
    },
    {
      id: 'cp-110-prereq2-q3',
      type: 'true_false',
      question: 'Untuk membuat larutan penyangga basa melalui reaksi antara larutan basa lemah dan larutan asam kuat, jumlah mol basa lemah mula-mula harus lebih besar daripada jumlah mol asam kuat ($n_{\\text{basa lemah}} > n_{\\text{asam kuat}}$).',
      correctAnswer: true,
      explanation: 'Benar. Asam kuat harus habis bereaksi (sebagai pereaksi pembatas) agar kation asam konjugasi terbentuk, sementara basa lemah harus tetap bersisa. Sisa basa lemah bersama kation asam konjugasi hasil reaksi inilah yang menyusun sistem penyangga basa.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 1: Mekanisme Pertahanan pH & Persamaan Henderson-Hasselbalch
  // =========================================================================
  'mekanisme-buffer-dan-henderson-hasselbalch': [
    {
      id: 'cp-110-core1-q1',
      type: 'true_false',
      question: 'Larutan penyangga memiliki kemampuan untuk mempertahankan nilai pH secara mutlak tidak berubah sedikit pun (perubahan $\\Delta\\text{pH} = 0.00$) meskipun ke dalamnya ditambahkan asam kuat dalam jumlah yang sangat banyak.',
      correctAnswer: false,
      explanation: 'Salah. Larutan penyangga hanya mempertahankan pH agar "relatif stabil" (perubahan pH sangat kecil) terhadap penambahan SEDIKIT asam kuat, basa kuat, atau pengenceran. Jika asam kuat yang ditambahkan melebihi kapasitas buffer (menghabiskan seluruh basa konjugasi), sistem penyangga akan rusak dan nilai pH akan anjlok drastis.',
    },
    {
      id: 'cp-110-core1-q2',
      type: 'multiple_choice',
      question: 'Ke dalam $1\\text{ Liter}$ larutan buffer asam asetat ($\\ce{CH3COOH / CH3COONa}$) ditambahkan $5\\text{ mL}$ larutan asam klorida $\\ce{HCl } 0.10\\text{ M}$. Komponen buffer yang bertugas menetralkan kelebihan ion $\\ce{H+}$ dari $\\ce{HCl}$ adalah ....',
      options: [
        'Molekul asam asetat ($\\ce{CH3COOH}$)',
        'Ion asetat ($\\ce{CH3COO-}$)',
        'Kation natrium ($\\ce{Na+}$)',
        'Pelarut air ($\\ce{H2O}$)',
      ],
      correctAnswer: 1,
      explanation: 'Ion $\\ce{H+}$ yang masuk dari asam kuat akan ditangkap oleh komponen basa konjugasi (ion asetat) menurut reaksi penyerapan:\n$$\\ce{CH3COO-(aq) + H+(aq) -> CH3COOH(aq)}$$\nReaksi ini mengubah ion $\\ce{H+}$ bebas yang sangat asam menjadi molekul asam asetat yang terionisasi sangat sedikit, sehingga pH larutan relatif tidak berubah.',
    },
    {
      id: 'cp-110-core1-q3',
      type: 'true_false',
      question: 'Pengenceran larutan penyangga asam dengan menambahkan akuades hingga volumenya berlipat ganda tidak mengubah nilai pH larutan penyangga tersebut secara signifikan.',
      correctAnswer: true,
      explanation: 'Benar. Berdasarkan persamaan Henderson-Hasselbalch: $\\text{pH} = \\text{p}K_a + \\log\\frac{n_{\\text{basa konjugasi}}}{n_{\\text{asam lemah}}}$. Karena volume larutan terdapat di pembilang dan penyebut konsentrasi ($M = n/V$), faktor volume saling menghilangkan. Penambahan akuades tidak mengubah rasio mol komponen penyangga, sehingga nilai pH tetap konstan.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 2: Kapasitas Buffer Maksimum & Sistem Penyangga Biologis
  // =========================================================================
  'kapasitas-buffer-dan-sistem-penyangga-biologis': [
    {
      id: 'cp-110-core2-q1',
      type: 'true_false',
      question: 'Kapasitas penyangga maksimum suatu larutan buffer asam tercapai ketika konsentrasi asam lemah tepat sama dengan konsentrasi basa konjugasinya ($[\\text{Asam}] = [\\text{Basa Konjugasi}]$), yang menghasilkan $\\text{pH} = \\text{p}K_a$.',
      correctAnswer: true,
      explanation: 'Benar. Ketika $[\\text{Asam}] = [\\text{Basa Konjugasi}]$, nilai $\\log(1) = 0$ sehingga $\\text{pH} = \\text{p}K_a$. Pada titik ini, sistem memiliki cadangan asam dan basa yang seimbang sempurna, sehingga daya tahan terhadap penambahan asam maupun basa berada pada titik optimum tertingginya.',
    },
    {
      id: 'cp-110-core2-q2',
      type: 'multiple_choice',
      question: 'Dalam plasma darah manusia, derajat keasaman dijaga sangat ketat pada rentang fisiologis normal $7.35 - 7.45$. Sistem penyangga utama yang paling berperan dalam menjaga kestabilan pH darah tersebut adalah ....',
      options: [
        '$\\ce{CH3COOH / CH3COO-}$',
        '$\\ce{H2CO3 / HCO3-}$',
        '$\\ce{NH3 / NH4+}$',
        '$\\ce{HCl / Cl-}$',
      ],
      correctAnswer: 1,
      explanation: 'Sistem penyangga karbonat-bikarbonat ($\\ce{H2CO3 / HCO3-}$) merupakan sistem penyangga utama dalam darah. Paru-paru mengontrol kadar $\\ce{CO2}$ (yang setara dengan $\\ce{H2CO3}$), sedangkan ginjal mengatur ekskresi dan reabsorpsi ion bikarbonat ($\\ce{HCO3-}$).',
    },
    {
      id: 'cp-110-core2-q3',
      type: 'true_false',
      question: 'Kondisi asidosis respiratorik pada tubuh manusia terjadi ketika konsentrasi gas $\\ce{CO2}$ dalam darah menurun drastis akibat bernapas terlalu cepat (hiperventilasi).',
      correctAnswer: false,
      explanation: 'Salah (Istilah Terbalik). Hiperventilasi (bernapas sangat cepat) membuang terlalu banyak $\\ce{CO2}$ dari darah. Berdasarkan kesetimbangan $\\ce{CO2 + H2O <=> H2CO3 <=> H+ + HCO3-}$, hilangnya $\\ce{CO2}$ menggeser reaksi ke kiri, mengurangi $[\\ce{H+}]$ dan menaikkan pH di atas 7.45. Kondisi ini disebut ALKALOSIS respiratorik. Sebaliknya, asidosis terjadi jika $\\ce{CO2}$ tertahan (misalnya akibat hipoventilasi).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 3: Sifat Asam-Basa Garam & Reaksi Hidrolisis Kation-Anion
  // =========================================================================
  'klasifikasi-dan-reaksi-hidrolisis-garam': [
    {
      id: 'cp-110-core3-q1',
      type: 'true_false',
      question: 'Garam natrium klorida ($\\ce{NaCl}$) dan kalium nitrat ($\\ce{KNO3}$) tidak mengalami hidrolisis sama sekali di dalam air sehingga menghasilkan larutan dengan $\\text{pH} = 7.00$ pada $25^\\circ\\text{C}$.',
      correctAnswer: true,
      explanation: 'Benar. Kation basa kuat ($\\ce{Na+, K+}$) dan anion asam kuat ($\\ce{Cl-, NO3-}$) memiliki afinitas yang sangat rendah terhadap ion $\\ce{OH-}$ maupun $\\ce{H+}$ dari air. Karena tidak ada pemecahan molekul air (tidak terhidrolisis), konsentrasi $[\\ce{H+}]$ dan $[\\ce{OH-}]$ tetap seimbang murni dari autoionisasi air ($10^{-7}\\text{ M}$).',
    },
    {
      id: 'cp-110-core3-q2',
      type: 'multiple_choice',
      question: 'Garam berikut yang jika dilarutkan ke dalam air murni akan mengalami hidrolisis parsial dan menghasilkan larutan bersifat asam ($\\text{pH} < 7$) adalah ....',
      options: [
        'Natrium asetat ($\\ce{CH3COONa}$)',
        'Kalium klorida ($\\ce{KCl}$)',
        'Amonium klorida ($\\ce{NH4Cl}$)',
        'Barium hidroksida ($\\ce{Ba(OH)2}$)',
      ],
      correctAnswer: 2,
      explanation: 'Amonium klorida ($\\ce{NH4Cl}$) terbentuk dari kation basa lemah ($\\ce{NH4+}$) dan anion asam kuat ($\\ce{Cl-}$). Kation $\\ce{NH4+}$ mengalami hidrolisis parsial:\n$$\\ce{NH4+(aq) + H2O(l) <=> NH3(aq) + H3O+(aq)}$$\nProduksi ion $\\ce{H3O+}$ (atau $\\ce{H+}$) ini menyebabkan larutan garam $\\ce{NH4Cl}$ bersifat asam ($\\text{pH} < 7$).',
    },
    {
      id: 'cp-110-core3-q3',
      type: 'true_false',
      question: 'Pada hidrolisis garam natrium asetat ($\\ce{CH3COONa}$), spesi yang bereaksi dengan molekul air menghasilkan sifat basa adalah kation natrium ($\\ce{Na+}$).',
      correctAnswer: false,
      explanation: 'Salah. Kation $\\ce{Na+}$ berasal dari basa kuat $\\ce{NaOH}$ sehingga bersifat inert (tidak terhidrolisis). Spesi yang bereaksi dengan air adalah anion asetat ($\\ce{CH3COO-}$):\n$$\\ce{CH3COO-(aq) + H2O(l) <=> CH3COOH(aq) + OH-(aq)}$$\nTerbentuknya ion $\\ce{OH-}$ inilah yang memberikan sifat basa pada larutan natrium asetat.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 4: Algoritma Matematis Perhitungan Tetapan Kh & pH Garam
  // =========================================================================
  'perhitungan-ph-garam-terhidrolisis-lengkap': [
    {
      id: 'cp-110-core4-q1',
      type: 'true_false',
      question: 'Untuk larutan garam kalsium asetat $\\ce{Ca(CH3COO)2 } 0.050\\text{ M}$, konsentrasi anion asetat $[\\ce{CH3COO-}]$ yang mengalami hidrolisis tetap bernilai $0.050\\text{ M}$.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Valensi Garam). Kalsium asetat adalah garam polivalen yang terionisasi sempurna melepaskan dua anion asetat per molekul garam: $\\ce{Ca(CH3COO)2(aq) -> Ca^2+(aq) + 2 CH3COO-(aq)}$. Maka konsentrasi anion asetat yang terhidrolisis adalah $2 \\times 0.050\\text{ M} = \\mathbf{0.100\\text{ M}}$. Mengabaikan faktor valensi 2 ini akan menyebabkan galat perhitungan $[\\ce{OH-}]$ sebesar $\\sqrt{2} \\approx 1.41$ kali lipat!',
    },
    {
      id: 'cp-110-core4-q2',
      type: 'multiple_choice',
      question: 'Garam amonium klorida $\\ce{NH4Cl } 0.10\\text{ M}$ dilarutkan dalam air pada $25^\\circ\\text{C}$. Diketahui $K_b \\ce{ NH3} = 1.0 \\times 10^{-5}$ dan $K_w = 1.0 \\times 10^{-14}$. Nilai tetapan hidrolisis ($K_h$) dan nilai pH larutan garam tersebut berturut-turut adalah ....',
      options: [
        '$K_h = 1.0 \\times 10^{-9}$ dan $\\text{pH} = 5.00$',
        '$K_h = 1.0 \\times 10^{-5}$ dan $\\text{pH} = 5.00$',
        '$K_h = 1.0 \\times 10^{-9}$ dan $\\text{pH} = 9.00$',
        '$K_h = 1.0 \\times 10^{-14}$ dan $\\text{pH} = 7.00$',
      ],
      correctAnswer: 0,
      explanation: 'Langkah perhitungan:\n1. $K_h = \\frac{K_w}{K_b} = \\frac{1.0 \\times 10^{-14}}{1.0 \\times 10^{-5}} = \\mathbf{1.0 \\times 10^{-9}}$.\n2. $[\\ce{H+}] = \\sqrt{K_h \\times M_{\\text{garam}}} = \\sqrt{1.0 \\times 10^{-9} \\times 0.10} = \\sqrt{1.0 \\times 10^{-10}} = 1.0 \\times 10^{-5}\\text{ M}$.\n3. $\\text{pH} = -\\log(1.0 \\times 10^{-5}) = \\mathbf{5.00}$.',
    },
    {
      id: 'cp-110-core4-q3',
      type: 'true_false',
      question: 'Nilai tetapan hidrolisis $K_h$ untuk garam yang berasal dari asam lemah dan basa kuat dirumuskan sebagai $K_h = \\frac{K_w}{K_a}$.',
      correctAnswer: true,
      explanation: 'Benar. Pada hidrolisis anion asam lemah: $\\ce{A- + H2O <=> HA + OH-}$, ekspresi kesetimbangannya adalah $K_h = \\frac{[\\ce{HA}][\\ce{OH-}]}{[\\ce{A-}]}$. Mengalikan pembilang dan penyebut dengan $[\\ce{H+}]$ membuktikan bahwa $K_h = \\frac{K_w}{K_a}$.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 5: Efek Ion Senama & Wilayah Buffer pada Kurva Titrasi
  // =========================================================================
  'efek-ion-senama-dan-kurva-ph-titrasi-buffer': [
    {
      id: 'cp-110-core5-q1',
      type: 'true_false',
      question: 'Pada kurva titrasi asam asetat dengan larutan $\\ce{NaOH}$, titik setengah ekuivalen ($V_{\\text{titran}} = \\frac{1}{2} V_{eq}$) menunjukkan kapasitas penyangga terbaik dengan nilai $\\text{pH} = \\text{p}K_a$.',
      correctAnswer: true,
      explanation: 'Benar. Pada titik setengah ekuivalen, tepat 50% asam asetat telah dinetralkan menjadi ion asetat, sehingga $[\\ce{CH3COOH}] = [\\ce{CH3COO-}]$. Berdasarkan persamaan Henderson-Hasselbalch, $\\text{pH} = \\text{p}K_a + \\log(1) = \\text{p}K_a$. Di wilayah ini, kelandaian kurva titrasi paling horizontal (daya tahan perubahan pH paling kuat).',
    },
    {
      id: 'cp-110-core5-q2',
      type: 'multiple_choice',
      question: 'Penambahan kristal natrium format ($\\ce{HCOONa}$) padat ke dalam larutan asam format ($\\ce{HCOOH}$) di dalam bejana akan mengakibatkan ....',
      options: [
        'Nilai pH larutan meningkat dan derajat ionisasi $\\alpha$ mengecil',
        'Nilai pH larutan menurun dan derajat ionisasi $\\alpha$ membesar',
        'Nilai pH larutan menurun tanpa mengubah derajat ionisasi $\\alpha$',
        'Nilai pH dan derajat ionisasi sama sekali tidak berubah',
      ],
      correctAnswer: 0,
      explanation: 'Penambahan ion format ($\\ce{HCOO-}$) senama menggeser kesetimbangan ionisasi $\\ce{HCOOH <=> H+ + HCOO-}$ ke arah kiri. Konsentrasi $[\\ce{H+}]$ bebas berkurang sehingga nilai pH larutan MENINGKAT (kurang asam). Penggeseran ke arah molekul tak terionisasi juga berarti derajat ionisasi $\\alpha$ MENGECIL.',
    },
    {
      id: 'cp-110-core5-q3',
      type: 'true_false',
      question: 'Nilai pH larutan garam amonium sianida ($\\ce{NH4CN}$) yang mengalami hidrolisis total dipengaruhi secara signifikan oleh konsentrasi molaritas garam tersebut di dalam air.',
      correctAnswer: false,
      explanation: 'Salah (Keunikan Hidrolisis Total). Rumus ion hidrogen pada hidrolisis total garam dari asam lemah dan basa lemah adalah $[\\ce{H+}] = \\sqrt{\\frac{K_w \\times K_a}{K_b}}$. Variabel konsentrasi garam ($M_g$) sama sekali TIDAK MUNCUL dalam persamaan. Artinya, pH larutan garam hidrolisis total bersifat INDEPENDEN terhadap pengenceran volume atau kepekatan garam!',
    },
  ],
};
