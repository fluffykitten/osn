import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_OSN_04: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Hukum I Termodinamika, Kalor (q), Kerja (w), & Kalorimetri
  'hukum-pertama-kalorimetri': [
    {
      id: 'chk-osn04-pre1-q1',
      type: 'multiple_choice',
      question: 'Suatu sistem gas ideal mengalami proses kompresi oleh gaya luar dengan kerja mekanik sebesar $250\\text{ J}$. Selama proses kompresi berlangsung, sistem membuang kalor sebesar $100\\text{ J}$ ke lingkungan sekitar. Berapakah perubahan energi dalam $(\\Delta U)$ sistem tersebut?',
      options: [
        '$-350\\text{ J}$',
        '$-150\\text{ J}$',
        '$+150\\text{ J}$',
        '$+350\\text{ J}$',
      ],
      correctAnswer: 2,
      explanation: 'Menurut Hukum I Termodinamika: $\\Delta U = q + w$.\\nBerdasarkan konvensi tanda IUPAC:\\n- Kalor dilepas oleh sistem ke lingkungan $\\implies q = -100\\text{ J}$.\\n- Kerja dilakukan oleh lingkungan pada sistem (kompresi) $\\implies w = +250\\text{ J}$.\\nMaka $\\Delta U = -100\\text{ J} + 250\\text{ J} = +150\\text{ J}$. Energi dalam sistem bertambah sebesar $150\\text{ J}$.',
      misconceptionTarget: 'Salah menerapkan konvensi tanda termodinamika IUPAC untuk kalor yang dilepas dan kerja kompresi',
    },
    {
      id: 'chk-osn04-pre1-q2',
      type: 'true_false',
      question: 'Kalor reaksi yang diukur menggunakan kalorimeter bom bervolume kaku $(\\Delta V = 0)$ mencerminkan perubahan entalpi reaksi $(\\Delta H)$, sedangkan pada kalorimeter cawan kopi bertekanan tetap $(\\Delta P = 0)$ mencerminkan perubahan energi dalam $(\\Delta U)$.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH (terbalik). Pada volume tetap $(\\Delta V = 0)$, kerja $P-V$ bernilai nol ($w = -P\\Delta V = 0$), sehingga kalor reaksi yang terukur pada kalorimeter bom tepat sama dengan perubahan energi dalam: $q_v = \\Delta U$. Sebaliknya, pada tekanan tetap $(\\Delta P = 0)$, kalor reaksi didefinisikan sebagai perubahan entalpi: $q_p = \\Delta H$ (kalorimeter cawan kopi).',
      misconceptionTarget: 'Tertukar antara besaran termodinamika kalorimeter bom (dU) dan kalorimeter cawan kopi (dH)',
    },
    {
      id: 'chk-osn04-pre1-q3',
      type: 'multiple_choice',
      question: 'Pada reaksi pembakaran sempurna gas metana pada suhu ruang $298.15\\text{ K}$:\\n$$\\ce{CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l)}$$\\nHubungan kuantitatif yang tepat antara perubahan entalpi $(\\Delta H)$ dan perubahan energi dalam $(\\Delta U)$ reaksi tersebut adalah:',
      options: [
        '$\\Delta H = \\Delta U - 2RT$',
        '$\\Delta H = \\Delta U + 2RT$',
        '$\\Delta H = \\Delta U - RT$',
        '$\\Delta H = \\Delta U$',
      ],
      correctAnswer: 0,
      explanation: 'Gunakan relasi: $\\Delta H = \\Delta U + \\Delta n_g RT$.\\nHitung selisih mol gas $(\\Delta n_g)$ dengan mengingat bahwa pada $298.15\\text{ K}$, air berwujud cair (bukan gas!):\\n$\\Delta n_g = \\sum n_g(\\text{produk}) - \\sum n_g(\\text{reaktan}) = 1(\\ce{CO2}) - [1(\\ce{CH4}) + 2(\\ce{O2})] = 1 - 3 = -2\\text{ mol}$.\\nMaka $\\Delta H = \\Delta U + (-2)RT = \\Delta U - 2RT$. Karena $-2RT < 0$, maka $\\Delta H < \\Delta U$.',
      misconceptionTarget: 'Memasukkan air berfasa cair ke dalam perhitungan mol gas atau salah menghitung selisih mol gas',
    },
  ],

  // Prasyarat 2: Entalpi Reaksi Standar, Hukum Hess, & Hukum Kirchhoff
  'entalpi-reaksi-hukum-hess': [
    {
      id: 'chk-osn04-pre2-q1',
      type: 'multiple_choice',
      question: 'Manakah dari spesi unsur kimia berikut yang memiliki nilai entalpi pembentukan standar $(\\Delta H_f^\\circ)$ bernilai tepat nol $(0\\text{ kJ/mol})$ pada kondisi $298.15\\text{ K}$ dan $1\\text{ bar}$ menurut konvensi resmi IUPAC?',
      options: [
        'Karbon intan $(\\ce{C(intan)})$',
        'Gas ozon $(\\ce{O3(g)})$',
        'Uap bromin $(\\ce{Br2(g)})$',
        'Cairan bromin $(\\ce{Br2(l)})$',
      ],
      correctAnswer: 3,
      explanation: 'Berdasarkan konvensi termodinamika IUPAC, entalpi pembentukan standar $(\\Delta H_f^\\circ)$ bernilai nol hanya untuk unsur murni dalam bentuk alotrop dan fasa paling stabil pada $298.15\\text{ K}$ dan $1\\text{ bar}$. Fasa standar bromin adalah cairan $(\\ce{Br2(l)})$, bentuk standar karbon adalah grafit $(\\ce{C(grafit)})$, dan bentuk standar oksigen adalah gas diatomik $(\\ce{O2(g)})$.',
      misconceptionTarget: 'Mengira intan adalah bentuk standar karbon atau mengira bromin berwujud gas pada temperatur ruang',
    },
    {
      id: 'chk-osn04-pre2-q2',
      type: 'true_false',
      question: 'Berdasarkan Hukum Kirchhoff $\\left(\\frac{\\partial \\Delta H}{\\partial T}\\right)_P = \\Delta C_p$, jika perubahan kapasitas kalor reaksi bernilai negatif $(\\Delta C_p < 0)$, maka suatu reaksi eksotermik $(\\Delta H < 0)$ akan melepaskan kalor lebih banyak (nilai $\\Delta H^\\circ$ menjadi semakin negatif) pada temperatur yang lebih tinggi.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Dari persamaan diferensial Kirchhoff: $d(\\Delta H) = \\Delta C_p dT$. Jika $\\Delta C_p < 0$, kenaikan temperatur ($dT > 0$) menghasilkan $d(\\Delta H) < 0$. Nilai $\\Delta H^\circ$ yang sudah bertanda negatif akan menjadi semakin negatif pada temperatur tinggi, sehingga kalor eksotermik yang dilepaskan menjadi lebih besar.',
      misconceptionTarget: 'Mengira kapasitas kalor reaktan yang besar selalu menghambat pelepasan kalor pada suhu tinggi',
    },
    {
      id: 'chk-osn04-pre2-q3',
      type: 'multiple_choice',
      question: 'Estimasi entalpi reaksi menggunakan data energi disosiasi ikatan rata-rata $(\\Delta H^\\circ \\approx \\sum D_{\\text{putus}} - \\sum D_{\\text{bentuk}})$ hanya dapat diterapkan secara teoritis akurat untuk reaksi yang memenuhi kriteria:',
      options: [
        'Seluruh reaktan dan produk berada dalam fasa gas ideal',
        'Reaksi berlangsung dalam larutan air pada konsentrasi $1\\text{ M}$',
        'Reaksi melibatkan logam padat murni dan oksigen',
        'Reaksi berlangsung pada temperatur mutlak $0\\text{ K}$',
      ],
      correctAnswer: 0,
      explanation: 'Energi ikatan didefinisikan sebagai energi yang diperlukan untuk memutuskan ikatan kovalen spesifik menjadi atom-atom netral terisolasi dalam fasa gas ideal. Oleh karena itu, estimasi energi ikatan hanya berlaku akurat untuk reaksi fasa gas. Jika melibatkan fasa terkondensasi (cair/padat), entalpi perubahan fasa (seperti entalpi penguapan atau sublimasi) wajib diperhitungkan secara eksplisit.',
      misconceptionTarget: 'Mengira energi ikatan rata-rata dapat langsung diterapkan pada reaktan/produk berfasa cair atau padat tanpa koreksi entalpi fasa',
    },
  ],

  // Prasyarat 3: Hukum II & III Termodinamika, Entropi Mutlak, & Mikrokeadaan
  'hukum-kedua-ketiga-entropi': [
    {
      id: 'chk-osn04-pre3-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan persamaan entropi statistik Ludwig Boltzmann $S = k_B \\ln \\Omega$, jika suatu sistem mikroskopis terisolasi hanya memiliki 1 kemungkinan konfigurasi mikrokeadaan $(\\Omega = 1)$, berapakah nilai entropi sistem tersebut?',
      options: [
        '$S = 1\\text{ J/K}$',
        '$S = 0\\text{ J/K}$',
        '$S = k_B$',
        '$S = \\infty$',
      ],
      correctAnswer: 1,
      explanation: 'Dari formula Boltzmann: $S = k_B \\ln \\Omega$. Jika hanya terdapat satu mikrokeadaan yang dapat diakses oleh partikel (keteraturan sempurna, $\\Omega = 1$), maka $S = k_B \\ln(1) = k_B \\times 0 = 0\\text{ J/K}$. Ini merupakan fondasi mikroskopis dari Hukum III Termodinamika.',
      misconceptionTarget: 'Mengira nilai entropi sama dengan nilai mikrokeadaan (S = 1 J/K saat Ω = 1)',
    },
    {
      id: 'chk-osn04-pre3-q2',
      type: 'true_false',
      question: 'Menurut Hukum III Termodinamika, seluruh zat padat di alam semesta tanpa terkecuali (termasuk zat amorf seperti kaca dan polimer tak teratur) memiliki entropi mutlak bernilai tepat nol $(S = 0)$ pada temperatur nol mutlak $(0\\text{ K})$.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Hukum III Termodinamika menyatakan bahwa entropi bernilai nol pada $0\\text{ K}$ HANYA untuk kristal zat murni yang teratur sempurna (perfect crystalline substance). Zat amorf (seperti kaca), larutan padat acak, atau kristal yang memiliki cacat orientasi spasial (seperti molekul $\\ce{CO}$ atau $\\ce{N2O}$) memiliki entropi sisa (residual entropy) $S_0 > 0$ bahkan pada $0\\text{ K}$.',
      misconceptionTarget: 'Menggeneralisasi Hukum III Termodinamika untuk semua benda padat tanpa membedakan kristal sempurna dan zat amorf',
    },
    {
      id: 'chk-osn04-pre3-q3',
      type: 'multiple_choice',
      question: 'Pada temperatur $-10.0^\\circ\\text{C}$ dan tekanan $1\\text{ atm}$, air cair membeku secara spontan menjadi es padat. Selama proses pembekuan ini, entropi sistem air berkurang $(\\Delta S_{\\text{sistem}} < 0)$. Penjelasan termodinamika yang membuktikan bahwa proses ini tidak melanggar Hukum II Termodinamika adalah:',
      options: [
        'Hukum II Termodinamika tidak berlaku pada temperatur di bawah $0^\\circ\\text{C}$',
        'Pelepasan kalor eksotermik ke lingkungan menaikkan entropi lingkungan $(\\Delta S_{\\text{lingk}} > 0)$ dalam jumlah yang lebih besar, sehingga $\\Delta S_{\\text{semesta}} > 0$',
        'Entropi es bernilai nol sehingga tidak diperhitungkan dalam neraca semesta',
        'Air cair kehilangan massa saat membeku',
      ],
      correctAnswer: 1,
      explanation: 'Hukum II Termodinamika mensyaratkan $\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} > 0$. Pada pembekuan air (reaksi eksotermik, $\\Delta H < 0$), sistem melepaskan kalor ke lingkungan: $\\Delta S_{\\text{lingkungan}} = -\\frac{\\Delta H}{T} > 0$. Pada suhu di bawah titik beku ($-10^\\circ\\text{C}$), besarnya kenaikan entropi lingkungan melampaui penurunan entropi sistem, sehingga entropi total semesta tetap bertambah positif.',
      misconceptionTarget: 'Mengira proses yang menurunkan entropi sistem tidak pernah dapat berlangsung spontan',
    },
  ],

  // Konsep Inti 1: Energi Bebas Gibbs, Kespontanan Reaksi, & Temperatur Transisi
  'energi-bebas-gibbs-kespontanan': [
    {
      id: 'chk-osn04-core1-q1',
      type: 'multiple_choice',
      question: 'Suatu reaksi kimia endotermik memiliki nilai perubahan entalpi standar $\\Delta H^\\circ = +120.0\\text{ kJ/mol}$ dan perubahan entropi standar $\\Delta S^\\circ = +300.0\\text{ J}/(\\text{mol}\\cdot\\text{K})$. Pada temperatur berapakah reaksi tersebut mulai beralih menjadi spontan $(\\Delta G^\\circ < 0)$ pada tekanan standar $1\\text{ bar}$?',
      options: [
        '$T > 400.0\\text{ K}$',
        '$T < 400.0\\text{ K}$',
        '$T > 0.40\\text{ K}$',
        '$T > 2500.0\\text{ K}$',
      ],
      correctAnswer: 0,
      explanation: 'Kondisi ambang batas kespontanan tercapai saat $\\Delta G^\\circ = 0$:\\n$\\Delta H^\\circ - T^* \\Delta S^\\circ = 0 \\implies T^* = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$.\\nKonversikan satuan $\\Delta H^\circ$ ke Joule: $120.0\\text{ kJ/mol} = 120000\\text{ J/mol}$.\\n$T^* = \\frac{120000\\text{ J/mol}}{300.0\\text{ J}/(\\text{mol}\\cdot\\text{K})} = 400.0\\text{ K} \\quad (126.85^\\circ\\text{C})$.\\nKarena $\\Delta H > 0$ dan $\\Delta S > 0$, suku $-T\\Delta S$ akan mendominasi pada suhu tinggi, sehingga reaksi menjadi spontan jika $T > 400.0\\text{ K}$.',
      misconceptionTarget: 'Lupa menyetarakan satuan kJ dan J pada entalpi dan entropi saat menghitung crossover temperature',
    },
    {
      id: 'chk-osn04-core1-q2',
      type: 'true_false',
      question: 'Suatu reaksi kimia yang bersifat eksotermik $(\\Delta H < 0)$ dan mengalami penurunan entropi $(\\Delta S < 0)$ akan berlangsung spontan pada temperatur yang sangat tinggi karena kalor yang dilepaskan semakin memanaskan sistem.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Pada persamaan $\\Delta G = \\Delta H - T\\Delta S$, jika $\\Delta S < 0$, maka suku $-T\\Delta S$ bernilai positif ($+T|\\Delta S|$). Pada temperatur sangat tinggi ($T > T^*$), suku positif $+T|\\Delta S|$ akan melampaui besaran negatif $\\Delta H$, menyebabkan $\\Delta G > 0$ (non-spontan). Reaksi kasus ini justru hanya spontan pada temperatur rendah ($T < T^*$).',
      misconceptionTarget: 'Mengira reaksi eksoterm selalu semakin spontan jika dipanaskan pada temperatur tinggi',
    },
    {
      id: 'chk-osn04-core1-q3',
      type: 'multiple_choice',
      question: 'Pada kondisi temperatur mutlak dan tekanan konstan, nilai perubahan energi bebas Gibbs $(\\Delta G)$ suatu proses kimia secara fisis mencerminkan:',
      options: [
        'Total kerja ekspansi tekanan-volume $(P\\Delta V)$ maksimum',
        'Kalor total yang dilepaskan ke lingkungan pada volume tetap',
        'Kerja maksimum non-$P-V$ (seperti kerja listrik elektrokimia) yang dapat diekstrak dari sistem',
        'Energi kinetik translasi rata-rata partikel produk',
      ],
      correctAnswer: 2,
      explanation: 'Dalam termodinamika terapan, perubahan energi bebas Gibbs $(\\Delta G)$ pada $T$ dan $P$ tetap menyatakan batas kerja maksimum non-ekspansi (non-$PV$ work) yang dapat dimanfaatkan untuk melakukan kerja berguna (misalnya kerja listrik dalam sel bahan bakar atau baterai): $w_{\\text{non-}PV,\\text{max}} = -\\Delta G$.',
      misconceptionTarget: 'Mengira dG merefleksikan kerja mekanik ekspansi tekanan-volume (P dV)',
    },
  ],

  // Konsep Inti 2: Hubungan Termodinamika Energi Bebas Gibbs dengan Tetapan Kesetimbangan (K)
  'energi-gibbs-tetapan-kesetimbangan': [
    {
      id: 'chk-osn04-core2-q1',
      type: 'multiple_choice',
      question: 'Suatu reaksi kesetimbangan fasa gas memiliki nilai perubahan energi bebas Gibbs standar $\\Delta G^\\circ = 0\\text{ J/mol}$ pada temperatur $500.0\\text{ K}$. Berapakah nilai tetapan kesetimbangan termodinamika $(K_p)$ reaksi tersebut?',
      options: [
        '$K_p = 0$',
        '$K_p = 1.0$',
        '$K_p = 500.0$',
        '$K_p = \\infty$',
      ],
      correctAnswer: 1,
      explanation: 'Gunakan persamaan fundamental: $\\Delta G^\\circ = -RT \\ln K$.\\nJika $\\Delta G^\\circ = 0$, maka $-RT \\ln K = 0 \\implies \\ln K = 0 \\implies K = e^0 = 1.0$.\\nNilai $K = 1.0$ menunjukkan bahwa pada keadaan standar, reaktan dan produk memiliki afinitas termodinamika yang seimbang sempurna.',
      misconceptionTarget: 'Mengira jika dG° = 0 maka nilai tetapan kesetimbangan K = 0',
    },
    {
      id: 'chk-osn04-core2-q2',
      type: 'true_false',
      question: 'Perubahan energi bebas Gibbs standar $(\\Delta G^\\circ)$ bernilai tepat nol $(\\Delta G^\\circ = 0)$ ketika suatu campuran reaksi kimia telah mencapai keadaan kesetimbangan dinamis sejati.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH (Miskonsepsi Klasik Olimpiade!). Besaran yang bernilai nol saat kesetimbangan tercapai adalah perubahan energi bebas Gibbs aktual $(\\Delta G = 0)$, BUKAN $\\Delta G^\\circ$! Nilai $\\Delta G^\\circ$ adalah nilai konstan spesifik reaksi pada keadaan standar ($1\\text{ bar}$) yang berhubungan dengan tetapan kesetimbangan melalui $\\Delta G^\\circ = -RT \\ln K$.',
      misconceptionTarget: 'Menyamakan perubahan energi bebas Gibbs aktual (dG) dengan energi bebas Gibbs standar (dG°)',
    },
    {
      id: 'chk-osn04-core2-q3',
      type: 'multiple_choice',
      question: 'Untuk reaksi kesetimbangan fasa gas pada temperatur $T$, nilai kuotien reaksi terukur sebesar $Q_p = 100.0$ sedangkan tetapan kesetimbangan termodinamikanya adalah $K_p = 2.0$. Bagaimanakah kecenderungan termodinamika sistem tersebut?',
      options: [
        '$\\Delta G < 0$, reaksi spontan bergeser ke arah kanan membentuk lebih banyak produk',
        '$\\Delta G = 0$, sistem sudah berada dalam kesetimbangan dinamis',
        '$\\Delta G > 0$, reaksi spontan bergeser ke arah kiri membentuk kembali reaktan',
        'Nilai tetapan kesetimbangan $K_p$ akan meningkat secara otomatis menyamai $Q_p$',
      ],
      correctAnswer: 2,
      explanation: 'Gunakan relasi: $\\Delta G = RT \\ln\\left(\\frac{Q_p}{K_p}\\right)$.\\nKarena $Q_p > K_p$ ($100.0 > 2.0$), maka $\\frac{Q_p}{K_p} > 1 \\implies \\ln(Q_p/K_p) > 0 \\implies \\Delta G > 0$.\\nNilai $\\Delta G > 0$ menandakan reaksi maju tidak spontan, dan sistem secara spontan bergerak ke arah kebalikannya (bergeser ke kiri mengonsumsi produk dan meregenerasi reaktan) hingga $Q_p = K_p$.',
      misconceptionTarget: 'Tertukar membaca kriteria pergeseran kesetimbangan antara kondisi Q < K dan Q > K',
    },
  ],

  // Konsep Inti 3: Persamaan Van 't Hoff & Ketergantungan Suhu terhadap Tetapan Kesetimbangan
  'persamaan-van-t-hoff': [
    {
      id: 'chk-osn04-core3-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan persamaan Van \'t Hoff dalam bentuk grafik linier $\\ln K = \\left(-\\frac{\\Delta H^\\circ}{R}\\right)\\frac{1}{T} + \\frac{\\Delta S^\\circ}{R}$, suatu reaksi kimia eksotermik $(\\Delta H^\\circ < 0)$ akan menghasilkan garis lurus dengan karakteristik:',
      options: [
        'Gradien (slope) positif, dan nilai $K$ menurun saat temperatur dinaikkan',
        'Gradien (slope) negatif, dan nilai $K$ meningkat saat temperatur dinaikkan',
        'Gradien (slope) nol, dan nilai $K$ tidak terpengaruh temperatur',
        'Gradien (slope) positif, dan nilai $K$ meningkat saat temperatur dinaikkan',
      ],
      correctAnswer: 0,
      explanation: 'Kemiringan grafik adalah $m = -\\frac{\\Delta H^\\circ}{R}$. Jika reaksi eksotermik $(\\Delta H^\\circ < 0)$, maka $m = -\\frac{-\\text{nilai}}{R} > 0$ (gradien positif).\\nSaat suhu dinaikkan ($T \\uparrow \\implies 1/T \\downarrow$), karena gradien positif, nilai $\\ln K$ akan menurun ($K \\downarrow$). Ini membuktikan Asas Le Chatelier bahwa pemanasan menggeser reaksi eksotermik ke arah reaktan.',
      misconceptionTarget: 'Mengira reaksi eksotermik selalu memiliki gradien negatif pada plot linier Van \'t Hoff',
    },
    {
      id: 'chk-osn04-core3-q2',
      type: 'true_false',
      question: 'Berdasarkan bentuk diferensial persamaan Van \'t Hoff $\\frac{d(\\ln K)}{dT} = \\frac{\\Delta H^\\circ}{RT^2}$, untuk reaksi endotermik $(\\Delta H^\\circ > 0)$, turunan $\\frac{d(\\ln K)}{dT}$ selalu bernilai positif, yang membuktikan secara matematis bahwa kenaikan temperatur selalu meningkatkan nilai tetapan kesetimbangan $K$.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Karena $R > 0$, $T > 0\\text{ K}$, dan untuk reaksi endotermik $\\Delta H^\circ > 0$, maka $\\frac{\\Delta H^\circ}{RT^2} > 0$. Turunan pertama yang selalu positif membuktikan secara analitis bahwa fungsi $\\ln K$ (dan dengan demikian nilai $K$) merupakan fungsi monoton naik terhadap temperatur $T$.',
      misconceptionTarget: 'Mengira Asas Le Chatelier hanya aturan kualitatif tanpa pembuktian turunan kalkulus formal',
    },
    {
      id: 'chk-osn04-core3-q3',
      type: 'multiple_choice',
      question: 'Suatu reaksi kesetimbangan fasa gas memiliki tetapan kesetimbangan $K_1 = 0.10$ pada $300.0\\text{ K}$ dan meningkat menjadi $K_2 = 10.0$ pada $400.0\\text{ K}$. Sifat termokimia mendasar dari reaksi tersebut adalah:',
      options: [
        'Reaksi bersifat eksotermik kuat $(\\Delta H^\\circ < 0)$',
        'Reaksi bersifat endotermik $(\\Delta H^\\circ > 0)$',
        'Entalpi reaksi bernilai nol $(\\Delta H^\\circ = 0)$',
        'Reaksi tidak melibatkan perubahan fasa',
      ],
      correctAnswer: 1,
      explanation: 'Ketika temperatur dinaikkan dari $300\\text{ K}$ ke $400\\text{ K}$, nilai tetapan kesetimbangan melonjak 100 kali lipat ($0.10 \\to 10.0$). Berdasarkan Persamaan Van \'t Hoff, peningkatan nilai $K$ seiring kenaikan suhu hanya mungkin terjadi jika reaksi menyerap kalor $(\\Delta H^\\circ > 0$, endotermik).',
      misconceptionTarget: 'Mengira kenaikan nilai tetapan kesetimbangan K menandakan reaksi bersifat eksotermik',
    },
  ],

  // Konsep Inti 4: Termodinamika Gas: Proses Reversibel vs Ireversibel & Kerja Maksimum
  'proses-reversibel-ireversibel-kerja-maksimum': [
    {
      id: 'chk-osn04-core4-q1',
      type: 'multiple_choice',
      question: 'Sebanyak $1.0\\text{ mol}$ gas ideal berekspansi isotermal pada temperatur $T$ dari volume $V_1$ menuju volume akhir $V_2 = 2 V_1$. Berapakah besarnya kerja yang dilakukan oleh gas jika ekspansi berlangsung ke dalam ruang hampa udara $(P_{\\text{ext}} = 0$, ekspansi bebas ireversibel)?',
      options: [
        '$w = -RT \\ln 2$',
        '$w = 0\\text{ J}$',
        '$w = -P_1 V_1$',
        '$w = -\\frac{1}{2} RT$',
      ],
      correctAnswer: 1,
      explanation: 'Rumus kerja ekspansi tekanan-volume adalah $w = -\\int P_{\\text{ext}} dV$. Pada ekspansi bebas ke ruang hampa (Joule expansion), tekanan luar penahan bernilai nol ($P_{\\text{ext}} = 0$). Oleh karena itu, gas berekspansi tanpa melawan gaya apa pun sehingga kerja yang dihasilkan adalah tepat nol ($w = 0\\text{ J}$), meskipun volume gas berlipat ganda.',
      misconceptionTarget: 'Mengira gas yang memuai selalu menghasilkan kerja mekanik meskipun berekspansi ke ruang hampa',
    },
    {
      id: 'chk-osn04-core4-q2',
      type: 'true_false',
      question: 'Pada proses ekspansi adiabatik reversibel gas ideal $(q = 0)$, temperatur akhir gas selalu lebih rendah dibanding temperatur awalnya $(T_2 < T_1)$ karena kerja ekspansi yang dilakukan gas diambil langsung dari energi dalam sistem $(\\Delta U = w < 0)$.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Karena sistem terisolasi kalor secara adiabatik ($q = 0$), maka menurut Hukum I: $\\Delta U = q + w = w$. Saat gas berekspansi, gas melakukan kerja ke lingkungan ($w < 0$), sehingga energi dalam harus berkurang: $\\Delta U = n C_v (T_2 - T_1) < 0 \\implies T_2 < T_1$. Gas mengalami pendinginan adiabatik.',
      misconceptionTarget: 'Mengira proses adiabatik berarti temperatur sistem selalu konstan',
    },
    {
      id: 'chk-osn04-core4-q3',
      type: 'multiple_choice',
      question: 'Pada suatu siklus termodinamika tertutup di mana sistem fluida gas ideal mengalami serangkaian proses ekspansi dan kompresi lalu kembali ke keadaan awal $(P_1, V_1, T_1)$, besaran manakah yang dipastikan SELALU bernilai tepat nol $(\\Delta = 0)$?',
      options: [
        'Hanya kerja total siklus $(w_{\\text{siklus}} = 0)$',
        'Hanya kalor total siklus $(q_{\\text{siklus}} = 0)$',
        'Perubahan energi dalam $(\\Delta U)$, perubahan entalpi $(\\Delta H)$, dan perubahan entropi sistem $(\\Delta S_{\\text{sistem}})$',
        'Entropi semesta $(\\Delta S_{\\text{semesta}} = 0)$ untuk segala jenis proses siklus',
      ],
      correctAnswer: 2,
      explanation: 'Energi dalam ($U$), entalpi ($H$), dan entropi ($S$) adalah fungsi keadaan (state function). Karena keadaan akhir sistem identik dengan keadaan awalnya pada akhir siklus tertutup, maka $\\oint dU = 0$, $\\oint dH = 0$, dan $\\oint dS_{\\text{sistem}} = 0$. Sebaliknya, kalor ($q$) dan kerja ($w$) adalah fungsi jalur (path function) yang integral siklusnya tidak nol (merefleksikan luas area siklus $P-V$).',
      misconceptionTarget: 'Mengira kalor total atau kerja total siklus selalu nol pada siklus mesin tertutup',
    },
  ],

  // Konsep Inti 5: Potensial Kimia (μ), Fugositas, & Kesetimbangan Multi-Fasa
  'potensial-kimia-termodinamika-larutan': [
    {
      id: 'chk-osn04-core5-q1',
      type: 'multiple_choice',
      question: 'Secara fisis, potensial kimia $(\\mu_i)$ suatu komponen dalam sistem multi-fasa bertindak sebagai potensial penggerak partikel yang analog dengan potensial listrik atau potensial gravitasi. Arah aliran materi spontan antarfasa selalu berlangsung dari:',
      options: [
        'Fasa dengan potensial kimia lebih rendah menuju potensial kimia lebih tinggi',
        'Fasa dengan potensial kimia lebih tinggi menuju potensial kimia lebih rendah',
        'Fasa dengan volume lebih besar menuju volume lebih kecil secara independen dari $\\mu$',
        'Fasa padat ke fasa gas pada segala kondisi',
      ],
      correctAnswer: 1,
      explanation: 'Pada kondisi $T$ dan $P$ tetap, perpindahan materi $dn_i$ dari fasa $\\alpha$ ke fasa $\\beta$ menghasilkan perubahan energi bebas: $dG = (\\mu_i^\\beta - \\mu_i^\\alpha) dn_i$. Agar proses spontan ($dG < 0$), maka materi harus berpindah ke fasa yang memiliki potensial kimia lebih rendah $(\\mu_i^\\alpha > \\mu_i^\\beta)$. Kespontanan terhenti saat kesetimbangan fasa tercapai ($\\mu_i^\\alpha = \\mu_i^\\beta$).',
      misconceptionTarget: 'Mengira partikel mengalir secara spontan dari potensial kimia rendah ke tinggi',
    },
    {
      id: 'chk-osn04-core5-q2',
      type: 'true_false',
      question: 'Ketika air cair murni berada dalam kesetimbangan dinamis dengan uap air jenuhnya pada titik didih normal $(100^\\circ\\text{C}, 1\\text{ atm})$, nilai potensial kimia molar air cair persis sama dengan potensial kimia molar uap air $(\\mu_{\\ce{H2O(l)}} = \\mu_{\\ce{H2O(g)}})$.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Syarat fundamental kesetimbangan fasa makroskopis sejati pada temperatur dan tekanan tetap adalah kesamaan potensial kimia di seluruh fasa yang terlibat ($\\mu_i^\\alpha = \\mu_i^\\beta$). Jika potensial kimia tidak sama, akan terjadi aliran materi spontan dari fasa berpotensial tinggi ke fasa berpotensial rendah.',
      misconceptionTarget: 'Mengira fasa gas selalu memiliki potensial kimia lebih tinggi daripada fasa cair saat keduanya setimbang',
    },
    {
      id: 'chk-osn04-core5-q3',
      type: 'multiple_choice',
      question: 'Potensial kimia suatu zat terlarut dalam larutan dinyatakan oleh persamaan $\\mu_i = \\mu_i^\\circ + RT \\ln a_i$. Jika larutan dibuat semakin encer mendekati konsentrasi nol (limit larutan ideal tak hingga), nilai koefisien aktivitas $(\\gamma_i)$ akan:',
      options: [
        'Mendekati nilai nol $(\\gamma_i \\to 0)$',
        'Mendekati nilai satu $(\\gamma_i \\to 1)$, sehingga aktivitas terlarut setara dengan konsentrasi fraksi molnya',
        'Mendekati tak hingga $(\\gamma_i \\to \\infty)$',
        'Berfluktuasi secara acak mengikuti tetapan gas $R$',
      ],
      correctAnswer: 1,
      explanation: 'Aktivitas termodinamika didefinisikan sebagai $a_i = \\gamma_i X_i$. Pada larutan yang sangat encer (infinitely dilute solution), interaksi antar-molekul terlarut menjadi dapat diabaikan dibanding interaksi dengan pelarut, sehingga perilaku larutan mendekati idealitas sempurna. Berdasarkan konvensi baku, koefisien aktivitas mendekati satu $(\\lim_{X_i \\to 0} \\gamma_i = 1)$, sehingga $a_i \\approx X_i$.',
      misconceptionTarget: 'Mengira koefisien aktivitas mendekati nol ketika larutan dibuat sangat encer',
    },
  ],
};
