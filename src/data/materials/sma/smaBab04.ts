/**
 * src/data/materials/sma/smaBab04.ts
 * Bab 4: Termokimia / Energetika Kimia (Kelas XI — Fase F)
 * Berdasarkan Kerangka Arsitektur Pedagogis v3 (SaveMyExams style)
 */

import type { SmaMaterialItem } from '../../smaMaterialsData';

export const SMA_BAB_04: SmaMaterialItem = {
  id: 104,
  topic_number: 4,
  title: 'Termokimia / Energetika Kimia',
  description: 'Memahami konsep sistem, lingkungan, entalpi molar standar, penentuan kalor reaksi via kalorimetri, Hukum Hess, dan energi ikatan rata-rata.',
  grade: 'Kelas 11',
  semester: 1,
  curriculumPhase: 'Fase F',
  estimatedTime: '10 Jam Pelajaran (5 Pertemuan)',
  prerequisites: ['Stoikiometri & Konsep Mol (Bab 3)', 'Ikatan Kimia (Bab 2)'],
  learningObjectives: [
    'Membedakan sistem terbuka, tertutup, dan terisolasi serta aliran kalor pada reaksi eksoterm dan endoterm.',
    'Menuliskan persamaan termokimia untuk berbagai perubahan entalpi molar standar (ΔH°f, ΔH°d, ΔH°c, ΔH°n).',
    'Menghitung perubahan entalpi reaksi melalui data kalorimetri cangkir stirofoam.',
    'Menentukan perubahan entalpi reaksi menggunakan Hukum Hess, diagram tingkat energi, dan data entalpi pembentukan standar.',
    'Menghitung ΔH reaksi berdasarkan energi ikatan rata-rata serta menganalisis efisiensi bahan bakar.'
  ],
  conceptBlocks: [
    // =========================================================================
    // SUBBAB 4.1
    // =========================================================================
    {
      id: 'sma4-1',
      title: '4.1 Sistem, Lingkungan, Pertukaran Energi, serta Reaksi Eksoterm dan Endoterm',
      difficulty: 'Easy',
      estimatedMinutes: 45,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Saat Anda melarutkan serbuk detergen ke dalam segelas air, wadah gelas seketika terasa hangat di telapak tangan. Sebaliknya, saat butiran pupuk urea dilarutkan ke dalam air, dinding gelas terasa dingin membeku. Mengapa dua proses pelarutan yang tampak serupa menghasilkan sensasi suhu yang bertolak belakang pada kulit Anda?

Fenomena ini bersumber dari perpindahan energi termal di tingkat partikel. Setiap zat tersusun atas partikel yang menyimpan energi potensial kimia di dalam ikatan antaratm dan gaya antarmolekulnya. Ketika ikatan kimia lama terputus dan ikatan baru terbentuk, selisih energi potensial diubah menjadi energi kinetik termal yang dilepaskan ke lingkungan, atau sebaliknya diserap dari lingkungan.

Perhatikan skema aliran kalor dan klasifikasi batas perpindahan materi serta energi pada Gambar 4.1 sebelum membedah batas konseptual termokimia.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b04-sistem-energi-title sma-b04-sistem-energi-desc" data-diagram="sma-b04-sistem-energi" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b04-sistem-energi-title">ALIRAN ENERGI SISTEM DAN LINGKUNGAN SERTA DIAGRAM TINGKAT ENERGI</title>
  <desc id="sma-b04-sistem-energi-desc">Ilustrasi reaksi eksoterm dengan pelepasan kalor ke lingkungan dan reaksi endoterm dengan penyerapan kalor dari lingkungan beserta profil tingkat energi.</desc>
  
  <!-- Panel Kiri: Reaksi Eksoterm -->
  <rect x="24" y="24" width="364" height="392" rx="12" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="40" y="40" width="332" height="32" rx="6" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5" />
  <text x="206" y="62" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">REAKSI EKSOTERM</text>
  
  <!-- Kotak Sistem Eksoterm -->
  <rect x="126" y="96" width="160" height="74" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="206" y="126" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">SISTEM REAKSI</text>
  <text x="206" y="148" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">H REAKTAN &gt; H PRODUK</text>
  
  <!-- Panah Kalor Keluar -->
  <line x1="126" y1="133" x2="68" y2="133" stroke="#d64545" stroke-width="2" />
  <polygon points="60,133 72,127 72,139" fill="#d64545" />
  <line x1="286" y1="133" x2="344" y2="133" stroke="#d64545" stroke-width="2" />
  <polygon points="352,133 340,127 340,139" fill="#d64545" />
  <text x="206" y="196" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">KALOR DILEPAS KE LINGKUNGAN</text>
  <text x="206" y="216" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">SUHU LINGKUNGAN NAIK</text>

  <!-- Profil Energi Eksoterm -->
  <line x1="60" y1="250" x2="60" y2="390" stroke="#1f2937" stroke-width="1.5" />
  <line x1="60" y1="390" x2="360" y2="390" stroke="#1f2937" stroke-width="1.5" />
  <line x1="80" y1="280" x2="180" y2="280" stroke="#d64545" stroke-width="2.5" />
  <text x="130" y="272" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">REAKTAN</text>
  <line x1="240" y1="340" x2="340" y2="340" stroke="#2f7fc1" stroke-width="2.5" />
  <text x="290" y="332" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PRODUK</text>
  <line x1="210" y1="282" x2="210" y2="336" stroke="#d64545" stroke-width="1.5" stroke-dasharray="3 3" />
  <polygon points="210,338 206,328 214,328" fill="#d64545" />
  <text x="210" y="366" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">&Delta;H NEGATIF (TURUN)</text>

  <!-- Panel Kanan: Reaksi Endoterm -->
  <rect x="412" y="24" width="364" height="392" rx="12" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="428" y="40" width="332" height="32" rx="6" fill="#8fd3ef" stroke="#2f7fc1" stroke-width="1.5" />
  <text x="594" y="62" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">REAKSI ENDOTERM</text>

  <!-- Kotak Sistem Endoterm -->
  <rect x="514" y="96" width="160" height="74" rx="8" fill="#d6f0fb" stroke="#1f2937" stroke-width="2" />
  <text x="594" y="126" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">SISTEM REAKSI</text>
  <text x="594" y="148" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">H REAKTAN &lt; H PRODUK</text>

  <!-- Panah Kalor Masuk -->
  <line x1="454" y1="133" x2="506" y2="133" stroke="#2f7fc1" stroke-width="2" />
  <polygon points="514,133 502,127 502,139" fill="#2f7fc1" />
  <line x1="734" y1="133" x2="682" y2="133" stroke="#2f7fc1" stroke-width="2" />
  <polygon points="674,133 686,127 686,139" fill="#2f7fc1" />
  <text x="594" y="196" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">KALOR DISERAP DARI LINGKUNGAN</text>
  <text x="594" y="216" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">SUHU LINGKUNGAN TURUN</text>

  <!-- Profil Energi Endoterm -->
  <line x1="448" y1="250" x2="448" y2="390" stroke="#1f2937" stroke-width="1.5" />
  <line x1="448" y1="390" x2="748" y2="390" stroke="#1f2937" stroke-width="1.5" />
  <line x1="468" y1="340" x2="568" y2="340" stroke="#2f7fc1" stroke-width="2.5" />
  <text x="518" y="332" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">REAKTAN</text>
  <line x1="628" y1="280" x2="728" y2="280" stroke="#d64545" stroke-width="2.5" />
  <text x="678" y="272" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PRODUK</text>
  <line x1="598" y1="338" x2="598" y2="284" stroke="#2f7fc1" stroke-width="1.5" stroke-dasharray="3 3" />
  <polygon points="598,282 594,292 602,292" fill="#2f7fc1" />
  <text x="598" y="366" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">&Delta;H POSITIF (NAIK)</text>
</svg>

*Gambar 4.1: Aliran perpindahan kalor dan diagram tingkat energi pada reaksi eksoterm vs endoterm.*

Bagaimana cara kita mendefinisikan apa yang menjadi pusat perhatian analisis dan apa yang bertindak sebagai penerima kalor?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Batas Termodinamika: Sistem vs Lingkungan
Dalam termokimia, alam semesta dibagi menjadi dua bagian pokok:
1. **Sistem** adalah bagian spesifik dari alam semesta yang menjadi pusat pengamatan atau tempat reaksi kimia berlangsung (misalnya campuran larutan asam klorida dan natrium hidroksida).
2. **Lingkungan** adalah seluruh bagian alam semesta yang berada di luar sistem dan dapat bertukar energi atau materi dengan sistem (misalnya air pelarut, beker gelas, termometer, udara sekitar, dan tangan pengamat).

Berdasarkan interaksi perpindahan zat dan energi melalui batasnya, sistem digolongkan menjadi tiga:
- **Sistem Terbuka:** Terjadi pertukaran energi (kalor) dan materi antara sistem dengan lingkungan (contoh: beker terbuka berisi air panas; uap air keluar dan kalor merambat keluar).
- **Sistem Tertutup:** Hanya terjadi pertukaran energi (kalor), tetapi materi tidak dapat keluar-masuk (contoh: botol tertutup rapat berisi minuman hangat).
- **Sistem Terisolasi:** Tidak terjadi pertukaran energi maupun materi antara sistem dengan lingkungan (contoh: termos air panas ideal atau kalorimeter berinsulasi sempurna).

##### B. Entalpi ($H$) dan Perubahan Entalpi ($\Delta H$)
**Entalpi ($H$)** adalah kandungan energi termal total suatu sistem pada tekanan tetap. Nilai mutlak entalpi suatu zat tunggal tidak dapat diukur secara langsung. Yang dapat diukur dalam laboratorium adalah perubahannya ($\Delta H$) ketika sistem mengalami reaksi kimia atau perubahan fasa:

$$\Delta H = H_{\text{produk}} - H_{\text{reaktan}}$$

*Makna Fisis Rumus:* Perubahan entalpi ($\Delta H$) menunjukkan selisih neto antara energi kimia potensial zat-zat hasil reaksi dengan energi kimia potensial zat-zat pereaksi.

##### C. Karakteristik Reaksi Eksoterm dan Endoterm
1. **Reaksi Eksoterm:**
   - Kalor berpindah dari **sistem ke lingkungan** ($q_{\text{sistem}} < 0$).
   - Entalpi zat produk lebih kecil daripada pereaksi ($H_{\text{produk}} < H_{\text{reaktan}}$).
   - Tanda $\Delta H$ bernilai **negatif** ($\Delta H < 0$).
   - Suhu lingkungan mengalami **kenaikan** ($T_{\text{akhir}} > T_{\text{awal}}$).
2. **Reaksi Endoterm:**
   - Kalor diserap oleh **sistem dari lingkungan** ($q_{\text{sistem}} > 0$).
   - Entalpi zat produk lebih besar daripada pereaksi ($H_{\text{produk}} > H_{\text{reaktan}}$).
   - Tanda $\Delta H$ bernilai **positif** ($\Delta H > 0$).
   - Suhu lingkungan mengalami **penurunan** ($T_{\text{akhir}} < T_{\text{awal}}$).

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Nilai $\Delta H$ sama persis dengan kalor reaksi ($q_p$) hanya jika reaksi berlangsung pada **tekanan tetap** (seperti reaksi di beker terbuka pada tekanan atmosfer 1 atm).
> **Batas Keberlakuan:** Suhu yang diukur oleh termometer adalah **suhu lingkungan** (larutan air pelarut), bukan suhu sistem reaksi itu sendiri. Jika termometer mencatat kenaikan suhu, sistem justru sedang melepaskan energi (eksoterm).

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Sebongkah es diletakkan di atas meja ruangan dan meleleh spontan menjadi air cair. Apakah proses peleburan es tersebut tergolong eksoterm atau endoterm? Mengapa es terasa dingin di tangan?  
*Jawaban & Analisis:* Peleburan es adalah proses **endoterm** ($\Delta H > 0$). Molekul-molekul $\ce{H2O}$ dalam kisi kristal es (sistem) menyerap energi kalor dari telapak tangan dan udara ruangan (lingkungan) untuk mengatasi gaya tarik antarmolekulnya. Karena telapak tangan kehilangan kalor ke es, termoreseptor kulit mendeteksi penurunan suhu sehingga es terasa dingin.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Ke dalam labu erlenmeyer dimasukkan larutan $\ce{Ba(OH)2.8H2O}$ padat dan serbuk $\ce{NH4Cl}$. Setelah diaduk perlahan pada bejana tertutup, dasar labu menjadi sangat dingin dan tetesan air di luar labu membeku menjadi lapisan es tipis. Suhu termometer turun dari $27\ ^\circ\text{C}$ menjadi $-5\ ^\circ\text{C}$.  
(a) Tentukan apakah reaksi tersebut tergolong eksoterm atau endoterm!  
(b) Bagaimanakah perbandingan entalpi reaktan terhadap entalpi produk?  
(c) Gambarkan diagram tingkat energi yang sesuai!

**Strategi Langkah demi Langkah:**
1. *Identifikasi Sistem dan Lingkungan:*  
   - Sistem: Partikel zat pereaksi $\ce{Ba(OH)2}$ dan $\ce{NH4Cl}$ yang bereaksi.  
   - Lingkungan: Dinding labu erlenmeyer, termometer, dan udara di sekitarnya.
2. *Analisis Aliran Kalor:*  
   Suhu termometer turun drastis ($27\ ^\circ\text{C} \rightarrow -5\ ^\circ\text{C}$), yang berarti lingkungan kehilangan kalor karena diserap masuk ke dalam sistem reaksi.
3. *Simpulan Karakteristik Termokimia:*  
   - (a) Reaksi tergolong **endoterm** karena menyerap kalor dari lingkungan ($\Delta H > 0$).
   - (b) Karena menyerap energi, entalpi akhir (produk) lebih tinggi daripada entalpi awal (reaktan): $H_{\text{produk}} > H_{\text{reaktan}}$.
   - (c) Diagram tingkat energi digambar dengan garis reaktan di bagian bawah dan garis produk di bagian atas, dihubungkan panah tegak mengarah ke atas bertanda $\Delta H > 0$.

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Banyak siswa mengira bahwa jika suhu termometer turun, reaksi menghasilkan dingin sehingga reaksi melepaskan energi.
> **Koreksi Konseptual:** Dingin bukanlah energi yang dilepaskan, melainkan kondisi saat kalor ditarik keluar dari lingkungan. Termometer adalah bagian dari lingkungan. Penurunan suhu termometer menandakan bahwa sistem mengambil kalor dari lingkungan (endoterm).

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Ingat prinsip tanda aljabar bank: jika rekening sistem menerima transfer masuk kalor, saldo bertambah ($\Delta H = +$, endoterm). Jika sistem mentransfer keluar kalor, saldo berkurang ($\Delta H = -$, eksoterm).  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 2 (Ikatan Kimia): Pembentukan ikatan selalu membebaskan energi (eksoterm), sedangkan pemutusan ikatan selalu membutuhkan energi (endoterm).

##### 🎯 Latihan Terbimbing
1. Ketika gas propana ($\ce{C3H8}$) dibakar sempurna di udara terbuka, dihasilkan gas karbon dioksida dan uap air disertai nyala api yang memancarkan panas tinggi. Tentukan jenis reaksi (eksoterm/endoterm) dan tanda aljabar untuk $\Delta H$! *(Kunci Jawaban Akhir: Reaksi eksoterm, \Delta H bernilai negatif / \Delta H < 0)*
2. Di dalam kalorimeter tertutup, $50\ \text{mL}$ larutan $\ce{HCl}\ 1\ \text{M}$ direaksikan dengan $50\ \text{mL}$ larutan $\ce{NaOH}\ 1\ \text{M}$. Suhu campuran larutan naik dari $25.0\ ^\circ\text{C}$ menjadi $31.5\ ^\circ\text{C}$. Tentukan apakah entalpi produk lebih besar atau lebih kecil daripada entalpi pereaksi! *(Kunci Jawaban Akhir: Entalpi produk lebih kecil daripada entalpi pereaksi, H_produk < H_reaktan)*`
    },

    // =========================================================================
    // SUBBAB 4.2
    // =========================================================================
    {
      id: 'sma4-2',
      title: '4.2 Perubahan Entalpi Standar (ΔH°f, ΔH°d, ΔH°c, ΔH°n) dan Persamaan Termokimia',
      difficulty: 'Medium',
      estimatedMinutes: 45,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Ketika Anda menyalakan kompor gas di dapur, gas metana ($\ce{CH4}$) bercampur dengan oksigen dan terbakar melepaskan kalor dalam jumlah yang terukur. Mengapa para kimiawan di seluruh dunia selalu mencantumkan nilai kalor pembakaran ini lengkap dengan angka koefisien reaksi dan fasa zatnya?

Hal ini karena jumlah energi yang dilepaskan atau diserap sangat bergantung pada jumlah mol zat yang bereaksi dan wujud fisiknya. Membakar $1\ \text{mol}$ gas metana untuk menghasilkan air berwujud cair ($\ce{H2O(l)}$) membebaskan energi yang berbeda dibandingkan jika air yang dihasilkan berwujud uap gas ($\ce{H2O(g)}$), sebab uap air masih menyimpan energi laten penguapan.

Amati rangkuman empat jenis perubahan entalpi standar molar pada Gambar 4.2 sebelum menuliskan persamaan termokimianya.

<svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b04-entalpi-standar-title sma-b04-entalpi-standar-desc" data-diagram="sma-b04-entalpi-standar" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b04-entalpi-standar-title">EMPAT JENIS PERUBAHAN ENTALPI STANDAR MOLAR</title>
  <desc id="sma-b04-entalpi-standar-desc">Bagan perbandingan entalpi pembentukan standar, penguraian standar, pembakaran standar, dan penetralan standar.</desc>
  
  <!-- Kotak 1: delta Hf standard -->
  <rect x="24" y="24" width="364" height="196" rx="10" fill="#ffffff" stroke="#2f7fc1" stroke-width="2" />
  <rect x="36" y="36" width="340" height="30" rx="6" fill="#8fd3ef" />
  <text x="206" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PEMBENTUKAN STANDAR (&Delta;H&deg;F)</text>
  <text x="44" y="92" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DEFINISI: PEMBENTUKAN 1 MOL SENYAWA</text>
  <text x="44" y="112" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">DARI UNSUR STABIL PADA 298 K DAN 1 ATM</text>
  <rect x="44" y="126" width="324" height="74" rx="6" fill="#ececec" />
  <text x="206" y="152" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">C(s, grafit) + O2(g) &rarr; CO2(g)</text>
  <text x="206" y="178" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">&Delta;H&deg;F = -393.5 KJ/MOL</text>

  <!-- Kotak 2: delta Hd standard -->
  <rect x="412" y="24" width="364" height="196" rx="10" fill="#ffffff" stroke="#3f8f46" stroke-width="2" />
  <rect x="424" y="36" width="340" height="30" rx="6" fill="#b5efb0" />
  <text x="594" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PENGURAIAN STANDAR (&Delta;H&deg;D)</text>
  <text x="432" y="92" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DEFINISI: PENGURAIAN 1 MOL SENYAWA</text>
  <text x="432" y="112" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">MENJADI UNSUR-UNSURNYA</text>
  <rect x="432" y="126" width="324" height="74" rx="6" fill="#ececec" />
  <text x="594" y="152" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">CO2(g) &rarr; C(s, grafit) + O2(g)</text>
  <text x="594" y="178" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">&Delta;H&deg;D = +393.5 KJ/MOL</text>

  <!-- Kotak 3: delta Hc standard -->
  <rect x="24" y="236" width="364" height="196" rx="10" fill="#ffffff" stroke="#d64545" stroke-width="2" />
  <rect x="36" y="248" width="340" height="30" rx="6" fill="#f5a3a3" />
  <text x="206" y="268" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PEMBAKARAN STANDAR (&Delta;H&deg;C)</text>
  <text x="44" y="304" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DEFINISI: PEMBAKARAN 1 MOL ZAT</text>
  <text x="44" y="324" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">DENGAN OKSIGEN (SELALU EKSOTERM)</text>
  <rect x="44" y="338" width="324" height="74" rx="6" fill="#ececec" />
  <text x="206" y="364" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">CH4(g) + 2 O2(g) &rarr; CO2(g) + 2 H2O(l)</text>
  <text x="206" y="390" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">&Delta;H&deg;C = -890.3 KJ/MOL</text>

  <!-- Kotak 4: delta Hn standard -->
  <rect x="412" y="236" width="364" height="196" rx="10" fill="#ffffff" stroke="#8a939c" stroke-width="2" />
  <rect x="424" y="248" width="340" height="30" rx="6" fill="#fde58a" />
  <text x="594" y="268" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PENETRALAN STANDAR (&Delta;H&deg;N)</text>
  <text x="432" y="304" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DEFINISI: PEMBENTUKAN 1 MOL H2O</text>
  <text x="432" y="324" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">DARI REAKSI ASAM DAN BASA ENCER</text>
  <rect x="432" y="338" width="324" height="74" rx="6" fill="#ececec" />
  <text x="594" y="364" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">HCl(aq) + NaOH(aq) &rarr; NaCl + H2O</text>
  <text x="594" y="390" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">&Delta;H&deg;N &approx; -57.3 KJ/MOL</text>
</svg>

*Gambar 4.2: Ringkasan perbandingan definisi dan persamaan termokimia untuk empat jenis perubahan entalpi standar molar.*

Bagaimanakah cara baku menuliskan persamaan reaksi kimia yang memuat informasi energi ini secara akurat?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Persamaan Termokimia
**Persamaan termokimia** adalah persamaan reaksi kimia setara yang mengikutsertakan wujud fasa setiap zat dan nilai perubahan entalpi ($\Delta H$) yang menyertai reaksi tersebut.

Aturan baku penulisan persamaan termokimia:
1. Koefisien reaksi menyatakan **jumlah mol** zat, bukan sekadar rasio butir partikel. Karena itu, koefisien pecahan (seperti $1/2$ atau $3/2$) diperbolehkan demi mempertahankan basis $1\ \text{mol}$ zat acuan.
2. Fasa zat wajib ditulis lengkap: padat $(s)$, cair murni $(l)$, gas $(g)$, dan larutan dalam air $(aq)$.
3. Jika arah reaksi dibalik, nilai numerik $\Delta H$ tetap sama tetapi tandanya berbalik ($+ \leftrightarrow -$).
4. Jika koefisien reaksi dikalikan faktor $n$, maka nilai $\Delta H$ juga harus dikalikan faktor $n$.

##### B. Kondisi Keadaan Standar
Simbol derajat superskrip ($^\circ$) menandakan bahwa perubahan entalpi diukur pada **keadaan standar termodinamika**:
- Suhu standar: $298.15\ \text{K}$ ($25\ ^\circ\text{C}$).
- Tekanan standar: $1\ \text{bar} \approx 1\ \text{atm}$.
- Konsentrasi larutan standar: $1\ \text{mol L}^{-1}$ ($1\ \text{M}$).
- Bentuk alotrop unsur paling stabil pada kondisi standar (misal karbon sebagai grafit, bukan intan; oksigen sebagai gas $\ce{O2}$, bukan $\ce{O3}$).

##### C. Empat Jenis Entalpi Molar Standar
1. **Entalpi Pembentukan Standar ($\Delta H^\circ_f$, *formation*):**  
   Perubahan entalpi pada pembentukan **$1\ \text{mol}$** senyawa dari unsur-unsur pembentuknya dalam wujud standar paling stabil.  
   *Konvensi IUPAC:* Nilai $\Delta H^\circ_f$ untuk setiap unsur bebas dalam bentuk standarnya ditetapkan bernilai **nol**:
   $$\Delta H^\circ_f [\ce{O2(g)}] = 0, \quad \Delta H^\circ_f [\ce{C(s, grafit)}] = 0, \quad \Delta H^\circ_f [\ce{N2(g)}] = 0$$
   *Makna Fisis Rumus:* Unsur bebas stabil merupakan titik nol acuan entalpi semesta, sehingga entalpi pembentukan senyawa mencerminkan stabilitas intrinsik senyawa terhadap unsur pembentuknya.

2. **Entalpi Penguraian Standar ($\Delta H^\circ_d$, *decomposition*):**  
   Perubahan entalpi pada penguraian **$1\ \text{mol}$** senyawa menjadi unsur-unsur penyusunnya pada keadaan standar:
   $$\Delta H^\circ_d = -\Delta H^\circ_f$$
   *Makna Fisis Rumus:* Penguraian adalah proses berkebalikan dari pembentukan, sehingga besaran energinya persis sama tetapi arah aliran energinya berlawanan tanda.

3. **Entalpi Pembakaran Standar ($\Delta H^\circ_c$, *combustion*):**  
   Perubahan entalpi yang menyertai pembakaran sempurna **$1\ \text{mol}$** suatu zat dengan gas oksigen berlebih pada keadaan standar. Selalu bernilai negatif (eksoterm).

4. **Entalpi Penetralan Standar ($\Delta H^\circ_n$, *neutralization*):**  
   Perubahan entalpi yang menyertai reaksi asam dan basa yang menghasilkan **$1\ \text{mol}$ air ($\ce{H2O}$)** dalam larutan encer pada keadaan standar:
   $$\ce{H+(aq) + OH-(aq) -> H2O(l)} \quad \Delta H^\circ_n \approx -57.3\ \text{kJ mol}^{-1}$$
   *Makna Fisis Rumus:* Reaksi penetralan asam kuat dan basa kuat selalu menghasilkan nilai kalor yang sama karena spesi yang bereaksi sesungguhnya selalu penggabungan ion hidrogen dan ion hidroksida membentuk molekul air.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Definisi $\Delta H^\circ_f, \Delta H^\circ_d, \Delta H^\circ_c$ mengikat koefisien zat target wajib sama dengan **$1$**.
> **Batas Keberlakuan:** Reaksi pembentukan $\ce{CO2(g)}$ dari $\ce{CO(g) + 1/2 O2(g) -> CO2(g)}$ **bukanlah** reaksi pembentukan standar ($\Delta H^\circ_f$) karena $\ce{CO(g)}$ adalah senyawa, bukan unsur bebas.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Diberikan persamaan termokimia: $2\ \ce{SO2(g)} + \ce{O2(g)} \rightarrow 2\ \ce{SO3(g)} \quad \Delta H = -198\ \text{kJ}$. Apakah nilai $-198\ \text{kJ}$ tersebut merupakan nilai $\Delta H^\circ_f$ dari gas $\ce{SO3}$?  
*Jawaban & Analisis:* **Bukan**. Ada dua alasan mendasar: pertama, pereaksinya memuat senyawa $\ce{SO2}$, bukan unsur bebas sulfur ($\ce{S}$); kedua, produk yang terbentuk adalah $2\ \text{mol}\ \ce{SO3}$, padahal entalpi molar standar mewajibkan pembentukan tepat $1\ \text{mol}$ senyawa.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Diketahui pada pembakaran $4.4\ \text{gram}$ gas propana ($\ce{C3H8}$, $M_r = 44\ \text{g mol}^{-1}$) dibebaskan kalor sebanyak $222\ \text{kJ}$. Tuliskan persamaan termokimia untuk pembakaran standar propana ($\Delta H^\circ_c$)!

**Strategi Langkah demi Langkah:**
1. *Hitung Mol Propana yang Terbakar:*  
   $$n = \frac{m}{M_r} = \frac{4.4\ \text{g}}{44\ \text{g mol}^{-1}} = 0.1\ \text{mol}$$
2. *Hitung Perubahan Entalpi untuk 1 Mol Propana:*  
   Karena kalor dibebaskan, maka prosesnya eksoterm ($\Delta H < 0$).
   $$\Delta H^\circ_c = \frac{q}{n} = \frac{-222\ \text{kJ}}{0.1\ \text{mol}} = -2220\ \text{kJ mol}^{-1}$$
3. *Susun Persamaan Termokimia Setara dengan Koefisien Propana = 1:*  
   $$\ce{C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(l)} \quad \Delta H^\circ_c = -2220\ \text{kJ mol}^{-1}$$

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Menuliskan persamaan pembakaran dengan koefisien dikalikan 2 agar tidak ada pecahan, tetapi lupa bahwa nilai $\Delta H$ yang dicantumkan harus ikut dikalikan 2.
> **Koreksi Konseptual:** Jika koefisien digandakan menjadi $2\ \ce{C3H8} + 10\ \ce{O2} \rightarrow 6\ \ce{CO2} + 8\ \ce{H2O}$, maka $\Delta H = -4440\ \text{kJ}$. Selalu jaga konsistensi antara angka koefisien zat dengan angka $\Delta H$.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Periksa fasa air hasil pembakaran standar pada $25\ ^\circ\text{C}$! Wujud air pada suhu kamar adalah cair ($\ce{H2O(l)}$). Jika Anda menulis $\ce{H2O(g)}$, nilainya menjadi kurang negatif sekitar $44\ \text{kJ mol}^{-1}$ per mol air karena kalor kondensasi belum diperhitungkan.  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 3 (Stoikiometri): Perbandingan koefisien reaksi sama dengan perbandingan mol dan sebanding langsung dengan rasio kalor yang terlibat.

##### 🎯 Latihan Terbimbing
1. Tuliskan persamaan termokimia untuk entalpi pembentukan standar etanol cair ($\ce{C2H5OH(l)}$) jika diketahui $\Delta H^\circ_f\ \ce{C2H5OH(l)} = -277.7\ \text{kJ mol}^{-1}$! *(Kunci Jawaban Akhir: 2 C(s, grafit) + 3 H2(g) + 1/2 O2(g) -> C2H5OH(l) \Delta H = -277.7 kJ mol^-1)*
2. Sebanyak $100\ \text{mL}$ larutan $\ce{HNO3}\ 0.2\ \text{M}$ dinetralkan sempurna oleh $100\ \text{mL}$ larutan $\ce{KOH}\ 0.2\ \text{M}$. Jika $\Delta H^\circ_n = -57.3\ \text{kJ mol}^{-1}$, hitunglah kalor yang dilepaskan pada reaksi penetralan tersebut! *(Kunci Jawaban Akhir: 1.146 kJ atau 1146 J)*`
    },

    // =========================================================================
    // SUBBAB 4.3
    // =========================================================================
    {
      id: 'sma4-3',
      title: '4.3 Penentuan ΔH Reaksi Melalui Kalorimetri Tekanan Tetap (q = mcΔT)',
      difficulty: 'Medium',
      estimatedMinutes: 50,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Pernahkah Anda bertanya bagaimana para ilmuwan mengetahui bahwa satu sendok gula membebaskan sejumlah kilojoule energi saat dicerna oleh tubuh? Karena kita tidak bisa memasang pengukur energi langsung di antara molekul, kita menggunakan media perantara: air.

Ketika suatu reaksi kimia berlangsung di dalam air, kalor yang dilepaskan oleh partikel-partikel pereaksi akan diserap oleh molekul air pelarut di sekitarnya. Akibatnya, molekul air bergerak lebih cepat dan menabrak sensor termometer lebih keras, menyebabkan kolom cairan termometer memuai ke atas. Dengan mengukur kenaikan suhu dan massa air, jumlah kalor yang dilepaskan sistem dapat dihitung dengan presisi.

Perhatikan rancangan instrumen kalorimeter cangkir stirofoam sederhana pada Gambar 4.3 berikut.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b04-kalorimeter-title sma-b04-kalorimeter-desc" data-diagram="sma-b04-kalorimeter" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b04-kalorimeter-title">KALORIMETER CANGKIR STIROFOAM SEDERHANA</title>
  <desc id="sma-b04-kalorimeter-desc">Diagram komponen kalorimeter tekanan tetap beserta aliran kalor reaksi ke larutan dan persamaan azas Black.</desc>
  
  <!-- Cangkir Luar & Dalam -->
  <rect x="50" y="80" width="280" height="290" rx="16" fill="#ececec" stroke="#8a939c" stroke-width="2" />
  <rect x="66" y="96" width="248" height="260" rx="12" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <text x="190" y="66" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">DUA LAPIS CANGKIR STIROFOAM</text>
  
  <!-- Larutan di Dalam Kalorimeter -->
  <path d="M 70 170 Q 190 165 310 170 L 310 346 Q 190 354 70 346 Z" fill="#d6f0fb" stroke="#2f7fc1" stroke-width="1.5" />
  <text x="190" y="246" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">CAMPURAN LARUTAN</text>
  <text x="190" y="268" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">MASSA M DAN KALOR JENIS C</text>

  <!-- Tutup Kalorimeter -->
  <rect x="40" y="84" width="300" height="18" rx="4" fill="#cfd4d9" stroke="#1f2937" stroke-width="2" />

  <!-- Termometer -->
  <rect x="116" y="36" width="12" height="230" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
  <rect x="118" y="200" width="8" height="60" rx="4" fill="#d64545" />
  <circle cx="122" cy="264" r="10" fill="#d64545" stroke="#1f2937" stroke-width="1.5" />
  <text x="122" y="32" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">TERMOMETER</text>

  <!-- Pengaduk -->
  <line x1="250" y1="36" x2="250" y2="300" stroke="#8a939c" stroke-width="4" stroke-linecap="round" />
  <path d="M 234 300 C 234 312 266 312 266 300" fill="none" stroke="#8a939c" stroke-width="4" />
  <text x="250" y="32" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PENGADUK</text>

  <!-- Panel Kanan: Prinsip Azas Black & Rumus -->
  <rect x="380" y="30" width="396" height="360" rx="12" fill="#ffffff" stroke="#2f7fc1" stroke-width="2" />
  <rect x="396" y="46" width="364" height="34" rx="6" fill="#8fd3ef" />
  <text x="578" y="68" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">HUKUM KEKEKALAN ENERGI KALOR</text>

  <rect x="396" y="96" width="364" height="64" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="578" y="122" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">Q_REAKSI + Q_LARUTAN + Q_WADAH = 0</text>
  <text x="578" y="144" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">Q_REAKSI = -(Q_LARUTAN + Q_WADAH)</text>

  <text x="412" y="186" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">RUMUS KALOR LARUTAN:</text>
  <rect x="412" y="198" width="332" height="40" rx="6" fill="#ececec" />
  <text x="578" y="224" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">Q_LARUTAN = M &times; C &times; &Delta;T</text>

  <text x="412" y="264" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">KONVERSI KE ENTALPI MOLAR REAKSI:</text>
  <rect x="412" y="276" width="332" height="44" rx="6" fill="#f5a3a3" />
  <text x="578" y="304" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">&Delta;H_REAKSI = Q_REAKSI / N_PEMBATAS</text>

  <text x="578" y="356" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">KAPASITAS BEJANA DIABAIKAN (CK &approx; 0)</text>
</svg>

*Gambar 4.3: Skema susunan kalorimeter cangkir stirofoam dan alur matematis perhitungan kalor reaksi.*

Bagaimanakah penurunan kuantitatif rumus dari kenaikan suhu termometer hingga diperoleh nilai $\Delta H$ dalam satuan $\text{kJ mol}^{-1}$?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Azas Black pada Kalorimeter
**Kalorimetri** adalah metode eksperimental untuk mengukur pertukaran kalor yang menyertai suatu reaksi kimia. Dalam kalorimeter terisolasi, berlaku hukum kekekalan energi (Azas Black):

$$q_{\text{reaksi}} + q_{\text{larutan}} + q_{\text{kalorimeter}} = 0$$

$$q_{\text{reaksi}} = -(q_{\text{larutan}} + q_{\text{kalorimeter}})$$

*Makna Fisis Rumus:* Kalor yang dilepaskan oleh sistem kimia diserap secara utuh oleh larutan air pelarut dan badan bejana kalorimeter tanpa ada kalor yang bocor ke udara luar.

##### B. Perhitungan Kalor Larutan dan Kapasitas Kalor
Kalor yang diserap atau dilepaskan oleh media larutan dihitung menggunakan persamaan:

$$q_{\text{larutan}} = m \cdot c \cdot \Delta T$$

*Makna Fisis Rumus:* Besaran kalor yang diserap sebanding lurus dengan massa total fluida pelarut, kapasitas kalor jenis bahannya, serta rentang perubahan suhunya.

- $m$ = massa total campuran larutan ($\text{g}$ atau $\text{kg}$)
- $c$ = kalor jenis larutan (umumnya diasumsikan mendekati kalor jenis air murni, $c \approx 4.18\ \text{J g}^{-1}\ ^\circ\text{C}^{-1}$)
- $\Delta T = T_{\text{akhir}} - T_{\text{awal}}$ = perubahan suhu larutan ($^\circ\text{C}$ atau $\text{K}$)

Jika kapasitas kalor bejana kalorimeter ($C_k$) diperhitungkan:
$$q_{\text{kalorimeter}} = C_k \cdot \Delta T$$
Pada kalorimeter cangkir plastik stirofoam sederhana, nilai kapasitas kalor bejana sangat kecil sehingga sering kali diasumsikan dapat diabaikan ($C_k \approx 0$).

##### C. Konversi Kalor ke Perubahan Entalpi Molar ($\Delta H$)
Perubahan entalpi molar reaksi diperoleh dengan membagi kalor reaksi terhadap mol pereaksi pembatas ($n$):

$$\Delta H = \frac{q_{\text{reaksi}}}{n_{\text{pembatas}}}$$

*Makna Fisis Rumus:* Nilai $\Delta H$ menyatakan kalor yang dilepaskan atau diserap jika reaksi berlangsung dalam skala $1\ \text{mol}$ stoikiometri.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Asumsi Kalorimetri Larutan:**
> 1. Massa jenis larutan encer dianggap sama dengan massa jenis air murni: $\rho = 1.0\ \text{g mL}^{-1}$ (sehingga volume $100\ \text{mL} \approx 100\ \text{g}$).
> 2. Kalor jenis larutan dianggap sama dengan kalor jenis air: $c = 4.18\ \text{J g}^{-1}\ ^\circ\text{C}^{-1}$.
> 3. Cangkir stirofoam merupakan isolator termal yang ideal sehingga tidak ada kalor yang diserap oleh wadah maupun terbuang ke udara ruangan.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Mengapa saat mereaksikan asam dan basa di dalam kalorimeter, larutan harus diaduk perlahan dan merata? Apa pengaruhnya terhadap nilai $\Delta H$ yang terhitung jika pengadukan tidak dilakukan?  
*Jawaban & Analisis:* Pengadukan memastikan partikel-partikel asam dan basa bertumbukan sempurna serta mendistribusikan energi kalor ke seluruh volume cairan secara homogen. Tanpa pengadukan, gradien suhu lokal akan terbentuk di sekitar dasar cangkir, sehingga termometer tidak membaca kenaikan suhu maksimum campuran ($T_{\text{akhir}}$ terbaca terlalu rendah), yang mengakibatkan nilai $\Delta H$ yang terhitung menjadi lebih kecil dari nilai sebenarnya.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Ke dalam kalorimeter stirofoam dimasukkan $50\ \text{mL}$ larutan $\ce{HCl}\ 1.0\ \text{M}$ bersuhu $25.0\ ^\circ\text{C}$, kemudian ditambahkan $50\ \text{mL}$ larutan $\ce{NaOH}\ 1.0\ \text{M}$ yang bersuhu sama. Campuran diaduk dan suhu maksimum larutan mencapai $31.5\ ^\circ\text{C}$.  
Jika massa jenis larutan $\rho = 1\ \text{g mL}^{-1}$, kalor jenis larutan $c = 4.2\ \text{J g}^{-1}\ ^\circ\text{C}^{-1}$, dan kapasitas kalor bejana diabaikan, hitunglah $\Delta H$ reaksi penetralan tersebut dalam $\text{kJ mol}^{-1}$!

**Strategi Langkah demi Langkah:**
1. *Tentukan Massa Total Larutan ($m$):*  
   $$V_{\text{total}} = 50\ \text{mL} + 50\ \text{mL} = 100\ \text{mL}$$  
   $$m = \rho \times V_{\text{total}} = 1\ \text{g mL}^{-1} \times 100\ \text{mL} = 100\ \text{g}$$
2. *Hitung Perubahan Suhu ($\Delta T$):*  
   $$\Delta T = T_{\text{akhir}} - T_{\text{awal}} = 31.5\ ^\circ\text{C} - 25.0\ ^\circ\text{C} = 6.5\ ^\circ\text{C}$$
3. *Hitung Kalor yang Diserap Larutan ($q_{\text{larutan}}$):*  
   $$q_{\text{larutan}} = m \cdot c \cdot \Delta T = 100\ \text{g} \times 4.2\ \text{J g}^{-1}\ ^\circ\text{C}^{-1} \times 6.5\ ^\circ\text{C} = 2730\ \text{J} = 2.73\ \text{kJ}$$
4. *Tentukan Kalor Reaksi ($q_{\text{reaksi}}$):*  
   $$q_{\text{reaksi}} = -q_{\text{larutan}} = -2.73\ \text{kJ}$$
5. *Hitung Mol Pereaksi yang Bereaksi:*  
   $$n_{\ce{HCl}} = 0.05\ \text{L} \times 1.0\ \text{mol L}^{-1} = 0.05\ \text{mol}$$  
   $$n_{\ce{NaOH}} = 0.05\ \text{L} \times 1.0\ \text{mol L}^{-1} = 0.05\ \text{mol}$$  
   Reaksi: $\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$. Mol air yang terbentuk = $0.05\ \text{mol}$.
6. *Hitung $\Delta H$ Penetralan Molar:*  
   $$\Delta H = \frac{q_{\text{reaksi}}}{n} = \frac{-2.73\ \text{kJ}}{0.05\ \text{mol}} = -54.6\ \text{kJ mol}^{-1}$$

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Menggunakan massa salah satu larutan saja (misal hanya $50\ \text{g}$) saat menghitung $q = mc\Delta T$, bukan massa gabungan total ($100\ \text{g}$).
> **Koreksi Konseptual:** Kalor dilepaskan ke dalam seluruh volume cairan yang ada di dalam kalorimeter setelah pencampuran terjadi. Massa $m$ wajib merupakan massa total seluruh isi bejana.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Suhu larutan naik dari $25.0$ ke $31.5\ ^\circ\text{C}$, sehingga $\Delta H$ **wajib bertanda negatif** (eksoterm). Jika hasil hitungan Anda positif padahal suhu naik, Anda lupa membalik tanda aljabar $q_{\text{reaksi}} = -q_{\text{larutan}}$.  
> **Koneksi Lintas Bab:** Reaksi penetralan asam kuat dan basa kuat di Subbab 4.2 memiliki acuan teoritis sekitar $-57.3\ \text{kJ mol}^{-1}$. Nilai hitung $-54.6\ \text{kJ mol}^{-1}$ sangat realistis di laboratorium sekolah karena adanya sedikit penyerapan kalor oleh dinding wadah dan kalorimeter yang tidak terisolasi 100% sempurna.

##### 🎯 Latihan Terbimbing
1. Ke dalam $100\ \text{g}$ air bersuhu $26\ ^\circ\text{C}$ dilarutkan $4\ \text{g}$ serbuk $\ce{NaOH}$ padat ($M_r = 40\ \text{g mol}^{-1}$). Suhu larutan naik menjadi $34\ ^\circ\text{C}$. Jika kalor jenis larutan $4.2\ \text{J g}^{-1}\ ^\circ\text{C}^{-1}$ dan massa serbuk diabaikan terhadap massa air, hitunglah perubahan entalpi pelarutan ($\Delta H_{\text{pelarutan}}$) $\ce{NaOH}$ dalam $\text{kJ mol}^{-1}$! *(Kunci Jawaban Akhir: -33.6 kJ mol^-1)*
2. Dalam kalorimeter cangkir, $100\ \text{mL}$ larutan $\ce{AgNO3}\ 0.1\ \text{M}$ direaksikan dengan $100\ \text{mL}$ larutan $\ce{NaCl}\ 0.1\ \text{M}$ menghasilkan endapan putih $\ce{AgCl}$. Jika kalor yang dibebaskan adalah $655.2\ \text{J}$, hitunglah kenaikan suhu larutan ($\Delta T$) yang teramati pada termometer ($c = 4.2\ \text{J g}^{-1}\ ^\circ\text{C}^{-1}, \rho = 1\ \text{g mL}^{-1}$)! *(Kunci Jawaban Akhir: 0.78 °C atau 0.78 K)*`
    },

    // =========================================================================
    // SUBBAB 4.4
    // =========================================================================
    {
      id: 'sma4-4',
      title: '4.4 Penentuan ΔH Reaksi Berdasarkan Hukum Hess (Siklus, Diagram Tingkat Energi, dan Data ΔH°f)',
      difficulty: 'Hard',
      estimatedMinutes: 50,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Bayangkan Anda mendaki sebuah gunung dari pos dasar di ketinggian $500\ \text{m}$ menuju puncak di ketinggian $2500\ \text{m}$. Anda dapat memilih jalan setapak yang lurus terjal atau jalur memutar yang landai dan panjang. Berapakah selisih ketinggian vertikal yang Anda capai pada kedua jalur tersebut?

Jawabannya pasti sama persis: $2000\ \text{m}$. Selisih ketinggian akhir terhadap awal tidak bergantung pada jalur berliku yang Anda tempuh. Prinsip yang sama berlaku pada energi kimia di tingkat molekuler.

Germain Henri Hess pada tahun 1840 menemukan bahwa entalpi adalah fungsi keadaan (*state function*). Molekul pereaksi menyimpan energi tertentu, dan molekul produk menyimpan energi tertentu. Berapa pun banyaknya tahapan reaksi perantara yang dilalui, perubahan entalpi totalnya selalu sama.

Pelajari representasi siklus segitiga Hess dan penjumlahan bertahap pada Gambar 4.4 berikut.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b04-hukum-hess-title sma-b04-hukum-hess-desc" data-diagram="sma-b04-hukum-hess" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b04-hukum-hess-title">SIKLUS HUKUM HESS DAN PENJUMLAHAN ENTALPI TAHAPAN REAKSI</title>
  <desc id="sma-b04-hukum-hess-desc">Diagram siklus segitiga Hess yang memperlihatkan lintasan langsung versus lintasan bertahap serta rumus penjumlahan entalpi pembentukan standar.</desc>
  
  <!-- Panel Kiri: Siklus Segitiga Hess -->
  <rect x="24" y="24" width="364" height="392" rx="12" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="40" y="40" width="332" height="32" rx="6" fill="#8fd3ef" stroke="#2f7fc1" stroke-width="1.5" />
  <text x="206" y="62" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">SIKLUS SEGITIGA HESS</text>

  <!-- Node A: Reaktan Awal -->
  <rect x="36" y="100" width="130" height="54" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="2" />
  <text x="101" y="124" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">C(s) + O2(g)</text>
  <text x="101" y="142" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">KEADAAN AWAL</text>

  <!-- Node B: Produk Akhir -->
  <rect x="242" y="100" width="130" height="54" rx="8" fill="#b5efb0" stroke="#1f2937" stroke-width="2" />
  <text x="307" y="124" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">CO2(g)</text>
  <text x="307" y="142" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">KEADAAN AKHIR</text>

  <!-- Panah Jalur Langsung delta H1 -->
  <line x1="166" y1="127" x2="234" y2="127" stroke="#d64545" stroke-width="2.5" />
  <polygon points="240,127 230,121 230,133" fill="#d64545" />
  <text x="204" y="84" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">&Delta;H1 LANGSUNG</text>

  <!-- Node C: Zat Antara -->
  <rect x="139" y="260" width="130" height="54" rx="8" fill="#ececec" stroke="#1f2937" stroke-width="2" />
  <text x="204" y="284" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">CO(g) + 1/2 O2</text>
  <text x="204" y="302" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">ZAT ANTARA</text>

  <!-- Panah Jalur Bertahap: delta H2 dan delta H3 -->
  <line x1="101" y1="154" x2="155" y2="254" stroke="#2f7fc1" stroke-width="2.5" />
  <polygon points="158,258 147,253 154,245" fill="#2f7fc1" />
  <text x="106" y="216" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">&Delta;H2</text>

  <line x1="253" y1="254" x2="307" y2="154" stroke="#2f7fc1" stroke-width="2.5" />
  <polygon points="309,150 308,161 300,153" fill="#2f7fc1" />
  <text x="306" y="216" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">&Delta;H3</text>

  <!-- Hubungan Siklus Hess -->
  <rect x="36" y="344" width="336" height="42" rx="6" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="204" y="370" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">&Delta;H1 = &Delta;H2 + &Delta;H3</text>

  <!-- Panel Kanan: Aturan Penjumlahan & Rumus delta Hf -->
  <rect x="412" y="24" width="364" height="392" rx="12" fill="#ffffff" stroke="#8a939c" stroke-width="1.5" />
  <rect x="428" y="40" width="332" height="32" rx="6" fill="#f5a3a3" stroke="#d64545" stroke-width="1.5" />
  <text x="594" y="62" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">METODE HITUNG HUKUM HESS</text>

  <text x="428" y="96" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">1. OPERASI PERSAMAAN TAHAPAN:</text>
  <rect x="428" y="106" width="332" height="64" rx="6" fill="#ececec" />
  <text x="440" y="126" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DIBALIK &rarr; TANDA BERBALIK (+/-)</text>
  <text x="440" y="144" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DIKALI N &rarr; &Delta;H DIKALI N</text>
  <text x="440" y="162" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">DIJUMLAH &rarr; &Delta;H DIJUMLAHKAN</text>

  <text x="428" y="194" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8">2. RUMUS DATA ENTALPI PEMBENTUKAN:</text>
  <rect x="428" y="206" width="332" height="74" rx="8" fill="#b5efb0" stroke="#3f8f46" stroke-width="1.5" />
  <text x="594" y="234" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">&Delta;H = &Sigma; N &Delta;HF (PRODUK)</text>
  <text x="594" y="258" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">- &Sigma; M &Delta;HF (REAKTAN)</text>

  <rect x="428" y="296" width="332" height="84" rx="6" fill="#fde58a" />
  <text x="594" y="322" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">JEMBATAN KELEDAI:</text>
  <text x="594" y="344" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">&Delta;H = KANAN - KIRI</text>
  <text x="594" y="366" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8" text-anchor="middle">UNSUR BEBAS STANDAR &Delta;H&deg;F = 0</text>
</svg>

*Gambar 4.4: Visualisasi siklus segitiga Hukum Hess dan formulasi perhitungan berbasis data entalpi pembentukan standar.*

Bagaimana langkah teknis menggunakan kedua cara ini untuk memecahkan reaksi yang sukar diukur langsung di laboratorium?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Pernyataan Hukum Hess
**Hukum Hess** menyatakan bahwa perubahan entalpi suatu reaksi kimia hanya bergantung pada keadaan awal (reaktan) dan keadaan akhir (produk), serta tidak bergantung pada jalannya reaksi maupun jumlah tahapan yang dilalui:

$$\Delta H_{\text{total}} = \Delta H_1 + \Delta H_2 + \Delta H_3 + \dots = \sum \Delta H_{\text{tahapan}}$$

*Makna Fisis Rumus:* Karena entalpi adalah fungsi keadaan termodinamika, energi yang dibebaskan atau diserap saat mengubah reaktan tertentu menjadi produk tertentu bersifat kekal dan tunggal, terlepas dari apakah zat antara terbentuk di sepanjang jalan.

##### B. Manipulasi Aljabar Persamaan Termokimia
Ketika menentukan $\Delta H$ reaksi target dari beberapa reaksi yang diketahui:
1. Posisikan zat-zat target pada sisi yang bersesuaian (kiri untuk reaktan, kanan untuk produk).
2. Jika suatu persamaan reaksi **dibalik**, tanda nilai $\Delta H$ wajib **dibalik** ($+ \rightarrow -$, atau sebaliknya).
3. Jika koefisien reaksi **dikalikan dengan faktor $n$**, maka nilai $\Delta H$ reaksi tersebut wajib **dikalikan dengan $n$**.
4. Jika koefisien reaksi **dibagi dengan faktor $m$**, maka nilai $\Delta H$ reaksi tersebut wajib **dibagi dengan $m$**.
5. Jumlahkan persamaan-persamaan termokimia tersebut; spesi yang muncul dengan jumlah mol sama di kedua sisi berlawanan dapat saling dieliminasi (*cancel out*). Nilai $\Delta H$ reaksi akhir adalah penjumlahan aljabar nilai $\Delta H$ seluruh tahapan.

##### C. Penentuan $\Delta H$ Berdasarkan Data $\Delta H^\circ_f$
Jika data entalpi pembentukan standar seluruh senyawa diketahui, $\Delta H$ reaksi dapat dihitung secara langsung tanpa menyusun tahapan reaksi satu per satu:

$$\Delta H_{\text{reaksi}} = \sum n \cdot \Delta H^\circ_f (\text{produk}) - \sum m \cdot \Delta H^\circ_f (\text{reaktan})$$

*Makna Fisis Rumus:* Kalor reaksi netto adalah selisih antara energi yang tersimpan dalam pembentukan produk dari unsur-unsurnya dengan energi pembentukan reaktan dari unsur yang sama.

- $n$ dan $m$ adalah koefisien stoikiometri masing-masing zat pada persamaan reaksi yang telah setara.
- $\Delta H^\circ_f$ untuk seluruh unsur bebas dalam wujud standarnya ($\ce{O2(g)}, \ce{N2(g)}, \ce{H2(g)}, \ce{C(s, grafit)}, \ce{Fe(s)}$, dll.) bernilai nol ($0\ \text{kJ mol}^{-1}$).

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Rumus $\sum \Delta H^\circ_f (\text{produk}) - \sum \Delta H^\circ_f (\text{reaktan})$ hanya dapat digunakan jika nilai yang tersedia adalah entalpi **pembentukan** standar.
> **Batas Keberlakuan:** Jika data yang tersedia adalah entalpi **pembakaran** standar ($\Delta H^\circ_c$), arah pengurangan berbalik: $\Delta H_{\text{reaksi}} = \sum \Delta H^\circ_c (\text{reaktan}) - \sum \Delta H^\circ_c (\text{produk})$.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Reaksi pembentukan gas karbon monoksida dari grafit dan oksigen ($\ce{C(s) + 1/2 O2(g) -> CO(g)}$) sangat sukar diukur kalor reaksinya secara langsung di dalam kalorimeter. Mengapa demikian, dan bagaimana Hukum Hess menyelesaikan kendala ini?  
*Jawaban & Analisis:* Pembakaran karbon di udara selalu menghasilkan campuran gas $\ce{CO}$ dan gas $\ce{CO2}$ secara serentak; kita tidak dapat menghentikan reaksi tepat hanya menghasilkan $\ce{CO}$ murni. Hukum Hess menyelesaikan kendala ini dengan mengukur reaksi yang mudah berlangsung tuntas: pembakaran $\ce{C}$ menjadi $\ce{CO2}$ ($\Delta H_1$) dan pembakaran $\ce{CO}$ menjadi $\ce{CO2}$ ($\Delta H_2$). Nilai $\Delta H$ pembentukan $\ce{CO}$ diperoleh dari selisih: $\Delta H = \Delta H_1 - \Delta H_2$.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Diketahui data entalpi pembentukan standar:
- $\Delta H^\circ_f\ \ce{C2H5OH(l)} = -278\ \text{kJ mol}^{-1}$
- $\Delta H^\circ_f\ \ce{CO2(g)} = -394\ \text{kJ mol}^{-1}$
- $\Delta H^\circ_f\ \ce{H2O(l)} = -286\ \text{kJ mol}^{-1}$

Hitunglah perubahan entalpi pembakaran standar etanol ($\ce{C2H5OH}$) menurut reaksi:
$$\ce{C2H5OH(l) + 3 O2(g) -> 2 CO2(g) + 3 H2O(l)}$$

**Strategi Langkah demi Langkah:**
1. *Periksa Penyetaraan Reaksi:*  
   - Atom $\ce{C}$: $2$ di kiri, $2$ di kanan (setara).  
   - Atom $\ce{H}$: $6$ di kiri, $3 \times 2 = 6$ di kanan (setara).  
   - Atom $\ce{O}$: $1 + 6 = 7$ di kiri, $4 + 3 = 7$ di kanan (setara).
2. *Tuliskan Rumus Hess Berbasis $\Delta H^\circ_f$:*  
   $$\Delta H_{\text{reaksi}} = [2 \cdot \Delta H^\circ_f(\ce{CO2}) + 3 \cdot \Delta H^\circ_f(\ce{H2O})] - [\Delta H^\circ_f(\ce{C2H5OH}) + 3 \cdot \Delta H^\circ_f(\ce{O2})]$$
3. *Masukkan Data Angka (Ingat $\Delta H^\circ_f\ \ce{O2} = 0$):*  
   $$\text{Total Produk} = [2(-394) + 3(-286)] = [-788 - 858] = -1646\ \text{kJ}$$  
   $$\text{Total Reaktan} = [-278 + 3(0)] = -278\ \text{kJ}$$
4. *Lakukan Pengurangan (Kanan dikurang Kiri):*  
   $$\Delta H^\circ_c = (-1646) - (-278) = -1646 + 278 = -1368\ \text{kJ mol}^{-1}$$

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Lupa mengalikan nilai $\Delta H^\circ_f$ dengan koefisien stoikiometrinya (misalnya hanya menjumlahkan $-394 + -286$, lupa dikali 2 dan 3), atau salah dalam operasi tanda minus ganda: $- (-278)$ menjadi tetap negatif.
> **Koreksi Konseptual:** Kurung siku perhitungan produk dan reaktan secara terpisah sebelum melakukan pengurangan akhir. Pastikan tanda negatif bertemu negatif berubah menjadi penjumlahan positif.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Ini adalah reaksi pembakaran bahan bakar organik ($\ce{C2H5OH}$). Pembakaran selalu membebaskan energi dalam jumlah besar, sehingga hasil akhir wajib bertanda negatif ($\Delta H^\circ_c < 0$) dan bernilai ribuan $\text{kJ}$.  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 11 (Hidrokarbon & Minyak Bumi): Nilai entalpi pembakaran etanol ini menjelaskan mengapa alkohol dapat digunakan sebagai campuran bioetanol ramah lingkungan untuk meningkatkan nilai oktan bahan bakar kendaraan.

##### 🎯 Latihan Terbimbing
1. Diketahui tahapan reaksi berikut:  
   (1) $\ce{S(s) + O2(g) -> SO2(g)} \quad \Delta H = -297\ \text{kJ}$  
   (2) $2\ \ce{SO2(g)} + \ce{O2(g)} \rightarrow 2\ \ce{SO3(g)} \quad \Delta H = -198\ \text{kJ}$  
   Hitunglah $\Delta H$ untuk reaksi pembentukan gas belerang trioksida: $\ce{S(s) + 3/2 O2(g) -> SO3(g)}$! *(Kunci Jawaban Akhir: -396 kJ mol^-1)*
2. Diketahui $\Delta H^\circ_f\ \ce{CH4(g)} = -75\ \text{kJ mol}^{-1}$, $\Delta H^\circ_f\ \ce{CO2(g)} = -393.5\ \text{kJ mol}^{-1}$, dan $\Delta H^\circ_f\ \ce{H2O(g)} = -242\ \text{kJ mol}^{-1}$. Tentukan perubahan entalpi pada pembakaran $32\ \text{gram}$ gas metana ($M_r = 16\ \text{g mol}^{-1}$) menghasilkan gas $\ce{CO2}$ dan uap air $\ce{H2O(g)}$! *(Kunci Jawaban Akhir: -1605 kJ)*`
    },

    // =========================================================================
    // SUBBAB 4.5
    // =========================================================================
    {
      id: 'sma4-5',
      title: '4.5 Energi Ikatan Rata-Rata dan Efisiensi Kalor Pembakaran Bahan Bakar',
      difficulty: 'Medium',
      estimatedMinutes: 50,
      content: `#### 1. Intuisi: Dari Fenomena ke Tingkat Partikel

Pada tingkat paling mendasar, apa yang sebenarnya terjadi saat sebatang korek api dinyalakan? Kayu dan fosfor tidak meledak dengan sendirinya di dalam kotak. Anda harus menggesekkannya terlebih dahulu ke bidang kasar. Mengapa reaksi pelepasan energi selalu memerlukan "pemicu" awal?

Di tingkat submikroskopik, setiap reaksi kimia adalah tarian dua babak: pembongkaran dan perakitan. Sebelum atom-atom dapat membentuk susunan molekul baru yang lebih stabil, ikatan kimia lama yang mengikat atom-atom pereaksi harus diputuskan terlebih dahulu. Pemutusan ikatan ini memerlukan pasokan energi dari luar (endoterm). Baru setelah atom-atom menjadi bebas, ikatan kimia baru terbentuk sambil memancarkan energi ke lingkungan (eksoterm).

Amati dinamika pemutusan versus pembentukan ikatan kovalen pada Gambar 4.5 berikut.

<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sma-b04-energi-ikatan-title sma-b04-energi-ikatan-desc" data-diagram="sma-b04-energi-ikatan" class="w-full h-auto my-6 rounded-xl border border-slate-200 bg-white" style="min-width:560px">
  <title id="sma-b04-energi-ikatan-title">MEKANISME PEMUTUSAN DAN PEMBENTUKAN IKATAN SERTA RUMUS ENERGI IKATAN</title>
  <desc id="sma-b04-energi-ikatan-desc">Ilustrasi dua tahap reaksi kimia: pemutusan ikatan reaktan membutuhkan energi versus pembentukan ikatan produk melepaskan energi.</desc>
  
  <!-- Tahap 1: Pemutusan Ikatan (Kiri) -->
  <rect x="24" y="24" width="364" height="230" rx="10" fill="#ffffff" stroke="#2f7fc1" stroke-width="2" />
  <rect x="36" y="36" width="340" height="30" rx="6" fill="#8fd3ef" />
  <text x="206" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PEMUTUSAN IKATAN (REAKTAN)</text>
  
  <!-- Gambar Molekul Terikat -->
  <circle cx="100" cy="116" r="20" fill="#8fd3ef" stroke="#1f2937" stroke-width="2" />
  <circle cx="136" cy="116" r="20" fill="#8fd3ef" stroke="#1f2937" stroke-width="2" />
  <text x="118" y="156" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">MOLEKUL TERIKAT</text>

  <!-- Panah Membutuhkan Kalor -->
  <line x1="180" y1="116" x2="236" y2="116" stroke="#2f7fc1" stroke-width="2.5" />
  <polygon points="242,116 232,110 232,122" fill="#2f7fc1" />
  <text x="208" y="104" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">+ ENERGI</text>

  <!-- Atom-atom Terpisah -->
  <circle cx="280" cy="100" r="16" fill="#cfd4d9" stroke="#1f2937" stroke-width="2" />
  <circle cx="320" cy="132" r="16" fill="#cfd4d9" stroke="#1f2937" stroke-width="2" />
  <text x="300" y="168" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">ATOM BEBAS</text>

  <rect x="36" y="186" width="340" height="52" rx="6" fill="#ececec" />
  <text x="206" y="208" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">MEMBUTUHKAN ENERGI (&Delta;H &gt; 0)</text>
  <text x="206" y="226" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8" text-anchor="middle">&Sigma; ENERGI IKATAN PUTUS (KIRI)</text>

  <!-- Tahap 2: Pembentukan Ikatan (Kanan) -->
  <rect x="412" y="24" width="364" height="230" rx="10" fill="#ffffff" stroke="#d64545" stroke-width="2" />
  <rect x="424" y="36" width="340" height="30" rx="6" fill="#f5a3a3" />
  <text x="594" y="56" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">PEMBENTUKAN IKATAN (PRODUK)</text>

  <!-- Atom Bebas Berkumpul -->
  <circle cx="470" cy="100" r="16" fill="#cfd4d9" stroke="#1f2937" stroke-width="2" />
  <circle cx="510" cy="132" r="16" fill="#fde58a" stroke="#1f2937" stroke-width="2" />

  <!-- Panah Melepas Kalor -->
  <line x1="544" y1="116" x2="600" y2="116" stroke="#d64545" stroke-width="2.5" />
  <polygon points="606,116 596,110 596,122" fill="#d64545" />
  <text x="572" y="104" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">- ENERGI</text>

  <!-- Molekul Baru Stabil -->
  <circle cx="660" cy="116" r="20" fill="#b5efb0" stroke="#1f2937" stroke-width="2" />
  <circle cx="696" cy="116" r="20" fill="#b5efb0" stroke="#1f2937" stroke-width="2" />
  <text x="678" y="156" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">MOLEKUL STABIL</text>

  <rect x="424" y="186" width="340" height="52" rx="6" fill="#ececec" />
  <text x="594" y="208" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">MEMBEBASKAN ENERGI (&Delta;H &lt; 0)</text>
  <text x="594" y="226" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8" text-anchor="middle">&Sigma; ENERGI IKATAN TERBENTUK (KANAN)</text>

  <!-- Panel Bawah: Rumus & Efisiensi Bahan Bakar -->
  <rect x="24" y="270" width="752" height="144" rx="10" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
  <rect x="36" y="282" width="728" height="42" rx="8" fill="#fde58a" stroke="#1f2937" stroke-width="1.5" />
  <text x="400" y="308" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="#1f2937" letter-spacing="0.8" text-anchor="middle">&Delta;H = &Sigma; D(PUTUS / KIRI) - &Sigma; D(TERBENTUK / KANAN)</text>

  <text x="44" y="352" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#d64545" letter-spacing="0.8">RUMUS ENERGI IKATAN = KIRI - KANAN (BERLAWANAN DENGAN HUKUM HESS)</text>
  <text x="44" y="374" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#2f7fc1" letter-spacing="0.8">EFISIENSI BAHAN BAKAR: NILAI KALOR (KJ/G) = |&Delta;HC| / MR</text>
  <text x="44" y="394" font-family="'Comic Neue', ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" fill="#4b5563" letter-spacing="0.8">PERHITUNGAN ENERGI IKATAN KHUSUS BERLAKU UNTUK FASA GAS</text>
</svg>

*Gambar 4.5: Visualisasi konsep pemutusan ikatan (kiri) versus pembentukan ikatan (kanan) dan formula energi ikatan rata-rata.*

Bagaimanakah cara menghitung $\Delta H$ reaksi gas berdasarkan kekuatan ikatan kovalen ini?

---

#### 2. Formalisasi: Konsep Kunci & Hukum Dasar

##### A. Konsep Energi Ikatan Rata-Rata ($D$)
**Energi ikatan rata-rata ($D$)** adalah energi rata-rata yang diperlukan untuk memutuskan **$1\ \text{mol}$** ikatan kovalen tertentu dalam molekul-molekul berwujud gas menjadi atom-atom netral bebas berwujud gas pada keadaan standar:

$$\ce{A-B(g) -> A(g) + B(g)} \quad \Delta H = D_{\ce{A-B}} > 0$$

- Nilai energi ikatan selalu bernilai **positif** karena pemutusan ikatan membutuhkan asupan energi.
- Semakin besar nilai energi ikatan, semakin kuat dan semakin stabil ikatan kovalen tersebut.
- Ikatan rangkap dua ($\ce{C=C}$) lebih kuat daripada ikatan tunggal ($\ce{C-C}$), dan ikatan rangkap tiga ($\ce{C#C}$) adalah yang paling kuat:
  $$D_{\ce{C#C}} > D_{\ce{C=C}} > D_{\ce{C-C}}$$

##### B. Perhitungan $\Delta H$ Reaksi dari Energi Ikatan
Perubahan entalpi reaksi gas dapat diestimasi dengan rumus selisih total energi ikatan yang terputus dikurangi total energi ikatan yang terbentuk:

$$\Delta H = \sum D_{\text{pereaksi (putus / kiri)}} - \sum D_{\text{produk (terbentuk / kanan)}}$$

*Makna Fisis Rumus:* Jika energi yang dibutuhkan untuk memutuskan ikatan pereaksi lebih kecil daripada energi yang dibebaskan saat ikatan produk terbentuk, reaksi neto akan membebaskan kalor ($\Delta H < 0$, eksoterm).

##### C. Nilai Kalor dan Efisiensi Bahan Bakar
Dalam aplikasi industri dan energi, efisiensi bahan bakar diukur berdasarkan **nilai kalor bahan bakar** (kalor yang dihasilkan per satuan gram bahan bakar):

$$\text{Nilai Kalor}\ (\text{kJ g}^{-1}) = \frac{|\Delta H_c|}{M_r}$$

*Makna Fisis Rumus:* Rasio ini membandingkan besarnya energi kimia yang dilepaskan terhadap bobot materi yang harus dibawa oleh tangki kendaraan.

- Gas hidrogen ($\ce{H2}$) memiliki nilai kalor per gram tertinggi ($\approx 142\ \text{kJ g}^{-1}$), menjadikannya bahan bakar roket yang sangat efisien dan bersih karena produk pembakarannya hanya berupa air ($\ce{H2O}$).
- Gas metana ($\ce{CH4}$) dan gas propana ($\ce{C3H8}$) memiliki nilai kalor sekitar $50\text{--}55\ \text{kJ g}^{-1}$.
- Pembakaran tidak sempurna bahan bakar karbon (akibat defisit gas oksigen) menghasilkan jelaga karbon ($\ce{C}$) dan gas karbon monoksida ($\ce{CO}$) yang beracun serta menghasilkan energi yang jauh lebih rendah daripada pembakaran sempurna.

> [!SYARAT_BATAS]
> ### ⚖️ Syarat Batas & Asumsi
> **Kondisi Berlaku:** Perhitungan berbasis data energi ikatan rata-rata **hanya berlaku presisi untuk zat-zat yang seluruhnya berwujud gas $(g)$**.
> **Batas Keberlakuan:** Jika dalam persamaan reaksi terdapat zat berwujud cair $(l)$ atau padat $(s)$ (misal $\ce{H2O(l)}$), maka entalpi perubahan fasa (seperti kalor kondensasi atau sublimasi) harus diperhitungkan terpisah. Selain itu, nilai energi ikatan bersifat "rata-rata" dari berbagai senyawa organik, sehingga hasil hitungannya adalah estimasi teoretis, bukan hasil eksperimen eksak.

##### 🧪 Uji Konsep Kualitatif
**Pertanyaan:** Jelaskan mengapa ikatan rangkap tiga pada molekul gas nitrogen ($\ce{N#N}$, $D \approx 945\ \text{kJ mol}^{-1}$) menyebabkan gas $\ce{N2}$ sangat inert (sukar bereaksi) di udara pada suhu kamar, padahal pembentukan senyawa nitrogen lainnya melepaskan energi!  
*Jawaban & Analisis:* Nilai energi ikatan $\ce{N#N}$ sebesar $945\ \text{kJ mol}^{-1}$ menunjukkan kekuatan ikatan kovalen yang luar biasa kokoh. Untuk memulai suatu reaksi, molekul $\ce{N2}$ harus diputuskan terlebih dahulu menjadi atom nitrogen bebas, yang membutuhkan energi aktivasi sangat tinggi. Tanpa suhu tinggi (seperti loncatan petir) atau katalis biologis enzim nitrogenase, molekul $\ce{N2}$ tidak memiliki energi yang cukup untuk memutuskan ikatan tersebut pada suhu kamar.

---

#### 3. Taktik Soal: Penerapan & Pemeriksaan Logika

##### 📝 Soal Contoh
**Soal:** Diketahui data energi ikatan rata-rata:
- $\ce{C-H} = 413\ \text{kJ mol}^{-1}$
- $\ce{C=C} = 614\ \text{kJ mol}^{-1}$
- $\ce{C-C} = 348\ \text{kJ mol}^{-1}$
- $\ce{H-Cl} = 431\ \text{kJ mol}^{-1}$
- $\ce{C-Cl} = 328\ \text{kJ mol}^{-1}$

Hitunglah perubahan entalpi pada reaksi adisi gas etena dengan asam klorida:
$$\ce{CH2=CH2(g) + HCl(g) -> CH3-CH2Cl(g)}$$

**Strategi Langkah demi Langkah:**
1. *Gambar Struktur Lewis Lengkap Seluruh Molekul:*  
   - Kiri (Reaktan):  
     - Etena ($\ce{CH2=CH2}$): memiliki $1$ ikatan $\ce{C=C}$ dan $4$ ikatan $\ce{C-H}$.  
     - Asam klorida ($\ce{HCl}$): memiliki $1$ ikatan $\ce{H-Cl}$.  
   - Kanan (Produk):  
     - Kloroetana ($\ce{CH3-CH2Cl}$): memiliki $1$ ikatan $\ce{C-C}$, $5$ ikatan $\ce{C-H}$, dan $1$ ikatan $\ce{C-Cl}$.
2. *Eliminasi Ikatan yang Sama di Kedua Sisi:*  
   - Ada $4$ ikatan $\ce{C-H}$ di kiri dan $5$ ikatan $\ce{C-H}$ di kanan. Dapat dieliminasi bersih menyisakan $1$ ikatan $\ce{C-H}$ baru di kanan.
3. *Hitung Total Energi Pemutusan Ikatan (Kiri):*  
   $$\text{Putus} = D_{\ce{C=C}} + D_{\ce{H-Cl}} = 614 + 431 = 1045\ \text{kJ}$$
4. *Hitung Total Energi Pembentukan Ikatan (Kanan):*  
   $$\text{Terbentuk} = D_{\ce{C-C}} + D_{\ce{C-H}} + D_{\ce{C-Cl}} = 348 + 413 + 328 = 1089\ \text{kJ}$$
5. *Gunakan Rumus Energi Ikatan (Kiri dikurang Kanan):*  
   $$\Delta H = \sum D_{\text{putus}} - \sum D_{\text{terbentuk}} = 1045 - 1089 = -44\ \text{kJ mol}^{-1}$$

> [!TITIK_RAWAN]
> ### ⚠️ Titik Rawan Miskonsepsi
> **Kesalahan Fatal:** Menggunakan rumus Hukum Hess ($\text{Produk} - \text{Reaktan}$) saat menghitung soal energi ikatan.
> **Koreksi Konseptual:** Ingat perbedaan mendasar rumusnya:
> - Jika data berupa $\Delta H^\circ_f \rightarrow \Delta H = \text{Kanan (Produk)} - \text{Kiri (Reaktan)}$.
> - Jika data berupa **Energi Ikatan** $\rightarrow \Delta H = \text{Kiri (Putus)} - \text{Kanan (Terbentuk)}$.

> [!PEMERIKSAAN_LOGIKA]
> ### 🔍 Pemeriksaan Logika (Sanity Check)
> **Uji 10 Detik:** Perhatikan apa yang terjadi pada reaksi adisi di atas: $1$ ikatan rangkap dua ($\pi$ lemah) dan $1$ ikatan $\ce{H-Cl}$ diubah menjadi $2$ ikatan tunggal ($\sigma$ kuat). Pembentukan ikatan tunggal yang lebih stabil selalu membebaskan energi ekstra, sehingga hasil reaksi adisi umumnya bersifat eksoterm ($\Delta H < 0$). Nilai $-44\ \text{kJ mol}^{-1}$ sangat konsisten secara kimiawi.  
> **Koneksi Lintas Bab:** Hubungkan dengan Bab 11 (Hidrokarbon): Reaksi ini adalah reaksi adisi elektrofilik alkena yang mengubah hidrokarbon tak jenuh menjadi alkil halida jenuh.

##### 🎯 Latihan Terbimbing
1. Diketahui energi ikatan rata-rata: $\ce{H-H} = 436\ \text{kJ mol}^{-1}$, $\ce{Cl-Cl} = 242\ \text{kJ mol}^{-1}$, dan $\ce{H-Cl} = 431\ \text{kJ mol}^{-1}$. Hitunglah entalpi pembentukan standar gas $\ce{HCl}$ menurut reaksi: $1/2\ \ce{H2(g)} + 1/2\ \ce{Cl2(g)} \rightarrow \ce{HCl(g)}$! *(Kunci Jawaban Akhir: -92 kJ mol^-1)*
2. Diketahui pembakaran gas metana: $\ce{CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(g)} \quad \Delta H = -808\ \text{kJ}$. Jika energi ikatan $\ce{C-H} = 413\ \text{kJ mol}^{-1}$, $\ce{O=O} = 495\ \text{kJ mol}^{-1}$, dan $\ce{O-H} = 463\ \text{kJ mol}^{-1}$, hitunglah energi ikatan rata-rata $\ce{C=O}$ dalam molekul $\ce{CO2}$! *(Kunci Jawaban Akhir: 799 kJ mol^-1)*`
    },

    // =========================================================================
    // MACRO-LOOP PENUTUP BAB 4
    // =========================================================================
    {
      id: 'sma4-penutup',
      title: 'Penutup Bab 4: Pengayaan Inkuiri, Rangkuman Cepat, & Evaluasi Mandiri',
      difficulty: 'Hard',
      estimatedMinutes: 60,
      content: `### 🚀 Pengayaan Inkuiri & Kontekstual

#### Termokimia dalam Transisi Energi: Dilema Hidrogen vs Bahan Bakar Fosil
Pernahkah Anda memikirkan mengapa dunia saat ini berlomba-lomba mengembangkan kendaraan berbahan bakar hidrogen (*hydrogen fuel cell*)? Jawabannya terletak pada neraca termokimia pembakaran.

Mari kita bandingkan massa $1\ \text{kg}$ gas hidrogen ($\ce{H2}$) dengan $1\ \text{kg}$ bensin (oktana, $\ce{C8H18}$). Pembakaran $1\ \text{gram}\ \ce{H2}$ membebaskan energi kalor sekitar $142\ \text{kJ}$, sedangkan pembakaran $1\ \text{gram}$ bensin hanya menghasilkan sekitar $48\ \text{kJ}$. Dari sudut pandang massa muatan, hidrogen hampir tiga kali lebih efisien daripada bensin! Lebih dari itu, produk samping reaksi hidrogen adalah uap air murni ($\ce{H2O}$), bebas dari emisi gas rumah kaca $\ce{CO2}$.

Namun, tantangan rekayasa terbesarnya juga merupakan masalah termokimia: hidrogen bebas tidak tersedia melimpah di alam seperti minyak bumi. Untuk memproduksi gas $\ce{H2}$ dari air via elektrolisis, kita harus memasok energi minimal sebesar $\Delta H^\circ_f\ \ce{H2O}$ ($+286\ \text{kJ mol}^{-1}$). Jika listrik untuk memecah air tersebut masih berasal dari pembangkit batu bara, jejak karbon sistem secara keseluruhan tidak berkurang. Inilah alasan mengapa riset Kimia Hijau difokuskan pada fotokatalisis air bertenaga sinar matahari langsung.

---

### ⚡ Ringkasan Cepat & Peta Keputusan

#### Tabel Komparasi Empat Metode Penentuan $\Delta H$ Reaksi

| Metode Penentuan | Data yang Diperlukan | Rumus Utama | Syarat Batas & Catatan |
| :--- | :--- | :--- | :--- |
| **Kalorimetri** | Massa larutan ($m$), kalor jenis ($c$), perubahan suhu ($\Delta T$) | $q_{\text{reaksi}} = -m c \Delta T$<br/>$\Delta H = q / n$ | Wadah harus terisolasi baik; berlaku pada tekanan tetap. |
| **Hukum Hess (Tahapan)** | Nilai $\Delta H$ dari beberapa reaksi perantara | $\Delta H_{\text{total}} = \sum \Delta H_{\text{tahapan}}$ | Operasi aljabar: jika reaksi dibalik tanda berbalik; jika dikali $n$, $\Delta H$ ikut dikali $n$. |
| **Data $\Delta H^\circ_f$** | Entalpi pembentukan standar reaktan & produk | $\Delta H = \sum n \Delta H^\circ_f(\text{produk}) - \sum m \Delta H^\circ_f(\text{reaktan})$ | **Kanan - Kiri**; nilai $\Delta H^\circ_f$ untuk unsur bebas sama dengan $0$. |
| **Energi Ikatan Rata-Rata** | Energi disosiasi ikatan kovalen ($D$) seluruh ikatan | $\Delta H = \sum D(\text{putus}) - \sum D(\text{terbentuk})$ | **Kiri - Kanan**; seluruh zat yang terlibat **wajib berfasa gas $(g)$**. |

#### Peta Alur Keputusan: Menentukan Metode Hitung $\Delta H$ Reaksi
Gunakan alur logika penentuan metode berikut saat menghadapi soal perhitungan energi reaksi:

$$\begin{array}{c}
\boxed{\text{\textbf{PETA ALUR KEPUTUSAN: PENENTUAN METODE HITUNG }}\Delta H} \\
\downarrow \\
\text{Periksa Jenis Data yang Tersedia pada Soal:} \\
\downarrow \\
\begin{array}{c|c|c|c}
\text{Data Massa \& }\Delta T & \text{Persamaan Reaksi Bertahap} & \text{Tabel Nilai }\Delta H^\circ_f & \text{Tabel Energi Ikatan }D \\
\downarrow & \downarrow & \downarrow & \downarrow \\
\boxed{\text{\textbf{KALORIMETRI}}} & \boxed{\text{\textbf{HUKUM HESS ALJABAR}}} & \boxed{\text{\textbf{RUMUS }}\Delta H^\circ_f} & \boxed{\text{\textbf{ENERGI IKATAN}}} \\
q = -m \cdot c \cdot \Delta T & \text{Susun posisi \& koefisien} & \Delta H = \sum\text{Kanan} - \sum\text{Kiri} & \Delta H = \sum\text{Kiri} - \sum\text{Kanan} \\
\Delta H = q / n & \Delta H_{\text{tot}} = \sum \Delta H_{\text{tahap}} & \text{Unsur bebas} = 0 & \text{Wajib fasa gas }(g)
\end{array}
\end{array}$$

---

### 🏆 Evaluasi Mandiri Berjenjang

#### Tingkat I: Fondasi (Asesmen Formatif)
1. Jelaskan perbedaan mendasar antara sistem terbuka, sistem tertutup, dan sistem terisolasi beserta satu contoh nyata dalam kehidupan sehari-hari!  
   *(Kunci Jawaban: Sistem terbuka bertukar energi dan materi [gelas terbuka]; sistem tertutup hanya bertukar energi [botol bertutup rapat]; sistem terisolasi tidak bertukar materi maupun energi [termos ideal])*
2. Suatu reaksi kimia berlangsung eksoterm. Manakah yang memiliki tingkat entalpi lebih tinggi pada diagram tingkat energi: zat pereaksi atau zat produk? Jelaskan!  
   *(Kunci Jawaban: Zat pereaksi memiliki entalpi lebih tinggi daripada produk [H_reaktan > H_produk] karena sistem melepaskan selisih energi potensial kimianya ke lingkungan sehingga kurva energi turun)*
3. Mengapa nilai entalpi pembentukan standar ($\Delta H^\circ_f$) untuk gas $\ce{O2}$ ditetapkan nol, sedangkan untuk gas ozon ($\ce{O3}$) bernilai positif ($+142.7\ \text{kJ mol}^{-1}$)?  
   *(Kunci Jawaban: Karena berdasarkan konvensi IUPAC, nilai nol hanya diberikan pada bentuk alotrop unsur yang paling melimpah dan paling stabil pada keadaan standar 298 K dan 1 atm, yaitu O2; ozon O3 adalah bentuk alotrop yang kurang stabil)*

#### Tingkat II: Integrasi & Taktis (C3–C4)
4. Ke dalam $100\ \text{mL}$ larutan $\ce{CuSO4}\ 0.2\ \text{M}$ dimasukkan serbuk seng ($\ce{Zn}$) berlebih. Terjadi reaksi: $\ce{Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s)}$. Suhu larutan naik sebesar $8.0\ ^\circ\text{C}$. Jika massa jenis larutan $1\ \text{g mL}^{-1}$ dan kalor jenis larutan $4.2\ \text{J g}^{-1}\ ^\circ\text{C}^{-1}$, hitunglah $\Delta H$ reaksi tersebut dalam satuan $\text{kJ mol}^{-1}$!  
   *(Kunci Jawaban: -168 kJ mol^-1)*
5. Diketahui data entalpi pembentukan standar: $\Delta H^\circ_f\ \ce{C3H8(g)} = -104\ \text{kJ mol}^{-1}$, $\Delta H^\circ_f\ \ce{CO2(g)} = -394\ \text{kJ mol}^{-1}$, dan $\Delta H^\circ_f\ \ce{H2O(l)} = -286\ \text{kJ mol}^{-1}$. Hitunglah kalor yang dibebaskan pada pembakaran sempurna $11\ \text{gram}$ gas propana ($M_r = 44\ \text{g mol}^{-1}$)!  
   *(Kunci Jawaban: 555 kJ dibebaskan [ΔH = -555 kJ])*

#### Tingkat III: Penalaran Lanjut / HOTS (C4–C5)
6. Sebuah industri pupuk urea ingin memproduksi gas hidrogen melalui perengkahan gas metana dengan uap air:
   $$\ce{CH4(g) + H2O(g) -> CO(g) + 3 H2(g)}$$
   Tersedia data energi ikatan rata-rata: $\ce{C-H} = 413\ \text{kJ mol}^{-1}$, $\ce{O-H} = 463\ \text{kJ mol}^{-1}$, $\ce{C#O} (\text{dalam}\ \ce{CO}) = 1072\ \text{kJ mol}^{-1}$, dan $\ce{H-H} = 436\ \text{kJ mol}^{-1}$.  
   (a) Hitunglah perubahan entalpi ($\Delta H$) untuk reaksi perengkahan tersebut!  
   (b) Berdasarkan nilai $\Delta H$ yang Anda peroleh, apakah reaksi ini memerlukan pemanasan terus-menerus di reaktor industri atau justru memerlukan sistem pendingin? Jelaskan alasan operasionalnya!  
   *(Kunci Jawaban: (a) Total putus = 4(413) + 2(463) = 2578 kJ. Total terbentuk = 1072 + 3(436) = 2380 kJ. ΔH = 2578 - 2380 = +198 kJ mol^-1. (b) Reaksi bersifat endoterm [ΔH > 0], sehingga memerlukan pasokan panas terus-menerus dari pembakar eksternal agar reaksi tetap berlangsung dan suhu reaktor tidak merosot padam)*`
    }
  ]
};
