import type { CheckpointQuizItem } from '../materialsData';

export const CHECKPOINTS_TOPIC_101: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Hakikat Sains Kimia, Segitiga Johnstone & Taksonomi Materi
  'hakikat-kimia-dan-materi': [
    {
      id: 'chk-101-pre1-q1',
      type: 'multiple_choice',
      question: 'Berdasarkan Segitiga Johnstone, ketika air mendidih $(\\ce{H2O(l) -> H2O(g)})$, apa yang sebenarnya terjadi pada tingkat sub-mikroskopis (partikulat)?',
      options: [
        'Ikatan kovalen $\\ce{H-O}$ putus sehingga menghasilkan molekul gas hidrogen $(\\ce{H2})$ dan gas oksigen $(\\ce{O2})$',
        'Jarak antarmolekul $\\ce{H2O}$ merenggang akibat terputusnya ikatan hidrogen antarmolekul, sementara molekul $\\ce{H2O}$ tetap utuh',
        'Atom-atom hidrogen dan oksigen mengerut ukurannya akibat peningkatan energi kinetik termal',
        'Elektron-elektron valensi terlepas dari orbital molekul membentuk plasma hidronium',
      ],
      correctAnswer: 1,
      explanation: 'Miskonsepsi umum siswa mengira air mendidih memutus ikatan kovalen $\\ce{H-O}$. Faktanya, pendidihan adalah perubahan fisika; energi panas hanya mengatasi gaya tarik antarmolekul (ikatan hidrogen) sehingga molekul $\\ce{H2O}$ bergerak bebas dalam fasa gas tanpa mengubah identitas molekulernya.',
      misconceptionTarget: 'Mengira perubahan fasa (mendidih) memecah ikatan kimia intramolekul',
    },
    {
      id: 'chk-101-pre1-q2',
      type: 'true_false',
      question: 'Larutan gula pasir dalam air murni merupakan suatu senyawa kimia baru karena gula telah larut sempurna secara homogen dan tidak dapat dipisahkan lagi dengan penyaringan kertas saring biasa.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Larutan gula adalah campuran homogen (larutan), bukan senyawa. Meskipun homogen dan lolos kertas saring, molekul sukrosa dan molekul air tidak membentuk ikatan kimia baru. Komponen penyusunnya mempertahankan sifat aslinya dan dapat dipisahkan kembali melalui metode fisika seperti distilasi atau evaporasi.',
      misconceptionTarget: 'Mengacaukan definisi campuran homogen dengan senyawa murni',
    },
    {
      id: 'chk-101-pre1-q3',
      type: 'multiple_choice',
      question: 'Manakah dari fenomena berikut yang BUKAN merupakan perubahan kimia, meskipun secara visual menghasilkan gelembung gas?',
      options: [
        'Pita magnesium dimasukkan ke dalam larutan asam klorida encer',
        'Pemanasan air murni di dalam bejana terbuka hingga mencapai titik didihnya',
        'Kapur sirih $(\\ce{CaCO3})$ ditetesi dengan cuka makan $(\\ce{CH3COOH})$',
        'Tablet effervescent dimasukkan ke dalam segelas air dingin',
      ],
      correctAnswer: 1,
      explanation: 'Pemanasan air hingga mendidih menghasilkan gelembung uap air $(\\ce{H2O(g)})$ melalui perubahan fasa fisika tanpa pembentukan zat baru. Tiga opsi lainnya adalah reaksi kimia sejati yang menghasilkan zat baru: gas $\\ce{H2}$ (reaksi Mg + asam), gas $\\ce{CO2}$ (reaksi kapur + cuka), dan gas $\\ce{CO2}$ (effervescent).',
      misconceptionTarget: 'Mengira timbulnya gelembung gas selalu menjadi bukti mutlak reaksi kimia',
    },
  ],

  // Prasyarat 2: Pengukuran Ilmiah, Angka Penting, Aturan Pembulatan Genap & Akurasi vs Presisi
  'pengukuran-angka-penting-si': [
    {
      id: 'chk-101-pre2-q1',
      type: 'multiple_choice',
      question: 'Seorang siswa mengalikan panjang pelat $4.50\\text{ cm}$ (3 angka penting) dengan lebar $2.0\\text{ cm}$ (2 angka penting). Berdasarkan kaidah baku perambatan angka penting, bagaimana hasil luas pelat tersebut harus dilaporkan?',
      options: [
        '$9\\text{ cm}^2$',
        '$9.0\\text{ cm}^2$',
        '$9.00\\text{ cm}^2$',
        '$9.000\\text{ cm}^2$',
      ],
      correctAnswer: 1,
      explanation: 'Dalam operasi perkalian dan pembagian, jumlah angka penting pada hasil akhir harus mengikuti data dengan angka penting paling sedikit. Nilai $4.50$ memiliki 3 AP dan $2.0$ memiliki 2 AP, sehingga hasil $9$ harus ditulis dengan 2 AP, yaitu $9.0\\text{ cm}^2$.',
      misconceptionTarget: 'Menghilangkan angka nol desimal signifikan pada hasil perkalian',
    },
    {
      id: 'chk-101-pre2-q2',
      type: 'true_false',
      question: 'Menurut aturan pembulatan genap terdekat (*Banker\'s Rounding*), angka $12.35$ dibulatkan menjadi $12.4$, sedangkan angka $12.45$ dibulatkan menjadi $12.4$ jika dipertahankan satu tempat desimal.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. *Banker\'s Rounding* dirancang untuk mencegah bias akumulasi ke atas. Jika angka yang dibuang tepat $5$, angka di depannya dibulatkan ke bilangan genap terdekat: $3$ (ganjil) naik menjadi $4$ (genap: $12.4$), sedangkan $4$ (sudah genap) tetap dipertahankan menjadi $4$ ($12.4$).',
      misconceptionTarget: 'Miskonsepsi bahwa angka 5 selalu wajib dibulatkan ke atas',
    },
    {
      id: 'chk-101-pre2-q3',
      type: 'multiple_choice',
      question: 'Sebuah neraca analitik ditera dengan anak timbang standar $10.000\\text{ g}$. Empat kali penimbangan berturut-turut menghasilkan nilai: $8.502\\text{ g}$, $8.501\\text{ g}$, $8.503\\text{ g}$, dan $8.502\\text{ g}$. Karakteristik data pengukuran ini adalah:',
      options: [
        'Akurasi tinggi dan presisi tinggi',
        'Presisi tinggi tetapi akurasi rendah',
        'Akurasi tinggi tetapi presisi rendah',
        'Akurasi rendah dan presisi rendah',
      ],
      correctAnswer: 1,
      explanation: 'Data tersebut sangat berdekatan satu sama lain (reprodusibilitas tinggi, simpangan sangat kecil $\\pm 0.001\\text{ g}$), menunjukkan **presisi tinggi**. Namun, rata-ratanya ($8.502\\text{ g}$) terpaut jauh dari nilai sebenarnya ($10.000\\text{ g}$), yang mencerminkan adanya galat sistematik dan **akurasi rendah**.',
      misconceptionTarget: 'Menyamakan arti akurasi (ketepatan terhadap nilai sejati) dengan presisi (keterulangan data)',
    },
  ],

  // Konsep Inti 1: Siklus Metode Ilmiah, Triad Variabel & Desain Uji Adil (Fair Test)
  'metode-ilmiah-dan-variabel': [
    {
      id: 'chk-101-core1-q1',
      type: 'multiple_choice',
      question: 'Dalam investigasi laju reaksi pelarutan tablet effervescent dalam air, siswa mengubah-ubah suhu air ($10^\\circ\\text{C}, 30^\\circ\\text{C}, 60^\\circ\\text{C}$) dan mencatat waktu yang dibutuhkan hingga tablet larut sempurna, dengan volume air ($200\\text{ mL}$) dan massa tablet tetap. Variabel bebas dan variabel terikatnya berturut-turut adalah...',
      options: [
        'Waktu pelarutan (variabel bebas) dan suhu air (variabel terikat)',
        'Suhu air (variabel bebas) dan waktu pelarutan (variabel terikat)',
        'Volume air (variabel bebas) dan massa tablet (variabel terikat)',
        'Suhu air (variabel bebas) dan volume air (variabel terikat)',
      ],
      correctAnswer: 1,
      explanation: 'Variabel bebas (*independent variable*) adalah faktor yang sengaja dimanipulasi oleh peneliti secara terencana, yaitu **suhu air**. Variabel terikat (*dependent variable*) adalah respons yang diamati atau diukur sebagai dampak dari variabel bebas, yaitu **waktu pelarutan**.',
      misconceptionTarget: 'Tertukar antara variabel bebas (sebab) dan variabel terikat (akibat)',
    },
    {
      id: 'chk-101-core1-q2',
      type: 'true_false',
      question: 'Kelompok kontrol negatif (*negative control*) sengaja dirancang dalam eksperimen ilmiah untuk memastikan bahwa perubahan yang teramati benar-benar dihasilkan oleh variabel bebas, bukan oleh kontaminasi pelarut atau faktor luar.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Kontrol negatif tidak diberi perlakuan variabel bebas (misalnya hanya pelarut murni). Jika kontrol negatif tidak menunjukkan respons apa pun, peneliti yakin bahwa fenomena yang muncul pada tabung uji memang dipicu oleh zat uji (variabel bebas).',
      misconceptionTarget: 'Menganggap kelompok kontrol adalah pemborosan reagen yang tidak perlu',
    },
    {
      id: 'chk-101-core1-q3',
      type: 'multiple_choice',
      question: 'Manakah kriteria paling mendasar yang membedakan hipotesis ilmiah dari sekadar opini atau spekulasi pribadi?',
      options: [
        'Hipotesis ilmiah tidak boleh dapat dibuktikan salah oleh eksperimen apa pun',
        'Hipotesis ilmiah harus *falsifiable* (dapat diuji secara terukur dan memiliki potensi disangkal jika data bertentangan)',
        'Hipotesis ilmiah harus didukung oleh suara mayoritas ilmuwan saat pertama kali dirumuskan',
        'Hipotesis ilmiah hanya boleh dinyatakan dalam bentuk persamaan matematika kalkulus',
      ],
      correctAnswer: 1,
      explanation: 'Menurut filsafat sains Karl Popper, syarat mutlak hipotesis ilmiah adalah sifat *falsifiability*—harus ada pengujian empiris yang jelas yang berpeluang membuktikan hipotesis tersebut salah jika realitas alam tidak mendukungnya. Jika suatu klaim tidak bisa diuji atau disangkal, itu bukanlah sains.',
      misconceptionTarget: 'Mengira hipotesis yang baik adalah pernyataan dogmatis yang tidak bisa dibantah',
    },
  ],

  // Konsep Inti 2: Instrumen Laboratorium Presisi, Teknik Meniskus & Karakteristik Nyala Bunsen
  'alat-laboratorium-teknik-pengukuran': [
    {
      id: 'chk-101-core2-q1',
      type: 'multiple_choice',
      question: 'Bagaimana prosedur standar pembacaan skala volume larutan tembaga sulfat encer pada buret laboratorium untuk menghindari galat paralaks?',
      options: [
        'Garis pandang mata tegak lurus sejajar dengan puncak tepi atas meniskus larutan',
        'Garis pandang mata tegak lurus mendatar sejajar dengan bagian dasar lengkungan meniskus cekung',
        'Buret diangkat dan dimiringkan $45^\\circ$ mendekati mata pengamat',
        'Membaca skala dari sudut pandang atas agar seluruh permukaan cairan terlihat jelas',
      ],
      correctAnswer: 1,
      explanation: 'Larutan berair membasahi dinding kaca (adhesi > kohesi) sehingga membentuk meniskus cekung. Pembacaan skala buret wajib dilakukan tepat horizontal dengan posisi mata sejajar dasar meniskus cekung terbawah untuk menghindari galat pembiasan sudut (paralaks).',
      misconceptionTarget: 'Membaca meniskus cekung pada bagian tepi atas yang menempel di dinding kaca',
    },
    {
      id: 'chk-101-core2-q2',
      type: 'true_false',
      question: 'Labu ukur volumetrik (*volumetric flask*) dan buret terkalibrasi presisi aman dipanaskan langsung di atas nyala api Bunsen untuk mempercepat kelarutan zat padat.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Peralatan volumetrik presisi (labu ukur, buret, pipet gondok) dikalibrasi pada suhu spesifik ($20^\\circ\\text{C}$). Pemanasan langsung akan memicu pemuaian termal kaca yang tidak merata dan deformasi permanen, sehingga kalibrasi volumenya rusak selamanya.',
      misconceptionTarget: 'Menganggap semua alat gelas laboratorium boleh dipanaskan langsung',
    },
    {
      id: 'chk-101-core2-q3',
      type: 'multiple_choice',
      question: 'Pada nyala api pembakar Bunsen dengan lubang udara terbuka penuh (nyala biru non-luminous), zona manakah yang memiliki suhu paling tinggi untuk pemanasan optimal?',
      options: [
        'Zona gelap dingin di bagian dasar dekat mulut pipa pembakar',
        'Zona kerucut dalam yang mengandung gas belum terbakar sempurna',
        'Tepat di puncak ujung kerucut dalam (*tip of the inner blue cone*)',
        'Selubung terluar nyala api yang memudar ke udara bebas',
      ],
      correctAnswer: 2,
      explanation: 'Suhu tertinggi nyala api Bunsen non-luminous (mencapai sekitar $1500^\\circ\\text{C}$) terletak tepat di ujung kerucut dalam (*tip of the inner cone*), tempat di mana pembakaran hidrokarbon gas dengan oksigen berlangsung paling efisien dan sempurna.',
      misconceptionTarget: 'Mengira bagian paling bawah atau selubung paling luar adalah zona terpanas',
    },
  ],

  // Konsep Inti 3: Standarisasi K3 Lab, 9 Simbol Bahaya GHS, Lembar SDS & Kaidah Emas AAA
  'keselamatan-kerja-lab-ghs-sds': [
    {
      id: 'chk-101-core3-q1',
      type: 'multiple_choice',
      question: 'Mengapa kaidah keselamatan kerja "Always Add Acid" (AAA) mewajibkan penambahan asam pekat secara perlahan ke dalam air lewat dinding gelas, dan BUKAN menuangkan air ke dalam asam pekat?',
      options: [
        'Air memiliki titik beku lebih rendah sehingga akan membekukan asam pekat seketika',
        'Pelarutan asam sangat eksoterm; massa jenis air lebih kecil sehingga jika dituangkan ke asam pekat, air akan mengapung, mendidih mendadak dan memercikkan asam ke wajah',
        'Asam sulfat pekat tidak dapat melarut jika volume air lebih besar dari volume asam',
        'Menuangkan air ke asam akan mengubah wujud asam pekat menjadi gas beracun secara spontan',
      ],
      correctAnswer: 1,
      explanation: 'Hidrasi asam pekat (seperti $\\ce{H2SO4}$) melepaskan kalor pelarutan yang sangat besar. Karena air memiliki massa jenis lebih rendah daripada asam pekat, menuangkan air ke dalam asam menyebabkan air mengapung di permukaan asam. Panas lokal seketika mendidihkan air tersebut dan melontarkan percikan asam pekat yang sangat korosif ke lingkungan sekitar.',
      misconceptionTarget: 'Menganggap urutan pencampuran air dan asam pekat tidak memiliki perbedaan keselamatan',
    },
    {
      id: 'chk-101-core3-q2',
      type: 'true_false',
      question: 'Piktogram GHS berupa tanda seru (*exclamation mark*) dalam belah ketupat bergaris tepi merah mengindikasikan bahaya toksisitas akut fatal tingkat tinggi yang dapat menyebabkan kematian dalam dosis mikro.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Simbol tanda seru (*exclamation mark*) GHS digunakan untuk bahaya tingkat sedang seperti iritasi kulit/mata, sensitisasi, atau toksisitas akut kategori 4. Bahaya toksisitas akut yang mematikan (*fatal*) disimbolkan oleh lambang tengkorak dan tulang bersilang (*skull and crossbones*).',
      misconceptionTarget: 'Mengira tanda seru adalah piktogram untuk bahaya paling fatal',
    },
    {
      id: 'chk-101-core3-q3',
      type: 'multiple_choice',
      question: 'Tindakan pertolongan pertama yang paling mendesak dan benar ketika kulit lengan Anda terkena tumpahan larutan natrium hidroksida $(\\ce{NaOH})$ pekat adalah:',
      options: [
        'Segera menyiram luka dengan asam klorida pekat agar reaksi netralisasi berlangsung cepat',
        'Membasuh area yang terpapar dengan air mengalir secara kontinu selama minimal 15 hingga 20 menit',
        'Mengoleskan pasta gigi atau kecap tebal-tebal untuk mendinginkan rasa licin dan panas',
        'Membungkus lengan dengan kain kasa rapat tanpa dibilas agar udara tidak masuk',
      ],
      correctAnswer: 1,
      explanation: 'Basa kuat bersifat kaustik dan menyabunkan lipid jaringan kulit (*saponifikasi*). Pembilasan dengan air mengalir kontinu minimal 15-20 menit adalah tindakan wajib untuk mengencerkan dan menghanyutkan ion hidroksida. Dilarang menetralkan dengan asam kuat di kulit karena kalor reaksi netralisasi justru akan menambah luka bakar termal!',
      misconceptionTarget: 'Mencoba menetralkan tumpahan asam/basa kuat di tubuh dengan zat lawannya yang pekat',
    },
  ],

  // Konsep Inti 4: Prinsip Kimia Hijau (Green Chemistry) & Kuantifikasi Ekonomi Atom
  'kimia-hijau-dan-ekonomi-atom': [
    {
      id: 'chk-101-core4-q1',
      type: 'multiple_choice',
      question: 'Suatu reaksi sintesis farmasi menghasilkan rendemen hasil (*yield*) sebesar $95\\%$, namun nilai ekonomi atom (*atom economy*) reaksi tersebut hanya $28\\%$. Makna konseptual dari fakta ini adalah:',
      options: [
        'Proses tersebut sangat ramah lingkungan karena hampir seluruh reagen berhasil bereaksi',
        'Meskipun reaksi berjalan efisien, sebagian besar massa atom reagen berakhir sebagai produk samping yang terbuang menjadi limbah',
        'Hanya $5\\%$ dari massa total reagen yang berubah menjadi limbah industri',
        'Katalis yang digunakan tidak berfungsi secara selektif dalam menurunkan energi aktivasi',
      ],
      correctAnswer: 1,
      explanation: 'Persen hasil ($95\\%$) hanya mengukur seberapa efisien konversi reaksi eksperimental dibandingkan target teoritis. Namun ekonomi atom ($28\\%$) mengukur proporsi massa atom pereaksi yang benar-benar terintegrasi ke dalam molekul produk target. Nilai $28\\%$ menandakan bahwa $72\\%$ massa atom reagen terbuang sia-sia sebagai produk samping (limbah berlebih).',
      misconceptionTarget: 'Menyamakan persen rendemen (yield) tinggi dengan proses kimia hijau yang bebas limbah',
    },
    {
      id: 'chk-101-core4-q2',
      type: 'true_false',
      question: 'Berdasarkan prinsip ke-9 Green Chemistry, penggunaan katalis selektif lebih diutamakan daripada penggunaan reagen stoikiometris berlebih karena katalis dapat dipakai berulang kali dalam jumlah kecil serta meningkatkan selektivitas produk.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Prinsip katalisis dalam Green Chemistry menegaskan bahwa reagen katalitik jauh lebih unggul dibandingkan reagen stoikiometris. Katalis meningkatkan laju dan selektivitas reaksi dengan energi aktivasi lebih rendah tanpa ikut dikonsumsi menjadi limbah stoikiometri.',
      misconceptionTarget: 'Menganggap reagen berlebih lebih baik daripada penggunaan katalis yang mahal',
    },
    {
      id: 'chk-101-core4-q3',
      type: 'multiple_choice',
      question: 'Reaksi adisi langsung etilena dengan oksigen menghasilkan etilena oksida: $\\ce{C2H4 + 1/2 O2 -> C2H4O}$. Berapakah persentase ekonomi atom dari rute sintesis ini?',
      options: [
        '$50\\%$',
        '$75\\%$',
        '$100\\%$',
        '$33.3\\%$',
      ],
      correctAnswer: 2,
      explanation: 'Karena seluruh atom dari reaktan $(\\ce{C2H4}$ dan $\\ce{O})$ terinkorporasi seutuhnya ke dalam molekul produk target tunggal $(\\ce{C2H4O})$ tanpa ada atom yang tersisa sebagai produk samping, maka nilai ekonomi atomnya adalah $\\frac{M_r(\\ce{C2H4O})}{M_r(\\ce{C2H4}) + 0.5 M_r(\\ce{O2})} \\times 100\\% = 100\\%$.',
      misconceptionTarget: 'Mengira reaksi adisi tetap memiliki produk sampingan yang mengurangi ekonomi atom',
    },
  ],
};
