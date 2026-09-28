import type { CheckpointQuizItem } from '../materialsData.ts';

export const CHECKPOINTS_TOPIC_OSN_03: Record<string, CheckpointQuizItem[]> = {
  // Prasyarat 1: Konsep Mol, Massa Molar, Avogadro, & Rumus Empiris/Molekul
  'konsep-mol-massa-molar': [
    {
      id: 'chk-osn03-pre1-q1',
      type: 'multiple_choice',
      question: 'Pada analisis pembakaran kuantitatif suatu senyawa hidrokarbon murni, massa uap air $(\\ce{H2O}, M_r = 18.02\\text{ g/mol})$ yang tertangkap oleh absorben fosfor pentoksida adalah $m_{\\ce{H2O}}$. Rumus kuantitatif yang tepat untuk menghitung jumlah mol atom hidrogen $(n_{\\ce{H}})$ dalam sampel adalah:',
      options: [
        '$n_{\\ce{H}} = \\frac{m_{\\ce{H2O}}}{18.02}$',
        '$n_{\\ce{H}} = 2 \\times \\frac{m_{\\ce{H2O}}}{18.02}$',
        '$n_{\\ce{H}} = \\frac{1}{2} \\times \\frac{m_{\\ce{H2O}}}{18.02}$',
        '$n_{\\ce{H}} = \\frac{m_{\\ce{H2O}}}{1.008}$',
      ],
      correctAnswer: 1,
      explanation: 'Setiap $1\\text{ mol}$ molekul air $(\\ce{H2O})$ tersusun dari $2\\text{ mol}$ atom hidrogen $(\\ce{H})$. Oleh karena itu, jumlah mol atom hidrogen selalu bernilai dua kali lipat mol molekul air yang terbentuk: $n_{\\ce{H}} = 2 \\times n_{\\ce{H2O}} = 2 \\times \\frac{m_{\\ce{H2O}}}{18.02}$.',
      misconceptionTarget: 'Lupa mengalikan dengan faktor 2 saat mengonversi massa uap air menjadi mol atom hidrogen',
    },
    {
      id: 'chk-osn03-pre1-q2',
      type: 'true_false',
      question: 'Dua senyawa kimia yang memiliki rumus empiris yang sama (seperti etena $\\ce{C2H4}$ dan sikloheksana $\\ce{C6H12}$) memiliki komposisi persentase massa unsur-unsur penyusun $(\\% w/w)$ yang persis identik.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Persen massa unsur ditentukan oleh rasio atomik dalam rumus empiris: $\\% w_i = \\frac{x \\cdot A_r(i)}{M_r(\\text{RE})} \\times 100\\%$. Karena etena $(\\ce{C2H4})$ dan sikloheksana $(\\ce{C6H12})$ memiliki rumus empiris sama yaitu $(\\ce{CH2})$, perbandingan massa karbon dan hidrogen pada keduanya persis sama: $\\%\\ce{C} = \\frac{12.011}{14.027} \\times 100\\% = 85.63\\%$.',
      misconceptionTarget: 'Mengira senyawa dengan rumus molekul berbeda pasti memiliki komposisi persentase massa unsur yang berbeda',
    },
    {
      id: 'chk-osn03-pre1-q3',
      type: 'multiple_choice',
      question: 'Sebanyak $4.99\\text{ g}$ sampel kristal tembaga(II) sulfat hidrat $(\\ce{CuSO4 \\cdot} x\\ce{H2O})$ dipanaskan kuat hingga seluruh air kristal menguap, menyisakan $3.19\\text{ g}$ garam anhidrat putih $\\ce{CuSO4}$. Diketahui $M_r(\\ce{CuSO4}) = 159.6\\text{ g/mol}$ dan $M_r(\\ce{H2O}) = 18.02\\text{ g/mol}$. Berapakah nilai koefisien hidrasi $x$?',
      options: [
        '$x = 2$',
        '$x = 3$',
        '$x = 5$',
        '$x = 7$',
      ],
      correctAnswer: 2,
      explanation: 'Massa air yang menguap: $m_{\\ce{H2O}} = 4.99\\text{ g} - 3.19\\text{ g} = 1.80\\text{ g}$.\\nMol $\\ce{CuSO4} = \\frac{3.19}{159.6} = 0.0200\\text{ mol}$.\\nMol $\\ce{H2O} = \\frac{1.80}{18.02} = 0.0999\\text{ mol} \\approx 0.100\\text{ mol}$.\\nRasio $x = \\frac{n_{\\ce{H2O}}}{n_{\\ce{CuSO4}}} = \\frac{0.100}{0.0200} = 5.0$. Maka rumus hidratnya adalah $\\ce{CuSO4.5H2O}$.',
      misconceptionTarget: 'Salah menghitung massa air dengan membagi massa hidrat langsung dengan massa molar air',
    },
  ],

  // Prasyarat 2: Penyetaraan Reaksi, Pereaksi Pembatas, & Persen Hasil Reaksi
  'pereaksi-pembatas-persen-hasil': [
    {
      id: 'chk-osn03-pre2-q1',
      type: 'multiple_choice',
      question: 'Pada reaksi sintesis amonia: $\\ce{N2(g) + 3 H2(g) -> 2 NH3(g)}$. Jika direaksikan $4.0\\text{ mol } \\ce{N2}$ dengan $9.0\\text{ mol } \\ce{H2}$, spesi manakah yang bertindak sebagai pereaksi pembatas dan berapakah mol gas $\\ce{NH3}$ maksimum yang dapat terbentuk?',
      options: [
        '$\\ce{N2}$ pembatas, $\\ce{NH3} = 8.0\\text{ mol}$',
        '$\\ce{H2}$ pembatas, $\\ce{NH3} = 6.0\\text{ mol}$',
        '$\\ce{H2}$ pembatas, $\\ce{NH3} = 9.0\\text{ mol}$',
        'Kedua reaktan ekuivalen stoikiometri, $\\ce{NH3} = 13.0\\text{ mol}$',
      ],
      correctAnswer: 1,
      explanation: 'Hitung rasio mol per koefisien:\\n- Untuk $\\ce{N2}$: $\\frac{4.0}{1} = 4.0$\\n- Untuk $\\ce{H2}$: $\\frac{9.0}{3} = 3.0$\\nKarena rasio $\\ce{H2}$ lebih kecil ($3.0 < 4.0$), maka $\\ce{H2}$ adalah pereaksi pembatas.\\nMol $\\ce{NH3}$ terbentuk $= \\frac{2}{3} \\times n_{\\ce{H2}} = \\frac{2}{3} \\times 9.0 = 6.0\\text{ mol}$.',
      misconceptionTarget: 'Memilih reaktan dengan mol awal terkecil sebagai pereaksi pembatas tanpa menormalisasi dengan koefisien reaksi',
    },
    {
      id: 'chk-osn03-pre2-q2',
      type: 'true_false',
      question: 'Pada suatu eksperimen sintesis kimia murni tanpa kontaminasi, nilai persen hasil reaksi (percent yield) secara teoritis tidak mungkin melebihi $100\\%$; jika diperoleh persen hasil $> 100\\%$, hal tersebut mengindikasikan adanya pelarut sisa, endapan basah yang belum kering sempurna, atau ketidakmurnian sampel.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Menurut Hukum Kekekalan Massa Lavoisier, jumlah atom produk yang terbentuk dibatasi oleh jumlah atom reaktan pembatas (hasil teoritis $= 100\\%$ efisiensi). Hasil aktual murni tidak pernah dapat melampaui hasil teoritis stoikiometris.',
      misconceptionTarget: 'Mengira reaksi dengan katalis efisien atau reaksi sangat eksoterm dapat menghasilkan rendemen lebih dari 100%',
    },
    {
      id: 'chk-osn03-pre2-q3',
      type: 'multiple_choice',
      question: 'Sebanyak $10.0\\text{ g}$ sampel bijih batu kapur kotor $(\\ce{CaCO3}, M_r = 100.1\\text{ g/mol})$ direaksikan dengan asam klorida berlebih sesuai reaksi: $\\ce{CaCO3(s) + 2 HCl(aq) -> CaCl2(aq) + CO2(g) + H2O(l)}$. Gas $\\ce{CO2}$ yang dihasilkan ditampung dan ditimbang seberat $3.52\\text{ g}$ ($M_r = 44.01\\text{ g/mol}$). Berapakah persentase kemurnian kalsium karbonat dalam bijih tersebut?',
      options: [
        '$35.2\\%$',
        '$70.0\\%$',
        '$80.1\\%$',
        '$88.0\\%$',
      ],
      correctAnswer: 2,
      explanation: 'Mol $\\ce{CO2} = \\frac{3.52\\text{ g}}{44.01\\text{ g/mol}} = 0.0800\\text{ mol}$.\\nDari koefisien reaksi $1:1$, mol $\\ce{CaCO3}$ murni $= 0.0800\\text{ mol}$.\\nMassa $\\ce{CaCO3}$ murni $= 0.0800\\text{ mol} \\times 100.1\\text{ g/mol} = 8.008\\text{ g}$.\\n\\% Kemurnian $= \\frac{8.008\\text{ g}}{10.0\\text{ g}} \\times 100\\% = 80.08\\% \\approx 80.1\\%$.',
      misconceptionTarget: 'Langsung membagi massa gas karbon dioksida dengan massa sampel bijih awal',
    },
  ],

  // Prasyarat 3: Stoikiometri Larutan, Satuan Konsentrasi, & Reaksi Pengendapan
  'stoikiometri-larutan-konsentrasi': [
    {
      id: 'chk-osn03-pre3-q1',
      type: 'multiple_choice',
      question: 'Larutan asam klorida pekat di laboratorium memiliki kadar $36.5\\%\\text{ b/b}$ dengan massa jenis $\\rho = 1.20\\text{ g/mL}$. Diketahui massa molar $\\ce{HCl} = 36.46\\text{ g/mol}$. Berapakah molaritas $(M)$ larutan asam pekat tersebut?',
      options: [
        '$10.0\\text{ M}$',
        '$12.0\\text{ M}$',
        '$14.2\\text{ M}$',
        '$36.5\\text{ M}$',
      ],
      correctAnswer: 1,
      explanation: 'Gunakan hubungan konversi konsentrasi: $M = \\frac{\\% w/w \\times \\rho \\times 10}{M_r}$.\\n$M = \\frac{36.5 \\times 1.20 \\times 10}{36.46} = \\frac{438}{36.46} \\approx 12.01\\text{ M} \\approx 12.0\\text{ M}$.',
      misconceptionTarget: 'Lupa menyertakan faktor pengali 10 atau salah membedakan persen massa dan densitas',
    },
    {
      id: 'chk-osn03-pre3-q2',
      type: 'true_false',
      question: 'Ketika $100\\text{ mL}$ larutan asam nitrat $2.0\\text{ M}$ diencerkan dengan penambahan $300\\text{ mL}$ air murni, jumlah mol ion $\\ce{H+}$ terlarut berkurang menjadi seperempat dari nilai awalnya.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Pada proses pengenceran dengan penambahan akuades murni, konsentrasi molaritas $(M)$ memang menurun karena volume bertambah, namun jumlah mol zat terlarut $(n = V \\times M)$ selalu KONSTAN: $n = 0.100\\text{ L} \\times 2.0\\text{ mol/L} = 0.20\\text{ mol}$. Volume akhir menjadi $400\\text{ mL}$, sehingga molaritas baru $= 0.50\\text{ M}$, tetapi mol solut tetap $0.20\\text{ mol}$.',
      misconceptionTarget: 'Mengira pengenceran larutan dapat mengurangi kuantitas mol zat terlarut',
    },
    {
      id: 'chk-osn03-pre3-q3',
      type: 'multiple_choice',
      question: 'Sebanyak $100.0\\text{ mL}$ larutan barium nitrat $\\ce{Ba(NO3)2}\\ 0.10\\text{ M}$ dicampurkan dengan $100.0\\text{ mL}$ larutan natrium sulfat $\\ce{Na2SO4}\\ 0.15\\text{ M}$, menghasilkan endapan putih $\\ce{BaSO4(s)}$. Berapakah konsentrasi ion sulfat $(\\ce{SO4^2-})$ sisa dalam larutan setelah reaksi tuntas?',
      options: [
        '$0.050\\text{ M}$',
        '$0.025\\text{ M}$',
        '$0.010\\text{ M}$',
        '$0.000\\text{ M}$',
      ],
      correctAnswer: 1,
      explanation: 'Mol awal $\\ce{Ba^2+} = 100\\text{ mL} \\times 0.10\\text{ M} = 10\\text{ mmol}$.\\nMol awal $\\ce{SO4^2-} = 100\\text{ mL} \\times 0.15\\text{ M} = 15\\text{ mmol}$.\\nReaksi: $\\ce{Ba^2+ + SO4^2- -> BaSO4(s)}$ (rasio $1:1$).\\n$\\ce{Ba^2+}$ habis sebagai pereaksi pembatas ($10\\text{ mmol}$).\\nMol $\\ce{SO4^2-}$ sisa $= 15 - 10 = 5\\text{ mmol}$.\\nVolume total larutan $= 100 + 100 = 200\\text{ mL}$.\\nKonsentrasi sisa $[\\ce{SO4^2-}] = \\frac{5\\text{ mmol}}{200\\text{ mL}} = 0.025\\text{ M}$.',
      misconceptionTarget: 'Lupa membagi sisa mol dengan volume total campuran (200 mL), sehingga mengira konsentrasinya tetap 0.050 M',
    },
  ],

  // Konsep Inti 1: Hukum Gas Ideal, Tekanan Parsial Dalton, & Teori Kinetik Gas
  'gas-ideal-teori-kinetik': [
    {
      id: 'chk-osn03-core1-q1',
      type: 'multiple_choice',
      question: 'Dua buah wadah kaku dengan volume yang sama pada temperatur identik: wadah 1 berisi $2.0\\text{ g}$ gas $\\ce{H2}$ ($M_r = 2.02\\text{ g/mol}$) dan wadah 2 berisi $2.0\\text{ g}$ gas $\\ce{O2}$ ($M_r = 32.00\\text{ g/mol}$). Perbandingan tekanan gas wadah 1 terhadap wadah 2 ($P_1 : P_2$) adalah mendekati:',
      options: [
        '$1 : 1$',
        '$1 : 16$',
        '$16 : 1$',
        '$4 : 1$',
      ],
      correctAnswer: 2,
      explanation: 'Menurut hukum gas ideal ($P = \\frac{nRT}{V}$), pada $V$ dan $T$ yang sama, tekanan berbanding lurus dengan mol gas ($P \\propto n$).\\n$n_1 = \\frac{2.0}{2.02} \\approx 0.99\\text{ mol}$.\\n$n_2 = \\frac{2.0}{32.00} = 0.0625\\text{ mol}$.\\n$\\frac{P_1}{P_2} = \\frac{n_1}{n_2} = \\frac{0.99}{0.0625} \\approx 16 : 1$.',
      misconceptionTarget: 'Mengira massa gas yang sama dalam wadah bervolume sama selalu menghasilkan tekanan gas yang sama',
    },
    {
      id: 'chk-osn03-core1-q2',
      type: 'true_false',
      question: 'Berdasarkan Teori Kinetik Gas, pada wadah bertemperatur sama ($T = 300\\text{ K}$), molekul gas $\\ce{He}$ memiliki energi kinetik translasi rata-rata $(\\overline{E}_k)$ yang persis sama dengan molekul gas $\\ce{Xe}$, meskipun atom $\\ce{He}$ bergerak dengan kecepatan rata-rata jauh lebih cepat.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Energi kinetik translasi rata-rata per molekul gas murni hanya bergantung pada temperatur mutlak: $\\overline{E}_k = \\frac{3}{2} k_B T$. Pada temperatur yang sama, $\\overline{E}_k$ seluruh molekul gas bernilai identik. Kecepatan $\\ce{He}$ lebih tinggi ($v \\propto 1/\\sqrt{M}$), tetapi karena massanya kecil, produk $\\frac{1}{2} m \\overline{v^2}$ tepat sama dengan gas $\\ce{Xe}$.',
      misconceptionTarget: 'Menyamakan besaran energi kinetik partikel dengan kecepatan rata-rata molekul',
    },
    {
      id: 'chk-osn03-core1-q3',
      type: 'multiple_choice',
      question: 'Gas hidrogen hasil reaksi ditampung melalui metode pemindahan air (water displacement) pada suhu $25.0^\\circ\\text{C}$. Tekanan total atmosfer terbaca pada barometer adalah $756.0\\text{ mmHg}$. Jika tekanan uap jenuh air pada $25.0^\\circ\\text{C}$ adalah $23.8\\text{ mmHg}$, berapakah tekanan parsial gas $\\ce{H2}$ kering yang sesungguhnya?',
      options: [
        '$779.8\\text{ mmHg}$',
        '$756.0\\text{ mmHg}$',
        '$732.2\\text{ mmHg}$',
        '$760.0\\text{ mmHg}$',
      ],
      correctAnswer: 2,
      explanation: 'Berdasarkan Hukum Tekanan Parsial Dalton: $P_{\\text{total}} = P_{\\ce{H2(kering)}} + P_{\\ce{H2O(uap)}}^\\ast$.\\nMaka $P_{\\ce{H2(kering)}} = P_{\\text{total}} - P_{\\ce{H2O(uap)}}^\\ast = 756.0\\text{ mmHg} - 23.8\\text{ mmHg} = 732.2\\text{ mmHg}$.',
      misconceptionTarget: 'Mengabaikan kontribusi tekanan uap air jenuh saat menampung gas di atas air',
    },
  ],

  // Konsep Inti 2: Gas Nyata Van der Waals, Faktor Kompresibilitas, & Temperatur Boyle
  'gas-nyata-van-der-waals': [
    {
      id: 'chk-osn03-core2-q1',
      type: 'multiple_choice',
      question: 'Dalam persamaan keadaan gas nyata Van der Waals $\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT$, keberadaan parameter konstanta $a$ secara fisis bertujuan untuk mengoreksi:',
      options: [
        'Volume fisik terisi yang tidak dapat ditembus oleh molekul gas lain',
        'Gaya tarik-menarik elektrostatik (kohesi) antar-molekul yang melemahkan impuls benturan ke dinding wadah',
        'Energi kinetik rotasi dan vibrasi internal molekul gas poliatomik',
        'Pembentukan ikatan kovalen permanen antar-partikel pada tekanan tinggi',
      ],
      correctAnswer: 1,
      explanation: 'Konstanta $a$ mengoreksi gaya tarik intermolekul (gaya Van der Waals/London/dipol). Karena molekul gas saling tarik-menarik, molekul yang membentur dinding ditarik ke dalam oleh molekul di belakangnya, sehingga tekanan terukur ($P$) lebih kecil daripada gas ideal. Suku $\\frac{an^2}{V^2}$ ditambahkan pada $P$ untuk mengembalikan tekanan ke nilai ideal.',
      misconceptionTarget: 'Tertukar memahami makna fisis antara parameter koreksi gaya kohesi (a) dan koreksi volume eksklusi (b)',
    },
    {
      id: 'chk-osn03-core2-q2',
      type: 'true_false',
      question: 'Jika suatu gas nyata berada pada kondisi tekanan sedang dan menunjukkan faktor kompresibilitas $Z = \\frac{PV_m}{RT} < 1$, hal ini mengindikasikan bahwa pengaruh gaya tarik-menarik antar-molekul mendominasi di atas efek tolakan volume eksklusi partikel.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Ketika $Z < 1$, volume molar gas nyata lebih kecil daripada volume molar gas ideal ($V_m < V_m^{\\text{ideal}}$) pada $P$ dan $T$ yang sama. Ini terjadi karena gaya tarik intermolekul saling menarik molekul lebih dekat satu sama lain, membuktikan dominasi gaya tarik dibanding tolakan volume ruang.',
      misconceptionTarget: 'Mengira Z < 1 berarti kerapatan gas berkurang atau volume molekul lenyap',
    },
    {
      id: 'chk-osn03-core2-q3',
      type: 'multiple_choice',
      question: 'Temperatur khusus di mana gas nyata mematuhi Hukum Gas Ideal ($Z \\approx 1$) sepanjang rentang tekanan rendah hingga moderat karena suku gaya tarik dan suku volume eksklusi saling meniadakan secara tepat dinamakan:',
      options: [
        'Temperatur Kritis ($T_c$)',
        'Temperatur Titik Tripel ($T_{\\text{tp}}$)',
        'Temperatur Boyle ($T_B = \\frac{a}{Rb}$)',
        'Temperatur Inversi Joule-Thomson ($T_i$)',
      ],
      correctAnswer: 2,
      explanation: 'Temperatur Boyle didefinisikan sebagai temperatur ketika limit koefisien virial kedua lenyap ($B(T) = b - \\frac{a}{RT} = 0 \\implies T_B = \\frac{a}{Rb}$). Pada temperatur ini, gaya tarik intermolekul ($a$) dan volume eksklusi ($b$) saling mengompensasi secara sempurna.',
      misconceptionTarget: 'Menyamakan Temperatur Boyle dengan Temperatur Kritis fluida',
    },
  ],

  // Konsep Inti 3: Hukum Difusi & Efusi Graham serta Distribusi Maxwell-Boltzmann
  'hukum-efusi-difusi-graham': [
    {
      id: 'chk-osn03-core3-q1',
      type: 'multiple_choice',
      question: 'Suatu volume gas tak dikenal $X$ memerlukan waktu $80.0\\text{ detik}$ untuk berefusi melalui lubang mikro. Pada kondisi suhu dan tekanan yang sama, volume yang sama gas metana $(\\ce{CH4}, M_r = 16.04\\text{ g/mol})$ berefusi tuntas dalam waktu $40.0\\text{ detik}$. Berapakah massa molar gas $X$?',
      options: [
        '$32.08\\text{ g/mol}$',
        '$64.16\\text{ g/mol}$',
        '$8.02\\text{ g/mol}$',
        '$128.32\\text{ g/mol}$',
      ],
      correctAnswer: 1,
      explanation: 'Berdasarkan Hukum Efusi Graham: $\\frac{t_X}{t_{\\ce{CH4}}} = \\sqrt{\\frac{M_X}{M_{\\ce{CH4}}}}$.\\n$\\frac{80.0}{40.0} = 2.0 = \\sqrt{\\frac{M_X}{16.04}}$.\\nKuadratkan kedua ruas: $4.0 = \\frac{M_X}{16.04} \\implies M_X = 4.0 \\times 16.04 = 64.16\\text{ g/mol}$ (misalnya gas $\\ce{SO2}$).',
      misconceptionTarget: 'Lupa mengkuadratkan rasio waktu efusi sehingga hanya mengalikan massa molar dengan 2',
    },
    {
      id: 'chk-osn03-core3-q2',
      type: 'true_false',
      question: 'Proses difusi gas di udara terbuka berlangsung ribuan kali lebih lambat daripada kecepatan termal translasi molekulnya sendiri ($v_{\\text{rms}} \\sim 500\\text{ m/s}$) karena molekul gas mengalami miliaran tumbukan antar-partikel per detik yang menghasilkan gerak acak lintasan bebas (random walk).',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Meskipun kecepatan gerak molekul sangat cepat (ratusan meter per detik), lintasan bebas rata-rata (mean free path) pada tekanan $1\\text{ atm}$ hanya sekitar puluhan nanometer. Partikel bertumbukan miliaran kali per detik dan lintasannya berbelok-belok acak (random walk), sehingga laju perambatan difusi makroskopis tampak sangat lambat.',
      misconceptionTarget: 'Mengira molekul gas bergerak lurus tanpa hambatan saat berdifusi di udara terbuka',
    },
    {
      id: 'chk-osn03-core3-q3',
      type: 'multiple_choice',
      question: 'Pada kurva fungsi distribusi kecepatan Maxwell-Boltzmann gas ideal pada temperatur $T$, urutan hubungan nilai ketiga kecepatan karakteristik molekul dari yang bernilai terkecil hingga terbesar adalah:',
      options: [
        '$v_{\\text{rms}} < \\overline{v} < v_{\\text{mp}}$',
        '$v_{\\text{mp}} < \\overline{v} < v_{\\text{rms}}$',
        '$\\overline{v} < v_{\\text{mp}} < v_{\\text{rms}}$',
        '$v_{\\text{mp}} = \\overline{v} = v_{\\text{rms}}$',
      ],
      correctAnswer: 1,
      explanation: 'Rumus ketiga kecepatan:\\n- $v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}} \\approx 1.414 \\sqrt{\\frac{RT}{M}}$\\n- $\\overline{v} = \\sqrt{\\frac{8RT}{\\pi M}} \\approx 1.596 \\sqrt{\\frac{RT}{M}}$\\n- $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} \\approx 1.732 \\sqrt{\\frac{RT}{M}}$\\nMaka urutannya selalu: $v_{\\text{mp}} < \\overline{v} < v_{\\text{rms}}$ (rasio $1.000 : 1.128 : 1.225$).',
      misconceptionTarget: 'Mengira kecepatan paling mungkin (v_mp) adalah nilai kecepatan yang paling besar nilainya',
    },
  ],

  // Konsep Inti 4: Wujud Zat, Diagram Fasa P-T, & Persamaan Clausius-Clapeyron
  'diagram-fasa-clausius-clapeyron': [
    {
      id: 'chk-osn03-core4-q1',
      type: 'multiple_choice',
      question: 'Pada diagram fasa $P-T$ air murni $(\\ce{H2O})$, garis kesetimbangan padat-cair (peleburan) memiliki kemiringan unik bergradien negatif $\\left(\\frac{dP}{dT} < 0\\right)$. Fenomena termodinamika mendasar yang menjelaskan anomali ini adalah:',
      options: [
        'Air terdisosiasi menjadi ion $\\ce{H+}$ dan $\\ce{OH-}$ pada tekanan tinggi',
        'Es padat memiliki kerapatan lebih rendah dibanding air cair $(\\Delta V_{\\text{peleburan}} < 0)$ akibat struktur heksagonal terbuka ikatan hidrogen',
        'Entalpi peleburan es bernilai negatif (eksoterm)',
        'Es mengalami sublimasi spontan tanpa melewati wujud cair pada semua tekanan di atas $1\\text{ atm}$',
      ],
      correctAnswer: 1,
      explanation: 'Berdasarkan persamaan Clapeyron: $\\frac{dP}{dT} = \\frac{\\Delta H_{\\text{fus}}}{T \\cdot \\Delta V_{\\text{fus}}}$. Untuk air, es memiliki rongga terbuka sehingga volumenya lebih besar daripada air cair. Akibatnya $\\Delta V_{\\text{fus}} = V_{\\text{cair}} - V_{\\text{padat}} < 0$. Karena $\\Delta H_{\\text{fus}} > 0$ dan $\\Delta V_{\\text{fus}} < 0$, kemiringan $\\frac{dP}{dT}$ bergradien negatif (miring ke kiri). Peningkatan tekanan menurunkan titik lebur es.',
      misconceptionTarget: 'Mengira entalpi peleburan es bernilai negatif atau mengira semua zat padat memiliki kurva miring ke kiri',
    },
    {
      id: 'chk-osn03-core4-q2',
      type: 'true_false',
      question: 'Berdasarkan Aturan Fasa Gibbs ($F = C - P + 2$), pada titik tripel suatu zat murni tunggal ($C=1, P=3$), sistem memiliki derajat kebebasan $F = 0$ (invarian), yang berarti temperatur dan tekanan titik tripel bernilai pasti dan tidak dapat diubah tanpa menghilangkan salah satu fasa.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. $F = C - P + 2 = 1 - 3 + 2 = 0$. Derajat kebebasan nol (invarian) menunjukkan bahwa ketiga fasa (padat, cair, gas) hanya dapat berada dalam kesetimbangan bersama pada satu pasangan koordinat $(P, T)$ spesifik yang unik (untuk air: $T = 273.16\\text{ K}, P = 0.00603\\text{ atm}$).',
      misconceptionTarget: 'Mengira tekanan atau temperatur pada titik tripel dapat diatur secara bebas oleh eksperimenter',
    },
    {
      id: 'chk-osn03-core4-q3',
      type: 'multiple_choice',
      question: 'Plot linier grafik $\\ln P$ terhadap $\\frac{1}{T}$ untuk data tekanan uap jenuh cairan benzena menghasilkan garis lurus dengan kemiringan (gradien) $m = -3750\\text{ K}$. Jika tetapan gas $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$, berapakah kalor penguapan molar $(\\Delta H_{\\text{vap}})$ benzena?',
      options: [
        '$3.75\\text{ kJ/mol}$',
        '$31.18\\text{ kJ/mol}$',
        '$45.10\\text{ kJ/mol}$',
        '$311.8\\text{ kJ/mol}$',
      ],
      correctAnswer: 1,
      explanation: 'Dari bentuk diferensial Clausius-Clapeyron: $\\ln P = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T}\\right) + C$.\\nGradien garis $m = -\\frac{\\Delta H_{\\text{vap}}}{R}$.\\nMaka $\\Delta H_{\\text{vap}} = -m \\times R = -(-3750\\text{ K}) \\times 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K}) = 31177.5\\text{ J/mol} \\approx 31.18\\text{ kJ/mol}$.',
      misconceptionTarget: 'Lupa mengalikan gradien grafik dengan tetapan gas R atau salah mengonversi J ke kJ',
    },
  ],

  // Konsep Inti 5: Struktur Kristal Zat Padat, Sel Satuan (Unit Cell), & Kisi Bravais
  'struktur-kristal-padat-unit-cell': [
    {
      id: 'chk-osn03-core5-q1',
      type: 'multiple_choice',
      question: 'Logam perak murni mengkristal dalam kisi kubus berpusat muka (Face-Centered Cubic / FCC). Jika panjang rusuk sel satuan kubus tersebut adalah $a$, bagaimanakah hubungan matematis antara jari-jari atom perak ($r$) dengan panjang rusuk ($a$)?',
      options: [
        '$r = \\frac{a}{2}$',
        '$r = \\frac{a\\sqrt{3}}{4}$',
        '$r = \\frac{a\\sqrt{2}}{4} = \\frac{a}{2\\sqrt{2}}$',
        '$r = a\\sqrt{2}$',
      ],
      correctAnswer: 2,
      explanation: 'Pada kisi FCC, atom-atom bersentuhan rapat di sepanjang diagonal muka kubus: $d_{\\text{muka}} = 4r = a\\sqrt{2}$.\\nMaka jari-jari atom $r = \\frac{a\\sqrt{2}}{4} = \\frac{a}{2\\sqrt{2}}$. (Bandingkan dengan kisi BCC di mana atom bersentuhan di diagonal ruang $4r = a\\sqrt{3}$).',
      misconceptionTarget: 'Tertukar menggunakan hubungan diagonal ruang kisi BCC (4r = a√3) untuk kisi FCC',
    },
    {
      id: 'chk-osn03-core5-q2',
      type: 'true_false',
      question: 'Pada struktur kristal ionik batu garam halit $(\\ce{NaCl})$, ion $\\ce{Na+}$ menempati seluruh lubang oktahedral dalam kisi kemasan terjejal FCC ion $\\ce{Cl-}$, sehingga bilangan koordinasi (rasio jumlah tetangga terdekat) untuk kation dan anion adalah $6 : 6$.',
      correctAnswer: true,
      explanation: 'Pernyataan BENAR. Dalam sel satuan $\\ce{NaCl}$, ion $\\ce{Cl-}$ membentuk kisi FCC ($n=4$), dan ion $\\ce{Na+}$ menempati seluruh $4$ lubang oktahedral (1 di pusat sel $+ 12 \\times \\frac{1}{4}$ di tengah rusuk $= 4$). Setiap $\\ce{Na+}$ dikelilingi 6 ion $\\ce{Cl-}$, dan setiap $\\ce{Cl-}$ dikelilingi 6 ion $\\ce{Na+}$ (BK $= 6:6$).',
      misconceptionTarget: 'Mengira bilangan koordinasi NaCl adalah 8:8 seperti pada struktur sesium klorida (CsCl)',
    },
    {
      id: 'chk-osn03-core5-q3',
      type: 'multiple_choice',
      question: 'Suatu logam transisi hipotetis mengkristal dalam kisi kubus berpusat badan (BCC, $n = 2\\text{ atom/sel}$) dengan panjang rusuk $a = 300.0\\text{ pm}$ ($3.00 \\times 10^{-8}\\text{ cm}$). Jika massa molarnya adalah $M = 60.0\\text{ g/mol}$ dan $N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$, densitas kristal tersebut mendekati:',
      options: [
        '$3.69\\text{ g/cm}^3$',
        '$7.38\\text{ g/cm}^3$',
        '$14.76\\text{ g/cm}^3$',
        '$1.85\\text{ g/cm}^3$',
      ],
      correctAnswer: 1,
      explanation: 'Volume sel satuan $V_{\\text{cell}} = a^3 = (3.00 \\times 10^{-8}\\text{ cm})^3 = 2.70 \\times 10^{-23}\\text{ cm}^3$.\\nRumus densitas: $\\rho = \\frac{n \\cdot M}{N_A \\cdot a^3}$.\\n$\\rho = \\frac{2 \\times 60.0\\text{ g/mol}}{6.022 \\times 10^{23}\\text{ mol}^{-1} \\times 2.70 \\times 10^{-23}\\text{ cm}^3} = \\frac{120.0}{16.259} \\approx 7.38\\text{ g/cm}^3$.',
      misconceptionTarget: 'Menggunakan n = 1 atom/sel (menganggap kubus sederhana) alih-alih n = 2 untuk kisi BCC',
    },
  ],

  // Konsep Inti 6: Kristalografi Lanjutan: Struktur Kisi Perovskite, Faktor Toleransi Goldschmidt, Kisi HCP & Difraksi Sinar-X (XRD)
  'kristalografi-lanjutan-perovskite-xrd': [
    {
      id: 'chk-osn03-core6-q1',
      type: 'multiple_choice',
      question: 'Pada struktur kristal kisi perovskite kubus ideal $\\ce{ABO3}$ (misalnya $\\ce{SrTiO3}$), kation A yang berukuran besar terkoordinasi oleh atom-atom oksigen dengan bilangan koordinasi (BK) sebesar:',
      options: [
        '$4$ (tetrahedral)',
        '$6$ (oktahedral)',
        '$8$ (kubus)',
        '$12$ (kuboktahedron)',
      ],
      correctAnswer: 3,
      explanation: 'Pada struktur perovskite ideal $\\ce{ABO3}$, kation A berada di rongga kuboktahedron 12-koordinasi dengan anion oksigen (BK $= 12$). Sementara kation B (kation kecil bervalensi tinggi di pusat sel) terkoordinasi oleh 6 anion oksigen membentuk oktahedron $[\\ce{BO6}]$ (BK $= 6$).',
      misconceptionTarget: 'Menyamakan bilangan koordinasi kation A (BK = 12) dengan kation B (BK = 6) dalam kisi perovskite',
    },
    {
      id: 'chk-osn03-core6-q2',
      type: 'true_false',
      question: 'Pembentukan cacat kristal Frenkel (perpindahan ion dari posisi kisi normal ke rongga celah interstisial) menyebabkan penurunan kerapatan (densitas) makroskopis kristal secara signifikan.',
      correctAnswer: false,
      explanation: 'Pernyataan SALAH. Pada cacat Frenkel, ion hanya berpindah posisi ke celah interstisial di dalam sel kristal tanpa meninggalkan kisi kristal menuju lingkungan luar. Oleh karena itu, jumlah massa dan volume total sel tetap sama $\\implies$ densitas kristal TETAP KONSTAN. Cacat yang menyebabkan penurunan densitas secara nyata adalah Cacat Schottky (di mana pasangan kation dan anion hilang bersamaan meninggalkan kisi).',
      misconceptionTarget: 'Mengira semua tipe cacat titik kristal selalu menurunkan kerapatan/densitas kristal',
    },
    {
      id: 'chk-osn03-core6-q3',
      type: 'multiple_choice',
      question: 'Pengukuran difraksi sinar-X (XRD) orde pertama ($n=1$) menggunakan sinar radiasi $\\lambda = 154.0\\text{ pm}$ pada bidang kisi $(100)$ kristal kubus menghasilkan sudut Bragg $\\theta = 30.0^\\circ$. Berapakah panjang konstanta kisi ($a$) kristal kubus tersebut?',
      options: [
        '$77.0\\text{ pm}$',
        '$154.0\\text{ pm}$',
        '$308.0\\text{ pm}$',
        '$217.8\\text{ pm}$',
      ],
      correctAnswer: 1,
      explanation: 'Hukum Bragg: $n\\lambda = 2 d_{hkl} \\sin\\theta$.\\n$1 \\times 154.0\\text{ pm} = 2 d_{100} \\sin(30^\\circ) = 2 d_{100} (0.5) = d_{100} \\implies d_{100} = 154.0\\text{ pm}$.\\nUntuk kristal kubus: $d_{hkl} = \\frac{a}{\\sqrt{h^2+k^2+l^2}}$.\\n$d_{100} = \\frac{a}{\\sqrt{1^2+0^2+0^2}} = a \\implies a = 154.0\\text{ pm}$.',
      misconceptionTarget: 'Salah mengalikan sudut difraksi atau keliru mengevaluasi 2 sin(30°)',
    },
  ],
};
