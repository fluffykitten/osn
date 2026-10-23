/**
 * src/data/materials/sma/smaBab06.ts
 * Bab 6: Kesetimbangan Kimia (Kelas XI — Fase F)
 * Berdasarkan Kerangka Arsitektur Pedagogis v3 (SaveMyExams style)
 */

import type { SmaMaterialItem } from '../../smaMaterialsData';

export const SMA_BAB_06: SmaMaterialItem = {
  id: 106,
  topic_number: 6,
  title: 'Kesetimbangan Kimia',
  description: 'Memahami konsep kesetimbangan dinamis, tetapan kesetimbangan Kc dan Kp, derajat disosiasi, pergeseran kesetimbangan Asas Le Chatelier, dan optimasi industri.',
  grade: 'Kelas 11',
  semester: 1,
  curriculumPhase: 'Fase F',
  estimatedTime: '10 Jam Pelajaran (5 Pertemuan)',
  prerequisites: ['Stoikiometri (Bab 3)', 'Laju Reaksi (Bab 5)'],
  learningObjectives: [
    'Menjelaskan konsep kesetimbangan dinamis serta membedakan kesetimbangan homogen dan heterogen.',
    'Menuliskan ungkapan tetapan kesetimbangan Kc dan Kp serta menghubungkannya dengan rumus Kp = Kc(RT)^Δn.',
    'Menghitung komposisi kesetimbangan, derajat disosiasi (α), dan memprediksi arah reaksi menggunakan kuosien reaksi (Qc).',
    'Menganalisis pergeseran arah kesetimbangan berdasarkan Asas Le Chatelier (konsentrasi, volume, tekanan, dan suhu).',
    'Menganalisis kondisi optimum kompromi pada proses sintesis amonia Haber-Bosch dan proses Kontak industri asam sulfat.'
  ],
  conceptBlocks: [
    // =========================================================================
    // SUBBAB 6.1
    // =========================================================================
    {
      id: 'sma6-1',
      title: '6.1 Konsep Kesetimbangan Dinamis serta Kesetimbangan Homogen dan Heterogen',
      difficulty: 'Easy',
      estimatedMinutes: 45,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Bayangkan Anda sedang berjalan di atas tangga berjalan (*treadmill*). Jika Anda melangkah maju dengan kecepatan $5\ \text{km jam}^{-1}$ sementara karpet berjalan mundur dengan kecepatan yang sama persis $5\ \text{km jam}^{-1}$, di manakah posisi tubuh Anda berada setelah satu jam?

Secara makroskopis dari pandangan orang di luar, Anda tampak diam mematung di tempat yang sama. Namun secara mikroskopis, kedua kaki Anda terus bergerak melangkah tanpa henti. Inilah analogi sempurna dari **kesetimbangan dinamis**.

Ketika suatu reaksi dapat balik (*reversible*) berlangsung di dalam wadah tertutup, laju pembentukan produk mula-mula sangat cepat, lalu melambat. Sebaliknya, begitu produk terbentuk, produk mulai terurai kembali menjadi pereaksi dengan laju yang kian membesar. Pada akhirnya, laju reaksi maju tepat sama dengan laju reaksi balik, sehingga jumlah partikel masing-masing zat tampak konstan secara kasat mata.

Perhatikan grafik laju reaksi versus waktu dan grafik konsentrasi pada Gambar 6.1 berikut.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b06-kesetimbangan-dinamis-title sma-b06-kesetimbangan-dinamis-desc" data-diagram="sma-b06-kesetimbangan-dinamis" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b06-kesetimbangan-dinamis-title">GRAFIK LAJU DAN KONSENTRASI KESETIMBANGAN DINAMIS</title>
  <desc id="sma-b06-kesetimbangan-dinamis-desc">Perbandingan grafik laju reaksi maju sama dengan laju reaksi balik serta kurva konsentrasi yang konstan pada keadaan kesetimbangan.</desc>
  
  <!-- Panel Kiri: Grafik Laju vs Waktu -->
  <rect x="24" y="24" width="374" height="392" rx="12" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="40" y="40" width="342" height="32" rx="6" fill="#8fd3ef" stroke="#2f7fc1" stroke-width="1.5" />
  <text x="211" y="62" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">GRAFIK LAJU REAKSI (v) VS WAKTU</text>

  <!-- Sumbu Grafik Kiri -->
  <line x1="70" y1="90" x2="70" y2="340" stroke="#1f2937" stroke-width="2" />
  <line x1="70" y1="340" x2="370" y2="340" stroke="#1f2937" stroke-width="2" />
  <text x="50" y="96" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">LAJU</text>
  <text x="350" y="360" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">WAKTU</text>

  <!-- Kurva Laju Maju & Balik -->
  <path d="M 70 120 Q 150 220 360 220" fill="none" stroke="#d64545" stroke-width="3" />
  <path d="M 70 340 Q 150 220 360 220" fill="none" stroke="#2f7fc1" stroke-width="3" />
  <line x1="220" y1="90" x2="220" y2="340" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3 3" />
  <text x="200" y="150" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">LAJU MAJU TURUN</text>
  <text x="200" y="300" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">LAJU BALIK NAIK</text>

  <rect x="230" y="200" width="130" height="40" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" />
  <text x="295" y="225" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">LAJU MAJU = LAJU BALIK</text>

  <rect x="40" y="376" width="342" height="30" rx="6" fill="#ececec" />
  <text x="211" y="396" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">GARIS LAJU BERTEMU PADA SATU NILAI</text>

  <!-- Panel Kanan: Grafik Konsentrasi vs Waktu -->
  <rect x="412" y="24" width="364" height="392" rx="12" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="428" y="40" width="332" height="32" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="594" y="62" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">GRAFIK KONSENTRASI [C] VS WAKTU</text>

  <!-- Sumbu Grafik Kanan -->
  <line x1="450" y1="90" x2="450" y2="340" stroke="#1f2937" stroke-width="2" />
  <line x1="450" y1="340" x2="750" y2="340" stroke="#1f2937" stroke-width="2" />
  <text x="430" y="96" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">[C]</text>
  <text x="730" y="360" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">WAKTU</text>

  <!-- Kurva Konsentrasi Reaktan & Produk Menjadi Datar -->
  <path d="M 450 130 Q 530 250 740 250" fill="none" stroke="#d64545" stroke-width="3" />
  <path d="M 450 340 Q 530 180 740 180" fill="none" stroke="#2f7fc1" stroke-width="3" />
  <line x1="600" y1="90" x2="600" y2="340" stroke="#8a939c" stroke-width="1.5" stroke-dasharray="3 3" />

  <text x="520" y="160" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">[PRODUK]</text>
  <text x="520" y="270" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">[REAKTAN]</text>

  <rect x="614" y="200" width="130" height="40" rx="6" fill="#ececec" />
  <text x="679" y="225" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KONSENTRASI KONSTAN</text>

  <rect x="428" y="376" width="332" height="30" rx="6" fill="#ececec" />
  <text x="594" y="396" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">INGAT: KONSTAN, BUKAN HARUS SAMA BESAR!</text>
</svg>

*Gambar 6.1: Perbandingan profil laju reaksi dan konsentrasi zat saat mencapai kesetimbangan dinamis.*

Apakah seluruh reaksi kimia di alam bersifat dapat balik (*reversible*)?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Reaksi Searah (*Irreversible*) vs Reaksi Bolak-Balik (*Reversible*)
1. **Reaksi Searah (Berkesudahan / *Irreversible*):**  
   Reaksi yang hanya berlangsung dari arah pereaksi ke hasil reaksi, dan zat produk tidak dapat saling bereaksi kembali membentuk pereaksi semula (simbol panah tunggal $\rightarrow$). Contoh: pembakaran kayu dan reaksi pembentukan endapan yang gasnya keluar ke udara bebas.
2. **Reaksi Bolak-Balik (Dapat Balik / *Reversible*):**  
   Reaksi di mana zat-zat hasil reaksi dapat saling bereaksi kembali membentuk zat-zat pereaksi (simbol panah bolak-balik $\rightleftharpoons$). Contoh: sintesis gas amonia dan pelarutan gas karbon dioksida dalam air berkarbonasi tertutup.

##### B. Ciri-Ciri Keadaan Kesetimbangan Dinamis
Suatu sistem reaksi kimia mencapai **kesetimbangan dinamis** apabila memenuhi tiga kriteria pokok:
1. **Berlangsung dalam Sistem Tertutup:** Suhu, tekanan, serta materi tidak boleh ada yang keluar atau masuk wadah.
2. **Laju Reaksi Maju Sama dengan Laju Reaksi Balik:**
   $$v_{\text{maju}} = v_{\text{balik}}$$
   *Makna Fisis Rumus:* Partikel produk terbentuk dengan kecepatan yang sama persis dengan kecepatan penguraiannya kembali menjadi reaktan.
3. **Sifat Makroskopis Konstan:** Secara visual makroskopis, konsentrasi setiap zat, warna larutan, tekanan gas, dan suhu sistem tidak mengalami perubahan lagi, meskipun di tingkat submikroskopis kedua reaksi terus berlangsung terus-menerus.

##### C. Kesetimbangan Homogen vs Heterogen
- **Kesetimbangan Homogen:** Seluruh zat pereaksi dan hasil reaksi berada dalam **satu fasa wujud yang sama**:
  $$\ce{N2(g) + 3 H2(g) <=> 2 NH3(g)} \quad (\text{seluruhnya fasa gas})$$
  $$\ce{CH3COOH(aq) <=> CH3COO-(aq) + H+(aq)} \quad (\text{seluruhnya fasa larutan})$$
- **Kesetimbangan Heterogen:** Zat pereaksi dan hasil reaksi berada dalam **dua atau lebih fasa wujud yang berbeda**:
  $$\ce{CaCO3(s) <=> CaO(s) + CO2(g)} \quad (\text{padat dan gas})$$
  $$\ce{AgCl(s) <=> Ag+(aq) + Cl-(aq)} \quad (\text{padat dan larutan})$$

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Kesetimbangan kimia hanya mungkin tercapai jika wadah reaksi tertutup rapat sehingga zat pereaksi dan hasil reaksi tidak terlepas keluar.
> **Batas Keberlakuan:** Pada keadaan kesetimbangan dinamis, konsentrasi reaktan dan produk **tidak harus bernilai sama besar**. Yang wajib sama adalah **laju reaksinya** ($v_{\text{maju}} = v_{\text{balik}}$), sedangkan konsentrasinya hanya bernilai konstan (tetap terhadap waktu).

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Sebongkah batu kapur $\ce{CaCO3}$ dipanaskan di dalam beker terbuka pada suhu $800\ ^\circ\text{C}$ menghasilkan padatan $\ce{CaO}$ dan gas $\ce{CO2}$. Apakah reaksi tersebut dapat mencapai kesetimbangan dinamis? Bagaimana jika pemanasan dilakukan di dalam bejana baja tertutup bertekanan?  
*Jawaban & Analisis:* Pada beker terbuka, gas $\ce{CO2}$ yang terbentuk akan langsung terbang terlepas ke atmosfer, sehingga partikel $\ce{CO2}$ tidak dapat lagi bertumbukan dengan $\ce{CaO}$ untuk bereaksi balik membentuk $\ce{CaCO3}$. Reaksi berlangsung searah hingga batu kapur habis. Sebaliknya, pada bejana tertutup, gas $\ce{CO2}$ tertahan di dalam bejana dan akan bertumbukan kembali dengan padatan $\ce{CaO}$ membentuk $\ce{CaCO3}$ hingga laju kedua arah seimbang, sehingga kesetimbangan heterogen dapat tercapai.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Perhatikan grafik perubahan konsentrasi zat A dan zat B terhadap waktu pada reaksi: $\ce{A(g) <=> 2 B(g)}$:  
- Mula-mula hanya ada zat A dengan konsentrasi $1.0\ \text{M}$.  
- Setelah reaksi berlangsung selama $40\ \text{detik}$, konsentrasi A tetap di angka $0.4\ \text{M}$ dan konsentrasi B tetap di angka $1.2\ \text{M}$.  
(a) Pada detik keberapakah kesetimbangan mulai tercapai?  
(b) Apakah pada saat setimbang konsentrasi zat B sama dengan konsentrasi zat A?  
(c) Apakah reaksi kimia terhenti setelah detik ke-40?

**Strategi Langkah demi Langkah:**
1. *Identifikasi Titik Kelokan Kurva Menjadi Datar:*  
   Konsentrasi zat A dan zat B berhenti berubah pada detik ke-40 ($[\ce{A}] = 0.4\ \text{M}$ dan $[\ce{B}] = 1.2\ \text{M}$). Maka kesetimbangan dinamis mulai tercapai pada **$t = 40\ \text{detik}$**.
2. *Bandingkan Konsentrasi Saat Setimbang:*  
   Konsentrasi B ($1.2\ \text{M}$) tidak sama dengan konsentrasi A ($0.4\ \text{M}$). Konsentrasi produk lebih besar dari reaktan, tetapi keduanya bernilai tetap (konstan).
3. *Analisis Dinamika Mikroskopis:*  
   Reaksi **tidak berhenti**. Molekul A terus terurai menjadi B, dan molekul B terus bergabung kembali menjadi A dengan kelajuan yang sama persis ($v_{\text{maju}} = v_{\text{balik}}$).

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Menganggap bahwa saat kesetimbangan tercapai, reaksi kimia berhenti total dan konsentrasi zat di kiri wajib sama dengan konsentrasi di kanan.
> **Koreksi Konseptual:** Kesetimbangan kimia bersifat **dinamis**, bukan statis. Reaksi di tingkat partikel tidak pernah berhenti. Nilai $[\ce{Reaktan}]$ bisa lebih besar, lebih kecil, atau kebetulan sama dengan $[\ce{Produk}]$, yang penting nilainya tidak berubah lagi terhadap waktu.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Periksa perubahan konsentrasi stoikiometri: $\Delta [\ce{A}] = 1.0 - 0.4 = 0.6\ \text{M}$ berkurang. Berdasarkan koefisien $1 : 2$, zat B yang terbentuk haruslah $2 \times 0.6 = 1.2\ \text{M}$. Konsentrasi akhir $[\ce{B}] = 0 + 1.2 = 1.2\ \text{M}$. Neraca partikel konsisten!  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 5 (Laju Reaksi): Kesetimbangan tercapai saat persamaan laju maju $k_1 [\ce{A}]^m$ setara dengan laju balik $k_{-1} [\ce{B}]^n$.

##### 🎯 Latihan Terbimbing
1. Golongkan reaksi kesetimbangan berikut ke dalam kesetimbangan homogen atau heterogen:  
   (a) $2\ \ce{SO2(g)} + \ce{O2(g)} \rightleftharpoons 2\ \ce{SO3(g)}$  
   (b) $\ce{NH4HS(s)} \rightleftharpoons \ce{NH3(g)} + \ce{H2S(g)}$ *(Kunci Jawaban Akhir: (a) Homogen [seluruhnya gas], (b) Heterogen [padat dan gas])*
2. Suatu reaksi bolak-balik: $\ce{2 NO2(g) <=> N2O4(g)}$ berlangsung dalam wadah tertutup. Gas $\ce{NO2}$ berwarna cokelat kemerahan sedangkan $\ce{N2O4}$ tidak berwarna. Jika warna cokelat kemerahan campuran tidak mengalami perubahan intensitas lagi, apakah sistem sudah setimbang? Jelaskan! *(Kunci Jawaban Akhir: Ya, sudah setimbang karena sifat makroskopis warna campuran telah konstan yang menandakan laju pembentukan dan penguraian kedua gas telah sama besar)*`
    },

    // =========================================================================
    // SUBBAB 6.2
    // =========================================================================
    {
      id: 'sma6-2',
      title: '6.2 Tetapan Kesetimbangan Konsentrasi (Kc) dan Tekanan Parsial (Kp) serta Hubungan Kp = Kc(RT)Δn',
      difficulty: 'Medium',
      estimatedMinutes: 50,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Pada tahun 1864, dua kimiawan Norwegia, Cato Guldberg dan Peter Waage, melakukan ratusan percobaan pada reaksi dapat balik. Mereka menemukan pola matematis yang mencengangkan: meskipun konsentrasi awal zat yang dicampurkan diubah-ubah secara acak, rasio konsentrasi produk terhadap pereaksi pada keadaan setimbang selalu menghasilkan satu angka konstan yang spesifik pada suhu tertentu.

Pola ini dirumuskan sebagai **Hukum Aksi Massa**. Partikel-partikel di dalam wadah kesetimbangan selalu bertumbukan dan mengatur ulang posisinya hingga rasio konsentrasinya mencapai nilai tetapan kesetimbangan ($K$).

Perhatikan perbandingan penyusunan tetapan kesetimbangan konsentrasi ($K_c$) dan tekanan parsial ($K_p$) serta aturan pengecualian fasa pada Gambar 6.2 berikut.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b06-tetapan-kc-kp-title sma-b06-tetapan-kc-kp-desc" data-diagram="sma-b06-tetapan-kc-kp" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b06-tetapan-kc-kp-title">TETAPAN KESETIMBANGAN KC DAN KP SERTA HUBUNGANNYA</title>
  <desc id="sma-b06-tetapan-kc-kp-desc">Formulasi penulisan Kc dan Kp, aturan fasa yang diperhitungkan, dan rumus konversi Kp terhadap Kc.</desc>
  
  <!-- Panel Kiri: Formulasi Kc & Kp -->
  <rect x="24" y="24" width="374" height="392" rx="12" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="40" y="40" width="342" height="32" rx="6" fill="#8fd3ef" stroke="#2f7fc1" stroke-width="1.5" />
  <text x="211" y="62" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">RUMUS TETAPAN KC DAN KP</text>

  <rect x="40" y="86" width="342" height="40" rx="6" fill="#ececec" />
  <text x="211" y="110" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">m A + n B &rlhar; p C + q D</text>

  <!-- Rumus Kc -->
  <rect x="40" y="140" width="342" height="84" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="211" y="164" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">TETAPAN KONSENTRASI (KC):</text>
  <text x="211" y="194" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">Kc = ([C]^p [D]^q) / ([A]^m [B]^n)</text>
  <text x="211" y="214" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">HANYA FASA GAS (g) DAN LARUTAN (aq)</text>

  <!-- Rumus Kp -->
  <rect x="40" y="238" width="342" height="84" rx="8" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" />
  <text x="211" y="262" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">TETAPAN TEKANAN PARSIAL (KP):</text>
  <text x="211" y="292" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#3f8f46" letter-spacing="0.8" text-anchor="middle">Kp = (PC^p PD^q) / (PA^m PB^n)</text>
  <text x="211" y="312" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">KHUSUS FASA GAS (g) SAJA</text>

  <rect x="40" y="336" width="342" height="70" rx="6" fill="#ececec" />
  <text x="211" y="358" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">ATURAN PENGECUALIAN FASA ZAT:</text>
  <text x="211" y="378" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PADATAN MURNI (s) &amp; CAIRAN MURNI (l)</text>
  <text x="211" y="396" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">TIDAK DIMASUKKAN KE RUMUS K (NILAINYA 1)</text>

  <!-- Panel Kanan: Hubungan Kp dan Kc -->
  <rect x="412" y="24" width="364" height="392" rx="12" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="428" y="40" width="332" height="32" rx="6" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5" />
  <text x="594" y="62" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">HUBUNGAN KP TERHADAP KC</text>

  <rect x="428" y="96" width="332" height="66" rx="8" fill="#d6f0fb" stroke="#2f7fc1" stroke-width="2" />
  <text x="594" y="136" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">Kp = Kc &times; (RT)^&Delta;n</text>

  <text x="440" y="190" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">KETERANGAN BESARAN:</text>
  <text x="440" y="212" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">R = 0.082 L ATM / (MOL K)</text>
  <text x="440" y="232" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">T = SUHU MUTLAK KELVIN</text>
  <text x="440" y="252" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">&Delta;n = KOEF PRODUK - REAKTAN</text>
  <text x="440" y="272" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">(KHUSUS SPESI BERFASA GAS)</text>

  <rect x="428" y="296" width="332" height="110" rx="8" fill="#fde58a" />
  <text x="594" y="322" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KASUS KHUSUS &Delta;n = 0:</text>
  <text x="594" y="344" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">JIKA &Delta;n = 0 &rarr; Kp = Kc</text>
  <text x="594" y="366" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">CONTOH: H2(g) + I2(g) &rlhar; 2 HI(g)</text>
  <text x="594" y="386" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">&Delta;n = 2 - (1 + 1) = 0</text>
</svg>

*Gambar 6.2: Formulasi penulisan tetapan kesetimbangan Kc, Kp, dan jembatan konversi Kp = Kc(RT)^Δn.*

Bagaimanakah penurunan kuantitatif rumus kesetimbangan ini?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Tetapan Kesetimbangan Konsentrasi ($K_c$)
Untuk reaksi umum:
$$a\ \ce{A} + b\ \ce{B} \rightleftharpoons c\ \ce{C} + d\ \ce{D}$$

Ungkapan **tetapan kesetimbangan konsentrasi ($K_c$)** dirumuskan sebagai rasio perkalian konsentrasi produk berpangkat koefisiennya terhadap perkalian konsentrasi reaktan berpangkat koefisiennya pada saat setimbang:

$$K_c = \frac{[\ce{C}]^c [\ce{D}]^d}{[\ce{A}]^a [\ce{B}]^b}$$

*Makna Fisis Rumus:* Nilai $K_c$ mencerminkan posisi kesetimbangan: jika $K_c \gg 1$, sistem didominasi oleh produk (reaksi cenderung tuntas ke kanan); jika $K_c \ll 1$, sistem didominasi oleh reaktan (reaksi sukar berlangsung ke kanan).

##### B. Aturan Fasa Zat dalam Rumus $K$
1. **Fasa yang Dimasukkan ke Rumus $K_c$:** Hanya zat yang berfasa gas $(g)$ dan larutan $(aq)$, karena konsentrasi kedua fasa ini dapat bervariasi secara bebas.
2. **Pengecualian Fasa Padat Murni $(s)$ dan Cairan Murni $(l)$:** Padatan dan cairan murni memiliki kerapatan massa jenis konstan, sehingga konsentrasi efektifnya dianggap tetap dan telah digabungkan ke dalam nilai tetapan $K$. Nilainya diganti dengan angka $1$.

##### C. Tetapan Kesetimbangan Tekanan Parsial ($K_p$)
Khusus untuk reaksi yang melibatkan zat-zat berwujud gas, tetapan kesetimbangan dapat dinyatakan dengan **tekanan parsial gas ($P$)**:

$$K_p = \frac{(P_{\ce{C}})^c (P_{\ce{D}})^d}{(P_{\ce{A}})^a (P_{\ce{B}})^b}$$

Tekanan parsial suatu gas dihitung menggunakan fraksi mol gas ($X$) dikalikan tekanan total sistem ($P_{\text{total}}$):
$$P_{\ce{A}} = X_{\ce{A}} \times P_{\text{total}} = \left(\frac{n_{\ce{A}}}{n_{\text{total gas}}}\right) \times P_{\text{total}}$$

##### D. Hubungan $K_p$ dan $K_c$
Berdasarkan persamaan gas ideal $P = \frac{n}{V} RT = [\text{Konsentrasi}] \times RT$, hubungan antara $K_p$ dan $K_c$ dinyatakan sebagai:

$$K_p = K_c (R T)^{\Delta n}$$

- $R = 0.082\ \text{L atm mol}^{-1}\ \text{K}^{-1}$ (tetapan gas ideal)
- $T$ = suhu mutlak dalam Kelvin ($T = ^\circ\text{C} + 273$)
- $\Delta n = \sum \text{koefisien gas produk} - \sum \text{koefisien gas reaktan}$

##### E. Manipulasi Persamaan Reaksi dan Nilai $K$
1. Jika persamaan reaksi **dibalik**, nilai $K$ baru menjadi kebalikannya: $K_{\text{baru}} = \frac{1}{K_{\text{lama}}}$.
2. Jika persamaan reaksi **dikalikan dengan faktor $n$**, nilai $K$ baru dipangkatkan dengan $n$: $K_{\text{baru}} = (K_{\text{lama}})^n$.
3. Jika dua atau lebih persamaan reaksi **dijumlahkan**, nilai $K$ reaksi akhir adalah **hasil kali** dari nilai-nilai $K$ masing-masing tahapan: $K_{\text{total}} = K_1 \times K_2$.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Nilai numerik $K_c$ dan $K_p$ **hanya dipengaruhi oleh perubahan suhu**. Perubahan konsentrasi, volume, atau tekanan sistem tidak mengubah nilai tetapan $K$.
> **Batas Keberlakuan:** Pada rumus $K_p = K_c(RT)^{\Delta n}$, nilai $\Delta n$ hanya menghitung koefisien zat berwujud **gas $(g)$** saja. Koefisien zat padat $(s)$ atau larutan $(aq)$ tidak boleh diikutsertakan dalam menghitung $\Delta n$.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Tuliskan ungkapan $K_c$ dan $K_p$ untuk reaksi pembentukan gas kapur: $\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$, dan jelaskan apa yang terjadi pada nilai $K_p$ jika jumlah padatan $\ce{CaCO3}$ dilipatgandakan!  
*Jawaban & Analisis:* Karena $\ce{CaCO3}$ dan $\ce{CaO}$ berfasa padat murni $(s)$, keduanya tidak dimasukkan ke dalam rumus tetapan. Maka:
$$K_c = [\ce{CO2}] \quad \text{dan} \quad K_p = P_{\ce{CO2}}$$
Melipatgandakan jumlah padatan $\ce{CaCO3}$ **sama sekali tidak mengubah nilai $K_p$ maupun tekanan gas $\ce{CO2}$ saat setimbang**, karena zat padat tidak memengaruhi kesetimbangan gas dan nilai $K_p$ hanya bergantung pada suhu pemanasan.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Pada suhu $27\ ^\circ\text{C}$, reaksi kesetimbangan:
$$2\ \ce{SO2(g) + O2(g) <=> 2 SO3(g)}$$
memiliki nilai tetapan kesetimbangan konsentrasi $K_c = 4.0 \times 10^2$. Tentukan nilai tetapan kesetimbangan tekanan parsial ($K_p$) pada suhu tersebut ($R = 0.082\ \text{L atm mol}^{-1}\ \text{K}^{-1}$)!

**Strategi Langkah demi Langkah:**
1. *Konversi Suhu ke Satuan Kelvin:*  
   $$T = 27 + 273 = 300\ \text{K}$$
2. *Hitung Nilai Selisih Koefisien Gas ($\Delta n$):*  
   Koefisien gas produk = $2$ ($\ce{SO3}$).  
   Koefisien gas reaktan = $2 + 1 = 3$ ($\ce{SO2}$ dan $\ce{O2}$).  
   $$\Delta n = \sum \text{produk} - \sum \text{reaktan} = 2 - 3 = -1$$
3. *Gunakan Rumus Hubungan $K_p = K_c(RT)^{\Delta n}$:*  
   $$K_p = K_c \times (R T)^{-1} = \frac{K_c}{R T}$$
4. *Masukkan Data Angka:*  
   $$R T = 0.082 \times 300 = 24.6$$  
   $$K_p = \frac{400}{24.6} \approx 16.26$$

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Menghitung $\Delta n = \text{Reaktan} - \text{Produk} = 3 - 2 = +1$.
> **Koreksi Konseptual:** Rumus $\Delta n$ selalu **Kanan dikurang Kiri (Produk - Reaktan)**. Jika koefisien produk lebih sedikit daripada reaktan, nilai $\Delta n$ wajib bertanda negatif sehingga suku $(RT)$ berada di penyebut pembagian.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Karena $\Delta n = -1$, maka $K_p = K_c / (RT)$. Karena $RT \approx 25 > 1$, maka nilai $K_p$ harus lebih kecil daripada $K_c$. Nilai hitung kita: $16.26 < 400$. Konsisten dan logis secara matematis!  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 3 (Gas Ideal): Hubungan $K_p$ dan $K_c$ ini adalah konsekuensi langsung dari hukum gas ideal $PV = nRT \rightarrow P = CRT$.

##### 🎯 Latihan Terbimbing
1. Diketahui reaksi: $\ce{N2(g) + 3 H2(g) <=> 2 NH3(g)}$ memiliki $K_c = 16$ pada suhu tertentu. Berapakah nilai $K_c$ untuk reaksi penguraian amonia: $\ce{NH3(g) <=> 1/2 N2(g) + 3/2 H2(g)}$ pada suhu yang sama? *(Kunci Jawaban Akhir: 1/4 atau 0.25)*
2. Dalam wadah tertutup bervolume $1\ \text{liter}$ pada keadaan setimbang terdapat $0.2\ \text{mol}\ \ce{CO}$, $0.1\ \text{mol}\ \ce{H2O}$, $0.4\ \text{mol}\ \ce{CO2}$, dan $0.2\ \text{mol}\ \ce{H2}$ menurut reaksi: $\ce{CO(g) + H2O(g) <=> CO2(g) + H2(g)}$. Hitunglah nilai $K_c$ reaksi tersebut! *(Kunci Jawaban Akhir: 4)*`
    },

    // =========================================================================
    // SUBBAB 6.3
    // =========================================================================
    {
      id: 'sma6-3',
      title: '6.3 Perhitungan Komposisi Kesetimbangan, Derajat Disosiasi (α), dan Interpretasi Nilai K',
      difficulty: 'Hard',
      estimatedMinutes: 50,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Jika seorang kimiawan mencampurkan sejumlah mol zat A dan zat B ke dalam bejana tertutup, bagaimana kita bisa meramalkan apakah campuran tersebut akan bereaksi ke kanan membentuk produk, atau justru produk yang sudah ada akan terurai kembali ke kiri? Dan ketika kesetimbangan akhirnya tiba, berapa persen zat awal yang telah terurai?

Untuk menjawab arah pergerakan sistem, kita menggunakan instrumen komparasi yang disebut **Kuosien Reaksi ($Q_c$)**. $Q_c$ dihitung dengan rumus yang identik dengan $K_c$, tetapi menggunakan konsentrasi zat pada saat sembarang (belum tentu setimbang). Dengan membandingkan nilai $Q_c$ terhadap nilai patokan $K_c$, kita dapat meramalkan arah pergeseran partikel dengan kepastian mutlak.

Amati neraca perbandingan nilai kuosien reaksi ($Q_c$) terhadap tetapan kesetimbangan ($K_c$) pada Gambar 6.3 berikut.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b06-kuosien-reaksi-title sma-b06-kuosien-reaksi-desc" data-diagram="sma-b06-kuosien-reaksi" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b06-kuosien-reaksi-title">PREDIKSI ARAH REAKSI BERDASARKAN KUOSIEN REAKSI QC VS KC</title>
  <desc id="sma-b06-kuosien-reaksi-desc">Diagram perbandingan kuosien reaksi Qc terhadap Kc untuk menentukan apakah reaksi bergeser ke kanan, sudah setimbang, atau bergeser ke kiri.</desc>
  
  <!-- Kotak 1: Qc < Kc (Kiri) -->
  <rect x="24" y="24" width="236" height="392" rx="10" fill="#ffffff" stroke="#2f7fc1" stroke-width="2" />
  <rect x="36" y="36" width="212" height="30" rx="6" fill="#8fd3ef" />
  <text x="142" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KASUS 1: Qc &lt; Kc</text>

  <rect x="36" y="90" width="212" height="120" rx="8" fill="#d6f0fb" />
  <text x="142" y="120" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PRODUK MASIH TERLALU SEDIKIT</text>
  <text x="142" y="144" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">REAKTAN TERLALU BANYAK</text>
  <line x1="70" y1="180" x2="200" y2="180" stroke="#2f7fc1" stroke-width="3" />
  <polygon points="210,180 196,172 196,188" fill="#2f7fc1" />
  <text x="142" y="172" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">ARAH MAJU (&rarr;)</text>

  <rect x="36" y="230" width="212" height="170" rx="8" fill="#ececec" />
  <text x="142" y="260" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">BERGESER KE KANAN</text>
  <text x="142" y="290" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">SISTEM MEMBENTUK PRODUK</text>
  <text x="142" y="316" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">HINGGA NILAI Qc NAIK</text>
  <text x="142" y="342" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">TEPAT MENYAMAI Kc</text>

  <!-- Kotak 2: Qc = Kc (Tengah) -->
  <rect x="282" y="24" width="236" height="392" rx="10" fill="#ffffff" stroke="#3f8f46" stroke-width="2" />
  <rect x="294" y="36" width="212" height="30" rx="6" fill="#b5efb0" />
  <text x="400" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KASUS 2: Qc = Kc</text>

  <rect x="294" y="90" width="212" height="120" rx="8" fill="#b5efb0" />
  <text x="400" y="120" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KOMPOSISI TELAH SEIMBANG</text>
  <text x="400" y="144" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">LAJU MAJU = LAJU BALIK</text>
  <line x1="330" y1="174" x2="470" y2="174" stroke="#3f8f46" stroke-width="2.5" />
  <polygon points="474,174 464,168 464,180" fill="#3f8f46" />
  <line x1="470" y1="186" x2="330" y2="186" stroke="#3f8f46" stroke-width="2.5" />
  <polygon points="326,186 336,180 336,192" fill="#3f8f46" />

  <rect x="294" y="230" width="212" height="170" rx="8" fill="#ececec" />
  <text x="400" y="260" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#3f8f46" letter-spacing="0.8" text-anchor="middle">SISTEM SETIMBANG</text>
  <text x="400" y="290" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">TIDAK ADA PERGESERAN NETTO</text>
  <text x="400" y="316" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">KONSENTRASI SELURUH ZAT</text>
  <text x="400" y="342" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">BERNILAI KONSTAN</text>

  <!-- Kotak 3: Qc > Kc (Kanan) -->
  <rect x="540" y="24" width="236" height="392" rx="10" fill="#ffffff" stroke="#d64545" stroke-width="2" />
  <rect x="552" y="36" width="212" height="30" rx="6" fill="#f5a3a3" />
  <text x="658" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KASUS 3: Qc &gt; Kc</text>

  <rect x="552" y="90" width="212" height="120" rx="8" fill="#f5a3a3" />
  <text x="658" y="120" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PRODUK TERLALU BANYAK</text>
  <text x="658" y="144" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">REAKTAN TERLALU SEDIKIT</text>
  <line x1="720" y1="180" x2="590" y2="180" stroke="#d64545" stroke-width="3" />
  <polygon points="580,180 594,172 594,188" fill="#d64545" />
  <text x="658" y="172" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">ARAH BALIK (&larr;)</text>

  <rect x="552" y="230" width="212" height="170" rx="8" fill="#ececec" />
  <text x="658" y="260" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">BERGESER KE KIRI</text>
  <text x="658" y="290" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PRODUK TERURAI KEMBALI</text>
  <text x="658" y="316" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">HINGGA NILAI Qc TURUN</text>
  <text x="658" y="342" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">TEPAT MENYAMAI Kc</text>
</svg>

*Gambar 6.3: Prediksi arah pergeseran kesetimbangan berdasarkan nilai kuosien reaksi (Qc) versus tetapan Kc.*

Bagaimanakah alur bagan M-B-S digunakan untuk menghitung konsentrasi saat setimbang dan derajat disosiasi?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Kuosien Reaksi ($Q_c$) sebagai Kompas Arah Reaksi
**Kuosien Reaksi ($Q_c$)** adalah nilai perbandingan konsentrasi produk terhadap reaktan pada kondisi sembarang:

$$Q_c = \frac{[\ce{C}]^c [\ce{D}]^d}{[\ce{A}]^a [\ce{B}]^b} \quad (\text{pada saat } t \text{ sembarang})$$

*Makna Fisis Rumus:* Membandingkan $Q_c$ dengan $K_c$ memberi tahu kita apakah sistem saat ini kekurangan produk atau kelebihan produk dibanding kondisi setimbang idealnya.

Tiga kemungkinan hubungan $Q_c$ terhadap $K_c$:
1. **$Q_c < K_c$:** Sistem kekurangan produk. Reaksi bergeser **ke kanan** (membentuk lebih banyak produk) hingga $Q_c = K_c$.
2. **$Q_c = K_c$:** Sistem sudah berada pada keadaan **kesetimbangan dinamis**. Tidak ada perubahan konsentrasi neto.
3. **$Q_c > K_c$:** Sistem kelebihan produk. Reaksi bergeser **ke kiri** (mengurai produk menjadi reaktan) hingga $Q_c = K_c$.

##### B. Derajat Disosiasi ($\alpha$)
**Derajat disosiasi ($\alpha$)** adalah fraksi atau persentase zat pereaksi mula-mula yang telah terurai saat kesetimbangan tercapai:

$$\alpha = \frac{\text{Jumlah Mol Zat yang Terurai (Bereaksi)}}{\text{Jumlah Mol Zat Mula-Mula}}$$

*Makna Fisis Rumus:* Nilai $\alpha$ berkisar antara $0$ hingga $1$ (atau $0\%$ hingga $100\%$). Jika $\alpha = 0$, tidak ada zat yang terurai; jika $\alpha = 1$, zat terurai sempurna secara berkesudahan (*irreversible*).

##### C. Bagan M-B-S (Mula-mula, Bereaksi, Setimbang)
Untuk menghitung komposisi kesetimbangan, selalu susun baris stoikiometri:
1. **Baris M (Mula-mula):** Tuliskan mol atau molaritas awal masing-masing zat sebelum reaksi terjadi.
2. **Baris B (Bereaksi):** Gunakan variabel $x$ (misal $-a x$ untuk reaktan dan $+c x$ untuk produk) sesuai perbandingan koefisien reaksi setara.
3. **Baris S (Setimbang):** Jumlahkan baris Mula-mula dan Bereaksi ($S = M - B$ untuk reaktan, $S = M + B$ untuk produk).
4. Masukkan ekspresi baris S ke dalam rumus $K_c$ untuk menyelesaikan nilai aljabar $x$.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Bagan M-B-S dapat diisi dalam satuan **mol** atau **molaritas ($\text{M}$)** asalkan volume wadah reaksi konstan.
> **Batas Keberlakuan:** Jika bagan M-B-S diisi dalam satuan mol, maka sebelum angka-angka baris S dimasukkan ke dalam rumus $K_c$, seluruh mol wajib dibagi terlebih dahulu dengan volume wadah dalam liter ($[\text{Zat}] = n / V$).

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Dalam suatu bejana $1\ \text{liter}$ pada suhu $500\ \text{K}$, nilai $K_c$ reaksi: $\ce{N2(g) + 3 H2(g) <=> 2 NH3(g)}$ adalah $60$. Jika saat tertentu dianalisis terdapat $0.1\ \text{M}\ \ce{N2}$, $0.1\ \text{M}\ \ce{H2}$, dan $0.1\ \text{M}\ \ce{NH3}$, ke manakah arah reaksi akan berjalan?  
*Jawaban & Analisis:* Hitung nilai kuosien reaksi $Q_c$:
$$Q_c = \frac{[\ce{NH3}]^2}{[\ce{N2}][\ce{H2}]^3} = \frac{(0.1)^2}{(0.1) \times (0.1)^3} = \frac{0.01}{0.0001} = 100$$
Karena $Q_c = 100 > K_c = 60$, konsentrasi produk amonia di dalam wadah saat ini relatif terlalu tinggi dibandingkan keadaan setimbangnya. Sistem akan secara spontan bergeser **ke arah kiri** (mengurai sebagian gas $\ce{NH3}$ menjadi gas $\ce{N2}$ dan $\ce{H2}$) hingga nilai $Q_c$ turun tepat menyamai $60$.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Sebanyak $0.8\ \text{mol}$ gas $\ce{PCl5}$ dimasukkan ke dalam wadah tertutup bervolume $2\ \text{liter}$ dan dipanaskan hingga terurai menurut reaksi:
$$\ce{PCl5(g) <=> PCl3(g) + Cl2(g)}$$
Jika pada saat kesetimbangan tercapai masih tersisa $0.2\ \text{mol}$ gas $\ce{PCl5}$, tentukan:  
(a) Derajat disosiasi ($\alpha$) dari gas $\ce{PCl5}$!  
(b) Nilai tetapan kesetimbangan konsentrasi ($K_c$)!

**Strategi Langkah demi Langkah:**
1. *Susun Bagan M-B-S dalam Satuan Mol:*  
   - $\ce{PCl5}$ mula-mula = $0.8\ \text{mol}$, sisa saat setimbang = $0.2\ \text{mol}$.  
   - Mol $\ce{PCl5}$ yang bereaksi (terurai) = $0.8 - 0.2 = 0.6\ \text{mol}$.  
   - Berdasarkan koefisien $1 : 1 : 1$, mol $\ce{PCl3}$ dan $\ce{Cl2}$ yang terbentuk masing-masing = $0.6\ \text{mol}$.
   $$\begin{array}{lcccc}
   & \ce{PCl5(g)} & \rightleftharpoons & \ce{PCl3(g)} & + & \ce{Cl2(g)} \\
   \text{M:} & 0.8 & & 0 & & 0 \\
   \text{B:} & -0.6 & & +0.6 & & +0.6 \\
   \text{S:} & 0.2 & & 0.6 & & 0.6
   \end{array}$$
2. *Hitung Derajat Disosiasi ($\alpha$):*  
   $$\alpha = \frac{\text{mol terurai}}{\text{mol mula-mula}} = \frac{0.6\ \text{mol}}{0.8\ \text{mol}} = 0.75 \quad (75\%)$$
3. *Konversi Mol Setimbang Menjadi Konsentrasi Molar ($V = 2\ \text{L}$):*  
   $$[\ce{PCl5}] = \frac{0.2\ \text{mol}}{2\ \text{L}} = 0.1\ \text{M}$$  
   $$[\ce{PCl3}] = \frac{0.6\ \text{mol}}{2\ \text{L}} = 0.3\ \text{M}, \quad [\ce{Cl2}] = \frac{0.6\ \text{mol}}{2\ \text{L}} = 0.3\ \text{M}$$
4. *Hitung Nilai $K_c$:*  
   $$K_c = \frac{[\ce{PCl3}] [\ce{Cl2}]}{[\ce{PCl5}]} = \frac{0.3 \times 0.3}{0.1} = \frac{0.09}{0.1} = 0.90$$

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Langsung memasukkan angka mol dari baris S ($0.6$ dan $0.2$) ke dalam rumus $K_c$ tanpa membaginya dengan volume wadah $2\ \text{liter}$.
> **Koreksi Konseptual:** Rumus $K_c$ wajib menggunakan satuan **Molaritas ($\text{mol L}^{-1}$)**. Memasukkan mol langsung hanya boleh dilakukan jika jumlah koefisien di ruas kiri sama persis dengan ruas kanan ($\Delta n = 0$) karena faktor volume saling mencoret. Pada reaksi ini $\Delta n = (1+1) - 1 = 1$, sehingga volume wajib diperhitungkan!

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Periksa jika mol langsung dipakai tanpa dibagi $2$: $K = (0.6 \times 0.6) / 0.2 = 1.8$ (dua kali lipat salah!). Karena wadah bervolume $2\ \text{L}$, pembagian dengan volume menghasilkan $K_c = 0.90$.  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 3 (Konsep Mol): Baris Bereaksi pada bagan M-B-S wajib mematuhi rasio perbandingan koefisien reaksi setara.

##### 🎯 Latihan Terbimbing
1. Sebanyak $1.0\ \text{mol}$ gas $\ce{HI}$ dipanaskan dalam bejana $1\ \text{liter}$ hingga terurai $20\%$ membentuk gas $\ce{H2}$ dan $\ce{I2}$ menurut reaksi: $2\ \ce{HI(g) <=> H2(g) + I2(g)}$. Tentukan komposisi mol masing-masing gas saat kesetimbangan tercapai! *(Kunci Jawaban Akhir: Mol HI = 0.8 mol, Mol H2 = 0.1 mol, Mol I2 = 0.1 mol)*
2. Diketahui reaksi: $\ce{CO(g) + H2O(g) <=> CO2(g) + H2(g)}$ memiliki $K_c = 9.0$. Jika $1.0\ \text{mol}\ \ce{CO}$ dan $1.0\ \text{mol}\ \ce{H2O}$ direaksikan dalam wadah $1\ \text{liter}$, hitunglah konsentrasi gas $\ce{CO2}$ yang terbentuk pada keadaan setimbang! *(Kunci Jawaban Akhir: 0.75 M)*`
    },

    // =========================================================================
    // SUBBAB 6.4
    // =========================================================================
    {
      id: 'sma6-4',
      title: '6.4 Pergeseran Kesetimbangan Berdasarkan Asas Le Chatelier',
      difficulty: 'Medium',
      estimatedMinutes: 50,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Pernahkah Anda mencoba mendorong seseorang yang sedang berdiri seimbang? Reaksi alami tubuh orang tersebut adalah memajukan kaki atau menyandarkan badannya ke arah berlawanan untuk melawan dorongan Anda agar tidak terjatuh.

Prinsip perlawanan yang sama berlaku pada sistem kimiawi di alam semesta. Henri Louis Le Chatelier pada tahun 1884 merumuskan prinsip universal: jika suatu sistem kesetimbangan diberikan gangguan aksi dari luar, sistem akan merespons dengan cara melakukan pergeseran netto untuk meminimalkan dampak gangguan tersebut.

Pelajari representasi aksi versus reaksi Asas Le Chatelier untuk empat faktor lingkungan pada Gambar 6.4 berikut.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b06-le-chatelier-title sma-b06-le-chatelier-desc" data-diagram="sma-b06-le-chatelier" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b06-le-chatelier-title">ASAS LE CHATELIER DAN EMPAT FAKTOR PERGESERAN</title>
  <desc id="sma-b06-le-chatelier-desc">Bagan rangkuman pengaruh perubahan konsentrasi, volume atau tekanan, suhu, dan penambahan katalis terhadap pergeseran kesetimbangan.</desc>
  
  <!-- Kotak 1: Konsentrasi (Kiri Atas) -->
  <rect x="24" y="24" width="364" height="186" rx="10" fill="#ffffff" stroke="#2f7fc1" stroke-width="2" />
  <rect x="36" y="36" width="340" height="30" rx="6" fill="#8fd3ef" />
  <text x="206" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">1. PENGARUH KONSENTRASI</text>
  <text x="44" y="92" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">AKSI: KONSENTRASI DITAMBAH</text>
  <text x="44" y="112" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">&rarr; BERGESER MENJAUHI ZAT TERSEBUT</text>
  <text x="44" y="140" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">AKSI: KONSENTRASI DIKURANGI</text>
  <text x="44" y="160" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">&rarr; BERGESER MENDEKATI ZAT TERSEBUT</text>
  <rect x="36" y="174" width="340" height="26" rx="4" fill="#ececec" />
  <text x="206" y="192" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">NILAI TETAPAN K TETAP SAMA</text>

  <!-- Kotak 2: Tekanan & Volume (Kanan Atas) -->
  <rect x="412" y="24" width="364" height="186" rx="10" fill="#ffffff" stroke="#3f8f46" stroke-width="2" />
  <rect x="424" y="36" width="340" height="30" rx="6" fill="#b5efb0" />
  <text x="594" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">2. PENGARUH VOLUME &amp; TEKANAN</text>
  <text x="432" y="92" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">AKSI: VOLUME BESAR (TEKANAN TURUN)</text>
  <text x="432" y="112" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">&rarr; GESER KE KOEFISIEN GAS BESAR</text>
  <text x="432" y="140" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">AKSI: VOLUME KECIL (TEKANAN NAIK)</text>
  <text x="432" y="160" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">&rarr; GESER KE KOEFISIEN GAS KECIL</text>
  <rect x="424" y="174" width="340" height="26" rx="4" fill="#ececec" />
  <text x="594" y="192" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">JIKA &Delta;n = 0 : TIDAK BERGESER</text>

  <!-- Kotak 3: Suhu Lingkungan (Kiri Bawah) -->
  <rect x="24" y="226" width="364" height="196" rx="10" fill="#ffffff" stroke="#d64545" stroke-width="2" />
  <rect x="36" y="238" width="340" height="30" rx="6" fill="#f5a3a3" />
  <text x="206" y="258" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">3. PENGARUH SUHU (TEMPERATUR)</text>
  <text x="44" y="294" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">AKSI: SUHU DINAIKKAN (+ KALOR)</text>
  <text x="44" y="314" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">&rarr; GESER KE ENDOTERM (&Delta;H &gt; 0)</text>
  <text x="44" y="342" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">AKSI: SUHU DITURUNKAN (- KALOR)</text>
  <text x="44" y="362" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">&rarr; GESER KE EKSOTERM (&Delta;H &lt; 0)</text>
  <rect x="36" y="380" width="340" height="32" rx="4" fill="#fde58a" />
  <text x="206" y="401" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">SATU-SATUNYA FAKTOR PENGUBAH NILAI K</text>

  <!-- Kotak 4: Katalis (Kanan Bawah) -->
  <rect x="412" y="226" width="364" height="196" rx="10" fill="#ffffff" stroke="#8a939c" stroke-width="2" />
  <rect x="424" y="238" width="340" height="30" rx="6" fill="#fde58a" />
  <text x="594" y="258" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">4. PENGARUH PENAMBAHAN KATALIS</text>
  <rect x="424" y="280" width="340" height="74" rx="8" fill="#ececec" />
  <text x="594" y="304" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">KATALIS TIDAK GESER KESETIMBANGAN</text>
  <text x="594" y="326" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">PERCEPAT LAJU MAJU DAN BALIK SEIMBANG</text>
  <text x="594" y="344" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">DENGAN FAKTOR KELIPATAN SAMA</text>
  <rect x="424" y="366" width="340" height="46" rx="6" fill="#b5efb0" />
  <text x="594" y="386" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8" text-anchor="middle">FUNGSI UTAMA: MEMPERCEPAT WAKTU</text>
  <text x="594" y="404" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">UNTUK MENCAPAI KEADAAN SETIMBANG</text>
</svg>

*Gambar 6.4: Ikhtisar kaidah pergeseran kesetimbangan kimia berdasarkan Asas Le Chatelier.*

Bagaimanakah bunyi formal dan aturan operasional Asas Le Chatelier?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Pernyataan Asas Le Chatelier
**Asas Le Chatelier** menyatakan bahwa jika suatu sistem kesetimbangan diberikan aksi berupa gangguan luar (perubahan konsentrasi, volume, tekanan, atau suhu), sistem akan bergeser ke arah yang meminimalkan pengaruh aksi tersebut untuk membentuk keadaan kesetimbangan baru:

$$\text{Reaksi Sistem} = - (\text{Aksi Gangguan})$$

*Makna Fisis Rumus:* Sistem kimiawi selalu berusaha memulihkan nilai perbandingan $Q_c$ agar kembali sama dengan nilai tetapan kesetimbangan $K_c$.

##### B. Empat Faktor Gangguan Kesetimbangan
1. **Pengaruh Konsentrasi:**
   - Jika konsentrasi salah satu zat **ditambah**, sistem bergeser **menjauhi** zat tersebut (ke ruas berlawanan) untuk menghabiskan kelebihan zat.
   - Jika konsentrasi salah satu zat **dikurangi**, sistem bergeser **mendekati** zat tersebut (ke ruas zat itu berada) untuk mengganti kekurangan zat.
2. **Pengaruh Tekanan dan Volume (Khusus Gas):**
   - Jika **tekanan diperbesar** (volume diperkecil), sistem bergeser ke arah ruas dengan **jumlah koefisien gas yang lebih kecil** (mengurangi kerapatan partikel gas).
   - Jika **tekanan diperkecil** (volume diperbesar), sistem bergeser ke arah ruas dengan **jumlah koefisien gas yang lebih besar**.
   - Jika koefisien gas kiri sama dengan kanan ($\Delta n = 0$), perubahan tekanan dan volume tidak menggeser kesetimbangan.
3. **Pengaruh Suhu (Satu-satunya Pengubah Nilai $K$):**
   - Jika **suhu dinaikkan**, sistem menyerap kalor dengan bergeser ke arah **reaksi endoterm ($\Delta H > 0$)**. Nilai $K$ meningkat jika arah maju endoterm.
   - Jika **suhu diturunkan**, sistem melepas kalor dengan bergeser ke arah **reaksi eksoterm ($\Delta H < 0$)**. Nilai $K$ meningkat jika arah maju eksoterm.
4. **Pengaruh Katalis:**
   - Katalis menurunkan energi aktivasi reaksi maju dan reaksi balik secara seimbang.
   - **Katalis tidak menggeser arah kesetimbangan dan tidak mengubah komposisi maupun nilai $K$**. Katalis hanya mempercepat tercapainya keadaan setimbang.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Pengaruh volume dan tekanan hanya berlaku untuk zat-zat yang berwujud **gas $(g)$**.
> **Batas Keberlakuan:** Penambahan gas mulia inert (seperti $\ce{He}$ atau $\ce{Ar}$) pada **volume wadah tetap** tidak menggeser kesetimbangan karena tekanan parsial gas-gas pereaksi tidak berubah. Menambahkan padatan murni $(s)$ ke dalam kesetimbangan heterogen tidak menggeser kesetimbangan karena konsentrasi efektif padatan bernilai konstan.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Diberikan reaksi kesetimbangan eksoterm:  
$$2\ \ce{SO2(g)} + \ce{O2(g)} \rightleftharpoons 2\ \ce{SO3(g)} \quad \Delta H = -198\ \text{kJ}$$  
Bagaimanakah cara menggeser kesetimbangan agar produksi gas belerang trioksida ($\ce{SO3}$) maksimum?  
*Jawaban & Analisis:* Untuk memaksimalkan gas $\ce{SO3}$ (menggeser ke arah kanan):  
1. *Konsentrasi:* Tambahkan gas $\ce{SO2}$ atau $\ce{O2}$ berlebih, atau segera pisahkan gas $\ce{SO3}$ yang terbentuk.  
2. *Tekanan/Volume:* Perbesar tekanan sistem (perkecil volume) karena koefisien gas produk ($2$) lebih kecil daripada reaktan ($2 + 1 = 3$).  
3. *Suhu:* Turunkan suhu sistem karena reaksi pembentukan $\ce{SO3}$ bersifat eksoterm ($\Delta H < 0$), sehingga penurunan suhu mendorong reaksi ke arah kanan.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Perhatikan sistem kesetimbangan penguraian gas dinitrogen tetroksida:
$$\ce{N2O4(g) <=> 2 NO2(g)} \quad \Delta H = +57\ \text{kJ}$$
Gas $\ce{N2O4}$ tidak berwarna, sedangkan gas $\ce{NO2}$ berwarna cokelat pekat. Ramalkan perubahan warna campuran gas (menjadi lebih cokelat atau memudar) jika:  
(a) Campuran dipanaskan pada suhu tinggi!  
(b) Volume wadah diperkecil menjadi setengahnya!  
(c) Ditambahkan gas $\ce{N2O4}$ ke dalam wadah!

**Strategi Langkah demi Langkah:**
1. *Analisis Efek Pemanasan (Suhu Naik):*  
   Reaksi maju bersifat endoterm ($\Delta H = +57\ \text{kJ}$). Kenaikan suhu mendorong kesetimbangan bergeser ke arah endoterm, yaitu **ke arah kanan (membentuk $\ce{NO2}$)**. Akibatnya, jumlah molekul $\ce{NO2}$ bertambah dan warna campuran berubah **menjadi lebih cokelat gelap**.
2. *Analisis Efek Volume Diperkecil (Tekanan Naik):*  
   Pengecilan volume menaikkan tekanan gas. Sistem merespons dengan bergeser ke arah ruas dengan jumlah koefisien gas lebih kecil. Koefisien kiri = $1$ ($\ce{N2O4}$), koefisien kanan = $2$ ($\ce{NO2}$). Kesetimbangan bergeser **ke arah kiri**. Jumlah molekul $\ce{NO2}$ berkurang sehingga warna cokelat **memudar**.
3. *Analisis Penambahan Gas $\ce{N2O4}$:*  
   Menambah zat di ruas kiri mendorong sistem bergeser **ke arah kanan** untuk menghabiskan kelebihan tersebut, menghasilkan lebih banyak $\ce{NO2}$, sehingga warna campuran menjadi **lebih cokelat**.

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Menganggap bahwa pada pengecilan volume wadah di poin (b), konsentrasi seluruh gas awalnya memadat sehingga warna seketika mencokelat, lalu menyimpulkan sistem bergeser ke kanan.
> **Koreksi Konseptual:** Jangan tertukar antara perubahan konsentrasi sesaat akibat kompresi fisik dengan **arah pergeseran netto kesetimbangan**. Secara pergeseran kesetimbangan, penambahan tekanan wajib menggeser sistem ke ruas koefisien terkecil (ke kiri).

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Ingat kaidah mnemonic:  
> Suhu Naik $\rightarrow$ Ke Arah Endoterm ($+$).  
> Tekanan Naik $\rightarrow$ Ke Arah Koefisien Kecil.  
> Tambah Zat $\rightarrow$ Menjauh dari Zat itu.  
> Tiga kaidah ini konsisten 100% memecahkan seluruh soal pergeseran dalam hitungan detik!  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 4 (Termokimia): Tanda $\Delta H$ reaksi maju menentukan sifat endoterm ($+$) atau eksoterm ($-$) yang menjadi acuan respons sistem terhadap perubahan suhu.

##### 🎯 Latihan Terbimbing
1. Pada reaksi kesetimbangan: $\ce{C(s) + H2O(g) <=> CO(g) + H2(g)} \quad \Delta H = +131\ \text{kJ}$, ke manakah arah pergeseran kesetimbangan jika ke dalam wadah ditambahkan serbuk padatan karbon ($\ce{C}$)? *(Kunci Jawaban Akhir: Tidak mengalami pergeseran sama sekali, karena karbon berfasa padat murni yang tidak memengaruhi posisi kesetimbangan gas)*
2. Reaksi pembuatan gas $\ce{HCl}$: $\ce{H2(g) + Cl2(g) <=> 2 HCl(g)} \quad \Delta H = -184\ \text{kJ}$. Apakah kenaikan tekanan wadah akan menambah perolehan gas $\ce{HCl}$? Jelaskan! *(Kunci Jawaban Akhir: Tidak, karena jumlah koefisien gas di ruas kiri [1 + 1 = 2] sama persis dengan ruas kanan [2], sehingga perubahan tekanan tidak menggeser kesetimbangan)*`
    },

    // =========================================================================
    // SUBBAB 6.5
    // =========================================================================
    {
      id: 'sma6-5',
      title: '6.5 Optimasi Kesetimbangan Kimia di Industri (Haber-Bosch dan Kontak)',
      difficulty: 'Hard',
      estimatedMinutes: 50,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Di pabrik kimia skala raksasa, para insinyur menghadapi dilema terbesar dalam termodinamika: sebuah benturan kepentingan antara **persentase hasil (kesetimbangan)** dengan **kecepatan produksi (kinetika)**.

Sebagai contoh pada sintesis amonia: reaksi pembentukan amonia bersifat eksoterm. Menurut Asas Le Chatelier, agar amonia yang dihasilkan melimpah ruah, reaksi harus dijalankan pada suhu sedingin mungkin. Namun menurut Teori Tumbukan (Bab 5), pada suhu dingin, molekul bergerak sangat lambat sehingga reaksi memerlukan waktu berminggu-minggu hanya untuk menghasilkan beberapa tetes amonia. Pabrik akan bangkrut jika menunggu reaksi dingin yang lamban!

Bagaimana para ahli kimia industri memecahkan kontradiksi ini? Mereka menerapkan **kondisi optimum kompromi**.

Perhatikan diagram rekayasa kondisi kompromi proses Haber-Bosch dan proses Kontak pada Gambar 6.5 berikut.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b06-industri-kompromi-title sma-b06-industri-kompromi-desc" data-diagram="sma-b06-industri-kompromi" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b06-industri-kompromi-title">OPTIMASI INDUSTRI KIMIA PROSES HABER-BOSCH DAN PROSES KONTAK</title>
  <desc id="sma-b06-industri-kompromi-desc">Bagan perbandingan kondisi kompromi suhu, tekanan, dan katalis pada sintesis amonia Haber-Bosch dan asam sulfat proses Kontak.</desc>
  
  <!-- Panel Kiri: Proses Haber-Bosch (Sintesis NH3) -->
  <rect x="24" y="24" width="364" height="392" rx="12" fill="#ffffff" stroke="#2f7fc1" stroke-width="2" />
  <rect x="36" y="36" width="340" height="32" rx="6" fill="#8fd3ef" />
  <text x="206" y="58" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PROSES HABER-BOSCH (SINTESIS AMONIA)</text>

  <rect x="36" y="80" width="340" height="42" rx="6" fill="#ececec" />
  <text x="206" y="98" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">N2(g) + 3 H2(g) &rlhar; 2 NH3(g)</text>
  <text x="206" y="114" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">&Delta;H = -92 kJ (EKSOTERM)</text>

  <!-- Tiga Parameter Kompromi Haber-Bosch -->
  <rect x="36" y="132" width="340" height="82" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="44" y="152" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SUHU KOMPROMI: 400 - 450 &deg;C</text>
  <text x="44" y="172" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">SUHU RENDAH: REAKSI LAMBAT</text>
  <text x="44" y="192" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">SUHU 400-450 C: LAJU CUKUP</text>
  <text x="44" y="208" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">15-20% SIKLUS ULANG KONTINU</text>

  <rect x="36" y="224" width="340" height="66" rx="6" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" />
  <text x="44" y="244" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">TEKANAN TINGGI: 150 - 200 ATM</text>
  <text x="44" y="264" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">&bull; GESER KE KANAN (KOEF 4 &rarr; 2)</text>
  <text x="44" y="282" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">&bull; DIBATASI KETAHANAN BIAYA PIPA BAJA</text>

  <rect x="36" y="300" width="340" height="52" rx="6" fill="#ececec" />
  <text x="206" y="322" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KATALIS: SERBUK BESI (Fe) + OKSIDA K &amp; Al</text>
  <text x="206" y="342" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">MEMPERCEPAT TERCAPAINYA KESETIMBANGAN</text>

  <rect x="36" y="362" width="340" height="44" rx="6" fill="#d6f0fb" />
  <text x="206" y="380" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PENGEMBUNAN AMONIA CAIR:</text>
  <text x="206" y="398" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8" text-anchor="middle">NH3 DIEMBUNKAN &rarr; REAKSI GESER MAJU</text>

  <!-- Panel Kanan: Proses Kontak (H2SO4) -->
  <rect x="412" y="24" width="364" height="392" rx="12" fill="#ffffff" stroke="#3f8f46" stroke-width="2" />
  <rect x="424" y="36" width="340" height="32" rx="6" fill="#b5efb0" />
  <text x="594" y="58" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PROSES KONTAK (ASAM SULFAT)</text>

  <rect x="424" y="80" width="340" height="42" rx="6" fill="#ececec" />
  <text x="594" y="98" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">2 SO2(g) + O2(g) &rlhar; 2 SO3(g)</text>
  <text x="594" y="114" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">&Delta;H = -198 kJ (EKSOTERM)</text>

  <!-- Parameter Proses Kontak -->
  <rect x="424" y="132" width="340" height="82" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="432" y="152" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SUHU OPTIMUM: 400 - 450 &deg;C</text>
  <text x="432" y="172" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">&bull; KOMPROMI LAJU DAN RENDEMEN</text>
  <text x="432" y="192" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">&bull; RENDEMEN TINGGI (&gt; 98%)</text>
  <text x="432" y="208" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">&bull; KARENA K TINGGI PADA SUHU INI</text>

  <rect x="424" y="224" width="340" height="66" rx="6" fill="#ececec" />
  <text x="432" y="244" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">TEKANAN: 1 - 2 ATM (TEKANAN ATMOSFER)</text>
  <text x="432" y="264" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">&bull; PADA 1 ATM RENDEMEN SUDAH 98%</text>
  <text x="432" y="282" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">&bull; BIAYA REAKTOR TEKANAN HEMAT</text>

  <rect x="424" y="300" width="340" height="52" rx="6" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5" />
  <text x="594" y="322" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KATALIS: VANADIUM PENTOKSIDA (V2O5)</text>
  <text x="594" y="342" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">AKTIF BEKERJA PADA SUHU &ge; 400 &deg;C</text>

  <rect x="424" y="362" width="340" height="44" rx="6" fill="#ececec" />
  <text x="594" y="380" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PENYERAPAN KE OLEUM:</text>
  <text x="594" y="398" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">SO3 DISERAP KE H2SO4 &rarr; OLEUM</text>
</svg>

*Gambar 6.5: Kondisi kompromi optimum rekayasa industri pada proses Haber-Bosch dan proses Kontak.*

Bagaimanakah analisis ilmiah di balik penentuan angka-angka operasional pabrik tersebut?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Optimalisasi Sintesis Amonia (Proses Haber-Bosch)
Reaksi kesetimbangan pembuatan gas amonia:
$$\ce{N2(g) + 3 H2(g) <=> 2 NH3(g)} \quad \Delta H = -92\ \text{kJ mol}^{-1}$$

*Makna Fisis Rumus:* Reaksi ini bersifat eksotermik dan mengalami penurunan jumlah molekul gas dari $4\ \text{mol}$ pereaksi menjadi $2\ \text{mol}$ produk.

Kondisi operasional pabrik yang dipilih:
1. **Suhu Kompromi ($400\text{--}450\ ^\circ\text{C}$):**  
   Suhu rendah memang menguntungkan kesetimbangan ($\% \ce{NH3}$ teoritis tinggi), tetapi laju reaksi menjadi terlampau lambat. Suhu $400\text{--}450\ ^\circ\text{C}$ dipilih agar reaksi berlangsung cukup cepat dengan rendemen sekitar $15\text{--}20\%$. Gas yang belum bereaksi dipisahkan dan disirkulasikan kembali ke reaktor secara kontinu sehingga efisiensi total mencapai $>95\%$.
2. **Tekanan Sangat Tinggi ($150\text{--}200\ \text{atm}$):**  
   Karena koefisien kanan ($2$) lebih kecil dari kiri ($4$), tekanan tinggi menggeser kesetimbangan ke arah pembentukan $\ce{NH3}$. Tekanan dibatasi pada $200\ \text{atm}$ karena biaya konstruksi pipa baja tebal dan kompresor bertekanan lebih dari itu tidak lagi ekonomis.
3. **Katalis Besi ($\ce{Fe}$):**  
   Serbuk besi berpori dengan promotor $\ce{K2O}$ dan $\ce{Al2O3}$ digunakan untuk menurunkan energi aktivasi pemutusan ikatan rangkap tiga $\ce{N#N}$ yang sangat kokoh.
4. **Pencairan Amonia:**  
   Gas $\ce{NH3}$ memiliki titik didih jauh lebih tinggi dibanding $\ce{N2}$ dan $\ce{H2}$ karena memiliki ikatan hidrogen. Gas campuran didinginkan hingga $\ce{NH3}$ mengembun menjadi cairan dan dikeluarkan dari sistem, yang secara otomatis memicu pergeseran kesetimbangan terus ke arah kanan.

##### B. Optimalisasi Pembuatan Asam Sulfat (Proses Kontak)
Tahap penentu dalam pembuatan $\ce{H2SO4}$ adalah oksidasi sulfur dioksida:
$$2\ \ce{SO2(g) + O2(g) <=> 2 SO3(g)} \quad \Delta H = -198\ \text{kJ mol}^{-1}$$

Kondisi operasional yang diterapkan:
1. **Suhu Kompromi ($400\text{--}450\ ^\circ\text{C}$):**  
   Katalis vanadium pentoksida ($\ce{V2O5}$) hanya aktif bekerja pada suhu di atas $400\ ^\circ\text{C}$. Pada suhu ini, konversi gas $\ce{SO3}$ sudah melampaui $98\%$.
2. **Tekanan Atmosfer Normal ($1\text{--}2\ \text{atm}$):**  
   Meskipun penambahan tekanan secara teoretis menguntungkan pembentukan $\ce{SO3}$ (koefisien $3 \rightarrow 2$), pada tekanan $1\ \text{atm}$ biasa rendemen sudah mencapai $98\%$. Menaikkan tekanan ke ratusan atmosfer hanya membuang biaya investasi peralatan tanpa peningkatan hasil yang signifikan.
3. **Katalis $\ce{V2O5}$:** Mempercepat laju reaksi oksidasi tanpa harus menaikkan suhu lebih tinggi lagi.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Pemilihan kondisi industri selalu merupakan hasil kompromi antara termodinamika (perolehan kesetimbangan), kinetika (laju reaksi per detik), dan faktor keekonomian biaya rekayasa.
> **Batas Keberlakuan:** Gas $\ce{SO3}$ hasil proses Kontak tidak boleh langsung dilarutkan ke dalam air murni ($\ce{SO3 + H2O -> H2SO4}$) karena reaksinya sangat eksotermik dahsyat hingga menghasilkan kabut uap asam sulfat yang korosif dan tidak dapat mengembun. Gas $\ce{SO3}$ wajib dilarutkan terlebih dahulu ke dalam $\ce{H2SO4}$ pekat membentuk oleum ($\ce{H2S2O7}$), baru kemudian diencerkan dengan air secara aman.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Mengapa pada proses Haber-Bosch digunakan tekanan sangat tinggi ($200\ \text{atm}$), sedangkan pada proses Kontak pembuatan asam sulfat cukup menggunakan tekanan atmosfer biasa ($1\ \text{atm}$), padahal kedua reaksi sama-sama mengalami penurunan koefisien gas di ruas kanan?  
*Jawaban & Analisis:* Perbedaannya terletak pada nilai tetapan kesetimbangan ($K_p$) kedua reaksi pada suhu operasional $450\ ^\circ\text{C}$. Pada reaksi pembentukan $\ce{SO3}$, nilai $K_p$ sudah sangat besar sehingga pada tekanan $1\ \text{atm}$ saja konversi sudah mencapai $98\%$; menaikkan tekanan ke ratusan atmosfer tidak diperlukan karena tidak ekonomis. Sebaliknya, pada sintesis amonia, nilai $K_p$ pada $450\ ^\circ\text{C}$ relatif kecil sehingga pada tekanan $1\ \text{atm}$ rendemen $\ce{NH3}$ kurang dari $1\%$. Tekanan raksasa $200\ \text{atm}$ mutlak diwajibkan untuk memaksa kesetimbangan bergeser ke kanan hingga rendemen mencapai tingkat ekonomis.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Sebuah pabrik kimia mengkaji reaksi eksoterm berikut untuk memproduksi senyawa Z:
$$\ce{2 X(g) + Y(g) <=> 2 Z(g)} \quad \Delta H = -85\ \text{kJ}$$
Manajer produksi meminta Anda mengevaluasi 3 usulan perubahan berikut untuk meningkatkan tonase laba harian pabrik:  
(1) Menurunkan suhu reaktor dari $450\ ^\circ\text{C}$ menjadi $50\ ^\circ\text{C}$.  
(2) Memisahkan zat Z secara kontinu dari bejana reaktor begitu terbentuk.  
(3) Menambahkan serbuk katalis yang baru dan lebih efisien.  
Berikan pertimbangan kritis Anda untuk masing-masing usulan!

**Strategi Langkah demi Langkah:**
1. *Evaluasi Usulan (1) - Suhu $50\ ^\circ\text{C}$:*  
   Secara kesetimbangan, penurunan suhu menggeser reaksi ke arah eksoterm (kanan). Namun pada $50\ ^\circ\text{C}$, energi kinetik molekul gas terlampau rendah sehingga laju reaksi menjadi luar biasa lambat. Reaksi membutuhkan waktu berhari-hari untuk setimbang, sehingga menurunkan laba harian pabrik secara drastis. **Usulan ditolak**.
2. *Evaluasi Usulan (2) - Pemisahan Produk Z Kontinu:*  
   Mengeluarkan zat Z membuat konsentrasi produk di dalam wadah selalu rendah ($Q_c < K_c$). Sistem akan terus-menerus bergeser ke kanan untuk memproduksi Z baru tanpa batas kesetimbangan statis. **Usulan sangat direkomendasikan**.
3. *Evaluasi Usulan (3) - Katalis Baru:*  
   Katalis menurunkan energi aktivasi sehingga reaksi mencapai kesetimbangan lebih cepat pada suhu operasi yang sama, menghemat waktu siklus produksi. **Usulan direkomendasikan**.

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Mengira bahwa penambahan katalis pada usulan (3) akan menambah persentase rendemen akhir produk Z.
> **Koreksi Konseptual:** Katalis **tidak menambah jumlah produk saat setimbang**, melainkan hanya mempercepat waktu untuk mencapai kesetimbangan tersebut. Keuntungan industri dari katalis adalah efisiensi waktu dan penghematan biaya energi pemanasan.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Ingat segitiga emas teknik kimia industri: **Kesetimbangan** menentukan seberapa banyak yang dapat dibuat, **Kinetika** menentukan seberapa cepat produk selesai dibuat, dan **Ekonomi** menentukan apakah tekanan dan suhu tersebut layak secara biaya.  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 1 (Kimia Hijau): Daur ulang reaktan yang belum bereaksi pada proses Haber-Bosch merupakan penerapan nyata prinsip pencegahan limbah dan ekonomi atom.

##### 🎯 Latihan Terbimbing
1. Sebutkan fungsi utama dari penambahan katalis serbuk besi pada proses Haber-Bosch! Apakah penambahan katalis tersebut meningkatkan nilai tetapan kesetimbangan $K_c$? *(Kunci Jawaban Akhir: Mempercepat laju pembentukan amonia dengan menurunkan energi aktivasi pemutusan ikatan N≡N; tidak mengubah nilai Kc sama sekali)*
2. Mengapa gas $\ce{SO3}$ pada proses Kontak tidak langsung dilarutkan ke dalam air murni? Tuliskan reaksi yang sebenarnya dilakukan di industri! *(Kunci Jawaban Akhir: Karena reaksi sangat eksotermik dahsyat hingga menghasilkan kabut asam korosif; di industri SO3 dilarutkan ke H2SO4 pekat membentuk oleum: SO3 + H2SO4 -> H2S2O7, kemudian diencerkan dengan air)*`
    },

    // =========================================================================
    // MACRO-LOOP PENUTUP BAB 6
    // =========================================================================
    {
      id: 'sma6-penutup',
      title: 'Penutup Bab 6: Pengayaan Inkuiri, Rangkuman Cepat, & Evaluasi Mandiri',
      difficulty: 'Hard',
      estimatedMinutes: 60,
      content: `### 🚀 Pengayaan Inkuiri & Kontekstual

#### Kesetimbangan Kimia dan Ketahanan Pangan: Warisan Sintesis Amonia Fritz Haber
Tahukah Anda bahwa hampir $50\%$ atom nitrogen di dalam protein tubuh Anda saat ini berasal dari sebuah pabrik kimia yang menerapkan kesetimbangan reaksi?

Pada awal abad ke-20, dunia menghadapi ancaman kelaparan massal global karena cadangan pupuk alami guano (kotoran burung laut di pesisir Peru) menipis drastis. Udara bumi sejatinya dipenuhi oleh gas nitrogen ($\ce{N2}$ menyusun $78\%$ atmosfer), namun ikatan kovalen rangkap tiga $\ce{N#N}$ yang luar biasa kuat membuat tanaman tidak mampu menyerapnya secara langsung.

Fritz Haber dan Carl Bosch menemukan cara menundukkan kesetimbangan reaksi $\ce{N2 + 3 H2 <=> 2 NH3}$ melalui kompromi suhu $450\ ^\circ\text{C}$, tekanan $200\ \text{atm}$, dan katalis besi. Penemuan ini melipatgandakan hasil panen pertanian dunia hingga empat kali lipat dan memungkinkan populasi bumi bertumbuh dari $1.6$ miliar jiwa pada tahun 1900 menjadi lebih dari $8$ miliar jiwa hari ini.

Namun kesetimbangan kimia di industri pupuk kini memicu tantangan ekologis baru: kelebihan pupuk amonia yang terlarut ke perairan memicu ledakan populasi alga (*eutrofikasi*) yang mematikan ekosistem danau dan laut. Solusi masa depan menuntut riset fiksasi nitrogen biologis berbasis nanoteknologi yang mampu beroperasi pada tekanan atmosfer dan suhu kamar.

---

### ⚡ Ringkasan Cepat & Peta Keputusan

#### Tabel Komparasi Pengaruh Gangguan Berdasarkan Asas Le Chatelier

| Faktor Gangguan | Aksi Diberikan | Respons Arah Pergeseran | Efek terhadap Nilai Tetapan $K$ |
| :--- | :--- | :--- | :--- |
| **Konsentrasi** | Menambah zat pereaksi / produk | Bergeser **menjauhi** zat yang ditambah | **Tetap** (tidak berubah) |
| **Konsentrasi** | Mengurangi zat pereaksi / produk | Bergeser **mendekati** zat yang dikurangi | **Tetap** (tidak berubah) |
| **Tekanan (Volume)** | Tekanan diperbesar (Volume diperkecil) | Bergeser ke arah **koefisien gas lebih kecil** | **Tetap** (tidak berubah) |
| **Tekanan (Volume)** | Tekanan diperkecil (Volume diperbesar) | Bergeser ke arah **koefisien gas lebih besar** | **Tetap** (tidak berubah) |
| **Suhu** | Suhu dinaikkan | Bergeser ke arah **reaksi endoterm ($\Delta H > 0$)** | **Berubah** (naik jika arah maju endoterm) |
| **Suhu** | Suhu diturunkan | Bergeser ke arah **reaksi eksoterm ($\Delta H < 0$)** | **Berubah** (naik jika arah maju eksoterm) |
| **Katalis** | Menambahkan katalis | **Tidak bergeser** sama sekali | **Tetap** (tidak berubah) |

#### Peta Alur Keputusan: Meramalkan Arah Pergeseran Kesetimbangan
Gunakan alur logika penentuan arah pergeseran berikut saat menghadapi soal Asas Le Chatelier:

$$\begin{array}{c}
\boxed{\text{\textbf{PETA ALUR KEPUTUSAN: PERGESERAN KESETIMBANGAN}}} \\
\downarrow \\
\text{Identifikasi Jenis Gangguan yang Diberikan pada Sistem:} \\
\downarrow \\
\begin{array}{c|c|c|c}
\text{Perubahan Konsentrasi} & \text{Perubahan Tekanan / Volume} & \text{Perubahan Suhu} & \text{Penambahan Katalis} \\
\downarrow & \downarrow & \downarrow & \downarrow \\
\text{Ditambah } \rightarrow \text{ Menjauh} & \text{Tekanan Naik } \rightarrow \text{ Koef Kecil} & T \text{ Naik } \rightarrow \text{ Endoterm } (+) & \boxed{\text{\textbf{TIDAK BERGESER}}} \\
\text{Dikurangi } \rightarrow \text{ Mendekat} & \text{Volume Naik } \rightarrow \text{ Koef Besar} & T \text{ Turun } \rightarrow \text{ Eksoterm } (-) & \text{Hanya percepat waktu} \\
K \text{ tetap konstan} & \text{Hitung khusus gas }(g) & K \text{ ikut berubah!} & K \text{ tetap konstan}
\end{array}
\end{array}$$

---

### 🏆 Evaluasi Mandiri Berjenjang

#### Tingkat I: Fondasi (Asesmen Formatif)
1. Jelaskan perbedaan mendasar antara reaksi searah (*irreversible*) dengan reaksi bolak-balik (*reversible*), serta berikan masing-masing satu contoh reaksinya!  
   *(Kunci Jawaban: Reaksi irreversible hanya berlangsung satu arah dan produk tidak dapat saling bereaksi kembali [misal pembakaran bensin]; reaksi reversible dapat berlangsung bolak-balik di mana produk dapat membentuk kembali reaktan [misal sintesis amonia N2 + 3H2 <=> 2NH3])*
2. Mengapa zat berfasa padat murni $(s)$ dan cairan murni $(l)$ tidak diikutsertakan dalam perumusan tetapan kesetimbangan $K_c$ maupun $K_p$?  
   *(Kunci Jawaban: Karena padatan dan cairan murni memiliki konsentrasi efektif yang konstan [kerapatan massanya tetap], sehingga nilainya telah disatukan ke dalam harga tetapan kesetimbangan itu sendiri)*
3. Bagaimanakah pengaruh penambahan katalis terhadap pergeseran arah kesetimbangan dan nilai tetapan kesetimbangan $K$?  
   *(Kunci Jawaban: Katalis sama sekali tidak menggeser arah kesetimbangan dan tidak mengubah nilai K; katalis hanya mempercepat laju reaksi maju dan reaksi balik secara seimbang sehingga kesetimbangan tercapai lebih cepat)*

#### Tingkat II: Integrasi & Taktis (C3–C4)
4. Dalam bejana bervolume $2\ \text{liter}$, $0.4\ \text{mol}$ gas $\ce{SO3}$ dipanaskan pada suhu tertentu hingga terurai menurut reaksi:
   $$2\ \ce{SO3(g) <=> 2 SO2(g) + O2(g)}$$
   Jika pada saat setimbang terbentuk $0.1\ \text{mol}$ gas $\ce{O2}$, hitunglah nilai tetapan kesetimbangan konsentrasi ($K_c$) reaksi tersebut!  
   *(Kunci Jawaban: 0.025 atau 2.5 × 10^-2)*
5. Pada suhu $400\ \text{K}$, reaksi kesetimbangan: $\ce{2 NO(g) + Cl2(g) <=> 2 NOCl(g)}$ memiliki $K_c = 5.0 \times 10^1$. Hitunglah nilai $K_p$ reaksi tersebut pada suhu yang sama ($R = 0.082\ \text{L atm mol}^{-1}\ \text{K}^{-1}$)!  
   *(Kunci Jawaban: Kp = Kc / (RT) = 50 / (0.082 × 400) = 50 / 32.8 ≈ 1.52)*

#### Tingkat III: Penalaran Lanjut / HOTS (C4–C5)
6. Industri gas hidrogen menggunakan reaksi kesetimbangan pergeseran gas-air (*water-gas shift reaction*):
   $$\ce{CO(g) + H2O(g) <=> CO2(g) + H2(g)} \quad \Delta H = -41\ \text{kJ}$$
   (a) Bagaimanakah pengaruh perbesaran tekanan wadah terhadap komposisi gas hidrogen saat setimbang?  
   (b) Jika suhu reaktor dinaikkan, apakah persentase konversi gas $\ce{CO}$ menjadi gas $\ce{H2}$ bertambah atau berkurang? Jelaskan alasannya!  
   (c) Jika dalam suatu reaktor berukuran $10\ \text{liter}$ pada $500\ \text{K}$ terdapat $2\ \text{mol}\ \ce{CO}$, $2\ \text{mol}\ \ce{H2O}$, $4\ \text{mol}\ \ce{CO2}$, dan $4\ \text{mol}\ \ce{H2}$, dan diketahui $K_c = 9.0$ pada suhu tersebut, tentukan ke manakah arah reaksi akan bergeser untuk mencapai keadaan setimbang!  
   *(Kunci Jawaban: (a) Tekanan tidak memengaruhi komposisi karena koefisien gas di kedua ruas sama persis [1 + 1 = 1 + 1 = 2, Δn = 0]. (b) Berkurang, karena reaksi maju bersifat eksoterm sehingga kenaikan suhu menggeser kesetimbangan ke arah endoterm [ke kiri]. (c) Qc = (4 × 4) / (2 × 2) = 16 / 4 = 4. Karena Qc = 4 < Kc = 9, sistem kekurangan produk sehingga reaksi akan bergeser ke arah kanan untuk membentuk lebih banyak gas CO2 dan H2)*`
    }
  ]
};
