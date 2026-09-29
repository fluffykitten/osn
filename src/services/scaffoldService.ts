import type { Question } from '../types/database';

export const DOMAIN_SCAFFOLDS = {
  stoichiometry: `1. Diketahui & Data Percobaan:
• Besaran terukur dari soal (massa / volume / tekanan / suhu): ....
• Nilai tetapan yang diperlukan ($R$, $Ar$, $Mr$): ....

2. Persamaan Reaksi Kimia Setara:
• Persamaan reaksi kimia 1: ....
• Persamaan reaksi kimia 2: ....
• Perbandingan koefisien reaksi (rasio stoikiometri): ....

3. Perhitungan Mol & Analisis Aljabar:
• Rumus konversi mol ($n = m/Mr$ atau $PV = nRT$): ....
• Substitusi data & penyusunan neraca mol: ....
• Pemodelan variabel ($x, y$) & langkah eliminasi/aljabar:
  ....

4. Jawaban Akhir & Kesimpulan:
• Nilai besaran yang ditanyakan: .... [Sertakan satuan]
• Verifikasi kelogisan hasil (fraksi mol / persen kemurnian): ....`,

  thermodynamics: `1. Data Termodinamika Standar ($298.15\\text{ K}$):
• Entalpi pembentukan standar ($\\Delta H_f^\\circ$): ....
• Entropi standar ($S^\\circ$) atau energi bebas ($\\Delta G_f^\\circ$): ....
• Suhu sistem ($T$) & tetapan gas ($R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$): ....

2. Persamaan Reaksi & Siklus Termodinamika:
• Persamaan reaksi proses termal: ....
• Hukum Hess / Siklus termodinamika yang diterapkan: ....

3. Perhitungan $\\Delta H^\\circ$, $\\Delta S^\\circ$, $\\Delta G^\\circ$ & Tetapan Kesetimbangan ($K_p$):
• Rumus $\\Delta H^\\circ_{\\text{rxn}} = \\sum \\Delta H_f^\\circ(\\text{produk}) - \\sum \\Delta H_f^\\circ(\\text{reaktan})$: ....
• Rumus $\\Delta S^\\circ_{\\text{rxn}} = \\sum S^\\circ(\\text{produk}) - \\sum S^\\circ(\\text{reaktan})$: ....
• Rumus energi bebas Gibbs $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$: ....
• Hubungan tetapan kesetimbangan $\\Delta G^\\circ = -RT \\ln K_p$: ....
• Perhitungan nilai $K_p = e^{-\\Delta G^\\circ / RT}$: ....

4. Jawaban Akhir & Analisis Spontanitas:
• Nilai $\\Delta H^\\circ_{\\text{rxn}}$, $\\Delta S^\\circ_{\\text{rxn}}$, $\\Delta G^\\circ$: ....
• Nilai $K_p$: ....
• Kesimpulan kespontanan reaksi (spontan $\\Delta G < 0$ / kesetimbangan): ....`,

  electrochemistry: `1. Data Potensial Reduksi Standar ($E^\\circ$) & Spesies Sel:
• Setengah reaksi katoda (reduksi): ....
• Setengah reaksi anoda (oksidasi): ....
• Potensial sel terukur ($E_{\\text{sel}}$) atau standar ($E^\\circ$): ....
• Jumlah elektron yang terlibat ($n$): ....
• Tetapan Nernst ($\\frac{2.303 RT}{F}$): ....

2. Reaksi Sel & Potensial Sel Standar ($E^\\circ_{\\text{sel}}$):
• Persamaan reaksi sel keseluruhan: ....
• Perhitungan $E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}}$: ....

3. Aplikasi Persamaan Nernst / Hubungan Kelarutan ($K_{sp}$):
• Bentuk persamaan Nernst: ....
• Kuosien reaksi $Q$: ....
• Substitusi data & perhitungan aljabar konsentrasi ion:
  ....
• Perhitungan nilai $K_{sp}$ / $\\Delta G^\\circ_{\\text{sel}}$: ....

4. Jawaban Akhir & Kesimpulan:
• Persamaan reaksi sel bersih: ....
• Nilai potensial sel / konsentrasi ion / $K_{sp}$: ....
• Kesimpulan proses sel galvani / elektrolisis: ....`,

  kinetics: `1. Data Eksperimen Laju Reaksi:
• Tabel konsentrasi awal reaktan ($[A]_0, [B]_0$) dan laju awal ($v_0$): ....
• Suhu pengujian ($T$) & tetapan reaksi: ....

2. Penentuan Orde Reaksi & Persamaan Hukum Laju:
• Analisis rasio percobaan untuk mencari orde parsial ($m$ dan $n$): ....
• Bentuk persamaan hukum laju reaksi: ....

3. Perhitungan Tetapan Laju ($k$) & Waktu Paruh / Energi Aktivasi ($E_a$):
• Substitusi salah satu percobaan untuk menghitung nilai $k$ dan satuannya: ....
• Perhitungan waktu paruh ($t_{1/2}$) atau persamaan Arrhenius:
  ....

4. Jawaban Akhir & Usulan Mekanisme Reaksi:
• Nilai laju reaksi baru / tetapan $k$ / energi aktivasi $E_a$: ....
• Tahapan penentu laju (*rate-determining step* / RDS): ....`,

  equilibrium_acid_base: `1. Data Spesies Kimia & Tetapan Kesetimbangan:
• Konsentrasi awal dan volume masing-masing larutan: ....
• Nilai tetapan ($K_a, K_b, K_w$, atau $K_{sp}$): ....

2. Persamaan Kesetimbangan & Tabel M-R-S:
• Persamaan reaksi kesetimbangan: ....
• Tabel stoikiometri M-R-S (Mula-mula, Reaksi, Sisa/Setimbang):
  ....

3. Perhitungan Konsentrasi Ion $[\\ce{H+}]$, $[\\ce{OH-}]$ atau Kelarutan ($s$):
• Rumus yang relevan (asam/basa lemah, buffer, hidrolisis, $K_{sp}$): ....
• Substitusi nilai ke persamaan kesetimbangan:
  ....

4. Jawaban Akhir & Kesimpulan:
• Nilai pH, pOH, derajat disosiasi ($\\alpha$), atau kelarutan ($s$): ....
• Kesimpulan kondisi larutan (larut / tepat jenuh / mengendap): ....`,

  atomic_structure: `1. Data Partikel, Nomor Atom & Muatan:
• Nomor atom ($Z$), massa atom, nomor massa, atau muatan kation/anion: ....

2. Konfigurasi Elektron & Diagram Orbital:
• Prinsip Aufbau, Larangan Pauli, dan Aturan Hund:
  Konfigurasi elektron: ....
• Diagram orbital elektron valensi: ....

3. Penentuan Bilangan Kuantum & Geometri / Ikatan:
• 4 bilangan kuantum elektron terakhir ($n, l, m_l, m_s$): ....
• Analisis VSEPR / Domain Elektron / Hibridisasi: ....
• Muatan formal & struktur resonansi Lewis (jika relevan): ....

4. Jawaban Akhir & Sifat Fisik/Magnetik:
• Nilai set bilangan kuantum / nama geometri molekul: ....
• Kesimpulan kepolaran & sifat magnetik (paramagnetik/diamagnetik): ....`,

  organic_chemistry: `1. Identifikasi Rumus Molekul & Derajat Ketidakjenuhan:
• Rumus molekul teridentifikasi: ....
• Perhitungan derajat ketidakjenuhan (DBE / IHD): ....
• Analisis gugus fungsi berdasarkan data reagen / spektrum: ....

2. Analisis Stereokimia & Pusat Kiral:
• Identifikasi atom karbon kiral ($C^*$): ....
• Aturan prioritas Cahn-Ingold-Prelog (CIP): ....
• Penentuan konfigurasi stereoisomer ($R/S$ atau $E/Z$): ....

3. Jalur Mekanisme Reaksi & Pembentukan Zat Antara:
• Tipe mekanisme ($S_N1, S_N2, E1, E2$, adisi elektrofilik, substitusi): ....
• Struktur zat antara (karbokation, radikal, kompleks transisi):
  ....

4. Struktur Produk Akhir & Regioselektivitas:
• Struktur produk utama (mengikuti aturan Markovnikov / Zaitsev): ....
• Stereokimia produk akhir (inversi, rasemisasi, atau retensi): ....`,

  qualitative_reasoning: `1. Identifikasi Fenomena & Spesies Kimia:
• Objek/spesies yang diamati (konfigurasi elektron / fasa / muatan / struktur): ....
• Fenomena kunci yang terjadi / data kualitatif soal: ....

2. Prinsip Kimia & Aturan Fundamental:
• Teori / aturan acuan (VSEPR / $Z_{\\text{eff}}$ / Aturan Hund / Gaya London / Ikatan H / Le Chatelier): ....
• Kondisi pembanding (faktor penentu kestabilan / kekuatan tolakan): ....

3. Analisis Komparatif & Hubungan Sebab-Akibat:
• Penjelasan mikroskopis fenomena (tolakan elektron / polarisabilitas / shielding effect):
  ....
• Perbandingan antar opsi / spesi: ....

4. Kesimpulan Logis & Prediksi Karakteristik:
• Kesimpulan akhir (urutan tren sifat fisik / bentuk geometri / kepolaran / penjelasan kausalitas): ....`,

  spectroscopy_analytical: `1. Rumus Molekul & Derajat Ketidakjenuhan:
• Rumus molekul analit & perhitungan DBE / IHD: ....
• Implikasi jumlah cincin dan/atau ikatan rangkap ($\\ce{C=C}, \\ce{C=O}$, cincin aromatik): ....

2. Identifikasi Gugus Fungsi (Spektrum IR & MS):
• Puncak serapan diagnostik IR (frekuensi bilangan gelombang $\\text{cm}^{-1}$): ....
• Puncak ion molekular ($M^+$) & pola fragmentasi MS: ....

3. Pemetaan Lingkungan Inti (Spektrum $^1\\text{H}$ & $^{13}\\text{C}$ NMR):
• Tabulasi sinyal NMR (geseran kimia $\\delta$ ppm, integrasi jumlah H, multiplisitas sinyal):
  ....
• Perakitan sub-struktur / fragmen molekul: ....

4. Struktur Final & Penamaan IUPAC:
• Usulan struktur molekul lengkap beserta stereokimia (jika ada): ....
• Nama IUPAC & konfirmasi kompatibilitas seluruh data: ....`,

  inorganic_coordination: `1. Identifikasi Logam Pusat & Bilangan Oksidasi:
• Atom/ion logam pusat & bilangan oksidasinya ($n+$): ....
• Konfigurasi elektron ion logam pusat ($d^n$): ....
• Jenis ligan (monodentat / bidentat / polidentat) & bilangan koordinasi (CN): ....

2. Geometri Kompleks & Teori Medan Kristal (CFT):
• Kekuatan medan ligan (deret spektrokimi: ligan medan kuat vs medan lemah): ....
• Pembelahan orbital $d$ ($\\Delta_o$ oktahedral atau $\\Delta_t$ tetrahedral): ....
• Pengisian elektron: high-spin vs low-spin: ....

3. Isomerisme & Sifat Fisik/Magnetik:
• Analisis sifat magnetik (jumlah elektron tak berpasangan $\\implies$ paramagnetik/diamagnetik): ....
• Momen magnetik teoritis ($\\mu_{\\text{eff}} = \\sqrt{n(n+2)}\\ \\text{BM}$): ....
• Jenis isomer (geometri cis/trans, optik, koordinasi, ionisasi): ....

4. Formula Kimiawi & Nama Kompleks IUPAC:
• Rumus kimia kation/anion kompleks: ....
• Tata nama IUPAC resmi senyawa koordinasi: ....`,

  // =========================================================================
  // SUBTOPIK & KONSEP SPESIFIK TINGKAT TINGGI (FINE-GRAINED CONCEPTS)
  // =========================================================================

  formal_charge_resonance: `1. Identifikasi Elektron Valensi Bebas Atom Netral:
• Elektron valensi bebas masing-masing atom netral ($V$): ....
• Jumlah total elektron valensi & muatan ion (misal: anion / kation): ....
• Jumlah pasangan elektron bebas (PEB) & garis ikatan pada tiap struktur: ....

2. Penghitungan Muatan Formal ($FC$) Tiap Atom:
• Rumus: $FC = V - \\text{titik PEB} - \\text{garis ikatan}$ (atau $V - N_{\\text{non-bonding}} - \\frac{1}{2}N_{\\text{bonding}}$):
• Perhitungan $FC$ struktur pertama: ....
• Perhitungan $FC$ struktur kedua: ....
• Perhitungan $FC$ struktur ketiga: ....

3. Evaluasi Kriteria Kestabilan Kontributor Resonansi:
• Kriteria 1 (Minimalisasi muatan formal): Struktur dengan pemisahan muatan terkecil/mendekati nol paling stabil: ....
• Kriteria 2 (Kesesuaian elektronegativitas): Muatan formal negatif wajib berada pada atom dengan skala elektronegativitas ($\\chi$) lebih tinggi: ....

4. Kesimpulan Kontributor Mayor & Minor:
• Kontributor Mayor (Paling Stabil): .... [Sertakan alasan ilmiah]
• Kontributor Paling Minor (Paling Tidak Stabil): ....`,

  molecular_geometry_vsepr: `1. Penentuan Domain Elektron Atom Pusat:
• Elektron valensi atom pusat ($V$) & pasangan elektron ikatan (PEI): ....
• Pasangan elektron bebas (PEB) atom pusat: $E = \\frac{V - \\text{PEI}}{2}$ = ....
• Total domain sterik atom pusat: ....

2. Tipe Molekul & Geometri Domain Elektron Dasar:
• Tipe molekul VSEPR ($AX_mE_n$): ....
• Geometri domain dasar (Linear / Segitiga Datar / Tetrahedral / Bipiramida Trigonal / Oktahedral): ....

3. Geometri Molekul Aktual & Distorsi Sudut:
• Penataan posisi PEB (ekuatorial vs aksial untuk meminimalkan tolakan $90^\\circ$): ....
• Bentuk molekul aktual (akibat tolakan PEB-PEB > PEB-PEI > PEI-PEI): ....
• Besar sudut ikatan teoritis vs terdistorsi: ....

4. Kesimpulan Bentuk Molekul & Momen Dipol:
• Nama geometri molekul: ....
• Analisis kepolaran & momen dipol (simetris $\\mu = 0$ nonpolar vs asimetris $\\mu > 0$ polar): ....`,

  intermolecular_forces: `1. Identifikasi Polaritas Molekul & Gugus Fungsi:
• Bentuk geometri & distribusi kerapatan elektron molekul: ....
• Sifat kepolaran molekul (polar $\\mu > 0$ vs nonpolar $\\mu = 0$): ....

2. Identifikasi Jenis Gaya Antarmolekul yang Bekerja:
• Gaya dispersi London (fluktuasi dipol sesaat): ....
• Interaksi dipol-dipol permanen: ....
• Ikatan hidrogen (donor-akseptor dengan atom N, O, atau F): ....

3. Analisis Kekuatan Interaksi & Ukuran Molekul:
• Massa molar ($Mr$), ukuran awan elektron, & polarisabilitas: ....
• Luas permukaan sentuh molekul (efek percabangan rantai karbon): ....

4. Kesimpulan & Prediksi Sifat Fisik:
• Urutan kekuatan gaya antarmolekul total: ....
• Prediksi urutan titik didih / kelarutan / tekanan uap / volatilitas: ....`,

  born_haber_cycle: `1. Identifikasi Tahapan Termokimia Pembentukan Kisi:
• Entalpi pembentukan standar kristal ionik ($\\Delta H_f^\\circ$): ....
• Tahap sublimasi/atomisasi logam ($\\Delta H_{\\text{sub}}$): ....
• Tahap energi ionisasi kation ($IE_1, IE_2, ...$): ....
• Tahap disosiasi ikatan molekul nonlogam ($\\Delta H_{\\text{dis}}$): ....
• Tahap afinitas elektron anion ($EA_1, EA_2$): ....

2. Formulasi Persamaan Siklus Born-Haber:
• Hukum Hess siklus energi:
  $\\Delta H_f^\\circ = \\Delta H_{\\text{sub}} + \\sum IE + \\frac{1}{2}\\Delta H_{\\text{dis}} + \\sum EA + \\Delta H_{\\text{kisi}}$

3. Substitusi Data Termodinamika & Perhitungan Aljabar:
• Substitusi nilai masing-masing besaran bertanda ($+/-$):
  ....
• Isolasi variabel energi kisi ($\\Delta H_{\\text{kisi}}$): ....

4. Jawaban Akhir & Kesimpulan Kestabilan Kisi:
• Nilai energi kisi kristal ionik: .... [kJ/mol]
• Kesimpulan pengaruh muatan ion ($q_1 \\cdot q_2$) dan jarak antar inti ($r_0$): ....`,

  molecular_orbital_theory: `1. Jumlah Total Elektron Valensi Spesi Diatomik:
• Elektron valensi atom pembentuk & penyesuaian muatan ion: ....
• Total elektron valensi untuk diagram orbital molekul: ....

2. Diagram Tingkat Energi Orbital Molekul:
• Tinjauan pencampuran orbital (s-p mixing untuk $Z \\le 7$ vs tanpa mixing untuk $Z \\ge 8$): ....
• Urutan pengisian elektron orbital molekul (Aufbau & Hund):
  ....

3. Penghitungan Orde Ikatan (Bond Order):
• Elektron pada orbital bonding ($N_b$): ....
• Elektron pada orbital anti-bonding ($N_a$): ....
• Rumus: $\\text{Orde Ikatan} = \\frac{1}{2}(N_b - N_a)$ = ....

4. Kesimpulan Sifat Magnetik & Kekuatan Ikatan:
• Sifat magnetik (paramagnetik jika ada elektron tunggal / diamagnetik jika semua berpasangan): ....
• Korelasi orde ikatan dengan panjang ikatan dan stabilitas spesi: ....`,

  hybridization_bonding: `1. Identifikasi Struktur Lewis & Pasangan Elektron:
• Kerangka ikatan atom-atom: ....
• Jumlah domain elektron (ikatan $\\sigma$ + PEB) pada atom target: ....

2. Penentuan Tipe Hibridisasi Orbital:
• Jumlah domain 2 $\\implies sp$; 3 $\\implies sp^2$; 4 $\\implies sp^3$; 5 $\\implies sp^3d$; 6 $\\implies sp^3d^2$
• Hibridisasi orbital atom target: ....

3. Penghitungan Jumlah Ikatan Sigma ($\\sigma$) dan Pi ($\\pi$):
• Ikatan tunggal = $1\\sigma$; ikatan rangkap dua = $1\\sigma + 1\\pi$; ikatan rangkap tiga = $1\\sigma + 2\\pi$
• Jumlah total ikatan $\\sigma$: ....
• Jumlah total ikatan $\\pi$: ....

4. Kesimpulan Karakter Orbital & Geometri Lokal:
• Persentase karakter-s dan pengaruhnya terhadap kekuatan/panjang ikatan: ....
• Geometri lokal di sekitar atom target: ....`,

  periodic_trends: `1. Konfigurasi Elektron & Posisi dalam SPU:
• Konfigurasi elektron unsur-unsur: ....
• Jumlah kulit elektron ($n$) $\\implies$ nomor periode: ....
• Elektron valensi $\\implies$ nomor golongan: ....

2. Analisis Muatan Inti Efektif ($Z_{\\text{eff}}$) & Efek Perisai:
• Jumlah proton di inti ($Z$): ....
• Tetapan perisai elektron dalam ($S$) berdasarkan aturan Slater: ....
• Muatan inti efektif ($Z_{\\text{eff}} = Z - S$): ....

3. Evaluasi Kekuatan Gaya Tarik Inti terhadap Elektron Valensi:
• Analisis faktor dominan (jumlah kulit dalam satu golongan vs $Z_{\\text{eff}}$ dalam satu periode): ....
• Dampak terhadap kemudahan pelepasan atau penarikan elektron: ....

4. Kesimpulan Urutan Tren Sifat Periodik:
• Urutan logis sifat periodik (jari-jari / energi ionisasi / keelektronegatifan): ....`,

  titration_neutralization: `1. Data Percobaan Titrasi Netralisasi:
• Spesies titran (larutan standar): volume ($V_b$) & konsentrasi ($M_b$): ....
• Spesies titrat (analit di labu): volume ($V_a$): ....
• Indikator asam-basa yang digunakan: ....

2. Persamaan Reaksi Netralisasi Setara:
• Persamaan reaksi kimia setara: ....
• Perbandingan koefisien (rasio valensi asam $a$ dan basa $b$): ....

3. Neraca Mol pada Titik Ekivalen:
• Rumus titik ekivalen: $a \\cdot M_a \\cdot V_a = b \\cdot M_b \\cdot V_b$
• Substitusi data percobaan:
  ....
• Perhitungan konsentrasi analit ($M_a$): ....

4. Jawaban Akhir & Titik Akhir Titrasi:
• Konsentrasi / kadar analit yang ditentukan: .... [Sertakan satuan]
• Fenomena perubahan warna indikator pada titik akhir titrasi: ....`,

  buffer_hydrolysis: `1. Identifikasi Komponen Campuran:
• Mol asam ($n_a = M_a \\times V_a$) dan mol basa ($n_b = M_b \\times V_b$): ....
• Nilai tetapan ionisasi ($K_a$ atau $K_b$): ....

2. Tabel Stoikiometri Reaksi (M-R-S):
• Persamaan reaksi netralisasi: ....
• Komposisi setelah reaksi: spesi sisa & garam yang terbentuk:
  ....

3. Identifikasi Jenis Sistem:
• Buffer: Asam/basa lemah sisa + basa/asam konjugasi $\\implies [\\ce{H+}] = K_a \\times \\frac{n_{\\text{asam}}}{n_{\\text{garam}}}$
• Hidrolisis: Asam & basa tepat habis bereaksi $\\implies [\\ce{H+}] = \\sqrt{\\frac{K_w}{K_b}[G]}$ atau $[\\ce{OH-}] = \\sqrt{\\frac{K_w}{K_a}[G]}$

4. Perhitungan Nilai pH Akhir:
• Substitusi nilai ke rumus terpilih: ....
• Nilai pH larutan akhir: ....`,

  solubility_ksp: `1. Persamaan Kesetimbangan Kelarutan:
• Reaksi pelarutan garam: $\\ce{M_x A_y(s) <=> x M^{y+}(aq) + y A^{x-}(aq)}$
• Hubungan kelarutan ($s$) dengan ion-ion: $[M^{y+}] = x\\cdot s$ dan $[A^{x-}] = y\\cdot s$

2. Formulasi Ungkapan $K_{sp}$:
• $K_{sp} = [M^{y+}]^x [A^{x-}]^y = x^x y^y \\cdot s^{x+y}$

3. Substitusi Data & Pengaruh Ion Sejenis / Kuosien $Q_{sp}$:
• Perhitungan kelarutan dalam air murni atau larutan ion sejenis:
  ....
• Evaluasi kuosien reaksi $Q_{sp}$ terhadap nilai $K_{sp}$: ....

4. Jawaban Akhir & Prediksi Pengendapan:
• Nilai kelarutan ($s$) / massa zat terlarut / nilai $K_{sp}$: .... [Sertakan satuan]
• Kondisi larutan (belum jenuh / tepat jenuh / terbentuk endapan): ....`,

  colligative_properties: `1. Data Larutan & Sifat Elektrolit:
• Massa zat terlarut ($g_t$), massa pelarut ($g_p$), & tetapan $K_b$ / $K_f$: ....
• Sifat elektrolit: non-elektrolit ($i = 1$) vs elektrolit ($i = 1 + (n-1)\\alpha$): ....

2. Perhitungan Konsentrasi Molal ($m$) atau Molar ($M$):
• $m = \\frac{g_t}{Mr} \\times \\frac{1000}{g_p}$: ....

3. Formulasi Persamaan Sifat Koligatif Terkait:
• Penurunan titik beku: $\\Delta T_f = m \\times K_f \\times i$ $\\implies T_f = T_f^\\circ - \\Delta T_f$
• Kenaikan titik didih: $\\Delta T_b = m \\times K_b \\times i$ $\\implies T_b = T_b^\\circ + \\Delta T_b$
• Tekanan osmotik: $\\pi = M \\times R \\times T \\times i$
• Penurunan tekanan uap: $\\Delta P = P^\\circ \\times X_t \\times i$

4. Jawaban Akhir & Kesimpulan:
• Nilai sifat koligatif / suhu fasa baru / massa molar ($Mr$) zat terlarut: .... [Sertakan satuan]`,

  reaction_rate_order: `1. Data Percobaan Kinetika:
• Tabel konsentrasi awal reaktan & laju reaksi ($v$) atau waktu ($t$): ....
• Hubungan laju terhadap waktu: $v = 1/t$ (jika data berupa waktu): ....

2. Penentuan Orde Reaksi Parsial Tiap Reaktan:
• Membandingkan dua percobaan dengan konsentrasi reaktan lain tetap:
  $\\frac{v_1}{v_2} = \\left(\\frac{[A]_1}{[A]_2}\\right)^m$ $\\implies$ Orde $m$ = ....
  $\\frac{v_1}{v_3} = \\left(\\frac{[B]_1}{[B]_3}\\right)^n$ $\\implies$ Orde $n$ = ....
• Total orde reaksi ($m + n$): ....

3. Perhitungan Tetapan Laju Reaksi ($k$):
• Persamaan hukum laju: $v = k [A]^m [B]^n$
• Substitusi salah satu nomor percobaan untuk mencari $k$ beserta satuannya:
  ....

4. Jawaban Akhir & Prediksi Laju:
• Persamaan hukum laju reaksi lengkap: ....
• Nilai laju reaksi pada konsentrasi baru yang ditanyakan: ....`,

  chemical_equilibrium: `1. Persamaan Reaksi Kesetimbangan Setara:
• Reaksi kesetimbangan bolak-balik: ....
• Fasa zat yang diperhitungkan dalam $K_c$ ($aq, g$) dan $K_p$ ($g$ saja): ....

2. Penyusunan Tabel Mula-Mula, Reaksi, Setimbang (M-R-S):
• Komposisi awal (mol atau tekanan parsial): ....
• Perubahan stoikiometri dengan variabel $x$: ....
• Komposisi saat setimbang: ....

3. Formulasi Ungkapan $K_c$ / $K_p$ & Kalkulasi Nilai $x$:
• $K_c = \\frac{[\\text{Produk}]^{\\text{koef}}}{[\\text{Reaktan}]^{\\text{koef}}}$ atau $K_p = \\frac{(P_{\\text{Produk}})^{\\text{koef}}}{(P_{\\text{Reaktan}})^{\\text{koef}}}$
• Substitusi spesi setimbang ke dalam persamaan:
  ....
• Penyelesaian aljabar nilai $x$: ....

4. Jawaban Akhir & Evaluasi Kualitatif:
• Nilai tetapan kesetimbangan / derajat disosiasi ($\\alpha = x / \\text{mula-mula}$): ....
• Prediksi arah pergeseran kesetimbangan (Asas Le Chatelier): ....`,

  redox_balancing: `1. Penentuan Bilangan Oksidasi Masing-Masing Unsur:
• Biloks unsur sebelum reaksi: ....
• Biloks unsur sesudah reaksi: ....
• Identifikasi reaksi reduksi (penurunan biloks) dan oksidasi (kenaikan biloks): ....

2. Penyetaraan Setengah Reaksi (Metode Ion-Elektron / PBO):
• Setarakan atom yang mengalami perubahan biloks: ....
• Setarakan atom oksigen (tambah $\\ce{H2O}$) dan hidrogen (tambah $\\ce{H+}$ atau $\\ce{OH-}$): ....
• Setarakan muatan listrik dengan menambahkan elektron ($e^-$):
  Setengah reaksi oksidasi: ....
  Setengah reaksi reduksi: ....

3. Penyetaraan Elektron & Penggabungan Reaksi:
• Kalikan koefisien agar jumlah elektron yang dilepas = elektron yang diserap: ....
• Jumlahkan kedua setengah reaksi & eliminasi spesi yang sama di kedua ruas: ....

4. Persamaan Reaksi Redoks Utuh Setara:
• Persamaan reaksi bersih setara: ....
• Verifikasi kesetaraan jumlah atom dan total muatan listrik di kedua ruas: ....`,

  galvanic_cell: `1. Data Potensial Reduksi Standar ($E^\\circ$) Elektroda:
• Nilai $E^\\circ$ masing-masing setengah sel: ....
• Elektroda dengan $E^\\circ$ lebih positif $\\implies$ **Katoda** (Reduksi): ....
• Elektroda dengan $E^\\circ$ lebih negatif $\\implies$ **Anoda** (Oksidasi): ....

2. Penulisan Reaksi Sel & Notasi Diagram Sel:
• Reaksi di Katoda (+): ....
• Reaksi di Anoda (-): ....
• Reaksi sel bersih: ....
• Notasi sel Volta: $\\text{Anoda} \\mid \\text{Ion Anoda} \\parallel \\text{Ion Katoda} \\mid \\text{Katoda}$: ....

3. Perhitungan Potensial Sel Standar ($E^\\circ_{\\text{sel}}$) / Persamaan Nernst:
• $E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}}$: ....
• Jika kondisi non-standar: $E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{0.0592}{n}\\log Q$:
  ....

4. Kesimpulan Kespontanan & Aliran Elektron:
• Nilai potensial sel terhitung: .... [V]
• Kespontanan reaksi ($E_{\\text{sel}} > 0 \\implies$ reaksi spontan): ....
• Arah aliran elektron (dari anoda bermuatan negatif menuju katoda bermuatan positif): ....`,

  electrolysis_faraday: `1. Identifikasi Elektrolit & Jenis Elektroda:
• Kation dan anion dalam larutan/lelehan: ....
• Jenis elektroda (inert: Pt, C, Au vs non-inert / reaktif): ....

2. Reaksi di Katoda dan Anoda:
• Reaksi reduksi di Katoda (kation atau reduksi air $\\ce{2H2O + 2e- -> H2 + 2OH-}$): ....
• Reaksi oksidasi di Anoda (anion sisa asam oksi/anion lain atau oksidasi air $\\ce{2H2O -> O2 + 4H+ + 4e-}$): ....

3. Aplikasi Hukum Faraday & Perhitungan Kuantitatif:
• Muatan listrik: $Q = I \\times t$ (Coulomb) $\\implies$ Mol elektron: $F = \\frac{I \\times t}{96500}$
• Massa zat yang terbentuk di elektroda: $w = \\frac{e \\times I \\times t}{96500} = \\frac{Ar \\times I \\times t}{n \\times 96500}$:
  ....

4. Jawaban Akhir & Kesimpulan:
• Massa zat / volume gas (STP) yang dihasilkan di elektroda: .... [Sertakan satuan]`,

  organic_nomenclature_isomerism: `1. Identifikasi Rantai Utama & Gugus Fungsi Senyawa Karbon:
• Rantai karbon terpanjang yang memuat gugus fungsi: ....
• Gugus fungsi utama (alkohol, eter, aldehid, keton, asam karboksilat, ester, amina): ....
• Penomoran rantai karbon (gugus fungsi mendapat nomor serendah mungkin): ....

2. Penentuan Posisi & Jenis Cabang/Substituen:
• Nama dan letak gugus alkil / halogen: ....

3. Analisis Jenis Isomerisme:
• Isomer struktur (rangka / posisi / gugus fungsi): ....
• Isomer ruang/stereoisomer (geometri cis-trans / optik aktif dengan atom C kiral $C^*$): ....

4. Kesimpulan Nama IUPAC & Struktur:
• Nama IUPAC resmi senyawa: ....
• Gambar struktur atau jumlah isomer yang terbentuk: ....`,

  lab_safety_scientific_method: `1. Identifikasi Bahan Kimia, Simbol Piktogram (GHS), atau Masalah Ilmiah:
• Bahan kimia yang digunakan & simbol bahaya GHS (mudah terbakar / korosif / toksik / iritan): ....
• Masalah ilmiah / hipotesis yang diuji: ....

2. Prinsip Keselamatan Kerja Lab (K3) & Alat Pelindung:
• Alat Pelindung Diri (APD) yang wajib (jas lab, kacamata goggle, sarung tangan nitril): ....
• Lokasi penanganan (lemari asam untuk uap beracun/asam pekat): ....

3. Prosedur Penanganan Darurat & Variabel Eksperimen:
• Prosedur saat terjadi tumpahan / kontak fisik (shower darurat / eyewash / P3K): ....
• Identifikasi variabel bebas, terikat, dan kontrol: ....

4. Kesimpulan Prosedur K3 yang Benar / Solusi Penanganan:
• Solusi penanganan limbah B3 / tindakan keselamatan yang tepat: ....`,

  general: `1. Diketahui & Data Soal:
• Data dan besaran yang diketahui dari soal: ....
• Nilai tetapan atau parameter relevan: ....

2. Prinsip Kimia & Persamaan Reaksi / Formulasi:
• Prinsip kimiawi atau persamaan reaksi setara: ....
• Hubungan ilmiah antar variabel: ....

3. Analisis Pemecahan Masalah & Kalkulasi Bertahap:
• Alur penurunan konsep atau perhitungan:
  ....
• Langkah pengolahan data:
  ....

4. Jawaban Akhir & Kesimpulan:
• Jawaban yang ditanyakan beserta satuan: ....
• Kesimpulan logis kimiawi: ....`,
};

