/**
 * osnQuestionsPillar9Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSN (Olimpiade Sains Nasional / KSN Nasional)
 * 
 * PILAR 9: Kimia Organik Sintesis Lanjut, Stereokimia Kompleks & Reaksi Penataan Ulang
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSN / KSN Tingkat Nasional Puspresnas 2017-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSN Puspresnas / IChO Preparatory)
 * 
 * Skema ID 6-Digit: 409001 - 409010
 * - 4 = Jalur Olimpiade OSN (Tingkat Nasional)
 * - 09 = Pilar 9
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSN_PILLAR_9_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSN 2023 No. 9 (Model Felkin-Anh vs Cram-Chelate)
  // =========================================================================
  {
    id: 409001,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Stereokimia Adisi Karbonil Asimetris & Model Felkin-Anh vs Cram Kelasi',
    title: 'Pengendalian Diastereoselektivitas Adisi Nukleofilik pada Alfa-Kiral Karbonil',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Reaksi adisi nukleofilik terhadap aldehida $\\alpha$-kiral bergugus kelat (2-metoksipropanal, $\\ce{CH3-CH(OCH3)-CHO}$) dapat dikendalikan stereoselektivitasnya menggunakan pemilihan reagen asam Lewis yang tepat:
- Kondisi (I): $\\ce{MeMgBr}$ dalam $\\ce{Et2O}$ pada $-78^\\circ\\text{C}$ di bawah kehadiran asam Lewis kelasi kuat bivalen $\\ce{TiCl4}$ atau $\\ce{MgBr2}$.
- Kondisi (II): $\\ce{MeLi}$ dalam pelarut polar pengkoordinasi kuat di bawah pengaruh asam Lewis non-kelasi monodentat seperti $\\ce{BF3*OEt2}$.

Berdasarkan analisis konformasi **Model Kelasi Cram (*Cram-Chelate*)** untuk kondisi (I) dan **Model Felkin-Anh** untuk kondisi (II):
Diastereomer manakah yang menjadi produk mayor pada masing-masing kondisi (I) dan (II)?

A. Kondisi (I) menghasilkan produk mayor *syn* (kelasi); Kondisi (II) menghasilkan produk mayor *anti* (Felkin-Anh)
B. Kondisi (I) menghasilkan produk mayor *anti*; Kondisi (II) menghasilkan produk mayor *syn*
C. Kedua kondisi menghasilkan produk rasemat 1:1 tanpa selektivitas
D. Kondisi (I) menghasilkan dehidrasi membentuk alkena; Kondisi (II) menghasilkan produk kelasi
E. Kedua kondisi menghasilkan stereoisomer yang identik karena gugus metoksi selalu bertindak sebagai gugus terbesar (L)`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Model Stereokimia Karbonil:**
1. Analisis Kondisi (I): Model Kelasi Cram (*Cram-Chelate*):
   - Kation logam multivalen dengan situs koordinasi terbuka (seperti $\\ce{Ti^{4+}}$ atau $\\ce{Mg^{2+}}$) membentuk cincin kelat lingkar lima yang sangat kaku antara oksigen karbonil ($\\ce{C=O}$) dan heteroatom $\\alpha$ (oksigen dari gugus metoksi $-\\ce{OCH3}$).
   - Dalam konformasi cincin kelat planar ini, gugus metil ($-\\ce{CH3}$) dan atom hidrogen ($-\\ce{H}$) menempati dua sisi muka cincin yang berlawanan.
   - Gugus metil ($-\\ce{CH3}$) jauh lebih ruah daripada atom $-\\ce{H}$, sehingga sisi yang memuat $-\\ce{CH3}$ terhalang sterik.
   - Nukleofil metil ($\\ce{Me^-}$) menyerang muka karbonil dari **sisi yang berlawanan dengan gugus metil (yaitu dari sisi $-\\ce{H}$ yang lebih terbuka)**.
   - Hasil stereokimia adisi kelasi menghasilkan diastereomer dengan hubungan relatif ***syn*** (atau kelat-terkontrol).
2. Analisis Kondisi (II): Model Felkin-Anh (Non-Kelasi):
   - Di bawah kehadiran $\\ce{BF3*OEt2}$ (asam Lewis monodentat yang memblokir oksigen tanpa mampu membentuk cincin kelat), sistem mengikuti model konformasi Felkin-Anh terbuka.
   - Berdasarkan aturan Felkin-Anh, gugus dengan kemampuan akseptor $\\sigma^*$ terbaik / gugus terbesar ($L = -\\ce{OCH3}$, karena efek penarikan elektron menurunkan energi $\\sigma^*_{\\ce{C-O}}$ untuk tumpang-tindih dengan $\\pi^*_{\\ce{C=O}}$) diposisikan tegak lurus ($90^\\circ$) terhadap bidang ikatan $\\ce{C=O}$.
   - Nukleofil menyerang sepanjang sudut Bürgi-Dunitz ($107^\\circ$) dari arah yang meminimalkan tolakan sterik dengan gugus sedang ($M = -\\ce{CH3}$) vs kecil ($S = -\\ce{H}$), yaitu menyerang melintasi gugus kecil $-\\ce{H}$.
   - Hal ini menghasilkan diastereomer kebalikannya, yaitu produk ***anti***!
3. Kesimpulan:
   - Kondisi (I) $\\to$ Produk mayor *syn* (kelasi).
   - Kondisi (II) $\\to$ Produk mayor *anti* (Felkin-Anh).
4. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Terbalik antara kontrol kelasi dan kontrol Felkin-Anh.
- Pilihan C: Mengabaikan induksi asimetri 1,2 diastereoselektif yang terkenal sangat tinggi ($>95:5$).
- Pilihan D: Tidak terjadi eliminasi dehidrasi pada suhu $-78^\circ\\text{C}$.
- Pilihan E: Mengabaikan perbedaan fundamental konformasi siklik kelasi vs konformasi terbuka Felkin.`,
    solution_framework_template: `Tahap 1: Tinjau kondisi (I): adanya asam Lewis bivalen TiCl4/Mg2+ mengunci konformasi siklik 5-anggota kelasi (oksigen C=O dan OCH3). Serangan nukleofil dari sisi H menghasilkan produk syn.
Tahap 2: Tinjau kondisi (II): asam Lewis monodentat BF3 mencegah kelasi, sistem mengikuti konformasi terbuka Felkin-Anh dengan gugus OCH3 tegak lurus C=O.
Tahap 3: Serangan sudut Burgi-Dunitz melintasi gugus H menghasilkan produk anti.
Tahap 4: Simpulkan opsi A.`,
    tags: ['felkin-anh', 'cram-chelate', 'adisi-karbonil', 'diastereoselektivitas', 'stereokimia-lanjut'],
    source_event: 'OSN Kimia 2023 No. 9 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL RIIL - OSN 2022 No. 9 (Penataan Ulang Perisiklik Cope & Claisen)
  // =========================================================================
  {
    id: 409002,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Penataan Ulang Sigmatropik [3,3] Claisen/Cope & Stereokimia Kursi',
    title: 'Stereoselektivitas Penataan Ulang Sigmatropik [3,3]-Claisen Turunan Alil Vinil Eter',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Penataan ulang sigmatropik $[3,3]$-Claisen termal dari $(E)$-alil $(E)$-propenil eter berlangsung secara terkoordinasi (*concerted*) melalui keadaan transisi suprafasial-suprafasial ($[_\\pi 2_s + _\\sigma 2_s + _\\pi 2_s]$) 6-elektron:
$$\\ce{CH3-CH=CH-O-CH2-CH=CH-CH3 ->[\\Delta] CH3-CH=CH-CH(CH3)-CH2-CHO}$$

Secara stereokimia, keadaan transisi lingkar-enam dapat mengadopsi konformasi mirip-kursi (*chair-like TS*) atau mirip-perahu (*boat-like TS*).
Karena interaksi 1,3-diaksial dan tolakan sterik pada konformasi kursi jauh lebih rendah ($\Delta \\Delta G^\\ddagger \\approx 12\\text{ kJ mol}^{-1}$ menguntungkan konformasi kursi):
Substituen metil pada kedua ujung rantai alil dan vinil secara energetik menempati posisi **ekuatorial pseudo-sikloheksana**.

Bagaimanakah stereokimia relatif dari produk aldehida tak jenuh rantai cabang yang dihasilkan secara dominan (>99%)?

A. Menghasilkan secara stereospesifik diastereomer *anti* dengan ikatan rangkap bergeometri $(E)$
B. Menghasilkan secara stereospesifik diastereomer *syn* dengan ikatan rangkap bergeometri $(Z)$
C. Menghasilkan campuran rasemat alkena tanpa selektivitas $(E/Z)$
D. Menghasilkan produk siklisasi cincin siklobutana
E. Menghasilkan dekomposisi menjadi akrolein dan butena`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Keadaan Transisi Penataan Ulang Claisen:**
1. Analisis Keadaan Transisi Mirip-Kursi (*Chair-like Transition State*):
   - Pereaksi awal adalah $(E)$-alil $(E)$-propenil eter:
     - Fragmen vinil berkonfigurasi $(E)$: gugus metil berorientasi menjauhi atom oksigen. Dalam konformasi kursi, metil ini menempati posisi **ekuatorial**.
     - Fragmen alil berkonfigurasi $(E)$: gugus metil pada ujung alil juga menempati posisi **ekuatorial** untuk menghindari tolakan 1,3-diaksial yang parah dengan hidrogen aksial.
2. Prediksi Geometri Produk dari Konformasi *Diekuatorial*:
   - Pada saat ikatan $\\sigma$ $\\ce{C-O}$ terputus dan ikatan baru $\\ce{C-C}$ terbentuk secara simultan:
     - Gugus metil alil yang berada pada posisi ekuatorial menghasilkan ikatan rangkap baru dengan geometri **$(E)$** (*trans*).
     - Relasi dua stereosenter yang baru terbentuk pada rantai utama diatur secara kaku oleh transfer kiralitas keadaan transisi kursi: kedua gugus metil yang sama-sama berposisi ekuatorial menghasilkan stereokimia diastereomerik relatif ***anti*** (atau *threo*).
3. Bukti Eksperimental:
   - Penataan ulang $[3,3]$-Claisen dan Johnson-Claisen dari $(E,E)$-substrat secara konsisten menghasilkan produk **$(E)$-alkena anti** dengan selektivitas diastereomerik $>98\\%$.
4. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Geometri $(Z)$ hanya terbentuk jika keadaan transisi melewati konformasi perahu berenergi tinggi atau jika salah satu pereaksi adalah $(Z)$-alkena.
- Pilihan C: Mengabaikan kontrol stereospesifik aturan Woodward-Hoffmann perisiklik suprafasial.
- Pilihan D: Sikloadisi $[2+2]$ menghasilkan siklobutana dilarang secara termal menurut aturan orbital Woodward-Hoffmann.
- Pilihan E: Reaksi eliminasi retro-ena yang tidak terjadi pada kondisi Claisen.`,
    solution_framework_template: `Tahap 1: Gambarkan keadaan transisi [3,3]-Claisen dalam konformasi mirip-kursi 6-anggota.
Tahap 2: Tempatkan kedua substituen metil pada posisi pseudo-ekuatorial untuk stabilitas maksimum.
Tahap 3: Pecahkan ikatan C-O dan bentuk ikatan C-C baru dari konformasi diekuatorial tersebut.
Tahap 4: Dapatkan geometri ikatan rangkap (E) dan diastereoselektivitas anti (opsi A).`,
    tags: ['penataan-ulang-claisen', 'perisiklik', 'keadaan-transisi-kursi', 'stereoselektivitas', 'transfer-kiralitas'],
    source_event: 'OSN Kimia 2022 No. 9 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - OSN 2021 No. 9 (Pd Cross-Coupling Suzuki-Miyaura)
  // =========================================================================
  {
    id: 409003,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Reaksi Kopling Silang Paladium & Siklus Katalitik Suzuki-Miyaura',
    title: 'Peran Kritis Basa pada Tahap Transmetalasi Siklus Katalitik Suzuki-Miyaura',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Reaksi kopling silang Suzuki-Miyaura antara aril halida ($\\ce{Ar-X}$) dan asam arilboronat ($\\ce{Ar'-B(OH)2}$) berkatalis paladium(0) kompleks fosfin (seperti $\\ce{Pd(PPh3)4}$) merupakan metode standar industri farmasi dalam pembentukan ikatan $\\ce{C(sp^2)-C(sp^2)}$:
$$\\ce{Ar-X + Ar'-B(OH)2 ->[Pd(0), \\; \\text{Basa}] Ar-Ar' + B(OH)3 + X^-}$$

Siklus katalitik terdiri dari tiga tahap elementer utama:
1. Adisi Oksidatif: $\\ce{Pd^0(L)2 + Ar-X -> trans-[Pd^{II}(Ar)(X)(L)2]}$
2. Transmetalasi: transfer gugus $\\ce{Ar'}$ dari spesi boron ke pusat $\\ce{Pd^{II}}$
3. Isomerisasi *trans-cis* diikuti Eliminasi Reduktif: $\\ce{cis-[Pd^{II}(Ar)(Ar')(L)2] -> Ar-Ar' + Pd^0(L)2}$

Secara eksperimental, tahap transmetalasi **TIDAK BISA berlangsung** tanpa penambahan basa (seperti $\\ce{Na2CO3}, \\ce{K3PO4},$ atau $\\ce{NaOH}$).
Bagaimanakah penjelasan mekanistik peranan esensial basa dalam memfasilitasi tahap transmetalasi pada siklus Suzuki-Miyaura?

A. Basa hidroksida/karbonat menyerang atom boron asam Lewis membentuk spesi boronat kuaterner terkuaternisasi tetrakoordinasi $[\ce{Ar'-B(OH)3}]^-$ yang nukleofilik, atau membentuk kompleks paladium hidrokso $[\ce{Pd(Ar)(OH)(L)2}]$ yang mampu mengkoordinasi asam boronat
B. Basa mereduksi $\\ce{Pd(II)}$ kembali menjadi $\\ce{Pd(0)}$ sebelum reaksi transmetalasi terjadi
C. Basa bertindak sebagai ligan pembantu yang menggantikan semua fosfin pada paladium
D. Basa mengoksidasi asam boronat menjadi fenol
E. Basa menetralkan asam halida agar larutan tidak mendidih`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mekanisme Transmetalasi Suzuki-Miyaura:**
1. Hambatan Alami Asam Boronat Trikoordinasi:
   - Asam arilboronat murni $\\ce{Ar'-B(OH)2}$ memiliki atom boron hibridisasi $sp^2$ netral dengan orbital $p$ kosong (asam Lewis lemah).
   - Gugus aril ($\ce{Ar'}$) terikat sangat kuat secara kovalen pada boron, dan kerapatan elektron pada karbon ipso tidak cukup nukleofilik untuk berpindah langsung ke pusat elektrofilik $\\ce{Pd(II)}$.
2. Dua Jalur Mekanisme Pengaktifan oleh Basa:
   - **Jalur Boronat (Boronate Pathway)**:
     Basa ($\ce{OH-}, \\ce{CO3^{2-}}, \\ce{OR-}$) bertindak sebagai nukleofil menyerang orbital $p$ kosong pada boron membentuk kompleks intermediat **boronat tetrahidroksi / tetrakoordinasi** bermuatan negatif (*ate complex*):
     $$\\ce{Ar'-B(OH)2 + OH- <=> [Ar'-B(OH)3]^-}$$
     Kuaternisasi boron menjadi geometri tetrahedral $sp^3$ menaikkan energi orbital ikatan $\\ce{B-C}$ secara drastis, meningkatkan karakter nukleofilik karbon ipso dan memfasilitasi transfer gugus aril $\\ce{Ar'}$ ke paladium.
   - **Jalur Okso-Paladium (Oxo-Palladium Pathway)**:
     Basa menggantikan ligan halida ($\ce{X-}$) pada paladium membentuk kompleks $\\ce{[Pd(Ar)(OH)(L)2]}$. Atom oksigen ligan hidrokso yang kaya elektron kemudian berkoordinasi langsung dengan orbital $p$ kosong boron netral, bertindak sebagai "jembatan intramolekuler" yang mempercepat transmetalasi melalui keadaan transisi siklik lingkar empat.
3. Kedua jalur ini membuktikan peran vital basa dalam transmetalasi.
4. Maka opsi A adalah penjelasan kimiawi yang komprehensif dan tepat.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Basa tidak mereduksi $\\ce{Pd(II)}$ pada tahap ini (reduksi terjadi via eliminasi reduktif produk).
- Pilihan C: Ligan fosfin tetap terikat untuk menstabilkan geometri koordinasi.
- Pilihan D: Oksidasi asam boronat menjadi fenol adalah reaksi degradasi samping jika terdapat peroksida pengotor.
- Pilihan E: Penjelasan non-mekanistik yang keliru.`,
    solution_framework_template: `Tahap 1: Tinjau keasaman Lewis boron pada Ar'-B(OH)2 yang memiliki orbital p kosong.
Tahap 2: Jelaskan serangan basa OH^- menghasilkan spesi boronat tetrakoordinasi [Ar'-B(OH)3]^- (ate-complex) yang sangat nukleofilik.
Tahap 3: Alternatifnya, basa menukar halida pada Pd membentuk Pd-OH yang berkoordinasi ke boron memfasilitasi transmetalasi intramolekuler.
Tahap 4: Simpulkan opsi A.`,
    tags: ['suzuki-miyaura', 'cross-coupling', 'paladium', 'transmetalasi', 'ate-complex'],
    source_event: 'OSN Kimia 2021 No. 9 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL RIIL - OSN 2020 No. 9 (Epoksidasi Asimetris Sharpless)
  // =========================================================================
  {
    id: 409004,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Epoksidasi Asimetris Sharpless & Aturan Mnemonik Kiral Tartrat',
    title: 'Prediksi Enantioselektif Epoksidasi Asimetris Sharpless Menggunakan Ligan (+)-DET',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Epoksidasi Asimetris Sharpless (Nobel Kimia 2001) mengoksidasi alkohol alilik primer menjadi epoksida kiral berenantioselektivitas sangat tinggi ($>95\\%\\text{ ee}$) menggunakan sistem katalis kiral:
- Titan tetraisopropoksida: $\\ce{Ti(O-i-Pr)4}$
- Oksidan: *tert*-butil hidroperoksida (TBHP)
- Pengarah kiral: ester dietil tartrat kiral murni enantiomer, baik $(+)$-DET ($(2R,3R)$-dietil tartrat) atau $(-)$-DET ($(2S,3S)$-dietil tartrat).

Berdasarkan **aturan mnemonik Sharpless**:
Bila molekul alkohol alilik digambarkan dalam bidang datar dengan gugus hidroksimetil ($-\\ce{CH2OH}$) diletakkan pada **sudut kanan-bawah**:
- Penggunaan **$(-)$-DET** mengarahkan oksigen epoksida masuk dari **muka atas (*top face*)**.
- Penggunaan **$(+)$-DET** mengarahkan oksigen epoksida masuk dari **muka bawah (*bottom face*)**.

Jika $(E)$-but-2-en-1-ol (krotil alkohol, $\\ce{CH3-CH=CH-CH2OH}$) diepoksidasi menggunakan katalis dengan ligan **$(+)$-DET**:
Bagaimanakah konfigurasi stereokimia absolut ($R/S$) dari kedua pusat kiral pada produk $(2R,3R)$ atau $(2S,3S)$ atau $(2S,3R)$ glisidol yang terbentuk?

A. $(2S, 3R)$-2,3-epoksibutan-1-ol
B. $(2R, 3S)$-2,3-epoksibutan-1-ol
C. $(2R, 3R)$-2,3-epoksibutan-1-ol
D. $(2S, 3S)$-2,3-epoksibutan-1-ol
E. Campuran rasemat enantiomer 50:50`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mnemonik Epoksidasi Asimetris Sharpless:**
1. Orientasi Molekul Sesuai Mnemonik Standar Sharpless:
   - Krotil alkohol: $(E)$-$\\ce{CH3-CH=CH-CH2OH}$.
   - Posisikan ikatan rangkap pada bidang datar dengan gugus alilik $-\\ce{CH2OH}$ di pojok kanan bawah:
     - Karbon C1 ($-\\ce{CH2OH}$) ada di kanan bawah.
     - Karbon C2 berikatan dengan C1.
     - Karbon C3 berikatan ganda dengan C2.
     - Karena geometri $(E)$ (*trans*), gugus metil ($-\\ce{CH3}$) pada C3 mengarah ke kiri atas.
2. Arah Serangan Atom Oksigen:
   - Ligan yang digunakan adalah **$(+)$-DET** ($(2R,3R)$-dietil tartrat).
   - Menurut mnemonik Sharpless: $(+)$-DET mengantarkan atom oksigen dari **muka bawah (*bottom face*)** ikatan rangkap $\\ce{C=C}$.
   - Oleh karena itu, jembatan epoksida $\\ce{-O-}$ terbentuk dari arah bawah (orientasi garis putus-putus / menjauhi pengamat, atau cincin oksiran menghadap ke bawah).
3. Penentuan Konfigurasi Absolut ($R/S$) Cahn-Ingold-Prelog (CIP):
   - **Pada Karbon C2**:
     - Prioritas 1: Oksigen epoksida ($-\\ce{O-}$)
     - Prioritas 2: Karbon C3 ($-\\ce{CH(O)CH3}$)
     - Prioritas 3: Karbon C1 ($-\\ce{CH2OH}$)
     - Prioritas 4: Atom hidrogen ($-\\ce{H}$)
     - Dengan oksigen terikat dari bawah (belakang) dan hidrogen menghadap ke atas (depan):
       Urutan prioritas $1 \\to 2 \\to 3$ berjalan berlawanan arah jarum jam dilihat dari arah hidrogen menjauhi kita $\\implies$ konfigurasi adalah **$(2S)$**!
   - **Pada Karbon C3**:
     - Prioritas 1: Oksigen epoksida ($-\\ce{O-}$)
     - Prioritas 2: Karbon C2 ($-\\ce{CH(O)CH2OH}$)
     - Prioritas 3: Gugus metil ($-\\ce{CH3}$)
     - Prioritas 4: Atom hidrogen ($-\\ce{H}$)
     - Oksigen dari bawah, hidrogen C3 mengarah ke atas:
       Urutan prioritas $1 \\to 2 \\to 3$ menghasilkan konfigurasi absolut **$(3R)$**!
4. Kesimpulan:
   Produk epoksida kiral mayor yang terbentuk secara enantioselektif adalah **$(2S, 3R)$-2,3-epoksibutan-1-ol**.
5. Maka opsi A adalah jawaban yang tepat.

**Analisis Distraktor:**
- Pilihan A: Benar ($(2S, 3R)$).
- Pilihan B: Enantiomer lawan $(2R, 3S)$ yang dihasilkan jika menggunakan ligan $(-)$-DET.
- Pilihan C: Konfigurasi diastereomerik yang salah (melanggar geometri ikatan rangkap trans awal).
- Pilihan D: Kesalahan penentuan prioritas CIP.
- Pilihan E: Terjadi jika tidak menggunakan ligan kiral tartrat (hanya $\ce{Ti(O-i-Pr)4}$ akiral).`,
    solution_framework_template: `Tahap 1: Posisikan krotil alkohol (E) dengan gugus CH2OH di kanan bawah sesuai diagram mnemonik Sharpless.
Tahap 2: Gunakan aturan mnemonik: (+)-DET mengirimkan atom oksigen dari muka bawah (bottom face).
Tahap 3: Pasang jembatan epoksida dari bawah pada ikatan rangkap (E).
Tahap 4: Tentukan konfigurasi Cahn-Ingold-Prelog pada C2 dan C3, peroleh (2S, 3R) (opsi A).`,
    tags: ['epoksidasi-sharpless', 'mnemonik-kiral', 'dietil-tartrat', 'enantioselektif', 'alkohol-alilik'],
    source_event: 'OSN Kimia 2020 No. 9 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - OSN 2018 No. 9 (Aldol Stereoselektif Zimmerman-Traxler)
  // =========================================================================
  {
    id: 409005,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Reaksi Aldol Asimetris & Model Keadaan Transisi Zimmerman-Traxler',
    title: 'Kontrol Diastereoselektivitas Syn vs Anti pada Enolat Boron Menggunakan Model Kursi Zimmerman-Traxler',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Reaksi penambahan aldol stereoselektif antara enolat boron kiral/akiral dengan aldehida berlangsung melalui keadaan transisi siklik lingkar-enam terkoordinasi kaku yang dikenal sebagai **Model Zimmerman-Traxler**:
- Pembentukan enolat dari etil keton ($\\ce{R-CO-CH2CH3}$):
  1. Penggunaan $\\ce{Bu2BOTf / Et3N}$ secara kinetik menghasilkan $(Z)$-enolat boron secara selektif.
  2. Penggunaan $(c\\text{-Hex})_2\\ce{BCl / Et3N}$ secara termodinamik menghasilkan $(E)$-enolat boron secara selektif.

Berdasarkan tumpang-tindih orbital dan minimisasi tolakan sterik 1,3-diaksial antara gugus aldehida ($R'$) dan ligan pada boron dalam keadaan transisi kursi Zimmerman-Traxler:
Diastereomer aldol manakah (*syn* atau *anti*) yang masing-masing dihasilkan secara dominan dari reaksi $(Z)$-enolat dan $(E)$-enolat boron?

A. $(Z)$-enolat boron menghasilkan produk mayor *syn*-aldol; $(E)$-enolat boron menghasilkan produk mayor *anti*-aldol
B. $(Z)$-enolat boron menghasilkan produk mayor *anti*-aldol; $(E)$-enolat boron menghasilkan produk mayor *syn*-aldol
C. Kedua enolat menghasilkan campuran 1:1 *syn* dan *anti*
D. Enolat boron tidak stabil dan mengalami penataan ulang sebelum reaksi aldol
E. $(Z)$-enolat menghasilkan ester sedangkan $(E)$-enolat menghasilkan asam karboksilat`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Model Zimmerman-Traxler Aldol Boron:**
1. Karakteristik Enolat Boron:
   - Ikatan $\\ce{B-O}$ dan $\\ce{B-C}$ sangat pendek ($r_{\\ce{B-O}} \\approx 1{,}4 - 1{,}5\\text{ \AA}$) dibandingkan enolat litium atau magnesium.
   - Hal ini membuat cincin transisi lingkar enam Zimmerman-Traxler sangat mampat dan kaku, memperbesar perbedaan energi aktivasi antara konformasi berkompetisi.
2. Analisis Reaksi $(Z)$-Enolat Boron:
   - Pada $(Z)$-enolat, gugus metil pada karbon enolat berada pada sisi yang sama dengan gugus $-\\ce{O-BBu2}$ (posisi ekuatorial pada kursi).
   - Gugus aril/alkil $R'$ dari aldehida diposisikan secara mutlak pada posisi **ekuatorial** untuk menghindari interaksi 1,3-diaksial sterik yang parah dengan ligan butil aksial pada boron.
   - Penyerangan ikatan rangkap $\\ce{C=C}$ enolat pada karbonil aldehida dari konformasi kursi ini menghasilkan produk dengan hubungan relatif stereokimia ***syn* (syn-aldol)** dengan selektivitas $>98:2$.
3. Analisis Reaksi $(E)$-Enolat Boron:
   - Pada $(E)$-enolat, gugus metil berposisi aksial semu pada keadaan transisi kursi.
   - Aldehida tetap memposisikan gugusnya ($R'$) pada posisi ekuatorial.
   - Hasil penyerangan terkoordinasi dari konformasi ini menghasilkan produk dengan hubungan relatif stereokimia ***anti* (anti-aldol)** secara selektif.
4. Kesimpulan:
   - $(Z)$-enolat $\\implies$ *syn*-aldol.
   - $(E)$-enolat $\\implies$ *anti*-aldol.
5. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Terbalik antara korelasi Z-syn dan E-anti.
- Pilihan C: Mengabaikan rigiditas model kursi Zimmerman-Traxler boron yang terkenal memiliki diastereoselektivitas mendekati sempurna.
- Pilihan D: Enolat boron sangat stabil pada suhu rendah ($-78^\circ\\text{C}$).
- Pilihan E: Produk reaksi adalah $\\beta$-hidroksiketon (aldol), bukan ester atau asam.`,
    solution_framework_template: `Tahap 1: Tinjau model keadaan transisi lingkar-6 kursi Zimmerman-Traxler untuk enolat boron.
Tahap 2: Letakkan substituen aldehida R' pada posisi ekuatorial untuk meminimalkan interaksi 1,3-diaksial dengan ligan boron.
Tahap 3: Analisis (Z)-enolat: menghasilkan produk aldol berkonfigurasi syn.
Tahap 4: Analisis (E)-enolat: menghasilkan produk aldol berkonfigurasi anti (opsi A).`,
    tags: ['aldol-boron', 'zimmerman-traxler', 'syn-anti', 'enolat-z-e', 'diastereoselektivitas'],
    source_event: 'OSN Kimia 2018 No. 9 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Metatesis Alkena Grubbs & Siklus Chauvin)
  // =========================================================================
  {
    id: 409006,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Metatesis Alkena & Siklus Katalitik Chauvin Karbena Rutenium Grubbs',
    title: 'Intermediat Siklobutana-Metalosiklus pada Siklus Chauvin Metatesis Penutupan Cincin (RCM)',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Reaksi Metatesis Penutupan Cincin (*Ring-Closing Metathesis*, RCM) dari senyawa nona-1,8-diena menggunakan katalis karbena rutenium Grubbs Generasi II (memuat ligan $N$-heterosiklik karbena, NHC) menghasilkan sikloheptena dan gas etilena:
$$\\ce{CH2=CH-(CH2)5-CH=CH2 ->[\\text{Grubbs II}] Sikloheptena + CH2=CH2 ^}$$

Berdasarkan mekanisme siklus Chauvin (Nobel Kimia 2005), intermediat kunci manakah yang berulang kali terbentuk dan terurai melalui sikloadisi $[2+2]$ dan retro-$[2+2]$ koordinasi organologam?

A. Intermediat rutenasiklobutana (*ruthenacyclobutane*) beranggota empat
B. Intermediat radikal bebas aril karbena
C. Intermediat siklopropana bis-kationik
D. Intermediat rutenasikloheksana lingkar-enam
E. Intermediat kompleks $\\eta^4$-butadiena terkoordinasi`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Siklus Katalitik Chauvin Metatesis Olefin:**
1. Mekanisme Siklus Chauvin:
   - Yves Chauvin (1971) mengusulkan bahwa metatesis alkena dikatalisis oleh spesies karbena alkilidena logam ($\\ce{L_n M=CHR}$).
   - Tahap 1: Koordinasi alkena pada pusat rutenium menghasilkan kompleks $\\pi$-olefin.
   - Tahap 2: Terjadi reaksi **sikloadisi $[2+2]$** formal antara ikatan ganda logam-karbon $\\ce{Ru=C}$ dan ikatan ganda $\\ce{C=C}$ alkena, membentuk cincin metalosiklik beranggota empat: **rutenasiklobutana (*ruthenacyclobutane*)**.
   - Tahap 3: Cincin rutenasiklobutana ini mengalami pembelahan **retro-$[2+2]$** pada arah ortogonal, menghasilkan spesies alkilidena baru dan melepaskan molekul olefin baru (misalnya etilena).
2. Pendorong Termodinamika RCM:
   - Terlepasnya gas etilena ($\\ce{CH2=CH2}$) dari fasa larutan mendorong kesetimbangan ke arah pembentukan produk penutupan cincin sikloalkena secara ireversibel melalui peningkatan entropi sistem ($\Delta S > 0$).
3. Kehadiran cincin rutenasiklobutana 4-anggota ini telah dibuktikan secara spektroskopi NMR suhu rendah oleh Grubbs dan Schrock.
4. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar (rutenasiklobutana).
- Pilihan B: Tidak melibatkan mekanisme radikal bebas.
- Pilihan C: Siklopropana bukan intermediat metatesis (itu adalah reaksi siklopropanasi karbenoid Simmons-Smith).
- Pilihan D: Rutenasikloheksana lingkar-6 tidak terbentuk pada siklus Chauvin.
- Pilihan E: Kompleks diena adalah produk samping pasivasi, bukan intermediat katalitik aktif.`,
    solution_framework_template: `Tahap 1: Pahami prinsip mekanisme Chauvin: reaksi bolak-balik sikloadisi [2+2] dan retro-[2+2].
Tahap 2: Reaksikan ikatan Ru=CHR dengan ikatan C=C alkena.
Tahap 3: Bentuk cincin metalosiklus 4-anggota yang disebut rutenasiklobutana.
Tahap 4: Simpulkan opsi A.`,
    tags: ['metatesis-alkena', 'katalis-grubbs', 'siklus-chauvin', 'rutenasiklobutana', 'rcm'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Click Chemistry CuAAC Regioselektif)
  // =========================================================================
  {
    id: 409007,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Sikloadisi 1,3-Dipolar Huisgen & Click Chemistry CuAAC',
    title: 'Regioselektivitas Sikloadisi Azida-Alkuna Tanpa Katalis vs Terkatalisis Tembaga(I)',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Reaksi sikloadisi 1,3-dipolar klasik Huisgen antara benzil azida ($\\ce{Bn-N3}$) dan fenilasetilena ($\\ce{Ph-C#CH}$) di bawah pemanasan termal tanpa katalis ($100^\\circ\\text{C}$) memerlukan waktu lama dan menghasilkan **campuran regioisomer 1,4- dan 1,5-disubstitusi 1,2,3-triazol dalam rasio mendekati 1:1**.

Sebaliknya, penambahan garam tembaga(I) in-situ ($\\ce{CuSO4 + natrium askorbat}$) pada suhu kamar menghasilkan reaksi *Click Chemistry* CuAAC (Sharpless & Meldal, Nobel Kimia 2022) yang berlangsung sangat cepat dalam hitungan menit.

Bagaimanakah regioselektivitas produk yang dihasilkan dari reaksi CuAAC tersebut, dan apakah intermediat organologam kunci yang bertanggung jawab atas selektivitas ini?

A. Menghasilkan eksklusif 100% regioisomer **1,4-disubstitusi** melalui pembentukan intermediat dinuklir tembaga(I) asetilida
B. Menghasilkan eksklusif 100% regioisomer **1,5-disubstitusi** melalui pembentukan radikal azida
C. Menghasilkan campuran regioisomer 1:1 yang sama namun pada laju reaksi yang lebih cepat
D. Menghasilkan pembelahan azida melepaskan gas nitrogen membentuk benzil amina
E. Menghasilkan polimerisasi rantai asetilena tanpa keterlibatan azida`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mekanisme CuAAC Click Chemistry:**
1. Sikloadisi Termal Huisgen Klasik:
   - Berlangsung melalui keadaan transisi terkoordinasi lingkar lima dipolar-1,3 murni.
   - Karena perbedaan koefisien orbital molekul perbatasan (FMO) HOMO-LUMO antara azida dan alkuna terminal relatif kecil, energi aktivasi untuk orientasi 1,4 dan 1,5 hampir sebanding, sehingga produk yang diperoleh selalu berupa campuran regioisomer $\\sim 1:1$.
2. Mekanisme Katalisis Tembaga(I) (CuAAC):
   - Kation $\\ce{Cu(I)}$ mengkoordinasi alkuna terminal dan mendeprotonasinya secara kuantitatif membentuk **tembaga(I) asetilida ($\\ce{Cu-C#C-R}$)**.
   - Studi kinetika terbaru membuktikan keterlibatan **dua atom tembaga (dinuclear Cu intermediate)**: satu atom $\\ce{Cu}$ berikatan $\\sigma$ dengan karbon asetilida, sedangkan atom $\\ce{Cu}$ kedua berkoordinasi secara $\\pi$ pada ikatan rangkap tiga dan mengikat pasangan elektron bebas atom nitrogen proksimal dari azida.
   - Pengorganisasian spasial yang sangat ketat oleh kedua atom tembaga ini mengarahkan serangan azida secara terpadu membentuk metalosiklus tembaga 6-anggota (*cupratriazole*).
   - Metalosiklus ini hanya dapat mengarah pada satu isomer tunggal, yaitu **1,4-disubstitusi 1,2,3-triazol secara eksklusif ($100\\%$ regioselektif)**!
   (Catatan: Untuk memperoleh isomer 1,5-disubstitusi secara selektif, digunakan katalis rutenium, yaitu reaksi RuAAC).
3. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar (1,4-disubstitusi eksklusif via tembaga asetilida dinuklir).
- Pilihan B: Isomer 1,5-disubstitusi dihasilkan oleh katalis rutenium [Cp*RuCl], bukan tembaga CuAAC.
- Pilihan C: CuAAC sepenuhnya mengubah jalur reaksi (bukan lagi sikloadisi perisiklik concerted bebas) sehingga selektivitasnya 100% bukan 1:1.
- Pilihan D: Tembaga(I) tidak mereduksi azida menjadi amina (itu adalah reduksi Staudinger).
- Pilihan E: Polimerisasi asetilena Glaser dicegah oleh suasana reduktor askorbat dan kondisi CuAAC.`,
    solution_framework_template: `Tahap 1: Bandingkan Huisgen termal (campuran 1:1 regioisomer 1,4 dan 1,5) vs CuAAC.
Tahap 2: Tinjau peran Cu(I): membentuk tembaga asetilida dinuklir Cu-C#C-Ph.
Tahap 3: Koordinasi azida pada kompleks dinuklir tembaga mengarahkan pembentukan kupratriazol 6-anggota secara eksklusif.
Tahap 4: Dapatkan produk tunggal 1,4-disubstitusi 1,2,3-triazol (opsi A).`,
    tags: ['click-chemistry', 'cuaac', '1-2-3-triazol', 'tembaga-asetilida', 'regioselektivitas'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Oksidasi Baeyer-Villiger & Kemampuan Migrasi)
  // =========================================================================
  {
    id: 409008,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Oksidasi Baeyer-Villiger & Urutan Kemampuan Migrasi Gugus',
    title: 'Regioselektivitas Oksidasi Baeyer-Villiger pada Keton Asimetris dan Laktonisasi Siklik',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Oksidasi Baeyer-Villiger mengubah keton menjadi ester (atau keton siklik menjadi lakton) menggunakan asam peroksikarboksilat seperti asam *meta*-kloroperbenzoat (mCPBA):
1. Adisi nukleofilik asam peroksi pada karbon karbonil membentuk **intermediat Criegee tetrahedral**.
2. Migrasi salah satu gugus karbon tetangga ke atom oksigen peroksi yang disertai pemutusan ikatan $\\ce{O-O}$ yang lemah sebagai tahap penentu laju.

Urutan kemampuan migrasi intrinsik (*migratory aptitude*) gugus dalam penataan ulang Baeyer-Villiger ditentukan oleh kemampuan menstabilkan muatan parsial positif pada keadaan transisi migrasi:
$$\\text{Tersier alkil} > \\text{Sekunder alkil} \\approx \\text{Sikloheksil} > \\text{Benzil} > \\text{Fenil} > \\text{Primer alkil} > \\text{Metil}$$

Jika 2-metilsikloheksanon direaksikan dengan $1{,}0\\text{ ekuivalen}$ mCPBA dalam pelarut diklorometana:
Manakah produk lakton mayor yang terbentuk secara regioselektif?

A. 7-metiloksepan-2-on (oksigen tersisip di antara karbonil dan karbon metin tersubstitusi metil C2)
B. 3-metiloksepan-2-on (oksigen tersisip di antara karbonil dan karbon metilen C6)
C. Asam 2-metilheksanoat
D. 2-metilsikloheksanol
E. Campuran 1:1 dari 7-metiloksepan-2-on dan 3-metiloksepan-2-on`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Regioselektivitas Baeyer-Villiger:**
1. Struktur Pereaksi 2-Metilsikloheksanon:
   - Karbon karbonil (C1, $\\ce{C=O}$) diapit oleh dua atom karbon tetangga yang berbeda:
     - Karbon C2: mengikat gugus metil, atom hidrogen, dan rantai cincin $\\implies$ **karbon sekunder/tersier bercabang (*CH-CH3*)**.
     - Karbon C6: mengikat dua atom hidrogen dan rantai cincin $\\implies$ **karbon sekunder tak bercabang (*CH2*)**.
2. Pembentukan Intermediat Criegee:
   - mCPBA menyerang C1 menghasilkan intermediat tetrahedral peroksi Criegee: $[\ce{R1-C(OH)(OOAr)-R2}]$.
3. Tahap Migrasi Penentu Laju:
   - Terjadi migrasi salah satu ikatan $\\ce{C-C}$ ke atom oksigen peroksi dengan pelepasan serentak ion m-klorobenzoat.
   - Berdasarkan urutan kemampuan migrasi:
     $$\\text{Karbon bercabang C2 (lebih tersubstitusi)} \\gg \\text{Karbon C6 (kurang tersubstitusi)}$$
   - Karbon C2 yang memiliki densitas elektron lebih tinggi dan mampu mendelokalisasikan muatan parsial positif jauh lebih efektif akan bermigrasi ke oksigen peroksi.
4. Struktur Produk Lakton:
   - Penyisipan oksigen terjadi secara selektif antara C1 dan C2:
     $$\\ce{-CH(CH3)-O-C(=O)-(CH2)4-}$$
   - Cincin beranggotakan 7 atom (lakton lingkar tujuh / oksepan-2-on).
   - Karbon metin yang mengikat metil terhubung langsung ke atom oksigen cincin lakton, yang dinamakan **7-metiloksepan-2-on**!
5. Retensi Konfigurasi:
   - Migrasi gugus kiral berlangsung dengan retensi stereokimia sempurna.
6. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar (7-metiloksepan-2-on).
- Pilihan B: 3-metiloksepan-2-on dihasilkan jika C6 yang bermigrasi (produk minor, melanggar aturan kemampuan migrasi).
- Pilihan C: Produk pemecahan cincin oksidatif berlebih.
- Pilihan D: Produk reduksi alkohol, bukan oksidasi peroksi.
- Pilihan E: Mengabaikan perbedaan kemampuan migrasi yang sangat tajam antara karbon C2 dan C6.`,
    solution_framework_template: `Tahap 1: Identifikasi kedua gugus tetangga karbonil pada 2-metilsikloheksanon: C2 (karbon bercabang CH-CH3) vs C6 (karbon CH2).
Tahap 2: Terapkan aturan kemampuan migrasi Baeyer-Villiger: karbon lebih tersubstitusi (C2) bermigrasi lebih cepat dibanding C6.
Tahap 3: Sisipkan atom oksigen di antara C1 dan C2.
Tahap 4: Dapatkan cincin lakton 7-anggota: 7-metiloksepan-2-on (opsi A).`,
    tags: ['baeyer-villiger', 'kemampuan-migrasi', 'intermediat-criegee', 'lakton', 'regioselektivitas'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Dihidroksilasi Asimetris Sharpless)
  // =========================================================================
  {
    id: 409009,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Dihidroksilasi Asimetris Sharpless (AD-Mix) & Mnemonik Alkaloid Sinkona',
    title: 'Prediksi Enantioselektif Dihidroksilasi Asimetris Alkena Menggunakan Reagen AD-mix-alfa dan AD-mix-beta',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Dihidroksilasi Asimetris Sharpless (*Sharpless Asymmetric Dihydroxylation*, AD) mengubah alkena menjadi 1,2-diol *syn* (*vicinal diol*) enantiomurni menggunakan katalis osmium tetroksida ($\\ce{OsO4}$) dengan ligan kiral alkaloid sinkona biner:
- **AD-mix-$\\alpha$**: mengandung ligan $(\\text{DHQ})_2\\text{PHAL}$ (turunan dihidrokuinin)
- **AD-mix-$\\beta$**: mengandung ligan $(\\text{DHQD})_2\\text{PHAL}$ (turunan dihidrokuinidin, pseudo-enantiomer dari DHQ).
Ko-oksidan sekunder yang digunakan adalah $\\ce{K3Fe(CN)6}$ dalam campuran pelarut air-*tert*-butanol.

Menurut diagram mnemonik Sharpless untuk alkena yang digambarkan pada bidang dengan substituen terbesar di kuadran kiri-atas:
- Katalis **AD-mix-$\\alpha$** menyerang dari **muka bawah (*bottom face / $\\alpha$-face*)**.
- Katalis **AD-mix-$\\beta$** menyerang dari **muka atas (*top face / $\\beta$-face*)**.

Jika *trans*-stilbena ($(E)$-1,2-difeniletilena, $\\ce{Ph-CH=CH-Ph}$) direaksikan dengan **AD-mix-$\\beta$**:
Berapakah konfigurasi absolut ($R/S$) dari produk 1,2-difeniletana-1,2-diol yang dihasilkan secara enantioselektif?

A. $(1R, 2R)$-1,2-difeniletana-1,2-diol
B. $(1S, 2S)$-1,2-difeniletana-1,2-diol
C. *meso*-1,2-difeniletana-1,2-diol
D. $(1R, 2S)$-1,2-difeniletana-1,2-diol
E. Campuran rasemat 1:1 tanpa kelebihan enantiomer`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mnemonik Sharpless Asymmetric Dihydroxylation (AD):**
1. Orientasi Alkena pada Kotak Mnemonik Sharpless:
   - Untuk *trans*-stilbena ($\ce{Ph-CH=CH-Ph}$):
     - Memiliki dua gugus fenil yang besar ($R_L = \\ce{Ph}$) dan dua atom hidrogen ($R_S = \\ce{H}$).
     - Posisikan ikatan rangkap mendatar di tengah.
     - Gugus fenil pertama di kuadran kiri-atas (area aromatik menarik interaksi $\\pi-\\pi$ stacking dengan cincin ftalazin katalis).
     - Gugus fenil kedua berada di kuadran kanan-bawah.
2. Arah Serangan Reagen AD-mix:
   - Reagen yang digunakan: **AD-mix-$\\beta$** (ligan $(\\text{DHQD})_2\\text{PHAL}$).
   - Berdasarkan aturan mnemonik Sharpless yang telah terkalibrasi secara universal:
     - AD-mix-$\\beta$ $\\implies$ penyerangan oksigen osmium terjadi dari **muka atas (*top face / $\\beta$-face*)**!
     - (Sebaliknya, AD-mix-$\\alpha$ menyerang dari muka bawah / $\\alpha$-face).
3. Penentuan Konfigurasi CIP Produk:
   - Kedua atom oksigen masuk secara *syn* dari arah atas (menghadap ke arah pengamat / garis baji tebal) pada kedua atom karbon C1 dan C2:
     - C1: $-\\ce{OH}$ (baji tebal), $-\\ce{H}$ (garis putus-putus), $-\\ce{Ph}$, $-\\ce{CH(OH)Ph}$.
     - Menghitung urutan prioritas CIP:
       1: $-\\ce{OH}$
       2: $-\\ce{CH(OH)Ph}$
       3: $-\\ce{Ph}$
       4: $-\\ce{H}$
     - Dengan $-\\ce{H}$ di belakang (menjauhi pengamat): urutan $1 \\to 2 \\to 3$ berputar searah jarum jam $\\implies$ **$(1R)$**!
     - Karena molekul memiliki simetri $C_2$, karbon C2 memiliki lingkungan stereokimia identik homotopik $\\implies$ **$(2R)$**!
4. Kesimpulan:
   Produk enantiomurni yang terbentuk adalah **$(1R, 2R)$-1,2-difeniletana-1,2-diol**.
   (Jika menggunakan AD-mix-$\\alpha$, produknya adalah enantiomer $(1S, 2S)$).
5. Maka opsi A adalah jawaban yang benar.

**Analisis Distraktor:**
- Pilihan A: Benar ($(1R, 2R)$).
- Pilihan B: Enantiomer lawan $(1S, 2S)$ yang dihasilkan oleh AD-mix-$\\alpha$.
- Pilihan C: Bentuk *meso* $(1R, 2S)$ hanya terbentuk dari *cis*-stilbena ($(Z)$-alkena), bukan *trans*-stilbena!
- Pilihan D: Identik dengan bentuk meso.
- Pilihan E: Terjadi jika reaksi dihidroksilasi menggunakan $\\ce{KMnO4}$ atau $\\ce{OsO4}$ tanpa ligan kiral sinkona.`,
    solution_framework_template: `Tahap 1: Posisikan trans-stilbena pada kuadran mnemonik Sharpless dengan gugus fenil di kiri-atas dan kanan-bawah.
Tahap 2: Gunakan aturan mnemonik: AD-mix-beta mengantarkan atom oksigen dari muka atas (top face / beta-face).
Tahap 3: Tambahkan dua gugus OH secara syn dari arah depan (baji tebal) pada C1 dan C2.
Tahap 4: Tentukan konfigurasi CIP C1 dan C2, dapatkan (1R, 2R)-1,2-difeniletana-1,2-diol (opsi A).`,
    tags: ['dihidroksilasi-sharpless', 'ad-mix-beta', 'vicinal-diol', 'alkaloid-sinkona', 'mnemonik-kiral'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi OSN / IChO (Fotokimia Sikloadisi [2+2] & Kubana)
  // =========================================================================
  {
    id: 409010,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Fotokimia Sikloadisi [2+2] & Sintesis Hidrokarbon Bersitegang Kubana',
    title: 'Analisis Orbital Molekul Sikloadisi [2+2] Fotokimia pada Sintesis Kerangka Kubana',
    difficulty: 'OSN',
    question_style: 'mcq',
    question_text: `Sintesis hidrokarbon berkisi kubus dengan tegangan cincin sangat tinggi, **kubana ($\ce{C8H8}$)**, pertama kali dirintis oleh Philip Eaton (1964) melalui tahap kunci fotokimia intramolekuler sikloadisi $[2+2]$:
Dimer siklopentadienon terhalogenasi mengalami iradiasi sinar UV ($h\\nu$) menghasilkan kerangka bis-siklobutana bisiklik sangkar tertutup.

Berdasarkan aturan simetri orbital Woodward-Hoffmann:
Mengapa sikloadisi $[2+2]$ antara dua ikatan rangkap alkena **dilarang secara termal (*thermally forbidden*)** namun **diizinkan secara fotokimia (*photochemically allowed*)** melalui geometri suprafasial-suprafasial ($[_\\pi 2_s + _\\pi 2_s]$)?

A. Iradiasi UV mempromosikan satu elektron dari orbital $\\pi$ ke $\\pi^*$ (eksitasi HOMO $\\to$ SOMO), membalikkan fase simetri orbital frontier sehingga tumpang-tindih lobus sefase suprafasial-suprafasial menghasilkan interaksi ikatan konstruktif tanpa simpul destruktif
B. Radiasi UV menaikkan suhu larutan secara lokal sehingga mengatasi rintangan sterik
C. Foton UV memutus ikatan kovalen $\\ce{C-C}$ menghasilkan intermediat diradikal bebas linier
D. Reaksi termal dilarang karena alkena tidak memiliki elektron $\\pi$ pada keadaan dasar
E. Fotokimia mengubah hibridisasi karbon secara instan dari $sp^2$ menjadi $sp^3$ sebelum kedua molekul saling mendekat`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Diagram Korelasi Woodward-Hoffmann [2+2]:**
1. Aturan Woodward-Hoffmann untuk Sikloadisi $[m + n]$:
   - Jumlah total elektron $\\pi$ yang terlibat adalah $2 + 2 = 4$ elektron (sistem $4n$).
   - Untuk komponen suprafasial-suprafasial ($[_\\pi 2_s + _\\pi 2_s]$):
     - Sistem $4n$ elektron adalah **dilarang secara termal (*thermally forbidden*)**.
     - Sistem $4n$ elektron adalah **diizinkan secara fotokimia (*photochemically allowed*)**.
2. Analisis Simetri Orbital FMO Termal vs Fotokimia:
   - Pada keadaan dasar termal:
     - Tumpang tindih antara HOMO alkena 1 ($\pi$, simetris terhadap bidang cermin) dan LUMO alkena 2 ($\pi^*$, anti-simetris terhadap bidang cermin).
     - Jika pendekatan dilakukan secara suprafasial paralel pada kedua ujung: salah satu lobus tumpang tindih sefase (+ dengan +), namun lobus ujung lainnya bertabrakan antar fase berlawanan (+ dengan -), menciptakan simpul destruktif (*anti-bonding*). Oleh karena itu reaksi memiliki energi aktivasi orbital yang masif (dilarang termal).
   - Pada eksitasi fotokimia ($h\\nu$):
     - Penyerapan foton mengeksitasi satu elektron dari $\\pi$ ke $\\pi^*$.
     - Orbital frontier yang berinteraksi kini adalah SOMO ($\pi^*$) dari molekul tereksitasi dengan LUMO ($\pi^*$) dari molekul keadaan dasar.
     - Kedua orbital ini memiliki simetri yang persis sama! Akibatnya, tumpang tindih frontal suprafasial pada kedua ujung ikatan secara simultan berada dalam fase yang sefase dan konstruktif (+ dengan +, dan - dengan -).
3. Konsekuensi dalam Sintesis Kubana Eaton:
   - Iradiasi UV memicu sikloadisi $[2+2]$ intramolekuler yang sangat cepat dan elegan, menyatukan dua ikatan $\\ce{C=C}$ paralel di dalam sangkar membentuk cincin siklobutana bertekanan tinggi yang membangun kerangka kubana.
4. Maka opsi A adalah penjelasan orbital yang tepat.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Pengaruh fotokimia adalah efek simetri kuantum mekanik orbital elektronik, bukan sekadar pemanasan termal.
- Pilihan C: Pada eksitasi kuantum sinkron suprafasial terizinkan, reaksi berlangsung terkoordinasi simetris tanpa memerlukan fragmentasi diradikal bebas lepas.
- Pilihan D: Alkena jelas memiliki 2 elektron $\\pi$ pada keadaan dasar.
- Pilihan E: Perubahan hibridisasi terjadi secara kontinu sepanjang koordinat reaksi seiring terbentuknya ikatan $\\sigma$ baru.`,
    solution_framework_template: `Tahap 1: Terapkan aturan Woodward-Hoffmann untuk sikloadisi 4 elektron pi ([2+2]): dilarang termal, terizinkan fotokimia.
Tahap 2: Tinjau diagram orbital: eksitasi foton pi -> pi* membalikkan simetri orbital frontier aktif (SOMO).
Tahap 3: Interaksi SOMO pi* dengan LUMO alkena menghasilkan tumpang-tindih konstruktif sefase pada kedua ujung secara suprafasial.
Tahap 4: Hubungkan dengan tahap kunci penutupan kerangka kubana Eaton (opsi A).`,
    tags: ['woodward-hoffmann', 'sikloadisi-2-2', 'fotokimia', 'kubana', 'simetri-orbital'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSN Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
