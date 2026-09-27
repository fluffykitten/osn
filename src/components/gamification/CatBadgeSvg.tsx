import React from 'react';
import { getAchievementDefinition } from '../../utils/achievementConstants';

export type CatFurBreed = 'tabby' | 'tortie' | 'calico' | 'smoke';

interface CatBadgeSvgProps {
  achievementId: string;
  isUnlocked?: boolean;
  isSecret?: boolean;
  size?: number | string;
  className?: string;
  breedOverride?: CatFurBreed;
}

/**
 * CatBadgeSvg:
 * Komponen Lencana Vektor Kucing Peneliti Kimia (Chemist Cat Scholar).
 * Menggabungkan estetika bersih laboratorium, ornamen medali, dan aksesoris unik kucing
 * sesuai tema 35 achievement OSN Kimia.
 */
export const CatBadgeSvg: React.FC<CatBadgeSvgProps> = ({
  achievementId,
  isUnlocked = true,
  isSecret = false,
  size = 56,
  className = '',
  breedOverride,
}) => {
  const achDef = getAchievementDefinition(achievementId);
  const isSecretBadge = isSecret || achDef?.isSecret || achDef?.rarity === 'secret';
  const rarity = achDef?.rarity || (isSecretBadge ? 'secret' : 'common');

  // Penentuan Ras Kucing & Corak Bulu (Fur Pattern):
  // Common -> Tabby, Rare -> Tortie, Epic -> Calico, Secret -> Smoke
  const breed: CatFurBreed = breedOverride || (
    isSecretBadge
      ? 'smoke'
      : rarity === 'epic' || rarity === 'mythic'
      ? 'calico'
      : rarity === 'rare'
      ? 'tortie'
      : 'tabby'
  );
  // Jika Secret dan belum terbuka: tampilkan siluet kucing misterius dengan tanda tanya
  if (isSecret && !isUnlocked) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none ${className}`}
      >
        <circle cx="50" cy="50" r="46" fill="#2D3748" stroke="#7C3AED" strokeWidth="3" strokeDasharray="4 2" />
        <circle cx="50" cy="50" r="40" fill="#1E293B" />
        {/* Cat ears silhouette */}
        <polygon points="26,38 34,16 46,30" fill="#4B5563" />
        <polygon points="74,38 66,16 54,30" fill="#4B5563" />
        {/* Cat head */}
        <ellipse cx="50" cy="46" rx="26" ry="22" fill="#374151" />
        {/* Mysterious glowing question mark */}
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fontSize="26"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          fill="#C084FC"
        >
          ?
        </text>
        {/* Paw prints */}
        <circle cx="36" cy="72" r="3.5" fill="#7C3AED" />
        <circle cx="64" cy="72" r="3.5" fill="#7C3AED" />
      </svg>
    );
  }

  // Jika Terkunci (Locked): tampilkan versi monokrom blueprint dengan gembok
  if (!isUnlocked) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none opacity-60 grayscale ${className}`}
      >
        <circle cx="50" cy="50" r="46" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" fill="#E2E8F0" />
        {/* Ears */}
        <polygon points="28,40 34,22 46,34" fill="#94A3B8" />
        <polygon points="72,40 66,22 54,34" fill="#94A3B8" />
        {/* Head */}
        <ellipse cx="50" cy="50" rx="24" ry="20" fill="#CBD5E1" />
        {/* Closed sleeping eyes */}
        <path d="M38 48 Q42 52 46 48" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M54 48 Q58 52 62 48" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Nose & mouth */}
        <polygon points="50,53 48,56 52,56" fill="#64748B" />
        <path d="M48 56 Q50 59 52 56" stroke="#64748B" strokeWidth="1.2" fill="none" />
        {/* Lock Overlay */}
        <rect x="42" y="66" width="16" height="13" rx="3" fill="#64748B" />
        <path d="M45 66 V61 Q45 57 50 57 Q55 57 55 61 V66" stroke="#64748B" strokeWidth="2.2" fill="none" />
        <circle cx="50" cy="72" r="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Helper untuk ornamen aksesoris kucing spesifik per lencana
  const renderCatAccessory = () => {
    switch (achievementId) {
      // 1. Pemanasan Bunsen -> Kucing dengan pembakar Bunsen & api biru/oranye
      case 'bunsen_warmup':
        return (
          <g>
            {/* Safety Goggles on forehead */}
            <rect x="33" y="32" width="15" height="9" rx="3" fill="#38BDF8" opacity="0.85" stroke="#0284C7" strokeWidth="1.2" />
            <rect x="52" y="32" width="15" height="9" rx="3" fill="#38BDF8" opacity="0.85" stroke="#0284C7" strokeWidth="1.2" />
            <line x1="48" y1="36" x2="52" y2="36" stroke="#0284C7" strokeWidth="1.5" />
            {/* Bunsen burner in front */}
            <rect x="46" y="68" width="8" height="14" fill="#64748B" rx="1" />
            <rect x="42" y="82" width="16" height="3" fill="#475569" rx="1" />
            {/* Flame */}
            <path d="M50 58 Q46 64 50 68 Q54 64 50 58 Z" fill="#F97316" />
            <path d="M50 62 Q48 65 50 68 Q52 65 50 62 Z" fill="#38BDF8" />
          </g>
        );

      // 2. Fase Superkritis -> Kucing fokus dengan kacamata pembesar & jam pasir
      case 'supercritical_focus':
        return (
          <g>
            {/* Scientist round spectacles */}
            <circle cx="41" cy="46" r="7" stroke="#D4A359" strokeWidth="1.8" fill="#F0F8FF" fillOpacity="0.4" />
            <circle cx="59" cy="46" r="7" stroke="#D4A359" strokeWidth="1.8" fill="#F0F8FF" fillOpacity="0.4" />
            <line x1="48" y1="46" x2="52" y2="46" stroke="#D4A359" strokeWidth="1.5" />
            {/* Hourglass */}
            <polygon points="44,66 56,66 50,73" fill="#F59E0B" opacity="0.9" />
            <polygon points="44,80 56,80 50,73" fill="#F59E0B" opacity="0.9" />
            <rect x="43" y="64" width="14" height="2" fill="#78350F" rx="0.5" />
            <rect x="43" y="80" width="14" height="2" fill="#78350F" rx="0.5" />
          </g>
        );

      // 3. Reaksi Berantai (Level 1) -> Petir di dahi / pipi
      case 'streak_3':
        return (
          <g>
            <polygon points="50,22 45,34 51,34 47,44 56,31 50,31" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
            {/* Electric sparkles on cheeks */}
            <circle cx="30" cy="54" r="2" fill="#F59E0B" />
            <circle cx="70" cy="54" r="2" fill="#F59E0B" />
          </g>
        );

      // 4. Kesetimbangan Dinamis -> Cincin ganda kesetimbangan
      case 'streak_7':
        return (
          <g>
            {/* Laurel wreath around cat ears */}
            <path d="M22 36 Q30 20 44 26" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M78 36 Q70 20 56 26" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* 7 streak badge badge on chest */}
            <circle cx="50" cy="74" r="9" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="50" y="78" textAnchor="middle" fontSize="10" fontWeight="900" fill="#FFFFFF" fontFamily="ui-monospace, monospace">7</text>
          </g>
        );

      // 5. Isotop Abadi -> Mahkota kosmik berlian
      case 'streak_30':
        return (
          <g>
            {/* Royal Gold Tiara */}
            <polygon points="34,26 40,16 50,24 60,16 66,26" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
            <circle cx="50" cy="20" r="2.5" fill="#38BDF8" />
            {/* Infinity symbol on chest */}
            <path d="M42 74 C42 71 46 71 50 74 C54 77 58 77 58 74 C58 71 54 71 50 74 C46 77 42 77 42 74 Z" stroke="#38BDF8" strokeWidth="2" fill="none" />
          </g>
        );

      // 6. Burung Hantu Lab -> Topi tidur santai & bulan sabit
      case 'night_owl':
        return (
          <g>
            {/* Nightcap / Beanie draped to the left */}
            <path d="M30 36 Q50 18 68 34 Q58 20 20 28" fill="#4338CA" />
            <circle cx="19" cy="29" r="3.5" fill="#E0E7FF" />
            {/* Crescent moon charm */}
            <path d="M74 20 Q70 25 74 30 Q66 26 74 20 Z" fill="#FDE047" />
            {/* Sleepy half-closed eyes */}
            <path d="M39 49 Q43 53 47 49" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M53 49 Q57 53 61 49" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          </g>
        );

      // 7. Fotokimia Pagi Buta -> Matahari terbit & cangkir kopi
      case 'early_bird':
        return (
          <g>
            {/* Rising sun rays behind head */}
            <line x1="50" y1="12" x2="50" y2="18" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="18" x2="33" y2="23" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <line x1="72" y1="18" x2="67" y2="23" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            {/* Coffee mug in paws */}
            <rect x="43" y="66" width="14" height="12" rx="2" fill="#B45309" />
            <path d="M57 69 Q62 72 57 75" stroke="#B45309" strokeWidth="1.8" fill="none" />
            <text x="50" y="75" textAnchor="middle" fontSize="6" fill="#FFF" fontWeight="bold">AM</text>
          </g>
        );

      // 8. Seratus Pertama -> Papan nilai 100 dengan medali bintang
      case 'first_hundred':
        return (
          <g>
            <circle cx="50" cy="73" r="10" fill="#EF4444" stroke="#FFF" strokeWidth="1.5" />
            <text x="50" y="77" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#FFF" fontFamily="system-ui">100</text>
            <polygon points="50,16 52,22 58,22 53,26 55,32 50,28 45,32 47,26 42,22 48,22" fill="#FBBF24" />
          </g>
        );

      // 9. Reaksi Spontan -> Kucing bertopeng kecepatan dengan sayap roket
      case 'spontaneous_reaction':
        return (
          <g>
            {/* Aerodynamic visor mask */}
            <path d="M34 43 Q50 38 66 43 Q62 50 50 49 Q38 50 34 43 Z" fill="#0284C7" opacity="0.9" />
            <text x="50" y="75" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#0284C7" fontFamily="monospace">ΔG&lt;0</text>
          </g>
        );

      // 10. Tahan Korosi -> Perisai baja di dada
      case 'corrosion_resistant':
        return (
          <g>
            <path d="M42 63 H58 V73 Q58 81 50 84 Q42 81 42 73 Z" fill="#475569" stroke="#94A3B8" strokeWidth="1.5" />
            <path d="M50 66 V78" stroke="#FBBF24" strokeWidth="1.5" />
            <path d="M45 71 H55" stroke="#FBBF24" strokeWidth="1.5" />
          </g>
        );

      // 11. Stoikiometri Presisi -> Timbangan seimbang di kepala/dada
      case 'precision_stoichiometry':
        return (
          <g>
            <line x1="36" y1="26" x2="64" y2="26" stroke="#D4A359" strokeWidth="2" strokeLinecap="round" />
            <circle cx="50" cy="26" r="2" fill="#78350F" />
            <polygon points="33,32 39,32 36,26" fill="#D4A359" />
            <polygon points="61,32 67,32 64,26" fill="#D4A359" />
          </g>
        );

      // 12. Katalisator Handal -> Kacamata lab & tabung reaksi berpendar
      case 'great_catalyst':
        return (
          <g>
            {/* Glowing beaker held high */}
            <path d="M45 64 H55 L57 78 H43 Z" fill="#10B981" opacity="0.8" stroke="#047857" strokeWidth="1.2" />
            <circle cx="50" cy="71" r="2" fill="#FFF" />
            <circle cx="48" cy="74" r="1.5" fill="#FFF" />
          </g>
        );

      // 13. Detektif OSN -> Topi detektif kotak & kaca pembesar
      case 'osn_detective':
        return (
          <g>
            {/* Sherlock Holmes Deerhunter Cap */}
            <path d="M28 32 Q50 16 72 32 Q50 24 28 32 Z" fill="#78350F" />
            <rect x="26" y="30" width="48" height="4" rx="2" fill="#92400E" />
            {/* Magnifying Glass */}
            <circle cx="68" cy="62" r="7" stroke="#D4A359" strokeWidth="2" fill="#F0F8FF" fillOpacity="0.5" />
            <line x1="73" y1="67" x2="80" y2="74" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        );

      // 14. Sentuhan Midas -> Koin emas & mahkota berkilau
      case 'midas_touch':
        return (
          <g>
            <circle cx="44" cy="72" r="5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
            <circle cx="56" cy="74" r="6" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
            <circle cx="50" cy="70" r="5.5" fill="#FCD34D" stroke="#B45309" strokeWidth="1" />
          </g>
        );

      // 15. Grandmaster Bank Soal -> Mahkota Raja Emas & Jubah Merah
      case 'bank_grandmaster':
        return (
          <g>
            {/* Golden Royal Crown */}
            <polygon points="30,28 36,12 50,22 64,12 70,28" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            <circle cx="36" cy="12" r="2" fill="#EF4444" />
            <circle cx="50" cy="22" r="2" fill="#3B82F6" />
            <circle cx="64" cy="12" r="2" fill="#EF4444" />
          </g>
        );

      // 16. Pencinta Massa Molar -> Kalkulator digital mini
      case 'molar_mass_fan':
        return (
          <g>
            <rect x="42" y="64" width="16" height="18" rx="2" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
            <rect x="45" y="67" width="10" height="4" fill="#38BDF8" />
            <circle cx="46" cy="75" r="1" fill="#94A3B8" />
            <circle cx="50" cy="75" r="1" fill="#94A3B8" />
            <circle cx="54" cy="75" r="1" fill="#94A3B8" />
          </g>
        );

      // 17. Kompleks Menakutkan -> Kristal heksagonal biru
      case 'scary_complex':
        return (
          <g>
            <polygon points="50,60 58,66 58,76 50,82 42,76 42,66" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="50" y1="60" x2="50" y2="82" stroke="#BAE6FD" strokeWidth="1" />
          </g>
        );

      // 18. Penjelajah Mendeleev -> Topi rimba safari & kompas
      case 'mendeleev_explorer':
        return (
          <g>
            {/* Safari Explorer Hat */}
            <ellipse cx="50" cy="28" rx="26" ry="6" fill="#A16207" />
            <path d="M34 27 Q50 14 66 27 Z" fill="#CA8A04" />
            {/* Mini periodic grid pattern */}
            <rect x="44" y="66" width="12" height="9" fill="#FEF3C7" stroke="#B45309" strokeWidth="1" />
            <line x1="48" y1="66" x2="48" y2="75" stroke="#B45309" strokeWidth="0.8" />
            <line x1="52" y1="66" x2="52" y2="75" stroke="#B45309" strokeWidth="0.8" />
          </g>
        );

      // 19. Spesialis Unsur Langka -> Lambang radiasi di topi
      case 'rare_element_actinide':
        return (
          <g>
            {/* Hazard goggles */}
            <rect x="34" y="42" width="32" height="10" rx="3" fill="#FACC15" opacity="0.9" stroke="#854D0E" strokeWidth="1.2" />
            <circle cx="50" cy="72" r="8" fill="#FACC15" stroke="#000" strokeWidth="1" />
            <circle cx="50" cy="72" r="2" fill="#000" />
            <path d="M47 67 L50 72 L53 67 Z" fill="#000" />
            <path d="M45 75 L50 72 L47 77 Z" fill="#000" />
            <path d="M55 75 L50 72 L53 77 Z" fill="#000" />
          </g>
        );

      // 20. Kolektor Rumus Cepat -> Buku resep formula kimia
      case 'quick_formula_collector':
        return (
          <g>
            <rect x="40" y="64" width="20" height="16" rx="2" fill="#0284C7" stroke="#FFF" strokeWidth="1" />
            <line x1="44" y1="68" x2="56" y2="68" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="44" y1="72" x2="54" y2="72" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="44" y1="76" x2="50" y2="76" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        );

      // 21. Ahli Tetapan Fisika -> Penggaris & simbol h/c/R
      case 'physics_constant_master':
        return (
          <g>
            <rect x="36" y="68" width="28" height="6" fill="#FCD34D" stroke="#B45309" strokeWidth="1" rx="1" />
            <line x1="42" y1="68" x2="42" y2="71" stroke="#78350F" strokeWidth="0.8" />
            <line x1="48" y1="68" x2="48" y2="72" stroke="#78350F" strokeWidth="0.8" />
            <line x1="54" y1="68" x2="54" y2="71" stroke="#78350F" strokeWidth="0.8" />
            <line x1="60" y1="68" x2="60" y2="72" stroke="#78350F" strokeWidth="0.8" />
          </g>
        );

      // 22. Papan Tulis Basah -> Spidol whiteboard di mulut/cakar
      case 'wet_whiteboard':
        return (
          <g>
            <rect x="42" y="64" width="16" height="5" fill="#3B82F6" rx="1" transform="rotate(-25 50 66)" />
            <polygon points="56,58 60,56 59,60" fill="#1D4ED8" />
          </g>
        );

      // 23. Juru Tulis Formula (KaTeX Scribe) -> Topi Penyihir & Tongkat KaTeX
      case 'katex_scribe':
        return (
          <g>
            {/* Wizard Hat */}
            <polygon points="32,32 50,6 68,32" fill="#7C3AED" stroke="#4C1D95" strokeWidth="1.5" />
            <ellipse cx="50" cy="32" rx="22" ry="4" fill="#5B21B6" />
            <circle cx="50" cy="18" r="2" fill="#FDE047" />
          </g>
        );

      // 24. Asas Le Chatelier Digital -> Panah ganda kesetimbangan
      case 'le_chatelier_digital':
        return (
          <g>
            <path d="M38 70 H60 M56 67 L60 70 L56 73" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M62 76 H40 M44 73 L40 76 L44 79" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );

      // 25. Fraksi Bertumpuk -> Simbol pembagian matematika lucu
      case 'stacked_fractions':
        return (
          <g>
            <circle cx="50" cy="65" r="2.5" fill="#2563EB" />
            <line x1="42" y1="72" x2="58" y2="72" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="50" cy="79" r="2.5" fill="#2563EB" />
          </g>
        );

      // 26. Kondisi Termo Standar -> Termometer dengan cairan merah
      case 'standard_thermo':
        return (
          <g>
            <rect x="47" y="60" width="6" height="16" rx="3" fill="#E2E8F0" stroke="#64748B" strokeWidth="1" />
            <circle cx="50" cy="77" r="5" fill="#EF4444" />
            <rect x="49" y="64" width="2" height="12" fill="#EF4444" />
          </g>
        );

      // 27. Kaligrafi Kimia Mulus -> Gulungan perkamen emas
      case 'flawless_calligraphy':
        return (
          <g>
            <rect x="36" y="64" width="28" height="16" rx="3" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" />
            <path d="M40 68 Q50 67 60 68 M40 72 Q50 71 56 72 M40 76 Q48 75 52 76" stroke="#92400E" strokeWidth="1" strokeLinecap="round" />
          </g>
        );

      // 28. Ionik & Radikal -> Elektron berputar mengelilingi kepala kucing
      case 'ionic_charge_radical':
        return (
          <g>
            <ellipse cx="50" cy="50" rx="38" ry="12" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 3" fill="none" transform="rotate(-25 50 50)" />
            <circle cx="20" cy="40" r="3" fill="#8B5CF6" />
            <circle cx="80" cy="60" r="3" fill="#EC4899" />
          </g>
        );

      // 29. Zen Master -> Kucing meditasi dengan pose damai
      case 'zen_master':
        return (
          <g>
            {/* Lotus flower at base */}
            <path d="M40 78 Q50 72 60 78 Q50 82 40 78 Z" fill="#EC4899" />
            <circle cx="50" cy="74" r="2.5" fill="#FDE047" />
            {/* Peaceful zen eyebrows */}
            <path d="M38 45 Q42 42 46 45" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M54 45 Q58 42 62 45" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </g>
        );

      // 30. Penyelamat Data -> Disket floppy disk retro dipeluk
      case 'data_saver':
        return (
          <g>
            <rect x="41" y="62" width="18" height="18" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.2" />
            <rect x="45" y="62" width="10" height="6" fill="#F8FAFC" />
            <rect x="44" y="72" width="12" height="6" fill="#E2E8F0" rx="1" />
          </g>
        );

      // 31. Bukan Cuma Air! -> Kucing minum dari erlenmeyer H2O
      case 'not_just_water':
        return (
          <g>
            <path d="M46 62 H54 L58 78 H42 Z" fill="#60A5FA" opacity="0.85" stroke="#2563EB" strokeWidth="1.2" />
            <text x="50" y="74" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#FFF">H₂O</text>
            {/* Water bubble */}
            <circle cx="58" cy="58" r="2.5" fill="#93C5FD" />
          </g>
        );

      // 32. Manisnya Kimia -> Topi koki & kubus gula manis
      case 'sugar_seeker':
        return (
          <g>
            {/* Chef Hat */}
            <path d="M38 30 Q50 18 62 30 Q66 22 58 18 Q50 14 42 18 Q34 22 38 30 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            {/* Sugar cube in paws */}
            <rect x="44" y="66" width="12" height="12" fill="#FDF4FF" stroke="#D946EF" strokeWidth="1.2" rx="1" />
            <text x="50" y="75" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#D946EF">C₆</text>
          </g>
        );

      // 33. Kutu Buku Maraton -> Tumpukan 3 buku tebal di bawah kucing
      case 'bookworm_marathon':
        return (
          <g>
            <rect x="32" y="68" width="36" height="5" rx="1" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
            <rect x="34" y="73" width="32" height="5" rx="1" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1" />
            <rect x="30" y="78" width="40" height="5" rx="1" fill="#10B981" stroke="#047857" strokeWidth="1" />
          </g>
        );

      // 34. Mikroskopis Optik -> Kacamata pembesar monokel steampunk
      case 'optical_microscope':
        return (
          <g>
            <circle cx="58" cy="48" r="8" stroke="#D4A359" strokeWidth="2.5" fill="#BAE6FD" fillOpacity="0.4" />
            <line x1="66" y1="52" x2="72" y2="60" stroke="#D4A359" strokeWidth="2" strokeLinecap="round" />
            {/* Wink other eye */}
            <path d="M36 48 Q40 45 44 48" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>
        );

      // 35. Alkemis Sejati -> Batu Bertuah Philosopher's Stone berkilau
      case 'true_alchemist':
        return (
          <g>
            {/* Archmage Diadem */}
            <polygon points="50,14 54,24 66,24 56,30 60,40 50,34 40,40 44,30 34,24 46,24" fill="#E11D48" stroke="#BE123C" strokeWidth="1" />
            {/* Glowing red philosopher stone */}
            <polygon points="50,64 60,72 56,84 44,84 40,72" fill="#E11D48" stroke="#FFF" strokeWidth="1.5" />
            <circle cx="50" cy="74" r="2.5" fill="#FFF" />
          </g>
        );

      
      // 36. Purrfect Streak 14
      case 'purrfect_streak_14':
        return (
          <g>
            <circle cx="50" cy="74" r="9" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="50" y="78" textAnchor="middle" fontSize="9" fontWeight="900" fill="#FFFFFF" fontFamily="ui-monospace, monospace">14</text>
          </g>
        );

      // 37. Doping Kafein Kucing Lab
      case 'caffeine_boost':
        return (
          <g>
            {/* Coffee mug in paws */}
            <rect x="44" y="66" width="12" height="12" rx="2" fill="#78350F" stroke="#FFFFFF" strokeWidth="1.2" />
            <path d="M56 69 Q60 69 60 72 Q60 75 56 75" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
            {/* Steam */}
            <path d="M48 64 Q46 61 48 59" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" fill="none" />
            <path d="M52 64 Q54 61 52 59" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" fill="none" />
          </g>
        );

      // 38. Unsur Felinium
      case 'cat_element_felix':
        return (
          <g>
            <rect x="42" y="65" width="16" height="15" rx="3" fill="#2D3748" stroke="#D4A359" strokeWidth="1.5" />
            <text x="50" y="76" textAnchor="middle" fontSize="10" fontWeight="900" fill="#FFFFF0" fontFamily="ui-monospace, monospace">Fe</text>
          </g>
        );

      // 39. Kucing Radioaktif
      case 'radioactive_cat':
        return (
          <g>
            <circle cx="50" cy="74" r="8" fill="#FACC15" stroke="#854D0E" strokeWidth="1" />
            <circle cx="50" cy="74" r="2.5" fill="#1E293B" />
            <path d="M46 69 L54 69 L50 74 Z" fill="#1E293B" />
          </g>
        );

      // 40. Gas Mulia
      case 'noble_gas_collector':
        return (
          <g>
            <circle cx="43" cy="24" r="6" fill="#60A5FA" opacity="0.8" />
            <circle cx="57" cy="22" r="6" fill="#F472B6" opacity="0.8" />
          </g>
        );

      // 41. Legenda Meow Alkemis (50 Lencana)
      case 'grand_master_chemist':
        return (
          <g>
            {/* Grand Imperial Royal Crown */}
            <polygon points="34,22 42,12 50,18 58,12 66,22 50,26" fill="#F59E0B" stroke="#B45309" strokeWidth="1.2" />
            <circle cx="42" cy="11" r="2" fill="#EF4444" />
            <circle cx="50" cy="17" r="2" fill="#3B82F6" />
            <circle cx="58" cy="11" r="2" fill="#10B981" />
            {/* Golden Star Amulet on Chest */}
            <polygon points="50,68 53,74 60,74 54,78 56,84 50,80 44,84 46,78 40,74 47,74" fill="#F59E0B" stroke="#FFF" strokeWidth="1" />
          </g>
        );

      default:
        return null;
    }
  };

  // Skema warna medali berdasarkan breed/rarity
  const getMedallionTheme = () => {
    switch (breed) {
      case 'smoke':
        return {
          rimGrad: ['#7C3AED', '#E9D5FF', '#4C1D95'],
          bgGrad: ['#2E1065', '#1E1B4B', '#0F172A'],
          dashColor: '#A855F7',
        };
      case 'calico':
        return {
          rimGrad: ['#D4A359', '#FDE68A', '#B45309'],
          bgGrad: ['#FFFFF0', '#FFFDF0', '#FEF3C7'],
          dashColor: '#D4A359',
        };
      case 'tortie':
        return {
          rimGrad: ['#475569', '#94A3B8', '#334155'],
          bgGrad: ['#F8FAFC', '#F0F8FF', '#E2E8F0'],
          dashColor: '#94A3B8',
        };
      case 'tabby':
      default:
        return {
          rimGrad: ['#B0C4DE', '#E2E8F0', '#708090'],
          bgGrad: ['#FFFFF0', '#F0F8FF', '#E2E8F0'],
          dashColor: '#B0C4DE',
        };
    }
  };

  const theme = getMedallionTheme();

  // Helper render fitur wajah, telinga, mata, & corak bulu spesifik per ras
  const renderCatBaseAndFur = () => {
    switch (breed) {
      // 1. COMMON: KUCING TABBY (GINGER/MACKEREL TABBY DENGAN POLA 'M' & BELANG PIPI)
      case 'tabby':
        return (
          <g id="tabby-cat">
            {/* Telinga Tabby */}
            <polygon points="26,38 34,16 46,30" fill="#FDBA74" stroke="#9A3412" strokeWidth="1.5" />
            <polygon points="29,35 35,21 43,30" fill="#FED7AA" />
            <line x1="30" y1="24" x2="38" y2="29" stroke="#C2410C" strokeWidth="1.6" />

            <polygon points="74,38 66,16 54,30" fill="#FDBA74" stroke="#9A3412" strokeWidth="1.5" />
            <polygon points="71,35 65,21 57,30" fill="#FED7AA" />
            <line x1="70" y1="24" x2="62" y2="29" stroke="#C2410C" strokeWidth="1.6" />

            {/* Kepala Tabby Base */}
            <ellipse cx="50" cy="48" rx="26" ry="22" fill="#FDBA74" stroke="#9A3412" strokeWidth="1.8" />

            {/* Pola Belang Tabby: Simbol 'M' Klasik di Dahi */}
            <path
              d="M 42 34 L 45 42 L 50 36 L 55 42 L 58 34"
              fill="none"
              stroke="#C2410C"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="50" y1="36" x2="50" y2="42" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round" />

            {/* Garis-Garis Belang di Pipi Kiri & Kanan */}
            <path d="M 27 47 Q 33 46 37 48" fill="none" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 26 52 Q 32 51 36 53" fill="none" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 73 47 Q 67 46 63 48" fill="none" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 74 52 Q 68 51 64 53" fill="none" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round" />

            {/* Muzzle Moncong Krem Lembut */}
            <ellipse cx="50" cy="54" rx="10" ry="6.5" fill="#FFEDD5" />

            {/* Pipi Merona Peach */}
            <circle cx="34" cy="51" r="3" fill="#FB923C" opacity="0.6" />
            <circle cx="66" cy="51" r="3" fill="#FB923C" opacity="0.6" />

            {/* Mata Hijau Hazel Zamrud Tabby */}
            <circle cx="41" cy="47" r="3.2" fill="#15803D" />
            <circle cx="41" cy="47" r="2" fill="#052E16" />
            <circle cx="42" cy="46" r="1" fill="#FFFFFF" />
            <circle cx="59" cy="47" r="3.2" fill="#15803D" />
            <circle cx="59" cy="47" r="2" fill="#052E16" />
            <circle cx="60" cy="46" r="1" fill="#FFFFFF" />

            {/* Hidung Oranye Bata & Mulut :3 */}
            <polygon points="50,51 48,53.5 52,53.5" fill="#EA580C" />
            <path d="M47 54.5 Q48.5 57 50 54.5 Q51.5 57 53 54.5" stroke="#9A3412" strokeWidth="1.4" strokeLinecap="round" fill="none" />

            {/* Kumis Putih Bersih */}
            <line x1="28" y1="49" x2="35" y2="50" stroke="#FFF7ED" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="27" y1="53" x2="35" y2="53" stroke="#FFF7ED" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="72" y1="49" x2="65" y2="50" stroke="#FFF7ED" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="73" y1="53" x2="65" y2="53" stroke="#FFF7ED" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        );

      // 2. RARE: KUCING TORTIE (TORTOISESHELL - BERCAK ASIMETRIS COKELAT GELAP & AMBER KEEMASAN)
      case 'tortie':
        return (
          <g id="tortie-cat">
            {/* Telinga Asimetris Tortie: Kiri Gelap, Kanan Amber */}
            <polygon points="26,38 34,16 46,30" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            <polygon points="29,35 35,21 43,30" fill="#F472B6" opacity="0.75" />

            <polygon points="74,38 66,16 54,30" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
            <polygon points="71,35 65,21 57,30" fill="#FDE68A" opacity="0.8" />

            {/* Kepala Cokelat Gelap Charcoal Base */}
            <ellipse cx="50" cy="48" rx="26" ry="22" fill="#1E293B" stroke="#0F172A" strokeWidth="1.8" />

            {/* Bercak Asimetris Khas Tortie (Belang Kura-Kura Amber & Merah Bata) */}
            <path
              d="M 44 30 C 50 28, 68 32, 70 42 C 72 50, 66 58, 56 56 C 48 54, 46 42, 44 30 Z"
              fill="#D97706"
            />
            <path
              d="M 52 34 C 58 32, 67 37, 65 46 C 63 53, 56 52, 52 44 Z"
              fill="#F59E0B"
            />
            <path
              d="M 28 44 C 33 42, 38 46, 36 53 C 34 57, 27 55, 28 44 Z"
              fill="#EA580C"
            />
            <ellipse cx="48" cy="55" rx="4" ry="2.5" fill="#F59E0B" />

            {/* Pipi Warm Peach */}
            <circle cx="34" cy="51" r="3" fill="#F97316" opacity="0.45" />
            <circle cx="66" cy="51" r="3" fill="#F97316" opacity="0.45" />

            {/* Mata Emas Amber Bercahaya */}
            <circle cx="41" cy="47" r="3.2" fill="#F59E0B" />
            <circle cx="41" cy="47" r="2" fill="#451A03" />
            <circle cx="42" cy="46" r="1" fill="#FFFFFF" />
            <circle cx="59" cy="47" r="3.2" fill="#F59E0B" />
            <circle cx="59" cy="47" r="2" fill="#451A03" />
            <circle cx="60" cy="46" r="1" fill="#FFFFFF" />

            {/* Hidung Merah Berry & Mulut Emas */}
            <polygon points="50,51 48,53.5 52,53.5" fill="#BE185D" />
            <path d="M47 54.5 Q48.5 57 50 54.5 Q51.5 57 53 54.5" stroke="#FDE68A" strokeWidth="1.4" strokeLinecap="round" fill="none" />

            {/* Kumis Kontras Terang di Bulu Gelap */}
            <line x1="28" y1="49" x2="35" y2="50" stroke="#F8FAFC" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="27" y1="53" x2="35" y2="53" stroke="#F8FAFC" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="72" y1="49" x2="65" y2="50" stroke="#F8FAFC" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="73" y1="53" x2="65" y2="53" stroke="#F8FAFC" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        );

      // 3. EPIC: KUCING CALICO (BELANG TELON TIGA WARNA - PUTIH, ORANYE JAHE, & ARANG HITAM)
      case 'calico':
        return (
          <g id="calico-cat">
            {/* Telinga Calico Dua Warna: Kiri Oranye, Kanan Hitam */}
            <polygon points="26,38 34,16 46,30" fill="#EA580C" stroke="#9A3412" strokeWidth="1.5" />
            <polygon points="29,35 35,21 43,30" fill="#FBCFE8" />

            <polygon points="74,38 66,16 54,30" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            <polygon points="71,35 65,21 57,30" fill="#475569" />

            {/* Kepala Putih Porselen Bersih Base */}
            <ellipse cx="50" cy="48" rx="26" ry="22" fill="#FFFDF9" stroke="#64748B" strokeWidth="1.8" />

            {/* Bercak Oranye Jahe di Dahi & Mata Kiri */}
            <path
              d="M 28 35 C 33 28, 44 30, 45 40 C 45 47, 37 51, 31 49 C 26 47, 26 39, 28 35 Z"
              fill="#EA580C"
            />
            <path
              d="M 33 33 C 37 31, 42 34, 41 40 C 39 44, 34 44, 33 40 Z"
              fill="#F97316"
            />

            {/* Bercak Hitam Arang di Pipi Kanan */}
            <path
              d="M 58 35 C 64 31, 74 35, 73 45 C 72 52, 63 54, 60 48 C 57 44, 56 38, 58 35 Z"
              fill="#1E293B"
            />

            {/* Bintik Manis Oranye Dekat Dagu */}
            <circle cx="49" cy="57" r="2" fill="#F97316" />

            {/* Pipi Merona Pink Calico */}
            <circle cx="34" cy="51" r="3" fill="#FDA4AF" opacity="0.65" />
            <circle cx="66" cy="51" r="3" fill="#FDA4AF" opacity="0.65" />

            {/* Mata Permata Heterochromia Menawan (Kiri Hijau Zamrud, Kanan Biru Safir) */}
            <circle cx="41" cy="47" r="3.2" fill="#059669" />
            <circle cx="41" cy="47" r="2" fill="#064E3B" />
            <circle cx="42" cy="46" r="1" fill="#FFFFFF" />
            <circle cx="59" cy="47" r="3.2" fill="#0284C7" />
            <circle cx="59" cy="47" r="2" fill="#0C4A6E" />
            <circle cx="60" cy="46" r="1" fill="#FFFFFF" />

            {/* Hidung Merah Muda Imut & Mulut :3 */}
            <polygon points="50,51 48,53.5 52,53.5" fill="#FB7185" />
            <path d="M47 54.5 Q48.5 57 50 54.5 Q51.5 57 53 54.5" stroke="#475569" strokeWidth="1.4" strokeLinecap="round" fill="none" />

            {/* Kumis Abu-abu Halus */}
            <line x1="28" y1="49" x2="35" y2="50" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="27" y1="53" x2="35" y2="53" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="72" y1="49" x2="65" y2="50" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="73" y1="53" x2="65" y2="53" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        );

      // 4. SECRET: KUCING SMOKE (BLACK SMOKE MISTIS & GHOST TABBY BERKILAU VIOLET)
      case 'smoke':
      default:
        return (
          <g id="smoke-cat">
            {/* Telinga Black Smoke Midnight dengan Aksen Violet */}
            <polygon points="26,38 34,16 46,30" fill="#18181B" stroke="#7C3AED" strokeWidth="1.5" />
            <polygon points="29,35 35,21 43,30" fill="#7C3AED" opacity="0.8" />

            <polygon points="74,38 66,16 54,30" fill="#18181B" stroke="#7C3AED" strokeWidth="1.5" />
            <polygon points="71,35 65,21 57,30" fill="#7C3AED" opacity="0.8" />

            {/* Kepala Arang Asap Midnight Base */}
            <ellipse cx="50" cy="48" rx="26" ry="22" fill="#18181B" stroke="#7C3AED" strokeWidth="1.8" />

            {/* Partikel Aura Asap Mistis Berkilau */}
            <circle cx="23" cy="28" r="1.5" fill="#E879F9" opacity="0.8" />
            <circle cx="77" cy="28" r="1.5" fill="#E879F9" opacity="0.8" />
            <circle cx="50" cy="20" r="1.8" fill="#FDE047" opacity="0.9" />

            {/* Ghost Tabby Markings Violet Menari Samar-Samar */}
            <path
              d="M 43 35 L 46 41 L 50 37 L 54 41 L 57 35"
              fill="none"
              stroke="#C084FC"
              strokeWidth="1.6"
              strokeOpacity="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M 27 47 Q 33 46 37 48" fill="none" stroke="#C084FC" strokeWidth="1.3" strokeOpacity="0.7" strokeLinecap="round" />
            <path d="M 26 52 Q 32 51 36 53" fill="none" stroke="#C084FC" strokeWidth="1.3" strokeOpacity="0.7" strokeLinecap="round" />
            <path d="M 73 47 Q 67 46 63 48" fill="none" stroke="#C084FC" strokeWidth="1.3" strokeOpacity="0.7" strokeLinecap="round" />
            <path d="M 74 52 Q 68 51 64 53" fill="none" stroke="#C084FC" strokeWidth="1.3" strokeOpacity="0.7" strokeLinecap="round" />

            {/* Moncong Asap Perak */}
            <ellipse cx="50" cy="54" rx="9" ry="6" fill="#3F3F46" opacity="0.85" />

            {/* Pendaran Pipi Violet Mistis */}
            <circle cx="34" cy="51" r="3.2" fill="#A855F7" opacity="0.5" />
            <circle cx="66" cy="51" r="3.2" fill="#A855F7" opacity="0.5" />

            {/* Mata Amethyst Menyala Terang dengan Pupil Celah Mistis */}
            <circle cx="41" cy="47" r="3.5" fill="#A855F7" />
            <circle cx="41" cy="47" r="2.4" fill="#F472B6" />
            <ellipse cx="41" cy="47" rx="1" ry="2.4" fill="#0F172A" />
            <circle cx="42" cy="45.5" r="0.8" fill="#FFFFFF" />

            <circle cx="59" cy="47" r="3.5" fill="#A855F7" />
            <circle cx="59" cy="47" r="2.4" fill="#F472B6" />
            <ellipse cx="59" cy="47" rx="1" ry="2.4" fill="#0F172A" />
            <circle cx="60" cy="45.5" r="0.8" fill="#FFFFFF" />

            {/* Hidung Permata Violet Amethyst & Mulut Perak */}
            <polygon points="50,51 48,53.5 52,53.5" fill="#C084FC" />
            <path d="M47 54.5 Q48.5 57 50 54.5 Q51.5 57 53 54.5" stroke="#E2E8F0" strokeWidth="1.4" strokeLinecap="round" fill="none" />

            {/* Kumis Perak Berkilau Luminescent */}
            <line x1="28" y1="49" x2="35" y2="50" stroke="#E2E8F0" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="27" y1="53" x2="35" y2="53" stroke="#E2E8F0" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="72" y1="49" x2="65" y2="50" stroke="#E2E8F0" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="73" y1="53" x2="65" y2="53" stroke="#E2E8F0" strokeWidth="1.3" strokeLinecap="round" />
          </g>
        );
    }
  };

  // Render Kaki Depan Kucing Sesuai Breed
  const renderCatPaws = () => {
    switch (breed) {
      case 'smoke':
        return (
          <g id="smoke-paws">
            <ellipse cx="40" cy="68" rx="5" ry="3.5" fill="#18181B" stroke="#7C3AED" strokeWidth="1.2" />
            <ellipse cx="60" cy="68" rx="5" ry="3.5" fill="#18181B" stroke="#7C3AED" strokeWidth="1.2" />
          </g>
        );
      case 'calico':
        return (
          <g id="calico-paws">
            <ellipse cx="40" cy="68" rx="5" ry="3.5" fill="#EA580C" stroke="#9A3412" strokeWidth="1.2" />
            <ellipse cx="60" cy="68" rx="5" ry="3.5" fill="#FFFDF9" stroke="#64748B" strokeWidth="1.2" />
          </g>
        );
      case 'tortie':
        return (
          <g id="tortie-paws">
            <ellipse cx="40" cy="68" rx="5" ry="3.5" fill="#1E293B" stroke="#0F172A" strokeWidth="1.2" />
            <ellipse cx="60" cy="68" rx="5" ry="3.5" fill="#D97706" stroke="#92400E" strokeWidth="1.2" />
          </g>
        );
      case 'tabby':
      default:
        return (
          <g id="tabby-paws">
            <ellipse cx="40" cy="68" rx="5" ry="3.5" fill="#FFEDD5" stroke="#9A3412" strokeWidth="1.2" />
            <ellipse cx="60" cy="68" rx="5" ry="3.5" fill="#FFEDD5" stroke="#9A3412" strokeWidth="1.2" />
          </g>
        );
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-transform hover:scale-105 duration-200 ${className}`}
    >
      <defs>
        {/* Serene Medal Gradient Rim */}
        <linearGradient id={`badge-rim-${achievementId}`} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.rimGrad[0]} />
          <stop offset="0.5" stopColor={theme.rimGrad[1]} />
          <stop offset="1" stopColor={theme.rimGrad[2]} />
        </linearGradient>

        {/* Soft Background Fill */}
        <radialGradient id={`cat-bg-${achievementId}`} cx="50" cy="45" r="45" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.bgGrad[0]} />
          <stop offset="0.8" stopColor={theme.bgGrad[1]} />
          <stop offset="1" stopColor={theme.bgGrad[2]} />
        </radialGradient>
      </defs>

      {/* 1. Medallion Rosette Outer Border */}
      <circle cx="50" cy="50" r="47" fill={`url(#cat-bg-${achievementId})`} stroke={`url(#badge-rim-${achievementId})`} strokeWidth="3.5" />
      <circle cx="50" cy="50" r="42" stroke={theme.dashColor} strokeWidth="1" strokeDasharray="2.5 2" />

      {/* 2. Cat Base & Specific Breed Fur Pattern (Tabby, Tortie, Calico, Smoke) */}
      {renderCatBaseAndFur()}

      {/* 3. Specific Achievement Props & Hats (Chemist Cat Gear) */}
      {renderCatAccessory()}

      {/* 4. Front Cat Paws Sesuai Pola Ras */}
      {renderCatPaws()}
    </svg>
  );
};
