import type { CheckpointQuizItem } from '../materialsData.ts';

// Bank Kuis Uji Pemahaman Cepat (Checkpoint Bank)
// Topik 116: Kimia Karbon (Turunan Alkana, Benzena) & Makromolekul SMA
// Target: Menuntaskan miskonsepsi khas siswa SMA pada konsep gugus fungsi, tata nama IUPAC,
// isomer struktur & stereoisomer (R/S), reaksi pembeda aldehid/keton & alkohol, substitusi benzena (orto/meta/para),
// polimer adisi/kondensasi, serta biomolekul (karbohidrat, protein, lipid).

export const CHECKPOINTS_TOPIC_116: Record<string, CheckpointQuizItem[]> = {
  // =========================================================================
  // PRASYARAT 1: Kekhasan Atom Karbon & Hibridisasi Orbital
  // =========================================================================
  'kekhasan-atom-karbon-dan-hibridisasi': [
    {
      id: 'chk-116-01',
      type: 'multiple_choice',
      question: 'Manakah pernyataan yang BENAR mengenai kekhasan atom karbon dan jenis hibridisasinya pada senyawa hidrokarbon?',
      options: [
        'Karbon mampu membentuk ikatan kovalen rantai panjang karena memiliki 4 elektron valensi dan jari-jari atom relatif kecil.',
        'Atom karbon yang berhibridisasi $sp^3$ memiliki bentuk molekul segitiga planar dengan sudut ikatan $120^\\circ$.',
        'Ikatan rangkap tiga karbon-karbon ($\\ce{-C\\equiv C-}$) terdiri atas 3 ikatan sigma ($\\sigma$) yang sangat kuat.',
        'Atom karbon kuartener adalah atom karbon yang mengikat empat atom hidrogen sekaligus.',
        'Semua senyawa yang mengandung atom karbon otomatis digolongkan sebagai hidrokarbon.',
      ],
      correctAnswer: 0,
      explanation:
        'Atom karbon (nomor atom 6) memiliki 4 elektron valensi pada kulit kedua (jari-jari relatif kecil), sehingga ikatan kovalen $\\ce{C-C}$ sangat kuat dan stabil untuk membentuk rantai panjang (katenasi). Karbon $sp^3$ berbentuk tetrahedral ($109.5^\\circ$), ikatan rangkap tiga terdiri atas $1\\sigma + 2\\pi$, dan karbon kuartener mengikat 4 atom karbon lain (bukan hidrogen).',
    },
    {
      id: 'chk-116-02',
      type: 'true_false',
      question: 'Pada molekul 2,2,4-trimetilpentana (isooktana), terdapat tepat satu atom karbon tersier ($3^\\circ$) dan satu atom karbon kuartener ($4^\\circ$).',
      correctAnswer: true,
      explanation:
        'Benar. Struktur 2,2,4-trimetilpentana adalah $\\ce{CH3-C(CH3)2-CH2-CH(CH3)-CH3}$. Atom C nomor 2 mengikat 4 atom C lain (karbon kuartener / $4^\\circ$), atom C nomor 3 mengikat 2 atom C lain (sekunder / $2^\\circ$), dan atom C nomor 4 mengikat 3 atom C lain (tersier / $3^\\circ$). Terdapat tepat 1 karbon kuartener dan 1 karbon tersier.',
    },
    {
      id: 'chk-116-03',
      type: 'multiple_choice',
      question: 'Berdasarkan teori orbital hibrida, rantai alkana alifatik tidak bercabang (seperti $n$-butana) memiliki kerangka karbon yang berbentuk:',
      options: [
        'Zigzag dengan sudut ikatan mendekati $109.5^\\circ$ pada setiap atom karbon $sp^3$.',
        'Garis lurus kaku dengan sudut ikatan $180^\\circ$ di sepanjang rantai.',
        'Segitiga planar datar karena terdapat rotasi bebas ikatan kovalen.',
        'Melingkar rapat akibat tolakan pasangan elektron bebas pada atom karbon.',
        'Gelombang sinusoida dengan ikatan rangkap terdelokalisasi.',
      ],
      correctAnswer: 0,
      explanation:
        'Setiap atom karbon pada alkana jenuh memiliki hibridisasi $sp^3$ dengan geometri tetrahedral di sekelilingnya (sudut ikatan $\\approx 109.5^\\circ$). Akibatnya, rantai karbon "lurus" sebenarnya berkonformasi zigzag, bukan garis lurus linear $180^\\circ$.',
    },
  ],

  // =========================================================================
  // PRASYARAT 2: Klasifikasi Keisomeran Senyawa Karbon
  // =========================================================================
  'keisomeran-struktur-dan-stereoisomerisme': [
    {
      id: 'chk-116-04',
      type: 'multiple_choice',
      question: 'Pasangan senyawa berikut yang merupakan contoh pasangan ISOMER POSISI adalah:',
      options: [
        '1-propanol dan 2-propanol.',
        'Etanol dan metoksimetana (dimetil eter).',
        'Butanal dan 2-butanon.',
        'Pentana dan 2-metilbutana.',
        'Asam propanoat dan metil etanoat.',
      ],
      correctAnswer: 0,
      explanation:
        'Isomer posisi adalah isomer yang memiliki rumus molekul dan gugus fungsi yang sama, tetapi posisi perlekatan gugus fungsi pada rantai utama berbeda. 1-propanol dan 2-propanol sama-sama alkohol ($\\ce{C3H8O}$), tetapi gugus $-\\ce{OH}$ terletak pada atom C-1 dan C-2. Pilihan lain merupakan isomer fungsi (etanol & dimetil eter, butanal & butanon, asam propanoat & metil etanoat) atau isomer kerangka (pentana & 2-metilbutana).',
    },
    {
      id: 'chk-116-05',
      type: 'true_false',
      question: 'Senyawa 1-butena dan 2-metilpropena keduanya dapat membentuk pasangan isomer geometri cis-trans.',
      correctAnswer: false,
      explanation:
        'Salah. Syarat terjadinya isomer geometri (cis-trans) pada ikatan rangkap dua $\\ce{C=C}$ adalah setiap atom C berikatan rangkap harus mengikat dua gugus atom yang BERBEDA. Pada 1-butena ($\\ce{CH2=CH-CH2-CH3}$), atom C-1 mengikat dua atom $\\ce{H}$ identik. Pada 2-metilpropena ($\\ce{CH2=C(CH3)2}$), atom C-1 mengikat dua $\\ce{H}$ dan C-2 mengikat dua $-\\ce{CH3}$. Keduanya tidak memenuhi syarat dan TIDAK memiliki isomer cis-trans.',
    },
    {
      id: 'chk-116-06',
      type: 'multiple_choice',
      question: 'Suatu senyawa organik dengan rumus $\\ce{CH3-CH(OH)-CH(Cl)-CH3}$ memiliki 2 atom karbon kiral (asimetris). Jumlah maksimum stereoisomer optis aktif yang mungkin dibentuk adalah:',
      options: [
        '4 isomer optik aktif (2 pasang enantiomer)',
        '2 isomer optik aktif',
        '3 isomer optik (karena salah satunya adalah bentuk meso)',
        '8 isomer optik aktif',
        '1 isomer karena saling meniadakan putaran polarisasi',
      ],
      correctAnswer: 0,
      explanation:
        'Senyawa tersebut memiliki dua atom karbon asimetris yang berbeda substituennya: C-2 mengikat $-\\ce{H}, -\\ce{OH}, -\\ce{CH3}, -\\ce{CH(Cl)CH3}$, dan C-3 mengikat $-\\ce{H}, -\\ce{Cl}, -\\ce{CH3}, -\\ce{CH(OH)CH3}$. Karena kedua karbon kiral tidak simetris (tidak menghasilkan bentuk meso), jumlah maksimum stereoisomer mengikuti aturan van t Hoff $2^n = 2^2 = 4$ isomer optis aktif.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 1: 7 Deret Homolog Turunan Alkana & Tata Nama IUPAC
  // =========================================================================
  'tata-nama-dan-pasangan-isomer-fungsi': [
    {
      id: 'chk-116-07',
      type: 'multiple_choice',
      question: 'Pasangan deret homolog turunan alkana berikut yang berisomer fungsi dengan rumus molekul umum $\\ce{C_n H_{2n} O}$ adalah:',
      options: [
        'Alkanal (aldehid) dan alkanon (keton)',
        'Alkanol (alkohol) dan alkoksialkana (eter)',
        'Asam alkanoat (asam karboksilat) dan alkil alkanoat (ester)',
        'Alkena dan sikloalkana',
        'Haloalkana dan amina alifatik',
      ],
      correctAnswer: 0,
      explanation:
        'Rumus molekul $\\ce{C_n H_{2n} O}$ merupakan rumus umum pasangan isomer fungsi aldehid (alkanal) dan keton (alkanon). Pasangan alkohol dan eter memiliki rumus umum $\\ce{C_n H_{2n+2} O}$, sedangkan asam karboksilat dan ester memiliki rumus umum $\\ce{C_n H_{2n} O2}$.',
    },
    {
      id: 'chk-116-08',
      type: 'true_false',
      question: 'Senyawa ester dengan struktur $\\ce{CH3-CH2-COO-CH3}$ memiliki nama IUPAC metil propanoat.',
      correctAnswer: true,
      explanation:
        'Benar. Pada tata nama ester (alkil alkanoat), gugus yang terikat langsung pada atom oksigen ester ($-\\ce{O-CH3}$) disebut sebagai gugus "alkil" (metil). Bagian rantai yang mengandung gugus karbonil ($\\ce{CH3-CH2-CO-}$) terdiri dari 3 atom karbon, dinamakan "propanoat". Maka nama IUPAC-nya adalah metil propanoat.',
    },
    {
      id: 'chk-116-09',
      type: 'multiple_choice',
      question: 'Di antara senyawa dengan massa molar seimbang berikut: 1-butanol ($M_r = 74$) dan dietil eter ($M_r = 74$), 1-butanol memiliki titik didih yang jauh lebih tinggi ($117.7^\\circ\\text{C}$ vs $34.6^\\circ\\text{C}$) karena:',
      options: [
        'Molekul 1-butanol dapat membentuk ikatan hidrogen antarmolekul yang kuat melalui gugus $-\\ce{OH}$.',
        'Dietil eter merupakan molekul nonpolar murni tanpa momen dipol.',
        '1-butanol memiliki massa molekul relatif yang jauh lebih besar daripada dietil eter.',
        'Dietil eter mengalami disosiasi menjadi ion-ion bebas dalam fasa cair.',
        'Gugus eter mengalami reaksi kondensasi spontan pada suhu kamar.',
      ],
      correctAnswer: 0,
      explanation:
        '1-butanol memiliki atom hidrogen yang terikat langsung pada atom oksigen elektronegatif ($-\\ce{O-H}$), sehingga mampu membentuk ikatan hidrogen antarmolekul yang sangat kokoh. Sebaliknya, dietil eter ($\\ce{CH3CH2-O-CH2CH3}$) tidak memiliki ikatan $\\ce{O-H}$, sehingga interaksi antarmolekulnya hanya gaya dipol-dipol dan gaya dispersi London yang jauh lebih lemah.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 2: Reaksi Diferensiasi Organik & Oksidasi Bertingkat
  // =========================================================================
  'reaksi-diferensiasi-dan-oksidasi-alkohol': [
    {
      id: 'chk-116-10',
      type: 'multiple_choice',
      question: 'Suatu senyawa berumus $\\ce{C3H6O}$ tidak bereaksi dengan pereaksi Fehling maupun Tollens, namun dapat direduksi oleh gas $\\ce{H2}$ menghasilkan alkohol sekunder. Senyawa tersebut adalah:',
      options: [
        'Propanon (aseton)',
        'Propanal',
        '1-propanol',
        'Metil etil eter',
        'Asam propanoat',
      ],
      correctAnswer: 0,
      explanation:
        'Rumus $\\ce{C3H6O}$ adalah rumus umum aldehid atau keton. Karena tidak bereaksi dengan Fehling maupun Tollens, senyawa tersebut BUKAN aldehid melainkan keton (propanon). Reduksi keton menggunakan gas $\\ce{H2}$ (adisi nukleofilik hidrogen pada ikatan $\\ce{C=O}$) akan menghasilkan alkohol sekunder (2-propanol).',
    },
    {
      id: 'chk-116-11',
      type: 'true_false',
      question: 'Alkohol tersier seperti 2-metil-2-propanol dapat dioksidasi oleh larutan $\\ce{KMnO4}$ asam menghasilkan senyawa keton yang bersesuaian.',
      correctAnswer: false,
      explanation:
        'Salah. Alkohol tersier tidak memiliki atom hidrogen karbinol (atom hidrogen yang terikat langsung pada karbon pembawa gugus $-\\ce{OH}$). Oleh karena itu, alkohol tersier resisten terhadap oksidasi oleh $\\ce{KMnO4}$ atau $\\ce{K2Cr2O7}$ pada kondisi normal tanpa pemutusan ikatan rangka $\\ce{C-C}$. Yang teroksidasi menjadi keton adalah alkohol sekunder.',
    },
    {
      id: 'chk-116-12',
      type: 'multiple_choice',
      question: 'Untuk membedakan sampel etanol (alkohol) dan dimetil eter (eter) di laboratorium sekolah, reagen yang paling cepat dan khas memberikan gelembung gas adalah:',
      options: [
        'Logam Natrium ($\\ce{Na}$), menghasilkan gas hidrogen ($\\ce{H2}$) pada alkohol.',
        'Pereaksi Tollens, menghasilkan cermin perak pada eter.',
        'Pereaksi Fehling, menghasilkan endapan merah bata $\\ce{Cu2O}$ pada eter.',
        'Air bromin ($\\ce{Br2}$), menyebabkan warna cokelat hilang pada alkohol.',
        'Lakmus merah, berubah menjadi biru pada alkohol.',
      ],
      correctAnswer: 0,
      explanation:
        'Alkohol memiliki hidrogen asam lemah pada gugus $-\\ce{OH}$ yang langsung bereaksi dengan logam aktif seperti natrium membentuk natrium alkoksida dan melepaskan gelembung gas hidrogen: $\\ce{2R-OH + 2Na -> 2R-ONa + H2 ^}$. Sebaliknya, eter ($\\ce{R-O-R\'}$) inert dan tidak bereaksi dengan logam natrium.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 3: Benzena & Reaksi Substitusi Elektrofilik Aromatik (SEAr)
  // =========================================================================
  'benzena-dan-substitusi-elektrofilik': [
    {
      id: 'chk-116-13',
      type: 'multiple_choice',
      question: 'Meskipun benzena ($\\ce{C6H6}$) memiliki 3 ikatan rangkap terkonjugasi secara formal, benzena lebih mudah mengalami reaksi substitusi daripada reaksi adisi karena:',
      options: [
        'Sistem cincin benzena memiliki kestabilan resonansi aromatik (delokalisasi elektron $\\pi$) yang dipertahankan melalui substitusi.',
        'Ikatan karbon-karbon pada benzena seluruhnya merupakan ikatan tunggal kovalen koordinasi.',
        'Elektron $\\pi$ pada benzena terkunci rapat dan tidak dapat berinteraksi dengan elektrofil apapun.',
        'Benzena memiliki momen dipol permanen yang sangat tinggi sehingga menolak pereaksi adisi.',
        'Benzena merupakan molekul non-planar yang sangat kaku.',
      ],
      correctAnswer: 0,
      explanation:
        'Cincin benzena memenuhi aturan aromatisitas Hückel ($4n+2$ elektron $\\pi$ siklik terdelokalisasi) yang memberikan kestabilan resonansi luar biasa ($+152\\text{ kJ/mol}$). Reaksi adisi akan merusak sistem aromatisitas cincin, sedangkan reaksi substitusi elektrofilik aromatik (SEAr) mempertahankan cincin aromatik setelah pelepasan ion $\\ce{H+}$.',
    },
    {
      id: 'chk-116-14',
      type: 'true_false',
      question: 'Gugus nitro ($-\\ce{NO2}$) pada cincin benzena merupakan gugus pengarah orto dan para karena memiliki pasangan elektron bebas.',
      correctAnswer: false,
      explanation:
        'Salah. Gugus nitro ($-\\ce{NO2}$) merupakan gugus penarik elektron yang sangat kuat (efek induksi negatif dan resonansi negatif), sehingga mendeaktivasi cincin benzena dan bertindak sebagai gugus PENGARAH META. Gugus pengarah orto/para adalah gugus pendonor elektron seperti $-\\ce{OH}, -\\ce{NH2}, -\\ce{OCH3}$, dan gugus alkil ($-\\ce{CH3}$).',
    },
    {
      id: 'chk-116-15',
      type: 'multiple_choice',
      question: 'Turunan benzena yang digunakan secara luas sebagai pengawet makanan kemasan (minuman bersoda dan saus) adalah:',
      options: [
        'Natrium benzoat (garam dari asam benzoat)',
        'Trinitrotoluena (TNT)',
        'Anilina',
        'Fenol murni',
        'Klorobenzena',
      ],
      correctAnswer: 0,
      explanation:
        'Asam benzoat dan garam natrium benzoat ($\\ce{C6H5COONa}$) merupakan senyawa turunan benzena yang bekerja efektif sebagai zat pengawet antimikroba (menghambat pertumbuhan jamur dan ragi) pada makanan dan minuman dengan suasana asam.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 4: Polimer Sintetis & Alami (Adisi vs Kondensasi)
  // =========================================================================
  'polimer-sintetis-dan-alami': [
    {
      id: 'chk-116-16',
      type: 'multiple_choice',
      question: 'Perbedaan mendasar antara polimerisasi adisi dan polimerisasi kondensasi adalah:',
      options: [
        'Polimerisasi adisi melibatkan pemutusan ikatan rangkap monomer tanpa molekul sampingan, sedangkan kondensasi menggabungkan monomer bergugus fungsi ganda disertai pelepasan molekul kecil seperti $\\ce{H2O}$.',
        'Polimerisasi adisi selalu menghasilkan polimer alami, sedangkan kondensasi selalu menghasilkan polimer sintetis.',
        'Polimerisasi adisi memerlukan katalis enzim biologis, sedangkan kondensasi tidak memerlukan katalis.',
        'Polimer adisi selalu tergolong polimer termoset, sedangkan polimer kondensasi selalu termoplas.',
        'Polimer adisi melepaskan molekul $\\ce{HCl}$, sedangkan polimer kondensasi menyerap kalor lingkungan.',
      ],
      correctAnswer: 0,
      explanation:
        'Pada polimerisasi adisi, monomer harus memiliki ikatan rangkap (misal etilena, vinil klorida, stirena) yang membuka dan bergabung tanpa eliminasi molekul lain. Pada polimerisasi kondensasi, monomer memiliki minimal 2 gugus fungsi reaktif (misal $-\\ce{COOH}$ dan $-\\ce{NH2}$ pada pembentukan nilon) yang bereaksi dan melepaskan molekul sampingan kecil seperti $\\ce{H2O}$ atau $\\ce{HCl}$.',
    },
    {
      id: 'chk-116-17',
      type: 'true_false',
      question: 'Teflon (politetrafluoroetilena / PTFE) merupakan contoh polimer kondensasi yang dibentuk dari monomer tetrafluoroetilena.',
      correctAnswer: false,
      explanation:
        'Salah. Teflon dibentuk melalui polimerisasi ADISI dari monomer tetrafluoroetilena ($\\ce{CF2=CF2}$). Ikatan rangkap $\\ce{C=C}$ pada tetrafluoroetilena membuka dan bergabung membentuk rantai jenuh $\\ce{[-CF2-CF2-]_n}$ tanpa melepaskan molekul sampingan.',
    },
    {
      id: 'chk-116-18',
      type: 'multiple_choice',
      question: 'Karakteristik fisik yang membedakan polimer jenis termoplas (seperti polietilena) dan termoset (seperti bakelit) adalah:',
      options: [
        'Termoplas melunak jika dipanaskan dan dapat didaur ulang, sedangkan termoset mengeras permanen karena memiliki ikatan silang (*cross-link*) tiga dimensi.',
        'Termoset dapat dicairkan dan dicetak berulang-ulang tanpa mengubah sifat fisiknya.',
        'Termoplas memiliki ikatan kovalen silang yang sangat rapat di antara rantai utamanya.',
        'Termoplas tahan terhadap panas tinggi dan tidak dapat terbakar.',
        'Termoset selalu larut sempurna di dalam air panas.',
      ],
      correctAnswer: 0,
      explanation:
        'Polimer termoplas memiliki rantai linear atau bercabang yang hanya disatukan oleh gaya antarmolekul sekunder sehingga dapat melunak saat dipanaskan dan mengeras saat didinginkan secara reversibel. Polimer termoset memiliki ikatan kovalen silang (*cross-link*) permanen sehingga tidak dapat dilelehkan kembali; pemanasan berlebih akan merusak struktur dan menghanguskannya.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 5: Biomolekul Esensial (Karbohidrat, Protein, Lipid)
  // =========================================================================
  'biomolekul-karbohidrat-protein-lipid': [
    {
      id: 'chk-116-19',
      type: 'multiple_choice',
      question: 'Di antara karbohidrat berikut, pasangan yang KEDUANYA merupakan disakarida pereduksi (positif terhadap pereaksi Fehling dan Benedict) adalah:',
      options: [
        'Maltosa dan Laktosa',
        'Sukrosa dan Fruktosa',
        'Amilum dan Selulosa',
        'Sukrosa dan Glikogen',
        'Glukosa dan Sukrosa',
      ],
      correctAnswer: 0,
      explanation:
        'Maltosa (glukosa + glukosa, ikatan $\\alpha$-1,4) dan laktosa (galaktosa + glukosa, ikatan $\\beta$-1,4) memiliki gugus hemiasetal bebas yang dapat membuka menjadi rantai terbuka dengan gugus aldehid aktif, sehingga bersifat gula pereduksi. Sebaliknya, sukrosa (glukosa + fruktosa) terikat pada kedua karbon anomeriknya (ikatan $\\alpha,\\beta$-1,2), sehingga bukan gula pereduksi.',
    },
    {
      id: 'chk-116-20',
      type: 'true_false',
      question: 'Uji Biuret digunakan untuk mendeteksi adanya asam amino bebas di dalam sampel makanan dengan pembentukan warna ungu.',
      correctAnswer: false,
      explanation:
        'Salah. Uji Biuret (larutan $\\ce{CuSO4}$ encer dalam suasana basa $\\ce{NaOH}$) mendeteksi adanya IKATAN PEPTIDA (minimal 2 ikatan peptida atau tripeptida ke atas) melalui pembentukan kompleks koordinasi ion $\\ce{Cu^2+}$ berwarna ungu. Asam amino bebas (seperti glisin tunggal) TIDAK memiliki ikatan peptida sehingga memberikan hasil negatif pada uji Biuret.',
    },
    {
      id: 'chk-116-21',
      type: 'multiple_choice',
      question: 'Reaksi penyabunan (saponifikasi) lemak trigliserida dengan larutan natrium hidroksida ($\\ce{NaOH}$) menghasilkan produk berupa:',
      options: [
        'Garam natrium karboksilat (sabun) dan gliserol (1,2,3-propanatriol).',
        'Asam lemak bebas dan ester metil.',
        'Alkohol primer dan gas hidrogen.',
        'Deterjen sintetik sulfonat dan asam asetat.',
        'Minyak parafin dan natrium bikarbonat.',
      ],
      correctAnswer: 0,
      explanation:
        'Lemak adalah triester dari gliserol dengan asam lemak berantai panjang. Hidrolisis basa (saponifikasi) memecah ketiga ikatan ester oleh 3 molekul $\\ce{NaOH}$, menghasilkan gliserol (alkohol trivalen) dan 3 molekul garam natrium asam lemak ($\\ce{R-COONa}$) yang dikenal sebagai sabun padat.',
    },
  ],

  // =========================================================================
  // PENGAYAAN HOTS: Stereokimia CIP & Sekuensing Logis Oligopeptida
  // =========================================================================
  'pengayaan-stereokimia-cip-dan-sekuensing-peptida': [
    {
      id: 'chk-116-22',
      type: 'multiple_choice',
      question: 'Berdasarkan aturan prioritas Cahn-Ingold-Prelog (CIP), urutan prioritas gugus berikut yang benar pada penentuan konfigurasi $R/S$ adalah:',
      options: [
        '$-\\ce{Br} > -\\ce{Cl} > -\\ce{OH} > -\\ce{CH3}$',
        '$-\\ce{CH3} > -\\ce{OH} > -\\ce{Cl} > -\\ce{Br}$',
        '$-\\ce{COOH} > -\\ce{Br} > -\\ce{OH} > -\\ce{H}$',
        '$-\\ce{OH} > -\\ce{NH2} > -\\ce{Cl} > -\\ce{H}$',
        '$-\\ce{CH2CH3} > -\\ce{CH3} > -\\ce{OH} > -\\ce{H}$',
      ],
      correctAnswer: 0,
      explanation:
        'Aturan CIP memprioritaskan atom yang terikat langsung pada karbon kiral berdasarkan NOMOR ATOM TERTINGGI: $\\ce{Br}$ (nomor atom 35) > $\\ce{Cl}$ (17) > $\\ce{O}$ pada $-\\ce{OH}$ (8) > $\\ce{C}$ pada $-\\ce{CH3}$ (6). Oleh karena itu, urutannya adalah $-\\ce{Br} > -\\ce{Cl} > -\\ce{OH} > -\\ce{CH3}$.',
    },
    {
      id: 'chk-116-23',
      type: 'true_false',
      question: 'Jika setelah mengurutkan prioritas $1 > 2 > 3$, arah putaran dari 1 ke 2 ke 3 adalah searah jarum jam dan gugus prioritas terendah (4) mengarah ke belakang (garis putus-putus), maka konfigurasi kiralitasnya adalah $R$ (*Rectus*).',
      correctAnswer: true,
      explanation:
        'Benar. Sesuai aturan konvensi Cahn-Ingold-Prelog, jika gugus prioritas 4 berada di belakang menjauhi pengamat: putaran $1 \\rightarrow 2 \\rightarrow 3$ searah jarum jam dinamakan $R$ (*Rectus* = kanan), sedangkan jika berlawanan jarum jam dinamakan $S$ (*Sinister* = kiri).',
    },
    {
      id: 'chk-116-24',
      type: 'multiple_choice',
      question: 'Suatu pentapeptida yang terdiri dari asam amino Ala, Gly, Leu, Phe, dan Val dihidrolisis parsial dan menghasilkan fragmen tripeptida: $\\text{Ala-Leu-Gly}$ dan $\\text{Leu-Gly-Phe}$, serta dipeptida $\\text{Val-Ala}$. Berdasarkan metode *overlapping fragments*, urutan lengkap pentapeptida tersebut dari ujung N ke ujung C adalah:',
      options: [
        '$\\text{Val-Ala-Leu-Gly-Phe}$',
        '$\\text{Ala-Leu-Gly-Phe-Val}$',
        '$\\text{Leu-Gly-Phe-Val-Ala}$',
        '$\\text{Phe-Gly-Leu-Ala-Val}$',
        '$\\text{Val-Leu-Ala-Gly-Phe}$',
      ],
      correctAnswer: 0,
      explanation:
        'Mari lakukan tumpang-tindih fragmen secara logis:\n1. Fragmen $\\text{Val-Ala}$ memberitahu bahwa $\\text{Val}$ mendahului $\\text{Ala}$.\n2. Fragmen $\\text{Ala-Leu-Gly}$ menyambungkan $\\text{Ala}$ dengan $\\text{Leu-Gly} \\implies \\text{Val-Ala-Leu-Gly}$.\n3. Fragmen $\\text{Leu-Gly-Phe}$ menyambungkan $\\text{Leu-Gly}$ dengan $\\text{Phe} \\implies \\text{Val-Ala-Leu-Gly-Phe}$.\nMaka urutan lengkap asam amino pentapeptida tersebut adalah $\\text{Val-Ala-Leu-Gly-Phe}$.',
    },
  ],
};
