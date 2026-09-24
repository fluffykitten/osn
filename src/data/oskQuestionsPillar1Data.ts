/**
 * oskQuestionsPillar1Data.ts
 * Bank Soal Olimpiade Kimia Terstandarisasi Tingkat OSK (Olimpiade Sains Kota/Kabupaten / OSN-K)
 * 
 * PILAR 1: Struktur Atom, Teori Kuantum & Tabel Periodik Unsur (Pilar 1 Silabus OSN Kimia)
 * Komposisi Standar (10 Butir Soal):
 * - 5 Soal Riil (Diadaptasi dari Naskah Resmi Seleksi OSK / KSN-K Puspresnas 2020-2024)
 * - 5 Soal Sintetis / Twin Problems (Model Kisi-kisi Resmi Puspresnas / IChO)
 * 
 * Skema ID 6-Digit: 201001 - 201010
 * - 2 = Jalur Olimpiade OSK
 * - 01 = Pilar 1
 * - 001 - 010 = Nomor Urut Soal
 */

import type { Question } from '../types/database';

export const OSK_PILLAR_1_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. SOAL RIIL - OSK 2023 No. 2 (Model Bohr & Transisi Spektroskopi Ion He+)
  // =========================================================================
  {
    id: 201001,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Spektroskopi Emisi Rydberg & Model Atom Bohr Ion Hidrogenoid',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Transisi Elektronik Spektrum Emisi Ion He+ (Seri Balmer Analog)',
    question_text: `Menurut model atom hidrogenoid Bohr, tingkat energi elektron pada ion berelektron tunggal dengan nomor atom $Z$ dinyatakan oleh persamaan:
$$E_n = -R_H \\cdot \\frac{Z^2}{n^2}$$
dengan $R_H = 2{,}179 \\times 10^{-18}\\text{ J} = 13{,}606\\text{ eV}$.

Sebuah ion helium-4 terionisasi tunggal ($\\ce{He+}$, $Z = 2$) mengalami transisi elektronik emisi dari keadaan tereksitasi $n_i = 4$ menuju keadaan $n_f = 2$. Panjang gelombang ($\\lambda$) foton yang dipancarkan dari transisi tersebut berada pada rentang cahaya tampak dan bernilai mendekati ....
(Gunakan tetapan Planck $h = 6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ dan laju cahaya $c = 2{,}998 \\times 10^8\\text{ m/s}$)

A. $121{,}5\\text{ nm}$  
B. $303{,}8\\text{ nm}$  
C. $468{,}6\\text{ nm}$  
D. $656{,}3\\text{ nm}$  
E. $1875{,}0\\text{ nm}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Persamaan Rydberg untuk Ion Hidrogenoid ($Z = 2$ untuk $\\ce{He+}$):**
   Energi foton yang dilepaskan ($\\Delta E$) saat transisi dari $n_i = 4$ ke $n_f = 2$:
   $$\\Delta E = R_H Z^2 \\left( \\frac{1}{n_f^2} - \\frac{1}{n_i^2} \\right)$$
   Substitusi nilai:
   $$\\Delta E = (2{,}179 \\times 10^{-18}\\text{ J}) \\times (2)^2 \\times \\left( \\frac{1}{2^2} - \\frac{1}{4^2} \\right)$$
   $$\\Delta E = (2{,}179 \\times 10^{-18}) \\times 4 \\times \\left( \\frac{1}{4} - \\frac{1}{16} \\right) = 8{,}716 \\times 10^{-18} \\times \\frac{3}{16} = 1{,}634 \\times 10^{-18}\\text{ J}$$

2. **Perhitungan Panjang Gelombang Foton ($\\lambda$):**
   $$\\lambda = \\frac{h c}{\\Delta E} = \\frac{(6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}) \\times (2{,}998 \\times 10^8\\text{ m/s})}{1{,}634 \\times 10^{-18}\\text{ J}}$$
   $$\\lambda = \\frac{1{,}9865 \\times 10^{-25}}{1{,}634 \\times 10^{-18}}\\text{ m} = 1{,}2157 \\times 10^{-7}\\text{ m} = 121{,}6\\text{ nm} \\approx 121{,}5\\text{ nm}$$

**Analisis Opsi Pengecoh:**
- **Opsi B (303,8 nm):** Kesalahan jika siswa lupa mengkuadratkan nomor atom $Z^2$ dan hanya mengalikan $Z = 2$.
- **Opsi C (468,6 nm):** Transisi dari $n=4$ ke $n=3$ pada ion $\\ce{He+}$.
- **Opsi D (656,3 nm):** Panjang gelombang garis pertama seri Balmer ($n=3 \\to n=2$) pada atom hidrogen netral ($Z=1$), jebakan bagi yang mengira sistemnya adalah atom $\\ce{H}$.
- **Opsi E (1875 nm):** Garis spektroskopi deret Paschen ($n=4 \\to n=3$) atom hidrogen.`,
    solution_framework_template: `1. Identifikasi Rumus Energi Hidrogenoid:
• Nomor atom Z untuk ion He+: Z = 2.
• Rumus Rydberg: 1/λ = R_H * Z^2 * (1/nf^2 - 1/ni^2).

2. Substitusi Tingkat Energi:
• nf = 2 dan ni = 4.
• Faktor fraksi: (1/4 - 1/16) = 3/16.

3. Hitung Energi & Panjang Gelombang:
• ΔE = 4 * R_H * (3/16) = (3/4) * R_H.
• λ = hc / ΔE = ....`,
    generation_type: 'manual',
    source_event: 'OSK Kimia 2023 No. 2 (Puspresnas)',
    year: 2023,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['model-atom-bohr', 'persamaan-rydberg', 'spektrum-emisi', 'ion-hidrogenoid', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 2. SOAL RIIL - OSK 2022 No. 1 (Bilangan Kuantum & Simpul Radial Orbital)
  // =========================================================================
  {
    id: 201002,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Bilangan Kuantum, Bentuk Orbital & Jumlah Simpul (Nodes)',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Analisis Simpul Radial dan Simpul Sudut pada Orbital 4d',
    question_text: `Fungsi gelombang orbital atom hidrogen $\\psi_{n,l,m_l}(r, \\theta, \\phi)$ memiliki permukaan simpul (*nodes*) di mana kerapatan probabilitas menemukan elektron bernilai nol.

Pernyataan yang **benar** mengenai orbital $4d$ atom hidrogen adalah ....

A. Memiliki $1$ simpul radial dan $2$ simpul sudut (angular)  
B. Memiliki $2$ simpul radial dan $1$ simpul sudut  
C. Memiliki $3$ simpul radial dan $0$ simpul sudut  
D. Memiliki $0$ simpul radial dan $3$ simpul sudut  
E. Memiliki total $4$ permukaan simpul keseluruhan`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Kaidah Simpul Orbital Atom:**
   Untuk setiap orbital atom yang dicirikan oleh bilangan kuantum utama $n$ dan bilangan kuantum azimut $l$:
   - **Simpul Sudut (*Angular Nodes*):** Ditentukan langsung oleh nilai $l$.
     $$N_{\\text{angular}} = l$$
   - **Simpul Radial (*Radial Nodes*):**
     $$N_{\\text{radial}} = n - l - 1$$
   - **Total Simpul (*Total Nodes*):**
     $$N_{\\text{total}} = N_{\\text{radial}} + N_{\\text{angular}} = (n - l - 1) + l = n - 1$$

2. **Aplikasi pada Orbital $4d$:**
   - $n = 4$
   - Subkulit $d \\implies l = 2$
   - Simpul sudut: $N_{\\text{angular}} = l = 2$ (berupa bidang kerucut/bidang datar simpul).
   - Simpul radial: $N_{\\text{radial}} = 4 - 2 - 1 = 1$ (berupa bola konsentris simpul).
   - Total simpul: $N_{\\text{total}} = 4 - 1 = 3$.

**Analisis Opsi Pengecoh:**
- **Opsi B:** Terbalik antara simpul sudut dan simpul radial (karakteristik orbital $4p$ memiliki $n-l-1 = 4-1-1=2$ radial dan $l=1$ sudut).
- **Opsi C:** Karakteristik orbital $4s$ ($n=4, l=0 \\implies N_{\\text{rad}} = 3, N_{\\text{ang}} = 0$).
- **Opsi D:** Karakteristik orbital $4f$ ($n=4, l=3 \\implies N_{\\text{rad}} = 0, N_{\\text{ang}} = 3$).
- **Opsi E:** Salah karena total simpul adalah $n - 1 = 3$, bukan $4$.`,
    solution_framework_template: `1. Identifikasi Bilangan Kuantum:
• n = 4, orbital d memiliki l = 2.

2. Hitung Jumlah Simpul:
• Simpul sudut (angular) = l = 2.
• Simpul radial = n - l - 1 = 4 - 2 - 1 = 1.
• Total simpul = n - 1 = 3.

3. Tarik Kesimpulan:
• Orbital 4d memiliki 1 simpul radial dan 2 simpul sudut.`,
    generation_type: 'manual',
    source_event: 'OSK Kimia 2022 No. 1 (Puspresnas)',
    year: 2022,
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 3,
    tags: ['bilangan-kuantum', 'simpul-radial', 'simpul-sudut', 'fungsi-gelombang', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 3. SOAL RIIL - KSN-K 2021 No. 3 (Konfigurasi Elektron Ion Logam Transisi)
  // =========================================================================
  {
    id: 201003,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Konfigurasi Elektron Ion Logam Transisi & Tingkat Oksidasi Stabil',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Jumlah Elektron Tak Berpasangan pada Spesi Ion Kompleks Transisi',
    question_text: `Diberikan empat kation logam transisi periode 4 dalam keadaan dasar berikut:
1. $\\ce{Ti^2+}$ ($Z = 22$)
2. $\\ce{Cr^3+}$ ($Z = 24$)
3. $\\ce{Fe^3+}$ ($Z = 26$, *high spin*)
4. $\\ce{Ni^2+}$ ($Z = 28$)

Urutan kation yang memiliki jumlah elektron tak berpasangan (*unpaired electrons*) dari yang **paling sedikit ke yang paling banyak** adalah ....

A. $\\ce{Ti^2+} = \\ce{Ni^2+} < \\ce{Cr^3+} < \\ce{Fe^3+}$  
B. $\\ce{Ti^2+} < \\ce{Cr^3+} < \\ce{Ni^2+} < \\ce{Fe^3+}$  
C. $\\ce{Ni^2+} < \\ce{Ti^2+} < \\ce{Cr^3+} < \\ce{Fe^3+}$  
D. $\\ce{Cr^3+} < \\ce{Ti^2+} < \\ce{Fe^3+} < \\ce{Ni^2+}$  
E. $\\ce{Fe^3+} < \\ce{Cr^3+} < \\ce{Ni^2+} = \\ce{Ti^2+}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
Dalam pembentukan kation logam transisi deret pertama ($3d$), elektron pada subkulit $4s$ dilepaskan terlebih dahulu sebelum elektron $3d$.

1. **$\\ce{Ti^2+}$ ($Z = 22$):**
   - Konfigurasi atom netral $\\ce{Ti}$: $[\\ce{Ar}] 4s^2 3d^2$
   - Ion $\\ce{Ti^2+}$ (kehilangan dua elektron $4s$): $[\\ce{Ar}] 3d^2$
   - Jumlah elektron tak berpasangan: **$2$ elektron** (menurut Kaidah Hund, menempati dua orbital $d$ terpisah).

2. **$\\ce{Cr^3+}$ ($Z = 24$):**
   - Konfigurasi atom netral $\\ce{Cr}$: $[\\ce{Ar}] 4s^1 3d^5$ (anomali kestabilan subkulit setengah penuh)
   - Ion $\\ce{Cr^3+}$ (lepas 1 elektron $4s$ dan 2 elektron $3d$): $[\\ce{Ar}] 3d^3$
   - Jumlah elektron tak berpasangan: **$3$ elektron** (konfigurasi subkulit $t_{2g}^3$ yang stabil).

3. **$\\ce{Fe^3+}$ ($Z = 26$):**
   - Konfigurasi atom netral $\\ce{Fe}$: $[\\ce{Ar}] 4s^2 3d^6$
   - Ion $\\ce{Fe^3+}$ (lepas dua elektron $4s$ dan satu elektron $3d$): $[\\ce{Ar}] 3d^5$
   - Dalam keadaan *high spin*, kelima elektron $3d$ menempati orbital masing-masing: **$5$ elektron tak berpasangan**.

4. **$\\ce{Ni^2+}$ ($Z = 28$):**
   - Konfigurasi atom netral $\\ce{Ni}$: $[\\ce{Ar}] 4s^2 3d^8$
   - Ion $\\ce{Ni^2+}$: $[\\ce{Ar}] 3d^8$
   - Berdasarkan aturan Hund: 3 orbital terisi berpasangan ($3 \\times 2 = 6$), 2 orbital terisi tunggal: **$2$ elektron tak berpasangan**.

**Urutan Jumlah Elektron Tak Berpasangan:**
$\\ce{Ti^2+} (2) = \\ce{Ni^2+} (2) < \\ce{Cr^3+} (3) < \\ce{Fe^3+} (5)$.`,
    solution_framework_template: `1. Tuliskan Konfigurasi Atom Netral:
• Ti: [Ar] 4s2 3d2
• Cr: [Ar] 4s1 3d5
• Fe: [Ar] 4s2 3d6
• Ni: [Ar] 4s2 3d8

2. Lepaskan Elektron dari Subkulit 4s Dahulu:
• Ti2+: [Ar] 3d2 -> n = 2
• Cr3+: [Ar] 3d3 -> n = 3
• Fe3+: [Ar] 3d5 -> n = 5
• Ni2+: [Ar] 3d8 -> n = 10 - 8 = 2

3. Bandingkan dan Urutkan:
• Ti2+ (2) = Ni2+ (2) < Cr3+ (3) < Fe3+ (5).`,
    generation_type: 'manual',
    source_event: 'KSN-K Kimia 2021 No. 3 (Kemendikbud)',
    year: 2021,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['konfigurasi-elektron', 'ion-transisi', 'kaidah-hund', 'elektron-tak-berpasangan', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 4. SOAL RIIL - OSK 2024 No. 4 (Muatan Inti Efektif Slater Zeff)
  // =========================================================================
  {
    id: 201004,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Aturan Slater & Muatan Inti Efektif (Zeff) Periode 3',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan Nilai Zeff untuk Elektron Valensi Silikon (Si) Menggunakan Kaidah Slater',
    question_text: `Muatan inti efektif ($Z_{\\text{eff}}$) yang dirasakan oleh suatu elektron dalam atom didefinisikan sebagai $Z_{\\text{eff}} = Z - S$, di mana $Z$ adalah nomor atom dan $S$ adalah tetapan pemerisaian (*shielding constant*).

Menurut aturan empiris Slater (*Slater's Rules*), pengelompokan orbital atom silikon ($\\ce{Si}$, $Z = 14$) adalah:
$$(1s)^2(2s, 2p)^8(3s, 3p)^4$$

Nilai muatan inti efektif ($Z_{\\text{eff}}$) yang dirasakan oleh salah satu elektron pada kulit valensi ($3p$) atom silikon adalah ....

A. $+3{,}85$  
B. $+4{,}15$  
C. $+4{,}85$  
D. $+5{,}15$  
E. $+9{,}85$`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Pengelompokan Kaidah Slater untuk Silikon ($Z = 14$):**
   $$(1s)^2 \\ (2s, 2p)^8 \\ (3s, 3p)^4$$

2. **Perhitungan Tetapan Pemerisaian ($S$) untuk Elektron pada Kelompok $(3s, 3p)$:**
   - **Elektron dalam kelompok yang sama ($n = 3$):**
     Terdapat $4 - 1 = 3$ elektron lain dalam kelompok $(3s, 3p)$.
     Kontribusi per elektron = $0{,}35$:
     $$S_1 = 3 \\times 0{,}35 = 1{,}05$$
   - **Elektron pada kulit $(n - 1) = 2$ (kelompok $2s, 2p$):**
     Terdapat $8$ elektron. Kontribusi per elektron = $0{,}85$:
     $$S_2 = 8 \\times 0{,}85 = 6{,}80$$
   - **Elektron pada kulit $(n - 2)$ atau lebih dalam ($1s$):**
     Terdapat $2$ elektron. Kontribusi per elektron = $1{,}00$:
     $$S_3 = 2 \\times 1{,}00 = 2{,}00$$
   - **Total Tetapan Pemerisaian ($S$):**
     $$S = 1{,}05 + 6{,}80 + 2{,}00 = 9{,}85$$

3. **Perhitungan Muatan Inti Efektif ($Z_{\\text{eff}}$):**
   $$Z_{\\text{eff}} = Z - S = 14 - 9{,}85 = +4{,}15$$

**Analisis Opsi Pengecoh:**
- **Opsi A (+3,85):** Kesalahan jika 4 elektron valensi dihitung semua ($4 \\times 0{,}35 = 1{,}40 \\implies S = 10{,}20 \\implies Z_{\\text{eff}} = 3{,}85$). Elektron yang ditinjau tidak boleh memerisai dirinya sendiri.
- **Opsi C (+4,85):** Kesalahan jika kontribusi kulit $(n-1)$ dihitung $0{,}75$.
- **Opsi E (+9,85):** Nilai dari tetapan pemerisaian $S$ itu sendiri, bukan $Z_{\\text{eff}}$.`,
    solution_framework_template: `1. Kelompokkan Elektron Berdasarkan Aturan Slater:
• (1s)^2 (2s,2p)^8 (3s,3p)^4

2. Hitung S untuk Elektron pada Kelompok (3s, 3p):
• Sesama kelompok (n): 3 elektron * 0.35 = 1.05
• Kulit n-1: 8 elektron * 0.85 = 6.80
• Kulit n-2 dan lebih dalam: 2 elektron * 1.00 = 2.00
• Total S = 1.05 + 6.80 + 2.00 = 9.85

3. Kurangkan dari Nomor Atom:
• Zeff = 14 - 9.85 = +4.15.`,
    generation_type: 'manual',
    source_event: 'OSK Kimia 2024 No. 4 (BPTI / Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['aturan-slater', 'zeff', 'muatan-inti-efektif', 'silikon', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 5. SOAL RIIL - OSK 2020 No. 5 (Tren Jari-jari Spesi Isoelektronik & IE)
  // =========================================================================
  {
    id: 201005,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Spesi Isoelektronik & Tren Jari-jari Ionik SPU',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Urutan Jari-jari Spesi Isoelektronik dari Konfigurasi Gas Mulia Neon',
    question_text: `Diberikan lima ion berikut yang seluruhnya memiliki jumlah elektron sama sebanyak 10 elektron (isoelektronik dengan gas mulia $\\ce{Ne}$):
$$\\ce{N^3-}, \\ce{O^2-}, \\ce{F-}, \\ce{Na+}, \\ce{Mg^2+}$$

Urutan jari-jari ion dari yang **paling kecil ke yang paling besar** adalah ....

A. $\\ce{Mg^2+} < \\ce{Na+} < \\ce{F-} < \\ce{O^2-} < \\ce{N^3-}$  
B. $\\ce{N^3-} < \\ce{O^2-} < \\ce{F-} < \\ce{Na+} < \\ce{Mg^2+}$  
C. $\\ce{Na+} < \\ce{Mg^2+} < \\ce{F-} < \\ce{O^2-} < \\ce{N^3-}$  
D. $\\ce{F-} < \\ce{O^2-} < \\ce{N^3-} < \\ce{Mg^2+} < \\ce{Na+}$  
E. $\\ce{Mg^2+} < \\ce{Na+} < \\ce{N^3-} < \\ce{O^2-} < \\ce{F-}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Konsep Spesi Isoelektronik:**
   Kelima ion memiliki konfigurasi elektron yang identik: $1s^2 2s^2 2p^6$ ($10$ elektron).
   Dengan jumlah elektron yang sama, tetapan pemerisaian sesama elektron ($S$) relatif konstan.

2. **Pengaruh Jumlah Proton Inti ($Z$):**
   - $\\ce{Mg^2+}$: $Z = 12$ proton menarik $10$ elektron.
   - $\\ce{Na+}$: $Z = 11$ proton menarik $10$ elektron.
   - $\\ce{F-}$: $Z = 9$ proton menarik $10$ elektron.
   - $\\ce{O^2-}$: $Z = 8$ proton menarik $10$ elektron.
   - $\\ce{N^3-}$: $Z = 7$ proton menarik $10$ elektron.

3. **Korelasi Muatan Inti terhadap Jari-jari:**
   Semakin besar nomor atom $Z$ (jumlah proton inti), tarikan inti terhadap awan elektron terluar semakin kuat ($Z_{\\text{eff}}$ semakin besar), sehingga awan elektron berkontraksi mendekati inti dan jari-jari ion semakin kecil.
   Sebaliknya, pada anion dengan $Z$ lebih kecil, rasio muatan proton/elektron rendah menyebabkan tolakan antar-elektron lebih dominan dan awan elektron mengembang (jari-jari lebih besar).

**Urutan Jari-jari Ion (dari terkecil ke terbesar):**
$$\\ce{Mg^2+} (72\\text{ pm}) < \\ce{Na+} (102\\text{ pm}) < \\ce{F-} (133\\text{ pm}) < \\ce{O^2-} (140\\text{ pm}) < \\ce{N^3-} (171\\text{ pm})$$`,
    solution_framework_template: `1. Identifikasi Jumlah Elektron dan Proton Tiap Spesi:
• N3- : Z = 7, e = 10
• O2- : Z = 8, e = 10
• F-  : Z = 9, e = 10
• Na+ : Z = 11, e = 10
• Mg2+: Z = 12, e = 10

2. Analisis Rasio Z/e (Muatan Inti Efektif):
• Semakin besar Z, tarikan inti semakin kuat, jari-jari semakin KECIL.
• Kation (Z > 10) memiliki jari-jari lebih kecil daripada anion (Z < 10).

3. Simpulkan Urutan:
• Mg2+ < Na+ < F- < O2- < N3-.`,
    generation_type: 'manual',
    source_event: 'OSK Kimia 2020 No. 5 (Kemendikbud)',
    year: 2020,
    is_verified: true,
    estimated_time_minutes: 2,
    total_points: 3,
    tags: ['spesi-isoelektronik', 'jari-jari-ion', 'muatan-inti', 'tabel-periodik', 'soal-resmi-riil'],
  },

  // =========================================================================
  // 6. SOAL SINTETIS - Lonjakan Energi Ionisasi Bertingkat & Penentuan Golongan
  // =========================================================================
  {
    id: 201006,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Energi Ionisasi Bertingkat & Konfigurasi Valensi Unsur',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Rumus Senyawa Klorida Berdasarkan Lonjakan Energi Ionisasi Bertingkat',
    question_text: `Data enam energi ionisasi pertama ($IE_1$ hingga $IE_6$) berturut-turut untuk suatu unsur representatif periode 3 ($X$) dalam satuan $\\text{kJ/mol}$ adalah sebagai berikut:
$$IE_1 = 578 \\quad IE_2 = 1817 \\quad IE_3 = 2745 \\quad IE_4 = 11578 \\quad IE_5 = 14842 \\quad IE_6 = 18379$$

Berdasarkan pola lonjakan energi ionisasi tersebut, rumus empiris dan sifat ikatan dari senyawa yang terbentuk antara unsur $X$ dengan klorin ($\\ce{Cl}$) pada kondisi standar adalah ....

A. $\\ce{XCl}$, senyawa ionik  
B. $\\ce{XCl2}$, padatan ionik berstruktur kisi kristal  
C. $\\ce{XCl3}$, senyawa dengan karakter kovalen polar signifikan yang dapat membentuk dimer $\\ce{X2Cl6}$  
D. $\\ce{XCl4}$, cairan kovalen nonpolar volatil  
E. $\\ce{XCl5}$, senyawa kovalen hipervalen`,
    expected_final_answer: 'C',
    solution_rubric: `**Kunci Jawaban: C**

**Pembahasan Lengkap:**
1. **Analisis Rasio Lonjakan Energi Ionisasi:**
   - $\\frac{IE_2}{IE_1} = \\frac{1817}{578} \\approx 3{,}14$
   - $\\frac{IE_3}{IE_2} = \\frac{2745}{1817} \\approx 1{,}51$
   - $\\frac{IE_4}{IE_3} = \\frac{11578}{2745} \\approx 4{,}22$ (**Lonjakan sangat drastis!**)
   - $\\frac{IE_5}{IE_4} = \\frac{14842}{11578} \\approx 1{,}28$

2. **Interpretasi Konfigurasi Elektron:**
   Lonjakan drastis dari $IE_3$ ($2745\\text{ kJ/mol}$) ke $IE_4$ ($11578\\text{ kJ/mol}$) menunjukkan bahwa pelepasan elektron ke-4 membutuhkan pemecahan konfigurasi kulit dalam (*core electrons*) yang stabil (isoelektronik dengan gas mulia $\\ce{Ne}$).
   Artinya, unsur $X$ memiliki **3 elektron valensi** (Golongan 13 / IIIA).
   Karena $X$ berada pada Periode 3, maka unsur $X$ adalah **Aluminium ($\\ce{Al}$)**.

3. **Karakteristik Senyawa dengan Klorin:**
   Aluminium bereaksi dengan klorin membentuk $\\ce{AlCl3}$.
   Karena kerapatan muatan kation $\\ce{Al^3+}$ yang tinggi (Aturan Fajans), $\\ce{AlCl3}$ memiliki polarisasi yang sangat kuat sehingga ikatannya memiliki karakter kovalen yang dominan dan dalam wujud gas/padat anhidrat membentuk molekul dimer $\\ce{Al2Cl6}$.

**Analisis Opsi Pengecoh:**
- **Opsi A / B:** Karakteristik unsur Golongan 1 (Na) atau Golongan 2 (Mg).
- **Opsi D:** Karakteristik Golongan 14 (Silikon, $\\ce{SiCl4}$).
- **Opsi E:** Karakteristik Golongan 15 (Fosforus, $\\ce{PCl5}$).`,
    solution_framework_template: `1. Analisis Perbedaan Nilai IE Bertingkat:
• IE1 = 578, IE2 = 1817, IE3 = 2745, IE4 = 11578 kJ/mol.
• Rasio lonjakan terbesar terjadi pada IE3 -> IE4 (lebih dari 4 kali lipat).

2. Tentukan Jumlah Elektron Valensi:
• Tiga elektron pertama mudah lepas -> 3 elektron valensi (Golongan 13).
• Unsur periode 3 golongan 13 adalah Aluminium (Al).

3. Tentukan Rumus dan Karakter Senyawa Klorida:
• Rumus: AlCl3.
• AlCl3 memiliki karakter kovalen kuat dan membentuk dimer Al2Cl6.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['energi-ionisasi-bertingkat', 'aturan-fajans', 'aluminium-klorida', 'soal-sintetis-twin'],
  },

  // =========================================================================
  // 7. SOAL SINTETIS - Anomali Afinitas Elektron & Energi Ionisasi
  // =========================================================================
  {
    id: 201007,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Afinitas Elektron & Anomali Repulsi Elektron Subkulit 2p vs 3p',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perbandingan Nilai Afinitas Elektron Halogen (Fluorin vs Klorin)',
    question_text: `Nilai afinitas elektron pertama ($\\Delta H_{\\text{ea1}}$, pelepasan energi saat penangkapan satu elektron dalam fasa gas) dari unsur-unsur halogen golongan 17 terukur sebagai berikut:
$$\\ce{F}: -328\\text{ kJ/mol} \\quad \\ce{Cl}: -349\\text{ kJ/mol} \\quad \\ce{Br}: -325\\text{ kJ/mol} \\quad \\ce{I}: -295\\text{ kJ/mol}$$

Meskipun atom fluorin memiliki keelektronegatifan paling tinggi dan jari-jari paling kecil dalam golongannya, nilai pelepasan energi afinitas elektron atom fluorin lebih kecil secara eksotermik dibandingkan klorin. Alasan utama yang mendasari anomali periodik tersebut adalah ....

A. Muatan inti efektif ($Z_{\\text{eff}}$) fluorin lebih kecil daripada klorin  
B. Elektron yang masuk pada atom fluorin menempati orbital $2p$ yang sangat kompak dengan kerapatan elektron tinggi sehingga mengalami gaya tolak antar-elektron (*interelectronic repulsion*) yang signifikan  
C. Atom fluorin memiliki afinitas ikatan kovalen yang lebih rendah dibandingkan klorin  
D. Subkulit $2p$ pada fluorin telah terisi setengah penuh yang sangat stabil  
E. Klorin memiliki orbital $3d$ kosong yang langsung digunakan untuk menampung elektron masuk`,
    expected_final_answer: 'B',
    solution_rubric: `**Kunci Jawaban: B**

**Pembahasan Lengkap:**
1. **Definisi Afinitas Elektron:**
   $$\\ce{X(g) + e- -> X-(g)} \\quad \\Delta H_{\\text{ea1}}$$
   Nilai yang lebih negatif menunjukkan pelepasan energi yang lebih besar (afinitas terhadap elektron lebih kuat).

2. **Penyebab Anomali $\\ce{F}$ vs $\\ce{Cl}$:**
   - Atom $\\ce{F}$ memiliki ukuran jari-jari atom yang sangat kecil ($r \\approx 71\\text{ pm}$) dibandingkan $\\ce{Cl}$ ($r \\approx 99\\text{ pm}$).
   - Elektron valensi pada $\\ce{F}$ terkonsentrasi dalam volume subkulit $2p$ yang sangat sempit dan padat.
   - Ketika elektron tambahan dimasukkan ke dalam subkulit $2p$ yang padat tersebut, elektron tersebut mengalami **gaya tolak elektrostatik antar-elektron (*interelectronic electron-electron repulsion*)** yang sangat kuat dari 7 elektron valensi lainnya.
   - Tolakan ini mengurangi energi stabilisasi netto yang dilepaskan, sehingga afinitas elektron $\\ce{F}$ ($-328\\text{ kJ/mol}$) lebih rendah eksotermitasnya dibandingkan $\\ce{Cl}$ ($-349\\text{ kJ/mol}$) yang memiliki subkulit $3p$ lebih bervolume luas dengan kerapatan muatan lebih rendah.

**Analisis Opsi Pengecoh:**
- **Opsi A:** Salah, $Z_{\\text{eff}}$ fluorin justru sangat tinggi.
- **Opsi C:** Menyebutkan energi ikatan kovalen molekul diatomik $\\ce{F2}$, bukan konsep atomik fasa gas afinitas elektron.
- **Opsi D:** Konfigurasi fluorin adalah $2s^2 2p^5$, bukan setengah penuh ($2p^3$).
- **Opsi E:** Elektron masuk pada klorin tetap menempati subkulit $3p$, bukan $3d$.`,
    solution_framework_template: `1. Identifikasi Fenomena Anomali:
• Afinitas elektron Cl (-349 kJ/mol) lebih eksoterm daripada F (-328 kJ/mol).

2. Evaluasi Efek Ukuran dan Kerapatan Elektron:
• F berada pada periode 2 dengan orbital 2p sangat kecil dan kompak.
• Penambahan elektron ke orbital 2p menimbulkan tolakan antar-elektron (interelectronic repulsion) yang besar.

3. Kesimpulan:
• Tolakan antar-elektron mendestabilkan ion F- relatif terhadap ion Cl-.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['afinitas-elektron', 'anomali-halogen', 'repulsi-elektron', 'sifat-periodik', 'soal-sintetis-twin'],
  },

  // =========================================================================
  // 8. SOAL SINTETIS - Panjang Gelombang de Broglie Partikel
  // =========================================================================
  {
    id: 201008,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Dualisme Gelombang-Partikel de Broglie & Mekanika Kuantum',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan Panjang Gelombang de Broglie Elektron yang Dipercepat Beda Potensial',
    question_text: `Sebuah berkas elektron (massa elektron $m_e = 9{,}109 \\times 10^{-31}\\text{ kg}$, muatan elektron $e = 1{,}602 \\times 10^{-19}\\text{ C}$) dipercepat dari keadaan diam melalui beda potensial elektrostatik sebesar $V = 150\\text{ V}$.

Menurut hipotesis Louis de Broglie, panjang gelombang materi ($\\lambda$) dari berkas elektron tersebut bernilai paling mendekati ....
(Gunakan tetapan Planck $h = 6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$)

A. $0{,}100\\text{ nm}$  
B. $0{,}123\\text{ nm}$  
C. $0{,}246\\text{ nm}$  
D. $1{,}226\\text{ nm}$  
E. $12{,}26\\text{ nm}$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Energi Kinetik Elektron Dipercepat Beda Potensial $V$:**
   $$E_k = e \\cdot V = (1{,}602 \\times 10^{-19}\\text{ C}) \\times (150\\text{ V}) = 2{,}403 \\times 10^{-17}\\text{ J}$$

2. **Hubungan Momentum ($p$) dengan Energi Kinetik:**
   $$E_k = \\frac{p^2}{2m} \\implies p = \\sqrt{2 m_e E_k} = \\sqrt{2 m_e e V}$$
   Substitusi nilai:
   $$p = \\sqrt{2 \\times (9{,}109 \\times 10^{-31}\\text{ kg}) \\times (2{,}403 \\times 10^{-17}\\text{ J})}$$
   $$p = \\sqrt{4{,}378 \\times 10^{-47}} = 6{,}617 \\times 10^{-24}\\text{ kg}\\cdot\\text{m/s}$$

3. **Panjang Gelombang de Broglie ($\\lambda$):**
   $$\\lambda = \\frac{h}{p} = \\frac{6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}}{6{,}617 \\times 10^{-24}\\text{ kg}\\cdot\\text{m/s}} = 1{,}001 \\times 10^{-10}\\text{ m} = 0{,}100\\text{ nm}$$
   
   *Catatan Pendekatan Rumus Praktis Elektron:*
   $$\\lambda = \\sqrt{\\frac{1{,}505}{V}}\\text{ nm} = \\sqrt{\\frac{1{,}505}{150}}\\text{ nm} = \\sqrt{0{,}01003}\\text{ nm} \\approx 0{,}100\\text{ nm}$$
   Untuk $V = 150\\text{ V}$:
   $$\\lambda = \\frac{1{,}226}{\\sqrt{150}} = \\frac{1{,}226}{12{,}247} = 0{,}1001\\text{ nm} \\approx 0{,}100\\text{ nm}$$`,
    solution_framework_template: `1. Konversi Beda Potensial ke Energi Kinetik:
• Ek = q * V = e * V.

2. Hubungkan dengan Momentum Linear:
• p = sqrt(2 * m * Ek).

3. Hitung Panjang Gelombang de Broglie:
• λ = h / p = h / sqrt(2 * m * e * V).
• Hasil numerik = 0.100 nm (atau 1.00 Angstrom).`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['de-broglie', 'dualisme-gelombang', 'mekanika-kuantum', 'soal-sintetis-twin'],
  },

  // =========================================================================
  // 9. SOAL SINTETIS - Aturan Slater Elektron 3d vs 4s pada Logam Transisi
  // =========================================================================
  {
    id: 201009,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Perbandingan Zeff Elektron 3d vs 4s & Urutan Ionisasi Logam Transisi',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Perhitungan Muatan Inti Efektif Elektron 3d vs 4s pada Atom Vanadium (Z = 23)',
    question_text: `Atom vanadium memiliki nomor atom $Z = 23$ dengan konfigurasi elektron keadaan dasar $[\\ce{Ar}] 4s^2 3d^3$.
Pengelompokan menurut aturan Slater adalah:
$$(1s)^2(2s, 2p)^8(3s, 3p)^8(3d)^3(4s)^2$$

Nilai tetapan pemerisaian ($S$) dan muatan inti efektif ($Z_{\\text{eff}}$) untuk satu elektron pada subkulit $3d$ berturut-turut adalah ....

A. $S = 18{,}70$ dan $Z_{\\text{eff}} = +4{,}30$  
B. $S = 19{,}70$ dan $Z_{\\text{eff}} = +3{,}30$  
C. $S = 19{,}40$ dan $Z_{\\text{eff}} = +3{,}60$  
D. $S = 17{,}65$ dan $Z_{\\text{eff}} = +5{,}35$  
E. $S = 20{,}25$ dan $Z_{\\text{eff}} = +2{,}75$`,
    expected_final_answer: 'A',
    solution_rubric: `**Kunci Jawaban: A**

**Pembahasan Lengkap:**
1. **Pengelompokan Slater untuk Atom Vanadium ($Z = 23$):**
   $$(1s)^2 \\ (2s, 2p)^8 \\ (3s, 3p)^8 \\ (3d)^3 \\ (4s)^2$$

2. **Kaidah Khusus Aturan Slater untuk Kelompok $[d]$ atau $[f]$:**
   - Elektron pada kelompok di sebelah kanan (yaitu $(4s)^2$) **tidak memberikan kontribusi perisai sama sekali** ($0{,}00$).
   - Elektron lain dalam kelompok $[d]$ yang sama memberikan kontribusi masing-masing $0{,}35$.
   - **Semua elektron pada semua kelompok di sebelah kiri** (baik kelompok $s, p$ kulit yang sama maupun kulit lebih dalam) masing-masing memberikan kontribusi penuh sebesar $1{,}00$.

3. **Perhitungan untuk Elektron $3d$:**
   - Elektron sesama kelompok $(3d)$: ada $3 - 1 = 2$ elektron.
     $$S_{\\text{sesama}} = 2 \\times 0{,}35 = 0{,}70$$
   - Elektron pada seluruh kelompok di sebelah kiri:
     Kelompok $(1s)^2 + (2s, 2p)^8 + (3s, 3p)^8 = 2 + 8 + 8 = 18$ elektron.
     $$S_{\\text{kiri}} = 18 \\times 1{,}00 = 18{,}00$$
   - Total Tetapan Pemerisaian ($S$):
     $$S = 0{,}70 + 18{,}00 = 18{,}70$$

4. **Muatan Inti Efektif ($Z_{\\text{eff}}$):**
   $$Z_{\\text{eff}}(3d) = 23 - 18{,}70 = +4{,}30$$

*(Sebagai pembanding, untuk elektron 4s: S = 19,70 dan Zeff = +3,30. Karena Zeff(4s) < Zeff(3d), elektron 4s lebih mudah dilepaskan terlebih dahulu).*`,
    solution_framework_template: `1. Kelompokkan Elektron Atom V (Z = 23):
• (1s)^2 (2s,2p)^8 (3s,3p)^8 (3d)^3 (4s)^2

2. Terapkan Aturan Khusus Kelompok [d]:
• Elektron di sebelah kanan (4s): kontribusi = 0.
• Elektron sesama kelompok (3d): (3 - 1) * 0.35 = 0.70.
• Semua elektron di sebelah kiri: 18 * 1.00 = 18.00.

3. Hitung S dan Zeff:
• S = 18.00 + 0.70 = 18.70.
• Zeff = 23 - 18.70 = +4.30.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['aturan-slater', 'orbital-3d', 'muatan-inti-efektif', 'logam-transisi', 'soal-sintetis-twin'],
  },

  // =========================================================================
  // 10. SOAL SINTETIS - Sifat Kemagnetan Momen Magnet Spin-Only (mu_eff)
  // =========================================================================
  {
    id: 201010,
    pillar_number: 1,
    module_id: 1,
    curriculum: 'osn',
    subtopic: 'Sifat Kemagnetan Paramagnetik & Momen Magnet Spin-Only',
    difficulty: 'OSK',
    question_style: 'mcq',
    title: 'Penentuan Momen Magnet Efektif (Spin-Only Magnetic Moment) Ion Mangan',
    question_text: `Senyawa kompleks koordinasi oktahedral $\\ce{[Mn(H2O)6]SO4}$ dianalisis sifat kemagnetannya pada suhu $298\\text{ K}$. Ligan aqua ($\\ce{H2O}$) merupakan ligan medan lemah (*weak field ligand*) yang menghasilkan kompleks *high spin*.

Momen magnet efektif *spin-only* ($\\mu_{\\text{eff}}$) dari ion mangan dalam senyawa tersebut dihitung menggunakan rumus:
$$\\mu_{\\text{eff}} = \\sqrt{n(n + 2)} \\ \\text{BM}$$
dengan $n$ adalah jumlah elektron tak berpasangan dan $\\text{BM}$ adalah Bohr Magneton.

Nilai $\\mu_{\\text{eff}}$ teoretis dari kompleks tersebut adalah ....
($Z_{\\ce{Mn}} = 25$)

A. $1{,}73\\text{ BM}$  
B. $2{,}83\\text{ BM}$  
C. $3{,}87\\text{ BM}$  
D. $4{,}90\\text{ BM}$  
E. $5{,}92\\text{ BM}$`,
    expected_final_answer: 'E',
    solution_rubric: `**Kunci Jawaban: E**

**Pembahasan Lengkap:**
1. **Penentuan Bilangan Oksidasi Mangan:**
   Dalam senyawa $\\ce{[Mn(H2O)6]SO4}$:
   - Ion sulfat: $\\ce{SO4^2-}$
   - Molekul air adalah ligan netral (muatan 0).
   - Muatan kation kompleks: $\\ce{[Mn(H2O)6]^2+}$.
   - Bilangan oksidasi mangan = $+2$ (ion $\\ce{Mn^2+}$).

2. **Konfigurasi Elektron Ion $\\ce{Mn^2+}$:**
   - Atom $\\ce{Mn}$ netral ($Z = 25$): $[\\ce{Ar}] 4s^2 3d^5$
   - Ion $\\ce{Mn^2+}$: $[\\ce{Ar}] 3d^5$

3. **Penentuan Jumlah Elektron Tak Berpasangan ($n$):**
   - Ligan $\\ce{H2O}$ adalah ligan medan lemah, sehingga energi pembelahan medan kristal ($\\Delta_o$) lebih kecil daripada energi perpasangan elektron ($P$).
   - Kompleks membentuk konfigurasi *high-spin*:
     $$t_{2g}^3 \\ e_g^2$$
   - Kelima elektron pada orbital $d$ menempati orbital secara paralel tak berpasangan:
     $$n = 5\\text{ elektron tak berpasangan}$$

4. **Perhitungan Momen Magnet Spin-Only ($\\mu_{\\text{eff}}$):**
   $$\\mu_{\\text{eff}} = \\sqrt{n(n + 2)} = \\sqrt{5(5 + 2)} = \\sqrt{5 \\times 7} = \\sqrt{35} \\approx 5{,}916\\text{ BM} \\approx 5{,}92\\text{ BM}$$

**Analisis Opsi Pengecoh:**
- **Opsi A (1,73 BM):** Untuk $n = 1$ (misal $\\ce{Cu^2+}$ atau $\\ce{Ti^3+}$).
- **Opsi B (2,83 BM):** Untuk $n = 2$ (misal $\\ce{Ni^2+}$ atau $\\ce{V^3+}$).
- **Opsi C (3,87 BM):** Untuk $n = 3$ (misal $\\ce{Cr^3+}$).
- **Opsi D (4,90 BM):** Untuk $n = 4$ (misal $\\ce{Fe^2+}$ *high spin* atau $\\ce{Mn^3+}$).`,
    solution_framework_template: `1. Tentukan Bilangan Oksidasi Logam:
• [Mn(H2O)6]SO4 -> kation [Mn(H2O)6]^2+ -> Mn(II).

2. Tuliskan Konfigurasi Elektron Ion Mn2+:
• Konfigurasi: [Ar] 3d5.

3. Hitung Elektron Tak Berpasangan (High Spin):
• Ligan H2O medan lemah -> konfigurasi t2g^3 eg^2 -> n = 5.

4. Substitusi ke Rumus Momen Magnet:
• μ_eff = sqrt(5 * (5 + 2)) = sqrt(35) = 5.92 BM.`,
    generation_type: 'twin_parallel',
    source_event: 'Soal Sintetis Terkalibrasi (Model Kisi-kisi OSK Puspresnas)',
    year: 2024,
    is_verified: true,
    estimated_time_minutes: 3,
    total_points: 3,
    tags: ['momen-magnet', 'spin-only', 'kompleks-high-spin', 'ion-mangan', 'soal-sintetis-twin'],
  },
];
