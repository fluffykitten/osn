/**
 * osnTopic10.ts
 * Topik 10: Kimia Organik & Biokimia
 * Jenjang: OSN / IChO
 * Standar Pedagogis: Tone Opsi A (5-Layer Architecture)
 */

import type { MaterialItem } from '../../materialsData.ts';
import { CHECKPOINTS_TOPIC_OSN_10 } from '../../checkpoints/checkpointBankTopicOsn10.ts';

export const OSN_TOPIC_10: MaterialItem = {
  id: 10,
  topic_number: 10,
  title: 'Kimia Organik & Biokimia',
  slug: 'kimia-organik-biokimia',
  category: 'Kimia Organik',
  level: 'OSN',
  readTimeMinutes: 45,
  summary: 'Kajian mendalam stereokimia Cahn-Ingold-Prelog (CIP), termodinamika & kinetika reaksi organik (Hammond & intermediet reaktif), teori asam-basa organik & aromatisitas Hückel, mekanisme substitusi nukleofilik (SN1 vs SN2) & inversi Walden, eliminasi (E1 vs E2) geometri anti-periplanar Zaitsev/Hofmann, adisi elektrofilik alkena stereospesifik Markovnikov, kimia karbonil & kondensasi enolat, biokimia asam amino, peptida, titik isoelektrik (pI), karbohidrat, serta kinetika enzim Michaelis-Menten dan diagnostik plot Lineweaver-Burk.',
  allTags: [
    'kinetika-enzim-michaelis-menten-inhibisi',
    'michaelis-menten',
    'lineweaver-burk',
    'inhibisi-enzim',
    'km-vmax',
    'kcat',
    'inhibisi-kompetitif',
    'inhibisi-unkompetitif',
    'inhibisi-nonkompetitif',
    'biokimia',
    'stereokimia',
    'aturan-cip',
    'kiralitas-r-s',
    'proyeksi-fischer',
    'proyeksi-newman',
    'enantiomer-diastereomer-meso',
    'termodinamika-kinetika-organik',
    'postulat-hammond',
    'karbokation',
    'karbanion',
    'radikal-bebas',
    'kontrol-termodinamika-kinetika',
    'asam-basa-organik',
    'efek-resonansi',
    'efek-induksi',
    'arimatisitas-huckel',
    'pka-organik',
    'substitusi-nukleofilik',
    'sn1-sn2',
    'inversi-walden',
    'mekanisme-sn1',
    'mekanisme-sn2',
    'efek-pelarut-aprotik',
    'reaksi-eliminasi',
    'e1-e2',
    'e2',
    'aturan-zaitsev',
    'produk-hofmann',
    'anti-periplanar',
    'kompetisi-substitusi-eliminasi',
    'adisi-elektrofilik',
    'aturan-markovnikov',
    'anti-markovnikov',
    'intermediet-siklik',
    'hidroborasi-oksidasi',
    'stereokimia-adisi',
    'reaksi-karbonil',
    'adisi-nukleofilik',
    'substitusi-nasil',
    'kondensasi-aldol',
    'kondensasi-claisen',
    'anion-enolat',
    'biomolekul',
    'asam-amino',
    'titik-isoelektrik-pi',
    'ikatan-peptida',
    'karbohidrat',
    'mutarotasi',
    'soal-osn',
    'soal-icho',
    'stereospesifisitas',
    'ion-bromonium',
    'senyawa-meso',
    'enantiomer',
    'adisi-michael',
    'sintesis-organik',
    'kurva-titrasi',
    'spesiasi-zwitterion',
  ],
  prerequisites: [
    {
      tag: 'prasyarat-stereokimia-cip-proyeksi-kiralitas',
      tags: ['stereokimia', 'aturan-cip', 'kiralitas-r-s', 'proyeksi-fischer', 'proyeksi-newman', 'enantiomer-diastereomer-meso'],
      title: 'Prasyarat 1: Stereokimia Cahn-Ingold-Prelog (CIP), Proyeksi Fischer/Newman & Isomerisme Spasial',
      summary: 'Penentuan konfigurasi absolut R/S CIP, manipulasi proyeksi Fischer dan Newman, serta klasifikasi stereoisomer enantiomer, diastereomer, dan senyawa meso.',
      content: `Bayangkan sepasang sarung tangan musim dingin: keduanya memiliki bentuk, jahitan, dan bahan yang identik persis, namun sarung tangan kiri tidak akan pernah pas dipakai di tangan kanan. Inilah inti dari **kiralitas** (*chirality*). Dalam dunia farmasi dan biokimia tingkat tinggi, perbedaan orientasi ruang 3D satu atom saja dapat membedakan molekul obat penyelamat jiwa dari racun mematikan (seperti tragedi talidomida). Memetakan arsitektur ruang molekul secara matematis dan presisi adalah keahlian fundamental pertama kimiawan OSN dan IChO.

### 1. Aturan Prioritas Cahn-Ingold-Prelog (CIP)
Untuk menentukan konfigurasi absolut ($R$ atau $S$) pada atom karbon kiral ($sp^3$ yang mengikat 4 ligan berlainan):
1. **Nomor Atom ($Z$):** Urutkan keempat gugus terikat langsung berdasarkan nomor atom tertinggi atom terikat pertama:
$$\\ce{-I} (53) > \\ce{-Br} (35) > \\ce{-Cl} (17) > \\ce{-SO3H} (16) > \\ce{-F} (9) > \\ce{-OH} (8) > \\ce{-NH2} (7) > \\ce{-CH3} (6) > \\ce{-H} (1) > \\text{Pasangan Elektron Bebas} (0)$$
2. **Titik Perbedaan Pertama (*First Point of Difference*):** Jika atom lapisan pertama identik (sama-sama atom karbon), daftarkan atom-atom pada lapisan kedua menurut urutan nomor atom menurun:
   - Gugus etil $-\\ce{CH2CH3} \\implies (\\ce{C, H, H})$
   - Gugus metil $-\\ce{CH3} \\implies (\\ce{H, H, H})$
   - Karena $\\ce{C} > \\ce{H}$ pada perbedaan pertama, maka $-\\ce{CH2CH3} > -\\ce{CH3}$.
3. **Ikatan Rangkap Dua & Tiga (*Phantom Atoms*):** Ikatan rangkap diperlakukan sebagai ikatan tunggal ke atom fiktif terduplikasi:
   - Gugus formil $-\\ce{CH=O}$ setara dengan $-\\ce{CH(O)(O)}$ (karbon mengikat dua atom oksigen).
   - Gugus karboksil $-\\ce{COOH}$ setara dengan $-\\ce{C(O)(O)(O)}$ (karbon mengikat tiga atom oksigen).
   - Gugus nitril $-\\ce{C#N}$ setara dengan $-\\ce{C(N)(N)(N)}$.
   - Prioritas relatif: $-\\ce{COOH} > -\\ce{CH=O} > -\\ce{CH2OH} > -\\ce{CH3}$.
4. **Penentuan Konfigurasi ($R$ vs $S$):**
   - Pandang molekul dengan menempatkan ligan berprioritas terendah (prioritas 4, umumnya $-\\ce{H}$) menjauhi pengamat (garis putus-putus/*dash*).
   - Telusuri urutan $1 \\to 2 \\to 3$:
     - Searah jarum jam: konfigurasi **$R$** (*Rectus*).
     - Berlawanan arah jarum jam: konfigurasi **$S$** (*Sinister*).

### 2. Proyeksi Fischer & Kaidah Manipulasi Matriks
Proyeksi Fischer memproyeksikan struktur tetrahedral ke bidang kertas:
- **Garis horizontal:** ikatan menonjol ke arah pengamat (ke depan bidang, baji/*wedge*).
- **Garis vertikal:** ikatan menjauhi pengamat (ke belakang bidang, garis putus-putus/*dash*).
- **Operasi Bidang:**
  - Rotasi $180^\\circ$ pada bidang kertas: **mempertahankan** konfigurasi stereokimia ($R \\to R$, $S \\to S$).
  - Rotasi $90^\\circ$ pada bidang kertas: **membalik** konfigurasi stereokimia ($R \\to S$, $S \\to R$).
  - Menukar posisi sembarang dua gugus: membalik konfigurasi; menukar dua pasang gugus secara simultan: mempertahankan konfigurasi.

### 3. Matriks Klasifikasi Stereoisomer Spasial
Hubungan stereokimia antarmolekul dirangkum dalam matriks komparasi berikut:

| Kategori Isomer | Definisi Hubungan Spasial | Sifat Fisika-Kimia Akiral | Aktivitas Optik ($[\\alpha]_D$) | Pemisahan (*Resolusi*) |
| :--- | :--- | :--- | :--- | :--- |
| **Enantiomer** | Pasangan bayangan cermin yang tidak dapat ditumpukkan (*non-superimposable*) | Identik murni (titik leleh, titik didih, densitas, $pK_a$) | Memutar bidang polarisasi dengan besar sudut sama tapi berlawanan arah ($+ / -$) | Membutuhkan reagen/kromatografi kiral |
| **Diastereomer** | Stereoisomer yang bukan bayangan cermin satu sama lain (misal $(2R,3R)$ vs $(2R,3S)$) | Berbeda total (titik didih, kelarutan, energi bebas kristal berbeda) | Memiliki nilai $[\\alpha]_D$ yang berbeda sama sekali | Mudah dipisahkan via distilasi fraksionasi / kristalisasi |
| **Senyawa Meso** | Molekul memiliki stereopusat kiral majemuk tetapi memiliki bidang simetri internal ($\\sigma$) | Senyawa akiral tunggal murni | Optis inaktif murni ($[\\alpha]_D = 0^\\circ$) melalui kompensasi internal | Merupakan senyawa murni tunggal |

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN
> - **Jangan Menyamakan Senyawa Meso dengan Campuran Rasemat!** Campuran rasemat adalah campuran ekuimolar $50:50$ dari sepasang enantiomer terpisah (inaktif melalui kompensasi eksternal antarmolekul). Sebaliknya, senyawa meso adalah molekul murni tunggal yang memiliki bidang simetri internal $\\sigma$ atau pusat inversi $i$, sehingga bersifat akiral secara internal.
> - **Hati-Hati Saat Gugus Prioritas 4 Berada di Posisi Horizontal Proyeksi Fischer!** Garis horizontal menonjol ke arah pengamat. Jika gugus 4 berada di garis horizontal, arah putaran semu $1 \\to 2 \\to 3$ harus **dibalik** ($R \\leftrightarrow S$).

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO
> Trik Putaran Semu Cepat: Jika gugus prioritas 4 berada di baji (ke depan bidang) atau di garis horizontal Fischer, jangan buang waktu memutar molekul 3D di kepala Anda! Cukup tentukan arah putaran ligan $1 \\to 2 \\to 3$: jika tampak searah jarum jam ($R$), konfigurasi aslinya adalah **$S$**; jika tampak berlawanan jarum jam ($S$), konfigurasi aslinya adalah **$R$**.`,
      keyFormulas: [
        { name: 'Jumlah Maksimum Stereoisomer', formula: 'N_{\\text{max}} = 2^n \\quad (n = \\text{jumlah karbon kiral})' },
        { name: 'Rotasi Jenis Spesifik', formula: '[\\alpha]_D^T = \\frac{\\alpha_{\\text{teramati}}}{l \\cdot c}' },
        { name: 'Kelebihan Enantiomer (Enantiomeric Excess)', formula: 'ee = \\frac{|[R] - [S]|}{[R] + [S]} \\times 100\\% = \\frac{[\\alpha]_{\\text{campuran}}}{[\\alpha]_{\\text{murni}}} \\times 100\\%' },
      ],
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_10['prasyarat-stereokimia-cip-proyeksi-kiralitas'],
    },
    {
      tag: 'prasyarat-termodinamika-kinetika-organik-diagram-energi',
      tags: ['termodinamika-kinetika-organik', 'postulat-hammond', 'karbokation', 'karbanion', 'radikal-bebas', 'kontrol-termodinamika-kinetika'],
      title: 'Prasyarat 2: Termodinamika & Kinetika Reaksi Organik, Postulat Hammond & Intermediet Reaktif',
      summary: 'Profil koordinat energi reaksi, postulat Hammond, geometri & kestabilan karbokation, karbanion, radikal, serta kontrol kinetik versus termodinamik.',
      content: `Setiap transformasi kimia organik adalah perlombaan antara dua kekuatan mendasar: **Kinetika** (seberapa cepat rintangan bukit energi dapat didaki) dan **Termodinamika** (seberapa dalam lembah kestabilan produk akhir). Tanpa memahami koordinat energi reaksi, Anda akan sering terjebak memprediksi produk yang "paling stabil" padahal reaksinya terkunci oleh rintangan aktivasi kinetik yang tak tertembus.

### 1. Koordinat Energi Reaksi & Postulat Hammond
- Laju reaksi elementer dikendalikan oleh energi bebas aktivasi Gibbs ($\\Delta G^\\ddagger$):
$$k = \\frac{k_B T}{h} e^{-\\Delta G^\\ddagger / RT}$$
- Kesetimbangan akhir produk dikendalikan oleh perubahan energi bebas Gibbs standar ($\\Delta G^\\circ$):
$$\\Delta G^\\circ = -RT \\ln K$$
- **Postulat Hammond (1955):** Struktur keadaan transisi (*transition state*) paling menyerupai spesi stabil yang energinya paling mendekatinya:
  - **Reaksi Eksergonik Kuat (Tahap Awal Cepat, $\\Delta G^\\circ \\ll 0$):** Keadaan transisi terjadi awal (*early transition state*), strukturnya menyerupai reaktan.
  - **Reaksi Endergonik (Tahap Penentu Laju Lambat, $\\Delta G^\\circ \\gg 0$):** Keadaan transisi terjadi lambat (*late transition state*), strukturnya menyerupai zat antara / intermediet berenergi tinggi. Oleh karena itu, faktor apapun yang menstabilkan karbokation intermediet akan langsung menurunkan $\\Delta G^\\ddagger$ dan mempercepat reaksi!

### 2. Matriks Komparasi Intermediet Reaktif Karbon

| Intermediet | Elektron Valensi | Geometri & Hibridisasi | Faktor Stabilisasi Utama | Urutan Kestabilan Relatif |
| :--- | :--- | :--- | :--- | :--- |
| **Karbokation ($R_3\\ce{C+}$)** | 6 elektron (kurang elektron, elektrofil kuat) | Trigonal Planar ($sp^2$), orbital $p$ kosong tegak lurus bidang | Hiperkonjugasi $\\sigma_{\\ce{C-H}} \\to p$, efek induksi $+I$, delokalisasi resonansi | Tropilium $>$ Benzilik $\\approx$ Alilik $> 3^\\circ > 2^\\circ > 1^\\circ > \\text{Metil} \\gg \\text{Vinilik}$ |
| **Radikal Bebas ($R_3\\ce{C^\\bullet}$)** | 7 elektron (defisit satu elektron) | Planar / Piramidal sangat dangkal ($sp^2$) | Delokalisasi resonansi orbital somo $\\pi$, hiperkonjugasi gugus alkil | Benzilik $\\approx$ Alilik $> 3^\\circ > 2^\\circ > 1^\\circ > \\text{Metil}$ |
| **Karbanion ($R_3\\ce{C-}$)** | 8 elektron (kaya elektron, basa/nukleofil kuat) | Piramidal ($sp^3$) dengan pasangan elektron bebas | Peningkatan karakter $s$ hibrida ($sp > sp^2 > sp^3$), efek penarik elektron ($-I$, $-M$) | Anion Enolat $>$ Asetilida ($sp$) $>$ Vinil ($sp^2$) $>$ Metil $> 1^\\circ > 2^\\circ > 3^\\circ$ |

### 3. Kontrol Kinetik vs Termodinamik
Pada reaksi yang menghasilkan dua produk bersaing dari zat antara yang sama:
- **Produk Kinetik:** Terbentuk paling cepat melalui keadaan transisi berenergi terendah ($\\Delta G^\\ddagger_1 < \\Delta G^\\ddagger_2$). Mendominasi pada suhu rendah ($-80^\\circ\\text{C}$) di mana reaksi bersifat ireversibel.
- **Produk Termodinamik:** Memiliki kestabilan energi produk paling rendah ($\\Delta G^\\circ_2 < \\Delta G^\\circ_1$). Mendominasi pada suhu tinggi ($+40^\\circ\\text{C}$) karena sistem memiliki energi termal yang cukup untuk mencapai kesetimbangan reversibel.
- *Contoh Klasik:* Adisi $\\ce{HBr}$ pada $1,3$-butadiena:
  - Pada $-80^\\circ\\text{C}$: produk adisi-$1,2$ (kinetik, terbentuk via kedekatan pasangan ion) mendominasi ($80\\%$).
  - Pada $+40^\\circ\\text{C}$: produk adisi-$1,4$ (termodinamik, membentuk alkena disubstitusi internal yang lebih stabil) mendominasi ($80\\%$).

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN
> - **Karbokation Selalu Mengintai Penataan Ulang (*Rearrangement*)!** Jika terbentuk karbokation sekunder yang bersebelahan dengan karbon tersier atau kuaterner, karbokation akan mengalami geseran $1,2$-hidrida atau $1,2$-metil secara spontan menghasilkan karbokation tersier yang lebih stabil sebelum diserang nukleofil!
> - **Jangan Menganggap Karbokation Vinilik Stabil!** Muatan positif pada karbon ikatan rangkap dua ($-\\ce{CH=C^+H}$) berhibridisasi $sp^2$ yang memiliki karakter $s$ tinggi ($33\\%$) sehingga sangat elektronegatif dan menolak pelepasan elektron. Karbokation vinilik jauh lebih tidak stabil daripada karbokation primer alifatik!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO
> Identifikasi cepat soal kinetik vs termodinamik: jika soal menyebutkan "suhu sangat dingin / waktu singkat" $\\to$ cari produk yang terbentuk dari serangan atom terdekat (kinetik). Jika soal menyebutkan "pemanasan refluks / kesetimbangan berjam-jam" $\\to$ cari produk alkena yang paling tersubstitusi / konjugasi paling panjang (termodinamik).`,
      keyFormulas: [
        { name: 'Persamaan Eyring Laju Kinetika', formula: 'k = \\frac{k_B T}{h} e^{-\\Delta G^\\ddagger / RT}' },
        { name: 'Hubungan Energi Bebas Kesetimbangan', formula: '\\Delta G^\\circ = -RT \\ln K' },
        { name: 'Kestabilan Termodinamika Alkena', formula: '\\text{Tetrasubstitusi} > \\text{Trisubstitusi} > \\text{Disubstitusi} > \\text{Monosubstitusi}' },
      ],
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_10['prasyarat-termodinamika-kinetika-organik-diagram-energi'],
    },
    {
      tag: 'prasyarat-asam-basa-organik-efek-elektronik',
      tags: ['asam-basa-organik', 'efek-resonansi', 'efek-induksi', 'arimatisitas-huckel', 'pka-organik'],
      title: 'Prasyarat 3: Teori Asam-Basa Organik, Resonansi, Efek Induksi & Aromatisitas Hückel',
      summary: 'Korelasi nilai pKa dengan kestabilan basa konjugat, modulasi efek induksi dan resonansi, serta kriteria aromatisitas Huckel 4n+2.',
      content: `Mengapa asam asetat ($pK_a = 4.76$) jutaan kali lebih asam daripada etanol ($pK_a \\approx 16$), padahal keduanya melepaskan proton dari ikatan $\\ce{O-H}$? Kunci keasaman organik tidak terletak pada asam induknya, melainkan pada **kemampuan basa konjugat ($A^-$) mendispersikan dan menstabilkan muatan negatif**. Semakin stabil basa konjugat, semakin rela molekul induk melepas protonnya.

### 1. Empat Pilar Penentu Kestabilan Basa Konjugat
1. **Elektronegativitas & Ukuran Atom Pembawa Muatan:**
   - Dalam satu periode: $\\ce{C-} < \\ce{N-} < \\ce{O-} < \\ce{F-}$ (elektronegativitas menstabilkan muatan negatif).
   - Dalam satu golongan: $\\ce{F-} < \\ce{Cl-} < \\ce{Br-} < \\ce{I-}$ (ukuran jari-jari atom yang besar mendispersikan densitas muatan ke volume ruang yang luas). Asam halida: $\\ce{HF} (3.2) < \\ce{HCl} (-7) < \\ce{HBr} (-9) < \\ce{HI} (-10)$.
2. **Hibridisasi Orbital Atom Karbon:**
   Elektron pada orbital dengan karakter $s$ tinggi ditarik lebih kuat oleh inti:
$$\\ce{CH3-CH3} (sp^3, 25\\% s, pK_a \\sim 50) < \\ce{CH2=CH2} (sp^2, 33\\% s, pK_a \\sim 44) < \\ce{HC#CH} (sp, 50\\% s, pK_a \\sim 25)$$
   Proton asetilena bersifat cukup asam sehingga dapat dideprotonasi oleh $\\ce{NaNH2}$ membentuk anion asetilida yang stabil.
3. **Efek Resonansi & Delokalisasi Muatan:**
   - Etoksida ($\\ce{CH3CH2O-}$): muatan negatif terlokalisasi kaku pada satu atom oksigen.
   - Fenolat ($\\ce{C6H5O-}$): muatan terdelokalisasi ke posisi orto dan para cincin benzena ($pK_a$ fenol $= 10.0$).
   - Asetat ($\\ce{CH3COO-}$): muatan terdelokalisasi setara sempurna pada dua atom oksigen elektronegatif ($pK_a = 4.76$).
4. **Efek Induksi Penarik Elektron ($-I$):**
   Atom sangat elektronegatif menarik densitas elektron melalui kerangka ikatan $\\sigma$:
$$\\ce{CH3COOH} (4.76) > \\ce{CH2ClCOOH} (2.86) > \\ce{CHCl2COOH} (1.29) > \\ce{CCl3COOH} (0.65) > \\ce{CF3COOH} (0.23)$$

### 2. Matriks Aturan Aromatisitas Hückel ($4n+2$)

| Kriteria / Sistem | Sistem Aromatik | Sistem Anti-Aromatik | Sistem Non-Aromatik |
| :--- | :--- | :--- | :--- |
| **Persyaratan Struktural** | Siklik, datar (planar), terkonjugasi penuh di setiap atom cincin | Siklik, planar, terkonjugasi penuh di setiap atom cincin | Tidak siklik ATAU tidak planar (mengkerut) ATAU terputus atom $sp^3$ |
| **Jumlah Elektron $\\pi$** | **$4n + 2$** ($n = 0, 1, 2, \\dots \\implies 2, 6, 10, 14\\pi$) | **$4n$** ($n = 1, 2, \\dots \\implies 4, 8, 12\\pi$) | Sembarang |
| **Energi Resonansi** | Luar biasa stabil (energi resonansi sangat negatif) | Sangat tidak stabil (energi resonansi positif, sangat reaktif) | Mirip poliena rantai terbuka biasa |
| **Contoh Molekul** | Benzena ($6\\pi$), Kation Tropilium ($\\ce{C7H7+}, 6\\pi$), Anion Siklopentadienil ($6\\pi$), Piridina ($6\\pi$), Pirola ($6\\pi$), Naftalena ($10\\pi$) | Siklobutadiena ($4\\pi$), Kation Siklopentadienil ($\\ce{C5H5+}, 4\\pi$) | Siklooktatetraena (COT, mengadopsi bentuk perahu/tub untuk menghindari anti-aromatik) |

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN
> - **Jangan Menghitung Pasangan Elektron Bebas Heteroatom Sembarangan!**
>   - Pada **Piridina**: atom nitrogen berikatan rangkap dua. Pasangan elektron bebas nitrogen berada pada orbital hibrida $sp^2$ planar yang tegak lurus terhadap cincin $\\pi$, sehingga **TIDAK dihitung** dalam sistem Hückel (piridina tetap $6\\pi$ dari 3 ikatan rangkap dua).
>   - Pada **Pirola**: atom nitrogen berikatan tunggal. Pasangan elektron bebas nitrogen berada pada orbital $p$ tegak yang **IKUT didelokalisasikan** ke dalam cincin untuk menggenapkan aturan $4n+2$ ($4\\pi$ dari 2 ikatan rangkap $+ 2\\pi$ dari PEB nitrogen $= 6\\pi$ aromatik).
> - Akibatnya: Piridina bersifat basa, sedangkan Pirola bersifat sangat tidak basa karena protonasi nitrogen akan menghancurkan aromatisitas cincin!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO
> Trik Aromatisitas Kation/Anion Siklik:
> - Kation tropilium ($\ce{C7H7+}$): cincin 7 atom memiliki $3$ ikatan rangkap dua ($6\\pi$) dan $1$ karbon karbokation dengan orbital $p$ kosong $\\implies$ Aromatik sempurna!
> - Anion siklopentadienil ($\ce{C5H5-}$): cincin 5 atom memiliki $2$ ikatan rangkap dua ($4\\pi$) dan $1$ karbanion dengan sepasang elektron di orbital $p$ ($2\\pi$) $\implies 6\\pi$ elektron, aromatik sangat stabil! Itulah mengapa siklopentadiena memiliki $pK_a \\approx 16$ (sangat asam untuk hidrokarbon).`,
      keyFormulas: [
        { name: 'Kriteria Aromatisitas Huckel', formula: '\\text{Jumlah elektron } \\pi = 4n + 2 \\quad (n = 0, 1, 2, \\dots)' },
        { name: 'Kriteria Anti-Aromatisitas', formula: '\\text{Jumlah elektron } \\pi = 4n \\quad (n = 1, 2, \\dots)' },
        { name: 'Definisi Skala Keasaman', formula: 'pK_a = -\\log_{10} K_a' },
      ],
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_10['prasyarat-asam-basa-organik-efek-elektronik'],
    },
  ],
  core_concepts: [
    {
      tag: 'konsep-substitusi-nukleofilik-sn1-sn2-inversi-walden',
      tags: ['substitusi-nukleofilik', 'sn1-sn2', 'inversi-walden', 'mekanisme-sn1', 'mekanisme-sn2', 'efek-pelarut-aprotik'],
      title: 'Konsep Inti 1: Substitusi Nukleofilik (SN1 vs SN2), Dinamika Stereokimia & Efek Pelarut',
      summary: 'Komparasi mekanisme serentak SN2 vs bertahap SN1, faktor rintangan sterik, pengaruh pelarut polar aprotik, dan pembuktian stereoselktivitas inversi Walden.',
      content: `Reaksi substitusi nukleofilik alifatik adalah landasan utama sintesis organik. Pertarungan antara mekanisme bimolekular serentak ($S_N2$) dan unimolekular bertahap ($S_N1$) seperti membedakan antara pintu putar satu tahap (di mana pendatang baru masuk dari belakang tepat saat pengunjung lama terdorong keluar) versus loket antrean dua tahap (pengunjung lama pergi dulu meninggalkan ruangan kosong, baru pendatang berikutnya bebas masuk dari pintu mana saja).

### 1. Mekanisme $S_N2$ (Substitusi Nukleofilik Bimolekular)
- **Karakteristik Mekanisme:** Berlangsung serentak (*concerted*, 1 tahap tanpa zat antara).
- **Hukum Laju Reaksi:** Orde dua total:
$$r = k [R-X] [\\text{Nu}^-]$$
- **Geometri Penyerangan:** Nukleofil menyerang atom karbon dari arah belakang (*backside attack*), tepat $180^\\circ$ berlawanan arah dari ikatan $\\ce{C-X}$. Serangan ini mengalirkan densitas elektron ke dalam orbital antibonding $\\sigma^*_{\\ce{C-X}}$ yang kosong.
- **Keadaan Transisi (*Transition State*):** Membentuk struktur pentakoordinasi trigonal bipiramidal yang terdistorsi: ikatan $\\ce{Nu...C}$ terbentuk simultan bersamaan dengan putusnya ikatan $\\ce{C...X}$.
- **Konsekuensi Stereokimia:** Menghasilkan pembalikan konfigurasi ruang secara mutlak (**Inversi Walden $100\\%$**, seperti payung yang terbalik tertiup badai).
- **Rintangan Sterik Substrat:**
$$\\text{Metil} > 1^\\circ (\\text{etil}) > 2^\\circ (\\text{isopropil}) \\gg 3^\\circ (\\text{tert-butil, tidak bereaksi via } S_N2)$$
Substrat neopentil ($-\\ce{CH2-C(CH3)3}$) meskipun berstatus primer mengalami perlambatan laju hingga $10^5$ kali lipat karena ketiga gugus metil pada karbon-$\\beta$ memblokir lintasan serangan *backside*.

### 2. Mekanisme $S_N1$ (Substitusi Nukleofilik Unimolekular)
- **Karakteristik Mekanisme:** Berlangsung bertahap (2 tahap via intermediet karbokation):
  - **Tahap 1 (Lambat, RDS):** Pemutusan heterolitik ikatan $\\ce{C-X}$ menghasilkan karbokation planar $sp^2$:
$$r = k [R-X]$$
  - **Tahap 2 (Cepat):** Serangan nukleofil ke orbital $p$ kosong karbokation.
- **Konsekuensi Stereokimia:** Karena karbokation bergeometri planar akiral dengan simetri atas-bawah setara, nukleofil dapat menyerang dari kedua muka dengan probabilitas statistik seimbang, menghasilkan **Rasemisasi** ($50\\% R : 50\\% S$). Namun pada kenyataannya sering teramati sedikit kelebihan inversi ($5-15\\%$) akibat efek pasangan ion intim (*intimate ion-pair effect*), di mana gugus pergi yang lepas masih memblokir muka depan.
- **Reaktivitas Substrat:** Sebanding dengan kestabilan karbokation:
$$3^\\circ > 2^\\circ \\gg 1^\\circ > \\text{metil}$$

### 3. Matriks Komparasi Total $S_N1$ vs $S_N2$

| Parameter Kinetika | Mekanisme $S_N2$ | Mekanisme $S_N1$ |
| :--- | :--- | :--- |
| **Persamaan Laju** | Orde 2: $r = k [R-X][\\text{Nu}^-]$ | Orde 1: $r = k [R-X]$ |
| **Jumlah Tahap & Intermediet** | 1 tahap serentak, tanpa zat antara | 2 tahap bertahap, via zat antara karbokation |
| **Stereokimia Produk** | Inversi Walden $100\\%$ stereospesifik | Rasemisasi (dengan sedikit ekses inversi) |
| **Urutan Substrat Favorit** | $\\text{Metil} > 1^\\circ > 2^\\circ \\gg 3^\\circ$ (kendali sterik) | $3^\\circ > 2^\\circ \\gg 1^\\circ > \\text{Metil}$ (kendali elektronik) |
| **Karakter Nukleofil** | Membutuhkan nukleofil kuat bermuatan ($\\ce{OH-, RO-, CN-, RS-}$)| Cukup nukleofil lemah netral ($\\ce{H2O, ROH}$) |
| **Pelarut Paling Efektif** | **Polar Aprotik** (DMSO, DMF, aseton, asetonitril) | **Polar Protik** (air, metanol, etanol, asam asetat) |
| **Kecenderungan Penataan Ulang**| Tidak pernah terjadi penataan ulang | Sering terjadi penataan ulang karbokation |

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN
> - **Inversi Konfigurasi Ruang Tidak Selalu Berarti Label R Berubah Menjadi S!**
>   Inversi Walden adalah pembalikan posisi geometri 3D. Jika gugus pergi berprioritas CIP 1 digantikan oleh nukleofil berprioritas CIP 2 atau 3, label CIP bisa saja tetap $R \\to R$ meskipun terjadi inversi geometri murni! Selalu gambar kembali struktur 3D produk dan tentukan ulang prioritas CIP secara objektif.
> - **Alkil Halida Primer Neopentil Gagal Menjalani $S_N2$!**
>   Meskipun neopentil bromida adalah alkil halida $1^\\circ$, atom karbon tetangga ($\\beta$) mengikat 3 gugus metil yang membentuk perisai sterik masif. Pendekatan nukleofil dari arah $180^\\circ$ terblokir secara total.

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO
> Trik Pelarut Polar Aprotik: Pelarut polar aprotik (DMF, DMSO, Aseton) mampu melarutkan kation logam ($\\ce{Na+}, \\ce{K+}$) melalui interaksi dipol yang kuat, namun tidak dapat membentuk ikatan hidrogen dengan anion nukleofil. Anion nukleofil menjadi "telanjang" (*naked anion*) dengan energi bebas dan reaktivitas nukleofilik maksimal. Jika soal OSN mencantumkan pelarut DMF atau DMSO pada substrat sekunder, prioritaskan mekanisme **$S_N2$**!`,
      keyFormulas: [
        { name: 'Hukum Laju SN2', formula: 'r = k [R-X] [\\text{Nu}^-]' },
        { name: 'Hukum Laju SN1', formula: 'r = k [R-X]' },
        { name: 'Urutan Kualitas Gugus Pergi (Leaving Group)', formula: '\\ce{TfO-} > \\ce{TsO-} > \\ce{I-} > \\ce{Br-} > \\ce{Cl-} \\gg \\ce{F-} > \\ce{OH-}' },
      ],
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_10['konsep-substitusi-nukleofilik-sn1-sn2-inversi-walden'],
    },
    {
      tag: 'konsep-eliminasi-e1-e2-stereokimia-anti-periplanar',
      tags: ['reaksi-eliminasi', 'e1-e2', 'aturan-zaitsev', 'produk-hofmann', 'anti-periplanar', 'kompetisi-substitusi-eliminasi'],
      title: 'Konsep Inti 2: Reaksi Eliminasi (E1 vs E2), Aturan Zaitsev vs Hofmann & Geometri Anti-Periplanar',
      summary: 'Persyaratan stereoelektronik anti-periplanar E2, pembentukan alkena Zaitsev vs Hofmann via basa meruap, dan matriks kompetisi substitusi-eliminasi.',
      content: `Reaksi eliminasi adalah rute sintesis paling elegan untuk membangun ikatan rangkap dua (alkena). Namun pada tingkat olimpiade, eliminasi bukan sekadar "melepas gugus pergi dan hidrogen", melainkan **tarian stereoelektronik yang kaku**: jika orientasi orbital molekul tidak berada pada sudut dihedral yang tepat, reaksi tidak akan pernah terjadi betapapun kuatnya basa yang Anda tambahkan!

### 1. Mekanisme $E2$ & Persyaratan Stereoelektronik Anti-Periplanar
Mekanisme $E2$ (Eliminasi Bimolekular) berlangsung serentak dalam 1 tahap:
$$r = k [R-X] [\\text{Base}]$$
- **Geometri Anti-Periplanar (Sudut Dihedral $\\theta = 180^\\circ$):**
  Ikatan $\\ce{C_\\beta-H}$ dan $\\ce{C_\\alpha-X}$ harus berada pada bidang yang sama dengan orientasi berlawanan arah.
  *Alasan Mekanika Kuantum:* Konformasi anti-periplanar memungkinkan tumpang tindih paralel maksimum antara orbital ikatan $\\sigma_{\\ce{C-H}}$ yang kaya elektron dengan orbital antibonding $\\sigma^*_{\\ce{C-X}}$ yang kosong untuk membentuk ikatan $\\pi_{\\ce{C=C}}$.
- **Konsekuensi Wajib pada Cincin Sikloheksana:**
  Eliminasi $E2$ pada sikloheksana hanya dapat berlangsung jika **gugus pergi halogen dan atom hidrogen-$\\beta$ berada pada posisi trans-diaksial ($a, a$)**. Gugus pergi pada posisi ekuatorial tidak dapat dieliminasi secara langsung! Cincin wajib membalik konformasi (*chair flip*) ke konformer berenergi tinggi dengan gugus aksial terlebih dahulu.

### 2. Regioselektivitas: Aturan Zaitsev vs Produk Hofmann
1. **Aturan Zaitsev (Produk Termodinamik):**
   Jika eliminasi dipicu oleh basa kuat berukuran ramping (seperti $\\ce{OH-}, \\ce{CH3O-}, \\ce{CH3CH2O-}$), produk dominan adalah alkena yang memiliki **derajat substitusi terbanyak** pada ikatan rangkap (paling stabil secara termodinamika akibat stabilisasi hiperkonjugasi).
2. **Produk Hofmann (Produk Kinetik / Alkena Terminal):**
   Alkena yang kurang tersubstitusi terbentuk sebagai produk dominan apabila:
   - Digunakan **basa kuat yang sangat terhalang sterik / meruap (*bulky base*)** seperti kalium tert-butoksida ($t\\ce{-BuOK}$), litium diisopropilamida ($\\text{LDA}$), atau trietilamina. Basa meruap terhalang mengambil proton-$\\beta$ internal dan memilih proton pada gugus metil terminal yang terbuka.
   - Substrat memiliki gugus pergi bermuatan positif berukuran besar (seperti garam amonium kuaterner $-\\ce{N^+(CH3)3}$, Eliminasi Hofmann).

### 3. Matriks Keputusan Master Kompetisi ($S_N2, S_N1, E2, E1$)

| Jenis Substrat | Basa Kuat / Nukleofil Kuat (misal $\\ce{EtO-}, \\ce{OH-}$) | Basa Kuat Meruap (misal $t\\ce{-BuOK}, \\text{LDA}$) | Nukleofil Kuat / Basa Lemah (misal $\\ce{I-, CN-, RS-}$) | Nukleofil Lemah / Basa Lemah (misal $\\ce{H2O, EtOH}$) |
| :--- | :--- | :--- | :--- | :--- |
| **Primer ($1^\\circ$)** | **$S_N2$ mayoritas** ($E2$ minoritas) | **$E2$ murni (Hofmann)** | **$S_N2$ murni** | Tidak ada reaksi praktis |
| **Sekunder ($2^\\circ$)** | **$E2$ mayoritas (Zaitsev)** | **$E2$ murni (Hofmann)** | **$S_N2$ murni** (dalam polar aprotik) | **$S_N1 + E1$** (lambat, solvolisis) |
| **Tersier ($3^\\circ$)** | **$E2$ murni (Zaitsev)** | **$E2$ murni (Hofmann)** | **$S_N1$ murni** | **$S_N1 + E1$** (pemanasan $\\to E1$) |

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN
> - **Jebakan Mentil Klorida vs Neomentil Klorida:**
>   Pada neomentil klorida, atom klorin sudah berada pada posisi aksial pada konformer stabilnya, sehingga memiliki dua hidrogen bertetangga yang trans-diaksial $\\implies$ bereaksi cepat menghasilkan produk Zaitsev $2$-mentena ($91\\%$).
>   Pada mentil klorida, klorin berada pada posisi ekuatorial. Agar dapat bereaksi, molekul harus melakukan *chair flip* yang menempatkan isopropil dan metil ke posisi aksial. Pada konformer ini, hanya proton pada C3 yang trans-diaksial $\\implies$ mentil klorida bereaksi $200\\times$ lebih lambat dan menghasilkan **$100\\%$ produk anti-Zaitsev (3-mentena)**!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO
> Trik Termodinamika Suhu Reaksi: Reaksi eliminasi memecah molekul reaktan menjadi 3 partikel produk terpisah (alkena, ion halida, dan basa terprotonasi), sehingga memiliki perubahan entropi positif yang besar ($\\Delta S^\\circ > 0$). Pada suku energi bebas Gibbs $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$, kenaikan suhu ($T$ tinggi) melipatgandakan kontribusi negatif $-T\\Delta S^\\circ$. Oleh karena itu, jika Anda ingin memaksimalkan produk eliminasi terhadap substitusi pada substrat tersier/sekunder, **tambahkan pemanasan suhu tinggi**!`,
      keyFormulas: [
        { name: 'Kondisi Anti-Periplanar E2', formula: '\\text{Sudut Dihedral } \\theta = 180^\\circ \\quad (\\text{posisi trans-diaksial})' },
        { name: 'Hukum Laju E2', formula: 'r = k [R-X] [\\text{Base}]' },
        { name: 'Pengaruh Entropi Suhu Eliminasi', formula: '\\Delta G = \\Delta H - T \\Delta S \\quad (\\Delta S > 0 \\implies T \\uparrow, \\text{ Eliminasi Mendominasi})' },
      ],
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_10['konsep-eliminasi-e1-e2-stereokimia-anti-periplanar'],
    },
    {
      tag: 'konsep-adisi-elektrofilik-alkena-markovnikov-stereokimia',
      tags: ['adisi-elektrofilik', 'aturan-markovnikov', 'anti-markovnikov', 'intermediet-siklik', 'hidroborasi-oksidasi', 'stereokimia-adisi'],
      title: 'Konsep Inti 3: Adisi Elektrofilik Alkena/Alkuna, Aturan Markovnikov & Kontrol Stereokimia',
      summary: 'Mekanisme adisi elektrofilik via karbokation terbuka vs ion halonium siklik, aturan Markovnikov regioselektif, dan kontrol stereospesifik adisi anti vs sin.',
      content: `Awan elektron $\\pi$ pada ikatan rangkap dua alkena terdedah di atas dan di bawah bidang datar molekul, menjadikannya nukleofil siap saji yang mencari elektrofil ($E^+$). Namun hasil akhir reaksi adisi ditentukan oleh dua hukum ketat: **Regioselektivitas** (atom mana mengikat bagian mana) dan **Stereoselktivitas** (apakah kedua ligan baru masuk dari sisi yang sama (*sin*) atau sisi berlawanan (*anti*)).

### 1. Aturan Markovnikov Berbasis Kestabilan Karbokation
Pada adisi asam halida ($\\ce{H-X}$) ke alkena asimetris, elektrofil proton ($\\ce{H+}$) terikat secara selektif pada atom karbon yang telah mengikat **lebih banyak atom hidrogen**.
- *Rasionalisasi:* Jalur ini menghasilkan zat antara **karbokation yang paling stabil** (tersier $>$ sekunder $>$ primer):
$$\\ce{CH3-CH=CH2 + H-Br -> [CH3-C^+H-CH3] + Br- -> CH3-CH(Br)-CH3} \\quad (\\text{2-bromopropana})$$

### 2. Adisi Anti-Markovnikov Radikal Bebas (Efek Kharasch)
Bila adisi $\\ce{HBr}$ ditambahkan katalitik peroksida organik ($\\ce{ROOR}$) dengan penyinaran cahaya/panas, regioselektivitas berbalik total menghasilkan produk **anti-Markovnikov** ($1$-bromopropana):
1. Inisiasi: Peroksida terbelah homolitik menghasilkan radikal alkoksi yang mengabstraksi hidrogen dari $\\ce{HBr}$ membentuk radikal bromin ($\\ce{Br^\\bullet}$).
2. Propagasi: Radikal $\\ce{Br^\\bullet}$ menyerang karbon terminal yang kurang terhalang sterik untuk menghasilkan radikal karbon sekunder yang lebih stabil:
$$\\ce{CH3-CH=CH2 + Br^\\bullet -> CH3-\\dot{C}H-CH2Br}$$
3. Radikal karbon mengabstraksi atom $\\ce{H}$ dari $\\ce{HBr}$ meregenerasi $\\ce{Br^\\bullet}$.

### 3. Matriks Stereospesifisitas Adisi Alkena: Anti vs Sin

| Reagen & Tipe Adisi | Zat Antara (*Intermediet*) | Stereokimia Adisi | Hasil pada Alkena Cis ($Z$) | Hasil pada Alkena Trans ($E$) |
| :--- | :--- | :--- | :--- | :--- |
| **Halogenasi ($\\ce{Br2, Cl2}$ dalam $\\ce{CH2Cl2}$)** | Ion Halonium Siklik 3-anggota ($[\\ce{C2Br}]^+$) | **Anti murni** ($100\\%$ *backside attack*) | Campuran Rasemat $(\\pm)$ | **Senyawa Meso** |
| **Hidroborasi-Oksidasi ($1.\\ \\ce{BH3};\\ 2.\\ \\ce{H2O2/OH-}$)** | Keadaan transisi siklik 4-anggota serentak | **Sin murni** (Anti-Markovnikov) | Diastereomer spesifik | Diastereomer spesifik |
| **Dihidroksilasi Oksidatif ($\\ce{OsO4}$ atau $\\ce{KMnO4}$ dingin)** | Ester Osmat / Permanganat siklik | **Sin murni** (membentuk $1,2$-diol) | **Senyawa Meso** | Campuran Rasemat $(\\pm)$ |
| **Hidrogenasi Katalitik ($\\ce{H2, Pd/C}$)** | Permukaan kisi logam heterogen | **Sin murni** | Alkana tersubstitusi cis | Alkana tersubstitusi trans |

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN
> - **Efek Peroksida Hanya Berfungsi Sukses pada HBr!**
>   Jangan pernah menuliskan produk anti-Markovnikov radikal pada $\\ce{HCl}$ atau $\\ce{HI}$! Pada $\\ce{HCl}$, ikatan $\\ce{H-Cl}$ terlalu kuat ($431\\text{ kJ/mol}$) sehingga tahap abstraksi hidrogen bersifat endotermik tinggi. Pada $\\ce{HI}$, radikal iodin terlalu stabil dan lambat sehingga penyerangannya ke alkena bersifat endotermik. Hanya pada $\\ce{HBr}$ kedua tahap propagasi bersifat eksotermik.
> - **Adisi Sin pada Cincin Siklik Menghasilkan Substituen Trans Terhadap Gugus Lain!**
>   Pada hidroborasi-oksidasi $1$-metilsikloheksena, atom $\\ce{H}$ dan $-\\ce{OH}$ masuk secara *sin* dari muka yang sama. Karena atom $\\ce{H}$ masuk dari muka yang sama dengan $-\\ce{OH}$ pada C1, maka gugus metil pada C1 terdorong ke muka berlawanan. Hasilnya adalah **$trans$-2-metilsikloheksanol**, bukan cis!

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO
> Mnemonic Sakti Pemetaan Stereospesifisitas Alkena:
> - **CAR**: **C**is $+$ **A**nti $\\to$ **R**asemat
> - **TAM**: **T**rans $+$ **A**nti $\\to$ **M**eso
> - **CIS**: **C**is $+$ **S**in $\\to$ **M**eso (atau **C**is **I**s **S**in $\\to$ Meso)
> - **TRS**: **T**rans $+$ **S**in $\\to$ **R**asemat`,
      keyFormulas: [
        { name: 'Regiokimia Markovnikov', formula: '\\ce{R-CH=CH2 + HX -> R-CH(X)-CH3}' },
        { name: 'Adisi Anti Halogenasi', formula: '\\text{Alkena} + \\ce{Br2} \\xrightarrow{\\text{ion bromonium}} \\text{trans-1,2-dibromida (anti)}' },
        { name: 'Aturan CAR dan TAM', formula: '\\text{Cis + Anti} \\to \\text{Rasemat}; \\quad \\text{Trans + Anti} \\to \\text{Meso}' },
      ],
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_10['konsep-adisi-elektrofilik-alkena-markovnikov-stereokimia'],
    },
    {
      tag: 'konsep-kimia-karbonil-adisi-kondensasi-enolat',
      tags: ['reaksi-karbonil', 'adisi-nukleofilik', 'substitusi-nasil', 'kondensasi-aldol', 'kondensasi-claisen', 'anion-enolat'],
      title: 'Konsep Inti 4: Reaksi Kimia Karbonil, Adisi Nukleofilik, Substitusi Asil & Kimia Enolat',
      summary: 'Kepolaran gugus karbonil, adisi nukleofilik aldehid/keton, substitusi asil nukleofilik turunan asam, pembentukan enolat kinetik/termodinamik, dan kondensasi C-C Aldol & Claisen.',
      content: `Gugus karbonil ($\\ce{C=O}$) adalah jantung sintesis kimia organik modern. Polaritas ikatan yang kuat membuat karbon karbonil bermuatan parsial positif ($\\ce{C^{\\delta+}=O^{\\delta-}}$), siap diserang oleh berbagai nukleofil. Di sisi lain, proton pada atom karbon-$\\alpha$ bersifat asam, memungkinkan pembentukan **anion enolat**—senjata pamungkas kimiawan untuk merangkai ikatan karbon-karbon baru ($C-C$ bond formation).

### 1. Adisi Nukleofilik Aldehid & Keton vs Substitusi Asil
Nukleofil mendekati atom karbon karbonil $sp^2$ planar dari lintasan sudut Bürgi-Dunitz ($\sim 107^\\circ$):
- **Aldehid & Keton (Adisi Nukleofilik):**
  Tidak memiliki gugus pergi heteroatom yang stabil. Intermediet tetrahedral terprotonasi menghasilkan alkohol atau turunan adisi:
  - Reagen Grignard ($\\ce{RMgX}$): Formaldehida $\\to 1^\\circ$, Aldehida $\\to 2^\\circ$, Keton $\\to 3^\\circ$ alkohol.
  - Amina Primer ($\\ce{R-NH2}$): Menghasilkan **Imina** (basa Schiff, $\\ce{C=N-R}$).
  - Amina Sekunder ($\\ce{R2NH}$): Menghasilkan **Enamina** ($\\ce{C=C-NR2}$).
  - Alkohol ($\\ce{ROH}$, katalis asam): Menghasilkan **Asetal** (gugus pelindung karbonil terhadap basa).
- **Turunan Asam Karboksilat (Substitusi Asil Nukleofilik / Adisi-Eliminasi):**
  Memiliki gugus pergi ($Y$). Intermediet tetrahedral memulihkan ikatan rangkap $\\ce{C=O}$ dengan melepaskan $Y^-$:
$$\\text{Reaktivitas: } \\ce{R-CO-Cl} (\\text{asil klorida}) > (\\ce{RCO})_2\\ce{O} (\\text{anhidrida}) > \\ce{R-CO-OR'} (\\text{ester}) > \\ce{R-CO-NH2} (\\text{amida}) > \\ce{R-COO-}$$

### 2. Matriks Komparasi Enolat Kinetik vs Enolat Termodinamik
Ketika keton asimetris (seperti $2$-metilsikloheksanon) dideprotonasi, dapat terbentuk dua enolat yang berbeda:

| Parameter Reaksi | Anion Enolat Kinetik | Anion Enolat Termodinamik |
| :--- | :--- | :--- |
| **Posisi Ikatan Rangkap** | Kurang tersubstitusi (terbentuk dari $\\ce{H_\\alpha}$ kurang terhalang) | Lebih tersubstitusi (ikatan rangkap tetrasubstitusi lebih stabil) |
| **Karakter Basa yang Dipakai** | Basa kuat sangat meruap (*bulky*): **LDA** (Litium diisopropilamida) | Basa kuat berukuran relatif kecil: $\\ce{NaOEt}, \\ce{KOt-Bu}$ |
| **Suhu & Waktu Reaksi** | Suhu kriogenik ($-78^\\circ\\text{C}$), waktu reaksi sangat singkat | Suhu kamar ($25^\\circ\\text{C}$ s.d. hangat), waktu lama |
| **Pelarut Reaksi** | Polar aprotik murni (misal THF kering) | Polar protik (etanol, tert-butanol) |
| **Karakter Pengendalian** | Kecepatan deprotonasi paling kencang (ireversibel) | Kesetimbangan termodinamika reversibel |

### 3. Reaksi Kondensasi Karbonil Utama
1. **Kondensasi Aldol:**
   Enolat bertindak sebagai nukleofil menyerang molekul aldehid/keton lain membentuk $\\beta$-hidroksikarbonil. Pemanasan memicu dehidrasi via mekanisme **$E1cB$** menghasilkan enon $\\alpha,\\beta$-tak jenuh yang terkonjugasi sangat stabil.
2. **Kondensasi Claisen:**
   Enolat ester menyerang molekul ester lain menghasilkan $\\beta$-ketoester dengan pelepasan gugus alkoksida.
3. **Adisi Konjugat Michael ($1,4$-Addition):**
   Nukleofil enolat lunak (seperti ester malonat $[\\ce{\\bar{C}H(COOMe)2}]^-$) menyerang selektif pada atom **karbon-$\\beta$** dari sistem enon $\\alpha,\\beta$-tak jenuh.

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN
> - **Tahap Dehidrasi Aldol Menggunakan Mekanisme $E1cB$, Bukan E2!**
>   Gugus hidroksida ($\\ce{OH-}$) adalah gugus pergi yang buruk. Dalam kondisi basa, basa mengabstraksi proton-$\\alpha$ yang tersisa untuk menghasilkan karbanion enolat terstabilkan terlebih dahulu, baru kemudian mendorong lepasnya $\\ce{OH-}$ secara unimolekular ($E1cB$).
> - **Hindari Kondensasi Aldol Silang Acak Tanpa Rencana!**
>   Jika Anda mencampurkan dua aldehid berbeda yang sama-sama memiliki hidrogen-$\\alpha$, akan terbentuk campuran kompleks dari 4 produk aldol yang mustahil dipisahkan secara preparatif.

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO
> Trik Aldol Silang Terarah (Claisen-Schmidt): Selalu pilih satu komponen aldehid yang **TIDAK MEMILIKI hidrogen-$\\alpha$** (seperti benzaldehida $\\ce{C6H5CHO}$ atau formaldehida $\\ce{HCHO}$). Komponen ini murni hanya dapat bertindak sebagai elektrofil. Komponen kedua yang memiliki hidrogen-$\\alpha$ (seperti aseton) akan bertindak sebagai enolat tunggal, menghasilkan produk kondensasi tunggal berendemen tinggi!`,
      keyFormulas: [
        { name: 'Kondensasi Aldol Dehidrasi E1cB', formula: '\\ce{2 R-CH2-CHO ->[OH-] R-CH2-CH=C(R)-CHO + H2O}' },
        { name: 'Kondensasi Claisen Ester', formula: '\\ce{2 CH3COOEt ->[NaOEt] CH3-CO-CH2-COOEt + EtOH}' },
        { name: 'Kondisi Enolat Kinetik', formula: '\\text{LDA, THF, } -78^\\circ\\text{C}' },
      ],
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_10['konsep-kimia-karbonil-adisi-kondensasi-enolat'],
    },
    {
      tag: 'konsep-biomolekul-asam-amino-peptida-karbohidrat',
      tags: ['biomolekul', 'asam-amino', 'titik-isoelektrik-pi', 'ikatan-peptida', 'karbohidrat', 'mutarotasi'],
      title: 'Konsep Inti 5: Biomolekul, Struktur & Stereokimia Asam Amino, Peptida, Titik Isoelektrik & Karbohidrat',
      summary: 'Struktur zwitterion dan stereokimia L-asam amino, derivasi titik isoelektrik pI, planaritas resonansi ikatan peptida, proyeksi Haworth monosakarida, anomer dan mutarotasi.',
      content: `Biomolekul adalah perjumpaan agung antara kimia organik murni dan arsitektur kehidupan. Seluruh fungsi hayati dibangun oleh stereokimia polimer yang luar biasa presisi: dari asam amino kiral penyusun protein dengan titik isoelektrik yang sensitif terhadap pH darah, hingga heliks karbohidrat yang membungkus energi seluler.

### 1. Asam Amino, Struktur Zwitterion & Titik Isoelektrik ($pI$)
Asam amino pembangun protein alami adalah asam $\\alpha$-amino berkonfigurasi stereokimia **L** (gugus $-\\ce{NH2}$ di sebelah kiri proyeksi Fischer).
- **Struktur Zwitterion:**
  Dalam larutan air, asam amino mengalami transfer proton internal membentuk ion dipolar netral: gugus karboksil terdeprotonasi ($-\\ce{COO-}$, $pK_{a1} \\approx 2.0$) dan gugus amina terprotonasi ($-\\ce{NH3+}$, $pK_{a2} \\approx 9.5$).
- **Derivasi Titik Isoelektrik ($pI$):**
  Titik isoelektrik adalah pH larutan di mana konsentrasi spesies zwitterion bermuatan netto nol mencapai titik maksimum ($[\\ce{spesi bermuatan +}] = [\\ce{spesi bermuatan -}]$).

### 2. Matriks Penentuan Titik Isoelektrik Asam Amino

| Golongan Asam Amino | Contoh Asam Amino | Gugus Terionisasi Relevan | Rumus Menghitung $pI$ | Muatan Netto pada pH Darah ($7.40$) |
| :--- | :--- | :--- | :--- | :--- |
| **Netral Alifatik** | Alanin, Glisin, Valin, Leusin | $\\alpha\\ce{-COOH} (pK_{a1})$ dan $\\alpha\\ce{-NH3+} (pK_{a2})$ | $pI = \\frac{pK_{a1} + pK_{a2}}{2}$ | $\\approx 0$ (Zwitterion netral mendominasi) |
| **Asam (Dikarboksilat)** | Asam Aspartat, Asam Glutamat | $\\alpha\\ce{-COOH} (pK_{a1})$ dan $\\ce{R-COOH} (pK_{aR})$ | $pI = \\frac{pK_{a1} + pK_{aR}}{2}$ | **$-1$** (Monoanion, bermigrasi ke kutub positif/anoda) |
| **Basa (Poliamina)** | Lisin, Arginin, Histidin | $\\alpha\\ce{-NH3+} (pK_{a2})$ dan $\\ce{R-NH3+} (pK_{aR})$ | $pI = \\frac{pK_{a2} + pK_{aR}}{2}$ | **$+1$** (Kation, bermigrasi ke kutub negatif/katoda) |

### 3. Ikatan Peptida & Karakter Resonansi Planar
Ikatan peptida adalah ikatan amida kovalen yang menghubungkan unit asam amino:
$$\\ce{-C(=O)-NH- <-> -C(O^-)=N^+H-}$$
- **Karakter Ikatan Rangkap Dua Parsial $\\sim 40\\%$:**
  Delokalisasi pasangan elektron bebas atom nitrogen ke oksigen karbonil membuat ikatan $\\ce{C-N}$ amida memiliki penghalang rotasi yang tinggi ($\\sim 80\\text{ kJ/mol}$).
- **Konsekuensi Struktural:** Keenam atom pada unit peptida ($\ce{C_\\alpha1-C(=O)-N(H)-C_\\alpha2}$) berada pada satu bidang datar yang kaku (*rigid planar*). Konformasi **trans** lebih disukai secara termodinamika untuk menghindari tabrakan sterik rantai samping.

### 4. Kimia Karbohidrat: Anomer, Mutarotasi & Gula Pereduksi
- **Siklisasi Intramolekul Monosakarida:**
  Nukleofil $-\\ce{OH}$ pada C5 menyerang karbon karbonil C1 membentuk cincin piranosa hemiasetal 6-anggota. Karbon C1 menjadi stereopusat baru yang disebut **Karbon Anomerik**:
  - **Anomer $\\alpha$:** gugus $-\\ce{OH}$ anomerik mengarah ke bawah pada proyeksi Haworth (trans terhadap $-\\ce{CH2OH}$).
  - **Anomer $\\beta$:** gugus $-\\ce{OH}$ anomerik mengarah ke atas pada proyeksi Haworth (cis terhadap $-\\ce{CH2OH}$). Pada $\\beta\\text{-D-glukopiranosa}$, seluruh substituen besar menempati posisi **ekuatorial murni**, menjadikannya molekul paling stabil di alam!
- **Mutarotasi:** Perubahan rotasi optik larutan anomer murni secara perlahan hingga mencapai nilai kesetimbangan ($[\\alpha]_D = +52.7^\\circ$, terdiri dari $64\\% \\beta$ dan $36\\% \\alpha$) melalui pembukaan cincin hemiasetal reversibel.
- **Gula Pereduksi:** Memiliki gugus hemiasetal bebas pada karbon anomeriknya sehingga dapat membuka cincin mereduksi reagen Tollens ($\\ce{Ag+}$) dan Fehling ($\\ce{Cu^2+}$). Seluruh monosakarida dan disakarida maltosa/laktosa adalah gula pereduksi; sukrosa bukan gula pereduksi karena kedua karbon anomeriknya terkunci dalam ikatan glikosida.

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN
> - **Jangan Pernah Merata-ratakan Ketiga Nilai $pK_a$ untuk Menghitung $pI$!**
>   Pada asam amino poliprotik (seperti asam glutamat atau lisin), nilai $pI$ dihitung murni dari **dua nilai $pK_a$ yang tepat mengapit spesi netral**. Untuk asam amino asam: gunakan $pK_{a1}$ dan $pK_{aR}$. Untuk asam amino basa: gunakan $pK_{a2}$ dan $pK_{aR}$!
> - **Mutarotasi Bukanlah Perubahan Konfigurasi D Menjadi L!**
>   Konfigurasi D/L ditentukan oleh karbon kiral terbawah (C5 pada heksosa) yang tidak mengalami pemutusan ikatan saat mutarotasi. Mutarotasi murni merupakan interkonversi diastereomerik antara anomer $\\alpha$ dan $\\beta$ pada karbon anomerik C1.

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO
> Trik Elektroforesis Asam Amino:
> - Jika $\\text{pH} < pI$: molekul bermuatan positif $\\implies$ bermigrasi menuju Katoda ($-$).
> - Jika $\\text{pH} > pI$: molekul bermuatan negatif $\\implies$ bermigrasi menuju Anoda ($+$).
> - Jika $\\text{pH} = pI$: molekul bermuatan netto nol $\\implies$ diam tak bergerak di titik awal!`,
      keyFormulas: [
        { name: 'Titik Isoelektrik Asam Amino Netral', formula: 'pI = \\frac{pK_{a1} + pK_{a2}}{2}' },
        { name: 'Titik Isoelektrik Asam Amino Asam', formula: 'pI = \\frac{pK_{a1} + pK_{aR}}{2}' },
        { name: 'Titik Isoelektrik Asam Amino Basa', formula: 'pI = \\frac{pK_{a2} + pK_{aR}}{2}' },
      ],
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_10['konsep-biomolekul-asam-amino-peptida-karbohidrat'],
    },
    {
      tag: 'kinetika-enzim-michaelis-menten-inhibisi',
      tags: [
        'kinetika-enzim-michaelis-menten-inhibisi',
        'michaelis-menten',
        'lineweaver-burk',
        'inhibisi-enzim',
        'km-vmax',
        'kcat',
        'inhibisi-kompetitif',
        'inhibisi-unkompetitif',
        'inhibisi-nonkompetitif',
        'biokimia',
      ],
      title: 'Konsep Inti 6: Kinetika Enzim Michaelis-Menten & Mekanisme Inhibisi Lineweaver-Burk',
      summary:
        'Penurunan mekanika laju reaksi enzimatis model Michaelis-Menten (Briggs-Haldane steady state), makna fisik konstanta afinitas Km, turnover number kcat, batas difusi katalitik sempurna, serta diagnostik grafik plot timbal-balik ganda Lineweaver-Burk pada inhibisi reversibel kompetitif, unkompetitif, dan non-kompetitif.',
      content: `Enzim adalah biokatalisator paling efisien di alam semesta, mampu mempercepat laju reaksi biokimia hingga $10^{17}$ kali lipat. Namun kinerja enzim dibatasi oleh kapasitas saturasi sisi aktifnya dan frekuensi difusi fisik substrat dalam medium air. Memahami kinetika enzimatis model Michaelis-Menten dan membaca sidik jari grafik Lineweaver-Burk adalah materi wajib yang selalu muncul pada babak Final OSN dan International Chemistry Olympiad (IChO).

### 1. Skema Reaksi Enzimatis & Derivasi Keadaan Tunak (Steady-State Briggs-Haldane)
Model reaksi enzimatik satu substrat:
$$\\ce{E + S <=> [k_1][k_{-1}] ES ->[k_{cat}] E + P}$$
di mana $[E]_0 = [E] + [ES]$ adalah konsentrasi enzim total.
Berdasarkan **Aproksimasi Keadaan Tunak (*Steady-State*) Briggs-Haldane**, laju pembentukan kompleks $\\ce{ES}$ sama persis dengan laju penguraiannya ($\\frac{d[ES]}{dt} = 0$):
$$k_1 [E][S] = (k_{-1} + k_{cat})[ES]$$
Substitusikan konsentrasi enzim bebas $[E] = [E]_0 - [ES]$:
$$k_1 ([E]_0 - [ES])[S] = (k_{-1} + k_{cat})[ES]$$
$$k_1 [E]_0 [S] - k_1 [ES][S] = (k_{-1} + k_{cat})[ES]$$
$$[ES] \\left( \\frac{k_{-1} + k_{cat}}{k_1} + [S] \\right) = [E]_0 [S]$$
$$[ES] = \\frac{[E]_0 [S]}{K_m + [S]}$$
di mana **Konstanta Michaelis ($K_m$)** didefinisikan sebagai rasio laju pemutusan dibagi laju pembentukan:
$$K_m = \\frac{k_{-1} + k_{cat}}{k_1}$$

### 2. Persamaan Laju Awal Michaelis-Menten & Tiga Pilar Kinetika
Laju awal pembentukan produk ($v_0$) adalah:
$$v_0 = k_{cat}[ES] = \\frac{k_{cat}[E]_0 [S]}{K_m + [S]}$$
Ketika seluruh enzim berada dalam bentuk kompleks jenuh ($[ES] = [E]_0$), reaksi mencapai **Laju Maksimum Teoritis ($V_{\\max} = k_{cat}[E]_0$)**:
$$v_0 = \\frac{V_{\\max}[S]}{K_m + [S]}$$

**Tiga Parameter Kinetika Kunci:**
1. **Konstanta Michaelis ($K_m$):**
   Konsentrasi substrat saat $v_0 = \\frac{1}{2}V_{\\max}$. Nilai $K_m$ berbanding terbalik dengan afinitas enzim terhadap substrat (jika $k_{-1} \\gg k_{cat}$, $K_m \\approx K_d$). Semakin kecil $K_m$, semakin tinggi afinitas enzim terhadap substratnya.
2. **Angka Pergantian (*Turnover Number*, $k_{cat}$):**
   Jumlah molekul substrat yang diubah menjadi produk per detik oleh satu molekul enzim aktif dalam kondisi jenuh ($k_{cat} = V_{\\max}/[E]_0$, berdimensi $\\text{s}^{-1}$).
3. **Efisiensi Katalitik ($k_{cat} / K_m$):**
   Konstanta laju orde kedua reaksi enzim bebas dengan substrat bebas pada $[S] \\ll K_m$. Batas maksimum efisiensi katalitik dibatasi oleh laju difusi molekul dalam air (**batas difusi Smoluchowski**, $10^8 - 10^9\\text{ M}^{-1}\\text{s}^{-1}$). Enzim dengan $k_{cat}/K_m$ dalam rentang ini disebut *katalisator kinetik sempurna* (misal enzim asetilkolinesterase dan katalase).

### 3. Plot Lineweaver-Burk (Transformasi Dua Resiprokal)
Membalik persamaan Michaelis-Menten menghasilkan garis lurus linear ($y = mx + c$):
$$\\frac{1}{v_0} = \\left(\\frac{K_m}{V_{\\max}}\\right) \\frac{1}{[S]} + \\frac{1}{V_{\\max}}$$
Grafik linear $\\frac{1}{v_0}$ terhadap $\\frac{1}{[S]}$ memberikan parameter visual:
- **Kemiringan kurva (*Slope*):** $m = \\frac{K_m}{V_{\\max}}$
- **Titik potong sumbu-y (*y-intercept*):** $\\frac{1}{V_{\\max}}$
- **Titik potong sumbu-x (*x-intercept*):** $-\\frac{1}{K_m}$

### 4. Matriks Diagnostik Sidik Jari Inhibisi Enzim Reversibel

| Jenis Inhibisi | Tempat Pengikatan Inhibitor | Parameter Nyata Teramati ($V_{\\max}^{\\text{app}}$ & $K_m^{\\text{app}}$) | Karakteristik Plot Lineweaver-Burk | Respon Terhadap $[S] \\to \\infty$ |
| :--- | :--- | :--- | :--- | :--- |
| **Kompetitif** | Menyerupai substrat, bersaing mengikat sisi aktif enzim bebas ($\\ce{E + I <=> EI}$) | $V_{\\max}^{\\text{app}} = V_{\\max}$ (tetap)<br>$K_m^{\\text{app}} = \\alpha K_m > K_m$ (meningkat) | Garis berpotongan tepat di sumbu-y ($1/V_{\\max}$ identik). Kemiringan kurva bertambah tajam seiring bertambahnya $[I]$. | Inhibisi dapat diatasi sepenuhnya oleh kelebihan substrat |
| **Unkompetitif** | Hanya mengikat kompleks enzim-substrat ($\\ce{ES + I <=> ESI}$) | $V_{\\max}^{\\text{app}} = \\frac{V_{\\max}}{\\alpha'}$ (menurun)<br>$K_m^{\\text{app}} = \\frac{K_m}{\\alpha'}$ (menurun proporsional) | Sekelompok garis **sejajar sempurna** (*parallel lines*). Rasio kemiringan kurva $K_m/V_{\\max}$ bernilai tetap konstan! | Tidak dapat diatasi oleh kelebihan substrat |
| **Non-Kompetitif Murni** | Mengikat sisi alosterik dengan afinitas sama pada $\\ce{E}$ bebas dan $\\ce{ES}$ ($\\alpha = \\alpha'$) | $V_{\\max}^{\\text{app}} = \\frac{V_{\\max}}{\\alpha}$ (menurun)<br>$K_m^{\\text{app}} = K_m$ (tetap konstan) | Garis berpotongan tepat di sumbu-x pada nilai $-1/K_m$. | Menurunkan kapasitas katalitik enzim secara permanen |
| **Campuran (*Mixed*)** | Mengikat sisi alosterik dengan afinitas berbeda antara $\\ce{E}$ bebas dan $\\ce{ES}$ ($\\alpha \\ne \\alpha'$) | $V_{\\max}^{\\text{app}} = \\frac{V_{\\max}}{\\alpha'}$ (menurun)<br>$K_m^{\\text{app}} = \\frac{\\alpha}{\\alpha'} K_m$ (berubah) | Garis berpotongan di kuadran II (jika $\\alpha > \\alpha'$) atau kuadran III (jika $\\alpha < \\alpha'$). | Hambatan parsial |

Faktor pengali pergeseran: $\\alpha = 1 + \\frac{[I]}{K_i}$ dan $\\alpha' = 1 + \\frac{[I]}{K_i'}$.

> [!WARNING]
> ### ⚠️ Jebakan Konseptual OSN
> - **Jangan Mengira Inhibitor Kompetitif Menurunkan Nilai $V_{\\max}$!**
>   Pada inhibisi kompetitif, afinitas substrat tampak menurun ($K_m^{\\text{app}}$ naik), namun kapasitas katalitik intrinsik enzim tidak terganggu. Jika konsentrasi substrat dinaikkan setinggi mungkin ($[S] \\to \\infty$), molekul substrat akan menyingkirkan molekul inhibitor dari sisi aktif, sehingga laju maksimum teoritis $V_{\\max}$ tetap tercapai sempurna!
> - **Nilai $K_m$ yang Besar Menunjukkan Afinitas yang Rendah, Bukan Tinggi!**
>   Konstanta Michaelis $K_m$ berdimensi konsentrasi ($\text{M}$). Enzim yang sangat rakus dan memiliki afinitas tinggi hanya membutuhkan konsentrasi substrat yang sangat kecil untuk mencapai separuh $V_{\\max}$ (nilai $K_m$ sangat kecil).

> [!TIP]
> ### 💡 Strategi Juara OSN / IChO
> Trik Diagnosis Instan Lineweaver-Burk pada Lembar Soal:
> 1. Periksa titik potong sumbu-y: Jika seluruh garis berpotongan di satu titik di sumbu-y $\\implies$ **Inhibisi Kompetitif**.
> 2. Periksa kemiringan garis: Jika seluruh garis sejajar sempurna $\\implies$ **Inhibisi Unkompetitif**.
> 3. Periksa titik potong sumbu-x: Jika seluruh garis berpotongan di satu titik di sumbu-x $\\implies$ **Inhibisi Non-Kompetitif Murni**.`,
      keyFormulas: [
        { name: 'Persamaan Laju Michaelis-Menten', formula: 'v_0 = \\frac{V_{\\max}[S]}{K_m + [S]}' },
        { name: 'Plot Lineweaver-Burk', formula: '\\frac{1}{v_0} = \\left(\\frac{K_m}{V_{\\max}}\\right)\\frac{1}{[S]} + \\frac{1}{V_{\\max}}' },
        { name: 'Turnover Number Enzim', formula: 'k_{cat} = \\frac{V_{\\max}}{[E]_0}' },
        { name: 'Efisiensi Katalitik Enzim', formula: '\\text{Efisiensi} = \\frac{k_{cat}}{K_m}' },
      ],
      checkpointQuizzes: CHECKPOINTS_TOPIC_OSN_10['kinetika-enzim-michaelis-menten-inhibisi'],
    },
  ],
  worked_examples: [
    {
      tag: 'soal-inversi-sn2-walden',
      tags: ['soal-osn', 'stereokimia', 'aturan-cip', 'substitusi-nukleofilik', 'inversi-walden', 'sn1-sn2'],
      title: 'Contoh Soal OSN 1: Stereokimia Inversi Walden Reaksi SN2 pada (2R)-2-Bromobutana',
      summary: 'Analisis kinetika dan stereospesifisitas pembuktian inversi konfigurasi Walden reaksi (2R)-2-bromobutana dengan natrium metoksida dalam DMF.',
      content: `### Masalah:
Senyawa enantiomer murni $(2R)\\text{-2-bromobutana}$ direaksikan dengan larutan natrium metoksida ($\\ce{NaOCH3}$) dalam pelarut polar aprotik dimetilformamida (DMF) pada suhu kamar menghasilkan produk substitusi utama senyawa eter $\\ce{C5H12O}$.

**Pertanyaan:**
1. Berdasarkan sifat substrat sekunder, kekuatan nukleofil, dan kepolaran pelarut, tentukan dan jelaskan apakah reaksi berlangsung dominan melalui mekanisme $S_N1$ atau $S_N2$!
2. Gambarkan struktur keadaan transisi (*transition state*) yang terbentuk dan jelaskan arah geometris serangan nukleofil metoksida terhadap ikatan $\\ce{C-Br}$!
3. Tentukan urutan prioritas Cahn-Ingold-Prelog (CIP) untuk reaktan $(2R)\\text{-2-bromobutana}$ dan produk eter $2$-metoksibutana!
4. Tentukan konfigurasi stereokimia absolut ($R$ atau $S$) dari produk $2$-metoksibutana yang dihasilkan, dan jelaskan fenomena stereokimia yang mendasarinya!

---

### Solusi Sistematis:

**Langkah 1: [Analisis Faktor Penentu Mekanisme Reaksi]**
- Substrat: $2$-bromobutana adalah alkil halida sekunder ($2^\\circ$). Substrat sekunder memiliki persaingan terbuka antara $S_N1, S_N2, E1,$ dan $E2$.
- Nukleofil: Ion metoksida ($\\ce{CH3O-}$) adalah nukleofil bermuatan kuat (*strong nucleophile*).
- Pelarut: Dimetilformamida ($\text{DMF}$) adalah pelarut **polar aprotik**. Pelarut aprotik tidak membentuk ikatan hidrogen dengan ion $\\ce{CH3O-}$, sehingga anion metoksida berada dalam kondisi "telanjang" (*naked anion*) dengan energi bebas dan reaktivitas nukleofilik maksimal.
- Karena nukleofil kuat berada dalam pelarut polar aprotik pada suhu kamar, laju penyerangan bimolekular langsung jauh melampaui laju ionisasi termal substrat. Reaksi berlangsung dominan melalui mekanisme **$S_N2$**!

**Langkah 2: [Geometri Keadaan Transisi & Penyerangan Backside]**
1. Nukleofil $\\ce{CH3O-}$ mendekati atom karbon kiral C2 dari arah belakang (*backside attack*), tepat pada sudut dihedral $180^\\circ$ berlawanan dengan gugus pergi bromida ($\\ce{Br-}$).
2. Penyerangan ini mengalirkan densitas elektron ke dalam orbital antibonding $\\sigma^*_{\\ce{C-Br}}$.
3. Keadaan transisi pentakoordinasi yang terbentuk bergeometri trigonal bipiramidal:
$$\\ce{[CH3O^{\\delta-} \\cdots C(CH3)(H)(CH2CH3) \\cdots Br^{\\delta-}]^\\ddagger}$$
Tiga gugus non-bereaksi ($-\\ce{H}, -\\ce{CH3}, -\\ce{CH2CH3}$) berada pada bidang ekuatorial datar planar, sementara nukleofil $\\ce{CH3O-}$ dan gugus pergi $\\ce{Br-}$ menempati posisi aksial di kedua sisi yang berlawanan.

**Langkah 3: [Penentuan Urutan Prioritas CIP]**
1. **Pada Reaktan ($2$-bromobutana):**
   - Prioritas 1: $-\\ce{Br}$ (nomor atom $Z = 35$)
   - Prioritas 2: $-\\ce{CH2CH3}$ (karbon mengikat $\\ce{C, H, H}$)
   - Prioritas 3: $-\\ce{CH3}$ (karbon mengikat $\\ce{H, H, H}$)
   - Prioritas 4: $-\\ce{H}$ (nomor atom $Z = 1$)
   Dengan konfigurasi awal diketahui adalah **$(2R)$**.
2. **Pada Produk Substitusi ($2$-metoksibutana):**
   Gugus $-\\ce{Br}$ telah digantikan oleh gugus metoksi $-\\ce{OCH3}$:
   - Prioritas 1: $-\\ce{OCH3}$ (atom terikat langsung adalah oksigen, $Z = 8$)
   - Prioritas 2: $-\\ce{CH2CH3}$ (karbon etil, $Z = 6$, mengikat $\\ce{C, H, H}$)
   - Prioritas 3: $-\\ce{CH3}$ (karbon metil, $Z = 6$, mengikat $\\ce{H, H, H}$)
   - Prioritas 4: $-\\ce{H}$ (hidrogen, $Z = 1$)

**Langkah 4: [Konfigurasi Absolut Produk & Inversi Walden]**
- Perhatikan bahwa gugus pergi ($\\ce{-Br}$) berprioritas 1 digantikan oleh nukleofil baru ($\\ce{-OCH3}$) yang juga berprioritas 1. Prioritas relatif ketiga gugus lainnya ($-\\ce{Et} > -\\ce{Me} > -\\ce{H}$) tidak mengalami perubahan urutan.
- Karena nukleofil masuk dari arah $180^\\circ$ berlawanan dari posisi asal $\\ce{-Br}$, terjadi pembalikan spasial susunan tetrahedral tiga dimensi secara stereospesifik $100\\%$ (**Inversi Walden**).
- Akibat inversi geometris murni ini, konfigurasi absolut stereopusat C2 terbalik dari $(R)$ menjadi **$(S)$**:
$$(2R)\\text{-2-bromobutana} \\xrightarrow{\\ce{NaOCH3, DMF}} (2S)\\text{-2-metoksibutana}$$

---

**Kesimpulan Evaluator Juri:**
Kombinasi substrat sekunder, nukleofil kuat metoksida, dan pelarut polar aprotik DMF memicu mekanisme serentak $S_N2$ murni dengan serangan *backside*. Berdasarkan urutan prioritas CIP, terjadi pembalikan konfigurasi ruang secara stereospesifik $100\\%$ (Inversi Walden) menghasilkan **$(2S)\\text{-2-metoksibutana}$**.`,
      checkpointQuizzes: undefined,
    },
    {
      tag: 'soal-eliminasi-e2-sikloheksana-anti-periplanar',
      tags: ['soal-osn', 'reaksi-eliminasi', 'e2', 'anti-periplanar', 'aturan-zaitsev', 'produk-hofmann'],
      title: 'Contoh Soal OSN 2: Stereoelektronik Eliminasi E2 pada Turunan Klorosikloheksana Mentil vs Neomentil',
      summary: 'Analisis komparatif stereoelektronik trans-diaksial konformasi kursi eliminasi E2 mentil klorida versus neomentil klorida.',
      content: `### Masalah:
Mentil klorida dan Neomentil klorida adalah sepasang diastereomer dari senyawa turunan sikloheksana $1$-isopropil-$4$-metil-$2$-klorosikloheksana.
- Pada **Mentil klorida**: ketiga substituen pada cincin berada dalam hubungan stereokimia $(1R, 2S, 5R)$, di mana gugus isopropil pada C1, klorin pada C2, dan metil pada C5 semuanya menempati orientasi *ekuatorial* pada konformer kursi yang paling stabil.
- Pada **Neomentil klorida**: merupakan epimer pada C2 dengan konfigurasi $(1R, 2R, 5R)$, di mana gugus isopropil pada C1 dan metil pada C5 menempati orientasi *ekuatorial*, sedangkan atom klorin pada C2 menempati orientasi *aksial*.

Kedua senyawa direaksikan secara terpisah dengan basa kuat natrium etoksida dalam etanol ($\\ce{NaOEt/EtOH}$) pada kondisi pemanasan yang sama.

**Pertanyaan:**
1. Jelaskan persyaratan stereoelektronik orbital yang wajib dipenuhi agar reaksi eliminasi $E2$ pada cincin sikloheksana dapat berlangsung!
2. Gambarkan konformasi kursi yang aktif bereaksi untuk Neomentil klorida, tentukan atom hidrogen-$\\beta$ mana yang memenuhi syarat eliminasi, dan tentukan produk utama beserta aturan regiokimianya!
3. Gambarkan konformasi kursi yang harus diadopsi oleh Mentil klorida agar dapat bereaksi, tentukan atom hidrogen-$\\beta$ yang dapat dieliminasi, dan tentukan struktur produk alkena yang dihasilkan!
4. Jelaskan mengapa laju reaksi eliminasi Neomentil klorida terukur sekitar $200$ kali lebih cepat daripada Mentil klorida ($k_{\\text{neomentil}} \\approx 200 \\times k_{\\text{mentil}}$)!

---

### Solusi Sistematis:

**Langkah 1: [Persyaratan Stereoelektronik E2 pada Sikloheksana]**
Reaksi eliminasi bimolekular $E2$ membutuhkan penataan orbital **anti-periplanar** (sudut dihedral $\\theta = 180^\\circ$) antara ikatan $\\ce{C_\\alpha-Cl}$ dan $\\ce{C_\\beta-H}$.
Pada cincin sikloheksana berbentuk kursi, syarat geometri anti-periplanar ini hanya dapat tercapai jika **atom klorin ($\\ce{-Cl}$) dan atom hidrogen-$\\beta$ ($\\ce{-H}$) berada pada posisi trans-diaksial ($a, a$)**. Gugus klorin pada posisi ekuatorial sama sekali tidak memiliki pasangan $\\ce{H_\\beta}$ yang anti-periplanar ($180^\\circ$) dan tidak dapat mengalami eliminasi $E2$.

**Langkah 2: [Analisis Eliminasi pada Neomentil Klorida]**
1. Pada Neomentil klorida, konformer kursi paling stabil telah menempatkan atom klorin C2 pada posisi **aksial** (karena gugus meruap isopropil C1 dan metil C5 berada pada posisi ekuatorial yang sangat disukai).
2. Terdapat dua atom hidrogen-$\\beta$ bertetangga yang berada pada posisi aksial (trans-diaksial terhadap klorin):
   - Atom $\\ce{H}$ aksial pada C1 (mengikat gugus isopropil).
   - Atom $\\ce{H}$ aksial pada C3.
3. Eliminasi atom $\\ce{H}$ aksial dari C1 menghasilkan alkena trisubstitusi (ikatan rangkap antara C1 dan C2, yaitu **$2$-mentena**). Menurut **Aturan Zaitsev**, alkena trisubstitusi ini jauh lebih stabil secara termodinamika daripada alkena disubstitusi (antara C2 dan C3, yaitu $3$-mentena).
4. Produk mayoritas Neomentil klorida adalah **$2$-mentena ($91\\%$, produk Zaitsev)** dan produk minoritas adalah $3$-mentena ($9\\%$).

**Langkah 3: [Analisis Eliminasi pada Mentil Klorida]**
1. Pada konformer paling stabil Mentil klorida, atom klorin C2 berada pada posisi **ekuatorial**. Konformer ini **tidak dapat bereaksi**!
2. Agar dapat bereaksi, molekul harus melakukan pembalikan cincin (*chair flip*) ke konformer berenergi tinggi di mana atom klorin menjadi **aksial**. Konsekuensinya, gugus isopropil C1 dan metil C5 keduanya terpaksa terdorong ke posisi aksial yang mengalami tolakan sterik $1,3$-diaksial sangat hebat.
3. Pada konformer aktif berenergi tinggi ini, periksa posisi hidrogen-$\\beta$ aksial:
   - Pada C1: gugus isopropil berada pada posisi aksial, sehingga hidrogen pada C1 berada pada posisi **ekuatorial**! Maka hidrogen pada C1 **tidak dapat dieliminasi** secara anti-periplanar terhadap klorin aksial.
   - Pada C3: hanya terdapat satu hidrogen aksial yang tersedia (posisi C3 memiliki satu $\\ce{H}$ aksial dan satu $\\ce{H}$ ekuatorial).
4. Karena hanya proton aksial pada C3 yang anti-periplanar terhadap klorin C2, eliminasi hanya dapat berlangsung ke arah C3, menghasilkan secara eksklusif **$3$-mentena ($100\\%$, produk anti-Zaitsev / Hofmann)**! Produk Zaitsev $2$-mentena sama sekali tidak dapat terbentuk karena ketiadaan geometri trans-diaksial pada C1.

**Langkah 4: [Rasionalisasi Perbedaan Laju Kinetika ($200\\times$)]**
- Pada Neomentil klorida, konformer kursi mayoritas yang stabil ($> 99.9\\%$) sudah memiliki klorin pada posisi aksial siap bereaksi $\\implies$ populasi molekul aktif sangat tinggi dan energi aktivasi total rendah.
- Pada Mentil klorida, populasi molekul yang berada dalam konformer aktif aksial sangat kecil ($< 0.1\\%$) karena penalti energi tolakan sterik yang besar saat membalik cincin. Sesuai prinsip Curtin-Hammett, energi aktivasi keseluruhan menjadi jauh lebih tinggi.
- Oleh karena itu, Neomentil klorida bereaksi sekitar **$200$ kali lebih cepat** daripada Mentil klorida.

---

**Kesimpulan Evaluator Juri:**
Persyaratan stereoelektronik mutlak trans-diaksial ($a, a$) mengendalikan regiokimia dan kinetika: Neomentil klorida bereaksi cepat menghasilkan produk Zaitsev **$2$-mentena ($91\\%$)**, sedangkan Mentil klorida harus membalik cincin ke konformer minoritas dan hanya dapat mengeliminasi ke arah C3 menghasilkan produk anti-Zaitsev **$3$-mentena ($100\\%$)** dengan laju $200\\times$ lebih lambat.`,
      checkpointQuizzes: undefined,
    },
    {
      tag: 'soal-adisi-bromin-stereospesifik-alkena',
      tags: ['soal-osn', 'adisi-elektrofilik', 'stereospesifisitas', 'ion-bromonium', 'senyawa-meso', 'enantiomer'],
      title: 'Contoh Soal OSN 3: Stereospesifisitas Adisi Anti Bromin pada (E)-2-Butena vs (Z)-2-Butena',
      summary: 'Membuktikan secara stereokimia 3D bahwa adisi anti bromin pada (E)-2-butena menghasilkan senyawa meso, sedangkan pada (Z)-2-butena menghasilkan rasemat enantiomer.',
      content: `### Masalah:
Reaksi halogenasi adisi bromin molekuler ($\\ce{Br2}$) dalam pelarut inert diklorometana ($\\ce{CH2Cl2}$) pada alkena terbukti berlangsung secara stereospesifik anti murni melalui zat antara ion bromonium siklik $3$-anggota.

Dua tabung reaksi masing-masing diisi dengan isomer alkena murni:
- Tabung A: $(E)\\text{-2-butena}$ (atau *trans*-2-butena)
- Tabung B: $(Z)\\text{-2-butena}$ (atau *cis*-2-butena)

Masing-masing tabung direaksikan dengan larutan bromin tetes demi tetes hingga warna coklat kemerahan tepat hilang.

**Pertanyaan:**
1. Gambarkan mekanisme pembentukan ion bromonium siklik pada $(E)\\text{-2-butena}$ dan tunjukkan bagaimana ion bromida ($\\ce{Br-}$) menyerang zat antara tersebut!
2. Gambarkan proyeksi Fischer dari produk yang terbentuk pada Tabung A, tentukan konfigurasi stereokimia absolut ($R/S$) pada kedua pusat kiralitas, dan jelaskan apakah produk tersebut bersifat optis aktif atau optis inaktif!
3. Gambarkan proyeksi Fischer dari produk-produk yang terbentuk pada Tabung B, tentukan konfigurasi absolutnya, dan jelaskan sifat aktivitas optiknya!
4. Berikan kesimpulan umum hubungan stereokimia stereospesifik antara geometri alkena awal ($E/Z$) dengan konfigurasi produk akhir ($meso$ vs rasemat) pada adisi anti!

---

### Solusi Sistematis:

**Langkah 1: [Mekanisme Reaksi & Pembukaan Ion Bromonium]**
1. Awan elektron $\\pi$ alkena menyerang molekul $\\ce{Br-Br}$, melepaskan ion $\\ce{Br-}$. Pasangan elektron bebas pada atom bromin terikat kembali secara serentak ke atom karbon kedua membentuk **ion bromonium siklik tiga-anggota** ($[\\ce{C2Br}]^+$).
2. Ion bromonium memiliki cincin bertegangan tinggi dengan muatan parsial positif pada atom C2 dan C3.
3. Nukleofil $\\ce{Br-}$ yang lepas kemudian menyerang salah satu atom karbon (C2 atau C3) dari arah belakang (*backside attack*, berlawanan $180^\\circ$ terhadap jembatan cincin bromonium).

**Langkah 2: [Analisis Stereokimia Tabung A: (E)-2-Butena]**
Pada $(E)\\text{-2-butena}$, kedua gugus metil berada pada sisi yang berseberangan (*trans*):
1. Pembentukan ion bromonium dapat terjadi dari muka atas atau muka bawah dengan geometri simetris.
2. Serangan anti oleh $\\ce{Br-}$ pada C2 menghasilkan konfigurasi $(2R, 3S)\\text{-2,3-dibromobutana}$; sedangkan serangan pada C3 menghasilkan konfigurasi $(2S, 3R)\\text{-2,3-dibromobutana}$.
3. Konversi ke Proyeksi Fischer:
   Letakkan rantai utama vertikal dengan atom C1 di atas dan C4 di bawah ($\\ce{CH3-C2(H)(Br)-C3(H)(Br)-CH3}$):
   - Pada C2: $-\\ce{Br}$ di kanan, $-\\ce{H}$ di kiri (konfigurasi $2R$).
   - Pada C3: $-\\ce{Br}$ di kanan, $-\\ce{H}$ di kiri (konfigurasi $3S$).
4. Perhatikan bahwa molekul memiliki **bidang cermin simetri horizontal ($\\sigma$)** yang membelah ikatan C2-C3 menjadi dua paruh yang identik sempurna!
5. Molekul $(2R, 3S)$ identik dengan $(2S, 3R)$ melalui rotasi $180^\\circ$ pada bidang. Oleh karena itu, produk reaksi Tabung A adalah **senyawa meso murni (*meso*-2,3-dibromobutana)** yang bersifat **optis inaktif** ($[\\alpha] = 0^\\circ$).

**Langkah 3: [Analisis Stereokimia Tabung B: (Z)-2-Butena]**
Pada $(Z)\\text{-2-butena}$, kedua gugus metil berada pada sisi yang sama (*cis*):
1. Serangan ion $\\ce{Br-}$ dari arah belakang pada ion bromonium yang terbentuk dari $(Z)\\text{-2-butena}$ memiliki probabilitas $50\\% : 50\\%$ pada C2 dan C3:
   - Serangan pada C2 menghasilkan enantiomer $(2R, 3R)\\text{-2,3-dibromobutana}$.
   - Serangan pada C3 menghasilkan enantiomer $(2S, 3S)\\text{-2,3-dibromobutana}$.
2. Kedua molekul ini adalah sepasang bayangan cermin non-superimposabel (enantiomer) tanpa elemen simetri bidang cermin $\\sigma$ maupun titik pusat inversi $i$.
3. Karena probabilitas serangan pada C2 dan C3 identik secara statistik, terbentuk campuran ekuimolar $1 : 1$ dari sepasang enantiomer tersebut, yaitu **campuran rasemat $(\\pm)\\text{-2,3-dibromobutana}$** yang bersifat **optis inaktif melalui kompensasi eksternal**.

**Langkah 4: [Matriks Aturan Stereospesifisitas Adisi Alkena]**
Hubungan keteraturan stereospesifik adisi elektrofilik:
- Alkena **trans ($E$)** $+$ Adisi **Anti** (seperti $\\ce{Br2}$) $\\implies$ Produk **MESO** (Aturan **TAM**)
- Alkena **cis ($Z$)** $+$ Adisi **Anti** (seperti $\\ce{Br2}$) $\\implies$ Produk **RASEMAT $(\\pm)$** (Aturan **CAR**)
*(Sebaliknya pada adisi Sin seperti dihidroksilasi $\\ce{OsO4}$: cis $\\to$ meso, trans $\\to$ rasemat).*

---

**Kesimpulan Evaluator Juri:**
Adisi bromin terbukti berlangsung stereospesifik anti murni $100\\%$ via intermediet ion bromonium siklik:
- $(E)\\text{-2-butena}$ menghasilkan **senyawa *meso*-2,3-dibromobutana** (optis inaktif internal).
- $(Z)\\text{-2-butena}$ menghasilkan **campuran rasemat $(\\pm)\\text{-2,3-dibromobutana}$** (pasangan enantiomer $2R,3R$ dan $2S,3S$).`,
      checkpointQuizzes: undefined,
    },
    {
      tag: 'soal-sintesis-organik-kondensasi-aldol-silang',
      tags: ['soal-osn', 'reaksi-karbonil', 'kondensasi-aldol', 'adisi-michael', 'anion-enolat', 'sintesis-organik'],
      title: 'Contoh Soal OSN 4: Regioselektifitas Sintesis Senyawa Enon via Kondensasi Aldol Silang & Adisi Michael',
      summary: 'Perencanaan sintesis selektif benzalaseton melalui kondensasi aldol silang Claisen-Schmidt serta mekanisme reaksi adisi Michael konjugat.',
      content: `### Masalah:
Senyawa $\\alpha,\\beta$-tak jenuh terkonjugasi $4$-fenil-$3$-buten-$2$-on (**Benzalaseton**, $\\ce{C10H10O}$) adalah zat antara penting dalam industri wewangian dan sintesis senyawa farmasi. Senyawa ini disintesis melalui reaksi kondensasi aldol silang (*Claisen-Schmidt condensation*) antara benzaldehida ($\\ce{C6H5CHO}$) dan aseton ($\\ce{CH3COCH3}$) dengan keberadaan katalis basa natrium hidroksida encer ($\\ce{NaOH}$).

**Pertanyaan:**
1. Mengapa reaksi kondensasi aldol silang antara benzaldehida dan aseton dapat menghasilkan produk tunggal dengan rendemen tinggi tanpa terbentuk campuran kacau dari empat produk aldol yang berbeda?
2. Tuliskan mekanisme reaksi pembentukan benzalaseton tahap demi tahap, mulai dari pembentukan enolat, adisi nukleofilik, hingga tahap dehidrasi $E1cB$!
3. Jelaskan stereokimia ikatan rangkap dua alkena yang terbentuk pada produk benzalaseton (apakah isomer $(E)$ atau $(Z)$) dan berikan dasar kestabilannya!
4. Jika produk benzalaseton yang terbentuk direaksikan lebih lanjut dengan dimetil malonat $\\ce{CH2(COOCH3)2}$ dengan keberadaan katalis natrium metoksida ($\\ce{NaOCH3}$), reaksi adisi apakah yang terjadi? Tuliskan struktur produk adisi tersebut!

---

### Solusi Sistematis:

**Langkah 1: [Rasionalisasi Selektivitas Kondensasi Aldol Silang]**
Pada kondensasi aldol silang acak antara dua senyawa karbonil berbeda, umumnya terbentuk campuran kompleks dari 4 produk aldol. Namun pasangan benzaldehida dan aseton sangat selektif karena:
1. **Benzaldehida tidak memiliki atom hidrogen-$\\alpha$ ($\\ce{H_\\alpha}$):** Benzaldehida tidak dapat dideprotonasi oleh basa untuk membentuk anion enolat, sehingga berperan murni sebagai **akseptor elektrofilik**.
2. **Aseton memiliki hidrogen-$\\alpha$:** Aseton bertindak sebagai **donor nukleofilik** (enolat).
3. Gugus karbonil aldehid pada benzaldehida jauh lebih elektrofilik dan kurang terhalang sterik dibandingkan gugus karbonil keton pada aseton. Akibatnya, anion enolat aseton bereaksi jauh lebih cepat menyerang benzaldehida daripada menyerang molekul aseton lain (swakondensasi aseton tertekan).
4. Penambahan aseton dalam jumlah sedikit berlebih menjamin konversi benzaldehida berlangsung kuantitatif menjadi benzalaseton.

**Langkah 2: [Mekanisme Reaksi Bertahap]**
1. **Pembentukan Anion Enolat Aseton:**
   Ion hidroksida mengambil proton-$\\alpha$ dari aseton:
$$\\ce{CH3-CO-CH3 + OH- <=> [CH3-CO-\\bar{C}H2 <-> CH3-C(O^-)=CH2] + H2O}$$
2. **Serangan Nukleofilik pada Benzaldehida:**
   Anion enolat menyerang karbon karbonil elektrofilik benzaldehida membentuk ion alkoksida:
$$\\ce{C6H5-CHO + CH3-CO-\\bar{C}H2 -> C6H5-CH(O^-)-CH2-CO-CH3}$$
3. **Protonasi Membentuk Senyawa $\\beta$-Hidroksiketon (Aldol):**
$$\\ce{C6H5-CH(O^-)-CH2-CO-CH3 + H2O <=> C6H5-CH(OH)-CH2-CO-CH3 + OH-}$$
4. **Dehidrasi via Mekanisme $E1cB$:**
   Basa mengambil proton-$\\alpha$ sisa yang bersifat asam membentuk zat antara karbanion enolat, diikuti oleh pelepasan gugus pergi buruk ion hidroksida ($\\ce{OH-}$):
$$\\ce{C6H5-CH(OH)-\\bar{C}H-CO-CH3 -> C6H5-CH=CH-CO-CH3 + OH-}$$
Eliminasi mudah terjadi pada suhu kamar karena produk alkena membentuk sistem konjugasi $\\pi$ yang sangat ekstensif antara cincin aromatik fenil, ikatan rangkap $\\ce{C=C}$, dan gugus karbonil $\\ce{C=O}$.

**Langkah 3: [Stereokimia Isomer (E) vs (Z)]**
Produk yang terbentuk adalah **$(E)\\text{-4-fenil-3-buten-2-on}$ ($trans$-benzalaseton)** secara stereoselektif $> 99\\%$.
- Alasan Kestabilan: Pada isomer $(E)$, cincin fenil besar dan gugus asetil $-\\ce{COCH3}$ berada pada sisi yang berlawanan dari ikatan rangkap, meminimalkan tolakan sterik antar-gugus dan memaksimalkan koplanaritas sistem terkonjugasi untuk delokalisasi resonansi optimal.

**Langkah 4: [Reaksi Lanjut: Adisi Konjugat Michael]**
Ketika benzalaseton (akseptor Michael $\\alpha,\\beta$-tak jenuh) direaksikan dengan dimetil malonat (donor Michael):
1. Basa metoksida mendekarboksilasi dimetil malonat menghasilkan anion karbanion malonat terstabilkan resonansi: $[\\ce{\\bar{C}H(COOCH3)2}]^-$.
2. Anion enolat lunak ini menyerang secara selektif pada **karbon-$\\beta$** benzalaseton (adisi konjugat $1,4$), bukan pada karbon karbonil langsung (adisi $1,2$):
$$\\ce{C6H5-CH=CH-CO-CH3 + [\\bar{C}H(COOCH3)2]- -> C6H5-CH(CH(COOCH3)2)-CH2-CO-CH3}$$
Produk yang dihasilkan adalah senyawa $1,5$-dikarbonil: **Metil 2-(3-okso-1-fenilbutil)malonat**.

---

**Kesimpulan Evaluator Juri:**
Kondensasi Claisen-Schmidt berlangsung terarah karena benzaldehida bertindak eksklusif sebagai elektrofil tanpa $\\ce{H_\\alpha}$. Dehidrasi $E1cB$ menghasilkan isomer **$(E)\\text{-benzalaseton}$** yang terkonjugasi penuh, yang selanjutnya dapat bertindak sebagai akseptor Michael pada reaksi adisi konjugat $1,4$ dengan nukleofil lunak.`,
      checkpointQuizzes: undefined,
    },
    {
      tag: 'soal-titrasi-asam-amino-titik-isoelektrik',
      tags: ['soal-osn', 'biomolekul', 'asam-amino', 'titik-isoelektrik-pi', 'kurva-titrasi', 'spesiasi-zwitterion'],
      title: 'Contoh Soal OSN 5: Analisis Kurva Titrasi Poliprotik Asam Glutamat, Fraksi Spesiasi & Titik Isoelektrik (pI)',
      summary: 'Analisis mikroskopis 4 spesies ionik asam amino asam glutamat, penurunan nilai pI eksak, serta perhitungan fraksi distribusi zwitterion pada pH darah.',
      content: `### Masalah:
Asam L-glutamat (suatu asam amino polar asam bermassa molar $147.13\\text{ g/mol}$) memiliki tiga gugus fungsi ionik yang dapat terionisasi. Pada larutan asam kuat ($\text{pH} < 1$), asam glutamat berada dalam bentuk kation terprotonasi penuh $\\ce{H3A+}$.
Data tetapan disosiasi asam bertingkat pada suhu $25^\\circ\\text{C}$ adalah:
- $pK_{a1} = 2.19$ (gugus $\\alpha\\text{-karboksil}$, $\\alpha\\ce{-COOH}$)
- $pK_{aR} = 4.25$ (gugus karboksil rantai samping, $\\gamma\\ce{-COOH}$)
- $pK_{a2} = 9.67$ (gugus $\\alpha\\text{-amonium}$, $\\alpha\\ce{-NH3+}$)

Sebanyak $50.0\\text{ mL}$ larutan asam L-glutamat $0.100\\text{ M}$ dititrasi dengan larutan baku $\\ce{NaOH}$ $0.100\\text{ M}$.

**Pertanyaan:**
1. Gambarkan struktur kimia dari keempat spesies ionik asam glutamat ($\\ce{H3A+}, \\ce{H2A}, \\ce{HA-}, \\ce{A^2-}$) dan tunjukkan urutan pelepasan protonnya dari yang paling asam hingga paling basa!
2. Tentukan spesies ionik mana yang bertindak sebagai zwitterion bermuatan netto nol, dan turunkan persamaan matematis untuk menghitung titik isoelektrik ($pI$) asam glutamat serta hitung nilai numeriknya!
3. Tentukan volume larutan $\\ce{NaOH}$ yang dibutuhkan untuk mencapai titik isoelektrik ($pI$) dari larutan awal $\\ce{H3A+}$!
4. Pada pH fisiologis plasma darah normal ($\text{pH} = 7.40$), hitung persentase fraksi mol spesies dominan asam glutamat dan tentukan muatan netto rata-ratanya!

---

### Solusi Sistematis:

**Langkah 1: [Struktur Spesies Ionik & Urutan Deprotonasi]**
Urutan keasaman gugus fungsional ditentukan oleh nilai $pK_a$ (makin kecil $pK_a$, makin mudah terdeprotonasi):
$$\\alpha\\ce{-COOH} (pK_{a1} = 2.19) > \\gamma\\ce{-COOH} (pK_{aR} = 4.25) > \\alpha\\ce{-NH3+} (pK_{a2} = 9.67)$$
Keempat spesies kesetimbangan ionik:
1. **Kation $\\ce{H3A+}$ (Muatan netto $+1$, bentuk pada $\\text{pH} < 2$):**
   $$\\ce{HOOC-CH2-CH2-CH(NH3+)-COOH}$$
2. **Zwitterion Netral $\\ce{H2A}$ (Muatan netto $0$, bentuk pada rentang $2 < \\text{pH} < 4.5$):**
   Pelepasan proton pertama dari $\\alpha\\ce{-COOH}$:
   $$\\ce{HOOC-CH2-CH2-CH(NH3+)-COO-}$$
3. **Monoanion $\\ce{HA-}$ (Muatan netto $-1$, bentuk pada rentang $4.5 < \\text{pH} < 9.5$):**
   Pelepasan proton kedua dari rantai samping $\\gamma\\ce{-COOH}$:
   $$\\ce{^-OOC-CH2-CH2-CH(NH3+)-COO-}$$
4. **Dianion $\\ce{A^2-}$ (Muatan netto $-2$, bentuk pada $\\text{pH} > 10$):**
   Pelepasan proton ketiga dari gugus amonium $\\alpha\\ce{-NH3+}$:
   $$\\ce{^-OOC-CH2-CH2-CH(NH2)-COO-}$$

**Langkah 2: [Derivasi Rumus & Perhitungan Titik Isoelektrik (pI)]**
Spesies zwitterion bermuatan netto nol adalah $\\ce{H2A}$.
Kesetimbangan disosiasi yang melibatkan $\\ce{H2A}$:
$$K_{a1} = \\frac{[\\ce{H+}][\\ce{H2A}]}{[\\ce{H3A+}]} \\implies [\\ce{H3A+}] = \\frac{[\\ce{H+}][\\ce{H2A}]}{K_{a1}}$$
$$K_{aR} = \\frac{[\\ce{H+}][\\ce{HA-}]}{[\\ce{H2A}]} \\implies [\\ce{HA-}] = \\frac{K_{aR}[\\ce{H2A}]}{[\\ce{H+}]}$$
Pada titik isoelektrik ($pI$), muatan listrik positif total harus tepat meniadakan muatan listrik negatif total:
$$[\\ce{H3A+}] = [\\ce{HA-}] + 2[\\ce{A^2-}]$$
Karena pada daerah asam sekitar $pI$ ($\\text{pH} \\approx 3$), konsentrasi dianion $[\\ce{A^2-}]$ sangat amat kecil ($< 10^{-6}\\text{ M}$) dan dapat diabaikan:
$$[\\ce{H3A+}] \\approx [\\ce{HA-}]$$
Substitusi kedua relasi kesetimbangan:
$$\\frac{[\\ce{H+}][\\ce{H2A}]}{K_{a1}} = \\frac{K_{aR}[\\ce{H2A}]}{[\\ce{H+}]}$$
Bagi kedua ruas dengan $[\\ce{H2A}]$:
$$[\\ce{H+}]^2 = K_{a1} \\cdot K_{aR} \\implies [\\ce{H+}] = \\sqrt{K_{a1} \\cdot K_{aR}}$$
Ambil logaritma negatif ($-\\log$):
$$pI = \\frac{pK_{a1} + pK_{aR}}{2}$$
Substitusi nilai eksperimen:
$$pI = \\frac{2.19 + 4.25}{2} = \\frac{6.44}{2} = 3.22$$

**Langkah 3: [Volume Titran NaOH untuk Mencapai pI]**
- Mol awal $\\ce{H3A+} = 50.0\\text{ mL} \\times 0.100\\text{ M} = 5.00\\text{ mmol}$.
- Titik ekuivalen pertama ($V_1 = 50.0\\text{ mL}$) tercapai saat seluruh gugus pertama $\\alpha\\ce{-COOH}$ ternetralkan menjadi zwitterion netral $\\ce{H2A}$.
- Pada titrasi asam amino dikarboksilat, titik isoelektrik ($pI = 3.22$) berimpit dengan titik ekuivalen pertama, di mana spesies $\\ce{H2A}$ terbentuk kuantitatif sebesar $> 98\\%$. Jadi volume titran $\\ce{NaOH}$ yang ditambahkan adalah **$50.0\\text{ mL}$**.

**Langkah 4: [Spesiasi pada pH Fisiologis Darah (pH = 7.40)]**
Pada $\\text{pH} = 7.40$:
- Rasio $\\frac{[\\ce{HA-}]}{[\\ce{H2A}]}$:
$$\\text{pH} = pK_{aR} + \\log\\left(\\frac{[\\ce{HA-}]}{[\\ce{H2A}]}\\right) \\implies 7.40 = 4.25 + \\log\\left(\\frac{[\\ce{HA-}]}{[\\ce{H2A}]}\\right) \\implies \\log = 3.15 \\implies \\frac{[\\ce{HA-}]}{[\\ce{H2A}]} = 10^{3.15} = 1413$$
Konsentrasi $\\ce{H2A}$ hanya $0.07\\%$.
- Rasio $\\frac{[\\ce{A^2-}]}{[\\ce{HA-}]}$:
$$\\text{pH} = pK_{a2} + \\log\\left(\\frac{[\\ce{A^2-}]}{[\\ce{HA-}]}\\right) \\implies 7.40 = 9.67 + \\log\\left(\\frac{[\\ce{A^2-}]}{[\\ce{HA-}]}\\right) \\implies \\log = -2.27 \\implies \\frac{[\\ce{A^2-}]}{[\\ce{HA-}]} = 10^{-2.27} = 0.00537$$
Konsentrasi $\\ce{A^2-}$ hanya $0.53\\%$.
- Fraksi mol spesies monoanion $\\ce{HA-}$:
$$\\%\\ [\\ce{HA-}] = \\frac{1}{1 + 10^{-3.15} + 10^{-2.27}} \\times 100\\% = \\frac{1}{1 + 0.0007 + 0.00537} \\times 100\\% = 99.4\\%$$
- **Muatan Netto Rata-Rata:**
$$q_{\\text{netto}} = (0 \\times 0.0007) + (-1 \\times 0.994) + (-2 \\times 0.00537) = -0.994 - 0.0107 = -1.005 \\approx -1.00$$

---

**Kesimpulan Evaluator Juri:**
Asam L-glutamat memiliki titik isoelektrik **$pI = 3.22$** yang dikendalikan oleh kedua gugus karboksil ($pK_{a1}$ dan $pK_{aR}$). Pada pH fisiologis $7.40$, asam glutamat berada dalam bentuk monoanion terdeprotonasi ganda $\\ce{^-OOC-CH2CH2-CH(NH3+)-COO-}$ (**muatan netto $-1$**, kelimpahan $99.4\\%$), menjelaskan perannya sebagai neurotransmitter eksitatorik anionik polar di sistem saraf pusat.`,
      checkpointQuizzes: undefined,
    },
    {
      tag: 'soal-kinetika-enzim-michaelis-menten-lineweaver-burk',
      tags: ['soal-icho', 'michaelis-menten', 'lineweaver-burk', 'inhibisi-enzim', 'km-vmax', 'kcat'],
      title: 'Contoh Soal IChO 6: Kinetika Enzim Michaelis-Menten, Efisiensi Katalitik kcat/Km, & Diagnosis Inhibisi Lineweaver-Burk',
      summary: 'Analisis kuantitatif kinetika hidrolisis substrat oleh enzim kimotripsin, penentuan parameter Km, Vmax, kcat, efisiensi batas difusi, serta penentuan jenis dan konstanta disosiasi inhibitor Ki dari persamaan garis plot Lineweaver-Burk.',
      content: `### Masalah:
Enzim protease kimotripsin murni diteliti kinetika reaksinya pada suhu $25^\\circ\\text{C}$ dan $\\text{pH} = 7.80$ dalam larutan penyangga fosfat. Konsentrasi enzim total dipertahankan konstan pada $[E]_0 = 2.00\\times 10^{-8}\\text{ M}$ ($20.0\\text{ nM}$). Hidrolisis substrat model ester peptida sintetik menghasilkan data laju reaksi awal ($v_0$) pada berbagai konsentrasi substrat $[S]$.

Persamaan regresi linear plot resiprokal ganda Lineweaver-Burk ($\\frac{1}{v_0}$ terhadap $\\frac{1}{[S]}$) yang diperoleh dari eksperimen:
- **Tanpa Keberadaan Inhibitor:**
$$\\frac{1}{v_0} = 0.0500 \\left(\\frac{1}{[S]}\\right) + 0.0250$$
dengan $[S]$ dinyatakan dalam satuan $\\text{mM}$ ($10^{-3}\\text{ M}$) dan $v_0$ dinyatakan dalam satuan $\\mu\\text{M}\\cdot\\text{s}^{-1}$ ($10^{-6}\\text{ M}\\cdot\\text{s}^{-1}$).

Selanjutnya, eksperimen kedua diulang di bawah kondisi larutan yang identik persis, namun dengan menambahkan molekul senyawa obat inhibitor peptida sintetis (Senyawa X) dengan konsentrasi tetap $[I] = 10.0\\ \\mu\\text{M}$. Persamaan garis Lineweaver-Burk yang diperoleh:
- **Dengan Keberadaan Inhibitor X ($[I] = 10.0\\ \\mu\\text{M}$):**
$$\\frac{1}{v_0} = 0.1500 \\left(\\frac{1}{[S]}\\right) + 0.0250$$

**Pertanyaan:**
1. Dari persamaan garis tanpa inhibitor, tentukan nilai laju reaksi maksimum ($V_{\\max}$ dalam $\\mu\\text{M}\\cdot\\text{s}^{-1}$) dan konstanta Michaelis ($K_m$ dalam $\\text{mM}$ dan $\\text{M}$)!
2. Hitung angka pergantian (*turnover number*, $k_{cat}$ dalam $\\text{s}^{-1}$) dan efisiensi katalitik enzim ($k_{cat}/K_m$ dalam $\\text{M}^{-1}\\text{s}^{-1}$), serta jelaskan apakah enzim kimotripsin telah mencapai batas kesempurnaan difusi Smoluchowski!
3. Berdasarkan analisis komparatif titik potong sumbu-y (*y-intercept*), titik potong sumbu-x (*x-intercept*), dan kemiringan (*slope*) kedua persamaan garis, tentukan jenis mekanisme inhibisi enzimatis yang dilakukan oleh Senyawa X!
4. Turunkan persamaan untuk menghitung konstanta inhibisi ($K_i$) dan hitung nilai numerik $K_i$ (dalam satuan $\\mu\\text{M}$) dari Senyawa X terhadap kimotripsin!

---

### Solusi Sistematis:

**Langkah 1: [Penentuan Parameter Kinetika Tanpa Inhibitor ($V_{\\max}$ dan $K_m$)]**
Persamaan umum plot Lineweaver-Burk adalah:
$$\\frac{1}{v_0} = \\left(\\frac{K_m}{V_{\\max}}\\right) \\frac{1}{[S]} + \\frac{1}{V_{\\max}}$$
Bandingkan dengan persamaan eksperimen tanpa inhibitor:
$$\\frac{1}{v_0} = 0.0500 \\left(\\frac{1}{[S]}\\right) + 0.0250$$
1. **Titik Potong Sumbu-y (*y-intercept*):**
$$\\frac{1}{V_{\\max}} = 0.0250\\ (\\mu\\text{M}\\cdot\\text{s}^{-1})^{-1}$$
$$V_{\\max} = \\frac{1}{0.0250} = 40.0\\ \\mu\\text{M}\\cdot\\text{s}^{-1} = 4.00\\times 10^{-5}\\text{ M}\\cdot\\text{s}^{-1}$$
2. **Kemiringan Kurva (*Slope*):**
$$\\text{Slope} = \\frac{K_m}{V_{\\max}} = 0.0500\\ \\text{mM}/(\\mu\\text{M}\\cdot\\text{s}^{-1})$$
$$K_m = \\text{Slope} \\times V_{\\max} = 0.0500 \\times 40.0 = 2.00\\text{ mM} = 2.00\\times 10^{-3}\\text{ M}$$
3. **Titik Potong Sumbu-x (*x-intercept*):**
$$-\\frac{1}{K_m} = -\\frac{0.0250}{0.0500} = -0.500\\text{ mM}^{-1} \\implies K_m = 2.00\\text{ mM}$$

**Langkah 2: [Perhitungan Turnover Number kcat & Efisiensi Katalitik]**
1. **Angka Pergantian (*Turnover Number*, $k_{cat}$):**
$$k_{cat} = \\frac{V_{\\max}}{[E]_0} = \\frac{4.00\\times 10^{-5}\\text{ M}\\cdot\\text{s}^{-1}}{2.00\\times 10^{-8}\\text{ M}} = 2000\\text{ s}^{-1}$$
Artinya, setiap satu molekul enzim kimotripsin mampu menghidrolisis $2000$ molekul substrat menjadi produk per detik dalam kondisi jenuh!
2. **Efisiensi Katalitik ($k_{cat} / K_m$):**
$$\\text{Efisiensi} = \\frac{k_{cat}}{K_m} = \\frac{2000\\text{ s}^{-1}}{2.00\\times 10^{-3}\\text{ M}} = 1.00\\times 10^6\\text{ M}^{-1}\\text{s}^{-1}$$
3. **Evaluasi Batas Difusi Smoluchowski:**
Batas difusi fluida teoritis untuk tumbukan molekuler dalam larutan berair berkisar antara $10^8 - 10^9\\text{ M}^{-1}\\text{s}^{-1}$. Karena nilai efisiensi katalitik kimotripsin adalah $1.00\\times 10^6\\text{ M}^{-1}\\text{s}^{-1}$, enzim ini sangat efisien namun belum mencapai batas kinetik sempurna (*diffusion-controlled limit*), menunjukkan bahwa tahap pemutusan ikatan kimia kovalen masih memberikan kontribusi penghalang aktivasi.

**Langkah 3: [Diagnosis Mekanisme Inhibisi Senyawa X]**
Bandingkan parameter kedua garis:
- **Titik Potong Sumbu-y:**
  - Tanpa inhibitor: $\\frac{1}{V_{\\max}} = 0.0250 \\implies V_{\\max} = 40.0\\ \\mu\\text{M}\\cdot\\text{s}^{-1}$
  - Dengan inhibitor: $\\frac{1}{V_{\\max}^{\\text{app}}} = 0.0250 \\implies V_{\\max}^{\\text{app}} = 40.0\\ \\mu\\text{M}\\cdot\\text{s}^{-1}$
  Kedua garis berpotongan **tepat di satu titik pada sumbu-y** ($V_{\\max}$ tidak berubah sama sekali)!
- **Kemiringan Kurva (*Slope*):**
  - Tanpa inhibitor: $\\text{Slope}_1 = 0.0500$
  - Dengan inhibitor: $\\text{Slope}_2 = 0.1500$ (meningkat sebesar $3.00\\times$)
- **Konstanta Michaelis Nyata ($K_m^{\\text{app}}$):**
$$K_m^{\\text{app}} = \\text{Slope}_2 \\times V_{\\max}^{\\text{app}} = 0.1500 \\times 40.0 = 6.00\\text{ mM}$$
Nilai $K_m$ meningkat dari $2.00\\text{ mM}$ menjadi $6.00\\text{ mM}$.
- **Kesimpulan Mekanisme:**
Karena nilai $V_{\\max}$ tetap konstan sementara nilai $K_m$ meningkat ($K_m^{\\text{app}} > K_m$), Senyawa X bertindak murni sebagai **Inhibitor Kompetitif Reversibel**! Molekul inhibitor bersaing secara langsung dengan molekul substrat untuk menduduki sisi aktif enzim bebas ($\\ce{E + I <=> EI}$).

**Langkah 4: [Derivasi Rumus & Perhitungan Konstanta Inhibisi Ki]**
Pada inhibisi kompetitif:
$$K_m^{\\text{app}} = \\alpha K_m \\quad \\text{di mana} \\quad \\alpha = 1 + \\frac{[I]}{K_i}$$
Faktor perbesaran $\\alpha$:
$$\\alpha = \\frac{K_m^{\\text{app}}}{K_m} = \\frac{6.00\\text{ mM}}{2.00\\text{ mM}} = 3.00$$
Substitusikan nilai konsentrasi inhibitor $[I] = 10.0\\ \\mu\\text{M}$:
$$3.00 = 1 + \\frac{10.0\\ \\mu\\text{M}}{K_i}$$
$$2.00 = \\frac{10.0\\ \\mu\\text{M}}{K_i}$$
$$K_i = \\frac{10.0\\ \\mu\\text{M}}{2.00} = 5.00\\ \\mu\\text{M} = 5.00\\times 10^{-6}\\text{ M}$$

---

**Kesimpulan Evaluator Juri:**
Parameter kinetika kimotripsin: $V_{\\max} = 40.0\\ \\mu\\text{M}\\cdot\\text{s}^{-1}$, $K_m = 2.00\\text{ mM}$, $k_{cat} = 2000\\text{ s}^{-1}$, dan efisiensi katalitik $= 1.00\\times 10^6\\text{ M}^{-1}\\text{s}^{-1}$. Berdasarkan titik potong sumbu-y yang identik pada plot Lineweaver-Burk, Senyawa X terbukti merupakan **Inhibitor Kompetitif** murni dengan afinitas pengikatan sisi aktif sebesar **$K_i = 5.00\\ \\mu\\text{M}$**.`,
      checkpointQuizzes: undefined,
    },
  ],
};
