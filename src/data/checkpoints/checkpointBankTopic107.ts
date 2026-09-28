/**
 * checkpointBankTopic107.ts
 * Bank Soal Uji Pemahaman Cepat (Concept Checkpoint Quiz)
 * Topik 107: Laju Reaksi & Teori Tumbukan SMA (Kinetika Kimia, Orde Reaksi, Faktor Laju & Katalis)
 * 
 * Standar: Konseptual, Membongkar Miskonsepsi Siswa SMA, Pilihan Ganda & True/False
 */

import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_107: Record<string, CheckpointQuizItem[]> = {
  // =========================================================================
  // PRASYARAT 1: Molaritas Larutan & Definisi Laju Reaksi Diferensial
  // =========================================================================
  'prasyarat-molaritas-dan-laju-diferensial': [
    {
      id: 'cp-107-prereq1-q1',
      type: 'true_false',
      question: 'Pada reaksi penguraian $\\ce{A -> 2 B}$, laju pertambahan konsentrasi zat B ($v_{\\ce{B}}$) bernilai setengah dari laju pengurangan konsentrasi zat A ($v_{\\ce{A}}$).',
      correctAnswer: false,
      explanation: 'Salah. Berdasarkan kesetaraan stoikiometri laju diferensial: $-\\frac{d[\\ce{A}]}{dt} = +\\frac{1}{2}\\frac{d[\\ce{B}]}{dt} \\implies v_{\\ce{B}} = 2 v_{\\ce{A}}$. Karena setiap $1\\text{ mol } \\ce{A}$ yang terurai menghasilkan $2\\text{ mol } \\ce{B}$, maka laju pembentukan zat B adalah dua kali lebih cepat dibandingkan laju pengurangan zat A.',
    },
    {
      id: 'cp-107-prereq1-q2',
      type: 'multiple_choice',
      question: 'Pada reaksi gas: $\\ce{2 N2O5(g) -> 4 NO2(g) + O2(g)}$, laju pembentukan gas $\\ce{NO2}$ terukur sebesar $0.40\\text{ M/detik}$. Laju penguraian gas $\\ce{N2O5}$ pada saat yang bersamaan adalah ....',
      options: [
        '$0.80\\text{ M/detik}$',
        '$0.40\\text{ M/detik}$',
        '$0.20\\text{ M/detik}$',
        '$0.10\\text{ M/detik}$',
      ],
      correctAnswer: 2,
      explanation: 'Perbandingan laju zat berbanding lurus dengan perbandingan koefisien reaksinya:\n$$\\frac{v_{\\ce{N2O5}}}{v_{\\ce{NO2}}} = \\frac{2}{4} = \\frac{1}{2} \\implies v_{\\ce{N2O5}} = \\frac{1}{2} \\times 0.40\\text{ M/s} = \\mathbf{0.20\\text{ M/detik}}$$.',
    },
  ],

  // =========================================================================
  // PRASYARAT 2: Teori Kinetik Gas & Distribusi Energi Maxwell-Boltzmann
  // =========================================================================
  'prasyarat-distribusi-maxwell-boltzmann': [
    {
      id: 'cp-107-prereq2-q1',
      type: 'true_false',
      question: 'Kenaikan suhu sebesar $10^\\circ\\text{C}$ dapat melipatgandakan laju reaksi terutama karena kecepatan gerak partikel dan frekuensi tumbukan total antarmolekul melonjak dua kali lipat.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Klasik). Kenaikan suhu $10^\\circ\\text{C}$ hanya meningkatkan energi kinetik rata-rata partikel sekitar $2\\text{--}3\\%$, sehingga frekuensi tumbukan total hanya bertambah sangat sedikit ($< 3\\%$). Faktor penentu utama mengapa laju melonjak 2 hingga 3 kali lipat adalah peningkatan eksponensial pada FRAKSI MOLEKUL yang memiliki energi kinetik melampaui energi aktivasi ($E_k \\ge E_a$).',
    },
    {
      id: 'cp-107-prereq2-q2',
      type: 'multiple_choice',
      question: 'Berdasarkan kurva distribusi energi Maxwell-Boltzmann, perlakuan yang menyebabkan puncak kurva bergeser ke arah kanan dan mendatar ke bawah adalah ....',
      options: [
        'Menaikkan tekanan gas dalam wadah tertutup',
        'Menaikkan temperatur absolut sistem reaksi',
        'Menambahkan katalis padat berpori',
        'Memperbesar luas permukaan kontak zat pereaksi',
      ],
      correctAnswer: 1,
      explanation: 'Peningkatan temperatur absolut ($T$) menyebabkan sebaran energi kinetik molekul bergeser ke tingkat energi yang lebih tinggi (puncak kurva bergeser ke kanan dan mendatar). Hal ini memperbesar luasan kurva di sebelah kanan ambang batas energi aktivasi ($E_a$). Katalis tidak mengubah bentuk kurva Maxwell-Boltzmann, melainkan menggeser posisi garis ambang batas $E_a$ ke sebelah kiri.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 1: Konsep Laju Reaksi Diferensial & Kurva Konsentrasi vs Waktu
  // =========================================================================
  'konsep-laju-dan-kurva-konsentrasi': [
    {
      id: 'cp-107-core1-q1',
      type: 'true_false',
      question: 'Pada grafik konsentrasi reaktan terhadap waktu, laju reaksi bernilai konstan dari detik pertama pencampuran hingga seluruh reaktan habis bereaksi.',
      correctAnswer: false,
      explanation: 'Salah. Pada sebagian besar reaksi kimia (orde 1 dan lebih tinggi), laju reaksi tidak konstan. Laju reaksi berada pada titik tertinggi di awal reaksi ($t = 0$) ketika konsentrasi reaktan maksimal, kemudian melambat secara kontinu seiring berkurangnya konsentrasi reaktan yang digambarkan oleh kurva melengkung asimtotik.',
    },
    {
      id: 'cp-107-core1-q2',
      type: 'multiple_choice',
      question: 'Gradien kemiringan garis singgung (tangen) pada suatu titik kurva konsentrasi reaktan terhadap waktu ($-\\frac{d[\\ce{R}]}{dt}$) merepresentasikan ....',
      options: [
        'Laju reaksi rata-rata selama seluruh proses reaksi',
        'Laju reaksi sesaat pada titik waktu tersebut',
        'Energi aktivasi reaksi kimia',
        'Orde reaksi total terhadap seluruh reaktan',
      ],
      correctAnswer: 1,
      explanation: 'Kemiringan garis singgung (turunan pertama konsentrasi terhadap waktu, $-\\frac{d[\\ce{R}]}{dt}$) pada detik tertentu merepresentasikan laju reaksi sesaat ($v_t$) pada detik tersebut. Laju rata-rata merupakan kemiringan garis sekan (tali busur) antara dua titik waktu yang berbeda ($-\\frac{\\Delta[\\ce{R}]}{\\Delta t}$).',
    },
    {
      id: 'cp-107-core1-q3',
      type: 'true_false',
      question: 'Meskipun konsentrasi reaktan selalu berkurang seiring berjalannya waktu ($\\Delta[\\ce{R}] < 0$), nilai laju reaksi ($v$) selalu dinyatakan sebagai bilangan positif.',
      correctAnswer: true,
      explanation: 'Benar. Laju reaksi didefinisikan secara konvensi selalu bernilai positif. Oleh karena itu, pada laju pengurangan reaktan ditambahkan tanda negatif di depan rumus: $v = -\\frac{\\Delta[\\ce{R}]}{\\Delta t}$, sehingga minus bertemu minus menghasilkan nilai positif.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 2: Teori Tumbukan Efektif & Kompleks Teraktivasi (Energi Aktivasi Ea)
  // =========================================================================
  'teori-tumbukan-dan-energi-aktivasi': [
    {
      id: 'cp-107-core2-q1',
      type: 'true_false',
      question: 'Setiap tumbukan fisik antarpartikel reaktan di dalam labu reaksi dipastikan akan menghasilkan pembentukan molekul produk baru.',
      correctAnswer: false,
      explanation: 'Salah. Di alam, hanya sebagian sangat kecil tumbukan yang menghasilkan reaksi (tumbukan efektif). Tumbukan hanya menghasilkan reaksi jika memenuhi DUA syarat simultan: (1) orientasi spasial atom tepat sasaran, dan (2) energi kinetik tumbukan sekurang-kurangnya sama dengan energi aktivasi ($E_k \\ge E_a$). Tumbukan yang energinya kurang atau orientasinya melenceng hanya akan memantul kembali tanpa reaksi.',
    },
    {
      id: 'cp-107-core2-q2',
      type: 'multiple_choice',
      question: 'Karakteristik yang BENAR mengenai spesi kompleks teraktivasi (keadaan transisi / transition state) pada puncak diagram profil energi reaksi adalah ....',
      options: [
        'Merupakan spesi stabil yang dapat diisolasi dan disimpan sebagai zat antara',
        'Memiliki energi potensial terendah sepanjang koordinat lintasan reaksi',
        'Memiliki ikatan lama yang meregang dan ikatan baru yang mulai terbentuk secara parsial',
        'Hanya terbentuk jika reaksi kimia berlangsung secara endotermik',
      ],
      correctAnswer: 2,
      explanation: 'Kompleks teraktivasi ($[\\ddagger]$) adalah konfigurasi atom sesaat yang berada pada puncak bukit energi potensial maksimum. Pada keadaan ini, ikatan kovalen lama sedang meregang putus secara parsial dan ikatan kovalen baru sedang terbentuk secara simultan. Kompleks ini sangat tidak stabil dan tidak dapat diisolasi.',
    },
    {
      id: 'cp-107-core2-q3',
      type: 'multiple_choice',
      question: 'Suatu reaksi memiliki energi aktivasi reaksi maju $E_{a,\\text{maju}} = 80\\text{ kJ/mol}$ dan energi aktivasi reaksi balik $E_{a,\\text{balik}} = 120\\text{ kJ/mol}$. Perubahan entalpi reaksi ($\\Delta H$) dan jenis reaksinya adalah ....',
      options: [
        '$\\Delta H = +40\\text{ kJ/mol}$ (Endoterm)',
        '$\\Delta H = -40\\text{ kJ/mol}$ (Eksoterm)',
        '$\\Delta H = -200\\text{ kJ/mol}$ (Eksoterm)',
        '$\\Delta H = +200\\text{ kJ/mol}$ (Endoterm)',
      ],
      correctAnswer: 1,
      explanation: 'Hubungan antara energi aktivasi maju, balik, dan entalpi reaksi adalah:\n$$\\Delta H = E_{a,\\text{maju}} - E_{a,\\text{balik}} = 80\\text{ kJ/mol} - 120\\text{ kJ/mol} = \\mathbf{-40\\text{ kJ/mol}}$$\nKarena $\\Delta H < 0$, reaksi tersebut tergolong reaksi eksotermik.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 3: Empat Faktor Penentu Laju Reaksi & Persamaan Arrhenius
  // =========================================================================
  'faktor-faktor-penentu-laju-reaksi': [
    {
      id: 'cp-107-core3-q1',
      type: 'true_false',
      question: 'Penambahan katalis ke dalam suatu reaksi kimia mempercepat laju reaksi dengan cara menurunkan energi aktivasi ($E_a$) serta menggeser nilai perubahan entalpi reaksi ($\\Delta H$) menjadi lebih negatif.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Fatal Ujian). Katalis HANYA menurunkan energi aktivasi ($E_a$) dengan menyediakan mekanisme lintasan alternatif. Katalis SAMA SEKALI TIDAK MENGUBAH tingkat energi reaktan awal maupun produk akhir, sehingga nilai perubahan entalpi reaksi ($\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}}$) tetap sama persis!',
    },
    {
      id: 'cp-107-core3-q2',
      type: 'multiple_choice',
      question: 'Memotong bongkahan kalsium karbonat ($\ce{CaCO3}$) menjadi serbuk halus mempercepat laju reaksi dengan larutan asam klorida karena ....',
      options: [
        'Menurunkan energi aktivasi reaksi penguraian karbonat',
        'Menaikkan energi kinetik rata-rata partikel kalsium karbonat',
        'Memperluas total area permukaan bidang sentuh antarpartikel',
        'Menambah jumlah mol kalsium karbonat yang tersedia untuk bereaksi',
      ],
      correctAnswer: 2,
      explanation: 'Menghaluskan padatan menjadi serbuk memperluas total luas permukaan bidang sentuh per satuan massa. Semakin banyak partikel padatan di permukaan yang terpapar langsung dengan molekul larutan asam, semakin tinggi frekuensi tumbukan efektif per detik. Ukuran partikel tidak mengubah $E_a$ dan tidak mengubah energi kinetik.',
    },
    {
      id: 'cp-107-core3-q3',
      type: 'true_false',
      question: 'Katalis mempercepat laju pembentukan produk, namun tidak dapat mengubah jumlah mol produk maksimum yang dapat dihasilkan secara stoikiometri.',
      correctAnswer: true,
      explanation: 'Benar. Katalis merupakan agen kinetik murni, bukan agen termodinamika atau stoikiometri. Katalis hanya mempersingkat waktu yang dibutuhkan untuk mencapai keadaan akhir, tetapi massa dan mol produk yang terbentuk tetap dibatasi oleh pereaksi pembatas.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 4: Persamaan Hukum Laju Reaksi & Makna Fisis Orde Reaksi
  // =========================================================================
  'hukum-laju-dan-makna-orde-reaksi': [
    {
      id: 'cp-107-core4-q1',
      type: 'true_false',
      question: 'Untuk reaksi setara: $\\ce{2 A + 3 B -> C + D}$, persamaan laju reaksinya selalu dipastikan bernilai $v = k [\\ce{A}]^2 [\\ce{B}]^3$.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Paling Umum). Pangkat orde reaksi dalam hukum laju TIDAK DAPAT ditentukan dari koefisien stoikiometri reaksi keseluruhan. Orde reaksi HANYA BISA ditentukan melalui data eksperimen kinetika laboratorium, kecuali pada reaksi yang secara eksplisit dinyatakan sebagai reaksi elementer satu tahap.',
    },
    {
      id: 'cp-107-core4-q2',
      type: 'multiple_choice',
      question: 'Suatu reaksi kimia memiliki persamaan laju: $v = k [\\ce{A}] [\\ce{B}]^2$. Jika konsentrasi zat A dinaikkan menjadi 2 kali semula dan konsentrasi zat B dinaikkan menjadi 3 kali semula, laju reaksi akan melonjak sebesar ....',
      options: [
        '$6\\text{ kali}$',
        '$12\\text{ kali}$',
        '$18\\text{ kali}$',
        '$36\\text{ kali}$',
      ],
      correctAnswer: 2,
      explanation: 'Faktor kelipatan laju dihitung dari rasio perpangkatan konsentrasi:\n$$\\frac{v_2}{v_1} = \\left(\\frac{[\\ce{A}]_2}{[\\ce{A}]_1}\\right)^1 \\times \\left(\\frac{[\\ce{B}]_2}{[\\ce{B}]_1}\\right)^2 = (2)^1 \\times (3)^2 = 2 \\times 9 = \\mathbf{18\\text{ kali}}$$.',
    },
    {
      id: 'cp-107-core4-q3',
      type: 'true_false',
      question: 'Reaksi yang berorde nol terhadap reaktan X ($v = k [\\ce{X}]^0$) berarti reaksi kimia tersebut tidak berlangsung sama sekali.',
      correctAnswer: false,
      explanation: 'Salah. Reaksi berorde nol tetap berlangsung dengan laju positif konstan ($v = k$). Makna fisik orde nol adalah bahwa perubahan konsentrasi zat X tidak memengaruhi laju reaksi sama sekali (misalnya pada reaksi penguraian gas di permukaan katalis logam yang sudah jenuh penuh).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 5: Metode Penentuan Orde Reaksi & Mekanisme Reaksi Bertahap
  // =========================================================================
  'metode-penentuan-orde-dan-mekanisme': [
    {
      id: 'cp-107-core5-q1',
      type: 'true_false',
      question: 'Dalam percobaan penentuan orde menggunakan data waktu reaksi ($t$), hubungan antara laju reaksi ($v$) dan waktu ($t$) adalah berbanding lurus, sehingga waktu yang lebih besar menandakan reaksi berlangsung lebih cepat.',
      correctAnswer: false,
      explanation: 'Salah. Laju reaksi berbanding TERBALIK dengan waktu reaksi ($v \\propto \\frac{1}{t}$). Reaksi yang semakin cepat membutuhkan waktu reaksi yang semakin singkat/kecil. Maka dalam perbandingan orde: $\\frac{v_1}{v_2} = \\frac{t_2}{t_1} = (\\frac{[\\ce{A}]_1}{[\\ce{A}]_2})^m$.',
    },
    {
      id: 'cp-107-core5-q2',
      type: 'multiple_choice',
      question: 'Dalam mekanisme reaksi bertahap yang terdiri dari beberapa langkah elementer, tahap yang menentukan persamaan hukum laju reaksi keseluruhan adalah ....',
      options: [
        'Tahap yang memiliki energi aktivasi terendah',
        'Tahap elementer yang berlangsung paling cepat',
        'Tahap elementer yang berlangsung paling lambat (Rate-Determining Step)',
        'Tahap pembentukan zat intermediat pertama',
      ],
      correctAnswer: 2,
      explanation: 'Langkah yang berjalan paling lambat (*Rate-Determining Step* / RDS) merupakan "kemacetan (bottleneck)" kinetika yang membatasi laju seluruh proses reaksi. Oleh sebab itu, persamaan hukum laju reaksi total ditentukan secara langsung oleh molekularitas dan koefisien reaktan pada tahap paling lambat tersebut.',
    },
    {
      id: 'cp-107-core5-q3',
      type: 'true_false',
      question: 'Zat intermediat (zat perantara) yang terbentuk pada langkah reaksi awal dan habis terkonsumsi pada langkah berikutnya sah untuk dicantumkan ke dalam rumus persamaan laju reaksi final.',
      correctAnswer: false,
      explanation: 'Salah. Persamaan hukum laju reaksi final HANYA boleh memuat spesi pereaksi awal (reaktan) atau spesi katalis. Spesi zat intermediat yang berkonsentrasi renik dan tidak stabil harus dieliminasi dari persamaan laju menggunakan substitusi laju tahap cepat atau pra-kesetimbangan.',
    },
  ],
};
