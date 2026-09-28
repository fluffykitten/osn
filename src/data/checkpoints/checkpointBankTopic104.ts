import type { CheckpointQuizItem } from '../materialsData';

export const CHECKPOINTS_TOPIC_104: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Konsep Bilangan Oksidasi & Kaidah Penentuan Biloks Unsur
  'bilangan-oksidasi-dasar-tatanama': [
    {
      id: 'chk-104-pre1-q1',
      type: 'multiple_choice',
      question: 'Berapakah bilangan oksidasi rata-rata atom sulfur $(\\ce{S})$ di dalam senyawa natrium tiosulfat $(\\ce{Na2S2O3})$?',
      options: [
        '$+4$',
        '$+2$',
        '$+6$',
        '$-2$',
      ],
      correctAnswer: 1,
      explanation: 'Berdasarkan kaidah biloks: Natrium (golongan 1) memiliki biloks $+1$, oksigen umumnya $-2$. Jumlah total muatan senyawa netral $= 0$: $2(+1) + 2(\\text{biloks S}) + 3(-2) = 0 \\implies +2 + 2S - 6 = 0 \\implies 2S = +4 \\implies S = +2$.',
      misconceptionTarget: 'Mengabaikan jumlah atom sulfur sehingga mengira biloks S adalah +4',
    },
    {
      id: 'chk-104-pre1-q2',
      type: 'true_false',
      question: 'Bilangan oksidasi atom oksigen dalam seluruh senyawa kimia di alam semesta tanpa terkecuali selalu bernilai $-2$.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Meskipun umumnya $-2$, oksigen memiliki beberapa pengecualian penting: Pada peroksida (seperti $\\ce{H2O2}$ dan $\\ce{Na2O2}$), biloks oksigen adalah $-1$. Pada superoksida (seperti $\\ce{KO2}$), bernilai $-\\frac{1}{2}$. Pada senyawa oksigen difluorida $(\\ce{OF2})$, karena fluorin lebih elektronegatif dari oksigen, biloks oksigen bernilai $+2$.',
      misconceptionTarget: 'Menganggap biloks oksigen tidak pernah berubah dari -2',
    },
    {
      id: 'chk-104-pre1-q3',
      type: 'multiple_choice',
      question: 'Tentukan bilangan oksidasi atom klorin $(\\ce{Cl})$ pada anion perklorat $(\\ce{[ClO4]-})$:',
      options: [
        '$+5$',
        '$+7$',
        '$+3$',
        '$-1$',
      ],
      correctAnswer: 1,
      explanation: 'Pada ion poliatomik, jumlah biloks sama dengan muatan ionnya: $\\text{biloks Cl} + 4(\\text{biloks O}) = -1 \\implies \\text{biloks Cl} + 4(-2) = -1 \\implies \\text{biloks Cl} - 8 = -1 \\implies \\text{biloks Cl} = +7$. Ini adalah bilangan oksidasi maksimum klorin.',
      misconceptionTarget: 'Menyamakan biloks klorin dalam ion perklorat dengan biloks klorida (-1)',
    },
  ],

  // Prasyarat 2: Khazanah Kation dan Anion (Monatomik & Poliatomik Oksianion)
  'tabel-kation-anion-poliatomik': [
    {
      id: 'chk-104-pre2-q1',
      type: 'multiple_choice',
      question: 'Perhatikan deret oksianion klorin: $\\ce{ClO-}$, $\\ce{ClO2-}$, $\\ce{ClO3-}$, dan $\\ce{ClO4-}$. Manakah pasangan rumus kimia dan nama anion IUPAC yang BENAR secara berturut-turut?',
      options: [
        'Klorit, hipoklorit, perklorat, klorat',
        'Hipoklorit, klorit, klorat, perklorat',
        'Perklorat, klorat, klorit, hipoklorit',
        'Klorida, klorit, klorat, perklorat',
      ],
      correctAnswer: 1,
      explanation: 'Aturan tata nama deret oksianion: $\\ce{ClO-}$ (paling sedikit oksigen = hipo-...-it), $\\ce{ClO2-}$ (...-it), $\\ce{ClO3-}$ (...-at), dan $\\ce{ClO4-}$ (paling banyak oksigen = per-...-at).',
      misconceptionTarget: 'Tertukar urutan prefiks hipo- (paling sedikit) dan per- (paling banyak)',
    },
    {
      id: 'chk-104-pre2-q2',
      type: 'true_false',
      question: 'Kation poliatomik amonium memiliki rumus kimia $\\ce{NH3+}$ dan terbentuk ketika gas amonia melepaskan satu elektron dari kulit valensinya.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Rumus kation amonium adalah $\\ce{NH4+}$ (bukan $\\ce{NH3+}$). Ion amonium terbentuk ketika molekul gas amonia netral $(\\ce{NH3})$ bertindak sebagai basa Lewis dan mengikat satu ion hidrogen (proton, $\\ce{H+}$) melalui ikatan kovalen koordinasi.',
      misconceptionTarget: 'Mengacaukan amonium (NH4+) dengan amonia (NH3) yang bermuatan semu',
    },
    {
      id: 'chk-104-pre2-q3',
      type: 'multiple_choice',
      question: 'Kalsium fosfat merupakan mineral utama penyusun tulang dan gigi manusia. Jika kalsium membentuk ion $\\ce{Ca^2+}$ dan fosfat adalah ion poliatomik $\\ce{PO4^3-}$, bagaimanakah rumus kimia senyawa netral yang terbentuk?',
      options: [
        '$\\ce{CaPO4}$',
        '$\\ce{Ca3(PO4)2}$',
        '$\\ce{Ca2(PO4)3}$',
        '$\\ce{Ca3PO4}$',
      ],
      correctAnswer: 1,
      explanation: 'Agar senyawa bersifat netral, jumlah total muatan positif kation harus sama dengan muatan negatif anion. KPK dari muatan $2$ dan $3$ adalah $6$. Dibutuhkan $3$ ion $\\ce{Ca^2+}$ (total $+6$) dan $2$ ion $\\ce{PO4^3-}$ (total $-6$), menghasilkan rumus $\\ce{Ca3(PO4)2}$. Tanda kurung wajib disertakan untuk ion poliatomik yang berjumlah lebih dari satu.',
      misconceptionTarget: 'Menghilangkan tanda kurung pada anion poliatomik atau menulis rasio muatan terbalik',
    },
  ],

  // Konsep Inti 1: Tata Nama Senyawa Biner (Ionik Logam-Nonlogam vs Kovalen Nonlogam-Nonlogam)
  'tata-nama-senyawa-biner-ionik-kovalen': [
    {
      id: 'chk-104-core1-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan aturan baku IUPAC, mengapa senyawa $\\ce{FeCl3}$ dinamakan sebagai **besi(III) klorida** dan BUKAN **besi triklorida**?',
      options: [
        'Karena besi merupakan unsur gas mulia sintetis',
        'Karena awalan bilangan Yunani (mono-, di-, tri-) hanya digunakan untuk senyawa kovalen antar-nonlogam; untuk senyawa ionik logam polivalen, tingkat oksidasi kation dinyatakan dengan angka Romawi (sistem Stock)',
        'Karena senyawa $\\ce{FeCl3}$ tidak dapat larut dalam air',
        'Karena klorin memiliki tiga elektron valensi',
      ],
      correctAnswer: 1,
      explanation: 'Aturan IUPAC melarang penggunaan awalan Yunani (*mono, di, tri, tetra*) pada senyawa ionik logam-nonlogam. Logam transisi yang memiliki lebih dari satu jenis bilangan oksidasi (seperti Fe yang bisa $+2$ atau $+3$) dinamai dengan menyebut nama logam diikuti bilangan oksidasinya dalam angka Romawi: besi(III) klorida.',
      misconceptionTarget: 'Mencampuradukkan awalan Yunani kovalen ke dalam tata nama senyawa ionik logam',
    },
    {
      id: 'chk-104-core1-q2',
      type: 'true_false',
      question: 'Nama IUPAC yang tepat dan baku untuk senyawa biner kovalen $\\ce{N2O5}$ adalah dinitrogen pentaoksida.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Senyawa biner antara dua unsur nonlogam ($\ce{N}$ dan $\ce{O}$) dinamai menggunakan awalan Yunani untuk menunjukkan jumlah atom masing-masing unsur: 2 atom N = *dinitrogen*, dan 5 atom O = *pentaoksida* (huruf "a" pada penta boleh dilebur sebelum vokal "o").',
      misconceptionTarget: 'Mengira senyawa kovalen harus dinamai menggunakan angka Romawi',
    },
    {
      id: 'chk-104-core1-q3',
      type: 'multiple_choice',
      question: 'Mengapa senyawa $\\ce{Al2O3}$ dinamakan cukup sebagai **aluminium oksida**, tanpa perlu menyertakan angka Romawi seperti "aluminium(III) oksida"?',
      options: [
        'Karena senyawa $\\ce{Al2O3}$ bukan senyawa ionik',
        'Karena aluminium adalah logam golongan utama (golongan 13) yang bersifat monovalen dan hanya memiliki satu kemungkinan bilangan oksidasi tunggal yaitu $+3$',
        'Karena senyawa tersebut tidak memiliki atom oksigen bebas',
        'Karena angka Romawi hanya boleh ditulis jika logam memiliki muatan genap',
      ],
      correctAnswer: 1,
      explanation: 'Aturan Stock menetapkan bahwa angka Romawi hanya dicantumkan jika logam tersebut memiliki lebih dari satu kemungkinan bilangan oksidasi (polivalen, seperti Fe, Cu, Sn, Pb). Untuk logam yang biloksnya tunggal dan pasti (golongan 1A, 2A, Al, Zn, Ag), angka Romawi tidak boleh dicantumkan.',
      misconceptionTarget: 'Menambahkan angka Romawi pada semua logam tanpa melihat apakah monovalen atau polivalen',
    },
  ],

  // Konsep Inti 2: Tata Nama Senyawa Poliatomik, Asam, Basa & Senyawa Hidrat Kristal
  'tata-nama-poliatomik-asam-basa-hidrat': [
    {
      id: 'chk-104-core2-q1',
      type: 'multiple_choice',
      question: 'Senyawa kristal terusi memiliki rumus kimia $\\ce{CuSO4.5H2O}$ dengan nama tembaga(II) sulfat pentahidrat. Apakah makna ilmiah dari tanda titik perkalian $(\\cdot)$ pada rumus kimia tersebut?',
      options: [
        'Menunjukkan bahwa massa molar $\\ce{CuSO4}$ dikalikan lima kali secara matematis',
        'Menunjukkan bahwa terdapat lima molekul air kristal (*water of crystallization*) yang terikat secara stoikiometris di dalam kisi kristal senyawa padat tersebut',
        'Menunjukkan bahwa $\\ce{CuSO4}$ dilarutkan ke dalam 5 liter air cair murni',
        'Menunjukkan bahwa senyawa tersebut bersifat asam kuat dengan pH 5',
      ],
      correctAnswer: 1,
      explanation: 'Tanda titik $(\\cdot)$ pada rumus senyawa hidrat BUKAN operasi perkalian matematika, melainkan notasi kimia yang menyatakan bahwa untuk setiap satu satuan rumus $\\ce{CuSO4}$, terdapat lima molekul air yang terjebak atau terkoordinasi secara teratur di dalam kisi kristalnya.',
      misconceptionTarget: 'Mengira tanda dot adalah perkalian aljabar biasa atau melambangkan konsentrasi larutan',
    },
    {
      id: 'chk-104-core2-q2',
      type: 'true_false',
      question: 'Senyawa asam $\\ce{H2SO3}$ dinamakan sebagai asam sulfat, sedangkan senyawa asam $\\ce{H2SO4}$ dinamakan sebagai asam sulfit.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Justru terbalik! Asam dengan bilangan oksidasi pusat lebih tinggi ($\ce{H2SO4}$, biloks S $= +6$) diberi akhiran **-at** (asam sulfat). Asam dengan bilangan oksidasi lebih rendah ($\ce{H2SO3}$, biloks S $= +4$) diberi akhiran **-it** (asam sulfit).',
      misconceptionTarget: 'Tertukar pemakaian akhiran -at (biloks lebih tinggi) dan -it (biloks lebih rendah)',
    },
    {
      id: 'chk-104-core2-q3',
      type: 'multiple_choice',
      question: 'Manakah nama IUPAC yang benar untuk senyawa basa $\\ce{Fe(OH)2}$ dan $\\ce{Fe(OH)3}$ secara berurutan?',
      options: [
        'Besi hidroksida dan besi trihidroksida',
        'Besi(II) hidroksida dan besi(III) hidroksida',
        'Besi dihidroksida dan besi hidroksida',
        'Asam ferat dan asam ferit',
      ],
      correctAnswer: 1,
      explanation: 'Karena ion hidroksida $(\\ce{OH-})$ bermuatan $-1$, maka pada $\\ce{Fe(OH)2}$ kation besi bermuatan $+2$ (besi(II) hidroksida), sedangkan pada $\\ce{Fe(OH)3}$ kation besi bermuatan $+3$ (besi(III) hidroksida).',
      misconceptionTarget: 'Menggunakan awalan Yunani di/tri untuk senyawa basa hidroksida logam',
    },
  ],

  // Konsep Inti 3: Tata Nama Hidrokarbon Dasar (Alkana, Alkena, Alkuna C1 - C10)
  'tata-nama-hidrokarbon-dasar': [
    {
      id: 'chk-104-core3-q1',
      type: 'multiple_choice',
      question: 'Suatu senyawa hidrokarbon alifatik tak jenuh memiliki rumus molekul $\\ce{C5H10}$. Berdasarkan deret homolognya, senyawa rantai terbuka ini tergolong ke dalam kelompok:',
      options: [
        'Alkana dengan rumus umum $\\ce{C_n H_{2n+2}}$',
        'Alkena dengan rumus umum $\\ce{C_n H_{2n}}$ yang memiliki satu ikatan rangkap dua $(\\ce{C=C})$',
        'Alkuna dengan rumus umum $\\ce{C_n H_{2n-2}}$ yang memiliki satu ikatan rangkap tiga',
        'Alkadiena yang memiliki dua ikatan rangkap dua',
      ],
      correctAnswer: 1,
      explanation: 'Dengan jumlah atom karbon $n=5$, jumlah hidrogen $= 2(5) = 10$. Rumus ini tepat memenuhi formula homolog alkena $\\ce{C_n H_{2n}}$, yang menandakan adanya satu ikatan rangkap dua (derajat ketakjenuhan $= 1$).',
      misconceptionTarget: 'Mengabaikan rumus umum deret homolog hidrokarbon dasar',
    },
    {
      id: 'chk-104-core3-q2',
      type: 'true_false',
      question: 'Senyawa hidrokarbon alifatik dengan rumus molekul $\\ce{C3H8}$ dinamakan propana, sedangkan $\\ce{C3H4}$ dinamakan propuna.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. $\\ce{C3H8}$ memenuhi $\\ce{C_n H_{2n+2}}$ ($n=3$, H $= 2(3)+2 = 8$) sehingga merupakan alkana (propana). Senyawa $\\ce{C3H4}$ memenuhi $\\ce{C_n H_{2n-2}}$ ($n=3$, H $= 2(3)-2 = 4$) sehingga merupakan alkuna (propuna).',
      misconceptionTarget: 'Tertukar akhiran -ana, -ena, dan -una pada hidrokarbon berantai C3',
    },
    {
      id: 'chk-104-core3-q3',
      type: 'multiple_choice',
      question: 'Manakah nama IUPAC yang benar untuk senyawa alkana rantai lurus jenuh yang tersusun atas 7 atom karbon $(\\ce{C7H16})$?',
      options: [
        'Heksana',
        'Heptana',
        'Oktana',
        'Pentana',
      ],
      correctAnswer: 1,
      explanation: 'Awalan jumlah atom karbon: $C_1=$ met-, $C_2=$ et-, $C_3=$ prop-, $C_4=$ but-, $C_5=$ pent-, $C_6=$ heks-, $C_7=$ hept-, $C_8=$ okt-, $C_9=$ non-, $C_{10}=$ dek-. Untuk $7$ atom karbon alkana jenuh, namanya adalah heptana.',
      misconceptionTarget: 'Tertukar antara heksana (6 karbon) dan heptana (7 karbon)',
    },
  ],

  // Konsep Inti 4: Anatomi Persamaan Reaksi Kimia & Hukum Kekekalan Massa Lavoisier
  'anatomi-persamaan-reaksi-dan-hukum-lavoisier': [
    {
      id: 'chk-104-core4-q1',
      type: 'multiple_choice',
      question: 'Ketika sebatang lilin parafin dibakar di atas meja terbuka, lilin tampak menyusut dan massanya berkurang drastis hingga habis. Apakah fenomena ini melanggar Hukum Kekekalan Massa Lavoisier?',
      options: [
        'Ya, karena massa materi dapat musnah seketika jika bereaksi dengan api',
        'Tidak, karena reaksi pembakaran berlangsung di sistem terbuka sehingga gas hasil reaksi $(\\ce{CO2}$ dan uap air $\\ce{H2O})$ lepas ke atmosfer; jika dibakar di wadah tertutup rapat, massa total tidak berubah',
        'Ya, karena energi kalor yang dihasilkan membakar proton dan neutron lilin',
        'Tidak, asalkan massa lilin yang hilang diganti dengan abu padat',
      ],
      correctAnswer: 1,
      explanation: 'Hukum Lavoisier menyatakan massa total sebelum dan sesudah reaksi selalu konstan dalam sistem tertutup. Lilin yang terbakar bereaksi dengan oksigen menghasilkan gas $\\ce{CO2}$ dan $\\ce{H2O(g)}$. Di wadah terbuka, gas-gas ini melayang ke udara bebas sehingga massa sisa lilin tampak berkurang. Jika ditimbang beserta gas dan oksigennya di wadah tertutup, massanya persis sama.',
      misconceptionTarget: 'Mengira massa zat musnah saat terbakar menjadi gas tak kasatmata',
    },
    {
      id: 'chk-104-core4-q2',
      type: 'true_false',
      question: 'Dalam menyetarakan persamaan reaksi kimia, kita diperbolehkan mengubah angka indeks di dalam rumus kimia molekul (misalnya mengubah $\\ce{CO}$ menjadi $\\ce{CO2}$) agar jumlah atom di ruas kiri dan kanan menjadi seimbang.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Mengubah angka indeks akan mengubah identitas zat secara fundamental (misalnya dari gas karbon monoksida beracun $\\ce{CO}$ menjadi karbon dioksida $\\ce{CO2}$). Penyetaraan reaksi HANYA boleh dilakukan dengan menambahkan atau mengubah angka **koefisien stoikiometri** di depan rumus kimia zat!',
      misconceptionTarget: 'Mengubah angka indeks rumus kimia zat demi menyetarakan reaksi',
    },
    {
      id: 'chk-104-core4-q3',
      type: 'multiple_choice',
      question: 'Dalam persamaan reaksi kimia: $\\ce{HCl(g) + H2O(l) -> H3O+(aq) + Cl-(aq)}$, apa makna spesifik dari simbol fasa $(aq)$?',
      options: [
        'Zat tersebut berada dalam wujud gas bertekanan tinggi',
        'Zat tersebut terlarut secara homogen di dalam air (*aqueous*) sebagai partikel/ion yang terhidrasi',
        'Zat tersebut berupa cairan murni yang tidak bercampur dengan zat apa pun',
        'Zat tersebut mengendap di dasar tabung sebagai padatan kristal',
      ],
      correctAnswer: 1,
      explanation: 'Simbol $(aq)$ berasal dari bahasa Latin *aqua* (air), yang menandakan bahwa spesi tersebut larut di dalam pelarut air. Berbeda dengan $(l)$ yang berarti cairan murni (*pure liquid* seperti $\\ce{H2O(l)}$ atau $\\ce{Br2(l)}$), $(aq)$ selalu menyatakan suatu larutan.',
      misconceptionTarget: 'Menyamakan simbol cairan murni (l) dengan larutan berair (aq)',
    },
  ],

  // Konsep Inti 5: Teknik Penyetaraan Reaksi Kimia (Metode Langsung vs Metode Aljabar Matematis)
  'metode-penyetaraan-reaksi-inspeksi-dan-aljabar': [
    {
      id: 'chk-104-core5-q1',
      type: 'multiple_choice',
      question: 'Perhatikan persamaan reaksi pembakaran gas butana yang belum setara: $\\ce{a C4H10(g) + b O2(g) -> c CO2(g) + d H2O(g)}$. Nilai koefisien bilangan bulat terkecil $a, b, c, d$ berturut-turut adalah:',
      options: [
        '$1, 6.5, 4, 5$',
        '$2, 13, 8, 10$',
        '$1, 13, 4, 5$',
        '$2, 26, 8, 10$',
      ],
      correctAnswer: 1,
      explanation: 'Untuk 1 mol $\\ce{C4H10}$, dibutuhkan $4\\,\\ce{CO2}$ dan $5\\,\\ce{H2O}$. Jumlah atom O di kanan $= (4 \\times 2) + 5 = 13$, sehingga koefisien $\\ce{O2} = \\frac{13}{2}$. Agar diperoleh koefisien bilangan bulat paling sederhana, seluruh persamaan dikalikan 2: $2\\,\\ce{C4H10} + 13\\,\\ce{O2} -> 8\\,\\ce{CO2} + 10\\,\\ce{H2O}$.',
      misconceptionTarget: 'Membiarkan koefisien pecahan pada pelaporan akhir persamaan reaksi kimia standar',
    },
    {
      id: 'chk-104-core5-q2',
      type: 'true_false',
      question: 'Dalam metode aljabar untuk menyetarakan reaksi kimia kompleks, kita menetapkan salah satu senyawa yang memiliki struktur paling rumit dengan nilai koefisien $1$, lalu menyusun sistem persamaan linear berbasis jumlah atom setiap unsur.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Menetapkan koefisien senyawa terumit $= 1$ merupakan algoritma baku metode aljabar. Hal ini menyederhanakan sistem persamaan aljabar linear. Jika pada akhirnya diperoleh nilai pecahan, seluruh koefisien cukup dikalikan dengan penyebut persekutuannya.',
      misconceptionTarget: 'Mengira metode aljabar membutuhkan penetapan seluruh variabel sekaligus secara acak',
    },
    {
      id: 'chk-104-core5-q3',
      type: 'multiple_choice',
      question: 'Dalam teknik penyetaraan reaksi metode inspeksi (Kaidah KAHO), urutan prioritas atom yang paling efektif disetarakan agar tidak terjadi koreksi berulang adalah:',
      options: [
        'Oksigen $\\to$ Hidrogen $\\to$ Kation Logam $\\to$ Anion Nonlogam',
        'Kation Logam $\\to$ Anion Nonlogam $\\to$ Hidrogen $\\to$ Oksigen',
        'Hidrogen $\\to$ Oksigen $\\to$ Kation Logam $\\to$ Anion Nonlogam',
        'Disetarakan secara acak dari molekul sebelah kanan terlebih dahulu',
      ],
      correctAnswer: 1,
      explanation: 'Kaidah KAHO (Kation $\\to$ Anion $\\to$ Hidrogen $\\to$ Oksigen) memastikan unsur yang biasanya muncul dalam satu senyawa saja (logam dan nonlogam utama) diselesaikan terlebih dahulu. Atom H dan O disetarakan paling akhir karena sering tersebar di berbagai spesi pereaksi dan produk.',
      misconceptionTarget: 'Menyetarakan atom oksigen terlebih dahulu yang justru memperumit perhitungan',
    },
  ],

  // Konsep Inti 6: Persamaan Reaksi Ionik Lengkap, Persamaan Ionik Bersih & Eliminasi Ion Penonton
  'persamaan-ionik-bersih-dan-reaksi-pengendapan': [
    {
      id: 'chk-104-core6-q1',
      type: 'multiple_choice',
      question: 'Ketika larutan perak nitrat $(\\ce{AgNO3(aq)})$ dicampurkan dengan larutan natrium klorida $(\\ce{NaCl(aq)})$, terbentuk endapan putih perak klorida. Persamaan ionik bersih (*net ionic equation*) dari reaksi ini adalah:',
      options: [
        '$\\ce{Na+(aq) + NO3-(aq) -> NaNO3(aq)}$',
        '$\\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)}$',
        '$\\ce{AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)}$',
        '$\\ce{Ag+(aq) + NO3-(aq) + Na+(aq) + Cl-(aq) -> AgCl(s) + Na+(aq) + NO3-(aq)}$',
      ],
      correctAnswer: 1,
      explanation: 'Dalam larutan, $\\ce{AgNO3}$ dan $\\ce{NaCl}$ terionisasi sempurna. Ion $\\ce{Na+(aq)}$ dan $\\ce{NO3-(aq)}$ tidak mengalami perubahan fasa maupun ikatan kimia (ion penonton). Setelah kedua ion penonton ini dieliminasi dari kedua ruas, persamaan ionik bersih yang tersisa adalah $\\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)}$.',
      misconceptionTarget: 'Menyertakan ion penonton atau memilih persamaan molekular biasa sebagai ionik bersih',
    },
    {
      id: 'chk-104-core6-q2',
      type: 'true_false',
      question: 'Ion penonton (*spectator ions*) adalah ion-ion yang mengalami perubahan bilangan oksidasi dan membentuk endapan padat selama reaksi kimia berlangsung di dalam air.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Justru sebaliknya! Ion penonton (*spectator ions*) hadir di dalam larutan sebelum dan sesudah reaksi tanpa mengalami perubahan kimia, perubahan wujud fasa, maupun perubahan bilangan oksidasi sama sekali. Mereka hanya "menonton" ion-ion aktif yang saling bereaksi.',
      misconceptionTarget: 'Mengira ion penonton adalah ion yang membentuk endapan reaksi',
    },
    {
      id: 'chk-104-core6-q3',
      type: 'multiple_choice',
      question: 'Mengapa endapan barium sulfat $(\\ce{BaSO4(s)})$ TIDAK boleh dituliskan terpisah sebagai ion $\\ce{Ba^2+}$ dan ion $\\ce{SO4^2-}$ pada penulisan persamaan ionik lengkap?',
      options: [
        'Karena ion barium sulfat memiliki muatan netral nol di fasa gas',
        'Karena $\\ce{BaSO4}$ berwujud padatan tidak larut (*insoluble precipitate*), sehingga ion-ionnya terikat kokoh di dalam kisi kristal dan tidak terdisosiasi bebas di dalam pelarut air',
        'Karena asam sulfat adalah asam lemah yang tidak terurai',
        'Karena barium bereaksi membentuk gas hidrogen dengan sulfat',
      ],
      correctAnswer: 1,
      explanation: 'Hanya elektrolit kuat yang berada dalam wujud terlarut $(aq)$ yang dituliskan terurai menjadi ion-ion bebas. Endapan padatan $(s)$, cairan murni $(l)$, dan gas $(g)$ tidak terionisasi bebas dalam larutan air sehingga wajib ditulis utuh sebagai rumus kimia senyawanya.',
      misconceptionTarget: 'Mengionkan zat padat yang mengendap pada persamaan ionik lengkap',
    },
  ],
};
