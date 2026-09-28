/**
 * smaWorkedExamplesFaseF2.ts
 * Bank Pembahasan Contoh Soal Terbimbing Kimia SMA Fase F2 (Kelas 12)
 * Standar: Kurikulum Merdeka, Asesmen Nasional, UTBK-SNBT & Ujian Sekolah SMA
 * Tingkat Kesulitan: Sedang dan Sulit (HOTS SMA)
 * Jumlah: Tepat 5 Soal per Topik (Bervariasi, Bebas Jargon OSN)
 */

import type { ConceptBlock } from '../materialsData.ts';

// ============================================================================
// TOPIK 113: Sifat Koligatif Larutan SMA
// (Hukum Raoult, Penurunan Tekanan Uap, Titik Didih/Beku, Tekanan Osmotik, van 't Hoff)
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_113: ConceptBlock[] = [
  {
    tag: 'contoh-hukum-raoult-tekanan-uap-sma',
    tags: ['hukum-raoult', 'penurunan-tekanan-uap', 'fraksi-mol', 'glukosa', 'kimia-sma'],
    title: 'Contoh Soal 1: Analisis Penurunan Tekanan Uap Jenuh (ΔP) & Formulasi Hukum Raoult (Level: Sedang)',
    summary: 'Perhitungan fraksi mol zat terlarut dan pelarut, penentuan penurunan tekanan uap jenuh (ΔP) dan tekanan uap larutan (P) pada kesetimbangan cairan-uap.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Di laboratorium kimia sekolah, seorang siswa melarutkan $18.0\\text{ gram}$ glukosa murni ($\\ce{C6H12O6}$, $M_r = 180.16\\text{ g/mol}$) ke dalam $90.0\\text{ gram}$ air suling ($\\ce{H2O}$, $M_r = 18.015\\text{ g/mol}$) pada temperatur $25.0^\\circ\\text{C}$.

Diketahui pada temperatur $25.0^\\circ\\text{C}$, tekanan uap jenuh air murni ($P^\\circ$) adalah sebesar $23.76\\text{ mmHg}$. Glukosa merupakan zat terlarut non-volatile (tidak mudah menguap) dan non-elektrolit.

---

### 🎯 Pertanyaan:
1. Hitung jumlah mol glukosa ($n_t$) dan jumlah mol air ($n_p$) dalam larutan tersebut!
2. Tentukan fraksi mol glukosa ($X_t$) dan fraksi mol air ($X_p$) di dalam larutan!
3. Berdasarkan **Hukum Raoult**, hitunglah:
   a. Besar penurunan tekanan uap jenuh larutan ($\\Delta P$) dalam satuan $\\text{mmHg}$!
   b. Besar tekanan uap jenuh larutan ($P$) pada suhu $25.0^\\circ\\text{C}$!
4. Jelaskan secara mikroskopis mengapa tekanan uap larutan glukosa selalu lebih rendah dibandingkan tekanan uap pelarut air murninya! Apa yang akan terjadi jika ke dalam larutan tersebut ditambahkan lagi $18.0\\text{ gram}$ glukosa tambahan?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Mol Glukosa ($n_t$) dan Mol Air ($n_p$)
1. **Mol glukosa ($n_t$):**
   $$n_t = \\frac{\\text{massa glukosa}}{M_r} = \\frac{18.0\\text{ g}}{180.16\\text{ g/mol}} \\approx \\mathbf{0.09991\\text{ mol}} \\quad (\\approx 0.100\\text{ mol})$$
2. **Mol pelarut air ($n_p$):**
   $$n_p = \\frac{\\text{massa air}}{M_r} = \\frac{90.0\\text{ g}}{18.015\\text{ g/mol}} \\approx \\mathbf{4.9958\\text{ mol}} \\quad (\\approx 5.000\\text{ mol})$$
3. **Mol total larutan ($n_{\\text{total}}$):**
   $$n_{\\text{total}} = n_t + n_p = 0.09991\\text{ mol} + 4.9958\\text{ mol} = \\mathbf{5.0957\\text{ mol}}$$

---

#### Langkah 2: Menghitung Fraksi Mol Komponen
1. **Fraksi mol glukosa ($X_t$):**
   $$X_t = \\frac{n_t}{n_t + n_p} = \\frac{0.09991\\text{ mol}}{5.0957\\text{ mol}} = \\mathbf{0.01961} \\quad (\\approx 0.0196)$$
2. **Fraksi mol air ($X_p$):**
   $$X_p = \\frac{n_p}{n_t + n_p} = \\frac{4.9958\\text{ mol}}{5.0957\\text{ mol}} = \\mathbf{0.98039} \\quad (\\approx 0.9804)$$
   *Verifikasi:* $X_t + X_p = 0.01961 + 0.98039 = 1.0000$ (tepat!).

---

#### Langkah 3: Menghitung Penurunan Tekanan Uap ($\\Delta P$) dan Tekanan Uap Larutan ($P$)
a. **Besar Penurunan Tekanan Uap Jenuh ($\\Delta P$):**
   Sesuai formulasi Hukum Raoult untuk zat terlarut non-volatile:
   $$\\Delta P = X_t \\cdot P^\\circ$$
   $$\\Delta P = 0.01961 \\times 23.76\\text{ mmHg} = \\mathbf{0.466\\text{ mmHg}}$$

b. **Besar Tekanan Uap Jenuh Larutan ($P$):**
   Tekanan uap larutan dapat dihitung melalui dua cara yang setara:
   - **Metode 1 (Pengurangan):**
     $$P = P^\\circ - \\Delta P = 23.76\\text{ mmHg} - 0.466\\text{ mmHg} = \\mathbf{23.294\\text{ mmHg}}$$
   - **Metode 2 (Hukum Raoult Pelarut):**
     $$P = X_p \\cdot P^\\circ = 0.98039 \\times 23.76\\text{ mmHg} = \\mathbf{23.294\\text{ mmHg}}$$

---

#### Langkah 4: Penjelasan Mikroskopis & Efek Penambahan Solute
1. **Penyebab Mikroskopis:**  
   Pada pelarut air murni, seluruh bidang permukaan cairan ditempati oleh molekul-molekul $\\ce{H2O}$ yang bebas melompat menguap ke udara. Ketika molekul glukosa dilarutkan, sebagian fraksi luas permukaan antarmuka cairan-udara terhalang oleh molekul glukosa (*steric barrier*). Karena glukosa bersifat non-volatile, laju penguapan netto molekul air berkurang, sehingga pada keadaan setimbang uap air yang terbentuk lebih sedikit dan tekanan uap larutan menjadi lebih rendah ($P < P^\\circ$).
2. **Efek Penambahan $18.0\\text{ gram}$ Glukosa Lagi:**  
   Penambahan zat terlarut akan melipatgandakan jumlah mol glukosa ($n_t$ naik menjadi $\\approx 0.200\\text{ mol}$). Akibatnya, nilai fraksi mol zat terlarut ($X_t$) meningkat menjadi hampir dua kali lipat, sehingga **penurunan tekanan uap ($\\Delta P$) semakin besar** dan **tekanan uap larutan ($P$) semakin turun**.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Jebakan Klasik Soal Hukum Raoult di UTBK-SNBT & Ujian Sekolah:**
> - Perhatikan secara teliti apa yang ditanyakan: **Tekanan uap larutan ($P$)** atau **Penurunan tekanan uap ($\\Delta P$)**!
>   - Gunakan $X_p$ (fraksi mol **pelarut**) untuk mencari **Tekanan Uap Larutan ($P = X_p \\cdot P^\\circ$)**.
>   - Gunakan $X_t$ (fraksi mol **terlarut**) untuk mencari **Penurunan Tekanan Uap ($\\Delta P = X_t \\cdot P^\\circ$)**.
> - Jangan lupa konversi massa air ke mol dengan membaginya dengan $M_r = 18\\text{ g/mol}$, bukan dibiarkan dalam gram!`,
    keyFormulas: [
      { name: 'Hukum Raoult Tekanan Uap Larutan', formula: 'P = X_p \\cdot P^\\circ' },
      { name: 'Hukum Raoult Penurunan Tekanan Uap', formula: '\\Delta P = X_t \\cdot P^\\circ = (P^\\circ - P)' },
      { name: 'Hubungan Fraksi Mol', formula: 'X_t + X_p = 1 \\iff X_p = 1 - X_t' },
    ],
  },
  {
    tag: 'contoh-ebulioskopi-krioskopi-diagram-pt-sma',
    tags: ['kenaikan-titik-didih', 'penurunan-titik-beku', 'diagram-fasa-pt', 'sukrosa', 'molalitas', 'kimia-sma'],
    title: 'Contoh Soal 2: Kenaikan Titik Didih (ΔTb), Penurunan Titik Beku (ΔTf) & Analisis Diagram Fasa P-T (Level: Sedang)',
    summary: 'Perhitungan molalitas, penentuan kenaikan titik didih ebulioskopi dan penurunan titik beku krioskopi, serta pergeseran kurva kesetimbangan fasa pada diagram P-T air.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Dalam suatu praktikum kimia, dilarutkan $34.2\\text{ gram}$ sukrosa (gula pasir, $\\ce{C12H22O11}$, $M_r = 342.3\\text{ g/mol}$) ke dalam $250.0\\text{ gram}$ air murni. Larutan ini kemudian dipanaskan hingga mendidih dan didinginkan hingga membeku pada tekanan atmosfer normal ($1.0\\text{ atm} = 760\\text{ mmHg}$).

**Data Karakteristik Pelarut Air Murni:**
- Titik didih normal ($T_b^\\circ$) $= 100.00^\\circ\\text{C}$
- Titik beku normal ($T_f^\\circ$) $= 0.00^\\circ\\text{C}$
- Tetapan kenaikan titik didih molal ($K_b$) $= 0.52^\\circ\\text{C/m}$
- Tetapan penurunan titik beku molal ($K_f$) $= 1.86^\\circ\\text{C/m}$

---

### 🎯 Pertanyaan:
1. Hitunglah molalitas ($m$) larutan sukrosa tersebut!
2. Tentukan:
   a. Kenaikan titik didih larutan ($\\Delta T_b$) dan temperatur titik didih larutan ($T_b$) pada tekanan $1\\text{ atm}$!
   b. Penurunan titik beku larutan ($\\Delta T_f$) dan temperatur titik beku larutan ($T_f$) pada tekanan $1\\text{ atm}$!
3. Gambarkan sketsa dan jelaskan pergeseran kurva pada **Diagram Fasa P-T** air murni akibat penambahan zat terlarut sukrosa! Tunjukkan posisi titik tripel baru, titik didih larutan ($T_b$), dan titik beku larutan ($T_f$)!
4. Mengapa pada konsentrasi molal yang sama, nilai penurunan titik beku ($\\Delta T_f$) selalu lebih besar secara signifikan daripada kenaikan titik didih ($\\Delta T_b$) untuk pelarut air?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Molalitas Larutan ($m$)
1. **Jumlah mol sukrosa ($n_t$):**
   $$n_t = \\frac{\\text{massa sukrosa}}{M_r} = \\frac{34.2\\text{ g}}{342.3\\text{ g/mol}} \\approx \\mathbf{0.09991\\text{ mol}} \\quad (\\approx 0.100\\text{ mol})$$
2. **Massa pelarut air dalam kilogram ($P$):**
   $$P = 250.0\\text{ g} = 0.250\\text{ kg}$$
3. **Molalitas larutan ($m$):**
   $$m = \\frac{n_t}{P \\text{ (kg)}} = \\frac{\\text{massa}}{M_r} \\times \\frac{1000}{P \\text{ (g)}} = \\frac{34.2}{342.3} \\times \\frac{1000}{250.0} = 0.09991 \\times 4 = \\mathbf{0.3996\\text{ m}} \\quad (\\approx 0.400\\text{ m})$$

---

#### Langkah 2: Menghitung Titik Didih ($T_b$) dan Titik Beku ($T_f$) Larutan
Sukrosa merupakan zat kovalen non-elektrolit, sehingga faktor van 't Hoff $i = 1$.

a. **Kenaikan Titik Didih ($\\Delta T_b$) & Titik Didih Larutan ($T_b$):**
   $$\\Delta T_b = m \\cdot K_b = (0.3996\\text{ m}) \\times (0.52^\\circ\\text{C/m}) = \\mathbf{0.2078^\\circ\\text{C}} \\quad (\\approx 0.21^\\circ\\text{C})$$
   Titik didih larutan pada tekanan $1\\text{ atm}$:
   $$T_b = T_b^\\circ + \\Delta T_b = 100.00^\\circ\\text{C} + 0.2078^\\circ\\text{C} = \\mathbf{100.208^\\circ\\text{C}}$$

b. **Penurunan Titik Beku ($\\Delta T_f$) & Titik Beku Larutan ($T_f$):**
   $$\\Delta T_f = m \\cdot K_f = (0.3996\\text{ m}) \\times (1.86^\\circ\\text{C/m}) = \\mathbf{0.7433^\\circ\\text{C}} \\quad (\\approx 0.74^\\circ\\text{C})$$
   Titik beku larutan pada tekanan $1\\text{ atm}$:
   $$T_f = T_f^\\circ - \\Delta T_f = 0.00^\\circ\\text{C} - 0.7433^\\circ\\text{C} = \\mathbf{-0.743^\\circ\\text{C}}$$

---

#### Langkah 3: Analisis Pergeseran Kurva Diagram Fasa P-T
Pada diagram fasa P-T (Tekanan vs Temperatur):
1. **Kurva Penguapan Cair-Gas Bergeser ke Bawah/Kanan:**
   Karena zat terlarut menurunkan tekanan uap jenuh cairan pada setiap temperatur ($P < P^\\circ$), maka kurva penguapan larutan berada di bawah kurva pelarut murni. Pada tekanan $1\\text{ atm}$, kurva larutan baru berpotongan pada temperatur yang lebih tinggi ($T_b = 100.208^\\circ\\text{C} > 100.00^\\circ\\text{C}$), menghasilkan **$\\Delta T_b > 0$**.
2. **Kurva Peleburan Padat-Cair Bergeser ke Kiri:**
   Penurunan tekanan uap fasa cair menggeser perpotongan kurva kesetimbangan padat-cair menuju temperatur yang lebih rendah ($T_f = -0.743^\\circ\\text{C} < 0.00^\\circ\\text{C}$), menghasilkan **$\\Delta T_f > 0$**.
3. **Titik Tripel Baru:**
   Titik temu ketiga fasa (titik tripel) bergeser ke temperatur yang lebih rendah dan tekanan yang lebih rendah dibandingkan pelarut murni.
4. **Perluasan Rentang Wujud Cair:**
   Rentang fasa cair air murni ($0^\\circ\\text{C} - 100^\\circ\\text{C}$, rentang $100^\\circ\\text{C}$) meluas menjadi ($-0.743^\\circ\\text{C} - 100.208^\\circ\\text{C}$, rentang $\\approx 100.95^\\circ\\text{C}$).

---

#### Langkah 4: Mengapa $K_f > K_b$ untuk Air?
Berdasarkan termodinamika kimia:
$$K_b = \\frac{R (T_b^\\circ)^2 M_p}{\\Delta H_{\\text{vap}}} \\qquad K_f = \\frac{R (T_f^\\circ)^2 M_p}{\\Delta H_{\\text{fus}}}$$
- Kalor penguapan air ($\\Delta H_{\\text{vap}} \\approx 40.7\\text{ kJ/mol}$) jauh lebih besar daripada kalor peleburan es ($\\Delta H_{\\text{fus}} \\approx 6.01\\text{ kJ/mol}$) karena penguapan memerlukan pemutusan seluruh ikatan hidrogen antarmolekul, sedangkan peleburan hanya memutus sebagian ikatan hidrogen kisi kristal es.
- Karena nilai $\\Delta H_{\\text{fus}}$ di penyebut jauh lebih kecil, maka tetapan $K_f$ air ($1.86^\\circ\\text{C/m}$) bernilai hampir **$3.6$ kali lebih besar** daripada tetapan $K_b$ air ($0.52^\\circ\\text{C/m}$). Akibatnya, pada konsentrasi molal yang sama, efek penurunan titik beku selalu jauh lebih menonjol daripada kenaikan titik didih!

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Mengingat Tanda Operasi Titik Didih vs Titik Beku:**
> - **Titik Didih NAIK:** $T_b = T_b^\\circ \\mathbf{+} \\Delta T_b$ (selalu lebih dari $100^\\circ\\text{C}$ untuk pelarut air).
> - **Titik Beku TURUN:** $T_f = T_f^\\circ \\mathbf{-} \\Delta T_f$ (selalu minus/negatif di bawah $0^\\circ\\text{C}$ untuk pelarut air).
> - Nilai $\\Delta T_b$ dan $\\Delta T_f$ sendiri **selalu bernilai positif** (menyatakan besar selisih perubahan)!`,
    keyFormulas: [
      { name: 'Kenaikan Titik Didih Non-Elektrolit', formula: '\\Delta T_b = m \\cdot K_b = \\frac{\\text{massa}}{M_r} \\times \\frac{1000}{P} \\times K_b' },
      { name: 'Titik Didih Larutan', formula: 'T_b = T_b^\\circ + \\Delta T_b' },
      { name: 'Penurunan Titik Beku Non-Elektrolit', formula: '\\Delta T_f = m \\cdot K_f = \\frac{\\text{massa}}{M_r} \\times \\frac{1000}{P} \\times K_f' },
      { name: 'Titik Beku Larutan', formula: 'T_f = T_f^\\circ - \\Delta T_f' },
    ],
  },
  {
    tag: 'contoh-tekanan-osmotik-tonisitas-ro-sma',
    tags: ['tekanan-osmotik', 'persamaan-van-t-hoff', 'isotonik', 'hemolisis-krenasi', 'reverse-osmosis', 'kimia-sma'],
    title: 'Contoh Soal 3: Tekanan Osmotik (Π), Fisiologi Sel Darah Merah & Desalinasi Reverse Osmosis (Level: Sedang)',
    summary: 'Perhitungan tekanan osmotik infus salin normal, analisis dampak fisiologis tonisitas larutan terhadap sel darah merah, serta prinsip kerja osmosis balik pemurnian air laut.',
    content: `### 📋 Skenario Medis & Teknologi Desalinasi:
Di rumah sakit, larutan infus salin normal (larutan $\\ce{NaCl } 0.90\\%\\text{ b/v}$) digunakan untuk rehidrasi pasien secara intravena. Larutan $0.90\\%\\text{ b/v}$ ini dibuat dengan melarutkan $9.00\\text{ gram } \\ce{NaCl}$ ($M_r = 58.44\\text{ g/mol}$) di dalam air suling hingga volume tepat $1.00\\text{ Liter}$. Temperatur tubuh manusia adalah $37.0^\\circ\\text{C}$ ($310.15\\text{ K}$).

Pada konsentrasi fisiologis tersebut, garam $\\ce{NaCl}$ terionisasi dengan faktor van 't Hoff terukur $i = 1.90$ (karena adanya interaksi pasangan ion).
*(Tetapan gas universal $R = 0.08206\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$)*.

---

### 🎯 Pertanyaan:
1. Hitung konsentrasi Molaritas ($M$) dari larutan infus $\\ce{NaCl } 0.90\\%\\text{ b/v}$ tersebut!
2. Hitung tekanan osmotik ($\\Pi$) larutan infus tersebut pada temperatur tubuh manusia $37.0^\\circ\\text{C}$ dalam satuan $\\text{atm}$!
3. Larutan infus tersebut diformulasikan agar bersifat **isotonik** dengan plasma darah manusia.
   a. Apa yang dimaksud dengan larutan isotonik?
   b. Apa bahaya medis yang terjadi jika seorang perawat keliru memasukkan cairan infus berupa **air suling murni (aquades)** ke dalam pembuluh darah pasien? Jelaskan fenomena fisiologisnya!
   c. Apa yang terjadi pada sel darah jika pasien diinfus dengan **larutan garam pekat $5.0\\%$**?
4. Suatu unit desalinasi air laut (*Reverse Osmosis* / RO) memproses air laut yang memiliki tekanan osmotik $\\Pi = 26.0\\text{ atm}$. Berapakah tekanan mekanis minimum ($P_{\\text{min}}$) yang harus dikerahkan oleh pompa membran RO agar dapat memproduksi air minum segar? Jelaskan arah aliran molekul airnya!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Molaritas Larutan Salin Normal ($M$)
- Massa $\\ce{NaCl}$ $= 9.00\\text{ gram}$ dalam volume $V = 1.00\\text{ Liter}$.
- Jumlah mol $\\ce{NaCl}$ ($n$):
  $$n = \\frac{\\text{massa}}{M_r} = \\frac{9.00\\text{ g}}{58.44\\text{ g/mol}} = \\mathbf{0.1540\\text{ mol}}$$
- Molaritas larutan ($M$):
  $$M = \\frac{n}{V} = \\frac{0.1540\\text{ mol}}{1.00\\text{ L}} = \\mathbf{0.1540\\text{ M}} \\quad (\\text{mol/L})$$

---

#### Langkah 2: Menghitung Tekanan Osmotik ($\\Pi$) pada Suhu Tubuh ($37.0^\\circ\\text{C}$)
Gunakan rumus van 't Hoff untuk larutan elektrolit:
$$\\Pi = M \\cdot R \\cdot T \\cdot i$$
Substitusikan parameter:
- $M = 0.1540\\text{ mol/L}$
- $R = 0.08206\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$
- $T = 37.0 + 273.15 = 310.15\\text{ K}$
- $i = 1.90$

$$\\Pi = (0.1540) \\times (0.08206) \\times (310.15) \\times (1.90)$$
$$\\Pi = 3.9213 \\times 1.90 = \\mathbf{7.45\\text{ atm}}$$
*Catatan Medis:* Tekanan osmotik $\\Pi \\approx 7.5 - 7.7\\text{ atm}$ ini setara persis dengan tekanan osmotik alami plasma darah manusia.

---

#### Langkah 3: Analisis Tonisitas & Fisiologi Sel Darah Merah
a. **Definisi Larutan Isotonik:**  
   Larutan yang memiliki **tekanan osmotik efektif yang sama persis** dengan cairan di dalam sel ($\u03a0_{\\text{luar}} = \\Pi_{\\text{sel}}$), sehingga tidak terjadi perpindahan netto molekul air menembus membran sel. Sel darah merah mempertahankan bentuk dan fungsinya secara normal.
b. **Jika Diinfus Air Suling Murni (Larutan Hipotonik, $\\Pi_{\\text{luar}} \\approx 0$):**  
   Cairan ekstraseluler menjadi jauh lebih encer dibandingkan sitoplasma sel darah. Sesuai prinsip osmosis, molekul air akan **berdifusi masuk secara deras ke dalam sel darah merah**. Sel darah akan membengkak, meregang melampaui elastisitas membran sel, dan akhirnya **pecah (mengalami hemolisis/lisis)**. Peristiwa ini sangat fatal karena merusak sel darah merah dan memicu kematian!
c. **Jika Diinfus Larutan Garam Pekat $5.0\\%$ (Larutan Hipertonik, $\\Pi_{\\text{luar}} > \\Pi_{\\text{sel}}$):**  
   Cairan ekstraseluler memiliki tekanan osmotik jauh lebih tinggi daripada cairan dalam sel. Akibatnya, air dari dalam sel darah merah akan **tersedot keluar menuju pembuluh darah**. Sel darah kehilangan volume cairannya, mengerut, dan kisut (**mengalami krenasi**), kehilangan kemampuan mentranspor oksigen.

---

#### Langkah 4: Prinsip Desalinasi Osmosis Balik (*Reverse Osmosis* / RO)
1. **Tekanan Minimum Pompa ($P_{\\text{min}}$):**  
   Agar aliran osmosis spontan dapat dibalik, tekanan mekanis eksternal yang diberikan oleh pompa hidrolik harus **melampaui tekanan osmotik alami air laut**:
   $$P_{\\text{eksternal}} > \\Pi \\implies \\mathbf{P_{\\text{min}} > 26.0\\text{ atm}}$$
   *(Dalam pabrik desalinasi industri, tekanan yang diberikan biasanya sebesar $50 - 70\\text{ atm}$ untuk memastikan laju aliran air tawar yang tinggi).*
2. **Arah Aliran Molekul Air:**  
   Tekanan eksternal raksasa memaksa molekul air murni menembus pori-pori membran semipermeabel polimer nano (ukuran pori $< 1\\text{ nm}$) dari sisi air laut pekat menuju sisi penampungan air tawar murni, sementara ion garam ($\\ce{Na+, Cl-, Mg^2+, SO4^2-}$) tertahan di sisi limbah pekat (*brine*).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Mengingat Pasangan Istilah Tonisitas Sel Biologi:**
> - **Hipotonik (Luar Lebih Encer):** Air MASUK $\\implies$ Sel Membengkak $\\implies$ **HEMOLISIS (Lisis/Pecah)**. *(Ingat: Hipo = seperti Kuda Nil yang gembung).*
> - **Hipertonik (Luar Lebih Pekat):** Air KELUAR $\\implies$ Sel Mengerut $\\implies$ **KRENASI (Kisut)**. *(Ingat: Hiper = tegang/mengerut).*
> - **Isotonik (Sama Tekanan):** Cairan Infus $\\ce{NaCl } 0.9\\%$ atau Glukosa $5\\%$.`,
    keyFormulas: [
      { name: 'Rumus Tekanan Osmotik Elektrolit', formula: '\\Pi = M \\cdot R \\cdot T \\cdot i' },
      { name: 'Kriteria Osmosis Balik (RO)', formula: 'P_{\\text{eksternal}} > \\Pi \\implies \\text{Desalinasi Air Murni Berlangsung}' },
      { name: 'Kondisi Isotonik', formula: '\\Pi_1 = \\Pi_2 \\implies \\text{Laju Osmosis Netto} = 0' },
    ],
  },
  {
    tag: 'contoh-koligatif-elektrolit-van-t-hoff-hots-sma',
    tags: ['sifat-koligatif-elektrolit', 'faktor-van-t-hoff', 'derajat-ionisasi', 'penurunan-titik-beku', 'pasangan-ion', 'hots-sma'],
    title: 'Contoh Soal 4: Evaluasi Sifat Koligatif Elektrolit Kuat vs Lemah, Derajat Ionisasi & Efek Pasangan Ion (Level: HOTS SMA)',
    summary: 'Komparasi kuantitatif penurunan titik beku non-elektrolit, elektrolit biner, dan terner dengan derajat ionisasi tertentu, serta rasional fisika teori pasangan ion Debye-Hückel.',
    content: `### 📋 Skenario Masalah di Laboratorium:
Seorang siswa kelas 12 menyiapkan tiga bejana yang masing-masing berisi larutan dengan konsentrasi molal yang sama persis, yaitu $0.100\\text{ molal}$ dalam pelarut air murni ($K_f = 1.86^\\circ\\text{C/m}$, $T_f^\\circ = 0.000^\\circ\\text{C}$):
- **Bejana 1:** Larutan urea ($\\ce{CO(NH2)2}$), zat non-elektrolit.
- **Bejana 2:** Larutan asam cuka / asam asetat ($\\ce{CH3COOH}$), elektrolit lemah dengan tetapan ionisasi asam $K_a = 1.80 \\times 10^{-5}$.
- **Bejana 3:** Larutan kalsium klorida ($\\ce{CaCl2}$), elektrolit kuat terner yang pada konsentrasi ini memiliki derajat ionisasi $\\alpha = 0.850$.

---

### 🎯 Pertanyaan:
1. Tentukan nilai faktor van 't Hoff ($i$) untuk:
   a. Larutan urea pada Bejana 1!
   b. Larutan $\\ce{CaCl2}$ pada Bejana 3!
2. Untuk larutan asam asetat $0.100\\text{ m}$ pada Bejana 2:
   a. Hitung derajat ionisasi ($\\alpha$) asam asetat berdasarkan rumus Ostwald ($\\alpha = \\sqrt{K_a / m}$)!
   b. Tentukan nilai faktor van 't Hoff ($i$) larutan asam asetat tersebut!
3. Hitunglah penurunan titik beku ($\\Delta T_f$) dan titik beku larutan ($T_f$) untuk masing-masing dari ketiga bejana tersebut!
4. Urutkan ketiga larutan tersebut dari yang memiliki:
   a. Penurunan titik beku ($\\Delta T_f$) paling kecil ke paling besar!
   b. Titik beku larutan ($T_f$) paling tinggi ke paling rendah!
5. Pada eksperimen nyata di laboratorium, larutan $\\ce{NaCl } 0.100\\text{ m}$ yang merupakan elektrolit kuat biner ($n = 2$) ternyata membeku pada suhu $-0.348^\\circ\\text{C}$, bukan $-0.372^\\circ\\text{C}$ seperti yang diprediksikan secara teoritis jika terurai $100\\%$.
   a. Hitung nilai faktor van 't Hoff eksperimen ($i_{\\text{eks}}$) dari data tersebut!
   b. Mengapa nilai $i_{\\text{eks}}$ ($1.87$) lebih kecil daripada nilai teoritisnya ($2.00$)? Jelaskan menggunakan **Teori Pasangan Ion (*Ion Pairing*) Debye-Hückel**!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Faktor van 't Hoff ($i$) Bejana 1 dan Bejana 3
1. **Bejana 1 (Urea):**  
   Urea adalah zat non-elektrolit yang tidak terionisasi sama sekali di dalam air ($\\alpha = 0$):
   $$i_1 = 1 + (n - 1)(0) = \\mathbf{1.000}$$
2. **Bejana 3 ($\\ce{CaCl2}$):**  
   Reaksi disosiasi: $\\ce{CaCl2(aq) -> Ca^2+(aq) + 2Cl-(aq)}$  
   Jumlah ion yang dihasilkan: $n = 1 + 2 = 3$ ion.  
   Derajat ionisasi: $\\alpha = 0.850$.  
   $$i_3 = 1 + (n - 1)\\alpha = 1 + (3 - 1)(0.850) = 1 + 2(0.850) = 1 + 1.700 = \\mathbf{2.700}$$

---

#### Langkah 2: Evaluasi Asam Asetat (Bejana 2)
a. **Derajat Ionisasi ($\\alpha$) Asam Lemah:**  
   Berdasarkan Hukum Pengenceran Ostwald untuk elektrolit lemah monovalen biner ($n = 2$):
   $$\\alpha = \\sqrt{\\frac{K_a}{m}} = \\sqrt{\\frac{1.80 \\times 10^{-5}}{0.100}} = \\sqrt{1.80 \\times 10^{-4}} = \\mathbf{0.01342} \\quad (\\approx 1.34\\%)$$
b. **Faktor van 't Hoff Asam Asetat ($i_2$):**  
   $$\\ce{CH3COOH(aq) <=> H+(aq) + CH3COO-(aq)} \\implies n = 2$$
   $$i_2 = 1 + (n - 1)\\alpha = 1 + (2 - 1)(0.01342) = 1 + 0.01342 = \\mathbf{1.0134}$$

---

#### Langkah 3: Perhitungan $\\Delta T_f$ dan $T_f$ Ketiga Bejana
Gunakan rumus umum krioskopi: $\\Delta T_f = m \\cdot K_f \\cdot i$ dan $T_f = 0.000^\\circ\\text{C} - \\Delta T_f$.

1. **Bejana 1 (Urea $0.100\\text{ m}$, $i = 1.000$):**
   $$\\Delta T_{f,1} = 0.100 \\times 1.86 \\times 1.000 = \\mathbf{0.186^\\circ\\text{C}}$$
   $$T_{f,1} = 0.000^\\circ\\text{C} - 0.186^\\circ\\text{C} = \\mathbf{-0.186^\\circ\\text{C}}$$
2. **Bejana 2 (Asam Asetat $0.100\\text{ m}$, $i = 1.0134$):**
   $$\\Delta T_{f,2} = 0.100 \\times 1.86 \\times 1.0134 = \\mathbf{0.1885^\\circ\\text{C}}$$
   $$T_{f,2} = 0.000^\\circ\\text{C} - 0.1885^\\circ\\text{C} = \\mathbf{-0.1885^\\circ\\text{C}}$$
3. **Bejana 3 ($\\ce{CaCl2 } 0.100\\text{ m}$, $i = 2.700$):**
   $$\\Delta T_{f,3} = 0.100 \\times 1.86 \\times 2.700 = \\mathbf{0.5022^\\circ\\text{C}}$$
   $$T_{f,3} = 0.000^\\circ\\text{C} - 0.5022^\\circ\\text{C} = \\mathbf{-0.5022^\\circ\\text{C}}$$

---

#### Langkah 4: Perbandingan Urutan Sifat Koligatif
a. **Urutan Penurunan Titik Beku ($\\Delta T_f$) dari Terkecil ke Terbesar:**
   $$\\mathbf{\\Delta T_f(\\text{Urea}) < \\Delta T_f(\\ce{CH3COOH}) < \\Delta T_f(\\ce{CaCl2})}$$
   $$(0.186^\\circ\\text{C} < 0.1885^\\circ\\text{C} < 0.5022^\\circ\\text{C})$$
b. **Urutan Titik Beku Larutan ($T_f$) dari Tertinggi ke Terendah:**
   Ingat bahwa nilai temperatur negatif yang mendekati nol bernilai lebih tinggi:
   $$\\mathbf{T_f(\\text{Urea}) > T_f(\\ce{CH3COOH}) > T_f(\\ce{CaCl2})}$$
   $$(-0.186^\\circ\\text{C} > -0.1885^\\circ\\text{C} > -0.5022^\\circ\\text{C})$$

---

#### Langkah 5: Analisis Eksperimen $\\ce{NaCl}$ & Teori Pasangan Ion Debye-Hückel
a. **Menghitung $i_{\\text{eks}}$:**
   $$\\Delta T_{f, \\text{eks}} = 0.000^\\circ\\text{C} - (-0.348^\\circ\\text{C}) = 0.348^\\circ\\text{C}$$
   $$\\Delta T_f = m \\cdot K_f \\cdot i_{\\text{eks}} \\implies 0.348 = (0.100) \\times (1.86) \\times i_{\\text{eks}}$$
   $$i_{\\text{eks}} = \\frac{0.348}{0.186} = \\mathbf{1.871} \\quad (\\approx 1.87)$$
b. **Penyebab Mikroskopis Teori Debye-Hückel:**  
   Pada larutan nyata dengan konsentrasi tertentu, ion $\\ce{Na+}$ dan $\\ce{Cl-}$ tidak benar-benar terisolasi secara sempurna. Gaya tarik elektrostatik antar ion berlawanan muatan menyebabkan terbentuknya **pasangan ion sesaat (*ion pairs*, $[\\ce{Na+ \\cdot\\cdot\\cdot Cl-}]$)** yang bergerak bersama sebagai satu unit kinetik tunggal. Pembentukan pasangan ion ini mengurangi jumlah partikel bebas independen di dalam larutan, sehingga efek koligatif efektif sedikit lebih rendah daripada prediksi ideal $100\\%$ ion bebas ($i = 1.87 < 2.00$).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Jebakan Fatal Titik Beku Tertinggi vs Terendah di Soal UTBK:**
> - Semakin **BESAR** konsentrasi partikel total ($m \\cdot i$) $\\implies$ Penurunan titik beku ($\\Delta T_f$) semakin **BESAR** $\\implies$ Titik beku larutan ($T_f$) justru semakin **RENDAH / PALING DINGIN** (semakin minus)!
> - **Titik Beku PALING TINGGI** berarti titik beku yang **paling mendekati $0^\\circ\\text{C}$** (yang nilai $\\Delta T_f$-nya PALING KECIL, yaitu zat non-elektrolit paling encer)!`,
    keyFormulas: [
      { name: 'Rumus Faktor van t Hoff', formula: 'i = 1 + (n - 1)\\alpha' },
      { name: 'Derajat Ionisasi Asam Lemah', formula: '\\alpha = \\sqrt{\\frac{K_a}{m}}' },
      { name: 'Penentuan i dari Data Eksperimen', formula: 'i = \\frac{\\Delta T_{f, \\text{eks}}}{m \\cdot K_f}' },
    ],
  },
  {
    tag: 'contoh-penentuan-massa-molar-krioskopi-vs-osmometri-sma',
    tags: ['penentuan-massa-molar-mr', 'krioskopi', 'osmometri-membran', 'makromolekul-protein', 'hots-sma'],
    title: 'Contoh Soal 5: Determinasi Massa Molar (Mr) Senyawa Organik & Enzim: Krioskopi vs Osmometri Membran (Level: HOTS SMA)',
    summary: 'Penentuan massa molar senyawa organik molekular via krioskopi benzena, dan demonstrasi mengapa osmometri membran adalah satu-satunya metode koligatif yang presisi untuk makromolekul enzim.',
    content: `### 📋 Skenario Investigasi Kimia Analitik:
Dua orang peneliti di laboratorium biokimia sedang mengkarakterisasi dua senyawa murni baru hasil isolasi bahan alam:
- **Sampel A (Senyawa Organik Molekular Kecil):**  
  Sebanyak $2.560\\text{ gram}$ padatan kristal Sampel A dilarutkan ke dalam $100.0\\text{ gram}$ pelarut benzena murni ($\\ce{C6H6}$). Diperoleh data termodinamika benzena:
  - Titik beku benzena murni ($T_f^\\circ$) $= 5.500^\\circ\\text{C}$
  - Tetapan krioskopi benzena ($K_f$) $= 5.120^\\circ\\text{C/m}$
  - Titik beku larutan terukur $= 3.964^\\circ\\text{C}$
- **Sampel B (Makromolekul Enzim Biomolekular):**  
  Sebanyak $1.500\\text{ gram}$ isolat enzim murni dilarutkan ke dalam air suling hingga volume larutan tepat $250.0\\text{ mL}$ ($0.250\\text{ L}$) pada suhu ruangan $25.0^\\circ\\text{C}$ ($298.15\\text{ K}$). Larutan tersebut diukur tekanan osmotiknya menggunakan osmometer membran statis, menghasilkan kenaikan kolom cairan yang setara dengan tekanan osmotik $\\Pi = 1.960 \\times 10^{-3}\\text{ atm}$ ($1.490\\text{ mmHg}$).

*(Diketahui tetapan gas universal $R = 0.08206\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$, $K_f\\text{ air} = 1.86^\\circ\\text{C/m}$, kedua sampel bersifat non-elektrolit $i = 1$)*.

---

### 🎯 Pertanyaan:
1. Untuk **Sampel A**:
   a. Hitung penurunan titik beku ($\\Delta T_f$) larutan dalam pelarut benzena!
   b. Hitung molalitas ($m$) larutan Sampel A!
   c. Tentukan massa molar ($M_r$) dari Sampel A!
2. Untuk **Sampel B (Enzim Makromolekul)**:
   a. Jika peneliti mencoba menentukan massa molar enzim tersebut menggunakan metode penurunan titik beku air (krioskopi), berapakah nilai penurunan titik beku teoretis ($\\Delta T_f$) yang akan dihasilkan?
   b. Berdasarkan hasil perhitungan tersebut, jelaskan mengapa metode penurunan titik beku (krioskopi) maupun kenaikan titik didih (ebulioskopi) **sama sekali tidak layak (*unfeasible*)** digunakan untuk mengukur massa molar makromolekul atau protein!
3. Tentukan massa molar ($M_r$) enzim Sampel B berdasarkan data pengukuran tekanan osmotik osmometri membran tersebut!
4. Berikan kesimpulan analitik mengapa osmometri membran menjadi metode standar emas (*gold standard*) di bidang biokimia dan industri polimer!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Karakterisasi Sampel A melalui Krioskopi Benzena
a. **Menghitung Penurunan Titik Beku ($\\Delta T_f$):**
   $$\\Delta T_f = T_f^\\circ - T_f = 5.500^\\circ\\text{C} - 3.964^\\circ\\text{C} = \\mathbf{1.536^\\circ\\text{C}}$$
b. **Menghitung Molalitas Larutan ($m$):**
   $$\\Delta T_f = m \\cdot K_f \\implies m = \\frac{\\Delta T_f}{K_f} = \\frac{1.536^\\circ\\text{C}}{5.120^\\circ\\text{C/m}} = \\mathbf{0.300\\text{ m}} \\quad (\\text{mol/kg pelarut})$$
c. **Menghitung Massa Molar ($M_r$) Sampel A:**
   Massa pelarut benzena: $P = 100.0\\text{ g} = 0.100\\text{ kg}$.
   $$m = \\frac{\\text{massa}}{M_r} \\times \\frac{1000}{P \\text{ (g)}} \\implies 0.300 = \\frac{2.560}{M_r} \\times \\frac{1000}{100.0}$$
   $$0.300 = \\frac{25.60}{M_r} \\implies M_r = \\frac{25.60}{0.300} = \\mathbf{85.33\\text{ g/mol}}$$
   *(Massa molar $85.33\\text{ g/mol}$ cocok dengan molekul organik kecil seperti siklopentana atau turunan alkana).*

---

#### Langkah 2: Mengapa Krioskopi Gagal untuk Makromolekul (Sampel B)?
Mari kita uji jika digunakan metode penurunan titik beku air:
- Asumsikan massa molar enzim $M_r$ sekitar $75.000\\text{ g/mol}$ (skala protein umum):
- Jumlah mol enzim dalam $1.500\\text{ g}$:
  $$n = \\frac{1.500\\text{ g}}{75.000\\text{ g/mol}} = 2.00 \\times 10^{-5}\\text{ mol}$$
- Di dalam $250\\text{ mL}$ ($0.250\\text{ kg}$) air, molalitas larutan:
  $$m = \\frac{2.00 \\times 10^{-5}\\text{ mol}}{0.250\\text{ kg}} = 8.00 \\times 10^{-5}\\text{ m}$$
- **Penurunan Titik Beku Teoretis:**
  $$\\Delta T_f = m \\cdot K_f = (8.00 \\times 10^{-5}\\text{ m}) \\times (1.86^\\circ\\text{C/m}) = \\mathbf{0.000149^\\circ\\text{C}} \\quad (\\approx 0.00015^\\circ\\text{C}!)$$

**Alasan Mengapa Krioskopi dan Ebulioskopi Tidak Layak:**
1. **Perubahan Suhu Terlalu Mikroskopis:**  
   Nilai $\\Delta T_f = 0.00015^\\circ\\text{C}$ (seperseribu derajat) berada jauh di bawah sensitivitas termometer laboratorium biasa. Fluktuasi suhu lingkungan sekecil apapun akan menenggelamkan sinyal pengukuran.
2. **Resiko Denaturasi Termal (pada Ebulioskopi):**  
   Mendidihkan larutan pada suhu $100^\\circ\\text{C}$ akan merusak ikatan hidrogen dan struktur spasial protein/enzim (*denaturasi ireversibel*), merusak sampel yang mahal.

---

#### Langkah 3: Menghitung Massa Molar Enzim Sampel B via Osmometri
Sebaliknya, mari kita hitung respon tekanan osmotik ($\\Pi$):
Tekanan osmotik terukur: $\\Pi = 1.960 \\times 10^{-3}\\text{ atm} = 1.49\\text{ mmHg}$.  
*(Jika diukur sebagai tinggi kolom air: $h = 1.49\\text{ mmHg} \\times 13.6 \\approx \\mathbf{20.3\\text{ mm} \\approx 2\\text{ cm cairan}}$, sangat mudah dan akurat dibaca dengan mata pada tabung kapiler!)*

Gunakan persamaan van 't Hoff untuk zat non-elektrolit:
$$\\Pi = M \\cdot R \\cdot T = \\frac{n}{V} \\cdot R \\cdot T = \\frac{\\text{massa}}{M_r \\cdot V} \\cdot R \\cdot T$$

Isolasi variabel $M_r$:
$$M_r = \\frac{\\text{massa} \\cdot R \\cdot T}{\\Pi \\cdot V}$$

Substitusikan nilai numerik:
- $\\text{massa} = 1.500\\text{ gram}$
- $R = 0.08206\\text{ L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$
- $T = 298.15\\text{ K}$
- $\\Pi = 1.960 \\times 10^{-3}\\text{ atm}$
- $V = 0.250\\text{ L}$

$$M_r = \\frac{(1.500) \\times (0.08206) \\times (298.15)}{(1.960 \\times 10^{-3}) \\times (0.250)}$$
$$M_r = \\frac{36.6997}{4.900 \\times 10^{-4}} = \\mathbf{74.897\\text{ g/mol}} \\quad (\\approx \\mathbf{7.49 \\times 10^4\\text{ g/mol}})$$

Massa molar enzim tersebut berhasil ditentukan secara presisi sebesar **$74.897\\text{ g/mol}$** (sekitar $75\\text{ kDa}$).

---

#### Langkah 4: Kesimpulan Analitik
Osmometri membran menjadi **metode standar emas** penentuan massa molar makromolekul karena:
1. **Sensitivitas Respon Raksasa:** Menghasilkan respon terukur berupa kolom cairan setinggi beberapa sentimeter pada konsentrasi yang sangat encer.
2. **Kondisi Pengukuran Fisiologis yang Aman:** Pengukuran dilakukan pada temperatur kamar ($25^\\circ\\text{C}$) atau temperatur tubuh ($37^\\circ\\text{C}$), sehingga struktur biomolekul protein, antibodi, dan DNA tetap utuh dan stabil tanpa mengalami denaturasi.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Pedoman Memilih Sifat Koligatif untuk Penentuan Massa Molar ($M_r$):**
> 1. **Molekul Kecil ($M_r < 1.000\\text{ g/mol}$):**  
>    Gunakan **Penurunan Titik Beku (Krioskopi)** atau **Kenaikan Titik Didih (Ebulioskopi)**. Metode ini sederhana, cepat, dan memberikan nilai $\\Delta T$ yang cukup besar ($0.5 - 3^\\circ\\text{C}$).
> 2. **Makromolekul / Polimer / Protein / DNA ($M_r > 10.000\\text{ g/mol}$):**  
>    **WAJIB** menggunakan **Tekanan Osmotik (Osmometri Membran)**! Karena pada konsentrasi yang sama, respon tekanan osmotik ribuan kali lebih peka dan tidak merusak molekul sampel.`,
    keyFormulas: [
      { name: 'Penentuan Mr via Penurunan Titik Beku', formula: 'M_r = \\frac{\\text{massa (g)} \\times 1000 \\times K_f}{\\Delta T_f \\times P \\text{ (g)}}' },
      { name: 'Penentuan Mr via Tekanan Osmotik', formula: 'M_r = \\frac{\\text{massa (g)} \\cdot R \\cdot T}{\\Pi \\cdot V \\text{ (L)}}' },
    ],
  },
];

