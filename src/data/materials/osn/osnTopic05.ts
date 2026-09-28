/**
 * osnTopic05.ts
 * Topik 5: Kesetimbangan Kimia & Larutan
 * Jenjang: OSN / IChO
 */

import type { MaterialItem } from '../../materialsData.ts';

export const OSN_TOPIC_5: MaterialItem = {
    id: 5,
    topic_number: 5,
    title: 'Kesetimbangan Kimia & Larutan',
    slug: 'kesetimbangan-kimia-larutan',
    category: 'Kimia Larutan',
    level: 'OSN',
    readTimeMinutes: 38,
    summary: 'Kajian komprehensif termodinamika kesetimbangan kimia fasa gas dan larutan: hukum aksi massa, tetapan Kc-Kp-Kx, asas Le Chatelier multivariabel, autoionisasi air Kw, spesiasi asam poliprotik fraksi alfa (α), persamaan Henderson-Hasselbalch, indeks kapasitas buffer Van Slyke, titrimetri presisi, hasil kali kelarutan Ksp, efek ion sejenis, pengendapan bertingkat, dan kesetimbangan simultan pembentukan ion kompleks (Kf).',
    allTags: [
      'kesetimbangan-dinamis',
      'hukum-aksi-massa',
      'tetapan-kc-kp',
      'relasi-kp-kc',
      'kesetimbangan-heterogen',
      'asas-le-chatelier',
      'pergeseran-kesetimbangan',
      'faktor-reaksi',
      'penambahan-gas-inert',
      'derivat-van-t-hoff',
      'teori-bronsted-lowry',
      'asam-basa-lewis',
      'autoionisasi-air-kw',
      'skala-ph-poh',
      'kekuatan-asam-relatif',
      'asam-basa-poliprotik',
      'spesiasi-larutan',
      'fraksi-alfa-spesies',
      'garam-amfiprotik',
      'asam-diprotik-triprotik',
      'larutan-penyangga',
      'henderson-hasselbalch',
      'kapasitas-buffer',
      'indeks-van-slyke',
      'buffer-fisiologis',
      'kurva-titrasi-presisi',
      'titik-ekuivalen',
      'indikator-asam-basa',
      'hidrolisis-garam',
      'daerah-buffer-titrasi',
      'ksp-kelarutan',
      'hasil-kali-kelarutan',
      'pengaruh-ion-senama',
      'kuosien-pengendapan-qsp',
      'kelarutan-molar',
      'pengendapan-bertingkat',
      'kelarutan-bergantung-ph',
      'ion-kompleks-kf',
      'pemisahan-kation',
      'kelarutan-kondisional',
      'soal-buffer-karbonat',
      'soal-amfiprotik-glisin',
      'soal-kurva-titrasi',
      'soal-pengendapan-ksp',
      'soal-kompleksasi-agbr',
      'soal-osk',
      'soal-osp',
      'soal-osn',
    ],
    prerequisites: [
      {
        tag: 'kesetimbangan-dinamis-kc-kp',
        tags: ['kesetimbangan-dinamis', 'hukum-aksi-massa', 'tetapan-kc-kp', 'relasi-kp-kc', 'kesetimbangan-heterogen'],
        title: 'Prasyarat 1: Hukum Kesetimbangan Aksi Massa, Tetapan Kc - Kp - Kx, & Kesetimbangan Heterogen',
        summary: 'Dasar termodinamika keadaan setimbang dinamis, formulasi hukum aksi massa Guldberg-Waage, hubungan interkonversi Kc, Kp, dan Kx, serta perlakuan fasa murni.',
        content: `Keadaan kesetimbangan kimia tercapai saat laju reaksi maju ($r_{\\text{fwd}}$) persis sama dengan laju reaksi balik ($r_{\\text{rev}}$), sehingga konsentrasi makroskopis seluruh spesi reaktan dan produk konstan terhadap waktu tanpa ada perubahan netto pada sistem tertutup.

### 1. Hukum Aksi Massa & Tetapan Kesetimbangan ($K_c$ dan $K_p$):
Untuk reaksi umum reversibel fasa gas atau larutan:
$$a\\ce{A} + b\\ce{B} <=> c\\ce{C} + d\\ce{D}$$
Berdasarkan termodinamika potensial kimia ($\\Delta G = 0$), tetapan kesetimbangan konsentrasi molar ($K_c$) didefinisikan sebagai:
$$K_c = \\frac{[\\ce{C}]^c [\\ce{D}]^d}{[\\ce{A}]^a [\\ce{B}]^b}$$
Untuk reaksi fasa gas ideal, tetapan kesetimbangan dinyatakan melalui tekanan parsial ($K_p$):
$$K_p = \\frac{P_{\\ce{C}}^c \\cdot P_{\\ce{D}}^d}{P_{\\ce{A}}^a \\cdot P_{\\ce{B}}^b}$$

---

### 2. Hubungan Interkonversi $K_p$, $K_c$, dan Fraksi Mol $K_x$:
Dengan mensubstitusikan persamaan gas ideal $P_i = \\left(\\frac{n_i}{V}\\right)RT = [i]RT$ ke dalam ekspresi $K_p$:
$$K_p = K_c (RT)^{\\Delta n_g}$$
di mana:
- $\\Delta n_g = (c + d) - (a + b)$ adalah selisih jumlah koefisien stoikiometri gas produk dikurangi reaktan.
- $R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$ atau $8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$ (bergantung pada satuan tekanan $P$).
- $T$ adalah temperatur mutlak dalam Kelvin.

Jika dinyatakan dalam fraksi mol ($x_i = P_i / P_{\\text{tot}}$):
$$K_p = K_x (P_{\\text{tot}})^{\\Delta n_g} \\iff K_x = K_p (P_{\\text{tot}})^{-\\Delta n_g}$$

---

### 3. Aturan Kesetimbangan Heterogen & Nilai Aktivitas Fasa Murni:
Pada reaksi heterogen yang melibatkan lebih dari satu fasa zat, zat murni fasa padat ($s$) dan cairan murni ($l$) memiliki aktivitas termodinamika bernilai tepat satu ($a_i = 1$). Oleh karena itu, konsentrasi padatan dan cairan murni tidak dicantumkan ke dalam rumus $K$:
$$\\ce{CaCO3(s) <=> CaO(s) + CO2(g)} \\implies K_c = [\\ce{CO2}], \\quad K_p = P_{\\ce{CO2}}$$
$$\\ce{NH4HS(s) <=> NH3(g) + H2S(g)} \\implies K_p = P_{\\ce{NH3}} \\cdot P_{\\ce{H2S}}$$

---

### 4. Kuosien Reaksi ($Q$) & Prediksi Kespontanan Arah Pergeseran:
Kuosien reaksi ($Q$) dihitung menggunakan persamaan yang sama persis dengan $K$, tetapi menggunakan konsentrasi sesaat pada keadaan non-kesetimbangan:
- **$Q < K$**: Rasio produk terhadap reaktan masih terlalu kecil. Reaksi spontan berlangsung ke arah kanan ($\\to$) untuk membentuk lebih banyak produk.
- **$Q = K$**: Sistem berada dalam kesetimbangan dinamis sempurna ($\\Delta G = 0$).
- **$Q > K$**: Produk terbentuk berlebih. Reaksi spontan bergeser ke arah kiri ($\\leftarrow$) mengonsumsi produk.`,
        keyFormulas: [
          { name: 'Hubungan Kp dan Kc', formula: 'K_p = K_c (RT)^{\\Delta n_g}' },
          { name: 'Hubungan Kp dan Kx', formula: 'K_p = K_x (P_{\\text{tot}})^{\\Delta n_g}' },
          { name: 'Kespontanan via Kuosien', formula: '\\Delta G = RT \\ln(Q / K)' },
        ],
      },
      {
        tag: 'asas-le-chatelier-faktor-pergeseran',
        tags: ['asas-le-chatelier', 'pergeseran-kesetimbangan', 'faktor-reaksi', 'penambahan-gas-inert', 'derivat-van-t-hoff'],
        title: 'Prasyarat 2: Asas Le Chatelier & Respons Sistem Multivariabel (Konsentrasi, Tekanan, Suhu, Gas Inert)',
        summary: 'Prinsip respon perlawanan sistem kimia terhadap perturbasi eksternal, analisis efek penambahan gas inert volume tetap vs tekanan tetap, dan modulasi temperatur.',
        content: `Asas Le Chatelier menyatakan: *Bila suatu sistem pada kesetimbangan diberikan suatu gangguan (aksi), sistem akan merespon sedemikian rupa untuk meminimalkan pengaruh gangguan tersebut dengan cara menggeser posisi kesetimbangan (reaksi).*

### 1. Pengaruh Konsentrasi Reaktan / Produk:
- Penambahan zat reaktan atau pengurangan zat produk menyebabkan $Q < K$, sehingga sistem merespon dengan bergeser ke kanan ($\\to$).
- Penambahan zat produk atau penarikan reaktan menyebabkan $Q > K$, memaksa sistem bergeser ke kiri ($\\leftarrow$).
- Nilai numerik tetapan kesetimbangan $K$ **tidak berubah** oleh perturbasi konsentrasi pada $T$ konstan.

---

### 2. Pengaruh Tekanan dan Volume (Sistem Gas):
Untuk reaksi dengan $\\Delta n_g \\neq 0$:
- **Volume diperkecil (Tekanan diperbesar):** Kerapatan partikel meningkat. Sistem bergeser ke arah sisi yang memiliki jumlah mol gas ($\\sum n_g$) lebih sedikit guna menurunkan tekanan parsial total.
- **Volume diperbesar (Tekanan diperkecil):** Sistem bergeser ke arah sisi dengan jumlah mol gas lebih banyak.
- Jika $\\Delta n_g = 0$ (contoh: $\\ce{H2(g) + I2(g) <=> 2HI(g)}$), perubahan volume atau tekanan total **sama sekali tidak menggeser kesetimbangan**.

---

### 3. Efek Penambahan Gas Inert (Gas Mulia / $\\ce{Ar}, \\ce{He}, \\ce{N2}$):
Dampak penambahan gas inert sangat bergantung pada batasan kondisi wadah:
1. **Penambahan Gas Inert pada Volume Tetap ($V$ konstan):**
   Tekanan total sistem meningkat ($P_{\\text{tot}} = P_{\\text{reaktan}} + P_{\\text{inert}}$). Namun, karena volume wadah tidak berubah, konsentrasi molar ($n_i / V$) dan tekanan parsial masing-masing gas reaktan ($P_i = [i]RT$) **tetap tidak berubah**. Oleh karena itu:
   $$\\text{Tidak ada pergeseran kesetimbangan sama sekali!}$$
2. **Penambahan Gas Inert pada Tekanan Tetap ($P$ konstan, piston bergerak):**
   Penambahan gas inert memaksa volume wadah membesar ($V$ naik) agar tekanan total tetap konstan. Hal ini mengencerkan seluruh gas reaktif sehingga tekanan parsialnya turun ($P_i = x_i P$). Akibatnya:
   $$\\text{Sistem bergeser ke arah yang memiliki koefisien mol gas lebih besar (efek ekspansi volume).}$$

---

### 4. Pengaruh Suhu & Perubahan Nilai Tetapan Kesetimbangan ($K$):
Suhu adalah satu-satunya variabel yang dapat mengubah nilai numerik tetapan kesetimbangan $K$:
- **Reaksi Eksotermik ($\\Delta H^\\circ < 0$, pelepasan kalor):** Kalor dapat diposisikan di sisi produk. Peningkatan suhu ($T$ naik) menggeser reaksi ke kiri $\\implies K$ menurun.
- **Reaksi Endotermik ($\\Delta H^\\circ > 0$, penyerapan kalor):** Peningkatan suhu menggeser reaksi ke kanan $\\implies K$ meningkat.
Kuantifikasi matematis respon $K$ terhadap suhu diatur oleh Persamaan Isochor Van 't Hoff:
$$\\frac{d \\ln K}{dT} = \\frac{\\Delta H^\\circ}{RT^2} \\iff \\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$

---

### 5. Pengaruh Katalisator:
Katalisator menurunkan energi aktivasi reaksi maju ($E_{a,\\text{fwd}}$) dan reaksi balik ($E_{a,\\text{rev}}$) dengan nilai penurunan yang persis sama ($\\Delta E_a$). Akibatnya:
- Katalisator mempercepat tercapainya keadaan kesetimbangan secara kinetik.
- Katalisator **tidak mengubah posisi kesetimbangan**, tidak mengubah persen hasil reaksi, dan **tidak mengubah nilai tetapan kesetimbangan $K$**.`,
        keyFormulas: [
          { name: 'Isochor Van t Hoff', formula: '\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)' },
        ],
      },
      {
        tag: 'teori-asam-basa-autoionisasi-air',
        tags: ['teori-bronsted-lowry', 'asam-basa-lewis', 'autoionisasi-air-kw', 'skala-ph-poh', 'kekuatan-asam-relatif'],
        title: 'Prasyarat 3: Teori Asam-Basa (Brønsted-Lowry & Lewis), Autoionisasi Air (Kw), dan Skala pH-pOH Presisi',
        summary: 'Kajian konsep transfer proton Brønsted, donor pasangan elektron Lewis, tetapan autoionisasi air Kw terhadap temperatur, serta modulasi skala logaritmik pH.',
        content: `Konsep asam-basa modern berevolusi dari batasan pelarut air Arrhenius menuju transfer partikel universal Brønsted-Lowry dan interaksi orbital donor-akseptor Lewis.

### 1. Teori Asam-Basa Brønsted-Lowry & Pasangan Konjugasi:
- **Asam:** Spesi donor proton ($\\ce{H+}$).
- **Basa:** Spesi akseptor proton ($\\ce{H+}$).
Setiap asam mendonorkan proton menghasilkan basa konjugasinya, dan sebaliknya:
$$\\ce{\\underset{\\text{Asam 1}}{HA} + \\underset{\\text{Basa 2}}{B} <=> \\underset{\\text{Basa Konjugasi 1}}{A^-} + \\underset{\\text{Asam Konjugasi 2}}{BH+}}$$
Kekuatan asam berbanding terbalik dengan kekuatan basa konjugasinya. Asam sangat kuat (seperti $\\ce{HClO4}, \\ce{HCl}$) memiliki basa konjugasi yang sangat lemah (stabil, inert, tidak mengalami hidrolisis).

---

### 2. Teori Asam-Basa Lewis (Donor-Akseptor Pasangan Elektron Bebas):
- **Asam Lewis:** Spesi akseptor pasangan elektron (memiliki orbital kosong berenergi rendah / LUMO), contoh: $\\ce{BF3}, \\ce{AlCl3}, \\ce{Fe^3+}, \\ce{CO2}$.
- **Basa Lewis:** Spesi donor pasangan elektron (memiliki pasangan elektron bebas pada HOMO), contoh: $\\ce{NH3}, \\ce{H2O}, \\ce{OH-}, \\ce{CN-}$.
Pembentukan ikatan kovalen koordinasi (aduk asam-basa):
$$\\ce{BF3 + :NH3 -> F3B<-NH3}$$

---

### 3. Autoionisasi Air ($K_w$) & Ketergantungannya terhadap Temperatur:
Air murni mengalami autoionisasi spontan (autoprotolisis):
$$\\ce{2H2O(l) <=> H3O+(aq) + OH-(aq)} \\quad \\Delta H^\\circ > 0 \\text{ (Endotermik)}$$
Tetapan kesetimbangan autoionisasi air dinyatakan sebagai hasil kali ion air ($K_w$):
$$K_w = [\\ce{H3O+}][\\ce{OH-}] = [\\ce{H+}][\\ce{OH-}]$$
Karena proses autoprotolisis bersifat endotermik ($\\Delta H^\\circ \\approx +55.8\\text{ kJ/mol}$), nilai $K_w$ naik drastis seiring kenaikan temperatur:
- Pada $0^\\circ\\text{C}$: $K_w = 0.114 \\times 10^{-14} \\implies \\text{pH netral} = 7.47$.
- Pada $25.0^\\circ\\text{C}$: $K_w = 1.008 \\times 10^{-14} \\approx 1.00 \\times 10^{-14} \\implies \\text{pH netral} = 7.00$.
- Pada $37.0^\\circ\\text{C}$ (Fisiologis manusia): $K_w = 2.40 \\times 10^{-14} \\implies \\text{pH netral} = -\\log\\sqrt{2.40 \\times 10^{-14}} = 6.81$.
- Pada $100.0^\\circ\\text{C}$: $K_w = 5.13 \\times 10^{-13} \\implies \\text{pH netral} = 6.14$.

*Catatan Kritis Olimpiade:* Pada suhu $37^\\circ\\text{C}$, air murni dengan pH 6.81 adalah netral sempurna, bukan asam, karena $[\\ce{H+}] = [\\ce{OH-}]$.

---

### 4. Skala Logaritmik pH, pOH, dan Hubungan pKa - pKb:
Definisi operasional Sørensen:
$$\\text{pH} = -\\log [\\ce{H+}], \\quad \\text{pOH} = -\\log [\\ce{OH-}]$$
Hubungan fundamental pada $25^\\circ\\text{C}$:
$$\\text{pH} + \\text{pOH} = \\text{p}K_w = 14.00$$
Untuk pasangan asam-basa konjugasi $\\ce{HA / A-}$ dalam air:
$$\\ce{HA(aq) <=> H+(aq) + A-(aq)} \\quad (K_a = \\frac{[\\ce{H+}][\\ce{A-}]}{[\\ce{HA}]})$$
$$\\ce{A-(aq) + H2O(l) <=> HA(aq) + OH-(aq)} \\quad (K_b = \\frac{[\\ce{HA}][\\ce{OH-}]}{[\\ce{A-}]})$$
Mengalikan kedua tetapan kesetimbangan:
$$K_a \\times K_b = K_w \\iff \\text{p}K_a + \\text{p}K_b = \\text{p}K_w = 14.00 \\quad (\\text{pada } 25^\\circ\\text{C})$$`,
        keyFormulas: [
          { name: 'Hasil Kali Ion Air', formula: 'K_w = [\\ce{H+}][\\ce{OH-}]' },
          { name: 'Hubungan Ka dan Kb Konjugasi', formula: 'K_a \\cdot K_b = K_w \\iff \\text{p}K_a + \\text{p}K_b = \\text{p}K_w' },
        ],
      },
    ],
    core_concepts: [
      {
        tag: 'asam-basa-poliprotik-spesiasi-alpha',
        tags: ['asam-basa-poliprotik', 'spesiasi-larutan', 'fraksi-alfa-spesies', 'garam-amfiprotik', 'asam-diprotik-triprotik'],
        title: 'Konsep Inti 1: Spesiasi Asam-Basa Poliprotik, Fraksi Mol Spesies Alpha (α), & pH Garam Amfiprotik',
        summary: 'Penurunan fraksi distribusi spesies alfa (α), kurva spesiasi pH, neraca massa-muatan, dan formulasi eksak pH garam amfiprotik NaHA.',
        content: `Asam poliprotik melepaskan proton secara bertahap dengan tetapan disosiasi bertingkat yang nilainya menurun secara drastis ($K_{a1} \\gg K_{a2} \\gg K_{a3}$) karena semakin sulit menarik proton bermuatan positif dari anion yang muatan negatifnya semakin bertambah besar.

### 1. Disosiasi Bertingkat Asam Diprotik ($\\ce{H2A}$):
Tahap 1: $\\ce{H2A <=> H+ + HA-} \\quad K_{a1} = \\frac{[\\ce{H+}][\\ce{HA-}]}{[\\ce{H2A}]}$
Tahap 2: $\\ce{HA- <=> H+ + A^2-} \\quad K_{a2} = \\frac{[\\ce{H+}][\\ce{A^2-}]}{[\\ce{HA-}]}$

Neraca Massa Total Analit ($C_{\\text{tot}}$):
$$C_{\\text{tot}} = [\\ce{H2A}] + [\\ce{HA-}] + [\\ce{A^2-}]$$

---

### 2. Fraksi Distribusi Spesies Alpha ($\\alpha$):
Fraksi keberadaan masing-masing spesi ($\\alpha_0, \\alpha_1, \\alpha_2$) sebagai fungsi dari konsentrasi $[\\ce{H+}]$ dapat diturunkan dengan menyatakan seluruh spesi dalam $[\\ce{H2A}]$:
$$[\\ce{HA-}] = \\frac{K_{a1}[\\ce{H2A}]}{[\\ce{H+}]}, \\quad [\\ce{A^2-}] = \\frac{K_{a1}K_{a2}[\\ce{H2A}]}{[\\ce{H+}]^2}$$
Penyebut distribusi polinomial ($D$):
$$D = [\\ce{H+}]^2 + K_{a1}[\\ce{H+}] + K_{a1}K_{a2}$$
Maka fraksi spesies ditentukan secara independen dari konsentrasi total:
$$\\alpha_0 = \\frac{[\\ce{H2A}]}{C_{\\text{tot}}} = \\frac{[\\ce{H+}]^2}{D}$$
$$\\alpha_1 = \\frac{[\\ce{HA-}]}{C_{\\text{tot}}} = \\frac{K_{a1}[\\ce{H+}]}{D}$$
$$\\alpha_2 = \\frac{[\\ce{A^2-}]}{C_{\\text{tot}}} = \\frac{K_{a1}K_{a2}}{D}$$
*Sifat Utama:* $\\alpha_0 + \\alpha_1 + \\alpha_2 = 1.00$. Pada $\\text{pH} = \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}$, fraksi $\\alpha_1$ mencapai nilai puncak maksimum.

---

### 3. Penurunan Eksak pH Garam Amfiprotik ($\\ce{NaHA}$):
Anion amfiprotik $\\ce{HA-}$ dapat bertindak sebagai asam (melepas $\\ce{H+}$ via $K_{a2}$) maupun sebagai basa (menerima $\\ce{H+}$ via $K_b = K_w / K_{a1}$).
Persamaan neraca muatan sistem:
$$[\\ce{Na+}] + [\\ce{H+}] = [\\ce{HA-}] + 2[\\ce{A^2-}] + [\\ce{OH-}]$$
Persamaan neraca massa:
$$[\\ce{Na+}] = C = [\\ce{H2A}] + [\\ce{HA-}] + [\\ce{A^2-}]$$
Mengeliminasi $[\\ce{Na+}]$ dan $[\\ce{HA-}]$:
$$[\\ce{H2A}] + [\\ce{H+}] = [\\ce{A^2-}] + [\\ce{OH-}]$$
Substitusi ekspresi $K_{a1}, K_{a2},$ dan $K_w$:
$$\\frac{[\\ce{H+}][\\ce{HA-}]}{K_{a1}} + [\\ce{H+}] = \\frac{K_{a2}[\\ce{HA-}]}{[\\ce{H+}]} + \\frac{K_w}{[\\ce{H+}]}$$
Kalikan kedua ruas dengan $[\\ce{H+}]$ dan kumpulkan suku $[\\ce{H+}]^2$:
$$[\\ce{H+}]^2 \\left(1 + \\frac{[\\ce{HA-}]}{K_{a1}}\\right) = K_{a2}[\\ce{HA-}] + K_w$$
$$[\\ce{H+}] = \\sqrt{\\frac{K_{a1}(K_{a2}[\\ce{HA-}] + K_w)}{K_{a1} + [\\ce{HA-}]}}$$
Untuk larutan garam amfiprotik dengan konsentrasi wajar ($C \\gg K_{a1}$ dan $K_{a2}C \\gg K_w$), dapat diasumsikan $[\\ce{HA-}] \\approx C$:
$$[\\ce{H+}] \\approx \\sqrt{\\frac{K_{a1}K_{a2}C}{C}} = \\sqrt{K_{a1}K_{a2}}$$
$$\\text{pH} \\approx \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}$$
Formula ini membuktikan bahwa pH spesi amfiprotik dalam batas aproksimasi standar **sama sekali tidak bergantung pada konsentrasi analit**.`,
        keyFormulas: [
          { name: 'Fraksi Alfa Asam Diprotik', formula: '\\alpha_1 = \\frac{K_{a1}[\\ce{H+}]}{[\\ce{H+}]^2 + K_{a1}[\\ce{H+}] + K_{a1}K_{a2}}' },
          { name: 'pH Spesi Amfiprotik Eksak', formula: '[\\ce{H+}] = \\sqrt{\\frac{K_{a1}K_{a2}C + K_{a1}K_w}{K_{a1} + C}}' },
          { name: 'Aproksimasi pH Amfiprotik', formula: '\\text{pH} \\approx \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}' },
        ],
      },
      {
        tag: 'larutan-penyangga-kapasitas-van-slyke',
        tags: ['larutan-penyangga', 'henderson-hasselbalch', 'kapasitas-buffer', 'indeks-van-slyke', 'buffer-fisiologis'],
        title: 'Konsep Inti 2: Sistem Penyangga Kompleks, Persamaan Henderson-Hasselbalch, & Indeks Kapasitas Buffer Van Slyke',
        summary: 'Formulasi matematis larutan buffer, indeks kapasitas penyangga diferensial Van Slyke (β), batas operasional buffer, dan mekanisme penyangga terbuka.',
        content: `Larutan penyangga (buffer) adalah larutan yang mampu mempertahankan pH relatif konstan terhadap penambahan sejumlah kecil asam kuat, basa kuat, maupun pengenceran oleh pelarut.

### 1. Formulasi Henderson-Hasselbalch:
Untuk sistem asam lemah $\\ce{HA}$ dan basa konjugasinya $\\ce{A-}$:
$$K_a = \\frac{[\\ce{H+}][\\ce{A-}]}{[\\ce{HA}]} \\iff [\\ce{H+}] = K_a \\cdot \\frac{[\\ce{HA}]}{[\\ce{A-}]}$$
Mengambil nilai $-\\log_{10}$ pada kedua sisi menghasilkan persamaan Henderson-Hasselbalch:
$$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\ce{A-}]}{[\\ce{HA}]}\\right) = \\text{p}K_a + \\log\\left(\\frac{n_{\\ce{A-}}}{n_{\\ce{HA}}}\\right)$$
Karena volume total larutan saling membagi habis, rasio konsentrasi identik dengan rasio mol analit.

---

### 2. Kapasitas Penyangga Kuantitatif (Indeks Van Slyke $\\beta$):
Kapasitas buffer ($\\beta$) didefinisikan secara diferensial oleh Donald Van Slyke sebagai jumlah mol asam kuat ($C_a$) atau basa kuat ($C_b$) per liter yang diperlukan untuk mengubah pH larutan sebesar satu unit:
$$\\beta = \\frac{dC_b}{d\\text{pH}} = -\\frac{dC_a}{d\\text{pH}}$$
Berdasarkan hukum kesetimbangan kimia dan neraca muatan air, nilai $\\beta$ diturunkan menjadi:
$$\\beta = 2.303 \\left( [\\ce{H+}] + [\\ce{OH-}] + \\frac{C_{\\text{tot}} K_a [\\ce{H+}]}{(K_a + [\\ce{H+}])^2} \\right)$$
di mana $C_{\\text{tot}} = [\\ce{HA}] + [\\ce{A-}]$.
- Suku $([\\ce{H+}] + [\\ce{OH-}])$ menunjukkan kapasitas buffer intrinsik pelarut air murni pada pH sangat rendah ($<2$) dan sangat tinggi ($>12$).
- Suku $\\frac{C_{\\text{tot}} K_a [\\ce{H+}]}{(K_a + [\\ce{H+}])^2}$ menunjukkan kontribusi pasangan asam-basa konjugasi.

**Kondisi Kapasitas Maksimum ($\\beta_{\\text{max}}$):**
Nilai $\\beta$ mencapai titik ekstrem maksimum saat $[\\ce{H+}] = K_a$, yang berarti $[\\ce{A-}] = [\\ce{HA}]$ dan $\\text{pH} = \\text{p}K_a$:
$$\\beta_{\\text{max}} = 2.303 \\left( \\frac{C_{\\text{tot}} K_a^2}{(2K_a)^2} \\right) = \\frac{2.303}{4} C_{\\text{tot}} \\approx 0.576 \\cdot C_{\\text{tot}}$$
*Aturan Desain Praktis:* Rentang kerja efektif larutan penyangga adalah $\\text{p}K_a \\pm 1.0$. Di luar rentang ini, rasio basa/asam melampaui $10:1$ atau $1:10$, menyebabkan kapasitas penyangga turun drastis di bawah $33\\%$ dari nilai maksimumnya.

---

### 3. Sistem Buffer Terbuka (*Open System*) vs Tertutup (*Closed System*):
Dalam tabung tertutup, jumlah mol total $C_{\\text{tot}} = [\\ce{H2CO3}] + [\\ce{HCO3-}]$ adalah konstan.
Namun dalam sistem fisiologis plasma darah (suhu $37^\\circ\\text{C}, \\text{pH} = 7.40, \\text{p}K_{a1} = 6.10$), rasio $[\\ce{HCO3-}] / [\\ce{H2CO3}] \\approx 20:1$.
Meskipun rasio ini berada di luar rentang ideal $\\text{p}K_a \\pm 1$, sistem penyangga darah beroperasi sebagai **sistem terbuka**:
$$\\ce{H+(aq) + HCO3-(aq) <=> H2CO3(aq) <=> CO2(g, paru-paru) + H2O(l)}$$
Gas $\\ce{CO2}$ yang terbentuk secara instan dibuang melalui ventilasi pernapasan paru-paru, menjaga konsentrasi $[\\ce{H2CO3}]$ terlarut selalu konstan ($1.2\\text{ mmol/L}$) melalui hukum Henry ($P_{\\ce{CO2}} = 40\\text{ mmHg}$), menghasilkan kapasitas netralisasi asam yang hampir tak terbatas.`,
        keyFormulas: [
          { name: 'Henderson-Hasselbalch', formula: '\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\ce{A-}]}{[\\ce{HA}]}\\right)' },
          { name: 'Indeks Kapasitas Van Slyke', formula: '\\beta = 2.303 \\left( [\\ce{H+}] + [\\ce{OH-}] + \\frac{C_{\\text{tot}} K_a [\\ce{H+}]}{(K_a + [\\ce{H+}])^2} \\right)' },
          { name: 'Kapasitas Buffer Maksimum', formula: '\\beta_{\\text{max}} \\approx 0.576 \\cdot C_{\\text{tot}}' },
        ],
      },
      {
        tag: 'kurva-titrasi-titik-ekuivalen-indikator',
        tags: ['kurva-titrasi-presisi', 'titik-ekuivalen', 'indikator-asam-basa', 'hidrolisis-garam', 'daerah-buffer-titrasi'],
        title: 'Konsep Inti 3: Analisis Titrimetri Presisi, Titik Ekuivalensi vs Titik Akhir, & Teori Indikator pH',
        summary: 'Profil kurva titrasi asam lemah - basa kuat, perhitungan pH pada 4 segmen titrimetri, hidrolisis garam titik ekuivalen, dan kriteria pemilihan indikator.',
        content: `Titrasi asidimetri-alkalimetri melibatkan penambahan titran secara terukur ke dalam analit hingga tercapai titik ekuivalensi stoikiometri, yang ditandai secara visual oleh perubahan warna indikator pada titik akhir titrasi.

### 1. Empat Wilayah Utama Kurva Titrasi Asam Lemah ($\\ce{HA}$) dengan Basa Kuat ($\\ce{NaOH}$):
Misalkan $V_a\\text{ mL}$ asam lemah $\\ce{HA}$ ($C_a\\text{ M}$) dititrasi dengan $\\ce{NaOH}$ ($C_b\\text{ M}$):

1. **Titik Awal Sebelum Titrasi ($V_b = 0$):**
   Larutan hanya mengandung asam lemah $\\ce{HA}$.
   $$[\\ce{H+}] \\approx \\sqrt{K_a \\cdot C_a} \\implies \\text{pH} = \\frac{1}{2}(\\text{p}K_a - \\log C_a)$$
2. **Daerah Penyangga Pra-Ekuivalen ($0 < V_b < V_{eq}$):**
   Sebagian $\\ce{HA}$ dinetralkan menjadi ion $\\ce{A-}$, membentuk sistem buffer:
   $$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{V_b \\cdot C_b}{V_a C_a - V_b C_b}\\right)$$
   *Titik Setengah Ekuivalensi ($V_b = \\frac{1}{2} V_{eq}$):* Jumlah $\\ce{A-}$ sama persis dengan sisa $\\ce{HA} \\implies \\mathbf{\\text{pH} = \\text{p}K_a}$.
3. **Titik Ekuivalensi Stoikiometri ($V_b = V_{eq} = \\frac{V_a C_a}{C_b}$):**
   Seluruh $\\ce{HA}$ bereaksi sempurna membentuk garam $\\ce{NaA}$. Larutan bersifat basa akibat hidrolisis anion asetat:
   $$\\ce{A-(aq) + H2O(l) <=> HA(aq) + OH-(aq)} \\quad (K_b = \\frac{K_w}{K_a})$$
   $$C_{\\text{garam}} = \\frac{V_a C_a}{V_a + V_{eq}}$$
   $$[\\ce{OH-}] = \\sqrt{K_b \\cdot C_{\\text{garam}}} = \\sqrt{\\frac{K_w}{K_a} \\cdot C_{\\text{garam}}}$$
   $$\\text{pH} = 7 + \\frac{1}{2}\\text{p}K_a + \\frac{1}{2}\\log C_{\\text{garam}} > 7.00$$
4. **Daerah Pasca-Ekuivalen ($V_b > V_{eq}$):**
   Kelebihan ion hidroksida dari titran basa kuat mendominasi pH larutan (efek ion $\\ce{OH-}$ bebas jauh melampaui hidrolisis garam):
   $$[\\ce{OH-}] = \\frac{(V_b - V_{eq})C_b}{V_a + V_b} \\implies \\text{pOH} = -\\log[\\ce{OH-}], \\quad \\text{pH} = 14 - \\text{pOH}$$

---

### 2. Teori Kesetimbangan Indikator Asam-Basa & Kesalahan Titrasi:
Indikator visual adalah asam organik lemah ($\\ce{HIn}$) yang memiliki warna berbeda dari basa konjugasinya ($\\ce{In-}$):
$$\\ce{\\underset{\\text{Warna A}}{HIn(aq)} <=> H+(aq) + \\underset{\\text{Warna B}}{In-(aq)}} \\quad K_{\\text{In}} = \\frac{[\\ce{H+}][\\ce{In-}]}{[\\ce{HIn}]}$$
Mata manusia dapat mendeteksi perubahan warna dominan saat salah satu spesi 10 kali lebih pekat dari yang lain:
$$\\text{Trayek pH Indikator} = \\text{p}K_{\\text{In}} \\pm 1.0$$
- **Prinsip Seleksi Indikator:** Nilai $\\text{p}K_{\\text{In}}$ indikator harus berada tepat di tengah lonjakan vertikal kurva titrasi pada titik ekuivalensi.
- Pada titrasi asam lemah dengan basa kuat, titik ekuivalen berada pada $\\text{pH } 8 - 9$. Indikator ideal adalah **Fenolftalein (PP)** ($pK_{\\text{In}} \\approx 9.4$, trayek $8.2 - 10.0$).
- Penggunaan Metil Jingga ($pK_{\\text{In}} \\approx 3.7$, trayek $3.1 - 4.4$) akan menyebabkan kesalahan titrasi (*titration error*) negatif yang masif karena berubah warna jauh sebelum titik ekuivalensi tercapai.`,
        keyFormulas: [
          { name: 'pH Titik Setengah Ekuivalen', formula: '\\text{pH} = \\text{p}K_a' },
          { name: 'pH Titik Ekuivalen Titrasi', formula: '\\text{pH} = 7 + \\frac{1}{2}\\text{p}K_a + \\frac{1}{2}\\log C_{\\text{garam}}' },
        ],
      },
      {
        tag: 'ksp-kelarutan-efek-ion-senama',
        tags: ['ksp-kelarutan', 'hasil-kali-kelarutan', 'pengaruh-ion-senama', 'kuosien-pengendapan-qsp', 'kelarutan-molar'],
        title: 'Konsep Inti 4: Termodinamika Kelarutan, Hasil Kali Kelarutan (Ksp), & Penekanan Efek Ion Senama',
        summary: 'Termodinamika disosiasi garam sukar larut, perbandingan kelarutan molar antar stoikiometri kisi, dan supresi kelarutan oleh keberadaan ion sejenis.',
        content: `Kelarutan zat padat ionik dalam air diatur oleh kesetimbangan heterogen dinamis antara kisi kristal padat yang tidak larut dan ion-ion terhidrasi dalam larutan jenuh.

### 1. Tetapan Hasil Kali Kelarutan ($K_{sp}$):
Untuk garam biner maupun poliatomik terlarut sedikit:
$$\\ce{A_x B_y(s) <=> x A^{y+}(aq) + y B^{x-}(aq)}$$
Karena padatan murni memiliki aktivitas $a_{\\ce{A_x B_y}} = 1$:
$$K_{sp} = [\\ce{A^{y+}}]^x [\\ce{B^{x-}}]^y$$

---

### 2. Hubungan Kelarutan Molar ($s$) dengan $K_{sp}$:
Jika kelarutan molar garam adalah $s\\text{ mol/L}$:
- **Tipe $AB$ (contoh $\\ce{AgCl}, \\ce{BaSO4}$):**
  $[\\ce{A+}] = s, [\\ce{B-}] = s \\implies K_{sp} = s^2 \\iff s = \\sqrt{K_{sp}}$
- **Tipe $AB_2$ atau $A_2B$ (contoh $\\ce{PbCl2}, \\ce{Ag2CrO4}, \\ce{CaF2}$):**
  $[\\ce{A^2+}] = s, [\\ce{B-}] = 2s \\implies K_{sp} = (s)(2s)^2 = 4s^3 \\iff s = \\sqrt[3]{\\frac{K_{sp}}{4}}$
- **Tipe $AB_3$ atau $A_3B$ (contoh $\\ce{Fe(OH)3}, \\ce{Al(OH)3}$):**
  $[\\ce{A^3+}] = s, [\\ce{B-}] = 3s \\implies K_{sp} = (s)(3s)^3 = 27s^4 \\iff s = \\sqrt[4]{\\frac{K_{sp}}{27}}$
- **Tipe $A_2B_3$ atau $A_3B_2$ (contoh $\\ce{Bi2S3}, \\ce{Ca3(PO4)2}$):**
  $[\\ce{A^3+}] = 2s, [\\ce{B^2-}] = 3s \\implies K_{sp} = (2s)^2(3s)^3 = 108s^5 \\iff s = \\sqrt[5]{\\frac{K_{sp}}{108}}$

*Peringatan Olimpiade:* Jangan pernah membandingkan kelarutan dua garam hanya dari nilai $K_{sp}$ jika tipe stoikiometrinya berbeda! Misalnya, $\\ce{AgCl}$ ($K_{sp} = 1.8 \\times 10^{-10} \\implies s = 1.34 \\times 10^{-5}\\text{ M}$) lebih sukar larut dibandingkan $\\ce{Ag2CrO4}$ ($K_{sp} = 1.1 \\times 10^{-12} \\implies s = 6.5 \\times 10^{-5}\\text{ M}$), meskipun nilai numerik $K_{sp}(\\ce{Ag2CrO4})$ jauh lebih kecil.

---

### 3. Penekanan Kelarutan oleh Efek Ion Senama (*Common Ion Effect*):
Bila ke dalam larutan jenuh garam ditambahkan ion yang sama dari sumber elektrolit kuat lain, menurut Asas Le Chatelier kesetimbangan akan bergeser ke kiri, menurunkan kelarutan molar garam secara drastis.
*Contoh:* Kelarutan $\\ce{AgCl}$ ($K_{sp} = 1.8 \\times 10^{-10}$) dalam larutan $\\ce{NaCl}$ $0.10\\text{ M}$:
$$[\\ce{Cl-}] = 0.10 + s' \\approx 0.10\\text{ M}$$
$$K_{sp} = [\\ce{Ag+}][\\ce{Cl-}] = s'(0.10) = 1.8 \\times 10^{-10} \\implies s' = 1.8 \\times 10^{-9}\\text{ M}$$
Kelarutan $\\ce{AgCl}$ turun drastis hampir 10.000 kali lipat dibanding dalam air murni ($1.34 \\times 10^{-5}\\text{ M}$).`,
        keyFormulas: [
          { name: 'Ksp Tipe AB2', formula: 'K_{sp} = 4s^3' },
          { name: 'Ksp Tipe A2B3', formula: 'K_{sp} = 108s^5' },
        ],
      },
      {
        tag: 'pengendapan-bertingkat-kelarutan-ph-kompleks',
        tags: ['pengendapan-bertingkat', 'kelarutan-bergantung-ph', 'ion-kompleks-kf', 'pemisahan-kation', 'kelarutan-kondisional'],
        title: 'Konsep Inti 5: Pengendapan Bertingkat (Fraksional), Kelarutan Bergantung pH, & Kesetimbangan Ion Kompleks (Kf)',
        summary: 'Pemisahan kation selektif via pengendapan bertingkat, kelarutan garam basa/asam terhadap pH larutan, dan pelarutan endapan melalui pembentukan ligan koordinasi kompleks.',
        content: `Dalam analisis kualitatif dan kuantitatif olimpiade, manipulasi kelarutan dilakukan melalui tiga teknik esensial: pengendapan bertingkat, kontrol keasaman pelarut, dan penambahan ligan pengompleks.

### 1. Pengendapan Bertingkat (Fraksional):
Bila suatu reagen pengendap diteteskan perlahan ke dalam larutan yang mengandung campuran beberapa kation, kation yang memerlukan konsentrasi reagen terendah untuk mencapai $Q_{sp} = K_{sp}$ akan mengendap terlebih dahulu secara selektif.
Pemisahan analitis kuantitatif dianggap sempurna jika kation pertama telah mengendap lebih dari $99.9\\%$ sebelum kation kedua mulai mengendap.

---

### 2. Kelarutan yang Bergantung pada pH:
Jika anion penyusun garam sukar larut merupakan basa konjugasi dari asam lemah (misal $\\ce{F-}, \\ce{CO3^2-}, \\ce{C2O4^2-}, \\ce{S^2-}, \\ce{OH-}$), penambahan asam kuat (penurunan pH) akan mengonsumsi anion tersebut melalui protonasi:
$$\\ce{CaF2(s) <=> Ca^2+(aq) + 2F-(aq)}$$
$$\\ce{F-(aq) + H+(aq) <=> HF(aq)}$$
Penurunan konsentrasi $[\\ce{F-}]$ menggeser kesetimbangan pelarutan ke kanan sehingga kelarutan garam meningkat secara eksponensial terhadap penurunan pH.
Kelarutan kondisional ($s$) dapat dihitung menggunakan fraksi mol alfa ($\\alpha_1$):
$$[\\ce{F-}]_{\\text{bebas}} = \\alpha_1 \\cdot 2s = \\left(\\frac{K_a}{[\\ce{H+}] + K_a}\\right) 2s$$
$$K_{sp} = [\\ce{Ca^2+}][\\ce{F-}]^2 = (s)\\left(2s \\cdot \\frac{K_a}{[\\ce{H+}] + K_a}\\right)^2 \\implies s = \\sqrt[3]{\\frac{K_{sp}}{4 \\alpha_1^2}}$$

Sebaliknya, garam dari asam kuat seperti $\\ce{AgCl}$ (di mana $\\ce{Cl-}$ adalah basa konjugasi dari asam kuat $\\ce{HCl}$) **tidak terpengaruh** oleh penambahan asam karena ion klorida tidak mengalami protonasi yang signifikan.

---

### 3. Pelarutan Endapan via Pembentukan Ion Kompleks ($K_f$):
Banyak endapan sukar larut dapat larut kembali jika ditambahkan ligan pembentuk senyawa koordinasi (seperti $\\ce{NH3}, \\ce{CN-}, \\ce{S2O3^2-}, \\ce{EDTA^4-}$):
$$\\ce{AgCl(s) <=> Ag+(aq) + Cl-(aq)} \\quad K_{sp} = 1.8 \\times 10^{-10}$$
$$\\ce{Ag+(aq) + 2NH3(aq) <=> [Ag(NH3)2]+(aq)} \\quad K_f = 1.7 \\times 10^7$$
Reaksi pelarutan keseluruhan:
$$\\ce{AgCl(s) + 2NH3(aq) <=> [Ag(NH3)2]+(aq) + Cl-(aq)}$$
Tetapan kesetimbangan pelarutan gabungan ($K$):
$$K = K_{sp} \\times K_f = (1.8 \\times 10^{-10})(1.7 \\times 10^7) = 3.06 \\times 10^{-3}$$
Karena nilai $K$ yang cukup besar, endapan putih $\\ce{AgCl}$ larut sempurna dalam amonia encer membentuk ion diamina perak(I).`,
        keyFormulas: [
          { name: 'Tetapan Kesetimbangan Pelarutan Kompleks', formula: 'K = K_{sp} \\times K_f' },
          { name: 'Kelarutan Bergantung pH', formula: 's = \\sqrt[x+y]{\\frac{K_{sp}}{x^x y^y \\cdot (\\alpha_{\\text{anion}})^y}}' },
        ],
      },
    ],
    worked_examples: [
      {
        tag: 'soal-buffer-karbonat-darah',
        tags: ['soal-osk', 'buffer-karbonat', 'kesetimbangan-asam-basa', 'fisiologi-darah', 'henderson-hasselbalch'],
        title: 'Contoh Soal OSK 1: Analisis Kuantitatif Buffer Bikarbonat Darah & Respon Terbuka Pulmonal',
        summary: 'Perhitungan rasio fisiologis penyangga bikarbonat pada pH 7.40 dan perbandingan kapasitas dapar sistem tertutup versus sistem terbuka.',
        content: `### Soal:
Plasma darah manusia normal memiliki pH fisiologis terukur sebesar $7.40$ pada temperatur tubuh $37.0^\\circ\\text{C}$. Sistem penyangga utama dalam plasma adalah pasangan asam-basa $\\ce{CO2(aq) / HCO3-(aq)}$, di mana gas $\\ce{CO2}$ terlarut berada dalam kesetimbangan dengan asam karbonat:
$$\\ce{CO2(aq) + H2O(l) <=> H2CO3(aq)}$$
Kombinasi kedua tahap kesetimbangan dinyatakan dengan $pK_a' = 6.10$. Konsentrasi bikarbonat $[\\ce{HCO3-}]$ dalam plasma adalah $24.0\\text{ mmol/L}$.

**Pertanyaan:**
1. Hitung rasio molar $[\\ce{HCO3-}] / [\\ce{CO2(aq)}]$ dan konsentrasi efektif $[\\ce{CO2(aq)}]$ dalam plasma!
2. Jika akibat aktivitas anaerobik otot dihasilkan asam laktat (asam kuat) yang melepaskan $5.0\\text{ mmol/L}$ ion $\\ce{H+}$ ke dalam darah, hitung pH darah akhir jika sistem dianggap sebagai **sistem tertutup** (tanpa ventilasi paru-paru)!
3. Hitung pH darah jika sistem bekerja sebagai **sistem terbuka**, di mana ventilasi paru-paru menjaga konsentrasi $[\\ce{CO2(aq)}]$ tetap konstan pada nilai awalnya!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menghitung Rasio Fisiologis & Konsentrasi CO2 Terlarut Awal**
Gunakan persamaan Henderson-Hasselbalch:
$$\\text{pH} = pK_a' + \\log\\left(\\frac{[\\ce{HCO3-}]}{[\\ce{CO2(aq)}]}\\right)$$
$$7.40 = 6.10 + \\log\\left(\\frac{[\\ce{HCO3-}]}{[\\ce{CO2(aq)}]}\\right) \\implies \\log\\left(\\frac{[\\ce{HCO3-}]}{[\\ce{CO2(aq)}]}\\right) = 1.30$$
$$\\frac{[\\ce{HCO3-}]}{[\\ce{CO2(aq)}]} = 10^{1.30} \\approx 19.95 \\approx 20.0$$
Maka konsentrasi $\\ce{CO2(aq)}$ awal:
$$[\\ce{CO2(aq)}]_0 = \\frac{24.0\\text{ mmol/L}}{19.95} = 1.203\\text{ mmol/L}$$

**Langkah 2: Perhitungan pH pada Sistem Tertutup**
Reaksi netralisasi penambahan $5.0\\text{ mmol/L}$ ion $\\ce{H+}$:
$$\\ce{H+ + HCO3- -> CO2(aq) + H2O}$$
- Konsentrasi $[\\ce{HCO3-}]$ berkurang: $24.0 - 5.0 = 19.0\\text{ mmol/L}$.
- Dalam sistem tertutup, $\\ce{CO2}$ terakumulasi: $[\\ce{CO2(aq)}] = 1.203 + 5.0 = 6.203\\text{ mmol/L}$.
Hitung pH baru:
$$\\text{pH} = 6.10 + \\log\\left(\\frac{19.0}{6.203}\\right) = 6.10 + \\log(3.063) = 6.10 + 0.486 = 6.59$$
*(Penurunan dari 7.40 ke 6.59 akan berakibat fatal bagi manusia / asidosis metabolik akut).*

**Langkah 3: Perhitungan pH pada Sistem Terbuka (Homeostasis Pulmonal)**
Pada sistem terbuka fisiologis, pernapasan yang lebih cepat (hiperventilasi) menghembuskan kelebihan gas $\\ce{CO2}$ sehingga $[\\ce{CO2(aq)}]$ dipertahankan konstan pada $1.203\\text{ mmol/L}$:
- $[\\ce{HCO3-}] = 19.0\\text{ mmol/L}$.
- $[\\ce{CO2(aq)}] = 1.203\\text{ mmol/L}$.
Hitung pH akhir:
$$\\text{pH} = 6.10 + \\log\\left(\\frac{19.0}{1.203}\\right) = 6.10 + \\log(15.79) = 6.10 + 1.20 = 7.30$$
Penurunan pH hanya dari $7.40$ ke $7.30$, masih berada dalam batas fisiologis aman kehidupan.

**Kesimpulan Evaluator Juri:**
Rasio molar fisiologis adalah $20:1$ dengan $[\\ce{CO2}] = 1.20\\text{ mmol/L}$. Pada sistem tertutup pH anjlok drastis ke $6.59$, sedangkan pada sistem terbuka fisiologis respirasi pH hanya bergeser sedikit ke $7.30$, membuktikan keunggulan biologis mekanisme dapar terbuka.`,
      },
      {
        tag: 'soal-amfiprotik-glisin-isoelektrik',
        tags: ['soal-osk', 'spesi-amfiprotik', 'titik-isoelektrik', 'glisin', 'asam-fosfat'],
        title: 'Contoh Soal OSK 2: Penentuan pH Spesi Amfiprotik Na2HPO4 & Titik Isoelektrik Asam Amino Glisin',
        summary: 'Kalkulasi kesetimbangan ion amfiprotik dari asam poliprotik dan penentuan titik isoelektrik (pI) asam amino glisin dalam larutan encer.',
        content: `### Soal:
Asam fosfat ($\\ce{H3PO4}$) adalah asam triprotik dengan $pK_{a1} = 2.15$, $pK_{a2} = 7.20$, dan $pK_{a3} = 12.35$ pada $25^\\circ\\text{C}$.
Asam amino paling sederhana, glisin ($\\ce{H2N-CH2-COOH}$), dalam larutan berair terionisasi menjadi bentuk diprotik kationik $\\ce{^+H3N-CH2-COOH}$ dengan $pK_{a1} = 2.34$ (gugus karboksilat) dan $pK_{a2} = 9.60$ (gugus amino).

**Pertanyaan:**
1. Hitung pH larutan garam natrium hidrogen fosfat ($\\ce{Na2HPO4}$) $0.10\\text{ M}$ dalam air!
2. Turunkan dan hitung titik isoelektrik ($pI$) dari asam amino glisin, yaitu nilai pH saat konsentrasi bentuk zwitterion netral ($\\ce{^+H3N-CH2-COO-}$) mencapai fraksi maksimum dan muatan netto molekul sama dengan nol!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menentukan Spesies Terlibat pada Garam Na2HPO4**
Garam $\\ce{Na2HPO4}$ terdisosiasi sempurna menghasilkan ion amfiprotik $\\ce{HPO4^2-}$.
Ion $\\ce{HPO4^2-}$ berada di antara tahap disosiasi kedua dan ketiga asam fosfat:
$$\\ce{H2PO4- <=> H+ + HPO4^2-} \\quad (K_{a2} = 10^{-7.20} = 6.31 \\times 10^{-8})$$
$$\\ce{HPO4^2- <=> H+ + PO4^3-} \\quad (K_{a3} = 10^{-12.35} = 4.47 \\times 10^{-13})$$

**Langkah 2: Menghitung pH Ion Amfiprotik HPO4^2-**
Menggunakan formula spesi amfiprotik:
$$[\\ce{H+}] = \\sqrt{\\frac{K_{a2}K_{a3}C + K_{a2}K_w}{K_{a2} + C}}$$
Karena konsentrasi $C = 0.10\\text{ M} \\gg K_{a2}$ ($6.31 \\times 10^{-8}$):
$$[\\ce{H+}] \\approx \\sqrt{K_{a2} \\cdot K_{a3}} \\implies \\text{pH} = \\frac{\\text{p}K_{a2} + \\text{p}K_{a3}}{2}$$
$$\\text{pH} = \\frac{7.20 + 12.35}{2} = \\frac{19.55}{2} = 9.775 \\approx 9.78$$

**Langkah 3: Penurunan Titik Isoelektrik (pI) Glisin**
Tiga bentuk kesetimbangan glisin:
$$\\ce{\\underset{\\text{Kation (+1)}}{^+H3N-CH2-COOH} <=> H+ + \\underset{\\text{Zwitterion (0)}}{^+H3N-CH2-COO-} <=> H+ + \\underset{\\text{Anion (-1)}}{H2N-CH2-COO-}}$$
- Tahap 1: $K_{a1} = \\frac{[\\ce{H+}][\\ce{Gly^0}]}{[\\ce{Gly+}]}$
- Tahap 2: $K_{a2} = \\frac{[\\ce{H+}][\\ce{Gly-}]}{[\\ce{Gly^0}]}$
Pada titik isoelektrik ($pI$), muatan total larutan nol, sehingga konsentrasi spesi kationik sama persis dengan konsentrasi spesi anionik:
$$[\\ce{Gly+}] = [\\ce{Gly-}]$$
Substitusi dari ekspresi $K_{a1}$ dan $K_{a2}$:
$$\\frac{[\\ce{H+}][\\ce{Gly^0}]}{K_{a1}} = \\frac{K_{a2}[\\ce{Gly^0}]}{[\\ce{H+}]}$$
Eliminasi $[\\ce{Gly^0}]$ pada kedua ruas:
$$[\\ce{H+}]^2 = K_{a1} \\cdot K_{a2} \\implies [\\ce{H+}] = \\sqrt{K_{a1} K_{a2}}$$
$$\\text{p}I = \\frac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2} = \\frac{2.34 + 9.60}{2} = \\frac{11.94}{2} = 5.97$$

**Kesimpulan Evaluator Juri:**
pH larutan $\\ce{Na2HPO4}$ $0.10\\text{ M}$ adalah $9.78$ (bersifat basa lemah), dan titik isoelektrik glisin adalah $pI = 5.97$, di mana kelarutan asam amino berada pada titik minimum dan tidak bermigrasi dalam medan elektroforesis.`,
      },
      {
        tag: 'soal-kurva-titrasi-asetat-naoh',
        tags: ['soal-osp', 'kurva-titrasi', 'asam-asetat', 'hidrolisis-garam', 'kapasitas-buffer-van-slyke'],
        title: 'Contoh Soal OSP 3: Analisis Kuantitatif Kurva Titrasi Asam Asetat dengan NaOH & Kapasitas Penyangga',
        summary: 'Perhitungan pH presisi pada 4 segmen titrasi asam asetat 0.10 M dengan NaOH 0.10 M dan pembuktian kapasitas dapar maksimum.',
        content: `### Soal:
Sebanyak $25.00\\text{ mL}$ larutan asam asetat ($\\ce{CH3COOH}$, $K_a = 1.80 \\times 10^{-5}$, $pK_a = 4.74$) berkonsentrasi $0.100\\text{ M}$ dititrasi dengan larutan standar $\\ce{NaOH}$ $0.100\\text{ M}$ pada $25^\\circ\\text{C}$.

**Pertanyaan:**
1. Hitung pH larutan sebelum penambahan $\\ce{NaOH}$ ($V_b = 0.00\\text{ mL}$)!
2. Hitung pH larutan setelah penambahan $12.50\\text{ mL}$ $\\ce{NaOH}$ (titik setengah ekuivalen)!
3. Hitung volume $\\ce{NaOH}$ pada titik ekuivalen dan hitung pH larutan tepat pada titik ekuivalen tersebut!
4. Hitung pH larutan setelah penambahan $30.00\\text{ mL}$ $\\ce{NaOH}$!

---

### Rincian Langkah Penyelesaian:

**Langkah 1: pH Awal Sebelum Titrasi ($V_b = 0$)**
Larutan asam lemah murni:
$$[\\ce{H+}] = \\sqrt{K_a \\cdot C_a} = \\sqrt{(1.80 \\times 10^{-5})(0.100)} = \\sqrt{1.80 \\times 10^{-6}} = 1.342 \\times 10^{-3}\\text{ M}$$
$$\\text{pH} = -\\log(1.342 \\times 10^{-3}) = 3 - \\log(1.342) = 2.87$$

**Langkah 2: Titik Setengah Ekuivalen ($V_b = 12.50\\text{ mL}$)**
- $\\text{Mol } \\ce{CH3COOH} \\text{ mula-mula} = 25.00 \\times 0.100 = 2.500\\text{ mmol}$.
- $\\text{Mol } \\ce{NaOH} \\text{ ditambahkan} = 12.50 \\times 0.100 = 1.250\\text{ mmol}$.
- Sisa asam $\\ce{CH3COOH} = 2.500 - 1.250 = 1.250\\text{ mmol}$.
- Garam $\\ce{CH3COO-} \\text{ terbentuk} = 1.250\\text{ mmol}$.
Karena $[\\ce{CH3COOH}] = [\\ce{CH3COO-}]$:
$$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{1.250}{1.250}\\right) = \\text{p}K_a + 0 = 4.74$$
*(Pada titik ini, kapasitas dapar mencapai nilai puncak maksimum $\\beta_{\\text{max}}$).*

**Langkah 3: Titik Ekuivalensi ($V_b = V_{eq} = 25.00\\text{ mL}$)**
Pada titik ekuivalen, seluruh $\\ce{CH3COOH}$ bereaksi sempurna membentuk $\\ce{CH3COONa}$ sebanyak $2.500\\text{ mmol}$.
Volume total larutan $= 25.00 + 25.00 = 50.00\\text{ mL}$.
Konsentrasi garam asetat:
$$C_{\\text{garam}} = \\frac{2.500\\text{ mmol}}{50.00\\text{ mL}} = 0.0500\\text{ M}$$
Hidrolisis ion asetat: $\\ce{CH3COO- + H2O <=> CH3COOH + OH-}$
$$K_b = \\frac{K_w}{K_a} = \\frac{1.00 \\times 10^{-14}}{1.80 \\times 10^{-5}} = 5.56 \\times 10^{-10}$$
$$[\\ce{OH-}] = \\sqrt{K_b \\cdot C_{\\text{garam}}} = \\sqrt{(5.56 \\times 10^{-10})(0.0500)} = \\sqrt{2.778 \\times 10^{-11}} = 5.27 \\times 10^{-6}\\text{ M}$$
$$\\text{pOH} = -\\log(5.27 \\times 10^{-6}) = 5.28 \\implies \\text{pH} = 14.00 - 5.28 = 8.72$$

**Langkah 4: Pasca-Ekuivalen ($V_b = 30.00\\text{ mL}$)**
- $\\text{Mol } \\ce{NaOH} \\text{ total} = 30.00 \\times 0.100 = 3.000\\text{ mmol}$.
- $\\text{Kelebihan mol } \\ce{OH-} = 3.000 - 2.500 = 0.500\\text{ mmol}$.
- Volume total $= 25.00 + 30.00 = 55.00\\text{ mL}$.
$$[\\ce{OH-}]_{\\text{kelebihan}} = \\frac{0.500\\text{ mmol}}{55.00\\text{ mL}} = 9.091 \\times 10^{-3}\\text{ M}$$
$$\\text{pOH} = -\\log(9.091 \\times 10^{-3}) = 2.04 \\implies \\text{pH} = 14.00 - 2.04 = 11.96$$

**Kesimpulan Evaluator Juri:**
Nilai pH pada keempat titik adalah: (1) Awal $= 2.87$, (2) Setengah ekuivalen $= 4.74$, (3) Titik ekuivalen $= 8.72$ (basa lemah akibat hidrolisis), dan (4) Pasca-ekuivalen $= 11.96$. Lonjakan tajam di sekitar pH 8.72 memvalidasi fenolftalein sebagai indikator terbaik.`,
      },
      {
        tag: 'soal-pengendapan-bertingkat-halida',
        tags: ['soal-osn', 'pengendapan-bertingkat', 'ksp-agcl-agi', 'pemisahan-analitik', 'persen-pemisahan', 'soal-pengendapan-ksp'],
        title: 'Contoh Soal OSN 4: Pengendapan Bertingkat Ion Klorida & Iodida Menggunakan Perak Nitrat (AgNO3)',
        summary: 'Pemisahan fraksional kuantitatif campuran ion halida dengan reagen perak dan evaluasi persentase kemurnian analitis.',
        content: `### Soal:
Suatu larutan mengandung campuran ion klorida ($\\ce{Cl-}$) dan ion iodida ($\\ce{I-}$), masing-masing dengan konsentrasi awal $0.050\\text{ M}$. Ke dalam larutan tersebut diteteskan perlahan larutan encer perak nitrat ($\\ce{AgNO3}$).
Diketahui data tetapan hasil kali kelarutan pada $25^\\circ\\text{C}$:
- $K_{sp}(\\ce{AgI}) = 8.50 \\times 10^{-17}$
- $K_{sp}(\\ce{AgCl}) = 1.80 \\times 10^{-10}$

**Pertanyaan:**
1. Endapan manakah yang akan terbentuk terlebih dahulu? Hitung konsentrasi $[\\ce{Ag+}]$ minimum yang dibutuhkan untuk memulai pembentukan endapan pertama tersebut!
2. Berapakah konsentrasi $[\\ce{Ag+}]$ yang diperlukan tepat saat endapan kedua mulai terbentuk?
3. Hitung sisa konsentrasi ion pertama dalam larutan saat endapan kedua mulai terbentuk, dan hitung persentase pemisahan analitisnya! Apakah kedua ion tersebut dapat dipisahkan secara kuantitatif?

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menentukan Endapan Pertama & [Ag+] Inisiasi**
Konsentrasi $[\\ce{Ag+}]$ yang diperlukan agar terjadi pengendapan ($Q_{sp} = K_{sp}$):
- Untuk $\\ce{AgI}$:
  $$[\\ce{Ag+}]_{\\ce{AgI}} = \\frac{K_{sp}(\\ce{AgI})}{[\\ce{I-}]} = \\frac{8.50 \\times 10^{-17}}{0.050} = 1.70 \\times 10^{-15}\\text{ M}$$
- Untuk $\\ce{AgCl}$:
  $$[\\ce{Ag+}]_{\\ce{AgCl}} = \\frac{K_{sp}(\\ce{AgCl})}{[\\ce{Cl-}]} = \\frac{1.80 \\times 10^{-10}}{0.050} = 3.60 \\times 10^{-9}\\text{ M}$$
Karena $1.70 \\times 10^{-15}\\text{ M} \\ll 3.60 \\times 10^{-9}\\text{ M}$, maka endapan kuning $\\ce{AgI}$ **mengendap jauh lebih dahulu** dibanding endapan putih $\\ce{AgCl}$.

**Langkah 2: Konsentrasi [Ag+] Saat Endapan Kedua (AgCl) Mulai Terbentuk**
Endapan $\\ce{AgCl}$ mulai terbentuk saat konsentrasi ion perak tepat mencapai:
$$[\\ce{Ag+}] = 3.60 \\times 10^{-9}\\text{ M}$$

**Langkah 3: Menghitung Sisa Konsentrasi Ion Iodida & Persen Pemisahan**
Pada kondisi $[\\ce{Ag+}] = 3.60 \\times 10^{-9}\\text{ M}$, kesetimbangan $\\ce{AgI}$ tetap berlaku dalam larutan jenuh:
$$[\\ce{I-}]_{\\text{sisa}} = \\frac{K_{sp}(\\ce{AgI})}{[\\ce{Ag+}]} = \\frac{8.50 \\times 10^{-17}}{3.60 \\times 10^{-9}} = 2.361 \\times 10^{-8}\\text{ M}$$
Persentase ion $\\ce{I-}$ yang masih tertinggal dalam larutan:
$$\\text{\\% Sisa } \\ce{I-} = \\frac{[\\ce{I-}]_{\\text{sisa}}}{[\\ce{I-}]_{\\text{awal}}} \\times 100\\% = \\frac{2.361 \\times 10^{-8}\\text{ M}}{0.050\\text{ M}} \\times 100\\% = 4.72 \\times 10^{-5}\\%$$
Persentase ion $\\ce{I-}$ yang telah mengendap sempurna:
$$\\text{\\% Pengendapan } \\ce{I-} = 100\\% - 0.0000472\\% = 99.99995\\%$$

**Kesimpulan Evaluator Juri:**
Endapan $\\ce{AgI}$ terbentuk lebih dahulu pada $[\\ce{Ag+}] = 1.70 \\times 10^{-15}\\text{ M}$. Tepat saat $\\ce{AgCl}$ mulai mengendap ($[\\ce{Ag+}] = 3.60 \\times 10^{-9}\\text{ M}$), sisa ion iodida hanya tinggal $2.36 \\times 10^{-8}\\text{ M}$ ($99.99995\\%$ telah mengendap). Kriteria pemisahan kuantitatif terpenuhi secara sempurna (efisiensi $> 99.9\\%$).`,
      },
      {
        tag: 'soal-kompleksasi-agbr-tiosulfat',
        tags: ['soal-osn', 'pembentukan-kompleks-kf', 'pelarutan-endapan', 'fotografi-tiosulfat', 'kesetimbangan-gabungan'],
        title: 'Contoh Soal OSN 5: Pelarutan Endapan AgBr dalam Larutan Tiosulfat (Na2S2O3) via Pembentukan Kompleks',
        summary: 'Kalkulasi kesetimbangan simultan kelarutan dan pembentukan ion kompleks bis(tiosulfato)argentat(I) pada proses pencucian film fotografi.',
        content: `### Soal:
Dalam industri fotografi analog klasik, butiran perak bromida ($\\ce{AgBr}$) yang tidak terpapar cahaya dihilangkan dari emulsi film melalui proses *fixing* (pencucian) menggunakan larutan natrium tiosulfat ($\\ce{Na2S2O3}$, "hipo"). Reaksi ini membentuk ion kompleks larut bis(tiosulfato)argentat(I), $[\\ce{Ag(S2O3)2}]^{3-}$.
Diketahui data pada $25^\\circ\\text{C}$:
- $K_{sp}(\\ce{AgBr}) = 5.00 \\times 10^{-13}$
- Tetapan pembentukan kompleks $\\ce{[Ag(S2O3)2]^3-}$: $K_f = 2.00 \\times 10^{13}$

**Pertanyaan:**
1. Tuliskan persamaan reaksi pelarutan $\\ce{AgBr}$ dalam larutan tiosulfat dan hitung tetapan kesetimbangan keseluruhan ($K$) dari reaksi tersebut!
2. Hitung kelarutan molar $\\ce{AgBr}$ dalam air murni!
3. Hitung kelarutan molar $\\ce{AgBr}$ dalam larutan $\\ce{Na2S2O3}$ berkonsentrasi $0.500\\text{ M}$! Berapa kali lipat peningkatan kelarutannya dibanding dalam air murni?

---

### Rincian Langkah Penyelesaian:

**Langkah 1: Menuliskan Reaksi Gabungan & Menghitung Tetapan K**
Tahap 1 (Pelarutan): $\\ce{AgBr(s) <=> Ag+(aq) + Br-(aq)} \\quad K_{sp} = 5.00 \\times 10^{-13}$
Tahap 2 (Kompleksasi): $\\ce{Ag+(aq) + 2S2O3^2-(aq) <=> [Ag(S2O3)2]^3-(aq)} \\quad K_f = 2.00 \\times 10^{13}$

Reaksi Keseluruhan:
$$\\ce{AgBr(s) + 2S2O3^2-(aq) <=> [Ag(S2O3)2]^3-(aq) + Br-(aq)}$$
Tetapan kesetimbangan keseluruhan ($K$):
$$K = K_{sp} \\times K_f = (5.00 \\times 10^{-13}) \\times (2.00 \\times 10^{13}) = 10.0$$

**Langkah 2: Kelarutan AgBr dalam Air Murni**
Dalam air murni:
$$s_{\\text{air}} = \\sqrt{K_{sp}} = \\sqrt{5.00 \\times 10^{-13}} = 7.07 \\times 10^{-7}\\text{ M}$$
*(Sangat sukar larut; hanya sekitar $0.13\\text{ mg}$ $\\ce{AgBr}$ yang larut per liter air).*

**Langkah 3: Kelarutan AgBr dalam Na2S2O3 0.500 M**
Misalkan kelarutan molar $\\ce{AgBr}$ dalam tiosulfat adalah $s\\text{ mol/L}$.
Buat tabel konsentrasi kesetimbangan:
- Mula-mula: $[\\ce{S2O3^2-}] = 0.500\\text{ M}$, $[\\ce{[Ag(S2O3)2]^3-}] = 0$, $[\\ce{Br-}] = 0$.
- Bereaksi: $-2s, +s, +s$.
- Setimbang: $[\\ce{S2O3^2-}] = 0.500 - 2s$, $[\\ce{[Ag(S2O3)2]^3-}] = s$, $[\\ce{Br-}] = s$.

Ekspresi tetapan kesetimbangan $K$:
$$K = \\frac{[\\ce{[Ag(S2O3)2]^3-}][\\ce{Br-}]}{[\\ce{S2O3^2-}]^2} = \\frac{(s)(s)}{(0.500 - 2s)^2} = \\left(\\frac{s}{0.500 - 2s}\\right)^2 = 10.0$$
Ambil akar kuadrat pada kedua ruas:
$$\\frac{s}{0.500 - 2s} = \\sqrt{10.0} \\approx 3.162$$
$$s = 3.162(0.500 - 2s) = 1.581 - 6.324s$$
$$7.324 s = 1.581 \\implies s = \\frac{1.581}{7.324} = 0.2159\\text{ M} \\approx 0.216\\text{ M}$$

Rasio peningkatan kelarutan:
$$\\text{Faktor Peningkatan} = \\frac{s_{\\text{tiosulfat}}}{s_{\\text{air}}} = \\frac{0.2159\\text{ M}}{7.07 \\times 10^{-7}\\text{ M}} \\approx 3.05 \\times 10^5 \\text{ kali}$$

**Kesimpulan Evaluator Juri:**
Tetapan kesetimbangan gabungan bernilai $K = 10.0$. Kelarutan molar $\\ce{AgBr}$ dalam larutan $\\ce{Na2S2O3}$ $0.500\\text{ M}$ adalah $0.216\\text{ M}$ ($40.5\\text{ gram AgBr}$ per liter), meningkat lebih dari $300.000$ kali lipat dibandingkan dalam air murni, mendasari keberhasilan teknik *fixing* fotografi perak halida.`,
      },
    ],
  };
