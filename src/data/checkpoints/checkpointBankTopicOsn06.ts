import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_OSN_06: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Definisi Laju Diferensial Stoikiometri, Hukum Laju Empiris, & Metode Laju Awal
  'prasyarat-laju-diferensial-metode-awal': [
    {
      id: 'chk-osn06-pre1-q1',
      type: 'multiple_choice',
      question: 'Untuk reaksi kimia fasa gas: $2\\ce{A(g)} + 3\\ce{B(g)} -> 4\\ce{C(g)} + \\ce{D(g)}$, laju berkurangnya konsentrasi gas $\\ce{B}$ terukur secara eksperimen adalah $0.060\\text{ M/s}$. Berapakah laju pembentukan gas $\\ce{C}$ pada saat yang bersamaan?',
      options: [
        '$0.045\\text{ M/s}$',
        '$0.060\\text{ M/s}$',
        '$0.080\\text{ M/s}$',
        '$0.240\\text{ M/s}$',
      ],
      correctAnswer: 2,
      explanation: 'Berdasarkan definisi laju reaksi stoikiometri diferensial:\\n$r = -\\frac{1}{3}\\frac{d[\\ce{B}]}{dt} = +\\frac{1}{4}\\frac{d[\\ce{C}]}{dt}$.\\nMaka: $\\frac{d[\\ce{C}]}{dt} = \\frac{4}{3}\\left(-\\frac{d[\\ce{B}]}{dt}\\right) = \\frac{4}{3} \\times (0.060\\text{ M/s}) = 0.080\\text{ M/s}$.',
      misconceptionTarget: 'Mengabaikan rasio koefisien stoikiometri atau membagi terbalik rasio koefisien 3/4',
    },
    {
      id: 'chk-osn06-pre1-q2',
      type: 'true_false',
      question: 'Orde reaksi keseluruhan dari reaksi kimia kompleks multi-tahap selalu dapat ditentukan secara langsung dari penjumlahan nilai koefisien stoikiometri reaktan pada persamaan reaksi yang telah setara.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH (Miskonsepsi Fatal!). Orde reaksi parsial maupun orde total adalah besaran empiris yang murni diperoleh dari data eksperimen laboratorium. Nilai orde reaksi HANYA sama dengan koefisien stoikiometri jika reaksi tersebut merupakan reaksi elementer tunggal satu tahap.',
      misconceptionTarget: 'Mengasumsikan bahwa koefisien reaksi setara langsung mencerminkan orde reaksi',
    },
    {
      id: 'chk-osn06-pre1-q3',
      type: 'multiple_choice',
      question: 'Suatu reaksi kimia memiliki persamaan hukum laju diferensial teramati $r = k [\\ce{A}]^{1.5} [\\ce{B}]$. Manakah satuan dimensi yang tepat untuk tetapan laju reaksi spesifik ($k$)?',
      options: [
        '$\\text{M}^{-1} \\cdot \\text{s}^{-1}$',
        '$\\text{M}^{-1.5} \\cdot \\text{s}^{-1}$ atau $\\text{L}^{1.5} \\cdot \\text{mol}^{-1.5} \\cdot \\text{s}^{-1}$',
        '$\\text{M}^{1.5} \\cdot \\text{s}^{-1}$',
        '$\\text{s}^{-1}$',
      ],
      correctAnswer: 1,
      explanation: 'Orde reaksi total adalah $n_{\\text{tot}} = 1.5 + 1 = 2.5$.\\nRumus umum dimensi satuan tetapan laju:\\n$\\text{Satuan } k = \\text{M}^{1 - n_{\\text{tot}}} \\cdot \\text{s}^{-1} = \\text{M}^{1 - 2.5} \\cdot \\text{s}^{-1} = \\text{M}^{-1.5} \\cdot \\text{s}^{-1} = \\text{L}^{1.5} \\cdot \\text{mol}^{-1.5} \\cdot \\text{s}^{-1}$.',
      misconceptionTarget: 'Mengira orde reaksi selalu bernilai bulat atau keliru menurunkan formula dimensi satuan k',
    },
  ],

  // Prasyarat 2: Hukum Laju Terintegrasi, Waktu Paruh, & Linierisasi Grafik
  'prasyarat-hukum-laju-terintegrasi-waktu-paruh': [
    {
      id: 'chk-osn06-pre2-q1',
      type: 'multiple_choice',
      question: 'Suatu reaksi dekomposisi memiliki waktu paruh $t_{1/2} = 40.0\\text{ detik}$ ketika konsentrasi awal reaktan adalah $0.10\\text{ M}$. Ketika konsentrasi awal reaktan dinaikkan dua kali lipat menjadi $0.20\\text{ M}$, waktu paruhnya terukur memendek menjadi $20.0\\text{ detik}$. Berapakah orde reaksi dekomposisi tersebut?',
      options: [
        'Orde Nol',
        'Orde Satu',
        'Orde Dua',
        'Orde Tiga',
      ],
      correctAnswer: 2,
      explanation: 'Ketergantungan waktu paruh terhadap konsentrasi awal: $t_{1/2} \\propto [\\ce{A}]_0^{1 - n}$.\\n- Orde 0: $t_{1/2} \\propto [\\ce{A}]_0$ (waktu paruh berlipat ganda jika konsentrasi naik dua kali).\\n- Orde 1: $t_{1/2} = \\frac{\\ln 2}{k}$ (konstan tidak bergantung $[\\ce{A}]_0$).\\n- Orde 2: $t_{1/2} = \\frac{1}{k [\\ce{A}]_0} \\propto [\\ce{A}]_0^{-1}$ (waktu paruh berkurang menjadi setengahnya jika konsentrasi berlipat ganda).\\nKarena $t_{1/2}$ turun dari 40 s menjadi 20 s saat konsentrasi naik 2 kali lipat, reaksi berorde dua murni!',
      misconceptionTarget: 'Mengira bahwa semua reaksi memiliki waktu paruh konstan seperti orde satu atau tertukar dengan orde nol',
    },
    {
      id: 'chk-osn06-pre2-q2',
      type: 'true_false',
      question: 'Pada reaksi kinetika orde satu murni, waktu yang dibutuhkan agar $75\\%$ reaktan bereaksi (tersisa $25\\%$) tepat sama dengan dua kali waktu paruhnya ($t_{75\\%} = 2 \\times t_{1/2}$).',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Pada reaksi orde satu, setiap interval waktu $t_{1/2}$ memangkas konsentrasi menjadi separuhnya: $100\\% \\xrightarrow{t_{1/2}} 50\\% \\xrightarrow{t_{1/2}} 25\\%$. Jadi tersisa $25\\%$ (telah bereaksi $75\\%$) membutuhkan tepat $2 \\times t_{1/2}$. Secara analitis: $t_{75\\%} = \\frac{1}{k}\\ln(100/25) = \\frac{\\ln 4}{k} = \\frac{2\\ln 2}{k} = 2 t_{1/2}$.',
      misconceptionTarget: 'Mengira konsumsi reaktan berlangsung linier sehingga 75% selesai dalam 1.5 kali waktu paruh',
    },
    {
      id: 'chk-osn06-pre2-q3',
      type: 'multiple_choice',
      question: 'Reaksi bimolekular fasa cair $r = k [\\ce{A}][\\ce{B}]^2$ dilangsungkan dengan metode pembanjiran (*flooding*) di mana $[\\ce{B}]_0 = 2.0\\text{ M}$ dibuat sangat berlebih terhadap $[\\ce{A}]_0 = 0.001\\text{ M}$. Kinetika reaksi teramati menyederhanakan diri menjadi:',
      options: [
        'Kinetika orde pseudo-nol dengan tetapan $k\' = k$',
        'Kinetika orde pseudo-satu terhadap $\\ce{A}$ dengan tetapan $k\' = k [\\ce{B}]_0^2$',
        'Kinetika orde pseudo-dua terhadap $\\ce{A}$ dengan tetapan $k\' = k [\\ce{B}]_0$',
        'Kinetika tetap berorde tiga total tanpa perubahan bentuk',
      ],
      correctAnswer: 1,
      explanation: 'Karena $[\\ce{B}]_0 \\gg [\\ce{A}]_0$, konsentrasi $[\\ce{B}]$ praktis konstan sepanjang reaksi ($[\\ce{B}]_t \\approx [\\ce{B}]_0$). Persamaan hukum laju menjadi $r = (k [\\ce{B}]_0^2) [\\ce{A}] = k\' [\\ce{A}]$, yang merupakan kinetika orde pseudo-satu dengan tetapan semu $k\' = k [\\ce{B}]_0^2$.',
      misconceptionTarget: 'Lupa memangkatkan konsentrasi reaktan berlebih atau salah menentukan orde pseudo',
    },
  ],

  // Prasyarat 3: Teori Tumbukan Gas & Teori Keadaan Transisi (Eyring-Polanyi)
  'prasyarat-teori-tumbukan-keadaan-transisi': [
    {
      id: 'chk-osn06-pre3-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan Teori Tumbukan Gas, alasan utama mengapa kenaikan temperatur meningkatkan laju reaksi secara dramatis adalah:',
      options: [
        'Frekuensi tumbukan molekul ($Z_{AB}$) meningkat sebanding dengan kuadrat temperatur',
        'Fraksi molekul yang memiliki energi kinetik melampaui energi aktivasi ($e^{-E_a / RT}$) melonjak tajam secara eksponensial',
        'Faktor orientasi sterik ($\\rho$) meningkat mendekati nilai 1',
        'Molekul reaktan mengalami pemuaian volume sehingga luas permukaan tumbukan membesar',
      ],
      correctAnswer: 1,
      explanation: 'Meskipun frekuensi tumbukan $Z_{AB}$ memang meningkat seiring temperatur, peningkatannya hanya sebanding dengan $\\sqrt{T}$ (sangat kecil, hanya sekitar 1.7% untuk kenaikan 10 K). Peningkatan laju reaksi puluhan hingga ribuan persen didominasi mutlak oleh faktor eksponensial Boltzmann $e^{-E_a / RT}$, yaitu lonjakan fraksi molekul yang energinya mampu melompati rintangan energi aktivasi $E_a$.',
      misconceptionTarget: 'Mengira bahwa peningkatan laju reaksi akibat suhu semata-mata karena partikel bertumbukan jauh lebih sering',
    },
    {
      id: 'chk-osn06-pre3-q2',
      type: 'true_false',
      question: 'Berdasarkan Teori Keadaan Transisi Eyring, jika suatu reaksi asosiasi bimolekular fasa larutan memiliki entropi aktivasi bernilai negatif besar ($\\Delta S^\\ddagger \\ll 0$), hal ini membuktikan bahwa keadaan transisi memiliki struktur geometri yang jauh lebih kaku dan terorganisir dibandingkan reaktan bebasnya.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Nilai $\\Delta S^\\ddagger < 0$ menunjukkan penurunan derajat kebebasan molekuler ketika dua reaktan bergabung membentuk kompleks teraktivasi tunggal yang terkoordinasi kaku, sering kali disertai penataan orientasi molekul pelarut di sekitar muatan lokal keadaan transisi.',
      misconceptionTarget: 'Mengira entropi aktivasi selalu positif karena energi keadaan transisi lebih tinggi dari reaktan',
    },
    {
      id: 'chk-osn06-pre3-q3',
      type: 'multiple_choice',
      question: 'Untuk reaksi elementer fasa gas bimolekular $\\ce{A(g) + B(g) -> Produk}$, hubungan yang tepat antara energi aktivasi empiris Arrhenius ($E_a$) dan entalpi aktivasi Eyring ($\\Delta H^\\ddagger$) adalah:',
      options: [
        '$E_a = \\Delta H^\\ddagger$',
        '$E_a = \\Delta H^\\ddagger + RT$',
        '$E_a = \\Delta H^\\ddagger + 2RT$',
        '$E_a = \\Delta H^\\ddagger - RT$',
      ],
      correctAnswer: 2,
      explanation: 'Dari definisi Arrhenius $E_a = RT^2 \\frac{d\\ln k}{dT}$ dan Persamaan Eyring fasa gas ideal di mana tetapan laju berdimensi tekanan/konsentrasi: untuk reaksi fasa gas unimolekular $E_a = \\Delta H^\\ddagger + RT$, sedangkan untuk reaksi fasa gas bimolekular $E_a = \\Delta H^\\ddagger + 2RT$. (Catatan: untuk reaksi dalam fasa cair terkondensasi, relasinya adalah $E_a = \\Delta H^\\ddagger + RT$).',
      misconceptionTarget: 'Menerapkan formula fasa cair Ea = Delta H‡ + RT untuk reaksi gas bimolekular',
    },
  ],

  // Konsep Inti 1: Persamaan Arrhenius, Energi Aktivasi Eksperimental, & Plot Arrhenius
  'konsep-arrhenius-ketergantungan-suhu': [
    {
      id: 'chk-osn06-core1-q1',
      type: 'multiple_choice',
      question: 'Pada analisis plot Arrhenius garis lurus $\\ln k$ terhadap $1/T$ (dalam $\\text{K}^{-1}$), diperoleh persamaan regresi $y = -6000 x + 25.0$. Berapakah nilai energi aktivasi ($E_a$) reaksi tersebut? ($R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$).',
      options: [
        '$49.9\\text{ kJ/mol}$',
        '$72.1\\text{ kJ/mol}$',
        '$6.00\\text{ kJ/mol}$',
        '$207.8\\text{ kJ/mol}$',
      ],
      correctAnswer: 0,
      explanation: 'Bentuk linear Arrhenius: $\\ln k = \\ln A - \\frac{E_a}{R}\\left(\\frac{1}{T}\\right)$.\\nKemiringan (*slope*) kurva: $m = -\\frac{E_a}{R} = -6000\\text{ K}$.\\nMaka $E_a = -m \\times R = -(-6000\\text{ K}) \\times 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K}) = 49,884\\text{ J/mol} \\approx 49.9\\text{ kJ/mol}$.',
      misconceptionTarget: 'Lupa mengalikan slope dengan tetapan gas universal R atau salah konversi J ke kJ',
    },
    {
      id: 'chk-osn06-core1-q2',
      type: 'true_false',
      question: 'Suatu reaksi kimia dengan energi aktivasi $E_a$ yang sangat tinggi akan mengalami peningkatan laju reaksi yang jauh lebih tajam terhadap kenaikan temperatur dibandingkan reaksi yang memiliki energi aktivasi rendah.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Sensitivitas temperatur dinyatakan oleh turunan $\\frac{d\\ln k}{dT} = \\frac{E_a}{RT^2}$. Semakin besar nilai $E_a$, semakin besar fraksi peningkatan nilai tetapan laju $k$ untuk setiap derajat kenaikan temperatur.',
      misconceptionTarget: 'Mengira sensitivitas laju terhadap suhu bernilai sama untuk semua reaksi kimia',
    },
    {
      id: 'chk-osn06-core1-q3',
      type: 'multiple_choice',
      question: 'Suatu reaksi memiliki energi aktivasi $E_a = 52.0\\text{ kJ/mol}$. Jika temperatur dinaikkan dari $300.0\\text{ K}$ ke $310.0\\text{ K}$, berapakah faktor kelipatan kenaikan tetapan laju ($k_{310} / k_{300}$)? ($R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$).',
      options: [
        '$1.03\\text{ kali}$',
        '$1.96\\text{ kali} \\approx 2.0\\text{ kali}$',
        '$3.85\\text{ kali}$',
        '$10.0\\text{ kali}$',
      ],
      correctAnswer: 1,
      explanation: 'Gunakan persamaan Arrhenius dua suhu:\\n$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R} \\left(\\frac{T_2 - T_1}{T_1 T_2}\\right) = \\frac{52000}{8.314} \\left(\\frac{10}{300 \\times 310}\\right) = 6254.5 \\times (1.0753 \\times 10^{-4}) = 0.6725$.\\n$\\frac{k_2}{k_1} = e^{0.6725} \\approx 1.959 \\approx 1.96\\text{ kali}$.\\nIni selaras sempurna dengan kaidah praktis bahwa kenaikan 10 K melipatgandakan laju sekitar 2 kali lipat untuk Ea ~ 50 kJ/mol.',
      misconceptionTarget: 'Mengira laju reaksi naik proporsional linier dengan rasio temperatur Kelvin (310/300 = 1.03)',
    },
  ],

  // Konsep Inti 2: Tahapan Reaksi Elementer, Tahap Penentu Laju (RDS), & Pendekatan Pra-Kesetimbangan
  'konsep-mekanisme-rds-pra-kesetimbangan': [
    {
      id: 'chk-osn06-core2-q1',
      type: 'multiple_choice',
      question: 'Diusulkan mekanisme reaksi sintesis nitrosil klorida $\\ce{2NO(g) + Cl2(g) -> 2NOCl(g)}$:\\n- Tahap 1 (Cepat, Bolak-balik): $\\ce{NO + Cl2 <=> NOCl2} \\quad (k_1, k_{-1})$\\n- Tahap 2 (Lambat, RDS): $\\ce{NOCl2 + NO -> 2NOCl} \\quad (k_2)$\\nPersamaan hukum laju reaksi keseluruhan adalah:',
      options: [
        '$r = k_2 [\\ce{NOCl2}][\\ce{NO}]$',
        '$r = k_{\\text{obs}} [\\ce{NO}][\\ce{Cl2}]$',
        '$r = k_{\\text{obs}} [\\ce{NO}]^2 [\\ce{Cl2}]$',
        '$r = k_{\\text{obs}} [\\ce{NO}] [\\ce{Cl2}]^2$',
      ],
      correctAnswer: 2,
      explanation: 'Laju reaksi ditentukan oleh tahap lambat (RDS): $r = k_2 [\\ce{NOCl2}][\\ce{NO}]$.\\nKarena $\\ce{NOCl2}$ adalah zat antara tak teramati, gunakan pra-kesetimbangan tahap 1:\\n$k_1 [\\ce{NO}][\\ce{Cl2}] = k_{-1} [\\ce{NOCl2}] \\implies [\\ce{NOCl2}] = \\frac{k_1}{k_{-1}} [\\ce{NO}][\\ce{Cl2}]$.\\nSubstitusikan ke hukum laju RDS:\\n$r = k_2 \\left(\\frac{k_1}{k_{-1}} [\\ce{NO}][\\ce{Cl2}]\\right) [\\ce{NO}] = \\left(\\frac{k_1 k_2}{k_{-1}}\\right) [\\ce{NO}]^2 [\\ce{Cl2}]$.',
      misconceptionTarget: 'Membiarkan zat antara berada di dalam hukum laju akhir atau salah menentukan orde parsial NO',
    },
    {
      id: 'chk-osn06-core2-q2',
      type: 'true_false',
      question: 'Nilai energi aktivasi teramati ($E_{a,\\text{obs}}$) dari suatu reaksi kimia multi-tahap yang memiliki tahap pra-kesetimbangan cepat dapat bernilai negatif ($E_{a,\\text{obs}} < 0$), sehingga laju reaksi justru menurun saat temperatur dinaikkan.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR (Fenomena Olimpiade Klasik!). Hubungan energi aktivasi teramati adalah $E_{a,\\text{obs}} = \\Delta H_1^\\circ + E_{a2}$. Jika tahap kesetimbangan pertama bersifat sangat eksotermik ($\\Delta H_1^\\circ \\ll 0$) sedemikian rupa sehingga $|\\Delta H_1^\\circ| > E_{a2}$, maka $E_{a,\\text{obs}} < 0$. Pada kasus ini, kenaikan suhu menggeser kesetimbangan ke arah kiri dengan sangat drastis, memangkas konsentrasi intermediet melebihi akselerasi kinetik tahap kedua.',
      misconceptionTarget: 'Mengira energi aktivasi teramati mustahil bernilai negatif dalam kinetika kimia',
    },
    {
      id: 'chk-osn06-core2-q3',
      type: 'multiple_choice',
      question: 'Pernyataan manakah yang paling akurat mengenai konsep "molekularitas" dalam kinetika kimia?',
      options: [
        'Molekularitas selalu identik dengan orde reaksi total untuk setiap reaksi stoikiometri',
        'Molekularitas hanya bermakna fisik untuk masing-masing tahap reaksi elementer individual, dan merepresentasikan jumlah partikel reaktan yang saling bertumbukan dalam tahap tersebut',
        'Molekularitas suatu reaksi dapat bernilai pecahan seperti $1.5$ atau bernilai negatif',
        'Molekularitas termolekular (tiga molekul bertumbukan sekaligus) sangat umum dijumpai di alam',
      ],
      correctAnswer: 1,
      explanation: 'Molekularitas adalah konsep teoretis yang HANYA didefinisikan untuk tahap elementer. Molekularitas menyatakan jumlah partikel yang bertumbukan secara simultan pada tahap tersebut (unimolekular = 1, bimolekular = 2, termolekular = 3). Molekularitas selalu berupa bilangan bulat positif dan tidak pernah pecahan atau negatif.',
      misconceptionTarget: 'Mengaitkan molekularitas dengan reaksi stoikiometri keseluruhan atau mengira molekularitas bisa pecahan',
    },
  ],

  // Konsep Inti 3: Pendekatan Keadaan Tunak (SSA) & Mekanisme Lindemann-Hinshelwood
  'konsep-keadaan-tunak-ssa-lindemann': [
    {
      id: 'chk-osn06-core3-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan mekanisme Lindemann-Hinshelwood untuk reaksi unimolekular fasa gas $\\ce{A -> P}$ via intermediet tereksitasi $\\ce{A^*}$:\\n$$\\ce{A + M ->[k_1] A^* + M}, \\quad \\ce{A^* + M ->[k_{-1}] A + M}, \\quad \\ce{A^* ->[k_2] P}$$\\nPada batas tekanan tinggi ($P \\to \\infty$ atau $[\\ce{M}] \\to \\infty$), kinetika reaksi teramati berubah menjadi:',
      options: [
        'Orde Nol',
        'Orde Satu Murni terhadap $\\ce{A}$ dengan tetapan $k_\\infty = \\frac{k_1 k_2}{k_{-1}}$',
        'Orde Dua Total terhadap $\\ce{A}$ dan $\\ce{M}$',
        'Kinetika berhenti karena molekul terdeaktivasi sempurna',
      ],
      correctAnswer: 1,
      explanation: 'Hukum laju Lindemann via SSA adalah $r = \\frac{k_1 k_2 [\\ce{A}][\\ce{M}]}{k_{-1}[\\ce{M}] + k_2}$.\\nPada tekanan tinggi ($[\\ce{M}] \\to \\infty$), laju deaktivasi mendominasi ($k_{-1}[\\ce{M}] \\gg k_2$).\\nPenyebut tereduksi menjadi $k_{-1}[\\ce{M}]$ sehingga $[\\ce{M}]$ membagi habis:\\n$r \\approx \\frac{k_1 k_2 [\\ce{A}][\\ce{M}]}{k_{-1}[\\ce{M}]} = \\left(\\frac{k_1 k_2}{k_{-1}}\\right) [\\ce{A}] = k_\\infty [\\ce{A}]$ (Orde Satu Murni!).',
      misconceptionTarget: 'Mengira pada tekanan tinggi reaksi berorde dua karena frekuensi tumbukan dengan M meningkat',
    },
    {
      id: 'chk-osn06-core3-q2',
      type: 'true_false',
      question: 'Pendekatan Keadaan Tunak (Steady-State Approximation / SSA) Bodenstein menyatakan bahwa konsentrasi dari zat antara reaktif bernilai nol ($[\\text{Intermediate}] = 0$) sepanjang reaksi kimia berlangsung.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH (Miskonsepsi Klasik Bodenstein!). SSA tidak menyatakan bahwa konsentrasi zat antara bernilai nol, melainkan bahwa laju perubahan netto konsentrasinya terhadap waktu bernilai nol ($\\frac{d[\\text{Intermediate}]}{dt} \\approx 0$), yang berarti laju pembentukan zat antara persis mengimbangi laju konsumsinya.',
      misconceptionTarget: 'Menyamakan laju perubahan turunan d[I]/dt = 0 dengan nilai absolut konsentrasi [I] = 0',
    },
    {
      id: 'chk-osn06-core3-q3',
      type: 'multiple_choice',
      question: 'Pada grafik linierisasi Lindemann antara $\\frac{1}{k_{\\text{uni}}}$ (sumbu $y$) terhadap $\\frac{1}{[\\ce{M}]}$ (sumbu $x$), titik potong kurva dengan sumbu vertikal (*intercept*) merepresentasikan besaran:',
      options: [
        'Tetapan aktivasi tumbukan $k_1$',
        'Nilai kebalikan tetapan batas tekanan tinggi: $\\frac{1}{k_\\infty} = \\frac{k_{-1}}{k_1 k_2}$',
        'Tetapan dekomposisi unimolekular $k_2$',
        'Nol (melewati titik pusat koordinat)',
      ],
      correctAnswer: 1,
      explanation: 'Persamaan linear Lindemann adalah:\\n$\\frac{1}{k_{\\text{uni}}} = \\frac{1}{k_\\infty} + \\frac{1}{k_1} \\left(\\frac{1}{[\\ce{M}]}\\right)$.\\nBerdasarkan persamaan garis lurus $y = c + mx$:\\n- Titik potong sumbu $y$ (intercept $c$) adalah $\\frac{1}{k_\\infty} = \\frac{k_{-1}}{k_1 k_2}$.\\n- Kemiringan (*slope* $m$) adalah $\\frac{1}{k_1}$.',
      misconceptionTarget: 'Tertukar antara kemiringan kurva dengan titik potong sumbu y pada grafik Lindemann',
    },
  ],

  // Konsep Inti 4: Kinetika Reaksi Rantai Radikal, Inhibisi Produk, & Batas Ledakan
  'konsep-kinetika-rantai-radikal-eksplosi': [
    {
      id: 'chk-osn06-core4-q1',
      type: 'multiple_choice',
      question: 'Pada reaksi rantai radikal gas hidrogen dan bromin $\\ce{H2 + Br2 -> 2HBr}$, hukum laju yang diturunkan secara analitis adalah:\\n$$r = \\frac{k [\\ce{H2}][\\ce{Br2}]^{1/2}}{1 + m\' \\frac{[\\ce{HBr}]}{[\\ce{Br2}]}}$$\\nKeberadaan konsentrasi produk $[\\ce{HBr}]$ di bagian penyebut secara kinetika mengindikasikan bahwa:',
      options: [
        'Reaksi bersifat autokatalisis di mana produk mempercepat reaksi secara eksponensial',
        'Molekul produk $\\ce{HBr}$ bertindak sebagai inhibitor (penghambat) laju melalui reaksi balik propagasi $\\ce{H^\\bullet + HBr -> H2 + Br^\\bullet}$',
        'Reaksi tidak dapat berlangsung jika bromin berada dalam bentuk gas',
        'Konsentrasi hidrogen tidak memengaruhi laju reaksi',
      ],
      correctAnswer: 1,
      explanation: 'Suku $[\\ce{HBr}]$ pada bagian penyebut menunjukkan fenomena *product inhibition* (retardasi). Ketika produk $\\ce{HBr}$ mulai menumpuk di dalam reaktor, molekul $\\ce{HBr}$ berkompetisi dengan $\\ce{Br2}$ untuk bereaksi dengan atom radikal $\\ce{H^\\bullet}$, mengonsumsi radikal aktif tanpa menghasilkan produk baru dan memperlambat laju pembentukan $\\ce{HBr}$ secara netto.',
      misconceptionTarget: 'Mengira bahwa semua reaksi rantai mengalami autokatalisis atau tidak memahami peran inhibitor produk',
    },
    {
      id: 'chk-osn06-core4-q2',
      type: 'true_false',
      question: 'Ledakan percabangan rantai (*chain-branching explosion*) pada campuran gas hidrogen dan oksigen terjadi ketika laju reaksi percabangan radikal (di mana 1 radikal menghasilkan $\\ge 2$ radikal baru) melampaui laju reaksi terminasi radikal.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Pada tahap percabangan seperti $\\ce{H^\\bullet + O2 -> OH^\\bullet + O^{\\bullet\\bullet}}$, satu pembawa rantai menghasilkan dua radikal baru. Jika laju percabangan ini melampaui laju terminasi di dinding atau fasa gas, konsentrasi radikal meluap secara eksponensial dan memicu ledakan berantai seketika.',
      misconceptionTarget: 'Mengira semua ledakan gas selalu diakibatkan oleh kenaikan temperatur termal semata',
    },
    {
      id: 'chk-osn06-core4-q3',
      type: 'multiple_choice',
      question: 'Pada tahap terminasi rekombinasi dua atom radikal gas $\\ce{2 Br^\\bullet(g) + M(g) -> Br2(g) + M(g)}$, mengapa kehadiran partikel ketiga $\\ce{M}$ mutlak diperlukan secara fisika?',
      options: [
        'Partikel $\\ce{M}$ bertindak sebagai katalis kimiawi yang menurunkan energi aktivasi',
        'Partikel $\\ce{M}$ diperlukan untuk menyerap kelebihan energi vibrasi eksotermik pembentukan ikatan kovalen, mencegah molekul $\\ce{Br2}$ yang baru terbentuk langsung terdisosiasi kembali',
        'Partikel $\\ce{M}$ menyumbangkan elektron ke atom bromin',
        'Partikel $\\ce{M}$ mengoksidasi atom bromin menjadi ion bromida',
      ],
      correctAnswer: 1,
      explanation: 'Ketika dua atom bebas bergabung membentuk ikatan kimia kovalen, energi ikatan dilepaskan dalam jumlah besar. Jika tidak ada badan ketiga $\\ce{M}$ yang bertumbukan untuk menyerap energi ekses tersebut, molekul diatomik yang terbentuk akan berada dalam keadaan vibrasi sangat tereksitasi dan segera terputus kembali dalam waktu kurang dari satu periode vibrasi ($< 10^{-13}\\text{ s}$).',
      misconceptionTarget: 'Mengira tumbukan termolekular dengan partikel M adalah reaksi kimia katalitik biasa',
    },
  ],

  // Konsep Inti 5: Kinetika Katalisis Homogen-Heterogen & Enzim Michaelis-Menten
  'konsep-katalisis-heterogen-enzim': [
    {
      id: 'chk-osn06-core5-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan model kinetika enzimatis Michaelis-Menten $v = \\frac{V_{\\text{max}} [\\ce{S}]}{K_M + [\\ce{S}]}$, bagaimanakah orde reaksi kinetika terhadap konsentrasi substrat saat larutan berada dalam kondisi sangat encer ($[\\ce{S}] \\ll K_M$)?',
      options: [
        'Orde Nol murni terhadap substrat dengan laju konstan $v = V_{\\text{max}}$',
        'Orde Satu semu terhadap substrat dengan laju $v \\approx \\left(\\frac{V_{\\text{max}}}{K_M}\\right) [\\ce{S}]$',
        'Orde Dua terhadap substrat',
        'Laju reaksi bernilai nol dan enzim terinaktivasi',
      ],
      correctAnswer: 1,
      explanation: 'Jika $[\\ce{S}] \\ll K_M$, suku $[\\ce{S}]$ pada penyebut dapat diabaikan terhadap $K_M$: $K_M + [\\ce{S}] \\approx K_M$.\\nMaka persamaan laju tereduksi menjadi:\\n$v \\approx \\frac{V_{\\text{max}}}{K_M} [\\ce{S}] = \\left(\\frac{k_{\\text{cat}}}{K_M} [\\ce{E}]_0\\right) [\\ce{S}]$.\\nReaksi berorde satu terhadap substrat, dan rasio $k_{\\text{cat}} / K_M$ dikenal sebagai efisiensi katalitik enzim.',
      misconceptionTarget: 'Mengira laju reaksi enzimatik selalu berorde nol pada setiap konsentrasi substrat',
    },
    {
      id: 'chk-osn06-core5-q2',
      type: 'true_false',
      question: 'Pada plot linear dua resiprokal Lineweaver-Burk ($\\frac{1}{v}$ terhadap $\\frac{1}{[\\ce{S}]}$), titik potong garis dengan sumbu horizontal negatif (sumbu $x$) sama dengan $-\\frac{1}{K_M}$.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Persamaan Lineweaver-Burk: $\\frac{1}{v} = \\frac{K_M}{V_{\\text{max}}} \\left(\\frac{1}{[\\ce{S}]}\\right) + \\frac{1}{V_{\\text{max}}}$.\\nSaat $\\frac{1}{v} = 0$ (titik potong sumbu $x$):\\n$0 = \\frac{K_M}{V_{\\text{max}}} \\left(\\frac{1}{[\\ce{S}]}\\right) + \\frac{1}{V_{\\text{max}}} \\implies \\frac{K_M}{V_{\\text{max}}} \\left(\\frac{1}{[\\ce{S}]}\\right) = -\\frac{1}{V_{\\text{max}}} \\implies \\frac{1}{[\\ce{S}]} = -\\frac{1}{K_M}$.',
      misconceptionTarget: 'Mengira titik potong sumbu x adalah -KM atau -1/Vmax',
    },
    {
      id: 'chk-osn06-core5-q3',
      type: 'multiple_choice',
      question: 'Perbedaan fundamental antara mekanisme katalisis heterogen Langmuir-Hinshelwood dan mekanisme Eley-Rideal terletak pada:',
      options: [
        'Langmuir-Hinshelwood hanya berlaku untuk katalis fasa cair, sedangkan Eley-Rideal untuk fasa padat',
        'Pada Langmuir-Hinshelwood reaksi terjadi antara dua molekul yang keduanya telah teradsorpsi pada permukaan katalis, sedangkan pada Eley-Rideal molekul teradsorpsi bereaksi langsung dengan molekul yang bertumbukan dari fasa gas',
        'Langmuir-Hinshelwood tidak memerlukan energi aktivasi',
        'Eley-Rideal menghasilkan produk yang tidak terdesorpsi dari permukaan',
      ],
      correctAnswer: 1,
      explanation: 'Perbedaan mekanistik esensial:\\n- Mekanisme Langmuir-Hinshelwood: $\\ce{A_{(ads)} + B_{(ads)} -> Produk_{(ads)} -> Produk_{(g)}}$ (kedua reaktan harus teradsorpsi berdampingan pada situs aktif).\\n- Mekanisme Eley-Rideal: $\\ce{A_{(ads)} + B_{(g)} -> Produk}$ (hanya satu reaktan yang teradsorpsi, bereaksi langsung dengan molekul gas bebas yang menabrak permukaan).',
      misconceptionTarget: 'Mengira kedua mekanisme tersebut identik atau tertukar definisi spesi teradsorpsinya',
    },
  ],
};
