import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_OSN_07: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Penyetaraan Redoks Metode Ion-Elektron
  'prasyarat-penyetaraan-redoks-ion-elektron': [
    {
      id: 'chk-osn07-pre1-q1',
      type: 'multiple_choice',
      question: 'Pada penyetaraan setengah reaksi reduksi ion permanganat menjadi ion mangan(II) dalam suasana asam:\\n$$\\ce{MnO4-(aq) + 8H+(aq) + n e- -> Mn^2+(aq) + 4H2O(l)}$$\\nBerapakah jumlah elektron ($n$) yang ditransfer per mol ion permanganat?',
      options: [
        '$1\\text{ mol } e^-$',
        '$2\\text{ mol } e^-$',
        '$5\\text{ mol } e^-$',
        '$7\\text{ mol } e^-$',
      ],
      correctAnswer: 2,
      explanation: 'Analisis bilangan oksidasi: atom mangan berubah dari biloks $+7$ pada $\\ce{MnO4-}$ menjadi biloks $+2$ pada $\\ce{Mn^2+}$, mengalami penurunan biloks sebesar 5 unit. Secara neraca muatan listrik: muatan ruas kiri $(-1 + 8 - n) = 7 - n$, muatan ruas kanan $= +2$. Agar seimbang: $7 - n = 2 \\implies n = 5\\text{ elektron}$.',
      misconceptionTarget: 'Mengira jumlah elektron sama dengan muatan ion permanganat (-1) atau muatan ion Mn2+ (+2)',
    },
    {
      id: 'chk-osn07-pre1-q2',
      type: 'true_false',
      question: 'Pada reaksi redoks disproporsionasi gas klorin dalam suasana basa panas $\\ce{3Cl2 + 6OH- -> 5Cl- + ClO3- + 3H2O}$, satu spesi zat reaktan yang sama (gas $\\ce{Cl2}$) bertindak sekaligus sebagai reduktor dan oksidator.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Pada reaksi disproporsionasi (autoredoks), atom klorin dengan biloks 0 tereduksi menjadi ion klorida $\\ce{Cl-}$ (biloks -1) dan secara simultan teroksidasi menjadi ion klorat $\\ce{ClO3-}$ (biloks +5). Gas $\\ce{Cl2}$ bertindak sebagai oksidator sekaligus reduktor.',
      misconceptionTarget: 'Mengira disproporsionasi dan komproporsionasi adalah hal yang sama atau mengira air yang bertindak sebagai reduktor',
    },
    {
      id: 'chk-osn07-pre1-q3',
      type: 'multiple_choice',
      question: 'Tahap paling efisien untuk mengonversi persamaan reaksi redoks yang telah setara dalam suasana asam menjadi suasana basa adalah:',
      options: [
        'Mengulang penyetaraan dari awal dengan hanya menambahkan ion $\\ce{OH-}$ di ruas yang kekurangan hidrogen',
        'Menambahkan ion $\\ce{OH-}$ pada KEDUA RUAS dalam jumlah yang sama persis dengan jumlah ion $\\ce{H+}$, lalu menggabungkan $\\ce{H+ + OH- -> H2O}$',
        'Mengganti langsung seluruh ion $\\ce{H+}$ dengan ion $\\ce{OH-}$ tanpa mengubah spesi lainnya',
        'Membagi seluruh koefisien reaksi dengan tetapan autoionisasi air $K_w$',
      ],
      correctAnswer: 1,
      explanation: 'Kaidah konversi asam-basa standar: tambahkan ion $\\ce{OH-}$ ke kedua ruas sejumlah ion $\\ce{H+}$ yang ada. Di ruas yang memiliki $\\ce{H+}$, gabungkan dengan $\\ce{OH-}$ membentuk $\\ce{H2O}$. Terakhir, coret/sederhanakan molekul $\\ce{H2O}$ yang muncul di kedua sisi. Metode ini menjamin neraca massa dan muatan tetap setara secara sempurna.',
      misconceptionTarget: 'Menambahkan ion OH- hanya pada satu ruas atau mengganti H+ secara sembarangan tanpa mengoreksi muatan',
    },
  ],

  // Prasyarat 2: Aspek Kuantitatif Elektrolisis, Hukum Faraday, & Efisiensi Arus
  'prasyarat-hukum-elektrolisis-faraday': [
    {
      id: 'chk-osn07-pre2-q1',
      type: 'multiple_choice',
      question: 'Elektrolisis lelehan magnesium klorida murni $(\\ce{MgCl2})$ dilakukan dengan kuat arus konstan $10.0\\text{ A}$ selama $965\\text{ detik}$. Berapakah jumlah mol logam magnesium murni yang terdeposisi di katoda? ($F = 96,500\\text{ C/mol}$).',
      options: [
        '$0.025\\text{ mol}$',
        '$0.050\\text{ mol}$',
        '$0.100\\text{ mol}$',
        '$0.200\\text{ mol}$',
      ],
      correctAnswer: 1,
      explanation: 'Muatan listrik total: $Q = I \\times t = 10.0\\text{ A} \\times 965\\text{ s} = 9650\\text{ C}$.\\nMol elektron: $n_{e^-} = \\frac{Q}{F} = \\frac{9650\\text{ C}}{96500\\text{ C/mol}} = 0.100\\text{ mol } e^-$.\\nReaksi katoda reduksi kation magnesium: $\\ce{Mg^2+ + 2e- -> Mg(s)}$.\\nValensi elektron $z = 2$, maka: $n_{\\ce{Mg}} = \\frac{n_{e^-}}{2} = \\frac{0.100\\text{ mol}}{2} = 0.050\\text{ mol}$.',
      misconceptionTarget: 'Lupa membagi mol elektron dengan valensi muatan z = 2',
    },
    {
      id: 'chk-osn07-pre2-q2',
      type: 'true_false',
      question: 'Pada proses elektrolisis larutan natrium sulfat encer $(\\ce{Na2SO4})$ menggunakan elektroda inert platina, gas yang dihasilkan di kompartemen anoda adalah gas belerang dioksida $(\\ce{SO2})$.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH (Miskonsepsi Populer Elektrolisis!). Anion sulfat $(\\ce{SO4^2-})$ adalah sisa asam oksi dengan bilangan oksidasi belerang maksimum $(+6)$, sehingga sangat sukar teroksidasi lebih lanjut. Oleh karena itu, molekul pelarut airlah yang teroksidasi di anoda menghasilkan gas oksigen: $\\ce{2H2O(l) -> O2(g) + 4H+(aq) + 4e-}$.',
      misconceptionTarget: 'Mengira anion sulfat akan teroksidasi di anoda menghasilkan gas belerang',
    },
    {
      id: 'chk-osn07-pre2-q3',
      type: 'multiple_choice',
      question: 'Jika suatu proses elektroplating pemurnian tembaga katodik memiliki efisiensi arus listrik (current efficiency) sebesar $\\eta = 85.0\\%$, hal ini secara kuantitatif bermakna:',
      options: [
        '$85.0\\%$ massa elektroda tembaga terlepas ke udara sebagai gas',
        '$85.0\\%$ dari total muatan muatan elektron efektif digunakan untuk mereduksi kation $\\ce{Cu^2+}$, sedangkan $15.0\\%$ sisanya terbuang untuk reaksi samping parasitik',
        'Tegangan listrik sel turun sebesar $85.0\\%$',
        'Kuat arus listrik yang mengalir di kawat penghubung berkurang $15.0\\%$ karena hambatan kabel',
      ],
      correctAnswer: 1,
      explanation: 'Efisiensi arus $\\eta = \\frac{Q_{\\text{efektif}}}{Q_{\\text{total}}} \\times 100\\%$. Efisiensi $85.0\\%$ berarti dari seluruh elektron yang dialirkan oleh sumber arus eksternal, $85.0\\%$ berhasil mereduksi ion target $\\ce{Cu^2+ -> Cu}$, sedangkan $15.0\\%$ muatan elektron dikonsumsi oleh reaksi samping yang tidak diinginkan (seperti reduksi ion $\\ce{H+}$ atau reduksi gas oksigen terlarut).',
      misconceptionTarget: 'Mengira bahwa arus listrik fisik di dalam kawat berkurang atau hilang',
    },
  ],

  // Prasyarat 3: Sel Galvani, Notasi IUPAC, & SHE
  'prasyarat-sel-galvani-standar-she': [
    {
      id: 'chk-osn07-pre3-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan konvensi penulisan notasi diagram sel IUPAC $\\ce{Zn(s) | Zn^2+(aq, 1.0 M) || Cu^2+(aq, 1.0 M) | Cu(s)}$, pernyataan manakah yang paling tepat?',
      options: [
        'Kompartemen sebelah kiri adalah katoda positif tempat berlangsungnya reaksi reduksi seng',
        'Kompartemen sebelah kiri adalah anoda negatif tempat berlangsungnya oksidasi seng, dan sebelah kanan adalah katoda positif tempat reduksi tembaga',
        'Elektron mengalir spontan melalui jembatan garam dari kompartemen tembaga ke seng',
        'Tanda garis ganda $(||)$ melambangkan lempeng elektroda logam',
      ],
      correctAnswer: 1,
      explanation: 'Konvensi IUPAC: $\\ce{Anoda | Larutan Anoda || Larutan Katoda | Katoda}$. Anoda selalu diletakkan di sisi kiri (kutub negatif sel galvani, tempat oksidasi), sedangkan katoda di sisi kanan (kutub positif, tempat reduksi). Jembatan garam dilambangkan dengan garis ganda $(||)$ dan hanya mengalirkan ion, bukan elektron.',
      misconceptionTarget: 'Mengira anoda sel galvani bermuatan positif atau mengira elektron mengalir lewat jembatan garam',
    },
    {
      id: 'chk-osn07-pre3-q2',
      type: 'true_false',
      question: 'Nilai potensial reduksi standar dari Elektroda Hidrogen Standar (Standard Hydrogen Electrode / SHE) didefinisikan oleh IUPAC bernilai tepat $0.000\\text{ V}$ hanya pada temperatur kamar $25.0^\\circ\\text{C}$ (298.15 K).',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Berdasarkan konvensi termodinamika internasional IUPAC, potensial reduksi standar SHE $(\\ce{Pt | H2(1 bar) | H+(a=1)})$ ditetapkan bernilai tepat $E^\\circ \\equiv 0.000\\text{ V}$ pada SEMUA TEMPERATUR sebagai titik nol referensi universal termodinamika elektrokimia.',
      misconceptionTarget: 'Mengira nilai potensial nol volt SHE hanya berlaku pada suhu 25°C',
    },
    {
      id: 'chk-osn07-pre3-q3',
      type: 'multiple_choice',
      question: 'Diketahui data potensial reduksi standar:\\n- $E^\\circ(\\ce{Fe^2+/Fe}) = -0.44\\text{ V}$\\n- $E^\\circ(\\ce{Ag+/Ag}) = +0.80\\text{ V}$\\nBerapakah nilai potensial sel standar ($E^\\circ_{\\text{sel}}$) untuk reaksi spontan yang terbentuk antara kedua elektroda tersebut?',
      options: [
        '$+0.36\\text{ V}$',
        '$+1.16\\text{ V}$',
        '$+1.24\\text{ V}$',
        '$+2.04\\text{ V}$',
      ],
      correctAnswer: 2,
      explanation: 'Reaksi spontan terjadi dengan memilih katoda yang memiliki $E^\\circ$ lebih positif (perak, $+0.80\\text{ V}$) dan anoda yang memiliki $E^\\circ$ lebih negatif (besi, $-0.44\\text{ V}$):\\n$E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = +0.80\\text{ V} - (-0.44\\text{ V}) = +1.24\\text{ V}$.\\nCatatan: Nilai $E^\\circ$ adalah besaran intensif sehingga potensial reduksi perak TIDAK BOLEH dikalikan dengan dua meskipun reaksi setaranya melibatkan $2\\ce{Ag+}$.',
      misconceptionTarget: 'Mengalikan nilai E° dengan koefisien stoikiometri atau salah tanda minus pada pengurangan anoda',
    },
  ],

  // Konsep Inti 1: Termodinamika Elektrokimia: Relasi Gibbs, K, & Koefisien Suhu
  'konsep-termodinamika-elektrokimia-gibbs': [
    {
      id: 'chk-osn07-core1-q1',
      type: 'multiple_choice',
      question: 'Suatu sel elektrokimia reversibel memiliki potensial sel terukur $E_{\\text{sel}} = +1.20\\text{ V}$ dengan transfer muatan $n = 2\\text{ mol elektron}$. Berapakah perubahan energi bebas Gibbs ($\\Delta G$) dari reaksi sel tersebut? ($F = 96,485\\text{ C/mol}$).',
      options: [
        '$+231.6\\text{ kJ/mol}$',
        '$-115.8\\text{ kJ/mol}$',
        '$-231.6\\text{ kJ/mol}$',
        '$-463.1\\text{ kJ/mol}$',
      ],
      correctAnswer: 2,
      explanation: 'Hubungan kerja listrik maksimum dengan energi bebas Gibbs: $\\Delta G = -n F E_{\\text{sel}}$.\\n$\\Delta G = -(2\\text{ mol}) \\times (96,485\\text{ C/mol}) \\times (1.20\\text{ J/C}) = -231,564\\text{ J/mol} \\approx -231.6\\text{ kJ/mol}$.\\nNilai negatif mengonfirmasi bahwa reaksi berlangsung eksergonik spontan.',
      misconceptionTarget: 'Lupa menyertakan tanda minus pada relasi Delta G = -nFE atau salah konversi Joule ke kJ',
    },
    {
      id: 'chk-osn07-core1-q2',
      type: 'true_false',
      question: 'Jika suatu sel galvani memiliki koefisien temperatur potensial sel bernilai positif $\\left(\\frac{\\partial E}{\\partial T}\\right)_P > 0$, maka reaksi sel tersebut memiliki perubahan entropi positif $(\\Delta S > 0)$ dan sel akan menyerap kalor reversibel dari lingkungan saat menghasilkan arus listrik secara isotermal.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Berdasarkan relasi Maxwell termodinamika elektrokimia: $\\Delta S = nF \\left(\\frac{\\partial E}{\\partial T}\\right)_P$. Jika koefisien suhu positif, maka $\\Delta S > 0$. Kalor reversibel isotermal adalah $q_{\\text{rev}} = T\\Delta S > 0$, yang berarti sel menyerap kalor dari lingkungan untuk mempertahankan temperaturnya konstan saat bekerja.',
      misconceptionTarget: 'Mengira bahwa semua sel elektrokimia yang bekerja selalu membuang kalor eksotermik ke lingkungan',
    },
    {
      id: 'chk-osn07-core1-q3',
      type: 'multiple_choice',
      question: 'Suatu reaksi redoks melibatkan transfer $n = 2$ elektron dan memiliki nilai tetapan kesetimbangan $K = 1.0 \\times 10^{10}$ pada temperatur $25.0^\\circ\\text{C}$. Berapakah nilai potensial sel standar ($E^\\circ_{\\text{sel}}$) dari reaksi tersebut?',
      options: [
        '$+0.296\\text{ V}$',
        '$+0.592\\text{ V}$',
        '$+0.148\\text{ V}$',
        '$+1.183\\text{ V}$',
      ],
      correctAnswer: 0,
      explanation: 'Formula potensial sel dan tetapan kesetimbangan pada $25^\\circ\\text{C}$:\\n$E^\\circ_{\\text{sel}} = \\frac{0.05916}{n} \\log_{10} K = \\frac{0.05916}{2} \\log_{10}(1.0 \\times 10^{10}) = 0.02958 \\times 10 = +0.2958\\text{ V} \\approx +0.296\\text{ V}$.',
      misconceptionTarget: 'Lupa membagi dengan n = 2 atau tertukar antara log basis 10 dengan ln',
    },
  ],

  // Konsep Inti 2: Persamaan Nernst Non-Standar & Ketergantungan pH
  'konsep-persamaan-nernst-multivariabel': [
    {
      id: 'chk-osn07-core2-q1',
      type: 'multiple_choice',
      question: 'Untuk reaksi setengah sel reduksi gas oksigen dalam suasana asam:\\n$$\\ce{O2(g) + 4H+(aq) + 4e- <=> 2H2O(l)} \\quad (E^\\circ = +1.229\\text{ V pada pH 0})$$\\nBerapakah kemiringan perubahan potensial reduksi terhadap pH ($\\frac{dE}{d\\text{pH}}$) pada temperatur $25.0^\\circ\\text{C}$ jika tekanan gas $\\ce{O2}$ dipertahankan konstan pada $1.0\\text{ bar}$?',
      options: [
        '$-0.0148\\text{ V/pH}$',
        '$-0.0592\\text{ V/pH}$ ($-59.2\\text{ mV/pH}$)',
        '$-0.2366\\text{ V/pH}$',
        '$+0.0592\\text{ V/pH}$',
      ],
      correctAnswer: 1,
      explanation: 'Persamaan Nernst: $E = E^\\circ - \\frac{0.05916}{4}\\log\\left(\\frac{1}{P_{\\ce{O2}} [\\ce{H+}]^4}\\right) = E^\\circ + \\frac{0.05916}{4}\\log([\\ce{H+}]^4) = E^\\circ + 0.05916 \\log[\\ce{H+}]$.\\nKarena $\\text{pH} = -\\log[\\ce{H+}]$, maka:\\n$E = E^\\circ - 0.05916 \\cdot \\text{pH}$.\\nKemiringan terhadap pH adalah $\\frac{dE}{d\\text{pH}} = -0.05916\\text{ V/pH} = -59.2\\text{ mV/pH}$.',
      misconceptionTarget: 'Membagi kembali dengan 4 padahal jumlah ion H+ dan elektron sama-sama bernilai 4 sehingga saling membagi habis',
    },
    {
      id: 'chk-osn07-core2-q2',
      type: 'true_false',
      question: 'Ketika suatu sel baterai galvani telah habis total (tegangan sel terukur $E_{\\text{sel}} = 0.00\\text{ V}$), hal ini membuktikan bahwa seluruh reaktan kimia di dalam baterai telah bereaksi sempurna hingga habis tak tersisa.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH (Miskonsepsi Fatal Baterai!). Tegangan sel bernilai nol ($E_{\\text{sel}} = 0$) bukan berarti reaktan habis 100%, melainkan sistem elektrokimia telah mencapai **keadaan kesetimbangan dinamis kimiawi** di mana kuosien reaksi sama dengan tetapan kesetimbangan ($Q = K_{eq}$) dan $\\Delta G = 0$. Reaktan masih ada di dalam baterai, tetapi energi bebas pendorongnya telah habis.',
      misconceptionTarget: 'Mengira bahwa baterai habis berarti reaktan kimia lenyap total',
    },
    {
      id: 'chk-osn07-core2-q3',
      type: 'multiple_choice',
      question: 'Pada sel Daniell $\\ce{Zn(s) + Cu^2+(aq) -> Zn^2+(aq) + Cu(s)}$, perlakuan manakah yang akan menaikkan nilai potensial sel ($E_{\\text{sel}}$) pada temperatur konstan?',
      options: [
        'Memperbesar ukuran lempeng elektroda logam seng dan tembaga',
        'Menambahkan air murni ke dalam kompartemen anoda (mengencerkan $[\\ce{Zn^2+}]$) sekaligus memekatkan $[\\ce{Cu^2+}]$ di katoda',
        'Menambahkan larutan natrium sulfat pekat ke kompartemen anoda',
        'Menaikkan konsentrasi ion seng $[\\ce{Zn^2+}]$ hingga jenuh',
      ],
      correctAnswer: 1,
      explanation: 'Persamaan Nernst untuk sel Daniell: $E = E^\\circ - \\frac{0.05916}{2}\\log\\left(\\frac{[\\ce{Zn^2+}]}{[\\ce{Cu^2+}]}\\right)$.\\nAgar nilai $E_{\\text{sel}}$ meningkat, rasio kuosien $Q = \\frac{[\\ce{Zn^2+}]}{[\\ce{Cu^2+}]}$ harus diperkecil sekecil mungkin. Mengencerkan $[\\ce{Zn^2+}]$ dan memekatkan $[\\ce{Cu^2+}]$ membuat suku logaritma bernilai sangat negatif, sehingga nilai $E_{\\text{sel}}$ melonjak melampaui $E^\\circ$. Ukuran lempeng padatan murni tidak memengaruhi potensial sel karena aktivitasnya tetap 1.',
      misconceptionTarget: 'Mengira bahwa memperbesar ukuran fisik lempeng logam padatan murni akan meningkatkan voltase sel',
    },
  ],

  // Konsep Inti 3: Sel Konsentrasi, Penentuan Ksp & Kf Potensiometri
  'konsep-sel-konsentrasi-potensiometri': [
    {
      id: 'chk-osn07-core3-q1',
      type: 'multiple_choice',
      question: 'Pada sel konsentrasi perak $\\ce{Ag(s) | Ag+(aq, 0.0010 M) || Ag+(aq, 1.00 M) | Ag(s)}$, arah aliran elektron spontan melalui kawat penghantar luar adalah:',
      options: [
        'Dari elektroda di kompartemen larutan pekat ($1.00\\text{ M}$) menuju kompartemen larutan encer ($0.0010\\text{ M}$)',
        'Dari elektroda di kompartemen larutan encer ($0.0010\\text{ M}$) menuju kompartemen larutan pekat ($1.00\\text{ M}$)',
        'Elektron tidak mengalir karena kedua elektroda terbuat dari logam yang sama',
        'Elektron mengalir bolak-balik tanpa arah netto',
      ],
      correctAnswer: 1,
      explanation: 'Sistem spontan berusaha menyamakan konsentrasi kedua kompartemen. Kompartemen encer harus memproduksi lebih banyak $\\ce{Ag+}$ via oksidasi: $\\ce{Ag -> Ag+ + e-}$ (bertindak sebagai anoda, kutub negatif penghasil elektron). Kompartemen pekat harus mengurangi $\\ce{Ag+}$ via reduksi: $\\ce{Ag+ + e- -> Ag}$ (katoda, kutub positif penangkap elektron). Elektron mengalir spontan dari anoda encer ke katoda pekat.',
      misconceptionTarget: 'Mengira elektron mengalir dari kompartemen yang ionnya lebih banyak (pekat)',
    },
    {
      id: 'chk-osn07-core3-q2',
      type: 'true_false',
      question: 'Nilai potensial sel standar ($E^\\circ_{\\text{sel}}$) dari suatu sel konsentrasi selalu bernilai tepat nol volt ($E^\\circ_{\\text{sel}} = 0.000\\text{ V}$).',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Karena anoda dan katoda terbuat dari material kimia dan ion yang identik pada kondisi standar ($1.0\\text{ M}$), potensial reduksi standar katoda dan anoda persis sama ($E^\\circ_{\\text{katoda}} = E^\\circ_{\\text{anoda}}$). Maka $E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = 0.000\\text{ V}$. GGL yang terukur murni didorong oleh gradien konsentrasi non-standar.',
      misconceptionTarget: 'Mengira potensial standar sel konsentrasi bernilai positif',
    },
    {
      id: 'chk-osn07-core3-q3',
      type: 'multiple_choice',
      question: 'Jika ke dalam kompartemen anoda sel konsentrasi perak ditambahkan larutan amonia pekat $(\\ce{NH3})$ sehingga terjadi reaksi pembentukan ion kompleks diamina perak(I) $\\ce{Ag+ + 2NH3 <=> [Ag(NH3)2]+}$ ($K_f = 1.7 \\times 10^7$), bagaimanakah respons potensial sel ($E_{\\text{sel}}$) yang terbaca pada voltmeter?',
      options: [
        'Potensial sel turun mendekati nol karena amonia menetralkan larutan',
        'Potensial sel melonjak naik secara dramatis karena konsentrasi ion perak bebas $[\\ce{Ag+}]$ di anoda anjlok drastis',
        'Potensial sel tidak berubah karena amonia tidak bermuatan listrik',
        'Arah aliran elektron berbalik seketika',
      ],
      correctAnswer: 1,
      explanation: 'Pembentukan ion kompleks stabil $[\\ce{Ag(NH3)2}]+$ mengikat ion perak bebas dan memangkas konsentrasi $[\\ce{Ag+}]_{\\text{anoda}}$ hingga tingkat nanometrik ($10^{-8}\\text{ M}$ atau lebih rendah). Berdasarkan Persamaan Nernst $E = -0.05916 \\log\\left(\\frac{[\\ce{Ag+}]_{\\text{anoda}}}{[\\ce{Ag+}]_{\\text{katoda}}}\\right)$, penurunan masif pada pembilang membuat rasio konsentrasi anjlok hebat, sehingga nilai voltase $E_{\\text{sel}}$ melonjak tajam.',
      misconceptionTarget: 'Mengira penambahan ligan kompleks menurunkan voltase sel',
    },
  ],

  // Konsep Inti 4: Diagram Latimer, Frost, & Disproporsionasi
  'konsep-diagram-latimer-frost-pourbaix': [
    {
      id: 'chk-osn07-core4-q1',
      type: 'multiple_choice',
      question: 'Diberikan cuplikan diagram Latimer:\\n$$\\ce{A ->[+0.80\\text{ V}] B ->[+0.20\\text{ V}] C}$$\\ndi mana tahap $\\ce{A -> B}$ melibatkan transfer $1\\text{ elektron}$ dan tahap $\\ce{B -> C}$ melibatkan transfer $2\\text{ elektron}$. Berapakah nilai potensial reduksi standar langsung untuk transformasi $\\ce{A -> C}$ ($3\\text{ elektron}$)?',
      options: [
        '$+1.00\\text{ V}$',
        '$+0.50\\text{ V}$',
        '$+0.40\\text{ V}$',
        '$+0.33\\text{ V}$',
      ],
      correctAnswer: 2,
      explanation: 'Potensial reduksi BUKAN besaran ekstensif sehingga TIDAK BOLEH dijumlahkan secara langsung! Gunakan neraca energi bebas Gibbs ($\\Delta G^\\circ = -n F E^\\circ$):\\n$E^\\circ_{\\ce{A->C}} = \\frac{n_1 E_1^\\circ + n_2 E_2^\\circ}{n_1 + n_2} = \\frac{1(+0.80\\text{ V}) + 2(+0.20\\text{ V})}{1 + 2} = \\frac{0.80 + 0.40}{3} = \\frac{1.20\\text{ V}}{3} = +0.40\\text{ V}$.',
      misconceptionTarget: 'Menjumlahkan langsung potensial elektroda 0.80 + 0.20 = 1.00 V',
    },
    {
      id: 'chk-osn07-core4-q2',
      type: 'true_false',
      question: 'Pada diagram Latimer $\\ce{A ->[E^\\circ_{\\text{kiri}}] B ->[E^\\circ_{\\text{kanan}}] C}$, spesi intermediet $\\ce{B}$ bersifat termodinamis tidak stabil dan akan mengalami disproporsionasi spontan jika dan hanya jika $E^\\circ_{\\text{kanan}} > E^\\circ_{\\text{kiri}}$.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Reaksi disproporsionasi adalah $\\ce{2B -> A + C}$. Potensial sel disproporsionasi adalah $E^\\circ_{\\text{disprop}} = E^\\circ_{\\text{reduksi}} - E^\\circ_{\\text{oksidasi}} = E^\\circ_{\\text{kanan}} - E^\\circ_{\\text{kiri}}$. Agar spontan ($\\Delta G^\\circ < 0$), maka $E^\\circ_{\\text{disprop}} > 0 \\iff E^\\circ_{\\text{kanan}} > E^\\circ_{\\text{kiri}}$.',
      misconceptionTarget: 'Mengira disproporsionasi spontan jika potensial sebelah kiri lebih besar dari sebelah kanan',
    },
    {
      id: 'chk-osn07-core4-q3',
      type: 'multiple_choice',
      question: 'Pada Diagram Frost (plot energi bebas relatif $nE^\\circ$ terhadap bilangan oksidasi $N$), spesi kimia dari suatu unsur yang memiliki stabilitas termodinamika paling tinggi dalam larutan ditunjukkan oleh:',
      options: [
        'Titik yang terletak pada koordinat vertikal paling tinggi (puncak kurva)',
        'Titik yang terletak pada koordinat vertikal paling rendah ("lembah termodinamika")',
        'Titik yang memiliki bilangan oksidasi tepat nol ($N = 0$)',
        'Titik yang berada tepat di tengah kurva',
      ],
      correctAnswer: 1,
      explanation: 'Sumbu vertikal diagram Frost sebanding dengan energi bebas Gibbs pembentukan relatif ($\\Delta G^\\circ / -F = nE^\\circ$). Semakin rendah posisi suatu titik pada sumbu vertikal, semakin rendah tingkat energi bebas Gibbs termodinamikanya. Titik terendah pada kurva Frost bertindak sebagai "lembah termodinamika" (thermodynamic sink) yang merupakan spesi paling stabil dari unsur tersebut.',
      misconceptionTarget: 'Mengira titik tertinggi adalah yang paling stabil atau mengira logam murni selalu paling stabil',
    },
  ],

  // Konsep Inti 5: Sumber Arus Baterai, Sel Bahan Bakar, & Korosi
  'konsep-sumber-arus-baterai-korosi': [
    {
      id: 'chk-osn07-core5-q1',
      type: 'multiple_choice',
      question: 'Pada saat aki asam timbal (lead-acid accumulator) mengalami proses pengosongan muatan (discharge), produk padatan yang terbentuk secara simultan pada KEDUA elektroda (anoda dan katoda) adalah:',
      options: [
        'Logam timbal spons $(\\ce{Pb})$',
        'Timbal(IV) oksida $(\\ce{PbO2})$',
        'Timbal(II) sulfat $(\\ce{PbSO4})$',
        'Timbal(II) oksida $(\\ce{PbO})$',
      ],
      correctAnswer: 2,
      explanation: 'Reaksi pengosongan aki:\\n- Anoda: $\\ce{Pb(s) + SO4^2-(aq) -> PbSO4(s) + 2e-}$\\n- Katoda: $\\ce{PbO2(s) + 4H+(aq) + SO4^2-(aq) + 2e- -> PbSO4(s) + 2H2O(l)}$\\nReaksi bersih: $\\ce{Pb + PbO2 + 2H2SO4 -> 2PbSO4 + 2H2O}$. Kedua elektroda terlapisi padatan putih $\\ce{PbSO4}$ dan asam sulfat terkonsumsi, menurunkan massa jenis cairan elektrolit.',
      misconceptionTarget: 'Mengira katoda menghasilkan timbal bebas atau produk kedua elektroda berbeda senyawa',
    },
    {
      id: 'chk-osn07-core5-q2',
      type: 'true_false',
      question: 'Pada teknik proteksi katodik anoda korban untuk melindungi pipa baja bawah tanah dari korosi, logam seng $(\\ce{Zn})$ atau magnesium $(\\ce{Mg})$ dikorbankan teroksidasi terlebih dahulu karena memiliki nilai potensial reduksi standar yang lebih negatif dibanding besi.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Karena $E^\\circ(\\ce{Mg^2+/Mg}) = -2.37\\text{ V}$ dan $E^\\circ(\\ce{Zn^2+/Zn}) = -0.76\\text{ V}$ jauh lebih negatif dibanding $E^\\circ(\\ce{Fe^2+/Fe}) = -0.44\\text{ V}$, logam korban teroksidasi secara selektif dan menyuplai elektron ke pipa besi, memaksa besi bertindak sebagai katoda terlindungi secara absolut.',
      misconceptionTarget: 'Mengira logam anoda korban harus memiliki potensial reduksi lebih positif seperti tembaga',
    },
    {
      id: 'chk-osn07-core5-q3',
      type: 'multiple_choice',
      question: 'Mengapa efisiensi termodinamika teoritis sel bahan bakar hidrogen-oksigen $(\\eta = \\Delta G^\\circ / \\Delta H^\\circ \\approx 83\\%)$ dapat jauh melampaui efisiensi pembangkit listrik tenaga uap konvensional?',
      options: [
        'Karena sel bahan bakar tidak menghasilkan kalor sama sekali',
        'Karena sel bahan bakar mengonversi energi bebas kimia secara langsung menjadi energi listrik tanpa melalui siklus konversi panas pembakaran mekanik Carnot',
        'Karena gas hidrogen tidak memiliki hambatan listrik',
        'Karena air yang dihasilkan bertindak sebagai konduktor super',
      ],
      correctAnswer: 1,
      explanation: 'Pembangkit listrik termal konvensional membakar bahan bakar menjadi kalor, lalu memanaskan uap untuk memutar turbin mekanik, sehingga dibatasi mutlak oleh efisiensi Siklus Carnot: $\\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}$ (maksimal ~40-50%). Sebaliknya, sel bahan bakar adalah perangkat elektrokimia yang mengekstraksi energi bebas Gibbs $\\Delta G^\\circ$ langsung menjadi kerja listrik $W = -nFE$, melampaui batasan siklus panas Carnot.',
      misconceptionTarget: 'Mengira sel bahan bakar melanggar hukum termodinamika atau mengira reaksi tidak melepaskan panas',
    },
  ],
};
