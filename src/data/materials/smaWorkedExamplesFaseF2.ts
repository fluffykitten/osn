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

// ============================================================================
// TOPIK 115: Kimia Unsur Golongan Utama & Transisi Periode 4 SMA
// (Alkali, Halogen, Gas Mulia, Periode 3, Unsur Transisi d, dan Metalurgi Industri)
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_115: ConceptBlock[] = [
  {
    tag: 'contoh-alkali-alkali-tanah-reaktivitas-uji-nyala-ksp-sma',
    tags: ['logam-alkali-ia', 'alkali-tanah-iia', 'reaktivitas-air', 'uji-nyala-spektroskopi', 'kelarutan-senyawa-iia', 'pengendapan-selektif-ksp', 'kimia-sma'],
    title: 'Contoh Soal 1: Logam Alkali & Alkali Tanah: Reaktivitas Air, Analisis Spektroskopi Uji Nyala, dan Pemisahan Kation Ksp (Level: Sedang)',
    summary: 'Identifikasi reaksi logam alkali dengan air, perhitungan energi foton emisi uji nyala natrium, dan teknik pemisahan selektif ion Mg2+ vs Ba2+ berdasarkan Ksp.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Dalam praktikum kimia anorganik, seorang siswa melakukan rangkaian investigasi terhadap unsur-unsur golongan s (Alkali IA dan Alkali Tanah IIA):

#### Eksperimen 1: Reaktivitas Logam Alkali
Sepotong kecil logam natrium ($\\ce{Na}$) dimasukkan ke dalam gelas beker berisi air yang telah ditetesi indikator fenolftalein (PP). Seketika terjadi letupan gas, logam natrium meleleh menjadi bola yang meluncur cepat di permukaan air, dan cairan berubah warna menjadi merah muda keunguan pekat.

#### Eksperimen 2: Uji Nyala Spektroskopi
Tiga sampel garam klorida tanpa label (Sampel A, B, dan C) dibakar pada nyala api bunsen bebas warna:
- **Sampel A:** Menghasilkan nyala api berwarna **kuning emas terang** (panjang gelombang dominan $\\lambda = 589.0\\text{ nm}$).
- **Sampel B:** Menghasilkan nyala api berwarna **merah bata / jingga**.
- **Sampel C:** Menghasilkan nyala api berwarna **hijau apel segar**.

#### Eksperimen 3: Pemisahan Ion Campuran Golongan IIA
Disediakan larutan yang mengandung campuran kation $\\ce{Mg^2+ } 0.010\\text{ M}$ dan kation $\\ce{Ba^2+ } 0.010\\text{ M}$.

*(Diketahui: $h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3.00 \\times 10^8\\text{ m/s}$, $N_A = 6.022 \\times 10^{23}\\text{ foton/mol}$)*.

---

### 🎯 Pertanyaan:
1. Pada Eksperimen 1: Tuliskan persamaan reaksi redoks setara antara logam natrium dengan air, dan jelaskan mengapa larutan berubah warna menjadi merah muda!
2. Pada Eksperimen 2:
   a. Tentukan identitas kation logam pada Sampel A, B, dan C berdasarkan warna nyalanya!
   b. Hitung besar energi foton ($\Delta E$) yang dipancarkan oleh satu foton emisi natrium ($589.0\\text{ nm}$) dalam satuan Joule!
   c. Hitung energi foton tersebut untuk skala $1\\text{ mol}$ foton dalam satuan $\\text{kJ/mol}$!
3. Pada Eksperimen 3:
   Berdasarkan tren kelarutan senyawa golongan IIA, jelaskan bagaimana cara memisahkan ion $\\ce{Ba^2+}$ dan $\\ce{Mg^2+}$ secara bertingkat menggunakan pereaksi pengendap natrium sulfat ($\\ce{Na2SO4}$) atau natrium hidroksida ($\\ce{NaOH}$)!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Reaksi Logam Natrium dengan Air
Logam natrium merupakan reduktor kuat yang sangat elektropositif ($E^\\circ = -2.71\\text{ V}$). Atom natrium melepaskan elektron mereduksi molekul air menghasilkan gas hidrogen dan larutan basa natrium hidroksida:
$$\\mathbf{\\ce{2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)}} \\qquad (\\Delta H < 0)$$
- **Penyebab Perubahan Warna:** Terbentuknya ion hidroksida ($\\ce{OH-}$) membuat larutan bersifat **basa kuat** ($\\text{pH} > 7$). Indikator fenolftalein memiliki trayek $\\text{pH } 8.3 - 10.0$ dan berubah warna dari tak berwarna menjadi **merah muda keunguan**.
- **Gejala Fisik:** Panas reaksi eksotermik mencairkan logam natrium (titik leleh $\\approx 98^\\circ\\text{C}$), dan semburan gas $\\ce{H2}$ mendorong bola natrium meluncur di atas air.

---

#### Langkah 2: Analisis Spektroskopi Uji Nyala & Kalkulasi Foton
a. **Identifikasi Kation Berdasarkan Warna Nyala:**
   - **Sampel A (Kuning Emas Terang):** Kation **Natrium ($\\ce{Na+}$)** (garam $\\ce{NaCl}$).
   - **Sampel B (Merah Bata / Jingga):** Kation **Kalsium ($\\ce{Ca^2+}$)** (garam $\\ce{CaCl2}$).
   - **Sampel C (Hijau Apel):** Kation **Barium ($\\ce{Ba^2+}$)** (garam $\\ce{BaCl2}$).

b. **Energi Satu Foton Emisi Natrium ($\Delta E$):**
   Panjang gelombang: $\\lambda = 589.0\\text{ nm} = 589.0 \\times 10^{-9}\\text{ m} = 5.890 \\times 10^{-7}\\text{ m}$.
   Gunakan persamaan Planck-Einstein:
   $$\\Delta E = h \\cdot \\nu = \\frac{h \\cdot c}{\\lambda}$$
   $$\\Delta E = \\frac{(6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}) \\times (3.00 \\times 10^8\\text{ m/s})}{5.890 \\times 10^{-7}\\text{ m}} = \\frac{1.9878 \\times 10^{-25}}{5.890 \\times 10^{-7}} = \\mathbf{3.375 \\times 10^{-19}\\text{ Joule per foton}}$$

c. **Energi Foton per Mol ($1\\text{ mol}$ foton):**
   $$E_{\\text{mol}} = \\Delta E \\times N_A = (3.375 \\times 10^{-19}\\text{ J/foton}) \\times (6.022 \\times 10^{23}\\text{ foton/mol})$$
   $$E_{\\text{mol}} = 203.242\\text{ J/mol} = \\mathbf{203.24\\text{ kJ/mol}}$$
   *Wawasan Spektral:* Celah energi sebesar $203.24\\text{ kJ/mol}$ tepat bersesuaian dengan transisi deeksitasi elektron $3p \\to 3s$ pada atom natrium netral.

---

#### Langkah 3: Pemisahan Ion Campuran Berdasarkan Tren Kelarutan IIA
Berdasarkan kaidah kelarutan periodik Golongan IIA:
1. **Pemisahan Ion $\\ce{Ba^2+}$ Menggunakan Pereaksi Sulfat ($\\ce{Na2SO4}$):**
   - Tren kelarutan sulfat: $\\ce{MgSO4} \\gg \\ce{BaSO4}$ (menurun ke bawah).
   - $\\ce{MgSO4}$ sangat mudah larut di dalam air ($K_{sp}$ sangat besar).
   - $\\ce{BaSO4}$ memiliki nilai $K_{sp} = 1.1 \\times 10^{-10}$ (sangat sukar larut).
   - **Prosedur:** Teteskan larutan $\\ce{Na2SO4}$ encer secara perlahan ke dalam campuran. Ion $\\ce{Ba^2+}$ akan mengendap sempurna sebagai endapan putih pekat barium sulfat:
     $$\\ce{Ba^2+(aq) + SO4^2-(aq) -> BaSO4(s) \\downarrow}$$
   - Endapan $\\ce{BaSO4}$ dipisahkan melalui penyaringan (filtrasi). Filtrat cair yang tersisa mengandung ion $\\ce{Mg^2+}$ murni.

2. **Pemisahan Alternatif Ion $\\ce{Mg^2+}$ Menggunakan Pereaksi Hidroksida ($\\ce{NaOH}$):**
   - Tren kelarutan hidroksida: $\\ce{Mg(OH)2} \\ll \\ce{Ba(OH)2}$ (meningkat ke bawah).
   - $\\ce{Mg(OH)2}$ memiliki $K_{sp} = 1.8 \\times 10^{-11}$ (sukar larut), sedangkan $\\ce{Ba(OH)2}$ adalah basa kuat yang larut sempurna.
   - Penambahan $\\ce{NaOH}$ akan mengendapkan $\\ce{Mg^2+}$ sebagai endapan putih gelatin $\\ce{Mg(OH)2}$, sementara $\\ce{Ba^2+}$ tetap berada dalam fasa larutan.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Mnemonic Emas Tren Kelarutan Golongan IIA di Ujian:**
> - **Basa Hidroksida ($\ce{OH-}$):** Semakin ke bawah **SEMAKIN MUDAH LARUT** (basa makin kuat: $\ce{Mg(OH)2}$ obat maag sukar larut, $\ce{Ba(OH)2}$ larut sempurna).
> - **Garam Sulfat ($\ce{SO4^2-}$) & Karbonat ($\ce{CO3^2-}$):** Semakin ke bawah **SEMAKIN SUKAR LARUT / MENGENDAP** ($\ce{MgSO4}$ garam inggris larut, $\ce{BaSO4}$ rontgen usus mengendap pekat).
> - Jangan sampai terbalik! Ingat kata kunci: **"Hidroksida Naik, Sulfat Turun"**!`,
    keyFormulas: [
      { name: 'Reaksi Logam Alkali dengan Air', formula: '\\ce{2M(s) + 2H2O(l) -> 2MOH(aq) + H2(g)}' },
      { name: 'Energi Foton Emisi Nyala', formula: '\\Delta E = \\frac{h \\cdot c}{\\lambda}' },
      { name: 'Tren Kelarutan Sulfat IIA', formula: '\\ce{MgSO4 > CaSO4 > SrSO4 > BaSO4} \\implies \\text{Makin Sukar Larut ke Bawah}' },
      { name: 'Tren Kelarutan Hidroksida IIA', formula: '\\ce{Mg(OH)2 < Ca(OH)2 < Sr(OH)2 < Ba(OH)2} \\implies \\text{Makin Larut ke Bawah}' },
    ],
  },
  {
    tag: 'contoh-daya-oksidasi-pendesakan-asam-halogen-sma',
    tags: ['halogen-viia', 'daya-oksidator-viia', 'reaksi-pendesakan-halogen', 'anomali-hf-ikatan-hidrogen', 'kekuatan-asam-halida', 'kimia-sma'],
    title: 'Contoh Soal 2: Golongan Halogen: Deret Daya Oksidasi, Spontanitas Reaksi Pendesakan, dan Anomali Asam Halida (Level: Sedang)',
    summary: 'Evaluasi spontanitas reaksi pendesakan halogen F2 s.d. I2, pembuktian potensial sel redoks, serta analisis anomali titik didih dan kekuatan asam halida.',
    content: `### 📋 Skenario Masalah & Data Termodinamika:
Di laboratorium kimia sekolah, guru menyiapkan empat tabung reaksi berisi campuran halogen bebas dan larutan garam halida:
- **Tabung 1:** Gas klorin ($\\ce{Cl2}$) dialirkan ke dalam larutan natrium bromida ($\\ce{NaBr}$).
- **Tabung 2:** Cairan bromin ($\\ce{Br2}$) diteteskan ke dalam larutan natrium klorida ($\\ce{NaCl}$).
- **Tabung 3:** Cairan bromin ($\\ce{Br2}$) diteteskan ke dalam larutan kalium iodida ($\\ce{KI}$).
- **Tabung 4:** Padatan iodin ($\\ce{I2}$) dicampurkan ke dalam larutan natrium fluorida ($\\ce{NaF}$).

Data potensial reduksi standar ($25^\\circ\\text{C}$):
- $\\ce{F2(g) + 2e- -> 2F-(aq)} \\qquad E^\\circ = +2.87\\text{ Volt}$
- $\\ce{Cl2(g) + 2e- -> 2Cl-(aq)} \\qquad E^\\circ = +1.36\\text{ Volt}$
- $\\ce{Br2(l) + 2e- -> 2Br-(aq)} \\qquad E^\\circ = +1.07\\text{ Volt}$
- $\\ce{I2(s) + 2e- -> 2I-(aq)} \\qquad E^\\circ = +0.54\\text{ Volt}$

---

### 🎯 Pertanyaan:
1. Tentukan tabung mana saja yang reaksinya berlangsung secara **spontan** dan tabung mana yang **tidak bereaksi**!
2. Tuliskan persamaan reaksi ion bersih yang setara untuk reaksi yang berlangsung spontan, serta sebutkan perubahan warna fisik larutannya!
3. Buktikan secara kuantitatif spontanitas reaksi pada Tabung 1 dan Tabung 3 dengan menghitung nilai potensial sel standarnya ($E^\\circ_{\\text{sel}}$)!
4. Kajian Asam Halida:
   a. Mengapa senyawa asam fluorida ($\\ce{HF}$) memiliki titik didih paling tinggi ($20^\\circ\\text{C}$) di antara asam halida lainnya, padahal massa molarnya paling ringan?
   b. Mengapa di dalam air $\\ce{HF}$ justru tergolong asam paling lemah, sedangkan $\\ce{HI}$ adalah asam paling kuat ($\\ce{HF \\ll HCl < HBr < HI}$)?
