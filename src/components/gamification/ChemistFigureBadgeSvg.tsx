import React from 'react';
import { getLevelDefinition, getLevelFromXp, type ChemistryTier } from '../../utils/gamificationConstants';

interface ChemistFigureBadgeSvgProps {
  level?: number;
  xp?: number;
  size?: number;
  className?: string;
  showLevelRibbon?: boolean;
}

// Skema warna medali & discovery ring berdasarkan tier ilmiah
const TIER_METALLICS: Record<
  ChemistryTier,
  {
    ringGrad: [string, string, string];
    bgFill: string;
    accentFill: string;
    strokeColor: string;
    ribbonBg: string;
    ribbonText: string;
    glowColor: string;
  }
> = {
  basic: {
    // Bronze / Warm Gold Serene (Klasik Dalton - Avogadro)
    ringGrad: ['#D4A359', '#F3D698', '#99732A'],
    bgFill: '#FFFFF4',
    accentFill: '#B8860B',
    strokeColor: '#7E5B10',
    ribbonBg: '#C59345',
    ribbonText: '#FFFFFF',
    glowColor: 'rgba(212, 163, 89, 0.25)',
  },
  osk: {
    // Sage Green Metallic (OSK Arrhenius - Bohr)
    ringGrad: ['#2E6930', '#74A876', '#1E4720'],
    bgFill: '#F4FBF4',
    accentFill: '#2E6930',
    strokeColor: '#1B3F1D',
    ribbonBg: '#2E6930',
    ribbonText: '#FFFFFF',
    glowColor: 'rgba(46, 105, 48, 0.25)',
  },
  osp: {
    // Light Steel & Sapphire (OSP Mendeleev - Kekulé)
    ringGrad: ['#4682B4', '#99C0E2', '#2A5375'],
    bgFill: '#F0F8FF',
    accentFill: '#2B6CB0',
    strokeColor: '#1A4064',
    ribbonBg: '#3B7AA8',
    ribbonText: '#FFFFFF',
    glowColor: 'rgba(70, 130, 180, 0.25)',
  },
  osn: {
    // Imperial Warm Amber (OSN Werner - Schrödinger)
    ringGrad: ['#D97706', '#FCD34D', '#92400E'],
    bgFill: '#FFFDF0',
    accentFill: '#B45309',
    strokeColor: '#78350F',
    ribbonBg: '#D97706',
    ribbonText: '#FFFFFF',
    glowColor: 'rgba(217, 119, 6, 0.28)',
  },
  icho: {
    // Grand Alchemical Royal Gold & Amethyst (IChO Woodward - Jabir)
    ringGrad: ['#7C3AED', '#E9D5FF', '#4C1D95'],
    bgFill: '#FAF5FF',
    accentFill: '#7C3AED',
    strokeColor: '#431407',
    ribbonBg: '#6D28D9',
    ribbonText: '#FDE047',
    glowColor: 'rgba(124, 58, 237, 0.3)',
  },
};

/**
 * Komponen SVG Emblem Penemuan Ilmiah Murni (Scientific Discovery Emblem)
 * Merefleksikan artefak penemuan & diagram eksperimen 20 tokoh kimia dunia
 */