// ============================================================================
// TOPIK 114: Reaksi Redoks & Sel Elektrokimia SMA
// (Penyetaraan PBO & Setengah Reaksi, Sel Volta, Nernst, Baterai, Korosi, Elektrolisis, Faraday)
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_114: ConceptBlock[] = [
  {
    tag: 'contoh-penyetaraan-redoks-basa-permanganat-sulfit-sma',
    tags: ['penyetaraan-redoks', 'metode-setengah-reaksi', 'metode-pbo', 'suasana-basa', 'permanganat-dan-sulfit', 'kimia-sma'],
    title: 'Contoh Soal 1: Penyetaraan Reaksi Redoks Kompleks: Metode PBO vs Metode Setengah Reaksi Suasana Basa (Level: Sedang)',
    summary: 'Penyetaraan reaksi reduksi ion permanganat oleh ion sulfit dalam medium basa menghasilkan endapan MnO2 dan ion sulfat dengan verifikasi atom dan muatan.',
    content: `### 📋 Skenario Masalah:
Di laboratorium kimia sekolah, guru mendemonstrasikan reaksi redoks antara larutan kalium permanganat ($\\ce{KMnO4}$) berwarna ungu pekat dengan larutan natrium sulfit ($\\ce{Na2SO3}$) dalam **suasana basa** (menggunakan larutan $\\ce{NaOH}$ encer). 

Selama reaksi berlangsung, warna ungu ion permanganat perlahan memudar dan terbentuk endapan cokelat-kehitaman dari mangan(IV) oksida ($\\ce{MnO2}$) serta ion sulfat ($\\ce{SO4^2-}$). Reaksi ion kerangka yang belum setara adalah:
$$\\ce{MnO4^-(aq) + SO3^2-(aq) -> MnO2(s) + SO4^2-(aq)} \\quad (\\text{suasana basa})$$

---

### 🎯 Pertanyaan:
1. Tentukan bilangan oksidasi atom $\\ce{Mn}$ dan atom $\\ce{S}$ pada reaktan maupun produk, lalu tentukan spesi mana yang bertindak sebagai oksidator dan reduktor!
2. Setarakan persamaan reaksi redoks tersebut menggunakan **Metode Setengah Reaksi (Ion-Elektron) Suasana Basa**!
3. Setarakan persamaan reaksi redoks tersebut menggunakan **Metode Perubahan Bilangan Oksidasi (PBO) Suasana Basa**!
4. Buktikan secara analitis bahwa kedua metode menghasilkan koefisien reaksi yang tepat sama dan setara sempurna baik dari segi jumlah atom maupun total muatan listrik!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Analisis Bilangan Oksidasi, Oksidator, dan Reduktor
1. **Ion Permanganat ($\\ce{MnO4^-}$) menjadi Mangan Dioksida ($\\ce{MnO2}$):**
   - Dalam $\\ce{MnO4^-}$: $\\text{Biloks Mn} + 4(-2) = -1 \\implies \\mathbf{\\text{Biloks Mn} = +7}$.
   - Dalam $\\ce{MnO2}$: $\\text{Biloks Mn} + 2(-2) = 0 \\implies \\mathbf{\\text{Biloks Mn} = +4}$.
   - Perubahan biloks: $+7 \\to +4$ (**turun 3, Reaksi Reduksi**).
   - Spesi $\\ce{MnO4^-}$ bertindak sebagai **Oksidator (Pengoksidasi)**.
2. **Ion Sulfit ($\\ce{SO3^2-}$) menjadi Ion Sulfat ($\\ce{SO4^2-}$):**
   - Dalam $\\ce{SO3^2-}$: $\\text{Biloks S} + 3(-2) = -2 \\implies \\mathbf{\\text{Biloks S} = +4}$.
   - Dalam $\\ce{SO4^2-}$: $\\text{Biloks S} + 4(-2) = -2 \\implies \\mathbf{\\text{Biloks S} = +6}$.
   - Perubahan biloks: $+4 \\to +6$ (**naik 2, Reaksi Oksidasi**).
   - Spesi $\\ce{SO3^2-}$ bertindak sebagai **Reduktor (Pereduksi)**.

---

#### Langkah 2: Metode Setengah Reaksi (Ion-Elektron) Suasana Basa

##### 1. Setarakan Setengah Reaksi Reduksi ($\\ce{MnO4^- -> MnO2}$):
- Atom $\\ce{Mn}$ sudah setara (1 di kiri, 1 di kanan).
- Setarakan atom $\\ce{O}$: Tambahkan $2\\ce{H2O}$ di ruas kanan (karena ruas kiri kelebihan 2 atom O):
  $$\\ce{MnO4^- -> MnO2 + 2H2O}$$
- Setarakan atom $\\ce{H}$: Tambahkan $4\\ce{H+}$ di ruas kiri:
  $$\\ce{MnO4^- + 4H+ -> MnO2 + 2H2O}$$
- **Konversi ke Suasana Basa:** Tambahkan $4\\ce{OH-}$ pada kedua ruas:
  $$\\ce{MnO4^- + \\underbrace{4H+ + 4OH-}_{4H2O} -> MnO2 + 2H2O + 4OH-}$$
- Sederhanakan molekul $\\ce{H2O}$ (kurangi $2\\ce{H2O}$ dari kedua ruas):
  $$\\ce{MnO4^- + 2H2O -> MnO2 + 4OH-}$$
- Setarakan muatan listrik dengan menambahkan elektron ($e^-$):
  - Muatan kiri $= -1 + 0 = -1$
  - Muatan kanan $= 0 + 4(-1) = -4$
  - Tambahkan $3e^-$ di ruas kiri:
  $$\\mathbf{\\ce{MnO4^- + 2H2O + 3e- -> MnO2 + 4OH-}} \\quad (\\times 2)$$

##### 2. Setarakan Setengah Reaksi Oksidasi ($\\ce{SO3^2- -> SO4^2-}$):
- Atom $\\ce{S}$ sudah setara (1 di kiri, 1 di kanan).
- Setarakan atom $\\ce{O}$: Tambahkan $1\\ce{H2O}$ di ruas kiri (sisi yang kekurangan atom O):
  $$\\ce{SO3^2- + H2O -> SO4^2-}$$
- Setarakan atom $\\ce{H}$: Tambahkan $2\\ce{H+}$ di ruas kanan:
  $$\\ce{SO3^2- + H2O -> SO4^2- + 2H+}$$
- **Konversi ke Suasana Basa:** Tambahkan $2\\ce{OH-}$ pada kedua ruas:
  $$\\ce{SO3^2- + H2O + 2OH- -> SO4^2- + \\underbrace{2H+ + 2OH-}_{2H2O}}$$
- Sederhanakan molekul $\\ce{H2O}$ (kurangi $1\\ce{H2O}$ dari kedua ruas):
  $$\\ce{SO3^2- + 2OH- -> SO4^2- + H2O}$$
- Setarakan muatan listrik dengan menambahkan elektron ($e^-$):
  - Muatan kiri $= -2 + 2(-1) = -4$
  - Muatan kanan $= -2 + 0 = -2$
  - Tambahkan $2e^-$ di ruas kanan:
  $$\\mathbf{\\ce{SO3^2- + 2OH- -> SO4^2- + H2O + 2e-}} \\quad (\\times 3)$$

##### 3. Menyamakan Jumlah Elektron dan Menjumlahkan Kedua Reaksi:
$$\\begin{aligned}
2\\ce{MnO4^- + 4H2O + 6e-} &\\ce{-> 2MnO2 + 8OH-} \\quad &(\\times 2) \\\\
3\\ce{SO3^2- + 6OH-} &\\ce{-> 3SO4^2- + 3H2O + 6e-} \\quad &(\\times 3) \\\\
\\hline
\\mathbf{\\ce{2MnO4^- + 3SO3^2- + H2O}} &\\mathbf{\\ce{-> 2MnO2 + 3SO4^2- + 2OH-}}
\\end{aligned}$$

---

#### Langkah 3: Metode Perubahan Bilangan Oksidasi (PBO) Suasana Basa

1. **Tentukan Perubahan Bilangan Oksidasi:**
   - Reduksi: $\\ce{Mn}$ dari $+7$ ke $+4 \\implies \\Delta \\text{Biloks} = 3$ (turun 3).
   - Oksidasi: $\\ce{S}$ dari $+4$ ke $+6 \\implies \\Delta \\text{Biloks} = 2$ (naik 2).
2. **Samakan Total Perubahan Biloks (KPK = 6):**
   - Kalikan spesi $\\ce{Mn}$ dengan 2.
   - Kalikan spesi $\\ce{S}$ dengan 3.
   $$\\ce{2MnO4^- + 3SO3^2- -> 2MnO2 + 3SO4^2-}$$
3. **Setarakan Muatan Listrik (Suasana Basa):**
   - Total muatan kiri $= 2(-1) + 3(-2) = -8$.
   - Total muatan kanan $= 2(0) + 3(-2) = -6$.
   - Pada suasana basa, tambahkan ion $\\ce{OH-}$ pada ruas yang muatannya lebih besar/positif (ruas kanan) agar seimbang:
   - Tambahkan $2\\ce{OH-}$ di ruas kanan (sehingga muatan kanan menjadi $-6 + (-2) = -8$):
   $$\\ce{2MnO4^- + 3SO3^2- -> 2MnO2 + 3SO4^2- + 2OH-}$$
4. **Setarakan Atom $\\ce{H}$ dan $\\ce{O}$:**
   - Tambahkan $1\\ce{H2O}$ pada ruas kiri:
   $$\\mathbf{\\ce{2MnO4^- + 3SO3^2- + H2O -> 2MnO2 + 3SO4^2- + 2OH-}}$$

---

#### Langkah 4: Verifikasi Kesetaraan Akhir
- **Atom $\\ce{Mn}$:** Kiri $= 2$, Kanan $= 2$ (Setara)
- **Atom $\\ce{S}$:** Kiri $= 3$, Kanan $= 3$ (Setara)
- **Atom $\\ce{O}$:** Kiri $= 2(4) + 3(3) + 1 = 8 + 9 + 1 = 18$; Kanan $= 2(2) + 3(4) + 2(1) = 4 + 12 + 2 = 18$ (Setara)
- **Atom $\\ce{H}$:** Kiri $= 2$, Kanan $= 2$ (Setara)
- **Total Muatan:** Kiri $= 2(-1) + 3(-2) = -8$; Kanan $= 3(-2) + 2(-1) = -8$ (Setara Mutlak!)

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Kilat Suasana Basa pada Soal Ujian (Metode PBO):**
> 1. Setarakan atom pusat redoks dan tentukan selisih biloksnya.
> 2. Kalikan silang koefisien untuk menyamakan perubahan biloks.
> 3. Hitung muatan total kedua ruas:
>    - **Jika Suasana Asam:** Tambahkan $\\ce{H+}$ pada sisi yang **lebih negatif**.
>    - **Jika Suasana Basa:** Tambahkan $\\ce{OH-}$ pada sisi yang **lebih positif / kurang negatif**.
> 4. Lengkapi kekurangan hidrogen dan oksigen dengan molekul $\\ce{H2O}$ pada sisi yang berlawanan. Cara ini menghemat waktu pengerjaan ujian hingga 50%!`,
    keyFormulas: [
      { name: 'Kaidah Penyetaraan Muatan Asam', formula: '\\text{Tambah } \\ce{H+} \\text{ pada ruas yang muatannya lebih kecil/negatif}' },
      { name: 'Kaidah Penyetaraan Muatan Basa', formula: '\\text{Tambah } \\ce{OH-} \\text{ pada ruas yang muatannya lebih besar/positif}' },
      { name: 'Prinsip Kesetaraan Redoks', formula: '\\sum \\Delta \\text{Biloks Oksidasi} = \\sum \\Delta \\text{Biloks Reduksi}' },
    ],
  },
  {
    tag: 'contoh-sel-volta-daniell-notasi-potensial-sma',
    tags: ['sel-volta-galvani', 'sel-daniell', 'notasi-sel-iupac', 'potensial-sel-standar', 'jembatan-garam', 'deret-volta', 'kimia-sma'],
    title: 'Contoh Soal 2: Rangkaian Sel Volta Daniell (Zn - Cu), Notasi IUPAC, Potensial Sel Standar, & Peran Jembatan Garam (Level: Sedang)',
    summary: 'Analisis elektroda anoda-katoda, penentuan kutub positif-negatif, arah aliran elektron eksternal, difusi ion jembatan garam, dan kalkulasi potensial sel.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Dalam praktikum kimia fisik di sekolah, siswa merangkai sel elektrokimia Volta klasik (Sel Daniell) menggunakan dua gelas beker yang dihubungkan dengan jembatan garam berisi agar-agar yang dijenuhkan larutan kalium nitrat ($\\ce{KNO3}$):
- **Gelas Beker A:** Batang logam seng ($\\ce{Zn}$) dicelupkan ke dalam larutan $\\ce{ZnSO4 } 1.0\\text{ M}$.
- **Gelas Beker B:** Batang logam tembaga ($\\ce{Cu}$) dicelupkan ke dalam larutan $\\ce{CuSO4 } 1.0\\text{ M}$.
- Kedua batang elektroda dihubungkan dengan voltmeter digital melalui kawat tembaga eksternal.

Data potensial reduksi standar ($25^\\circ\\text{C}$):
1. $\\ce{Zn^2+(aq) + 2e- -> Zn(s)} \\qquad E^\\circ = -0.76\\text{ Volt}$
2. $\\ce{Cu^2+(aq) + 2e- -> Cu(s)} \\qquad E^\\circ = +0.34\\text{ Volt}$

---

### 🎯 Pertanyaan:
1. Tentukan elektroda mana yang bertindak sebagai **anoda** dan **katoda**, beserta tanda kutub positif ($+$) atau negatif ($-$) masing-masing elektroda!
2. Tuliskan persamaan setengah reaksi di anoda, setengah reaksi di katoda, dan persamaan reaksi redoks sel totalnya!
3. Hitung nilai potensial sel standar ($E^\\circ_{\\text{sel}}$) yang terbaca pada layar voltmeter!
4. Tuliskan diagram notasi sel Volta tersebut menurut konvensi baku IUPAC!
5. Jelaskan arah aliran elektron pada kawat penghantar eksternal serta arah migrasi ion kalium ($\\ce{K+}$) dan ion nitrat ($\\ce{NO3^-}$) dari jembatan garam! Apa yang terjadi jika jembatan garam dicabut?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menentukan Anoda, Katoda, dan Tanda Kutub
- **Kaidah Deret Volta:**
  Logam dengan nilai $E^\\circ$ **lebih negatif** memiliki kecenderungan oksidasi lebih besar (reduktor lebih kuat) $\\implies$ bertindak sebagai **Anoda**.
  Logam dengan nilai $E^\\circ$ **lebih positif** memiliki kecenderungan reduksi lebih besar (oksidator lebih kuat) $\\implies$ bertindak sebagai **Katoda**.
- $E^\\circ(\\ce{Zn^2+/Zn}) = -0.76\\text{ V}$ (lebih negatif) $\\implies$ **Anoda** (Kutub Negatif $-$).
- $E^\\circ(\\ce{Cu^2+/Cu}) = +0.34\\text{ V}$ (lebih positif) $\\implies$ **Katoda** (Kutub Positif $+$).

---

#### Langkah 2: Menuliskan Persamaan Reaksi Elektroda & Reaksi Bersih
- **Anoda (Oksidasi):** Atom seng melepaskan 2 elektron dan melarut menjadi ion $\\ce{Zn^2+}$:
  $$\\ce{Zn(s) -> Zn^2+(aq) + 2e-}$$
- **Katoda (Reduksi):** Ion $\\ce{Cu^2+}$ dari larutan menangkap 2 elektron dan mengendap sebagai tembaga padat:
  $$\\ce{Cu^2+(aq) + 2e- -> Cu(s)}$$
- **Reaksi Sel Total (Jumlahkan):**
  $$\\mathbf{\\ce{Zn(s) + Cu^2+(aq) -> Zn^2+(aq) + Cu(s)}}$$
- Jumlah elektron yang ditransfer: $\\mathbf{n = 2\\text{ mol } e^-}$.

---

#### Langkah 3: Menghitung Potensial Sel Standar ($E^\\circ_{\\text{sel}}$)
$$E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = E^\\circ_{\\text{reduksi}} - E^\\circ_{\\text{oksidasi}}$$
$$E^\\circ_{\\text{sel}} = (+0.34\\text{ V}) - (-0.76\\text{ V}) = +0.34 + 0.76 = \\mathbf{+1.10\\text{ Volt}}$$
Karena $E^\\circ_{\\text{sel}} = +1.10\\text{ V} > 0$, reaksi redoks sel berlangsung secara **spontan** dan menghasilkan daya listrik.

---

#### Langkah 4: Notasi Sel Volta IUPAC
Sesuai konvensi baku: $\\text{Anoda (s)} \\mid \\text{Ion Anoda (aq)} \\parallel \\text{Ion Katoda (aq)} \\mid \\text{Katoda (s)}$
$$\\mathbf{\\ce{Zn(s) | Zn^2+(aq, 1.0 M) || Cu^2+(aq, 1.0 M) | Cu(s)}}$$

---

#### Langkah 5: Aliran Elektron Eksternal & Peran Krusial Jembatan Garam
1. **Aliran Elektron:**
   Elektron mengalir secara spontan melalui **kawat eksternal** dari elektroda seng (**anoda $-$**) menuju elektroda tembaga (**katoda $+$**).
2. **Migrasi Ion Jembatan Garam ($\\ce{KNO3}$):**
   - Di anoda, pembentukan ion $\\ce{Zn^2+}$ menyebabkan larutan kelebihan muatan positif. Ion nitrat ($\\ce{NO3^-}$) berdifusi dari jembatan garam masuk ke gelas anoda untuk menetralkannya.
   - Di katoda, pengendapan $\\ce{Cu^2+}$ menjadi $\\ce{Cu}$ menyebabkan larutan kelebihan ion sulfat (muatan negatif). Ion kalium ($\\ce{K+}$) berdifusi dari jembatan garam masuk ke gelas katoda untuk menetralkannya.
3. **Jika Jembatan Garam Dicabut:**
   Terjadi akumulasi muatan listrik pada kedua larutan (polarisasi muatan). Akumulasi muatan positif di anoda akan menahan elektron agar tidak keluar, dan akumulasi muatan negatif di katoda akan menolak elektron yang datang. Akibatnya, **beda potensial seketika drop menjadi nol dan arus listrik langsung terputus!**

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Mnemonic Kunci Menghadapi Soal Sel Volta:**
> - **KRAO:** **K**atoda = **R**eduksi, **A**noda = **O**ksidasi (berlaku untuk seluruh sel kimia!).
> - **Kutub Sel Volta:** Anoda bermuatan **Negatif** (sumber elektron keluar), Katoda bermuatan **Positif** (tujuan elektron masuk).
> - **Mitos Ujian:** Elektron TIDAK PERNAH mengalir menyeberangi jembatan garam! Jembatan garam hanya dilewati oleh ion-ion pembawa muatan cair.`,
    keyFormulas: [
      { name: 'Potensial Sel Standar', formula: 'E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}}' },
      { name: 'Notasi Sel IUPAC', formula: '\\text{Anoda} \\mid \\text{Ion Anoda} \\parallel \\text{Ion Katoda} \\mid \\text{Katoda}' },
      { name: 'Kriteria Spontanitas Sel', formula: 'E^\\circ_{\\text{sel}} > 0 \\iff \\text{Reaksi Berlangsung Spontan}' },
    ],
  },
  {
    tag: 'contoh-elektrolisis-lelehan-vs-larutan-nacl-sma',
    tags: ['sel-elektrolisis-reaksi-anoda-katoda-lelehan-larutan', 'sel-elektrolisis', 'lelehan-vs-larutan', 'elektroda-inert-aktif', 'kaidah-katoda-anoda', 'kimia-sma'],
    title: 'Contoh Soal 3: Analisis Komparatif Elektrolisis Lelehan vs Larutan Berair NaCl & Pengaruh Jenis Elektroda (Level: Sedang)',
    summary: 'Pembedahan tuntas perbedaan produk katoda-anoda pada lelehan murni vs larutan berair garam alkali, serta pengaruh elektroda inert C vs anoda aktif Cu.',
    content: `### 📋 Skenario Masalah:
Dalam kajian teknologi elektrokimia industri, siswa membandingkan tiga rangkaian elektrolisis dengan sumber arus searah (DC) yang berbeda:
1. **Tabung I:** Elektrolisis **lelehan garam dapur anhidrat murni** ($\\ce{NaCl(l)}$) pada suhu tinggi ($> 800^\\circ\\text{C}$) menggunakan sepasang elektroda grafit karbon (C) inert.
2. **Tabung II:** Elektrolisis **larutan garam dapur berair** ($\\ce{NaCl(aq)}$) menggunakan sepasang elektroda grafit karbon (C) inert.
3. **Tabung III:** Elektrolisis **larutan tembaga(II) sulfat** ($\\ce{CuSO4(aq)}$) menggunakan **anoda batang tembaga** ($\\ce{Cu}$ aktif) dan katoda lempeng besi yang hendak dilapisi.

Data potensial reduksi standar:
- $\\ce{Na+(aq) + e- -> Na(s)} \\qquad E^\\circ = -2.71\\text{ Volt}$
- $\\ce{2H2O(l) + 2e- -> H2(g) + 2OH-(aq)} \\qquad E^\\circ = -0.83\\text{ Volt}$
- $\\ce{Cu^2+(aq) + 2e- -> Cu(s)} \\qquad E^\\circ = +0.34\\text{ Volt}$
- $\\ce{2Cl-(aq) -> Cl2(g) + 2e-} \\qquad E^\\circ = +1.36\\text{ Volt}$
- $\\ce{2H2O(l) -> O2(g) + 4H+(aq) + 4e-} \\qquad E^\\circ = +1.23\\text{ Volt}$

---

### 🎯 Pertanyaan:
1. Untuk **Tabung I (Lelehan $\\ce{NaCl}$)**: Tuliskan persamaan reaksi di katoda dan anoda, serta sebutkan produk komersial yang diperoleh di industri (Proses Downs)!
2. Untuk **Tabung II (Larutan $\\ce{NaCl}$)**:
   a. Tuliskan persamaan reaksi di katoda dan anoda beserta reaksi sel totalnya!
   b. Jelaskan mengapa di katoda terbentuk gas hidrogen ($\\ce{H2}$) dan bukan logam natrium ($\\ce{Na}$)!
   c. Bagaimana perubahan sifat asam-basa ($\\text{pH}$) larutan di sekitar katoda setelah elektrolisis berlangsung beberapa saat?
3. Untuk **Tabung III (Larutan $\\ce{CuSO4}$ dengan anoda Cu)**:
   a. Tuliskan reaksi yang terjadi di katoda dan anoda!
   b. Mengapa air di anoda tidak teroksidasi menghasilkan gas $\\ce{O2}$? Apa nama proses industri yang memanfaatkan prinsip ini?

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Tabung I — Elektrolisis Lelehan Murni $\\ce{NaCl(l)}$ (Sel Downs)
- Dalam lelehan murni **TIDAK ADA molekul air ($\\ce{H2O}$)**. Satu-satunya spesi kation adalah $\\ce{Na+}$ dan anion adalah $\\ce{Cl-}$.
- **Reaksi Katoda (Kutub Negatif $-$):**
  Kation natrium terpaksa tereduksi menjadi cairan logam natrium murni:
  $$\\ce{Na+(l) + e- -> Na(l)}$$
- **Reaksi Anoda (Kutub Positif $+$):**
  Ion klorida teroksidasi menghasilkan gas klorin:
  $$\\ce{2Cl-(l) -> Cl2(g) + 2e-}$$
- **Reaksi Bersih Sel:**
  $$\\mathbf{\\ce{2NaCl(l) -> 2Na(l) + Cl2(g)}}$$
- **Aplikasi Industri:** Ini adalah prinsip **Sel Downs** yang digunakan secara komersial di seluruh dunia untuk memproduksi logam natrium murni dan gas klorin.

---

#### Langkah 2: Tabung II — Elektrolisis Larutan Berair $\\ce{NaCl(aq)}$ (Industri Klor-Alkali)
a. **Reaksi Elektroda:**
   - **Katoda (Reduksi):** Terjadi persaingan antara ion $\\ce{Na+}$ ($E^\\circ = -2.71\\text{ V}$) dan molekul air $\\ce{H2O}$ ($E^\\circ = -0.83\\text{ V}$).
     Karena $E^\\circ(\\ce{H2O})$ **jauh lebih positif** (lebih mudah tereduksi) dibandingkan kation logam alkali aktif golongan IA, maka **air yang tereduksi**:
     $$\\ce{2H2O(l) + 2e- -> H2(g) + 2OH-(aq)}$$
   - **Anoda (Oksidasi):** Elektroda adalah karbon inert (C). Terjadi persaingan antara ion halida $\\ce{Cl-}$ dan air. Pada larutan pekat, ion halida teroksidasi lebih cepat menghasilkan gas klorin:
     $$\\ce{2Cl-(aq) -> Cl2(g) + 2e-}$$
   - **Reaksi Bersih Sel:**
     $$\\mathbf{\\ce{2NaCl(aq) + 2H2O(l) -> 2NaOH(aq) + H2(g) + Cl2(g)}}$$

b. **Alasan Katoda Menghasilkan Gas Hidrogen:**
   Potensial reduksi air ($-0.83\\text{ V}$) jauh lebih tinggi daripada potensial reduksi natrium ($-2.71\\text{ V}$). Di hadapan molekul air, ion $\\ce{Na+}$ tidak akan pernah dapat tereduksi dalam larutan berair normal.

c. **Perubahan pH Larutan:**
   Di sekitar katoda dihasilkan ion hidroksida ($\\ce{OH-}$). Keberadaan ion $\\ce{OH-}$ menyebabkan larutan bersifat **basa kuat** sehingga nilai $\\mathbf{\\text{pH} > 7}$ (indikator fenolftalein akan berubah warna menjadi merah muda keunguan). Reaksi ini merupakan fondasi industri **Klor-Alkali** penghasil soda api ($\\ce{NaOH}$).

---

#### Langkah 3: Tabung III — Elektrolisis $\\ce{CuSO4}$ dengan Anoda Tembaga Aktif
a. **Reaksi Elektroda:**
   - **Katoda (Lempeng Besi):** Kation $\\ce{Cu^2+}$ memiliki $E^\\circ = +0.34\\text{ V} > -0.83\\text{ V}$, sehingga ion tembaga tereduksi mengendap melapisi lempeng besi:
     $$\\ce{Cu^2+(aq) + 2e- -> Cu(s)}$$
   - **Anoda (Batang Tembaga):** Elektroda adalah tembaga murni (**TIDAK INERT / AKTIF**).
     Karena anoda aktif, atom tembaga memiliki kecenderungan oksidasi yang jauh lebih mudah dibandingkan oksidasi pelarut air atau ion sulfat ($\\ce{SO4^2-}$). Maka **batang tembaga itu sendiri yang larut teroksidasi**:
     $$\\ce{Cu(s) -> Cu^2+(aq) + 2e-}$$

b. **Alasan & Aplikasi Industri:**
   Air tidak teroksidasi karena anoda aktif selalu teroksidasi terlebih dahulu sebelum spesi di larutan. Prinsip ini digunakan dalam:
   1. **Penyepuhan Logam (*Electroplating*):** Melapisi perkakas logam dengan lapisan tipis logam mulia/tahan karat.
   2. **Pemurnian Tembaga Industri (*Electrorefining*):** Mengubah tembaga kotor (*blister*) menjadi tembaga murni $99.99\\%$.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Dua Pertanyaan Keramat Sel Elektrolisis:**
> 1. **Cek Katoda:** Apakah kation berasal dari logam aktif (IA, IIA, Al, Mn)?  
>    - Jika **YA dan ada air (larutan)** $\\implies$ **AIR tereduksi (menghasilkan gas $\\ce{H2}$ dan $\\ce{OH-}$)**.  
>    - Jika **YA tapi LELEHAN** $\\implies$ **KATION logam itu sendiri yang mengendap**.  
>    - Jika **Kation lain (Cu, Ag, Ni, Fe)** $\\implies$ **Kation logam selalu mengendap**.
> 2. **Cek Anoda:** Apakah elektrodanya inert (Pt, C, Au)?  
>    - Jika **TIDAK INERT (Cu, Ag, Fe, Ni)** $\\implies$ **ANODA ITU SENDIRI YANG LARUT**!  
>    - Jika **INERT**: baru periksa anionnya (jika sisa asam oksi $\\ce{SO4^2-, NO3-}$, air yang teroksidasi menghasilkan gas $\\ce{O2}$ dan $\\ce{H+}$).`,
    keyFormulas: [
      { name: 'Reduksi Air di Katoda (Larutan Logam Aktif)', formula: '\\ce{2H2O(l) + 2e- -> H2(g) + 2OH-(aq)} \\quad (E^\\circ = -0.83\\text{ V})' },
      { name: 'Oksidasi Air di Anoda (Inert + Asam Oksi)', formula: '\\ce{2H2O(l) -> O2(g) + 4H+(aq) + 4e-} \\quad (E^\\circ = +1.23\\text{ V})' },
      { name: 'Oksidasi Anoda Aktif', formula: '\\ce{M(s) -> M^{n+}(aq) + n e-}' },
    ],
  },
  {
    tag: 'contoh-baterai-aki-dan-korosi-proteksi-katodik-hots-sma',
    tags: ['baterai-komersial-dan-fenomena-korosi-besi', 'baterai-komersial', 'aki-timbal-asam', 'mekanisme-korosi-besi', 'proteksi-katodik-anoda-korban', 'galvanisasi-seng', 'hots-sma'],
    title: 'Contoh Soal 4: Baterai Komersial (Aki Timbal Pb-PbO2) & Mekanisme Korosi Besi serta Proteksi Katodik Anoda Korban (Level: Sulit / HOTS)',
    summary: 'Studi komprehensif reaksi elektrokimia pengosongan dan pengisian aki mobil, sel mikro-galvani korosi besi pada tetesan air, komparasi seng vs timah bila tergores, dan proteksi anoda korban.',
    content: `### 📋 Skenario Masalah & Kajian Kasus:
Elektrokimia memegang peranan krusial dalam mobilitas modern dan ketahanan infrastruktur industri nasional:

#### Kasus A: Akumulator Mobil (Aki Timbal-Asam)
Sebuah aki mobil $12\\text{ V}$ tersusun atas 6 buah sel elektrokimia sekunder yang dirangkai secara seri. Setiap sel menggunakan elektroda kepingan timbal ($\\ce{Pb}$), kepingan timbal(IV) oksida ($\\ce{PbO2}$), dan cairan elektrolit larutan asam sulfat ($\\ce{H2SO4 } 30\\%\\text{ berat}$, massa jenis $\\rho = 1.25\\text{ g/mL}$).

#### Kasus B: Pencegahan Korosi Baja Bawah Tanah & Kaleng Makanan
Sebuah perusahaan transmisi gas bumi mengubur pipa baja (komponen utama besi, $\\ce{Fe}$) di bawah tanah yang lembap. Insinyur korosi membandingkan tiga strategi perlindungan:
1. Menghubungkan pipa baja dengan balok logam magnesium ($\\ce{Mg}$).
2. Melapisi permukaan besi dengan lapisan seng ($\\ce{Zn}$) melalui proses galvanisasi.
3. Melapisi permukaan besi dengan lapisan timah ($\\ce{Sn}$) seperti pada kaleng kemasan makanan.

Data potensial reduksi standar:
- $\\ce{Mg^2+(aq) + 2e- -> Mg(s)} \\qquad E^\\circ = -2.37\\text{ Volt}$
- $\\ce{Zn^2+(aq) + 2e- -> Zn(s)} \\qquad E^\\circ = -0.76\\text{ Volt}$
- $\\ce{Fe^2+(aq) + 2e- -> Fe(s)} \\qquad E^\\circ = -0.44\\text{ Volt}$
- $\\ce{Sn^2+(aq) + 2e- -> Sn(s)} \\qquad E^\\circ = -0.14\\text{ Volt}$
- $\\ce{O2(g) + 4H+(aq) + 4e- -> 2H2O(l)} \\qquad E^\\circ = +1.23\\text{ Volt}$

---

### 🎯 Pertanyaan:
1. **Pada Kasus Aki Timbal-Asam:**
   a. Tuliskan persamaan reaksi di anoda dan katoda saat aki digunakan mengalirkan arus listrik (**proses pengosongan / *discharge***) serta reaksi sel keseluruhannya!
   b. Mengapa saat aki terus-menerus digunakan, massa jenis larutan elektrolit asam sulfat mengalami penurunan terukur?
   c. Tuliskan persamaan reaksi sel yang terjadi saat aki diisi ulang (**proses penyetruman / *recharge***) dari sumber arus DC luar!
2. **Pada Kasus Korosi Besi:**
   Jelaskan secara rinci mekanisme elektrokimia terbentuknya karat besi ($\\ce{Fe2O3 \\cdot xH2O}$) pada setetes air hujan yang menempel pada permukaan besi! Tunjukkan bagian mana yang menjadi anoda dan katoda!
3. **Pada Kasus Pelapisan Logam:**
   Apa yang terjadi jika permukaan pelindung tergores hingga logam besi di bawahnya terpapar langsung ke udara dan air:
   a. Pada besi berlapis seng (galvanisasi)?
   b. Pada besi berlapis timah (kaleng biskuit)?
   Mengapa kaleng makanan tetap menggunakan timah, bukan seng?
4. **Pada Kasus Proteksi Katodik:**
   Jelaskan mengapa balok magnesium dinamakan **anoda korban (*sacrificial anode*)** dan bagaimana mekanismenya menjamin pipa baja tidak berkarat sedikit pun selama puluhan tahun!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Kimia Elektrokimia Aki Timbal-Asam
a. **Saat Pengosongan (Discharging / Sel Volta):**
   - **Anoda (Oksidasi):** Logam timbal dioksidasi menghasilkan timbal(II) sulfat padat yang menempel pada elektroda:
     $$\\ce{Pb(s) + SO4^2-(aq) -> PbSO4(s) + 2e-}$$
   - **Katoda (Reduksi):** Timbal dioksida direduksi menjadi timbal(II) sulfat padat:
     $$\\ce{PbO2(s) + 4H+(aq) + SO4^2-(aq) + 2e- -> PbSO4(s) + 2H2O(l)}$$
   - **Reaksi Sel Total Pengosongan:**
     $$\\mathbf{\\ce{Pb(s) + PbO2(s) + 2H2SO4(aq) -> 2PbSO4(s) + 2H2O(l)}} \\quad (E^\\circ \\approx +2.05\\text{ V per sel})$$
     Rangkaian 6 sel menghasilkan tegangan total: $6 \\times 2.05\\text{ V} \\approx \\mathbf{12.3\\text{ Volt}}$.

b. **Penyebab Penurunan Massa Jenis Elektrolit:**
   Berdasarkan reaksi di atas, asam sulfat ($\\ce{H2SO4}$) dikonsumsi secara kontinu dan digantikan oleh air murni ($\\ce{H2O}$). Karena massa jenis $\\ce{H2SO4 }$ murni ($\\approx 1.84\\text{ g/mL}$) jauh lebih tinggi daripada air ($1.00\\text{ g/mL}$), berkurangnya kadar asam sulfat menyebabkan massa jenis cairan aki turun drastis (dari $\\approx 1.28\\text{ g/mL}$ saat terisi penuh menjadi $< 1.15\\text{ g/mL}$ saat habis). Oleh karena itu, kondisi aki dapat didiagnosis secara akurat menggunakan alat **hidrometer**.

c. **Saat Pengisian Ulang (Recharging / Sel Elektrolisis):**
   Arus listrik DC dari alternator dialirkan dengan polaritas terbalik untuk memaksa reaksi berjalan ke arah kiri:
   $$\\mathbf{\\ce{2PbSO4(s) + 2H2O(l) -> Pb(s) + PbO2(s) + 2H2SO4(aq)}}$$
   Endapan $\\ce{PbSO4}$ pada anoda diubah kembali menjadi $\\ce{Pb}$, dan pada katoda menjadi $\\ce{PbO2}$, serta kadar asam sulfat kembali pekat.

---

#### Langkah 2: Mekanisme Mikro-Galvani Perkaratan Besi
Korosi besi berlangsung melalui mekanisme sel galvani mikro pada antarmuka besi-air-oksigen:
1. **Daerah Anodik (Di pusat tetesan air / bagian besi dengan konsentrasi $\\ce{O2}$ rendah):**
   Atom besi teroksidasi melarut menjadi ion besi(II):
   $$\\ce{Fe(s) -> Fe^2+(aq) + 2e-} \\qquad E^\\circ = -0.44\\text{ V}$$
2. **Daerah Katodik (Di tepi tetesan air / bagian yang terpapar langsung dengan gas $\\ce{O2}$ udara):**
   Elektron mengalir menembus logam besi ke tepi tetesan air dan mereduksi gas oksigen terlarut:
   $$\\ce{O2(g) + 4H+(aq) + 4e- -> 2H2O(l)} \\qquad E^\\circ = +1.23\\text{ V}$$
3. **Pembentukan Karat Besi:**
   Ion $\\ce{Fe^2+}$ bereaksi lebih lanjut dengan oksigen dan air membentuk karat besi hidrat:
   $$\\ce{4Fe^2+(aq) + O2(g) + (4 + 2x)H2O(l) -> 2Fe2O3 \\cdot xH2O(s) + 8H+(aq)}$$
   Karat besi bersifat rapuh, berpori, dan tidak rapat, sehingga air dan oksigen terus merembes masuk mengikis lapisan besi di dalamnya hingga keropos total.

---

#### Langkah 3: Komparasi Pelapisan Seng (Galvanisasi) vs Timah (Tin Can)
a. **Bila Besi Berlapis Seng ($\\ce{Zn}$) Tergores:**
   - $E^\\circ(\\ce{Zn^2+/Zn}) = -0.76\\text{ V}$ lebih negatif dari $E^\\circ(\\ce{Fe^2+/Fe}) = -0.44\\text{ V}$.
   - Seng lebih reaktif dari besi. Maka seng bertindak sebagai anoda dan teroksidasi terlebih dahulu mengorbankan dirinya: $\\ce{Zn -> Zn^2+ + 2e-}$.
   - Besi dipaksa bertindak sebagai katoda sehingga **besi tetap terlindungi sempurna dari perkaratan** meskipun lapisannya tergores (*sacrificial cathodic protection*)!
b. **Bila Besi Berlapis Timah ($\\ce{Sn}$) Tergores:**
   - $E^\\circ(\\ce{Sn^2+/Sn}) = -0.14\\text{ V}$ lebih positif dari besi ($-0.44\\text{ V}$).
   - Besi lebih reaktif dari timah. Saat tergores, besi bertindak sebagai anoda dan timah sebagai katoda.
   - Besi akan teroksidasi **jauh lebih cepat dan parah daripada besi biasa tanpa pelapis**!
c. **Mengapa Makanan Menggunakan Timah ($\\ce{Sn}$)?**
   Ion seng ($\\ce{Zn^2+}$) bersifat toksik bagi tubuh manusia jika larut dalam makanan asam, sedangkan timah ($\\ce{Sn}$) tidak beracun dan tahan terhadap asam organik makanan. Oleh sebab itu, kaleng makanan wajib dilapisi timah, dengan catatan kaleng tidak boleh penyok atau tergores!

---

#### Langkah 4: Mekanisme Proteksi Katodik Anoda Korban Magnesium
- Batang magnesium dihubungkan ke pipa baja melalui kawat listrik.
- Karena $E^\\circ_{\\ce{Mg}} = -2.37\\text{ V}$ bernilai **jauh lebih negatif** dibandingkan besi ($-0.44\\text{ V}$), magnesium memiliki kecenderungan oksidasi yang amat sangat besar.
- Reaksi yang terjadi:
  $$\\ce{Mg(s) -> Mg^2+(aq) + 2e-} \\quad (\\text{Anoda Terkorosi})$$
- Elektron yang dilepaskan magnesium dialirkan terus-menerus melalui kawat ke badan pipa baja. Pipa baja bertindak sebagai **katoda permanen** di mana hanya terjadi reduksi oksigen, sehingga atom besi sama sekali tidak dapat melepaskan elektron.
- Balok magnesium sengaja "dikorbankan" hingga habis dan diganti secara berkala demi menjamin keselamatan aset pipa baja bawah tanah bernilai miliaran rupiah!

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Jebakan Klasik Soal Korosi di UTBK-SNBT:**
> - Jika dua logam bersentuhan di lingkungan basah:
>   - Logam dengan **$E^\\circ$ lebih negatif** = mengalami oksidasi = **berkarat/rusak terlebih dahulu**.
>   - Logam dengan **$E^\\circ$ lebih positif** = terlindungi dari korosi.
> - **Ingat:** $\\ce{Zn}$ melindungi $\\ce{Fe}$ baik saat utuh maupun saat tergores. Tetapi $\\ce{Sn}$ HANYA melindungi $\\ce{Fe}$ jika lapisannya rapat sempurna tanpa cacat; jika timah tergores sedikit saja, besi di bawahnya akan hancur berkarat dengan kecepatan berlipat ganda!`,
    keyFormulas: [
      { name: 'Reaksi Aki Pengosongan (Discharge)', formula: '\\ce{Pb + PbO2 + 2H2SO4 -> 2PbSO4 + 2H2O}' },
      { name: 'Reaksi Aki Pengisian (Recharge)', formula: '\\ce{2PbSO4 + 2H2O -> Pb + PbO2 + 2H2SO4}' },
      { name: 'Reaksi Utama Korosi Besi', formula: '\\ce{2Fe + O2 + 2H2O -> 2Fe(OH)2 \\xrightarrow{O2, H2O} Fe2O3 \\cdot xH2O}' },
      { name: 'Syarat Anoda Korban', formula: 'E^\\circ_{\\text{anoda korban}} < E^\\circ_{\\ce{Fe}} \\implies \\text{Logam aktif dikorbankan}' },
    ],
  },
  {
    tag: 'contoh-hukum-faraday-seri-efisiensi-arus-hots-sma',
    tags: ['stoikiometri-kuantitatif-hukum-faraday-dan-sel-seri', 'hukum-faraday-1', 'hukum-faraday-2', 'sel-seri', 'volume-gas-stp', 'efisiensi-arus', 'penyepuhan-logam', 'hots-sma'],
    title: 'Contoh Soal 5: Stoikiometri Kuantitatif Elektrolisis Seri (Hukum Faraday I & II), Gas STP, dan Efisiensi Arus Penyepuhan (Level: Sulit / HOTS)',
    summary: 'Kalkulasi multikonsep: muatan listrik Coulomb, mol elektron Faraday, massa endapan Ag dan Cu pada dua sel seri, efisiensi arus industri, volume gas O2 STP di anoda, dan perubahan pH larutan.',
    content: `### 📋 Skenario Masalah & Data Industri:
Di sebuah bengkel industri penyepuhan logam (*electroplating*), dua sel elektrolisis disusun secara **seri** dan dialiri arus listrik searah konstan sebesar $I = 9.65\\text{ Ampere}$ selama durasi $t = 2.000\\text{ detik}$:
- **Sel 1 (Penyepuhan Sendok):** Berisi larutan perak nitrat ($\\ce{AgNO3}$) dengan anoda keping perak murni ($\\ce{Ag}$) dan katoda sebuah sendok makan yang hendak disepuh perak.
- **Sel 2 (Elektrodeposisi Tembaga):** Berisi $2.00\\text{ Liter}$ larutan tembaga(II) sulfat ($\\ce{CuSO4 } 0.20\\text{ M}$) dengan elektroda sepasang batang karbon grafit (C) inert.

Setelah proses selesai, sendok makan pada Sel 1 ditimbang dan ternyata massa endapan perak yang menempel secara nyata adalah sebesar $w_{\\ce{Ag, nyata}} = 20.52\\text{ gram}$. Sebagian arus listrik terbuang akibat resistansi dan reaksi sampingan (efisiensi arus $< 100\\%$).

*(Data: $A_r\\text{ Ag} = 108.0\\text{ g/mol}$, $A_r\\text{ Cu} = 63.5\\text{ g/mol}$, $1\\text{ F} = 96.500\\text{ C/mol } e^-$, volume molar gas pada keadaan standar $STP = 22.4\\text{ L/mol}$)*.

---

### 🎯 Pertanyaan:
1. Hitung jumlah muatan listrik total ($Q$) dalam satuan Coulomb dan mol elektron teoritis ($F_{\\text{teoritis}}$) yang dialirkan ke dalam rangkaian seri tersebut!
2. Hitung massa teoritis logam perak ($\\ce{Ag}$) yang seharusnya mengendap pada Sel 1 jika efisiensi arus $100\\%$, lalu tentukan persentase **efisiensi arus (*current efficiency*)** dari proses penyepuhan tersebut!
3. Berdasarkan **Hukum Faraday II**, hitung massa nyata endapan logam tembaga ($\\ce{Cu}$) yang mengendap pada katoda Sel 2 dengan memperhitungkan efisiensi arus yang sama!
4. Tuliskan persamaan reaksi di anoda Sel 2, lalu hitung volume gas oksigen ($\\ce{O2}$) yang dihasilkan pada anoda Sel 2 pada kondisi standar ($STP$)!
5. Tentukan konsentrasi ion asam $\\ce{H+}$ yang terbentuk dan hitung nilai $\\text{pH}$ larutan pada Sel 2 setelah proses elektrolisis selesai (asumsikan volume larutan tetap $2.00\\text{ Liter}$)!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menghitung Muatan Listrik ($Q$) dan Mol Elektron Teoritis ($F_{\\text{teoritis}}$)
1. **Muatan Listrik Total ($Q$):**
   $$Q = I \\times t = 9.65\\text{ A} \\times 2.000\\text{ s} = \\mathbf{19.300\\text{ Coulomb}}$$
2. **Mol Elektron Teoritis ($F_{\\text{teoritis}}$):**
   $$n_{e^-, \\text{teoritis}} = F_{\\text{teoritis}} = \\frac{Q}{96.500\\text{ C/mol}} = \\frac{19.300}{96.500} = \\mathbf{0.200\\text{ mol } e^-} \\quad (0.200\\text{ F})$$

---

#### Langkah 2: Massa Teoritis Perak dan Efisiensi Arus
1. **Reaksi Katoda Sel 1:**
   $$\\ce{Ag+(aq) + e- -> Ag(s)} \\implies n = 1$$
   Massa ekuivalen perak: $e_{\\ce{Ag}} = \\frac{A_r}{n} = \\frac{108.0}{1} = 108.0\\text{ g/ekuivalen}$.
2. **Massa Teoritis Perak ($w_{\\ce{Ag, teoritis}}$):**
   $$w_{\\ce{Ag, teoritis}} = e_{\\ce{Ag}} \\times F_{\\text{teoritis}} = 108.0 \\times 0.200 = \\mathbf{21.60\\text{ gram}}$$
3. **Persentase Efisiensi Arus (*Current Efficiency* / $\\eta$):**
   $$\\eta = \\frac{w_{\\ce{Ag, nyata}}}{w_{\\ce{Ag, teoritis}}} \\times 100\\% = \\frac{20.52\\text{ g}}{21.60\\text{ g}} \\times 100\\% = \\mathbf{95.0\\%}$$
   Mol elektron efektif yang benar-benar bekerja mengendapkan logam adalah:
   $$n_{e^-, \\text{nyata}} = 0.200\\text{ mol} \\times 0.95 = \\mathbf{0.190\\text{ mol } e^-}$$

---

#### Langkah 3: Menghitung Massa Endapan Tembaga pada Sel 2 (Hukum Faraday II)
Karena Sel 1 dan Sel 2 disusun secara seri, muatan listrik yang mengalir pada kedua sel bernilai sama persis.
1. **Massa Ekuivalen Tembaga ($e_{\\ce{Cu}}$):**
   Reaksi katoda Sel 2: $\\ce{Cu^2+(aq) + 2e- -> Cu(s)} \\implies n = 2$.
   $$e_{\\ce{Cu}} = \\frac{A_r}{n} = \\frac{63.5}{2} = 31.75\\text{ g/ekuivalen}$$
2. **Gunakan Perbandingan Hukum Faraday II:**
   $$\\frac{w_{\\ce{Cu, nyata}}}{w_{\\ce{Ag, nyata}}} = \\frac{e_{\\ce{Cu}}}{e_{\\ce{Ag}}}$$
   $$w_{\\ce{Cu, nyata}} = w_{\\ce{Ag, nyata}} \\times \\frac{e_{\\ce{Cu}}}{e_{\\ce{Ag}}} = 20.52\\text{ g} \\times \\frac{31.75}{108.0} = 20.52 \\times 0.29398 = \\mathbf{6.032\\text{ gram } \\ce{Cu}}$$
   *(Atau secara langsung: $w = e \\times F_{\\text{nyata}} = 31.75 \\times 0.190\\text{ F} = \\mathbf{6.033\\text{ gram } \\ce{Cu}}$)*.

---

#### Langkah 4: Reaksi Anoda Sel 2 & Volume Gas Oksigen pada $STP$
1. **Reaksi di Anoda Sel 2:**
   Elektroda adalah karbon inert (C) dan anion adalah sulfat ($\\ce{SO4^2-}$, sisa asam oksi). Maka pelarut air yang teroksidasi:
   $$\\ce{2H2O(l) -> O2(g) + 4H+(aq) + 4e-}$$
2. **Mol Gas Oksigen yang Terbentuk:**
   Sesuai koefisien reaksi: $1\\text{ mol } \\ce{O2} \\equiv 4\\text{ mol } e^-$.
   $$n_{\\ce{O2}} = \\frac{1}{4} \\times n_{e^-, \\text{nyata}} = \\frac{1}{4} \\times 0.190\\text{ mol} = \\mathbf{0.0475\\text{ mol } \\ce{O2}}$$
3. **Volume Gas Oksigen pada Kondisi $STP$ ($0^\\circ\\text{C}, 1\\text{ atm}$):**
   $$V_{\\ce{O2}} = n_{\\ce{O2}} \\times 22.4\\text{ L/mol} = 0.0475\\text{ mol} \\times 22.4\\text{ L/mol} = \\mathbf{1.064\\text{ Liter}} \\quad (1.064\\text{ mL})$$

---

#### Langkah 5: Konsentrasi Ion $\\ce{H+}$ dan Perhitungan Nilai pH Larutan Sel 2
1. **Mol Ion $\\ce{H+}$ yang Dihasilkan di Anoda:**
   Berdasarkan persamaan reaksi oksidasi air:
   $$n_{\\ce{H+}} = n_{e^-, \\text{nyata}} = \\mathbf{0.190\\text{ mol}}$$
2. **Konsentrasi Molaritas Ion $\\ce{H+}$:**
   Volume larutan $V = 2.00\\text{ Liter}$:
   $$[\\ce{H+}] = \\frac{n_{\\ce{H+}}}{V} = \\frac{0.190\\text{ mol}}{2.00\\text{ L}} = 0.0950\\text{ M} = 9.50 \\times 10^{-2}\\text{ M}$$
3. **Nilai pH Larutan Akhir:**
   $$\\text{pH} = -\\log[\\ce{H+}] = -\\log(9.50 \\times 10^{-2}) = 2 - \\log(9.50)$$
   Karena $\\log(9.50) \\approx 0.978$:
   $$\\mathbf{\\text{pH} = 2 - 0.978 = 1.022} \\quad (\\approx \\mathbf{1.02})$$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Super Cepat Stoikiometri Elektrolisis di Ujian:**
> 1. Selalu cari terlebih dahulu **mol elektron ($F = \\frac{I \\times t}{96.500}$)**. Mol elektron adalah "jembatan utama" penyambung seluruh perhitungan!
> 2. Untuk menghitung gas hasil:
>    - **Gas Hidrogen ($\\ce{H2}$) di Katoda:** $n_{\\ce{H2}} = \\frac{1}{2} \\times \\text{mol } e^-$.
>    - **Gas Oksigen ($\\ce{O2}$) di Anoda:** $n_{\\ce{O2}} = \\frac{1}{4} \\times \\text{mol } e^-$.
>    - **Gas Klorin ($\\ce{Cl2}$) di Anoda:** $n_{\\ce{Cl2}} = \\frac{1}{2} \\times \\text{mol } e^-$.
> 3. Untuk menghitung pH larutan:
>    - Jika di anoda air teroksidasi: $[\\ce{H+}] = \\frac{\\text{mol } e^-}{V_{\\text{larutan}}}$.
>    - Jika di katoda air tereduksi: $[\\ce{OH-}] = \\frac{\\text{mol } e^-}{V_{\\text{larutan}}}$, lalu cari $\\text{pOH}$ dan $\\text{pH} = 14 - \\text{pOH}$.
> 4. Pada rangkaian seri, Hukum Faraday II berlaku mutlak: rasio massa endapan persis sama dengan rasio massa ekuivalennya: $\\frac{w_1}{w_2} = \\frac{e_1}{e_2}$!`,
    keyFormulas: [
      { name: 'Hukum Faraday I', formula: 'w = \\frac{A_r}{n} \\times \\frac{I \\times t}{96.500} \\times \\eta' },
      { name: 'Hukum Faraday II (Sel Seri)', formula: '\\frac{w_1}{w_2} = \\frac{e_1}{e_2} = \\frac{A_{r,1} / n_1}{A_{r,2} / n_2}' },
      { name: 'Efisiensi Arus Elektrolisis', formula: '\\eta = \\frac{w_{\\text{nyata}}}{w_{\\text{teoritis}}} \\times 100\\%' },
      { name: 'Hubungan Mol Gas Oksigen & Elektron', formula: 'n_{\\ce{O2}} = \\frac{1}{4} \\times n_{e^-}' },
    ],
  },
];