export type ScaffoldDomainKey = keyof typeof DOMAIN_SCAFFOLDS;

export interface ScaffoldDomainInfo {
  key: ScaffoldDomainKey;
  label: string;
  category: 'quantitative' | 'qualitative' | 'specialized';
  iconName: 'calculator' | 'lightbulb' | 'microscope' | 'flask' | 'atom' | 'layers';
  description: string;
  isCustomTemplate?: boolean;
}

export const DOMAIN_INFO_MAP: Record<ScaffoldDomainKey, ScaffoldDomainInfo> = {
  formal_charge_resonance: {
    key: 'formal_charge_resonance',
    label: 'Muatan Formal & Kestabilan Resonansi',
    category: 'specialized',
    iconName: 'atom',
    description: 'Perhitungan muatan formal FC, aturan oktet, dan evaluasi kontributor mayor/minor',
  },
  molecular_geometry_vsepr: {
    key: 'molecular_geometry_vsepr',
    label: 'Geometri Molekul & Teori VSEPR',
    category: 'specialized',
    iconName: 'atom',
    description: 'Domain elektron, tipe molekul AXmEn, distorsi sudut ikatan, dan momen dipol',
  },
  intermolecular_forces: {
    key: 'intermolecular_forces',
    label: 'Gaya Antarmolekul & Sifat Fisis',
    category: 'qualitative',
    iconName: 'lightbulb',
    description: 'Ikatan hidrogen, gaya London, dipol permanen, dan anomali titik didih',
  },
  born_haber_cycle: {
    key: 'born_haber_cycle',
    label: 'Siklus Born-Haber & Energi Kisi',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Termokimia kisi kristal ionik, hukum Hess, sublimasi, ionisasi, dan afinitas',
  },
  molecular_orbital_theory: {
    key: 'molecular_orbital_theory',
    label: 'Teori Orbital Molekul (MOT)',
    category: 'specialized',
    iconName: 'atom',
    description: 'Diagram MO diatomik, orde ikatan, pencampuran s-p, dan sifat kemagnetan',
  },
  hybridization_bonding: {
    key: 'hybridization_bonding',
    label: 'Hibridisasi & Ikatan Sigma/Pi',
    category: 'specialized',
    iconName: 'atom',
    description: 'Orbital hibrida sp/sp2/sp3, ikatan sigma dan pi, serta karakter-s',
  },
  periodic_trends: {
    key: 'periodic_trends',
    label: 'Tren Sifat Keperiodikan Unsur',
    category: 'qualitative',
    iconName: 'lightbulb',
    description: 'Jari-jari atom, energi ionisasi bertingkat, keelektronegatifan, dan muatan inti efektif',
  },
  titration_neutralization: {
    key: 'titration_neutralization',
    label: 'Titrasi Netralisasi Asam-Basa',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Neraca titik ekivalen, kurva titrasi, pemilihan indikator, dan konsentrasi analit',
  },
  buffer_hydrolysis: {
    key: 'buffer_hydrolysis',
    label: 'Larutan Penyangga & Hidrolisis',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Tabel stoikiometri M-R-S, rumus Henderson-Hasselbalch, dan perhitungan pH larutan',
  },
  solubility_ksp: {
    key: 'solubility_ksp',
    label: 'Kelarutan & Hasil Kali Kelarutan (Ksp)',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Hubungan kelarutan molar s dan Ksp, efek ion sejenis, dan prediksi endapan Qsp',
  },
  colligative_properties: {
    key: 'colligative_properties',
    label: 'Sifat Koligatif Larutan',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Penurunan titik beku, kenaikan titik didih, tekanan osmotik, dan faktor Van t Hoff',
  },
  reaction_rate_order: {
    key: 'reaction_rate_order',
    label: 'Hukum Laju & Orde Reaksi',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Metode rasio laju awal, penentuan orde parsial, nilai tetapan k, dan waktu paruh',
  },
  chemical_equilibrium: {
    key: 'chemical_equilibrium',
    label: 'Kesetimbangan Kimia & Le Chatelier',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Tetapan Kc/Kp, tabel stoikiometri M-R-S, derajat disosiasi, dan respon gangguan sistem',
  },
  redox_balancing: {
    key: 'redox_balancing',
    label: 'Penyetaraan Reaksi Redoks',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Metode ion-elektron setengah reaksi dan perubahan bilangan oksidasi (PBO)',
  },
  galvanic_cell: {
    key: 'galvanic_cell',
    label: 'Sel Volta & Potensial Sel',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Katoda/anoda, potensial sel standar E°sel, notasi diagram sel, dan persamaan Nernst',
  },
  electrolysis_faraday: {
    key: 'electrolysis_faraday',
    label: 'Elektrolisis & Hukum Faraday',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Reaksi elektroda larutan/lelehan, muatan Coulomb, dan massa endapan w = eIt/96500',
  },
  organic_nomenclature_isomerism: {
    key: 'organic_nomenclature_isomerism',
    label: 'Tata Nama & Isomerisme Karbon',
    category: 'specialized',
    iconName: 'flask',
    description: 'Nomenklatur resmi IUPAC turunan alkana, isomer struktur, dan stereoisomer',
  },
  lab_safety_scientific_method: {
    key: 'lab_safety_scientific_method',
    label: 'K3 Laboratorium & Metode Ilmiah',
    category: 'qualitative',
    iconName: 'lightbulb',
    description: 'Simbol piktogram bahaya GHS, keselamatan kerja lab, MSDS, dan variabel penelitian',
  },
  stoichiometry: {
    key: 'stoichiometry',
    label: 'Hitungan Stoikiometri & Gas',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Konversi mol, neraca massa, hukum gas ideal, dan pereaksi pembatas',
  },
  thermodynamics: {
    key: 'thermodynamics',
    label: 'Termokimia & Termodinamika',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Hukum Hess, energi ikatan, kalorimetri, entropi, dan energi bebas Gibbs',
  },
  electrochemistry: {
    key: 'electrochemistry',
    label: 'Redoks & Sel Elektrokimia',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Penyetaraan reaksi redoks, potensial sel, persamaan Nernst, dan hukum Faraday',
  },
  kinetics: {
    key: 'kinetics',
    label: 'Kinetika Kimia & Laju Reaksi',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Hukum laju, orde reaksi, waktu paruh, dan persamaan Arrhenius',
  },
  equilibrium_acid_base: {
    key: 'equilibrium_acid_base',
    label: 'Kesetimbangan & Larutan',
    category: 'quantitative',
    iconName: 'calculator',
    description: 'Tetapan Kc/Kp, tabel M-R-S, pH asam-basa, larutan buffer, hidrolisis, dan Ksp',
  },
  atomic_structure: {
    key: 'atomic_structure',
    label: 'Struktur Atom & Kuantum',
    category: 'specialized',
    iconName: 'atom',
    description: 'Bilangan kuantum, konfigurasi elektron, aturan Slater, dan spektrum atom',
  },
  organic_chemistry: {
    key: 'organic_chemistry',
    label: 'Mekanisme & Reaksi Organik',
    category: 'specialized',
    iconName: 'flask',
    description: 'Jalur mekanisme substitusi/eliminasi, stereokimia, dan sintesis gugus fungsi',
  },
  qualitative_reasoning: {
    key: 'qualitative_reasoning',
    label: 'Penalaran Konseptual (Kualitatif)',
    category: 'qualitative',
    iconName: 'lightbulb',
    description: 'Teori VSEPR, tren keperiodikan unsur, gaya antarmolekul, koloid, dan K3 lab',
  },
  spectroscopy_analytical: {
    key: 'spectroscopy_analytical',
    label: 'Elusidasi Spektroskopi & Analitik',
    category: 'specialized',
    iconName: 'microscope',
    description: 'Analisis gabungan 1H/13C-NMR, inframerah (IR), spektrometri massa, dan IHD/DBE',
  },
  inorganic_coordination: {
    key: 'inorganic_coordination',
    label: 'Kimia Koordinasi & Senyawa Kompleks',
    category: 'specialized',
    iconName: 'atom',
    description: 'Teori Medan Kristal (CFT), ligan, bilangan koordinasi, isomerisme, dan kemagnetan',
  },
  general: {
    key: 'general',
    label: 'Kerangka Penalaran Terpadu',
    category: 'quantitative',
    iconName: 'layers',
    description: 'Alur sistematis 4 langkah untuk penurunan rumus dan penyelesaian sains terpadu',
  },
};

