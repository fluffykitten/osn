/**
 * checkpointBankTopic106.ts
 * Bank Soal Uji Pemahaman Cepat (Concept Checkpoint Quiz)
 * Topik 106: Termokimia SMA (Entalpi, Kalorimetri, Hukum Hess & Energi Ikatan)
 * 
 * Standar: Konseptual, Membongkar Miskonsepsi, Pilihan Ganda & True/False
 */

import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_106: Record<string, CheckpointQuizItem[]> = {
  // =========================================================================
  // PRASYARAT 1: Asas Black, Kalor Jenis & Hukum I Termodinamika
  // =========================================================================
  'prasyarat-asas-kekekalan-energi': [
    {
      id: 'cp-106-prereq1-q1',
      type: 'true_false',
      question: 'Berdasarkan Hukum I Termodinamika (Kekekalan Energi), ketika suatu sistem gas menyerap kalor dari lingkungan sebesar $100\\text{ J}$ dan secara bersamaan melakukan kerja ekspansi sebesar $100\\text{ J}$ ke lingkungan, maka perubahan energi dalam sistem ($\\Delta U$) bernilai nol.',
      correctAnswer: true,
      explanation: 'Benar. Menurut Hukum I Termodinamika, $\\Delta U = q + w$ (atau $\\Delta U = q - w_{\\text{oleh sistem}}$). Karena kalor masuk $q = +100\\text{ J}$ dan kerja dilakukan ke luar $w = -100\\text{ J}$, maka $\\Delta U = +100 - 100 = 0\\text{ J}$. Energi dalam sistem tidak mengalami perubahan neto.',
    },
    {
      id: 'cp-106-prereq1-q2',
      type: 'multiple_choice',
      question: 'Dua buah benda logam A dan B memiliki massa yang sama ($100\\text{ g}$) dan dipanaskan dengan jumlah kalor yang persis sama. Jika kalor jenis logam A ($c_A = 0.90\\text{ J/(g}\\cdot^\\circ\\text{C)}$) dua kali lebih besar daripada kalor jenis logam B ($c_B = 0.45\\text{ J/(g}\\cdot^\\circ\\text{C)}$), pernyataan yang benar mengenai kenaikan suhu keduanya ($\\Delta T$) adalah ....',
      options: [
        'Kenaikan suhu logam A sama dengan kenaikan suhu logam B',
        'Kenaikan suhu logam A dua kali lebih besar daripada logam B',
        'Kenaikan suhu logam B dua kali lebih besar daripada logam A',
        'Logam A mengalami kenaikan suhu empat kali lebih besar daripada logam B',
      ],
      correctAnswer: 2,
      explanation: 'Rumus kalor adalah $q = m \\cdot c \\cdot \\Delta T \\implies \\Delta T = \\frac{q}{m \\cdot c}$. Untuk massa dan kalor yang sama, kenaikan suhu berbanding terbalik dengan kalor jenis ($\\Delta T \\propto 1/c$). Karena $c_B$ bernilai setengah dari $c_A$, maka logam B akan mengalami kenaikan suhu dua kali lebih besar daripada logam A.',
    },
    {
      id: 'cp-106-prereq1-q3',
      type: 'true_false',
      question: 'Nilai kalor ($q$) dan kerja ($w$) merupakan fungsi keadaan (state function), artinya nilainya hanya bergantung pada keadaan awal dan akhir sistem tanpa memedulikan lintasan proses.',
      correctAnswer: false,
      explanation: 'Salah. Kalor ($q$) dan kerja ($w$) adalah fungsi proses / fungsi jalan (path function), bukan fungsi keadaan. Nilai keduanya sangat bergantung pada bagaimana lintasan proses dijalankan. Yang merupakan fungsi keadaan sejati adalah Energi Dalam ($U$), Entalpi ($H$), Entropi ($S$), dan Energi Bebas Gibbs ($G$).',
    },
  ],

  // =========================================================================
  // PRASYARAT 2: Hubungan Mol dengan Persamaan Termokimia
  // =========================================================================
  'prasyarat-stoikiometri-entalpi': [
    {
      id: 'cp-106-prereq2-q1',
      type: 'multiple_choice',
      question: 'Diberikan persamaan termokimia sintesis amonia:\n$$\\ce{N2(g) + 3 H2(g) -> 2 NH3(g)} \\quad \\Delta H = -92.2\\text{ kJ}$$\nJika dalam suatu reaktor terbentuk $0.50\\text{ mol}$ gas $\\ce{NH3}$, jumlah kalor yang dilepaskan ke lingkungan adalah ....',
      options: [
        '$92.2\\text{ kJ}$',
        '$46.1\\text{ kJ}$',
        '$23.05\\text{ kJ}$',
        '$184.4\\text{ kJ}$',
      ],
      correctAnswer: 2,
      explanation: 'Nilai $\\Delta H = -92.2\\text{ kJ}$ berlaku untuk koefisien reaksi, yaitu pembentukan $2\\text{ mol } \\ce{NH3}$. Jika hanya terbentuk $0.50\\text{ mol } \\ce{NH3}$, maka kalor yang dilepaskan adalah: $\\frac{0.50\\text{ mol}}{2.0\\text{ mol}} \\times 92.2\\text{ kJ} = \\mathbf{23.05\\text{ kJ}}$.',
    },
    {
      id: 'cp-106-prereq2-q2',
      type: 'true_false',
      question: 'Jika suatu persamaan termokimia dikalikan dengan faktor 2, maka nilai perubahan entalpi ($\\Delta H$) reaksi tersebut harus dikalikan 2, namun jika arah persamaan reaksinya dibalik, tanda nilai $\\Delta H$ tetap tidak berubah.',
      correctAnswer: false,
      explanation: 'Salah. Berdasarkan Hukum Laplace, jika arah persamaan reaksi dibalik, tanda nilai perubahan entalpi HARUS berganti tanda (+ menjadi -, atau - menjadi +) karena arah perpindahan kalor sistem berkebalikan.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 1: Sistem, Lingkungan & Profil Energi (Eksoterm vs Endoterm)
  // =========================================================================
  'sistem-lingkungan-eksoterm-endoterm': [
    {
      id: 'cp-106-core1-q1',
      type: 'true_false',
      question: 'Ketika sebutir tablet antasida dimasukkan ke dalam air dan termometer menunjukkan kenaikan suhu cairan dari $25^\\circ\\text{C}$ ke $30^\\circ\\text{C}$, reaksi kimia tersebut merupakan reaksi eksoterm karena sistem melepaskan kalor ke lingkungan (air dan termometer).',
      correctAnswer: true,
      explanation: 'Benar. Kenaikan suhu yang terdeteksi oleh termometer membuktikan bahwa lingkungan menerima kalor. Sumber kalor tersebut berasal dari reaksi kimia (sistem) yang melepas energi, sehingga $\\Delta H < 0$ (eksoterm). Miskonsepsi umum mengira sistem yang menyerap kalor hanya karena air terasa panas.',
    },
    {
      id: 'cp-106-core1-q2',
      type: 'multiple_choice',
      question: 'Pada reaksi endotermik, pernyataan manakah berikut yang paling tepat menggambarkan perubahan entalpi dan stabilitas zat?',
      options: [
        'Entalpi reaktan lebih besar daripada entalpi produk, dan produk lebih stabil daripada reaktan',
        'Entalpi produk lebih besar daripada entalpi reaktan, dan $\\Delta H > 0$',
        'Entalpi sistem menurun, dan energi dilepaskan ke lingkungan sehingga suhu wadah naik',
        'Ikatan kimia pada produk secara total lebih kuat daripada ikatan pada reaktan',
      ],
      correctAnswer: 1,
      explanation: 'Pada reaksi endotermik, sistem menyerap kalor dari lingkungan ($\\Delta H > 0$), sehingga entalpi akhir (produk) berada pada tingkat energi yang lebih tinggi daripada entalpi awal (reaktan): $H_{\\text{produk}} > H_{\\text{reaktan}}$.',
    },
    {
      id: 'cp-106-core1-q3',
      type: 'true_false',
      question: 'Proses peleburan es batu menjadi air cair pada suhu ruang adalah contoh peristiwa eksoterm karena air yang terbentuk memiliki wujud yang lebih bebas.',
      correctAnswer: false,
      explanation: 'Salah. Peleburan es ($\\\\ce{H2O(s) -> H2O(l)}$) membutuhkan asupan kalor dari lingkungan untuk memutuskan jaringan ikatan hidrogen kisi kristal es, sehingga proses ini bersifat ENDOTERM ($\\\\Delta H_{\\\\text{fus}} > 0$).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 2: Kalorimetri Sederhana & Kalorimeter Bom
  // =========================================================================
  'kalorimetri-larutan-dan-bom': [
    {
      id: 'cp-106-core2-q1',
      type: 'multiple_choice',
      question: 'Perbedaan utama antara pengukuran kalor menggunakan kalorimeter cangkir stirofoam sederhana dengan kalorimeter bom adalah ....',
      options: [
        'Kalorimeter cangkir mengukur $\\Delta U$ pada volume tetap, sedangkan kalorimeter bom mengukur $\\Delta H$ pada tekanan tetap',
        'Kalorimeter cangkir mengukur $\\Delta H$ pada tekanan atmosfer tetap, sedangkan kalorimeter bom mengukur kalor pada volume tetap ($q_v = \\Delta U$)',
        'Kalorimeter cangkir tidak dapat digunakan untuk larutan asam-basa',
        'Kalorimeter bom tidak memerlukan bejana air di sekitarnya',
      ],
      correctAnswer: 1,
      explanation: 'Kalorimeter cangkir terbuka terhadap udara sehingga mengukur kalor pada tekanan tetap ($q_p = \\Delta H$). Sebaliknya, kalorimeter bom memiliki dinding baja kaku kedap volume sehingga mengukur kalor pada volume tetap ($q_v = \\Delta U$). Untuk reaksi fasa gas, $\\Delta H = \\Delta U + \\Delta n_g RT$.',
    },
    {
      id: 'cp-106-core2-q2',
      type: 'true_false',
      question: 'Dalam eksperimen kalorimetri larutan, jika kapasitas kalor wadah ($C_{\\text{kalorimeter}}$) tidak diabaikan, maka kalor total yang dilepas reaksi kimia dihitung dengan rumus: $q_{\\text{reaksi}} = -(m \\cdot c \\cdot \\Delta T + C_{\\text{kal}} \\cdot \\Delta T)$.',
      correctAnswer: true,
      explanation: 'Benar. Kalor yang dibebaskan oleh reaksi kimia diserap bersama-sama oleh larutan berair ($m \\cdot c \\cdot \\Delta T$) dan dinding wadah kalorimeter ($C_{\\text{kal}} \\cdot \\Delta T$). Tanda negatif di depan menunjukkan arah pelepasan kalor oleh sistem.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 3: Macam-Macam Perubahan Entalpi Standar (ΔH°)
  // =========================================================================
  'macam-macam-entalpi-standar': [
    {
      id: 'cp-106-core3-q1',
      type: 'multiple_choice',
      question: 'Persamaan termokimia manakah di bawah ini yang paling tepat merepresentasikan perubahan entalpi pembentukan standar ($\\Delta H_f^\\circ$) senyawa kalsium karbonat?',
      options: [
        '$\\ce{CaO(s) + CO2(g) -> CaCO3(s)} \\quad \\Delta H^\\circ = -178\\text{ kJ}$',
        '$\\ce{Ca^2+(aq) + CO3^2-(aq) -> CaCO3(s)} \\quad \\Delta H^\\circ = -12\\text{ kJ}$',
        '$\\ce{Ca(s) + C(s, grafit) + 3/2 O2(g) -> CaCO3(s)} \\quad \\Delta H^\\circ = -1207\\text{ kJ}$',
        '$\\ce{2 Ca(s) + 2 C(s, intan) + 3 O2(g) -> 2 CaCO3(s)} \\quad \\Delta H^\\circ = -2414\\text{ kJ}$',
      ],
      correctAnswer: 2,
      explanation: 'Definisi baku $\\Delta H_f^\\circ$ mewajibkan pembentukan TEPAT 1 mol senyawa dari unsur-unsurnya dalam wujud fisik paling stabil (alotrop referensi) pada keadaan standar ($25^\\circ\\text{C}, 1\\text{ atm}$). Kalsium padat $\\ce{Ca(s)}$, karbon grafit $\\ce{C(s, grafit)}$, dan gas diatomik $\\ce{O2(g)}$ membentuk 1 mol $\\ce{CaCO3(s)}$. Pilihan A salah karena menggunakan reaktan berupa senyawa, bukan unsur.',
    },
    {
      id: 'cp-106-core3-q2',
      type: 'true_false',
      question: 'Nilai entalpi pembentukan standar ($\\Delta H_f^\\circ$) untuk intan (diamond) adalah tepat $0\\text{ kJ/mol}$ karena intan adalah zat padat murni yang tersusun atas karbon murni.',
      correctAnswer: false,
      explanation: 'Salah. Nilai $\\Delta H_f^\\circ = 0$ HANYA diberikan untuk alotrop karbon yang paling stabil secara termodinamika pada $25^\\circ\\text{C}, 1\\text{ atm}$, yaitu GRAFIT. Intan memiliki $\\Delta H_f^\\circ = +1.9\\text{ kJ/mol}$ relatif terhadap grafit.',
    },
    {
      id: 'cp-106-core3-q3',
      type: 'multiple_choice',
      question: 'Jika entalpi pembentukan standar gas karbon monoksida adalah $\\Delta H_f^\\circ(\\ce{CO(g)}) = -110.5\\text{ kJ/mol}$, maka perubahan entalpi untuk reaksi: $\\ce{2 CO(g) -> 2 C(s, grafit) + O2(g)}$ adalah ....',
      options: [
        '$-110.5\\text{ kJ}$',
        '$+110.5\\text{ kJ}$',
        '$-221.0\\text{ kJ}$',
        '$+221.0\\text{ kJ}$',
      ],
      correctAnswer: 3,
      explanation: 'Reaksi tersebut merupakan reaksi penguraian 2 mol $\\ce{CO(g)}$. Reaksi penguraian adalah kebalikan dari pembentukan (tanda berubah dari minus menjadi plus: $+110.5\\text{ kJ/mol}$). Karena koefisien $\\ce{CO}$ adalah 2, maka $\\Delta H = 2 \\times (+110.5\\text{ kJ}) = \\mathbf{+221.0\\text{ kJ}}$.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 4: Hukum Hess (Siklus Reaksi & Diagram Tingkat Energi)
  // =========================================================================
  'hukum-hess-dan-siklus-energi': [
    {
      id: 'cp-106-core4-q1',
      type: 'true_false',
      question: 'Berdasarkan Hukum Hess, perubahan entalpi suatu reaksi kimia hanya ditentukan oleh keadaan awal reaktan dan keadaan akhir produk, serta sama sekali tidak bergantung pada berapa banyak tahapan reaksi atau jalur yang dilalui.',
      correctAnswer: true,
      explanation: 'Benar. Entalpi ($H$) adalah fungsi keadaan (*state function*). Oleh karena itu, baik reaksi berlangsung dalam 1 tahap langsung maupun melalui 3 tahap perantara berbelit-belit, total $\\Delta H$ kumulatif jalurnya selalu bernilai persis sama.',
    },
    {
      id: 'cp-106-core4-q2',
      type: 'multiple_choice',
      question: 'Diberikan diagram siklus Hess berikut:\n- Jalur 1 (Langsung): $\\ce{A -> C} \\quad \\Delta H_1 = -500\\text{ kJ}$\n- Jalur 2 (Tahap 1): $\\ce{A -> B} \\quad \\Delta H_2 = -320\\text{ kJ}$\n- Jalur 2 (Tahap 2): $\\ce{B -> C} \\quad \\Delta H_3 = \\text{?}$\nNilai $\\Delta H_3$ untuk reaksi konversi $\\ce{B -> C}$ adalah ....',
      options: [
        '$-820\\text{ kJ}$',
        '$-180\\text{ kJ}$',
        '$+180\\text{ kJ}$',
        '$+820\\text{ kJ}$',
      ],
      correctAnswer: 1,
      explanation: 'Menurut Hukum Hess: $\\Delta H_1 = \\Delta H_2 + \\Delta H_3 \\implies -500\\text{ kJ} = -320\\text{ kJ} + \\Delta H_3 \\implies \\Delta H_3 = -500 - (-320) = \\mathbf{-180\\text{ kJ}}$.',
    },
    {
      id: 'cp-106-core4-q3',
      type: 'true_false',
      question: 'Rumus penentuan entalpi reaksi menggunakan data $\\Delta H_f^\\circ$ adalah $\\Delta H_{\\text{reaksi}} = \\sum \\Delta H_f^\\circ(\\text{reaktan}) - \\sum \\Delta H_f^\\circ(\\text{produk})$.',
      correctAnswer: false,
      explanation: 'Salah. Rumus yang benar adalah PRODUK dikurangi REAKTAN: $\\Delta H_{\\text{reaksi}} = \\sum (n \\cdot \\Delta H_f^\\circ)_{\\text{produk}} - \\sum (m \\cdot \\Delta H_f^\\circ)_{\\text{reaktan}}$ (Kanan dikurang Kiri). Rumus Reaktan - Produk berlaku untuk Energi Ikatan, bukan entalpi pembentukan.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 5: Energi Ikatan Rata-Rata & Penentuan ΔH Reaksi
  // =========================================================================
  'energi-ikatan-dan-entalpi-reaksi': [
    {
      id: 'cp-106-core5-q1',
      type: 'multiple_choice',
      question: 'Pernyataan termodinamika yang paling benar mengenai proses pemutusan dan pembentukan ikatan kovalen adalah ....',
      options: [
        'Pemutusan ikatan melepas energi (eksoterm), sedangkan pembentukan ikatan menyerap energi (endoterm)',
        'Pemutusan ikatan menyerap energi (endoterm), sedangkan pembentukan ikatan melepas energi (eksoterm)',
        'Pemutusan maupun pembentukan ikatan keduanya selalu menyerap energi',
        'Pemutusan maupun pembentukan ikatan keduanya selalu melepas energi',
      ],
      correctAnswer: 1,
      explanation: 'Prinsip fundamental kimia: Memutuskan ikatan membutuhkan asupan energi untuk mengatasi gaya tarik elektrostatik antar inti dan elektron (ENDOTERM, $D > 0$). Sebaliknya, pembentukan ikatan menghasilkan keadaan yang lebih stabil sehingga membebaskan energi ke lingkungan (EKSOTERM).',
    },
    {
      id: 'cp-106-core5-q2',
      type: 'true_false',
      question: 'Perhitungan $\\Delta H$ reaksi berbasis energi ikatan rata-rata ($\\sum D_{\\text{putus}} - \\sum D_{\\text{bentuk}}$) memberikan hasil yang sangat akurat untuk reaksi yang melibatkan zat-zat berwujud padat dan cair tanpa memerlukan koreksi kalor perubahan fasa.',
      correctAnswer: false,
      explanation: 'Salah. Data energi ikatan rata-rata ($D$) secara teoritis HANYA berlaku untuk molekul dalam wujud FASA GAS. Jika zat berwujud cair atau padat, perhitungan harus menyertakan entalpi penguapan ($\\Delta H_{\\text{vap}}$) atau peleburan ($\\Delta H_{\\text{fus}}$) karena ada gaya tarik antarmolekul yang belum diperhitungkan.',
    },
    {
      id: 'cp-106-core5-q3',
      type: 'multiple_choice',
      question: 'Diketahui energi ikatan: $D(\\ce{H-H}) = 436\\text{ kJ/mol}$, $D(\\ce{Cl-Cl}) = 242\\text{ kJ/mol}$, dan $D(\\ce{H-Cl}) = 431\\text{ kJ/mol}$. Perubahan entalpi pembentukan standar gas hidrogen klorida ($\\Delta H_f^\\circ \\ce{HCl(g)}$) adalah ....',
      options: [
        '$-184\\text{ kJ/mol}$',
        '$-92\\text{ kJ/mol}$',
        '$+92\\text{ kJ/mol}$',
        '$+184\\text{ kJ/mol}$',
      ],
      correctAnswer: 1,
      explanation: 'Reaksi pembentukan 1 mol $\\ce{HCl(g)}$ adalah: $\\ce{1/2 H2(g) + 1/2 Cl2(g) -> HCl(g)}$.  \n$\\Delta H_f^\\circ = [\\frac{1}{2} D(\\ce{H-H}) + \\frac{1}{2} D(\\ce{Cl-Cl})] - [1 \\times D(\\ce{H-Cl})]$  \n$\\Delta H_f^\\circ = [\\frac{1}{2}(436) + \\frac{1}{2}(242)] - 431 = [218 + 121] - 431 = 339 - 431 = \\mathbf{-92\\text{ kJ/mol}}$.  \n(Hati-hati: nilai $-184\\text{ kJ}$ berlaku untuk pembentukan 2 mol $\\ce{HCl}$).',
    },
  ],
};
