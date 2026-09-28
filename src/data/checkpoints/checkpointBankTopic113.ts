import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_113: Record<string, CheckpointQuizItem[]> = {
  // =========================================================================
  // PRASYARAT 1: Satuan Konsentrasi Kimia Fisik: Fraksi Mol (X) & Molalitas (m)
  // =========================================================================
  'satuan-konsentrasi-fraksi-mol-dan-molalitas': [
    {
      id: 'cp-113-prereq1-q1',
      type: 'multiple_choice',
      question: 'Alasan utama mengapa satuan molalitas ($m$) dan fraksi mol ($X$) digunakan dalam perhitungan sifat koligatif larutan (seperti ebulioskopi dan krioskopi), dan bukan molaritas ($M$), adalah ....',
      options: [
        'Nilai molaritas selalu terlalu kecil untuk diukur secara akurat',
        'Molalitas dan fraksi mol berbasis massa sehingga nilainya invarian (tidak berubah) terhadap perubahan temperatur',
        'Molaritas hanya dapat digunakan untuk zat terlarut yang berwujud gas',
        'Molalitas selalu bernilai lebih besar daripada molaritas',
      ],
      correctAnswer: 1,
      explanation: 'Molaritas berbasis volume total larutan ($V$), yang mengalami pemuaian atau penyusutan termal ketika suhu larutan berubah. Sebaliknya, molalitas dan fraksi mol berbasis massa pelarut/zat yang kekal terhadap perubahan suhu, sehingga nilainya konstan pada suhu berapa pun dan sangat presisi untuk perhitungan kenaikan titik didih dan penurunan titik beku.',
    },
    {
      id: 'cp-113-prereq1-q2',
      type: 'true_false',
      question: 'Jumlah fraksi mol zat terlarut ($X_t$) dan fraksi mol zat pelarut ($X_p$) dalam suatu larutan biner selalu sama dengan satu ($X_t + X_p = 1$).',
      correctAnswer: true,
      explanation: 'Benar. Fraksi mol menyatakan perbandingan mol suatu komponen terhadap jumlah mol total seluruh komponen ($X_t = \\frac{n_t}{n_t + n_p}$ dan $X_p = \\frac{n_p}{n_t + n_p}$), sehingga total seluruh fraksi mol komponen dalam sistem selalu tepat sama dengan 1.',
    },
    {
      id: 'cp-113-prereq1-q3',
      type: 'true_false',
      question: 'Pada larutan berair yang sangat encer, nilai molalitas ($m$) larutan bernilai hampir sama persis dengan nilai molaritasnya ($M$).',
      correctAnswer: true,
      explanation: 'Benar. Karena massa jenis air murni $\\rho \\approx 1.00\\text{ g/mL}$ ($1\\text{ Liter}$ air memiliki massa $1\\text{ kg}$), pada kondisi larutan sangat encer massa zat terlarut dapat diabaikan sehingga $1\\text{ Liter}$ larutan mengandung sekitar $1\\text{ kg}$ pelarut air ($M \\approx m$).',
    },
  ],

  // =========================================================================
  // PRASYARAT 2: Dasar Termodinamika: Potensial Kimia (μ) & Entropi Pencampuran
  // =========================================================================
  'potensial-kimia-dan-dasar-termodinamika-koligatif': [
    {
      id: 'cp-113-prereq2-q1',
      type: 'multiple_choice',
      question: 'Suatu sifat fisik larutan digolongkan sebagai **sifat koligatif** apabila sifat tersebut ....',
      options: [
        'Semata-mata bergantung pada jumlah partikel zat terlarut, bukan pada jenis atau identitas kimiawi zat terlarut',
        'Sangat bergantung pada warna, rasa, dan keelektronegatifan zat terlarut',
        'Hanya berlaku untuk larutan asam kuat dan basa kuat',
        'Mengharuskan zat terlarut mudah menguap ke udara',
      ],
      correctAnswer: 0,
      explanation: 'Sifat koligatif berakar dari kata Latin *colligatus* (bergantung pada kolektivitas). Sifat-sifat ini (penurunan tekanan uap, kenaikan titik didih, penurunan titik beku, tekanan osmotik) hanya ditentukan oleh jumlah atau konsentrasi partikel zat terlarut di dalam pelarut, terlepas dari apakah zat itu berupa gula, urea, atau garam.',
    },
    {
      id: 'cp-113-prereq2-q2',
      type: 'true_false',
      question: 'Penambahan zat terlarut non-volatile ke dalam pelarut murni menyebabkan potensial kimia fasa cair ($\\mu_{\\text{cair}}$) turun dan derajat ketidakteraturan (entropi) larutan meningkat.',
      correctAnswer: true,
      explanation: 'Benar. Sesuai termodinamika larutan, $\\mu_A(l) = \\mu_A^\\circ(l) + RT \\ln X_A$. Karena $X_A < 1$, nilai $\\ln X_A < 0$, sehingga $\\mu_A(l) < \\mu_A^\\circ(l)$. Penurunan potensial kimia dan kenaikan entropi pencampuran ini menstabilkan fasa cair, sehingga rentang wujud cair meluas (titik didih naik dan titik beku turun).',
    },
    {
      id: 'cp-113-prereq2-q3',
      type: 'true_false',
      question: 'Larutan glukosa $0.1\\text{ m}$ dan larutan sukrosa $0.1\\text{ m}$ di dalam air akan memiliki kenaikan titik didih ($\\Delta T_b$) yang berbeda karena massa molar sukrosa ($342\\text{ g/mol}$) jauh lebih besar daripada glukosa ($180\\text{ g/mol}$).',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Identitas Zat pada Sifat Koligatif). Sifat koligatif HANYA bergantung pada jumlah partikel per satuan pelarut. Karena kedua larutan memiliki molalitas yang sama ($0.1\\text{ m}$) dan keduanya adalah non-elektrolit ($i = 1$), keduanya memiliki jumlah partikel yang persis sama di dalam larutan, sehingga nilai $\\Delta T_b$ keduanya sama persis ($\\Delta T_b = 0.1 \\times 0.52 = 0.052^\\circ\\text{C}$).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 1: Penurunan Tekanan Uap Jenuh (ΔP) & Formulasi Hukum Raoult
  // =========================================================================
  'hukum-raoult-dan-penurunan-tekanan-uap-jenuh': [
    {
      id: 'cp-113-core1-q1',
      type: 'multiple_choice',
      question: 'Tekanan uap jenuh air murni pada suhu $25^\\circ\\text{C}$ adalah $23.76\\text{ mmHg}$. Jika ke dalam air dilarutkan suatu zat terlarut non-volatile hingga fraksi mol zat terlarutnya $X_t = 0.10$, maka besar tekanan uap larutan ($P$) dan penurunan tekanan uapnya ($\\Delta P$) berturut-turut adalah ....',
      options: [
        '$P = 23.76\\text{ mmHg}$ dan $\\Delta P = 0\\text{ mmHg}$',
        '$P = 21.384\\text{ mmHg}$ dan $\\Delta P = 2.376\\text{ mmHg}$',
        '$P = 2.376\\text{ mmHg}$ dan $\\Delta P = 21.384\\text{ mmHg}$',
        '$P = 25.00\\text{ mmHg}$ dan $\\Delta P = 1.24\\text{ mmHg}$',
      ],
      correctAnswer: 1,
      explanation: 'Sesuai Hukum Raoult: $\\Delta P = X_t \\cdot P^\\circ = 0.10 \\times 23.76\\text{ mmHg} = 2.376\\text{ mmHg}$. Tekanan uap larutan: $P = P^\\circ - \\Delta P = X_p \\cdot P^\\circ = (1 - 0.10) \\times 23.76 = 21.384\\text{ mmHg}$.',
    },
    {
      id: 'cp-113-core1-q2',
      type: 'true_false',
      question: 'Semakin banyak zat terlarut non-volatile yang ditambahkan ke dalam suatu pelarut, maka tekanan uap jenuh larutan ($P$) akan semakin tinggi.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Arah Tekanan Uap Larutan). Semakin banyak zat terlarut yang ditambahkan, fraksi mol pelarut ($X_p$) semakin kecil dan semakin banyak molekul pelarut di permukaan cairan yang terhalang untuk menguap. Akibatnya, tekanan uap larutan ($P$) SEMAKIN RENDAH, dan penurunan tekanan uapnya ($\\Delta P$) SEMAKIN BESAR.',
    },
    {
      id: 'cp-113-core1-q3',
      type: 'multiple_choice',
      question: 'Penurunan tekanan uap jenuh larutan ($\\Delta P$) secara mikroskopis disebabkan oleh ....',
      options: [
        'Molekul pelarut bereaksi secara kimiawi membentuk endapan gas',
        'Sebagian area permukaan cairan ditempati oleh partikel zat terlarut non-volatile sehingga menghalangi molekul pelarut untuk melompat menguap ke udara',
        'Suhu cairan turun secara spontan saat zat terlarut dimasukkan',
        'Tekanan atmosfer di luar wadah meningkat mendadak',
      ],
      correctAnswer: 1,
      explanation: 'Pada permukaan cairan larutan, sebagian luas antarmuka cairan-udara ditempati oleh partikel zat terlarut non-volatile. Efek penghalangan fisik (*steric barrier*) ini menurunkan laju penguapan molekul pelarut, sehingga pada keadaan setimbang jumlah molekul uap di atas cairan berkurang dan tekanan uap larutan menjadi lebih rendah dibanding pelarut murni.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 2: Kenaikan Titik Didih (ΔTb) & Penurunan Titik Beku (ΔTf)
  // =========================================================================
  'kenaikan-titik-didih-dan-penurunan-titik-beku': [
    {
      id: 'cp-113-core2-q1',
      type: 'multiple_choice',
      question: 'Larutan $1.0\\text{ molal}$ glukosa di dalam pelarut air murni ($K_b = 0.52^\\circ\\text{C/m}$, $K_f = 1.86^\\circ\\text{C/m}$) pada tekanan $1\\text{ atm}$ akan mendidih dan membeku pada suhu ....',
      options: [
        'Mendidih pada $100.00^\\circ\\text{C}$ dan membeku pada $0.00^\\circ\\text{C}$',
        'Mendidih pada $100.52^\\circ\\text{C}$ dan membeku pada $-1.86^\\circ\\text{C}$',
        'Mendidih pada $0.52^\\circ\\text{C}$ dan membeku pada $1.86^\\circ\\text{C}$',
        'Mendidih pada $99.48^\\circ\\text{C}$ dan membeku pada $+1.86^\\circ\\text{C}$',
      ],
      correctAnswer: 1,
      explanation: 'Kenaikan titik didih $\\Delta T_b = m \\cdot K_b = 1.0 \\times 0.52 = 0.52^\\circ\\text{C}$, sehingga titik didih larutan $T_b = 100^\\circ\\text{C} + 0.52^\\circ\\text{C} = 100.52^\\circ\\text{C}$. Penurunan titik beku $\\Delta T_f = m \\cdot K_f = 1.0 \\times 1.86 = 1.86^\\circ\\text{C}$, sehingga titik beku larutan $T_f = 0^\\circ\\text{C} - 1.86^\\circ\\text{C} = -1.86^\\circ\\text{C}$.',
    },
    {
      id: 'cp-113-core2-q2',
      type: 'true_false',
      question: 'Nilai tetapan kenaikan titik didih molal ($K_b$) dan tetapan penurunan titik beku molal ($K_f$) hanya bergantung pada jenis pelarutnya, dan sama sekali tidak bergantung pada jenis zat terlarutnya.',
      correctAnswer: true,
      explanation: 'Benar. Nilai $K_b$ dan $K_f$ adalah sifat termodinamika intrinsik pelarut (ditentukan oleh massa molar pelarut, titik didih/beku murni, serta entalpi penguapan/peleburan pelarut). Nilai $K_b$ air murni selalu $0.52^\\circ\\text{C/m}$ dan $K_f$ air selalu $1.86^\\circ\\text{C/m}$, apapun zat terlarut yang dimasukkan.',
    },
    {
      id: 'cp-113-core2-q3',
      type: 'true_false',
      question: 'Pada diagram fasa P-T, kurva kesetimbangan cair-gas larutan berada di sebelah kiri (atas) dari kurva pelarut murni.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Posisi Diagram Fasa P-T). Kurva penguapan (cair-gas) larutan berada DI BAWAH (sebelah kanan) dari kurva pelarut murni karena tekanan uap larutan lebih rendah pada setiap suhu. Akibatnya, kurva tersebut memotong garis tekanan $1\\text{ atm}$ pada temperatur yang lebih tinggi ($T_b > T_b^\\circ$, bergeser ke kanan).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 3: Tekanan Osmotik (Π) & Osmosis Balik (Reverse Osmosis)
  // =========================================================================
  'tekanan-osmotik-hukum-van-t-hoff-dan-osmosis-balik': [
    {
      id: 'cp-113-core3-q1',
      type: 'multiple_choice',
      question: 'Bila sel darah merah manusia dimasukkan ke dalam air suling murni (aquades), peristiwa fisiologis yang akan terjadi pada sel darah tersebut adalah ....',
      options: [
        'Sel darah tidak mengalami perubahan bentuk karena membran sel bersifat kaku',
        'Air berosmosis masuk ke dalam sel darah karena cairan sel hipertonik terhadap air murni, menyebabkan sel membengkak dan akhirnya pecah (hemolisis)',
        'Air dari dalam sel tersedot keluar menyebabkan sel mengerut (krenasi)',
        'Sel darah mengendap dan mengkristal seketika',
      ],
      correctAnswer: 1,
      explanation: 'Air suling murni bersifat sangat hipotonik ($\\Pi \\approx 0$) terhadap cairan sitoplasma sel darah merah ($\\Pi \\approx 7.7\\text{ atm}$). Akibatnya, molekul air berdifusi masuk secara spontan menembus membran semipermeabel sel ke arah larutan lebih pekat, hingga tekanan turgor internal melampaui kekuatan membran dan memecahkan sel (hemolisis/lisis).',
    },
    {
      id: 'cp-113-core3-q2',
      type: 'multiple_choice',
      question: 'Prinsip utama teknologi pemurnian air laut (*desalinasi*) menggunakan metode Osmosis Balik (*Reverse Osmosis* / RO) adalah ....',
      options: [
        'Memberikan medan listrik kuat untuk menarik ion natrium dan klorida ke elektroda',
        'Mengerahkan tekanan mekanis luar pada air laut yang lebih besar daripada tekanan osmotiknya ($P_{\\text{luar}} > \\Pi$), sehingga molekul air murni dipaksa menembus membran semipermeabel meninggalkan garam terlarut',
        'Memanaskan air laut hingga mendidih pada suhu $100^\\circ\\text{C}$ lalu mengembunkannya',
        'Menambahkan tawas untuk mengendapkan ion-ion garam',
      ],
      correctAnswer: 1,
      explanation: 'Pada osmosis normal, air murni mengalir spontan ke larutan pekat. Pada Reverse Osmosis, pompa tekanan tinggi memberikan tekanan eksternal yang melampaui tekanan osmotik alami air laut ($P > \\Pi$), sehingga membalik arah aliran: molekul air murni dipaksa menembus membran nano ke arah fasa air tawar, menghasilkan air minum segar bebas garam mineral.',
    },
    {
      id: 'cp-113-core3-q3',
      type: 'true_false',
      question: 'Cairan infus medis standar yang dimasukkan ke dalam pembuluh darah pasien harus diformulasikan tepat isotonik dengan cairan plasma darah.',
      correctAnswer: true,
      explanation: 'Benar. Jika cairan infus bersifat hipotonik, sel darah akan menyerap air berlebih dan pecah (hemolisis). Sebaliknya jika hipertonik, sel darah akan kehilangan air dan mengerut kisut (krenasi). Oleh karena itu, cairan infus (seperti larutan salin normal $\\ce{NaCl } 0.9\\%$ b/v atau glukosa $5\\%$) diformulasikan tepat isotonik dengan plasma darah manusia ($\\Pi \\approx 7.7\\text{ atm}$).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 4: Sifat Koligatif Larutan Elektrolit & Faktor van t Hoff (i)
  // =========================================================================
  'sifat-koligatif-larutan-elektrolit-dan-faktor-van-t-hoff': [
    {
      id: 'cp-113-core4-q1',
      type: 'multiple_choice',
      question: 'Suatu larutan garam kalsium klorida ($\\ce{CaCl2}$) berkonsentrasi $0.10\\text{ m}$ terionisasi dengan derajat ionisasi $\\alpha = 0.80$. Nilai faktor van t Hoff ($i$) dan perkiraan penurunan titik beku ($\\Delta T_f$) larutan tersebut di dalam air ($K_f = 1.86^\\circ\\text{C/m}$) berturut-turut adalah ....',
      options: [
        '$i = 1.00$ dan $\\Delta T_f = 0.186^\\circ\\text{C}$',
        '$i = 2.60$ dan $\\Delta T_f = 0.4836^\\circ\\text{C}$',
        '$i = 3.00$ dan $\\Delta T_f = 0.5580^\\circ\\text{C}$',
        '$i = 1.80$ dan $\\Delta T_f = 0.3348^\\circ\\text{C}$',
      ],
      correctAnswer: 1,
      explanation: 'Garam $\\ce{CaCl2}$ terurai menjadi $1\\text{ ion } \\ce{Ca^2+} + 2\\text{ ion } \\ce{Cl-}$ ($n = 3$). Nilai faktor van t Hoff: $i = 1 + (n - 1)\\alpha = 1 + (3 - 1)(0.80) = 1 + 1.60 = 2.60$. Penurunan titik beku: $\\Delta T_f = m \\cdot K_f \\cdot i = 0.10 \\times 1.86 \\times 2.60 = 0.4836^\\circ\\text{C}$.',
    },
    {
      id: 'cp-113-core4-q2',
      type: 'multiple_choice',
      question: 'Empat larutan berikut dibuat dengan konsentrasi molal yang sama ($0.05\\text{ m}$): (1) Glukosa ($\\ce{C6H12O6}$), (2) Garam dapur ($\\ce{NaCl}$), (3) Barium klorida ($\\ce{BaCl2}$), (4) Natrium fosfat ($\\ce{Na3PO4}$). Jika seluruh elektrolit terionisasi sempurna ($\\alpha = 1$), urutan larutan dari yang memiliki titik didih PALING RENDAH ke PALING TINGGI adalah ....',
      options: [
        '$(4) < (3) < (2) < (1)$',
        '$(1) < (2) < (3) < (4)$',
        '$(1) < (3) < (2) < (4)$',
        'Semua larutan memiliki titik didih yang sama karena konsentrasi awalnya sama',
      ],
      correctAnswer: 1,
      explanation: 'Nilai faktor van t Hoff untuk $\\alpha = 1$: Glukosa ($i=1$), $\\ce{NaCl}$ ($i=2$), $\\ce{BaCl2}$ ($i=3$), $\\ce{Na3PO4}$ ($i=4$). Kenaikan titik didih $\\Delta T_b = m \\cdot K_b \\cdot i \\propto i$. Makin besar nilai $i$, makin tinggi kenaikan titik didihnya, dan makin tinggi titik didih larutannya: $T_b(\\text{glukosa}) < T_b(\\ce{NaCl}) < T_b(\\ce{BaCl2}) < T_b(\\ce{Na3PO4})$.',
    },
    {
      id: 'cp-113-core4-q3',
      type: 'true_false',
      question: 'Pengukuran penurunan titik beku larutan elektrolit di laboratorium pada konsentrasi nyata sering kali menghasilkan nilai faktor van t Hoff ($i$) yang sedikit lebih kecil daripada nilai teoretisnya karena adanya pembentukan pasangan ion (*ion pairing*).',
      correctAnswer: true,
      explanation: 'Benar. Menurut teori interaksi elektrostatik ionik Debye-Hückel, ion-ion berlawanan muatan dalam larutan nyata saling tarik-menarik membentuk pasangan ion sesaat (*ion pairs*). Keberadaan pasangan ion ini mengurangi jumlah partikel bebas kinetik independen dalam larutan, sehingga $i_{\\text{eksperimen}} < i_{\\text{teoretis}}$ (misal untuk $\\ce{NaCl } 0.1\\text{ m}$, $i \\approx 1.87$, bukan $2.00$).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 5: Penentuan Massa Molar & Osmometri Makromolekul
  // =========================================================================
  'penentuan-massa-molar-dan-osmometri-makromolekul': [
    {
      id: 'cp-113-core5-q1',
      type: 'multiple_choice',
      question: 'Metode sifat koligatif yang paling tepat, peka, dan aman digunakan untuk menentukan massa molar ($M_r$) senyawa makromolekul (seperti protein, enzim, polimer sintetis, dan DNA) adalah ....',
      options: [
        'Kenaikan titik didih (ebulioskopi)',
        'Penurunan tekanan uap (Hukum Raoult)',
        'Penurunan titik beku (krioskopi)',
        'Tekanan osmotik (osmometri membran)',
      ],
      correctAnswer: 3,
      explanation: 'Makromolekul memiliki $M_r$ sangat besar ($10.000 - 1.000.000\\text{ g/mol}$) sehingga dalam larutan encer nilai molalitasnya amat kecil ($10^{-4} - 10^{-6}\\text{ m}$). Nilai $\\Delta P, \\Delta T_b,$ dan $\\Delta T_f$ sangat mikroskopis (fraksi seperseribu derajat) dan pemanasan dapat merusak struktur protein (denaturasi). Sebaliknya, tekanan osmotik menghasilkan respon terukur yang sangat besar (beberapa sentimeter kolom cairan) pada suhu kamar, menjadikannya metode paling akurat.',
    },
    {
      id: 'cp-113-core5-q2',
      type: 'multiple_choice',
      question: 'Sebanyak $1.80\\text{ gram}$ suatu senyawa kovalen non-elektrolit dilarutkan ke dalam $250\\text{ gram}$ air ($K_f = 1.86^\\circ\\text{C/m}$). Larutan tersebut membeku pada suhu $-0.0744^\\circ\\text{C}$. Massa molar ($M_r$) senyawa tersebut adalah ....',
      options: [
        '$90\\text{ g/mol}$',
        '$180\\text{ g/mol}$',
        '$342\\text{ g/mol}$',
        '$60\\text{ g/mol}$',
      ],
      correctAnswer: 1,
      explanation: 'Penurunan titik beku $\\Delta T_f = 0.0744^\\circ\\text{C}$. Rumus: $\\Delta T_f = \\frac{\\text{massa}}{M_r} \\times \\frac{1000}{P} \\times K_f \\implies 0.0744 = \\frac{1.80}{M_r} \\times \\frac{1000}{250} \\times 1.86 = \\frac{13.392}{M_r} \\implies M_r = \\frac{13.392}{0.0744} = \\mathbf{180\\text{ g/mol}}$ (sesuai massa molar glukosa).',
    },
    {
      id: 'cp-113-core5-q3',
      type: 'true_false',
      question: 'Pada penentuan massa molar polimer dengan osmometri membran nyata, plot regresi linear $\\frac{\\Pi}{C}$ diekstrapolasikan ke konsentrasi nol ($C \\to 0$) untuk menghilangkan bias interaksi termodinamika polimer-pelarut (koefisien virial $B$).',
      correctAnswer: true,
      explanation: 'Benar. Menurut persamaan virial $\\frac{\\Pi}{C} = \\frac{RT}{M_n} + BC$, pada konsentrasi nol ($C \\to 0$), suku interaksi polimer-pelarut $BC$ menjadi nol, sehingga nilai titik potong sumbu-Y (*intercept*) murni mencerminkan massa molar rata-rata jumlah polimer: $M_n = \\frac{RT}{\\text{Intercept}}$.',
    },
  ],
};
