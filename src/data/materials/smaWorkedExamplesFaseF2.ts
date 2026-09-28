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
