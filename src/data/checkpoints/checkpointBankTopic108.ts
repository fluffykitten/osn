/**
 * checkpointBankTopic108.ts
 * Bank Soal Uji Pemahaman Cepat (Concept Checkpoint Quiz)
 * Topik 108: Kesetimbangan Kimia Dasar SMA (Dinamika Reaksi, Tetapan Kc & Kp, Asas Le Chatelier & Derajat Disosiasi)
 * 
 * Standar: Konseptual, Membongkar Miskonsepsi Siswa SMA, Pilihan Ganda & True/False
 */

import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_108: Record<string, CheckpointQuizItem[]> = {
  // =========================================================================
  // PRASYARAT 1: Reaksi Searah (Irreversibel) vs Reaksi Bolak-Balik (Reversibel)
  // =========================================================================
  'prasyarat-reaksi-reversibel-dan-dinamika': [
    {
      id: 'cp-108-prereq1-q1',
      type: 'true_false',
      question: 'Pada keadaan kesetimbangan kimia dinamis, reaksi kimia telah berhenti secara total pada tingkat molekuler karena seluruh molekul reaktan telah berhenti bertumbukan.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Fundamental). Kesetimbangan kimia bersifat dinamis secara mikroskopis, bukan statis. Reaksi maju (pembentukan produk) dan reaksi balik (penguraian produk menjadi reaktan) terus berlangsung tanpa henti dengan laju yang persis sama besar ($v_{\\text{maju}} = v_{\\text{balik}}$). Secara makroskopis sistem tampak berhenti karena konsentrasi seluruh zat tetap konstan.',
    },
    {
      id: 'cp-108-prereq1-q2',
      type: 'multiple_choice',
      question: 'Karakteristik makroskopis yang menunjukkan bahwa suatu sistem reaksi reversibel dalam wadah tertutup telah mencapai kesetimbangan kimia adalah ....',
      options: [
        'Seluruh zat pereaksi telah habis terkonsumsi sempurna',
        'Konsentrasi masing-masing pereaksi dan produk tidak lagi berubah seiring waktu',
        'Jumlah mol pereaksi tepat sama dengan jumlah mol produk',
        'Massa zat pereaksi lebih besar daripada massa zat produk',
      ],
      correctAnswer: 1,
      explanation: 'Saat kesetimbangan dinamis tercapai, laju pembentukan zat sama dengan laju penguraiannya. Akibatnya, secara makroskopis konsentrasi molar, tekanan parsial, warna, dan densitas dari setiap komponen di dalam bejana tertutup tidak mengalami perubahan (konstan), meskipun konsentrasi pereaksi dan produk tidak harus sama nilainya.',
    },
  ],

  // =========================================================================
  // PRASYARAT 2: Hukum Aksi Massa (Guldberg & Waage) & Aturan Fasa Zat
  // =========================================================================
  'prasyarat-hukum-aksi-massa-dan-aturan-fasa': [
    {
      id: 'cp-108-prereq2-q1',
      type: 'true_false',
      question: 'Spesi zat yang berfasa padatan murni ($s$) dan cairan murni ($l$) wajib diikutsertakan ke dalam rumus ekspresi tetapan kesetimbangan $K_c$ dan $K_p$.',
      correctAnswer: false,
      explanation: 'Salah. Padatan murni ($s$) dan cairan murni ($l$) memiliki konsentrasi molaritas dan kerapatan yang bernilai konstan pada suhu tetap (aktivitas termodinamikanya bernilai tepat 1). Oleh karena itu, zat berfasa $(s)$ dan $(l)$ TIDAK PERNAH dimasukkan ke dalam ekspresi tetapan kesetimbangan $K_c$ maupun $K_p$. Hanya fasa gas ($g$) dan larutan akuatik ($aq$) yang dimasukkan ke $K_c$, dan hanya fasa gas ($g$) yang dimasukkan ke $K_p$.',
    },
    {
      id: 'cp-108-prereq2-q2',
      type: 'multiple_choice',
      question: 'Rumus tetapan kesetimbangan $K_c$ yang benar untuk reaksi heterogen reduksi uap air oleh serbuk besi panas:\n$$\\ce{3 Fe(s) + 4 H2O(g) <=> Fe3O4(s) + 4 H2(g)}$$\nadalah ....',
      options: [
        '$K_c = \\frac{[\\ce{Fe3O4}][\\ce{H2}]^4}{[\\ce{Fe}]^3 [\\ce{H2O}]^4}$',
        '$K_c = \\frac{[\\ce{H2}]^4}{[\\ce{H2O}]^4}$',
        '$K_c = \\frac{[\\ce{H2}]}{[\\ce{H2O}]}$',
        '$K_c = \\frac{[\\ce{Fe3O4}]}{[\\ce{Fe}]^3}$',
      ],
      correctAnswer: 1,
      explanation: 'Spesi $\\ce{Fe(s)}$ dan $\\ce{Fe3O4(s)}$ berfasa padat murni ($s$), sehingga keduanya tidak dimasukkan ke dalam ekspresi kesetimbangan. Yang masuk hanya spesi berfasa gas, dipangkatkan koefisien reaksinya masing-masing:\n$$K_c = \\frac{[\\ce{H2}]^4}{[\\ce{H2O}]^4}$$.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 1: Tetapan Kesetimbangan Konsentrasi (Kc) & Tekanan Parsial (Kp)
  // =========================================================================
  'dinamika-kesetimbangan-kc-kp-dan-relasinya': [
    {
      id: 'cp-108-core1-q1',
      type: 'true_false',
      question: 'Pada keadaan setimbang, konsentrasi pereaksi (reaktan) selalu dipastikan tepat sama besar dengan konsentrasi produk hasil reaksi.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Populer). Yang sama besar pada kesetimbangan adalah LAJU REAKSI maju dan balik ($v_{\\text{maju}} = v_{\\text{balik}}$), BUKAN konsentrasinya! Konsentrasi pereaksi dan produk pada keadaan setimbang bernilai konstan, namun nilainya bisa lebih besar reaktan (jika $K < 1$), lebih besar produk (jika $K > 1$), atau kebetulan sama.',
    },
    {
      id: 'cp-108-core1-q2',
      type: 'multiple_choice',
      question: 'Berdasarkan formula relasi universal $K_p = K_c (RT)^{\\Delta n}$, nilai eksponen $\\Delta n$ untuk reaksi fasa gas:\n$$\\ce{2 SO3(g) <=> 2 SO2(g) + O2(g)}$$\nadalah ....',
      options: [
        '$\\Delta n = -1$',
        '$\\Delta n = 0$',
        '$\\Delta n = +1$',
        '$\\Delta n = +3$',
      ],
      correctAnswer: 2,
      explanation: 'Nilai $\\Delta n$ adalah selisih jumlah koefisien gas produk dikurangi koefisien gas reaktan:\n$$\\Delta n = \\sum \\text{koef gas produk} - \\sum \\text{koef gas reaktan} = (2 + 1) - 2 = 3 - 2 = \\mathbf{+1}$$.',
    },
    {
      id: 'cp-108-core1-q3',
      type: 'true_false',
      question: 'Untuk semua reaksi kesetimbangan fasa gas di mana jumlah koefisien gas di ruas kiri tepat sama dengan ruas kanan ($\\Delta n = 0$), nilai tetapan $K_p$ selalu bernilai tepat sama dengan $K_c$ ($K_p = K_c$) pada temperatur berapa pun.',
      correctAnswer: true,
      explanation: 'Benar. Jika $\\Delta n = 0$, maka faktor $(RT)^{\\Delta n} = (RT)^0 = 1$. Akibatnya rumus $K_p = K_c (RT)^{\\Delta n}$ menyederhanakan menjadi $K_p = K_c \\times 1 = K_c$, berapapun temperatur reaksinya.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 2: Manipulasi Aljabar Tetapan Kesetimbangan (K)
  // =========================================================================
  'manipulasi-aljabar-tetapan-kesetimbangan': [
    {
      id: 'cp-108-core2-q1',
      type: 'true_false',
      question: 'Jika suatu persamaan reaksi kesetimbangan dibalik arahnya, maka nilai tetapan kesetimbangannya berubah tanda menjadi negatif (misalnya jika $K = 5$, maka reaksi kebalikannya memiliki $K = -5$).',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Fatal: Mencampuradukkan Termokimia dengan Kesetimbangan). Nilai tetapan kesetimbangan ($K$) TIDAK PERNAH bernilai negatif. Jika persamaan reaksi dibalik arahnya, nilai $K$ menjadi nilai kebalikannya / inversi pembagian: $K\' = \\frac{1}{K} = \\frac{1}{5} = 0.20$. Tanda negatif hanya berlaku untuk perubahan entalpi ($\\Delta H$).',
    },
    {
      id: 'cp-108-core2-q2',
      type: 'multiple_choice',
      question: 'Reaksi sintesis amonia: $\\ce{N2(g) + 3 H2(g) <=> 2 NH3(g)}$ memiliki tetapan kesetimbangan $K_1 = 16$. Nilai tetapan kesetimbangan untuk reaksi penguraian:\n$$\\ce{NH3(g) <=> 1/2 N2(g) + 3/2 H2(g)}$$\nadalah ....',
      options: [
        '$K = -16$',
        '$K = 8$',
        '$K = 0.25$',
        '$K = 0.0625$',
      ],
      correctAnswer: 2,
      explanation: 'Reaksi target merupakan reaksi asal yang: (1) dibalik arahnya, dan (2) seluruh koefisiennya dikalikan $\\frac{1}{2}$ (dibagi 2).\nSesuai aturan aljabar kesetimbangan:\n$$K\' = \\sqrt{\\frac{1}{K_1}} = \\sqrt{\\frac{1}{16}} = \\frac{1}{4} = \\mathbf{0.25}$$.',
    },
    {
      id: 'cp-108-core2-q3',
      type: 'true_false',
      question: 'Jika dua persamaan reaksi kesetimbangan (Reaksi 1 dengan tetapan $K_1$ dan Reaksi 2 dengan tetapan $K_2$) dijumlahkan menjadi Reaksi 3, maka nilai tetapan kesetimbangan total adalah $K_3 = K_1 + K_2$.',
      correctAnswer: false,
      explanation: 'Salah. Penjumlahan dua persamaan kesetimbangan menghasilkan perkalian nilai tetapan kesetimbangannya: $K_3 = K_1 \\times K_2$. Hal ini berbeda dengan termokimia di mana entalpi reaksi dijumlahkan ($\\Delta H_3 = \\Delta H_1 + \\Delta H_2$).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 3: Asas Le Chatelier & Empat Faktor Pergeseran Kesetimbangan
  // =========================================================================
  'azas-le-chatelier-dan-faktor-pergeseran': [
    {
      id: 'cp-108-core3-q1',
      type: 'true_false',
      question: 'Menaikkan tekanan dengan cara memperkecil volume wadah bejana gas akan menggeser posisi kesetimbangan ke arah ruas yang memiliki jumlah koefisien gas terbesar.',
      correctAnswer: false,
      explanation: 'Salah. Menurut Asas Le Chatelier, ketika volume wadah diperkecil (tekanan sistem naik), kerapatan partikel gas melonjak. Sistem akan merespon dengan mengurangi kelebihan tekanan melalui pergeseran ke arah ruas yang memiliki JUMLAH KOEFISIEN GAS PALING SEDIKIT.',
    },
    {
      id: 'cp-108-core3-q2',
      type: 'multiple_choice',
      question: 'Perlakuan fisik berikut yang dapat MENGUBAH nilai numerik dari tetapan kesetimbangan ($K_c$ maupun $K_p$) suatu reaksi kimia adalah ....',
      options: [
        'Menaikkan konsentrasi salah satu zat reaktan',
        'Memperkecil volume wadah reaksi menjadi setengahnya',
        'Menambahkan serbuk katalis heterogen',
        'Mengubah temperatur (suhu) sistem reaksi',
      ],
      correctAnswer: 3,
      explanation: 'Satu-satunya parameter termodinamika yang dapat mengubah nilai numerik tetapan kesetimbangan ($K$) adalah TEMPERATUR (SUHU). Perubahan konsentrasi, tekanan, volume, maupun penambahan katalis hanya menggeser posisi kesetimbangan sesaat atau mempercepat tercapainya kesetimbangan tanpa mengubah nilai $K$.',
    },
    {
      id: 'cp-108-core3-q3',
      type: 'true_false',
      question: 'Penambahan katalis ke dalam sistem kesetimbangan akan meningkatkan hasil rendemen produk dan menggeser kesetimbangan ke arah kanan.',
      correctAnswer: false,
      explanation: 'Salah (Miskonsepsi Sangat Sering). Katalis mempercepat laju reaksi maju dan laju reaksi balik dalam faktor pengali yang persis sama (karena menurunkan energi aktivasi kedua arah sama besar). Oleh karena itu, katalis TIDAK MENGGESER kesetimbangan ke arah manapun dan TIDAK MENAMBAH jumlah produk setimbang; fungsinya murni mempercepat waktu tercapainya kondisi setimbang.',
    },
  ],

  // =========================================================================
  // KONSEP INTI 4: Kuosien Reaksi (Q) & Prediksi Spontanitas Arah Reaksi
  // =========================================================================
  'kuosien-reaksi-dan-prediksi-arah': [
    {
      id: 'cp-108-core4-q1',
      type: 'true_false',
      question: 'Jika suatu campuran gas memiliki nilai kuosien reaksi $Q_c > K_c$, maka sistem akan bergeser secara spontan ke arah kanan untuk membentuk lebih banyak produk.',
      correctAnswer: false,
      explanation: 'Salah. Nilai $Q_c > K_c$ menandakan bahwa pembilang (konsentrasi produk sesaat) terlalu besar melebihi kondisi setimbangnya. Untuk mengembalikan sistem ke kondisi setimbang, sebagian produk harus terurai kembali menjadi reaktan, sehingga reaksi akan bergeser secara spontan KE ARAH KIRI (arah reaktan) sampai $Q_c = K_c$.',
    },
    {
      id: 'cp-108-core4-q2',
      type: 'multiple_choice',
      question: 'Kondisi yang menandakan bahwa suatu campuran pereaksi dan produk telah berada tepat dalam kesetimbangan kimia dinamis tanpa adanya pergeseran netto adalah ....',
      options: [
        '$Q_c = 0$',
        '$Q_c < K_c$',
        '$Q_c = K_c$',
        '$Q_c > K_c$',
      ],
      correctAnswer: 2,
      explanation: 'Jika nilai kuosien reaksi sesaat tepat sama dengan tetapan kesetimbangan ($Q_c = K_c$), maka perbandingan konsentrasi produk terhadap reaktan sudah ideal dan sistem berada dalam keadaan setimbang dinamis (tidak ada pergeseran netto).',
    },
    {
      id: 'cp-108-core4-q3',
      type: 'true_false',
      question: 'Rumus ekspresi matematis untuk kuosien reaksi ($Q$) identik persis dengan rumus tetapan kesetimbangan ($K$), namun nilai konsentrasi yang disubstitusikan ke $Q$ adalah konsentrasi sesaat kapan saja, bukan konsentrasi saat setimbang.',
      correctAnswer: true,
      explanation: 'Benar. Formula aljabar $Q$ dan $K$ adalah sama persis ($[\\text{Produk}]^{\\text{koef}} / [\\text{Reaktan}]^{\\text{koef}}$). Perbedaannya: $K$ hanya menggunakan data konsentrasi saat reaksi telah setimbang, sedangkan $Q$ mengevaluasi konsentrasi pada kondisi sembarang (awal reaksi, saat reaksi berjalan, atau sesaat setelah diberikan gangguan).',
    },
  ],

  // =========================================================================
  // KONSEP INTI 5: Reaksi Disosiasi Fasa Gas & Derajat Disosiasi (α)
  // =========================================================================
  'disosiasi-gas-dan-derajat-disosiasi-alfa': [
    {
      id: 'cp-108-core5-q1',
      type: 'true_false',
      question: 'Nilai derajat disosiasi $\\alpha = 0.60$ menunjukkan bahwa $60\\%$ dari jumlah mol zat pereaksi mula-mula telah terurai membentuk zat-zat produk.',
      correctAnswer: true,
      explanation: 'Benar. Derajat disosiasi didefinisikan sebagai rasio: $\\alpha = \\frac{\\text{mol zat terurai}}{\\text{mol zat mula-mula}}$. Nilai $\\alpha = 0.60$ setara dengan $60\\%$ zat yang terurai, dan $40\\%$ zat yang tersisa pada saat setimbang.',
    },
    {
      id: 'cp-108-core5-q2',
      type: 'multiple_choice',
      question: 'Ke dalam wadah tertutup bervolume $1\\text{ L}$ dimasukkan $2.0\\text{ mol}$ gas $\\ce{PCl5}$. Jika pada saat setimbang tersisa $1.2\\text{ mol}$ gas $\\ce{PCl5}$, derajat disosiasi ($\\alpha$) gas $\\ce{PCl5}$ tersebut adalah ....',
      options: [
        '$0.20$ ($20\\%$)',
        '$0.40$ ($40\\%$)',
        '$0.60$ ($60\\%$)',
        '$0.80$ ($80\\%$)',
      ],
      correctAnswer: 1,
      explanation: 'Hitung mol $\\ce{PCl5}$ yang terurai (bereaksi):\n$$n_{\\text{terurai}} = n_{\\text{mula-mula}} - n_{\\text{sisa}} = 2.0\\text{ mol} - 1.2\\text{ mol} = 0.8\\text{ mol}$$\nMaka derajat disosiasinya adalah:\n$$\\alpha = \\frac{n_{\\text{terurai}}}{n_{\\text{mula-mula}}} = \\frac{0.8\\text{ mol}}{2.0\\text{ mol}} = \\mathbf{0.40} \\quad (40\\%)$$.',
    },
    {
      id: 'cp-108-core5-q3',
      type: 'true_false',
      question: 'Pada kesetimbangan disosiasi gas $\\ce{N2O4(g) <=> 2 NO2(g)}$, memperbesar volume wadah bejana pada temperatur tetap akan menyebabkan nilai derajat disosiasi ($\\alpha$) meningkat.',
      correctAnswer: true,
      explanation: 'Benar. Memperbesar volume wadah menurunkan tekanan total sistem. Berdasarkan Asas Le Chatelier, sistem akan bergeser ke arah ruas yang memiliki jumlah koefisien gas terbesar (ke ruas kanan, koefisien 2). Akibatnya, lebih banyak $\\ce{N2O4}$ yang terurai menjadi $\\ce{NO2}$, sehingga nilai derajat disosiasi $\\alpha$ meningkat.',
    },
  ],

  // =========================================================================
  // PENGAYAAN: Solusi Eksak Kuadratik Kesetimbangan Gas & Reaksi Water-Gas Shift
  // =========================================================================
  'pengayaan-kalkulasi-eksak-kuadratik-kesetimbangan': [
    {
      id: 'cp-108-pengayaan-q1',
      type: 'true_false',
      question: 'Pada penyelesaian aljabar persamaan kuadrat kesetimbangan kimia ($A x^2 + B x + C = 0$), kedua nilai akar matematis ($x_1$ dan $x_2$) selalu dapat diterima sebagai konsentrasi kimiawi yang sah.',
      correctAnswer: false,
      explanation: 'Salah. Dalam termodinamika kimia, hanya ada satu akar kuadrat yang memenuhi syarat batas fisis (realistis), yaitu akar yang bernilai positif dan nilainya lebih kecil daripada konsentrasi awal pereaksi pembatas ($0 < x < \\min(a, b)$). Akar yang menghasilkan konsentrasi zat negatif atau lebih besar dari modal awal harus digugurkan.',
    },
    {
      id: 'cp-108-pengayaan-q2',
      type: 'multiple_choice',
      question: 'Reaksi pergeseran gas air (*Water-Gas Shift Reaction*):\n$$\\ce{CO(g) + H2O(g) <=> CO2(g) + H2(g)}$$\nmemiliki karakteristik aljabar unik bahwa ....',
      options: [
        'Nilai $K_p$ selalu lebih besar daripada $K_c$ karena reaksinya bersifat eksotermik',
        'Nilai tetapan kesetimbangan konsentrasi ($K_c$) tidak dipengaruhi oleh perubahan volume wadah karena $\\Delta n = 0$',
        'Derajat konversi gas $\\ce{CO}$ akan meningkat jika tekanan total dinaikkan pada suhu tetap',
        'Ekspresi kesetimbangannya tidak dapat diselesaikan menggunakan rumus kuadrat',
      ],
      correctAnswer: 1,
      explanation: 'Pada reaksi WGSR, koefisien gas di kedua ruas seimbang: $\\Delta n = (1 + 1) - (1 + 1) = 0$. Akibatnya: (1) $K_p = K_c$, (2) volume wadah $V$ saling meniadakan dalam ekspresi $K_c$, dan (3) perubahan volume atau tekanan wadah sama sekali tidak menggeser posisi kesetimbangan.',
    },
  ],
};
