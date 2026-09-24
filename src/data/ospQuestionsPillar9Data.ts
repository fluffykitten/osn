/**
 * ospQuestionsPillar9Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSP (Olimpiade Sains Provinsi / OSN-P)
 * 
 * PILAR 9: Kimia Organik Lanjut, Stereokimia Dinamis, Penataan Ulang & Reaksi Perisiklik
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSP / KSN-P Puspresnas 2018-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi OSP Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 309001 - 309010
 * - 3 = Jalur Olimpiade OSP (Provinsi)
 * - 09 = Pilar 9
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSP_PILLAR_9_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSP 2023 No. 25 (Pro-kiralitas Permukaan re / si & Reduksi Enzimatis)
  // =========================================================================
  {
    id: 309001,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Pro-kiralitas (Permukaan re / si) & Topisitas Reduksi Karbonil',
    title: 'Deskriptor Topisitas Pro-kiralitas (Permukaan re / si) pada Reduksi Asetofenon',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Molekul planar sp2 dengan dua substituen berbeda dapat memiliki dua muka pro-kiralitas yang berbeda (*re* dan *si*). Tinjau molekul asetofenon ($\\ce{C6H5-CO-CH3}$) di mana atom karbon karbonil berikatan dengan gugus fenil ($\\ce{-C6H5}$), gugus metil ($\\ce{-CH3}$), dan oksigen karbonil ($=\\ce{O}$).

Berdasarkan aturan prioritas Cahn-Ingold-Prelog (CIP):
1. Bagaimanakah urutan prioritas ketiga substituen pada karbon karbonil tersebut?
2. Jika suatu enzim alkohol dehidrogenase mentransfer ion hidrida ($\ce{H-}$) secara stereospesifik hanya dari muka *re* (permukaan *re*-face), stereoisomer alkohol apakah yang dihasilkan?

A. Prioritas: $=\\ce{O} > -\\ce{C6H5} > -\\ce{CH3}$; seragan muka *re* menghasilkan $(R)\\text{-1-feniletanol}$
B. Prioritas: $=\\ce{O} > -\\ce{C6H5} > -\\ce{CH3}$; seragan muka *re* menghasilkan $(S)\\text{-1-feniletanol}$
C. Prioritas: $-\\ce{C6H5} > =\\ce{O} > -\\ce{CH3}$; seragan muka *re* menghasilkan $(R)\\text{-1-feniletanol}$
D. Prioritas: $=\\ce{O} > -\\ce{CH3} > -\\ce{C6H5}$; seragan muka *si* menghasilkan campuran rasemat
E. Prioritas: $-\\ce{C6H5} > -\\ce{CH3} > =\\ce{O}$; seragan muka *re* menghasilkan $(S)\\text{-1-feniletanol}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Pembahasan:**
1. Penentuan Prioritas Cahn-Ingold-Prelog (CIP) pada karbon karbonil asetofenon:
   - Gugus 1: Oksigen karbonil ($=\\ce{O}$, nomor atom 8).
   - Gugus 2: Gugus fenil ($\\ce{-C6H5}$, atom C mengikat (C, C, C) melalui resonansi cincin aromatik).
   - Gugus 3: Gugus metil ($\\ce{-CH3}$, atom C mengikat (H, H, H)).
   - Urutan prioritas CIP:
     $$=\\ce{O} > -\\ce{C6H5} > -\\ce{CH3}$$
2. Penentuan Muka *re* vs *si*:
   - Menghadap muka planar: jika lintasan dari prioritas 1 $\\to$ 2 $\\to$ 3 searah putaran jarum jam (clockwise), muka tersebut adalah **muka *re*** (*rectus*).
   - Jika berlawanan jarum jam (counter-clockwise), muka tersebut adalah **muka *si*** (*sinister*).
3. Serangan Nukleofil Hidrida ($\\ce{H-}$) dari Muka *re*:
   - Hidrida (prioritas 4) masuk dari arah muka *re* (menghadap ke pengamat).
   - Setelah adisi, oksigen menjadi gugus $\\ce{-OH}$ (prioritas 1), fenil (prioritas 2), metil (prioritas 3), dan hidrogen (prioritas 4 mengarah ke belakang pengamat, menjauh).
   - Penelusuran $1 (\\ce{-OH}) \\to 2 (\\ce{Ph}) \\to 3 (\\ce{Me})$ dengan prioritas 4 di belakang tetap searah jarum jam (clockwise).
   - Konfigurasi absolut produk kiral yang terbentuk adalah **konfigurasi $(R)$**, yaitu $(R)\\text{-1-feniletanol}$.
4. Maka opsi yang tepat adalah A.

**Analisis Distraktor:**
- Pilihan B: Salah membalik konfigurasi produk menjadi $(S)$.
- Pilihan C & E: Menempatkan gugus karbon lebih prioritas daripada oksigen.
- Pilihan D: Rasemat hanya terjadi jika serangan hidrida bersifat akiral (pelarut achiral tanpa enzim).`,
    solution_framework_template: `Tahap 1: Tentukan urutan prioritas CIP pada C=O: =O (1) > -Ph (2) > -Me (3).
Tahap 2: Definisikan muka re sebagai muka di mana urutan 1 -> 2 -> 3 searah jarum jam.
Tahap 3: Simulasikan serangan hidrida (prioritas 4) dari muka re yang menempatkan H di sisi depan/belakang relatif.
Tahap 4: Tentukan konfigurasi mutlak produk sebagai (R)-1-feniletanol.`,
    tags: ['prokiralitas', 're-si-face', 'stereokimia', 'cahn-ingold-prelog', 'osp-2023'],
    source_event: 'OSP Kimia 2023 No. 25 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 2. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Penataan Ulang Pinakol-Pinakolon)
  // =========================================================================
  {
    id: 309002,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Penataan Ulang Pinakol-Pinakolon Asimetris & Kemampuan Migrasi',
    title: 'Penataan Ulang Pinakol-Pinakolon Asimetris dan Urutan Kemampuan Migrasi (Migratory Aptitude)',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Reaksi penataan ulang pinakol dari 1,1-difenil-2-metilpropana-1,2-diol:
$$\\ce{(C6H5)2C(OH)-C(OH)(CH3)2}$$
dilakukan dalam suasana katalis asam sulfat encer hangat ($\ce{H2SO4}$).

Berdasarkan kestabilan karbokation perantara dan kemampuan migrasi gugus (migratory aptitude), produk utama manakah yang diperoleh secara selektif?

A. 3,3-difenilbutana-2-on ($\\ce{CH3-CO-C(C6H5)2-CH3}$)
B. 1,1-difenil-2-metilpropan-1-on
C. 1,2-difenil-2-metilpropan-1-on ($\\ce{C6H5-CO-C(CH3)2-C6H5}$)
D. 4,4-difenilbut-3-en-2-on
E. 2,2-difeniloksirana`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mekanisme Reaksi:**
1. Tahap 1 (Protonasi dan Pembentukan Karbokation Awal):
   - Diol asimetris ini memiliki dua atom C berhidroksil:
     $C_1$ mengikat dua gugus fenil: $\\ce{-C(C6H5)2(OH)}$
     $C_2$ mengikat dua gugus metil: $\\ce{-C(CH3)2(OH)}$
   - Protonasi dapat terjadi pada gugus $\\ce{-OH}$ di $C_1$ atau di $C_2$.
   - Kehilangan molekul air ($\ce{H2O}$) dari $C_1$ menghasilkan karbokation bis-benzilik tersier yang sangat terstabilkan oleh resonansi dua cincin fenil:
     $$\\ce{[ (C6H5)2C+ - C(OH)(CH3)2 ]}$$
     Karbokation ini jauh lebih stabil dibanding karbokation tersier alifatik pada $C_2$. Maka dehidrasi selektif terjadi di $C_1$.
2. Tahap 2 (Migrasi Gugus ke Karbokation):
   - Karbokation berada di $C_1$ (mengikat dua fenil).
   - Karbon tetangga $C_2$ memiliki gugus $\\ce{-OH}$ dan dua gugus metil ($\\ce{-CH3}$).
   - Satu gugus metil bermigrasi dengan pasangan elektronnya (1,2-shift) dari $C_2$ menuju $C_1$ yang bermuatan positif.
   - Pendorong termodinamika migrasi ini adalah pembentukan karbokation terstabilkan resonansi oksigen (oksonium ion) pada $C_2$:
     $$\\ce{(C6H5)2C(CH3) - C+(OH)(CH3) <=> (C6H5)2C(CH3) - C(=O+H)(CH3)}$$
3. Tahap 3 (Deprotonasi):
   - Pelepasan proton dari gugus oksonium menghasilkan keton:
     $$\\ce{(C6H5)2C(CH3) - CO - CH3} \\quad \\text{(3,3-difenilbutana-2-on)}$$
4. Maka produk tunggal utama yang terbentuk adalah **3,3-difenilbutana-2-on** (Pilihan A).

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Salah memprediksi dehidrasi tanpa pembentukan karbonil.
- Pilihan C: Mengasumsikan migrasi fenil, yang hanya terjadi jika karbokation terbentuk di $C_2$ (padahal karbokation benzilik di $C_1$ jauh lebih stabil).
- Pilihan D: Produk eliminasi konyugasi yang bukan jalur utama pinakol.
- Pilihan E: Pembentukan epoksida memerlukan kondisi basa, bukan katalis asam kuat.`,
    solution_framework_template: `Tahap 1: Tentukan situs pembentukan karbokation paling stabil (C1 bis-benzilik > C2 dialkil).
Tahap 2: Lakukan dehidrasi pada C1 membentuk karbokation benzilik tersier.
Tahap 3: Lakukan pergeseran 1,2-metil dari C2 ke C1 untuk menghasilkan ion oksonium terstabilkan heteroatom O.
Tahap 4: Lakukan deprotonasi menghasilkan 3,3-difenilbutana-2-on.`,
    tags: ['pinakol-pinakolon', 'penataan-ulang', 'karbokation-benzilik', 'migrasi-1-2'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 3. SOAL RIIL - OSP 2022 No. 22 (Penataan Ulang Beckmann Stereospesifik)
  // =========================================================================
  {
    id: 309003,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Stereospesifisitas Anti-Periplanar Penataan Ulang Beckmann',
    title: 'Stereospesifisitas Migrasi Anti-Periplanar pada Penataan Ulang Beckmann',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Penataan ulang Beckmann terhadap ketoksim menggunakan katalis asam kuat Lewis (seperti $\\ce{PCl5}$ atau asam polifosfat) mengubah ketoksim menjadi amida ter-N-substitusi. Ciri khas utama mekanisme ini adalah migrasi gugus yang berlangsung secara stereospesifik dengan geometri *anti-periplanar* terhadap gugus hidroksi oksim ($\\ce{-OH}$).

Jika isomer $(E)\\text{-asetofenon oksim}$ dengan konfigurasi ruang:
$$\\ce{C6H5 - C(=N-OH) - CH3}$$
(di mana gugus fenil $\\ce{-C6H5}$ berada pada posisi *anti* berseberangan terhadap gugus $\\ce{-OH}$) direaksikan dengan $\\ce{PCl5}$ dalam eter kering, produk amida apakah yang diperoleh?

A. N-metilbenzamida ($\\ce{C6H5-CO-NH-CH3}$)
B. Asetanilida / N-fenilasetamida ($\\ce{CH3-CO-NH-C6H5}$)
C. Benzamida ($\\ce{C6H5-CO-NH2}$)
D. N,N-dimetilbenzamida
E. 2-fenilindol`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Mekanisme Reaksi:**
1. Kaidah Stereospesifisitas Penataan Ulang Beckmann:
   - Gugus yang bermigrasi ke atom nitrogen adalah gugus yang terletak **ANTI terhadap gugus pergi (leaving group $\\ce{-OH}$ atau $\\ce{-OPCl4}$)**.
   - Migrasi gugus berlangsung serentak (konserted) bersamaan dengan putusnya ikatan $\\ce{N-O}$, membentuk ion nitrilium intermediat:
     $$\\ce{[ R - C # N+ - R' ]}$$
2. Analisis Isomer $(E)\\text{-asetofenon oksim}$:
   - Gugus fenil ($\\ce{-C6H5}$) berada pada posisi *anti* (trans) terhadap gugus $\\ce{-OH}$.
   - Gugus metil ($\\ce{-CH3}$) berada pada posisi *syn* (cis) terhadap $\\ce{-OH}$.
   - Oleh karena itu, gugus yang bermigrasi ke atom nitrogen adalah **gugus fenil** ($\\ce{-C6H5}$):
     $$\\ce{CH3 - C(=N+ - C6H5)}$$
3. Hidrolisis Ion Nitrilium:
   - Molekul air menyerang karbon karbonil yang elektrofilik:
     $$\\ce{CH3 - C(OH) = N - C6H5}$$
   - Tautomerisasi asam imida menjadi amida stabil:
     $$\\ce{CH3 - CO - NH - C6H5} \\quad \\text{(Asetanilida / N-fenilasetamida)}$$
4. Maka produk tunggal reaksi adalah asetanilida (Pilihan B).

**Analisis Distraktor:**
- Pilihan A: N-metilbenzamida diperoleh dari isomer $(Z)\\text{-asetofenon oksim}$ di mana metil yang terletak *anti*.
- Pilihan B: Benar, asetanilida.
- Pilihan C: Benzamida tidak memiliki substituen fenil pada nitrogen.
- Pilihan D: Penambahan metil fiktif.
- Pilihan E: Siklisasi Fischer indol yang tidak terjadi pada ketoksim.`,
    solution_framework_template: `Tahap 1: Identifikasi posisi spasial gugus terhadap -OH oksim: fenil bersifat anti.
Tahap 2: Terapkan aturan stereospesifik Beckmann: gugus anti yang bermigrasi ke nitrogen.
Tahap 3: Tuliskan struktur ion nitrilium: CH3-C#N+-Ph.
Tahap 4: Lakukan adisi air dan tautomerisasi menghasilkan CH3-CO-NH-Ph (asetanilida).`,
    tags: ['penataan-ulang-beckmann', 'stereospesifik', 'anti-periplanar', 'asetanilida', 'osp-2022'],
    source_event: 'OSP Kimia 2022 No. 22 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 4. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Adisi Michael 1,4 vs Adisi 1,2)
  // =========================================================================
  {
    id: 309004,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Regioselektivitas Adisi Michael 1,4 vs Adisi 1,2 pada Enon',
    title: 'Regioselektivitas Adisi Nukleofilik Konjugat (1,4) vs Langsung (1,2) pada Enon',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Senyawa keton $\\alpha,\\beta$-tak jenuh (enon) sikloheks-2-en-1-on memiliki dua situs elektrofilik: karbon karbonil ($C_1$, situs 'keras'/hard) dan karbon $\\beta$ ikatan rangkap ($C_3$, situs 'lunak'/soft).

Diberikan dua perlakuan reaksi independen:
- Reaksi 1: Sikloheks-2-en-1-on direaksikan dengan metillitium ($\\ce{CH3Li}$) kemudian dihidrolisis asam.
- Reaksi 2: Sikloheks-2-en-1-on direaksikan dengan litium dimetilkuprat (reagen Gilman, $\\ce{(CH3)2CuLi}$) kemudian dihidrolisis asam.

Manakah pasangan produk utama yang tepat untuk Reaksi 1 dan Reaksi 2 berturut-turut?

A. Reaksi 1: 3-metilsikloheksanon; Reaksi 2: 1-metilsikloheks-2-en-1-ol
B. Reaksi 1: 1-metilsikloheks-2-en-1-ol; Reaksi 2: 3-metilsikloheksanon
C. Reaksi 1: 1-metilsikloheks-2-en-1-ol; Reaksi 2: 1-metilsikloheks-2-en-1-ol
D. Reaksi 1: 3-metilsikloheksanon; Reaksi 2: 3-metilsikloheksanon
E. Reaksi 1: 2-metilsikloheksanon; Reaksi 2: 2-metilsikloheksanon`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Teori HSAB:**
1. Prinsip Hard-Soft Acid-Base (HSAB) pada Enon:
   - Karbon karbonil ($C_1$) memiliki rapat muatan positif parsial pekat dan orbital LUMO terkonsentrasi rapat $\\to$ elektrofil keras (*hard electrophile*).
   - Karbon $\\beta$ ($C_3$) memiliki rapat muatan positif lebih terdifusi melalui resonansi konyugasi $\\to$ elektrofil lunak (*soft electrophile*).
2. Analisis Reaksi 1 (dengan $\\ce{CH3Li}$):
   - Reagen organolitium ($\\ce{RLi}$) merupakan nukleofil yang sangat keras (*hard nucleophile*) dengan ikatan $\\ce{C-Li}$ sangat polar dan muatan negatif pekat pada atom karbon.
   - Interaksi keras-keras mendominasi: $\\ce{CH3Li}$ menyerang langsung karbon karbonil $C_1$ melalui **adisi 1,2**.
   - Setelah hidrolisis asam encer, terbentuk alkohol alilik tersier: **1-metilsikloheks-2-en-1-ol**.
3. Analisis Reaksi 2 (dengan $\\ce{(CH3)2CuLi}$):
   - Reagen Gilman kuprat ($\\ce{R2CuLi}$) adalah nukleofil lunak (*soft nucleophile*) karena adanya atom tembaga transisi $d^{10}$ yang memiliki polarisabilitas tinggi.
   - Interaksi lunak-lunak mendominasi: kuprat menyerang karbon $\\beta$ ($C_3$) melalui **adisi 1,4 (adisi konjugat Michael)**.
   - Intermediat enolat yang terbentuk mengalami protonasi pada atom karbon $\\alpha$ ($C_2$) dan tautomerisasi menghasilkan keton jenuh: **3-metilsikloheksanon**.
4. Pasangan yang benar berturut-turut: **1-metilsikloheks-2-en-1-ol** dan **3-metilsikloheksanon** (Pilihan B).

**Analisis Distraktor:**
- Pilihan A: Terbalik regioselektivitasnya.
- Pilihan B: Benar.
- Pilihan C & D: Menganggap kedua reagen memiliki reaktivitas yang identik.
- Pilihan E: Mengasumsikan adisi pada posisi alfa ($C_2$) yang secara elektronik bukan elektrofil.`,
    solution_framework_template: `Tahap 1: Terapkan prinsip HSAB: karbon karbonil C1 bersifat keras, karbon beta C3 bersifat lunak.
Tahap 2: Karakterisasi reagen: MeLi nukleofil keras -> adisi 1,2 langsung pada C1.
Tahap 3: Karakterisasi reagen Gilman Me2CuLi nukleofil lunak -> adisi 1,4 konyugat pada C3.
Tahap 4: Tentukan produk masing-masing: 1-metilsikloheks-2-en-1-ol dan 3-metilsikloheksanon.`,
    tags: ['adisi-michael', 'reagen-gilman', 'hsab', 'adisi-1-2-vs-1-4'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 5. SOAL RIIL - OSP 2021 No. 24 (Aturan Woodward-Hoffmann Reaksi Elektrosiklik)
  // =========================================================================
  {
    id: 309005,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Aturan Woodward-Hoffmann pada Penutupan Cincin Elektrosiklik',
    title: 'Aturan Woodward-Hoffmann pada Penutupan Cincin Elektrosiklik Termal vs Fotokimia',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Berdasarkan teori simetri orbital molekul Frontier (Aturan Woodward-Hoffmann), reaksi penutupan cincin elektrosiklik poliena terkonjugasi berlangsung secara *konrotatori* (conrotatory) atau *disrotatori* (disrotatory) bergantung pada jumlah elektron $\pi$ ($4n$ atau $4n+2$) dan kondisi reaksi (termal $\Delta$ atau fotokimia $h\nu$).

Jika senyawa $(2E,4Z,6E)\\text{-okta-2,4,6-triena}$ (sistem $6\pi$ elektron, $4n+2$ dengan $n=1$) dipanaskan pada suhu tinggi (reaksi termal), apakah modus gerakan pemutaran orbital dan konfigurasi stereokimia produk cincin sikloheksadiena yang diperoleh?

A. Gerakan konrotatori menghasilkan *trans*-5,6-dimetilsikloheksa-1,3-diena
B. Gerakan disrotatori menghasilkan *cis*-5,6-dimetilsikloheksa-1,3-diena
C. Gerakan disrotatori menghasilkan *trans*-5,6-dimetilsikloheksa-1,3-diena
D. Gerakan konrotatori menghasilkan *cis*-5,6-dimetilsikloheksa-1,3-diena
E. Reaksi tidak diizinkan oleh simetri orbital sehingga tidak terjadi siklisasi`,
    expected_final_answer: 'B',
    solution_rubric: `**Analisis Konsep & Simetri Orbital:**
1. Kaidah Woodward-Hoffmann untuk Reaksi Elektrosiklik:
   - Sistem $4n$ elektron $\pi$: Termal $\to$ Konrotatori; Fotokimia $\to$ Disrotatori.
   - Sistem $4n+2$ elektron $\pi$: **Termal $\to$ Disrotatori**; Fotokimia $\to$ Konrotatori.
2. Analisis Sistem $(2E,4Z,6E)\\text{-okta-2,4,6-triena}$:
   - Memiliki 3 ikatan rangkap terkonjugasi = $6$ elektron $\pi$ ($4n+2$).
   - Dalam kondisi termal ($\Delta$), orbital molekul terisi tertinggi (HOMO) dalam keadaan dasar adalah $\psi_3$, yang memiliki simetri cermin ($m$).
   - Agar tumpang tindih cuping berfasa sama terjadi membentuk ikatan $\sigma$ baru antara $C_2$ dan $C_7$, kedua orbital ujung harus berputar dengan arah berlawanan, yaitu **gerakan disrotatori**.
3. Penentuan Stereokimia Substituen Metil:
   - Geometri awal: ikatan rangkap ujung berkonfigurasi $E$ dan $E$, sehingga kedua gugus metil mengarah ke sisi luar (kedua metil *trans-trans* relatif terhadap sumbu konyugasi atau keduanya menghadap 'keluar' / *out-out*).
   - Gerakan disrotatori: satu orbital berputar searah jarum jam (memutar metil ke atas), orbital ujung lainnya berputar berlawanan jarum jam (juga memutar metil ke atas).
   - Kedua gugus metil berakhir pada sisi yang sama dari bidang cincin enam anggota yang baru terbentuk: menghasilkan **isomer *cis*** (*cis*-5,6-dimetilsikloheksa-1,3-diena).
4. Gabungan hasil: **Disrotatori menghasilkan *cis*** (Pilihan B).

**Analisis Distraktor:**
- Pilihan A: Konrotatori adalah jalur untuk kondisi fotokimia ($h\nu$).
- Pilihan B: Benar.
- Pilihan C: Stereokimia *trans* dihasilkan jika geometri awalnya adalah $(2E,4Z,6Z)$.
- Pilihan D: Bertentangan dengan aturan Woodward-Hoffmann.
- Pilihan E: Reaksi elektrosiklik $6\pi$ termal sangat diizinkan dan berlangsung sangat cepat (reaksi fasil).`,
    solution_framework_template: `Tahap 1: Hitung jumlah elektron pi = 6e- (sistem 4n+2).
Tahap 2: Gunakan aturan Woodward-Hoffmann untuk 4n+2 termal: gerakan DISROTATORI.
Tahap 3: Analisis orientasi gugus metil awal pada triena (2E, 4Z, 6E) yang berada pada posisi 'out, out'.
Tahap 4: Pemutaran disrotatori pada konfigurasi (out, out) membawa kedua metil ke sisi yang sama (cis-5,6-dimetilsikloheksa-1,3-diena).`,
    tags: ['woodward-hoffmann', 'reaksi-perisiklik', 'elektrosiklik', 'disrotatori', 'osp-2021'],
    source_event: 'OSP Kimia 2021 No. 24 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Retrosintesis Robinson Annulation)
  // =========================================================================
  {
    id: 309006,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Retrosintesis Diskoneksi C-C & Anulasi Robinson',
    title: 'Retrosintesis Diskoneksi C-C dan Siklisasi Anulasi Robinson',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Reaksi anulasi Robinson (Robinson annulation) merupakan metode klasik pembentukan cincin sikloheksenon terfusi melalui kombinasi adisi Michael berurutan yang diikuti oleh kondensasi aldol intramolekuler.

Tinjau molekul target berikut:
$$\\text{trans-10-metildekalin-2-on}$$
(suatu sistem bisiklik enon $\\Delta^{1,9}$-oktalin-2-on).

Prekursor reaktan awal manakah yang paling tepat digunakan untuk mensintesis molekul target tersebut dalam satu labu reaksi berkatalis basa?

A. 2-metilsikloheksanon dan metil vinil keton (MVK, but-3-en-2-on)
B. Sikloheksanon dan akrolein (propenal)
C. 2-metilsikloheksanon dan butan-2-on
D. Sikloheksana-1,3-dion dan propenil bromida
E. 2-metilsikloheksanol dan etil asetoasetat`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Retrosintesis:**
1. Diskoneksi Retrosintetik Anulasi Robinson:
   - Pada enon $\\alpha,\\beta$-tak jenuh siklik cincin 6 anggota:
     Ikatan rangkap $\\ce{C=C}$ berasal dari dehidrasi aldol intramolekuler. Putus ikatan $\\ce{C_1=C_2}$ (ikatan rangkap enon) menghasilkan intermediat 1,5-diketon:
     $$\\text{Target} \\implies 1,5\\text{-diketon}$$
   - Pada posisi 1,5-diketon, putus ikatan antara $C_4$ dan $C_5$ (ikatan adisi Michael):
     Satu fragmen adalah **donor Michael** (enolat keton siklik), yaitu **2-metilsikloheksanon**.
     Fragmen kedua adalah **akseptor Michael** ($\alpha,\beta$-tak jenuh keton), yaitu **metil vinil keton (MVK / but-3-en-2-on)**.
2. Mekanisme Reaksi Maju:
   - Deprotonasi basa pada $C_2$ (atom C yang lebih tersubstitusi mengikat gugus metil) dari 2-metilsikloheksanon membentuk ion enolat termodinamik.
   - Enolat melakukan adisi Michael 1,4 ke MVK membentuk intermediat 1,5-diketon dengan pusat kuartener metil pada posisi jembatan cincin.
   - Deprotonasi metil terminal MVK menghasilkan enolat baru yang menyerang karbonil sikloheksanon secara intramolekuler membentuk cincin enam beranggota (aldol).
   - Dehidrasi spontan melepaskan $\ce{H2O}$ menghasilkan sistem enon bisiklik yang stabil.
3. Maka pasangan reaktan yang tepat adalah Pilihan A.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Tanpa gugus metil, menghasilkan dekalinon tanpa metil pada posisi 10.
- Pilihan C: Butan-2-on bukan akseptor Michael (tidak memiliki ikatan rangkap konjugat teraktivasi).
- Pilihan D & E: Reaktan yang tidak menghasilkan kerangka anulasi Robinson.`,
    solution_framework_template: `Tahap 1: Lakukan diskoneksi retrosintesis pada ikatan C=C enon cincin (kondensasi aldol terbalik) menghasilkan 1,5-diketon.
Tahap 2: Lakukan diskoneksi adisi Michael terbalik pada 1,5-diketon.
Tahap 3: Dapatkan donor Michael: 2-metilsikloheksanon dan akseptor Michael: metil vinil keton (MVK).
Tahap 4: Cocokkan dengan opsi pilihan A.`,
    tags: ['anulasi-robinson', 'retrosintesis', 'adisi-michael', 'kondensasi-aldol'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 7. SOAL RIIL - OSP 2020 No. 26 (Konformasi Sikloheksana & Eliminasi E2 Trans-Diaksial)
  // =========================================================================
  {
    id: 309007,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Konformasi Kursi Sikloheksana & Eliminasi E2 Trans-Diaksial',
    title: 'Persyaratan Geometri Anti-Periplanar Trans-Diaksial pada Reaksi Eliminasi E2 Mentil Klorida',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Reaksi eliminasi bimolekuler (E2) memerlukan geometri *anti-koplanar* (anti-periplanar, sudut dihedral $\theta = 180^\circ$) antara proton $\beta$ ($\ce{H_\beta}$) dan gugus pergi ($\ce{X}$). Pada cincin sikloheksana, kondisi ini hanya dapat dipenuhi jika kedua ikatan $\ce{C-H}$ dan $\ce{C-X}$ berada dalam orientasi **trans-diaksial**.

Neomentil klorida dan mentil klorida adalah diastereomer 1-isopropil-4-metil-2-klorosikloheksana.
Ketika direaksikan dengan natrium etoksida ($\ce{NaOEt}$) dalam etanol:
- Neomentil klorida bereaksi sangat cepat menghasilkan 2-mentena ($75\\%$) sebagai produk Saytzeff.
- Mentil klorida bereaksi sangat lambat dan secara eksklusif hanya menghasilkan produk anti-Saytzeff (Hofmann), yaitu 3-mentena ($100\\%$).

Penyebab utama mentil klorida bereaksi lambat dan hanya menghasilkan 3-mentena adalah:

A. Gugus kloro pada konformer kursi paling stabil mentil klorida berada pada posisi ekuatorial, sehingga harus mengalami pembalikan cincin ke konformer berenergi tinggi di mana hanya ada satu proton $\beta$ yang berposisi trans-diaksial
B. Gugus isopropil merintangi serangan basa pada semua posisi karbon
C. Reaksi eliminasi pada mentil klorida beralih ke mekanisme E1 melalui karbokation bebas
D. Atom klorin terlepas spontan sebelum basa mendekat
E. Ikatan $\ce{C-Cl}$ pada mentil klorida memiliki energi ikatan dua kali lebih kuat akibat hiperkonjugasi`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Analisis Konformasi Kursi:**
1. Stereokimia Mentil Klorida:
   - Substituen mentil klorida: 1-isopropil (cis terhadap Cl), 4-metil (trans terhadap Cl), 2-kloro.
   - Pada konformer kursi paling stabil:
     Gugus isopropil besar ($e$), gugus metil ($e$), dan gugus kloro ($e$). Ketiga substituen berada pada posisi ekuatorial.
   - Namun, eliminasi E2 **HANYA DAPAT BERLANGSUNG** jika kloro berada pada posisi **AKSIAL** (karena proton $\beta$ juga harus aksial agar tercapai sudut dihedral $180^\circ$ anti-periplanar).
2. Konformer Reaktif Mentil Klorida:
   - Cincin harus membalik (ring-flip) ke konformer kursi kedua di mana gugus kloro menjadi aksial ($a$).
   - Pada konformer terbalik ini, gugus isopropil besar dan metil juga terpaksa menjadi aksial ($a, a, a$), yang memiliki energi regangan interaksi 1,3-diaksial sangat tinggi (populasi konformer sangat kecil $\ll 1\\%$). Inilah sebabnya reaksi berlangsung **sangat lambat**.
3. Penentuan Regiokimia Produk:
   - Pada konformer dengan Cl aksial ($C_2-a$):
     - Karbon tetangga $C_1$ mengikat gugus isopropil dan satu hidrogen. Karena isopropil sekarang aksial, maka hidrogen pada $C_1$ berposisi ekuatorial! Sehingga $\ce{H(C_1)}$ **TIDAK ANTI-PERIPLANAR** terhadap Cl dan tidak bisa dieliminasi.
     - Karbon tetangga $C_3$ (kurang tersubstitusi) mengikat dua hidrogen: satu aksial dan satu ekuatorial.
     - Hidrogen aksial pada $C_3$ inilah SATU-SATUNYA proton $\beta$ yang memenuhi syarat trans-diaksial terhadap kloro!
   - Eliminasi hanya dapat melibatkan $\ce{H(C_3)}$, menghasilkan produk ikatan rangkap antara $C_2-C_3$ (yaitu 3-mentena / produk anti-Saytzeff) sebesar $100\\%$.
4. Maka alasan pada Pilihan A sepenuhnya akurat.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Rintangan sterik parsial bukan penyebab ketidakmampuan eliminasi pada $C_1$.
- Pilihan C: Basa kuat $\ce{EtO-}$ dalam konsentrasi tinggi memastikan mekanisme E2 bimolekuler tetap dominan.
- Pilihan D & E: Teori fiktif tanpa dasar mekanistik.`,
    solution_framework_template: `Tahap 1: Pahami syarat mutlak E2 pada sikloheksana: gugus pergi dan proton beta wajib trans-diaksial.
Tahap 2: Gambar konformer kursi mentil klorida: pada konformer dominan, Cl ekuatorial (tidak reaktif).
Tahap 3: Balik cincin ke konformer minor (Cl aksial): amati bahwa H pada C1 berposisi ekuatorial (tidak bisa tereliminasi).
Tahap 4: Identifikasi bahwa satu-satunya H aksial berada di C3, menghasilkan 3-mentena secara eksklusif.`,
    tags: ['konformasi-kursi', 'eliminasi-e2', 'trans-diaksial', 'mentil-klorida', 'osp-2020'],
    source_event: 'OSP Kimia 2020 No. 26 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Penataan Ulang Favorskii)
  // =========================================================================
  {
    id: 309008,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Penataan Ulang Favorskii Melalui Intermediat Siklopropanon',
    title: 'Penataan Ulang Favorskii pada 2-Klorosikloheksanon Melalui Intermediat Siklopropanon',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Penataan ulang Favorskii mengubah $\alpha$-haloketon menjadi ester atau asam karboksilat dengan penyusutan kerangka karbon cincin melalui intermediat bisiklik siklopropanon simetris.

Jika senyawa 2-klorosikloheksanon direaksikan dengan natrium metoksida ($\ce{CH3ONa}$) dalam metanol ($\ce{CH3OH}$), produk ester apakah yang terbentuk sebagai produk utama?

A. Metil siklopentanakarboksilat
B. Metil sikloheksanakarboksilat
C. 2-metoksisikloheksanon
D. Metil 2-kloroheksanoat
E. Dimetil adipat`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mekanisme Reaksi:**
1. Tahap 1 (Deprotonasi):
   - Basa metoksida ($\ce{CH3O-}$) mengabstraksi proton asam pada posisi $\alpha'$ (posisi $C_6$, berseberangan dengan gugus kloro pada $C_2$):
     $$\\ce{Cl-CH-(CH2)4-C=O + CH3O- -> [ Cl-CH-(CH2)3-CH^--C=O ]}$$
2. Tahap 2 (Substitusi Intramolekuler & Pembentukan Siklopropanon):
   - Karbanion enolat menyerang karbon $C_2$ yang mengikat kloro dari arah belakang secara intramolekuler (mirip $S_N2$), mendesak ion klorida ($\ce{Cl-}$) lepas sebagai gugus pergi:
     Terbentuk zat antara bisiklik tegang: **bisiklo[3.1.0]heksan-6-on** (suatu cincin siklopropanon terfusi cincin 5 anggota).
3. Tahap 3 (Adisi Nukleofilik & Pembukaan Cincin):
   - Nukleofil metoksida ($\ce{CH3O-}$) menyerang karbonil siklopropanon membentuk zat antara tetrahedral alkoksida.
   - Cincin siklopropanon yang memiliki tegangan sudut (ring strain) sangat tinggi terbuka kembali dengan pemutusan ikatan $\ce{C-C}$ siklopropana, menghasilkan karbanion siklopentil yang terstabilkan.
   - Protonasi oleh pelarut metanol menghasilkan ester cincin lima beranggota:
     $$\\ce{C5H9-COOCH3} \\quad \\text{(Metil siklopentanakarboksilat)}$$
4. Hasil akhir reaksi adalah kontraksi cincin dari 6 anggota menjadi 5 anggota: **Metil siklopentanakarboksilat** (Pilihan A).

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Memiliki 6 anggota cincin (tidak terjadi kontraksi cincin Favorskii).
- Pilihan C: Produk substitusi langsung $S_N2$ biasa tanpa penataan ulang.
- Pilihan D & E: Produk pembelahan ester asiklik.`,
    solution_framework_template: `Tahap 1: Abstraksi proton alfa-aksial pada C6 membentuk karbanion enolat.
Tahap 2: Lakukan serangan intramolekuler ke C2-Cl membentuk zat antara bisiklo[3.1.0]heksan-6-on (siklopropanon).
Tahap 3: Adisi metoksida pada karbonil diikuti pembukaan cincin tegang siklopropanon (kontraksi cincin 6 -> 5).
Tahap 4: Dapatkan produk akhir metil siklopentanakarboksilat.`,
    tags: ['penataan-ulang-favorskii', 'siklopropanon', 'kontraksi-cincin', 'alfa-haloketon'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },

  // =========================================================================
  // 9. SOAL RIIL - OSP 2019 No. 23 (Kemoselektifitas Reduksi Ester & Lakton DIBAL-H)
  // =========================================================================
  {
    id: 309009,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Kemoselektivitas Reduksi Parsial DIBAL-H pada Ester',
    title: 'Kemoselektivitas Reduksi Parsial Ester Menjadi Aldehid Menggunakan Reagen DIBAL-H',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Reduksi ester menjadi aldehid merupakan transformasi yang sulit karena aldehid umumnya lebih elektrofilik dibanding ester asalnya, sehingga mudah tereduksi lebih lanjut menjadi alkohol primer jika menggunakan reduktor kuat seperti $\\ce{LiAlH4}$.
Penggunaan reagen diisobutilaluminium hidrida ($\\ce{DIBAL-H}$) pada suhu sangat rendah ($-78^\circ\\text{C}$) dalam pelarut toluena memungkinkan isolasi aldehid dengan rendemen tinggi setelah *quenching* berair.

Penyebab utama mengapa intermediat reaksi tidak tereduksi lebih lanjut pada $-78^\circ\\text{C}$ adalah:

A. Intermediat hemiasetal aluminium tetrahedral bersifat stabil pada $-78^\circ\\text{C}$ dan tidak mengeliminasi gugus alkoksida sebelum penambahan air pada tahap akhir
B. DIBAL-H merupakan basa Lewis lemah yang tidak mampu mengikat aldehid
C. Terbentuk kompleks gas hidrogen yang menutupi permukaan cairan
D. Aldehid yang terbentuk langsung mengkristal keluar dari larutan pada $-78^\circ\\text{C}$
E. Gugus isobutil DIBAL-H mentransfer radikal yang menghambat reduksi lanjutan`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Mekanisme Kimia:**
1. Mekanisme Reduksi Ester oleh DIBAL-H:
   - DIBAL-H ($\ce{i-Bu2AlH}$) memiliki atom aluminium dengan orbital $p$ kosong (asam Lewis kuat).
   - Atom aluminium mula-mula berkoordinasi dengan oksigen karbonil ester, meningkatkan elektrofilisitas karbonil.
   - Satu ion hidrida dari aluminium ditransfer ke karbon karbonil membentuk **zat antara hemiasetal aluminium tetrahedral**:
     $$\\ce{R - C(H)(OR') - O-Al(i-Bu)2}$$
2. Peran Suhu Rendah ($-78^\circ\\text{C}$):
   - Pada suhu ruang, intermediat tetrahedral ini tidak stabil dan segera melepaskan gugus alkoksida aluminium ($\\ce{R'O-Al(i-Bu)2}$) menghasilkan aldehid bebas ($\ce{R-CHO}$), yang langsung bereaksi dengan molekul DIBAL-H kedua membentuk alkohol primer.
   - Namun pada suhu sangat rendah ($-78^\circ\\text{C}$), **intermediat hemiasetal aluminium tetrahedral bersifat metastabil dan 'membeku' (tidak terurai)** dalam larutan. Tidak ada aldehid bebas yang hadir selama reduksi berlangsung!
3. Tahap *Quenching* Berair:
   - Hanya saat air asam ditambahkan pada akhir reaksi, intermediat tetrahedral terhidrolisis melepaskan molekul aldehid bebas secara serentak tanpa adanya reduktor aktif yang tersisa.
4. Maka pernyataan A menjelaskan fenomena ini secara tepat dan akurat.

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: DIBAL-H adalah asam Lewis, bukan basa Lewis.
- Pilihan C, D, E: Mekanisme spekulatif yang tidak sesuai dengan bukti spektroskopi NMR suhu rendah.`,
    solution_framework_template: `Tahap 1: Tuliskan struktur intermediat tetrahedral aluminium hemiasetal.
Tahap 2: Pahami bahwa pada -78 °C, intermediat ini stabil dan tidak runtuh melepaskan aldehid bebas.
Tahap 3: Kenali bahwa hidrolisis air di akhir reaksi yang membebaskan produk aldehid secara terkontrol.
Tahap 4: Pilih opsi A.`,
    tags: ['dibal-h', 'kemoselektivitas', 'reduksi-ester', 'aldehid', 'osp-2019'],
    source_event: 'OSP Kimia 2019 No. 23 (Puspresnas)',
    generation_type: 'manual',
    author: 'Tim Olimpiade Kimia Indonesia (Puspresnas)',
    total_points: 5,
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Model Kisi-kisi OSP Puspresnas (Penataan Ulang Claisen [3,3]-Sigmatropik)
  // =========================================================================
  {
    id: 309010,
    pillar_number: 9,
    module_id: 9,
    curriculum: 'osn',
    subtopic: 'Stereospesifisitas Penataan Ulang Claisen [3,3]-Sigmatropik',
    title: 'Stereospesifisitas Keadaan Transisi Bentuk Kursi pada Penataan Ulang Claisen [3,3]-Sigmatropik',
    difficulty: 'OSP',
    question_style: 'mcq',
    question_text: `Penataan ulang alil vinil eter (penataan ulang Claisen alifatik) merupakan pergeseran sigmatropik $[3,3]$ suprafasial-suprafasial yang berlangsung secara terpadu (konserted) melalui keadaan transisi siklik enam anggota berbentuk kursi (*chair-like transition state*).

Tinjau penataan ulang termal dari $(E)\\text{-1-(krotiloksi)etena}$ (alil vinil eter dengan gugus metil pada posisi rantai alil):
$$\\ce{CH2=CH-O-CH2-CH=CH-CH3} \\quad (E\\text{-isomer})$$

Dengan menempatkan gugus metil pada orientasi kuasi-ekuatorial di dalam keadaan transisi kursi untuk meminimalkan tolakan sterik 1,3-diaksial, stereoisomer alkena apakah yang terbentuk pada produk aldehid heks-4-enal?

A. Murni $(E)\\text{-heks-4-enal}$
B. Murni $(Z)\\text{-heks-4-enal}$
C. Campuran rasemat $1:1$ dari $(E)$ dan $(Z)$
D. 2-metilpentanal
E. Sikloheks-3-enakarbaldehid`,
    expected_final_answer: 'A',
    solution_rubric: `**Analisis Konsep & Stereokimia Keadaan Transisi:**
1. Kaidah Penataan Ulang Claisen $[3,3]$-Sigmatropik:
   - Terjadi penataan ulang 6 elektron $\pi$ siklik melalui keadaan transisi konformasi kursi (*chair-like TS*).
   - Bentuk perahu (*boat-like TS*) memiliki energi aktivasi sekitar $12 - 15\\text{ kJ/mol}$ lebih tinggi akibat regangan eklips, sehingga hampir seluruh reaksi berjalan lewat jalur kursi.
2. Posisi Gugus Metil pada Keadaan Transisi Kursi:
   - Pada molekul reaktan berkatenasi $(E)$, terdapat pilihan bagi gugus metil pada posisi alil untuk menempati posisi **kuasi-ekuatorial** atau **kuasi-aksial**.
   - Posisi kuasi-ekuatorial bebas dari interaksi tolakan sterik 1,3-diaksial, sehingga menjadi jalur energi terendah ($\Delta G^\ddagger$ terendah).
   - Ketika ikatan baru $\ce{C-C}$ terbentuk pada posisi 1 dan 6 bersamaan dengan pemutusan ikatan $\ce{C-O}$ pada posisi 3 dan 4:
     Gugus metil yang berada pada orientasi kuasi-ekuatorial secara stereospesifik memproyeksikan ikatan rangkap baru pada produk aldehid menghasilkan geometri **$(E)$** (trans).
3. Hasil Reaksi:
   Aldehid yang dihasilkan adalah **murni $(E)\\text{-heks-4-enal}$** (Pilihan A).

**Analisis Distraktor:**
- Pilihan A: Benar.
- Pilihan B: Isomer $(Z)$ terbentuk jika keadaan transisi melalui bentuk perahu atau reaktan awal berisomer $(Z)$.
- Pilihan C: Reaksi perisiklik bersifat stereospesifik, bukan menghasilkan campuran rasemat tanpa arah.
- Pilihan D: Salah penataan ulang kerangka karbon.
- Pilihan E: Siklisasi intramolekuler yang tidak terjadi.`,
    solution_framework_template: `Tahap 1: Identifikasi reaksi penataan ulang Claisen alifatik sebagai pergeseran [3,3]-sigmatropik konserted.
Tahap 2: Gambarkan keadaan transisi siklik enam anggota berbentuk kursi (chair TS).
Tahap 3: Posisikan gugus metil pada posisi kuasi-ekuatorial untuk kestabilan termodinamika.
Tahap 4: Tentukan konfigurasi ikatan rangkap baru yang terbentuk adalah (E)-heks-4-enal.`,
    tags: ['penataan-ulang-claisen', 'perisiklik', 'sigmatropik', 'chair-transition-state'],
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSP Puspresnas / IChO)',
    generation_type: 'twin_parallel',
    author: 'Tim Pembina Olimpiade Kimia Nasional',
    total_points: 5,
  },
];
