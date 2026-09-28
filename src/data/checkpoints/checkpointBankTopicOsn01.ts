import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_OSN_01: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Model Atom Bohr, Kuantisasi Momentum Sudut, & Deret Spektrum Hidrogen
  'model-atom-bohr': [
    {
      id: 'chk-osn01-pre1-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan postulat Bohr, momentum sudut orbital elektron hidrogenik terkuantisasi dalam kelipatan bulat $\\hbar = \\frac{h}{2\\pi}$. Jika elektron berada pada tingkat eksitasi kedua ($n=3$), berapakah besar momentum sudut orbitalnya?',
      options: [
        '$1.5\\hbar$',
        '$2\\hbar$',
        '$3\\hbar$',
        '$6\\hbar$',
      ],
      correctAnswer: 2,
      explanation: 'Tingkat dasar adalah $n=1$, tingkat eksitasi pertama adalah $n=2$, dan tingkat eksitasi kedua adalah $n=3$. Sesuai postulat kuantisasi momentum sudut Bohr, $L = n\\hbar = 3\\hbar$. Kesalahan umum siswa adalah menyamakan tingkat eksitasi kedua dengan $n=2$.',
      misconceptionTarget: 'Mengacaukan nomor kulit kuantum (n) dengan nomor tingkat eksitasi (tingkat eksitasi kedua adalah n=3)',
    },
    {
      id: 'chk-osn01-pre1-q2',
      type: 'true_false',
      question: 'Persamaan Rydberg $1/\\lambda = R_\\infty Z^2 (1/n_1^2 - 1/n_2^2)$ dapat digunakan secara akurat tanpa koreksi apa pun untuk menghitung panjang gelombang emisi foton dari atom helium netral $(\\ce{He})$ yang bertransisi dari $n=2$ ke $n=1$.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Formula Rydberg dan model Bohr murni hanya berlaku mutlak untuk spesies berelektron tunggal (spesies hidrogenik) seperti $\\ce{H}$, $\\ce{He+}$, $\\ce{Li^2+}$. Atom helium netral $(\\ce{He})$ memiliki 2 elektron, sehingga timbul gaya tolak-menolak antar-elektron (electron-electron repulsion) yang merusak kesederhanaan potensial medan Coulomb satu pusat.',
      misconceptionTarget: 'Mengasumsikan persamaan Rydberg dan model Bohr berlaku untuk atom netral berelektron banyak',
    },
    {
      id: 'chk-osn01-pre1-q3',
      type: 'multiple_choice',
      question: 'Deret spektrum emisi atom hidrogen yang transisinya jatuh ke kulit dasar $n_1 = 1$ memancarkan foton pada spektrum wilayah elektromagnetik:',
      options: [
        'Cahaya Tampak (Visible: 400–700 nm)',
        'Ultraviolet (Deret Lyman)',
        'Inframerah Dekat (Deret Paschen)',
        'Gelombang Mikro',
      ],
      correctAnswer: 1,
      explanation: 'Transisi menuju kulit dasar $n_1 = 1$ adalah Deret Lyman yang memiliki selisih energi transisi terbesar $(\\Delta E \\ge 10.2\\text{ eV})$, sehingga memancarkan foton berenergi tinggi dalam spektrum Ultraviolet (UV). Transisi ke $n_1 = 2$ menghasilkan Deret Balmer (spektrum tampak).',
      misconceptionTarget: 'Tertukar antara deret Lyman (UV, n1=1) dengan deret Balmer (Tampak, n1=2)',
    },
  ],

  // Prasyarat 2: Dualisme Gelombang-Partikel De Broglie & Prinsip Ketidakpastian Heisenberg
  'de-broglie-heisenberg': [
    {
      id: 'chk-osn01-pre2-q1',
      type: 'multiple_choice',
      question: 'Sebuah partikel bermassa $m$ dan sebuah foton cahaya memiliki panjang gelombang de Broglie yang identik $(\\lambda)$. Bagaimanakah perbandingan momentum linear partikel $(p_{\\text{partikel}})$ terhadap momentum foton $(p_{\\text{foton}})$?',
      options: [
        '$p_{\\text{partikel}} = p_{\\text{foton}}$',
        '$p_{\\text{partikel}} = 2 p_{\\text{foton}}$',
        '$p_{\\text{partikel}} = \\frac{1}{2} p_{\\text{foton}}$',
        '$p_{\\text{partikel}} = \\sqrt{p_{\\text{foton}}}$',
      ],
      correctAnswer: 0,
      explanation: 'Hubungan de Broglie fundamental menyatakan $\\lambda = \\frac{h}{p} \\implies p = \\frac{h}{\\lambda}$. Karena panjang gelombangnya identik dan tetapan Planck $h$ bernilai konstan, momentum keduanya wajib sama persis ($p_{\\text{partikel}} = p_{\\text{foton}}$), terlepas dari perbedaan massa diam atau energi kinetik keduanya.',
      misconceptionTarget: 'Mengira partikel bermassa memiliki hubungan momentum yang berbeda dengan foton saat panjang gelombangnya sama',
    },
    {
      id: 'chk-osn01-pre2-q2',
      type: 'true_false',
      question: 'Prinsip Ketidakpastian Heisenberg menyatakan bahwa elektron bergerak dalam lintasan orbit melingkar yang pasti di sekitar inti, tetapi kita hanya tidak memiliki instrumen mikroskop yang cukup canggih untuk mengukur posisinya secara presisi.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Prinsip Ketidakpastian Heisenberg $(\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2})$ adalah sifat intrinsik alam semesta kuantum akibat dualisme gelombang-partikel, bukan batasan keterbatasan alat ukur teknologis. Partikel kuantum secara mendasar tidak memiliki lintasan trajektori klasik yang deterministik.',
      misconceptionTarget: 'Menganggap ketidakpastian Heisenberg disebabkan oleh kelemahan teknologi alat ukur, bukan sifat gelombang intrinsik kuantum',
    },
    {
      id: 'chk-osn01-pre2-q3',
      type: 'multiple_choice',
      question: 'Jika elektron dipercepat dari keadaan diam melalui beda potensial listrik $V$, panjang gelombang de Broglie elektron $(\\lambda)$ berbanding terbalik secara proporsional dengan:',
      options: [
        '$V$',
        '$V^2$',
        '$\\sqrt{V}$',
        '$1/\\sqrt{V}$',
      ],
      correctAnswer: 2,
      explanation: 'Energi kinetik elektron adalah $E_k = e V = \\frac{p^2}{2m} \\implies p = \\sqrt{2m e V}$. Substitusi ke hubungan de Broglie menghasilkan $\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2m e V}} \\propto \\frac{1}{\\sqrt{V}}$. Maka $\\lambda$ berbanding terbalik dengan $\\sqrt{V}$.',
      misconceptionTarget: 'Lupa bahwa hubungan energi kinetik terhadap momentum kuadratik sehingga muncul akar tegangan (√V)',
    },
  ],

  // Prasyarat 3: Asas Aufbau, Larangan Pauli, Aturan Hund, & Anomali Logam Transisi
  'konfigurasi-elektron': [
    {
      id: 'chk-osn01-pre3-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan aturan Hund dan mekanika kuantum, kestabilan luar biasa dari konfigurasi subkulit setengah penuh atom Kromium $(\\ce{Cr}, Z=24: [\\ce{Ar}] 4s^1 3d^5)$ diakibatkan oleh:',
      options: [
        'Energi ionisasi subkulit $4s$ yang bernilai negatif',
        'Maksimalisasi energi pertukaran kuantum (exchange energy) dari elektron-elektron ber-spin sejajar',
        'Hilangnya seluruh gaya tolak-menolak muatan inti efektif',
        'Pembentukan ikatan kovalen intramolekuler antar-orbital $3d$',
      ],
      correctAnswer: 1,
      explanation: 'Pada konfigurasi $3d^5$ dengan 5 elektron ber-spin paralel, jumlah pasangan pertukaran simetris mencapai $N = \\frac{n(n-1)}{2} = \\frac{5 \\times 4}{2} = 10$ pasangan, dibandingkan hanya 6 pasangan pada $3d^4 4s^2$. Stabilisasi energi pertukaran kuantum (exchange energy) yang bernilai negatif ini lebih dari cukup untuk mengompensasi promosi elektron dari $4s$ ke $3d$.',
      misconceptionTarget: 'Mengira anomali Cr dan Cu hanya sekadar "aturan hafalan setengah penuh/penuh" tanpa dasar kestabilan energi pertukaran kuantum',
    },
    {
      id: 'chk-osn01-pre3-q2',
      type: 'true_false',
      question: 'Ketika atom besi netral $(\\ce{Fe}, Z=26: [\\ce{Ar}] 4s^2 3d^6)$ diionisasi membentuk kation $\\ce{Fe^2+}$, elektron yang dilepaskan terlebih dahulu adalah elektron dari subkulit $3d$ karena orbital $3d$ memiliki tingkat energi lebih tinggi daripada $4s$.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Meskipun saat pengisian atom netral orbital $4s$ terisi lebih dulu (aturan $n+l$), ketika atom logam transisi terionisasi, elektron pada orbital terluar $4s$ selalu dilepaskan terlebih dahulu! Sehingga kation $\\ce{Fe^2+}$ memiliki konfigurasi $[\\ce{Ar}] 3d^6$, bukan $[\\ce{Ar}] 4s^2 3d^4$. Hal ini dibuktikan oleh aturan Slater di mana $Z_{\\text{eff}}(3d) \\gg Z_{\\text{eff}}(4s)$.',
      misconceptionTarget: 'Melepaskan elektron 3d sebelum 4s saat ionisasi kation logam transisi',
    },
    {
      id: 'chk-osn01-pre3-q3',
      type: 'multiple_choice',
      question: 'Dua elektron dalam satu atom tidak boleh memiliki keempat bilangan kuantum $(n, l, m_l, m_s)$ yang identik. Kaidah mutlak ini merupakan pernyataan dari:',
      options: [
        'Asas Aufbau',
        'Aturan Multiplisitas Hund',
        'Prinsip Larangan Pauli',
        'Teorema Virial Kuantum',
      ],
      correctAnswer: 2,
      explanation: 'Prinsip Larangan Wolfgang Pauli menyatakan bahwa fungsi gelombang total sistem fermion (termasuk elektron) harus antisimetris terhadap pertukaran dua partikel, yang berimplikasi bahwa tidak ada dua elektron yang boleh berbagi keempat bilangan kuantum yang identik dalam satu atom.',
      misconceptionTarget: 'Tertukar antara Larangan Pauli (larangan kesamaan 4 bilangan kuantum) dengan Aturan Hund (maksimalisasi spin sejajar)',
    },
  ],

  // Konsep Inti 1: Persamaan Gelombang Schrödinger & Empat Bilangan Kuantum
  'bilangan-kuantum': [
    {
      id: 'chk-osn01-core1-q1',
      type: 'multiple_choice',
      question: 'Manakah dari himpunan empat bilangan kuantum $(n, l, m_l, m_s)$ berikut yang TIDAK DIIZINKAN secara fisik menurut penyelesaian mekanika kuantum Schrödinger?',
      options: [
        '$(3, 2, -1, +1/2)$',
        '$(4, 0, 0, -1/2)$',
        '$(2, 2, +1, +1/2)$',
        '$(5, 3, -2, -1/2)$',
      ],
      correctAnswer: 2,
      explanation: 'Pada himpunan $(2, 2, +1, +1/2)$, nilai $n=2$ membatasi nilai bilangan kuantum azimut $l$ hanya boleh bernilai $0, 1, \\dots, n-1$, sehingga untuk $n=2$, nilai maksimal $l$ adalah $1$ (subkulit $2s$ dan $2p$). Nilai $l=2$ (subkulit $2d$) mustahil ada di alam.',
      misconceptionTarget: 'Mengabaikan syarat bahwa bilangan kuantum azimut l harus memenuhi 0 <= l <= n-1',
    },
    {
      id: 'chk-osn01-core1-q2',
      type: 'true_false',
      question: 'Besar magnitudo momentum sudut orbital kuantum $L$ dari sebuah elektron yang menempati orbital $3d$ ditentukan murni oleh bilangan kuantum magnetik $m_l$, yaitu bernilai $L = m_l \\hbar$.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Magnitudo total momentum sudut orbital ditentukan oleh bilangan kuantum azimut $l$ melalui rumus kuantum $L = \\sqrt{l(l+1)}\\hbar$. Untuk orbital $d$ ($l=2$), nilainya adalah $\\sqrt{2(3)}\\hbar = \\sqrt{6}\\hbar$. Bilangan kuantum magnetik $m_l$ hanya menentukan komponen proyeksi momentum sudut pada sumbu kuantisasi-$z$ ($L_z = m_l \\hbar$).',
      misconceptionTarget: 'Menyamakan momentum sudut total L = √(l(l+1))ħ dengan proyeksi sumbu-z Lz = ml ħ',
    },
    {
      id: 'chk-osn01-core1-q3',
      type: 'multiple_choice',
      question: 'Berapakah jumlah total orbital terdegenerasi (setara energi) yang dimiliki oleh atom hidrogen pada kulit utama $n = 4$ jika mengabaikan interaksi spin-orbit?',
      options: [
        '$4$ orbital',
        '$8$ orbital',
        '$16$ orbital',
        '$32$ orbital',
      ],
      correctAnswer: 2,
      explanation: 'Jumlah total orbital dalam kulit ke-$n$ adalah $n^2$. Untuk $n=4$, terdapat $4^2 = 16$ orbital (1 orbital $4s$, 3 orbital $4p$, 5 orbital $4d$, 7 orbital $4f$: $1 + 3 + 5 + 7 = 16$). Pada spesies satu elektron hidrogenik, seluruh 16 orbital ini terdegenerasi murni pada energi yang sama.',
      misconceptionTarget: 'Tertukar antara jumlah orbital (n^2 = 16) dengan kapasitas maksimum elektron (2n^2 = 32)',
    },
  ],

  // Konsep Inti 2: Probabilitas Elektron, Simpul Radial & Sudut, serta Fungsi Distribusi Radial
  'simpul-radial-sudut': [
    {
      id: 'chk-osn01-core2-q1',
      type: 'multiple_choice',
      question: 'Berapakah jumlah simpul radial ($N_r$) dan simpul sudut ($N_a$) pada orbital atom $4d_{xy}$?',
      options: [
        '$N_r = 1$ dan $N_a = 2$',
        '$N_r = 2$ dan $N_a = 1$',
        '$N_r = 0$ dan $N_a = 3$',
        '$N_r = 1$ dan $N_a = 1$',
      ],
      correctAnswer: 0,
      explanation: 'Untuk orbital $4d$: $n=4, l=2$. Jumlah simpul sudut adalah $N_a = l = 2$ (berupa dua bidang planar simpul $xz$ dan $yz$). Jumlah simpul radial adalah $N_r = n - l - 1 = 4 - 2 - 1 = 1$ (berupa satu permukaan bola konsentris). Total simpul $N_{\\text{tot}} = n - 1 = 3$.',
      misconceptionTarget: 'Keliru menghitung simpul radial dengan rumus n - l atau n - 1',
    },
    {
      id: 'chk-osn01-core2-q2',
      type: 'true_false',
      question: 'Pada inti atom $(r = 0)$, fungsi distribusi probabilitas radial $P(r) = 4\\pi r^2 [R(r)]^2$ untuk elektron $1s$ bernilai maksimum karena kerapatan fungsi gelombang $\\psi(0)$ berada pada nilai puncak tertingginya.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Meskipun fungsi kerapatan gelombang radial $[R(0)]^2$ bernilai maksimum di pusat inti, fungsi distribusi probabilitas radial mengalikan nilai tersebut dengan volume cangkang bola $4\\pi r^2$. Pada $r = 0$, faktor $r^2 = 0$, sehingga probabilitas menemukan elektron tepat di satu titik titik pusat inti atom adalah $P(0) = 0$.',
      misconceptionTarget: 'Mengacaukan densitas probabilitas titik (|ψ|^2) dengan distribusi probabilitas radial cangkang bola (4π r^2 |ψ|^2)',
    },
    {
      id: 'chk-osn01-core2-q3',
      type: 'multiple_choice',
      question: 'Bentuk simpul sudut pada orbital $3d_{z^2}$ berbeda dari empat orbital $d$ lainnya karena simpul sudutnya berupa:',
      options: [
        'Dua bidang datar planar ortogonal yang memotong sumbu-$z$',
        'Dua permukaan kerucut simetris (conical surfaces) dengan puncak di inti atom',
        'Dua permukaan bola konsentris beradius konstan',
        'Satu cincin donat torus bergradien kerapatan nol',
      ],
      correctAnswer: 1,
      explanation: 'Orbital $3d_{z^2}$ memiliki $l=2$, sehingga memiliki 2 simpul sudut ($N_a = 2$). Namun berbeda dari $d_{xy}, d_{yz}, d_{xz}, d_{x^2-y^2}$ yang simpul sudutnya berupa 2 bidang datar, pada $3d_{z^2}$ simpul sudutnya berbentuk dua permukaan kerucut simetris (conical nodal surfaces) pada sudut $\\theta = 54.7^\\circ$ terhadap sumbu-$z$.',
      misconceptionTarget: 'Menganggap seluruh orbital d selalu memiliki simpul sudut berupa bidang datar planar',
    },
  ],

  // Konsep Inti 3: Muatan Inti Efektif (Zeff), Aturan Perisai Slater, & Penetrasi Orbital
  'aturan-slater': [
    {
      id: 'chk-osn01-core3-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan kaidah pengelompokan formal Slater, berapakah kontribusi pemerisaian ($S_i$) per elektron dari kulit $(n-1)$ terhadap sebuah elektron penguji yang berada pada kelompok $(ns, np)$?',
      options: [
        '$0.35$',
        '$0.50$',
        '$0.85$',
        '$1.00$',
      ],
      correctAnswer: 2,
      explanation: 'Berdasarkan aturan Slater untuk elektron valensi $(ns, np)$: elektron sesama kelompok $(ns, np)$ menyumbang $0.35$ per elektron; elektron pada kulit $(n-1)$ menyumbang $0.85$ per elektron; dan elektron pada kulit $(n-2)$ atau lebih dalam menyumbang $1.00$ per elektron.',
      misconceptionTarget: 'Tertukar antara tetapan perisai kulit (n-1) sebesar 0.85 dengan kulit lebih dalam sebesar 1.00',
    },
    {
      id: 'chk-osn01-core3-q2',
      type: 'true_false',
      question: 'Menurut aturan Slater, elektron-elektron yang berada pada kelompok orbital di sebelah kanan elektron penguji (misal elektron $4p$ terhadap elektron $3d$) tetap menyumbang perisai sebesar $0.35$.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Prinsip mendasar aturan Slater adalah bahwa elektron yang berada di kelompok sebelah kanan elektron penguji (berada lebih luar) tidak memberikan efek perisai sama sekali ($S = 0.00$). Perisai hanya disumbangkan oleh elektron sesama kelompok dan kelompok di sebelah kirinya.',
      misconceptionTarget: 'Menghitung elektron di sebelah kanan kelompok penguji ke dalam tetapan perisai S',
    },
    {
      id: 'chk-osn01-core3-q3',
      type: 'multiple_choice',
      question: 'Pada atom seng netral $(\\ce{Zn}, Z=30: [\\ce{Ar}] 3d^{10} 4s^2)$, nilai muatan inti efektif Slater untuk elektron $3d$ ($Z_{\\text{eff}} = +8.85$) jauh lebih besar daripada elektron $4s$ ($Z_{\\text{eff}} = +4.35$). Konsekuensi kimiawi terpenting dari fakta kuantitatif ini adalah:',
      options: [
        'Elektron $3d$ terionisasi terlebih dahulu saat membentuk kation $\\ce{Zn^2+}$',
        'Elektron $4s$ terikat jauh lebih longgar dan terionisasi terlebih dahulu membentuk kation $\\ce{Zn^2+}$, menghasilkan ion berkonfigurasi $[\\ce{Ar}] 3d^{10}$',
        'Atom seng tidak dapat membentuk senyawa koordinasi',
        'Subkulit $3d$ mengalami ekspansi radius hingga melebihi subkulit $4s$',
      ],
      correctAnswer: 1,
      explanation: 'Karena $Z_{\\text{eff}}(4s) = +4.35$ jauh lebih kecil dibanding $Z_{\\text{eff}}(3d) = +8.85$, elektron $4s$ mengalami tarikan inti netto yang jauh lebih lemah dan energi ikatannya lebih dangkal. Akibatnya, pada ionisasi atom seng, kedua elektron $4s$ lepas duluan menghasilkan kation $\\ce{Zn^2+}: [\\ce{Ar}] 3d^{10}$.',
      misconceptionTarget: 'Gagal menghubungkan nilai Zeff Slater dengan urutan termodinamika pelepasan elektron pada logam transisi',
    },
  ],

  // Konsep Inti 4: Jari-Jari Atomik, Radius Ionik, Kontraksi Lantanida, & Deret Isoelektronik
  'deret-isoelektronik': [
    {
      id: 'chk-osn01-core4-q1',
      type: 'multiple_choice',
      question: 'Perhatikan deret spesies isoelektronik 10 elektron: $\\ce{O^2-}, \\ce{F-}, \\ce{Na+}, \\ce{Mg^2+}, \\ce{Al^3+}$. Urutan jari-jari ionik dari yang terkecil hingga terbesar adalah:',
      options: [
        '$\\ce{O^2- < F- < Na+ < Mg^2+ < Al^3+}$',
        '$\\ce{Al^3+ < Mg^2+ < Na+ < F- < O^2-}$',
        '$\\ce{Na+ < Mg^2+ < Al^3+ < F- < O^2-}$',
        '$\\ce{Al^3+ < F- < Na+ < Mg^2+ < O^2-}$',
      ],
      correctAnswer: 1,
      explanation: 'Pada deret isoelektronik, jumlah elektron konstan ($N_e = 10$). Semakin besar nomor atom ($Z$), semakin tinggi rasio $Z/e$, semakin kuat tarikan elektrostatik coulomb inti terhadap awan elektron, sehingga ukuran ion menyusut drastis. $\\ce{Al^3+} (Z=13)$ paling kecil ($53.5\\text{ pm}$) dan $\\ce{O^2-} (Z=8)$ paling besar ($140\\text{ pm}$).',
      misconceptionTarget: 'Mengira kation bervalensi tinggi memiliki jari-jari lebih besar karena nomor atomnya lebih besar',
    },
    {
      id: 'chk-osn01-core4-q2',
      type: 'true_false',
      question: 'Fenomena Kontraksi Lantanida menyebabkan unsur Zirkonium $(\\ce{Zr}, Z=40, \\text{Periode 5})$ dan Hafnium $(\\ce{Hf}, Z=72, \\text{Periode 6})$ memiliki jari-jari atomik yang hampir identik $(\\approx 159\\text{--}160\\text{ pm})$, sehingga sifat kimiawi keduanya sangat sulit dipisahkan.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Pengisian 14 elektron pada subkulit $4f$ yang memiliki efisiensi perisai inti paling buruk menyebabkan muatan inti efektif melonjak drastis sepanjang deret lantanida. Hal ini mengompensasi penambahan kulit kuantum $n=6$, sehingga jari-jari atomik $\\ce{Hf}$ mengerut mendekati ukuran $\\ce{Zr}$.',
      misconceptionTarget: 'Mengira unsur Periode 6 selalu memiliki jari-jari yang jauh lebih besar daripada Periode 5 sekelompoknya',
    },
    {
      id: 'chk-osn01-core4-q3',
      type: 'multiple_choice',
      question: 'Manakah perbandingan ukuran jari-jari partikel berikut yang SELALU BENAR untuk suatu unsur kimia $X$?',
      options: [
        '$r(X^-) < r(X) < r(X^+)$',
        '$r(X) < r(X^+) < r(X^-)$',
        '$r(X^+) < r(X) < r(X^-)$',
        '$r(X) = r(X^+) = r(X^-)$',
      ],
      correctAnswer: 2,
      explanation: 'Pelepasan elektron menjadi kation $(X^+)$ menurunkan tolakan interelektronik dan menaikkan $Z_{\\text{eff}}$ per elektron, sehingga kation selalu lebih kecil dari atom netral ($r(X^+) < r(X)$). Penambahan elektron menjadi anion $(X^-)$ memperbesar tolakan awan elektron dan menurunkan $Z_{\\text{eff}}$ per elektron, sehingga anion selalu lebih besar dari atom netral ($r(X) < r(X^-)$). Maka: $r(X^+) < r(X) < r(X^-)$.',
      misconceptionTarget: 'Mengira pembentukan ion tidak mengubah ukuran awan elektron atom netral',
    },
  ],

  // Konsep Inti 5: Energi Ionisasi Bertingkat, Anomali Periode 2 & 3, Afinitas Elektron, & Elektronegativitas
  'anomali-energi-ionisasi': [
    {
      id: 'chk-osn01-core5-q1',
      type: 'multiple_choice',
      question: 'Energi ionisasi pertama Berilium $(\\ce{Be}, Z=4: 899\\text{ kJ/mol})$ lebih besar daripada Boron $(\\ce{B}, Z=5: 801\\text{ kJ/mol})$. Penjelasan mekanika kuantum yang tepat untuk anomali ini adalah:',
      options: [
        'Boron memiliki muatan inti yang lebih kecil daripada Berilium',
        'Elektron terluar Boron menempati orbital $2p$ yang memiliki tingkat energi lebih tinggi dan terperisai oleh awan subkulit $2s^2$ yang terisi penuh',
        'Berilium memiliki jari-jari atomik yang lebih besar daripada Boron',
        'Orbital $2p$ Boron mengalami gaya tolak-menolak pasangan spin',
      ],
      correctAnswer: 1,
      explanation: 'Konfigurasi $\\ce{Be}$ adalah $1s^2 2s^2$ (elektron terluar di $2s$ dengan penetrasi ke inti tinggi). Konfigurasi $\\ce{B}$ adalah $1s^2 2s^2 2p^1$. Elektron $2p$ berada pada tingkat energi orbital yang lebih tinggi dan mengalami perisai efektif dari sepasang elektron $2s^2$, sehingga elektron $2p$ Boron lebih mudah dilepaskan.',
      misconceptionTarget: 'Mengira anomali Be vs B disebabkan oleh tolakan pasangan spin, bukan perbedaan tingkat energi subkulit 2s vs 2p',
    },
    {
      id: 'chk-osn01-core5-q2',
      type: 'true_false',
      question: 'Data termodinamika eksperimen membuktikan bahwa atom Klorin $(\\ce{Cl})$ memiliki afinitas elektron pertama $(EA_1 = 349\\text{ kJ/mol})$ yang lebih eksotermik daripada atom Fluorin $(\\ce{F}: EA_1 = 328\\text{ kJ/mol})$.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Meskipun Fluorin lebih elektronegatif, ukuran atom Fluorin ($n=2$) sangat kecil sehingga awan elektron $2p$ memiliki kerapatan muatan tinggi. Penambahan satu elektron baru ke ruang sempit ini memicu tolakan interelektronik yang sangat kuat, mengurangi pelepasan energi bersih. Pada Klorin ($n=3$), orbital $3p$ lebih difus sehingga tolakan antar-elektron lebih rendah.',
      misconceptionTarget: 'Mengira Fluorin memiliki afinitas elektron paling tinggi di tabel periodik karena elektronegativitasnya paling tinggi',
    },
    {
      id: 'chk-osn01-core5-q3',
      type: 'multiple_choice',
      question: 'Suatu unsur periode 3 memiliki data energi ionisasi bertingkat berturut-turut: $IE_1 = 496\\text{ kJ/mol}$, $IE_2 = 4562\\text{ kJ/mol}$, $IE_3 = 6910\\text{ kJ/mol}$. Berapakah rumus oksida biner stabil paling lazim yang dibentuk oleh unsur ini?',
      options: [
        '$\\ce{XO}$',
        '$\\ce{X2O}$',
        '$\\ce{XO2}$',
        '$\\ce{X2O3}$',
      ],
      correctAnswer: 1,
      explanation: 'Lonjakan raksasa (big jump) terjadi dari $IE_1$ ($496$) ke $IE_2$ ($4562$), meningkat hampir 10 kali lipat! Ini membuktikan unsur tersebut hanya memiliki 1 elektron valensi (Golongan 1, yaitu Natrium $\\ce{Na}$). Unsur Golongan 1 membentuk kation bermuatan $+1$ $(\\ce{X+})$, sehingga saat berikatan dengan oksigen $(\\ce{O^2-})$, rumus senyawa oksida stabilnya adalah $\\ce{X2O}$ (seperti $\\ce{Na2O}$).',
      misconceptionTarget: 'Salah menentukan jumlah elektron valensi dari posisi lonjakan energi ionisasi bertingkat',
    },
  ],
};
