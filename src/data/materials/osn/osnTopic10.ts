/**
 * osnTopic10.ts
 * Topik 10: Kimia Organik & Biokimia
 * Jenjang: OSN / IChO
 */

import type { MaterialItem } from '../../materialsData.ts';

export const OSN_TOPIC_10: MaterialItem = {
  id: 10,
  topic_number: 10,
  title: 'Kimia Organik & Biokimia',
  slug: 'kimia-organik-biokimia',
  category: 'Kimia Organik',
  level: 'OSN',
  readTimeMinutes: 38,
  summary: 'Kajian mendalam stereokimia Cahn-Ingold-Prelog (CIP), termodinamika & kinetika reaksi organik (Hammond & intermediet reaktif), teori asam-basa organik & aromatisitas Hückel, mekanisme substitusi nukleofilik (SN1 vs SN2) & inversi Walden, eliminasi (E1 vs E2) geometri anti-periplanar Zaitsev/Hofmann, adisi elektrofilik alkena stereospesifik Markovnikov, kimia karbonil & kondensasi enolat, serta biokimia asam amino, peptida, titik isoelektrik (pI) dan karbohidrat.',
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
      content: `Stereokimia mengkaji penataan atom-atom dalam ruang tiga dimensi. Pusat kiralitas (stereopusat) paling umum adalah atom karbon $sp^3$ yang mengikat empat substituen berbeda secara kimiawi.

### 1. Aturan Prioritas Cahn-Ingold-Prelog (CIP)
Untuk menentukan konfigurasi absolut ($R$ atau $S$) pada atom karbon kiral:
1. **Nomor Atom ($Z$):** Urutkan keempat gugus terikat berdasarkan nomor atom tertinggi dari atom yang terikat langsung ke stereopusat:
$$\\ce{-I} (53) > \\ce{-Br} (35) > \\ce{-Cl} (17) > \\ce{-SO3H} (16) > \\ce{-F} (9) > \\ce{-OH} (8) > \\ce{-NH2} (7) > \\ce{-CH3} (6) > \\ce{-H} (1) > \\text{Pasangan Elektron Bebas} (0)$$
2. **Titik Perbedaan Pertama (*First Point of Difference*):** Jika atom yang terikat langsung identik (misal sama-sama atom karbon), telusuri atom-atom pada lapisan kedua menurut urutan prioritas menurun hingga ditemukan perbedaan pertama. Contoh: $-\\ce{CH2-CH3}$ (mengikat $\\ce{C, H, H}$) memiliki prioritas lebih tinggi daripada $-\\ce{CH3}$ (mengikat $\\ce{H, H, H}$).
3. **Ikatan Rangkap Dua & Tiga:** Diperlakukan sebagai ikatan tunggal ke atom fiktif terduplikasi (*phantom atoms*):
   - Gugus formil $-\\ce{CH=O}$ setara dengan $-\\ce{CH(O)(O)}$ (karbon mengikat dua atom oksigen).
   - Gugus karboksil $-\\ce{COOH}$ setara dengan $-\\ce{C(O)(O)(O)}$ (karbon mengikat tiga atom oksigen).
   - Gugus nitril $-\\ce{C#N}$ setara dengan $-\\ce{C(N)(N)(N)}$.
4. **Penentuan Arah Putaran:**
   - Pandang molekul dengan menempatkan gugus berprioritas terendah (prioritas 4, biasanya $-\\ce{H}$) menjauhi pengamat (garis putus-putus/*dash*).
   - Telusuri urutan prioritas $1 \\to 2 \\to 3$:
     - Searah jarum jam: konfigurasi **$R$** (*Rectus*).
     - Berlawanan arah jarum jam: konfigurasi **$S$** (*Sinister*).
   - *Aturan Praktis:* Jika gugus 4 mengarah ke depan (baji/*wedge*), tentukan putaran semu lalu balik hasilnya ($R \\to S$ atau sebaliknya).

### 2. Proyeksi Fischer & Kaidah Manipulasi
Dalam proyeksi Fischer:
- Garis horizontal merepresentasikan ikatan yang menonjol ke arah pengamat (ke depan bidang).
- Garis vertikal merepresentasikan ikatan yang menjauhi pengamat (ke belakang bidang).
- **Aturan Operasi:**
  - Memutar proyeksi Fischer sebesar $180^\\circ$ pada bidang kertas mempertahankan konfigurasi stereokimia.
  - Memutar sebesar $90^\\circ$ membalik konfigurasi ($R \\leftrightarrow S$).
  - Menukar posisi sembarang dua gugus membalik konfigurasi; menukar dua pasang gugus secara simultan mempertahankan konfigurasi.

### 3. Klasifikasi Stereoisomer
- **Enantiomer:** Sepasang stereoisomer yang merupakan bayangan cermin satu sama lain tetapi tidak dapat saling ditumpukkan (*non-superimposable mirror images*). Memiliki sifat fisika-kimia akiral yang identik (titik leleh, titik didih, densitas) kecuali arah pemutaran cahaya terpolarisasi ($\pm [\\alpha]_D$) dan reaktivitas terhadap lingkungan kiral.
- **Diastereomer:** Stereoisomer yang bukan merupakan bayangan cermin satu sama lain (misal isomer cis/trans atau molekul dengan beberapa pusat kiral di mana hanya sebagian pusat yang berbalik). Memiliki sifat fisika dan kimia yang berbeda.
- **Senyawa Meso:** Molekul yang memiliki stereopusat majemuk (misal $(2R, 3S)$) tetapi memiliki elemen simetri internal (bidang cermin $\\sigma$ atau pusat inversi $i$). Senyawa meso bersifat akiral murni dan tidak memutar bidang polarisasi cahaya ($[\\alpha] = 0^\\circ$).`,
      keyFormulas: [
        { name: 'Jumlah Maksimum Stereoisomer', formula: 'N_{\\text{max}} = 2^n \\quad (n = \\text{jumlah karbon kiral})' },
        { name: 'Rotasi Jenis Spesifik', formula: '[\\alpha]_D^T = \\frac{\\alpha_{\\text{teramati}}}{l \\cdot c}' },
      ],
    },
    {
      tag: 'prasyarat-termodinamika-kinetika-organik-diagram-energi',
      tags: ['termodinamika-kinetika-organik', 'postulat-hammond', 'karbokation', 'karbanion', 'radikal-bebas', 'kontrol-termodinamika-kinetika'],
      title: 'Prasyarat 2: Termodinamika & Kinetika Reaksi Organik, Postulat Hammond & Intermediet Reaktif',
      summary: 'Profil koordinat energi reaksi, postulat Hammond, geometri & kestabilan karbokation, karbanion, radikal, serta kontrol kinetik versus termodinamik.',
      content: `Pemahaman reaksi organik menuntut integrasi antara termodinamika (arah kesetimbangan dan kestabilan relatif produk) dan kinetika (laju reaksi dan energi keadaan transisi).

### 1. Profil Koordinat Reaksi & Postulat Hammond
- Laju reaksi dikendalikan oleh energi bebas aktivasi Gibbs ($\\Delta G^\\ddagger$): $k = \\frac{k_B T}{h} e^{-\\Delta G^\\ddagger / RT}$.
- Posisi kesetimbangan akhir dikendalikan oleh perubahan energi bebas standar ($\\Delta G^\\circ$): $\\Delta G^\\circ = -RT \\ln K$.
- **Postulat Hammond (1955):** Jika dua keadaan yang berurutan dalam jalur reaksi memiliki energi yang mirip, struktur molekulnya akan saling menyerupai:
  - Pada tahap reaksi **eksergonik** (pelepasan energi kuat, $\\Delta G^\\circ \\ll 0$): keadaan transisi terjadi awal (*early transition state*), strukturnya mirip dengan reaktan.
  - Pada tahap reaksi **endergonik** (membutuhkan energi, $\\Delta G^\\circ \\gg 0$): keadaan transisi terjadi lambat (*late transition state*), strukturnya mirip dengan intermediet atau produk.

### 2. Intermediet Reaktif Kunci
1. **Karbokation ($R_3\\ce{C+}$):**
   - Geometri $sp^2$ trigonal planar dengan orbital $p$ kosong tegak lurus bidang. Memiliki 6 elektron valensi.
   - Kestabilan bertambah melalui efek induksi pendorong elektron ($+I$) gugus alkil dan hiperkonjugasi orbital ikatan $\\sigma_{\\ce{C-H}}$ atau $\\sigma_{\\ce{C-C}}$ ke orbital $p$ kosong:
$$\\text{Metil} < 1^\\circ < 2^\\circ < 3^\\circ < \\text{Alilik/Benzilik} < \\text{Tropilium}$$
   - Bersifat sangat rentan terhadap **penataan ulang intramolekul** (*rearrangement*): pergeseran hidrida $1,2$-$\\ce{H-}$ atau pergeseran alkil $1,2$-$\\ce{CH3-}$ menuju karbokation yang lebih stabil.
2. **Radikal Karbon ($R_3\\ce{C^\\bullet}$):**
   - Geometri planar atau piramida sangat dangkal ($sp^2$), memiliki 7 elektron valensi.
   - Urutan kestabilan serupa dengan karbokation: $3^\\circ > 2^\\circ > 1^\\circ > \\text{metil}$, terstabilkan sangat kuat oleh delokalisasi resonansi alilik/benzilik.
3. **Karbanion ($R_3\\ce{C-}$):**
   - Geometri $sp^3$ piramidal dengan pasangan elektron bebas. Memiliki 8 elektron valensi.
   - Urutan kestabilan terbalik terhadap karbokation: $\\text{metil} > 1^\\circ > 2^\\circ > 3^\\circ$.
   - Karbanion terstabilkan kuat oleh peningkatan karakter $s$ orbital hibrida ($sp > sp^2 > sp^3$) dan oleh delokalisasi resonansi penarik elektron (misal anion enolat $\\ce{-C-C(=O)- <-> C=C-O-}$).

### 3. Kontrol Kinetik vs Termodinamik
Pada reaksi yang menghasilkan dua produk bersaing dari zat antara yang sama:
- **Produk Kinetik:** produk yang terbentuk paling cepat melalui keadaan transisi berenergi terendah ($\\Delta G^\\ddagger_1 < \\Delta G^\\ddagger_2$). Mendominasi pada suhu rendah di mana reaksi bersifat ireversibel.
- **Produk Termodinamik:** produk yang paling stabil secara energi ($\\Delta G^\\circ_2 < \\Delta G^\\circ_1$). Mendominasi pada suhu tinggi dan waktu reaksi lama karena sistem memiliki energi termal cukup untuk mencapai kesetimbangan reversibel.
- *Contoh Klasik:* Adisi $\\ce{HBr}$ pada $1,3$-butadiena:
  - Pada $-80^\\circ\\text{C}$: produk adisi-$1,2$ (kinetik) mendominasi ($80\\%$).
  - Pada $+40^\\circ\\text{C}$: produk adisi-$1,4$ (termodinamik, alkena disubstitusi internal lebih stabil) mendominasi ($80\\%$).`,
      keyFormulas: [
        { name: 'Persamaan Eyring Laju Kinetika', formula: 'k = \\frac{k_B T}{h} e^{-\\Delta G^\\ddagger / RT}' },
        { name: 'Kestabilan Termodinamika Alkena', formula: '\\text{Tetrasubstitusi} > \\text{Trisubstitusi} > \\text{Disubstitusi} > \\text{Monosubstitusi}' },
      ],
    },
    {
      tag: 'prasyarat-asam-basa-organik-efek-elektronik',
      tags: ['asam-basa-organik', 'efek-resonansi', 'efek-induksi', 'arimatisitas-huckel', 'pka-organik'],
      title: 'Prasyarat 3: Teori Asam-Basa Organik, Resonansi, Efek Induksi & Aromatisitas Hückel',
      summary: 'Korelasi nilai pKa dengan kestabilan basa konjugat, modulasi efek induksi dan resonansi, serta kriteria aromatisitas Huckel 4n+2.',
      content: `Kekuatan asam Brønsted-Lowry organik diukur oleh nilai $pK_a = -\\log_{10} K_a$. Prinsip fundamentalnya: **semakin stabil basa konjugat ($A^-$), semakin kuat asam induknya ($HA$)**.

### 1. Faktor-Faktor Penentu Kestabilan Basa Konjugat
1. **Elektronegativitas & Ukuran Atom Pembawa Muatan:**
   - Dalam satu periode: $\\ce{CH4} (pK_a \\sim 50) < \\ce{NH3} (38) < \\ce{H2O} (15.7) < \\ce{HF} (3.2)$ karena atom lebih elektronegatif lebih mampu menstabilkan muatan negatif.
   - Dalam satu golongan: ukuran atom mendominasi: $\\ce{HF} (3.2) < \\ce{HCl} (-7) < \\ce{HBr} (-9) < \\ce{HI} (-10)$ karena jari-jari besar mendispersikan kerapatan muatan.
2. **Efek Hibridisasi Orbital:**
   Elektron pada orbital dengan karakter $s$ lebih tinggi berada lebih dekat ke inti atom positif:
$$\\ce{CH3-CH3} (sp^3, 25\\% s, pK_a \\sim 50) < \\ce{CH2=CH2} (sp^2, 33\\% s, pK_a \\sim 44) < \\ce{HC#CH} (sp, 50\\% s, pK_a \\sim 25)$$
   Proton terminal alkuna bersifat asam lemah yang dapat dideprotonasi oleh basa kuat seperti natrium amida ($\\ce{NaNH2}$).
3. **Efek Resonansi & Delokalisasi Muatan:**
   - Etanol ($\\ce{CH3CH2OH}$, $pK_a \\approx 16$): muatan negatif terkonsentrasi terlokalisasi pada satu atom oksigen.
   - Fenol ($\\ce{C6H5OH}$, $pK_a \\approx 10.0$): muatan negatif terdelokalisasi ke cincin aromatik melalui resonansi ortho/para.
   - Asam Asetat ($\\ce{CH3COOH}$, $pK_a \\approx 4.76$): muatan negatif terdelokalisasi secara simetris setara pada dua atom oksigen elektronegatif.
4. **Efek Induksi Penarik Elektron ($-I$):**
   Gugus elektronegatif menarik kerapatan elektron melalui ikatan $\\sigma$, menstabilkan muatan negatif basa konjugat:
$$\\ce{CH3COOH} (4.76) < \\ce{CH2ClCOOH} (2.86) < \\ce{CHCl2COOH} (1.29) < \\ce{CCl3COOH} (0.65) < \\ce{CF3COOH} (0.23)$$

### 2. Aturan Aromatisitas Hückel ($4n+2$)
Suatu senyawa bersifat **aromatik** (memiliki stabilitas termodinamika istimewa yang jauh melampaui poliena terkonjugasi terisolasi) jika memenuhi empat kriteria:
1. Senyawa berupa cincin tertutup (**siklik**).
2. Bersifat datar (**planar**), memungkinkan tumpang tindih paralel maksimum seluruh orbital $p$.
3. Terkonjugasi sempurna (**setiap atom cincin memiliki orbital $p$**).
4. Mengandung $(4n + 2)$ elektron $\\pi$ (dengan $n = 0, 1, 2, 3, \\dots$):
   - $n = 0$: $2\\pi$ (kation siklopropenil)
   - $n = 1$: $6\\pi$ (benzena, ion siklopentadienil anion, kation tropilium, piridina, pirola, furan)
   - $n = 2$: $10\\pi$ (naftalena, ion siklooktatetraenil dianion)
- **Senyawa Anti-Aromatik:** Sistem siklik planar terkonjugasi penuh yang memiliki **$4n$ elektron $\\pi$** (misal siklobutadiena dengan $4\\pi$, kation siklopentadienil dengan $4\\pi$). Senyawa anti-aromatik memiliki energi sangat tinggi dan luar biasa tidak stabil.`,
      keyFormulas: [
        { name: 'Kriteria Aromatisitas Huckel', formula: '\\text{Jumlah elektron } \\pi = 4n + 2 \\quad (n = 0, 1, 2, \\dots)' },
        { name: 'Kriteria Anti-Aromatisitas', formula: '\\text{Jumlah elektron } \\pi = 4n \\quad (n = 1, 2, \\dots)' },
      ],
    },
  ],
  core_concepts: [
    {
      tag: 'konsep-substitusi-nukleofilik-sn1-sn2-inversi-walden',
      tags: ['substitusi-nukleofilik', 'sn1-sn2', 'inversi-walden', 'mekanisme-sn1', 'mekanisme-sn2', 'efek-pelarut-aprotik'],
      title: 'Konsep Inti 1: Substitusi Nukleofilik (SN1 vs SN2), Dinamika Stereokimia & Efek Pelarut',
      summary: 'Komparasi mekanisme serentak SN2 vs bertahap SN1, faktor rintangan sterik, pengaruh pelarut polar aprotik, dan pembuktian stereoselktivitas inversi Walden.',
      content: `Reaksi substitusi nukleofilik alifatik melibatkan penggantian gugus pergi (*leaving group*, $X$) oleh spesi nukleofil ($Nu^-$) pada atom karbon $sp^3$.

### 1. Mekanisme $S_N2$ (Substitusi Nukleofilik Bimolekular)
- **Karakteristik:** Berlangsung serentak (*concerted*, satu tahap) tanpa zat antara.
- **Hukum Laju:** Orde dua total:
$$r = k [R-X] [\\text{Nu}^-]$$
- **Geometri Penyerangan:** Nukleofil menyerang dari arah belakang (*backside attack*) tepat $180^\\circ$ berlawanan dengan ikatan $\\ce{C-X}$, menginjeksikan sepasang elektron ke dalam orbital antibonding $\\sigma^*_{\\ce{C-X}}$.
- **Keadaan Transisi (*Transition State*):** Membentuk struktur pentakoordinasi trigonal bipiramidal yang terdistorsi, di mana ikatan $\\ce{Nu...C}$ terbentuk bersamaan dengan terputusnya ikatan $\\ce{C...X}$.
- **Konsekuensi Stereokimia:** Menghasilkan **Inversi Walden $100\\%$** (pembalikan konfigurasi tiga dimensi seperti payung tertiup angin kencang).
- **Rintangan Sterik Substrat:**
$$\\text{Metil} > 1^\\circ (\\text{etil}) > 2^\\circ (\\text{isopropil}) \\gg 3^\\circ (\\text{tert-butil, tidak bereaksi via } S_N2)$$
Substrat neopentil ($-\\ce{CH2-C(CH3)3}$) meskipun berstatus primer mengalami perlambatan laju reaksi hingga $10^5$ kali akibat halangan sterik gugus metil di atom karbon tetangga.

### 2. Mekanisme $S_N1$ (Substitusi Nukleofilik Unimolekular)
- **Karakteristik:** Berlangsung dua tahap melalui zat antara karbokation.
  - **Tahap 1 (Lambat, Tahap Penentu Laju / RDS):** Pemutusan heterolitik ikatan $\\ce{C-X}$ melepaskan gugus pergi membentuk karbokation planar $sp^2$:
$$r = k [R-X]$$
  - **Tahap 2 (Cepat):** Serangan nukleofil ke orbital $p$ kosong karbokation.
- **Konsekuensi Stereokimia:** Karena karbokation bergeometri planar akiral dengan simetri atas dan bawah identik, nukleofil dapat menyerang dari kedua sisi dengan probabilitas setara, menghasilkan **Rasemisasi** (campuran sepasang enantiomer $50\\% R : 50\\% S$). Dalam prakteknya, sering teramati sedikit ekses inversi ($5-15\\%$) akibat fenomena *ion-pair effect* (gugus pergi anionik masih berada di dekat muka depan saat serangan terjadi).
- **Reaktivitas Substrat:** Sebanding dengan kestabilan karbokation:
$$3^\\circ > 2^\\circ \\gg 1^\\circ > \\text{metil}$$

### 3. Pengaruh Pelarut & Gugus Pergi
- **Pelarut Polar Protik (Air, Metanol, Etanol, Asam Asetat):**
  Memiliki ikatan $\\ce{O-H}$ yang mampu membentuk ikatan hidrogen kuat dengan nukleofil anionik, membungkus nukleofil dalam sangkar solvasi (*solvation cage*), sehingga menurunkan nukleofilisitas bebas dan meredam laju $S_N2$. Namun, pelarut ini menstabilkan karbokation dan anion gugus pergi melalui solvasi dipol, sehingga sangat **mendukung mekanisme $S_N1$**.
- **Pelarut Polar Aprotik (DMSO, DMF, Aseton, Asetonitril, HMPA):**
  Memiliki momen dipol besar tetapi tidak memiliki proton asam pembentuk ikatan hidrogen. Pelarut ini secara efektif mensolvasi kation logam pendamping ($\ce{Na+, K+}$) tetapi membiarkan anion nukleofil "telanjang" (*naked anions*) dengan energi bebas dan reaktivitas nukleofilik maksimal. Sangat **mengakselerasi laju $S_N2$** hingga ribuan kali lipat.
- **Kualitas Gugus Pergi (*Leaving Group Ability*):**
  Semakin lemah kebasaan gugus pergi (basa konjugat dari asam kuat dengan $pK_a < 0$), semakin baik daya lepasnya:
$$\\ce{I-} > \\ce{Br-} > \\ce{Cl-} \\gg \\ce{F-} \\quad \\text{dan} \\quad \\ce{TfO-} (\\text{triflat}) > \\ce{TsO-} (\\text{tosilat}) > \\ce{MsO-} (\\text{mesilat}) \\gg \\ce{H2O} > \\ce{OH-}$$`,
      keyFormulas: [
        { name: 'Hukum Laju SN2', formula: 'r = k [R-X] [\\text{Nu}^-]' },
        { name: 'Hukum Laju SN1', formula: 'r = k [R-X]' },
      ],
    },
    {
      tag: 'konsep-eliminasi-e1-e2-stereokimia-anti-periplanar',
      tags: ['reaksi-eliminasi', 'e1-e2', 'aturan-zaitsev', 'produk-hofmann', 'anti-periplanar', 'kompetisi-substitusi-eliminasi'],
      title: 'Konsep Inti 2: Reaksi Eliminasi (E1 vs E2), Aturan Zaitsev vs Hofmann & Geometri Anti-Periplanar',
      summary: 'Persyaratan stereoelektronik anti-periplanar E2, pembentukan alkena Zaitsev vs Hofmann via basa meruap, dan matriks kompetisi substitusi-eliminasi.',
      content: `Reaksi eliminasi melibatkan pelepasan dua atom atau gugus dari atom karbon bertetangga (eliminasi-$\\beta$ atau $1,2$-eliminasi) menghasilkan ikatan rangkap dua alkena.

### 1. Mekanisme $E2$ & Persyaratan Stereoelektronik Wajib
Mekanisme $E2$ (Eliminasi Bimolekular) berlangsung secara serentak satu tahap:
$$r = k [R-X] [\\text{Base}]$$
Basa kuat menyerang proton pada posisi $\\beta$ ($\\ce{C_\\beta-H}$) bersamaan dengan pembentukan ikatan rangkap $\\ce{C=C}$ dan pelepasan gugus pergi $\\ce{X-}$.
- **Geometri Anti-Periplanar ($180^\\circ$):**
  Ikatan $\\ce{C_\\beta-H}$ dan $\ce{C_\\alpha-X}$ harus berada pada bidang yang sama dengan orientasi berlawanan arah (sudut dihedral $\\theta = 180^\\circ$).
  *Alasan Mekanika Kuantum:* Konformasi anti-periplanar memungkinkan tumpang tindih simetri orbital yang sempurna antara orbital ikatan $\\sigma_{\\ce{C-H}}$ yang kaya elektron dengan orbital antibonding $\\sigma^*_{\\ce{C-X}}$ yang kosong untuk membentuk orbital ikatan $\\pi_{\\ce{C=C}}$.
- **Konsekuensi pada Cincin Sikloheksana:**
  Eliminasi $E2$ pada sikloheksana hanya dapat berlangsung jika **gugus pergi $\\ce{-X}$ dan atom hidrogen-$\\beta$ berada pada posisi trans-diaksial** ($a, a$). Jika gugus pergi berada pada posisi ekuatorial, cincin harus mengalami pembalikan konformasi (*chair flip*) terlebih dahulu ke konformer berenergi lebih tinggi dengan gugus aksial.

### 2. Regioselektivitas: Aturan Zaitsev vs Produk Hofmann
1. **Aturan Zaitsev (Produk Termodinamik):**
   Jika eliminasi menggunakan basa kuat berukuran kecil/ramping (seperti $\\ce{OH-}, \\ce{CH3O-}, \\ce{CH3CH2O-}$), produk utama adalah alkena yang memiliki **derajat substitusi terbanyak** pada ikatan rangkap (paling stabil secara termodinamika akibat stabilisasi hiperkonjugasi).
2. **Produk Hofmann (Produk Kinetik / Alkena Kurang Tersubstitusi):**
   Terbentuk sebagai produk dominan apabila:
   - Menggunakan **basa kuat terhalang sterik / meruap (*bulky base*)** seperti kalium tert-butoksida ($t\\ce{-BuOK}$), $\\text{LDA}$ (Litium diisopropilamida), atau trietilamina. Basa tidak dapat mengakses proton-$\\beta$ internal yang terhalang sterik dan memilih mengambil proton pada gugus metil terminal yang terbuka.
   - Substrat memiliki gugus pergi bermuatan positif berukuran besar atau bersifat basa buruk (seperti garam amonium kuaterner $-\\ce{N^+(CH3)3}$ atau sulfonium $-\\ce{S^+(CH3)2}$, Eliminasi Hofmann).

### 3. Mekanisme $E1$ (Eliminasi Unimolekular)
Berlangsung dua tahap melalui zat antara karbokation (identik dengan tahap pertama $S_N1$). Basa lemah (pelarut) kemudian mengambil proton-$\\beta$.
- Selalu menghasilkan produk Zaitsev sebagai produk dominan karena karbokation bebas dapat berotasi bebas memilih konformasi paling stabil sebelum eliminasi.
- Selalu bersaing dengan $S_N1$; fraksi alkena meningkat drastis dengan **kenaikan suhu reaksi** karena reaksi eliminasi memiliki perubahan entropi positif ($\\Delta S^\\circ > 0$, menghasilkan 3 partikel dari 2 partikel).

### 4. Matriks Kompetisi Master ($S_N2, S_N1, E2, E1$)
| Substrat | Basa Kuat / Nukleofil Kuat (misal $\\ce{EtO-}$) | Basa Kuat Terhalang (misal $t\\ce{-BuO-}$) | Nukleofil Kuat / Basa Lemah (misal $\\ce{I-, CN-, RS-}$) | Nukleofil Lemah / Basa Lemah (misal $\\ce{H2O, EtOH}$) |
| :--- | :--- | :--- | :--- | :--- |
| **Primer ($1^\\circ$)** | $S_N2$ mayoritas, $E2$ minoritas | $E2$ murni | $S_N2$ murni | Tidak bereaksi |
| **Sekunder ($2^\\circ$)** | $E2$ mayoritas | $E2$ murni | $S_N2$ murni (polar aprotik) | $S_N1 + E1$ (sangat lambat) |
| **Tersier ($3^\\circ$)** | $E2$ murni | $E2$ murni | $S_N1$ (atau $E2$) | $S_N1 + E1$ (dipanaskan $\\to E1$) |`,
      keyFormulas: [
        { name: 'Kondisi Anti-Periplanar E2', formula: '\\text{Sudut Dihedral } \\theta = 180^\\circ \\quad (\\text{posisi trans-diaksial})' },
        { name: 'Regiokimia Zaitsev vs Hofmann', formula: '\\text{Zaitsev} = \\text{Alkena Tersubstitusi Tinggi}; \\quad \\text{Hofmann} = \\text{Alkena Terminal}' },
      ],
    },
    {
      tag: 'konsep-adisi-elektrofilik-alkena-markovnikov-stereokimia',
      tags: ['adisi-elektrofilik', 'aturan-markovnikov', 'anti-markovnikov', 'intermediet-siklik', 'hidroborasi-oksidasi', 'stereokimia-adisi'],
      title: 'Konsep Inti 3: Adisi Elektrofilik Alkena/Alkuna, Aturan Markovnikov & Kontrol Stereokimia',
      summary: 'Mekanisme adisi elektrofilik via karbokation terbuka vs ion halonium siklik, aturan Markovnikov regioselektif, dan kontrol stereospesifik adisi anti vs sin.',
      content: `Ikatan rangkap dua alkena kaya akan elektron $\\pi$ yang terdedah di atas dan di bawah bidang molekul, bertindak sebagai nukleofil yang menyerang elektrofil ($E^+$).

### 1. Aturan Markovnikov Regioselektif
Pada adisi asam halida ($\\ce{H-X}$) ke alkena asimetris, elektrofil hidrogen ($\\ce{H+}$) terikat secara selektif pada atom karbon ikatan rangkap yang mengikat **jumlah atom hidrogen lebih banyak**, sehingga menghasilkan zat antara **karbokation yang paling stabil** (tersier $>$ sekunder $>$ primer):
$$\\ce{CH3-CH=CH2 + H-Br -> [CH3-C^+H-CH3] + Br- -> CH3-CH(Br)-CH3} \\quad (\\text{2-bromopropana mayoritas})$$

### 2. Adisi Anti-Markovnikov Radikal Bebas
Bila adisi $\\ce{HBr}$ dilakukan dengan penambahan katalitik peroksida organik ($\\ce{R-O-O-R}$) dan penyinaran cahaya/panas, terjadi pembalikan regioselektivitas menghasilkan produk **anti-Markovnikov** ($1$-bromopropana):
1. Inisiasi: Peroksida mengalami pemutusan homolitik menghasilkan radikal alkoksi yang mengabstraksi hidrogen dari $\\ce{HBr}$ membentuk radikal bromin atomik ($\\ce{Br^\\bullet}$).
2. Propagasi: Radikal $\\ce{Br^\\bullet}$ (elektrofil) menyerang ikatan $\\pi$ pada karbon terminal tak terhalang untuk menghasilkan radikal karbon sekunder yang lebih stabil:
$$\\ce{CH3-CH=CH2 + Br^\\bullet -> CH3-\\dot{C}H-CH2Br}$$
3. Radikal karbon mengabstraksi $\\ce{H}$ dari $\\ce{HBr}$ meregenerasi $\\ce{Br^\\bullet}$.
*(Catatan: Efek peroksida ini hanya berlangsung sukses pada $\\ce{HBr}$, tidak terjadi pada $\\ce{HCl}$ karena tahap propagasi endotermik dan tidak terjadi pada $\\ce{HI}$ karena radikal iodin terlalu stabil untuk menyerang alkena).*

### 3. Kontrol Stereospesifik Adisi: Anti vs Sin
1. **Adisi Anti via Intermediet Siklik (Halogenasi):**
   - Reaksi alkena dengan bromin ($\\ce{Br2}$) atau klorin ($\\ce{Cl2}$) dalam pelarut non-nukleofilik ($\\ce{CH2Cl2}$):
     Serangan elektron $\\pi$ alkena membentuk **ion bromonium siklik 3-anggota** ($[\\ce{C2Br}]^+$) yang memblokir satu muka bidang.
   - Ion bromida ($\\ce{Br-}$) yang lepas wajib menyerang atom karbon dari muka yang berlawanan (*backside attack*, pembukaan cincin tiga anggota).
   - Menghasilkan produk **adisi anti murni** ($100\\%$ stereospesifik).
2. **Adisi Sin:**
   - **Hidrogenasi Katalitik:** Transfer hidrogen dari permukaan logam ($\ce{Pd/C, Pt}$) berlangsung simultan ke sisi muka yang sama menghasilkan produk *sin*.
   - **Hidroborasi-Oksidasi:** Boran ($\\ce{BH3}$) berkoordinasi secara serentak dalam keadaan transisi siklik 4-anggota (atom $\ce{B}$ mengikat karbon terminal kurang terhalang, atom $\ce{H}$ mengikat karbon internal) $\implies$ adisi *sin*. Tahap oksidasi dengan $\\ce{H2O2/NaOH}$ menggantikan gugus boril dengan $-\\ce{OH}$ dengan retensi konfigurasi sempurna, menghasilkan **alkohol anti-Markovnikov dengan stereokimia sin**.
   - **Dihidroksilasi Sin:** Reaksi dengan osmium tetroksida ($\\ce{OsO4}$) atau kalium permanganat dingin ($\\ce{KMnO4}$) melalui zat antara ester osmat siklik menghasilkan glikol $1,2$-diol dengan stereokimia *sin/cis*.`,
      keyFormulas: [
        { name: 'Regiokimia Markovnikov', formula: '\\ce{R-CH=CH2 + HX -> R-CH(X)-CH3}' },
        { name: 'Adisi Anti Halogenasi', formula: '\\text{Alkena} + \\ce{Br2} \\xrightarrow{\\text{ion bromonium}} \\text{trans-1,2-dibromida (anti)}' },
      ],
    },
    {
      tag: 'konsep-kimia-karbonil-adisi-kondensasi-enolat',
      tags: ['reaksi-karbonil', 'adisi-nukleofilik', 'substitusi-nasil', 'kondensasi-aldol', 'kondensasi-claisen', 'anion-enolat'],
      title: 'Konsep Inti 4: Reaksi Kimia Karbonil, Adisi Nukleofilik, Substitusi Asil & Kimia Enolat',
      summary: 'Kepolaran gugus karbonil, adisi nukleofilik aldehid/keton, substitusi asil nukleofilik turunan asam, pembentukan enolat kinetik/termodinamik, dan kondensasi C-C Aldol & Claisen.',
      content: `Gugus karbonil ($\\ce{C=O}$) terdiri dari atom karbon $sp^2$ planar yang terikat rangkap dua ke atom oksigen elektronegatif, menghasilkan dipol ikatan kuat dengan muatan parsial positif pada atom karbon ($\ce{C^{\delta+}=O^{\delta-}}$).

### 1. Adisi Nukleofilik pada Aldehid & Keton
Nukleofil menyerang karbon elektrofilik dari sudut Bürgi-Dunitz ($\sim 107^\\circ$) membentuk intermediet tetrahedral:
- **Urutan Reaktivitas:** $\\text{Formaldehida} > \\text{Aldehida} > \\text{Keton} \\gg \\text{Ester} > \\text{Amida}$ (faktor sterik dan induksi elektron gugus alkil).
- **Adisi Nukleofil Karbon:**
  - **Reagen Grignard ($\\ce{RMgX}$) & Organolitium ($\\ce{RLi}$):**
    - Formaldehida $+ \\ce{RMgX} \\to$ Alkohol Primer ($1^\\circ$)
    - Aldehida $+ \\ce{RMgX} \\to$ Alkohol Sekunder ($2^\\circ$)
    - Keton $+ \\ce{RMgX} \\to$ Alkohol Tersier ($3^\\circ$)
  - **Sianohidrin:** Adisi $\\ce{HCN/NaCN}$ menghasilkan $\\alpha$-hidroksinitril.
- **Adisi Nukleofil Oksigen & Nitrogen:**
  - Alkohol $+ \\ce{RCHO}$ (katalis asam) $\\to$ Hemiasetal $\\to$ **Asetal** (stabil terhadap basa dan nukleofil, digunakan sebagai gugus pelindung karbonil).
  - Amina primer ($\\ce{R-NH2}$) $+ \\ce{C=O} \\to$ **Imina** (basa Schiff, $\\ce{C=N-R}$).
  - Amina sekunder ($\\ce{R2NH}$) $+ \\ce{C=O} \\to$ **Enamina** ($\\ce{C=C-NR2}$).

### 2. Substitusi Asil Nukleofilik (Adisi-Eliminasi) Turunan Asam
Turunan asam karboksilat ($\ce{R-CO-Y}$) memiliki gugus pergi heteroatom ($Y$). Serangan nukleofil menghasilkan intermediet tetrahedral yang kemudian mengeliminasi $Y^-$ untuk meregenerasi ikatan rangkap karbonil:
$$\\text{Reaktivitas Relatif: } \\ce{R-CO-Cl} (\\text{asil klorida}) > (\\ce{RCO})_2\\ce{O} (\\text{anhidrida}) > \\ce{R-CO-OR'} (\\text{ester}) > \\ce{R-CO-NH2} (\\text{amida}) > \\ce{R-COO-}$$
Turunan yang lebih reaktif dapat diubah secara spontan menjadi turunan yang kurang reaktif, tetapi tidak sebaliknya tanpa reagen pengaktivasi (seperti $\\ce{SOCl2}$ atau $\\ce{PCl5}$).

### 3. Kimia Enol & Anion Enolat
Atom hidrogen pada karbon-$\\alpha$ terhadap karbonil bersifat relatif asam ($pK_a \\approx 19 - 20$ pada keton) karena basa konjugat yang terbentuk (**anion enolat**) distabilkan oleh resonansi oksigen enolat:
$$\\ce{R-CH2-C(=O)R' + B- <=> [R-\\bar{C}H-C(=O)R' <-> R-CH=C(O^-)R'] + BH}$$
- **Enolat Kinetik vs Termodinamik pada Keton Asimetris:**
  - **Enolat Kinetik:** terbentuk melalui pelepasan proton pada posisi yang paling mudah diakses/kurang terhalang sterik. Disukai oleh: basa kuat sangat meruap ($\text{LDA}$ / litium diisopropilamida), pelarut aprotik ($\text{THF}$), suhu sangat rendah ($-78^\\circ\\text{C}$), waktu reaksi singkat.
  - **Enolat Termodinamik:** menghasilkan ikatan rangkap alkena yang paling tersubstitusi dan stabil. Disukai oleh: basa relatif lebih kecil ($\ce{NaOEt, KOt-Bu}$), pelarut protik, suhu kamar ($25^\\circ\\text{C}$), kondisi kesetimbangan reversibel.

### 4. Reaksi Kondensasi Karbonil Utama
1. **Kondensasi Aldol:**
   Enolat bertindak sebagai nukleofil karbon menyerang karbonil molekul aldehid/keton lain menghasilkan $\\beta$-hidroksikarbonil (*senyawa aldol*). Pemanasan memicu eliminasi air via mekanisme $E1cB$ menghasilkan senyawa karbonil $\\alpha,\\beta$-tak jenuh (*enon*) yang sangat stabil terkonjugasi.
2. **Kondensasi Claisen:**
   Enolat ester menyerang molekul ester lain menghasilkan $\\beta$-ketoester dengan pelepasan gugus alkoksida.
3. **Adisi Konjugat Michael ($1,4$-Addition):**
   Nukleofil enolat lunak (seperti ester malonat atau $\\beta$-diketon) menyerang karbon-$\\beta$ dari sistem enon $\\alpha,\\beta$-tak jenuh.`,
      keyFormulas: [
        { name: 'Kondensasi Aldol Dehidrasi', formula: '\\ce{2 R-CH2-CHO ->[OH-] R-CH2-CH=C(R)-CHO + H2O}' },
        { name: 'Kondensasi Claisen Ester', formula: '\\ce{2 CH3COOEt ->[NaOEt] CH3-CO-CH2-COOEt + EtOH}' },
      ],
    },
    {
      tag: 'konsep-biomolekul-asam-amino-peptida-karbohidrat',
      tags: ['biomolekul', 'asam-amino', 'titik-isoelektrik-pi', 'ikatan-peptida', 'karbohidrat', 'mutarotasi'],
      title: 'Konsep Inti 5: Biomolekul, Struktur & Stereokimia Asam Amino, Peptida, Titik Isoelektrik & Karbohidrat',
      summary: 'Struktur zwitterion dan stereokimia L-asam amino, derivasi titik isoelektrik pI, planaritas resonansi ikatan peptida, proyeksi Haworth monosakarida, anomer dan mutarotasi.',
      content: `Biomolekul polimerik kehidupan dibangun dari subunit monomerik organik dengan stereokimia yang sangat spesifik.

### 1. Asam Amino & Titik Isoelektrik (pI)
Asam amino pembentuk protein adalah asam $\\alpha$-amino berkonfigurasi stereokimia **L** pada proyeksi Fischer (gugus $-\\ce{NH2}$ di sebelah kiri).
- **Wujud Zwitterion:**
  Dalam larutan air pada rentang pH fisiologis, asam amino berada sebagai ion dipolar zwitterion: gugus amina terprotonasi ($-\\ce{NH3+}$, $pK_{a2} \\sim 9 - 10$) dan gugus karboksil terdeprotonasi ($-\\ce{COO-}$, $pK_{a1} \\sim 2 - 2.5$).
- **Titik Isoelektrik ($pI$):**
  Nilai pH larutan di mana konsentrasi spesi bermuatan netto nol mencapai maksimum (muatan total molekul $= 0$).
  - Asam Amino Netral Alifatik (Alanin, Glisin, Valin, Leusin):
$$pI = \\frac{pK_{a1} (\\alpha\\ce{-COOH}) + pK_{a2} (\\alpha\\ce{-NH3+})}{2}$$
  - Asam Amino Asam (Asam Aspartat, Asam Glutamat, memiliki rantai samping $-\\ce{COOH}$ dengan $pK_{aR}$ rendah):
$$pI = \\frac{pK_{a1} (\\alpha\\ce{-COOH}) + pK_{aR} (\\text{rantai samping})}{2}$$
  - Asam Amino Basa (Lisin, Arginin, Histidin, memiliki rantai samping basa amina/guanidino):
$$pI = \\frac{pK_{aR} (\\text{rantai samping}) + pK_{a2} (\\alpha\\ce{-NH3+})}{2}$$
- **Elektroforesis:**
  - Jika $\\text{pH} < pI$: asam amino bermuatan positif netto $\\implies$ bermigrasi ke katoda (kutub negatif).
  - Jika $\\text{pH} > pI$: asam amino bermuatan negatif netto $\\implies$ bermigrasi ke anoda (kutub positif).
  - Jika $\\text{pH} = pI$: asam amino tidak bermigrasi.

### 2. Ikatan Peptida & Geometri Resonansi
Ikatan peptida adalah ikatan amida kovalen yang menghubungkan gugus $\\alpha\\ce{-COOH}$ suatu asam amino dengan $\\alpha\\ce{-NH2}$ asam amino berikutnya:
- Pasangan elektron bebas nitrogen terdelokalisasi ke oksigen karbonil:
$$\\ce{-C(=O)-NH- <-> -C(O^-)=N^+H-}$$
- Delokalisasi ini memberikan **karakter ikatan rangkap dua parsial sebesar $\\sim 40\\%$** pada ikatan $\\ce{C-N}$ amida.
- **Konsekuensi Struktural:** Ikatan $\\ce{C-N}$ amida bersifat kaku (*rigid*), planar, dan tidak dapat berotasi bebas pada suhu fisiologis. Enam atom pada unit peptida berada pada satu bidang datar dengan konformasi **trans** yang paling stabil untuk menghindari benturan sterik rantai samping $R$.

### 3. Kimia Karbohidrat: Siklisasi & Mutarotasi
- **Stereokimia D/L Karbohidrat:** Ditentukan oleh konfigurasi atom karbon kiral terjauh dari gugus karbonil (karbon referensi, misal C5 pada heksosa). Seri **D** memiliki gugus $-\\ce{OH}$ di sebelah kanan proyeksi Fischer.
- **Siklisasi Intramolekul & Karbon Anomerik:**
  Serangan nukleofilik $-\\ce{OH}$ pada C5 ke karbonil C1 membentuk cincin piranosa hemiasetal 6-anggota. Karbon C1 yang semula planar akiral berubah menjadi stereopusat baru yang disebut **Karbon Anomerik**:
  - **Anomer $\\alpha$:** gugus $-\\ce{OH}$ anomerik berada pada posisi trans terhadap gugus $-\\ce{CH2OH}$ (mengarah ke bawah pada proyeksi Haworth D-glukosa).
  - **Anomer $\\beta$:** gugus $-\\ce{OH}$ anomerik berada pada posisi cis terhadap gugus $-\\ce{CH2OH}$ (mengarah ke atas pada proyeksi Haworth). Pada konformasi kursi $\\beta\\text{-D-glukopiranosa}$, seluruh substituen besar ($-\\ce{OH}$ dan $-\\ce{CH2OH}$) menempati posisi **ekuatorial murni**, menjadikannya monosakarida paling stabil di alam.
- **Mutarotasi:**
  Perubahan spontan nilai rotasi optik larutan anomer murni (misal $\\alpha\\text{-D-glukosa}$, $[\\alpha]_D = +112^\\circ$) saat dibiarkan dalam air hingga mencapai nilai kesetimbangan tetap ($[\\alpha]_D = +52.7^\\circ$, terdiri dari $64\\% \\beta$ dan $36\\% \\alpha$) melalui pembukaan cincin hemiasetal reversibel via rantai terbuka.
- **Gula Pereduksi:** Karbohidrat yang memiliki gugus hemiasetal bebas pada karbon anomeriknya sehingga dapat membuka cincin membentuk aldehid bebas yang mereduksi reagen Tollens ($\ce{Ag+}$) dan Fehling/Benedict ($\ce{Cu^2+}$). Semua monosakarida dan disakarida maltosa/laktosa adalah gula pereduksi; sukrosa bukan gula pereduksi karena kedua karbon anomeriknya terkunci dalam ikatan glikosida.`,
      keyFormulas: [
        { name: 'Titik Isoelektrik Asam Amino Netral', formula: 'pI = \\frac{pK_{a1} + pK_{a2}}{2}' },
        { name: 'Titik Isoelektrik Asam Amino Asam', formula: 'pI = \\frac{pK_{a1} + pK_{aR}}{2}' },
        { name: 'Titik Isoelektrik Asam Amino Basa', formula: 'pI = \\frac{pK_{aR} + pK_{a2}}{2}' },
      ],
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
      content: `### 1. Skema Reaksi Enzimatis & Pendekatan Keadaan Tunak (Steady-State):
Kinetika biokimia reaksi enzimatik satu substrat dimodelkan melalui mekanisme pembentukan kompleks enzim-substrat ($\\ce{ES}$):
$$\\ce{E + S <=> [k_1][k_{-1}] ES ->[k_{cat}] E + P}$$
di mana:
- $\\ce{E}$: Enzim bebas, $\\ce{S}$: Substrat, $\\ce{ES}$: Kompleks enzim-substrat, $\\ce{P}$: Produk.
- Konsentrasi enzim total terkonservasi: $[E]_0 = [E] + [ES]$.

Berdasarkan **Aproksimasi Keadaan Tunak Briggs-Haldane** ($\\frac{d[ES]}{dt} = 0$):
Laju pembentukan $\\ce{ES}$ sama dengan laju penguraian $\\ce{ES}$:
$$k_1 [E][S] = (k_{-1} + k_{cat})[ES]$$
Substitusikan $[E] = [E]_0 - [ES]$:
$$k_1 ([E]_0 - [ES])[S] = (k_{-1} + k_{cat})[ES]$$
$$[ES] = \\frac{[E]_0 [S]}{\\frac{k_{-1} + k_{cat}}{k_1} + [S]} = \\frac{[E]_0 [S]}{K_m + [S]}$$
di mana **Konstanta Michaelis ($K_m$)** didefinisikan sebagai:
$$K_m = \\frac{k_{-1} + k_{cat}}{k_1}$$

---

### 2. Persamaan Laju Awal Michaelis-Menten:
Laju pembentukan produk awal ($v_0$) adalah:
$$v_0 = \\frac{d[P]}{dt} = k_{cat}[ES] = \\frac{k_{cat}[E]_0 [S]}{K_m + [S]}$$
Ketika seluruh enzim jenuh oleh substrat ($[ES] \\to [E]_0$), laju reaksi mencapai nilai maksimum teoritis ($V_{\\max} = k_{cat}[E]_0$):
$$v_0 = \\frac{V_{\\max}[S]}{K_m + [S]}$$

**Interpretasi Parameter Kinetika Utama:**
1. **Konstanta Michaelis ($K_m$):**
   Konsentrasi substrat saat laju awal mencapai setengah laju maksimum ($v_0 = \\frac{1}{2}V_{\\max}$). Jika $k_{-1} \\gg k_{cat}$, $K_m \\approx K_d$ (kebalikan dari konstanta afinitas enzim terhadap substrat). Semakin kecil nilai $K_m$, semakin tinggi afinitas enzim terhadap substratnya.
2. **Turnover Number ($k_{cat}$):**
   Jumlah molekul substrat yang diubah menjadi produk per detik oleh satu molekul enzim aktif dalam kondisi jenuh ($k_{cat} = V_{\\max}/[E]_0$, berdimensi $\\text{s}^{-1}$).
3. **Efisiensi Katalitik ($k_{cat} / K_m$):**
   Konstanta laju orde kedua reaksi enzim bebas dengan substrat bebas pada $[S] \\ll K_m$. Batas maksimum efisiensi katalitik dibatasi oleh frekuensi tumbukan difusi molekul dalam larutan berair (**batas difusi Smoluchowski**, $10^8 - 10^9\\text{ M}^{-1}\\text{s}^{-1}$). Enzim dengan nilai $k_{cat}/K_m$ mendekati rentang ini dijuluki *katalisator kinetik sempurna*.

---

### 3. Plot Lineweaver-Burk (Transformasi Dua Resiprokal):
Membalik persamaan Michaelis-Menten menghasilkan hubungan linear:
$$\\frac{1}{v_0} = \\left(\\frac{K_m}{V_{\\max}}\\right) \\frac{1}{[S]} + \\frac{1}{V_{\\max}}$$
Grafik linear $\\frac{1}{v_0}$ (sumbu-y) terhadap $\\frac{1}{[S]}$ (sumbu-x) memberikan:
- **Kemiringan kurva (*Slope*):** $m = \\frac{K_m}{V_{\\max}}$
- **Titik potong sumbu-y (*y-intercept*):** $\\frac{1}{V_{\\max}}$
- **Titik potong sumbu-x (*x-intercept*):** $-\\frac{1}{K_m}$

---

### 4. Mekanisme & Diagnostik Grafik Inhibisi Enzim Reversibel:

| Jenis Inhibisi | Mekanisme Pengikatan Inhibitor | Parameter Nyata ($V_{\\max}^{\\text{app}}$ & $K_m^{\\text{app}}$) | Karakteristik Plot Lineweaver-Burk |
| :--- | :--- | :--- | :--- |
| **Kompetitif** | Inhibitor mirip substrat, bersaing mengikat sisi aktif enzim bebas ($\\ce{E + I <=> EI}$). | $V_{\\max}^{\\text{app}} = V_{\\max}$ (tetap)<br>$K_m^{\\text{app}} = \\alpha K_m > K_m$ (meningkat) | Garis berpotongan tepat di sumbu-y ($1/V_{\\max}$ identik). Kemiringan kurva meningkat seiring konsentrasi $[I]$. Inhibisi dapat diatasi dengan konsentrasi substrat sangat tinggi. |
| **Unkompetitif** | Inhibitor hanya mengikat kompleks enzim-substrat ($\\ce{ES + I <=> ESI}$), tidak dapat mengikat enzim bebas. | $V_{\\max}^{\\text{app}} = \\frac{V_{\\max}}{\\alpha'}$ (menurun)<br>$K_m^{\\text{app}} = \\frac{K_m}{\\alpha'}$ (menurun dengan rasio sama) | Sekumpulan garis-garis **sejajar sempurna** (*parallel lines*). Rasio kemiringan kurva $K_m/V_{\\max}$ konstan. |
| **Non-Kompetitif Murni** | Inhibitor mengikat sisi alosterik dengan afinitas sama pada $\\ce{E}$ bebas maupun kompleks $\\ce{ES}$ ($\\alpha = \\alpha'$). | $V_{\\max}^{\\text{app}} = \\frac{V_{\\max}}{\\alpha}$ (menurun)<br>$K_m^{\\text{app}} = K_m$ (tetap konstan) | Garis berpotongan tepat di sumbu-x pada nilai $-1/K_m$. |
| **Campuran (*Mixed*)** | Inhibitor mengikat sisi alosterik dengan afinitas berbeda antara $\\ce{E}$ bebas dan $\\ce{ES}$ ($\\alpha \\ne \\alpha'$). | $V_{\\max}^{\\text{app}} = \\frac{V_{\\max}}{\\alpha'}$ (menurun)<br>$K_m^{\\text{app}} = \\frac{\\alpha}{\\alpha'} K_m$ (berubah) | Garis berpotongan di kuadran II (jika $\\alpha > \\alpha'$) atau kuadran III (jika $\\alpha < \\alpha'$), bukan di sumbu koordinat. |

Faktor pengali pergeseran didefinisikan sebagai $\\alpha = 1 + \\frac{[I]}{K_i}$ dan $\\alpha' = 1 + \\frac{[I]}{K_i'}$.`,
      keyFormulas: [
        { name: 'Persamaan Laju Michaelis-Menten', formula: 'v_0 = \\frac{V_{\\max}[S]}{K_m + [S]}' },
        { name: 'Plot Lineweaver-Burk', formula: '\\frac{1}{v_0} = \\left(\\frac{K_m}{V_{\\max}}\\right)\\frac{1}{[S]} + \\frac{1}{V_{\\max}}' },
        { name: 'Konstanta Michaelis', formula: 'K_m = \\frac{k_{-1} + k_{cat}}{k_1}' },
        { name: 'Efisiensi Katalitik Enzim', formula: '\\text{Efisiensi} = \\frac{k_{cat}}{K_m}' },
      ],
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

**Langkah 1: [Analisis Faktor Mekanisme Reaksi]**
- Substrat: $2$-bromobutana adalah alkil halida sekunder ($2^\\circ$), yang secara prinsip dapat mengalami $S_N1, S_N2, E1,$ maupun $E2$.
- Nukleofil: Ion metoksida ($\\ce{CH3O-}$) adalah nukleofil bermuatan kuat (*strong nucleophile*).
- Pelarut: Dimetilformamida ($\text{DMF}$) adalah pelarut **polar aprotik**. Pelarut aprotik tidak membentuk ikatan hidrogen dengan ion $\\ce{CH3O-}$, sehingga ion metoksida tidak terkurung dalam sangkar solvasi dan berada dalam kondisi anion bebas sangat reaktif (*naked anion*).
- Karena nukleofil kuat berkonsentrasi tinggi dan berada dalam pelarut polar aprotik, laju penyerangan langsung bimolekular jauh melampaui laju ionisasi termal substrat. Reaksi berlangsung murni melalui mekanisme **$S_N2$**!

**Langkah 2: [Geometri Keadaan Transisi & Penyerangan Backside]**
1. Nukleofil $\\ce{CH3O-}$ mendekati atom karbon kiral C2 dari arah belakang (*backside attack*), tepat pada sudut $180^\\circ$ berlawanan dengan gugus pergi bromida ($\\ce{Br-}$).
2. Serangan ini mengarahkan densitas elektron ke dalam orbital antibonding $\\sigma^*_{\\ce{C-Br}}$.
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
4. Perhatikan bahwa molekul memiliki **bidang cermin simetri horizontal ($\sigma$)** yang membelah ikatan C2-C3 menjadi dua paruh yang identik sempurna!
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
- Alkena **trans ($E$)** $+$ Adisi **Anti** (seperti $\\ce{Br2}$) $\\implies$ Produk **MESO**
- Alkena **cis ($Z$)** $+$ Adisi **Anti** (seperti $\\ce{Br2}$) $\\implies$ Produk **RASEMAT $(\\pm)$**
*(Sebaliknya pada adisi Sin seperti dihidroksilasi $\\ce{OsO4}$: cis $\\to$ meso, trans $\\to$ rasemat).*

---

**Kesimpulan Evaluator Juri:**
Adisi bromin terbukti berlangsung stereospesifik anti murni $100\\%$ via intermediet ion bromonium siklik:
- $(E)\\text{-2-butena}$ menghasilkan **senyawa *meso*-2,3-dibromobutana** (optis inaktif internal).
- $(Z)\\text{-2-butena}$ menghasilkan **campuran rasemat $(\\pm)\\text{-2,3-dibromobutana}$** (pasangan enantiomer $2R,3R$ dan $2S,3S$).`,
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
- Titik isoelektrik ($pI = 3.22$) tercapai tepat pada titik tengah antara titik ekuivalen pertama ($V_1 = 50.0\\text{ mL}$, saat seluruh $\\alpha\\ce{-COOH}$ ternetralkan) dan awal titrasi, yaitu pada saat deprotonasi $\\alpha\\ce{-COOH}$ mencapai derajat konversi yang menghasilkan $[\\ce{H+}] = 10^{-3.22}\\text{ M}$.
- Pada titrasi analitik asam amino poliprotik, volume titran $\\ce{NaOH}$ untuk mencapai titik isoelektrik asam amino dikarboksilat adalah tepat **setengah volume ekuivalen pertama**:
$$V_{\\ce{NaOH}} = 50.0\\text{ mL} \\text{ (ekuivalen 1)} \\implies \\text{pada } pI = 3.22, \\text{ tercapai titik ekivalen pertama } V = 50.0\\text{ mL}$$
(Catatan: pada $V = 50.0\\text{ mL}$, spesies $\\ce{H2A}$ terbentuk kuantitatif sebesar $> 98\\%$).

**Langkah 4: [Spesiasi pada pH Fisiologis Darah (pH = 7.40)]**
Pada $\\text{pH} = 7.40$:
- Rasio $\\frac{[\\ce{HA-}]}{[\\ce{H2A}]}$:
$$\\text{pH} = pK_{aR} + \\log\\left(\\frac{[\\ce{HA-}]}{[\\ce{H2A}]}\\right) \\implies 7.40 = 4.25 + \\log\\left(\\frac{[\\ce{HA-}]}{[\\ce{H2A}]}\\right) \\implies \\log = 3.15 \\implies \\frac{[\\ce{HA-}]}{[\\ce{H2A}]} = 10^{3.15} = 1413$$
Konsentrasi $\\ce{H2A}$ hanya $0.07\\%$.
- Rasio $\\frac{[\\ce{A^2-}]}{[\\ce{HA-}]}$:
$$\\text{pH} = pK_{a2} + \\log\\left(\\frac{[\\ce{A^2-}]}{[\\ce{HA-}]}\\right) \\implies 7.40 = 9.67 + \\log\\left(\\frac{[\\ce{A^2-}]}{[\\ce{HA-}]}\\right) \\implies \\log = -2.27 \\implies \\frac{[\\ce{A^2-}]}{[\\ce{HA-}]} = 10^{-2.27} = 0.00537$$
Konsentrasi $\\ce{A^2-}$ hanya $0.53\\%$.
- Fraksi mol spesies monoanion $\\ce{HA-}$:
$$\\%\\ [\\ce{HA-}] = \\frac{1}{1 + 10^{-3.15} + 10^{-2.27}} \\times 100\\% = \\frac{1}{1 + 0.0007 + 0.00537} \\times 100\\% = \\frac{1}{1.00607} \\times 100\\% = 99.4\\%$$
- **Muatan Netto Rata-Rata:**
$$q_{\\text{netto}} = (0 \\times 0.0007) + (-1 \\times 0.994) + (-2 \\times 0.00537) = -0.994 - 0.0107 = -1.005 \\approx -1.00$$

---

**Kesimpulan Evaluator Juri:**
Asam L-glutamat memiliki titik isoelektrik **$pI = 3.22$** yang dikendalikan oleh kedua gugus karboksil ($pK_{a1}$ dan $pK_{aR}$). Pada pH fisiologis $7.40$, asam glutamat berada dalam bentuk monoanion terdeprotonasi ganda $\\ce{^-OOC-CH2CH2-CH(NH3+)-COO-}$ (**muatan netto $-1$**, kelimpahan $99.4\\%$), menjelaskan perannya sebagai neurotransmitter eksitatorik anionik polar di sistem saraf pusat.`,
    },
  ],
};
