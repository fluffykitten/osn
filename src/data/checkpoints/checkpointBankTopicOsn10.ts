import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_OSN_10: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Stereokimia Cahn-Ingold-Prelog (CIP), Proyeksi Fischer/Newman & Isomerisme Spasial
  'prasyarat-stereokimia-cip-proyeksi-kiralitas': [
    {
      id: 'chk-osn10-pre1-q1',
      type: 'true_false',
      question: 'Pada proyeksi Fischer, memutar seluruh struktur molekul sebesar $90^\\circ$ pada bidang kertas akan membalik konfigurasi absolut stereopusat ($R \\leftrightarrow S$), sedangkan memutar sebesar $180^\\circ$ mempertahankan konfigurasi stereokimianya.',
      correctAnswer: true,
      explanation: 'Benar! Memutar proyeksi Fischer sebesar $90^\\circ$ menukar ikatan vertikal (yang menjauhi pengamat) menjadi ikatan horizontal (yang menonjol ke arah pengamat), sehingga konfigurasi absolut terbalik ($R$ menjadi $S$). Sebaliknya, rotasi $180^\\circ$ setara dengan dua kali pertukaran gugus simultan, sehingga konfigurasi stereokimia dipertahankan secara utuh.',
      misconceptionTarget: 'Mengira proyeksi Fischer dapat diputar bebas pada sudut sembarang seperti struktur 3D tanpa mengubah konfigurasi stereokimia ruang.',
    },
    {
      id: 'chk-osn10-pre1-q2',
      type: 'multiple_choice',
      question: 'Berdasarkan aturan prioritas Cahn-Ingold-Prelog (CIP), bagaimanakah urutan prioritas yang benar dari keempat gugus berikut jika terikat pada sebuah karbon kiral: $-\\ce{CH=O}$ (formil), $-\\ce{CH2OH}$ (hidroksimetil), $-\\ce{COOH}$ (karboksil), dan $-\\ce{CH3}$ (metil)?',
      options: [
        '$-\\ce{COOH} > -\\ce{CH=O} > -\\ce{CH2OH} > -\\ce{CH3}$',
        '$-\\ce{CH=O} > -\\ce{COOH} > -\\ce{CH2OH} > -\\ce{CH3}$',
        '$-\\ce{COOH} > -\\ce{CH2OH} > -\\ce{CH=O} > -\\ce{CH3}$',
        '$-\\ce{CH2OH} > -\\ce{COOH} > -\\ce{CH=O} > -\\ce{CH3}$',
      ],
      correctAnswer: 0,
      explanation: 'Penelusuran atom lapisan kedua: Semuanya mengikat atom karbon ($Z=6$). Pada lapisan kedua: $-\\ce{COOH}$ diperlakukan mengikat $(\\ce{O, O, O})$ karena ikatan rangkap dua karbonil; $-\\ce{CH=O}$ diperlakukan mengikat $(\\ce{O, O, H})$; $-\\ce{CH2OH}$ mengikat $(\\ce{O, H, H})$; dan $-\\ce{CH3}$ mengikat $(\\ce{H, H, H})$. Perbandingan pada titik perbedaan pertama menghasilkan urutan: $-\\ce{COOH} > -\\ce{CH=O} > -\\ce{CH2OH} > -\\ce{CH3}$.',
      misconceptionTarget: 'Terkecoh dengan mengira gugus alkohol $-\\ce{CH2OH}$ memiliki prioritas lebih tinggi karena atom oksigen berikatan tunggal dengan hidrogen.',
    },
    {
      id: 'chk-osn10-pre1-q3',
      type: 'multiple_choice',
      question: 'Suatu molekul asam tartrat memiliki dua pusat kiralitas dengan konfigurasi $(2R, 3S)$. Mengapa senyawa tersebut bersifat optis inaktif ($[\\alpha]_D = 0^\\circ$) saat diukur menggunakan polarimeter?',
      options: [
        'Karena terjadi rasemisasi cepat antara sepasang enantiomer di dalam larutan air',
        'Karena molekul tersebut merupakan senyawa meso yang memiliki bidang simetri internal ($\\sigma$), sehingga rotasi optik paruh atas ditiadakan oleh paruh bawah molekul (kompensasi internal)',
        'Karena gugus hidroksil pada C2 dan C3 membentuk ikatan hidrogen intramolekul yang menonaktifkan momen dipol',
        'Karena kedua karbon kiral tersebut saling membatalkan muatan elektrostatik',
      ],
      correctAnswer: 1,
      explanation: 'Senyawa meso adalah molekul yang memiliki stereopusat kiral majemuk tetapi memiliki bidang cermin simetri internal ($\\sigma$) atau pusat inversi ($i$). Paruh atas molekul memutar cahaya terpolarisasi dengan sudut yang tepat sama besarnya tetapi berlawanan arah dengan paruh bawah molekul (*kompensasi internal*), sehingga secara mikroskopis molekul bersifat akiral murni dan optis inaktif.',
      misconceptionTarget: 'Menyamakan senyawa meso dengan campuran rasemat, padahal senyawa meso bersifat inaktif karena simetri internal satu molekul murni, bukan kompensasi eksternal campuran 50:50.',
    },
  ],

  // Prasyarat 2: Termodinamika & Kinetika Reaksi Organik, Postulat Hammond & Intermediet Reaktif
  'prasyarat-termodinamika-kinetika-organik-diagram-energi': [
    {
      id: 'chk-osn10-pre2-q1',
      type: 'true_false',
      question: 'Berdasarkan Postulat Hammond, pada tahap reaksi yang sangat endotermik / endergonik ($\\Delta G^\\circ \\gg 0$), struktur keadaan transisi (*transition state*) menyerupai struktur intermediet atau produk (*late transition state*), sehingga faktor-faktor yang menstabilkan produk juga akan menurunkan energi aktivasi reaksi.',
      correctAnswer: true,
      explanation: 'Benar! Postulat Hammond menyatakan bahwa struktur keadaan transisi menyerupai spesi yang energinya paling dekat dengannya. Pada reaksi endergonik, keadaan transisi berada dekat dengan produk dalam koordinat energi bebas, sehingga strukturnya mirip produk (*late transition state*). Maka pembentukan zat antara yang lebih stabil (misal karbokation tersier vs sekunder) memiliki energi aktivasi pembentukan yang lebih rendah.',
      misconceptionTarget: 'Menganggap keadaan transisi selalu berada tepat di tengah-tengah antara struktur reaktan dan produk tanpa mempedulikan termodinamika reaksi.',
    },
    {
      id: 'chk-osn10-pre2-q2',
      type: 'multiple_choice',
      question: 'Manakah urutan kestabilan karbokation berikut yang benar dari yang paling stabil hingga yang paling tidak stabil?',
      options: [
        'Benzilik $\\approx$ Alilik $> 3^\\circ > 2^\\circ > 1^\\circ > \\text{Vinilik}$',
        '$3^\\circ > \\text{Benzilik} > \\text{Alilik} > 2^\\circ > 1^\\circ > \\text{Vinilik}$',
        'Benzilik $> 3^\\circ > \\text{Alilik} > \\text{Vinilik} > 2^\\circ > 1^\\circ$',
        '$3^\\circ > 2^\\circ > 1^\\circ > \\text{Benzilik} > \\text{Alilik} > \\text{Vinilik}$',
      ],
      correctAnswer: 0,
      explanation: 'Karbokation terstabilkan sangat kuat oleh delokalisasi resonansi orbital $\\pi$ (pada benzilik dan alilik), diikuti oleh efek stabilisasi hiperkonjugasi orbital $\\sigma_{\\ce{C-H}}$ dan induksi pendorong elektron dari gugus alkil ($3^\\circ > 2^\\circ > 1^\\circ$). Karbokation vinilik ($-\\ce{CH=C^+H}$) sangat tidak stabil karena muatan positif berada pada orbital hibrida $sp^2$ yang memiliki karakter $s$ tinggi dan sangat elektronegatif.',
      misconceptionTarget: 'Mengabaikan keunggulan delokalisasi resonansi pada karbokation alilik/benzilik dibandingkan stabilisasi hiperkonjugasi murni pada karbokation tersier biasa.',
    },
    {
      id: 'chk-osn10-pre2-q3',
      type: 'multiple_choice',
      question: 'Pada reaksi adisi $\\ce{HBr}$ terhadap $1,3$-butadiena pada suhu rendah ($-80^\\circ\\text{C}$), produk adisi-$1,2$ terbentuk sebagai produk mayoritas ($80\\%$), sedangkan pada suhu tinggi ($+40^\\circ\\text{C}$), produk adisi-$1,4$ mendominasi ($80\\%$). Mengapa fenomena kontrol kinetik vs termodinamik ini terjadi?',
      options: [
        'Produk $1,2$ memiliki energi aktivasi lebih rendah karena efek kedekatan ion bromida (*proximity effect*), sedangkan produk $1,4$ lebih stabil termodinamik karena membentuk alkena internal disubstitusi yang lebih terstabilkan',
        'Produk $1,4$ memiliki energi aktivasi lebih rendah sehingga mendominasi pada suhu tinggi',
        'Produk $1,2$ lebih stabil termodinamik karena ikatan rangkap berada di ujung rantai',
        'Pada suhu tinggi terjadi perusakan mekanisme radikal bebas menjadi mekanisme karbokation',
      ],
      correctAnswer: 0,
      explanation: 'Pada pembentukan karbokation alilik, ion bromida berada tepat di dekat C2 saat protonasi terjadi (*ion pair proximity*), sehingga serangan pada C2 berlangsung paling cepat dengan energi aktivasi lebih rendah (produk kinetik $1,2$). Namun produk $1,4$ ($1$-bromo-$2$-butena) memiliki ikatan rangkap dua disubstitusi internal yang jauh lebih stabil secara termodinamika daripada produk $1,2$ (alkena monosubstitusi terminal). Pada suhu tinggi, reaksi bersifat reversibel dan mencapai kesetimbangan termodinamik produk paling stabil ($1,4$).',
      misconceptionTarget: 'Mengira produk kinetik selalu merupakan produk yang paling stabil secara termodinamika.',
    },
  ],

  // Prasyarat 3: Teori Asam-Basa Organik, Resonansi, Efek Induksi & Aromatisitas Hückel
  'prasyarat-asam-basa-organik-efek-elektronik': [
    {
      id: 'chk-osn10-pre3-q1',
      type: 'true_false',
      question: 'Kation sikloheptatrienil (ion tropilium, $\\ce{C7H7+}$) bersifat aromatik yang luar biasa stabil karena memiliki cincin siklik planar terkonjugasi penuh dengan 6 elektron $\\pi$ yang mematuhi aturan Hückel ($4n+2$ dengan $n=1$).',
      correctAnswer: true,
      explanation: 'Benar! Ion tropilium memiliki cincin 7-anggota di mana 6 atom karbon menyumbangkan 6 elektron $\\pi$ dan atom karbon ketujuh adalah karbokation $sp^2$ dengan orbital $p$ kosong. Seluruh 7 orbital $p$ saling bertumpang tindih membentuk sistem delokalisasi planar dengan $6\\pi$ elektron ($4n+2$, $n=1$), memberikan stabilitas aromatik tinggi.',
      misconceptionTarget: 'Mengira sistem cincin dengan muatan positif atau cincin ganjil (7 atom) tidak mungkin berstatus aromatik.',
    },
    {
      id: 'chk-osn10-pre3-q2',
      type: 'multiple_choice',
      question: 'Manakah asam karboksilat berikut yang memiliki kekuatan asam paling tinggi (nilai $pK_a$ paling kecil)?',
      options: [
        'Asam trikloroasetat ($\\ce{CCl3COOH}$)',
        'Asam trifluoroasetat ($\\ce{CF3COOH}$)',
        'Asam dikloroasetat ($\\ce{CHCl2COOH}$)',
        'Asam asetat ($\\ce{CH3COOH}$)',
      ],
      correctAnswer: 1,
      explanation: 'Atom fluorin memiliki keelektronegatifan paling tinggi ($3.98$) dibandingkan klorin ($3.16$). Tiga atom fluorin memberikan efek induksi penarik elektron ($-I$) yang luar biasa kuat melalui ikatan $\\sigma$, menyebarkan kerapatan muatan negatif pada basa konjugat karboksilat secara optimal. Nilai $pK_a$ asam trifluoroasetat adalah $0.23$, jauh lebih asam dibandingkan asam trikloroasetat ($0.65$) dan asam asetat ($4.76$).',
      misconceptionTarget: 'Mengira ukuran atom klorin yang lebih besar memberikan dispersi muatan induksi lebih kuat daripada efek elektronegativitas fluorin.',
    },
    {
      id: 'chk-osn10-pre3-q3',
      type: 'multiple_choice',
      question: 'Mengapa hidrogen terminal pada asetilena ($\\ce{HC#CH}$, $pK_a \\approx 25$) jauh lebih asam dibandingkan hidrogen pada etilena ($\\ce{CH2=CH2}$, $pK_a \\approx 44$) dan etana ($\\ce{CH3-CH3}$, $pK_a \\approx 50$)?',
      options: [
        'Karena ikatan rangkap tiga memiliki energi disosiasi ikatan $\\ce{C-H}$ yang lebih rendah',
        'Karena atom karbon pada alkuna berhibridisasi $sp$ dengan $50\\%$ karakter $s$, menempatkan pasangan elektron basa konjugat sangat dekat dengan inti karbon yang positif sehingga menstabilkan anion asetilida',
        'Karena anion asetilida distabilkan oleh resonansi dua ikatan $\\pi$',
        'Karena molekul asetilena memiliki momen dipol ikatan yang sangat besar',
      ],
      correctAnswer: 1,
      explanation: 'Hibridisasi karbon pada alkuna adalah $sp$ ($50\\%$ karakter $s$). Karakter $s$ yang tinggi membuat orbital lebih bulat dan kompak, menempatkan elektron rata-rata lebih dekat ke inti bermuatan positif. Akibatnya, atom karbon $sp$ lebih elektronegatif dan sangat menstabilkan muatan negatif pada basa konjugat karbanion asetilida ($[\\ce{HC#C:}]^-$).',
      misconceptionTarget: 'Mencari-cari penjelasan resonansi pada alkuna sederhana, padahal stabilitas anion asetilida murni disebabkan oleh hibridisasi orbital berkarakter s tinggi.',
    },
  ],

  // Konsep Inti 1: Substitusi Nukleofilik (SN1 vs SN2), Dinamika Stereokimia & Efek Pelarut
  'konsep-substitusi-nukleofilik-sn1-sn2-inversi-walden': [
    {
      id: 'chk-osn10-core1-q1',
      type: 'true_false',
      question: 'Penggunaan pelarut polar aprotik seperti dimetilformamida (DMF) atau dimetilsulfoksida (DMSO) mempercepat laju reaksi $S_N2$ secara dramatis karena pelarut ini mampu mensolvasi kation logam pendamping secara kuat namun membiarkan anion nukleofil "telanjang" (*naked*) tanpa sangkar ikatan hidrogen, sehingga memaksimalkan energi bebas dan reaktivitas nukleofiliknya.',
      correctAnswer: true,
      explanation: 'Benar! Pelarut polar protik (seperti air atau alkohol) membentuk ikatan hidrogen kuat dengan nukleofil anionik, mengurungnya dalam sangkar solvasi (*solvation shell*) yang menghambat penyerangan. Pelarut polar aprotik tidak memiliki donor ikatan hidrogen, sehingga anion nukleofil tetap berada dalam keadaan reaktivitas bebas yang sangat tinggi (*naked anion*), meningkatkan laju $S_N2$ hingga ribuan kali lipat.',
      misconceptionTarget: 'Mengira semua pelarut polar memperlambat reaksi nukleofilik karena meningkatkan interaksi dengan nukleofil.',
    },
    {
      id: 'chk-osn10-core1-q2',
      type: 'multiple_choice',
      question: 'Reaksi substitusi stereospesifik antara enantiomer murni $(2S)\\text{-2-kloropentana}$ dengan natrium sianida ($\\ce{NaCN}$) dalam pelarut aseton berlangsung melalui mekanisme bimolekular serentak ($S_N2$). Bagaimanakah konfigurasi stereokimia dan nama IUPAC produk substitusi yang dihasilkan?',
      options: [
        '$(2R)\\text{-2-metilpentananitril}$ melalui retensi konfigurasi murni',
        '$(2R)\\text{-2-sianopentana}$ melalui Inversi Walden $100\\%$',
        'Campuran rasemat $(2R)$ dan $(2S)$ dalam rasio $1:1$',
        '$(2S)\\text{-2-sianopentana}$ karena urutan prioritas gugus sianida identik dengan klorin',
      ],
      correctAnswer: 1,
      explanation: 'Pada mekanisme $S_N2$, nukleofil $\\ce{CN-}$ menyerang dari arah belakang (*backside attack*, $180^\\circ$ berlawanan dengan gugus pergi klorida). Hal ini memicu pembalikan geometri tiga dimensi secara stereospesifik $100\\%$ (Inversi Walden). Karena prioritas CIP gugus pergi $-\\ce{Cl}$ (prioritas 1) digantikan oleh gugus $-\\ce{CN}$ yang juga berprioritas 1 terhadap sisa rantai ($-\\ce{Pr} > -\\ce{Me} > -\\ce{H}$), konfigurasi absolut stereopusat terbalik sempurna dari $(2S)$ menjadi $(2R)$.',
      misconceptionTarget: 'Mengira inversi Walden selalu menghasilkan rasemat seperti mekanisme bertahap SN1.',
    },
    {
      id: 'chk-osn10-core1-q3',
      type: 'multiple_choice',
      question: 'Mengapa neopentil bromida ($1$-bromo-$2,2$-dimetilpropana) yang berstatus alkil halida primer ($1^\\circ$) bereaksi sekitar $100.000$ kali lebih lambat daripada etil bromida dalam reaksi substitusi $S_N2$?',
      options: [
        'Karena neopentil bromida sangat tidak stabil dan terurai menjadi gas sebelum bereaksi',
        'Karena tiga gugus metil pada karbon-$\\beta$ kuaterner menimbulkan rintangan sterik ruang yang masif, memblokir lintasan serangan nukleofil dari arah belakang (*backside*)',
        'Karena ikatan $\\ce{C-Br}$ pada neopentil bromida bersifat non-polar',
        'Karena karbokation neopentil terlalu stabil untuk melepaskan bromida',
      ],
      correctAnswer: 1,
      explanation: 'Walaupun atom karbon pembawa gugus pergi adalah primer ($1^\\circ$), atom karbon bertetangga (karbon-$\\beta$) adalah karbon kuaterner yang mengikat tiga gugus metil meruap. Ketiga gugus metil ini membentuk benteng sterik berbentuk payung yang memblokir secara fisik jalur pendekatan nukleofil dari arah $180^\\circ$ belakang ikatan $\\ce{C-Br}$, menaikkan energi aktivasi keadaan transisi pentakoordinasi secara drastis.',
      misconceptionTarget: 'Menganggap seluruh alkil halida primer pasti bereaksi sangat cepat via SN2 tanpa memperhitungkan efek rintangan sterik pada posisi karbon-beta.',
    },
  ],

  // Konsep Inti 2: Reaksi Eliminasi (E1 vs E2), Aturan Zaitsev vs Hofmann & Geometri Anti-Periplanar
  'konsep-eliminasi-e1-e2-stereokimia-anti-periplanar': [
    {
      id: 'chk-osn10-core2-q1',
      type: 'true_false',
      question: 'Pada reaksi eliminasi bimolekular $E2$ pada cincin sikloheksana, persyaratan stereoelektronik mewajibkan atom hidrogen-$\\beta$ dan gugus pergi halogen menempati posisi trans-diaksial ($a, a$) agar orbital $\\sigma_{\\ce{C-H}}$ dan $\\sigma^*_{\\ce{C-X}}$ berada dalam orientasi anti-periplanar ($180^\\circ$).',
      correctAnswer: true,
      explanation: 'Benar! Penataan anti-periplanar (sudut dihedral $\\theta = 180^\\circ$) menjamin tumpang tindih paralel maksimum antara orbital ikatan $\\sigma_{\\ce{C-H}}$ dengan orbital antibonding $\\sigma^*_{\\ce{C-X}}$ yang kosong untuk membentuk ikatan rangkap dua $\\pi$. Pada konformasi kursi sikloheksana, geometri anti-periplanar ini hanya dapat terwujud jika kedua gugus berada pada posisi trans-diaksial.',
      misconceptionTarget: 'Mengira gugus pada posisi ekuatorial dapat langsung dieliminasi via E2 tanpa harus membalik konformasi kursi (*chair flip*) menjadi aksial.',
    },
    {
      id: 'chk-osn10-core2-q2',
      type: 'multiple_choice',
      question: 'Bila $2$-bromo-$2$-metilbutana direaksikan dengan kalium tert-butoksida ($t\\ce{-BuOK}$) dalam pelarut tert-butanol pada suhu hangat, produk alkena utama yang terbentuk adalah:',
      options: [
        '$2$-metil-$2$-butena (produk Zaitsev) karena memiliki 3 gugus alkil pada ikatan rangkap',
        '$2$-metil-$1$-butena (produk Hofmann) karena basa tert-butoksida yang sangat meruap kesulitan mengakses proton-$\\beta$ internal yang terhalang sterik',
        '$3$-metil-$1$-butena melalui penataan ulang karbokation',
        'Campuran ekuimolar $50:50$ dari kedua alkena karena basa sangat kuat',
      ],
      correctAnswer: 1,
      explanation: 'Ion tert-butoksida ($-\\ce{OC(CH3)3}$) adalah basa kuat yang sangat meruap (*bulky base*). Rintangan sterik yang masif menghalangi basa ini untuk mengabstraksi proton-$\\beta$ internal pada gugus $-\\ce{CH2}-$ sekunder. Sebaliknya, basa dengan mudah mengambil salah satu dari 6 proton pada gugus metil terminal yang terbuka dan kurang terhalang, menghasilkan alkena kurang tersubstitusi: $2$-metil-$1$-butena (**produk Hofmann**, kelimpahan $\\sim 70-80\\%$).',
      misconceptionTarget: 'Mengira aturan Zaitsev selalu berlaku mutlak untuk semua reaksi eliminasi tanpa memperhatikan halangan sterik basa pengabstraksi.',
    },
    {
      id: 'chk-osn10-core2-q3',
      type: 'multiple_choice',
      question: 'Pada solvolisis tert-butil bromida dalam etanol, reaksi substitusi $S_N1$ bersaing dengan eliminasi $E1$. Mengapa peningkatan suhu reaksi secara signifikan menggeser komposisi produk sehingga produk alkena ($E1$) mendominasi?',
      options: [
        'Karena reaksi eliminasi menghasilkan tiga partikel terpisah dari dua reaktan ($\\Delta S^\\circ > 0$), sehingga kontribusi term $-T\\Delta S^\\circ$ semakin menstabilkan energi bebas Gibbs reaksi pada suhu tinggi',
        'Karena pada suhu tinggi karbokation terurai menjadi gas etena',
        'Karena etanol bertindak sebagai nukleofil lebih kuat pada suhu dingin',
        'Karena energi aktivasi pembentukan karbokation meningkat dengan kenaikan suhu',
      ],
      correctAnswer: 0,
      explanation: 'Reaksi eliminasi memutus dua ikatan dan melepaskan spesi molekul kecil ($\\ce{R-X + Base -> Alkena + Base-H+ + X-}$), menghasilkan pertambahan jumlah partikel bebas (entropi positif, $\\Delta S^\\circ > 0$). Menurut persamaan Gibbs $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$, suku $-T\\Delta S^\\circ$ menjadi semakin negatif secara dominan pada suhu tinggi ($T$ besar), membuat jalur eliminasi $E1$ jauh lebih disukai secara termodinamika dibandingkan $S_N1$.',
      misconceptionTarget: 'Menjelaskan preferensi suhu murni dari aspek entalpi tanpa memperhitungkan peran mendasar suku entropi Delta S pada reaksi eliminasi.',
    },
  ],

  // Konsep Inti 3: Adisi Elektrofilik Alkena/Alkuna, Aturan Markovnikov & Kontrol Stereokimia
  'konsep-adisi-elektrofilik-alkena-markovnikov-stereokimia': [
    {
      id: 'chk-osn10-core3-q1',
      type: 'true_false',
      question: 'Reaksi adisi bromin molekuler ($\\ce{Br2}$) terhadap $(E)\\text{-2-butena}$ berlangsung secara stereospesifik anti murni melalui intermediet ion bromonium siklik tiga-anggota, menghasilkan produk tunggal senyawa *meso*-2,3-dibromobutana yang bersifat optis inaktif.',
      correctAnswer: true,
      explanation: 'Benar! Pembentukan ion bromonium siklik memblokir salah satu muka alkena. Ion bromida ($\\ce{Br-}$) yang lepas kemudian wajib menyerang dari arah belakang ($180^\\circ$, serangan anti). Pada alkena *trans* / $(E)$, adisi anti ini secara geometris menghasilkan stereoisomer $(2R, 3S)$ yang memiliki bidang simetri internal horizontal $\\sigma$, yaitu senyawa *meso* yang optis inaktif murni.',
      misconceptionTarget: 'Mengira adisi bromin selalu menghasilkan campuran rasemat pada semua jenis alkena stereoisomer.',
    },
    {
      id: 'chk-osn10-core3-q2',
      type: 'multiple_choice',
      question: 'Reaksi hidroborasi-oksidasi ($1.\\ \\ce{BH3\\cdot THF};\\ 2.\\ \\ce{H2O2, NaOH}$) terhadap senyawa $1$-metilsikloheksena menghasilkan produk utama apa beserta stereokimianya?',
      options: [
        '$trans$-2-metilsikloheksanol melalui adisi sin anti-Markovnikov',
        '$cis$-2-metilsikloheksanol melalui adisi anti Markovnikov',
        '$1$-metilsikloheksanol melalui adisi sin Markovnikov',
        'Campuran rasemat $1$-metilsikloheksan-$1,2$-diol',
      ],
      correctAnswer: 0,
      explanation: 'Hidroborasi berlangsung dengan regioselektivitas **anti-Markovnikov** (atom boron mengikat karbon cincin C2 yang kurang terhalang sterik dan mengikat lebih banyak hidrogen). Koordinasi $\\ce{BH3}$ terjadi secara serentak pada satu muka ikatan rangkap (**adisi sin**), di mana atom $\\ce{H}$ dan gugus $-\\ce{BH2}$ masuk dari sisi yang sama. Tahap oksidasi alkali menggantikan $-\\ce{BH2}$ dengan $-\\ce{OH}$ dengan retensi konfigurasi sempurna. Akibat adisi sin pada ikatan rangkap cincin, gugus $-\\ce{CH3}$ pada C1 dan gugus $-\\ce{OH}$ pada C2 berakhir dalam orientasi berlawanan (*trans*), menghasilkan **$trans$-2-metilsikloheksanol**.',
      misconceptionTarget: 'Mengira adisi sin berarti produk akhir selalu berkonfigurasi cis antara dua gugus penanda, mengabaikan bahwa gugus H masuk sin terhadap OH sehingga mendorong gugus metil ke orientasi trans.',
    },
    {
      id: 'chk-osn10-core3-q3',
      type: 'multiple_choice',
      question: 'Mengapa fenomena pembalikan regioselektivitas anti-Markovnikov radikal bebas dengan katalis peroksida organik (efek Kharasch) hanya dapat berlangsung sukses secara preparatif pada $\\ce{HBr}$, namun gagal total pada $\\ce{HCl}$ dan $\\ce{HI}$?',
      options: [
        'Karena hanya pada $\\ce{HBr}$ kedua tahap propagasi reaksi radikal rantai bersifat eksotermik (menguntungkan secara termodinamika)',
        'Karena $\\ce{HCl}$ dan $\\ce{HI}$ bereaksi meledak saat kontak dengan peroksida',
        'Karena ion klorida dan iodida bertindak sebagai racun radikal',
        'Karena molekul $\\ce{HCl}$ tidak dapat terdisosiasi membentuk radikal',
      ],
      correctAnswer: 0,
      explanation: 'Agar reaksi rantai radikal dapat terus berpropagasi, kedua tahap propagasi (penyerangan radikal halogen ke alkena, dan abstraksi hidrogen dari $\\ce{HX}$ oleh radikal karbon) harus eksotermik atau berenergi aktivasi sangat rendah. Pada $\\ce{HCl}$, ikatan $\\ce{H-Cl}$ terlalu kuat ($431\\text{ kJ/mol}$) sehingga tahap abstraksi hidrogen bersifat endotermik kuat. Pada $\\ce{HI}$, radikal iodin terlalu stabil dan lemah sehingga penyerangannya ke ikatan rangkap alkena bersifat endotermik. Hanya pada $\\ce{HBr}$ kedua tahap tersebut bersifat eksotermik.',
      misconceptionTarget: 'Mengira semua asam halida (HCl, HBr, HI) memiliki reaktivitas radikal bebas peroksida yang seragam.',
    },
  ],

  // Konsep Inti 4: Reaksi Kimia Karbonil, Adisi Nukleofilik, Substitusi Asil & Kimia Enolat
  'konsep-kimia-karbonil-adisi-kondensasi-enolat': [
    {
      id: 'chk-osn10-core4-q1',
      type: 'true_false',
      question: 'Untuk menghasilkan anion enolat kinetik secara selektif dari keton asimetris (seperti $2$-metilsikloheksanon), deprotonasi wajib dilakukan menggunakan basa kuat sangat terhalang sterik seperti litium diisopropilamida (LDA) pada suhu kriogenik ($-78^\\circ\\text{C}$) dalam pelarut polar aprotik seperti THF.',
      correctAnswer: true,
      explanation: 'Benar! Enolat kinetik terbentuk dari deprotonasi atom hidrogen-$\\alpha$ yang paling mudah diakses sterik (kurang tersubstitusi). Penggunaan basa meruap LDA pada suhu $-78^\\circ\\text{C}$ mencegah kesetimbangan reversibel dan memastikan pengambilan proton terminal yang cepat mendominasi sepenuhnya sebelum enolat termodinamik yang lebih tersubstitusi sempat terbentuk.',
      misconceptionTarget: 'Mengira suhu tinggi menguntungkan pembentukan enolat kinetik karena mempercepat laju kinetika reaksi.',
    },
    {
      id: 'chk-osn10-core4-q2',
      type: 'multiple_choice',
      question: 'Manakah urutan reaktivitas turunan asam karboksilat terhadap reaksi substitusi asil nukleofilik (penambahan-eliminasi) berikut yang benar dari yang paling reaktif hingga yang paling tidak reaktif?',
      options: [
        'Asil klorida $>$ Anhidrida asam $>$ Ester $>$ Amida $>$ Ion karboksilat',
        'Anhidrida asam $>$ Asil klorida $>$ Ester $>$ Amida $>$ Ion karboksilat',
        'Asil klorida $>$ Ester $>$ Anhidrida asam $>$ Amida $>$ Ion karboksilat',
        'Ester $>$ Asil klorida $>$ Anhidrida asam $>$ Amida $>$ Ion karboksilat',
      ],
      correctAnswer: 0,
      explanation: 'Reaktivitas dikendalikan oleh kemampuan gugus pergi ($pK_a$ basa konjugat) dan efek resonansi donor elektron: Ion klorida ($\\ce{Cl-}$) adalah basa paling lemah dan gugus pergi terbaik dengan resonansi minimum. Pada amida, pasangan elektron bebas nitrogen beresonansi sangat kuat ke karbonil (karakter ikatan rangkap parsial), menurunkan elektrofilisitas karbon. Ion karboksilat bermuatan negatif penuh sehingga menolak nukleofil.',
      misconceptionTarget: 'Terkecoh mengira ester lebih reaktif daripada anhidrida asam karena ukurannya yang lebih kecil.',
    },
    {
      id: 'chk-osn10-core4-q3',
      type: 'multiple_choice',
      question: 'Pada reaksi kondensasi aldol, dehidrasi senyawa $\\beta$-hidroksialdehid/keton menghasilkan enon $\\alpha,\\beta$-tak jenuh dalam suasana basa berlangsung melalui mekanisme eliminasi apa?',
      options: [
        'Mekanisme $E1cB$ (Eliminasi Unimolekular Konjugat Basa) melalui intermediet karbanion enolat',
        'Mekanisme serentak $E2$ murni',
        'Mekanisme bertahap $E1$ via karbokation terbuka',
        'Mekanisme siklik periciklik serentak',
      ],
      correctAnswer: 0,
      explanation: 'Gugus hidroksida ($\\ce{OH-}$) adalah gugus pergi yang sangat buruk dalam kondisi netral/basa. Oleh karena itu, basa mengabstraksi proton-$\\alpha$ yang asam terlebih dahulu untuk menghasilkan intermediet karbanion enolat terstabilkan resonansi. Karbanion ini kemudian melepaskan ion $\\ce{OH-}$ untuk membentuk ikatan rangkap dua yang terkonjugasi penuh dengan karbonil. Mekanisme ini adalah definisi dari **$E1cB$** (*Elimination Unimolecular conjugate Base*).',
      misconceptionTarget: 'Mengira eliminasi gugus hidroksil selalu membutuhkan protonasi asam kuat seperti dehidrasi alkohol biasa.',
    },
  ],

  // Konsep Inti 5: Biomolekul, Struktur & Stereokimia Asam Amino, Peptida, Titik Isoelektrik & Karbohidrat
  'konsep-biomolekul-asam-amino-peptida-karbohidrat': [
    {
      id: 'chk-osn10-core5-q1',
      type: 'true_false',
      question: 'Ikatan peptida memiliki karakter ikatan rangkap dua parsial sekitar $40\\%$ akibat delokalisasi resonansi pasangan elektron bebas atom nitrogen ke oksigen karbonil, sehingga ikatan $\\ce{C-N}$ amida bersifat kaku, planar, dan tidak dapat berotasi bebas pada suhu fisiologis.',
      correctAnswer: true,
      explanation: 'Benar! Resonansi amida $\\ce{-C(=O)-NH- <-> -C(O^-)=N^+H-}$ memberikan karakter ikatan rangkap parsial yang substansial pada ikatan $\\ce{C-N}$ peptida. Akibatnya, penghalang energi rotasi ikatan $\\ce{C-N}$ cukup tinggi ($\\sim 80\\text{ kJ/mol}$), memaksa keenam atom pada unit peptida berada pada satu bidang datar yang kaku dengan konformasi *trans* yang dominan.',
      misconceptionTarget: 'Menganggap ikatan peptida adalah ikatan kovalen tunggal biasa yang bebas berotasi secara konformasional.',
    },
    {
      id: 'chk-osn10-core5-q2',
      type: 'multiple_choice',
      question: 'Asam amino Lisin memiliki tiga nilai tetapan kesetimbangan asam: $pK_{a1} = 2.18$ ($\\alpha\\ce{-COOH}$), $pK_{a2} = 8.95$ ($\\alpha\\ce{-NH3+}$), dan $pK_{aR} = 10.53$ (rantai samping $\\epsilon\\ce{-NH3+}$). Berapakah nilai titik isoelektrik ($pI$) dari Lisin?',
      options: [
        '$pI = \\frac{2.18 + 8.95}{2} = 5.57$',
        '$pI = \\frac{8.95 + 10.53}{2} = 9.74$',
        '$pI = \\frac{2.18 + 10.53}{2} = 6.36$',
        '$pI = \\frac{2.18 + 8.95 + 10.53}{3} = 7.22$',
      ],
      correctAnswer: 1,
      explanation: 'Lisin adalah asam amino basa. Spesies zwitterion netral (muatan netto $0$) terbentuk saat gugus $\\alpha\\ce{-COOH}$ telah terdeprotonasi menjadi $-\\ce{COO-}$ (muatan $-1$) sementara kedua gugus amina masih terprotonasi sebagai $-\\ce{NH3+}$ (total muatan $+2$, menghasilkan muatan netto $+1$). Titik isoelektrik adalah batas di mana pelepasan proton pertama amina terjadi, diapit oleh $pK_{a2}$ dan $pK_{aR}$: $pI = \\frac{pK_{a2} + pK_{aR}}{2} = \\frac{8.95 + 10.53}{2} = 9.74$.',
      misconceptionTarget: 'Merata-ratakan seluruh nilai pKa atau salah memilih pasangan pKa asam pada asam amino basa.',
    },
    {
      id: 'chk-osn10-core5-q3',
      type: 'multiple_choice',
      question: 'Fenomena mutarotasi pada larutan glukosa segar terjadi karena:',
      options: [
        'Interkonversi reversibel antara anomer $\\alpha\\text{-D-glukopiranosa}$ dan $\\beta\\text{-D-glukopiranosa}$ melalui pembukaan cincin hemiasetal menjadi rantai aldehid terbuka',
        'Perubahan bertahap konfigurasi kiralitas D menjadi enantiomernya L-glukosa',
        'Oksidasi spontan gugus aldehid oleh oksigen terlarut menjadi asam glukonat',
        'Hidrolisis ikatan glikosida menjadi molekul fruktosa',
      ],
      correctAnswer: 0,
      explanation: 'Mutarotasi adalah perubahan nilai rotasi optik larutan anomer murni (misal $\\alpha$-glukosa murni $[\\alpha]_D = +112^\\circ$) secara perlahan hingga mencapai nilai kesetimbangan tetap ($[\\alpha]_D = +52.7^\\circ$). Hal ini terjadi karena cincin hemiasetal membuka secara reversibel membentuk intermediet rantai aldehid terbuka bebas, yang kemudian dapat menutup kembali menjadi anomer $\\alpha$ ($36\\%$) atau $\\beta$ ($64\\%$).',
      misconceptionTarget: 'Mengira mutarotasi mengubah isomer D menjadi L, padahal mutarotasi hanya melibatkan diastereomer pada karbon anomerik C1 (anomer alfa/beta).',
    },
  ],

  // Konsep Inti 6: Kinetika Enzim Michaelis-Menten & Mekanisme Inhibisi Lineweaver-Burk
  'kinetika-enzim-michaelis-menten-inhibisi': [
    {
      id: 'chk-osn10-core6-q1',
      type: 'true_false',
      question: 'Pada transformasi grafik resiprokal ganda Lineweaver-Burk, penambahan inhibitor kompetitif menghasilkan sekelompok garis lurus yang berpotongan pada satu titik tepat di sumbu-y ($1/V_{\\max}$ yang identik), membuktikan bahwa laju maksimum reaksi tidak mengalami penurunan.',
      correctAnswer: true,
      explanation: 'Benar! Inhibitor kompetitif bersaing dengan substrat untuk mengikat sisi aktif enzim bebas. Hambatan ini dapat diatasi secara total dengan menambahkan konsentrasi substrat yang sangat berlebih ($[S] \\to \\infty$), sehingga seluruh molekul inhibitor tersingkirkan dari sisi aktif dan laju maksimum teoritis $V_{\\max}$ tetap tercapai ($V_{\\max}^{\\text{app}} = V_{\\max}$, titik potong sumbu-y tetap).',
      misconceptionTarget: 'Mengira inhibitor kompetitif menurunkan kapasitas katalitik maksimum Vmax enzim.',
    },
    {
      id: 'chk-osn10-core6-q2',
      type: 'multiple_choice',
      question: 'Enzim katalase memiliki konstanta Michaelis $K_m = 2.5\\times 10^{-2}\\text{ M}$ dan angka pergantian (*turnover number*) $k_{cat} = 4.0\\times 10^7\\text{ s}^{-1}$. Berapakah efisiensi katalitik ($k_{cat} / K_m$) enzim tersebut dan apa maknanya?',
      options: [
        '$1.6\\times 10^9\\text{ M}^{-1}\\text{s}^{-1}$; nilai ini mendekati batas difusi molekuler larutan sehingga katalase merupakan "katalisator kinetik sempurna"',
        '$1.0\\times 10^6\\text{ M}^{-1}\\text{s}^{-1}$; enzim memiliki efisiensi rendah karena nilai Km terlalu besar',
        '$1.6\\times 10^5\\text{ M}^{-1}\\text{s}^{-1}$; enzim bekerja lambat dan tidak mencapai saturasi',
        '$6.25\\times 10^{-10}\\text{ M s}$; menunjukkan enzim terinhibisi secara ireversibel',
      ],
      correctAnswer: 0,
      explanation: 'Efisiensi katalitik $= \\frac{k_{cat}}{K_m} = \\frac{4.0\\times 10^7\\text{ s}^{-1}}{2.5\\times 10^{-2}\\text{ M}} = 1.6\\times 10^9\\text{ M}^{-1}\\text{s}^{-1}$. Nilai ini berada pada batas atas frekuensi tumbukan difusi molekul dalam air ($10^8 - 10^9\\text{ M}^{-1}\\text{s}^{-1}$, batas Smoluchowski). Setiap kali substrat $\\ce{H2O2}$ bertumbukan dengan sisi aktif katalase, reaksi langsung terjadi seketika tanpa rintangan energi aktivasi.',
      misconceptionTarget: 'Menilai kehebatan enzim hanya dari nilai Km yang kecil, tanpa memperhitungkan rasio efisiensi kcat/Km.',
    },
    {
      id: 'chk-osn10-core6-q3',
      type: 'multiple_choice',
      question: 'Suatu inhibitor enzimatis menghasilkan pola grafik Lineweaver-Burk berupa serangkaian garis-garis yang sejajar sempurna (*parallel lines*) pada berbagai konsentrasi inhibitor. Jenis mekanisme inhibisi apakah yang teridentifikasi?',
      options: [
        'Inhibisi Kompetitif',
        'Inhibisi Unkompetitif',
        'Inhibisi Non-Kompetitif Murni',
        'Inhibisi Ireversibel Bunuh Diri (*Suicide Inhibition*)',
      ],
      correctAnswer: 1,
      explanation: 'Pada inhibisi unkompetitif, molekul inhibitor hanya dapat mengikat kompleks enzim-substrat ($\\ce{ES}$), bukan enzim bebas. Hal ini menurunkan $V_{\\max}$ dan $K_m$ secara proporsional dengan faktor pengali $\\alpha\'$ yang sama ($V_{\\max}^{\\text{app}} = V_{\\max}/\\alpha\'$ dan $K_m^{\\text{app}} = K_m/\\alpha\'$). Akibatnya, rasio kemiringan kurva (*slope*) $m = K_m^{\\text{app}}/V_{\\max}^{\\text{app}} = K_m/V_{\\max}$ bernilai tetap konstan, menghasilkan sekumpulan garis lurus sejajar sempurna.',
      misconceptionTarget: 'Menyamakan pola garis sejajar dengan inhibisi non-kompetitif yang garisnya berpotongan di sumbu-x negatif.',
    },
  ],
};
