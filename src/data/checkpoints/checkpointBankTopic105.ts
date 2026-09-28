import type { CheckpointQuizItem } from '../materialsData';

export const CHECKPOINTS_TOPIC_105: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Standar Massa Atom Relatif (Ar), Isotop Karbon-12 & Massa Molekul Relatif (Mr)
  'massa-atom-relatif-dan-isotop-karbon12': [
    {
      id: 'chk-105-pre1-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan konvensi IUPAC internasional, satu satuan massa atom ($1\\text{ sma}$ atau $1\\text{ Da}$) didefinisikan secara presisi sebagai:',
      options: [
        'Massa dari satu buah atom hidrogen-$1$ dalam keadaan diam',
        'Tepat $\\frac{1}{12}$ dari massa satu atom isotop karbon-12 $(\\ce{^{12}C})$ dalam keadaan dasar',
        'Massa rata-rata satu molekul air $(\\ce{H2O})$ pada suhu $4^\\circ\\text{C}$',
        'Massa satu buah proton bebas ditambah satu buah elektron',
      ],
      correctAnswer: 1,
      explanation: 'Sejak tahun 1961, IUPAC menetapkan isotop karbon-12 $(\\ce{^{12}C})$ sebagai standar massa atom universal di mana massa satu atom $\\ce{^{12}C}$ ditetapkan tepat bernilai $12.0000\\text{ sma}$. Oleh karena itu, $1\\text{ sma} = \\frac{1}{12}$ massa satu atom $\\ce{^{12}C} \\approx 1.66054 \\times 10^{-24}\\text{ g}$.',
      misconceptionTarget: 'Mengira hidrogen-1 masih menjadi standar resmi massa atom modern',
    },
    {
      id: 'chk-105-pre1-q2',
      type: 'true_false',
      question: 'Nilai massa atom relatif klorin sebesar $A_r = 35.45$ menunjukkan bahwa di alam dapat ditemukan atom klorin individual yang massanya persis $35.45\\text{ sma}$.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Tidak ada satu pun atom klorin di alam yang memiliki massa $35.45\\text{ sma}$. Di alam, klorin hanya ada sebagai dua isotop diskrit: $\\ce{^{35}Cl}$ (massa $\\approx 35\\text{ sma}$, kelimpahan $75.8\\%$) dan $\\ce{^{37}Cl}$ (massa $\\approx 37\\text{ sma}$, kelimpahan $24.2\\%$) . Nilai $35.45$ adalah rata-rata tertimbang (*weighted average*) dari populasi isotop tersebut.',
      misconceptionTarget: 'Mengira nilai Ar berkoma merefleksikan massa fisik satu atom tunggal',
    },
    {
      id: 'chk-105-pre1-q3',
      type: 'multiple_choice',
      question: 'Berapakah massa molekul relatif $(M_r)$ dari senyawa kristal magnesium sulfat heptahidrat $(\\ce{MgSO4.7H2O})$ jika diketahui $A_r\\, \\ce{Mg} = 24$, $\\ce{S} = 32$, $\\ce{O} = 16$, dan $\\ce{H} = 1$?',
      options: [
        '$120$',
        '$246$',
        '$138$',
        '$260$',
      ],
      correctAnswer: 1,
      explanation: 'Perhitungan: $M_r(\\ce{MgSO4}) = 24 + 32 + (4 \\times 16) = 120$. Tujuh molekul air kristal: $7 \\times M_r(\\ce{H2O}) = 7 \\times (2 + 16) = 7 \\times 18 = 126$. Total $M_r(\\ce{MgSO4.7H2O}) = 120 + 126 = 246$.',
      misconceptionTarget: 'Lupa memperhitungkan massa air kristal atau salah mengalikan koefisien hidrasi',
    },
  ],

  // Prasyarat 2: Persen Komposisi Massa Unsur dalam Senyawa
  'persen-komposisi-massa-unsur': [
    {
      id: 'chk-105-pre2-q1',
      type: 'multiple_choice',
      question: 'Pupuk urea memiliki rumus kimia $\\ce{CO(NH2)2}$. Diketahui $A_r\\, \\ce{C}=12$, $\\ce{O}=16$, $\\ce{N}=14$, $\\ce{H}=1$. Berapakah persentase massa unsur nitrogen di dalam pupuk urea murni?',
      options: [
        '$23.33\\%$',
        '$46.67\\%$',
        '$35.00\\%$',
        '$28.00\\%$',
      ],
      correctAnswer: 1,
      explanation: '$M_r\\,\\ce{CO(NH2)2} = 12 + 16 + 2(14 + 2) = 60$. Jumlah atom nitrogen dalam satu molekul adalah $2$, sehingga total massa nitrogen $= 2 \\times 14 = 28$. Persentase massa $\\%\\ce{N} = \\frac{28}{60} \\times 100\\% \\approx 46.67\\%$.',
      misconceptionTarget: 'Hanya menghitung 1 atom nitrogen padahal indeks di luar kurung mengalikan N menjadi 2',
    },
    {
      id: 'chk-105-pre2-q2',
      type: 'true_false',
      question: 'Dua senyawa kimia berbeda yang memiliki rumus empiris identik (seperti gas asetilena $\\ce{C2H2}$ dan cairan benzena $\\ce{C6H6}$, keduanya memiliki rumus empiris $\\ce{CH}$) selalu memiliki persen komposisi massa unsur karbon dan hidrogen yang persis sama.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Persen massa dihitung dari rasio massa atom terhadap massa satuan rumus. Karena rasio atom karbon dan hidrogen pada kedua senyawa adalah $1 : 1$ (keduanya menyederhanakan menjadi $\\ce{CH}$), maka baik pada asetilena maupun benzena, persentase massa karbon selalu $\\frac{12}{13} \\times 100\\% \\approx 92.3\\%$ dan hidrogen $\\frac{1}{13} \\times 100\\% \\approx 7.7\\%$.',
      misconceptionTarget: 'Mengira senyawa dengan massa molekul berbeda pasti memiliki persen komposisi unsur yang berbeda',
    },
    {
      id: 'chk-105-pre2-q3',
      type: 'multiple_choice',
      question: 'Berapakah massa logam besi murni yang secara teoritis dapat diperoleh dari $160\\text{ gram}$ bijih hematit murni $(\\ce{Fe2O3})$ jika diketahui $A_r\\, \\ce{Fe}=56$ dan $\\ce{O}=16$?',
      options: [
        '$56\\text{ gram}$',
        '$112\\text{ gram}$',
        '$80\\text{ gram}$',
        '$128\\text{ gram}$',
      ],
      correctAnswer: 1,
      explanation: '$M_r\\,\\ce{Fe2O3} = (2 \\times 56) + (3 \\times 16) = 112 + 48 = 160\\text{ g/mol}$. Fraksi massa besi dalam hematit $= \\frac{2 \\times 56}{160} = \\frac{112}{160} = 70\\%$. Massa besi yang diperoleh $= 70\\% \\times 160\\text{ gram} = 112\\text{ gram}$.',
      misconceptionTarget: 'Hanya menghitung satu atom besi (56 g) bukan dua atom besi (112 g)',
    },
  ],

  // Konsep Inti 1: Peta 5 Hukum Dasar Kimia Klasik (Lavoisier, Proust, Dalton, Gay-Lussac, Avogadro)
  'lima-hukum-dasar-kimia-lengkap': [
    {
      id: 'chk-105-core1-q1',
      type: 'multiple_choice',
      question: 'Unsur nitrogen $(\\ce{N})$ dan oksigen $(\\ce{O})$ dapat membentuk dua macam gas oksida: Gas A mengandung $14\\text{ g}$ nitrogen dan $16\\text{ g}$ oksigen; Gas B mengandung $14\\text{ g}$ nitrogen dan $32\\text{ g}$ oksigen. Fakta ini membuktikan:',
      options: [
        'Hukum Kekekalan Massa Lavoisier',
        'Hukum Perbandingan Berganda Dalton, karena perbandingan massa oksigen pada massa nitrogen yang tetap bernilai $16 : 32 = 1 : 2$ (bilangan bulat dan sederhana)',
        'Hukum Perbandingan Volume Gay-Lussac',
        'Hukum Perbandingan Tetap Proust yang menyatakan rumus kedua gas harus identik',
      ],
      correctAnswer: 1,
      explanation: 'Hukum Dalton menyatakan jika dua unsur membentuk lebih dari satu senyawa, maka massa salah satu unsur yang bergabung dengan massa unsur lain yang bernilai tetap berbanding sebagai bilangan bulat dan sederhana. Pada kasus ini, untuk massa nitrogen yang sama ($14\\text{ g}$), massa oksigennya berbanding $16 : 32 = 1 : 2$.',
      misconceptionTarget: 'Tertukar antara Hukum Proust (satu senyawa tunggal) dan Hukum Dalton (dua atau lebih senyawa berbeda)',
    },
    {
      id: 'chk-105-core1-q2',
      type: 'true_false',
      question: 'Hukum Perbandingan Volume Gay-Lussac berlaku untuk seluruh wujud fasa reaksi kimia, termasuk larutan di dalam air $(aq)$ dan endapan padat kristal $(s)$.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Hukum Gay-Lussac secara tegas HANYA berlaku untuk zat-zat yang berwujud **gas** pada suhu dan tekanan yang sama. Hukum ini tidak berlaku untuk zat padat, cairan murni, maupun larutan berair karena partikel padat dan cair tidak memiliki volume molar yang seragam layaknya gas ideal.',
      misconceptionTarget: 'Menerapkan perbandingan volume Gay-Lussac pada zat fasa padat atau larutan',
    },
    {
      id: 'chk-105-core1-q3',
      type: 'multiple_choice',
      question: 'Dua wadah tertutup berukuran sama ($10\\text{ Liter}$) berada pada suhu dan tekanan yang identik. Wadah I diisi penuh dengan gas helium $(\\ce{He})$ dan Wadah II diisi penuh dengan gas belerang heksafluorida $(\\ce{SF6})$. Berdasarkan Hipotesis Avogadro, pernyataan yang BENAR adalah:',
      options: [
        'Wadah I mengandung jumlah partikel gas jauh lebih banyak karena ukuran atom helium sangat kecil',
        'Kedua wadah mengandung jumlah molekul gas yang persis sama banyak, meskipun massa gas pada Wadah II jauh lebih berat',
        'Wadah II memiliki jumlah molekul lebih banyak karena memiliki banyak atom fluorin',
        'Massa kedua wadah sama persis karena volumenya sama',
      ],
      correctAnswer: 1,
      explanation: 'Hipotesis Avogadro menyatakan bahwa pada suhu dan tekanan yang sama, gas-gas yang memiliki volume sama selalu mengandung **jumlah molekul yang sama** ($V \\propto n$), tidak peduli seberapa besar ukuran atau massa masing-masing molekul gas tersebut.',
      misconceptionTarget: 'Mengira gas yang molekulnya lebih besar memakan volume lebih banyak sehingga molekulnya lebih sedikit',
    },
  ],

  // Konsep Inti 2: Konsep Mol & Peta Jembatan Mol (Massa, Partikel, Volume Gas & Molaritas)
  'konsep-mol-dan-jembatan-mol-lengkap': [
    {
      id: 'chk-105-core2-q1',
      type: 'multiple_choice',
      question: 'Di dalam satu mol gas oksigen murni $(\\ce{O2})$, berapakah jumlah molekul $\\ce{O2}$ dan jumlah atom oksigen yang terkandung secara berurutan?',
      options: [
        '$6.022 \\times 10^{23}$ molekul $\\ce{O2}$ dan $6.022 \\times 10^{23}$ atom oksigen',
        '$6.022 \\times 10^{23}$ molekul $\\ce{O2}$ dan $1.2044 \\times 10^{24}$ atom oksigen',
        '$1.2044 \\times 10^{24}$ molekul $\\ce{O2}$ dan $6.022 \\times 10^{23}$ atom oksigen',
        '$3.011 \\times 10^{23}$ molekul $\\ce{O2}$ dan $6.022 \\times 10^{23}$ atom oksigen',
      ],
      correctAnswer: 1,
      explanation: 'Satu mol partikel selalu setara dengan bilangan Avogadro $N_A = 6.022 \\times 10^{23}$. Jadi $1\\text{ mol}$ gas $\\ce{O2}$ mengandung $6.022 \\times 10^{23}$ **molekul** $\\ce{O2}$. Karena setiap molekul $\\ce{O2}$ tersusun atas 2 atom oksigen, jumlah atom oksigennya adalah $2 \\times 6.022 \\times 10^{23} = 1.2044 \\times 10^{24}$ atom oksigen.',
      misconceptionTarget: 'Menyamakan jumlah mol molekul diatomik dengan jumlah mol atom penyusunnya',
    },
    {
      id: 'chk-105-core2-q2',
      type: 'true_false',
      question: 'Volume molar satu mol gas ideal pada kondisi standar STP ($0^\\circ\\text{C}, 1\\text{ atm}$) adalah $22.4\\text{ Liter}$, sedangkan pada kondisi ruang kamar RTP ($25^\\circ\\text{C}, 1\\text{ atm}$) bernilai sekitar $24.4\\text{ Liter}$.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Menurut hukum gas ideal $PV = nRT$, kenaikan suhu dari $0^\\circ\\text{C}$ ($273\\text{ K}$) ke $25^\\circ\\text{C}$ ($298\\text{ K}$) pada tekanan tetap $1\\text{ atm}$ menyebabkan volume gas memuai: $V_{\\text{STP}} = 22.4\\text{ L/mol}$, sedangkan $V_{\\text{RTP}} = \\frac{1 \\times 0.08206 \\times 298}{1} \\approx 24.45\\text{ L/mol}$.',
      misconceptionTarget: 'Menggunakan konstanta 22.4 L pada suhu ruang kamar 25°C',
    },
    {
      id: 'chk-105-core2-q3',
      type: 'multiple_choice',
      question: 'Berapakah volume dari $8\\text{ gram}$ gas metana $(\\ce{CH4})$ jika diukur pada kondisi standar STP ($A_r\\, \\ce{C}=12, \\ce{H}=1$)?',
      options: [
        '$22.4\\text{ Liter}$',
        '$11.2\\text{ Liter}$',
        '$5.6\\text{ Liter}$',
        '$44.8\\text{ Liter}$',
      ],
      correctAnswer: 1,
      explanation: '$M_r\\,\\ce{CH4} = 12 + (4 \\times 1) = 16\\text{ g/mol}$. Jumlah mol gas metana $= \\frac{8\\text{ g}}{16\\text{ g/mol}} = 0.5\\text{ mol}$. Pada kondisi STP, volume gas $= n \\times 22.4\\text{ L/mol} = 0.5 \\times 22.4 = 11.2\\text{ Liter}$.',
      misconceptionTarget: 'Lupa mengonversi massa ke mol terlebih dahulu sebelum mengalikan dengan volume molar',
    },
  ],

  // Konsep Inti 3: Penentuan Rumus Empiris (RE) & Rumus Molekul (RM)
  'penentuan-rumus-empiris-dan-rumus-molekul': [
    {
      id: 'chk-105-core3-q1',
      type: 'multiple_choice',
      question: 'Suatu senyawa hidrokarbon tak dikenal mengandung $80\\%$ karbon dan $20\\%$ hidrogen berdasarkan massa ($A_r\\, \\ce{C}=12, \\ce{H}=1$). Rumus empiris (RE) paling sederhana dari senyawa tersebut adalah:',
      options: [
        '$\\ce{CH}$',
        '$\\ce{CH3}$',
        '$\\ce{CH2}$',
        '$\\ce{C4H}$',
      ],
      correctAnswer: 1,
      explanation: 'Dalam $100\\text{ g}$ sampel: massa C $= 80\\text{ g}$, massa H $= 20\\text{ g}$. Perbandingan mol atom: $n_C = \\frac{80}{12} = 6.67\\text{ mol}$; $n_H = \\frac{20}{1} = 20\\text{ mol}$. Rasio mol paling sederhana: $\\frac{n_C}{n_C} : \\frac{n_H}{n_C} = 1 : \\frac{20}{6.67} = 1 : 3$. Rumus empirisnya adalah $\\ce{CH3}$.',
      misconceptionTarget: 'Langsung membagi persentase massa tanpa mengonversinya ke rasio mol atom',
    },
    {
      id: 'chk-105-core3-q2',
      type: 'true_false',
      question: 'Rumus molekul (RM) definitif suatu senyawa organik dapat ditentukan hanya dari persentase komposisi massa unsur-unsurnya tanpa perlu mengetahui massa molar ($M_r$) senyawa tersebut.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Analisis persentase komposisi massa HANYA menghasilkan perbandingan rasio mol paling sederhana, yaitu Rumus Empiris (RE). Untuk mengetahui faktor pengali bilangan bulat $n$ dalam persamaan $(\\text{RE})_n = \\text{RM}$, kita WAJIB mengetahui data massa molekul relatif ($M_r$) eksperimental dari spektrometri massa atau metode kenaikan titik didih.',
      misconceptionTarget: 'Mengira rumus empiris dan rumus molekul selalu sama tanpa memerlukan data Mr',
    },
    {
      id: 'chk-105-core3-q3',
      type: 'multiple_choice',
      question: 'Suatu zat antioksidan memiliki rumus empiris $\\ce{CH2O}$ dan massa molekul relatif $M_r = 180$. Jika diketahui $A_r\\, \\ce{C}=12, \\ce{H}=1, \\ce{O}=16$, bagaimanakah rumus molekul dari senyawa tersebut?',
      options: [
        '$\\ce{C2H4O2}$',
        '$\\ce{C6H12O6}$',
        '$\\ce{C3H6O3}$',
        '$\\ce{C12H22O11}$',
      ],
      correctAnswer: 1,
      explanation: '$M_r(\\text{RE}) = M_r(\\ce{CH2O}) = 12 + 2(1) + 16 = 30$. Hubungan rumus molekul: $(\\text{RE})_n = \\text{RM} \\implies (30)_n = 180 \\implies n = 6$. Rumus molekulnya adalah $(\\ce{CH2O})_6 = \\ce{C6H12O6}$ (glukosa).',
      misconceptionTarget: 'Salah menghitung faktor pengali n atau mengalikan hanya salah satu atom',
    },
  ],

  // Konsep Inti 4: Stoikiometri Reaksi, Tabel M-R-S & Mekanisme Pereaksi Pembatas
  'stoikiometri-reaksi-dan-pereaksi-pembatas': [
    {
      id: 'chk-105-core4-q1',
      type: 'multiple_choice',
      question: 'Pada proses Haber-Bosch: $\\ce{N2(g) + 3 H2(g) -> 2 NH3(g)}$. Jika dicampurkan $2\\text{ mol}$ gas $\\ce{N2}$ dengan $3\\text{ mol}$ gas $\\ce{H2}$, gas manakah yang bertindak sebagai pereaksi pembatas (*limiting reactant*) dan berapa mol gas amonia $(\\ce{NH3})$ maksimum yang terbentuk?',
      options: [
        'Gas $\\ce{N2}$ sebagai pembatas; terbentuk $4\\text{ mol } \\ce{NH3}$',
        'Gas $\\ce{H2}$ sebagai pembatas; terbentuk $2\\text{ mol } \\ce{NH3}$',
        'Gas $\\ce{H2}$ sebagai pembatas; terbentuk $3\\text{ mol } \\ce{NH3}$',
        'Kedua pereaksi habis bersamaan; terbentuk $2.5\\text{ mol } \\ce{NH3}$',
      ],
      correctAnswer: 1,
      explanation: 'Evaluasi rasio $\\frac{\\text{mol}}{\\text{koefisien}}$: Untuk $\\ce{N2} = \\frac{2}{1} = 2$; untuk $\\ce{H2} = \\frac{3}{3} = 1$. Nilai terkecil adalah $\\ce{H2}$ (nilai 1), sehingga $\\ce{H2}$ adalah pereaksi pembatas dan habis bereaksi seluruhnya. Mol $\\ce{NH3}$ yang terbentuk $= \\frac{2}{3} \\times 3\\text{ mol } \\ce{H2} = 2\\text{ mol}$.',
      misconceptionTarget: 'Menganggap N2 adalah pembatas karena jumlah mol awalnya (2 mol) lebih sedikit dibanding H2 (3 mol)',
    },
    {
      id: 'chk-105-core4-q2',
      type: 'true_false',
      question: 'Dalam reaksi kimia, pereaksi yang memiliki jumlah mol awal paling sedikit selalu otomatis menjadi pereaksi pembatas yang habis bereaksi terlebih dahulu.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Ini adalah miskonsepsi paling umum dalam stoikiometri! Pereaksi pembatas BUKAN pereaksi dengan jumlah mol paling sedikit, melainkan pereaksi dengan nilai rasio $\\frac{\\text{mol awal}}{\\text{koefisien reaksi}}$ paling kecil. Contohnya: $1\\text{ mol } \\ce{O2}$ bereaksi dengan $1\\text{ mol } \\ce{H2}$ dalam $\\ce{2 H2 + O2 -> 2 H2O}$; meskipun molnya sama, $\\ce{H2}$ adalah pembatas karena membutuhkan koefisien 2.',
      misconceptionTarget: 'Menentukan pereaksi pembatas hanya dari kuantitas mol terkecil tanpa membagi koefisien reaksi',
    },
    {
      id: 'chk-105-core4-q3',
      type: 'multiple_choice',
      question: 'Berapakah mol gas karbon dioksida $(\\ce{CO2})$ yang dihasilkan dari pembakaran sempurna $0.25\\text{ mol}$ gas propana $(\\ce{C3H8})$ sesuai reaksi: $\\ce{C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(g)}$ dengan gas oksigen berlebih?',
      options: [
        '$0.25\\text{ mol}$',
        '$0.75\\text{ mol}$',
        '$1.25\\text{ mol}$',
        '$0.50\\text{ mol}$',
      ],
      correctAnswer: 1,
      explanation: 'Karena oksigen berlebih, propana bertindak sebagai pereaksi pembatas. Berdasarkan perbandingan koefisien reaksi: $\\frac{\\text{mol } \\ce{CO2}}{\\text{mol } \\ce{C3H8}} = \\frac{3}{1}$. Maka mol $\\ce{CO2} = 3 \\times 0.25\\text{ mol} = 0.75\\text{ mol}$.',
      misconceptionTarget: 'Mengabaikan koefisien reaksi produk sehingga mengira mol produk sama dengan mol reaktan',
    },
  ],
};