5. Urutkan kekuatan asam dari keluarga asam oksi klorin: $\\ce{HClO, HClO2, HClO3, HClO4}$ dan jelaskan dasar teoretis peningkatan kekuatan asamnya!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Evaluasi Spontanitas Pendesakan Halogen
Berdasarkan kaidah deret kereaktifan halogen: Halogen bebas ($X_2$) hanya mampu mendesak ion halida ($Y^-$) jika unsur $X$ terletak **lebih atas** pada golongan VIIA daripada unsur $Y$ ($E^\\circ_{X_2} > E^\\circ_{Y_2}$):
- **Tabung 1 ($\\ce{Cl2 + NaBr}$):** $\\ce{Cl}$ di atas $\\ce{Br}$ ($+1.36\\text{ V} > +1.07\\text{ V}$) $\\implies$ **Spontan Bereaksi**.
- **Tabung 2 ($\\ce{Br2 + NaCl}$):** $\\ce{Br}$ di bawah $\\ce{Cl}$ ($+1.07\\text{ V} < +1.36\\text{ V}$) $\\implies$ **Tidak Bereaksi (Non-spontan)**.
- **Tabung 3 ($\\ce{Br2 + KI}$):** $\\ce{Br}$ di atas $\\ce{I}$ ($+1.07\\text{ V} > +0.54\\text{ V}$) $\\implies$ **Spontan Bereaksi**.
- **Tabung 4 ($\\ce{I2 + NaF}$):** $\\ce{I}$ di bawah $\\ce{F}$ ($+0.54\\text{ V} \\ll +2.87\\text{ V}$) $\\implies$ **Tidak Bereaksi (Non-spontan)**.

---

#### Langkah 2: Persamaan Reaksi Setara & Perubahan Warna
1. **Tabung 1 (Klorin mendesak Bromida):**
   $$\\mathbf{\\ce{Cl2(g) + 2Br-(aq) -> 2Cl-(aq) + Br2(aq)}}$$
   - *Gejala Fisik:* Larutan yang semula jernih tak berwarna berubah menjadi berwarna **kuning-jingga hingga cokelat kemerahan** akibat terbentuknya molekul bromin cair terlarut.
2. **Tabung 3 (Bromin mendesak Iodida):**
   $$\\mathbf{\\ce{Br2(l) + 2I-(aq) -> 2Br-(aq) + I2(s)}}$$
   - *Gejala Fisik:* Terbentuk larutan berwarna **cokelat tua kemerahan** dan endapan serpihan kristal iodin padat berwarna ungu-kehitaman.

---

#### Langkah 3: Pembuktian Matematis Potensial Sel Standar ($E^\\circ_{\\text{sel}}$)
1. **Untuk Tabung 1:**
   - Reduksi: $\\ce{Cl2 + 2e- -> 2Cl-} \\qquad E^\\circ = +1.36\\text{ V}$
   - Oksidasi: $\\ce{2Br- -> Br2 + 2e-} \\qquad E^\\circ = -1.07\\text{ V}$
   $$E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = (+1.36\\text{ V}) - (+1.07\\text{ V}) = \\mathbf{+0.29\\text{ Volt}}$$
   Karena $E^\\circ_{\\text{sel}} = +0.29\\text{ V} > 0$, reaksi terbukti **berlangsung spontan**.

2. **Untuk Tabung 3:**
   - Reduksi: $\\ce{Br2 + 2e- -> 2Br-} \\qquad E^\\circ = +1.07\\text{ V}$
   - Oksidasi: $\\ce{2I- -> I2 + 2e-} \\qquad E^\\circ = -0.54\\text{ V}$
   $$E^\\circ_{\\text{sel}} = (+1.07\\text{ V}) - (+0.54\\text{ V}) = \\mathbf{+0.53\\text{ Volt}}$$
   Karena $E^\\circ_{\\text{sel}} = +0.53\\text{ V} > 0$, reaksi terbukti **berlangsung spontan**.

---

#### Langkah 4: Analisis Anomali Asam Halida
a. **Anomali Titik Didih $\\ce{HF}$:**
   Molekul $\\ce{HCl, HBr, HI}$ hanya memiliki gaya tarik dipol-dipol dan gaya dispersi London. Sebaliknya, atom fluorin pada $\\ce{HF}$ memiliki elektronegativitas sangat tinggi dan ukuran atom sangat kecil, memungkinkan terbentuknya **ikatan hidrogen antarmolekul** yang sangat kokoh. Akibatnya, titik didih $\\ce{HF}$ ($20^\\circ\\text{C}$) melonjak jauh melampaui asam halida lainnya.

b. **Penyebab $\\ce{HF}$ Asam Lemah dan $\\ce{HI}$ Asam Terkuat:**
   Kekuatan asam di dalam air ditentukan oleh **kemudahan pelepasan proton $\\ce{H+}$** (energi disosiasi ikatan $\\ce{H-X}$):
   - Jari-jari atom fluorin sangat mungil, menyebabkan tumpang tindih orbital ikatan $\\ce{H-F}$ sangat rapat dan energi ikatannya teramat kuat ($565\\text{ kJ/mol}$). Ikatan ini sangat sukar putus di air $\\implies$ $\\ce{HF}$ terionisasi sebagian kecil saja (**asam lemah**, $K_a \\approx 6.8 \\times 10^{-4}$).
   - Dari $\\ce{Cl}$ ke $\\ce{I}$, jari-jari halogen membesar drastis, panjang ikatan bertambah, dan energi ikatan $\\ce{H-I}$ melemah ($295\\text{ kJ/mol}$). Ikatan $\\ce{H-I}$ sangat rapuh dan putus $100\\%$ di air $\\implies$ $\\ce{HI}$ adalah **asam terkuat**.

---

#### Langkah 5: Kekuatan Asam Oksi Klorin
$$\\mathbf{\\ce{HClO < HClO2 < HClO3 < HClO4}}$$
- **Penjelasan Efek Induktif:**
  Bilangan oksidasi atom klorin meningkat: $+1 \\to +3 \\to +5 \\to +7$.
  Semakin banyak atom oksigen yang sangat elektronegatif terikat pada atom pusat $\\ce{Cl}$, tarikan kerapatan elektron dari ikatan $\\ce{O-H}$ ke arah atom pusat semakin kuat. Polarisasi ini melemahkan ikatan $\\ce{O-H}$ sehingga proton $\\ce{H+}$ terlepas dengan sangat mudah. Oleh sebab itu, **asam perklorat ($\\ce{HClO4}$) adalah asam terkuat**.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Dua Jebakan Paling Berbahaya tentang Halogen di UTBK:**
> 1. **Daya Oksidator vs Daya Asam:**
>    - Daya oksidator halogen unsur: $\\ce{F2 > Cl2 > Br2 > I2}$ (makin ke atas makin kuat).
>    - Kekuatan asam halida: $\\ce{HF \\ll HCl < HBr < HI}$ (makin ke bawah makin kuat asamnya!).
> 2. **Wujud Fisik $25^\\circ\\text{C}$:** $\\ce{F2}$ (gas kuning pucat), $\\ce{Cl2}$ (gas kuning kehijauan), $\\ce{Br2}$ (cairan merah-cokelat), $\\ce{I2}$ (padatan ungu-kehitaman yang menyublim).`,
    keyFormulas: [
      { name: 'Deret Daya Oksidasi Halogen', formula: '\\ce{F2 > Cl2 > Br2 > I2} \\implies E^\\circ \\text{ Makin Positif ke Atas}' },
      { name: 'Kaidah Pendesakan Halogen', formula: '\\ce{X2 + 2Y- -> 2X- + Y2} \\quad (\\text{Spontan jika } E^\\circ_{X_2} > E^\\circ_{Y_2})' },
      { name: 'Urutan Kekuatan Asam Halida', formula: '\\ce{HF} \\text{ (lemah)} \\ll \\ce{HCl < HBr < HI} \\text{ (sangat kuat)}' },
      { name: 'Urutan Kekuatan Asam Oksi Klorin', formula: '\\ce{HClO < HClO2 < HClO3 < HClO4}' },
    ],
  },
  {
    tag: 'contoh-periode-3-titik-leleh-amfoter-aloh3-sma',
    tags: ['unsur-periode-3', 'titik-leleh-periode-3', 'kovalen-raksasa-silikon', 'amfoterisme-aluminium-aloh3', 'stoikiometri-larutan', 'kimia-sma'],
    title: 'Contoh Soal 3: Unsur Periode Ketiga: Struktur Titik Leleh & Stoikiometri Karakter Amfoter Al(OH)3 (Level: Sedang)',
    summary: 'Analisis ikatan logam, kovalen raksasa intan, dan molekular pada titik leleh periode 3, serta kalkulasi stoikiometri pelarutan amfoter Al(OH)3 dalam asam vs basa.',
    content: `### 📋 Skenario Masalah:
Unsur-unsur Periode Ketiga tabel periodik ($\\ce{Na, Mg, Al, Si, P, S, Cl, Ar}$) memperlihatkan variasi struktur ikatan kimia yang sangat dramatis dari logam sejati hingga gas mulia:

#### Data Titik Leleh Unsur Periode 3:
- Logam: $\\ce{Na} (98^\\circ\\text{C})$, $\\ce{Mg} (650^\\circ\\text{C})$, $\\ce{Al} (660^\\circ\\text{C})$
- Metaloid: $\\ce{Si} (1410^\\circ\\text{C})$
- Non-logam Molekular: $\\ce{P4} (44^\\circ\\text{C})$, $\\ce{S8} (115^\\circ\\text{C})$, $\\ce{Cl2} (-101^\\circ\\text{C})$
- Gas Mulia: $\\ce{Ar} (-186^\\circ\\text{C})$

#### Eksperimen Kimia Amfoter Aluminium:
Di laboratorium, seorang siswa menyiapkan $7.80\\text{ gram}$ endapan putih gelatin aluminium hidroksida murni ($\\ce{Al(OH)3}$, $M_r = 78.00\\text{ g/mol}$). Endapan tersebut dibagi tepat sama rata ke dalam dua wadah (masing-masing bermassa $3.90\\text{ gram}$):
- **Wadah 1:** Direaksikan dengan larutan asam klorida ($\\ce{HCl } 1.50\\text{ M}$).
- **Wadah 2:** Direaksikan dengan larutan natrium hidroksida ($\\ce{NaOH } 1.00\\text{ M}$).

---

### 🎯 Pertanyaan:
1. Analisis Titik Leleh:
   a. Mengapa silikon ($\\ce{Si}$) memiliki titik leleh paling tinggi ($1410^\\circ\\text{C}$) di antara seluruh unsur periode ketiga?
   b. Di antara unsur non-logam molekular sederhana ($\\ce{P4, S8, Cl2}$), jelaskan mengapa belerang ($\\ce{S8}$) memiliki titik leleh paling tinggi!
2. Sifat Amfoter Aluminium:
   a. Tuliskan persamaan reaksi molekul dan persamaan reaksi ion bersih yang terjadi pada Wadah 1 dan Wadah 2! Sebutkan nama ion kompleks yang terbentuk pada Wadah 2!
   b. Hitung volume minimum larutan $\\ce{HCl } 1.50\\text{ M}$ (dalam $\\text{mL}$) yang dibutuhkan untuk melarutkan seluruh endapan $\\ce{Al(OH)3}$ pada Wadah 1!
   c. Hitung volume minimum larutan $\\ce{NaOH } 1.00\\text{ M}$ (dalam $\\text{mL}$) yang dibutuhkan untuk melarutkan seluruh endapan $\\ce{Al(OH)3}$ pada Wadah 2!
3. Aplikasi Industri: Jelaskan bagaimana sifat amfoter aluminium dimanfaatkan pada **Proses Bayer** untuk memisahkan aluminium oksida murni dari bijih bauksit yang mengandung pengotor oksida besi ($\\ce{Fe2O3}$)!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Analisis Struktur & Titik Leleh Periode 3
a. **Penyebab Tingginya Titik Leleh Silikon ($\ce{Si}$):**
   Silikon tidak membentuk molekul kecil atau kisi logam biasa, melainkan membentuk **struktur kovalen jejaring raksasa (*giant covalent network*)** tiga dimensi dengan geometri tetrahedral yang identik dengan intan. Setiap atom $\\ce{Si}$ terikat pada 4 atom $\\ce{Si}$ tetangganya melalui ikatan kovalen yang sangat kuat. Untuk melelehkan silikon, ribuan ikatan kovalen kokoh ini harus diputuskan serentak dengan energi termal yang sangat besar ($1410^\\circ\\text{C}$).

b. **Urutan Titik Leleh Non-Logam Molekular ($\ce{S8 > P4 > Cl2 > Ar}$):**
   Unsur non-logam periode 3 berwujud molekul kovalen sederhana yang terikat oleh **gaya dispersi London**:
   - Belerang membentuk molekul cincin delapan atom: $\\ce{S8}$ ($M_r = 8 \\times 32 = 256\\text{ g/mol}$).
   - Fosforus membentuk molekul tetrahedral: $\\ce{P4}$ ($M_r = 4 \\times 31 = 124\\text{ g/mol}$).
   - Klorin membentuk molekul diatomik: $\\ce{Cl2}$ ($M_r = 2 \\times 35.5 = 71\\text{ g/mol}$).
   - Argon berupa atom monoatomik: $\\ce{Ar}$ ($M_r = 40\\text{ g/mol}$).
   Karena kekuatan gaya dispersi London berbanding lurus dengan ukuran awan elektron dan massa molar ($M_r$), molekul $\\ce{S8}$ memiliki gaya London paling kuat, sehingga titik lelehnya tertinggi ($115^\\circ\\text{C}$).

---

#### Langkah 2: Stoikiometri Pelarutan Amfoter $\ce{Al(OH)3}$
Jumlah mol $\\ce{Al(OH)3}$ pada tiap wadah:
$$n_{\\ce{Al(OH)3}} = \\frac{\\text{massa}}{M_r} = \\frac{3.90\\text{ g}}{78.00\\text{ g/mol}} = \\mathbf{0.050\\text{ mol}}$$