/**
 * Mengidentifikasi domain kerangka scaffolding yang paling sesuai berdasarkan metadata soal
 * (Pilar OSN 1-10, Topik SMA 101-116, tags, subtopic, dan judul soal).
 */
export function resolveScaffoldKey(question: Partial<Question>): ScaffoldDomainKey {
  const tags = (question.tags || []).map((t) => t.toLowerCase());
  const subtopic = (question.subtopic || '').toLowerCase();
  const title = (question.title || '').toLowerCase();
  const text = (question.question_text || '').toLowerCase();
  const pillar = question.pillar_number;
  const smaTopicId = question.sma_topic_id;
  const smaTopicNum = question.sma_topic_number;

  const matchesAny = (keywords: string[]) =>
    tags.some((t) => keywords.some((k) => t.includes(k))) ||
    keywords.some((k) => subtopic.includes(k) || title.includes(k) || text.includes(k));

  // =========================================================================
  // TAHAP 1: DETEKSI SUBTOPIK & KONSEP SPESIFIK (PRIORITAS UTAMA)
  // =========================================================================

  // A. Muatan Formal, Resonansi Lewis, & Kontributor Mayor/Minor
  if (
    matchesAny([
      'muatan-formal',
      'formal-charge',
      'resonansi',
      'kontributor-mayor',
      'kontributor-minor',
      'tiosianat',
      'scn-',
      'lewis-kanonikal',
    ])
  ) {
    return 'formal_charge_resonance';
  }

  // B. Siklus Born-Haber & Energi Kisi Kristal
  if (matchesAny(['born-haber', 'energi-kisi', 'kisi-kristal', 'kristal-ionik'])) {
    return 'born_haber_cycle';
  }

  // C. Teori Orbital Molekul (MOT) & Orde Ikatan Diatomik
  if (matchesAny(['mot', 'orbital-molekul', 'orde-ikatan', 'bond-order', 'homo-lumo', 'sp-mixing'])) {
    return 'molecular_orbital_theory';
  }

  // D. Hibridisasi Orbital & Ikatan Sigma/Pi
  if (matchesAny(['hibridisasi', 'ikatan-sigma', 'ikatan-pi', 'karakter-s'])) {
    return 'hybridization_bonding';
  }

  // E. Geometri Molekul & Teori VSEPR
  if (
    matchesAny([
      'vsepr',
      'domain-elektron',
      'geometri-molekul',
      'bentuk-molekul',
      'sudut-ikatan',
      'pasangan-elektron-bebas',
      'tipe-molekul',
      'bipiramida',
    ])
  ) {
    return 'molecular_geometry_vsepr';
  }

  // F. Gaya Antarmolekul & Sifat Fisis
  if (
    matchesAny([
      'gaya-antarmolekul',
      'ikatan-hidrogen',
      'momen-dipol',
      'anomali-titik-didih',
      'gaya-london',
      'dipol-dipol',
    ])
  ) {
    return 'intermolecular_forces';
  }

  // G. Larutan Penyangga (Buffer) & Hidrolisis Garam
  if (matchesAny(['buffer', 'penyangga', 'hidrolisis', 'henderson-hasselbalch', 'kapasitas-buffer'])) {
    return 'buffer_hydrolysis';
  }

  // H. Titrasi Asam-Basa & Netralisasi
  if (matchesAny(['titrasi', 'asidimetri', 'alkalimetri', 'titrat', 'titran', 'titik-ekivalen', 'titik-akhir'])) {
    return 'titration_neutralization';
  }

  // I. Kelarutan & Hasil Kali Kelarutan (Ksp)
  if (matchesAny(['ksp', 'kelarutan', 'hasil-kali-kelarutan', 'pengendapan-selektif', 'efek-ion-sejenis'])) {
    return 'solubility_ksp';
  }

  // J. Sifat Koligatif Larutan
  if (
    matchesAny([
      'sifat-koligatif',
      'penurunan-titik-beku',
      'kenaikan-titik-didih',
      'tekanan-osmotik',
      'penurunan-tekanan-uap',
      'van-t-hoff',
    ])
  ) {
    return 'colligative_properties';
  }

  // K. Laju Reaksi & Orde Reaksi
  if (matchesAny(['orde-reaksi', 'hukum-laju', 'waktu-paruh', 'arrhenius', 'energi-aktivasi'])) {
    return 'reaction_rate_order';
  }

  // L. Kesetimbangan Kimia & Le Chatelier
  if (matchesAny(['kesetimbangan', 'le-chatelier', 'kc', 'kp', 'derajat-disosiasi'])) {
    return 'chemical_equilibrium';
  }

  // M. Sel Volta & Potensial Sel Elektrokimia
  if (matchesAny(['sel-volta', 'sel-galvani', 'potensial-sel', 'katoda', 'anoda', 'nernst', 'diagram-sel'])) {
    return 'galvanic_cell';
  }

  // N. Elektrolisis & Hukum Faraday
  if (matchesAny(['elektrolisis', 'hukum-faraday', 'endapan-katoda', 'arus-listrik'])) {
    return 'electrolysis_faraday';
  }

  // O. Penyetaraan Reaksi Redoks
  if (matchesAny(['penyetaraan-redoks', 'ion-elektron', 'setengah-reaksi', 'metode-pbo'])) {
    return 'redox_balancing';
  }

  // P. Tata Nama & Isomerisme Senyawa Karbon
  if (
    matchesAny([
      'tata-nama-karbon',
      'isomer-geometri',
      'isomer-optik',
      'isomer-posisi',
      'isomer-kerangka',
      'haloalkana',
    ])
  ) {
    return 'organic_nomenclature_isomerism';
  }

  // Q. K3 Laboratorium & Metode Ilmiah
  if (
    matchesAny([
      'k3-lab',
      'keselamatan-kerja',
      'simbol-ghs',
      'metode-ilmiah',
      'piktogram',
      'msds',
      'limbah-b3',
    ])
  ) {
    return 'lab_safety_scientific_method';
  }

  // R. Tren Sifat Periodik Unsur & Aturan Slater
  if (
    matchesAny([
      'jari-jari-atom',
      'energi-ionisasi',
      'afinitas-elektron',
      'keelektronegatifan',
      'slater',
      'z_eff',
      'keperiodikan',
      'sifat-keperiodikan',
    ])
  ) {
    return 'periodic_trends';
  }

  // =========================================================================
  // TAHAP 2: DETEKSI PILAR / TOPIK UMUM (FALLBACK JIKA SUBTOPIK TIDAK COCOK)
  // =========================================================================

  // 1. Spektroskopi Organik & Kimia Analitik (Pilar 9 OSN / Spektra NMR/IR/MS)
  if (
    pillar === 9 ||
    matchesAny([
      'spektroskopi',
      'spektra',
      'nmr',
      '1h-nmr',
      '13c-nmr',
      'inframerah',
      'infrared',
      'mass-spec',
      'spektrometri',
      'elusidasi',
      'analitik',
      'kompleksometri',
      'argentometri',
      'edta',
      'kromatografi',
      'lambert-beer',
    ])
  ) {
    return 'spectroscopy_analytical';
  }

  // 2. Senyawa Koordinasi / Kompleks Anorganik (Pilar 8 OSN / Topik 115 Transisi)
  if (
    pillar === 8 ||
    ((smaTopicId === 115 || smaTopicNum === 15) &&
      matchesAny(['kompleks', 'koordinasi', 'ligan', 'oktahedral', 'cft', 'medan kristal'])) ||
    matchesAny([
      'senyawa-koordinasi',
      'senyawa-kompleks',
      'ion-kompleks',
      'teori-medan-kristal',
      'cft',
      'ligan',
      'bilangan-koordinasi',
      'deret-spektrokimi',
      'high-spin',
      'low-spin',
    ])
  ) {
    return 'inorganic_coordination';
  }

  // 3. Kimia Organik & Biokimia (Pilar 10 OSN / Topik 116 SMA)
  if (
    pillar === 10 ||
    smaTopicId === 116 ||
    smaTopicNum === 16 ||
    matchesAny([
      'organik',
      'stereokimia',
      'sn1',
      'sn2',
      'e1',
      'e2',
      'karbonil',
      'alkena',
      'alkana',
      'alkuna',
      'ester',
      'polimer',
      'makromolekul',
      'biomolekul',
      'karbohidrat',
      'protein',
      'asam-amino',
      'enolat',
      'markovnikov',
      'zaitsev',
      'diels-alder',
    ])
  ) {
    return 'organic_chemistry';
  }

  // 4. Penalaran Konseptual / Kualitatif (Topik 101 K3, Topik 103 Ikatan/VSEPR, Topik 112 Koloid, Pilar 2 Ikatan)
  if (
    smaTopicId === 101 ||
    smaTopicNum === 1 ||
    smaTopicId === 103 ||
    smaTopicNum === 3 ||
    smaTopicId === 112 ||
    smaTopicNum === 12 ||
    pillar === 2 ||
    ((smaTopicId === 102 || smaTopicNum === 2) &&
      !matchesAny(['kuantum', 'slater', 'panjang gelombang', 'energi foton'])) ||
    ((smaTopicId === 115 || smaTopicNum === 15) &&
      !matchesAny(['kompleks', 'cft', 'neraca', 'titrasi'])) ||
    matchesAny([
      'koloid',
      'efek-tyndall',
      'gerak-brown',
      'koagulasi',
    ])
  ) {
    return 'qualitative_reasoning';
  }

  // 5. Elektrokimia & Potensial Sel (Pilar 7 OSN / Topik 114 SMA)
  if (
    pillar === 7 ||
    smaTopicId === 114 ||
    smaTopicNum === 14 ||
    matchesAny([
      'elektrokimia',
      'redoks',
      'nernst',
      'faraday',
      'potensial',
      'sel-volta',
      'sel-galvani',
      'elektrolisis',
      'korosi',
      'aki',
      'baterai',
      'latimer',
      'frost',
    ])
  ) {
    return 'electrochemistry';
  }

  // 6. Termodinamika Kimia & Termokimia (Pilar 4 OSN / Topik 106 & 113 SMA)
  if (
    pillar === 4 ||
    smaTopicId === 106 ||
    smaTopicNum === 6 ||
    smaTopicId === 113 ||
    smaTopicNum === 13 ||
    matchesAny([
      'termodinamika',
      'termokimia',
      'entalpi',
      'entropi',
      'gibbs',
      'kalorimeter',
      'hukum-hess',
      'energi-ikatan',
    ])
  ) {
    return 'thermodynamics';
  }

  // 7. Kinetika Kimia & Mekanisme Reaksi (Pilar 6 OSN / Topik 107 SMA)
  if (
    pillar === 6 ||
    smaTopicId === 107 ||
    smaTopicNum === 7 ||
    matchesAny([
      'kinetika',
      'orde',
      'arrhenius',
      'laju',
      'waktu-paruh',
      'energi-aktivasi',
      'teori-tumbukan',
      'steady-state',
      'ssa',
    ])
  ) {
    return 'kinetics';
  }

  // 8. Kesetimbangan Kimia & Larutan (Pilar 5 OSN / Topik 108, 109, 110, 111 SMA)
  if (
    pillar === 5 ||
    smaTopicId === 108 ||
    smaTopicNum === 8 ||
    smaTopicId === 109 ||
    smaTopicNum === 9 ||
    smaTopicId === 110 ||
    smaTopicNum === 10 ||
    smaTopicId === 111 ||
    smaTopicNum === 11 ||
    matchesAny([
      'kesetimbangan',
      'larutan',
      'asam-basa',
      'buffer',
      'penyangga',
      'hidrolisis',
      'ksp',
      'kelarutan',
      'titrasi',
      'le-chatelier',
      'ph',
      'henderson',
    ])
  ) {
    return 'equilibrium_acid_base';
  }

  // 9. Struktur Atom & Kuantum Lanjut (Pilar 1 OSN / Topik 102 SMA Hitungan Kuantum)
  if (
    pillar === 1 ||
    matchesAny([
      'struktur-atom',
      'kuantum',
      'slater',
      'orbital',
      'panjang-gelombang',
      'bohr',
      'de-broglie',
      'energi-foton',
      'bilangan-kuantum',
      'konfigurasi-elektron',
    ])
  ) {
    return 'atomic_structure';
  }

  // 10. Stoikiometri & Gas (Pilar 3 OSN / Topik 104, 105 SMA)
  if (
    pillar === 3 ||
    smaTopicId === 104 ||
    smaTopicNum === 4 ||
    smaTopicId === 105 ||
    smaTopicNum === 5 ||
    matchesAny([
      'stoikiometri',
      'gas-ideal',
      'gas-nyata',
      'fraksi-mol',
      'pembakaran',
      'rumus-empiris',
      'rumus-molekul',
      'pereaksi-pembatas',
      'avogadro',
      'hukum-dasar',
    ])
  ) {
    return 'stoichiometry';
  }

  return 'general';
}

