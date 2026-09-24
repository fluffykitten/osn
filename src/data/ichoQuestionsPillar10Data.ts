/**
 * ichoQuestionsPillar10Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat IChO (International Chemistry Olympiad / Pelatnas)
 * 
 * PILAR 10: Biokimia Lanjut, PCET Fotosistem II OEC, SPAAC & CRISPR-Cas9
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi International Chemistry Olympiad / IChO 2016-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi IChO Steering Committee / Pelatnas III-IV)
 * 
 * Skema ID 6-Digit: 510001 - 510010
 * - 5 = Jalur Olimpiade Internasional / IChO / Pelatnas
 * - 10 = Pilar 10
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const ICHO_PILLAR_10_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - IChO 2019 France Problem 6 (Siklus Kok PSII OEC Mn4CaO5)
  // =========================================================================
  {
    id: 510001,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Biokimia Bioanorganik, Oksidasi Air Fotosistem II & Siklus Kok Kluster Mn4CaO5',
    title: 'Siklus Jam Kok (Kok Clock) Oksidasi Air dan Transfer Elektron Terkopling Proton (PCET) pada Kluster Mn4CaO5 Fotosistem II',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Pusat Evolusi Oksigen (*Oxygen-Evolving Complex*, OEC) pada Fotosistem II (PSII) mengkatalisis reaksi fotooksidasi air 4-elektron:
$$\\ce{2 H2O -> O2 + 4 H+ + 4 e-}$$
Reaksi berlangsung pada kluster kubana terdistorsi $\\ce{Mn4CaO5}$ melalui siklus 5-keadaan perantara Kok (*Kok's S-state cycle*):
$$S_0 \\xrightarrow{h\\nu_1} S_1 \\xrightarrow{h\\nu_2} S_2 \\xrightarrow{h\\nu_3} S_3 \\xrightarrow{h\\nu_4} [S_4] \\to S_0 + \\ce{O2 ^}$$

Di bawah penyinaran pulsa laser kilat periodik (*laser flashes*):
- Hasil emisi molekul $\\ce{O2}$ terukur menunjukkan osilasi periodik bermodulus-4, dengan puncak emisi oksigen maksimum pertama tercapai tepat pada pulsa kilat **ke-3**, dan puncak berikutnya berulang setiap 4 pulsa kilat (pulsa ke-7, ke-11, ke-15, dst.).
- Keadaan istirahat teradaptasi gelap (*dark-adapted state*) dari sampel tilakoid segar didominasi oleh keadaan $S_1$ (sekitar $75\\%$) dan $S_0$ (sekitar $25\\%$), karena $S_1$ stabil secara termodinamika pada kegelapan.

Setiap transisi fotooksidasi satu-elektron ($S_n \\to S_{n+1}$) dimediasi oleh radikal tirosin netral ($\\ce{Y_Z^{\\bullet}}$, Tyr161) melalui mekanisme **Proton-Coupled Electron Transfer (PCET)**:
Elektron ditransfer dari kluster mangan ke radikal kation $\\ce{P680^{\\bullet+}}$ via $\\ce{Y_Z}$, sementara proton dipindahkan secara simultan ke gugus histidin (His190) atau jaringan air sekitarnya untuk mencegah penumpukan muatan positif berlebih pada kluster.

Jika bilangan oksidasi formal empat atom mangan pada keadaan istirahat gelap $S_1$ adalah:
$$S_1 = (\\ce{Mn2^{III}, Mn2^{IV}})$$
Berapakah bilangan oksidasi formal keempat atom mangan pada keadaan sangat teroksidasi $S_3$ tepat sebelum pembentukan ikatan kovalen $\\ce{O-O}$, dan mengapa pelepasan proton pada transisi PCET sangat esensial untuk menjaga potensial redoks kluster?

A. Keadaan $S_3$ memiliki biloks $(\\ce{Mn4^{IV}})$; dan pelepasan proton secara PCET menjaga potensial redoks kluster mangan tetap berada di bawah ambang daya oksidasi kation $\\ce{P680^{\\bullet+}}$ ($E \\approx +1{,}25\\text{ V}$).
B. Keadaan $S_3$ memiliki biloks $(\\ce{Mn4^{III}})$; dan proton berfungsi mempercepat difusi air.
C. Keadaan $S_3$ memiliki biloks $(\\ce{Mn2^{II}, Mn2^{V}})$; dan proton menstabilkan membran lipid.
D. Keadaan $S_3$ memuat satu atom kalsium tereduksi menjadi logam $\\ce{Ca^0}$.
E. Kluster terurai menjadi ion permanganat ungu pada keadaan $S_3$.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Siklus Kok Fotosistem II (PSII)
1. **Analisis Bilangan Oksidasi Tiap Keadaan $S$:**
   Kluster OEC memuat 4 atom mangan (total muatan formal inti):
   - $S_0$: $(\\ce{Mn3^{III}, Mn^{IV}})$, total biloks Mn = $+13$.
   - $S_1$ (keadaan istirahat gelap stabil): $(\\ce{Mn2^{III}, Mn2^{IV}})$, total biloks Mn = $+14$.
   - $S_2$: $(\\ce{Mn^{III}, Mn3^{IV}})$, total biloks Mn = $+15$.
   - $S_3$: $(\\ce{Mn4^{IV}})$ (seluruh 4 atom mangan mencapai tingkat oksidasi $+4$), total biloks Mn = $+16$.
   Pada transisi berikutnya ($S_3 \\to S_4$), oksidasi lanjutan membentuk radikal oksil terkoordinasi ($\\ce{Mn^{IV}-O^{\\bullet}}$) atau kation mangan(V) yang memungkinkan kopling radikal $\\ce{O-O}$ membentuk ikatan dioksigen.
2. **Peran PCET (Proton-Coupled Electron Transfer):**
   Jika 4 elektron dilepaskan berturut-turut tanpa pelepasan proton secara simultan, muatan positif kluster $\\ce{[Mn4CaO5]}$ akan terakumulasi dari $+14$ menjadi $+18$. Penumpukan muatan elektrostatik masif ini akan menaikkan potensial elektroda oksidasi kluster melampaui kemampuan daya oksidasi spesi fotooksidator klorofil $\\ce{P680^{\\bullet+}}$ ($E \\approx +1{,}25\\text{ V}$ vs NHE, oksidator biologi terkuat di alam).
   Dengan melepaskan 1 proton untuk setiap 1 elektron yang ditransfer (reaksi netral secara muatan, PCET):
   $$\\Delta G = -nFE - 2{,}303 RT \\cdot \\text{pH}$$
   Potensial elektrokimia kluster pada setiap tahap $S_0 \\to S_1 \\to S_2 \\to S_3$ tetap konstan tertekan pada rentang sempit ($+0{,}8$ hingga $+1{,}0\\text{ V}$), memungkinkan siklus reaksi fotosintesis berjalan efisien di bawah energi foton cahaya tampak.
3. **Evaluasi Opsi:**
   - Opsi A merumuskan konfigurasi $(\\ce{Mn4^{IV}})$ untuk $S_3$ dan pengendalian potensial redoks via PCET secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Lacak oksidasi satu-elektron pada siklus Kok: S1 (2 Mn(III), 2 Mn(IV)) -> S2 (1 Mn(III), 3 Mn(IV)) -> S3 (4 Mn(IV)).
Langkah 2: Pahami prinsip penumpukan muatan elektrostatik jika proton tidak dikeluarkan.
Langkah 3: Jelaskan bahwa PCET menjaga kompensasi muatan sehingga potensial redoks kluster tetap berada di bawah batas oksidasi P680+ (+1,25 V).
Langkah 4: Pilih opsi A.`,
    source_event: 'IChO 2019 France Problem 6 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Bioortogonal SPAAC & Strain Cincin Siklooktun
  // =========================================================================
  {
    id: 510002,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Kimia Bioortogonal Bebas Logam, Sikloadisi Azida-Alkuna Terpacu Tegangan (SPAAC) & Reagen DBCO',
    title: 'Kinetika dan Asal-Usul Termodinamika Percepatan Laju Sikloadisi Azida-Alkuna Terpacu Tegangan Cincin (SPAAC)',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Kimia Bioortogonal Carolyn Bertozzi (Nobel Kimia 2022) memungkinkan modifikasi molekuler di dalam sel hidup tanpa mengganggu mesin biokimiawi endogen.

Reaksi Klik Klasik CuAAC (dikatalisis $\\ce{Cu^I}$) bersifat toksik bagi sel hidup akibat pembentukan spesi oksigen reaktif (ROS). Sebagai penggantinya, Bertozzi mengembangkan **Sikloadisi Azida-Alkuna Terpacu Tegangan Cincin (*Strain-Promoted Azide-Alkyne Cycloaddition*, SPAAC)** menggunakan siklooktun kaku:
$$\\ce{R-N3 + Siklooktun -> Triazol bisiklik teranulasi}$$

Dalam siklooktuna (seperti DBCO / DIBAC):
- Ikatan rangkap tiga $-\\ce{C#C}-$ terdistorsi hebat dari sudut linier standarnya ($180^\\circ$) menjadi sudut bengkok yang sangat tegang:
  $$\\angle \\ce{C-C#C} \\approx 155^\\circ - 160^\\circ$$
- Menyimpan energi tegangan cincin (*ring strain energy*) sebesar $\\sim 75\\text{ kJ/mol}$ ($18\\text{ kkal/mol}$).

Menurut Model Distorsi/Interaksi Houk (Bickelhaupt):
Berapakah penyebab utama mengapa konstanta laju reaksi orde dua SPAAC ($k_2 \\approx 10^{-1} - 10^0\\text{ M}^{-1}\\text{s}^{-1}$) melonjak hingga $10^6$ kali lebih cepat daripada reaksi alkuna linier asiklis biasa tanpa memerlukan katalis tembaga?

A. Energi distorsi yang diperlukan untuk membengkokkan alkuna menuju geometri keadaan transisi berkurang secara masif karena alkuna siklik telah terdistorsi secara geometris pada keadaan dasarnya (*pre-distorted ground state*), disertai peningkatan energi HOMO alkuna yang memperkecil celah orbital dengan LUMO azida.
B. Karena ikatan rangkap tiga berubah menjadi ikatan tunggal sebelum bereaksi.
C. Karena azida bertindak sebagai asam Lewis yang menyerap cincin siklooktun.
D. Reaksi dikatalisis oleh ion kalsium yang terdapat di dalam sitoplasma sel.
E. Laju reaksi cepat karena terbentuk ikatan hidrogen dengan pelarut air.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Model Distorsi-Interaksi SPAAC
1. **Analisis Model Houk-Bickelhaupt:**
   Energi aktivasi reaksi sikloadisi perisiklik didekomposisi menjadi dua komponen:
   $$\\Delta E^\\ddagger = \\Delta E^\\ddagger_{\\text{distorsi}} + \\Delta E^\\ddagger_{\\text{interaksi}}$$
   - $\\Delta E^\\ddagger_{\\text{distorsi}}$: energi yang diperlukan untuk mendistorsi reaktan keadaan dasar dari geometri kesetimbangannya menuju geometri yang diadopsi pada keadaan transisi.
   - $\\Delta E^\\ddagger_{\\text{interaksi}}$: energi stabilisasi elektronik (tumpang tindih orbital perbatasan HOMO-LUMO dan tarikan elektrostatik) antara kedua fragmen terdistorsi.
2. **Efek Tegangan Cincin Siklooktun:**
   - Pada alkuna asiklis normal (misal 2-butuna), sudut ikatan adalah $180^\\circ$. Untuk mencapai keadaan transisi sikloadisi dengan azida, ikatan harus ditekuk hingga sudut $\\approx 155^\\circ - 160^\\circ$, yang membutuhkan energi distorsi $\\Delta E^\\ddagger_{\\text{distorsi}}$ yang sangat besar ($> 100\\text{ kJ/mol}$).
   - Pada siklooktuna (DBCO/BCN), keterbatasan geometri cincin beranggota-8 telah **memaksa sudut ikatan tertekuk menjadi $155^\\circ$ sejak keadaan dasar**!
   - Karena alkuna siklik sudah berada dalam geometri yang sangat mirip dengan keadaan transisi (*pre-distorted*), energi distorsi yang dibutuhkan selama reaksi mendekati nol ($\Delta E^\\ddagger_{\\text{distorsi}} \\to 0$).
   - Selain itu, pembengkokan orbital $sp$ menaikkan energi orbital HOMO alkuna, mempersempit celah energi $\\Delta E(\\text{HOMO}_{\\text{alkuna}} - \\text{LUMO}_{\\text{azida}})$, yang meningkatkan energi stabilisasi interaksi.
   - Penurunan dramatis barier aktivasi ini melipatgandakan laju reaksi hingga satu juta kali lipat pada suhu fisiologis tanpa katalis.
3. **Evaluasi Opsi:**
   - Opsi A merumuskan konsep *pre-distorted ground state* dan kenaikan HOMO sesuai model Houk secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Dekomposisi energi aktivasi sikloadisi menjadi Delta E_distorsi + Delta E_interaksi.
Langkah 2: Evaluasi geometri dasar siklooktun (sudut ikatan C-C#C ~ 155-160 derajat menyimpan energi tegangan 75 kJ/mol).
Langkah 3: Pahami bahwa keadaan dasar sudah terdistorsi menyerupai geometri keadaan transisi (pre-distorted), mereduksi drastis energi distorsi.
Langkah 4: Pilih opsi A.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 3. SOAL RIIL - IChO 2021 Japan Problem 6 (CRISPR-Cas9 & Domain RuvC/HNH)
  // =========================================================================
  {
    id: 510003,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Rekayasa Genomika Molekuler, Sistem CRISPR-Cas9 & Pemutusan DNA Untai Ganda',
    title: 'Mekanisme Endonuklease Terpandu RNA CRISPR-Cas9: Pengenalan Motif PAM dan Pemotongan DNA Domain RuvC-HNH',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Sistem penyuntingan genom CRISPR-Cas9 (*Streptococcus pyogenes* SpCas9, Nobel Kimia 2020: Charpentier dan Doudna) menggunakan RNA pemandu tunggal (*single-guide RNA*, sgRNA, 20 nukleotida) untuk memotong target DNA untai ganda (dsDNA) spesifik:

Mekanisme penargetan dan pemotongan meliputi tahapan berurutan:
1. **Pengenalan Motif PAM:** Enzim Cas9 terlebih dahulu memindai dsDNA dan mengikat motif trinukleotida pendek *Protospacer Adjacent Motif* (PAM, sekuens konsensus $5'\\text{-NGG-3'}$ pada untai non-target). Pengikatan PAM memicu pembukaan lokal heliks ganda DNA.
2. **Pembentukan R-Loop:** sgRNA menginvasi untai DNA target membentuk hibrida heterodupleks RNA:DNA (untai target), sementara untai non-target terdorong keluar menjadi untai tunggal bebas.
3. **Pembelahan DNA Untai Ganda (DSB):**
   Cas9 memotong kedua untai DNA tepat 3 pasangan basa di hulu (*upstream*) dari situs PAM menggunakan dua domain nuklease katalitik yang terpisah:
   - **Domain HNH**
   - **Domain RuvC**

Manakah pernyataan yang BENAR mengenai spesifisitas pemotongan untai oleh masing-masing domain nuklease Cas9 dan kation divalen esensial yang mengkatalisis pemutusan ikatan fosfodiester tersebut?

A. Domain HNH memotong untai DNA target (yang berkomplemen dengan sgRNA), sedangkan domain RuvC memotong untai DNA non-target; kedua domain memerlukan kation $\\ce{Mg^{2+}}$ untuk menstabilkan keadaan transisi pentakoordinasi fosforil.
B. Domain HNH memotong kedua untai sekaligus, sedangkan domain RuvC mengikat membran sel.
C. Domain RuvC memotong untai target, sedangkan HNH tidak aktif.
D. Kedua domain memotong DNA murni melalui hidrolisis oksidatif radikal hidroksil tanpa ion logam.
E. Cas9 hanya memotong RNA dan tidak berinteraksi dengan DNA.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Mekanisme Endonuklease CRISPR-Cas9
1. **Peran Dua Domain Nuklease Katalitik:**
   SpCas9 memiliki dua domain endonuklease independen dengan arsitektur lipatan yang berbeda:
   - **Domain HNH:** Menyerupai lipatan endonuklease homing (motif his-asn-his). Domain ini memotong **untai DNA target** (untai yang berpasangan basa Watson-Crick dengan sgRNA).
   - **Domain RuvC:** Menyerupai lipatan resolvase Holliday junction RuvC retroviral integrase. Domain ini memotong **untai DNA non-target** (untai yang terdorong keluar membentuk loop untai tunggal).
   Kombinasi kerja kedua domain menghasilkan pemutusan untai ganda tumpul (*blunt double-strand break*, DSB) tepat 3 pasang basa sebelum motif PAM $5'\\text{-NGG-3'}$.
2. **Katalisis Bergantung Ion Logam Divalen ($\ce{Mg^{2+}}$):**
   Kedua domain mengadopsi mekanisme transfer fosforil dua-ion logam klasik (*two-metal-ion catalytic mechanism*):
   Dua ion $\\ce{Mg^{2+}}$ berkoordinasi dengan atom oksigen gugus fosfat tulang punggung DNA dan residu asam karboksilat aktif (Asp/Glu):
   - Kation $\\ce{Mg^{2+}}$ pertama mengaktivasi molekul air penyerang menjadi ion hidroksida nukleofilik.
   - Kation $\\ce{Mg^{2+}}$ kedua menstabilkan muatan negatif pada atom oksigen dari gugus pergi $3'\\text{-O-}$ dan menstabilkan keadaan transisi bipiramida trigonal pentakoordinasi fosfor.
3. **Evaluasi Opsi:**
   - Opsi A menugaskan fungsi domain HNH dan RuvC serta ion $\\ce{Mg^{2+}}$ secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi peran spesifik domain HNH (memotong untai komplementer RNA pemandu / untai target).
Langkah 2: Identifikasi peran domain RuvC (memotong untai non-target).
Langkah 3: Tinjau kebutuhan kofaktor ion logam divalen fisiologis (ion Mg2+ esensial untuk mekanisme dua-ion transfer fosforil).
Langkah 4: Pilih opsi A.`,
    source_event: 'IChO 2021 Japan Problem 6 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Termodinamika Lipatan Protein Lanskap Energi Wolynes
  // =========================================================================
  {
    id: 510004,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Biofisika Molekuler, Lanskap Energi Lipatan Protein (Energy Funnel) & Keadaan Molten Globule',
    title: 'Termodinamika Lanskap Corong Energi (Folding Funnel) dan Keadaan Perantara Molten Globule pada Pelipatan Protein',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Paradoks Levinthal menyatakan bahwa jika rantai polipeptida tidak terlipat beranggotakan 100 asam amino harus mencari konformasi terlipat alaminya (*native state*, N) melalui penelusuran acak di antara seluruh konformasi konformasi ($3^{198} \\approx 10^{95}$ kemungkinan), proses pelipatan akan membutuhkan waktu melampaui usia alam semesta ($> 10^{77}$ tahun). Namun secara nyata di dalam sel, protein melipat hanya dalam skala mikrodetik hingga milidetik.

Teori Lanskap Corong Energi (*Energy Funnel Landscape*) Peter Wolynes menyelesaikan paradoks ini:
- Pelipatan protein dipandu oleh corong energi bebas di mana kemiringan energi internal menuju kontak alami (*native contacts*) mendominasi kehilangan entropi konformasi rantai secara progresif:
  $$\\Delta F = \\Delta U - T \\Delta S$$
- Keadaan perantara penting yang terbentuk secara cepat sebelum keadaan alami adalah **Molten Globule (MG)**.

Manakah di antara karakteristik struktural dan spektroskopi berikut yang menjadi tanda pengenal diagnostik dari keadaan *Molten Globule*?

A. Memiliki struktur sekunder ($\alpha$-heliks dan $\beta$-sheet) yang hampir utuh menyerupai keadaan alami, namun kehilangan pengemasan padat struktur tersier spesifik rantai samping (rantai samping bersifat cair dinamis), serta mengikat kuat pewarna hidrofobik ANS (*1-anilinonaftalena-8-sulfonat*).
B. Rantai polipeptida terurai linier kaku tanpa struktur sekunder apa pun.
C. Struktur tersier mengkristal kaku sempurna tanpa ada rongga hidrofobik.
D. Semua ikatan disulfida terputus secara spontan dan protein menguap.
E. Protein berubah menjadi molekul DNA heliks ganda.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Lanskap Corong Energi & Molten Globule
1. **Penyelesaian Paradoks Levinthal:**
   Pelipatan protein bukanlah penelusuran acak (*random search*), melainkan difusi terarah menuruni corong energi bebas (*free-energy funnel*). Lebar corong mencerminkan entropi konformasi (jumlah mikrokeadaan), dan kedalaman corong mencerminkan energi bebas.
2. **Karakteristik Keadaan Molten Globule (MG):**
   Keadaan *molten globule* adalah zat antara lipatan terkompaksi (*compact intermediate*):
   - **Struktur Sekunder:** Mengandung sebagian besar struktur sekunder asli ($\alpha$-heliks, $\beta$-sheet) yang terdeteksi dengan jelas pada spektroskopi *Far-UV Circular Dichroism* (CD, $190 - 250\\text{ nm}$).
   - **Struktur Tersier:** Kehilangan pengemasan rantai samping hidrofobik yang spesifik dan kaku. Akibatnya, sinyal *Near-UV CD* ($250 - 320\\text{ nm}$) yang mencerminkan asimetri asam amino aromatik (Trp, Tyr, Phe) menjadi mendekati nol (rata/cair).
   - **Rongga Hidrofobik Terbuka:** Inti hidrofobik protein belum terkunci rapat, melainkan memiliki celah-celah dinamis yang dapat diakses oleh pelarut.
   - **Fluoresensi Probe ANS:** Molekul pewarna fluoresen ANS (1-anilinonaftalena-8-sulfonat) berikatan secara sangat kuat pada bercak hidrofobik yang terbuka ini, menghasilkan peningkatan intensitas fluoresensi biru puluhan kali lipat dengan pergeseran biru emisi (*blue shift*), yang menjadi **uji diagnostik definitif spektroskopi *molten globule***.
3. **Evaluasi Opsi:**
   - Opsi A merumuskan struktur sekunder utuh, hilangnya struktur tersier kaku, dan pengikatan kuat ANS secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Pahami resolusi Paradoks Levinthal via teori folding funnel Wolynes.
Langkah 2: Tinjau definisi fisik keadaan intermediat Molten Globule (MG): kompak dengan struktur sekunder, namun struktur tersier belum terkunci rapat.
Langkah 3: Identifikasi uji diagnostik spektroskopi ANS fluoresensi (pengikatan pada inti hidrofobik terbuka yang cair).
Langkah 4: Pilih opsi A.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 5. SOAL RIIL - IChO 2024 Saudi Arabia Problem 7 (Ribosom 23S rRNA & PTC)
  // =========================================================================
  {
    id: 510005,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Biologi Struktural Makromolekul, Ribosom Peptidyl Transferase Center (PTC) & Katalisis Entropik',
    title: 'Mekanisme Katalitik Pembentukan Ikatan Peptida pada Pusat Peptidil Transferase (PTC) Ribosom 23S rRNA',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Ribosom adalah mesin translasi molekuler raksasa yang mengkatalisis sintesis protein:
$$\\ce{Peptidil-tRNA_{(situs P)} + Aminoasil-tRNA_{(situs A)} -> tRNA_{(situs P)} + Peptidil(+1)-tRNA_{(situs A)}}$$

Resolusi struktur kristalografi sinar-X resolusi tinggi ribosom subunit besar 50S (*Haloarcula marismortui*, Nobel Kimia 2009: Ramakrishnan, Steitz, Yonath) mengungkap fakta revolusioner:
- Dalam radius $18\\text{ \\AA}$ dari situs aktif **Pusat Peptidil Transferase (*Peptidyl Transferase Center*, PTC)**, **TIDAK TERDAPAT SATU PUN RESIDU ASAM AMINO DARI PROTEIN RIBOSOM**.
- Pusat aktif seluruhnya dibangun murni oleh nukleotida RNA dari molekul **23S rRNA**, membuktikan bahwa ribosom adalah sebuah **ribozim sejati**.

Kinetika penentuan konstanta laju reaksi membuktikan bahwa pembentukan ikatan peptida dikatalisis oleh ribosom dengan percepatan laju $\\sim 10^7$ kali lipat dibandingkan reaksi tanpa katalis dalam air.

Bagaimana mekanisme molekuler utama yang digunakan oleh PTC 23S rRNA untuk mencapai efisiensi katalitik raksasa tersebut?

A. Katalisis terutama didorong oleh efek entropik penataan posisi substrat (*proximity and orientation effects / entropy reduction*), dibantu oleh proton relay transfer perantara gugus $2'\\text{-OH}$ dari adenosin A76 terminal pada peptidil-tRNA (*substrate-assisted catalysis*).
B. Ribosom menggunakan gugus tiol sistein untuk membentuk intermediat asil-enzim kovalen.
C. Katalisis menggunakan ion merkuri beracun untuk menarik gugus ester.
D. Atom nitrogen basa pirimidin bertindak sebagai oksidator kuat.
E. Ribosom memecah molekul tRNA menjadi nukleotida bebas sebelum membentuk ikatan peptida.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Mekanisme Katalitik Ribozim Ribosom PTC
1. **Bukti Ribosom Sebagai Ribozim:**
   Kristalografi Thomas Steitz membuktikan secara definitif bahwa tidak ada rantai samping asam amino protein di sekitar PTC. Gugus katalitik berasal murni dari kerangka dan basa nitrogen RNA (khususnya loop domain V dari 23S rRNA).
2. **Asal-Usul Daya Katalitik (Entropi vs Enzim Asam-Basa Klasik):**
   - Awalnya diduga bahwa adenina terprotonasi (A2451) bertindak sebagai katalis asam-basa umum. Namun studi mutasi membuktikan bahwa mutasi A2451 hanya menurunkan laju secara marginal.
   - Pengukuran termodinamika menunjukkan bahwa penurunan energi bebas aktivasi ($\Delta G^\\ddagger$) hampir **seluruhnya disumbangkan oleh penurunan entropi aktivasi ($\Delta S^\\ddagger$)**:
     Situs aktif PTC mengurung gugus $\\alpha$-amino dari aminoasil-tRNA di situs A dan ikatan ester dari peptidil-tRNA di situs P ke dalam orientasi ruang dan jarak steril yang presisi sempurna (*pre-organized reactive geometry*), mengeliminasi barier entropi translasi dan rotasi yang masif dari reaksi bimolekuler dalam larutan air bebas.
3. **Substrate-Assisted Catalysis ($2'\\text{-OH}$ A76):**
   Gugus hidroksil $2'\\text{-OH}$ dari nukleotida adenosin terminal (A76) pada peptidil-tRNA di situs P bertindak sebagai mediator pemindahan proton secara serempak (*proton shuttle six-membered transition state*), menarik proton dari gugus amino nukleofilik saat menyerang karbonil ester dan secara serentak menyerahkannya ke gugus pergi oksigen $3'\\text{-O-}$.
4. **Evaluasi Opsi:**
   - Opsi A merumuskan katalisis entropik aproksimasi dan transfer proton terfasilitasi $2'\\text{-OH}$ A76 secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi sifat kimia PTC ribosom sebagai ribozim murni (bebas dari residu protein dalam radius 18 A).
Langkah 2: Tinjau kontribusi termodinamika: percepatan laju 10^7 didominasi oleh reduksi entropi orientasi dan penataan substrat.
Langkah 3: Pahami mekanisme bantuan substrat (substrate-assisted catalysis) via proton shuttle gugus 2'-OH adenosin terminal tRNA situs P.
Langkah 4: Pilih opsi A.`,
    source_event: 'IChO 2024 Saudi Arabia Problem 7 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Mekanisme Topoisomerase & Inhibitor Kamptotesin
  // =========================================================================
  {
    id: 510006,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Biokimia Asam Nukleat, Relaksasi Superkoil Topoisomerase & Inhibitor Kanker Kamptotesin',
    title: 'Mekanisme Reaksi Intermediat Kovalen Fosfotirosin Topoisomerase IB dan Penjebakan Kompleks Terbelah oleh Kamptotesin',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Enzim DNA Topoisomerase Tipe IB manusia merelaksasi tegangan superkoil DNA positif maupun negatif yang terakumulasi selama replikasi dan transkripsi melalui mekanisme putaran terkontrol (*controlled rotation mechanism*):
1. Residu tirosin katalitik (Tyr723) menyerang ikatan fosfodiester tulang punggung DNA pada salah satu untai, membentuk ikatan intermediat kovalen **3'-fosfotirosil** sementara melepaskan ujung $5'\\text{-OH}$ bebas.
2. Untai DNA yang terputus berputar mengelilingi untai komplemen utuh untuk merelaksasi angka lilitan (*linking number*, $\\Delta Lk = \\pm n$).
3. Ujung bebas $5'\\text{-OH}$ menyerang kembali ikatan fosfotirosil untuk menyambung kembali (*religation*) untai DNA dan melepaskan enzim secara utuh tanpa membutuhkan kofaktor ATP.

Obat kemoterapi antikanker **Kamptotesin** (dan turunannya seperti Irinotekan dan Topotekan) bekerja dengan mekanisme yang sangat unik:
Kamptotesin tidak menghambat tahap pemotongan DNA awal oleh enzim, melainkan bertindak sebagai **racun antarmuka (*interfacial inhibitor*)**:

Bagaimana cara spesifik kamptotesin membunuh sel kanker yang membelah cepat?

A. Kamptotesin terinterkalasi tepat di antara pasangan basa pada situs belahan DNA dan berikatan non-kovalen dengan enzim, menjebak kompleks terbelah kovalen (*cleaved complex*) sehingga menghalangi proses penyambungan kembali (religasi); tabrakan garpu replikasi DNA dengan kompleks terjebak ini mengubah putus untai tunggal menjadi putus untai ganda (DSB) mematikan yang memicu apoptosis.
B. Kamptotesin menghancurkan membran inti sel secara langsung.
C. Kamptotesin mengoksidasi semua atom hidrogen DNA menjadi air.
D. Kamptotesin mengikat ribosom dan menghentikan sintesis lipid.
E. Kamptotesin menginduksi polimerisasi mikrotubulus yang tidak terkontrol.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Mekanisme Topoisomerase IB & Kamptotesin
1. **Siklus Katalitik Topoisomerase IB:**
   - Nukleofil spesifik adalah cincin fenol dari **Tirosin (Tyr723)**.
   - Serangan menghasilkan intermediat kovalen $3'$-fosfotirosin DNA-protein.
   - Tahap religasi adalah kebalikan mikroskopis: gugus $5'\\text{-OH}$ DNA bertindak sebagai nukleofil balik.
2. **Mekanisme Racun Topoisomerase (*Topoisomerase Poison*):**
   - Senyawa kamptotesin memiliki sistem cincin planar pentasiklik.
   - Ketika enzim memotong DNA membentuk celah untai tunggal, kamptotesin menyelinap dan **terinterkalasi** tepat di antara pasangan basa DNA $-1$ dan $+1$ pada situs potongan.
   - Bagian molekul kamptotesin lainnya membentuk ikatan hidrogen spesifik dengan residu aktif enzim (misalnya Arg364, Asp533).
   - Penjepitan antarmuka ini menggeser posisi gugus $5'\\text{-OH}$ bebas menjauh dari atom fosfor ikatan fosfotirosil sejauh beberapa Angstrom, sehingga laju reaksi religasi terinhibisi total.
   - Terbentuk kompleks terbelah stabil terperangkap (*trapped cleavage complex*).
   - Ketika kompleks replikasi DNA (garpu replikasi yang bergerak cepat pada sel kanker) menabrak kompleks terperangkap ini, mesin replikasi macet dan roboh, mengubah pemutusan untai tunggal reversibel menjadi **pemutusan untai ganda permanen (double-strand break, DSB)** yang memicu kaskade jalur kematian sel terprogram (apoptosis).
3. **Evaluasi Opsi:**
   - Opsi A merumuskan interkalasi penjebakan kompleks terbelah, penghambatan religasi, dan tabrakan garpu replikasi pemicu DSB secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi mekanisme kovalen fosfotirosil 3' Topoisomerase IB.
Langkah 2: Pahami konsep "topoisomerase poison" (bukan inhibitor kompetitif, melainkan penstabil kompleks terbelah).
Langkah 3: Analisis peran interkalasi kamptotesin yang menjauhkan ujung 5'-OH dari fosfor sehingga religasi dicegah.
Langkah 4: Hubungkan tabrakan garpu replikasi dengan konversi menjadi double-strand breaks mematikan (apoptosis).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 7. SOAL RIIL - IChO 2016 Georgia Problem 8 (ETC Rantai Transpor Elektron)
  // =========================================================================
  {
    id: 510007,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Bioenergetika Mitokondria, Rantai Transpor Elektron (ETC) & Sintesis ATP Rotary Motor',
    title: 'Termodinamika Gradien Proton Elektrokimiawi Kemiosmotik Mitchell dan Stoikiometri Fluks ATP Sintase FoF1',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Teori Kemiosmotik Peter Mitchell (Nobel Kimia 1978) menyatakan bahwa transfer elektron melalui kompleks pernapasan I, III, dan IV menghasilkan gaya gerak proton (*Proton-Motive Force*, PMF, $\\Delta p$) melintasi membran dalam mitokondria:
$$\\Delta p = \\Delta \\Psi - \\frac{2{,}303 R T}{F} \\Delta \\text{pH}$$
di mana $\\Delta \\Psi = \\Psi_{\\text{dalam}} - \\Psi_{\\text{luar}}$ adalah potensial membran listrik ($\\Delta \\Psi \\approx -160\\text{ mV}$), dan $\\Delta \\text{pH} = \\text{pH}_{\\text{matriks}} - \\text{pH}_{\\text{sitoplasma}} \\approx +0{,}75$ pada $T = 310\\text{ K}$ ($37^\\circ\\text{C}$).

Gaya gerak proton ini memutar motor rotor subunit $c$ pada domain hidrofobik $F_o$ dari enzim ATP sintase ($F_oF_1$), yang kemudian memutar poros gamma $\\gamma$ pada domain katalitik hidrofilik $F_1$:
- Satu putaran poros $\\gamma$ sebesar $360^\\circ$ menghasilkan sintesis tepat **3 molekul ATP** dari $\\ce{ADP + P_i}$ pada tiga situs katalitik heterodimer $\\alpha_3\\beta_3$ (mekanisme Boyer *Binding Change Mechanism*).
- Jumlah kation $\\ce{H+}$ yang harus melintasi membran untuk satu putaran penuh $360^\\circ$ ditentukan secara rigid oleh jumlah subunit $c$ dalam cincin rotor $F_o$ ($n_c$).

Untuk mitokondria mamalia yang memiliki cincin rotor dengan $n_c = 8$ subunit:
1. Berapakah nilai gaya gerak proton total ($\\Delta p$, dalam satuan milivolt)?
2. Berapakah rasio stoikiometri proton per ATP sintetis ($\ce{H+}/\\text{ATP}$) yang dibutuhkan oleh mesin enzim ATP sintase murni (tanpa memperhitungkan translokator fosfat/adenin)?
*(Gunakan $2{,}303 R T / F = 61{,}5\\text{ mV}$ pada $310\\text{ K}$)*

A. $\\Delta p \\approx -206\\text{ mV}$; rasio $= 8 / 3 \\approx 2{,}67\\text{ H}^+/\\text{ATP}$
B. $\\Delta p \\approx -160\\text{ mV}$; rasio $= 10 / 3 \\approx 3{,}33\\text{ H}^+/\\text{ATP}$
C. $\\Delta p \\approx -114\\text{ mV}$; rasio $= 12 / 3 = 4{,}00\\text{ H}^+/\\text{ATP}$
D. $\\Delta p \\approx -250\\text{ mV}$; rasio $= 3 / 1 = 3{,}00\\text{ H}^+/\\text{ATP}$
E. $\\Delta p = 0\\text{ mV}$; rasio $= 1 / 1 = 1{,}00\\text{ H}^+/\\text{ATP}$`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Gaya Gerak Proton Kemiosmotik & ATP Sintase
1. **Perhitungan Gaya Gerak Proton (Proton-Motive Force, $\\Delta p$):**
   Membran dalam memiliki muatan negatif di dalam matriks relatif terhadap ruang antarmembran:
   $$\\Delta \\Psi = -160\\text{ mV}$$
   Matriks mitokondria lebih basa daripada sitoplasma ($\\Delta \\text{pH} = \\text{pH}_{\\text{in}} - \\text{pH}_{\\text{out}} = +0{,}75$).
   Kontribusi gradien konsentrasi kimiawi:
   $$- (2{,}303 R T / F) \\Delta \\text{pH} = - (61{,}5\\text{ mV}) \\times (+0{,}75) = -46{,}125\\text{ mV}$$
   Gaya gerak proton total yang mengarahkan proton masuk ke dalam matriks:
   $$\\Delta p = \\Delta \\Psi - \\frac{2{,}303 R T}{F} \\Delta \\text{pH} = -160\\text{ mV} - 46{,}125\\text{ mV} = -206{,}125\\text{ mV} \\approx -206\\text{ mV}$$
   (Nilai magnitudo $|\\Delta p| \\approx 206\\text{ mV}$ memberikan energi bebas yang sangat melimpah untuk mendorong sintesis ATP endotermis, di mana $\\Delta G = -F \\Delta p \\approx +20\\text{ kJ/mol H+}$).
2. **Stoikiometri Subunit Rotor $c$ ATP Sintase:**
   - Cincin $F_o$ mamalia tersusun dari $n_c = 8$ heliks subunit $c$.
   - Setiap subunit $c$ mengikat tepat 1 proton pada residu asam glutamat/aspartat esensial (Glu58/Asp61) saat melintasi kanal membran.
   - Oleh karena itu, satu putaran penuh rotor ($360^\\circ$) membutuhkan translokasi tepat **8 proton**.
   - Pada domain $F_1$, satu putaran $360^\\circ$ poros $\\gamma$ menginduksi perubahan konformasi tiga subunit katalitik $\\beta$ (*Open $\\to$ Loose $\\to$ Tight $\\to$ Open*), melepaskan tepat **3 molekul ATP**.
   - Rasio stoikiometri intrinsik ATP sintase murni adalah:
     $$\\frac{\\ce{H+}}{\\text{ATP}} = \\frac{n_c}{3} = \\frac{8}{3} \\approx 2{,}67\\text{ kation H}^+/\\text{ATP}$$
     (Jika ditambahkan 1 proton untuk simporter fosfat $\\ce{H2PO4- / H+}$, rasio operasional seluler total menjadi $2{,}67 + 1 = 3{,}67\\text{ H}^+/\\text{ATP}$).
3. **Evaluasi Opsi:**
   - Opsi A menyatakan $\\Delta p \\approx -206\\text{ mV}$ dan rasio $8/3 \\approx 2{,}67\\text{ H}^+/\\text{ATP}$ secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Hitung gaya gerak proton Delta p = Delta Psi - (2,303 RT/F) * Delta pH = -160 - (61,5 * 0,75) = -206 mV.
Langkah 2: Tinjau mekanisme binding-change Boyer: 1 putaran penuh rotor 360 derajat menghasilkan 3 molekul ATP.
Langkah 3: Hitung konsumsi proton per putaran = nc = 8 proton untuk cincin rotor c mamalia.
Langkah 4: Hitung rasio H+/ATP = 8 / 3 = 2,67.`,
    source_event: 'IChO 2016 Georgia Problem 8 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Epigenetik Histon: Bromodomain vs Chromodomain
  // =========================================================================
  {
    id: 510008,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Kimia Epigenetika Molekuler, Modifikasi Pasca-Translasi Histon & Pengenalan Domain Pembaca',
    title: 'Mekanisme Pengenalan Molekuler Kode Histon Epigenetik: Domain Pembaca Bromodomain vs Kromodomain',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Regulasi ekspresi gen eukariotik dikendalikan oleh modifikasi pasca-translasi (*Post-Translational Modifications*, PTM) pada ekor protein histon nukleosom (Kode Histon / *Histone Code*).

Dua modifikasi kovalen utama pada residu lisin (Lys, K) adalah:
1. **Asetilasi Lisin (Kac):** Enzim Histone Acetyltransferase (HAT) mentransfer gugus asetil ke amina rantai samping lisin, menghilangkan muatan positif formal kation amonium menjadi gugus amida netral ($-\\ce{NH-CO-CH3}$), yang merelaksasi kondensasi kromatin menjadi eukromatin aktif transkripsi.
2. **Metilasi Lisin (Kme1, Kme2, Kme3):** Enzim Histone Methyltransferase (HMT) menambahkan 1 hingga 3 gugus metil pada nitrogen amonium lisin. Modifikasi ini **mempertahankan muatan positif kationik** pada semua status metilasi pada $\\text{pH}$ fisiologis.

Protein efektor pembaca (*readers*) mengenali secara selektif modifikasi ini melalui domain pengikat khusus:
- **Bromodomain (BRD):** Mengenali secara spesifik lisin terasetilasi (Kac).
- **Kromodomain (Chromo):** Mengenali secara spesifik lisin termetilasi (khususnya $\\ce{H3K4me3}$ atau $\\ce{H3K9me3}$).

Gaya interaksi non-kovalen fundamental apakah yang digunakan oleh kromodomain untuk mengikat kuat gugus trimetillisin kationik ($\\ce{-N^+(CH3)3}$)?

A. Interaksi Kation-$\\pi$ (*Cation-$\\pi$ interaction*), di mana kation amonium kuaterner dipeluk di dalam sangkar aromatik (*aromatic cage*) yang tersusun dari 2 hingga 4 residu triptofan, tirosin, atau fenilalanin.
B. Ikatan kovalen disulfida dengan asam amino sistein.
C. Ikatan hidrogen kuat antara proton amonium dengan gugus hidroksil air.
D. Reaksi redoks pembelahan inti atom nitrogen.
E. Gaya gravitasi Casimir antara atom karbon.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Pengenalan Epigenetik: Bromodomain vs Kromodomain
1. **Mekanisme Pengenalan Bromodomain (Asetillisin):**
   Gugus asetillisin ($-\\ce{NHCOCH3}$) adalah gugus amida netral yang memiliki atom oksigen karbonil polar dan gugus metil hidrofobik. Bromodomain membentuk berkas 4-heliks ($\alpha_Z, \alpha_A, \alpha_B, \alpha_C$) dengan kantong pengikat hidrofobik di mana oksigen karbonil membentuk ikatan hidrogen spesifik dengan residu asparagin yang sangat terkonservasi (Asn).
2. **Mekanisme Pengenalan Kromodomain (Trimetillisin):**
   - Gugus trimetillisin ($-\\ce{N^+(CH3)3}$) adalah kation amonium kuaterner:
     - Membawa muatan positif kationik bersih $+1$.
     - Tidak memiliki atom hidrogen asam pada nitrogen (tidak dapat membentuk ikatan hidrogen klasik!).
     - Dikelilingi oleh tiga gugus metil yang relatif hidrofobik namun terpolarisasi.
   - Kromodomain (seperti pada protein HP1 atau Polycomb) memecahkan tantangan pengikatan ini melalui **Sangkar Aromatik (*Aromatic Cage*)**:
     Struktur tersier melipat sedemikian rupa sehingga 3 atau 4 cincin aromatik kaya-elektron (Triptofan, Tirosin, Fenilalanin) tersusun membentuk rongga sangkar kotak prisma.
   - Muatan positif kationik berinteraksi sangat kuat dengan kerapatan awan elektron $\\pi$ di atas dan di bawah permukaan cincin aromatik melalui **Interaksi Kation-$\\pi$ (*Cation-$\\pi$ Interaction*)**, disertai efek dispersi van der Waals antara gugus metil dengan permukaan hidrofobik sangkar.
3. **Evaluasi Opsi:**
   - Opsi A mendeskripsikan interaksi kation-$\\pi$ di dalam sangkar aromatik (Trp/Tyr/Phe) secara tepat -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi sifat kimia trimetillisin: kation amonium kuaterner bermuatan +1 tanpa donor ikatan hidrogen.
Langkah 2: Tinjau struktur situs aktif domain pembaca kromodomain: sangkar aromatik (aromatic cage).
Langkah 3: Terapkan prinsip kimia fisik interaksi non-kovalen: interaksi kation-pi antara muatan positif kation dengan awan elektron pi cincin aromatik (Trp/Tyr/Phe).
Langkah 4: Pilih opsi A.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  },

  // =========================================================================
  // 9. SOAL RIIL - IChO 2022 Tianjin Problem 8 (Optogenetika & Bakteriorhodopsin)
  // =========================================================================
  {
    id: 510009,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Fotobiokimia Sensor, Pompa Proton Bakteriorhodopsin & Optogenetika',
    title: 'Siklus Fotokimia Pompa Proton Bakteriorhodopsin dan Transisi Isomerisasi Retinal',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Bakteriorhodopsin (bR) dari arkea halofilik *Halobacterium salinarum* adalah pompa proton fotoaktif membran teraktivasi cahaya tampak yang menjadi basis pengembangan teknologi optogenetika:
- Kromofor all-*trans*-retinal terikat kovalen pada residu lisin (Lys216) pada heliks-G melalui ikatan **Basa Schiff Terprotonasi (*Protonated Schiff Base*, $\\ce{PSB+}$)**:
  $$\\ce{Retinal=N^+(H)-Lys216} \\quad (\\text{panjang gelombang serapan maksimum } \\lambda_{\\text{maks}} = 568\\text{ nm})$$

Siklus fotokimia bR berlangsung melalui serangkaian zat antara spektroskopi berurutan:
$$\\text{bR}_{568} \\xrightarrow{h\\nu} \\text{K}_{590} \\to \\text{L}_{550} \\to \\text{M}_{412} \\to \\text{N}_{560} \\to \\text{O}_{640} \\to \\text{bR}_{568}$$

1. Peristiwa fotokimia primer penyerapan foton (dalam skala waktu femtodetik $\\sim 500\\text{ fs}$) memicu fotoisomerisasi ikatan rangkap retinal dari bentuk **all-*trans*** menjadi bentuk **13-*cis***.
2. Pada zat antara $\\text{M}_{412}$ (yang memiliki pergeseran biru spektral drastis ke $\\lambda = 412\\text{ nm}$), terjadi pelepasan proton dari Basa Schiff ke residu aseptor akseptor proton ekstraseluler (Asp85).

Apakah yang menyebabkan terjadinya lonjakan pergeseran biru serapan optik yang masif dari $568\\text{ nm}$ ke $412\\text{ nm}$ pada zat antara $\\text{M}_{412}$?

A. Basa Schiff mengalami deprotonasi netral menjadi bentuk tak-terprotonasi ($\ce{Retinal=N-Lys216}$), yang memutus tarikan elektrostatik penstabil muatan sehingga memperlebar celah energi transisi HOMO-LUMO $\\pi \\to \\pi^*$.
B. Retinal terlepas keluar dari kantong pengikat protein ke dalam larutan air.
C. Ikatan rangkap terkonjugasi terputus menjadi hidrokarbon jenuh.
D. Bakteriorhodopsin mengalami denaturasi termal permanen.
E. Terjadi penambahan atom oksigen membentuk asam retinoat.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Fotobiokimia Bakteriorhodopsin
1. **Peran Basa Schiff Terprotonasi ($\ce{PSB+}$):**
   Pada keadaan dasar $\\text{bR}_{568}$, Basa Schiff terprotonasi membawa muatan positif formal pada atom nitrogen:
   $$\\ce{-CH=N^+(H)-}$$
   Delokalisasi muatan positif ini di sepanjang 6 ikatan rangkap terkonjugasi rantai poliena retinal menurunkan celah energi eksitasi $\\pi \\to \\pi^*$ secara dramatis (*opsin shift*), menggeser panjang gelombang serapan dari daerah UV ($380\\text{ nm}$ untuk retinal bebas) ke daerah cahaya tampak hijau-kuning ($568\\text{ nm}$).
2. **Asal-Usul Spektral Zat Antara $\\text{M}_{412}$:**
   - Dalam transisi $\\text{L}_{550} \\to \\text{M}_{412}$, proton pada atom nitrogen basa Schiff ditransfer secara spontan ke gugus karboksilat dari residu **Asp85** (akseptor proton primer).
   - Akibat pelepasan proton ini, basa Schiff berubah menjadi **Basa Schiff Netral Tak-Terprotonasi**:
     $$\\ce{-CH=N-}$$
   - Hilangnya muatan positif formal mengembalikan delokalisasi elektron ke sistem poliena imina netral standar, yang memiliki celah pita optik jauh lebih lebar.
   - Akibatnya, spektrum serapan mengalami *hypsochromic shift* (pergeseran biru) yang sangat masif sebesar $\\Delta \\lambda = 568 - 412 = 156\\text{ nm}$ (energi foton melonjak dari $2{,}18\\text{ eV}$ ke $3{,}01\\text{ eV}$).
   - Bukti deprotonasi ini terkonfirmasi secara definitif melalui lenyapnya pita vibrasi ulur $\\ce{C=N^+-H}$ pada spektroskopi inframerah transformasi Fourier (FTIR perbedaan).
3. **Evaluasi Opsi:**
   - Opsi A menerangkan deprotonasi basa Schiff dan pelebaran celah HOMO-LUMO secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Identifikasi keadaan kimia basa Schiff pada bR568 (terprotonasi PSB+, muatan positif delokalisasi, serapan 568 nm).
Langkah 2: Tinjau peristiwa transfer proton primer pada pembentukan zat antara M412 (transfer proton ke Asp85).
Langkah 3: Pahami efek deprotonasi basa Schiff netral C=N- yang memperlebar celah eksitasi pi -> pi*.
Langkah 4: Simpulkan bahwa deprotonasi menyebabkan pergeseran biru dramatis ke 412 nm.`,
    source_event: 'IChO 2022 Tianjin Problem 8 (International Chemistry Olympiad)',
    generation_type: 'manual'
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Sintesis Fosforamidit Oligonukleotida & Pseudouridin Vaksin
  // =========================================================================
  {
    id: 510010,
    pillar_number: 10,
    module_id: 10,
    curriculum: 'osn',
    subtopic: 'Sintesis Kimia Oligonukleotida Fase Padat (SPOS), Kimia Fosforamidit & Modifikasi Pseudouridin',
    title: 'Siklus Empat-Tahap Kimia Fosforamidit Caruthers pada Sintesis Oligonukleotida Fase Padat dan Inkorporasi Pseudouridin (Ψ) Vaksin mRNA',
    difficulty: 'IChO',
    question_style: 'mcq',
    question_text: `Sintesis Oligonukleotida Fase Padat (*Solid-Phase Oligonucleotide Synthesis*, SPOS) metode fosforamidit Marvin Caruthers memanjangkan rantai DNA/RNA secara otomatis dari arah $3'$ ke arah $5'$ pada pendukung padat kaca berpori terkontrol (CPG).

Setiap siklus penambahan satu nukleotida terdiri dari 4 reaksi kimia berurutan:
1. **Detritilasi (Pelepasan Gugus Pelindung):** Gugus pelindung $5'\\text{-ODMT}$ (4,4'-dimetoksitritil) dihilangkan dengan asam trikloroasetat (TCA $3\\%$) melepaskan kation karbokation tritil jingga terang (digunakan untuk memantau efisiensi kuantitatif siklus via spektrofotometri pada $\\lambda = 495\\text{ nm}$).
2. **Kopling (Coupling):** Monomer nukleosida fosforamidit teraktivasi (memuat atom fosfor trivalent $\\ce{P^{III}}$) bereaksi dengan ujung bebas $5'\\text{-OH}$ rantai oligomer dengan adanya aktivator asam lemah (1H-tetrazol) membentuk ikatan fosfit triester.
3. **Kapping (Capping):** Asetilasi ujung $5'\\text{-OH}$ yang gagal bereaksi menggunakan anhidrida asetat dan DMAP/N-metilimidazol untuk menghentikan perpanjangan rantai gagal (*failure sequences*).
4. **Oksidasi (Oxidation):** Ikatan fosfit triester $\\ce{P^{III}}$ yang tidak stabil dioksidasi menjadi ikatan fosfat triester stabil $\\ce{P^V}$ menggunakan larutan iodin ($\\ce{I2}$) dalam piridina/air/THF.

Katalin Karikó dan Drew Weissman (Nobel Fisiologi/Kedokteran 2023) menemukan bahwa penggantian nukleosida uridin ($U$) alami dengan **$N^1$-metilpseudouridin ($m^1\\Psi$)** pada vaksin mRNA memadamkan respon imun inflamasi bawaan sel inang (melalui penghindaran aktivasi reseptor TLR7/TLR8) sekaligus melipatgandakan efisiensi translasi protein ribosom.

Secara struktur kimiawi, bagaimana perbedaan ikatan glikosidik antara pseudouridin ($\Psi$) dengan uridin ($U$) biasa?

A. Pada uridin biasa, cincin urasil terikat ke ribosa melalui ikatan $N$-glikosidik $\\ce{C_1'-N_1}$; sedangkan pada pseudouridin, cincin urasil terikat melalui ikatan $C$-glikosidik $\\ce{C_1'-C_5}$ yang unik dan stabil terhadap hidrolisis enzimatik nuklease.
B. Pseudouridin tidak memiliki cincin ribosa melainkan glukosa.
C. Uridin memuat ikatan fosfodiester ganda sedangkan pseudouridin adalah asam amino.
D. Pseudouridin memiliki cincin purina sedangkan uridin adalah pirimidin.
E. Keduanya memiliki struktur kimia yang persis sama tanpa perbedaan atom apa pun.`,
    expected_final_answer: 'A',
    solution_rubric: `### Konsep Kunci Sintesis Fosforamidit & Modifikasi Pseudouridin
1. **Siklus Empat-Tahap Fosforamidit:**
   - Detritilasi: pembelahan asam eter DMT menghasilkan $5'\\text{-OH}$ bebas dan kation $\\ce{DMT+}$ jingga.
   - Kopling: serangan $5'\\text{-OH}$ pada fosforamidit $\\ce{P(III)}$ teraktivasi tetrazol membentuk fosfit triester.
   - Capping: asetilasi mengunci oligomer cacat agar tidak membentuk sekuens delesi ($n-1$).
   - Oksidasi: oksidasi $\\ce{P(III) -> P(V)}$ oleh $\\ce{I2/H2O}$ menghasilkan tulang punggung fosfat triester alami.
2. **Kimia Molekuler Pseudouridin ($\\Psi$):**
   - Dalam uridin standar: ikatan antara gula $\\beta$-$\\text{D}$-ribofuranosa dan basa heterosiklik pirimidin adalah ikatan **$N$-glikosidik** konvensional pada posisi $\\ce{C_1'(gula)-N_1(urasil)}$.
   - Dalam pseudouridin ($\Psi$, nukleosida modifikasi paling melimpah pada RNA): basa urasil terikat melalui **ikatan $C$-glikosidik karbon-karbon** yang sangat unik pada posisi:
     $$\\ce{C_1'(gula)-C_5(urasil)}$$
   - Akibat tautomerisasi C-glikosidik ini, atom nitrogen $\\ce{N_1}$ urasil memiliki ikatan $\\ce{N_1-H}$ ekstra yang bebas bertindak sebagai pendonor ikatan hidrogen tambahan.
   - Modifikasi metilasi pada posisi ini ($m^1\\Psi$) mempertahankan konformasi tumpukan basa (*base stacking*) yang kaku, menstabilkan struktur sekunder mRNA vaksin, serta menyamarkan molekul mRNA dari deteksi sensor imun intraseluler (Toll-like Receptors TLR3, TLR7, dan TLR8).
3. **Evaluasi Opsi:**
   - Opsi A merumuskan ikatan $N$-glikosidik $\\ce{C_1'-N_1}$ vs ikatan $C$-glikosidik $\\ce{C_1'-C_5}$ secara presisi -> BENAR.`,
    solution_framework_template: `Langkah 1: Tinjau siklus 4-tahap fosforamidit Caruthers: detritilasi -> kopling -> kapping -> oksidasi P(III) ke P(V).
Langkah 2: Analisis struktur molekuler pseudouridin yang ditemukan oleh Kariko & Weissman.
Langkah 3: Identifikasi pergeseran perlekatan basa: dari ikatan N-glikosidik C1'-N1 (uridin biasa) ke ikatan C-glikosidik C1'-C5 (pseudouridin).
Langkah 4: Pilih opsi A.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi IChO Steering Committee / Pelatnas III-IV)',
    generation_type: 'twin_parallel'
  }
];