a. **Persamaan Reaksi:**
   1. **Wadah 1 (Bertindak Sebagai Basa terhadap Asam Kuat):**
      $$\\mathbf{\\ce{Al(OH)3(s) + 3HCl(aq) -> AlCl3(aq) + 3H2O(l)}}$$
      Persamaan ion bersih: $\\ce{Al(OH)3(s) + 3H+(aq) -> Al^3+(aq) + 3H2O(l)}$.
   2. **Wadah 2 (Bertindak Sebagai Asam terhadap Basa Kuat):**
      $$\\mathbf{\\ce{Al(OH)3(s) + NaOH(aq) -> Na[Al(OH)4](aq)}}$$
      Persamaan ion bersih: $\\ce{Al(OH)3(s) + OH-(aq) -> [Al(OH)4]-(aq)}$.
      Nama ion kompleks produk: **Ion tetrahidroksoaluminat** (larut jernih tanpa endapan).

b. **Volume Minimum Larutan $\ce{HCl } 1.50\text{ M}$:**
   Perbandingan koefisien reaksi: $1\\text{ mol } \\ce{Al(OH)3} \\equiv 3\\text{ mol } \\ce{HCl}$.
   $$n_{\\ce{HCl}} = 3 \\times 0.050\\text{ mol} = \\mathbf{0.150\\text{ mol}}$$
   $$V_{\\ce{HCl}} = \\frac{n}{M} = \\frac{0.150\\text{ mol}}{1.50\\text{ mol/L}} = 0.100\\text{ Liter} = \\mathbf{100.0\\text{ mL}}$$

c. **Volume Minimum Larutan $\ce{NaOH } 1.00\text{ M}$:**
   Perbandingan koefisien reaksi: $1\\text{ mol } \\ce{Al(OH)3} \\equiv 1\\text{ mol } \\ce{NaOH}$.
   $$n_{\\ce{NaOH}} = 1 \\times 0.050\\text{ mol} = \\mathbf{0.050\\text{ mol}}$$
   $$V_{\\ce{NaOH}} = \\frac{n}{M} = \\frac{0.050\\text{ mol}}{1.00\\text{ mol/L}} = 0.050\\text{ Liter} = \\mathbf{50.0\\text{ mL}}$$

---

#### Langkah 3: Prinsip Pemurnian Bauksit pada Proses Bayer
Bijih bauksit mentah mengandung $\\ce{Al2O3}$ bersama pengotor utama oksida besi(III) ($\\ce{Fe2O3}$) yang berwarna merah (*red mud*):
- Campuran bijih dilarutkan ke dalam larutan $\\ce{NaOH}$ pekat panas pada tekanan tinggi.
- Karena aluminium bersifat amfoter, $\\ce{Al2O3}$ larut membentuk ion kompleks aluminat:
  $$\\ce{Al2O3(s) + 2OH-(aq) + 3H2O(l) -> 2[Al(OH)4]-(aq)}$$
- Sebaliknya, oksida besi $\\ce{Fe2O3}$ bersifat **basa murni**, sehingga sama sekali tidak bereaksi dan tidak larut dalam $\\ce{NaOH}$. Endapan $\\ce{Fe2O3}$ disaring dan dibuang sebagai lumpur merah, menyisakan larutan aluminium murni yang siap dipresipitasi ulang!

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Rasio Mol Kunci Amfoterisme Aluminium:**
> - Terhadap Asam ($\ce{H+}$): Rasio mol adalah **$1 : 3$** (karena $\ce{Al^3+}$ memiliki muatan $+3$, butuh $3\\ce{H+}$ untuk menetralkan $3\\ce{OH-}$).
> - Terhadap Basa ($\ce{OH-}$): Rasio mol adalah **$1 : 1$** (hanya menangkap satu ion $\ce{OH-}$ tambahan membentuk kompleks $[\ce{Al(OH)4}]^-$).`,
    keyFormulas: [
      { name: 'Reaksi Amfoter Al(OH)3 dalam Asam', formula: '\\ce{Al(OH)3(s) + 3H+(aq) -> Al^3+(aq) + 3H2O(l)}' },
      { name: 'Reaksi Amfoter Al(OH)3 dalam Basa', formula: '\\ce{Al(OH)3(s) + OH-(aq) -> [Al(OH)4]-(aq)}' },
      { name: 'Urutan Titik Leleh Nonlogam Periode 3', formula: '\\ce{S8} (M_r=256) > \\ce{P4} (M_r=124) > \\ce{Cl2} (M_r=71) > \\ce{Ar}' },
    ],
  },
  {
    tag: 'contoh-transisi-periode-4-magnet-warna-d-d-hots-sma',
    tags: ['logam-transisi-periode-4', 'konfigurasi-elektron-kation', 'momen-magnetik-spin', 'paramagnetik-diamagnetik', 'warna-ion-transisi-cft', 'transisi-d-d', 'hots-sma'],
    title: 'Contoh Soal 4: Logam Transisi Periode 4: Konfigurasi Kation, Momen Magnetik Spin (BM), & Warna Spektral Transisi d-d (Level: Sulit / HOTS)',
    summary: 'Penentuan konfigurasi elektron kation transisi, analisis elektron tak berpasangan, kalkulasi momen spin murni Bohr Magneton, dan dasar teori pembelahan d-d.',
    content: `### 📋 Skenario Masalah & Data Spektroskopi:
Tiga kation logam transisi periode 4 diuji sifat magnetik dan karakteristik optiknya di laboratorium kimia instrumen:
1. **Ion Kromium(III) ($\\ce{Cr^3+}$, nomor atom $Z = 24$):** Larutannya dalam air berwarna **hijau-violet**.
2. **Ion Besi(II) ($\\ce{Fe^2+}$, nomor atom $Z = 26$):** Larutannya dalam air berwarna **hijau muda pucat**.
3. **Ion Seng(II) ($\\ce{Zn^2+}$, nomor atom $Z = 30$):** Larutannya dalam air **bening tidak berwarna**.

*(Konfigurasi elektron gas mulia Argon: $[\\ce{Ar}] = 1s^2 2s^2 2p^6 3s^2 3p^6$)*.

---

### 🎯 Pertanyaan:
1. Tuliskan konfigurasi elektron keadaan dasar untuk:
   a. Atom netral $\\ce{Cr, Fe, Zn}$!
   b. Kation $\\ce{Cr^3+, Fe^2+, Zn^2+}$! Mengapa elektron pada subkulit $4s$ selalu dilepaskan terlebih dahulu sebelum elektron $3d$?
2. Gambarkan diagram orbital subkulit $3d$ untuk ketiga kation tersebut, tentukan jumlah elektron yang tidak berpasangan ($n$), dan klasifikasikan sifat kemagnetannya (apakah bersifat **paramagnetik** atau **diamagnetik**)!
3. Hitung nilai momen magnetik spin murni ($\\mu_s$) dalam satuan Bohr Magneton (BM) dengan ketelitian dua tempat desimal untuk masing-masing kation!
4. Berdasarkan Teori Medan Kristal (*Crystal Field Theory* / CFT):
   a. Jelaskan mekanisme transisi elektron $d-d$ yang menyebabkan timbulnya warna pada larutan ion $\\ce{Cr^3+}$ dan $\\ce{Fe^2+}$!
   b. Mengapa larutan ion $\\ce{Zn^2+}$ dan $\\ce{Sc^3+}$ sama sekali tidak berwarna (bening jernih)?
5. Pertanyaan Penalaran Tingkat Tinggi: Ion permanganat ($\\ce{MnO4-}$) memiliki atom mangan dengan biloks $+7$ berkonfigurasi $3d^0$, namun memancarkan warna ungu yang sangat pekat dan intensif. Jelaskan secara singkat mengapa hal ini dapat terjadi!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Konfigurasi Elektron Atom Netral & Kation
a. **Atom Netral:**
   - $\\ce{Cr}$ ($Z = 24$): $\\mathbf{[\\ce{Ar}]\\, 4s^1 3d^5}$ *(anomali orbital $3d$ setengah penuh yang sangat stabil)*.
   - $\\ce{Fe}$ ($Z = 26$): $\\mathbf{[\\ce{Ar}]\\, 4s^2 3d^6}$.
   - $\\ce{Zn}$ ($Z = 30$): $\\mathbf{[\\ce{Ar}]\\, 4s^2 3d^{10}}$ *(subkulit $3d$ terisi penuh)*.

b. **Pembentukan Kation:**
   Elektron pada kulit terluar ($n = 4$, yaitu orbital $4s$) memiliki jarak rata-rata terjauh dari inti atom, sehingga energi ionisasinya paling rendah dan **selalu dilepaskan terlebih dahulu**:
   - $\\ce{Cr^3+}$: Melepas 1 elektron $4s$ dan 2 elektron $3d \\implies \\mathbf{[\\ce{Ar}]\\, 3d^3}$.
   - $\\ce{Fe^2+}$: Melepas 2 elektron $4s \\implies \\mathbf{[\\ce{Ar}]\\, 3d^6}$.
   - $\\ce{Zn^2+}$: Melepas 2 elektron $4s \\implies \\mathbf{[\\ce{Ar}]\\, 3d^{10}}$.

---

#### Langkah 2: Diagram Orbital 3d, Jumlah Elektron Tak Berpasangan ($n$), dan Kemagnetan
Berdasarkan Aturan Hund:
1. **Ion $\\ce{Cr^3+}$ ($3d^3$):**
   - Diagram: $(\\uparrow) (\\uparrow) (\\uparrow) (\\phantom{\\uparrow}) (\\phantom{\\uparrow})$
   - Jumlah elektron tak berpasangan: $\\mathbf{n = 3}$.
   - Sifat: **Paramagnetik** (ditarik oleh medan magnet).
2. **Ion $\\ce{Fe^2+}$ ($3d^6$):**
   - Diagram: $(\\uparrow\\downarrow) (\\uparrow) (\\uparrow) (\\uparrow) (\\uparrow)$
   - Terdapat 1 pasang elektron dan 4 elektron tunggal.
   - Jumlah elektron tak berpasangan: $\\mathbf{n = 4}$.
   - Sifat: **Paramagnetik Kuat**.
3. **Ion $\\ce{Zn^2+}$ ($3d^{10}$):**
   - Diagram: $(\\uparrow\\downarrow) (\\uparrow\\downarrow) (\\uparrow\\downarrow) (\\uparrow\\downarrow) (\\uparrow\\downarrow)$
   - Seluruh orbital terisi penuh berpasangan.
   - Jumlah elektron tak berpasangan: $\\mathbf{n = 0}$.
   - Sifat: **Diamagnetik** (ditolak lemah oleh medan magnet).

---

#### Langkah 3: Menghitung Momen Magnetik Spin Murni ($\mu_s$)
Rumus momen spin murni (*spin-only formula*):
$$\\mu_s = \\sqrt{n(n + 2)} \\quad \\text{Bohr Magneton (BM)}$$
1. **Untuk $\\ce{Cr^3+}$ ($n = 3$):**
   $$\\mu_s = \\sqrt{3(3 + 2)} = \\sqrt{15} \\approx \\mathbf{3.87\\text{ BM}}$$
2. **Untuk $\\ce{Fe^2+}$ ($n = 4$):**
   $$\\mu_s = \\sqrt{4(4 + 2)} = \\sqrt{24} \\approx \\mathbf{4.90\\text{ BM}}$$
3. **Untuk $\\ce{Zn^2+}$ ($n = 0$):**
   $$\\mu_s = \\sqrt{0(0 + 2)} = \\mathbf{0.00\\text{ BM}}$$

---

#### Langkah 4: Mekanisme Spektral Transisi d-d & Asal Warna
a. **Mekanisme Transisi $d-d$ pada $\\ce{Cr^3+}$ dan $\\ce{Fe^2+}$:**
   Di dalam larutan air, kation logam dikelilingi oleh 6 molekul air membentuk kompleks oktahedral $[\\ce{M(H2O)6}]^{n+}$. Medan ligan memecah 5 orbital $d$ menjadi dua kelompok energi: orbital bawah ($t_{2g}$) dan orbital atas ($e_g$) dengan celah energi $\\Delta_o$.
   Elektron pada orbital $t_{2g}$ menyerap sebagian energi foton cahaya tampak ($\Delta E = hc/\\lambda$) untuk melompat (tereksitasi) ke orbital $e_g$. Sisa cahaya tampak yang tidak diserap akan dipantulkan/diteruskan ke mata sebagai **warna komplementer** (misal $\\ce{Cr^3+}$ menyerap warna kuning-merah sehingga larutan tampak hijau-violet).

b. **Penyebab $\\ce{Zn^2+}$ dan $\\ce{Sc^3+}$ Tidak Berwarna:**
   - **Ion $\\ce{Zn^2+}$ ($3d^{10}$):** Seluruh orbital $d$ penuh sesak ($t_{2g}^6 e_g^4$), sehingga tidak ada orbital kosong yang dapat menjadi tujuan eksitasi elektron.
   - **Ion $\\ce{Sc^3+}$ ($3d^0$):** Subkulit $d$ kosong total, tidak ada elektron yang dapat bertransisi.
   *Kesimpulan Baku:* **Warna HANYA muncul jika subkulit $d$ terisi sebagian ($d^1$ sampai $d^9$)!**

---