/**
 * Returns a personalized OSN/SMA 4-step framework scaffold for a given question.
 * Prioritizes the question's AI/teacher-generated metadata `solution_framework_template`,
 * falling back to intelligent topic-based scaffold detection.
 */
export function getQuestionScaffold(question: Partial<Question>): string {
  if (question.solution_framework_template && question.solution_framework_template.trim().length > 0) {
    return question.solution_framework_template;
  }

  const domainKey = resolveScaffoldKey(question);
  return DOMAIN_SCAFFOLDS[domainKey] || DOMAIN_SCAFFOLDS.general;
}

/**
 * Mengembalikan informasi detail mengenai domain scaffold yang terdeteksi untuk kebutuhan UI.
 */
export function getScaffoldDomainInfo(question: Partial<Question>): ScaffoldDomainInfo {
  const hasCustom = Boolean(
    question.solution_framework_template && question.solution_framework_template.trim().length > 0
  );

  const resolvedKey = resolveScaffoldKey(question);
  const baseInfo = DOMAIN_INFO_MAP[resolvedKey] || DOMAIN_INFO_MAP.general;

  if (hasCustom) {
    return {
      ...baseInfo,
      label: 'Kerangka Khusus Butir Soal',
      description: 'Panduan langkah terpersonalisasi yang dikalibrasi langsung untuk butir soal ini',
      isCustomTemplate: true,
    };
  }

  return {
    ...baseInfo,
    isCustomTemplate: false,
  };
}

