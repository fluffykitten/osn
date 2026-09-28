import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_OSN_09: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Prinsip Stoikiometri Titrasi Redoks, Permanganometri, & Iodometri
  'prasyarat-titrasi-redoks-stoikiometri-ekivalensi': [
    {
      id: 'chk-osn09-pre1-q1',
      type: 'true_false',
      question: 'Pada titrasi iodometri tidak langsung, indikator suspensi amilum tidak boleh ditambahkan pada awal titrasi saat konsentrasi iodin masih tinggi karena molekul iodin akan terperangkap secara ireversibel di dalam heliks amilosa dan merusak ketajaman titik akhir titrasi.',
      correctAnswer: true,
      explanation: 'Benar! Pada awal titrasi, konsentrasi iodin ($\\ce{I2}$) bebas masih sangat pekat. Jika amilum ditambahkan di awal, iodin akan menyusup dan terperangkap kuat di dalam rongga heliks amilosa sehingga sulit dilepaskan kembali oleh titran tiosulfat. Akibatnya, titik akhir menjadi lambat dan pudar (*trailing*). Amilum baru boleh ditambahkan saat warna coklat iodin memudar menjadi kuning jerami pucat.',
      misconceptionTarget: 'Menganggap indikator amilum harus dimasukkan sejak awal seperti titrasi asam-basa fenolftalein, mengabaikan jebakan inklusi ireversibel iodin pada heliks pati pekat.',
    },
    {
      id: 'chk-osn09-pre1-q2',
      type: 'multiple_choice',
      question: 'Pada analisis kadar tembaga(II) via iodometri, $2\\text{ mol } \\ce{Cu^2+}$ bereaksi dengan kelebihan $\\ce{I-}$ menghasilkan $1\\text{ mol } \\ce{I2}$, yang kemudian dititrasi oleh natrium tiosulfat ($1\\text{ mol } \\ce{I2} \\equiv 2\\text{ mol } \\ce{S2O3^2-}$). Berapakah rasio stoikiometri mol total antara analit $\\ce{Cu^2+}$ dan titran $\\ce{S2O3^2-}$?',
      options: [
        '$1\\text{ mol } \\ce{Cu^2+} \\equiv 2\\text{ mol } \\ce{S2O3^2-}$',
        '$1\\text{ mol } \\ce{Cu^2+} \\equiv 1\\text{ mol } \\ce{S2O3^2-}$',
        '$2\\text{ mol } \\ce{Cu^2+} \\equiv 1\\text{ mol } \\ce{S2O3^2-}$',
        '$1\\text{ mol } \\ce{Cu^2+} \\equiv 4\\text{ mol } \\ce{S2O3^2-}$',
      ],
      correctAnswer: 1,
      explanation: 'Dari reaksi 1: $2\\ce{Cu^2+ + 4I- -> 2CuI(s) + I2} \\implies n_{\\ce{I2}} = \\frac{1}{2} n_{\\ce{Cu^2+}}$. Dari reaksi 2: $\\ce{I2 + 2S2O3^2- -> 2I- + S4O6^2-} \\implies n_{\\ce{S2O3^2-}} = 2 n_{\\ce{I2}} = 2 \\times \\left(\\frac{1}{2} n_{\\ce{Cu^2+}}\\right) = n_{\\ce{Cu^2+}}$. Rasio akhirnya adalah tepat $1 : 1$ ($1\\text{ mol } \\ce{Cu^2+} \\equiv 1\\text{ mol } \\ce{S2O3^2-}$).',
      misconceptionTarget: 'Terkecoh oleh koefisien reaksi bertingkat dan mengalikan rasio menjadi 1 : 2 atau 2 : 1.',
    },
    {
      id: 'chk-osn09-pre1-q3',
      type: 'multiple_choice',
      question: 'Pada titrasi permanganometri, mengapa larutan asam klorida ($\\ce{HCl}$) TIDAK BOLEH digunakan sebagai medium pengasam larutan analit?',
      options: [
        'Karena asam klorida mengendapkan ion permanganat sebagai garam kalium klorida tak larut',
        'Karena ion permanganat dalam suasana asam merupakan oksidator kuat yang dapat mengoksidasi ion $\\ce{Cl-}$ menjadi gas $\\ce{Cl2}$, menyebabkan pemborosan titran dan galat positif volume titrasi',
        'Karena asam klorida merupakan reduktor lemah yang mereduksi $\\ce{Mn^2+}$ menjadi mangan logam',
        'Karena asam klorida merusak sifat autoindikator warna kation permanganat',
      ],
      correctAnswer: 1,
      explanation: 'Potensial reduksi standar $\\ce{MnO4-/Mn^2+} = +1.51\\text{ V}$, sedangkan $\\ce{Cl2/Cl-} = +1.36\\text{ V}$. Karena $E^\\circ(\\ce{MnO4-}) > E^\\circ(\\ce{Cl2})$, ion $\\ce{MnO4-}$ mampu mengoksidasi $\\ce{Cl-}$ menjadi gas beracun $\\ce{Cl2}$. Hal ini menghabiskan volume titran $\\ce{KMnO4}$ secara parasitik dan menghasilkan perhitungan kadar analit yang jauh lebih tinggi dari aslinya (*false high*). Asam yang benar untuk permanganometri adalah $\\ce{H2SO4}$.',
      misconceptionTarget: 'Mengira semua asam kuat (HCl, HNO3, H2SO4) dapat saling menggantikan bebas tanpa memperhatikan kecenderungan reaksi redoks sampingan ion klorida atau nitrat.',
    },
  ],

  // Prasyarat 2: Analisis Gravimetri Presipitasi & Evaluasi Data Statistik Kimia Analitik
  'prasyarat-gravimetri-kesalahan-analisis-statistik': [
    {
      id: 'chk-osn09-pre2-q1',
      type: 'true_false',
      question: 'Berdasarkan rasio kejenuhan relatif von Weimarn $\\text{RSS} = \\frac{Q - S}{S}$, untuk memperoleh partikel endapan kristal berukuran besar yang murni dan mudah disaring, nilai RSS harus diminimalkan dengan cara menambahkan larutan reagen encer ($Q$ kecil) secara perlahan pada suhu tinggi ($S$ besar) disertai pematangan (*digestion*).',
      correctAnswer: true,
      explanation: 'Benar! Jika RSS bernilai kecil, laju pertumbuhan kristal mendominasi laju nukleasi, sehingga partikel kristal tumbuh besar dan teratur. Sebaliknya, jika RSS sangat besar (larutan pekat dan dingin), terjadi ledakan jutaan inti kristal halus tak teratur berbentuk koloid yang sulit disaring dan banyak mengikat kotoran kopresipitasi.',
      misconceptionTarget: 'Mengira pengendapan cepat pada suhu dingin selalu lebih menguntungkan karena menurunkan kelarutan, mengabaikan pembentukan koloid halus akibat RSS tinggi.',
    },
    {
      id: 'chk-osn09-pre2-q2',
      type: 'multiple_choice',
      question: 'Dalam penentuan kadar belerang ($\\ce{S}$, $A_r = 32.065\\text{ g/mol}$) dari sampel bahan bakar melalui metode gravimetri sebagai barium sulfat ($\\ce{BaSO4}$, $M_r = 233.39\\text{ g/mol}$), berapakah nilai Faktor Gravimetri ($GF$) yang digunakan?',
      options: [
        '$GF = \\frac{233.39}{32.065} \\approx 7.279$',
        '$GF = \\frac{32.065}{233.39} \\approx 0.1374$',
        '$GF = \\frac{2 \\times 32.065}{233.39} \\approx 0.2748$',
        '$GF = \\frac{32.065}{233.39 - 32.065} \\approx 0.1593$',
      ],
      correctAnswer: 1,
      explanation: 'Faktor Gravimetri ($GF$) didefinisikan sebagai rasio massa molar analit yang dicari terhadap massa molar endapan yang ditimbang, dikalikan rasio stoikiometrinya: $GF = \\frac{1 \\times A_r(\\ce{S})}{1 \\times M_r(\\ce{BaSO4})} = \\frac{32.065}{233.39} = 0.13739 \\approx 0.1374$. Massa belerang murni $= \\text{massa endapan } \\ce{BaSO4} \\times GF$.',
      misconceptionTarget: 'Membalik pembilang dan penyebut pada faktor gravimetri (menaruh massa endapan di atas alih-alih massa analit).',
    },
    {
      id: 'chk-osn09-pre2-q3',
      type: 'multiple_choice',
      question: 'Dalam evaluasi data analitik laboratorium, uji-$Q$ Dixon digunakan untuk mengevaluasi data pencilan (*outlier*). Jika dari 5 kali pengukuran diperoleh data di mana $Q_{\\text{hitung}} = \\frac{|x_{\\text{suspect}} - x_{\\text{nearest}}|}{|x_{\\text{max}} - x_{\\text{min}}|} > Q_{\\text{tabel}}$, keputusan statistik yang tepat adalah...',
      options: [
        'Data pencilan wajib dipertahankan karena semua data eksperimen tidak boleh dimanipulasi',
        'Data pencilan dapat dibuang secara sah pada tingkat kepercayaan yang dipilih',
        'Seluruh 5 data harus dibatalkan dan eksperimen harus diulang dari awal',
        'Nilai rata-rata langsung diganti dengan nilai median tanpa uji lanjut',
      ],
      correctAnswer: 1,
      explanation: 'Uji-$Q$ Dixon adalah uji statistik parametrik baku untuk menguji apakah titik data ekstrem dicurigai mengandung galat kotor (*gross error*). Jika $Q_{\\text{hitung}} > Q_{\\text{tabel}}$ pada tingkat kepercayaan tertentu (misal $90\\%$ atau $95\\%$), data tersebut secara sah dapat dieliminasi sebelum menghitung mean dan standar deviasi akhir.',
      misconceptionTarget: 'Mengira membuang data outlier selalu dianggap pemalsuan data ilmiah, mengabaikan dasar uji hipotesis statistik Dixon yang valid.',
    },
  ],

  // Prasyarat 3: Teori Kromatografi, Efisiensi Kolom, & Persamaan van Deemter
  'prasyarat-kromatografi-retensi-resolusi': [
    {
      id: 'chk-osn09-pre3-q1',
      type: 'true_false',
      question: 'Dua puncak kromatogram analit dikatakan telah mencapai batas pemisahan garis dasar (*baseline resolution*) sempurna dengan kontaminasi tumpang-tindih kurang dari $0.3\\%$ apabila nilai resolusi kromatografi memenuhi kriteria $R_s \\ge 1.5$.',
      correctAnswer: true,
      explanation: 'Benar! Nilai resolusi $R_s = 1.0$ masih menyisakan tumpang tindih puncak sekitar $\\sim 2\\%$. Standar baku dalam industri farmasi, regulasi analitik FDA, dan OSN/IChO menetapkan bahwa pemisahan sempurna garis dasar tercapai saat $R_s \\ge 1.5$ (kemurnian pemisahan $\\ge 99.7\\%$, setara $6\\sigma$).',
      misconceptionTarget: 'Mengira nilai resolusi Rs = 1.0 sudah merupakan pemisahan garis dasar sempurna tanpa tumpang-tindih.',
    },
    {
      id: 'chk-osn09-pre3-q2',
      type: 'multiple_choice',
      question: 'Berdasarkan persamaan van Deemter $H = A + \\frac{B}{u} + C \\cdot u$, suku $\\frac{B}{u}$ merepresentasikan proses fisik apakah dalam pelebaran puncak kromatogram?',
      options: [
        'Difusi Eddy akibat variasi jalur partikel kemasan',
        'Resistensi perpindahan massa antara fase diam dan fase gerak',
        'Difusi longitudinal molekuler analit sepanjang sumbu kolom akibat gradien konsentrasi',
        'Waktu mati kolom kromatografi',
      ],
      correctAnswer: 2,
      explanation: 'Suku $B/u$ merepresentasikan difusi longitudinal molekuler analit sepanjang sumbu aksial kolom. Karena molekul terus berdifusi dari zona pekat ke zona encer seiring berjalannya waktu, semakin lambat laju alir gerak ($u$ kecil), semakin lama analit berada dalam kolom dan semakin melebar puncaknya ($H$ membesar).',
      misconceptionTarget: 'Tertukar antara suku difusi Eddy A (independen dari laju alir u), difusi longitudinal B/u, dan resistensi transfer massa C*u.',
    },
    {
      id: 'chk-osn09-pre3-q3',
      type: 'multiple_choice',
      question: 'Suatu senyawa analit terelusi pada waktu retensi $t_R = 6.00\\text{ menit}$ pada kolom HPLC yang memiliki waktu mati pelarut $t_M = 1.50\\text{ menit}$. Berapakah faktor retensi ($k\'$) senyawa tersebut?',
      options: [
        '$k\' = 4.00$',
        '$k\' = 3.00$',
        '$k\' = 0.25$',
        '$k\' = 0.75$',
      ],
      correctAnswer: 1,
      explanation: 'Faktor retensi dihitung via rumus: $k\' = \\frac{t_R - t_M}{t_M} = \\frac{6.00 - 1.50}{1.50} = \\frac{4.50}{1.50} = 3.00$. Nilai ini berada dalam jendela retensi analitik ideal ($1 < k\' < 10$).',
      misconceptionTarget: 'Lupa mengurangkan waktu mati tM pada pembilang (menghitung tR / tM = 4.00 saja).',
    },
  ],

  // Konsep Inti 1: Spektrofotometri UV-Vis, Hukum Lambert-Beer & Analisis Multikomponen
  'konsep-spektrofotometri-uv-vis-hukum-lambert-beer': [
    {
      id: 'chk-osn09-c1-q1',
      type: 'true_false',
      question: 'Absorbansi larutan pada panjang gelombang tertentu bersifat aditif linier ($A_{\\text{total}} = A_X + A_Y$), asalkan komponen-komponen dalam campuran homogen tidak saling bereaksi kimiawi atau membentuk kompleks baru.',
      correctAnswer: true,
      explanation: 'Benar! Sifat aditifitas absorbansi Hukum Lambert-Beer menyatakan bahwa foton diserap secara independen oleh molekul-molekul penyerap yang berbeda. Hal ini memungkinkan penentuan konsentrasi dua atau lebih analit secara simultan tanpa pemisahan fisik melalui penyusunan matriks sistem persamaan linier.',
      misconceptionTarget: 'Mengira absorbansi tidak bisa dijumlahkan langsung dan menganggap transmitansi yang bersifat aditif (padahal transmitansi bersifat multiplikatif T_total = T1 * T2).',
    },
    {
      id: 'chk-osn09-c1-q2',
      type: 'multiple_choice',
      question: 'Penyimpangan negatif dari Hukum Lambert-Beer di mana kurva kalibrasi membengkok ke bawah pada konsentrasi analit tinggi ($c > 0.01\\text{ M}$) terutama disebabkan oleh...',
      options: [
        'Interaksi elektrostatik antarmolekul penyerap yang mengubah kerapatan elektron dan indeks bias medium serta keberadaan radiasi cahaya sesat (*stray light*)',
        'Kuvet kaca berubah menjadi keruh akibat terkena sinar UV',
        'Kecepatan cahaya melambat secara eksponensial di dalam larutan pekat',
        'Elektron analit menolak foton yang masuk karena muatannya sama',
      ],
      correctAnswer: 0,
      explanation: 'Hukum Lambert-Beer adalah hukum pembatas larutan encer ($c \\le 0.01\\text{ M}$). Pada konsentrasi tinggi, jarak antar-partikel menyempit memicu interaksi dipol yang mengubah struktur pita serapan dan indeks bias medium. Selain itu, cahaya sesat (*stray light*) instrumen yang mencapai detektor tanpa melewati sampel menyebabkan pembengkokan kurva absorbansi terukur pada absorbansi tinggi ($A > 1.5$).',
      misconceptionTarget: 'Menyalahkan kuvet atau foton, melupakan batasan kimiawi kerapatan antar-kromofor dan fenomena instrumental cahaya sesat.',
    },
    {
      id: 'chk-osn09-c1-q3',
      type: 'multiple_choice',
      question: 'Pergeseran panjang gelombang serapan maksimum ($\\lambda_{\\text{max}}$) ke arah nilai yang lebih panjang (energi foton lebih rendah) yang dipicu oleh penambahan sistem konjugasi ikatan rangkap atau substitusi gugus auksokrom disebut pergeseran...',
      options: [
        'Hipsokromik (*Blue Shift*)',
        'Batokromik (*Red Shift*)',
        'Hiperkromik',
        'Hipokromik',
      ],
      correctAnswer: 1,
      explanation: 'Pergeseran ke panjang gelombang lebih panjang disebut Pergeseran Batokromik (*Red Shift*). Semakin panjang rantai ikatan rangkap terkonjugasi, celah energi antara orbital HOMO dan LUMO semakin menyempit ($\\Delta E$ mengecil), sehingga foton yang diserap memiliki panjang gelombang lebih besar ($\\lambda = hc / \\Delta E$). Sebaliknya, pergeseran ke arah $\\lambda$ lebih pendek disebut Hipsokromik (*Blue Shift*).',
      misconceptionTarget: 'Tertukar antara istilah pergeseran panjang gelombang (batokromik/hipsokromik) dengan istilah perubahan intensitas absorptivitas molar (hiperkromik/hipokromik).',
    },
  ],

  // Konsep Inti 2: Spektroskopi Inframerah (FT-IR), Model Osilator Harmonik & Karakteristik Gugus Fungsi
  'konsep-spektroskopi-inframerah-ftir-model-osilator': [
    {
      id: 'chk-osn09-c2-q1',
      type: 'true_false',
      question: 'Suatu modus vibrasi molekul hanya akan aktif menyerap radiasi inframerah (aktif IR) apabila selama getaran vibrasi tersebut terjadi perubahan momen dipol netto molekul ($\\frac{d\\mu_{\\text{dipol}}}{dq} \\ne 0$).',
      correctAnswer: true,
      explanation: 'Benar! Medan listrik radiasi inframerah hanya dapat mentransfer energi ke molekul jika osilasi medan listrik berinteraksi dengan momen dipol yang berosilasi. Akibatnya, molekul diatomik homonuklear seperti $\\ce{N2}$ dan $\\ce{O2}$ serta vibrasi ulur simetris alkuna internal seperti $\\ce{CH3-C#C-CH3}$ tidak aktif IR ($\\frac{d\\mu}{dq} = 0$).',
      misconceptionTarget: 'Mengira semua ikatan kovalen pasti aktif menyerap inframerah, mengabaikan aturan seleksi momen dipol transisi.',
    },
    {
      id: 'chk-osn09-c2-q2',
      type: 'multiple_choice',
      question: 'Berdasarkan hukum Hooke kuantum $\\tilde{\\nu} = \\frac{1}{2\\pi c}\\sqrt{\\frac{k}{\\mu}}$, jika atom hidrogen ($^1\\ce{H}$) pada ikatan $\\ce{C-H}$ disubstitusi dengan isotop deuterium ($^2\\ce{H}$ atau $\\ce{D}$), maka frekuensi serapan vibrasi ulur $\\ce{C-D}$ akan...',
      options: [
        'Meningkat ke bilangan gelombang yang jauh lebih tinggi',
        'Menurun ke bilangan gelombang yang jauh lebih rendah (sekitar faktor $1/\\sqrt{2} \\approx 0.71$)',
        'Tetap persis sama karena muatan inti dan konstanta gaya pegas ikatan tidak berubah',
        'Hilang sama sekali karena deuterium tidak aktif IR',
      ],
      correctAnswer: 1,
      explanation: 'Massa tereduksi ikatan $\\ce{C-D}$ ($\mu \\approx \\frac{12 \\times 2}{12 + 2} = 1.71\\text{ g/mol}$) hampir dua kali lipat massa tereduksi $\\ce{C-H}$ ($\mu \\approx \\frac{12 \\times 1}{12 + 1} = 0.92\\text{ g/mol}$). Karena $\\tilde{\\nu} \\propto 1/\\sqrt{\\mu}$, pertambahan massa inersia menurunkan frekuensi serapan dari $\\sim 3000\\text{ cm}^{-1}$ ($\ce{C-H}$) menjadi $\\sim 2200\\text{ cm}^{-1}$ ($\ce{C-D}$).',
      misconceptionTarget: 'Mengira substitusi isotop menaikkan energi vibrasi karena massanya lebih berat, padahal massa di bawah tanda akar berbanding terbalik.',
    },
    {
      id: 'chk-osn09-c2-q3',
      type: 'multiple_choice',
      question: 'Di antara senyawa turunan asam karboksilat berikut, manakah yang memiliki bilangan gelombang vibrasi ulur gugus karbonil ($\\ce{C=O}$) PALING TINGGI pada spektrum FT-IR?',
      options: [
        'Asetamida ($\\ce{CH3-CO-NH2}$, $\\sim 1680\\text{ cm}^{-1}$)',
        'Aseton ($\\ce{CH3-CO-CH3}$, $\\sim 1715\\text{ cm}^{-1}$)',
        'Etil asetat ($\\ce{CH3-CO-OCH2CH3}$, $\\sim 1740\\text{ cm}^{-1}$)',
        'Asetil klorida ($\\ce{CH3-CO-Cl}$, $\\sim 1800\\text{ cm}^{-1}$)',
      ],
      correctAnswer: 3,
      explanation: 'Atom klorin pada asetil klorida memiliki efek induksi penarik elektron ($-I$) yang sangat kuat dan tumpang tindih orbital $2p-3p$ untuk resonansi balik sangat buruk. Kepadatan elektron ditarik kuat ke arah ikatan $\\ce{C=O}$, meningkatkan karakter ikatan rangkap dan konstanta gaya $k$, sehingga serapannya melonjak ke bilangan gelombang tertinggi sekitar $1800\\text{ cm}^{-1}$. Sebaliknya amida memiliki serapan terendah ($1680\\text{ cm}^{-1}$) karena resonansi kuat PEB nitrogen menurunkan orde ikatan karbonil.',
      misconceptionTarget: 'Mengira amida paling tinggi karena memiliki ikatan hidrogen, padahal resonansi donor nitrogen justru memperlemah konstanta pegas C=O.',
    },
  ],

  // Konsep Inti 3: Resonansi Magnetik Inti (1H & 13C-NMR), Pergeseran Kimia & Kopling Spin-Spin
  'konsep-spektroskopi-nmr-1h-13c-kopling-spin': [
    {
      id: 'chk-osn09-c3-q1',
      type: 'true_false',
      question: 'Proton hidrogen yang berada di dekat atom elektronegatif atau gugus penarik elektron akan kehilangan kerapatan perisai elektron (*deshielded*), sehingga merasakan medan magnet efektif ($B_{\\text{eff}}$) yang lebih besar dan beresonansi pada pergeseran kimia ($\\delta$) yang lebih tinggi (*downfield*).',
      correctAnswer: true,
      explanation: 'Benar! Medan magnet efektif adalah $B_{\\text{eff}} = B_0(1 - \\sigma)$. Ketika gugus penarik elektron menarik awan elektron menjauh dari inti hidrogen, nilai perisai $\\sigma$ mengecil. Inti proton merasakan medan magnet lebih kuat sehingga frekuensi presesi Larmor meningkat, menggeser sinyal ke arah kiri spektrum (*downfield*, nilai $\\delta$ ppm lebih besar).',
      misconceptionTarget: 'Tertukar antara shielded (upfield, ppm kecil) dan deshielded (downfield, ppm besar).',
    },
    {
      id: 'chk-osn09-c3-q2',
      type: 'multiple_choice',
      question: 'Berdasarkan relasi sudut dihedral persamaan Karplus pada spektroskopi $^1\\ce{H-NMR}$, perbandingan nilai konstanta kopling vicinal ($^3J_{\\ce{H-C=C-H}}$) antara proton alkena isomer *trans* ($\\phi = 180^\\circ$) dan *cis* ($\\phi = 0^\\circ$) adalah...',
      options: [
        '$^3J_{\\text{trans}} (12 - 18\\text{ Hz}) > {^3J_{\\text{cis}}} (6 - 12\\text{ Hz})$',
        '$^3J_{\\text{cis}} (15 - 20\\text{ Hz}) > {^3J_{\\text{trans}}} (2 - 5\\text{ Hz})$',
        'Keduanya identik sempurna bernilai $7\\text{ Hz}$',
        'Alkena tidak menunjukkan kopling spin-spin karena ikatan rangkap kaku',
      ],
      correctAnswer: 0,
      explanation: 'Pada alkena, sudut dihedral antara dua proton trans adalah $180^\\circ$ di mana tumpang tindih orbital ikatan $\\sigma$ mencapai efisiensi transmisi spin kuantum maksimum, menghasilkan $^3J_{\\text{trans}} = 12 - 18\\text{ Hz}$. Pada isomer cis ($\\phi = 0^\\circ$), konstanta kopling bernilai lebih kecil yaitu $^3J_{\\text{cis}} = 6 - 12\\text{ Hz}$. Ini adalah alat diagnostik stereokimia paling ampuh dalam menentukan isomer geometri alkena.',
      misconceptionTarget: 'Mengira proton cis yang berjarak lebih dekat dalam ruang memiliki kopling lebih kuat, mengabaikan bahwa kopling skalar J ditransmisikan melalui ikatan kimia via tumpang tindih orbital (Karplus).',
    },
    {
      id: 'chk-osn09-c3-q3',
      type: 'multiple_choice',
      question: 'Pada teknik spektroskopi DEPT-135 $^{13}\\ce{C-NMR}$, bagaimanakah pola orientasi sinyal karbon metilen ($\\ce{-CH2-}$) dan karbon kuaterner ($C_q$, tanpa atom H)?',
      options: [
        '$\\ce{-CH2-}$ mengarah ke atas (positif); $C_q$ mengarah ke bawah (negatif)',
        '$\\ce{-CH2-}$ terbalik mengarah ke bawah (fase negatif); $C_q$ hilang sama sekali dari spektrum',
        'Keduanya mengarah ke atas (fase positif)',
        'Keduanya hilang sama sekali dari spektrum',
      ],
      correctAnswer: 1,
      explanation: 'Pada sub-spektra DEPT-135: karbon $\\ce{CH3}$ dan $\\ce{CH}$ memunculkan puncak ke atas (fase positif); karbon $\\ce{CH2}$ terbalik mengarah ke bawah (fase negatif); sedangkan seluruh karbon kuaterner ($C_q$) yang tidak mengikat proton langsung (seperti karbonil $\\ce{C=O}$, karbon aromatik terkuaternisasi) hilang secara total.',
      misconceptionTarget: 'Mengira CH2 mengarah ke atas seperti CH3 atau mengira karbon kuaterner tetap muncul di DEPT-135.',
    },
  ],

  // Konsep Inti 4: Spektrometri Massa (MS), Pola Isotop Karakteristik & Mekanisme Fragmentasi
  'konsep-spektrometri-massa-fragmentasi-ion': [
    {
      id: 'chk-osn09-c4-q1',
      type: 'true_false',
      question: 'Suatu senyawa organik yang mengandung satu atom klorin menampilkan sepasang puncak ion molekuler $[M]$ dan $[M+2]$ dengan rasio kelimpahan intensitas sekitar $3 : 1$, sedangkan senyawa dengan satu atom bromin menampilkan sepasang puncak kembar $[M]$ dan $[M+2]$ dengan intensitas hampir setara ($1 : 1$).',
      correctAnswer: true,
      explanation: 'Benar! Klorin memiliki dua isotop stabil $^{35}\\ce{Cl}$ dan $^{37}\\ce{Cl}$ dengan kelimpahan alami $\\sim 75.8\\% : 24.2\\% \\approx 3 : 1$. Bromin memiliki isotop $^{79}\\ce{Br}$ dan $^{81}\\ce{Br}$ dengan kelimpahan $\\sim 50.7\\% : 49.3\\% \\approx 1 : 1$. Pola rasio tinggi puncak $[M]/[M+2]$ ini merupakan sidik jari isotop instan halogen pada spektrometri massa.',
      misconceptionTarget: 'Tertukar rasio isotop klorin (3 : 1) dengan bromin (1 : 1).',
    },
    {
      id: 'chk-osn09-c4-q2',
      type: 'multiple_choice',
      question: 'Fragmen puncak dasar (*base peak*) yang sangat stabil pada $m/z = 91$ pada spektrum massa senyawa turunan alkilbenzena (seperti toluena atau benzil asetat) dihasilkan oleh pembentukan ion...',
      options: [
        'Kation fenil ($[\\ce{C6H5}]^+$)',
        'Kation tropilium (sikloheptatrienil $[\\ce{C7H7}]^+$ aromatik)',
        'Radikal benzil netral',
        'Kation asilium ($[\\ce{CH3CO}]^+$)',
      ],
      correctAnswer: 1,
      explanation: 'Pelepasan radikal pada posisi benzylic menghasilkan kation benzil $[\\ce{C6H5-CH2}]^+$, yang segera mengalami penataan ulang ekspansi cincin menjadi kation tropilium (ion sikloheptatrienil $[\\ce{C7H7}]^+$, $m/z = 91$). Kation tropilium memiliki cincin 7-anggota planar dengan 6 elektron $\\pi$ yang sepenuhnya aromatik menurut Aturan Hückel ($4n + 2, n=1$), menjadikannya luar biasa stabil.',
      misconceptionTarget: 'Mengira puncak 91 adalah kation benzil kaku tanpa mengetahui penataan ulang ekspansi cincin menjadi kation tropilium aromatik.',
    },
    {
      id: 'chk-osn09-c4-q3',
      type: 'multiple_choice',
      question: 'Penataan ulang McLafferty (*McLafferty Rearrangement*) pada spektrometri massa senyawa karbonil mensyaratkan keberadaan fitur struktural apakah pada rantai molekul analit?',
      options: [
        'Adanya cincin aromatik terkonjugasi',
        'Adanya setidaknya satu atom hidrogen pada posisi karbon-$\\gamma$ (gamma) terhadap gugus karbonil',
        'Adanya atom halogen penarik elektron',
        'Adanya ikatan rangkap tiga alkuna',
      ],
      correctAnswer: 1,
      explanation: 'Penataan ulang McLafferty melibatkan keadaan transisi siklik 6-anggota yang sangat terorganisir: atom hidrogen pada posisi karbon-$\\gamma$ ditransfer ke atom oksigen karbonil, disertai pemutusan ikatan $\\ce{C_\\alpha - C_\\beta}$ yang melepaskan molekul netral alkena dan menyisakan radikal kation alkenol beresonansi stabil.',
      misconceptionTarget: 'Mengira penataan ulang McLafferty melibatkan hidrogen alfa atau beta, padahal secara geometri transisi cincin 6-anggota mutlak mensyaratkan hidrogen gamma.',
    },
  ],

  // Konsep Inti 5: Metode Kalibrasi Analitik, Adisi Standar, Standar Internal & Validasi Metode
  'konsep-analisis-kuantitatif-multikomponen-validasi': [
    {
      id: 'chk-osn09-c5-q1',
      type: 'true_false',
      question: 'Metode Adisi Standar (*Standard Addition Method*) digunakan khusus untuk meniadakan gangguan efek matriks sampel yang kompleks karena analit standar ditambahkan langsung ke dalam matriks sampel itu sendiri sehingga sensitivitas instrumen ($m$) pada standar dan analit bernilai identik.',
      correctAnswer: true,
      explanation: 'Benar! Dalam matriks kompleks (seperti serum darah atau air laut), kurva kalibrasi eksternal murni sering memberikan galat karena matriks mengubah respon detektor. Dengan menambahkan standar langsung ke dalam alikuot sampel (adisi standar), matriks sampel hadir seragam pada seluruh titik pengukuran, meniadakan deviasi kemiringan kalibrasi.',
      misconceptionTarget: 'Mengira metode adisi standar hanya untuk sampel yang sangat encer, melupakan fungsi utamanya untuk mengoreksi bias efek matriks.',
    },
    {
      id: 'chk-osn09-c5-q2',
      type: 'multiple_choice',
      question: 'Tujuan utama penambahan Standar Internal (*Internal Standard*) dengan konsentrasi konstan ke dalam seluruh sampel dan larutan standar pada analisis kromatografi GC/HPLC adalah...',
      options: [
        'Meningkatkan kelarutan analit di dalam pelarut organik',
        'Mengoreksi fluktuasi instrumen yang tidak terkontrol seperti ketidaktepatan volume mikro-injeksi sampel dan *drift* sensitivitas detektor',
        'Mempercepat waktu retensi analit agar elusi berlangsung lebih cepat',
        'Mengubah analit menjadi senyawa berwarna',
      ],
      correctAnswer: 1,
      explanation: 'Dalam analisis instrumen presisi, volume injeksi mikro (misal $1\\ \\mu\\text{L}$) dapat bervariasi $\\pm 5\\%$ antar-injeksi. Standar internal ditambahkan dengan konsentrasi konstan ke semua botol sampel. Karena analit dan standar internal diinjeksikan bersamaan, fluktuasi volume injeksi atau aliran akan memengaruhi kedua puncak secara proporsional, sehingga rasio luas puncak ($A_{\\text{analit}} / A_{IS}$) tetap konstan dan sangat presisi.',
      misconceptionTarget: 'Mengira standar internal bereaksi dengan analit, padahal standar internal harus merupakan zat lembam yang puncaknya terpisah rapi dari analit.',
    },
    {
      id: 'chk-osn09-c5-q3',
      type: 'multiple_choice',
      question: 'Berdasarkan pedoman harmonisasi internasional IUPAC dan ICH, formula Batas Deteksi (*Limit of Detection* / LOD) dan Batas Kuantifikasi (*Limit of Quantitation* / LOQ) berturut-turut adalah...',
      options: [
        '$\\text{LOD} = \\frac{s_{bl}}{m}$ dan $\\text{LOQ} = \\frac{2 s_{bl}}{m}$',
        '$\\text{LOD} = \\frac{3.3 \\cdot s_{bl}}{m}$ ($S/N = 3$) dan $\\text{LOQ} = \\frac{10 \\cdot s_{bl}}{m}$ ($S/N = 10$)',
        '$\\text{LOD} = \\frac{10 \\cdot s_{bl}}{m}$ dan $\\text{LOQ} = \\frac{3.3 \\cdot s_{bl}}{m}$',
        '$\\text{LOD} = m \\cdot s_{bl}$ dan $\\text{LOQ} = 3.3 \\cdot m \\cdot s_{bl}$',
      ],
      correctAnswer: 1,
      explanation: 'Sesuai pedoman IUPAC dan ICH: Batas Deteksi didefinisikan pada rasio sinyal terhadap derau blanko $S/N = 3 : 1$, yaitu $\\text{LOD} = \\frac{3.3 \\cdot s_{bl}}{m}$. Batas Kuantifikasi (konsentrasi terendah yang dapat diukur dengan akurasi dan presisi kuantitatif valid) didefinisikan pada rasio $S/N = 10 : 1$, yaitu $\\text{LOQ} = \\frac{10 \\cdot s_{bl}}{m}$, dengan $s_{bl}$ standar deviasi blanko dan $m$ kemiringan garis kalibrasi.',
      misconceptionTarget: 'Tertukar antara koefisien 3.3 (LOD) dan 10 (LOQ) atau menaruh kemiringan kurva m di pembilang.',
    },
  ],
};