#### Langkah 5: Warna Ungu Pekat $\\ce{MnO4-}$ (Mekanisme Transfer Muatan / LMCT)
Meskipun atom $\\ce{Mn(VII)}$ dalam $\\ce{MnO4-}$ berkonfigurasi $3d^0$ (tanpa elektron $d$), warnanya bukan disebabkan oleh transisi $d-d$, melainkan oleh **Transfer Muatan Ligan ke Logam (*Ligand-to-Metal Charge Transfer* / LMCT)**:
Foton cahaya tampak mengeksitasi elektron dari orbital molekul ligan oksigen ($\\ce{O^2-}$) langsung menuju ke orbital kosong atom pusat mangan. Transisi transfer muatan ini diizinkan penuh oleh hukum kuantum Laporte (*Laporte allowed*), menghasilkan absorbsi cahaya yang jutaan kali lebih intensif daripada transisi $d-d$ biasa!

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Kunci Kilat Momen Magnetik & Warna di Ujian:**
> 1. **Nilai Momen Magnetik Selalu Mendekati $[n + 0.8]$ hingga $[n + 0.9]$:**
>    - $n = 1 \\implies \\mu_s = \\sqrt{3} \\approx 1.73\\text{ BM}$
>    - $n = 2 \\implies \\mu_s = \\sqrt{8} \\approx 2.83\\text{ BM}$
>    - $n = 3 \\implies \\mu_s = \\sqrt{15} \\approx 3.87\\text{ BM}$
>    - $n = 4 \\implies \\mu_s = \\sqrt{24} \\approx 4.90\\text{ BM}$
>    - $n = 5 \\implies \\mu_s = \\sqrt{35} \\approx 5.92\\text{ BM}$
> 2. **Kation Bening Tanpa Warna:** Selalu ingat pasangan **$\\ce{Sc^3+}$ ($d^0$) dan $\\ce{Zn^2+}$ ($d^{10}$)**!`,
    keyFormulas: [
      { name: 'Momen Magnetik Spin Murni', formula: '\\mu_s = \\sqrt{n(n + 2)} \\quad \\text{BM}' },
      { name: 'Syarat Warna Transisi d-d', formula: '\\text{Subkulit } 3d^1 \\text{ s.d. } 3d^9 \\implies \\text{Berwarna}; \\quad 3d^0, 3d^{10} \\implies \\text{Bening}' },
      { name: 'Konfigurasi Ion Besi', formula: '\\ce{Fe}: [\\ce{Ar}]\\, 4s^2 3d^6 \\implies \\ce{Fe^2+}: [\\ce{Ar}]\\, 3d^6 \\, (n=4), \\quad \\ce{Fe^3+}: [\\ce{Ar}]\\, 3d^5 \\, (n=5)' },
    ],
  },
  {
    tag: 'contoh-rekayasa-metalurgi-tanur-tiup-hall-heroult-hots-sma',
    tags: ['proses-metalurgi-ekstraksi-industri-kimia-anorganik', 'tanur-tiup-besi-blast-furnace', 'proses-hall-heroult', 'kriolit-na3alf6', 'terak-casio3', 'kalsinasi-hematit', 'hots-sma'],
    title: 'Contoh Soal 5: Rekayasa Metalurgi Industri: Reduksi Tanur Tiup Besi Hematit & Elektrolisis Hall-Héroult Aluminium (Level: Sulit / HOTS)',
    summary: 'Kalkulasi stoikiometri industri peleburan bijih besi hematit tanur tiup, pembentukan terak silika, serta kuantifikasi elektrokimia Faraday pada ekstraksi aluminium Hall-Héroult.',
    content: `### 📋 Skenario Masalah & Data Industri:
Dua industri strategis logam nasional mengoperasikan reaktor ekstraksi kimia skala raksasa:

#### Industri 1: Tanur Tiup Besi (*Blast Furnace*)
Sebuah tanur tiup dimasukkan bahan baku berupa $20.00\\text{ ton}$ bijih hematit mentah. Komposisi hasil analisis mineralogi:
- **$79.85\\%$** besi(III) oksida murni ($\\ce{Fe2O3}$, $M_r = 159.70\\text{ g/mol}$)
- **$12.02\\%$** pengotor pasir silika ($\\ce{SiO2}$, $M_r = 60.08\\text{ g/mol}$)
- **$8.13\\%$** pengotor inert lainnya.

Bahan penolong yang ditambahkan meliputi kokas karbon ($\\ce{C}$) dan batu kapur ($\\ce{CaCO3}$, $M_r = 100.09\\text{ g/mol}$). Gas pereduksi utama yang terbentuk adalah karbon monoksida ($\\ce{CO}$).

#### Industri 2: Ekstraksi Aluminium Hall-Héroult
Pabrik peleburan aluminium mengelektrolisis lelehan alumina murni ($\\ce{Al2O3}$, $M_r = 101.96\\text{ g/mol}$) yang dilarutkan dalam kriolit cair ($\\ce{Na3AlF6}$) pada suhu $950^\\circ\\text{C}$. Sel dialiri arus searah konstan sebesar $I = 96.500\\text{ Ampere}$ selama durasi $t = 10.0\\text{ jam}$ ($36.000\\text{ detik}$) dengan efisiensi arus industri $\\eta = 90.0\\%$.

*(Diketahui: $A_r\\text{ Fe} = 55.85\\text{ g/mol}$, $A_r\\text{ Al} = 27.00\\text{ g/mol}$, $1\\text{ F} = 96.500\\text{ C/mol } e^-$, volume molar gas pada $RTP = 24.0\\text{ m}^3\\text{/kmol}$)*.

---

### 🎯 Pertanyaan:
1. **Pada Industri Tanur Tiup Besi:**
   a. Tuliskan reaksi reduksi bertingkat hematit oleh gas $\\ce{CO}$ hingga terbentuk cairan besi murni!
   b. Hitung massa logam besi murni ($\\ce{Fe}$) yang dihasilkan secara teoretis dalam satuan **ton**!
   c. Tuliskan persamaan reaksi pembentukan terak cair (*slag*) kalsium silikat ($\\ce{CaSiO3}$) dan hitung massa minimum batu kapur ($\\ce{CaCO3}$) dalam satuan **ton** yang harus ditambahkan untuk mengikat seluruh pasir silika!
   d. Mengapa terak cair mengapung di atas cairan besi dan apa fungsi protektifnya?
2. **Pada Industri Aluminium Hall-Héroult:**
   a. Tuliskan persamaan reaksi di katoda dan anoda sel elektrolisis! Mengapa batang anoda karbon harus diganti secara berkala?
   b. Hitung jumlah muatan listrik efektif ($Q_{\\text{efektif}}$) dan mol elektron efektif ($F_{\\text{efektif}}$) yang dialirkan selama $10\\text{ jam}$!
   c. Hitung massa logam aluminium murni yang berhasil diproduksi dalam satuan **kilogram (kg)**!
   d. Jelaskan dua peran krusial penambahan kriolit cair ($\\ce{Na3AlF6}$) dalam sel Hall-Héroult!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Kimia Tanur Tiup Besi
a. **Reaksi Reduksi Bertingkat Hematit:**
   1. Suhu $400 - 700^\\circ\\text{C}$ (Zona Atas):
      $$\\ce{3Fe2O3(s) + CO(g) -> 2Fe3O4(s) + CO2(g)}$$
   2. Suhu $700 - 1000^\\circ\\text{C}$ (Zona Tengah):
      $$\\ce{Fe3O4(s) + CO(g) -> 3FeO(s) + CO2(g)}$$
   3. Suhu $> 1000^\\circ\\text{C}$ (Zona Bawah):
      $$\\ce{FeO(s) + CO(g) -> Fe(l) + CO2(g)}$$
   $$\\text{Reaksi Bersih Total: } \\mathbf{\\ce{Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g)}}$$

b. **Massa Logam Besi yang Dihasilkan:**
   - Massa $\\ce{Fe2O3}$ murni:
     $$m_{\\ce{Fe2O3}} = 79.85\\% \\times 20.00\\text{ ton} = \\mathbf{15.97\\text{ ton}} = 15.97 \\times 10^6\\text{ gram}$$
   - Mol $\\ce{Fe2O3}$:
     $$n_{\\ce{Fe2O3}} = \\frac{15.97 \\times 10^6\\text{ g}}{159.70\\text{ g/mol}} = 100.000\\text{ mol} = \\mathbf{100.0\\text{ kmol}}$$
   - Mol $\\ce{Fe}$ yang dihasilkan ($1\\text{ mol } \\ce{Fe2O3} \\implies 2\\text{ mol } \\ce{Fe}$):
     $$n_{\\ce{Fe}} = 2 \\times 100.0\\text{ kmol} = \\mathbf{200.0\\text{ kmol}}$$
   - Massa logam besi murni:
     $$m_{\\ce{Fe}} = 200.0\\text{ kmol} \\times 55.85\\text{ kg/kmol} = 11.170\\text{ kg} = \\mathbf{11.17\\text{ ton Besi}}$$

c. **Massa Batu Kapur Pengikat Terak Silika:**
   - Massa pengotor silika:
     $$m_{\\ce{SiO2}} = 12.02\\% \\times 20.00\\text{ ton} = 2.404\\text{ ton} = 2.404 \\times 10^6\\text{ gram}$$
   - Mol $\\ce{SiO2}$:
     $$n_{\\ce{SiO2}} = \\frac{2.404 \\times 10^6\\text{ g}}{60.08\\text{ g/mol}} = 40.013\\text{ mol} = \\mathbf{40.013\\text{ kmol}}$$
   - Reaksi pembentukan terak:
     $$\\ce{CaCO3(s) -> CaO(s) + CO2(g)}$$
     $$\\mathbf{\\ce{CaO(s) + SiO2(s) -> CaSiO3(l)} \\quad (\\text{Terak Cair / Slag})}$$
     Rasio mol: $1\\text{ mol } \\ce{CaCO3} \\equiv 1\\text{ mol } \\ce{CaO} \\equiv 1\\text{ mol } \\ce{SiO2}$.
     $$n_{\\ce{CaCO3}} = 40.013\\text{ kmol}$$
   - Massa batu kapur murni:
     $$m_{\\ce{CaCO3}} = 40.013\\text{ kmol} \\times 100.09\\text{ kg/kmol} = 4004.9\\text{ kg} \\approx \\mathbf{4.00\\text{ ton}}$$

d. **Fungsi Protektif Terak Cair:**
   Terak kalsium silikat ($\ce{CaSiO3}$) memiliki massa jenis lebih rendah ($\rho \approx 2.5\text{ g/cm}^3$) daripada cairan besi ($\rho \approx 7.0\text{ g/cm}^3$), sehingga terak mengapung di permukaan membentuk lapisan pelindung yang mencegah besi cair teroksidasi kembali oleh hembusan udara panas tanur.

---

#### Langkah 2: Stoikiometri Elektrolisis Aluminium Hall-Héroult
a. **Reaksi Elektroda:**
   - **Katoda (Lapisan Karbon Bak):** Ion aluminium direduksi mengendap sebagai cairan logam di dasar sel:
     $$\\ce{Al^3+ + 3e- -> Al(l)}$$
   - **Anoda (Batang Karbon Grafit):** Ion oksida teroksidasi menghasilkan gas oksigen:
     $$\\ce{2O^2- -> O2(g) + 4e-}$$
   - **Penyebab Terkikisnya Anoda:** Pada temperatur operasional $950^\\circ\\text{C}$, gas oksigen yang terbentuk seketika membakar elektroda karbon membentuk gas karbon dioksida:
     $$\\mathbf{\\ce{C(s) + O2(g) -> CO2(g)}}$$
     Oleh karena itu, batang anoda karbon habis terbakar dan wajib diganti secara berkala.

b. **Muatan Listrik & Mol Elektron Efektif:**
   - Total muatan teoritis:
     $$Q = I \\times t = 96.500\\text{ A} \\times 36.000\\text{ s} = 3.474 \\times 10^9\\text{ Coulomb}$$
   - Mol elektron teoritis:
     $$n_{e^-, \\text{teoritis}} = \\frac{Q}{96.500\\text{ C/mol}} = 36.000\\text{ mol } e^-$$
   - Memperhitungkan efisiensi arus $\\eta = 90.0\\%$ ($0.90$):
     $$n_{e^-, \\text{efektif}} = 36.000\\text{ mol} \\times 0.90 = \\mathbf{32.400\\text{ mol } e^-} \\quad (32.40\\text{ kmol } e^-)$$

c. **Massa Logam Aluminium yang Dihasilkan:**
   Sesuai reaksi katoda: $\\ce{Al^3+ + 3e- -> Al} \\implies 1\\text{ mol } \\ce{Al} \\equiv 3\\text{ mol } e^-$.
   $$n_{\\ce{Al}} = \\frac{1}{3} \\times n_{e^-, \\text{efektif}} = \\frac{1}{3} \\times 32.400\\text{ mol} = \\mathbf{10.800\\text{ mol } \\ce{Al}}$$
   Massa aluminium:
   $$m_{\\ce{Al}} = n_{\\ce{Al}} \\times A_r(\\ce{Al}) = 10.800\\text{ mol} \\times 27.00\\text{ g/mol} = 291.600\\text{ gram} = \\mathbf{291.6\\text{ kg Aluminium}}$$

d. **Dua Peran Utama Kriolit Cair ($\ce{Na3AlF6}$):**
   1. **Menurunkan Titik Leleh Secara Dramatis:** Titik leleh alumina murni adalah $> 2050^\\circ\\text{C}$. Campuran lelehan kriolit-alumina meleleh pada temperatur $\\sim 950^\\circ\\text{C}$, menghemat konsumsi energi listrik hingga ratusan megawatt.
   2. **Meningkatkan Konduktivitas Elektrolit:** Kriolit cair bertindak sebagai pelarut ionik unggul yang menghantarkan arus listrik dengan hambatan jenis sangat rendah.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Kaidah Metalurgi Industri di UTBK-SNBT:**
