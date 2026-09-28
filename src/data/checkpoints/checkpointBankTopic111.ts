import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_111: Record<string, CheckpointQuizItem[]> = {
  // =========================================================================
  // PRASYARAT 1: Aturan Kelarutan Senyawa Ionik di Air & Klasifikasi Keadaan Larutan
  // =========================================================================
  'prasyarat-aturan-kelarutan-dan-larutan-jenuh': [
    {
      id: 'cp-111-prereq1-q1',
      type: 'true_false',
      question: 'Semua garam nitrat ($\\ce{NO3-}$), asetat ($\\ce{CH3COO-}$), dan garam dari kation logam alkali (golongan IA) bersifat mudah larut dalam air pada suhu kamar.',
      correctAnswer: true,
      explanation: 'Benar. Berdasarkan kaidah kelarutan empiris senyawa ionik, seluruh garam nitrat, asetat, dan kation golongan alkali ($\\ce{Li+, Na+, K+, Rb+, Cs+}$) serta ion amonium ($\\ce{NH4+}$) selalu larut sempurna di dalam air tanpa ada pengecualian yang membentuk endapan sukar larut.',
    },
    {
      id: 'cp-111-prereq1-q2',
      type: 'multiple_choice',
      question: 'Pasangan senyawa berikut yang KEDUANYA merupakan senyawa elektrolit sukar larut (membentuk endapan padat di dalam air) adalah ....',
      options: [
        '$\\ce{NaCl}$ dan $\\ce{KNO3}$',
        '$\\ce{BaSO4}$ dan $\\ce{AgCl}$',
        '$\\ce{Na2CO3}$ dan $\\ce{NH4Cl}$',
        '$\\ce{CaCl2}$ dan $\\ce{Mg(NO3)2}$',
      ],
      correctAnswer: 1,
      explanation: '$\\ce{BaSO4}$ (barium sulfat) dan $\\ce{AgCl}$ (perak klorida) merupakan contoh klasik garam sukar larut yang mengendap di dalam air ($K_{sp} \\approx 10^{-10}$). Pilihan lain mengandung garam alkali atau klorida/nitrat terlarut sempurna.',
    },
    {
      id: 'cp-111-prereq1-q3',
      type: 'true_false',
      question: 'Larutan lewat jenuh (*supersaturated*) bersifat sangat stabil, sehingga penambahan sebutir kristal zat terlarut tidak akan mempengaruhi kejernihan larutan.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Kestabilan Larutan Lewat Jenuh). Larutan lewat jenuh bersifat METASTABIL (tidak stabil). Sedikit guncangan mekanik atau penambahan sebutir kristal bibit (*seed crystal*) akan seketika memicu kristalisasi cepat kelebihan zat terlarut hingga sistem kembali ke keadaan larutan tepat jenuh yang stabil.',
    },
  ],

  // =========================================================================
  // PRASYARAT 2: Kesetimbangan Heterogen Fasa Padat-Cair & Peniadaan Padatan dari Ksp
  // =========================================================================
  'prasyarat-kesetimbangan-heterogen-fasa-padat-ionik': [
    {
      id: 'cp-111-prereq2-q1',
      type: 'true_false',
      question: 'Konsentrasi fasa padatan murni $[\\ce{A_x B_y(s)}]$ tidak dicantumkan dalam persamaan rumus tetapan hasil kali kelarutan ($K_{sp}$) karena aktivitas kimia zat padat murni bernilai tepat 1.',
      correctAnswer: true,
      explanation: 'Benar. Dalam termodinamika kimia kesetimbangan heterogen, konsentrasi atau kerapatan kristal padatan murni adalah konstan dan aktivitasnya didefinisikan sama dengan 1 ($a_{\\text{padat}} = 1$). Oleh karena itu, fasa padat digabungkan langsung ke dalam nilai tetapan $K_{sp}$.',
    },
    {
      id: 'cp-111-prereq2-q2',
      type: 'multiple_choice',
      question: 'Pada suhu konstan $25^\\circ\\text{C}$, jika ke dalam bejana yang berisi larutan tepat jenuh $\\ce{AgCl}$ ditambahkan $5\\text{ gram}$ padatan kristal $\\ce{AgCl}$ tambahan, maka ....',
      options: [
        'Konsentrasi ion $\\ce{Ag+}$ dan $\\ce{Cl-}$ dalam larutan akan bertambah',
        'Nilai tetapan hasil kali kelarutan ($K_{sp}$) $\\ce{AgCl}$ akan meningkat',
        'Konsentrasi ion $\\ce{Ag+}$ dan $\\ce{Cl-}$ serta nilai $K_{sp}$ tetap tidak berubah',
        'Padatan $\\ce{AgCl}$ tambahan akan melarut seluruhnya',
      ],
      correctAnswer: 2,
      explanation: 'Karena larutan sudah dalam keadaan tepat jenuh, pelarut tidak mampu lagi melarutkan padatan tambahan. Padatan yang ditambahkan hanya akan mengendap di dasar bejana. Konsentrasi ion $[\\ce{Ag+}]$ dan $[\\ce{Cl-}]$ dalam larutan serta nilai tetapan $K_{sp}$ tetap konstan karena nilai kesetimbangan murni hanya bergantung pada suhu.',
    },
    {
      id: 'cp-111-prereq2-q3',
      type: 'true_false',
      question: 'Pada kondisi larutan tepat jenuh suatu garam sukar larut, proses pelarutan telah berhenti total secara mikroskopis.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Kesetimbangan Statis vs Dinamis). Kesetimbangan kelarutan bersifat DINAMIS. Di tingkat mikroskopis, ion-ion terus menerus melarut dari kisi kristal menuju larutan dengan laju yang persis sama dengan laju pengendapan kembali ion-ion terlarut ke permukaan kristal ($v_{\\text{larut}} = v_{\\text{endap}}$).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 1: Formulasi Matematis Hubungan Kelarutan (s) dan Tetapan Ksp
  // =========================================================================
  'hubungan-matematis-kelarutan-s-dan-ksp': [
    {
      id: 'cp-111-core1-q1',
      type: 'true_false',
      question: 'Dua garam sukar larut yang memiliki nilai $K_{sp}$ sama pasti selalu memiliki kelarutan molar ($s$) yang sama pula di dalam air murni.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Klasik Perbandingan Ksp). Kelarutan molar ($s$) bergantung pada JUMLAH ION yang dihasilkan per satuan rumus. Garam biner 1:1 memiliki rumus $s = \\sqrt{K_{sp}}$, sedangkan garam terner 1:2 memiliki rumus $s = \\sqrt[3]{K_{sp}/4}$. Sebagai contoh, garam terner dengan $K_{sp} = 10^{-12}$ memiliki kelarutan yang jauh lebih besar ($s \\approx 6.3 \\times 10^{-5}\\text{ M}$) daripada garam biner dengan nilai $K_{sp}$ yang sama ($s = 10^{-6}\\text{ M}$). Nilai $K_{sp}$ hanya dapat dibandingkan secara langsung jika kedua garam memiliki tipe jumlah ion yang sama.',
    },
    {
      id: 'cp-111-core1-q2',
      type: 'multiple_choice',
      question: 'Kalsium fosfat, $\\ce{Ca3(PO4)2}$, terionisasi menurut persamaan: $\\ce{Ca3(PO4)2(s) <=> 3 Ca^2+(aq) + 2 PO4^3-(aq)}$. Jika kelarutan molarnya dinyatakan sebagai $s\\text{ mol/L}$, maka ekspresi rumus $K_{sp}$ yang tepat adalah ....',
      options: [
        '$K_{sp} = 6s^5$',
        '$K_{sp} = 36s^5$',
        '$K_{sp} = 108s^5$',
        '$K_{sp} = 5s^5$',
      ],
      correctAnswer: 2,
      explanation: 'Konsentrasi ion pada kesetimbangan: $[\\ce{Ca^2+}] = 3s$ dan $[\\ce{PO4^3-}] = 2s$.\n$K_{sp} = [\\ce{Ca^2+}]^3 [\\ce{PO4^3-}]^2 = (3s)^3 \\times (2s)^2 = 27s^3 \\times 4s^2 = 108s^5$.',
    },
    {
      id: 'cp-111-core1-q3',
      type: 'multiple_choice',
      question: 'Diketahui garam $\\ce{BaSO4}$ ($M_r = 233\\text{ g/mol}$) memiliki kelarutan molar $s = 1.0 \\times 10^{-5}\\text{ mol/L}$. Massa $\\ce{BaSO4}$ maksimum yang dapat larut dalam $500\\text{ mL}$ air murni adalah ....',
      options: [
        '$1.165\\text{ mg}$',
        '$2.330\\text{ mg}$',
        '$0.582\\text{ mg}$',
        '$11.65\\text{ mg}$',
      ],
      correctAnswer: 0,
      explanation: 'Mol $\\ce{BaSO4} = s \\times V = (1.0 \\times 10^{-5}\\text{ mol/L}) \\times 0.500\\text{ L} = 5.0 \\times 10^{-6}\\text{ mol}$.\nMassa = $\\text{mol} \\times M_r = (5.0 \\times 10^{-6}\\text{ mol}) \\times 233\\text{ g/mol} = 1.165 \\times 10^{-3}\\text{ g} = 1.165\\text{ mg}$.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 2: Penurunan Kelarutan Akibat Efek Ion Senama (Common-Ion Effect)
  // =========================================================================
  'pengaruh-efek-ion-senama-terhadap-kelarutan': [
    {
      id: 'cp-111-core2-q1',
      type: 'true_false',
      question: 'Jika garam $\\ce{AgCl}$ dilarutkan ke dalam larutan $\\ce{NaCl } 0.10\\text{ M}$, kelarutan $\\ce{AgCl}$ akan menurun, namun nilai tetapan $K_{sp}(\\ce{AgCl})$ tetap sama seperti di air murni pada suhu tersebut.',
      correctAnswer: true,
      explanation: 'Benar. Penambahan ion senama $\\ce{Cl-}$ menggeser kesetimbangan ke arah kiri (arah pembentukan endapan) sehingga kelarutan ($s$) anjlok. Namun nilai tetapan $K_{sp}$ adalah konstanta kesetimbangan termodinamika yang nilainya HANYA dipengaruhi oleh suhu, bukan oleh konsentrasi pereaksi/ion senama.',
    },
    {
      id: 'cp-111-core2-q2',
      type: 'multiple_choice',
      question: 'Urutan kelarutan perak klorida, $\\ce{AgCl}$ ($K_{sp} = 1.8 \\times 10^{-10}$), dari yang PALING BESAR ke yang paling kecil di dalam wadah berikut adalah:\n(1) Air murni\n(2) Larutan $\\ce{NaCl } 0.10\\text{ M}$\n(3) Larutan $\\ce{CaCl2 } 0.10\\text{ M}$\n(4) Larutan $\\ce{AgNO3 } 0.01\\text{ M}$',
      options: [
        '(1) > (4) > (2) > (3)',
        '(1) > (2) > (4) > (3)',
        '(3) > (2) > (4) > (1)',
        '(1) > (3) > (2) > (4)',
      ],
      correctAnswer: 0,
      explanation: 'Semakin besar konsentrasi ion senama, kelarutan garam akan semakin kecil:\n- (1) Air murni: $[\\text{ion senama}] = 0 \\implies$ kelarutan paling tinggi ($s = 1.34 \\times 10^{-5}\\text{ M}$).\n- (4) $\\ce{AgNO3 } 0.01\\text{ M}$: $[\\ce{Ag+}] = 0.01\\text{ M}$.\n- (2) $\\ce{NaCl } 0.10\\text{ M}$: $[\\ce{Cl-}] = 0.10\\text{ M}$.\n- (3) $\\ce{CaCl2 } 0.10\\text{ M}$: $[\\ce{Cl-}] = 2 \\times 0.10 = 0.20\\text{ M} \\implies$ kelarutan paling kecil.\nUrutan dari terbesar: (1) > (4) > (2) > (3).',
    },
    {
      id: 'cp-111-core2-q3',
      type: 'true_false',
      question: 'Dalam menghitung kelarutan garam biner $\\ce{AgCl}$ dalam larutan $\\ce{NaCl } 0.10\\text{ M}$, konsentrasi ion klorida total dihitung sebagai $[\\ce{Cl-}] = 0.10 + s \\approx 0.10\\text{ M}$ karena nilai $s$ jauh lebih kecil daripada $0.10$.',
      correctAnswer: true,
      explanation: 'Benar. Karena nilai kelarutan $s$ di dalam larutan ion senama bernilai sangat kecil ($s \\approx 1.8 \\times 10^{-9}\\text{ M}$), kontribusi $s$ terhadap $0.10$ dapat diabaikan secara matematis ($0.10 + 1.8 \\times 10^{-9} \\approx 0.10$) dengan tingkat ketelitian yang sangat tinggi.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 3: Pengaruh Perubahan pH terhadap Kelarutan
  // =========================================================================
  'pengaruh-ph-terhadap-kelarutan-senyawa-basa-dan-garam': [
    {
      id: 'cp-111-core3-q1',
      type: 'true_false',
      question: 'Kelarutan basa sukar larut seperti $\\ce{Mg(OH)2}$ atau $\\ce{Fe(OH)3}$ akan meningkat pesat apabila pH larutan diturunkan dengan penambahan asam kuat.',
      correctAnswer: true,
      explanation: 'Benar. Penurunan pH berarti peningkatan konsentrasi ion $\\ce{H+}$. Ion $\\ce{H+}$ bereaksi menetralkan ion hidroksida ($\\ce{H+ + OH- -> H2O}$). Pengurangan drastis $[\\ce{OH-}]$ di ruas kanan memaksa kesetimbangan kelarutan $\\ce{M(OH)_n(s) <=> M^{n+} + n OH-}$ bergeser ke arah kanan, sehingga padatan basa melarut sempurna.',
    },
    {
      id: 'cp-111-core3-q2',
      type: 'multiple_choice',
      question: 'Senyawa garam sukar larut berikut yang kelarutannya AKAN MENINGKAT secara signifikan di dalam larutan asam kuat $\\ce{HCl}$ dibandingkan dalam air murni adalah ....',
      options: [
        '$\\ce{AgCl}$',
        '$\\ce{BaSO4}$',
        '$\\ce{CaCO3}$',
        '$\\ce{PbSO4}$',
      ],
      correctAnswer: 2,
      explanation: 'Anion karbonat ($\\ce{CO3^2-}$) adalah basa konjugasi dari asam lemah $\\ce{HCO3-}$ / $\\ce{H2CO3}$. Di dalam lingkungan asam, ion $\\ce{H+}$ bereaksi dengan $\\ce{CO3^2-}$ membentuk $\\ce{H2CO3}$ yang terurai menjadi gas $\\ce{CO2}$ dan air: $\\ce{CaCO3(s) + 2 H+ -> Ca^2+ + CO2(g) + H2O(l)}$. Reaksi ini melarutkan padatan kalsium karbonat secara tuntas. Sebaliknya, anion klorida dan sulfat berasal dari asam kuat sehingga tidak terprotonasi oleh asam.',
    },
    {
      id: 'cp-111-core3-q3',
      type: 'true_false',
      question: 'Untuk larutan ion logam $\\ce{M^{n+}}$ dengan konsentrasi tertentu, semakin tinggi nilai pH larutan maka semakin mudah terbentuk endapan hidroksida $\\ce{M(OH)_n}$.',
      correctAnswer: true,
      explanation: 'Benar. Kenaikan nilai pH bersesuaian dengan naiknya konsentrasi ion hidroksida $[\\ce{OH-}]$. Sesuai ekspresi kuosien ion $Q_{sp} = [\\ce{M^{n+}}][\\ce{OH-}]^n$, tingginya konsentrasi $[\\ce{OH-}]$ membuat nilai $Q_{sp}$ cepat melampaui $K_{sp}$ ($Q_{sp} > K_{sp}$), memicu presipitasi endapan hidroksida padat.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 4: Kuosien Ion (Qsp) & Kriteria Kuantitatif Pembentukan Endapan
  // =========================================================================
  'kuosien-reaksi-qsp-dan-kriteria-pembentukan-endapan': [
    {
      id: 'cp-111-core4-q1',
      type: 'true_false',
      question: 'Ketika dua larutan elektrolit dicampurkan, endapan padat HANYA akan terbentuk jika nilai kuosien ion melampaui nilai tetapan hasil kali kelarutannya ($Q_{sp} > K_{sp}$).',
      correctAnswer: true,
      explanation: 'Benar. Kriteria pembentukan endapan:\n- $Q_{sp} < K_{sp}$: Larutan belum jenuh (tidak mengendap).\n- $Q_{sp} = K_{sp}$: Larutan tepat jenuh (belum tampak endapan nyata).\n- $Q_{sp} > K_{sp}$: Larutan lewat jenuh (terjadi presipitasi endapan padat hingga konsentrasi ion dalam cairan memenuhi $Q_{sp} = K_{sp}$).',
    },
    {
      id: 'cp-111-core4-q2',
      type: 'multiple_choice',
      question: 'Sebanyak $100\\text{ mL}$ larutan $\\ce{AgNO3 } 1.0 \\times 10^{-4}\\text{ M}$ dicampurkan dengan $100\\text{ mL}$ larutan $\\ce{NaCl } 1.0 \\times 10^{-4}\\text{ M}$. Diketahui $K_{sp}(\\ce{AgCl}) = 1.8 \\times 10^{-10}$. Nilai $Q_{sp}$ dan kondisi larutan setelah pencampuran adalah ....',
      options: [
        '$Q_{sp} = 1.0 \\times 10^{-8}$; mengendap',
        '$Q_{sp} = 2.5 \\times 10^{-9}$; mengendap',
        '$Q_{sp} = 2.5 \\times 10^{-9}$; tidak mengendap',
        '$Q_{sp} = 1.0 \\times 10^{-8}$; tidak mengendap',
      ],
      correctAnswer: 1,
      explanation: 'Ingat efek pengenceran volume total ($V_{\\text{tot}} = 100 + 100 = 200\\text{ mL}$):\n- $[\\ce{Ag+}] = \\frac{100 \\times 1.0 \\times 10^{-4}}{200} = 5.0 \\times 10^{-5}\\text{ M}$.\n- $[\\ce{Cl-}] = \\frac{100 \\times 1.0 \\times 10^{-4}}{200} = 5.0 \\times 10^{-5}\\text{ M}$.\n$Q_{sp} = [\\ce{Ag+}][\\ce{Cl-}] = (5.0 \\times 10^{-5})^2 = 2.5 \\times 10^{-9}$.\nKarena $Q_{sp} (2.5 \\times 10^{-9}) > K_{sp} (1.8 \\times 10^{-10})$, larutan lewat jenuh dan TERBENTUK ENDAPAN PUTIH $\\ce{AgCl}$.',
    },
    {
      id: 'cp-111-core4-q3',
      type: 'true_false',
      question: 'Dalam menghitung kuosien ion $Q_{sp}$ pada pencampuran dua larutan elektrolit, kita dapat langsung mengalikan konsentrasi awal masing-masing larutan tanpa perlu memperhitungkan volume total campuran.',
      correctAnswer: false,
      explanation: 'Salah (Jebakan Fatal Soal Ujian!). Ketika dua larutan dicampurkan, volume total larutan bertambah ($V_{\\text{tot}} = V_1 + V_2$). Hal ini menyebabkan konsentrasi masing-masing ion terencerkan ($M_{\\text{campuran}} = \\frac{M_1 V_1}{V_{\\text{tot}}}$). Mengabaikan volume pengenceran total akan menghasilkan nilai $Q_{sp}$ yang keliru (biasanya terlalu besar hingga 4 kali lipat pada pencampuran volume sama).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 5: Pengendapan Selektif (Fractional Precipitation) & Pemisahan Ion
  // =========================================================================
  'pengendapan-selektif-dan-pemisahan-kualitatif-ion-logam': [
    {
      id: 'cp-111-core5-q1',
      type: 'true_false',
      question: 'Pada pengendapan selektif campuran dua kation dengan satu pereaksi anion, senyawa yang memiliki nilai konsentrasi anion minimum terendah akan mengendap terlebih dahulu.',
      correctAnswer: true,
      explanation: 'Benar. Kation yang membutuhkan konsentrasi pereaksi pengendap paling sedikit ($[\\text{Anion}]_{\\text{min}}$ paling kecil) akan mencapai batas kelarutannya ($Q_{sp} = K_{sp}$) paling awal saat titran diteteskan perlahan-lahan, sehingga mengkristal sebagai endapan murni pertama.',
    },
    {
      id: 'cp-111-core5-q2',
      type: 'multiple_choice',
      question: 'Suatu larutan mengandung campuran ion $\\ce{Ba^2+} (0.010\\text{ M})$ dan ion $\\ce{Ca^2+} (0.010\\text{ M})$. Ke dalam larutan tersebut diteteskan larutan encer $\\ce{Na2SO4}$. Diketahui $K_{sp}(\\ce{BaSO4}) = 1.1 \\times 10^{-10}$ dan $K_{sp}(\\ce{CaSO4}) = 2.4 \\times 10^{-5}$. Pernyataan berikut yang BENAR adalah ....',
      options: [
        '$\\ce{CaSO4}$ mengendap terlebih dahulu karena nilai $K_{sp}$-nya lebih besar',
        '$\\ce{BaSO4}$ mengendap terlebih dahulu karena membutuhkan $[\\ce{SO4^2-}]$ yang jauh lebih kecil',
        'Kedua garam akan mengendap secara bersamaan',
        'Tidak ada garam yang dapat mengendap karena konsentrasi kation terlalu encer',
      ],
      correctAnswer: 1,
      explanation: 'Hitung $[\\ce{SO4^2-}]$ minimum:\n- Untuk $\\ce{BaSO4}$: $[\\ce{SO4^2-}] = \\frac{1.1 \\times 10^{-10}}{0.010} = 1.1 \\times 10^{-8}\\text{ M}$.\n- Untuk $\\ce{CaSO4}$: $[\\ce{SO4^2-}] = \\frac{2.4 \\times 10^{-5}}{0.010} = 2.4 \\times 10^{-3}\\text{ M}$.\nKarena $\\ce{BaSO4}$ hanya membutuhkan $[\\ce{SO4^2-}] = 1.1 \\times 10^{-8}\\text{ M}$ (jauh lebih rendah daripada $2.4 \\times 10^{-3}\\text{ M}$), maka $\\ce{BaSO4}$ akan MENGENDAP TERLEBIH DAHULU.',
    },
    {
      id: 'cp-111-core5-q3',
      type: 'true_false',
      question: 'Pemisahan selektif dua ion logam dianggap tuntas dan berhasil secara kuantitatif jika pada saat senyawa kedua mulai mengendap, sisa konsentrasi ion pertama di larutan telah berkurang hingga kurang dari $0.1\\%$ dari konsentrasi awalnya.',
      correctAnswer: true,
      explanation: 'Benar. Dalam kimia analitik kuantitatif, pemisahan dinyatakan sempurna jika efisiensi presipitasi ion pertama mencapai minimal $99.9\\%$ (artinya sisa ion pertama di filtrat kurang dari $0.1\\%$) sebelum ion kedua mulai terkontaminasi ikut mengendap.',
    },
  ],
};