export interface ScaffoldWorkAnalysis {
  hasScaffoldMarkers: boolean;
  placeholderCount: number;
  cleanedText: string;
  cleanedLength: number;
  isCompletelyUnfilled: boolean;
  isPartiallyFilled: boolean;
  status: 'no_scaffold' | 'completely_unfilled' | 'partially_filled' | 'properly_filled';
}

/**
 * Menganalisis teks pengerjaan siswa untuk mendeteksi penyisipan template kerangka (scaffolding).
 * Mencegah abuse/eksploitasi nilai jika siswa hanya menyisipkan kerangka kosong tanpa perhitungan riil.
 */
export function analyzeScaffoldWork(text: string): ScaffoldWorkAnalysis {
  if (!text || typeof text !== 'string') {
    return {
      hasScaffoldMarkers: false,
      placeholderCount: 0,
      cleanedText: '',
      cleanedLength: 0,
      isCompletelyUnfilled: false,
      isPartiallyFilled: false,
      status: 'no_scaffold',
    };
  }

  // 1. Deteksi keberadaan placeholder titik-titik atau tanda kurung bawaan template
  const placeholderMatches =
    text.match(/\.{2,}|_{2,}|\[\.\.\.\]|\[sertakan\s+satuan\]|\[\s*isi\s*[^\]]*\]/gi) || [];
  const placeholderCount = placeholderMatches.length;

  // 2. Deteksi header khas Kerangka 4 Langkah OSN / SMA (mendukung ragam format: 1., Langkah 1, Tahap 1, Step 1, bold)
  const step1Pattern = /(?:1\.|(?:langkah|tahap|step)\s*1|\*\*1\.?\*\*|\*\*langkah\s*1\*\*)/i;
  const step2Pattern = /(?:2\.|(?:langkah|tahap|step)\s*2|\*\*2\.?\*\*|\*\*langkah\s*2\*\*)/i;
  const step3Pattern = /(?:3\.|(?:langkah|tahap|step)\s*3|\*\*3\.?\*\*|\*\*langkah\s*3\*\*)/i;
  const step4Pattern = /(?:4\.|(?:langkah|tahap|step)\s*4|\*\*4\.?\*\*|\*\*langkah\s*4\*\*)/i;

  const hasScaffoldMarkers =
    (step1Pattern.test(text) && step2Pattern.test(text) && step3Pattern.test(text)) ||
    (step1Pattern.test(text) && step2Pattern.test(text) && step4Pattern.test(text));

  // 3. Ekstrak konten tulisan mandiri siswa dengan membersihkan boilerplate template
  let cleaned = text
    // Hapus judul bab / header (misal: "1. Diketahui...", "Langkah 1: ...", "**1. Data**")
    .replace(
      /(?:^|\n)\s*(?:\d+\.|\b(?:langkah|tahap|step)\s*\d+[:\.]?|\*\*\d+\.?\*\*|\*\*langkah\s*\d+\*\*)[^\n]*/gi,
      ''
    )
    // Hapus label bullet point (misal: "• Besaran terukur: ...", "- Rumus molekul: ...")
    .replace(/(?:^|\n)\s*[•\-\*]\s*[^:\n]+:\s*/g, '')
    // Hapus placeholder titik dan bracket
    .replace(/\.{2,}|_{2,}|\[\.\.\.\]|\[sertakan\s+satuan\]|\[\s*isi\s*[^\]]*\]/gi, '')
    // Hapus rumus mentah template yang sering ada di template bawaan
    .replace(/\$\s*PV\s*=\s*nRT\s*\$/gi, '')
    .replace(/\$\s*n\s*=\s*m\/Mr\s*\$/gi, '')
    .replace(/\$\s*\\Delta H\^\\circ[^$]*\$/gi, '')
    .replace(/\$\s*\\Delta G\^\\circ[^$]*\$/gi, '')
    .replace(/\$\s*\\mu_\{?\\text\{eff\}\}?[^$]*\$/gi, '')
    .trim();

  // Normalkan spasi
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  const cleanedLength = cleaned.length;

  if (!hasScaffoldMarkers) {
    return {
      hasScaffoldMarkers: false,
      placeholderCount,
      cleanedText: text,
      cleanedLength: text.trim().length,
      isCompletelyUnfilled: false,
      isPartiallyFilled: false,
      status: 'no_scaffold',
    };
  }

  // Jika terdapat kerangka tapi teks riil sangat sedikit (< 18 karakter) atau placeholder >= 3
  const isCompletelyUnfilled = cleanedLength < 18;
  const isPartiallyFilled = !isCompletelyUnfilled && placeholderCount >= 3;

  let status: 'no_scaffold' | 'completely_unfilled' | 'partially_filled' | 'properly_filled' =
    'properly_filled';
  if (isCompletelyUnfilled) {
    status = 'completely_unfilled';
  } else if (isPartiallyFilled) {
    status = 'partially_filled';
  }

  return {
    hasScaffoldMarkers: true,
    placeholderCount,
    cleanedText: cleaned,
    cleanedLength,
    isCompletelyUnfilled,
    isPartiallyFilled,
    status,
  };
}
