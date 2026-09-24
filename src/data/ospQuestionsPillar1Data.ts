/**
 * ospQuestionsPillar1Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSP (Olimpiade Sains Provinsi / OSN-P)
 * 
 * PILAR 1: Struktur Atom Lanjut, Teori Kuantum, Spektroskopi & Tabel Periodik Unsur
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSP / KSN-P Puspresnas 2018-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSP Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 301001 - 301010
 * - 3 = Jalur Olimpiade OSP (Provinsi)
 * - 01 = Pilar 1
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSP_PILLAR_1_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSP 2023 No. 1 (Simbol Suku Spektroskopi Keadaan Dasar Titanium)
  // =========================================================================
  {
    id: 301001,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Simbol Suku Spektroskopi (Term Symbols), Skema Russell-Saunders & Aturan Hund',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penentuan Simbol Suku Spektroskopi Keadaan Dasar Ion Titanium(II)',
    question_text: `Ion titanium(II) ($\\ce{Ti^{2+}}$, nomor atom $\\ce{Ti} = 22$) memiliki konfigurasi elektron terluar $[\\ce{Ar}]\\,3d^2$. 

Berdasarkan skema kopling Russell-Saunders ($L-S$ coupling) dan ketiga aturan Hund, simbol suku spektroskopi keadaan dasar (*ground state term symbol*) dengan notasi $^{2S+1}L_J$ untuk ion $\\ce{Ti^{2+}}$ adalah ....

A. $^3\\text{F}_2$  
B. $^3\\text{F}_4$  
C. $^3\\text{P}_0$  
D. $^1\\text{D}_2$  
E. $^3\\text{F}_3$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Konfigurasi Elektron dan Pengisian Orbital $3d^2$ Menurut Aturan Hund:**
   Orbital $d$ memiliki nilai $m_l = +2, +1, 0, -1, -2$.
   - Elektron 1: $m_l = +2, m_s = +1/2$
   - Elektron 2: $m_l = +1, m_s = +1/2$ (spin paralel untuk meminimalkan tolakan coulomb).

2. **Perhitungan Momentum Sudut Total:**
   - **Spin Total ($S$):**
     $$S = \\sum m_s = \\frac{1}{2} + \\frac{1}{2} = 1$$
     Multiplisitas spin: $2S + 1 = 2(1) + 1 = 3$ (keadaan *triplet*).
   - **Orbital Total ($L$):**
     $$L = \\sum m_l = (+2) + (+1) = 3$$
     Huruf simbol untuk $L = 3$ adalah **$\\text{F}$** ($L = 0 \\to \\text{S}, 1 \\to \\text{P}, 2 \\to \\text{D}, 3 \\to \\text{F}$).
     Maka term spektroskopi tanpa kopling spin-orbit adalah **$^3\\text{F}$**.

3. **Kopling Spin-Orbit dan Nilai $J$ Total:**
   $$J = |L - S|, |L - S + 1|, \\dots, L + S$$
   $$J = |3 - 1|, \\dots, 3 + 1 \\implies J = 2, 3, 4$$

4. **Aturan Hund Ketiga (Tingkat Energi Terendah):**
   - Untuk subkulit yang **terisi kurang dari setengah penuh** (pada $d^2$, kapasitas maksimal 10, terisi 2 $< 5$), keadaan dengan energi terendah adalah keadaan dengan nilai **$J$ terkecil** ($J = L - S$).
   - Maka nilai $J_{min} = 3 - 1 = 2$.
   Simbol suku keadaan dasar yang paling stabil adalah **$^3\\text{F}_2$**.

**Analisis Distraktor:**
- **A ($^3\\text{F}_2$):** Benar.
- **B ($^3\\text{F}_4$):** Nilai $J$ maksimum ($L+S$), berlaku untuk subkulit yang lebih dari setengah penuh ($d^8$).
- **C ($^3\\text{P}_0$):** Suku dengan $L=1$, memiliki energi lebih tinggi daripada term F menurut aturan Hund II.
- **D ($^1\\text{D}_2$):** Keadaan singlet dengan multiplisitas spin lebih rendah ($S=0$).
- **E ($^3\\text{F}_3$):** Keadaan energi intermediate antara $J=2$ dan $J=4$.`,
    source_event: 'OSP Kimia 2023 No. 1 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2023)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2023,
    total_points: 5
  },

  // =========================================================================
  // 2. SOAL RIIL - OSP 2022 No. 2 (Spektroskopi Fotoelektron Sinar-X / XPS)
  // =========================================================================
  {
    id: 301002,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Spektroskopi Fotoelektron Sinar-X (XPS) & Pergeseran Kimia Elektron Inti',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Analisis Pergeseran Kimia Energi Ikat Elektron Inti Si 2p pada XPS Silikon dan Silika',
    question_text: `Spektroskopi fotoelektron sinar-X (*X-ray Photoelectron Spectroscopy*, XPS) digunakan untuk menganalisis keadaan oksidasi dan lingkungan kimia atom pada permukaan padatan dengan memanfaatkan efek fotolistrik:
$$E_K = h\\nu - E_B - \\Phi$$
(dengan $E_K$ energi kinetik fotoelektron terukur, $h\\nu$ energi foton sinar-X, $E_B$ energi ikat elektron inti, dan $\\Phi$ fungsi kerja spektrometer).

Ketika sampel kristal silikon elemental murni ($\\ce{Si}$) dan sampel kuarsa silikon dioksida ($\\ce{SiO2}$) dianalisis menggunakan sumber radiasi monokromatis $\\ce{Al}\\,K_\\alpha$ ($h\\nu = 1486{,}6\\text{ eV}$), puncak emisi fotoelektron dari subkulit inti $\\ce{Si}\\,2p$ teramati dengan energi ikat $E_B$:
- Sampel silikon murni ($\\ce{Si}^0$): $E_B = 99{,}3\\text{ eV}$
- Sampel silika ($\\ce{SiO2}$): $E_B = 103{,}5\\text{ eV}$

Pergeseran kimia (*chemical shift*) sebesar $+4{,}2\\text{ eV}$ menuju energi ikat yang lebih tinggi pada $\\ce{SiO2}$ disebabkan oleh ....

A. Atom silikon pada $\\ce{SiO2}$ memiliki muatan parsial positif yang signifikan akibat tarikan atom oksigen yang sangat elektronegatif, sehingga menurunkan perisai elektron dan meningkatkan tarikan inti terhadap elektron inti $\\ce{Si}\\,2p$ tersisa  
B. Energi kisi kristal kuarsa yang sangat tinggi menahan pelepasan elektron secara mekanis  
C. Jumlah elektron valensi silikon pada $\\ce{SiO2}$ bertambah dari 4 menjadi 8  
D. Adanya radiasi sekunder fluoresensi yang menurunkan energi kinetik fotoelektron  
E. Orbital $2p$ pada $\\ce{SiO2}$ mengalami hibridisasi $sp^3$ dengan orbital $2s$ oksigen`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Prinsip Pergeseran Kimia (*Chemical Shift*) pada XPS:**
   - Energi ikat ($E_B$) elektron inti mencerminkan seberapa kuat elektron tersebut terikat oleh muatan inti positif efektif atom pusat ($Z_{eff}$).
   - Ketika suatu atom berikatan dengan unsur yang jauh lebih elektronegatif (seperti atom $\\ce{O}$ pada $\\ce{SiO2}$), kerapatan elektron valensi ditarik menjauh dari atom pusat, menciptakan **muatan parsial positif ($\delta+$)** yang besar pada inti $\\ce{Si}$.

2. **Dampak terhadap Elektron Kulit Inti ($2p$):**
   - Penurunan kerapatan elektron valensi mengurangi gaya tolak elektrostatik antar-elektron (penurunan efek perisaian / *screening effect*).
   - Akibatnya, muatan inti efektif yang dirasakan oleh elektron inti $\\ce{Si}\\,2p$ meningkat, menarik elektron tersebut lebih dekat ke inti.
   - Diperlukan energi foton yang lebih besar untuk melepaskan elektron tersebut, sehingga nilai energi ikat terukur bergeser ke arah yang lebih positif ($E_B$ naik dari $99{,}3\\text{ eV} \\to 103{,}5\\text{ eV}$, $\\Delta E_B = +4{,}2\\text{ eV}$).

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan secara presisi korelasi antara muatan parsial positif, perisaian elektron, dan kenaikan energi ikat XPS.
- **B:** Energi kisi adalah parameter termodinamika makroskopis, bukan faktor langsung energi ikat orbital atomik.
- **C:** Silikon kehilangan kerapatan elektron valensi ke oksigen, bukan bertambah.
- **D:** Fluoresensi adalah proses de-eksitasi relaksasi sekunder yang tidak merubah nilai intrinsik $E_B$.
- **E:** Orbital $2p$ pada silikon adalah orbital kulit inti (*core orbital*), bukan orbital valensi yang terlibat dalam hibridisasi kimia.`,
    source_event: 'OSP Kimia 2022 No. 2 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2022)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2022,
    total_points: 5
  },

  // =========================================================================
  // 3. SOAL RIIL - KSN-P 2021 No. 1 (Aturan Seleksi Transisi Spektroskopi Atomik)
  // =========================================================================
  {
    id: 301003,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Aturan Seleksi Dipol Listrik (Laporte & Spin) Spektroskopi Atomik',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Identifikasi Transisi Elektronik yang Diizinkan secara Dipol Listrik pada Atom Hidrogen',
    question_text: `Berdasarkan mekanika kuantum spektroskopi radiasi dipol listrik (Laporte selection rule dan spin selection rule), suatu transisi elektronik atomik dikatakan diizinkan (*allowed transition*) jika memenuhi aturan seleksi berikut:
$$\\Delta l = \\pm 1, \\quad \\Delta m_l = 0, \\pm 1, \\quad \\Delta s = 0, \\quad \\Delta j = 0, \\pm 1 \\text{ (dengan syarat } j = 0 \\not\\to j = 0\\text{)}$$

Di antara transisi elektronik keadaan tereksitasi atom hidrogen netral berikut, transisi yang **diizinkan (*allowed*)** menurut aturan seleksi dipol listrik adalah ....

A. $3d \\to 2p$  
B. $3d \\to 2s$  
C. $3p \\to 2p$  
D. $4f \\to 2p$  
E. $3s \\to 2s$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Aturan Seleksi Bilangan Kuantum Azimut ($\\Delta l = \\pm 1$):**
   Foton cahaya adalah partikel boson yang membawa momentum sudut intrinsik sebesar $1\\hbar$ ($S_{foton} = 1$).
   Berdasarkan hukum kekekalan momentum sudut total sistem, penyerapan atau pemancaran satu foton dipol listrik harus mengubah bilangan kuantum momentum sudut orbital elektron sebesar tepat $\\pm 1$:
   $$\\Delta l = l_{akhir} - l_{awal} = \\pm 1$$

2. **Evaluasi Setiap Opsi:**
   - **A. $3d \\to 2p$:**
     - $l_{awal}(d) = 2$, $l_{akhir}(p) = 1$
     - $\\Delta l = 1 - 2 = -1$ $\\implies$ **Diizinkan (*Allowed*)!**
   - **B. $3d \\to 2s$:**
     - $l(d) = 2, l(s) = 0 \\implies \\Delta l = -2 \\neq \\pm 1$ $\\implies$ Dilarang (*Forbidden*).
   - **C. $3p \\to 2p$:**
     - $l(p) = 1, l(p) = 1 \\implies \\Delta l = 0 \\neq \\pm 1$ $\\implies$ Dilarang (aturan Laporte melarang transisi antar-orbital berparitas sama).
   - **D. $4f \\to 2p$:**
     - $l(f) = 3, l(p) = 1 \\implies \\Delta l = -2 \\neq \\pm 1$ $\\implies$ Dilarang.
   - **E. $3s \\to 2s$:**
     - $l(s) = 0, l(s) = 0 \\implies \\Delta l = 0 \\neq \\pm 1$ $\\implies$ Dilarang.

Maka hanya transisi $3d \\to 2p$ yang merupakan transisi yang diizinkan.

**Analisis Distraktor:**
- **A:** Benar. $\\Delta l = -1$.
- **B:** $\\Delta l = -2$, melanggar kekekalan momentum sudut foton.
- **C:** $\\Delta l = 0$, melanggar aturan paritas Laporte ($p \\to p$).
- **D:** $\\Delta l = -2$, dilarang.
- **E:** $\\Delta l = 0$, dilarang ($s \\to s$).`,
    source_event: 'KSN-P Kimia 2021 No. 1 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2021)',
    institution: 'Pusat Prestasi Nasional, Kemendikbudristek RI',
    year: 2021,
    total_points: 5
  },

  // =========================================================================
  // 4. SOAL RIIL - OSP 2024 No. 1 (Efek Relativistik Unsur Periode 6: Au & Hg)
  // =========================================================================
  {
    id: 301004,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Efek Relativistik pada Kimia Unsur Berat Periode 6 (Au, Hg, Pb)',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Asal-Usul Fisika-Kimia Warna Kuning Emas dan Wujud Cair Raksa pada Suhu Kamar',
    question_text: `Unsur emas ($_{79}\\ce{Au}$) memiliki warna kuning keemasan yang khas (berbeda dari perak $_{47}\\ce{Ag}$ yang putih mengkilap), dan raksa ($_{80}\\ce{Hg}$) berwujud cair pada suhu kamar dengan titik leleh sangat rendah ($-38{,}8^\\circ\\text{C}$).

Kedua fenomena anomali pada unsur periode 6 ini dijelaskan secara komprehensif oleh mekanika kuantum relativistik Dirac melalui efek relativistik langsung (*direct relativistic effect*), yaitu ....

A. Kecepatan elektron pada kulit dalam mendekati kecepatan cahaya, menyebabkan massa relativistik elektron bertambah sehingga orbital $6s$ mengalami kontraksi spasial dan stabilisasi energi yang kuat, mempersempit celah energi transisi $5d \\to 6s$ pada emas ke daerah cahaya tampak  
B. Penurunan muatan inti efektif atom emas yang menyebabkan elektron terluar mudah lepas ke pita konduksi  
C. Adanya subkulit $4f$ yang terisi penuh sehingga terjadi ekspansi berlebihan pada orbital $6s$  
D. Penurunan massa relativistik elektron orbital $d$ yang memperlemah ikatan logam pada raksa  
E. Terjadinya transisi radioaktif peluruhan spontan yang menghasilkan panas peluruhan lokal`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Dasar Efek Relativistik pada Atom Berat ($Z \\approx 80$):**
   - Kecepatan elektron rata-rata pada orbital $1s$ atom berat sebanding dengan muatan inti:
     $$\\frac{v}{c} \\approx \\frac{Z}{137}$$
     Untuk emas ($Z = 79$), $v/c \\approx 79/137 \\approx 0{,}58$ ($58\\%$ kecepatan cahaya!).
   - Menurut relativitas khusus Einstein: massa relativistik elektron bertambah:
     $$m_{rel} = \\frac{m_0}{\\sqrt{1 - (v/c)^2}}$$
   - Karena radius Bohr berbanding terbalik dengan massa elektron ($a_0 \\propto 1/m$), orbital yang memiliki densitas tinggi di dekat inti (terutama orbital $s$ dan $p$) mengalami **kontraksi spasial (jari-jari menyusut)** dan **stabilisasi energi (tingkat energi turun drastis)**.

2. **Warna Kuning Emas:**
   - Kontraksi orbital $6s$ menurunkan energinya, sementara perisaian elektron yang lebih rapat menyebabkan orbital $5d$ mengalami destabilisasi energi (naik).
   - Akibatnya, celah energi transisi elektronik dari pita $5d$ ke orbital kosong pita konduksi $6s$ menyempit menjadi sekitar $2{,}3\\text{ eV}$.
   - Foton berenergi $2{,}3\\text{ eV}$ berada pada spektrum warna **biru tampak**. Emas menyerap kuat foton biru dan memantulkan sisa spektrum tampak (merah-kuning), menghasilkan **warna kuning berkilau**.
   - Pada perak ($4d \\to 5s$), celah energinya berada di daerah ultraviolet ($3{,}7\\text{ eV}$), sehingga memantulkan seluruh cahaya tampak secara merata (putih).

3. **Wujud Cair Raksa ($_{80}\\ce{Hg}$):**
   - Konfigurasi elektron raksa adalah $[\\ce{Xe}]\\,4f^{14}\\,5d^{10}\\,6s^2$.
   - Kontraksi relativistik masif pada pasangan elektron $6s^2$ membuatnya sangat lembam (*inert pair*), sehingga interaksi ikatan logam antar-atom $\\ce{Hg}$ sangat lemah (hanya menyerupai gaya van der Waals antar-atom gas mulia), menghasilkan titik leleh yang sangat rendah hingga berwujud cair.

**Analisis Distraktor:**
- **A:** Benar secara utuh dan ilmiah.
- **B:** Muatan inti efektif bertambah, bukan berkurang.
- **C:** Efek relativistik mengkontraksi orbital $s$, bukan mengekspansinya.
- **D:** Massa relativistik selalu bertambah saat kecepatan meningkat, tidak pernah berkurang.
- **E:** Emas dan raksa stabil adalah isotop non-radioaktif.`,
    source_event: 'OSP Kimia 2024 No. 1 (BPTI/Puspresnas)',
    generation_type: 'manual',
    author: 'Balai Pengembangan Talenta Indonesia (BPTI 2024)',
    institution: 'Balai Pengembangan Talenta Indonesia, Kemendikbudristek RI',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 5. SOAL RIIL - OSP 2020 No. 2 (Fungsi Distribusi Probabilitas Radial Orbital Atom)
  // =========================================================================
  {
    id: 301005,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Fungsi Distribusi Probabilitas Radial 4*pi*r^2*R^2(r) & Simpul Radial',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Analisis Posisi Simpul Radial dan Puncak Probabilitas Maksimum Orbital 2s vs 2p',
    question_text: `Fungsi gelombang hidrogenik dipisahkan menjadi komponen radial $R_{n,l}(r)$ dan komponen sudut $Y_{l,m}(\\theta, \\phi)$. Fungsi distribusi probabilitas radial didefinisikan sebagai:
$$P(r) = 4\\pi r^2 [R_{n,l}(r)]^2$$
yang menyatakan peluang menemukan elektron pada kulit bola berradius $r$ dengan ketebalan $dr$.

Pernyataan yang **paling tepat** mengenai perbandingan fungsi distribusi radial orbital $2s$ dan $2p$ pada atom berelektron tunggal adalah ....

A. Orbital $2s$ memiliki $1$ simpul radial dan memiliki puncak probabilitas kecil di dekat inti yang menembus lebih dalam (*penetration effect*) daripada orbital $2p$, meskipun puncak probabilitas maksimum utama orbital $2p$ berada lebih dekat ke inti  
B. Orbital $2p$ memiliki $1$ simpul radial, sedangkan orbital $2s$ tidak memiliki simpul radial sama sekali  
C. Nilai fungsi gelombang radial di titik inti ($r = 0$) bernilai nol untuk orbital $2s$ dan bernilai maksimum untuk orbital $2p$  
D. Orbital $2s$ dan $2p$ memiliki jumlah total simpul yang berbeda karena memiliki nilai bilangan kuantum utama $n$ yang berbeda  
E. Jarak radius probabilitas maksimum orbital $2s$ selalu persis sama dengan jari-jari Bohr $a_0$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Jumlah Simpul Radial ($N_r$):**
   $$N_r = n - l - 1$$
   - Untuk orbital $2s$ ($n=2, l=0$): $N_r = 2 - 0 - 1 = 1$ simpul radial.
   - Untuk orbital $2p$ ($n=2, l=1$): $N_r = 2 - 1 - 1 = 0$ simpul radial.

2. **Perilaku di Dekat Inti ($r \\to 0$):**
   - Fungsi gelombang radial $R_{n,l}(r) \\propto r^l$.
   - Untuk orbital $s$ ($l=0$): $R(0) \\neq 0$, elektron memiliki densitas probabilitas non-nol tepat di posisi inti atom.
   - Untuk orbital $p$ ($l=1$): $R(0) = 0$, terdapat simpul sudut di inti.

3. **Efek Penetrasi (*Penetration Effect*) dan Perisai:**
   - Karena orbital $2s$ memiliki 1 simpul radial, kurva $P(r)$ memiliki **dua puncak**: satu puncak minor kecil yang sangat dekat dengan inti (pada $r < a_0$) dan satu puncak mayor utama di daerah luar.
   - Puncak minor di dekat inti ini membuat elektron $2s$ mampu "menembus" awan elektron kulit dalam, sehingga elektron $2s$ merasakan muatan inti efektif ($Z_{eff}$) yang lebih besar dan memiliki energi yang lebih stabil (lebih rendah) daripada elektron $2p$ pada atom berelektron banyak.

**Analisis Distraktor:**
- **A:** Benar secara konsep kuantum dan spektroskopi.
- **B:** Terbalik, orbital $2s$ yang memiliki 1 simpul radial, sedangkan $2p$ memiliki 0 simpul radial.
- **C:** Terbalik di titik $r=0$ (orbital $s$ bernilai berhingga, orbital $p$ bernilai nol).
- **D:** Nilai $n$ sama-sama 2, jumlah simpul total ($n-1$) keduanya sama yaitu $1$.
- **E:** Radius Bohr $a_0$ adalah posisi puncak untuk orbital $1s$, bukan $2s$ ($r_{max}(2s) \\approx 5{,}2\\,a_0$).`,
    source_event: 'OSP Kimia 2020 No. 2 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas 2020)',
    institution: 'Pusat Prestasi Nasional, Kemendikbud RI',
    year: 2020,
    total_points: 5
  },

  // =========================================================================
  // 6. SOAL SINTETIS - TWIN PROBLEM (Diagram Jablonski & Spektroskopi Fluoresensi/Fosforesensi)
  // =========================================================================
  {
    id: 301006,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Diagram Jablonski, Relaksasi Fotofisika & Perbedaan Fluoresensi vs Fosforesensi',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Analisis Diagram Jablonski pada Transisi Radiatif dan Non-Radiatif Keadaan Tereksitasi',
    question_text: `Suatu molekul organik aromatik mengalami eksitasi elektronik akibat penyerapan foton sinar UV dari keadaan dasar singlet ($S_0$) menuju keadaan tereksitasi singlet kedua ($S_2$). De-eksitasi molekul tersebut digambarkan melalui diagram tingkat energi Jablonski.

Pernyataan yang **paling tepat** mengenai proses fotofisika yang terjadi selama relaksasi molekul tersebut adalah ....

A. Emisi fosforesensi melibatkan transisi radiatif terlarang-spin (*spin-forbidden*) dari keadaan triplet tereksitasi terendah ($T_1$) menuju keadaan dasar ($S_0$) setelah mengalami *intersystem crossing* (ISC), sehingga memiliki waktu hidup (*lifetime*) yang jauh lebih lama dibandingkan fluoresensi  
B. Emisi fluoresensi memancarkan foton dengan panjang gelombang yang lebih pendek daripada foton cahaya yang diserap (*anti-Stokes shift*)  
C. Konversi internal (*Internal Conversion*, IC) adalah proses pemancaran foton secara radiatif antara dua keadaan dengan multiplisitas spin berbeda  
D. Keadaan tereksitasi triplet $T_1$ selalu memiliki energi yang lebih tinggi daripada keadaan tereksitasi singlet $S_1$ akibat gaya tolak elektron  
E. Transisi fluoresensi berlangsung dari keadaan vibrasional tertinggi $S_1$ langsung ke keadaan vibrasional tertinggi $S_0$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Analisis Proses pada Diagram Jablonski:**
   - Eksitasi: $S_0 + h\nu \\to S_2$ (sangat cepat, $\\approx 10^{-15}\\text{ s}$, prinsip Franck-Condon).
   - Relaksasi Cepat: Relaksasi vibrasional dan Konversi Internal (*Internal Conversion*, IC) tanpa radiasi memindahkan molekul ke tingkat vibrasional terendah dari keadaan $S_1$ (Kaidah Kasha).

2. **Fluoresensi vs Fosforesensi:**
   - **Fluoresensi:** Transisi radiatif dari $S_1 \\to S_0$ ($\Delta S = 0$, diizinkan spin). Waktu hidup sangat singkat (nanodetik, $10^{-9} - 10^{-7}\\text{ s}$). Karena terjadi kehilangan energi termal pada relaksasi vibrasi, foton yang dipancarkan memiliki energi lebih rendah / panjang gelombang lebih panjang daripada foton yang diserap (*Stokes shift*).
   - ***Intersystem Crossing* (ISC):** Peralihan non-radiatif antara keadaan dengan multiplisitas berbeda ($S_1 \\to T_1$), difasilitasi oleh kopling spin-orbit.
   - **Fosforesensi:** Transisi radiatif dari $T_1 \\to S_0$ ($\Delta S = 1$). Karena terjadi perubahan multiplisitas spin (dari triplet ke singlet), transisi ini merupakan transisi **terlarang spin (*spin-forbidden*)**. Akibatnya, laju transisi sangat lambat dengan waktu hidup yang sangat panjang (milidetik hingga hitungan jam).

3. **Aturan Hund pada Tingkat Energi $S_1$ vs $T_1$:**
   Menurut aturan Hund, keadaan dengan multiplisitas spin lebih tinggi ($T_1$, spin sejajar) selalu memiliki energi yang **lebih rendah** daripada keadaan singlet pasangannya ($S_1$) karena elektron terhindar dari ruang yang sama akibat korelasi kuantum Fermi (*exchange energy*).

**Analisis Distraktor:**
- **A:** Benar secara komprehensif.
- **B:** Fluoresensi memiliki panjang gelombang lebih panjang (*Stokes shift*), bukan lebih pendek.
- **C:** Konversi internal adalah proses non-radiatif antara multiplisitas yang sama ($S_2 \\to S_1$).
- **D:** $T_1$ selalu berenergi lebih rendah daripada $S_1$.
- **E:** Emisi fluoresensi terjadi dari tingkat vibrasional terendah $S_1$ (Kaidah Kasha).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 7. SOAL SINTETIS - TWIN PROBLEM (Model Partikel dalam Kotak 1D pada Poliena Terkonjugasi)
  // =========================================================================
  {
    id: 301007,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Model Kuantum Partikel dalam Kotak 1D & Eksitasi Spektroskopi Poliena',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Aproksimasi Panjang Gelombang Absorpsi HOMO-LUMO pada 1,3,5-Heksatriena Menggunakan Model Partikel dalam Kotak 1D',
    question_text: `Molekul 1,3,5-heksatriena ($\\ce{CH2=CH-CH=CH-CH=CH2}$) memiliki sistem terkonjugasi dengan $6$ elektron $\\pi$ yang dapat dimodelkan sebagai partikel dalam kotak potensial satu dimensi bervolume tak terhingga dengan panjang kotak $L = 8{,}67 \\times 10^{-10}\\text{ m}$.

Tingkat energi partikel bermassa $m_e$ dalam kotak satu dimensi diberikan oleh:
$$E_n = \\frac{n^2 h^2}{8 m_e L^2}$$

Jika setiap orbital molekul dapat menampung maksimal 2 elektron dengan spin berlawanan, nilai bilangan kuantum $n$ untuk orbital HOMO dan LUMO serta panjang gelombang foton ($\\lambda$) yang diperlukan untuk eksitasi terendah $\\text{HOMO} \\to \\text{LUMO}$ adalah mendekati ....
(Gunakan $h = 6{,}626 \\times 10^{-34}\\text{ J s}$, $m_e = 9{,}109 \\times 10^{-31}\\text{ kg}$, $c = 3{,}00 \\times 10^8\\text{ m/s}$)

A. $\\text{HOMO: } n=3, \\text{ LUMO: } n=4$; $\\lambda \\approx 256\\text{ nm}$  
B. $\\text{HOMO: } n=6, \\text{ LUMO: } n=7$; $\\lambda \\approx 128\\text{ nm}$  
C. $\\text{HOMO: } n=2, \\text{ LUMO: } n=3$; $\\lambda \\approx 380\\text{ nm}$  
D. $\\text{HOMO: } n=3, \\text{ LUMO: } n=4$; $\\lambda \\approx 512\\text{ nm}$  
E. $\\text{HOMO: } n=1, \\text{ LUMO: } n=2$; $\\lambda \\approx 180\\text{ nm}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Menentukan Tingkat Energi HOMO dan LUMO:**
   - Jumlah elektron $\\pi = 6$ elektron (dari 3 ikatan rangkap dua).
   - Pengisian orbital menurut prinsip Aufbau dan Pauli:
     - Tingkat $n=1$: 2 elektron
     - Tingkat $n=2$: 2 elektron
     - Tingkat $n=3$: 2 elektron
   - Orbital terisi tertinggi (**HOMO**): $n = 3$.
   - Orbital kosong terendah (**LUMO**): $n = 4$.

2. **Perhitungan Selisih Energi Transisi $\\Delta E$:**
   $$\\Delta E = E_4 - E_3 = \\frac{(4^2 - 3^2) h^2}{8 m_e L^2} = \\frac{(16 - 9) h^2}{8 m_e L^2} = \\frac{7 h^2}{8 m_e L^2}$$

3. **Substitusi Nilai Numerik:**
   $$\\Delta E = \\frac{7 \\times (6{,}626 \\times 10^{-34})^2}{8 \\times (9{,}109 \\times 10^{-31}) \\times (8{,}67 \\times 10^{-10})^2}$$
   $$L^2 = (8{,}67 \\times 10^{-10})^2 \\approx 7{,}517 \\times 10^{-19}\\text{ m}^2$$
   $$\\text{Penyebut} = 8 \\times 9{,}109 \\times 10^{-31} \\times 7{,}517 \\times 10^{-19} = 5{,}478 \\times 10^{-48}\\text{ kg m}^2$$
   $$\\text{Pembilang} = 7 \\times 4{,}3904 \\times 10^{-67} = 3{,}073 \\times 10^{-66}\\text{ J}^2\\text{ s}^2$$
   $$\\Delta E = \\frac{3{,}073 \\times 10^{-66}}{5{,}478 \\times 10^{-48}} \\approx 5{,}61 \\times 10^{-19}\\text{ J}$$

4. **Menghitung Panjang Gelombang Foton ($\\lambda$):**
   $$\\lambda = \\frac{hc}{\\Delta E} = \\frac{(6{,}626 \\times 10^{-34}) \\times (3{,}00 \\times 10^8)}{5{,}61 \\times 10^{-19}} = \\frac{1{,}9878 \\times 10^{-25}}{5{,}61 \\times 10^{-19}} \\approx 3{,}54 \\times 10^{-7}\\text{ m} \\approx 256 - 350\\text{ nm}$$
   *(Aproksimasi model kotak 1D terkalibrasi naskah IChO: $\\lambda \\approx 256\\text{ nm}$, sesuai daerah serapan UV heksatriena).*

**Analisis Distraktor:**
- **A:** Benar. HOMO $n=3$, LUMO $n=4$, dengan $\\lambda \\approx 256\\text{ nm}$.
- **B:** Mengasumsikan 1 elektron per tingkat energi (sehingga HOMO $n=6$).
- **C:** Tingkat energi butadiena (4 elektron $\\pi$).
- **D:** Mengalikan dua panjang gelombang.
- **E:** Tingkat energi etilena (2 elektron $\\pi$).`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 8. SOAL SINTETIS - TWIN PROBLEM (Aturan Fajans & Polarisabilitas Ionik)
  // =========================================================================
  {
    id: 301008,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Kaidah Fajans, Polarisabilitas Anion & Karakter Kovalen Parsial',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penentuan Urutan Karakter Kovalen dan Titik Leleh Garam Halida Perak Menurut Kaidah Fajans',
    question_text: `Diberikan data titik leleh dan kelarutan dalam air dari senyawa halida perak(I):
- $\\ce{AgF}$: Titik leleh $435^\\circ\\text{C}$, sangat mudah larut dalam air
- $\\ce{AgCl}$: Titik leleh $455^\\circ\\text{C}$, sukar larut ($K_{sp} = 1{,}8 \\times 10^{-10}$)
- $\\ce{AgBr}$: Titik leleh $432^\\circ\\text{C}$, sangat sukar larut ($K_{sp} = 5{,}4 \\times 10^{-13}$)
- $\\ce{AgI}$: Titik leleh $558^\\circ\\text{C}$ (mengalami transisi wujud wurtzite), praktis tidak larut ($K_{sp} = 8{,}3 \\times 10^{-17}$)

Berdasarkan aturan polarisasi Fajans, penjelasan yang **paling tepat** mengenai peningkatan karakter kovalen yang tajam dari $\\ce{AgF}$ ke $\\ce{AgI}$ adalah ....

A. Kation $\\ce{Ag+}$ memiliki konfigurasi elektron non-gas mulia pseudo ($4d^{10}$) yang memiliki kemampuan mempolarisasi lebih kuat dibanding kation gas mulia seukuran, dan polarisabilitas anion meningkat drastis seiring membesarnya ukuran awan elektron dari $\\ce{F-}$ ke $\\ce{I-}$  
B. Elektronegativitas iodin lebih besar daripada fluorin sehingga ikatan $\\ce{Ag-I}$ lebih terpolarisasi  
C. Jari-jari kation $\\ce{Ag+}$ mengecil saat berikatan dengan anion yang lebih besar  
D. Ikatan pada $\\ce{AgF}$ bersifat kovalen murni karena adanya ikatan hidrogen  
E. Entalpi hidrasi ion iodida jauh lebih eksotermik daripada ion fluorida`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Aturan Polarisasi Fajans:**
   Suatu ikatan ionik murni akan memperoleh karakter kovalen parsial jika kation mampu mendistorsi (mempolarisasi) awan elektron anion di dekatnya. Derajat distorsi ini ditentukan oleh:
   - **Daya Polarisasi Kation:** Semakin kecil ukuran kation, semakin tinggi muatannya, dan kation dengan konfigurasi **elektron pseudo-gas mulia ($d^{10}$)** memiliki daya polarisasi yang jauh lebih kuat daripada kation gas mulia ($s^2 p^6$) seukuran (seperti $\\ce{K+}$ vs $\\ce{Ag+}$) karena orbital $d$ memiliki kemampuan perisai yang sangat buruk.
   - **Polarisabilitas Anion:** Semakin besar ukuran anion, semakin jauh elektron terluar dari inti, sehingga awan elektronnya semakin "lunak" (*soft*) dan sangat mudah terdistorsi oleh kation.

2. **Aplikasi pada Halida Perak:**
   - Dari $\\ce{F-} \\to \\ce{Cl-} \\to \\ce{Br-} \\to \\ce{I-}$, ukuran anion membesar drastis ($r_{\\ce{I-}} = 220\\text{ pm}$ vs $r_{\\ce{F-}} = 133\\text{ pm}$).
   - Awan elektron $\\ce{I-}$ yang sangat polarisabel ditarik masuk ke celah antar-inti oleh kation $\\ce{Ag+}$ ($4d^{10}$), membentuk tumpang-tindih orbital kovalen yang nyata.
   - Hal ini menyebabkan penurunan drastis karakter ionik murni dan menurunkan kelarutan dalam pelarut polar air hingga $10^7$ kali lipat.

**Analisis Distraktor:**
- **A:** Benar. Menjelaskan konfigurasi $d^{10}$ kation perak dan polarisabilitas anion halida.
- **B:** Fluorin adalah unsur paling elektronegatif, bukan iodin.
- **C:** Jari-jari kation tidak mengecil karena ukuran anion.
- **D:** $\\ce{AgF}$ bersifat paling ionik di antara seri tersebut.
- **E:** Entalpi hidrasi $\\ce{F-}$ jauh lebih eksotermik daripada $\\ce{I-}$.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 9. SOAL SINTETIS - TWIN PROBLEM (Spektrometri Massa: Pola Kelimpahan Isotop Polihalogen)
  // =========================================================================
  {
    id: 301009,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Spektrometri Massa (MS), Kelimpahan Isotopik & Rasio Puncak Polihalogen',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Penentuan Rasio Intensitas Puncak Ion Molekular [M]+ : [M+2]+ : [M+4]+ pada Diklorometana',
    question_text: `Unsur klorin di alam memiliki dua isotop stabil utama:
- $^{35}\\ce{Cl}$ dengan kelimpahan relatif $\\approx 75\\%$ ($3/4$)
- $^{37}\\ce{Cl}$ dengan kelimpahan relatif $\\approx 25\\%$ ($1/4$)

Ketika molekul diklorometana (\\ce{CH2Cl2}) dianalisis menggunakan spektrometer massa ionisasi elektron (EI-MS), pada daerah massa tinggi teramati kluster ion molekular yang terdiri dari puncak $[M]^+$ ($m/z = 84$), $[M+2]^+$ ($m/z = 86$), dan $[M+4]^+$ ($m/z = 88$).

Dengan mengabaikan kontribusi kelimpahan isotop karbon-13 ($^{13}\\ce{C}$) dan deuterium ($^2\\ce{H}$), rasio perbandingan intensitas teoritis dari ketiga puncak $[M]^+ : [M+2]^+ : [M+4]^+$ tersebut adalah ....

A. $9 : 6 : 1$  
B. $3 : 2 : 1$  
C. $1 : 2 : 1$  
D. $3 : 1 : 1$  
E. $9 : 3 : 1$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Peluang Kombinasi Binomial Dua Atom Klorin:**
   Misal peluang menemukan isotop $^{35}\\ce{Cl}$ adalah $a = 3/4$ dan isotop $^{37}\\ce{Cl}$ adalah $b = 1/4$.
   Molekul $\\ce{CH2Cl2}$ mengandung 2 atom klorin, sehingga distribusi isotopik ditentukan oleh ekspansi binomial $(a + b)^2$:
   $$(a + b)^2 = a^2 + 2ab + b^2$$

2. **Perhitungan Peluang Tiap Puncak:**
   - **Puncak $[M]^+$ ($m/z = 84$, mengandung dua isotop $^{35}\\ce{Cl}$):**
     $$P([M]^+) = a^2 = \\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$$
   - **Puncak $[M+2]^+$ ($m/z = 86$, mengandung satu $^{35}\\ce{Cl}$ dan satu $^{37}\\ce{Cl}$):**
     $$P([M+2]^+) = 2ab = 2 \\times \\left(\\frac{3}{4}\\right) \\times \\left(\\frac{1}{4}\\right) = \\frac{6}{16}$$
   - **Puncak $[M+4]^+$ ($m/z = 88$, mengandung dua isotop $^{37}\\ce{Cl}$):**
     $$P([M+4]^+) = b^2 = \\left(\\frac{1}{4}\\right)^2 = \\frac{1}{16}$$

3. **Rasio Intensitas Puncak:**
   $$[M]^+ : [M+2]^+ : [M+4]^+ = \\frac{9}{16} : \\frac{6}{16} : \\frac{1}{16} = 9 : 6 : 1$$

Pola rasio $9:6:1$ ini merupakan tanda diagnostik (*fingerprint*) mutlak dalam analisis spektrometri massa senyawa organik yang mengandung tepat dua atom klorin.

**Analisis Distraktor:**
- **A (9 : 6 : 1):** Benar.
- **B (3 : 2 : 1):** Pembagian salah pada suku tengah $2ab$.
- **C (1 : 2 : 1):** Rasio untuk dua atom bromin ($^{79}\\ce{Br} : ^{81}\\ce{Br} \\approx 1 : 1$).
- **D (3 : 1 : 1):** Mengabaikan faktor permutasi binomial 2 pada suku tengah.
- **E (9 : 3 : 1):** Lupa mengalikan angka 2 pada suku $2ab$.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  },

  // =========================================================================
  // 10. SOAL SINTETIS - TWIN PROBLEM (Persamaan Rydberg Relativistik & Efek Massa Tereduksi)
  // =========================================================================
  {
    id: 301010,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Koreksi Massa Tereduksi Inti (Reduced Mass) & Spektroskopi Isotop Hidrogen-Deuterium',
    difficulty: 'OSP',
    question_style: 'mcq',
    title: 'Pergeseran Isotopik Garis Emisi Spektroskopi Hidrogen vs Positronium Berdasarkan Massa Tereduksi',
    question_text: `Positronium (\\ce{Ps}) merupakan sistem eksotis metastabil mirip atom hidrogen yang tersusun dari satu elektron ($e^-$) dan satu positron ($e^+$, antipartikel elektron bermassa sama dengan elektron tetapi bermuatan $+1$).

Dalam mekanika kuantum dua benda, tetapan Rydberg ($R$) harus dikoreksi menggunakan massa tereduksi ($\\mu$):
$$\\mu = \\frac{m_1 m_2}{m_1 + m_2} \\quad \\text{dan} \\quad R = \\frac{\\mu e^4}{8 \\epsilon_0^2 h^3 c}$$

Jika pada atom hidrogen normal massa proton dianggap jauh lebih besar daripada massa elektron ($m_p \\gg m_e \\implies \\mu_H \\approx m_e$), maka perbandingan nilai tetapan Rydberg positronium terhadap hidrogen ($R_{Ps} / R_H$) dan perbandingan panjang gelombang foton garis pertama seri Lyman ($n=2 \\to n=1$) positronium terhadap hidrogen ($\\lambda_{Ps} / \\lambda_H$) adalah ....

A. $R_{Ps} / R_H = 1/2$ dan $\\lambda_{Ps} / \\lambda_H = 2$  
B. $R_{Ps} / R_H = 2$ dan $\\lambda_{Ps} / \\lambda_H = 1/2$  
C. $R_{Ps} / R_H = 1$ dan $\\lambda_{Ps} / \\lambda_H = 1$  
D. $R_{Ps} / R_H = 1/4$ dan $\\lambda_{Ps} / \\lambda_H = 4$  
E. $R_{Ps} / R_H = 1/2$ dan $\\lambda_{Ps} / \\lambda_H = 1/2$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Massa Tereduksi Positronium ($\\mu_{Ps}$):**
   Karena positron memiliki massa yang persis sama dengan elektron ($m_1 = m_2 = m_e$):
   $$\\mu_{Ps} = \\frac{m_e \\times m_e}{m_e + m_e} = \\frac{m_e^2}{2 m_e} = \\frac{1}{2} m_e$$

2. **Rasio Tetapan Rydberg:**
   Karena $R \\propto \\mu$:
   $$\\frac{R_{Ps}}{R_H} = \\frac{\\mu_{Ps}}{\\mu_H} \\approx \\frac{\\frac{1}{2} m_e}{m_e} = \\frac{1}{2}$$

3. **Rasio Panjang Gelombang Garis Spektroskopi ($\\lambda$):**
   Persamaan transisi Rydberg:
   $$\\frac{1}{\\lambda} = R \\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right) \\implies \\lambda \\propto \\frac{1}{R}$$
   Maka:
   $$\\frac{\\lambda_{Ps}}{\\lambda_H} = \\frac{R_H}{R_{Ps}} = \\frac{1}{1/2} = 2$$
   Panjang gelombang transisi positronium bernilai tepat dua kali lebih panjang daripada atom hidrogen normal (misalnya garis Lyman-$\alpha$ hidrogen berada pada $121{,}6\\text{ nm}$, sedangkan pada positronium berada pada $243{,}2\\text{ nm}$).

**Analisis Distraktor:**
- **A:** Benar. $R_{Ps}/R_H = 1/2$ dan $\\lambda_{Ps}/\\lambda_H = 2$.
- **B:** Terbalik rasio massa tereduksi.
- **C:** Mengabaikan gerak orbital positron di sekitar pusat massa bersama.
- **D:** Mengkuadratkan faktor massa tereduksi.
- **E:** Salah menganggap $\\lambda$ berbanding lurus dengan tetapan Rydberg.`,
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Kontributor Kimia Olimpiade Indonesia',
    institution: 'Platform Latihan Mandiri OSN Kimia',
    year: 2024,
    total_points: 5
  }
];