> 1. **Tanur Tiup Besi:** Gas pereduksi sejati adalah **$\\ce{CO}$** (bukan kokas $\\ce{C}$ padat). Batu kapur berfungsi sebagai **fluks pelebur pengikat silika menjadi terak** (bukan pereduksi besi!).
> 2. **Sel Hall-Héroult:** Katoda menghasilkan **$\\ce{Al(l)}$**, anoda menghasilkan **$\\ce{CO2(g)}$** karena karbon bereaksi dengan oksigen hasil oksidasi. Pelarutnya adalah **kriolit cair $\\ce{Na3AlF6}$**.`,
    keyFormulas: [
      { name: 'Reduksi Bersih Tanur Tiup Besi', formula: '\\ce{Fe2O3(s) + 3CO(g) -> 2Fe(l) + 3CO2(g)}' },
      { name: 'Pembentukan Terak Silika', formula: '\\ce{CaO(s) + SiO2(s) -> CaSiO3(l)}' },
      { name: 'Reduksi Katoda Hall-Heroult', formula: '\\ce{Al^3+ + 3e- -> Al(l)}' },
      { name: 'Hukum Faraday Skala Industri', formula: 'w = \\frac{A_r}{n} \\times \\frac{I \\times t}{96.500} \\times \\eta' },
    ],
  },
];
// ============================================================================
// TOPIK 116: Kimia Karbon (Turunan Alkana, Benzena) & Makromolekul SMA
// (Tata Nama, Isomerisme, Reaksi Diferensiasi, Benzena SEAr, Polimer, Biomolekul, Stereokimia CIP)
// ============================================================================
export const WORKED_EXAMPLES_TOPIC_116: ConceptBlock[] = [
  {
    tag: 'contoh-diferensiasi-isomer-alkohol-eter-sma',
    tags: ['turunan-alkana', 'isomer-fungsi', 'alkohol-eter', 'pereaksi-lucas', 'logam-natrium', 'kimia-sma'],
    title: 'Contoh Soal 1: Analisis Isomer Gugus Fungsi C4H10O & Uji Diferensiasi Alkohol vs Eter (Level: Sedang)',
    summary: 'Identifikasi struktur senyawa isomer C4H10O melalui reaksi dengan logam natrium, pereaksi Lucas (HCl pekat + ZnCl2), dan reaksi oksidasi permanganat.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Di laboratorium kimia sekolah, seorang siswa diberikan 3 botol reagen berlabel **Senyawa X**, **Senyawa Y**, dan **Senyawa Z**. Hasil analisis pembakaran elemental menunjukkan ketiga zat tersebut memiliki rumus molekul identik, yaitu $\\ce{C4H10O}$.

Untuk mengidentifikasi rumus struktur masing-masing isomer, dilakukan serangkaian pengujian laboratorium:
1. **Uji Logam Natrium ($\\ce{Na}$):**
   - **Senyawa X** dan **Senyawa Y** bereaksi aktif menghasilkan gelembung gas tak berwarna yang meletup saat didekatkan api (gas $\\ce{H2}$).
   - **Senyawa Z** sama sekali tidak bereaksi (inert) dengan logam natrium.
2. **Uji Pereaksi Lucas ($\\ce{HCl}$ pekat + katalis $\\ce{ZnCl2}$ anhidrat):**
   - **Senyawa X** bereaksi lambat; larutan baru berubah menjadi keruh setelah didiamkan selama sekitar $5 - 10\\text{ menit}$.
   - **Senyawa Y** bereaksi seketika ($< 30\\text{ detik}$) menghasilkan kekeruhan pekat dan pemisahan dua lapisan cairan alkil klorida.
3. **Uji Oksidasi Bertingkat (larutan $\\ce{KMnO4}$ dalam suasana asam $\\ce{H2SO4}$):**
   - **Senyawa X** mengalami oksidasi yang ditandai dengan hilangnya warna ungu permanganat, menghasilkan senyawa organik baru berumus molekul $\\ce{C4H8O}$. Senyawa $\\ce{C4H8O}$ ini **TIDAK bereaksi** dengan pereaksi Fehling maupun Tollens.
   - **Senyawa Y** resisten terhadap oksidasi (warna ungu $\\ce{KMnO4}$ tidak memudar meskipun dipanaskan perlahan).

---

### 🎯 Pertanyaan:
1. Tentukan golongan deret homolog dan gugus fungsi dari Senyawa X, Senyawa Y, dan Senyawa Z!
2. Gambarkan struktur molekul dan tentukan nama IUPAC yang sah untuk Senyawa X, Y, dan Z!
3. Tuliskan persamaan reaksi kimia berimbang untuk:
   a. Reaksi Senyawa X dengan logam natrium.
   b. Reaksi oksidasi Senyawa X menghasilkan senyawa $\\ce{C4H8O}$.
   c. Reaksi Senyawa Y dengan pereaksi Lucas.
4. Tentukan jenis hubungan keisomeran antara:
   a. Senyawa X dan Senyawa Y.
   b. Senyawa X dan Senyawa Z.

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Menganalisis Rumus Umum & Golongan Senyawa
- Rumus molekul $\\ce{C4H10O}$ memenuhi rumus umum $\\ce{C_n H_{2n+2} O}$ ($n=4$).
- Deret homolog yang memiliki rumus umum $\\ce{C_n H_{2n+2} O}$ adalah pasangan isomer gugus fungsi:
  1. **Alkanol (Alkohol)** dengan gugus fungsi $-\\ce{OH}$.
  2. **Alkoksialkana (Eter)** dengan gugus fungsi $-\\ce{O}-$.
- **Analisis Uji Logam Natrium:**
  - Alkohol memiliki atom hidrogen asam pada gugus $-\\ce{OH}$ sehingga bereaksi melepaskan gas $\\ce{H2}$:
    $$\\ce{2R-OH + 2Na -> 2R-ONa + H2 ^}$$
  - Eter tidak memiliki atom $\\ce{H}$ yang terikat pada atom oksigen sehingga tidak bereaksi dengan logam $\\ce{Na}$.
  - **Kesimpulan Awal:**
    - **Senyawa X** dan **Senyawa Y** adalah **Alkohol** (Alkanol).
    - **Senyawa Z** adalah **Eter** (Alkoksialkana).

---

#### Langkah 2: Mengidentifikasi Struktur Alkohol X dan Y (Uji Lucas & Oksidasi)
Uji Lucas ($\\ce{HCl + ZnCl2}$) membedakan derajat alkohol berdasarkan kecepatan pembentukan karbokation:
- Alkohol tersier ($3^\\circ$): bereaksi seketika ($< 30\\text{ detik}$) menghasilkan lapisan alkil klorida keruh.
- Alkohol sekunder ($2^\\circ$): bereaksi dalam $5 - 10\\text{ menit}$.
- Alkohol primer ($1^\\circ$): tidak bereaksi pada suhu kamar (hanya bereaksi bila dipanaskan lama).

1. **Analisis Senyawa Y:**
   - Bereaksi seketika dengan pereaksi Lucas $\\implies$ Senyawa Y adalah **Alkohol Tersier ($3^\\circ$)**.
   - Resisten terhadap oksidasi $\\ce{KMnO4}$ $\\implies$ memperkuat fakta bahwa Y adalah alkohol tersier (karena tidak memiliki atom H-karbinol).
   - Satu-satunya alkohol butil tersier berkarbon 4 adalah:
     $$\\mathbf{\\ce{CH3-C(CH3)(OH)-CH3}} \\quad \\text{(2-metil-2-propanol atau ters-butanol)}$$

2. **Analisis Senyawa X:**
   - Bereaksi lambat dengan Lucas ($5 - 10\\text{ menit}$) $\\implies$ Senyawa X adalah **Alkohol Sekunder ($2^\\circ$)**.
   - Oksidasi menghasilkan $\\ce{C4H8O}$ yang tidak bereaksi dengan Fehling/Tollens:
     - Oksidasi alkohol primer menghasilkan aldehid (positif Fehling/Tollens).
     - Oksidasi alkohol sekunder menghasilkan **keton** (negatif Fehling/Tollens).
     - Karena produk oksidasinya adalah keton (butanon), maka X dipastikan adalah alkohol sekunder berantai lurus:
     $$\\mathbf{\\ce{CH3-CH(OH)-CH2-CH3}} \\quad \\text{(2-butanol)}$$

3. **Analisis Senyawa Z:**
   - Senyawa Z adalah eter berkarbon 4 ($\\ce{C4H10O}$). Salah satu isomer eter yang paling umum adalah:
     $$\\mathbf{\\ce{CH3-CH2-O-CH2-CH3}} \\quad \\text{(dietil eter / etoksietana)}$$
     *(atau metil propil eter: $\\ce{CH3-O-CH2-CH2-CH3}$).*

---

#### Langkah 3: Persamaan Reaksi Kimia
a. **Reaksi 2-butanol dengan logam natrium:**
   $$\\ce{2CH3-CH(OH)-CH2-CH3 + 2Na -> 2CH3-CH(ONa)-CH2-CH3 + H2 ^}$$
   *(Menghasilkan natrium 2-butoksida dan gas hidrogen).*

b. **Reaksi oksidasi 2-butanol menjadi butanon (keton):**
   $$\\ce{CH3-CH(OH)-CH2-CH3 + [O] ->[KMnO4 / H+] CH3-CO-CH2-CH3 + H2O}$$
   *(Butanon tidak dapat mereduksi pereaksi Fehling karena tidak memiliki gugus $-\\ce{CHO}$).*

c. **Reaksi 2-metil-2-propanol dengan pereaksi Lucas:**
   $$\\ce{(CH3)3C-OH + HCl ->[ZnCl2] (CH3)3C-Cl + H2O}$$
   *(Menghasilkan 2-kloro-2-metilpropana yang tidak larut dalam air sehingga larutan langsung keruh).*

---

#### Langkah 4: Hubungan Keisomeran
a. **Senyawa X (2-butanol) dan Senyawa Y (2-metil-2-propanol):**
   Keduanya sama-sama alkohol ($\\ce{C4H10O}$), namun memiliki kerangka rantai utama karbon yang berbeda (rantai lurus 4 karbon vs rantai bercabang 3 karbon). Hubungannya adalah **Isomer Kerangka / Rangka** (*skeletal isomerism*).
b. **Senyawa X (2-butanol) dan Senyawa Z (dietil eter):**
   Memiliki rumus molekul sama ($\\ce{C4H10O}$), namun memiliki gugus fungsi yang berbeda (alkohol $-\\ce{OH}$ vs eter $-\\ce{O}-$). Hubungannya adalah **Isomer Gugus Fungsi**.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Cepat Ujian Identifikasi Isomer $\\ce{C_n H_{2n+2} O}$:**
> 1. **Uji Logam $\\ce{Na}$:**
>    - Ada gelembung gas $\\ce{H2} \\implies$ **Alkohol**.
>    - Tidak bereaksi $\\implies$ **Eter**.
> 2. **Uji Oksidasi KMnO4 / K2Cr2O7:**
>    - Alkohol Primer ($1^\\circ$) $\\xrightarrow{[O]}$ Aldehid $\\xrightarrow{[O]}$ Asam Karboksilat.
>    - Alkohol Sekunder ($2^\\circ$) $\\xrightarrow{[O]}$ Keton (merah bata Fehling NEGATIF).
>    - Alkohol Tersier ($3^\\circ$) $\\xrightarrow{[O]}$ **TIDAK DAPAT DIOKSIDASI**.
> 3. **Uji Lucas:** Waktu reaksi $3^\\circ$ (< 30 detik) $<$ $2^\\circ$ (5-10 menit) $<$ $1^\\circ$ (tidak bereaksi).`,
    keyFormulas: [
      { name: 'Rumus Umum Alkohol & Eter', formula: '\\ce{C_n H_{2n+2} O}' },
      { name: 'Reaksi Alkohol dengan Natrium', formula: '\\ce{2R-OH + 2Na -> 2R-ONa + H2 ^}' },
      { name: 'Oksidasi Alkohol Sekunder', formula: '\\ce{R-CH(OH)-R\' + [O] -> R-CO-R\' + H2O}' },
      { name: 'Reaksi Substitusi Uji Lucas', formula: '\\ce{R3C-OH + HCl ->[ZnCl2] R3C-Cl + H2O}' },
    ],
  },

  {
    tag: 'contoh-sintesis-benzena-regioselektivitas-sma',
    tags: ['benzena', 'substitusi-elektrofilik', 'pengarah-orto-para', 'pengarah-meta', 'asam-benzoat', 'kimia-sma'],
    title: 'Contoh Soal 2: Sintesis Regioselektif Turunan Benzena Disubstitusi & Efek Pengarah Orto/Para vs Meta (Level: Sedang-HOTS)',
    summary: 'Analisis strategi urutan reaksi substitusi elektrofilik aromatik (SEAr) dalam sintesis asam p-klorobenzoat dan asam m-klorobenzoat dari toluena.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Dalam industri sintesis obat dan bahan kimia khusus, dua senyawa turunan benzena disubstitusi berikut sangat dibutuhkan:
- **Senyawa P**: Asam $p$-klorobenzoat (asam 4-klorobenzoat)
- **Senyawa Q**: Asam $m$-klorobenzoat (asam 3-klorobenzoat)

Laboratorium menyediakan bahan baku awal yang melimpah, yaitu **Toluena** ($\\ce{C6H5-CH3}$) dan benzena murni, serta beberapa reagen standar:
1. Gas $\\ce{Cl2}$ dengan katalis asam Lewis $\\ce{FeCl3}$ (Reaksi Klorinasi).
2. Campuran $\\ce{HNO3}$ pekat dan $\\ce{H2SO4}$ pekat (Reaksi Nitrasi).
3. Larutan kalium permanganat panas $\\ce{KMnO4 / H+}$ (Reaksi Oksidasi rantai alkil).

Seorang asisten kimia merancang dua jalur sintesis untuk mendapatkan Senyawa P dan Senyawa Q secara selektif dengan rendemen tinggi.

---

### 🎯 Pertanyaan:
1. Analisis sifat elektronik gugus metil ($-\\ce{CH3}$), kloro ($-\\ce{Cl}$), karboksilat ($-\\ce{COOH}$), dan nitro ($-\\ce{NO2}$) pada cincin benzena! Kelompokkan ke dalam gugus pengaktivasi/pendeaktivasi serta tentukan efek pengarah posisinya (orto/para atau meta)!
2. Tuliskan skema urutan langkah reaksi yang benar untuk mensintesis:
   a. **Senyawa P** (Asam $p$-klorobenzoat) dari bahan awal toluena.
   b. **Senyawa Q** (Asam $m$-klorobenzoat) dari bahan awal toluena.
3. Jelaskan kesalahan fatal apa yang terjadi jika urutan langkah pada sintesis Senyawa P dibalik (oksidasi dilakukan terlebih dahulu sebelum klorinasi)!
4. Tuliskan nama IUPAC dan fungsi komersial dari turunan benzena berikut:
   a. Fenol ($\\ce{C6H5-OH}$)
   b. Natrium benzoat ($\\ce{C6H5-COONa}$)
   c. Trinitrotoluena / TNT ($\\ce{C6H2(CH3)(NO2)3}$)

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Analisis Sifat Elektronik & Efek Pengarah Gugus
Pada reaksi Substitusi Elektrofilik Aromatik (SEAr), substituen yang sudah terikat pada cincin benzena mengontrol laju reaksi dan posisi masuknya elektrofil kedua:
1. **Gugus Metil ($-\\ce{CH3}$):**
   - Merupakan gugus pendonor elektron melalui efek induksi positif ($+I$) dan hiperkonjugasi.
   - Bersifat **Pengaktivasi Lemah** cincin benzena dan merupakan **PENGARAH ORTO / PARA**.
2. **Gugus Karboksilat ($-\\ce{COOH}$):**
   - Memiliki atom karbon karbonil yang bermuatan parsial positif ($\\ce{C^{\\delta+}=O}$), menarik elektron cincin melalui efek resonansi negatif ($-M$) dan induksi ($-I$).
   - Bersifat **Pendeaktivasi Kuat** cincin benzena dan merupakan **PENGARAH META**.
3. **Gugus Kloro ($-\\ce{Cl}$):**
   - Menarik elektron melalui efek induksi elektronegatif ($-I$), sehingga bersifat **Pendeaktivasi Lemah**.
   - Namun, pasangan elektron bebas pada atom $\\ce{Cl}$ dapat didonorkan melalui resonansi ($+M$) saat keadaan transisi orto/para, sehingga kloro bertindak unik sebagai **PENGARAH ORTO / PARA**.
4. **Gugus Nitro ($-\\ce{NO2}$):**
   - Penarik elektron sangat kuat ($-M, -I$), bersifat **Pendeaktivasi Kuat** dan **PENGARAH META**.

---

#### Langkah 2: Merancang Rute Sintesis Regioselektif
a. **Sintesis Senyawa P (Asam $p$-klorobenzoat):**
   - Target: Gugus $-\\ce{Cl}$ dan $-\\ce{COOH}$ berada pada posisi saling *para* (1,4).
   - Rencana: Kita harus memanfaatkan sifat pengarah orto/para dari gugus metil ($-\\ce{CH3}$) terlebih dahulu sebelum mengubahnya menjadi $-\\ce{COOH}$.
   - **Langkah 1 (Klorinasi Toluena):**
     $$\\ce{C6H5-CH3 + Cl2 ->[FeCl3] p-klorotoluena + o-klorotoluena + HCl}$$
     *(Isomer para dipisahkan melalui kristalisasi fraksional).*
   - **Langkah 2 (Oksidasi Rantai Alkil):**
     Oksidasi gugus metil pada $p$-klorotoluena dengan $\\ce{KMnO4}$ asam panas:
     $$\\ce{p-Cl-C6H4-CH3 + 3[O] ->[KMnO4, \\Delta / H+] p-Cl-C6H4-COOH + H2O}$$
     *(Menghasilkan asam $p$-klorobenzoat dengan rendemen tinggi).*

b. **Sintesis Senyawa Q (Asam $m$-klorobenzoat):**
   - Target: Gugus $-\\ce{Cl}$ dan $-\\ce{COOH}$ berada pada posisi saling *meta* (1,3).
   - Rencana: Kita harus mengubah gugus metil menjadi gugus karboksilat ($-\\ce{COOH}$) terlebih dahulu, sehingga terbentuk gugus pengarah meta sebelum klorinasi dilakukan.
   - **Langkah 1 (Oksidasi Toluena Menjadi Asam Benzoat):**
     $$\\ce{C6H5-CH3 + 3[O] ->[KMnO4, \\Delta / H+] C6H5-COOH + H2O}$$
   - **Langkah 2 (Klorinasi Asam Benzoat):**
     Gugus $-\\ce{COOH}$ mengarahkan elektrofil kloronium ($\\ce{Cl+}$) secara spesifik ke posisi *meta*:
     $$\\ce{C6H5-COOH + Cl2 ->[FeCl3] m-Cl-C6H4-COOH + HCl}$$
     *(Menghasilkan asam $m$-klorobenzoat sebagai produk dominan).*

---

#### Langkah 3: Evaluasi Jika Urutan Reaksi Dibalik
Jika pada sintesis Senyawa P urutannya dibalik (toluena dioksidasi dulu menjadi asam benzoat, baru kemudian diklorinasi):
- Gugus $-\\ce{COOH}$ yang terbentuk adalah **pengarah meta**.
- Akibatnya, klorinasi akan menghasilkan **asam $m$-klorobenzoat (Senyawa Q)**, BUKAN asam $p$-klorobenzoat (Senyawa P). Sintesis Senyawa P akan gagal total.

---

#### Langkah 4: Identifikasi Turunan Benzena & Manfaatnya
a. **Fenol ($\\ce{C6H5-OH}$):**
   - Sifat: Bersifat asam lemah ($K_a \\approx 10^{-10}$), mampu memerahkan lakmus biru samar-samar, bersifat kaustik.
   - Manfaat: Digunakan sebagai antiseptik/desinfektan (karbol) dan bahan baku pembuatan resin bakelit serta polikarbonat.
b. **Natrium Benzoat ($\\ce{C6H5-COONa}$):**
   - Sifat: Garam yang mudah larut dalam air.
   - Manfaat: Bahan pengawet makanan dan minuman asam (menghambat pertumbuhan khamir dan kapang).
c. **2,4,6-Trinitrotoluena / TNT ($\\ce{C6H2(CH3)(NO2)3}$):**
   - Sifat: Padatan kuning stabil terhadap goncangan mekanik, namun sangat eksplosif bila dipicu detonator.
   - Manfaat: Bahan peledak berkekuatan tinggi untuk keperluan pertambangan dan militer.

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Tabel Pengarah Substitusi Benzena (Wajib Dihafal di UTBK):**
> - **Pengarah Orto/Para (Pendonor Elektron):**
>   $-\\ce{OH}, -\\ce{NH2}, -\\ce{OCH3}, -\\ce{CH3}, -\\ce{R}$ (serta halogen $-\\ce{Cl}, -\\ce{Br}$ walau pendeaktivasi).
> - **Pengarah Meta (Penarik Elektron):**
>   $-\\ce{NO2}, -\\ce{COOH}, -\\ce{CHO}, -\\ce{CO-R}, -\\ce{CN}, -\\ce{SO3H}$.
> - **Kunci Urutan:** Jika produk adalah isomer *orto/para*, pasang substituen pengarah orto/para lebih dulu! Jika produk adalah isomer *meta*, pasang substituen pengarah meta lebih dulu!`,
    keyFormulas: [
      { name: 'Klorinasi Elektrofilik', formula: '\\ce{Ar-H + Cl2 ->[FeCl3] Ar-Cl + HCl}' },
      { name: 'Oksidasi Rantai Samping Toluena', formula: '\\ce{Ar-CH3 + 3[O] ->[KMnO4/H+] Ar-COOH + H2O}' },
      { name: 'Nitrasi Benzena', formula: '\\ce{Ar-H + HNO3 ->[H2SO4] Ar-NO2 + H2O}' },
    ],
  },

  {
    tag: 'contoh-stoikiometri-polimerisasi-nilon-dacron-sma',
    tags: ['polimer-sintetis', 'polimerisasi-kondensasi', 'poliamida', 'poliester', 'derajat-polimerisasi', 'kimia-sma'],
    title: 'Contoh Soal 3: Stoikiometri Polimerisasi Kondensasi Nilon-6,6 & Dacron Serta Analisis Derajat Polimerisasi (Level: HOTS SMA)',
    summary: 'Perhitungan stoikiometri pembentukan poliamida (Nilon-6,6) dan poliester Dacron, massa molekul relatif polimer, derajat polimerisasi (DP), dan eliminasi air.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Industri serat sintetis memproduksi serat tekstil poliamida unggul yaitu **Nilon-6,6** melalui polimerisasi kondensasi antara:
1. **1,6-Diaminoheksana** (heksametilendiamina, $\\ce{H2N-(CH2)6-NH2}$, massa molar $M_1 = 116.21\\text{ g/mol}$).
2. **Asam 1,6-heksanadioat** (asam adipat, $\\ce{HOOC-(CH2)4-COOH}$, massa molar $M_2 = 146.14\\text{ g/mol}$).

Dalam satu tangki reaktor industri, direaksikan $116.21\\text{ kg}$ 1,6-diaminoheksana dengan $146.14\\text{ kg}$ asam adipat dalam perbandingan mol equimolar $1 : 1$.
Reaksi dibiarkan berlangsung pada temperatur $280^\\circ\\text{C}$ di bawah vakum untuk menguapkan molekul air yang terbentuk hingga diperoleh rantai polimer dengan **derajat polimerisasi rata-rata ($DP$ / nilai $n$) sebesar $n = 500$**.

Diketahui massa atom relatif ($A_r$): $\\ce{H} = 1.008, \\ce{C} = 12.011, \\ce{N} = 14.007, \\ce{O} = 15.999\\text{ g/mol}$.

---

### 🎯 Pertanyaan:
1. Tuliskan persamaan reaksi polimerisasi kondensasi pembentukan Nilon-6,6 lengkap dengan struktur unit berulang (*repeating unit*) dan molekul sampingan yang dieliminasi!
2. Hitung massa molar satu unit berulang ($M_{\\text{repeat}}$) Nilon-6,6!
3. Tentukan massa molar rata-rata rantai polimer ($M_n$) Nilon-6,6 pada derajat polimerisasi $n = 500$!
4. Hitung massa total air ($\\ce{H2O}$) yang tereliminasi dan teruapkan dari tangki reaktor selama polimerisasi tersebut!
5. Jelaskan perbedaan struktural ikatan penghubung antara polimer **Nilon-6,6** (poliamida) dengan serat sintetik **Dacron (PET)** (poliester)!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Persamaan Reaksi Polimerisasi Kondensasi
Reaksi kondensasi terjadi antara gugus karboksilat ($-\\ce{COOH}$) asam adipat dan gugus amina ($-\\ce{NH2}$) heksametilendiamina membentuk ikatan amida/peptida ($\\ce{-CO-NH-}$):
$$n\\,\\ce{H2N-(CH2)6-NH2} + n\\,\\ce{HOOC-(CH2)4-COOH} \\longrightarrow \\ce{H-[HN-(CH2)6-NH-CO-(CH2)4-CO]_n-OH} + (2n - 1)\\,\\ce{H2O}$$

Unit berulang (*repeating unit*) di dalam tanda kurung kurawal adalah:
$$\\mathbf{\\ce{[-HN-(CH2)6-NH-CO-(CH2)4-CO-]}}$$

---

#### Langkah 2: Menghitung Massa Molar Unit Berulang ($M_{\\text{repeat}}$)
Formula unit berulang Nilon-6,6 adalah $\\ce{C12 H22 N2 O2}$:
- Jumlah atom:
  - $\\ce{C} = 6 + 4 + 2 = 12$
  - $\\ce{H} = 1 + 12 + 1 + 8 = 22$
  - $\\ce{N} = 2$
  - $\\ce{O} = 2$
- Massa molar unit berulang:
  $$M_{\\text{repeat}} = (12 \\times 12.011) + (22 \\times 1.008) + (2 \\times 14.007) + (2 \\times 15.999)$$
  $$M_{\\text{repeat}} = 144.132 + 22.176 + 28.014 + 31.998 = \\mathbf{226.32\\text{ g/mol}}$$
*(Catatan praktis: $M_{\\text{repeat}} = M_{\\text{diamina}} + M_{\\text{adipat}} - 2 \\times M_{\\ce{H2O}} = 116.21 + 146.14 - 36.03 = 226.32\\text{ g/mol}$).*

---

#### Langkah 3: Menentukan Massa Molar Rata-Rata Polimer ($M_n$)
Rantai polimer terdiri atas $n$ unit berulang ditambah gugus ujung $\\ce{H-}$ (pada satu ujung) dan $\\ce{-OH}$ (pada ujung lainnya) yang setara dengan satu molekul $\\ce{H2O}$ ($18.015\\text{ g/mol}$):
$$M_n = n \\times M_{\\text{repeat}} + M_{\\ce{H2O}}$$
Untuk derajat polimerisasi $n = 500$:
$$M_n = (500 \\times 226.32\\text{ g/mol}) + 18.015\\text{ g/mol}$$
$$M_n = 113.160 + 18.015 = \\mathbf{113.178\\text{ g/mol}} \\approx 1.13 \\times 10^5\\text{ g/mol}$$

---

#### Langkah 4: Menghitung Massa Air yang Tereliminasi
1. Mol bahan awal dalam reaktor:
   - Mol heksametilendiamina:
     $$n_{\\text{diamina}} = \\frac{116.21\\text{ kg}}{116.21\\text{ kg/kmol}} = 1.000\\text{ kmol} = 1.000\\text{ mol}$$
   - Mol asam adipat:
     $$n_{\\text{adipat}} = \\frac{146.14\\text{ kg}}{146.14\\text{ kg/kmol}} = 1.000\\text{ kmol} = 1.000\\text{ mol}$$
2. Reaksi berlangsung equimolar sempurna ($1.000\\text{ kmol}$ masing-masing monomer).
3. Setiap pembentukan 1 unit berulang melepaskan 2 molekul $\\ce{H2O}$ (untuk rantai panjang di mana $n \\gg 1$, $(2n-1)/n \\approx 2$):
   $$n_{\\ce{H2O, terlepas}} = 2 \\times 1.000\\text{ kmol} = 2.000\\text{ kmol air}$$
4. Massa total air yang tereliminasi:
   $$m_{\\ce{H2O}} = 2.000\\text{ kmol} \\times 18.015\\text{ kg/kmol} = \\mathbf{36.03\\text{ kg Air}}$$
*(Hukum Kekekalan Massa: Massa polimer kering $= 116.21 + 146.14 - 36.03 = 226.32\\text{ kg Nilon-6,6}$).*

---

#### Langkah 5: Perbandingan Nilon-6,6 vs Dacron (PET)
- **Nilon-6,6 (Poliamida):**
  - Ikatan penghubung utama: **Ikatan Amida** ($\\mathbf{\\ce{-CO-NH-}}$).
  - Ikatan amida memiliki dipol kuat dan mampu membentuk **ikatan hidrogen antar-rantai** yang sangat rapat dan kuat, menjadikan serat nilon sangat kenyal, ulet, dan tahan abrasi.
- **Dacron / PET (Poliester):**
  - Terbentuk dari asam tereftalat (asam 1,4-benzenadikarboksilat) dan etilen glikol (1,2-etandiol).
  - Ikatan penghubung utama: **Ikatan Ester** ($\\mathbf{\\ce{-CO-O-}}$).
  - Tidak membentuk ikatan hidrogen antar-rantai (hanya gaya dipol-dipol), sehingga poliester memiliki sifat hidrofobik tinggi (cepat kering, tidak mudah kusut).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Trik Mengingat Penamaan Nilon-6,6:**
> Angka "6,6" menandakan bahwa monomer diamina memiliki **6 atom karbon** (heksametilendiamina) dan monomer asam dikarboksilat juga memiliki **6 atom karbon** (asam adipat). Bandingkan dengan Nilon-6 yang dibentuk dari satu jenis monomer bersiklik 6 karbon (kaprolaktam).`,
    keyFormulas: [
      { name: 'Massa Molar Rata-rata Polimer Kondensasi', formula: 'M_n = n \\times M_{\\text{repeat}} + M_{\\text{ujung}}' },
      { name: 'Massa Molar Unit Berulang Nilon-6,6', formula: 'M_{\\text{repeat}} = M_{\\text{diamina}} + M_{\\text{dikarboksilat}} - 2 M_{\\ce{H2O}}' },
      { name: 'Unit Berulang Dacron (PET)', formula: '\\ce{[-O-CH2-CH2-O-CO-C6H4-CO-]}' },
    ],
  },

  {
    tag: 'contoh-identifikasi-biomolekul-makanan-sma',
    tags: ['biomolekul', 'karbohidrat', 'protein', 'uji-biuret', 'saponifikasi-lipid', 'titik-isoelektrik', 'kimia-sma'],
    title: 'Contoh Soal 4: Matriks Identifikasi Biomolekul (Karbohidrat, Protein, Lemak) & Analisis Titik Isolistrik Asam Amino (Level: Sedang-HOTS)',
    summary: 'Investigasi kualitatif makronutrien pangan melalui uji Molisch, Lugol, Benedict, Biuret, Xantoproteat, dan Timbal Asetat serta kalkulasi titik isolistrik asam amino asam.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Dalam praktikum biokimia makanan, seorang siswa menganalisis 4 sampel bahan pangan tidak berlabel (**Sampel A, B, C, dan D**) menggunakan serangkaian reagen uji spesifik. Data hasil uji dirangkum dalam tabel berikut:

| Pengujian Laboratorium | Sampel A | Sampel B | Sampel C | Sampel D |
| :--- | :--- | :--- | :--- | :--- |
| **Uji Molisch** ($\\alpha$-naftol + $\\ce{H2SO4}$) | Cincin ungu di batas cairan | Cincin ungu di batas cairan | Tidak berwarna (negatif) | Tidak berwarna (negatif) |
| **Uji Iodin / Lugol** | Biru kehitaman pekat | Kuning kecokelatan (negatif) | Negatif | Negatif |
| **Uji Benedict** | Biru jernih (negatif) | Endapan merah bata ($\\ce{Cu2O}$) | Biru jernih (negatif) | Negatif |
| **Uji Barfoed** | Negatif | Negatif dalam 2 menit; Mengendap merah setelah 10 menit dididihkan | Negatif | Negatif |
| **Uji Biuret** ($\\ce{CuSO4 + NaOH}$) | Biru terang (negatif) | Biru terang (negatif) | Warna ungu tua pekat | Biru terang (negatif) |
| **Uji Xantoproteat** ($\\ce{HNO3}$ pekat) | Negatif | Negatif | Endapan kuning berubah menjadi jingga saat ditambah amonia | Negatif |
| **Uji Timbal Asetat** [$\\ce{Pb(CH3COO)2}$] | Negatif | Negatif | Endapan hitam pekat ($\\ce{PbS}$) | Negatif |
| **Kelarutan dalam Air & Pelarut Nonpolar** | Larut parsial (suspensi) | Larut sempurna | Larut | Tidak larut air; Larut sempurna dalam kloroform |
| **Uji Penyabunan ($\\ce{NaOH}$ panas)** | Tidak ada buih | Tidak ada buih | Tidak ada buih | Menghasilkan larutan yang sangat berbuih |

---

### 🎯 Pertanyaan:
1. Berdasarkan data matriks pengujian di atas, identifikasi jenis golongan biomolekul spesifik yang terkandung dalam Sampel A, B, C, dan D!
2. Pada Sampel C:
   a. Gugus kimia apakah yang dideteksi oleh Uji Biuret? Mengapa asam amino bebas (misalnya glisin murni) tidak memberikan warna ungu pada uji ini?
   b. Mengapa uji Xantoproteat menghasilkan warna jingga?
   c. Asam amino apa yang menyebabkan terbentuknya endapan hitam pada uji Timbal Asetat?
3. Sampel C setelah dihidrolisis sempurna menghasilkan asam amino asam aspartat. Diketahui asam aspartat memiliki 3 nilai $pK_a$:
   $$pK_{a1} (\\alpha\\text{-COOH}) = 2.09, \\quad pK_{a2} (\\beta\\text{-COOH}) = 3.86, \\quad pK_{a3} (\\alpha\\text{-NH}_3^+) = 9.82$$
   Hitung nilai **titik isolistrik ($pI$)** asam aspartat dan gambarkan struktur spesi ion zwitter-nya pada kondisi $pI$!
4. Pada Sampel D, tuliskan reaksi kimia hidrolisis basa (saponifikasi) antara gliseril tripalmitin (trigliserida jenuh $\\ce{C51H98O6}$) dengan larutan $\\ce{NaOH}$!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Deduksi Golongan Biomolekul Setiap Sampel
1. **Sampel A:**
   - Molisch ($+$ cincin ungu) $\\implies$ Mengandung **Karbohidrat**.
   - Iodin/Lugol ($+$ biru kehitaman) $\\implies$ Karbohidrat tersebut adalah polisakarida **Amilum (Pati)**.
   - Benedict ($-$) mengonfirmasi bahwa amilum bukan gula pereduksi.
   - **Kesimpulan: Sampel A adalah Amilum / Pati.**

2. **Sampel B:**
   - Molisch ($+$) $\\implies$ Mengandung **Karbohidrat**.
   - Iodin ($-$) $\\implies$ Bukan amilum/polisakarida.
   - Benedict ($+$ endapan merah bata) $\\implies$ Merupakan **Gula Pereduksi**.
   - Uji Barfoed membedakan monosakarida vs disakarida: Monosakarida mereduksi Barfoed dalam waktu singkat ($< 2 - 3\\text{ menit}$), sedangkan disakarida baru mereduksi setelah hidrolisis pemanasan lama ($> 5 - 10\\text{ menit}$).
   - Karena Sampel B baru mengendap setelah 10 menit $\\implies$ Sampel B adalah **Disakarida Pereduksi (seperti Maltosa atau Laktosa)**.

3. **Sampel C:**
   - Molisch ($-$) $\\implies$ Bukan karbohidrat.
   - Biuret ($+$ ungu tua pekat) $\\implies$ Mengandung **Protein (Polipeptida)** dengan ikatan peptida.
   - Xantoproteat ($+$ kuning ke jingga) $\\implies$ Mengandung asam amino dengan **cincin benzena aromatik** (seperti Tirosin, Triptofan, atau Fenilalanin).
   - Timbal Asetat ($+$ endapan hitam $\\ce{PbS}$) $\\implies$ Mengandung asam amino yang memiliki **atom belerang ($\ce{S}$)** (seperti Sistein atau Metionin).
   - **Kesimpulan: Sampel C adalah Protein Lengkap yang mengandung asam amino aromatik dan belerang.**

4. **Sampel D:**
   - Tidak larut dalam air, larut dalam kloroform (pelarut organik nonpolar).
   - Uji penyabunan dengan $\\ce{NaOH}$ menghasilkan zat berbuih (sabun).
   - **Kesimpulan: Sampel D adalah Lemak / Minyak (Trigliserida Lipid).**

---

#### Langkah 2: Mekanisme Reaksi Biokimia Sampel C
a. **Uji Biuret:**
   - Mendeteksi adanya **Ikatan Peptida ($\\ce{-CO-NH-}$)** minimal 2 ikatan peptida (tripeptida ke atas).
   - Kation $\\ce{Cu^2+}$ berkoordinasi dengan 4 atom nitrogen amida dalam suasana basa membentuk ion kompleks tetrakoordinasi berwarna **ungu violet**.
   - Asam amino bebas (seperti glisin tunggal) tidak memiliki ikatan peptida sehingga uji Biuret negatif (tetap biru reagen).
b. **Uji Xantoproteat:**
   - Reaksi nitrasi cincin benzena aromatik asam amino oleh $\\ce{HNO3}$ pekat membentuk senyawa nitro aromatik berwarna kuning.
   - Penambahan basa (amonia/$\\ce{NaOH}$) menyebabkan ionisasi gugus fenolik membentuk garam fenolat yang meredistribusi muatan resonansi sehingga warna berubah menjadi **jingga cerah**.
c. **Uji Timbal Asetat:**
   - Pemanasan protein yang mengandung asam amino **Sistein** dengan basa kuat melepaskan ion sulfida ($\\ce{S^2-}$).
   - Ion $\\ce{S^2-}$ bereaksi seketika dengan kation timbal(II) membentuk endapan hitam timbal(II) sulfida:
     $$\\ce{Pb^2+(aq) + S^2-(aq) -> PbS(s)} \\quad \\text{(endapan hitam)}$$

---

#### Langkah 3: Menghitung Titik Isolistrik ($pI$) Asam Aspartat
Asam aspartat adalah asam amino asam dengan rumus rantai samping $-\\ce{CH2-COOH}$.
Tahapan ionisasinya:
1. $\\ce{H3A+} \\xrightleftharpoons{pK_{a1}=2.09} \\ce{H2A^\\pm} + \\ce{H+}$ (Bentuk Kation, muatan $+1$)
2. $\\ce{H2A^\\pm} \\xrightleftharpoons{pK_{a2}=3.86} \\ce{HA^-} + \\ce{H+}$ (Bentuk Zwitter-ion, muatan $0$)
3. $\\ce{HA^-} \\xrightleftharpoons{pK_{a3}=9.82} \\ce{A^2-} + \\ce{H+}$ (Bentuk Anion, muatan $-2$)

Spesi zwitter-ion bermuatan nol ($\\ce{H2A^\\pm}$) diapit oleh dua kesetimbangan asam: $pK_{a1}$ dan $pK_{a2}$.
Oleh karena itu, titik isolistrik ($pI$) adalah rata-rata aritmatik dari $pK_{a1}$ dan $pK_{a2}$:
$$pI = \\frac{pK_{a1} + pK_{a2}}{2} = \\frac{2.09 + 3.86}{2} = \\frac{5.95}{2} = \\mathbf{2.98}$$

**Struktur Zwitter-ion pada $pI = 2.98$:**
Gugus $\\alpha\\text{-COOH}$ terdeprotonasi menjadi $-\\ce{COO-}$, gugus $\\alpha\\text{-NH2}$ terprotonasi menjadi $-\\ce{NH3+}$, sedangkan rantai samping $\\beta\\text{-COOH}$ tetap netral:
$$\\mathbf{\\ce{+H3N-CH(CH2COOH)-COO-}}$$
*(Muatan bersih: $(+1) + (-1) = 0$).*

---

#### Langkah 4: Reaksi Saponifikasi Sampel D (Tripalmitin)
Gliseril tripalmitin (ester tri-palmitat gliserol, $\\ce{C3H5(OOC-C15H31)3}$) dihidrolisis oleh 3 molekul $\\ce{NaOH}$:
$$\\ce{C3H5(OOC-C15H31)3 + 3NaOH ->[\\Delta] C3H5(OH)3 + 3C15H31-COONa}$$
- **Produk:**
  1. $\\ce{C3H5(OH)3}$: Gliserol (1,2,3-propanatriol).
  2. $\\ce{C15H31-COONa}$: Natrium palmitat (sabun padat pembuih).

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Rumus Cepat Menghitung $pI$ Asam Amino di Ujian:**
> 1. **Asam Amino Netral (misal Alanin):** $pI = \\frac{pK_{a1} + pK_{a2}}{2}$.
> 2. **Asam Amino Asam (Aspartat, Glutamat):** $pI = \\frac{pK_{a1} + pK_{aR}}{2}$ (rata-rata 2 nilai $pK_a$ terendah).
> 3. **Asam Amino Basa (Lisin, Arginin, Histidin):** $pI = \\frac{pK_{aR} + pK_{a2}}{2}$ (rata-rata 2 nilai $pK_a$ tertinggi).`,
    keyFormulas: [
      { name: 'Titik Isolistrik Asam Amino Asam', formula: 'pI = \\frac{pK_{a1} + pK_{aR}}{2}' },
      { name: 'Reaksi Saponifikasi Trigliserida', formula: '\\ce{Trigliserida + 3NaOH -> Gliserol + 3Sabun (R-COONa)}' },
      { name: 'Uji Biuret Kompleks Tembaga', formula: '\\ce{Cu^2+ + 4 N_{amida} -> [Cu(N_amida)4]^2+ (Ungu)}' },
    ],
  },

  {
    tag: 'contoh-stereokimia-cip-sekuensing-peptida-sma',
    tags: ['stereokimia', 'aturan-cip', 'konfigurasi-rs', 'karbon-asimetris', 'oligopeptida', 'sekuensing-asam-amino', 'kimia-sma'],
    title: 'Contoh Soal 5: Konfigurasi Stereokimia R/S Cahn-Ingold-Prelog & Sekuensing Logis Fragmen Peptida (Level: HOTS SMA)',
    summary: 'Penentuan atom C kiral dan konfigurasi absolut R/S asam laktat dan alanin menggunakan aturan CIP serta pemecahan sekuens heksapeptida dari fragmen hidrolisis.',
    content: `### 📋 Skenario Masalah & Data Eksperimen:
Dalam kimia organik modern dan biokimia farmasi, orientasi tiga dimensi gugus atom pada atom karbon kiral (*stereoisomerisme*) serta urutan primer asam amino (*primary sequence*) sangat menentukan aktivitas biologis zat aktif obat dan peptida tubuh.

---

#### 🧪 Bagian I: Stereokimia Asam Laktat & Alanin (Aturan CIP)
Diberikan molekul asam laktat yang memiliki rumus struktur molekul:
$$\\ce{CH3-C^*H(OH)-COOH}$$
Atom $\\ce{C^*}$ adalah atom karbon nomor 2 yang mengikat 4 gugus yang berbeda secara stereokimia.

---

#### 🧩 Bagian II: Sekuensing Logis Fragmen Peptida
Suatu hormon heksapeptida (tersusun atas 6 residu asam amino) dianalisis untuk menentukan urutan primernya.
Asam amino penyusunnya diketahui meliputi: **Alanin (Ala), Glisin (Gly), Leusin (Leu), Fenilalanin (Phe), Tirosin (Tyr), dan Valin (Val)**.
Dilakukan dua eksperimen pemotongan kimia dan enzimatik terpisah:
1. **Analisis Ujung N-Terminal:**
   Uji degradasi Sanger/Edman membuktikan bahwa asam amino ujung N-terminal bebas adalah **Valin (Val)**.
2. **Hidrolisis Enzimatik Kimotripsin:**
   Enzim kimotripsin secara spesifik memotong ikatan peptida pada sisi karboksil ($\ce{-C(=O)-}$) dari asam amino aromatik (**Phe** dan **Tyr**). Hasil pemotongan menghasilkan 3 fragmen:
   - **Fragmen K-1:** Tripeptida yang mengandung asam amino $\\text{Val, Ala, Tyr}$.
   - **Fragmen K-2:** Dipeptida yang mengandung asam amino $\\text{Leu, Phe}$.
   - **Fragmen K-3:** Asam amino bebas tunggal **Glisin (Gly)**.
3. **Hidrolisis Asam Encer Terkendali:**
   Menghasilkan beberapa fragmen peptida pendek tumpang-tindih (*overlapping fragments*):
   - **Fragmen A-1:** Dipeptida $\\text{Tyr-Leu}$
   - **Fragmen A-2:** Tripeptida $\\text{Ala-Tyr-Leu}$
   - **Fragmen A-3:** Dipeptida $\\text{Phe-Gly}$

---

### 🎯 Pertanyaan:
1. Pada molekul asam laktat:
   a. Identifikasi keempat gugus yang terikat langsung pada atom karbon kiral ($\ce{C^*}$)!
   b. Urutkan keempat gugus tersebut dari prioritas tertinggi ($1$) ke terendah ($4$) berdasarkan aturan Cahn-Ingold-Prelog (CIP)!
   c. Jika molekul diproyeksikan dengan gugus prioritas terendah ($-\\ce{H}$) mengarah ke belakang pengamat, dan penomoran $1 \\rightarrow 2 \\rightarrow 3$ memutar searah jarum jam, tentukan konfigurasi stereokimia absolutnya ($R$ atau $S$)!
2. Pada molekul asam amino alanin ($\\ce{CH3-C^*H(NH2)-COOH}$), tentukan urutan prioritas aturan CIP antara gugus $-\\ce{NH2}, -\\ce{COOH}, -\\ce{CH3},$ dan $-\\ce{H}$!
3. Berdasarkan data pemotongan enzimatik dan fragmen tumpang-tindih di Bagian II, susunlah rekonstruksi urutan lengkap heksapeptida tersebut dari ujung N-terminal ke C-terminal!
4. Tentukan jumlah ikatan peptida ($\\ce{-CO-NH-}$) yang terbentuk pada molekul heksapeptida utuh tersebut!

---

### 💡 Pembahasan Langkah demi Langkah:

#### Langkah 1: Aturan Cahn-Ingold-Prelog (CIP) pada Asam Laktat
a. **Keempat gugus pada atom $\\ce{C^*}$:**
   1. Gugus hidroksil: $-\\ce{OH}$
   2. Gugus karboksilat: $-\\ce{COOH}$
   3. Gugus metil: $-\\ce{CH3}$
   4. Atom hidrogen: $-\\ce{H}$

b. **Penentuan Prioritas CIP Berdasarkan Nomor Atom:**
   - **Prioritas 1:** Gugus $-\\ce{OH}$. Atom yang terikat langsung pada C kiral adalah **Oksigen** ($Z = 8$). Karena oksigen memiliki nomor atom tertinggi di antara keempatnya, maka $-\\ce{OH}$ menjadi Prioritas 1.
   - **Membandingkan $-\\ce{COOH}$ vs $-\\ce{CH3}$:** Keduanya terikat melalui atom **Karbon** ($Z = 6$) (seri). Kita bandingkan atom generasi kedua:
     - Pada $-\\ce{COOH}$, karbon mengikat $(\\ce{=O, -OH})$, yang dalam aturan CIP dihitung mengikat tiga atom oksigen $(\\ce{O, O, O})$.
     - Pada $-\\ce{CH3}$, karbon mengikat tiga atom hidrogen $(\\ce{H, H, H})$.
     - Karena atom oksigen ($Z=8$) menang atas hidrogen ($Z=1$), maka $-\\ce{COOH}$ mendapat prioritas lebih tinggi daripada $-\\ce{CH3}$.
     - **Prioritas 2:** Gugus $-\\ce{COOH}$.
     - **Prioritas 3:** Gugus $-\\ce{CH3}$.
   - **Prioritas 4:** Atom hidrogen $-\\ce{H}$ ($Z = 1$, prioritas terendah).
   $$\\mathbf{\\text{Urutan Prioritas CIP: } -\\ce{OH} > -\\ce{COOH} > -\\ce{CH3} > -\\ce{H}}$$

c. **Penentuan Konfigurasi Absolut:**
   Dengan gugus prioritas terendah ($4$, yaitu $-\\ce{H}$) berada di belakang menjauhi pengamat:
   - Arah putaran dari Prioritas $1 \\rightarrow 2 \\rightarrow 3$ ($-\\ce{OH} \\rightarrow -\\ce{COOH} \\rightarrow -\\ce{CH3}$) adalah **searah jarum jam (*clockwise*)**.
   - Berdasarkan konvensi CIP, putaran searah jarum jam dinamakan konfigurasi **$R$ (*Rectus*)**.
   - Jadi, isomer tersebut memiliki konfigurasi absolut **$(R)$-asam laktat**.

---

#### Langkah 2: Urutan Prioritas CIP pada Alanin
Pada molekul alanin $\\ce{CH3-C^*H(NH2)-COOH}$:
1. Atom terikat langsung:
   - $-\\ce{NH2}$: atom $\\ce{N}$ ($Z = 7$)
   - $-\\ce{COOH}$: atom $\\ce{C}$ ($Z = 6$) mengikat $(\\ce{O, O, O})$
   - $-\\ce{CH3}$: atom $\\ce{C}$ ($Z = 6$) mengikat $(\\ce{H, H, H})$
   - $-\\ce{H}$: atom $\\ce{H}$ ($Z = 1$)
2. Karena nitrogen ($Z=7$) memiliki nomor atom lebih tinggi dari karbon ($Z=6$), maka $-\\ce{NH2}$ adalah prioritas 1.
3. Urutan prioritas lengkap:
   $$\\mathbf{1: -\\ce{NH2} \\quad > \\quad 2: -\\ce{COOH} \\quad > \\quad 3: -\\ce{CH3} \\quad > \\quad 4: -\\ce{H}}$$

---

#### Langkah 3: Rekonstruksi Sekuens Logis Heksapeptida
Mari kita susun potongan puzzle biologis ini selangkah demi selangkah:
1. **Ujung N-terminal adalah Val:**
   $$\\text{Val} - [\\dots] - [\\dots] - [\\dots] - [\\dots] - [\\dots]$$
2. **Analisis Fragmen Enzim Kimotripsin:**
   Kimotripsin memotong di sisi C asam amino aromatik ($\text{Phe}$ dan $\text{Tyr}$):
   - **Fragmen K-1 (Val, Ala, Tyr):**
     Karena Val berada di ujung N, dan Tyr adalah asam amino aromatik pemotongan kimotripsin, maka Tyr harus berada di ujung fragmen ini:
     $$\\text{Fragmen K-1} = \\mathbf{\\text{Val-Ala-Tyr}}$$
   - **Fragmen K-2 (Leu, Phe):**
     Karena Phe adalah asam amino aromatik pemotongan kimotripsin, maka Phe harus berada di ujung C fragmen ini:
     $$\\text{Fragmen K-2} = \\mathbf{\\text{Leu-Phe}}$$
   - **Fragmen K-3 (Gly):**
     Asam amino Gly berada di paling ujung akhir peptida (C-terminal), karena tidak dipotong oleh kimotripsin melainkan terlepas sebagai residu sisa.
3. **Konfirmasi dengan Fragmen Tumpang-Tindih (*Overlapping*):**
   - Fragmen A-1: $\\text{Tyr-Leu}$ $\\implies$ membuktikan residu Tyr langsung tersambung dengan Leu!
   - Fragmen A-2: $\\text{Ala-Tyr-Leu}$ $\\implies$ memperkuat sambungan $\\text{Ala-Tyr}$ dengan $\\text{Leu}$.
   - Fragmen A-3: $\\text{Phe-Gly}$ $\\implies$ membuktikan residu Phe langsung tersambung dengan Gly!
4. **Penyusunan Rantai Lengkap (N ke C):**
   $$(\\text{Val-Ala-Tyr}) + (\\text{Leu-Phe}) + (\\text{Gly}) \\implies \\mathbf{\\text{Val-Ala-Tyr-Leu-Phe-Gly}}$$

---

#### Langkah 4: Menghitung Jumlah Ikatan Peptida
Heksapeptida tersusun atas $n = 6$ molekul asam amino.
Jumlah ikatan peptida ($\\ce{-CO-NH-}$) yang terbentuk adalah:
$$\\text{Jumlah ikatan peptida} = n - 1 = 6 - 1 = \\mathbf{5\\text{ ikatan peptida}}$$
Kelima ikatan peptida tersebut adalah:
1. $\\ce{Val-CO-NH-Ala}$
2. $\\ce{Ala-CO-NH-Tyr}$
3. $\\ce{Tyr-CO-NH-Leu}$
4. $\\ce{Leu-CO-NH-Phe}$
5. $\\ce{Phe-CO-NH-Gly}$

---

> [!TIP]
> ### 💡 Bedah Konsep & Trik Ujian SMA (HOTS)
> **Kaidah Emas Menjawab Soal Stereokimia & Sekuensing:**
> 1. **Prioritas CIP:** Selalu bandingkan **Nomor Atom ($Z$)** atom pertama yang terikat, BUKAN massa gugus total! Jika nomor atom seri, bergeraklah satu ikatan ke atom generasi berikutnya.
> 2. **Trik Konfigurasi R/S:** Jika gugus prioritas 4 berada di DEPAN (garis tebal baji), baliklah hasil akhirnya: searah jarum jam menjadi $S$, berlawanan menjadi $R$.
> 3. **Sekuensing Peptida:** Mulailah selalu dari asam amino ujung (N-terminal atau C-terminal), lalu cari fragmen tumpang-tindih (*overlapping*) seperti menyusun potongan domino.`,
    keyFormulas: [
      { name: 'Aturan Cahn-Ingold-Prelog (CIP)', formula: 'Z_1 > Z_2 > Z_3 > Z_4' },
      { name: 'Konfigurasi R/S', formula: '\\text{Clockwise} = R, \\quad \\text{Counter-Clockwise} = S \\quad (\\text{Prioritas 4 di Belakang})' },
      { name: 'Jumlah Ikatan Peptida', formula: '\\text{Ikatan Peptida} = n - 1' },
    ],
  },
];