export const ChemistFigureBadgeSvg: React.FC<ChemistFigureBadgeSvgProps> = ({
  level,
  xp,
  size = 88,
  className = '',
  showLevelRibbon = true,
}) => {
  const safeLevel = Math.max(
    1,
    Math.min(
      20,
      level !== undefined
        ? Math.floor(level)
        : xp !== undefined
        ? getLevelFromXp(xp).level
        : 1
    )
  );
  const def = getLevelDefinition(safeLevel);
  const theme = TIER_METALLICS[def.tier] || TIER_METALLICS.basic;

  const renderDiscoveryGraphic = () => {
    switch (safeLevel) {
      // 1. John Dalton: Model Bola Pejal Atom & Simbol Unsur Klasik
      case 1:
        return (
          <g id="dalton-discovery">
            {/* Bola atomik utama bertekstur arsir */}
            <circle cx="50" cy="46" r="21" fill="#F3E5AB" stroke="#8B5A2B" strokeWidth="2.5" />
            <circle cx="50" cy="46" r="14" fill="#E6C875" opacity="0.6" />
            {/* Simbol silang klasik Dalton untuk sulfur/oksigen */}
            <line x1="50" y1="28" x2="50" y2="64" stroke="#8B5A2B" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="46" x2="68" y2="46" stroke="#8B5A2B" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="50" cy="46" r="4.5" fill="#8B5A2B" />
            {/* Bola-bola atom kecil pembentuk perbandingan berganda */}
            <circle cx="27" cy="30" r="7" fill="#C59345" stroke="#7E5B10" strokeWidth="1.5" />
            <circle cx="73" cy="30" r="7" fill="#C59345" stroke="#7E5B10" strokeWidth="1.5" />
            <line x1="33" y1="34" x2="40" y2="40" stroke="#7E5B10" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="67" y1="34" x2="60" y2="40" stroke="#7E5B10" strokeWidth="1.5" strokeDasharray="2 2" />
          </g>
        );

      // 2. Antoine Lavoisier: Timbangan Presisi Neraca Analitik (Kekekalan Massa)
      case 2:
        return (
          <g id="lavoisier-discovery">
            {/* Tiang neraca sentral */}
            <rect x="48" y="24" width="4" height="34" rx="2" fill="#7E5B10" />
            <polygon points="43,58 57,58 53,62 47,62" fill="#7E5B10" />
            <rect x="42" y="62" width="16" height="3" rx="1.5" fill="#5A3E08" />
            {/* Jarum penunjuk keseimbangan nol */}
            <circle cx="50" cy="27" r="4" fill="#D4A359" stroke="#7E5B10" strokeWidth="1.5" />
            <line x1="50" y1="27" x2="50" y2="35" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" />
            {/* Lengan horizontal setimbang */}
            <line x1="24" y1="28" x2="76" y2="28" stroke="#7E5B10" strokeWidth="2.5" strokeLinecap="round" />
            {/* Tali gantung piringan kiri */}
            <line x1="26" y1="29" x2="21" y2="44" stroke="#8C6D23" strokeWidth="1.2" />
            <line x1="26" y1="29" x2="31" y2="44" stroke="#8C6D23" strokeWidth="1.2" />
            <ellipse cx="26" cy="44" rx="10" ry="2.5" fill="#D4A359" stroke="#7E5B10" strokeWidth="1.5" />
            <path d="M22 43 C22 41, 30 41, 30 43 Z" fill="#2E6930" opacity="0.85" />
            {/* Tali gantung piringan kanan */}
            <line x1="74" y1="29" x2="69" y2="44" stroke="#8C6D23" strokeWidth="1.2" />
            <line x1="74" y1="29" x2="79" y2="44" stroke="#8C6D23" strokeWidth="1.2" />
            <ellipse cx="74" cy="44" rx="10" ry="2.5" fill="#D4A359" stroke="#7E5B10" strokeWidth="1.5" />
            <rect x="71" y="40" width="6" height="4" rx="1" fill="#7E5B10" />
          </g>
        );

      // 3. Ernest Rutherford: Hamburan Partikel Alfa Lembaran Emas & Inti Atom
      case 3:
        return (
          <g id="rutherford-discovery">
            {/* Lembaran emas vertikal */}
            <rect x="52" y="24" width="4.5" height="44" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1.2" opacity="0.85" />
            {/* Inti atom positif di tengah berkilau */}
            <circle cx="54" cy="46" r="6" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
            <text x="54" y="49" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#FFFFFF">+</text>
            {/* Berkas partikel alfa datang dari kiri */}
            <line x1="20" y1="46" x2="49" y2="46" stroke="#2563EB" strokeWidth="2.5" strokeDasharray="3 2" />
            <polygon points="49,43 53,46 49,49" fill="#2563EB" />
            {/* Partikel alfa terhambur sudut lebar ke atas */}
            <path d="M 52 44 Q 46 36 32 26" fill="none" stroke="#E11D48" strokeWidth="2" strokeDasharray="3 2" />
            <polygon points="30,28 32,24 35,27" fill="#E11D48" />
            {/* Partikel alfa tembus lurus ke kanan */}
            <line x1="57" y1="46" x2="80" y2="46" stroke="#059669" strokeWidth="1.8" strokeDasharray="3 2" />
            <polygon points="78,43 82,46 78,49" fill="#059669" />
            {/* Partikel alfa terhambur ke bawah */}
            <path d="M 54 49 Q 60 58 74 65" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeDasharray="3 2" />
            <polygon points="72,62 76,66 71,67" fill="#2563EB" />
          </g>
        );

      // 4. Amedeo Avogadro: Labu Gas Kembar & Hipotesis Mol Partikel
      case 4:
        return (
          <g id="avogadro-discovery">
            {/* Labu Gas Kiri */}
            <ellipse cx="36" cy="54" rx="14" ry="10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
            <rect x="33" y="32" width="6" height="15" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
            <ellipse cx="36" cy="32" rx="3" ry="1.2" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.2" />
            {/* Labu Gas Kanan */}
            <ellipse cx="64" cy="54" rx="14" ry="10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
            <rect x="61" y="32" width="6" height="15" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
            <ellipse cx="64" cy="32" rx="3" ry="1.2" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.2" />
            {/* Molekul gas diatomik di dalam labu */}
            <circle cx="32" cy="53" r="2.5" fill="#0284C7" />
            <circle cx="36" cy="53" r="2.5" fill="#0284C7" />
            <circle cx="38" cy="57" r="2.2" fill="#0369A1" />
            <circle cx="42" cy="57" r="2.2" fill="#0369A1" />
            <circle cx="60" cy="53" r="2.5" fill="#0284C7" />
            <circle cx="64" cy="53" r="2.5" fill="#0284C7" />
            <circle cx="66" cy="57" r="2.2" fill="#0369A1" />
            <circle cx="70" cy="57" r="2.2" fill="#0369A1" />
            {/* Label simbolis V = V, N = N */}
            <text x="50" y="27" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#0369A1">Nₐ</text>
          </g>
        );

      // 5. Svante Arrhenius: Disosiasi Elektrolit & Kurva Energi Aktivasi Ea
      case 5:
        return (
          <g id="arrhenius-discovery">
            {/* Kurva Energi Aktivasi Ea di latar belakang */}
            <path d="M 22 56 Q 36 56 42 36 Q 50 22 58 36 Q 64 60 78 60" fill="none" stroke="#2E6930" strokeWidth="2.5" />
            {/* Puncak Ea & Garis Panah */}
            <line x1="50" y1="24" x2="50" y2="40" stroke="#C59345" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="50" y="20" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#2E6930">Eₐ</text>
            {/* Ion positif kation */}
            <circle cx="32" cy="46" r="6" fill="#DEF7EC" stroke="#057A55" strokeWidth="1.5" />
            <text x="32" y="49" textAnchor="middle" fontSize="7.5" fontWeight="black" fill="#03543F">+</text>
            {/* Ion negatif anion */}
            <circle cx="68" cy="48" r="6" fill="#FDE8E8" stroke="#E02424" strokeWidth="1.5" />
            <text x="68" y="50" textAnchor="middle" fontSize="9" fontWeight="black" fill="#9B1C1C">−</text>
          </g>
        );

      // 6. Gilbert N. Lewis: Pasangan Elektron Ikatan Kovalen & Oktet
      case 6:
        return (
          <g id="lewis-discovery">
            {/* Dua lingkaran atom tumpang tindih (orbital bonding) */}
            <circle cx="41" cy="46" r="16" fill="none" stroke="#047857" strokeWidth="1.8" strokeDasharray="3 2" />
            <circle cx="59" cy="46" r="16" fill="none" stroke="#047857" strokeWidth="1.8" strokeDasharray="3 2" />
            {/* Pasangan elektron ikatan kovalen di lensa irisan */}
            <circle cx="50" cy="42" r="2.8" fill="#047857" />
            <circle cx="50" cy="50" r="2.8" fill="#047857" />
            {/* Inti atom A & B */}
            <circle cx="36" cy="46" r="4" fill="#A7F3D0" stroke="#047857" strokeWidth="1.2" />
            <circle cx="64" cy="46" r="4" fill="#A7F3D0" stroke="#047857" strokeWidth="1.2" />
            {/* Titik elektron valensi bebas (pasangan elektron mandiri) */}
            <circle cx="23" cy="42" r="2" fill="#065F46" />
            <circle cx="23" cy="50" r="2" fill="#065F46" />
            <circle cx="77" cy="42" r="2" fill="#065F46" />
            <circle cx="77" cy="50" r="2" fill="#065F46" />
            <circle cx="36" cy="30" r="2" fill="#065F46" />
            <circle cx="64" cy="30" r="2" fill="#065F46" />
          </g>
        );

      // 7. Henri Le Chatelier: Asas Pergeseran Kesetimbangan Reaksi (⇌)
      case 7:
        return (
          <g id="lechatelier-discovery">
            {/* Dua panah kesetimbangan dinamis bolak-balik tebal */}
            {/* Panah maju ke kanan */}
            <path d="M 24 38 L 70 38" stroke="#047857" strokeWidth="3.5" strokeLinecap="round" />
            <polygon points="76,38 68,34 68,42" fill="#047857" />
            {/* Panah balik ke kiri */}
            <path d="M 76 54 L 30 54" stroke="#D97706" strokeWidth="3.5" strokeLinecap="round" />
            <polygon points="24,54 32,50 32,58" fill="#D97706" />
            {/* Tanda perubahan gangguan delta reaksi */}
            <text x="50" y="27" textAnchor="middle" fontSize="9" fontWeight="extrabold" fill="#047857">ΔP / ΔT</text>
            {/* Indikator geser kesetimbangan */}
            <circle cx="50" cy="46" r="3.5" fill="#F59E0B" />
          </g>
        );

      // 8. Niels Bohr: Orbit Kuantum Melingkar Terkuantisasi & Foton hν
      case 8:
        return (
          <g id="bohr-discovery">
            {/* Inti atom masif */}
            <circle cx="50" cy="46" r="6" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
            {/* Orbit n = 1 */}
            <circle cx="50" cy="46" r="14" fill="none" stroke="#6EE7B7" strokeWidth="1.4" strokeDasharray="3 2" />
            {/* Orbit n = 2 */}
            <circle cx="50" cy="46" r="22" fill="none" stroke="#34D399" strokeWidth="1.6" />
            {/* Elektron di orbit n=2 */}
            <circle cx="50" cy="24" r="3.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1" />
            {/* Emisi Foton bergelombang hν meluncur keluar */}
            <path d="M 52 30 Q 56 34 53 38 Q 50 42 54 45" fill="none" stroke="#F59E0B" strokeWidth="2" />
            <polygon points="58,47 52,43 55,41" fill="#F59E0B" />
            <text x="68" y="34" fontSize="8" fontWeight="bold" fill="#D97706">hν</text>
          </g>
        );

      // 9. Dmitri Mendeleev: Gulungan Tabel Periodik & Slot Ramalan (?)
      case 9:
        return (
          <g id="mendeleev-discovery">
            {/* Kartu / Gulungan Tabel Periodik */}
            <rect x="25" y="24" width="50" height="42" rx="4" fill="#F8FAFC" stroke="#0284C7" strokeWidth="2" />
            {/* Garis-garis sel tabel periodik */}
            <line x1="25" y1="38" x2="75" y2="38" stroke="#93C5FD" strokeWidth="1.5" />
            <line x1="25" y1="52" x2="75" y2="52" stroke="#93C5FD" strokeWidth="1.5" />
            <line x1="41" y1="24" x2="41" y2="66" stroke="#93C5FD" strokeWidth="1.5" />
            <line x1="58" y1="24" x2="58" y2="66" stroke="#93C5FD" strokeWidth="1.5" />
            {/* Simbol unsur legendaris */}
            <text x="33" y="34" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1E3A8A">H</text>
            <text x="50" y="34" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1E3A8A">C</text>
            <text x="66" y="34" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1E3A8A">Fe</text>
            {/* Slot tanda tanya ramalan Eka-Silikon/Eka-Aluminium */}
            <rect x="42" y="39" width="15" height="12" fill="#FEF08A" />
            <text x="50" y="48" textAnchor="middle" fontSize="9" fontWeight="black" fill="#B45309">?</text>
            <text x="33" y="62" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1E3A8A">Na</text>
            <text x="66" y="62" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1E3A8A">Au</text>
          </g>
        );

      // 10. J. Willard Gibbs: Permukaan Energi Bebas Termodinamika (ΔG)
      case 10:
        return (
          <g id="gibbs-discovery">
            {/* Sumbu koordinat termodinamika 3D */}
            <line x1="26" y1="58" x2="26" y2="24" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
            <line x1="26" y1="58" x2="74" y2="58" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
            <polygon points="26,20 23,26 29,26" fill="#0284C7" />
            <polygon points="78,58 72,55 72,61" fill="#0284C7" />
            {/* Kurva energi bebas Gibbs cekung ke bawah menuju kesetimbangan minimum */}
            <path d="M 30 30 Q 50 62 72 34" fill="none" stroke="#D97706" strokeWidth="3" />
            {/* Titik minimum energi bebas (keseimbangan stabil dG = 0) */}
            <circle cx="50" cy="50" r="4" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
            {/* Lambang ΔG */}
            <text x="56" y="30" textAnchor="middle" fontSize="10" fontWeight="black" fill="#1E40AF">ΔG</text>
          </g>
        );

      // 11. Jacobus van 't Hoff: Karbon Tetrahedral 3D & Tabung Osmometer
      case 11:
        return (
          <g id="vanthoff-discovery">
            {/* Gambar geometri tetrahedral karbon sp3 */}
            {/* Ikatan atas */}
            <line x1="50" y1="46" x2="50" y2="24" stroke="#0369A1" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="50" cy="24" r="3.5" fill="#38BDF8" stroke="#0369A1" strokeWidth="1.2" />
            {/* Ikatan kiri bawah */}
            <line x1="50" y1="46" x2="30" y2="60" stroke="#0369A1" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="30" cy="60" r="3.5" fill="#38BDF8" stroke="#0369A1" strokeWidth="1.2" />
            {/* Ikatan baji tebal menonjol ke depan kanan */}
            <polygon points="50,46 68,54 70,58" fill="#0369A1" />
            <circle cx="70" cy="57" r="4" fill="#38BDF8" stroke="#0369A1" strokeWidth="1.2" />
            {/* Ikatan putus-putus ke belakang */}
            <line x1="50" y1="46" x2="62" y2="34" stroke="#0369A1" strokeWidth="2" strokeDasharray="2 2" />
            <circle cx="62" cy="34" r="3" fill="#BAE6FD" stroke="#0369A1" strokeWidth="1" />
            {/* Atom karbon pusat */}
            <circle cx="50" cy="46" r="6" fill="#0284C7" stroke="#0C4A6E" strokeWidth="1.5" />
          </g>
        );

      // 12. August Kekulé: Cincin Aromatisitas Benzena & Resonansi
      case 12:
        return (
          <g id="kekule-discovery">
            {/* Cincin heksagonal luar */}
            <polygon
              points="50,23 70,34 70,58 50,69 30,58 30,34"
              fill="none"
              stroke="#0369A1"
              strokeWidth="2.8"
              strokeLinejoin="round"
            />
            {/* Lingkaran awan elektron pi terdelokalisasi (resonansi benzena) */}
            <circle cx="50" cy="46" r="12" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" strokeDasharray="4 2" />
            {/* Simbol kepala naga ouroboros kecil di puncak cincin (inspirasi mimpi Kekulé) */}
            <circle cx="50" cy="23" r="3.5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
            <circle cx="70" cy="34" r="2.5" fill="#0284C7" />
            <circle cx="70" cy="58" r="2.5" fill="#0284C7" />
            <circle cx="50" cy="69" r="2.5" fill="#0284C7" />
            <circle cx="30" cy="58" r="2.5" fill="#0284C7" />
            <circle cx="30" cy="34" r="2.5" fill="#0284C7" />
          </g>
        );

      // 13. Alfred Werner: Kompleks Oktahedral Koordinasi Logam
      case 13:
        return (
          <g id="werner-discovery">
            {/* Garis-garis ikatan koordinat 6 arah oktahedral */}
            {/* Sumbu aksial vertikal */}
            <line x1="50" y1="22" x2="50" y2="70" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
            {/* Sumbu ekuatorial horizontal */}
            <line x1="24" y1="46" x2="76" y2="46" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
            {/* Sumbu ekuatorial perspektif miring */}
            <line x1="33" y1="32" x2="67" y2="60" stroke="#B45309" strokeWidth="2" strokeDasharray="3 2" />
            {/* 6 Ligan pengeliling */}
            <circle cx="50" cy="22" r="4.5" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
            <circle cx="50" cy="70" r="4.5" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
            <circle cx="24" cy="46" r="4.5" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
            <circle cx="76" cy="46" r="4.5" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
            <circle cx="33" cy="32" r="4" fill="#FDE68A" stroke="#B45309" strokeWidth="1.2" />
            <circle cx="67" cy="60" r="4" fill="#FDE68A" stroke="#B45309" strokeWidth="1.2" />
            {/* Kation Logam Pusat Co / Pt */}
            <circle cx="50" cy="46" r="8" fill="#F59E0B" stroke="#78350F" strokeWidth="2" />
            <text x="50" y="49" textAnchor="middle" fontSize="8" fontWeight="black" fill="#FFFFFF">M</text>
          </g>
        );

      // 14. Marie Skłodowska-Curie: Labu Radium Bercahaya & Radiasi Alfa-Beta-Gamma
      case 14:
        return (
          <g id="curie-discovery">
            {/* Pendaran sinar radiasi radioaktif */}
            <line x1="50" y1="18" x2="50" y2="25" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <line x1="30" y1="26" x2="36" y2="31" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <line x1="70" y1="26" x2="64" y2="31" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <line x1="22" y1="46" x2="29" y2="46" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <line x1="78" y1="46" x2="71" y2="46" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            {/* Labu Erlenmeyer Berkilau */}
            <polygon points="45,30 55,30 68,60 32,60" fill="#FEF9C3" stroke="#D97706" strokeWidth="2" />
            <rect x="44" y="24" width="12" height="6" fill="#FEF9C3" stroke="#D97706" strokeWidth="1.5" />
            {/* Cairan radium berfluoresensi hijau-emas terang */}
            <path d="M 36 52 Q 50 49 64 52 L 67 59 L 33 59 Z" fill="#84CC16" opacity="0.9" />
            {/* Simbol Radium / Atom Ra */}
            <text x="50" y="46" textAnchor="middle" fontSize="9" fontWeight="black" fill="#B45309">Ra</text>
            <circle cx="50" cy="55" r="2" fill="#FFFFFF" />
          </g>
        );

      // 15. Linus Pauling: Hibridisasi Orbital Lobe sp3 & Elektronegativitas
      case 15:
        return (
          <g id="pauling-discovery">
            {/* 4 Cuping orbital hibrida sp3 menonjol simetris */}
            {/* Cuping atas */}
            <path d="M 50 46 C 44 38, 43 22, 50 22 C 57 22, 56 38, 50 46" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
            {/* Cuping kiri bawah */}
            <path d="M 50 46 C 41 46, 26 56, 31 62 C 36 67, 46 54, 50 46" fill="#FEF08A" stroke="#D97706" strokeWidth="1.5" />
            {/* Cuping kanan bawah */}
            <path d="M 50 46 C 54 54, 64 67, 69 62 C 74 56, 59 46, 50 46" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
            {/* Cuping depan kanan */}
            <path d="M 50 46 C 56 42, 70 36, 71 42 C 72 49, 58 48, 50 46" fill="#FEF9C3" stroke="#B45309" strokeWidth="1.5" />
            {/* Inti pusat ikatan */}
            <circle cx="50" cy="46" r="4.5" fill="#B45309" />
            <text x="50" y="36" textAnchor="middle" fontSize="6.5" fontWeight="black" fill="#78350F">sp³</text>
          </g>
        );

      // 16. Erwin Schrödinger: Mekanika Gelombang Orbital Probabilitas Kuantum |ψ|²
      case 16:
        return (
          <g id="schrodinger-discovery">
            {/* Awan probabilitas orbital kuantum difus */}
            <circle cx="50" cy="46" r="22" fill="#FEF3C7" opacity="0.45" />
            <circle cx="50" cy="46" r="16" fill="#FDE68A" opacity="0.65" />
            <circle cx="50" cy="46" r="10" fill="#F59E0B" opacity="0.85" />
            {/* Gelombang berdiri sinusoidal melingkari orbital */}
            <path
              d="M 22 46 Q 30 38 38 46 Q 46 54 54 46 Q 62 38 70 46 Q 78 54 82 46"
              fill="none"
              stroke="#B45309"
              strokeWidth="2.4"
            />
            {/* Simbol fungsi gelombang Psi (ψ) */}
            <text x="50" y="32" textAnchor="middle" fontSize="12" fontWeight="black" fill="#78350F">ψ</text>
          </g>
        );

      // 17. Robert B. Woodward: Arsitektur Kerangka Sintesis Total Organik Kompleks
      case 17:
        return (
          <g id="woodward-discovery">
            {/* Cincin steroid polisiklik terkondensasi */}
            {/* Cincin A */}
            <polygon points="28,42 36,32 46,32 50,42 43,52 32,52" fill="#F3E8FF" stroke="#7C3AED" strokeWidth="2" />
            {/* Cincin B terhubung */}
            <polygon points="50,42 58,32 68,32 72,42 65,52 50,42" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
            {/* Cincin C 5-anggota */}
            <polygon points="68,32 78,35 80,48 72,42" fill="#E9D5FF" stroke="#6D28D9" strokeWidth="1.8" />
            {/* Ikatan baji stereokimia (Wedge & Dash) */}
            <polygon points="46,32 44,24 48,24" fill="#6D28D9" />
            <line x1="58" y1="32" x2="58" y2="24" stroke="#6D28D9" strokeWidth="2" strokeDasharray="1.5 1.5" />
            <circle cx="46" cy="24" r="2" fill="#F59E0B" />
          </g>
        );

      // 18. Ahmed Zewail: Sinar Laser Femtodetik Membelah Ikatan Kimia (10⁻¹⁵ s)
      case 18:
        return (
          <g id="zewail-discovery">
            {/* Berkas pulsa laser femtodetik dari sudut atas */}
            <polygon points="50,18 44,46 56,46" fill="#C084FC" opacity="0.6" />
            <line x1="50" y1="18" x2="50" y2="46" stroke="#9333EA" strokeWidth="2.5" />
            {/* Ikatan molekul yang sedang membelah (transisi pemutusan) */}
            <circle cx="34" cy="46" r="8" fill="#E9D5FF" stroke="#6D28D9" strokeWidth="2" />
            <circle cx="66" cy="46" r="8" fill="#E9D5FF" stroke="#6D28D9" strokeWidth="2" />
            {/* Panah disosiasi kedua fragmen bergerak menjauh */}
            <line x1="30" y1="46" x2="22" y2="46" stroke="#DC2626" strokeWidth="2" />
            <polygon points="20,46 25,43 25,49" fill="#DC2626" />
            <line x1="70" y1="46" x2="78" y2="46" stroke="#DC2626" strokeWidth="2" />
            <polygon points="80,46 75,43 75,49" fill="#DC2626" />
            {/* Tanda waktu femtodetik */}
            <text x="50" y="62" textAnchor="middle" fontSize="8" fontWeight="black" fill="#6D28D9">10⁻¹⁵ s</text>
          </g>
        );

      // 19. Glenn T. Seaborg: Spiral Siklotron Sintesis Unsur Transuranium
      case 19:
        return (
          <g id="seaborg-discovery">
            {/* Jalur spiral akselerasi ion dalam siklotron */}
            <path
              d="M 50 46 A 5 5 0 0 1 55 46 A 10 10 0 0 1 45 46 A 15 15 0 0 1 60 46 A 20 20 0 0 1 38 46 A 25 25 0 0 1 72 46"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Target penembakan inti atom baru transuranium */}
            <circle cx="72" cy="46" r="6" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            <text x="50" y="32" textAnchor="middle" fontSize="9" fontWeight="black" fill="#6D28D9">Z &gt; 92</text>
            {/* Percikan sinar radiasi nuklir */}
            <polygon points="76,43 82,40 78,45 84,48 77,48" fill="#EF4444" />
          </g>
        );

      // 20. Jabir ibn Hayyan: Mahakarya Alembic & Labu Distilasi Alkimia Akbar
      case 20:
        return (
          <g id="jabir-discovery">
            {/* Api athanor pemanas di dasar */}
            <path d="M 44 64 Q 47 57 50 62 Q 53 57 56 64 Z" fill="#F59E0B" />
            <path d="M 47 64 Q 50 59 53 64 Z" fill="#EF4444" />
            {/* Labu distilasi bawah (Cucurbit) */}
            <ellipse cx="50" cy="56" rx="14" ry="9" fill="#F3E8FF" stroke="#6D28D9" strokeWidth="2" />
            {/* Helm Alembic atas kubah */}
            <path d="M 40 47 C 40 34, 60 34, 60 47 Z" fill="#EDE9FE" stroke="#6D28D9" strokeWidth="2" />
            {/* Paruh / Moncong Alembic condong ke kanan bawah */}
            <path d="M 58 40 Q 68 40 76 56" fill="none" stroke="#6D28D9" strokeWidth="3" strokeLinecap="round" />
            {/* Tetesan embun elixir murni emas */}
            <circle cx="76" cy="58" r="2.8" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
            {/* Bintang alkimia mistis di atas kubah */}
            <polygon points="50,21 52,26 57,27 53,30 54,35 50,32 46,35 47,30 43,27 48,26" fill="#F59E0B" />
          </g>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      title={`${def.title} (Level ${safeLevel}) - ${def.figureName}`}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="overflow-visible select-none drop-shadow-md"
      >
        <defs>
          {/* Gradient Cincin Medali Luar */}
          <linearGradient id={`medallionRing-${safeLevel}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.ringGrad[0]} />
            <stop offset="50%" stopColor={theme.ringGrad[1]} />
            <stop offset="100%" stopColor={theme.ringGrad[2]} />
          </linearGradient>

          {/* Gradient Permukaan Latar Medali */}
          <radialGradient id={`medallionBg-${safeLevel}`} cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor={theme.bgFill} />
            <stop offset="100%" stopColor="#EDEAE0" />
          </radialGradient>

          {/* Filter Bayangan Halus */}
          <filter id={`emblemShadow-${safeLevel}`} x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#2D3748" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* 1. Medali Piringan Luar dengan Bevel Logam */}
        <circle
          cx="50"
          cy="48"
          r="44"
          fill={`url(#medallionRing-${safeLevel})`}
          filter={`url(#emblemShadow-${safeLevel})`}
        />

        {/* 2. Cincin Roda Gigi / Titik Medali Ornamen Klasik */}
        <circle
          cx="50"
          cy="48"
          r="41"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          strokeDasharray="2 3"
        />

        {/* 3. Permukaan Dalam Latar Medali */}
        <circle
          cx="50"
          cy="48"
          r="38"
          fill={`url(#medallionBg-${safeLevel})`}
          stroke={theme.ringGrad[0]}
          strokeWidth="1.5"
        />

        {/* 4. Grafis Penemuan Ilmiah Tokoh (Pusat) */}
        {renderDiscoveryGraphic()}

        {/* 5. Pita / Ribbon Label Level di Bagian Bawah */}
        {showLevelRibbon && (
          <g id="level-ribbon">
            {/* Sayap lipatan pita belakang */}
            <polygon points="20,83 26,76 26,88" fill={theme.strokeColor} />
            <polygon points="80,83 74,76 74,88" fill={theme.strokeColor} />
            {/* Badan utama pita horizontal */}
            <rect
              x="24"
              y="76"
              width="52"
              height="15"
              rx="4"
              fill={theme.ribbonBg}
              stroke="#FFFFFF"
              strokeWidth="1"
            />
            {/* Teks Level */}
            <text
              x="50"
              y="87.5"
              textAnchor="middle"
              fontSize="9"
              fontWeight="900"
              letterSpacing="0.8px"
              fill={theme.ribbonText}
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              LV.{safeLevel}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
