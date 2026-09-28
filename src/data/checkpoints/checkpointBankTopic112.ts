import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_112: Record<string, CheckpointQuizItem[]> = {
  // =========================================================================
  // PRASYARAT 1: Spektrum Sistem Dispersi: Komparasi Larutan, Koloid, dan Suspensi
  // =========================================================================
  'spektrum-sistem-dispersi-larutan-koloid-suspensi': [
    {
      id: 'cp-112-prereq1-q1',
      type: 'multiple_choice',
      question: 'Campuran berikut yang termasuk ke dalam sistem koloid berdasarkan rentang ukuran partikel fase terdispersinya ($1 - 100\\text{ nm}$) dan sifat fisikanya adalah ....',
      options: [
        'Larutan gula pasir dalam air',
        'Air susu dan kabut di pagi hari',
        'Campuran pasir dan air sungai yang keruh mengendap',
        'Udara bersih bebas polusi debu',
      ],
      correctAnswer: 1,
      explanation: 'Larutan gula dan udara bersih merupakan larutan sejati (diameter partikel $< 1\\text{ nm}$), sedangkan pasir dalam air adalah suspensi kasar ($> 100\\text{ nm}$). Susu (emulsi) dan kabut (aerosol cair) memiliki ukuran partikel fase terdispersi pada skala $1 - 100\\text{ nm}$ sehingga tergolong sistem koloid.',
    },
    {
      id: 'cp-112-prereq1-q2',
      type: 'true_false',
      question: 'Sistem koloid tidak dapat disaring menggunakan kertas saring biasa, namun partikel koloid dapat tertahan bila disaring menggunakan selaput membran semipermeabel (ultrafiltrasi).',
      correctAnswer: true,
      explanation: 'Benar. Pori-pori kertas saring biasa berukuran relatif besar (ribuan nanometer), sehingga partikel koloid ($1 - 100\\text{ nm}$) lolos dengan mudah. Sebaliknya, pori-pori membran semipermeabel cukup sempit sehingga mampu menahan partikel koloid namun tetap meloloskan molekul pelarut dan ion elektrolit kecil.',
    },
    {
      id: 'cp-112-prereq1-q3',
      type: 'true_false',
      question: 'Secara makroskopis sistem koloid tampak serba sama (homogen), sehingga koloid digolongkan sebagai campuran homogen satu fasa persis seperti larutan sejati.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Homogenitas Koloid). Meskipun kasat mata tampak homogen dan seragam, jika diamati dengan mikroskop ultra (*ultramicroscope*), sistem koloid terbukti merupakan sistem HETEROGEN DUA FASA (terdiri atas fase terdispersi dan medium pendispersi yang terpisah secara fisik).',
    },
  ],

  // =========================================================================
  // PRASYARAT 2: Antarmuka Fasa & Fenomena Permukaan Fisiko-Kimia Koloid
  // =========================================================================
  'antarmuka-fasa-dan-fenomena-permukaan': [
    {
      id: 'cp-112-prereq2-q1',
      type: 'true_false',
      question: 'Ketika suatu bongkahan padatan dipecah-pecah menjadi jutaan partikel berukuran koloid, rasio luas permukaan terhadap volume total ($A/V$) melonjak drastis hingga jutaan kali lipat.',
      correctAnswer: true,
      explanation: 'Benar. Pemecahan partikel padatan makroskopis menjadi butiran koloid nanometer melipatgandakan luas permukaan kontak secara masif ($A_{\\text{total}} \\propto 1/L$). Luas permukaan yang melonjak hingga ratusan meter persegi per gram ini menjadi penyebab utama tingginya reaktivitas permukaan dan kapasitas adsorpsi koloid.',
    },
    {
      id: 'cp-112-prereq2-q2',
      type: 'multiple_choice',
      question: 'Atom-atom atau molekul yang berada tepat di lapisan permukaan (*antarmuka*) partikel koloid memiliki karakteristik khusus dibanding atom di bagian dalam (*bulk*), yaitu ....',
      options: [
        'Mengalami gaya tarik antarmolekul yang seimbang ke segala arah',
        'Memiliki energi bebas antarmuka yang lebih tinggi akibat resultan gaya tarik ke dalam yang tidak seimbang',
        'Bersifat inert dan sama sekali tidak dapat berinteraksi dengan ion pelarut',
        'Memiliki massa atom yang jauh lebih ringan daripada atom di bagian dalam',
      ],
      correctAnswer: 1,
      explanation: 'Atom di bagian dalam (*bulk*) dikelilingi tetangga sejenis secara simetris sehingga resultan gaya tarik sama dengan nol. Sebaliknya, atom di antarmuka mengalami ketidakseimbangan gaya tarik (tarikan ke dalam lebih kuat dibanding ke medium luar), menghasilkan energi bebas permukaan yang tinggi dan memicu tegangan antarmuka serta sifat adsorpsi.',
    },
    {
      id: 'cp-112-prereq2-q3',
      type: 'true_false',
      question: 'Karena sistem koloid memiliki luas antarmuka yang masif, koloid bersifat stabil secara termodinamika murni dan tidak pernah membutuhkan gaya tolakan elektrostatik atau surfaktan untuk mencegah penggumpalan.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Kestabilan Koloid). Secara termodinamika, sistem koloid cenderung TIDAK STABIL (energi bebas antarmuka $\\Delta G > 0$) dan memiliki kecenderungan spontan untuk bergabung memperkecil luas permukaan. Koloid hanya dapat bertahan stabil secara KINETIK berkat adanya barier muatan elektrostatik sejenis atau rintangan sterik dari molekul surfaktan pelindung.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 1: Klasifikasi 8 Sistem Koloid & Aksi Emulgator
  // =========================================================================
  'klasifikasi-delapan-sistem-koloid-dan-emulgator': [
    {
      id: 'cp-112-core1-q1',
      type: 'multiple_choice',
      question: 'Perhatikan pasangan sistem koloid berikut: (1) Asap knalpot, (2) Mayones, (3) Kabut, (4) Mentega. Pasangan koloid yang memiliki FASE TERDISPERSI BERWUJUD CAIR adalah ....',
      options: [
        '(1) dan (3)',
        '(2) dan (3) saja',
        '(2), (3), dan (4)',
        '(1), (2), dan (4)',
      ],
      correctAnswer: 2,
      explanation: 'Mayones adalah emulsi (cair dalam cair), kabut adalah aerosol cair (cair dalam gas), dan mentega adalah emulsi padat/gel (cair dalam padat). Ketiganya memiliki fase terdispersi CAIR. Sedangkan asap knalpot adalah aerosol padat (padat dalam gas).',
    },
    {
      id: 'cp-112-core1-q2',
      type: 'true_false',
      question: 'Campuran gas dengan gas dapat membentuk sistem koloid jenis aerosol gas jika dikompresi pada tekanan tinggi.',
      correctAnswer: false,
      explanation: 'Salah (Mitos Gas dalam Gas adalah Koloid). Campuran dua gas apa pun selalu saling melarutkan secara sempurna pada tingkat molekular menghasilkan LARUTAN SEJATI homogen satu fasa (karena gaya tarik antarmolekul gas sangat lemah dan entropi pencampuran sangat tinggi). Oleh karena itu, dari 9 kombinasi wujud fasa zat, hanya ada 8 jenis sistem koloid di alam.',
    },
    {
      id: 'cp-112-core1-q3',
      type: 'multiple_choice',
      question: 'Minyak goreng dan air tidak dapat saling melarutkan. Namun jika ditambahkan sedikit kuning telur lalu dikocok kuat, terbentuk saus mayones yang stabil dan tidak memisah. Peran kuning telur dalam sistem tersebut adalah sebagai ....',
      options: [
        'Pelarut organik yang melarutkan molekul minyak secara kimiawi',
        'Zat pengemulsi (emulgator) dengan molekul amfifilik lesitin yang melapisi antarmuka tetesan minyak-air',
        'Katalis yang mempercepat reaksi hidrolisis ikatan ester trigliserida',
        'Zat koagulan yang memadatkan protein albumin telur',
      ],
      correctAnswer: 1,
      explanation: 'Kuning telur mengandung lesitin (fosfolipid) yang bersifat amfifilik: memiliki ekor lipofilik non-polar yang larut dalam tetesan minyak dan kepala hidrofilik polar yang berikatan dengan air. Lapisan lesitin ini membungkus tetesan minyak sehingga mencegah penggabungan kembali tetesan-tetesan minyak (koalesensi).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 2: Sifat Optik (Efek Tyndall) & Kinetik (Gerak Brown) Koloid
  // =========================================================================
  'sifat-optik-dan-kinetik-efek-tyndall-dan-gerak-brown': [
    {
      id: 'cp-112-core2-q1',
      type: 'multiple_choice',
      question: 'Ketika seberkas sinar lampu mobil diarahkan di jalan raya pada malam hari yang berkabut tebal, jalanan berkabut tampak menyala terang oleh berkas cahaya kerucut. Fenomena ini merupakan bukti dari sifat koloid berupa ....',
      options: [
        'Gerak Brown',
        'Elektroforesis',
        'Efek Tyndall',
        'Dialisis',
      ],
      correctAnswer: 2,
      explanation: 'Berkas sinar tampak nyata dan berpendar terang karena foton-foton cahaya dihamburkan (*scattered*) ke segala arah oleh partikel air koloidal di dalam kabut (aerosol cair). Peristiwa hamburan berkas cahaya oleh partikel koloid dinamakan Efek Tyndall.',
    },
    {
      id: 'cp-112-core2-q2',
      type: 'true_false',
      question: 'Gerak Brown pada sistem koloid dapat diamati secara langsung menggunakan mata telanjang atau kaca pembesar (lup) biasa.',
      correctAnswer: false,
      explanation: 'Salah. Partikel koloid berukuran $1 - 100\\text{ nm}$, jauh di bawah batas resolusi mata manusia dan mikroskop optik standar. Gerak zig-zag Brown hanya dapat diamati secara optik menggunakan mikroskop ultra (*ultramicroscope*) dengan mendeteksi kerlipan cahaya pantulan dari partikel yang bergerak.',
    },
    {
      id: 'cp-112-core2-q3',
      type: 'multiple_choice',
      question: 'Penyebab mendasar dari partikel koloid tidak pernah mengendap ke dasar wadah (stabil terhadap medan gravitasi bumi) meskipun didiamkan dalam waktu lama adalah ....',
      options: [
        'Massa jenis partikel koloid selalu persis sama dengan medium airnya',
        'Gerak Brown acak yang terus menerus akibat tumbukan kinetik tak seimbang dari molekul medium pendispersi',
        'Gaya gravitasi bumi sama sekali tidak berpengaruh pada partikel berukuran nanometer',
        'Partikel koloid selalu mengapung karena mengandung gelembung gas',
      ],
      correctAnswer: 1,
      explanation: 'Molekul-molekul medium pelarut yang senantiasa bergerak termal menumbuk partikel koloid secara acak dan asimetris dari berbagai arah. Impuls tumbukan kinetik ini menghasilkan gerak zig-zag Brown yang mengimbangi dan menangkal tarikan gaya gravitasi bumi, sehingga partikel koloid tetap melayang stabil.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 3: Sifat Listrik: Adsorpsi, Lapis Ganda Listrik, dan Elektroforesis
  // =========================================================================
  'sifat-listrik-lapis-ganda-potensial-zeta-elektroforesis': [
    {
      id: 'cp-112-core3-q1',
      type: 'multiple_choice',
      question: 'Sol $\\ce{Fe(OH)3}$ dibuat dengan mereaksikan larutan $\\ce{FeCl3}$ jenuh ke dalam air mendidih. Jika sol tersebut dimasukkan ke dalam pipa U elektroforesis dan dialiri arus listrik searah (DC), maka partikel koloid akan ....',
      options: [
        'Bergerak menuju anoda (kutub positif) karena sol mengadsorpsi anion $\\ce{Cl-}$',
        'Bergerak menuju katoda (kutub negatif) karena sol mengadsorpsi kation $\\ce{Fe^3+}$',
        'Diam di tengah tabung karena partikel koloid tidak bermuatan listrik',
        'Mengendap seketika di dasar pipa tanpa berpindah ke salah satu elektroda',
      ],
      correctAnswer: 1,
      explanation: 'Sol $\\ce{Fe(OH)3}$ menyerap kelebihan kation $\\ce{Fe^3+}$ pada permukaannya sehingga partikel koloid bermuatan POSITIF. Dalam medan listrik searah (elektroforesis), partikel yang bermuatan positif akan bergerak bermigrasi menuju elektroda bermuatan negatif (**katoda**).',
    },
    {
      id: 'cp-112-core3-q2',
      type: 'true_false',
      question: 'Adsorpsi dan absorpsi adalah dua proses yang memiliki arti sama persis dalam kimia koloid, yaitu penyerapan zat asing hingga masuk meresap ke dalam bagian terdalam (*bulk*) partikel.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Adsorpsi vs Absorpsi). Adsorpsi adalah penyerapan yang HANYA TERJADI PADA LAPISAN PERMUKAAN (antarmuka) partikel, seperti penempelan ion pada sol koloid atau penjeratan gas pada karbon aktif. Sedangkan absorpsi adalah penyerapan zat hingga MERESAP MASUK KE DALAM BAGIAN DALAM matriks (seluruh volume), seperti air diserap busa spons.',
    },
    {
      id: 'cp-112-core3-q3',
      type: 'multiple_choice',
      question: 'Suatu suspensi koloid nanopartikel diukur nilai potensial zetanya ($\\zeta$). Berdasarkan teori lapis ganda listrik, sistem koloid tersebut diprediksi berada dalam kondisi SANGAT STABIL terhadap koagulasi jika nilai potensial zetanya adalah ....',
      options: [
        '$\\zeta = +4\\text{ mV}$',
        '$\\zeta = -8\\text{ mV}$',
        '$\\zeta = +38\\text{ mV}$',
        '$\\zeta = 0\\text{ mV}$ (titik isoelektrik)',
      ],
      correctAnswer: 2,
      explanation: 'Berdasarkan kaidah stabilitas koloid elektrostatik, sistem koloid memiliki tolakan muatan yang kuat dan stabil terhadap koagulasi jika besar mutlak potensial zeta $|\\zeta| > 30\\text{ mV}$. Nilai yang mendekati nol ($|\\zeta| < 15\\text{ mV}$) menunjukkan gaya tolak yang sangat lemah sehingga partikel mudah saling mendekat dan menggumpal.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 4: Kestabilan Koloid, Koagulasi Schulze-Hardy, dan Koloid Pelindung
  // =========================================================================
  'kestabilan-koagulasi-aturan-schulze-hardy-dan-koloid-pelindung': [
    {
      id: 'cp-112-core4-q1',
      type: 'multiple_choice',
      question: 'Untuk mengendapkan sejumlah sol $\\ce{As2S3}$ yang bermuatan negatif di laboratorium, disediakan larutan garam elektrolit berkonsentrasi sama: (1) $\\ce{NaCl}$, (2) $\\ce{MgCl2}$, (3) $\\ce{AlCl3}$. Berdasarkan Aturan Schulze-Hardy, urutan kekuatan daya koagulasi garam tersebut dari yang paling efektif adalah ....',
      options: [
        '$\\ce{NaCl} > \\ce{MgCl2} > \\ce{AlCl3}$',
        '$\\ce{AlCl3} > \\ce{MgCl2} > \\ce{NaCl}$',
        '$\\ce{MgCl2} > \\ce{AlCl3} > \\ce{NaCl}$',
        'Ketiga larutan memiliki daya koagulasi sama persis karena konsentrasinya sama',
      ],
      correctAnswer: 1,
      explanation: 'Sol $\\ce{As2S3}$ bermuatan negatif, sehingga ion yang efektif memicu koagulasi adalah KATION bermuatan positif. Menurut Aturan Schulze-Hardy, semakin besar muatan (valensi) ion lawan, semakin tinggi daya koagulasinya (daya koagulasi $\\propto z^6$). Valensi kation: $\\ce{Al^3+} (z=3) > \\ce{Mg^2+} (z=2) > \\ce{Na+} (z=1)$. Maka larutan $\\ce{AlCl3}$ paling kuat mengkoagulasikan sol negatif.',
    },
    {
      id: 'cp-112-core4-q2',
      type: 'true_false',
      question: 'Partikel koloid liofil (seperti gelatin dan kanji) jauh lebih mudah dikoagulasikan oleh penambahan sedikit tetes elektrolit encer dibandingkan dengan koloid liofob (seperti sol emas dan sol belerang).',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Koloid Liofil vs Liofob). Koloid liofil (hidrofil) SANGAT SUKAR DIKOAGULASIKAN karena distabilkan ganda oleh mantel hidrasi molekul air yang sangat tebal selain muatan listriknya. Sebaliknya, koloid liofob HANYA distabilkan oleh muatan listrik tipis, sehingga sedikit ion elektrolit lawan akan langsung menetralkan muatan dan memicu koagulasi cepat.',
    },
    {
      id: 'cp-112-core4-q3',
      type: 'multiple_choice',
      question: 'Pada industri pembuatan es krim komersial sering ditambahkan gelatin dalam jumlah kecil. Fungsi utama gelatin dalam sistem es krim tersebut adalah sebagai ....',
      options: [
        'Emulgator pembentuk gelembung gas nitrogen',
        'Koloid pelindung yang membungkus partikel es sehingga mencegah kristalisasi kasar dan menjaga kelembutan es krim',
        'Zat koagulan yang memisahkan lemak susu dari air',
        'Bahan pengawet yang membunuh bakteri pembusuk',
      ],
      correctAnswer: 1,
      explanation: 'Gelatin merupakan koloid liofil yang berfungsi sebagai KOLOID PELINDUNG (*protective colloid*). Gelatin membentuk lapisan pelindung di sekeliling butiran air dan laktosa, mencegah penggabungan kristal es menjadi butiran es kasar sehingga es krim memiliki tekstur lembut (*creamy*).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 5: Pembuatan Koloid (Kondensasi vs Dispersi), Dialisis, dan Misil (CMC)
  // =========================================================================
  'sintesis-koloid-pemurnian-dialisis-dan-misil-cmc': [
    {
      id: 'cp-112-core5-q1',
      type: 'multiple_choice',
      question: 'Pembuatan sol belerang dapat dilakukan dengan menggerus serbuk belerang padat bersama kristal gula pasir hingga halus menggunakan mortar lalu diaduk ke dalam air. Metode pembuatan koloid ini tergolong ke dalam ....',
      options: [
        'Cara Kondensasi Reaksi Redoks',
        'Cara Dispersi Mekanik',
        'Cara Kondensasi Reaksi Hidrolisis',
        'Cara Peptisasi Elektrolit',
      ],
      correctAnswer: 1,
      explanation: 'Menggerus butiran padatan makroskopis kasar hingga mencapai ukuran partikel koloid nanometer merupakan contoh nyata dari cara DISPERSI MEKANIK (memperkecil partikel kasar menjadi partikel koloid).',
    },
    {
      id: 'cp-112-core5-q2',
      type: 'multiple_choice',
      question: 'Pasien yang mengalami gagal ginjal harus menjalani prosedur cuci darah (*hemodialisis*). Prinsip kimia koloid yang mendasari proses hemodialisis adalah ....',
      options: [
        'Memisahkan sel darah menggunakan gaya sentrifugal berkecepatan tinggi',
        'Difusi selektif molekul racun metabolit kecil dan ion elektrolit melalui membran semipermeabel sementara sel darah dan protein koloid tertahan',
        'Pengendapan partikel darah menggunakan penambahan tawas aluminium sulfat',
        'Pemanasan darah untuk menguapkan zat sisa metabolisme',
      ],
      correctAnswer: 1,
      explanation: 'Dialisis memanfaatkan membran semipermeabel yang memiliki ukuran pori spesifik: molekul racun kecil (seperti urea dan kreatinin) serta kelebihan ion elektrolit dapat menembus pori membran keluar menuju cairan dialisat, sedangkan sel darah dan protein albumin yang berukuran koloid ($> 1\\text{ nm}$) tetap tertahan aman di dalam kantung pembuluh darah.',
    },
    {
      id: 'cp-112-core5-q3',
      type: 'true_false',
      question: 'Di bawah konsentrasi misil kritis (CMC), molekul surfaktan sabun telah berkumpul membentuk agregat bola misil berukuran koloid di seluruh larutan.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Ambang Batas CMC). Di BAWAH konsentrasi misil kritis ($C < \\text{CMC}$), molekul surfaktan berada dalam wujud monomer tunggal bebas yang larut sempurna membentuk LARUTAN SEJATI. Agregat bola misil (koloid asosiasi) HANYA mulai terbentuk ketika konsentrasi surfaktan mencapai atau melampaui ambang batas CMC ($C \\ge \\text{CMC}$).',
    },
  ],
};
