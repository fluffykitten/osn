import type { CheckpointQuizItem } from '../materialsData';

export const CHECKPOINTS_TOPIC_102: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Evolusi Teori Model Atom dari Bola Pejal hingga Mekanika Kuantum Modern
  'evolusi-model-atom': [
    {
      id: 'chk-102-pre1-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan fakta eksperimen hamburan lempeng emas tipis oleh Rutherford, sebagian besar partikel alfa diteruskan lurus tanpa hambatan dan hanya sebagian sangat kecil yang dihamburkan dengan sudut tajam atau memantul kembali. Kesimpulan mendasar dari fenomena ini adalah:',
      options: [
        'Muatan positif dan negatif tersebar homogen seperti kismis di seluruh badan atom',
        'Sebagian besar volume atom adalah ruang hampa, dan hampir seluruh massa serta muatan positif terpusat pada inti yang sangat kecil dan padat',
        'Elektron berputar pada orbit kuantisasi dengan memancarkan radiasi kontinu',
        'Inti atom terdiri atas partikel netron yang menyerap seluruh muatan partikel alfa',
      ],
      correctAnswer: 1,
      explanation: 'Jika model atom Thomson (bola pejal positif homogen) benar, seluruh partikel alfa bermassa besar akan menembus lempeng dengan defleksi minimal. Pemantulan partikel alfa membuktikan bahwa terdapat konsentrasi massa dan muatan positif berkepadatan luar biasa di pusat atom (inti atom), sedangkan sisa ruang atom adalah ruang kosong.',
      misconceptionTarget: 'Mengira partikel alfa memantul karena menabrak awan elektron',
    },
    {
      id: 'chk-102-pre1-q2',
      type: 'true_false',
      question: 'Menurut model mekanika kuantum gelombang modern (Schrödinger-Heisenberg), elektron beredar mengelilingi inti atom dalam lintasan lingkaran bergaris edar pasti dengan kecepatan dan radius orbital yang dapat diukur secara eksak dan simultan.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Konsep lintasan kaku berbentuk lingkaran adalah postulat model Bohr. Menurut asas ketidakpastian Heisenberg dan mekanika kuantum Schrödinger, kita tidak dapat mengetahui posisi dan momentum elektron secara pasti bersamaan; elektron digambarkan dalam bentuk "orbital", yaitu daerah ruang dengan kebolehjadian (probabilitas) tertinggi menemukan elektron.',
      misconceptionTarget: 'Membayangkan elektron mengitari inti seperti planet mengelilingi matahari',
    },
    {
      id: 'chk-102-pre1-q3',
      type: 'multiple_choice',
      question: 'Manakah kelemahan utama model atom Bohr yang berhasil dipecahkan secara elegan oleh teori mekanika kuantum Schrödinger?',
      options: [
        'Ketidakmampuan Bohr menjelaskan keberadaan partikel elektron di dalam atom',
        'Kegagalan model Bohr saat diterapkan pada spektrum atom berelektron banyak dan pemisahan garis spektrum akibat medan magnet (efek Zeeman)',
        'Bohr mengasumsikan bahwa inti atom memiliki muatan positif netral',
        'Bohr tidak mengakui bahwa elektron dapat berpindah antar tingkat energi',
      ],
      correctAnswer: 1,
      explanation: 'Model Bohr hanya akurat untuk sistem berelektron tunggal (seperti atom hidrogen atau ion $\\ce{He+}$, $\\ce{Li^2+}$). Model ini gagal total menjelaskan interaksi tolakan antar-elektron pada atom berelektron banyak serta efek pemisahan garis spektrum (efek Zeeman dan Stark), yang kemudian berhasil diterangkan lewat bilangan kuantum dan orbital mekanika kuantum.',
      misconceptionTarget: 'Menganggap model atom Bohr berlaku umum untuk seluruh unsur di tabel periodik',
    },
  ],

  // Prasyarat 2: Partikel Dasar Subatomik, Notasi Nuklida & Penentuan Massa Atom Relatif (Ar)
  'partikel-subatom-dan-kelimpahan': [
    {
      id: 'chk-102-pre2-q1',
      type: 'multiple_choice',
      question: 'Kation besi-56 memiliki notasi nuklida $\\ce{^{56}_{26}Fe^{3+}}$. Berapakah jumlah proton, neutron, dan elektron yang dimiliki oleh ion tersebut secara berurutan?',
      options: [
        '$26$ proton, $30$ neutron, dan $23$ elektron',
        '$26$ proton, $56$ neutron, dan $23$ elektron',
        '$23$ proton, $30$ neutron, dan $26$ elektron',
        '$26$ proton, $30$ neutron, dan $29$ elektron',
      ],
      correctAnswer: 0,
      explanation: 'Nomor atom $Z = 26$ menunjukkan jumlah proton $= 26$. Jumlah neutron $= A - Z = 56 - 26 = 30$. Karena muatannya $+3$ (telah melepas 3 elektron), maka jumlah elektron $= 26 - 3 = 23$.',
      misconceptionTarget: 'Mengubah jumlah proton saat atom membentuk ion atau mengurangkan neutron dengan muatan',
    },
    {
      id: 'chk-102-pre2-q2',
      type: 'true_false',
      question: 'Dua nuklida yang berisotop (seperti $\\ce{^{35}_{17}Cl}$ dan $\\ce{^{37}_{17}Cl}$) memiliki sifat kimiawi yang hampir identik karena keduanya memiliki jumlah proton dan konfigurasi elektron valensi yang sama.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Sifat kimiawi suatu unsur ditentukan oleh konfigurasi elektronnya (terutama elektron valensi) dan nomor atom (jumlah proton). Karena isotop-isotop memiliki nomor atom yang sama, reaksi kimianya identik; perbedaan jumlah neutron hanya memengaruhi massa atom dan sifat fisika nuklirnya (seperti kestabilan radioaktif atau laju efusi).',
      misconceptionTarget: 'Mengira perbedaan neutron mengubah kereaktifan ikatan kimia secara drastis',
    },
    {
      id: 'chk-102-pre2-q3',
      type: 'multiple_choice',
      question: 'Data spektrometri massa menunjukkan bahwa unsur tembaga di alam terdiri dari dua isotop: $\\ce{^{63}Cu}$ (massa $62.93\\text{ sma}$, kelimpahan $69.17\\%$) dan $\\ce{^{65}Cu}$ (massa $64.93\\text{ sma}$, kelimpahan $30.83\\%$) . Nilai massa atom relatif ($A_r$) tembaga dihitung melalui:',
      options: [
        'Rata-rata aritmatika sederhana: $\\frac{62.93 + 64.93}{2} = 63.93$',
        'Rata-rata berbobot kelimpahan fraksional: $(0.6917 \\times 62.93) + (0.3083 \\times 64.93) \\approx 63.55$',
        'Mengambil massa isotop dengan kelimpahan paling tinggi saja: $62.93$',
        'Penjumlahan seluruh massa isotop: $62.93 + 64.93 = 127.86$',
      ],
      correctAnswer: 1,
      explanation: 'Massa atom relatif ($A_r$) adalah rata-rata tertimbang (*weighted average*) dari seluruh isotop stabil alami suatu unsur berdasarkan fraksi kelimpahannya: $A_r = \\sum (\\text{fraksi} \\times \\text{massa isotop}) \\approx 63.55$. Menghitung rata-rata aritmatika biasa mengabaikan proporsi kelimpahan di alam.',
      misconceptionTarget: 'Menghitung Ar unsur dengan rata-rata aritmatika biasa tanpa pembobotan kelimpahan',
    },
  ],

  // Konsep Inti 1: Empat Bilangan Kuantum & Karakteristik Geometri Spasial Orbital (s, p, d, f)
  'bilangan-kuantum-dan-orbital': [
    {
      id: 'chk-102-core1-q1',
      type: 'multiple_choice',
      question: 'Manakah dari kombinasi empat bilangan kuantum $(n, l, m_l, m_s)$ berikut yang DIPERBOLEHKAN secara fisik untuk menggambarkan elektron pada subkulit $3d$?',
      options: [
        '$(3, 1, 0, +\\frac{1}{2})$',
        '$(3, 2, -2, -\\frac{1}{2})$',
        '$(3, 3, +1, +\\frac{1}{2})$',
        '$(3, 2, +3, -\\frac{1}{2})$',
      ],
      correctAnswer: 1,
      explanation: 'Untuk subkulit $3d$, bilangan kuantum utama $n=3$ dan bilangan kuantum azimut $l=2$. Bilangan kuantum magnetik $m_l$ diizinkan bernilai antara $-l$ sampai $+l$, yaitu $\\{-2, -1, 0, +1, +2\\}$. Pilihan kedua $(3, 2, -2, -\\frac{1}{2})$ memenuhi seluruh batasan kuantum tersebut.',
      misconceptionTarget: 'Mengabaikan batasan nilai ml yang tidak boleh melebihi nilai l',
    },
    {
      id: 'chk-102-core1-q2',
      type: 'true_false',
      question: 'Orbital $2s$ memiliki simpul radial (*radial node*) sebanyak $1$ dan simpul sudut (*angular node*) sebanyak $0$, sehingga probabilitas menemukan elektron tepat di permukaan bola nodal bernilai nol.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Jumlah simpul radial dihitung dengan rumus $(n - l - 1)$. Untuk orbital $2s$ ($n=2, l=0$), simpul radial $= 2 - 0 - 1 = 1$. Simpul sudut sama dengan nilai $l = 0$. Pada permukaan simpul ini, fungsi gelombang bernilai nol sehingga densitas probabilitas elektron $\\psi^2 = 0$.',
      misconceptionTarget: 'Mengira orbital s adalah bola pejal tanpa simpul radial sama sekali',
    },
    {
      id: 'chk-102-core1-q3',
      type: 'multiple_choice',
      question: 'Orbital $p$ memiliki bentuk geometri berupa dua cuping (*dumbbell shape*) dengan bidang simpul (*nodal plane*) di pusat. Mengapa probabilitas menemukan elektron tepat di titik pusat inti atom untuk elektron orbital $2p$ bernilai nol?',
      options: [
        'Karena inti atom menolak elektron dengan gaya tolak elektrostatik kuat',
        'Karena fungsi gelombang sudut orbital $p$ ($l=1$) bernilai nol tepat di titik origin koordinat Cartesian $(x=0, y=0, z=0)$',
        'Karena elektron orbital $2p$ bergerak terlalu cepat sehingga tidak pernah melintasi inti',
        'Karena orbital $2p$ hanya dapat diisi oleh elektron berspin negatif',
      ],
      correctAnswer: 1,
      explanation: 'Orbital dengan $l \\ge 1$ memiliki simpul sudut yang melintasi inti atom. Secara matematis, bagian radial dan sudut fungsi gelombang Schrödinger untuk orbital $p$ bernilai nol di pusat $(r=0)$, sehingga probabilitas menemukan elektron di inti adalah nol.',
      misconceptionTarget: 'Mengira elektron tidak pernah di inti hanya karena muatan inti menghalangi secara mekanik',
    },
  ],

  // Konsep Inti 2: Tiga Kaidah Kuantum Pengisian Elektron, Notasi Gas Mulia & Anomali Subkulit d
  'kaidah-kuantum-dan-konfigurasi': [
    {
      id: 'chk-102-core2-q1',
      type: 'multiple_choice',
      question: 'Konfigurasi elektron keadaan dasar (*ground state*) dari atom kromium $(\\ce{_{24}Cr})$ adalah $[\\ce{Ar}]\\, 4s^1 3d^5$, dan BUKAN $[\\ce{Ar}]\\, 4s^2 3d^4$. Penjelasan teoritis yang paling tepat untuk fenomena anomali ini adalah:',
      options: [
        'Subkulit $3d$ memiliki tingkat energi yang selalu lebih rendah daripada orbital $1s$',
        'Subkulit $3d^5$ terisi setengah penuh menghasilkan simetri bola yang stabil dan memaksimalkan energi pertukaran kuantum (*exchange energy*) seraya meminimalkan tolakan antar-elektron',
        'Elektron pada orbital $4s$ tertarik masuk ke dalam inti atom dan berubah menjadi neutron',
        'Kromium merupakan unsur gas mulia sintetis sehingga tidak mengikuti kaidah Aufbau',
      ],
      correctAnswer: 1,
      explanation: 'Konfigurasi setengah penuh ($d^5$) dan terisi penuh ($d^{10}$) memiliki simetri bola yang sangat stabil dan energi pertukaran kuantum (*exchange energy*) maksimal antar-elektron paralel, yang melebihi sedikit energi promosi elektron dari orbital $4s$ ke $3d$.',
      misconceptionTarget: 'Mengira aturan Aufbau harus dipatuhi secara kaku tanpa mempertimbangkan efek pertukaran kuantum',
    },
    {
      id: 'chk-102-core2-q2',
      type: 'true_false',
      question: 'Prinsip Larangan Pauli menyatakan bahwa dalam satu atom yang sama, tidak boleh ada dua elektron yang memiliki keempat bilangan kuantum $(n, l, m_l, m_s)$ yang identik.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Larangan Pauli merupakan konsekuensi dari sifat elektron sebagai fermion dengan spin setengah. Akibatnya, satu orbital spasial (didefinisikan oleh $n, l, m_l$) maksimal hanya dapat dihuni oleh dua elektron, dan kedua elektron tersebut wajib memiliki spin berlawanan ($+\\frac{1}{2}$ dan $-\\frac{1}{2}$).',
      misconceptionTarget: 'Mengira Larangan Pauli mengizinkan elektron berspin searah dalam satu orbital yang sama',
    },
    {
      id: 'chk-102-core2-q3',
      type: 'multiple_choice',
      question: 'Ketika atom besi $(\\ce{_{26}Fe})$ dengan konfigurasi $[\\ce{Ar}]\\, 4s^2 3d^6$ diionisasi membentuk kation $\\ce{Fe^{2+}}$, dua elektron manakah yang terlepas terlebih dahulu?',
      options: [
        'Dua elektron dari subkulit $3d$, menghasilkan konfigurasi $[\\ce{Ar}]\\, 4s^2 3d^4$',
        'Dua elektron dari subkulit $4s$, menghasilkan konfigurasi $[\\ce{Ar}]\\, 3d^6$',
        'Satu elektron dari $4s$ dan satu elektron dari $3d$, menghasilkan $[\\ce{Ar}]\\, 4s^1 3d^5$',
        'Dua elektron dari subkulit $3p$, menghasilkan $[\\ce{Ne}]\\, 3s^2 3p^4 4s^2 3d^6$',
      ],
      correctAnswer: 1,
      explanation: 'Miskonsepsi terbesar: siswa mengira karena $3d$ diisi belakangan saat Aufbau, maka $3d$ pula yang lepas duluan. Faktanya, saat orbital mulai terisi elektron, energi orbital $3d$ turun di bawah $4s$. Elektron pada kulit terluar ($n=4$, yaitu orbital $4s$) memiliki jarak rata-rata lebih jauh dari inti dan terlepas terlebih dahulu saat ionisasi.',
      misconceptionTarget: 'Melepaskan elektron dari 3d terlebih dahulu pada ionisasi logam transisi',
    },
  ],

  // Konsep Inti 3: Arsitektur Tabel Periodik Modern, Pembagian Blok s/p/d/f & Algoritma Letak Unsur
  'arsitektur-tabel-periodik-modern': [
    {
      id: 'chk-102-core3-q1',
      type: 'multiple_choice',
      question: 'Suatu unsur netral $X$ memiliki nomor atom $Z=33$. Berdasarkan konfigurasi elektronnya, dimanakah letak posisi unsur $X$ dalam sistem periodik unsur modern?',
      options: [
        'Periode 3, Golongan 13 (IIIA)',
        'Periode 4, Golongan 15 (VA)',
        'Periode 4, Golongan 5 (VB)',
        'Periode 3, Golongan 15 (VA)',
      ],
      correctAnswer: 1,
      explanation: 'Konfigurasi elektron $\\ce{_{33}X}$ adalah $[\\ce{Ar}]\\, 4s^2 3d^{10} 4p^3$. Bilangan kuantum utama tertinggi adalah $n=4$ (Periode 4). Elektron valensi pada kulit terluar adalah $4s^2 4p^3$ (total 5 elektron valensi pada blok $p$), sehingga terletak pada Golongan 15 (VA / golongan pniktogen).',
      misconceptionTarget: 'Menghitung subkulit 3d yang sudah penuh sebagai elektron valensi golongan',
    },
    {
      id: 'chk-102-core3-q2',
      type: 'true_false',
      question: 'Tabel Periodik Modern yang disempurnakan oleh Henry Moseley disusun berdasarkan kenaikan massa atom relatif ($A_r$), mengoreksi sistem Mendeleev yang menyusun berdasarkan nomor atom ($Z$).',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Justru sebaliknya! Dmitri Mendeleev menyusun tabel periodik berdasarkan kenaikan massa atom relatif ($A_r$). Henry Moseley melalui eksperimen difraksi sinar-X membuktikan bahwa sifat periodik unsur ditentukan oleh nomor atom ($Z$ / jumlah muatan positif inti), bukan oleh massanya.',
      misconceptionTarget: 'Tertukar antara penemu dasar pengurutan massa atom (Mendeleev) dan nomor atom (Moseley)',
    },
    {
      id: 'chk-102-core3-q3',
      type: 'multiple_choice',
      question: 'Unsur-unsur yang terletak pada blok $d$ di dalam sistem periodik disebut sebagai logam transisi. Apa karakteristik pengisian elektron yang menjadi dasar penamaan blok $d$ tersebut?',
      options: [
        'Elektron valensi terluar selalu mengisi orbital $ns$ dan tidak memiliki elektron di subkulit lain',
        'Elektron pembeda (elektron terakhir yang ditambahkan menurut prinsip Aufbau) mengisi subkulit $(n-1)d$',
        'Subkulit $d$ unsur tersebut selalu dalam keadaan terisi penuh $10$ elektron pada semua tingkat oksidasinya',
        'Unsur tersebut hanya dapat membentuk satu macam kation dengan bilangan oksidasi $+1$',
      ],
      correctAnswer: 1,
      explanation: 'Klasifikasi blok SPU didasarkan pada tipe orbital yang dihuni oleh elektron pembeda (*differentiating electron*). Untuk unsur blok $d$, elektron terakhir masuk mengisi subkulit bagian dalam $(n-1)d$, menjembatani sifat elektropositif blok $s$ ke elektronegatif blok $p$.',
      misconceptionTarget: 'Mengira elektron terakhir blok d mengisi kulit nd terluar bukan (n-1)d',
    },
  ],

  // Konsep Inti 4: Tren Periodik Sifat Fisika-Kimia & Teori Muatan Inti Efektif (Zeff)
  'tren-keperiodikan-dan-zeff': [
    {
      id: 'chk-102-core4-q1',
      type: 'multiple_choice',
      question: 'Dalam satu periode dari kiri ke kanan pada tabel periodik (misalnya dari $\\ce{Na}$ ke $\\ce{Cl}$), mengapa jari-jari atom mengalami penurunan (semakin mengecil) secara bertahap?',
      options: [
        'Karena jumlah kulit elektron berkurang sehingga lintasan elektron semakin mendekat',
        'Karena muatan inti ($Z$) bertambah sementara kulit elektron tetap, sehingga muatan inti efektif ($Z_{\\text{eff}}$) meningkat dan menarik awan elektron lebih kuat ke arah inti',
        'Karena massa jenis atom berkurang drastis dari kiri ke kanan',
        'Karena elektron valensi pada nonlogam mengalami peluruhan radioaktif',
      ],
      correctAnswer: 1,
      explanation: 'Dalam satu periode, nomor atom $Z$ bertambah (jumlah proton bertambah), sementara elektron valensi mengisi kulit yang sama ($n$ konstan). Elektron pada kulit yang sama kurang efektif memerisai satu sama lain, sehingga muatan inti efektif $Z_{\\text{eff}} = Z - S$ meningkat tajam, menarik awan elektron lebih merapat ke inti.',
      misconceptionTarget: 'Mengira penambahan jumlah elektron dalam satu periode otomatis memperbesar ukuran atom',
    },
    {
      id: 'chk-102-core4-q2',
      type: 'true_false',
      question: 'Energi ionisasi pertama nitrogen $(\\ce{_7N})$ bernilai lebih tinggi daripada oksigen $(\\ce{_8O})$, meskipun oksigen terletak lebih ke kanan pada periode yang sama.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Ini adalah anomali energi ionisasi periode 2. Nitrogen memiliki konfigurasi elektron stabil terisi setengah penuh pada orbital $2p$ ($2p_x^1 2p_y^1 2p_z^1$). Pada oksigen ($2p_x^2 2p_y^1 2p_z^1$), terdapat satu orbital $p$ yang dihuni sepasang elektron, memicu gaya tolakan antar-elektron (*inter-electronic repulsion*) yang mempermudah pelepasan elektron pertama.',
      misconceptionTarget: 'Menganggap energi ionisasi selalu naik monoton secara mulus dari kiri ke kanan tanpa anomali',
    },
    {
      id: 'chk-102-core4-q3',
      type: 'multiple_choice',
      question: 'Diberikan deret ion isoelektronik: $\\ce{O^{2-}}$, $\\ce{F-}$, $\\ce{Na+}$, dan $\\ce{Mg^{2+}}$. Urutan jari-jari ion dari yang TERBESAR hingga TERKECIL adalah:',
      options: [
        '$\\ce{Mg^2+} > \\ce{Na+} > \\ce{F-} > \\ce{O^2-}$',
        '$\\ce{O^2-} > \\ce{F-} > \\ce{Na+} > \\ce{Mg^2-}$',
        '$\\ce{Na+} > \\ce{Mg^2+} > \\ce{O^2-} > \\ce{F-}$',
        'Semua ion memiliki ukuran yang persis sama karena jumlah elektronnya sama ($10$ elektron)',
      ],
      correctAnswer: 1,
      explanation: 'Keempat ion sama-sama memiliki 10 elektron ($1s^2 2s^2 2p^6$). Penentu ukuran adalah jumlah proton di inti ($Z$): $\\ce{O}$ ($8$ proton), $\\ce{F}$ ($9$ proton), $\\ce{Na}$ ($11$ proton), $\\ce{Mg}$ ($12$ proton). Makin banyak proton, makin kuat tarikan inti terhadap 10 elektron tersebut, sehingga ion dengan proton paling sedikit ($\ce{O^{2-}}$) memiliki ukuran paling besar dan proton terbanyak ($\ce{Mg^{2+}}$) paling kecil.',
      misconceptionTarget: 'Mengira semua ion dengan jumlah elektron sama pasti memiliki jari-jari identik',
    },
  ],
};
