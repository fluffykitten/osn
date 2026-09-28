import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_OSN_05: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Hukum Kesetimbangan Aksi Massa, Tetapan Kc - Kp - Kx, & Kesetimbangan Heterogen
  'kesetimbangan-dinamis-kc-kp': [
    {
      id: 'chk-osn05-pre1-q1',
      type: 'multiple_choice',
      question: 'Pada temperatur $T$, reaksi sintesis gas fosgen berlangsung reversibel menurut persamaan: $\\ce{CO(g) + Cl2(g) <=> COCl2(g)}$. Bagaimanakah hubungan interkonversi antara tetapan kesetimbangan tekanan parsial $(K_p)$ dan tetapan kesetimbangan konsentrasi $(K_c)$ untuk reaksi tersebut?',
      options: [
        '$K_p = K_c (RT)$',
        '$K_p = \\frac{K_c}{RT} = K_c (RT)^{-1}$',
        '$K_p = K_c (RT)^2$',
        '$K_p = K_c$',
      ],
      correctAnswer: 1,
      explanation: 'Rumus interkonversi: $K_p = K_c (RT)^{\\Delta n_g}$.\\nHitung selisih mol gas: $\\Delta n_g = \\sum n_g(\\text{produk}) - \\sum n_g(\\text{reaktan}) = 1 - (1 + 1) = 1 - 2 = -1$.\\nMaka $K_p = K_c (RT)^{-1} = \\frac{K_c}{RT}$.',
      misconceptionTarget: 'Salah menghitung selisih koefisien gas (mengira delta n = +1 atau lupa tanda minus)',
    },
    {
      id: 'chk-osn05-pre1-q2',
      type: 'true_false',
      question: 'Pada sistem kesetimbangan dekomposisi heterogen $\\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$ di dalam bejana kaku tertutup, penambahan sejumlah serbuk padatan murni kalsium oksida $(\\ce{CaO(s)})$ pada temperatur konstan akan menggeser kesetimbangan ke arah pembentukan reaktan $\\ce{CaCO3(s)}$ kembali.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Zat padat murni $(\\ce{CaCO3(s)}$ dan $\\ce{CaO(s)})$ memiliki aktivitas termodinamika konstan bernilai satu $(a = 1)$. Tetapan kesetimbangan dinyatakan secara murni oleh tekanan parsial gas: $K_p = P_{\\ce{CO2}}$. Penambahan zat padat murni tidak mengubah tekanan parsial gas $\\ce{CO2}$ maupun kuotien reaksi $Q_p$, sehingga sama sekali TIDAK menggeser posisi kesetimbangan.',
      misconceptionTarget: 'Mengira penambahan padatan murni dapat menggeser posisi kesetimbangan heterogen',
    },
    {
      id: 'chk-osn05-pre1-q3',
      type: 'multiple_choice',
      question: 'Untuk reaksi kesetimbangan fasa gas pada temperatur tertentu, kuotien reaksi sesaat terukur bernilai $Q_c = 0.50$ sementara tetapan kesetimbangannya adalah $K_c = 2.00$. Bagaimanakah perubahan energi bebas Gibbs aktual $(\\Delta G)$ dan arah pergeseran spontan reaksi?',
      options: [
        '$\\Delta G < 0$, reaksi spontan bergeser ke arah kanan (membentuk produk)',
        '$\\Delta G > 0$, reaksi spontan bergeser ke arah kiri (membentuk reaktan)',
        '$\\Delta G = 0$, sistem sudah berada dalam kesetimbangan dinamis',
        '$\\Delta G < 0$, reaksi spontan bergeser ke arah kiri',
      ],
      correctAnswer: 0,
      explanation: 'Hubungan termodinamika kuotien reaksi: $\\Delta G = RT \\ln(Q_c / K_c)$.\\nKarena $Q_c < K_c$ ($0.50 < 2.00$), maka rasio $Q_c / K_c = 0.25 < 1 \\implies \\ln(0.25) < 0 \\implies \\Delta G < 0$.\\nNilai $\\Delta G < 0$ menunjukkan bahwa reaksi maju berlangsung spontan ke arah kanan ($\\to$) untuk meningkatkan konsentrasi produk hingga $Q_c = K_c$.',
      misconceptionTarget: 'Tertukar membaca kriteria kespontanan antara kondisi Q < K dan Q > K',
    },
  ],

  // Prasyarat 2: Asas Le Chatelier & Respons Sistem Multivariabel
  'asas-le-chatelier-faktor-pergeseran': [
    {
      id: 'chk-osn05-pre2-q1',
      type: 'multiple_choice',
      question: 'Ke dalam wadah kaku tertutup bervolume tetap yang berisi campuran kesetimbangan gas sintesis amonia $\\ce{N2(g) + 3 H2(g) <=> 2 NH3(g)}$ ditambahkan sejumlah gas argon $(\\ce{Ar})$ pada temperatur konstan. Bagaimanakah pergeseran kesetimbangan yang terjadi?',
      options: [
        'Kesetimbangan bergeser ke kanan karena tekanan total sistem meningkat',
        'Kesetimbangan bergeser ke kiri karena molekul argon menghambat tumbukan efektif',
        'Tidak terjadi pergeseran kesetimbangan sama sekali',
        'Tetapan kesetimbangan $K_p$ meningkat secara otomatis',
      ],
      correctAnswer: 2,
      explanation: 'Pada volume tetap ($V$ konstan), penambahan gas inert argon memang menaikkan tekanan total wadah. Namun, konsentrasi molar ($n_i / V$) dan tekanan parsial masing-masing gas reaktan ($P_i = [i]RT$) sama sekali tidak berubah. Karena tekanan parsial tidak terpengaruh, kuotien reaksi tetap sama dengan tetapan kesetimbangan ($Q_p = K_p$), sehingga tidak terjadi pergeseran kesetimbangan sama sekali.',
      misconceptionTarget: 'Mengira peningkatan tekanan total akibat penambahan gas inert pada volume tetap selalu menggeser kesetimbangan ke arah koefisien gas lebih kecil',
    },
    {
      id: 'chk-osn05-pre2-q2',
      type: 'true_false',
      question: 'Penambahan katalisator padat pada suatu reaksi kimia kesetimbangan tidak hanya mempercepat tercapainya keadaan setimbang, melainkan juga meningkatkan persentase perolehan produk (yield) pada kondisi akhir kesetimbangan.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Katalisator menurunkan energi aktivasi reaksi maju dan reaksi balik dalam proporsi yang persis sama. Oleh karena itu, katalis mempercepat laju pencapaian kesetimbangan secara kinetik, tetapi sama sekali tidak mengubah posisi kesetimbangan termodinamika, tidak mengubah tetapan kesetimbangan $K$, dan tidak meningkatkan persen perolehan produk pada kesetimbangan.',
      misconceptionTarget: 'Mengira katalisator dapat meningkatkan persen hasil (yield) kesetimbangan termodinamika',
    },
    {
      id: 'chk-osn05-pre2-q3',
      type: 'multiple_choice',
      question: 'Reaksi dekomposisi fasa gas dinitrogen tetroksida $\\ce{N2O4(g) <=> 2 NO2(g)}$ bersifat endotermik $(\\Delta H^\\circ = +57.2\\text{ kJ/mol})$. Jika terhadap campuran kesetimbangan tersebut dilakukan perlakuan penaikan temperatur sekaligus pembesaran volume bejana, sistem akan bergeser:',
      options: [
        'Secara kuat ke arah kanan (membentuk lebih banyak $\\ce{NO2}$)',
        'Secara kuat ke arah kiri (membentuk lebih banyak $\\ce{N2O4}$)',
        'Tetap tidak bergeser karena kedua pengaruh saling meniadakan',
        'Ke arah kanan oleh suhu, namun kembali ke kiri oleh volume',
      ],
      correctAnswer: 0,
      explanation: '1. Kenaikan temperatur menguntungkan reaksi endotermik $(\\Delta H > 0)$, sehingga kesetimbangan bergeser ke kanan.\\n2. Pembesaran volume menurunkan tekanan parsial total, memaksa sistem bergeser ke arah yang memiliki jumlah mol gas lebih banyak ($1\\text{ mol } \\ce{N2O4} \\to 2\\text{ mol } \\ce{NO2}$), yaitu ke arah kanan.\\nKedua perturbasi bersinergi mendorong kesetimbangan secara kuat ke arah pembentukan produk gas $\\ce{NO2}$.',
      misconceptionTarget: 'Salah menentukan arah pergeseran akibat efek simultan kenaikan suhu dan pembesaran volume',
    },
  ],

  // Prasyarat 3: Teori Asam-Basa, Autoionisasi Air (Kw), & Skala pH-pOH Presisi
  'teori-asam-basa-autoionisasi-air': [
    {
      id: 'chk-osn05-pre3-q1',
      type: 'multiple_choice',
      question: 'Pada temperatur tubuh manusia ($37.0^\\circ\\text{C}$), tetapan autoionisasi air adalah $K_w = 2.40 \\times 10^{-14}$. Berapakah nilai pH air murni pada kondisi fisiologis tersebut dan apakah sifat larutannya?',
      options: [
        '$\\text{pH} = 7.00$, bersifat netral',
        '$\\text{pH} = 6.81$, bersifat netral sempurna',
        '$\\text{pH} = 6.81$, bersifat asam lemah',
        '$\\text{pH} = 7.19$, bersifat basa lemah',
      ],
      correctAnswer: 1,
      explanation: 'Pada air murni: $[\\ce{H+}] = [\\ce{OH-}] = \\sqrt{K_w} = \\sqrt{2.40 \\times 10^{-14}} \\approx 1.549 \\times 10^{-7}\\text{ M}$.\\n$\\text{pH} = -\\log(1.549 \\times 10^{-7}) = 6.81$.\\nKarena $[\\ce{H+}] = [\\ce{OH-}]$, air murni pada $37^\\circ\\text{C}$ adalah netral sempurna! Nilai pH netral bergeser dari 7.00 karena autoionisasi air bersifat endotermik $(\\Delta H > 0)$, sehingga kenaikan temperatur menaikkan $K_w$.',
      misconceptionTarget: 'Mengira bahwa semua larutan dengan pH di bawah 7.00 pasti bersifat asam tanpa memperhitungkan pengaruh temperatur terhadap Kw',
    },
    {
      id: 'chk-osn05-pre3-q2',
      type: 'true_false',
      question: 'Berdasarkan teori asam-basa Lewis, kation logam transisi bervalensi tinggi seperti ion besi(III) $(\\ce{Fe^3+})$ dalam larutan air bertindak sebagai asam Lewis karena memiliki orbital kosong yang menerima pasangan elektron bebas dari molekul air (basa Lewis).',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Kation logam transisi seperti $\\ce{Fe^3+}$ memiliki orbital $d$ dan $sp$ kosong yang bertindak sebagai akseptor pasangan elektron bebas (LUMO), sedangkan molekul air memiliki pasangan elektron bebas pada atom oksigen yang bertindak sebagai donor (HOMO). Interaksi koordinasi ini membentuk ion kompleks heksaaquabesi(III) $[\\ce{Fe(H2O)6}]^{3+}$, yang merupakan aduk asam-basa Lewis klasik.',
      misconceptionTarget: 'Mengira asam selalu harus memiliki atom hidrogen yang dapat melepaskan proton',
    },
    {
      id: 'chk-osn05-pre3-q3',
      type: 'multiple_choice',
      question: 'Asam hipoklorit $(\\ce{HClO})$ memiliki nilai $\\text{p}K_a = 7.50$ pada temperatur $25^\\circ\\text{C}$. Berapakah nilai tetapan kebasaan $\\text{p}K_b$ dari ion hipoklorit $(\\ce{ClO-})$ yang merupakan basa konjugasinya?',
      options: [
        '$\\text{p}K_b = 6.50$',
        '$\\text{p}K_b = 7.50$',
        '$\\text{p}K_b = -0.50$',
        '$\\text{p}K_b = 14.00$',
      ],
      correctAnswer: 0,
      explanation: 'Hubungan pasangan asam-basa konjugasi pada $25^\\circ\\text{C}$:\\n$K_a \\times K_b = K_w = 1.00 \\times 10^{-14} \\iff \\text{p}K_a + \\text{p}K_b = \\text{p}K_w = 14.00$.\\nMaka $\\text{p}K_b = 14.00 - \\text{p}K_a = 14.00 - 7.50 = 6.50$.',
      misconceptionTarget: 'Mengurangkan dari nilai 7 alih-alih dari pKw = 14',
    },
  ],

  // Konsep Inti 1: Spesiasi Asam-Basa Poliprotik, Fraksi Mol Spesies Alpha, & pH Garam Amfiprotik
  'asam-basa-poliprotik-spesiasi-alpha': [
    {
      id: 'chk-osn05-core1-q1',
      type: 'multiple_choice',
      question: 'Untuk asam diprotik $\\ce{H2A}$ dengan tetapan ionisasi bertingkat berturut-turut $K_{a1} = 1.0 \\times 10^{-3}$ ($\\text{p}K_{a1} = 3.00$) dan $K_{a2} = 1.0 \\times 10^{-8}$ ($\\text{p}K_{a2} = 8.00$), pada nilai pH berapakah fraksi mol spesies amfiprotik $\\alpha_1 = \\frac{[\\ce{HA-}]}{C_{\\text{tot}}}$ mencapai nilai puncak maksimum?',
      options: [
        '$\\text{pH} = 3.00$',
        '$\\text{pH} = 5.50$',
        '$\\text{pH} = 8.00$',
        '$\\text{pH} = 11.00$',
      ],
      correctAnswer: 1,
      explanation: 'Berdasarkan kurva distribusi fraksi spesies alfa asam diprotik, fraksi spesi antara ($\\alpha_1$) mencapai nilai puncak maksimum tepat di tengah antara kedua nilai $\\text{p}K_a$:\\n$\\text{pH}_{\\text{maks}} = \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2} = \\frac{3.00 + 8.00}{2} = 5.50$.',
      misconceptionTarget: 'Mengira fraksi spesi antara maksimum pada pH sama dengan pKa1 atau pKa2',
    },
    {
      id: 'chk-osn05-core1-q2',
      type: 'true_false',
      question: 'Nilai pH larutan garam natrium hidrogen karbonat $(\\ce{NaHCO3})$ berkonsentrasi $0.050\\text{ M}$ dalam air hampir sama persis dengan pH larutan $\\ce{NaHCO3}$ berkonsentrasi $0.200\\text{ M}$, karena dalam batas konsentrasi wajar $(C \\gg K_{a1})$, pH ion amfiprotik tidak bergantung pada konsentrasi analit.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Formula aproksimasi pH ion amfiprotik adalah $[\\ce{H+}] \\approx \\sqrt{K_{a1} K_{a2}} \\implies \\text{pH} \\approx \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}$. Karena variabel konsentrasi $C$ saling membagi habis pada pembilang dan penyebut, nilai pH spesi amfiprotik dalam larutan encer bersifat independen terhadap konsentrasi garam.',
      misconceptionTarget: 'Mengira pengenceran larutan garam amfiprotik akan mengubah pH secara linier mengikuti logaritma konsentrasi',
    },
    {
      id: 'chk-osn05-core1-q3',
      type: 'multiple_choice',
      question: 'Dalam larutan asam fosfat $\\ce{H3PO4}$ $0.10\\text{ M}$ ($K_{a1} = 7.1 \\times 10^{-3}$, $K_{a2} = 6.3 \\times 10^{-8}$, $K_{a3} = 4.5 \\times 10^{-13}$), berapakah konsentrasi kesetimbangan ion hidrogen fosfat $[\\ce{HPO4^2-}]$ dalam larutan?',
      options: [
        '$[\\ce{HPO4^2-}] \\approx 7.1 \\times 10^{-3}\\text{ M}$',
        '$[\\ce{HPO4^2-}] \\approx 6.3 \\times 10^{-8}\\text{ M}$',
        '$[\\ce{HPO4^2-}] \\approx 4.5 \\times 10^{-13}\\text{ M}$',
        '$[\\ce{HPO4^2-}] \\approx 2.7 \\times 10^{-5}\\text{ M}$',
      ],
      correctAnswer: 1,
      explanation: 'Dari ionisasi tahap kedua: $\\ce{H2PO4- <=> H+ + HPO4^2-}$, rumus $K_{a2} = \\frac{[\\ce{H+}][\\ce{HPO4^2-}]}{[\\ce{H2PO4-}]}$.\\nKarena $K_{a1} \\gg K_{a2}$, ionisasi tahap pertama mendominasi pembentukan $[\\ce{H+}]$ dan $[\\ce{H2PO4-}]$ sehingga $[\\ce{H+}] \\approx [\\ce{H2PO4-}]$.\\nMaka kedua suku tersebut saling meniadakan: $[\\ce{HPO4^2-}] \\approx K_{a2} = 6.3 \\times 10^{-8}\\text{ M}$, independen dari konsentrasi awal asam.',
      misconceptionTarget: 'Mengira konsentrasi ion tahap kedua harus dihitung dari persamaan polinomial derajat tiga yang rumit',
    },
  ],

  // Konsep Inti 2: Sistem Penyangga Kompleks & Indeks Kapasitas Buffer Van Slyke
  'larutan-penyangga-kapasitas-van-slyke': [
    {
      id: 'chk-osn05-core2-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan indeks kapasitas penyangga Van Slyke $\\beta = 2.303 \\left( [\\ce{H+}] + [\\ce{OH-}] + \\frac{C_{\\text{tot}} K_a [\\ce{H+}]}{(K_a + [\\ce{H+}])^2} \\right)$, kapasitas penahanan pH maksimum $(\\beta_{\\text{max}})$ suatu sistem buffer asam lemah tercapai ketika:',
      options: [
        '$[\\ce{H+}] \\gg K_a$ (saat pH larutan sangat asam)',
        '$[\\ce{H+}] = K_a$ (saat $\\text{pH} = \\text{p}K_a$ dan rasio basa konjugasi terhadap asam sama dengan $1:1$)',
        '$[\\ce{A-}] / [\\ce{HA}] = 10:1$',
        'Saat larutan diencerkan dengan air dalam volume tak terhingga',
      ],
      correctAnswer: 1,
      explanation: 'Kapasitas buffer mencapai nilai ekstrem maksimum saat turunan $\\frac{d\\beta}{d[\\ce{H+}]} = 0$, yang terjadi tepat pada $[\\ce{H+}] = K_a$ atau $\\text{pH} = \\text{p}K_a$. Pada kondisi ini, konsentrasi asam lemah sama dengan basa konjugasinya ($[\\ce{A-}] = [\\ce{HA}]$) dengan nilai $\\beta_{\\text{max}} \\approx 0.576 \\cdot C_{\\text{tot}}$.',
      misconceptionTarget: 'Mengira kapasitas buffer paling besar ketika salah satu komponen dibuat jauh lebih pekat dari yang lain',
    },
    {
      id: 'chk-osn05-core2-q2',
      type: 'true_false',
      question: 'Rentang kerja efektif suatu larutan penyangga secara praktis dibatasi pada interval $\\text{pH} = \\text{p}K_a \\pm 1.0$, karena di luar rentang ini kapasitas dapar turun drastis di bawah sepertiga dari kapasitas maksimumnya.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Pada $\\text{pH} = \\text{p}K_a \\pm 1$, rasio antara asam dan basa konjugasi telah mencapai $10:1$ atau $1:10$. Di luar rentang ini, salah satu komponen penyangga sudah terlalu sedikit untuk menahan penambahan asam atau basa kuat eksternal, sehingga kapasitas penyangga turun drastis.',
      misconceptionTarget: 'Mengira larutan penyangga tetap efektif pada rentang pH sembarang asalkan konsentrasi analit tinggi',
    },
    {
      id: 'chk-osn05-core2-q3',
      type: 'multiple_choice',
      question: 'Sistem penyangga utama dalam darah manusia $\\ce{CO2(aq) / HCO3-(aq)}$ beroperasi pada pH $7.40$ dengan $\\text{p}K_a\' = 6.10$. Mengapa sistem penyangga ini sangat efektif mempertahankan pH fisiologis meskipun rasio konsentrasinya $[\\ce{HCO3-}] / [\\ce{CO2}] \\approx 20:1$ (berada di luar rentang $\\text{p}K_a \\pm 1$)?',
      options: [
        'Karena darah berada dalam wadah tertutup kedap udara',
        'Karena sistem penyangga darah beroperasi sebagai sistem terbuka (open system) di mana kelebihan gas $\\ce{CO2}$ dapat dibuang secara instan melalui pernapasan paru-paru',
        'Karena asam karbonat adalah asam kuat dalam tubuh manusia',
        'Karena ion natrium bertindak sebagai buffer sekunder',
      ],
      correctAnswer: 1,
      explanation: 'Dalam tubuh manusia, penyangga bikarbonat adalah sistem terbuka (open system). Ketika asam metabolik masuk ke darah dan bereaksi dengan $\\ce{HCO3-}$ menghasilkan $\\ce{CO2}$, kelebihan $\\ce{CO2}$ tidak terakumulasi dalam larutan, melainkan langsung dibuang ke atmosfer melalui peningkatan laju ventilasi paru-paru (pernapasan), menjaga $[\\ce{CO2(aq)}]$ tetap konstan.',
      misconceptionTarget: 'Mengasumsikan sistem penyangga biologis dalam tubuh manusia beroperasi sebagai sistem tertutup statis',
    },
  ],

  // Konsep Inti 3: Analisis Titrimetri Presisi, Titik Ekuivalensi vs Titik Akhir, & Teori Indikator pH
  'kurva-titrasi-titik-ekuivalen-indikator': [
    {
      id: 'chk-osn05-core3-q1',
      type: 'multiple_choice',
      question: 'Pada titrasi $25.00\\text{ mL}$ asam asetat $0.100\\text{ M}$ ($\\text{p}K_a = 4.74$) dengan larutan standar $\\ce{NaOH}$ $0.100\\text{ M}$, berapakah nilai pH larutan tepat saat volume $\\ce{NaOH}$ yang ditambahkan adalah $12.50\\text{ mL}$ (titik setengah ekuivalensi)?',
      options: [
        '$\\text{pH} = 2.87$',
        '$\\text{pH} = 4.74$',
        '$\\text{pH} = 7.00$',
        '$\\text{pH} = 8.72$',
      ],
      correctAnswer: 1,
      explanation: 'Pada titik setengah ekuivalensi, persis separuh asam asetat telah dinetralkan menjadi ion asetat: $[\\ce{CH3COOH}] = [\\ce{CH3COO-}]$. Berdasarkan persamaan Henderson-Hasselbalch: $\\text{pH} = \\text{p}K_a + \\log(1) = \\text{p}K_a = 4.74$.',
      misconceptionTarget: 'Mengira pH pada titik setengah ekuivalensi bernilai netral 7.00',
    },
    {
      id: 'chk-osn05-core3-q2',
      type: 'true_false',
      question: 'Pada titik ekuivalensi titrasi asam lemah dengan basa kuat, larutan selalu memiliki nilai pH tepat $7.00$ karena seluruh asam dan basa telah bereaksi sempurna sesuai rasio stoikiometrinya.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH (Miskonsepsi Populer!). Pada titik ekuivalen asam lemah dengan basa kuat, seluruh analit terkonversi menjadi garam basa (misalnya natrium asetat, $\\ce{CH3COONa}$). Anion asetat mengalami hidrolisis parsial menghasilkan ion $\\ce{OH-}$: $\\ce{CH3COO- + H2O <=> CH3COOH + OH-}$. Akibatnya, larutan pada titik ekuivalen selalu bersifat basa ($\\text{pH} > 7.00$, umumnya $\\text{pH } 8 - 9$).',
      misconceptionTarget: 'Mengira titik ekuivalensi semua titrasi asam-basa selalu menghasilkan larutan ber-pH netral 7.00',
    },
    {
      id: 'chk-osn05-core3-q3',
      type: 'multiple_choice',
      question: 'Indikator asam-basa visual manakah yang paling ideal digunakan untuk titrasi asam asetat dengan larutan standar $\\ce{NaOH}$ agar kesalahan titrasi (titration error) mendekati nol?',
      options: [
        'Metil Jingga (trayek pH $3.1 - 4.4$)',
        'Metil Merah (trayek pH $4.2 - 6.2$)',
        'Bromtimol Biru (trayek pH $6.0 - 7.6$)',
        'Fenolftalein (trayek pH $8.2 - 10.0$)',
      ],
      correctAnswer: 3,
      explanation: 'Titik ekuivalensi titrasi asam asetat dengan $\\ce{NaOH}$ berada di wilayah basa (sekitar $\\text{pH } 8.72$). Agar kesalahan titrasi seminimal mungkin, trayek pH indikator harus mencakup titik ekuivalen tersebut. Fenolftalein (trayek $8.2 - 10.0$) adalah indikator ideal karena mengalami perubahan warna tepat pada lonjakan vertikal titik ekuivalen.',
      misconceptionTarget: 'Memilih indikator metil jingga atau metil merah yang berubah warna jauh sebelum titik ekuivalensi tercapai',
    },
  ],

  // Konsep Inti 4: Termodinamika Kelarutan, Hasil Kali Kelarutan (Ksp), & Efek Ion Senama
  'ksp-kelarutan-efek-ion-senama': [
    {
      id: 'chk-osn05-core4-q1',
      type: 'multiple_choice',
      question: 'Garam kalsium fluorida $(\\ce{CaF2})$ memiliki tetapan hasil kali kelarutan $K_{sp} = 4.0 \\times 10^{-11}$ pada $25^\\circ\\text{C}$. Kelarutan molar $(s)$ garam $\\ce{CaF2}$ dalam air murni dinyatakan oleh formula matematis:',
      options: [
        '$s = \\sqrt{K_{sp}}$',
        '$s = \\sqrt[3]{\\frac{K_{sp}}{4}}$',
        '$s = \\sqrt[3]{K_{sp}}$',
        '$s = \\frac{K_{sp}}{2}$',
      ],
      correctAnswer: 1,
      explanation: 'Disosiasi garam tipe $AB_2$: $\\ce{CaF2(s) <=> Ca^2+(aq) + 2 F-(aq)}$.\\n$[\\ce{Ca^2+}] = s$ dan $[\\ce{F-}] = 2s$.\\n$K_{sp} = [\\ce{Ca^2+}][\\ce{F-}]^2 = (s)(2s)^2 = 4s^3 \\implies s = \\sqrt[3]{\\frac{K_{sp}}{4}}$.\\n$s = \\sqrt[3]{1.0 \\times 10^{-11}} \\approx 2.15 \\times 10^{-4}\\text{ M}$.',
      misconceptionTarget: 'Menggunakan rumus garam biner s = √(Ksp) untuk garam bertipe AB2',
    },
    {
      id: 'chk-osn05-core4-q2',
      type: 'true_false',
      question: 'Dua garam sukar larut yang memiliki tipe stoikiometri berbeda (misalnya $\\ce{AgCl}$ bertipe $AB$ dengan $K_{sp} = 1.8 \\times 10^{-10}$ dan $\\ce{Ag2CrO4}$ bertipe $A_2B$ dengan $K_{sp} = 1.1 \\times 10^{-12}$) dapat langsung dibandingkan kelarutan molarnya hanya dengan melihat nilai numerik $K_{sp}$-nya.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH (Jebakan Klasik OSN!). Garam dengan tipe stoikiometri berbeda memiliki relasi matematis kelarutan yang berbeda:\\n- $\\ce{AgCl}$: $s = \\sqrt{1.8 \\times 10^{-10}} \\approx 1.34 \\times 10^{-5}\\text{ M}$.\\n- $\\ce{Ag2CrO4}$: $s = \\sqrt[3]{\\frac{1.1 \\times 10^{-12}}{4}} \\approx 6.50 \\times 10^{-5}\\text{ M}$.\\nMeskipun nilai $K_{sp}(\\ce{Ag2CrO4})$ lebih kecil dari $\\ce{AgCl}$, kelarutan molar $\\ce{Ag2CrO4}$ ternyata justru hampir 5 kali lebih BESAR dibanding $\\ce{AgCl}$!',
      misconceptionTarget: 'Membandingkan kelarutan molar antar-garam semata-mata dari besaran angka Ksp tanpa memperhatikan rumus stoikiometri kisi',
    },
    {
      id: 'chk-osn05-core4-q3',
      type: 'multiple_choice',
      question: 'Kelarutan molar perak klorida $(\\ce{AgCl}, K_{sp} = 1.8 \\times 10^{-10})$ dalam larutan natrium klorida $(\\ce{NaCl})$ berkonsentrasi $0.10\\text{ M}$ adalah:',
      options: [
        '$1.34 \\times 10^{-5}\\text{ M}$',
        '$1.80 \\times 10^{-9}\\text{ M}$',
        '$1.80 \\times 10^{-10}\\text{ M}$',
        '$0.10\\text{ M}$',
      ],
      correctAnswer: 1,
      explanation: 'Dalam larutan $\\ce{NaCl}$ $0.10\\text{ M}$, konsentrasi ion klorida didominasi oleh ion senama: $[\\ce{Cl-}] = 0.10 + s\' \\approx 0.10\\text{ M}$.\\n$K_{sp} = [\\ce{Ag+}][\\ce{Cl-}] = (s\')(0.10) = 1.8 \\times 10^{-10} \\implies s\' = 1.80 \\times 10^{-9}\\text{ M}$.\\nKelarutan turun drastis hampir 10.000 kali lipat dibanding dalam air murni ($1.34 \\times 10^{-5}\\text{ M}$) akibat efek penekanan ion senama.',
      misconceptionTarget: 'Mengabaikan efek penekanan ion sejenis atau salah memasukkan konsentrasi ion klorida',
    },
  ],

  // Konsep Inti 5: Pengendapan Bertingkat, Kelarutan Bergantung pH, & Ion Kompleks
  'pengendapan-bertingkat-kelarutan-ph-kompleks': [
    {
      id: 'chk-osn05-core5-q1',
      type: 'multiple_choice',
      question: 'Kelarutan garam kalsium fluorida $(\\ce{CaF2})$ meningkat secara signifikan ketika ke dalam larutan jenuhnya ditambahkan asam kuat $(\\ce{HCl})$, sedangkan kelarutan perak klorida $(\\ce{AgCl})$ sama sekali tidak terpengaruh oleh penambahan asam kuat. Alasan kimiawi yang tepat untuk fenomena ini adalah:',
      options: [
        'Kalsium adalah logam alkali tanah reaktif',
        'Ion fluorida $(\\ce{F-})$ adalah basa konjugasi dari asam lemah $\\ce{HF}$ sehingga terprotonasi oleh ion $\\ce{H+}$, sedangkan ion klorida $(\\ce{Cl-})$ adalah basa konjugasi dari asam kuat $\\ce{HCl}$ yang tidak terprotonasi dalam air',
        '$\\ce{AgCl}$ membentuk ion kompleks dengan ion hidronium',
        'Reaksi disosiasi $\\ce{AgCl}$ bersifat endotermik',
      ],
      correctAnswer: 1,
      explanation: 'Ion $\\ce{F-}$ merupakan basa konjugasi dari asam lemah $\\ce{HF}$ ($K_a = 6.8 \\times 10^{-4}$). Penambahan ion $\\ce{H+}$ mengonsumsi ion $\\ce{F-}$ membentuk molekul $\\ce{HF}$, menggeser kesetimbangan $\\ce{CaF2}$ ke kanan (kelarutan naik). Sebaliknya, $\\ce{Cl-}$ adalah basa konjugasi dari asam sangat kuat $\\ce{HCl}$, sehingga tidak bereaksi dengan ion $\\ce{H+}$ dalam larutan encer.',
      misconceptionTarget: 'Mengira semua garam sukar larut selalu dapat dilarutkan dengan penambahan asam kuat',
    },
    {
      id: 'chk-osn05-core5-q2',
      type: 'true_false',
      question: 'Pada proses pemisahan analitis pengendapan bertingkat kation campuran ion $\\ce{I-}$ dan $\\ce{Cl-}$ menggunakan titran perak nitrat $(\\ce{AgNO3})$, ion $\\ce{I-}$ mengendap jauh lebih dahulu sebagai $\\ce{AgI}$, dan lebih dari $99.99\\%$ ion iodida telah mengendap sempurna sebelum endapan $\\ce{AgCl}$ mulai terbentuk.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Karena $K_{sp}(\\ce{AgI}) = 8.5 \\times 10^{-17}$ jauh lebih kecil dibanding $K_{sp}(\\ce{AgCl}) = 1.8 \\times 10^{-10}$, konsentrasi $[\\ce{Ag+}]$ yang dibutuhkan untuk mengendapkan $\\ce{AgI}$ bernilai miliaran kali lebih kecil. Pada saat $\\ce{AgCl}$ tepat mulai mengendap, sisa ion $\\ce{I-}$ dalam larutan hanya tinggal sekitar $0.00005\\%$, membuktikan efisiensi pemisahan kuantitatif yang sempurna.',
      misconceptionTarget: 'Mengira kedua halida akan mengendap bersamaan karena memiliki bilangan oksidasi dan muatan yang sama',
    },
    {
      id: 'chk-osn05-core5-q3',
      type: 'multiple_choice',
      question: 'Endapan perak klorida $(\\ce{AgCl}, K_{sp} = 1.8 \\times 10^{-10})$ dapat larut kembali dalam larutan amonia pekat membentuk ion kompleks diamina perak(I) $\\ce{[Ag(NH3)2]+}$ dengan tetapan pembentukan $K_f = 1.7 \\times 10^7$. Berapakah nilai tetapan kesetimbangan keseluruhan $(K)$ dari reaksi pelarutan kompleks tersebut:\\n$$\\ce{AgCl(s) + 2 NH3(aq) <=> [Ag(NH3)2]+(aq) + Cl-(aq)}$$',
      options: [
        '$K = 1.06 \\times 10^{-17}$',
        '$K = 3.06 \\times 10^{-3}$',
        '$K = 9.44 \\times 10^{16}$',
        '$K = 1.7 \\times 10^7$',
      ],
      correctAnswer: 1,
      explanation: 'Reaksi pelarutan kompleks merupakan penjumlahan reaksi disosiasi $\\ce{AgCl}$ dan reaksi pembentukan kompleks:\\n- $\\ce{AgCl(s) <=> Ag+ + Cl-} \\quad (K_{sp} = 1.8 \\times 10^{-10})$\\n- $\\ce{Ag+ + 2NH3 <=> [Ag(NH3)2]+} \\quad (K_f = 1.7 \\times 10^7)$\\nTetapan kesetimbangan reaksi gabungan adalah hasil kali tetapan masing-masing tahap:\\n$K = K_{sp} \\times K_f = (1.8 \\times 10^{-10}) \\times (1.7 \\times 10^7) = 3.06 \\times 10^{-3}$.',
      misconceptionTarget: 'Membagi Ksp dengan Kf alih-alih mengalikannya untuk reaksi gabungan',
    },
  ],
};
