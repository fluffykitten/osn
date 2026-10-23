/**
 * src/data/materials/sma/smaBab05.ts
 * Bab 5: Laju Reaksi dan Faktor-Faktor Penentunya (Kelas XI — Fase F)
 * Berdasarkan Kerangka Arsitektur Pedagogis v3 (SaveMyExams style)
 */

import type { SmaMaterialItem } from '../../smaMaterialsData';

export const SMA_BAB_05: SmaMaterialItem = {
  id: 105,
  topic_number: 5,
  title: 'Laju Reaksi dan Faktor-Faktor Penentunya',
  description: 'Mempelajari konsep laju reaksi, teori tumbukan, faktor penentu laju, hukum laju reaksi, orde reaksi, dan penentuan eksperimental laju awal.',
  grade: 'Kelas 11',
  semester: 1,
  curriculumPhase: 'Fase F',
  estimatedTime: '10 Jam Pelajaran (5 Pertemuan)',
  prerequisites: ['Stoikiometri & Konsentrasi Molaritas (Bab 3)', 'Energetika Reaksi (Bab 4)'],
  learningObjectives: [
    'Menjelaskan konsep laju reaksi dan hubungan stoikiometri laju berkurangnya reaktan serta bertambahnya produk.',
    'Menganalisis teori tumbukan efektif, orientasi molekul, dan energi aktivasi (Ea).',
    'Menjelaskan pengaruh konsentrasi, luas permukaan, suhu, dan katalis terhadap laju reaksi secara submikroskopik.',
    'Menentukan orde reaksi, persamaan hukum laju reaksi, dan satuan tetapan laju (k).',
    'Mengolah data percobaan laju awal untuk merumuskan hukum laju dan menganalisis peran katalis di industri.'
  ],
  conceptBlocks: [
    // =========================================================================
    // SUBBAB 5.1
    // =========================================================================
    {
      id: 'sma5-1',
      title: '5.1 Konsep Laju Reaksi, Ungkapan Laju, dan Stoikiometri Laju',
      difficulty: 'Easy',
      estimatedMinutes: 45,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Kembang api meledak dalam hitungan milidetik menghasilkan cahaya gemerlap di langit malam. Namun, paku besi di pagar rumah memerlukan waktu berbulan-bulan bahkan bertahun-tahun untuk berkarat hingga keropos. Mengapa dua perubahan kimiawi ini memerlukan rentang waktu yang luar biasa berbeda untuk terjadi?

Kecepatan suatu reaksi ditentukan oleh seberapa cepat partikel-partikel pereaksi saling bertumbukan dan berubah menjadi zat baru. Dalam wadah reaksi, seiring berjalannya waktu, jumlah molekul pereaksi terus berkurang karena terpakai, sementara jumlah molekul produk terus bertambah dari ketiadaan.

Perhatikan grafik perubahan konsentrasi terhadap waktu dan perbandingan laju stoikiometrinya pada Gambar 5.1 berikut.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b05-kurva-laju-title sma-b05-kurva-laju-desc" data-diagram="sma-b05-kurva-laju" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b05-kurva-laju-title">GRAFIK LAJU REAKSI DAN PERBANDINGAN STOIKIOMETRI</title>
  <desc id="sma-b05-kurva-laju-desc">Kurva penurunan konsentrasi reaktan dan pertambahan konsentrasi produk terhadap waktu serta hubungan koefisien reaksi.</desc>
  
  <!-- Panel Kiri: Grafik Konsentrasi vs Waktu -->
  <rect x="24" y="24" width="374" height="392" rx="12" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="40" y="40" width="342" height="32" rx="6" fill="#8fd3ef" stroke="#2f7fc1" stroke-width="1.5" />
  <text x="211" y="62" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KURVA KONSENTRASI VS WAKTU</text>

  <!-- Sumbu Grafik -->
  <line x1="70" y1="100" x2="70" y2="350" stroke="#1f2937" stroke-width="2" />
  <line x1="70" y1="350" x2="370" y2="350" stroke="#1f2937" stroke-width="2" />
  <text x="50" y="104" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">[C]</text>
  <text x="360" y="372" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">WAKTU (t)</text>

  <!-- Kurva Reaktan (Turun) -->
  <path d="M 70 120 Q 140 310 360 330" fill="none" stroke="#d64545" stroke-width="3" />
  <text x="180" y="240" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">REAKTAN TURUN</text>

  <!-- Kurva Produk (Naik) -->
  <path d="M 70 350 Q 140 160 360 140" fill="none" stroke="#2f7fc1" stroke-width="3" />
  <text x="180" y="140" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">PRODUK NAIK</text>

  <rect x="40" y="376" width="342" height="30" rx="6" fill="#ececec" />
  <text x="211" y="396" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KEMIRINGAN KURVA BERKURANG SEIRING WAKTU</text>

  <!-- Panel Kanan: Formulasi Stoikiometri Laju -->
  <rect x="412" y="24" width="364" height="392" rx="12" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="428" y="40" width="332" height="32" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="594" y="62" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">UNGKAPAN STOIKIOMETRI LAJU</text>

  <text x="428" y="96" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">REAKSI UMUM:</text>
  <rect x="428" y="106" width="332" height="38" rx="6" fill="#ececec" />
  <text x="594" y="130" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">a A + b B &rarr; c C + d D</text>

  <text x="428" y="168" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">HUBUNGAN KESETARAAN LAJU (v):</text>
  <rect x="428" y="178" width="332" height="66" rx="8" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" />
  <text x="594" y="204" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">v = -(1/a) &Delta;[A]/&Delta;t</text>
  <text x="594" y="228" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">= +(1/c) &Delta;[C]/&Delta;t</text>

  <text x="428" y="268" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">PRINSIP PERBANDINGAN LAJU:</text>
  <rect x="428" y="278" width="332" height="54" rx="6" fill="#f5a3a3" />
  <text x="594" y="300" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PERBANDINGAN LAJU REAKSI (v)</text>
  <text x="594" y="320" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">= PERBANDINGAN KOEFISIEN REAKSI</text>

  <rect x="428" y="348" width="332" height="54" rx="6" fill="#d6f0fb" />
  <text x="594" y="370" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">vA : vB : vC : vD = a : b : c : d</text>
  <text x="594" y="390" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">SATUAN LAJU: M/s ATAU mol/(L s)</text>
</svg>

*Gambar 5.1: Grafik perubahan konsentrasi terhadap waktu dan formulasi kesetaraan laju berdasarkan koefisien stoikiometri.*

Bagaimanakah laju reaksi didefinisikan secara kuantitatif dalam sains kimia?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Definisi Laju Reaksi ($v$)
**Laju reaksi ($v$)** adalah perubahan konsentrasi molar ($\text{M} = \text{mol L}^{-1}$) zat pereaksi atau zat hasil reaksi per satu satuan waktu ($\text{detik}$):

$$v = \frac{\Delta [\text{Zat}]}{\Delta t}$$

*Makna Fisis Rumus:* Besaran ini mengukur seberapa cepat partikel zat pereaksi bertransformasi menjadi partikel produk dalam setiap liter larutan setiap detiknya.

- Laju berkurangnya pereaksi bertanda **negatif**:  
  $$v_{\text{reaktan}} = -\frac{\Delta [\text{Reaktan}]}{\Delta t}$$
- Laju bertambahnya hasil reaksi bertanda **positif**:  
  $$v_{\text{produk}} = +\frac{\Delta [\text{Produk}]}{\Delta t}$$
- Satuan laju reaksi menurut standar SI adalah **$\text{mol L}^{-1}\ \text{s}^{-1}$** atau disingkat **$\text{M s}^{-1}$**.

##### B. Stoikiometri Laju Reaksi
Untuk reaksi umum:
$$a\ \ce{A} + b\ \ce{B} \rightarrow c\ \ce{C} + d\ \ce{D}$$

Hubungan antara laju reaksi masing-masing komponen zat dinyatakan dengan persamaan kesetaraan:

$$v = -\frac{1}{a}\frac{\Delta [\ce{A}]}{\Delta t} = -\frac{1}{b}\frac{\Delta [\ce{B}]}{\Delta t} = +\frac{1}{c}\frac{\Delta [\ce{C}]}{\Delta t} = +\frac{1}{d}\frac{\Delta [\ce{D}]}{\Delta t}$$

*Makna Fisis Rumus:* Laju perubahan konsentrasi tiap zat berbanding lurus dengan angka koefisien reaksinya dalam persamaan setara.

Maka berlaku perbandingan sederhana:
$$v_{\ce{A}} : v_{\ce{B}} : v_{\ce{C}} : v_{\ce{D}} = a : b : c : d$$

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Persamaan laju stoikiometri ini berlaku untuk sistem homogen dengan volume wadah konstan.
> **Batas Keberlakuan:** Laju reaksi kimia hampir tidak pernah konstan sepanjang waktu; laju selalu paling cepat di awal reaksi ($t = 0$) saat konsentrasi reaktan maksimum, lalu melambat secara eksponensial seiring menipisnya partikel pereaksi hingga akhirnya bernilai nol saat reaksi tuntas.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Pada reaksi pembentukan gas amonia: $\ce{N2(g) + 3 H2(g) -> 2 NH3(g)}$, jika laju pembentukan gas $\ce{NH3}$ adalah $0.4\ \text{M s}^{-1}$, berapakah laju berkurangnya gas hidrogen ($\ce{H2}$)? Apakah laju berkurangnya $\ce{H2}$ sama dengan laju berkurangnya $\ce{N2}$?  
*Jawaban & Analisis:* Berdasarkan perbandingan koefisien reaksi, $v_{\ce{H2}} : v_{\ce{NH3}} = 3 : 2$. Maka:
$$v_{\ce{H2}} = \frac{3}{2} \times v_{\ce{NH3}} = \frac{3}{2} \times 0.4 = 0.6\ \text{M s}^{-1}$$
Laju berkurangnya $\ce{H2}$ tidak sama dengan $\ce{N2}$ karena untuk setiap $1\ \text{mol}\ \ce{N2}$ yang bereaksi, dibutuhkan $3\ \text{mol}\ \ce{H2}$, sehingga gas hidrogen berkurang tiga kali lebih cepat daripada nitrogen ($v_{\ce{H2}} = 3 \times v_{\ce{N2}} = 0.6\ \text{M s}^{-1}$, sedangkan $v_{\ce{N2}} = 0.2\ \text{M s}^{-1}$).

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Gas dinitrogen pentoksida terurai menurut reaksi:
$$2\ \ce{N2O5(g) -> 4 NO2(g) + O2(g)}$$
Jika dalam bejana bervolume $2\ \text{liter}$, konsentrasi $\ce{N2O5}$ berkurang dari $0.80\ \text{M}$ menjadi $0.50\ \text{M}$ dalam waktu $30\ \text{detik}$, tentukan:  
(a) Laju penguraian gas $\ce{N2O5}$!  
(b) Laju pembentukan gas $\ce{NO2}$!  
(c) Jumlah mol gas $\ce{O2}$ yang terbentuk selama $30\ \text{detik}$ tersebut!

**Strategi Langkah demi Langkah:**
1. *Hitung Perubahan Konsentrasi $\ce{N2O5}$ ($\Delta [\ce{N2O5}]$):*  
   $$\Delta [\ce{N2O5}] = 0.80\ \text{M} - 0.50\ \text{M} = 0.30\ \text{M}$$
2. *Hitung Laju Penguraian $\ce{N2O5}$ ($v_{\ce{N2O5}}$):*  
   $$v_{\ce{N2O5}} = \frac{\Delta [\ce{N2O5}]}{\Delta t} = \frac{0.30\ \text{M}}{30\ \text{s}} = 0.010\ \text{M s}^{-1}$$
3. *Gunakan Perbandingan Koefisien untuk Mencari Laju $\ce{NO2}$:*  
   Koefisien $\ce{NO2} = 4$, Koefisien $\ce{N2O5} = 2$.
   $$v_{\ce{NO2}} = \frac{4}{2} \times v_{\ce{N2O5}} = 2 \times 0.010\ \text{M s}^{-1} = 0.020\ \text{M s}^{-1}$$
4. *Hitung Laju Pembentukan Gas $\ce{O2}$:*  
   Koefisien $\ce{O2} = 1$, Koefisien $\ce{N2O5} = 2$.
   $$v_{\ce{O2}} = \frac{1}{2} \times v_{\ce{N2O5}} = \frac{1}{2} \times 0.010\ \text{M s}^{-1} = 0.005\ \text{M s}^{-1}$$
5. *Hitung Mol Gas $\ce{O2}$ yang Terbentuk pada Wadah $2\ \text{L}$:*  
   $$\Delta [\ce{O2}] = v_{\ce{O2}} \times \Delta t = 0.005\ \text{M s}^{-1} \times 30\ \text{s} = 0.15\ \text{M}$$  
   $$\text{Mol}\ \ce{O2} = M \times V = 0.15\ \text{mol L}^{-1} \times 2\ \text{L} = 0.30\ \text{mol}$$

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Menganggap laju reaksi suatu zat sama untuk semua zat tanpa memperhatikan angka koefisien reaksinya.
> **Koreksi Konseptual:** Laju pembentukan $\ce{NO2}$ bernilai dua kali lipat laju penguraian $\ce{N2O5}$ karena koefisiennya $4$ berbanding $2$. Pastikan selalu mengalikan laju zat acuan dengan rasio koefisien target per koefisien acuan.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Periksa rasio koefisien $\ce{N2O5} : \ce{NO2} : \ce{O2} = 2 : 4 : 1$. Rasio laju yang kita peroleh: $0.010 : 0.020 : 0.005 = 2 : 4 : 1$. Rasio identik sempurna!  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 3 (Stoikiometri): Hubungan laju reaksi ini merupakan turunan langsung dari hukum perbandingan mol Gay-Lussac dan Avogadro.

##### 🎯 Latihan Terbimbing
1. Pada penguraian gas amonia: $2\ \ce{NH3(g) -> N2(g) + 3 H2(g)}$, laju pembentukan gas hidrogen terukur sebesar $0.09\ \text{M s}^{-1}$. Tentukan laju penguraian gas amonia ($\ce{NH3}$)! *(Kunci Jawaban Akhir: 0.06 M s^-1)*
2. Logam magnesium direaksikan dengan asam klorida berlebih menurut reaksi: $\ce{Mg(s) + 2 HCl(aq) -> MgCl2(aq) + H2(g)}$. Jika dalam waktu $20\ \text{detik}$ dihasilkan $480\ \text{mL}$ gas $\ce{H2}$ pada kondisi volum molar $24\ \text{L mol}^{-1}$ di dalam wadah $1\ \text{liter}$, hitunglah laju pembentukan gas hidrogen dalam $\text{M s}^{-1}$! *(Kunci Jawaban Akhir: 0.001 M s^-1)*`
    },

    // =========================================================================
    // SUBBAB 5.2
    // =========================================================================
    {
      id: 'sma5-2',
      title: '5.2 Teori Tumbukan, Orientasi Tumbukan Efektif, dan Energi Aktivasi (Ea)',
      difficulty: 'Medium',
      estimatedMinutes: 50,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Di dalam satu liter gas oksigen dan nitrogen pada suhu ruangan, terjadi sekitar $10^{30}$ kali tabrakan antarpartikel setiap detiknya. Jika setiap kali partikel bertabrakan langsung menghasilkan senyawa baru, maka seluruh udara di sekitar kita akan meledak seketika menjadi gas nitrogen oksida beracun. Namun kenyataannya, udara tetap stabil dan aman kita hirup. Mengapa triliunan tabrakan molekul tersebut tidak menghasilkan reaksi kimia?

Jawabannya diungkapkan oleh Teori Tumbukan. Tabrakan biasa tidak cukup untuk memicu reaksi kimia. Mayoritas molekul hanya bertabrakan lalu terpental kembali seperti bola biliar elastis. Untuk dapat membongkar ikatan lama dan membentuk ikatan baru, tabrakan tersebut harus memenuhi dua syarat mutlak: orientasi ruang yang tepat dan energi benturan yang cukup.

Amati perbandingan tumbukan tidak efektif versus tumbukan efektif serta kurva profil energi aktivasinya pada Gambar 5.2 berikut.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b05-teori-tumbukan-title sma-b05-teori-tumbukan-desc" data-diagram="sma-b05-teori-tumbukan" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b05-teori-tumbukan-title">TEORI TUMBUKAN EFEKTIF DAN ENERGI AKTIVASI</title>
  <desc id="sma-b05-teori-tumbukan-desc">Ilustrasi perbedaan tumbukan tidak efektif versus tumbukan efektif dan diagram profil energi aktivasi reaksi.</desc>
  
  <!-- Panel Kiri: Syarat Tumbukan Efektif -->
  <rect x="24" y="24" width="374" height="392" rx="12" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="40" y="40" width="342" height="32" rx="6" fill="#8fd3ef" stroke="#2f7fc1" stroke-width="1.5" />
  <text x="211" y="62" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">MEKANISME TUMBUKAN PARTIKEL</text>

  <!-- Kasus 1: Tumbukan Tidak Efektif -->
  <rect x="40" y="86" width="342" height="140" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="211" y="110" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">1. TUMBUKAN TIDAK EFEKTIF (GAGAL)</text>

  <!-- Partikel Bertabrakan Salah Sudut -->
  <circle cx="100" cy="146" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="128" cy="146" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="280" cy="146" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="308" cy="146" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <line x1="150" y1="146" x2="250" y2="146" stroke="#d64545" stroke-width="2" stroke-dasharray="3 3" />
  <text x="200" y="140" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">&times;</text>
  <text x="211" y="186" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">ORIENTASI SALAH / ENERGI &lt; EA</text>
  <text x="211" y="206" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">PARTIKEL MEMBAL TANPA MEMBENTUK IKATAN</text>

  <!-- Kasus 2: Tumbukan Efektif -->
  <rect x="40" y="240" width="342" height="160" rx="8" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" />
  <text x="211" y="264" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8" text-anchor="middle">2. TUMBUKAN EFEKTIF (BERHASIL)</text>

  <!-- Partikel Bertabrakan Pas -->
  <circle cx="100" cy="306" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="128" cy="306" r="16" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="280" cy="306" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="308" cy="306" r="16" fill="#f5a3a3" stroke="#1f2937" stroke-width="1.5" />
  <line x1="150" y1="306" x2="250" y2="306" stroke="#3f8f46" stroke-width="2" />
  <polygon points="204,306 194,300 194,312" fill="#3f8f46" />
  <text x="211" y="348" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">ORIENTASI TEPAT &amp; ENERGI &ge; EA</text>
  <text x="211" y="370" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8" text-anchor="middle">MEMBENTUK KOMPLEKS TERAKTIFKAN</text>

  <!-- Panel Kanan: Profil Bukit Energi Aktivasi -->
  <rect x="412" y="24" width="364" height="392" rx="12" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="428" y="40" width="332" height="32" rx="6" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5" />
  <text x="594" y="62" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">BUKIT ENERGI AKTIVASI (Ea)</text>

  <!-- Sumbu Kurva -->
  <line x1="440" y1="90" x2="440" y2="360" stroke="#1f2937" stroke-width="2" />
  <line x1="440" y1="360" x2="750" y2="360" stroke="#1f2937" stroke-width="2" />
  <text x="448" y="100" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">ENERGI (E)</text>
  <text x="640" y="380" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">PROGRES REAKSI</text>

  <!-- Garis Reaktan -->
  <line x1="440" y1="260" x2="510" y2="260" stroke="#d64545" stroke-width="2.5" />
  <text x="475" y="252" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">REAKTAN</text>

  <!-- Puncak Bukit Energi Aktivasi -->
  <path d="M 510 260 Q 580 110 650 320" fill="none" stroke="#1f2937" stroke-width="2.5" />
  <circle cx="580" cy="140" r="6" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="580" y="126" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KOMPLEKS TERAKTIFKAN</text>

  <!-- Garis Produk -->
  <line x1="650" y1="320" x2="720" y2="320" stroke="#2f7fc1" stroke-width="2.5" />
  <text x="685" y="312" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PRODUK</text>

  <!-- Panah Panjat Ea -->
  <line x1="530" y1="260" x2="530" y2="142" stroke="#d64545" stroke-width="1.5" stroke-dasharray="3 3" />
  <polygon points="530,140 526,150 534,150" fill="#d64545" />
  <text x="548" y="200" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">Ea</text>

  <rect x="440" y="386" width="310" height="26" rx="4" fill="#ececec" />
  <text x="595" y="403" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">Ea = ENERGI KINETIK MINIMUM PENENTU REAKSI</text>
</svg>

*Gambar 5.2: Syarat terjadinya tumbukan efektif dan profil diagram bukit energi aktivasi (Ea).*

Bagaimanakah Teori Tumbukan memformalkan hubungan antara frekuensi tabrakan dengan laju reaksi?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Postulat Teori Tumbukan
Menurut **Teori Tumbukan**, laju suatu reaksi kimia berbanding lurus dengan jumlah tumbukan efektif per detik antarmolekul pereaksi:

$$\text{Laju Reaksi} \propto (\text{Frekuensi Tumbukan}) \times (\text{Fraksi Tumbukan Berorientasi Tepat}) \times (\text{Fraksi Molekul Berenergi} \ge E_a)$$

*Makna Fisis Rumus:* Reaksi kimia hanya berlangsung cepat jika frekuensi tabrakan tinggi dan sebagian besar tabrakan tersebut membawa energi kinetik yang cukup serta posisi molekul yang tepat.

Dua syarat mutlak terjadinya **Tumbukan Efektif**:
1. **Orientasi Ruang Geometris yang Tepat:**  
   Gugus atau atom-atom spesifik yang akan saling berikatan harus saling berhadapan langsung saat bertabrakan. Jika bagian molekul yang menabrak adalah gugus yang salah, molekul akan membal tanpa terjadi reaksi.
2. **Energi Kinetik Mencukupi Energi Aktivasi ($E_k \ge E_a$):**  
   Partikel harus menabrak dengan kecepatan cukup tinggi sehingga energi kinetiknya mampu meregangkan dan memutuskan ikatan kovalen pereaksi.

##### B. Energi Aktivasi ($E_a$) dan Kompleks Teraktifkan
**Energi Aktivasi ($E_a$)** adalah energi kinetik minimum yang harus dimiliki oleh partikel-partikel pereaksi saat bertumbukan agar dapat memulai suatu reaksi kimia:

$$E_a = E_{\text{kompleks teraktifkan}} - E_{\text{reaktan}} > 0$$

*Makna Fisis Rumus:* Energi aktivasi bertindak sebagai "bukit penghalang termodinamika" yang harus didaki oleh molekul pereaksi agar ikatan kimianya dapat terurai.

- **Kompleks Teraktifkan (Keadaan Transisi):** Keadaan zat perantara sementara yang berenergi sangat tinggi dan sangat tidak stabil, di mana ikatan kimia lama sedang meregang putus dan ikatan kimia baru sedang mulai tersambung.
- Nilai $E_a$ selalu bernilai **positif**.
- Semakin **tinggi nilai $E_a$**, semakin sedikit fraksi molekul yang mampu melampaui bukit energi, sehingga reaksi berlangsung semakin **lambat**.
- Semakin **rendah nilai $E_a$**, semakin banyak fraksi molekul yang memiliki energi cukup, sehingga reaksi berlangsung semakin **cepat**.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Nilai energi aktivasi ($E_a$) adalah sifat intrinsik dari mekanisme reaksi kimia tertentu dan **tidak dipengaruhi oleh perubahan suhu maupun konsentrasi**.
> **Batas Keberlakuan:** Suhu yang dinaikkan tidak mengubah tinggi bukit $E_a$; yang diubah oleh suhu adalah energi kinetik molekul-molekul sehingga lebih banyak molekul yang mampu mendaki bukit $E_a$ yang tingginya tetap sama. Satu-satunya cara menurunkan bukit $E_a$ adalah dengan menambahkan **katalis**.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Campuran gas hidrogen dan gas oksigen dapat disimpan dalam tabung gas bertekanan tinggi selama bertahun-tahun pada suhu kamar tanpa bereaksi sedikit pun. Namun, jika diberi percikan api listrik kecil, campuran tersebut seketika meledak dahsyat. Jelaskan fenomena ini menggunakan konsep energi aktivasi dan teori tumbukan!  
*Jawaban & Analisis:* Reaksi pembentukan air dari $\ce{H2}$ dan $\ce{O2}$ memiliki nilai energi aktivasi ($E_a$) yang sangat tinggi karena ikatan $\ce{H-H}$ dan $\ce{O=O}$ sangat kokoh. Pada suhu kamar, hampir tidak ada molekul yang memiliki energi kinetik $\ge E_a$, sehingga triliunan tabrakan yang terjadi bersifat tidak efektif. Percikan api memasok energi termal lokal berintensitas tinggi, memberikan energi kinetik $\ge E_a$ pada sejumlah kecil molekul untuk memulai reaksi. Karena reaksi ini sangat eksoterm, kalor yang dibebaskan memanaskan molekul tetangganya secara berantai sehingga reaksi merambat meledak ke seluruh tabung.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Diketahui profil diagram energi untuk reaksi: $\ce{A + B -> C + D}$ memiliki entalpi reaktan $H_R = +40\ \text{kJ mol}^{-1}$, energi kompleks teraktifkan $E_{\text{transisi}} = +110\ \text{kJ mol}^{-1}$, dan entalpi produk $H_P = -20\ \text{kJ mol}^{-1}$.  
(a) Hitunglah energi aktivasi reaksi maju ($E_{a,\text{maju}}$)!  
(b) Hitunglah perubahan entalpi reaksi ($\Delta H$) dan tentukan jenis reaksinya!  
(c) Hitunglah energi aktivasi reaksi balik ($E_{a,\text{balik}}$)!

**Strategi Langkah demi Langkah:**
1. *Hitung Energi Aktivasi Reaksi Maju:*  
   $$E_{a,\text{maju}} = E_{\text{transisi}} - H_R = 110 - 40 = 70\ \text{kJ mol}^{-1}$$
2. *Hitung Perubahan Entalpi Reaksi ($\Delta H$):*  
   $$\Delta H = H_P - H_R = -20 - (+40) = -60\ \text{kJ mol}^{-1}$$  
   Karena $\Delta H < 0$, reaksi tergolong **eksoterm**.
3. *Hitung Energi Aktivasi Reaksi Balik ($\ce{C + D -> A + B}$):*  
   Untuk reaksi balik, produk bertindak sebagai keadaan awal reaktan:  
   $$E_{a,\text{balik}} = E_{\text{transisi}} - H_P = 110 - (-20) = 110 + 20 = 130\ \text{kJ mol}^{-1}$$

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Menganggap $E_a$ dihitung dari dasar sumbu nol ($E = 0$), sehingga menjawab $E_a = 110\ \text{kJ}$.
> **Koreksi Konseptual:** Energi aktivasi diukur dari **garis tingkat energi pereaksi** menuju puncak bukit keadaan transisi ($E_{\text{puncak}} - E_{\text{reaktan}}$), bukan dari garis dasar koordinat grafik.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Gunakan hubungan aljabar: $E_{a,\text{maju}} - E_{a,\text{balik}} = \Delta H$.  
> Masukkan angka: $70 - 130 = -60\ \text{kJ mol}^{-1}$. Hasilnya sama persis dengan $\Delta H$ yang dihitung pada langkah 2. Perhitungan konsisten!  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 6 (Kesetimbangan Kimia): Reaksi eksoterm memiliki $E_{a,\text{balik}} > E_{a,\text{maju}}$, yang menjelaskan mengapa kenaikan suhu selalu menggeser kesetimbangan ke arah reaksi endoterm (arah reaksi balik).

##### 🎯 Latihan Terbimbing
1. Suatu reaksi endoterm memiliki perubahan entalpi $\Delta H = +45\ \text{kJ mol}^{-1}$. Jika energi aktivasi reaksi maju adalah $90\ \text{kJ mol}^{-1}$, hitunglah energi aktivasi untuk reaksi kebalikannya! *(Kunci Jawaban Akhir: 45 kJ mol^-1)*
2. Jelaskan manakah di antara kedua reaksi berikut yang diperkirakan berlangsung lebih lambat pada suhu yang sama jika diketahui: Reaksi (1) memiliki $E_a = 40\ \text{kJ mol}^{-1}$ dan Reaksi (2) memiliki $E_a = 115\ \text{kJ mol}^{-1}$! *(Kunci Jawaban Akhir: Reaksi 2 berlangsung lebih lambat karena memiliki energi aktivasi yang jauh lebih tinggi)*`
    },

    // =========================================================================
    // SUBBAB 5.3
    // =========================================================================
    {
      id: 'sma5-3',
      title: '5.3 Faktor-Faktor yang Memengaruhi Laju Reaksi (Konsentrasi, Luas Permukaan, Suhu, Katalis)',
      difficulty: 'Medium',
      estimatedMinutes: 50,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Mengapa serbuk kayu terbakar menyala dalam sekejap di perapian sementara balok kayu utuh terbakar perlahan selama berjam-jam? Mengapa makanan matang lebih cepat jika dimasak di dalam panci presto bersuhu tinggi? Mengapa daging segar membusuk dalam hitungan hari di meja dapur tetapi awet berbulan-bulan di dalam lemari pembeku (*freezer*)?

Fenomena dapur sehari-hari ini dikendalikan oleh empat faktor pengatur laju reaksi kimia: konsentrasi larutan (atau tekanan gas), luas permukaan sentuh zat padat, suhu lingkungan reaksi, dan keberadaan katalis. Di tingkat submikroskopik, keempat faktor ini bekerja dengan cara meningkatkan frekuensi tabrakan atau mempermudah partikel menembus bukit energi aktivasi.

Pelajari representasi model partikel untuk empat faktor penentu laju pada Gambar 5.3 berikut.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b05-faktor-laju-title sma-b05-faktor-laju-desc" data-diagram="sma-b05-faktor-laju" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b05-faktor-laju-title">EMPAT FAKTOR PENENTU LAJU REAKSI</title>
  <desc id="sma-b05-faktor-laju-desc">Model submikroskopik pengaruh konsentrasi, luas permukaan, suhu, dan katalis terhadap laju reaksi kimia.</desc>
  
  <!-- Kotak 1: Konsentrasi (Kiri Atas) -->
  <rect x="24" y="24" width="364" height="186" rx="10" fill="#ffffff" stroke="#2f7fc1" stroke-width="2" />
  <rect x="36" y="36" width="340" height="30" rx="6" fill="#8fd3ef" />
  <text x="206" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">1. KONSENTRASI / TEKANAN GAS</text>
  <circle cx="90" cy="116" r="10" fill="#2f7fc1" />
  <circle cx="140" cy="100" r="10" fill="#d64545" />
  <circle cx="120" cy="140" r="10" fill="#2f7fc1" />
  <circle cx="80" cy="150" r="10" fill="#d64545" />
  <text x="210" y="104" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">KONSENTRASI PEKAT:</text>
  <text x="210" y="124" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">PARTIKEL LEBIH RAPAT</text>
  <rect x="36" y="156" width="340" height="44" rx="6" fill="#ececec" />
  <text x="206" y="174" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">FREKUENSI TUMBUKAN MENINGKAT</text>
  <text x="206" y="192" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">LAJU REAKSI LEBIH CEPAT</text>

  <!-- Kotak 2: Luas Permukaan (Kanan Atas) -->
  <rect x="412" y="24" width="364" height="186" rx="10" fill="#ffffff" stroke="#3f8f46" stroke-width="2" />
  <rect x="424" y="36" width="340" height="30" rx="6" fill="#b5efb0" />
  <text x="594" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">2. LUAS PERMUKAAN BIDANG SENTUH</text>
  <rect x="444" y="96" width="40" height="40" rx="4" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <rect x="500" y="96" width="16" height="16" rx="2" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <rect x="520" y="96" width="16" height="16" rx="2" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <rect x="500" y="116" width="16" height="16" rx="2" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <rect x="520" y="116" width="16" height="16" rx="2" fill="#b5efb0" stroke="#1f2937" stroke-width="1.5" />
  <text x="556" y="106" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SERBUK HALUS:</text>
  <text x="556" y="126" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">BIDANG SENTUH BESAR</text>
  <rect x="424" y="156" width="340" height="44" rx="6" fill="#ececec" />
  <text x="594" y="174" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">AREA SENTUH TERBUKA LEBIH BANYAK</text>
  <text x="594" y="192" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8" text-anchor="middle">LAJU REAKSI LEBIH CEPAT</text>

  <!-- Kotak 3: Suhu Lingkungan (Kiri Bawah) -->
  <rect x="24" y="226" width="364" height="196" rx="10" fill="#ffffff" stroke="#d64545" stroke-width="2" />
  <rect x="36" y="238" width="340" height="30" rx="6" fill="#f5a3a3" />
  <text x="206" y="258" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">3. SUHU (TEMPERATUR)</text>
  <circle cx="80" cy="306" r="12" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5" />
  <line x1="92" y1="306" x2="132" y2="306" stroke="#d64545" stroke-width="3" />
  <polygon points="138,306 128,300 128,312" fill="#d64545" />
  <text x="160" y="304" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">SUHU NAIK &rarr; Ek BESAR</text>
  <text x="160" y="324" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">FRAKSI Ek &ge; Ea MELONJAK</text>
  <rect x="36" y="340" width="340" height="72" rx="6" fill="#fde58a" />
  <text x="206" y="362" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KENAIKAN SUHU (k = &Delta;T / 10):</text>
  <text x="206" y="382" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">v2 = v1 &times; n^k</text>
  <text x="206" y="402" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">t2 = t1 &times; (1/n)^k</text>

  <!-- Kotak 4: Katalis (Kanan Bawah) -->
  <rect x="412" y="226" width="364" height="196" rx="10" fill="#ffffff" stroke="#8a939c" stroke-width="2" />
  <rect x="424" y="238" width="340" height="30" rx="6" fill="#fde58a" />
  <text x="594" y="258" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">4. KATALIS</text>
  <path d="M 444 330 Q 500 270 560 330" fill="none" stroke="#d64545" stroke-width="2" stroke-dasharray="3 3" />
  <path d="M 444 330 Q 500 300 560 330" fill="none" stroke="#3f8f46" stroke-width="3" />
  <text x="530" y="296" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">TANPA KATALIS (Ea TINGGI)</text>
  <text x="530" y="318" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8">DENGAN KATALIS (Ea TURUN)</text>
  <rect x="424" y="340" width="340" height="72" rx="6" fill="#ececec" />
  <text x="594" y="362" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">MENYEDIAKAN JALUR MEKANISME BARU</text>
  <text x="594" y="382" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8" text-anchor="middle">MENURUNKAN ENERGI AKTIVASI (Ea)</text>
  <text x="594" y="402" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">TIDAK MENGUBAH &Delta;H REAKSI</text>
</svg>

*Gambar 5.3: Representasi submikroskopik kerja empat faktor penentu laju reaksi kimia.*

Bagaimanakah masing-masing faktor dianalisis secara kuantitatif?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Empat Faktor Penentu Laju Reaksi
1. **Konsentrasi Pereaksi (dan Tekanan Gas):**  
   Makin besar konsentrasi larutan pereaksi, makin rapat jumlah partikel per satuan volume, sehingga probabilitas dan frekuensi tumbukan antarpartikel per detik meningkat. Pada zat berwujud gas, memperkecil volume wadah sama dengan menaikkan tekanan dan konsentrasi gas.
2. **Luas Permukaan Sentuh (Fasa Heterogen):**  
   Reaksi antara padatan dengan cairan atau gas hanya dapat terjadi pada bidang antarmuka di mana partikel-partikel bersentuhan langsung. Membagi bongkahan padatan menjadi butiran atau serbuk halus memperluas total luas permukaan kontak secara drastis, membuka miliaran atom bagian dalam untuk dapat ditumbuk oleh partikel pereaksi.
3. **Suhu (Temperatur):**  
   Kenaikan suhu meningkatkan energi kinetik rata-rata partikel ($E_k = \frac{3}{2} k_B T$). Partikel bergerak lebih cepat dan bergetar lebih hebat, sehingga frekuensi tumbukan sedikit meningkat. Namun pengaruh yang paling dominan: lonjakan drastis pada **fraksi molekul yang energinya mampu melampaui bukit $E_a$**.
4. **Katalis:**  
   Zat yang mempercepat laju reaksi kimia dengan cara menyediakan mekanisme tahapan reaksi alternatif yang memiliki **energi aktivasi ($E_a$) lebih rendah**, tanpa mengalami perubahan kimia kekal di akhir reaksi (tidak habis terpakai).

##### B. Perhitungan Kenaikan Suhu Empiris
Secara empiris di laboratorium kimia SMA, banyak reaksi berlangsung dua hingga tiga kali lipat lebih cepat setiap kenaikan suhu sebesar $10\ ^\circ\text{C}$. Rumus matematis kenaikan suhu bertahap:

$$v_2 = v_1 \times n^{\frac{T_2 - T_1}{\Delta T}}$$

*Makna Fisis Rumus:* Persamaan ini mengalikan laju reaksi awal sebanyak faktor kelipatan $n$ untuk setiap interval kenaikan suhu sebesar $\Delta T$.

Karena waktu reaksi ($t$) berbanding terbalik dengan laju reaksi ($t \propto 1/v$), maka waktu yang dibutuhkan reaksi menjadi:

$$t_2 = t_1 \times \left(\frac{1}{n}\right)^{\frac{T_2 - T_1}{\Delta T}}$$

- $v_1, v_2$ = laju reaksi mula-mula dan akhir
- $t_1, t_2$ = waktu reaksi mula-mula dan akhir
- $n$ = faktor kelipatan kenaikan laju (misal 2 kali atau 3 kali)
- $\Delta T$ = interval kenaikan suhu (umumnya $10\ ^\circ\text{C}$)

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Luas permukaan hanya memengaruhi zat dalam wujud **padat ($s$)**. Konsentrasi tidak berpengaruh pada zat berfasa padat murni ($s$) atau cair murni ($l$).
> **Batas Keberlakuan:** Katalis tidak pernah mengubah nilai perubahan entalpi reaksi ($\Delta H$), tidak mengubah tingkat energi awal reaktan maupun produk akhir, dan tidak dapat membuat reaksi yang secara termodinamika mustahil menjadi spontan.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Dua orang siswa mereaksikan $2\ \text{gram}$ pualam kalsium karbonat ($\ce{CaCO3}$) dengan $50\ \text{mL}\ \ce{HCl}\ 1\ \text{M}$. Siswa A menggunakan bongkahan pualam kasar, sedangkan Siswa B menumbuk pualam menjadi serbuk halus. Keduanya mengukur volume gas $\ce{CO2}$ yang terbentuk.  
(a) Siapakah yang reaksinya selesai lebih cepat?  
(b) Apakah volume total akhir gas $\ce{CO2}$ yang dihasilkan Siswa B lebih banyak daripada Siswa A? Jelaskan!  
*Jawaban & Analisis:*  
(a) Reaksi **Siswa B** selesai jauh lebih cepat karena serbuk halus memiliki luas permukaan bidang sentuh yang jauh lebih besar sehingga frekuensi tumbukan efektif antara ion $\ce{H+}$ dan partikel $\ce{CaCO3}$ per detik jauh lebih tinggi.  
(b) **Volume total akhir gas $\ce{CO2}$ persis sama**. Luas permukaan hanya memengaruhi laju (kecepatan) reaksi, bukan hasil akhir kuantitas produk stoikiometri. Karena massa $\ce{CaCO3}$ dan mol $\ce{HCl}$ mula-mula yang digunakan kedua siswa sama persis, mol produk akhir yang terbentuk wajib identik.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Suatu reaksi kimia berlangsung dua kali lebih cepat setiap kenaikan suhu sebesar $10\ ^\circ\text{C}$. Pada suhu $25\ ^\circ\text{C}$, reaksi tersebut membutuhkan waktu $40\ \text{menit}$ untuk tuntas. Berapa lama waktu yang dibutuhkan jika reaksi tersebut dilakukan pada suhu $55\ ^\circ\text{C}$?

**Strategi Langkah demi Langkah:**
1. *Identifikasi Variabel yang Diketahui:*  
   - $n = 2$ (dua kali lebih cepat)  
   - $\Delta T = 10\ ^\circ\text{C}$  
   - $T_1 = 25\ ^\circ\text{C}, \quad T_2 = 55\ ^\circ\text{C}$  
   - $t_1 = 40\ \text{menit}$
2. *Hitung Eksponen Jumlah Interval Kenaikan Suhu:*  
   $$\frac{T_2 - T_1}{\Delta T} = \frac{55 - 25}{10} = \frac{30}{10} = 3$$
3. *Gunakan Rumus Waktu Reaksi:*  
   $$t_2 = t_1 \times \left(\frac{1}{n}\right)^3 = 40\ \text{menit} \times \left(\frac{1}{2}\right)^3 = 40 \times \frac{1}{8} = 5\ \text{menit}$$

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Mengalikan waktu mula-mula dengan $2^3$ sehingga mendapatkan $t_2 = 320\ \text{menit}$.
> **Koreksi Konseptual:** Jika reaksi berlangsung lebih cepat, maka waktu yang dibutuhkan harus **semakin singkat**, bukan semakin lama. Waktu berbanding terbalik dengan laju ($t \propto 1/v$).

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Hitung secara manual bertahap:  
> Pada $25\ ^\circ\text{C} \rightarrow 40\ \text{menit}$.  
> Pada $35\ ^\circ\text{C} \rightarrow 20\ \text{menit}$ (setengahnya).  
> Pada $45\ ^\circ\text{C} \rightarrow 10\ \text{menit}$.  
> Pada $55\ ^\circ\text{C} \rightarrow 5\ \text{menit}$.  
> Sangat logis, cepat, dan terbukti benar dalam 10 detik!  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 1 (Hakikat Kimia): Penerapan katalis yang menurunkan $E_a$ adalah pilar ke-9 Kimia Hijau (*Use of Catalytic Reagents*), yang menghemat energi pemanasan reaktor industri secara signifikan.

##### 🎯 Latihan Terbimbing
1. Setiap kenaikan suhu sebesar $20\ ^\circ\text{C}$, laju reaksi menjadi 3 kali lebih cepat. Jika pada suhu $20\ ^\circ\text{C}$ reaksi berlangsung dengan laju $v_1 = 0.002\ \text{M s}^{-1}$, tentukan laju reaksi tersebut pada suhu $80\ ^\circ\text{C}$! *(Kunci Jawaban Akhir: 0.054 M s^-1)*
2. Sebanyak $5\ \text{gram}$ pita magnesium direaksikan dengan larutan $\ce{HCl}$ dalam 4 tabung percobaan berbeda:  
   - Tabung 1: Pita Mg utuh + $\ce{HCl}\ 0.5\ \text{M}$ pada $25\ ^\circ\text{C}$  
   - Tabung 2: Pita Mg utuh + $\ce{HCl}\ 2.0\ \text{M}$ pada $25\ ^\circ\text{C}$  
   - Tabung 3: Serbuk Mg + $\ce{HCl}\ 2.0\ \text{M}$ pada $25\ ^\circ\text{C}$  
   - Tabung 4: Serbuk Mg + $\ce{HCl}\ 2.0\ \text{M}$ pada $45\ ^\circ\text{C}$  
   Manakah tabung yang menghasilkan laju reaksi paling cepat? Jelaskan alasan gabungannya! *(Kunci Jawaban Akhir: Tabung 4, karena mengombinasikan bentuk serbuk [luas permukaan maksimum], konsentrasi pekat 2.0 M, dan suhu tertinggi 45 °C)*`
    },

    // =========================================================================
    // SUBBAB 5.4
    // =========================================================================
    {
      id: 'sma5-4',
      title: '5.4 Hukum Laju Reaksi (v = k[A]m[B]n), Orde Reaksi, dan Tetapan Laju (k)',
      difficulty: 'Hard',
      estimatedMinutes: 50,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Jika Anda melipatgandakan jumlah kayu bakar dalam api unggun, apakah nyala apinya membesar dua kali lipat, empat kali lipat, atau tidak berubah sama sekali?

Di laboratorium kimia, para ilmuwan menemukan bahwa melipatgandakan konsentrasi pereaksi tidak selalu melipatgandakan kecepatannya secara seragam. Pada beberapa reaksi, melipatgandakan konsentrasi zat A melipatgandakan laju menjadi 2 kali lipat. Pada reaksi lain, lajunya melonjak menjadi 4 kali lipat ($2^2$), atau bahkan lajunya sama sekali tidak terpengaruh ($2^0$). Derajat kepekaan laju terhadap perubahan konsentrasi ini dinamakan **orde reaksi**.

Perhatikan kurva hubungan antara laju reaksi ($v$) terhadap konsentrasi pereaksi untuk tiga orde reaksi dasar pada Gambar 5.4 berikut.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b05-orde-reaksi-title sma-b05-orde-reaksi-desc" data-diagram="sma-b05-orde-reaksi" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b05-orde-reaksi-title">GRAFIK LAJU REAKSI TERHADAP KONSENTRASI UNTUK ORDE 0, 1, DAN 2</title>
  <desc id="sma-b05-orde-reaksi-desc">Kurva grafik karakteristik laju reaksi versus konsentrasi pereaksi untuk orde nol, orde satu, dan orde dua.</desc>
  
  <!-- Panel 1: Orde Nol (Kiri) -->
  <rect x="24" y="24" width="236" height="392" rx="10" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="36" y="36" width="212" height="30" rx="6" fill="#ececec" />
  <text x="142" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">ORDE NOL (m = 0)</text>

  <!-- Sumbu Orde 0 -->
  <line x1="50" y1="90" x2="50" y2="240" stroke="#1f2937" stroke-width="2" />
  <line x1="50" y1="240" x2="230" y2="240" stroke="#1f2937" stroke-width="2" />
  <text x="40" y="96" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">v</text>
  <text x="220" y="258" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">[A]</text>

  <!-- Garis Datar Orde 0 -->
  <line x1="50" y1="160" x2="220" y2="160" stroke="#8a939c" stroke-width="3" />
  <text x="135" y="148" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">v = k [A]&deg; = k</text>

  <rect x="36" y="270" width="212" height="130" rx="6" fill="#ececec" />
  <text x="142" y="294" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KARAKTERISTIK:</text>
  <text x="142" y="316" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">LAJU TIDAK BERUBAH</text>
  <text x="142" y="336" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">MESKI [A] DIPERBESAR</text>
  <text x="142" y="366" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">SATUAN k: M/s</text>

  <!-- Panel 2: Orde Satu (Tengah) -->
  <rect x="282" y="24" width="236" height="392" rx="10" fill="#ffffff" stroke="#2f7fc1" stroke-width="2" />
  <rect x="294" y="36" width="212" height="30" rx="6" fill="#8fd3ef" />
  <text x="400" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">ORDE SATU (m = 1)</text>

  <!-- Sumbu Orde 1 -->
  <line x1="308" y1="90" x2="308" y2="240" stroke="#1f2937" stroke-width="2" />
  <line x1="308" y1="240" x2="488" y2="240" stroke="#1f2937" stroke-width="2" />
  <text x="298" y="96" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">v</text>
  <text x="478" y="258" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">[A]</text>

  <!-- Garis Linear Orde 1 -->
  <line x1="308" y1="240" x2="470" y2="110" stroke="#2f7fc1" stroke-width="3" />
  <text x="390" y="150" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">v = k [A]&sup1;</text>

  <rect x="294" y="270" width="212" height="130" rx="6" fill="#ececec" />
  <text x="400" y="294" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KARAKTERISTIK:</text>
  <text x="400" y="316" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">LAJU BERBANDING LURUS</text>
  <text x="400" y="336" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">[A] NAIK 2X &rarr; v NAIK 2X</text>
  <text x="400" y="366" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">SATUAN k: 1/s</text>

  <!-- Panel 3: Orde Dua (Kanan) -->
  <rect x="540" y="24" width="236" height="392" rx="10" fill="#ffffff" stroke="#d64545" stroke-width="2" />
  <rect x="552" y="36" width="212" height="30" rx="6" fill="#f5a3a3" />
  <text x="658" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">ORDE DUA (m = 2)</text>

  <!-- Sumbu Orde 2 -->
  <line x1="566" y1="90" x2="566" y2="240" stroke="#1f2937" stroke-width="2" />
  <line x1="566" y1="240" x2="746" y2="240" stroke="#1f2937" stroke-width="2" />
  <text x="556" y="96" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">v</text>
  <text x="736" y="258" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">[A]</text>

  <!-- Kurva Parabola Orde 2 -->
  <path d="M 566 240 Q 660 230 730 110" fill="none" stroke="#d64545" stroke-width="3" />
  <text x="640" y="150" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">v = k [A]&sup2;</text>

  <rect x="552" y="270" width="212" height="130" rx="6" fill="#ececec" />
  <text x="658" y="294" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">KARAKTERISTIK:</text>
  <text x="658" y="316" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">LAJU BERBANDING KUADRAT</text>
  <text x="658" y="336" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">[A] NAIK 2X &rarr; v NAIK 4X</text>
  <text x="658" y="366" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">SATUAN k: 1/(M s)</text>
</svg>

*Gambar 5.4: Perbandingan kurva karakteristik laju reaksi terhadap konsentrasi untuk reaksi orde nol, orde satu, dan orde dua.*

Bagaimanakah persamaan hukum laju reaksi disusun dan bagaimana makna tetapan $k$?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Persamaan Hukum Laju Reaksi
Untuk reaksi umum:
$$a\ \ce{A} + b\ \ce{B} \rightarrow \text{Produk}$$

Hubungan ketergantungan laju reaksi terhadap konsentrasi pereaksi dinyatakan dalam **Hukum Laju Reaksi (Persamaan Laju)**:

$$v = k [\ce{A}]^m [\ce{B}]^n$$

*Makna Fisis Rumus:* Laju reaksi sebanding langsung dengan tetapan laju $k$ dikalikan konsentrasi masing-masing pereaksi yang dipangkatkan dengan tingkat sensitivitas (orde reaksi) masing-masing.

- $v$ = laju reaksi ($\text{M s}^{-1}$)
- $k$ = **tetapan laju reaksi** (nilai spesifik pada suhu tertentu)
- $[\ce{A}], [\ce{B}]$ = konsentrasi molar reaktan ($\text{mol L}^{-1}$)
- $m$ = **orde reaksi terhadap zat A**
- $n$ = **orde reaksi terhadap zat B**
- $(m + n)$ = **orde reaksi total (keseluruhan)**

##### B. Makna Nilai Orde Reaksi
1. **Orde Nol ($m = 0$):**  
   Laju reaksi sama sekali tidak bergantung pada konsentrasi zat tersebut ($v = k [\ce{A}]^0 = k$). Perubahan konsentrasi zat A tidak memengaruhi kecepatan reaksi (contoh: reaksi katalisis permukaan jenuh atau pemecahan etanol di hati).
2. **Orde Satu ($m = 1$):**  
   Laju reaksi berbanding lurus secara linier dengan konsentrasi. Jika konsentrasi dilipatgandakan ($2\times$), laju reaksi bertambah cepat $2\times$ ($2^1 = 2$).
3. **Orde Dua ($m = 2$):**  
   Laju reaksi berbanding lurus dengan kuadrat konsentrasi. Jika konsentrasi dilipatgandakan ($2\times$), laju reaksi melonjak $4\times$ ($2^2 = 4$).

##### C. Tetapan Laju Reaksi ($k$) dan Penentuan Satuannya
Nilai numerik $k$ hanya dipengaruhi oleh dua hal: **jenis reaksi** dan **suhu**. Semakin besar nilai $k$, semakin cepat reaksi tersebut berlangsung pada konsentrasi yang sama.

Satuan $k$ bervariasi bergantung pada orde reaksi total ($n_{\text{total}} = m + n$):

$$\text{Satuan } k = \text{M}^{1 - n_{\text{total}}} \cdot \text{s}^{-1} = \left(\text{mol L}^{-1}\right)^{1 - n_{\text{total}}} \cdot \text{s}^{-1}$$

*Makna Fisis Rumus:* Rumus dimensi ini memastikan bahwa ketika satuan $k$ dikalikan dengan konsentrasi berpangkat orde total, satuan akhirnya selalu kembali menjadi satuan laju $\text{M s}^{-1}$.

- Orde Total 0: $\text{M s}^{-1}$
- Orde Total 1: $\text{s}^{-1}$
- Orde Total 2: $\text{M}^{-1}\ \text{s}^{-1}$ (atau $\text{L mol}^{-1}\ \text{s}^{-1}$)
- Orde Total 3: $\text{M}^{-2}\ \text{s}^{-1}$ (atau $\text{L}^2\ \text{mol}^{-2}\ \text{s}^{-1}$)

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Orde reaksi ($m, n$) **tidak ada hubungannya dengan angka koefisien reaksi ($a, b$)** dalam persamaan reaksi setara.
> **Batas Keberlakuan:** Nilai orde reaksi **wajib ditentukan secara empiris melalui data eksperimen**, bukan ditebak dari koefisien stoikiometri. Nilai $m$ dan $n$ hanya sama dengan koefisien reaksi jika reaksi tersebut terbukti sebagai reaksi elementer satu tahap (sangat langka).

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Suatu reaksi memiliki hukum laju: $v = k [\ce{A}]^2 [\ce{B}]^0$.  
(a) Berapakah orde reaksi terhadap A, terhadap B, dan orde reaksi total?  
(b) Jika konsentrasi zat B diperbesar menjadi $3$ kali semula sementara konsentrasi A tetap, apa yang terjadi pada laju reaksi?  
*Jawaban & Analisis:*  
(a) Orde terhadap A = $2$, orde terhadap B = $0$, dan orde reaksi total = $2 + 0 = 2$.  
(b) Laju reaksi **tidak mengalami perubahan sama sekali** (tetap). Karena zat B berorde nol ($[\ce{B}]^0 = 1$), perubahan konsentrasi B tidak memengaruhi nilai kelajuan reaksi.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Suatu reaksi: $\ce{2 NO(g) + Cl2(g) -> 2 NOCl(g)}$ memiliki hukum laju: $v = k [\ce{NO}]^2 [\ce{Cl2}]$. Pada suatu percobaan dengan $[\ce{NO}] = 0.10\ \text{M}$ dan $[\ce{Cl2}] = 0.05\ \text{M}$, laju reaksinya terukur sebesar $2.0 \times 10^{-3}\ \text{M s}^{-1}$.  
(a) Tentukan orde reaksi total dan satuan tetapan laju $k$!  
(b) Hitunglah nilai numerik tetapan laju $k$!  
(c) Berapakah laju reaksi jika konsentrasi $\ce{NO}$ dinaikkan menjadi $0.30\ \text{M}$ dan konsentrasi $\ce{Cl2}$ dinaikkan menjadi $0.10\ \text{M}$?

**Strategi Langkah demi Langkah:**
1. *Tentukan Orde Total dan Satuan $k$:*  
   Orde total = $2 + 1 = 3$.  
   Satuan $k = \text{M}^{1 - 3}\ \text{s}^{-1} = \text{M}^{-2}\ \text{s}^{-1}$ atau $\text{L}^2\ \text{mol}^{-2}\ \text{s}^{-1}$.
2. *Hitung Nilai $k$ dari Data Percobaan:*  
   $$k = \frac{v}{[\ce{NO}]^2 [\ce{Cl2}]} = \frac{2.0 \times 10^{-3}}{(0.10)^2 \times (0.05)} = \frac{2.0 \times 10^{-3}}{10^{-2} \times 5 \times 10^{-2}} = \frac{2.0 \times 10^{-3}}{5 \times 10^{-4}} = 4.0\ \text{M}^{-2}\ \text{s}^{-1}$$
3. *Hitung Laju Reaksi pada Kondisi Baru:*  
   $$v_{\text{baru}} = k [\ce{NO}]^2 [\ce{Cl2}] = 4.0 \times (0.30)^2 \times (0.10) = 4.0 \times 0.09 \times 0.10 = 0.036\ \text{M s}^{-1}$$

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Lupa menguadratkan nilai $[\ce{NO}]$ saat menghitung $k$ atau saat mencari laju baru.
> **Koreksi Konseptual:** Perhatikan pangkat pada masing-masing kurung siku: $(0.30)^2 = 0.09$, bukan $0.30$ atau $0.60$.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Konsentrasi $\ce{NO}$ naik $3\times$ (efek kuadrat: $3^2 = 9\times$). Konsentrasi $\ce{Cl2}$ naik $2\times$ (efek linear: $2^1 = 2\times$). Total kelipatan laju = $9 \times 2 = 18\times$.  
> Laju baru: $2.0 \times 10^{-3} \times 18 = 3.6 \times 10^{-2} = 0.036\ \text{M s}^{-1}$. Sangat cepat dan terverifikasi 100%!  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 3 (Molaritas): Perubahan volume wadah gas menjadi setengahnya akan melipatgandakan seluruh konsentrasi molar menjadi $2\times$, sehingga pada reaksi orde 3 di atas, laju melonjak sebesar $2^3 = 8\times$.

##### 🎯 Latihan Terbimbing
1. Jika suatu reaksi berorde satu memiliki tetapan laju $k = 0.05\ \text{s}^{-1}$, tentukan laju reaksi ketika konsentrasi pereaksi adalah $0.4\ \text{M}$! *(Kunci Jawaban Akhir: 0.02 M s^-1)*
2. Tentukan orde total suatu reaksi jika tetapan lajunya memiliki satuan $\text{L}^3\ \text{mol}^{-3}\ \text{s}^{-1}$! *(Kunci Jawaban Akhir: Orde reaksi total = 4)*`
    },

    // =========================================================================
    // SUBBAB 5.5
    // =========================================================================
    {
      id: 'sma5-5',
      title: '5.5 Penentuan Persamaan Laju dari Data Percobaan Laju Awal dan Peran Katalis Industri',
      difficulty: 'Hard',
      estimatedMinutes: 50,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Dalam sintesis pupuk amonia Haber-Bosch di pabrik, gas nitrogen dan gas hidrogen direaksikan pada suhu ratusan derajat Celcius. Tanpa keberadaan serbuk besi berpori sebagai katalis, reaksi berlangsung sangat lamban sehingga mustahil bernilai ekonomis. Namun begitu katalis dimasukkan, molekul amonia diproduksi dalam tonase raksasa per hari. Bagaimana permukaan logam padat dapat mempercepat reaksi molekul gas?

Di tingkat partikel, atom-atom logam pada permukaan katalis memiliki orbital terluar yang mampu berinteraksi dengan gas pereaksi. Molekul nitrogen dan hidrogen menempel pada permukaan logam (adsorpsi), ikatan kovalennya diregangkan dan diperlemah oleh atom besi, sehingga atom-atom dapat bertukar pasangan membentuk amonia dengan energi aktivasi yang jauh lebih rendah sebelum akhirnya terlepas kembali ke fasa gas (desorpsi).

Amati empat tahap mekanisme kerja katalis heterogen di permukaan logam pada Gambar 5.5 berikut.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b05-katalis-permukaan-title sma-b05-katalis-permukaan-desc" data-diagram="sma-b05-katalis-permukaan" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b05-katalis-permukaan-title">MEKANISME KERJA KATALIS HETEROGEN PADA PERMUKAAN LOGAM</title>
  <desc id="sma-b05-katalis-permukaan-desc">Empat tahapan katalisis heterogen: difusi dan adsorpsi molekul, pelemahan ikatan, reaksi pembentukan molekul baru, dan desorpsi produk.</desc>
  
  <!-- Panel Luar -->
  <rect x="24" y="24" width="752" height="392" rx="12" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="40" y="40" width="720" height="34" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="400" y="62" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">EMPAT TAHAP MEKANISME KATALISIS HETEROGEN</text>

  <!-- Tahap 1: Difusi & Adsorpsi -->
  <rect x="36" y="90" width="168" height="230" rx="8" fill="#ffffff" stroke="#2f7fc1" stroke-width="1.5" />
  <rect x="44" y="98" width="152" height="26" rx="4" fill="#8fd3ef" />
  <text x="120" y="116" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">1. ADSORPSI</text>
  <circle cx="100" cy="150" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="124" cy="150" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <line x1="112" y1="166" x2="112" y2="210" stroke="#2f7fc1" stroke-width="2" stroke-dasharray="3 3" />
  <!-- Logam -->
  <rect x="44" y="220" width="152" height="40" rx="4" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <text x="120" y="244" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">LOGAM KATALIS</text>
  <text x="120" y="280" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">MENEMPEL PADA</text>
  <text x="120" y="300" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">PERMUKAAN AKTIF</text>

  <!-- Tahap 2: Pelemahan Ikatan -->
  <rect x="220" y="90" width="168" height="230" rx="8" fill="#ffffff" stroke="#d64545" stroke-width="1.5" />
  <rect x="228" y="98" width="152" height="26" rx="4" fill="#f5a3a3" />
  <text x="304" y="116" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">2. PELEMAHAN</text>
  <circle cx="280" cy="190" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="328" cy="190" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <line x1="292" y1="190" x2="316" y2="190" stroke="#d64545" stroke-width="2" stroke-dasharray="2 2" />
  <!-- Logam -->
  <rect x="228" y="220" width="152" height="40" rx="4" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <text x="304" y="244" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">LOGAM KATALIS</text>
  <text x="304" y="280" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">IKATAN KOVALEN</text>
  <text x="304" y="300" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">DIRENGGANGKAN</text>

  <!-- Tahap 3: Reaksi Permukaan -->
  <rect x="404" y="90" width="168" height="230" rx="8" fill="#ffffff" stroke="#3f8f46" stroke-width="1.5" />
  <rect x="412" y="98" width="152" height="26" rx="4" fill="#b5efb0" />
  <text x="488" y="116" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">3. REAKSI</text>
  <circle cx="472" cy="180" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="496" cy="180" r="10" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <!-- Logam -->
  <rect x="412" y="220" width="152" height="40" rx="4" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <text x="488" y="244" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">LOGAM KATALIS</text>
  <text x="488" y="280" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">IKATAN BARU</text>
  <text x="488" y="300" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#3f8f46" letter-spacing="0.8" text-anchor="middle">TERBENTUK</text>

  <!-- Tahap 4: Desorpsi -->
  <rect x="588" y="90" width="168" height="230" rx="8" fill="#ffffff" stroke="#2f7fc1" stroke-width="1.5" />
  <rect x="596" y="98" width="152" height="26" rx="4" fill="#d6f0fb" />
  <text x="672" y="116" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">4. DESORPSI</text>
  <circle cx="658" cy="140" r="12" fill="#8fd3ef" stroke="#1f2937" stroke-width="1.5" />
  <circle cx="682" cy="140" r="10" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <line x1="672" y1="160" x2="672" y2="200" stroke="#2f7fc1" stroke-width="2" />
  <polygon points="672,136 666,146 678,146" fill="#2f7fc1" />
  <!-- Logam -->
  <rect x="596" y="220" width="152" height="40" rx="4" fill="#cfd4d9" stroke="#1f2937" stroke-width="1.5" />
  <text x="672" y="244" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">LOGAM KATALIS</text>
  <text x="672" y="280" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">PRODUK TERLEPAS</text>

  <!-- Panel Bawah: Catatan Laju Awal -->
  <rect x="36" y="334" width="720" height="70" rx="8" fill="#ececec" />
  <text x="400" y="358" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">METODE LAJU AWAL: MEMBANDINGKAN DUA PERCOBAAN DENGAN SALAH SATU KONSENTRASI TETAP</text>
  <text x="400" y="382" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">(v1 / v2) = ([A1] / [A2])^m &times; ([B1] / [B2])^n</text>
</svg>

*Gambar 5.5: Empat tahapan kerja katalis heterogen industri dan metode perbandingan rasio laju awal.*

Bagaimanakah prosedur analitis menentukan hukum laju dari tabel data percobaan laboratorium?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Metode Laju Awal (*Initial Rates Method*)
Karena laju reaksi terus menurun seiring waktu, orde reaksi selalu ditentukan pada awal reaksi saat konsentrasi pereaksi masih tepat diketahui ($t \approx 0$).

Langkah matematis penentuan orde reaksi:
1. **Mencari Orde terhadap A ($m$):**  
   Pilih dua nomor percobaan di mana konsentrasi pereaksi lain ($[\ce{B}]$) dibuat **sama (konstan)**, sehingga faktor $[\ce{B}]$ saling meniadakan saat dibandingkan:
   $$\frac{v_1}{v_2} = \left(\frac{[\ce{A}]_1}{[\ce{A}]_2}\right)^m$$
   *Makna Fisis Rumus:* Rasio kelajuan reaksi hanya dipengaruhi secara murni oleh perubahan konsentrasi zat A.

2. **Mencari Orde terhadap B ($n$):**  
   Pilih dua nomor percobaan di mana konsentrasi $[\ce{A}]$ dibuat **sama (konstan)**:
   $$\frac{v_1}{v_3} = \left(\frac{[\ce{B}]_1}{[\ce{B}]_3}\right)^n$$

3. **Jika Data yang Tersedia Berupa Waktu Reaksi ($t$):**  
   Karena $v \propto \frac{1}{t}$, maka rasio laju dibalik posisinya terhadap waktu:
   $$\frac{v_1}{v_2} = \frac{t_2}{t_1} = \left(\frac{[\ce{A}]_1}{[\ce{A}]_2}\right)^m$$

##### B. Klasifikasi dan Peran Katalis Industri
Katalis dikelompokkan menjadi dua golongan utama:
1. **Katalis Homogen:** Katalis yang berada dalam fasa wujud yang sama dengan zat pereaksi (contoh: ion asam $\ce{H+(aq)}$ pada esterifikasi larutan organik).
2. **Katalis Heterogen:** Katalis yang berada dalam fasa wujud yang berbeda dari zat pereaksi, umumnya berupa padatan logam transisi yang mengatalisis campuran gas (contoh: besi $\ce{Fe(s)}$ pada sintesis amonia Haber-Bosch, vanadium pentoksida $\ce{V2O5(s)}$ pada proses Kontak pembuatan asam sulfat, dan platina-rodium $\ce{Pt-Rh(s)}$ pada catalytic converter knalpot kendaraan).

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Perbandingan dua baris percobaan hanya valid jika suhu percobaan dijaga konstan sama persis.
> **Batas Keberlakuan:** Jika suhu berubah antarpercobaan, nilai tetapan laju $k$ ikut berubah sehingga metode perbandingan langsung tidak berlaku. Racun katalis (seperti timbal $\ce{Pb}$ atau sulfur $\ce{S}$) dapat menutupi situs aktif katalis secara permanen sehingga mematikan daya kerjanya.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Mengapa kendaraan bermotor modern yang dilengkapi pengubah katalitik (*catalytic converter*) dilarang keras menggunakan bensin bertimbal?  
*Jawaban & Analisis:* Partikel logam timbal ($\ce{Pb}$) dari gas buang bensin bertimbal akan menempel kuat dan mengendap secara ireversibel pada permukaan aktif platina dan rodium di dalam konverter (keracunan katalis / *catalyst poisoning*). Hal ini memblokir situs aktif tempat gas buang beracun ($\ce{CO}$ dan $\ce{NOx}$) beradsorpsi, sehingga konverter kehilangan kemampuan katalitiknya secara permanen.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Untuk reaksi: $\ce{2 NO(g) + 2 H2(g) -> N2(g) + 2 H2O(g)}$, diperoleh data eksperimen laju awal pada $25\ ^\circ\text{C}$ sebagai berikut:

| Percobaan | $[\ce{NO}]\ (\text{M})$ | $[\ce{H2}]\ (\text{M})$ | Laju Awal $v\ (\text{M s}^{-1})$ |
| :---: | :---: | :---: | :---: |
| 1 | $0.10$ | $0.10$ | $1.2 \times 10^{-3}$ |
| 2 | $0.20$ | $0.10$ | $4.8 \times 10^{-3}$ |
| 3 | $0.20$ | $0.30$ | $1.44 \times 10^{-2}$ |

Tentukan:  
(a) Orde reaksi terhadap $\ce{NO}$!  
(b) Orde reaksi terhadap $\ce{H2}$!  
(c) Rumus persamaan laju reaksi!  
(d) Nilai tetapan laju reaksi ($k$) beserta satuannya!

**Strategi Langkah demi Langkah:**
1. *Tentukan Orde terhadap $\ce{NO}$ ($m$):*  
   Pilih Percobaan 1 dan 2 (di mana $[\ce{H2}]$ tetap = $0.10\ \text{M}$):
   $$\frac{v_2}{v_1} = \left(\frac{[\ce{NO}]_2}{[\ce{NO}]_1}\right)^m \Rightarrow \frac{4.8 \times 10^{-3}}{1.2 \times 10^{-3}} = \left(\frac{0.20}{0.10}\right)^m$$
   $$4 = (2)^m \Rightarrow m = 2$$
2. *Tentukan Orde terhadap $\ce{H2}$ ($n$):*  
   Pilih Percobaan 2 dan 3 (di mana $[\ce{NO}]$ tetap = $0.20\ \text{M}$):
   $$\frac{v_3}{v_2} = \left(\frac{[\ce{H2}]_3}{[\ce{H2}]_2}\right)^n \Rightarrow \frac{1.44 \times 10^{-2}}{4.8 \times 10^{-3}} = \left(\frac{0.30}{0.10}\right)^n$$
   $$3 = (3)^n \Rightarrow n = 1$$
3. *Susun Rumus Persamaan Laju Reaksi:*  
   $$v = k [\ce{NO}]^2 [\ce{H2}]$$
4. *Hitung Nilai dan Satuan $k$ (Gunakan Data Percobaan 1):*  
   Orde total = $2 + 1 = 3$, maka satuan $k = \text{M}^{-2}\ \text{s}^{-1}$.
   $$k = \frac{v_1}{[\ce{NO}]_1^2 [\ce{H2}]_1} = \frac{1.2 \times 10^{-3}}{(0.10)^2 \times (0.10)} = \frac{1.2 \times 10^{-3}}{1.0 \times 10^{-3}} = 1.2\ \text{M}^{-2}\ \text{s}^{-1}$$

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Langsung menganggap orde terhadap $\ce{H2}$ bernilai $2$ karena koefisien di persamaan reaksinya adalah $2\ \ce{H2}$.
> **Koreksi Konseptual:** Data percobaan membuktikan bahwa ketika $[\ce{H2}]$ naik $3\times$ (Percobaan 2 ke 3), laju reaksi hanya naik $3\times$ ($1.44 \times 10^{-2} / 4.8 \times 10^{-3} = 3$). Ini membuktikan bahwa orde terhadap $\ce{H2}$ adalah $1$, bukan $2$. Hukum laju wajib tunduk pada data empiris!

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Uji nilai $k = 1.2$ pada Percobaan 2:  
> $v_2 = 1.2 \times (0.20)^2 \times (0.10) = 1.2 \times 0.04 \times 0.10 = 4.8 \times 10^{-3}\ \text{M s}^{-1}$. Cocok sempurna dengan data tabel!  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 6 (Kesetimbangan Kimia): Reaksi maju $v_1 = k_1 [\ce{NO}]^2 [\ce{H2}]$ dan reaksi balik $v_{-1} = k_{-1} [\ce{N2}][\ce{H2O}]^2$ akan mencapai kelajuan yang sama ($v_1 = v_{-1}$) saat sistem tiba di keadaan kesetimbangan dinamis.

##### 🎯 Latihan Terbimbing
1. Pada penentuan laju reaksi: $\ce{P + Q -> R}$, ketika konsentrasi P dinaikkan $2\times$ pada konsentrasi Q tetap, laju reaksi menjadi $4\times$ lebih cepat. Ketika konsentrasi P dan Q sama-sama dinaikkan $2\times$, laju reaksi menjadi $8\times$ lebih cepat. Tentukan persamaan laju reaksi tersebut! *(Kunci Jawaban Akhir: v = k [P]^2 [Q])*
2. Suatu reaksi memiliki persamaan laju $v = k [\ce{A}][\ce{B}]^2$. Jika konsentrasi A diperkecil menjadi $1/2$ kali semula dan konsentrasi B diperbesar menjadi $2$ kali semula, bagaimanakah perubahan laju reaksinya terhadap laju mula-mula? *(Kunci Jawaban Akhir: Laju reaksi menjadi 2 kali lebih cepat dari laju semula)*`
    },

    // =========================================================================
    // MACRO-LOOP PENUTUP BAB 5
    // =========================================================================
    {
      id: 'sma5-penutup',
      title: 'Penutup Bab 5: Pengayaan Inkuiri, Rangkuman Cepat, & Evaluasi Mandiri',
      difficulty: 'Hard',
      estimatedMinutes: 60,
      content: `### 🚀 Pengayaan Inkuiri & Kontekstual

#### Katalisis Heterogen Otomotif: Kimia di Balik Knalpot Ramah Lingkungan
Setiap mobil dan sepeda motor berbahan bakar bensin membuang campuran gas beracun hasil pembakaran di ruang mesin kendaraan: karbon monoksida ($\ce{CO}$ yang mengikat hemoglobin darah), hidrokarbon tak terbakar ($\ce{C_xH_y}$ pemicu asbut fotokimia), dan nitrogen monoksida ($\ce{NO}$ penyebab hujan asam).

Jika gas-gas tersebut dibiarkan bereaksi sendiri di udara, reaksi penetralannya memerlukan waktu bertahun-tahun karena memiliki bukit energi aktivasi ($E_a$) yang sangat tinggi. Inilah sebabnya seluruh knalpot kendaraan modern dilengkapi dengan unit pengubah katalitik tiga arah (*three-way catalytic converter*).

Di dalam tabung logam tersebut terdapat struktur keramik sarang lebah (*honeycomb*) yang dilapisi partikel nano logam mulia platina ($\ce{Pt}$), paladium ($\ce{Pd}$), dan rodium ($\ce{Rh}$). 
- Pada tahap reduksi, rodium mengatalisis penguraian gas oksida nitrogen beracun menjadi gas nitrogen murni yang aman:
  $$2\ \ce{NO(g) -> N2(g) + O2(g)}$$
- Pada tahap oksidasi serentak, platina dan paladium mengatalisis pembakaran gas $\ce{CO}$ dan hidrokarbon sisa menjadi karbon dioksida dan uap air:
  $$2\ \ce{CO(g) + O2(g) -> 2 CO2(g)}$$

Tanpa menurunkan energi aktivasi melalui permukaan katalis heterogen ini, kualitas udara perkotaan modern akan berada pada tingkat yang membahayakan pernapasan manusia setiap hari.

---

### ⚡ Ringkasan Cepat & Peta Keputusan

#### Tabel Komparasi Karakteristik Orde Reaksi

| Parameter Pembanding | Orde Nol ($m = 0$) | Orde Satu ($m = 1$) | Orde Dua ($m = 2$) |
| :--- | :--- | :--- | :--- |
| **Persamaan Laju** | $v = k$ | $v = k [\ce{A}]$ | $v = k [\ce{A}]^2$ |
| **Bentuk Grafik $v$ vs $[\ce{A}]$** | Garis mendatar horisontal | Garis lurus linier menanjak | Kurva melengkung parabola |
| **Efek $[\ce{A}]$ Naik $2\times$** | Laju tetap ($2^0 = 1\times$) | Laju naik $2\times$ ($2^1 = 2\times$) | Laju melonjak $4\times$ ($2^2 = 4\times$) |
| **Satuan Tetapan Laju ($k$)** | $\text{M s}^{-1}$ | $\text{s}^{-1}$ | $\text{M}^{-1}\ \text{s}^{-1}$ |
| **Contoh Reaksi Nyata** | Eliminasi alkohol dalam darah | Peluruhan radioaktif & penguraian $\ce{N2O5}$ | Pembentukan $\ce{NO2}$ dari $\ce{NO}$ dan $\ce{O3}$ |

#### Peta Alur Keputusan: Menentukan Hukum Laju dari Data Eksperimen
Gunakan alur logika penentuan berikut saat memecahkan soal tabel percobaan laju reaksi:

$$\begin{array}{c}
\boxed{\text{\textbf{PETA ALUR KEPUTUSAN: PENENTUAN HUKUM LAJU REAKSI}}} \\
\downarrow \\
\text{Periksa Jenis Data pada Tabel Percobaan:} \\
\downarrow \\
\begin{array}{c|c}
\text{Data Berupa Laju Awal }(v) & \text{Data Berupa Waktu Reaksi }(t) \\
\downarrow & \downarrow \\
\text{Gunakan Rasio Langsung: } \frac{v_1}{v_2} & \text{Balik Rasio Menjadi: } \frac{v_1}{v_2} = \frac{t_2}{t_1} \\
\downarrow & \downarrow \\
\multicolumn{2}{c}{\boxed{\text{\textbf{CARI SEPASANG PERCOBAAN DENGAN 1 VARIABEL KONSENTRASI KONSTAN}}}} \\
\multicolumn{2}{c}{\downarrow} \\
\multicolumn{2}{c}{\text{Hitung Orde } m \text{ dari: } \frac{v_1}{v_2} = \left(\frac{[\text{A}]_1}{[\text{A}]_2}\right)^m \quad \rightarrow \quad 2^m = 4 \Rightarrow m = 2} \\
\multicolumn{2}{c}{\downarrow} \\
\multicolumn{2}{c}{\boxed{\text{Susun Persamaan: } v = k [\text{A}]^m [\text{B}]^n \quad \rightarrow \quad \text{Hitung } k = \frac{v}{[\text{A}]^m [\text{B}]^n}}}
\end{array}
\end{array}$$

---

### 🏆 Evaluasi Mandiri Berjenjang

#### Tingkat I: Fondasi (Asesmen Formatif)
1. Apakah yang dimaksud dengan laju reaksi kimia, dan mengapa tanda negatif diberikan pada ungkapan laju berkurangnya pereaksi?  
   *(Kunci Jawaban: Laju reaksi adalah perubahan konsentrasi molar zat per satuan waktu; tanda negatif diberikan karena konsentrasi pereaksi berkurang [Δ[R] < 0] sehingga perkalian dengan tanda negatif menghasilkan nilai kelajuan yang selalu bernilai positif)*
2. Sebutkan dua syarat mutlak yang harus dipenuhi agar suatu tumbukan antarpartikel dapat menghasilkan reaksi kimia!  
   *(Kunci Jawaban: [1] Memiliki orientasi geometris molekul yang tepat saat bertabrakan; [2] Memiliki energi kinetik yang cukup untuk melampaui energi aktivasi, Ek ≥ Ea)*
3. Bagaimanakah pengaruh kenaikan konsentrasi dan luas permukaan terhadap nilai energi aktivasi ($E_a$)? Jelaskan!  
   *(Kunci Jawaban: Tidak memengaruhi sama sekali; energi aktivasi Ea adalah sifat intrinsik reaksi yang bernilai tetap; konsentrasi dan luas permukaan hanya meningkatkan frekuensi terjadinya tumbukan antarpartikel)*

#### Tingkat II: Integrasi & Taktis (C3–C4)
4. Suatu reaksi: $2\ \ce{A + B -> C}$ memiliki persamaan laju $v = k [\ce{A}]^2 [\ce{B}]$. Jika volume wadah reaksi diperkecil menjadi setengah ($1/2$) dari volume semula, bagaimanakah perubahan laju reaksi terhadap kelajuan semula?  
   *(Kunci Jawaban: Volume wadah menjadi 1/2 kali membuat konsentrasi seluruh gas berlipat ganda 2 kali; maka laju reaksi melonjak sebesar 2^2 × 2^1 = 8 kali lebih cepat)*
5. Setiap kenaikan suhu $10\ ^\circ\text{C}$, suatu reaksi kimia berlangsung dua kali lebih cepat. Jika pada suhu $30\ ^\circ\text{C}$ reaksi tuntas dalam waktu $16\ \text{menit}$, pada suhu berapakah reaksi tersebut dapat tuntas hanya dalam waktu $1\ \text{menit}$?  
   *(Kunci Jawaban: Waktu berkurang dari 16 menjadi 1 menit = 1/16 kali = (1/2)^4. Diperlukan 4 interval kenaikan suhu: 30 + (4 × 10) = 70 °C)*

#### Tingkat III: Penalaran Lanjut / HOTS (C4–C5)
6. Data kinetika untuk reaksi: $\ce{A + 2 B -> C + D}$ diperoleh sebagai berikut:  
   - Percobaan 1: $[\ce{A}] = 0.1\ \text{M}, [\ce{B}] = 0.1\ \text{M}$, waktu reaksi $t = 72\ \text{detik}$  
   - Percobaan 2: $[\ce{A}] = 0.2\ \text{M}, [\ce{B}] = 0.1\ \text{M}$, waktu reaksi $t = 36\ \text{detik}$  
   - Percobaan 3: $[\ce{A}] = 0.2\ \text{M}, [\ce{B}] = 0.2\ \text{M}$, waktu reaksi $t = 9\ \text{detik}$  
   (a) Tentukan orde reaksi terhadap A dan terhadap B!  
   (b) Tentukan persamaan laju reaksi lengkap beserta satuan tetapan lajunya!  
   (c) Jika dalam suatu reaktor industri terdapat campuran dengan $[\ce{A}] = 0.4\ \text{M}$ dan $[\ce{B}] = 0.3\ \text{M}$, ramalkan berapa detik waktu reaksi yang dibutuhkan hingga tuntas!  
   *(Kunci Jawaban: (a) Dari perc 1 & 2: t1/t2 = 72/36 = 2 = (0.2/0.1)^m => m = 1 (orde A = 1). Dari perc 2 & 3: t2/t3 = 36/9 = 4 = (0.2/0.1)^n => n = 2 (orde B = 2). (b) v = k [A] [B]^2, satuan k = M^-2 s^-1. (c) v sebanding dengan [A][B]^2. Dibanding Percobaan 1: faktor A = 4x, faktor B = 3x (orde 2 = 9x). Total laju = 4 × 9 = 36 kali lebih cepat. Maka waktu t = 72 / 36 = 2 detik)*`
    }
  ]
};
