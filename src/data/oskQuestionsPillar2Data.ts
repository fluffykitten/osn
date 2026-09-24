/**
 * oskQuestionsPillar2Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSK (Olimpiade Sains Kota/Kabupaten / OSN-K)
 * 
 * PILAR 2: Ikatan Kimia, Geometri Molekul, VSEPR & Teori Orbital Molekul (Pilar 2 Silabus OSN Kimia)
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSK / KSN-K Puspresnas 2020-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 202001 - 202010
 * - 2 = Jalur Olimpiade OSK
 * - 02 = Pilar 2
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSK_PILLAR_2_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSK 2023 No. 6 (Geometri VSEPR Spesi Hipervalen ClF3 & I3-)
  // =========================================================================
  {
    id: 202001,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Teori VSEPR, Pasangan Elektron Bebas & Bentuk Molekul Hipervalen',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Geometri Molekul dan Penempatan PEB pada ClF3 dan Ion Triiodida',
    question_text: `Berdasarkan teori tolakan pasangan elektron kulit valensi (*VSEPR*) dan teori domain elektron, struktur molekul klorin trifluorida ($\\ce{ClF3}$) dan ion triiodida ($\\ce{I3-}$) berturut-turut adalah ....

A. Segitiga datar (*trigonal planar*) dan bengkok (*bent*)  
B. Bentuk-T (*T-shaped*) dan linear  
C. Piramida trigonal (*trigonal pyramidal*) dan linear  
D. Bentuk-T (*T-shaped*) dan bengkok (*bent*)  
E. Segitiga bipiramida (*trigonal bipyramidal*) dan bentuk-T`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Analisis Struktur $\\ce{ClF3}$:**
   - Atom pusat $\\ce{Cl}$ memiliki $7$ elektron valensi.
   - Mengikat $3$ atom $\\ce{F}$ melalui ikatan kovalen tunggal ($3$ Pasangan Elektron Ikatan / PEI).
   - Sisa elektron pada atom pusat: $7 - 3 = 4$ elektron = $2$ Pasangan Elektron Bebas (PEB).
   - Total domain elektron = $3 + 2 = 5$ domain $\\implies$ Geometri domain: **Bipiramida Trigonal**.
   - **Kaidah Penempatan PEB:** Pasangan elektron bebas membutuhkan ruang sudut tolakan yang lebih luas. Pada geometri bipiramida trigonal, PEB selalu menempati **posisi ekuatorial** (sudut $120^\\circ$) untuk meminimalkan tolakan $90^\\circ$ terhadap domain lain (tolakan $PEB-PEB$ dan $PEB-PEI$ pada posisi aksial menghasilkan tolakan $90^\\circ$ yang tidak stabil).
   - Dengan 3 ligan pada 2 posisi aksial dan 1 posisi ekuatorial, bentuk molekulnya adalah **Bentuk-T (*T-shaped*)** dengan sudut ikatan $\\angle \\ce{F-Cl-F} \\approx 87{,}5^\\circ$ (sedikit tertekan dari $90^\\circ$ akibat dorongan 2 PEB ekuatorial).

2. **Analisis Struktur Ion $\\ce{I3-}$:**
   - Atom pusat $\\ce{I}$ memiliki $7$ elektron valensi $+ 1$ elektron muatan negatif = $8$ elektron.
   - Mengikat $2$ atom $\\ce{I}$ terminal ($2$ PEI).
   - Sisa elektron pada atom pusat: $8 - 2 = 6$ elektron = $3$ PEB.
   - Total domain elektron = $2 + 3 = 5$ domain $\\implies$ Geometri domain: **Bipiramida Trigonal**.
   - Ketiga PEB menempati seluruh $3$ posisi ekuatorial (membentuk bidang datar simetris $120^\\circ$).
   - Kedua atom ligan $\\ce{I}$ menempati posisi aksial berseberangan ($180^\\circ$).
   - Bentuk ion adalah **Linear** ($\angle \\ce{I-I-I} = 180^\\circ$).

**Kesimpulan Pasangan Bentuk Molekul:**
$\\ce{ClF3}$ berbentuk **Bentuk-T** dan $\\ce{I3-}$ berbentuk **Linear**.`,
    solution_framework_template: `1. Hitung Jumlah Domain Elektron Atom Pusat:
• ClF3: PEI = 3, PEB = (7 - 3)/2 = 2 -> Total = 5 domain (tipe AX3E2).
• I3- : PEI = 2, PEB = (7 + 1 - 2)/2 = 3 -> Total = 5 domain (tipe AX2E3).

2. Tentukan Geometri Domain Dasar:
• 5 domain elektron -> geometri dasar bipiramida trigonal.

3. Tempatkan PEB pada Posisi Ekuatorial:
• AX3E2 -> 2 PEB di ekuatorial -> Bentuk-T (T-shaped).
• AX2E3 -> 3 PEB di ekuatorial -> Linear.`,
    generation_type: 'manual',
    source_event: 'OSK Kimia 2023 No. 6 (Puspresnas)',
    year: 2023,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['vsepr', 'domain-elektron', 'geometri-molekul', 'hipervalen', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 2. SOAL RIIL - OSK 2022 No. 8 (Struktur Resonansi & Muatan Formal Fulminat)
  // =========================================================================
  {
    id: 202002,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Muatan Formal, Struktur Resonansi & Kestabilan Relatif Spesi Poliatomik',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Analisis Muatan Formal dan Kontributor Resonansi Utama Ion Sianat vs Fulminat',
    question_text: `Ion sianat ($\\ce{[OCN]-}$) dan ion fulminat ($\\ce{[CNO]-}$) merupakan pasangan isomer konstitusional. Struktur Lewis yang paling berkontribusi (*major contributor*) untuk ion sianat stabil adalah:
$$\\ce{[:\\ddot{O}-C#N:]^-} \\quad \\longleftrightarrow \\quad \\ce{[:\\ddot{O}=C=\\ddot{N}:]^-}$$

Berdasarkan analisis muatan formal atom-atomnya ($q_f = V - L - \\frac{1}{2}B$), alasan utama mengapa garam fulminat (seperti raksa(II) fulminat, $\\ce{Hg(CNO)2}$) bersifat sangat tidak stabil dan merupakan bahan peledak primer sensitif, sedangkan garam sianat stabil dan tidak mudah meledak adalah ....

A. Pada ion fulminat, atom nitrogen memiliki muatan formal $-2$ yang sangat reaktif  
B. Pada seluruh struktur resonansi ion fulminat $\\ce{[CNO]-}$, atom karbon yang kurang elektronegatif terpaksa memikul muatan formal negatif $-1$ atau $-2$, sementara atom oksigen memikul muatan positif $+1$, bertentangan dengan elektronegativitas unsur  
C. Ion fulminat tidak memenuhi aturan oktet pada atom karbon pusatnya  
D. Ikatan karbon-nitrogen pada ion fulminat merupakan ikatan ionik murni yang mudah putus  
E. Ion sianat memiliki ikatan hidrogen intramolekul yang menstabilkan strukturnya`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Analisis Muatan Formal Ion Sianat ($\\ce{[O-C-N]-}$):**
   - Struktur utama: $\\ce{[:\\ddot{O}-C#N:]^-}$
     - Atom $\\ce{O}$: $6 - 6 - \\frac{1}{2}(2) = -1$
     - Atom $\\ce{C}$: $4 - 0 - \\frac{1}{2}(8) = 0$
     - Atom $\\ce{N}$: $5 - 2 - \\frac{1}{2}(6) = 0$
   - Muatan negatif terletak pada atom **oksigen**, yang memiliki keelektronegatifan paling tinggi ($3{,}44$). Ini adalah distribusi muatan yang sangat stabil secara termodinamika.

2. **Analisis Muatan Formal Ion Fulminat ($\\ce{[C-N-O]-}$):**
   - Struktur Lewis terbaik ion fulminat:
     $$\\ce{[:\\bar{C}#N^+-\\ddot{O}:^-]}$$
     - Atom $\\ce{C}$: $4 - 2 - \\frac{1}{2}(6) = -1$
     - Atom $\\ce{N}$: $5 - 0 - \\frac{1}{2}(8) = +1$
     - Atom $\\ce{O}$: $6 - 6 - \\frac{1}{2}(2) = -1$
   - Atau struktur resonansi lainnya: $\\ce{[:\\ddot{C}=N^+=O:]}$ di mana atom $\\ce{C}$ memiliki muatan formal $-2$ dan $\\ce{O}$ muatan formal $0$.
   - **Faktor Ketidakstabilan:**
     Pada semua struktur resonansi ion fulminat, atom **nitrogen pusat bermuatan $+1$**, dan muatan negatif terpaksa ditanggung oleh atom **karbon ($-1$ atau $-2$)**, padahal karbon memiliki keelektronegatifan jauh lebih rendah ($2{,}55$) dibandingkan nitrogen ($3{,}04$) dan oksigen ($3{,}44$).
     Pemisahan muatan berlawanan yang berdekatan ($-\\ce{C^- - N^+-}$) dan pemaksaan muatan negatif pada atom karbon membuat entalpi pembentukan ion fulminat sangat endotermik tinggi dan sangat labil terhadap dekomposisi eksotermik cepat (eksplosif).

**Analisis Opsi Pengecoh:**
- **Opsi A:** Nitrogen memiliki muatan formal $+1$, bukan $-2$.
- **Opsi C:** Seluruh atom pada struktur resonansi fulminat memenuhi aturan oktet ($8$ elektron).
- **Opsi D:** Ikatannya adalah kovalen polar terdelokalisasi, bukan ionik murni.
- **Opsi E:** Tidak ada ikatan hidrogen intramolekul pada ion anorganik sederhana $\\ce{[OCN]-}$.`,
    solution_framework_template: `1. Hitung Muatan Formal Sianat [O-C-N]-:
• q_f(O) = -1, q_f(C) = 0, q_f(N) = 0.
• Muatan negatif berada pada atom paling elektronegatif (O) -> Stabil.

2. Hitung Muatan Formal Fulminat [C-N-O]-:
• Struktur [:C#N-O:] -> q_f(C) = -1, q_f(N) = +1, q_f(O) = -1.
• Muatan negatif jatuh pada C (elektronegativitas rendah) dan N bermuatan positif.

3. Tarik Kesimpulan Kestabilan Termodinamika:
• Distribusi muatan pada fulminat bertentangan dengan aturan elektronegativitas, menimbulkan ketidakstabilan tinggi (eksplosif).`,
    generation_type: 'manual',
    source_event: 'OSK Kimia 2022 No. 8 (Puspresnas)',
    year: 2022,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['muatan-formal', 'struktur-resonansi', 'ion-fulminat', 'ion-sianat', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 3. SOAL RIIL - KSN-K 2021 No. 5 (Hibridisasi & Geometri Kation XeF5+)
  // =========================================================================
  {
    id: 202003,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Hibridisasi Orbital, Geometri Molekul Senyawa Gas Mulia',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Hibridisasi dan Bentuk Geometri Kation Ksenon Pentafluorida [XeF5]+',
    question_text: `Senyawa ksenon heksafluorida dapat bereaksi dengan arsenik pentafluorida menghasilkan garam ionik menurut persamaan reaksi:
$$\\ce{XeF6 + AsF5 -> [XeF5]+[AsF6]-}$$

Berdasarkan teori ikatan valensi dan VSEPR, tipe hibridisasi orbital atom pusat ksenon dan bentuk molekul geometri dari kation $\\ce{[XeF5]+}$ adalah ....

A. $sp^3d$, bipiramida trigonal  
B. $sp^3d^2$, piramida alas bujur sangkar (*square pyramidal*)  
C. $sp^3d^2$, oktahedral  
D. $sp^3d^3$, pentagonal planar  
E. $sp^3d^3$, piramida pentagonal`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Analisis Elektron Valensi pada Kation $\\ce{[XeF5]+}$:**
   - Ksenon ($\\ce{Xe}$) memiliki $8$ elektron valensi.
   - Karena bermuatan $+1$, jumlah elektron yang diperhitungkan pada ksenon adalah $8 - 1 = 7$ elektron.
   - Mengikat $5$ atom fluorin melalui ikatan kovalen tunggal $\\implies 5$ Pasangan Elektron Ikatan (PEI).
   - Elektron non-ikatan yang tersisa pada atom pusat: $7 - 5 = 2$ elektron = **$1$ Pasangan Elektron Bebas (PEB)**.

2. **Penentuan Bilangan Koordinasi & Hibridisasi:**
   - Total domain elektron (bilangan sterik, $SN$) = $5\\text{ PEI} + 1\\text{ PEB} = 6\\text{ domain}$.
   - Bilangan sterik $6$ memerlukan kombinasi 6 orbital atom: satu orbital $s$, tiga orbital $p$, dan dua orbital $d$.
   - **Tipe Hibridisasi:** $\\mathbf{sp^3d^2}$ (geometri domain dasar: Oktahedral).

3. **Penentuan Geometri Molekul:**
   - Molekul dengan formula tipe $\\ce{AX5E}$ memiliki 5 ikatan dan 1 PEB dalam kerangka oktahedral.
   - Bentuk molekul yang dihasilkan adalah **Piramida Alas Bujur Sangkar (*Square Pyramidal*)**.
   - Keempat atom $\\ce{F}$ basal membentuk bidang bujur sangkar, satu atom $\\ce{F}$ apikal berada di atas, dan PEB menempati posisi trans terhadap fluorin apikal. Sudut ikatan $\\angle \\ce{F_{apikal}-Xe-F_{basal}} < 90^\\circ$ akibat tolakan PEB.

*(Sebagai perbandingan, anion $\\ce{[AsF6]-}$ memiliki $SN = 6$ tanpa PEB $\\implies$ oktahedral sempurna).*`,
    solution_framework_template: `1. Hitung Elektron Valensi Efektif Atom Pusat Xe:
• Xe (golongan 18) = 8 elektron.
• Muatan ion kation +1 -> 8 - 1 = 7 elektron.

2. Tentukan Jumlah Pasangan Elektron (Bilangan Sterik):
• 5 ikatan kovalen tunggal dengan F -> PEI = 5.
• Sisa elektron bebas = 7 - 5 = 2 elektron -> PEB = 1.
• Bilangan sterik = 5 + 1 = 6 (AX5E).

3. Tentukan Hibridisasi dan Bentuk:
• 6 domain -> hibridisasi sp3d2.
• 5 ikatan + 1 PEB -> Piramida Bujur Sangkar (Square Pyramidal).`,
    generation_type: 'manual',
    source_event: 'KSN-K Kimia 2021 No. 5 (Kemendikbud)',
    year: 2021,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['hibridisasi', 'ksenon-fluorida', 'vsepr', 'square-pyramidal', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 4. SOAL RIIL - OSK 2024 No. 7 (Momen Dipol & Kepolaran Molekul)
  // =========================================================================
  {
    id: 202004,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Vektor Momen Dipol, Simetri Inversi & Kepolaran Molekul',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Momen Dipol Permanen pada Molekul Simetris dan Asimetris',
    question_text: `Diberikan lima molekul anorganik berikut:
1. Sulfur tetrafluorida ($\\ce{SF4}$)
2. Ksenon tetrafluorida ($\\ce{XeF4}$)
3. Karbon dioksida ($\\ce{CO2}$)
4. Boron trifluorida ($\\ce{BF3}$)
5. *trans*-1,2-dikloroetena ($\\ce{C2H2Cl2}$)

Molekul yang memiliki momen dipol permanen bersih ($\\mu > 0$, bersifat polar) adalah ....

A. Hanya 1  
B. 1 dan 5  
C. 1, 2, dan 5  
D. 2, 3, dan 4  
E. 3, 4, dan 5`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
Momen dipol molekul ($\\mu$) adalah besaran vektor hasil penjumlahan vektor momen dipol setiap ikatan polar ($\\vec{\\mu} = \\sum \\vec{\\mu}_i$). Molekul bersifat nonpolar ($\\mu = 0$) jika memiliki simetri spasial tinggi (misal memiliki titik pusat inversi $i$) sehingga seluruh vektor momen ikatan saling meniadakan.

1. **$\\ce{SF4}$ (Sulfur tetrafluorida):**
   - Atom pusat $\\ce{S}$ ($6$ elektron valensi): mengikat $4$ atom $\\ce{F}$ dan memiliki $1$ PEB ($SN = 5$, tipe $\\ce{AX4E}$).
   - Geometri molekul: **Jungkat-jungkit (*See-saw*)**.
   - Sudut ikatan aksial terdorong bengkok ($\sim 173^\\circ$) dan ekuatorial ($\sim 102^\\circ$).
   - Vektor dipol ikatan polar $\\ce{S-F}$ tidak saling meniadakan. Terdapat momen dipol permanen netto yang signifikan ($\\mu = 0{,}63\\text{ D}$, **Polar**).

2. **$\\ce{XeF4}$ (Ksenon tetrafluorida):**
   - $\\ce{Xe}$ ($8$ elektron valensi): $4$ PEI $+ 2$ PEB ($SN = 6$, tipe $\\ce{AX4E2}$).
   - Geometri molekul: **Bujur Sangkar Planar (*Square planar*)**.
   - Memiliki pusat simetri inversi ($i$). Keempat vektor momen dipol ikatan polar $\\ce{Xe-F}$ pada bidang planar saling meniadakan secara berlawanan ($180^\\circ$), dan 2 PEB aksial saling meniadakan $\\implies \\mu = 0$ (**Nonpolar**).

3. **$\\ce{CO2}$:** Linear simetris $\\ce{O=C=O}$, dua vektor ikatan $\\ce{C=O}$ berlawanan arah $180^\\circ \\implies \\mu = 0$ (**Nonpolar**).

4. **$\\ce{BF3}$:** Segitiga datar (*trigonal planar*), sudut $120^\\circ$ simetris sempurna $\\implies \\mu = 0$ (**Nonpolar**).

5. ***trans*-1,2-dikloroetena:**
   - Kedua ikatan polar $\\ce{C-Cl}$ berada pada posisi berseberangan (*trans*) terhadap ikatan rangkap dua $\\ce{C=C}$.
   - Memiliki titik pusat inversi di tengah ikatan $\\ce{C=C}$. Vektor dipol $\\ce{C-Cl}$ dan $\\ce{C-H}$ saling membatalkan tepat berlawanan $\\implies \\mu = 0$ (**Nonpolar**). (Sebagai catatan, *cis*-isomer memiliki $\\mu = 1{,}90\\text{ D}$).

**Kesimpulan:**
Hanya molekul nomor 1 ($\\ce{SF4}$) yang memiliki momen dipol permanen ($\\mu > 0$).`,
    solution_framework_template: `1. Analisis Geometri Setiap Molekul:
• SF4: tipe AX4E -> bentuk jungkat-jungkit (asimetris) -> μ > 0 (POLAR).
• XeF4: tipe AX4E2 -> bujur sangkar planar (simetri inversi) -> μ = 0 (NONPOLAR).
• CO2: linear simetris -> μ = 0 (NONPOLAR).
• BF3: trigonal planar simetris -> μ = 0 (NONPOLAR).
• trans-1,2-dikloroetena: simetri trans membatalkan vektor dipol -> μ = 0 (NONPOLAR).

2. Identifikasi Molekul Polar:
• Hanya SF4 yang bersifat polar.`,
    generation_type: 'manual',
    source_event: 'OSK Kimia 2024 No. 7 (BPTI / Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['momen-dipol', 'kepolaran-molekul', 'simetri-molekul', 'sf4', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 5. SOAL RIIL - OSK 2020 No. 8 (Teori Orbital Molekul MO Molekul Diatomik)
  // =========================================================================
  {
    id: 202005,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Teori Orbital Molekul (MO), Orde Ikatan & Sifat Kemagnetan',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Konfigurasi Orbital Molekul dan Sifat Paramagnetik Molekul Diatomik B2 dan C2',
    question_text: `Menurut teori orbital molekul (*Molecular Orbital Theory*), interaksi pencampuran orbital $s-p$ (*s-p mixing*) terjadi secara signifikan pada molekul diatomik homonuklir periode 2 yang memiliki nomor atom $Z \\le 7$ (seperti $\\ce{B2, C2, N2}$).

Pernyataan berikut yang **paling tepat** mengenai molekul diboron ($\\ce{B2}$) dalam keadaan dasar adalah ....

A. Memiliki orde ikatan $2$ dan bersifat diamagnetik  
B. Memiliki orde ikatan $1$ dan bersifat paramagnetik dengan dua elektron tak berpasangan pada orbital $\\pi_{2p}$  
C. Memiliki orde ikatan $1$ dan bersifat diamagnetik dengan dua elektron berpasangan pada orbital $\\sigma_{2p}$  
D. Memiliki orde ikatan $0$ sehingga tidak stabil dan tidak dapat terbentuk  
E. Elektron terluarnya menempati orbital antiikatan $\\sigma_{2p}^*$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Pengaruh Pencampuran $s-p$ (*s-p mixing*):**
   Pada molekul dengan $Z \\le 7$ ($\\ce{B2, C2, N2}$), perbedaan energi antara orbital atom $2s$ dan $2p$ relatif kecil, sehingga terjadi interaksi tolakan kuantum antara orbital simetri $\\sigma_{2s}$ dan $\\sigma_{2p}$.
   Akibatnya:
   - Energi orbital $\\sigma_{2p}$ terdorong naik ke atas.
   - Urutan energi orbital molekul valensi menjadi:
     $$\\sigma_{2s} < \\sigma_{2s}^* < \\pi_{2p_x} = \\pi_{2p_y} < \\sigma_{2p} < \\pi_{2p_x}^* = \\pi_{2p_y}^* < \\sigma_{2p}^*$$

2. **Pengisian Elektron pada Molekul $\\ce{B2}$:**
   - Setiap atom Boron ($Z = 5$) menyumbang 3 elektron valensi ($2s^2 2p^1$), total elektron valensi = $6$ elektron.
   - Dua elektron pertama mengisi orbital ikatan $\\sigma_{2s}$: $(\\sigma_{2s})^2$
   - Dua elektron berikutnya mengisi orbital antiikatan $\\sigma_{2s}^*$: $(\\sigma_{2s}^*)^2$
   - Dua elektron sisanya menempati orbital ikatan degenerat $\\pi_{2p}$ yang memiliki energi setara. Menurut **Kaidah Hund**, kedua elektron ini menempati orbital $\\pi_{2p_x}$ dan $\\pi_{2p_y}$ masing-masing satu elektron dengan spin paralel:
     $$(\\sigma_{2s})^2 \\ (\\sigma_{2s}^*)^2 \\ (\\pi_{2p_x})^1 (\\pi_{2p_y})^1$$

3. **Perhitungan Orde Ikatan (*Bond Order*):**
   $$\\text{Bond Order} = \\frac{N_b - N_a}{2} = \\frac{4 - 2}{2} = 1$$
   - $N_b$ (elektron ikatan): $2$ pada $\\sigma_{2s}$ dan $2$ pada $\\pi_{2p} = 4$.
   - $N_a$ (elektron antiikatan): $2$ pada $\\sigma_{2s}^* = 2$.

4. **Sifat Kemagnetan:**
   Karena terdapat **dua elektron tak berpasangan** pada orbital degenerat $\\pi_{2p}$, molekul $\\ce{B2}$ bersifat **Paramagnetik**.

*(Fakta eksperimen mengonfirmasi $\\ce{B2}$ bersifat paramagnetik, yang menjadi bukti nyata keberadaan fenomena s-p mixing).*`,
    solution_framework_template: `1. Pahami Urutan Energi MO dengan s-p Mixing (Z <= 7):
• Urutan: σ_2s < σ*_2s < π_2p < σ_2p < π*_2p < σ*_2p.

2. Hitung Elektron Valensi B2:
• 2 atom B * 3 elektron valensi = 6 elektron.

3. Konfigurasi MO:
• (σ_2s)^2 (σ*_2s)^2 (π_2p)^2.
• Berdasarkan Hund, (π_2p)^2 terisi 1 elektron di π_2px dan 1 di π_2py (paralel).

4. Hitung Orde Ikatan & Magnetan:
• BO = (4 - 2) / 2 = 1.
• 2 elektron tak berpasangan -> PARAMAGNETIK.`,
    generation_type: 'manual',
    source_event: 'OSK Kimia 2020 No. 8 (Kemendikbud)',
    year: 2020,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['orbital-molekul', 'mo-theory', 'b2', 'orde-ikatan', 'paramagnetik', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Sudut Ikatan Hidrida Golongan 15 & Aturan Drago
  // =========================================================================
  {
    id: 202006,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Variasi Sudut Ikatan Molekul Hidrida & Aturan Drago (Drago\'s Rule)',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penjelasan Anomali Penurunan Tajam Sudut Ikatan NH3 ke PH3 Berdasarkan Aturan Drago',
    question_text: `Data eksperimen menunjukkan sudut ikatan ($\\angle \\ce{H-E-H}$) untuk molekul hidrida golongan 15 berturut-turut adalah:
$$\\ce{NH3} = 107{,}8^\\circ \\quad \\ce{PH3} = 93{,}5^\\circ \\quad \\ce{AsH3} = 91{,}8^\\circ \\quad \\ce{SbH3} = 91{,}3^\\circ$$

Terjadi penurunan sudut ikatan yang sangat tajam dan drastis dari $\\ce{NH3}$ ($107{,}8^\\circ$) ke $\\ce{PH3}$ ($93{,}5^\\circ$), sedangkan dari $\\ce{PH3}$ ke $\\ce{SbH3}$ perubahannya sangat kecil dan mendekati $90^\\circ$.

Penjelasan teoretis modern yang paling tepat untuk fenomena ini menurut Aturan Drago (*Drago's Rule*) adalah ....

A. Atom fosforus memiliki orbital $3d$ kosong yang mendistorsi sudut ikatan  
B. Pada $\\ce{NH3}$, terjadi hibridisasi $sp^3$ nyata karena ukuran nitrogen kecil dan elektronegativitasnya tinggi; sedangkan pada $\\ce{PH3}$ dan hidrida bawahnya, energi pembelahan/hibridisasi tidak terkompensasi sehingga ikatan $\\ce{P-H}$ terbentuk menggunakan orbital $p$ murni yang saling tegak lurus ($90^\\circ$) dan pasangan elektron bebas menempati orbital $3s$ murni  
C. Gaya tolak pasangan elektron ikatan $\\ce{P-H}$ lebih besar dibandingkan $\\ce{N-H}$  
D. Fosforus membentuk ikatan ionik parsial dengan hidrogen sedangkan nitrogen membentuk ikatan kovalen murni  
E. Molekul $\\ce{PH3}$ terpolimerisasi membentuk jaringan tetrahedral koordinasi`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Aturan Drago (*Drago's Rule*):**
   Aturan Drago menyatakan bahwa jika:
   - Atom pusat berasal dari periode 3 atau lebih bawah.
   - Atom pusat memiliki setidaknya satu pasangan elektron bebas (PEB).
   - Elektronegativitas ligan yang terikat $\\le 2{,}5$ (seperti hidrogen, $EN = 2{,}20$).
   Maka **hibridisasi orbital tidak berlangsung secara signifikan**.

2. **Perbedaan Mekanisme pada $\\ce{NH3}$ vs $\\ce{PH3}$:**
   - **Pada $\\ce{NH3}$ (Periode 2):** Ukuran atom nitrogen kecil, tumpang-tindih ikatan kovalen sangat kuat, dan energi yang dilepaskan dari pembentukan ikatan kovalen cukup besar untuk mengompensasi energi eksitasi hibridisasi orbital $2s$ dan $2p$ menjadi $4$ orbital hibrida $sp^3$. Sudut ikatan mendekati sudut tetrahedral ideal ($109{,}5^\\circ$), tertekan sedikit oleh PEB menjadi $107{,}8^\\circ$.
   - **Pada $\\ce{PH3}$ (Periode 3):** Ukuran atom fosforus jauh lebih besar ($r \\approx 110\\text{ pm}$), ikatan $\\ce{P-H}$ lebih panjang dan lebih lemah, sehingga energi ikatan tidak cukup kuat untuk membayar biaya promosi/hibridisasi orbital $3s$ ke orbital hibrida $sp^3$.
   - Akibatnya, ikatan $\\ce{P-H}$ dibentuk menggunakan **orbital atom $3p_x, 3p_y, 3p_z$ yang hampir murni**, yang secara alamiah berorientasi saling tegak lurus dengan sudut $90^\\circ$. Sudut ikatan teramati $93{,}5^\\circ$ (sedikit di atas $90^\\circ$ hanya karena tolakan sterik kecil antar-atom hidrogen).
   - Pasangan elektron bebas pada $\\ce{PH3}$ menempati **orbital $3s$ sferis non-terhibridisasi**, menjelaskan mengapa $\\ce{PH3}$ adalah basa Lewis yang jauh lebih lemah dibandingkan $\\ce{NH3}$.

**Analisis Opsi Pengecoh:**
- **Opsi A:** Orbital $d$ tidak terlibat dalam geometri molekul hidrida sederhana golongan utama.
- **Opsi C:** Bertentangan dengan kenyataan, elektron ikatan pada $\\ce{P-H}$ lebih jauh dari inti sehingga tolakannya justru lebih lemah.`,
    solution_framework_template: `1. Analisis Data Sudut Ikatan:
• NH3: 107.8° (mendekati tetrahedral 109.5° -> hibridisasi sp3).
• PH3: 93.5° (sangat dekat dengan 90°).

2. Terapkan Aturan Drago:
• Syarat: Atom pusat periode >= 3, ada PEB, ligan EN <= 2.5 (H = 2.2).
• Pada PH3, hibridisasi tidak terjadi.

3. Karakter Orbital Ikatan PH3:
• Ikatan P-H dibentuk dari orbital 3p murni yang saling tegak lurus (90°).
• PEB berada dalam orbital 3s murni.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['aturan-drago', 'sudut-ikatan', 'dragos-rule', 'hibridisasi', 'soal-sintetis-twin'],
  },

  // =========================================================================
  // 7. SOAL SINTETIS - Energi Kisi Born-Haber & Persamaan Kapustinskii
  // =========================================================================
  {
    id: 202007,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Energi Kisi Kristal Ionik, Siklus Born-Haber & Persamaan Kapustinskii',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perbandingan Besaran Relatif Energi Kisi Senyawa Kristal Ionik Anorganik',
    question_text: `Persamaan Kapustinskii menyatakan bahwa energi kisi ($U_L$) dari suatu kristal ionik berbanding lurus dengan hasil kali muatan ion ($|z_+ z_-|$) dan berbanding terbalik dengan jarak antarmusat ion ($d = r_+ + r_-$):
$$U_L \\propto \\frac{|z_+ z_-|}{r_+ + r_-}$$

Diberikan empat senyawa ionik berikut:
1. Natrium fluorida ($\\ce{NaF}$)
2. Kalsium oksida ($\\ce{CaO}$)
3. Magnesium oksida ($\\ce{MgO}$)
4. Kalium klorida ($\\ce{KCl}$)

Urutan besarnya energi kisi kristal dari yang **paling kecil ke yang paling besar** adalah ....
(Data jari-jari ion: $r_{\\ce{Mg^2+}} < r_{\\ce{Ca^2+}} < r_{\\ce{Na+}} < r_{\\ce{K+}}$ dan $r_{\\ce{F-}} < r_{\\ce{O^2-}} < r_{\\ce{Cl-}}$)

A. $\\ce{KCl} < \\ce{NaF} < \\ce{CaO} < \\ce{MgO}$  
B. $\\ce{NaF} < \\ce{KCl} < \\ce{MgO} < \\ce{CaO}$  
C. $\\ce{MgO} < \\ce{CaO} < \\ce{NaF} < \\ce{KCl}$  
D. $\\ce{KCl} < \\ce{CaO} < \\ce{NaF} < \\ce{MgO}$  
E. $\\ce{CaO} < \\ce{MgO} < \\ce{KCl} < \\ce{NaF}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Faktor Muatan Ion ($|z_+ z_-|$):**
   Faktor muatan memberikan pengaruh paling dominan (orde kuadratik):
   - Senyawa kation/anion divalen ($+2 / -2$): $|z_+ z_-| = |(+2)(-2)| = 4$. Senyawa: $\\ce{MgO}$ dan $\\ce{CaO}$.
   - Senyawa kation/anion monovalen ($+1 / -1$): $|z_+ z_-| = |(+1)(-1)| = 1$. Senyawa: $\\ce{NaF}$ dan $\\ce{KCl}$.
   - Karena muatan $4$ kali lebih besar, energi kisi $\\ce{MgO}$ dan $\\ce{CaO}$ ($\sim 3400 - 3800\\text{ kJ/mol}$) jauh lebih besar daripada $\\ce{NaF}$ dan $\\ce{KCl}$ ($\sim 700 - 900\\text{ kJ/mol}$).

2. **Faktor Jarak Antarmusat Ion ($r_+ + r_-$):**
   - **Komparasi $\\ce{KCl}$ vs $\\ce{NaF}$ (keduanya ber-muatan $1 \\times 1$):**
     $\\ce{K+}$ lebih besar dari $\\ce{Na+}$, dan $\\ce{Cl-}$ lebih besar dari $\\ce{F-}$.
     Jarak $(r_{\\ce{K+}} + r_{\\ce{Cl-}}) > (r_{\\ce{Na+}} + r_{\\ce{F-}})$.
     Maka energi kisi $\\ce{KCl}$ ($717\\text{ kJ/mol}$) **lebih kecil** daripada $\\ce{NaF}$ ($926\\text{ kJ/mol}$).
   - **Komparasi $\\ce{CaO}$ vs $\\ce{MgO}$ (keduanya ber-muatan $2 \\times 2$):**
     $\\ce{Mg^2+}$ ($72\\text{ pm}$) jauh lebih kecil daripada $\\ce{Ca^2+}$ ($100\\text{ pm}$).
     Jarak $(r_{\\ce{Mg^2+}} + r_{\\ce{O^2-}}) < (r_{\\ce{Ca^2+}} + r_{\\ce{O^2-}})$.
     Maka energi kisi $\\ce{CaO}$ ($3401\\text{ kJ/mol}$) **lebih kecil** daripada $\\ce{MgO}$ ($3791\\text{ kJ/mol}$).

**Urutan Energi Kisi dari Terkecil ke Terbesar:**
$$\\ce{KCl} (717\\text{ kJ/mol}) < \\ce{NaF} (926\\text{ kJ/mol}) < \\ce{CaO} (3401\\text{ kJ/mol}) < \\ce{MgO} (3791\\text{ kJ/mol})$$`,
    solution_framework_template: `1. Kelompokkan Berdasarkan Perkalian Muatan (|z+ * z-|):
• Garam 1:1 (NaF, KCl) -> faktor muatan = 1.
• Garam 2:2 (MgO, CaO) -> faktor muatan = 4 (energi kisi jauh lebih tinggi).

2. Bandingkan Ukuran Ion dalam Kelompok yang Sama:
• Untuk 1:1: K+ dan Cl- lebih besar dari Na+ dan F- -> Jarak KCl lebih besar -> Energi kisi KCl < NaF.
• Untuk 2:2: Ca2+ lebih besar dari Mg2+ -> Jarak CaO lebih besar -> Energi kisi CaO < MgO.

3. Susun Urutan:
• KCl < NaF < CaO < MgO.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['energi-kisi', 'born-haber', 'kapustinskii', 'jari-jari-ion', 'soal-sintetis-twin'],
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Gaya Antarmolekul & Jaringan Ikatan Hidrogen 3D H2O
  // =========================================================================
  {
    id: 202008,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Ikatan Hidrogen Jaringan 3D vs 1D, Sifat Fisik & Titik Didih',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Anomali Titik Didih Air (H2O) yang Lebih Tinggi daripada Hidrogen Fluorida (HF)',
    question_text: `Senyawa hidrogen fluorida ($\\ce{HF}$) memiliki ikatan kovalen $\\ce{H-F}$ yang paling polar di antara hidrida non-logam karena fluorin memiliki keelektronegatifan paling tinggi ($3{,}98$ vs $3{,}44$ pada oksigen). Akibatnya, kekuatan ikatan hidrogen tunggal $\\ce{F-H\\cdots F}$ ($\sim 29\\text{ kJ/mol}$) lebih kuat dibandingkan ikatan hidrogen tunggal $\\ce{O-H\\cdots O}$ ($\sim 21\\text{ kJ/mol}$).

Namun secara eksperimen, titik didih normal air ($\\ce{H2O}$, $100^\\circ\\text{C}$) jauh lebih tinggi daripada hidrogen fluorida ($\\ce{HF}$, $19{,}5^\\circ\\text{C}$). Faktor penentu utama yang mendasari perbedaan titik didih tersebut adalah ....

A. Molekul air memiliki massa molar yang sedikit lebih besar daripada hidrogen fluorida  
B. Setiap molekul $\\ce{H2O}$ memiliki stoikiometri $2$ atom hidrogen dan $2$ pasangan elektron bebas sehingga mampu membentuk jaringan $4$ ikatan hidrogen tiga dimensi (3D) per molekul, sedangkan $\\ce{HF}$ dibatasi oleh hanya $1$ atom hidrogen per molekul sehingga rata-rata hanya membentuk $2$ ikatan hidrogen berbentuk rantai linear/zigzag  
C. Ikatan hidrogen pada $\\ce{HF}$ bersifat intramolekul sedangkan pada air bersifat intermolekul  
D. Molekul air mengalami ionisasi otomatis sempurna menjadi $\\ce{H3O+}$ dan $\\ce{OH-}$ dalam fasa cair  
E. Gaya dispersi London pada air jauh lebih dominan daripada ikatan dipol-dipol pada $\\ce{HF}$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Analisis Donor dan Akseptor Ikatan Hidrogen:**
   - **Pada Molekul $\\ce{H2O}$:**
     - Memiliki $2$ atom hidrogen yang terikat pada oksigen (dua donor proton ikatan hidrogen).
     - Memiliki $2$ pasangan elektron bebas (PEB) pada atom oksigen (dua akseptor ikatan hidrogen).
     - Rasio donor : akseptor adalah $2 : 2 = 1 : 1$ sempurna!
     - Setiap molekul $\\ce{H2O}$ dapat berpartisipasi dalam **$4$ ikatan hidrogen sekaligus**, membentuk jaringan kisi tetrahedral tiga dimensi (3D network) yang sangat ekstensif dan kokoh.
     - Energi total untuk memutuskan jaringan ikatan hidrogen saat penguapan air adalah $\\sim 2 \\times 21\\text{ kJ/mol} \\approx 42\\text{ kJ/mol}$ entalpi penguapan.

2. **Pada Molekul $\\ce{HF}$:**
   - Memiliki $3$ pasang elektron bebas pada atom fluorin (tiga akseptor potensial).
   - Tetapi hanya memiliki **$1$ atom hidrogen** (hanya satu donor proton).
   - Akibat defisiensi atom hidrogen (rasio donor : akseptor = $1 : 3$), jumlah ikatan hidrogen dibatasi oleh jumlah hidrogen yang tersedia.
   - Rata-rata setiap molekul $\\ce{HF}$ hanya dapat membentuk **maksimum $2$ ikatan hidrogen** per molekul, membentuk rantai zigzag satu dimensi (1D chain) atau cincin oligomerik siklik, bukan jaringan 3D.
   - Karena jumlah ikatan hidrogen per mol molekul hanya setengah dari air, energi kohesi total pada cairan $\\ce{HF}$ lebih rendah daripada air, sehingga titik didihnya jauh lebih rendah ($19{,}5^\\circ\\text{C}$ vs $100^\\circ\\text{C}$).

**Analisis Opsi Pengecoh:**
- **Opsi A:** Massa molar $\\ce{H2O}$ ($18{,}02\\text{ g/mol}$) justru lebih kecil daripada $\\ce{HF}$ ($20{,}01\\text{ g/mol}$), sehingga faktor massa molar harusnya menguntungkan $\\ce{HF}$.
- **Opsi C:** Ikatan hidrogen pada $\\ce{HF}$ adalah intermolekul antarmolekul tetangga.
- **Opsi D:** Derajat autoionisasi air sangat kecil ($K_w = 10^{-14}$).`,
    solution_framework_template: `1. Identifikasi Jumlah Donor dan Akseptor Ikatan Hidrogen:
• H2O: 2 atom H (donor) dan 2 PEB pada O (akseptor).
• HF: 1 atom H (donor) dan 3 PEB pada F (akseptor).

2. Hitung Rata-rata Jumlah Ikatan Hidrogen per Molekul:
• H2O: Rasio sempurna 2:2 -> membentuk rata-rata 4 ikatan hidrogen/molekul (jaringan 3D).
• HF : Dibatasi oleh hanya 1 atom H -> rata-rata hanya 2 ikatan hidrogen/molekul (rantai zigzag 1D).

3. Hubungkan dengan Entalpi Penguapan & Titik Didih:
• Energi kohesif total jaringan 3D H2O jauh lebih besar, menghasilkan titik didih 100°C.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['ikatan-hidrogen', 'gaya-antarmolekul', 'titik-didih-air', 'anomali-air', 'soal-sintetis-twin'],
  },

  // =========================================================================
  // 9. SOAL SINTETIS - Geometri Ion Antar-Halogen [ICl2]+ vs [ICl4]-
  // =========================================================================
  {
    id: 202009,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Spesi Ionik Antar-Halogen, Sudut Ikatan & Domain Elektron Bebas',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perbandingan Bentuk Molekul Kation [ICl2]+ dan Anion [ICl4]-',
    question_text: `Senyawa antar-halogen iodin triklorida ($\\ce{I2Cl6}$) dalam fasa lelehan mengalami disosiasi autoionisasi menghasilkan pasangan kation dan anion:
$$\\ce{I2Cl6 <=> [ICl2]+ + [ICl4]-}$$

Bentuk molekul kation $\\ce{[ICl2]+}$ dan anion $\\ce{[ICl4]-}$ berturut-turut adalah ....

A. Linear dan tetrahedral  
B. Bengkok (*bent*) dan bujur sangkar planar (*square planar*)  
C. Linear dan bujur sangkar planar (*square planar*)  
D. Bengkok (*bent*) dan tetrahedral  
E. Bentuk-T (*T-shaped*) dan oktahedral`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Analisis Kation $\\ce{[ICl2]+}$:**
   - Atom pusat $\\ce{I}$ memiliki $7$ elektron valensi $- 1$ (muatan $+1$) = $6$ elektron.
   - Mengikat $2$ atom $\\ce{Cl}$ ($2$ PEI).
   - Sisa elektron bebas: $6 - 2 = 4$ elektron = **$2$ Pasangan Elektron Bebas (PEB)**.
   - Total domain elektron (bilangan sterik) = $2\\text{ PEI} + 2\\text{ PEB} = 4\\text{ domain}$ (tipe $\\ce{AX2E2}$, isoelektronik dengan $\\ce{H2O}$ atau $\\ce{OF2}$).
   - Geometri domain: Tetrahedral.
   - Bentuk molekul: **Bengkok (*Bent*)** dengan sudut ikatan $\\angle \\ce{Cl-I-Cl} \\approx 103^\\circ - 105^\\circ$.

2. **Analisis Anion $\\ce{[ICl4]-}$:**
   - Atom pusat $\\ce{I}$ memiliki $7$ elektron valensi $+ 1$ (muatan $-1$) = $8$ elektron.
   - Mengikat $4$ atom $\\ce{Cl}$ ($4$ PEI).
   - Sisa elektron bebas: $8 - 4 = 4$ elektron = **$2$ Pasangan Elektron Bebas (PEB)**.
   - Total domain elektron (bilangan sterik) = $4\\text{ PEI} + 2\\text{ PEB} = 6\\text{ domain}$ (tipe $\\ce{AX4E2}$, isoelektronik dengan $\\ce{XeF4}$).
   - Geometri domain: Oktahedral.
   - Kedua PEB saling menempati posisi aksial berseberangan ($180^\\circ$) untuk meminimalkan tolakan $PEB-PEB$.
   - Keempat ligan $\\ce{Cl}$ berada pada bidang ekuatorial membentuk sudut $90^\\circ$.
   - Bentuk molekul: **Bujur Sangkar Planar (*Square Planar*)**.

**Kesimpulan:**
$\\ce{[ICl2]+}$ berbentuk **Bengkok (*bent*)** dan $\\ce{[ICl4]-}$ berbentuk **Bujur Sangkar Planar (*square planar*)**.`,
    solution_framework_template: `1. Analisis Kation [ICl2]+:
• Elektron valensi I = 7 - 1 = 6 elektron.
• PEI = 2, PEB = (6 - 2)/2 = 2.
• Bilangan sterik = 4 (tipe AX2E2) -> Bentuk Bengkok (Bent).

2. Analisis Anion [ICl4]-:
• Elektron valensi I = 7 + 1 = 8 elektron.
• PEI = 4, PEB = (8 - 4)/2 = 2.
• Bilangan sterik = 6 (tipe AX4E2) -> Bujur Sangkar Planar (Square Planar).

3. Pilih Opsi yang Sesuai:
• Bengkok dan bujur sangkar planar.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['antar-halogen', 'vsepr', 'square-planar', 'bent-shape', 'soal-sintetis-twin'],
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Orbital Molekul Karbon Monoksida (CO vs CO+)
  // =========================================================================
  {
    id: 202010,
    pillar_number: 2,
    module_id: 2,
    curriculum: 'osn',
    subtopic: 'Orbital Molekul Heteronuklir CO & Pengaruh Ionisasi pada Panjang Ikatan',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Pengaruh Pelepasan Elektron terhadap Panjang Ikatan C-O pada Molekul Karbon Monoksida',
    question_text: `Molekul karbon monoksida ($\\ce{CO}$) memiliki total 10 elektron valensi dengan konfigurasi orbital molekul (MO) keadaan dasar:
$$(\\sigma_{2s})^2 \\ (\\sigma_{2s}^*)^2 \\ (\\pi_{2p})^4 \\ (\\sigma_{2p})^2$$

Ketika molekul netral $\\ce{CO}$ diionisasi menjadi kation $\\ce{CO+}$ melalui pelepasan satu elektron dari orbital molekul terluar yang terisi (*HOMO*):
$$\\ce{CO -> CO+ + e-}$$

Data spektroskopi menunjukkan bahwa panjang ikatan $\\ce{C-O}$ pada ion $\\ce{CO+}$ ($111{,}5\\text{ pm}$) sedikit **memendek** dibandingkan pada molekul netral $\\ce{CO}$ ($112{,}8\\text{ pm}$), dan frekuensi vibrasi inframerahnya meningkat. Penjelasan teoretis orbital molekul yang mendasari fenomena unik tersebut adalah ....

A. Elektron terlepas dari orbital ikatan $\\pi_{2p}$ yang menurunkan gaya tolak Coulomb  
B. Orbital HOMO pada molekul $\\ce{CO}$ (orbital $\\sigma_{2p}$) memiliki karakter sedikit antiikatan (*weakly antibonding*) akibat interaksi pencampuran orbital $s-p$ (*s-p mixing*) yang kuat antara orbital $2s$ karbon dan $2p$ oksigen, sehingga pelepasan elektron dari orbital ini justru memperkuat ikatan netto  
C. Atom karbon mengalami hibridisasi ulang dari $sp$ menjadi $sp^2$  
D. Kation $\\ce{CO+}$ membentuk ikatan rangkap empat antara $\\ce{C}$ dan $\\ce{O}$  
E. Terjadi peningkatan jumlah elektron pada orbital ikatan $\\pi_{2p}$ melalui transfer muatan intramolekul`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Orbital HOMO Molekul $\\ce{CO}$:**
   - Dalam diagram orbital molekul heteronuklir $\\ce{CO}$, orbital atom karbon ($2s, 2p$) memiliki energi lebih tinggi daripada orbital atom oksigen karena oksigen lebih elektronegatif.
   - Terjadi pencampuran simetri yang kuat (*s-p mixing*) antara orbital $2s$ karbon dan orbital $2p_z$ oksigen serta sebaliknya.
   - Akibat pencampuran ini, orbital molekul $\\sigma$ teratas (sering dinotasikan sebagai $3\\sigma$ atau $\\sigma_{2p}$) terkonsentrasi sebagian besar pada atom karbon dan bertindak sebagai pasangan elektron bebas berarah keluar (*lone pair on carbon*).
   - Yang terpenting, orbital HOMO ($3\\sigma$) ini memiliki **karakter sedikit antiikatan (*weakly antibonding*)** terhadap daerah antarmusat inti $\\ce{C-O}$.

2. **Dampak Ionisasi $\\ce{CO} \\to \\ce{CO+} + e^-$:**
   - Ketika satu elektron dilepaskan dari orbital HOMO ($3\\sigma$), suatu elektron yang bersifat antiikatan dikeluarkan dari molekul.
   - Penghilangan karakter antiikatan ini menyebabkan tarikan efektif antar-inti menguat, sehingga:
     - Orde ikatan formal tampaknya berkurang dari $3$ menjadi $2{,}5$, namun kekuatan ikatan fisik justru **meningkat**.
     - Panjang ikatan $\\ce{C-O}$ **memendek** dari $112{,}8\\text{ pm}$ (pada $\\ce{CO}$) menjadi $111{,}5\\text{ pm}$ (pada $\\ce{CO+}$).
     - Konstanta gaya ikatan ($k$) membesar dan frekuensi vibrasi peregangan inframerah ($\\nu_{\\ce{CO}}$) naik dari $2143\\text{ cm}^{-1}$ menjadi $2184\\text{ cm}^{-1}$.

**Analisis Opsi Pengecoh:**
- **Opsi A:** Elektron terluar (HOMO) adalah orbital $\\sigma$, bukan $\\pi$. Pelepasan dari orbital $\\pi$ ikatan sejati akan memperlemah dan memperpanjang ikatan.
- **Opsi C:** Hibridisasi adalah model teori ikatan valensi lokal, bukan MO theory.
- **Opsi D:** Tidak terbentuk ikatan rangkap empat.`,
    solution_framework_template: `1. Tinjau Orbital HOMO Molekul CO:
• Konfigurasi: (σ_2s)^2 (σ*_2s)^2 (π_2p)^4 (σ_2p)^2.
• HOMO adalah orbital σ_2p (atau 3σ) yang berpusat di atom C.

2. Pahami Pengaruh s-p Mixing Heteronuklir:
• Pencampuran s-p memberikan karakter sedikit anti-ikatan (weakly antibonding) pada orbital HOMO ini.

3. Efek Pelepasan Elektron:
• Melepas elektron dari orbital antibonding memperkuat ikatan netto.
• Akibatnya, panjang ikatan C-O memendek (112.8 pm -> 111.5 pm) dan frekuensi vibrasi meningkat.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['orbital-molekul-heteronuklir', 'karbon-monoksida', 'homo-lumo', 'panjang-ikatan', 'soal-sintetis-twin'],
  },
];
