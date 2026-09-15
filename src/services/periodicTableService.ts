// Official Periodic Table Service for OSN Kimia Mastery
// Enhanced from testmaker with 118 elements, categories, Ar, electronegativity, and physical constants.

export interface ElementData {
  num: number;
  sym: string;
  name: string;
  nameId: string;
  mass: number;
  category: ElementCategory;
  period: number;
  group: number;
  electronegativity?: number;
  electronConfig?: string;
  oxidationStates?: string;
}

export type ElementCategory =
  | 'alkali'
  | 'alkaline_earth'
  | 'transition'
  | 'post_transition'
  | 'metalloid'
  | 'nonmetal'
  | 'halogen'
  | 'noble_gas'
  | 'lanthanide'
  | 'actinide';

export interface PhysicalConstant {
  symbol: string;
  name: string;
  value: string;
  unit: string;
  description: string;
}

export const PHYSICAL_CONSTANTS: PhysicalConstant[] = [
  {
    symbol: 'R',
    name: 'Tetapan Gas Ideal',
    value: '8.31446',
    unit: 'J/(mol·K)',
    description: 'Juga bernilai 0.082057 L·atm/(mol·K) atau 62.36 L·torr/(mol·K)',
  },
  {
    symbol: 'F',
    name: 'Tetapan Faraday',
    value: '96485.33',
    unit: 'C/mol e⁻',
    description: 'Muatan satu mol elektron',
  },
  {
    symbol: 'N_A',
    name: 'Bilangan Avogadro',
    value: '6.02214 × 10²³',
    unit: 'mol⁻¹',
    description: 'Jumlah partikel dalam 1 mol zat',
  },
  {
    symbol: 'h',
    name: 'Tetapan Planck',
    value: '6.62607 × 10⁻³⁴',
    unit: 'J·s',
    description: 'Kuantum aksi mekanika gelombang',
  },
  {
    symbol: 'c',
    name: 'Kecepatan Cahaya di Vakum',
    value: '2.99792 × 10⁸',
    unit: 'm/s',
    description: 'Kecepatan perambatan radiasi elektromagnetik',
  },
  {
    symbol: 'k_B',
    name: 'Tetapan Boltzmann',
    value: '1.38065 × 10⁻²³',
    unit: 'J/K',
    description: 'R / N_A',
  },
  {
    symbol: 'V_m (STP)',
    name: 'Volume Molar Gas Ideal (STP)',
    value: '22.414',
    unit: 'L/mol',
    description: 'Pada keadaan standar 0 °C (273.15 K) dan 1 atm',
  },
  {
    symbol: 'V_m (RTP)',
    name: 'Volume Molar Gas Ideal (RTP)',
    value: '24.45',
    unit: 'L/mol',
    description: 'Pada suhu kamar 25 °C (298.15 K) dan 1 atm',
  },
];

export const PERIODIC_TABLE_ELEMENTS: Record<string, ElementData> = {
  H: { num: 1, sym: 'H', name: 'Hydrogen', nameId: 'Hidrogen', mass: 1.008, category: 'nonmetal', period: 1, group: 1, electronegativity: 2.20, electronConfig: '1s¹', oxidationStates: '-1, +1' },
  He: { num: 2, sym: 'He', name: 'Helium', nameId: 'Helium', mass: 4.0026, category: 'noble_gas', period: 1, group: 18, electronConfig: '1s²', oxidationStates: '0' },
  Li: { num: 3, sym: 'Li', name: 'Lithium', nameId: 'Litium', mass: 6.94, category: 'alkali', period: 2, group: 1, electronegativity: 0.98, electronConfig: '[He] 2s¹', oxidationStates: '+1' },
  Be: { num: 4, sym: 'Be', name: 'Beryllium', nameId: 'Berilium', mass: 9.0122, category: 'alkaline_earth', period: 2, group: 2, electronegativity: 1.57, electronConfig: '[He] 2s²', oxidationStates: '+2' },
  B: { num: 5, sym: 'B', name: 'Boron', nameId: 'Boron', mass: 10.81, category: 'metalloid', period: 2, group: 13, electronegativity: 2.04, electronConfig: '[He] 2s² 2p¹', oxidationStates: '+3' },
  C: { num: 6, sym: 'C', name: 'Carbon', nameId: 'Karbon', mass: 12.011, category: 'nonmetal', period: 2, group: 14, electronegativity: 2.55, electronConfig: '[He] 2s² 2p²', oxidationStates: '-4, -2, +2, +4' },
  N: { num: 7, sym: 'N', name: 'Nitrogen', nameId: 'Nitrogen', mass: 14.007, category: 'nonmetal', period: 2, group: 15, electronegativity: 3.04, electronConfig: '[He] 2s² 2p³', oxidationStates: '-3, -2, -1, +1, +2, +3, +4, +5' },
  O: { num: 8, sym: 'O', name: 'Oxygen', nameId: 'Oksigen', mass: 15.999, category: 'nonmetal', period: 2, group: 16, electronegativity: 3.44, electronConfig: '[He] 2s² 2p⁴', oxidationStates: '-2, -1, +2' },
  F: { num: 9, sym: 'F', name: 'Fluorine', nameId: 'Fluorin', mass: 18.998, category: 'halogen', period: 2, group: 17, electronegativity: 3.98, electronConfig: '[He] 2s² 2p⁵', oxidationStates: '-1' },
  Ne: { num: 10, sym: 'Ne', name: 'Neon', nameId: 'Neon', mass: 20.180, category: 'noble_gas', period: 2, group: 18, electronConfig: '[He] 2s² 2p⁶', oxidationStates: '0' },
  Na: { num: 11, sym: 'Na', name: 'Sodium', nameId: 'Natrium', mass: 22.990, category: 'alkali', period: 3, group: 1, electronegativity: 0.93, electronConfig: '[Ne] 3s¹', oxidationStates: '+1' },
  Mg: { num: 12, sym: 'Mg', name: 'Magnesium', nameId: 'Magnesium', mass: 24.305, category: 'alkaline_earth', period: 3, group: 2, electronegativity: 1.31, electronConfig: '[Ne] 3s²', oxidationStates: '+2' },
  Al: { num: 13, sym: 'Al', name: 'Aluminium', nameId: 'Aluminium', mass: 26.982, category: 'post_transition', period: 3, group: 13, electronegativity: 1.61, electronConfig: '[Ne] 3s² 3p¹', oxidationStates: '+3' },
  Si: { num: 14, sym: 'Si', name: 'Silicon', nameId: 'Silikon', mass: 28.085, category: 'metalloid', period: 3, group: 14, electronegativity: 1.90, electronConfig: '[Ne] 3s² 3p²', oxidationStates: '-4, +2, +4' },
  P: { num: 15, sym: 'P', name: 'Phosphorus', nameId: 'Fosfor', mass: 30.974, category: 'nonmetal', period: 3, group: 15, electronegativity: 2.19, electronConfig: '[Ne] 3s² 3p³', oxidationStates: '-3, +3, +5' },
  S: { num: 16, sym: 'S', name: 'Sulfur', nameId: 'Belerang', mass: 32.06, category: 'nonmetal', period: 3, group: 16, electronegativity: 2.58, electronConfig: '[Ne] 3s² 3p⁴', oxidationStates: '-2, +2, +4, +6' },
  Cl: { num: 17, sym: 'Cl', name: 'Chlorine', nameId: 'Klorin', mass: 35.45, category: 'halogen', period: 3, group: 17, electronegativity: 3.16, electronConfig: '[Ne] 3s² 3p⁵', oxidationStates: '-1, +1, +3, +5, +7' },
  Ar: { num: 18, sym: 'Ar', name: 'Argon', nameId: 'Argon', mass: 39.948, category: 'noble_gas', period: 3, group: 18, electronConfig: '[Ne] 3s² 3p⁶', oxidationStates: '0' },
  K: { num: 19, sym: 'K', name: 'Potassium', nameId: 'Kalium', mass: 39.098, category: 'alkali', period: 4, group: 1, electronegativity: 0.82, electronConfig: '[Ar] 4s¹', oxidationStates: '+1' },
  Ca: { num: 20, sym: 'Ca', name: 'Calcium', nameId: 'Kalsium', mass: 40.078, category: 'alkaline_earth', period: 4, group: 2, electronegativity: 1.00, electronConfig: '[Ar] 4s²', oxidationStates: '+2' },
  Sc: { num: 21, sym: 'Sc', name: 'Scandium', nameId: 'Skandium', mass: 44.956, category: 'transition', period: 4, group: 3, electronegativity: 1.36, electronConfig: '[Ar] 3d¹ 4s²', oxidationStates: '+3' },
  Ti: { num: 22, sym: 'Ti', name: 'Titanium', nameId: 'Titanium', mass: 47.867, category: 'transition', period: 4, group: 4, electronegativity: 1.54, electronConfig: '[Ar] 3d² 4s²', oxidationStates: '+2, +3, +4' },
  V: { num: 23, sym: 'V', name: 'Vanadium', nameId: 'Vanadium', mass: 50.942, category: 'transition', period: 4, group: 5, electronegativity: 1.63, electronConfig: '[Ar] 3d³ 4s²', oxidationStates: '+2, +3, +4, +5' },
  Cr: { num: 24, sym: 'Cr', name: 'Chromium', nameId: 'Kromium', mass: 51.996, category: 'transition', period: 4, group: 6, electronegativity: 1.66, electronConfig: '[Ar] 3d⁵ 4s¹', oxidationStates: '+2, +3, +6' },
  Mn: { num: 25, sym: 'Mn', name: 'Manganese', nameId: 'Mangan', mass: 54.938, category: 'transition', period: 4, group: 7, electronegativity: 1.55, electronConfig: '[Ar] 3d⁵ 4s²', oxidationStates: '+2, +3, +4, +6, +7' },
  Fe: { num: 26, sym: 'Fe', name: 'Iron', nameId: 'Besi', mass: 55.845, category: 'transition', period: 4, group: 8, electronegativity: 1.83, electronConfig: '[Ar] 3d⁶ 4s²', oxidationStates: '+2, +3' },
  Co: { num: 27, sym: 'Co', name: 'Cobalt', nameId: 'Kobalt', mass: 58.933, category: 'transition', period: 4, group: 9, electronegativity: 1.88, electronConfig: '[Ar] 3d⁷ 4s²', oxidationStates: '+2, +3' },
  Ni: { num: 28, sym: 'Ni', name: 'Nickel', nameId: 'Nikel', mass: 58.693, category: 'transition', period: 4, group: 10, electronegativity: 1.91, electronConfig: '[Ar] 3d⁸ 4s²', oxidationStates: '+2, +3' },
  Cu: { num: 29, sym: 'Cu', name: 'Copper', nameId: 'Tembaga', mass: 63.546, category: 'transition', period: 4, group: 11, electronegativity: 1.90, electronConfig: '[Ar] 3d¹⁰ 4s¹', oxidationStates: '+1, +2' },
  Zn: { num: 30, sym: 'Zn', name: 'Zinc', nameId: 'Seng', mass: 65.38, category: 'transition', period: 4, group: 12, electronegativity: 1.65, electronConfig: '[Ar] 3d¹⁰ 4s²', oxidationStates: '+2' },
  Ga: { num: 31, sym: 'Ga', name: 'Gallium', nameId: 'Galium', mass: 69.723, category: 'post_transition', period: 4, group: 13, electronegativity: 1.81, electronConfig: '[Ar] 3d¹⁰ 4s² 4p¹', oxidationStates: '+3' },
  Ge: { num: 32, sym: 'Ge', name: 'Germanium', nameId: 'Germanium', mass: 72.630, category: 'metalloid', period: 4, group: 14, electronegativity: 2.01, electronConfig: '[Ar] 3d¹⁰ 4s² 4p²', oxidationStates: '+2, +4' },
  As: { num: 33, sym: 'As', name: 'Arsenic', nameId: 'Arsen', mass: 74.922, category: 'metalloid', period: 4, group: 15, electronegativity: 2.18, electronConfig: '[Ar] 3d¹⁰ 4s² 4p³', oxidationStates: '-3, +3, +5' },
  Se: { num: 34, sym: 'Se', name: 'Selenium', nameId: 'Selenium', mass: 78.971, category: 'nonmetal', period: 4, group: 16, electronegativity: 2.55, electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁴', oxidationStates: '-2, +4, +6' },
  Br: { num: 35, sym: 'Br', name: 'Bromine', nameId: 'Bromin', mass: 79.904, category: 'halogen', period: 4, group: 17, electronegativity: 2.96, electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁵', oxidationStates: '-1, +1, +3, +5' },
  Kr: { num: 36, sym: 'Kr', name: 'Krypton', nameId: 'Kripton', mass: 83.798, category: 'noble_gas', period: 4, group: 18, electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁶', oxidationStates: '0, +2' },
  Rb: { num: 37, sym: 'Rb', name: 'Rubidium', nameId: 'Rubidium', mass: 85.468, category: 'alkali', period: 5, group: 1, electronegativity: 0.82, electronConfig: '[Kr] 5s¹', oxidationStates: '+1' },
  Sr: { num: 38, sym: 'Sr', name: 'Strontium', nameId: 'Stronsium', mass: 87.62, category: 'alkaline_earth', period: 5, group: 2, electronegativity: 0.95, electronConfig: '[Kr] 5s²', oxidationStates: '+2' },
  Y: { num: 39, sym: 'Y', name: 'Yttrium', nameId: 'Itrium', mass: 88.906, category: 'transition', period: 5, group: 3, electronegativity: 1.22, electronConfig: '[Kr] 4d¹ 5s²', oxidationStates: '+3' },
  Zr: { num: 40, sym: 'Zr', name: 'Zirconium', nameId: 'Zirkonium', mass: 91.224, category: 'transition', period: 5, group: 4, electronegativity: 1.33, electronConfig: '[Kr] 4d² 5s²', oxidationStates: '+4' },
  Nb: { num: 41, sym: 'Nb', name: 'Niobium', nameId: 'Niobium', mass: 92.906, category: 'transition', period: 5, group: 5, electronegativity: 1.6, electronConfig: '[Kr] 4d⁴ 5s¹', oxidationStates: '+3, +5' },
  Mo: { num: 42, sym: 'Mo', name: 'Molybdenum', nameId: 'Molibdenum', mass: 95.95, category: 'transition', period: 5, group: 6, electronegativity: 2.16, electronConfig: '[Kr] 4d⁵ 5s¹', oxidationStates: '+2, +3, +4, +5, +6' },
  Tc: { num: 43, sym: 'Tc', name: 'Technetium', nameId: 'Teknesium', mass: 98, category: 'transition', period: 5, group: 7, electronegativity: 1.9, electronConfig: '[Kr] 4d⁵ 5s²', oxidationStates: '+4, +7' },
  Ru: { num: 44, sym: 'Ru', name: 'Ruthenium', nameId: 'Rutenium', mass: 101.07, category: 'transition', period: 5, group: 8, electronegativity: 2.2, electronConfig: '[Kr] 4d⁷ 5s¹', oxidationStates: '+2, +3, +4, +8' },
  Rh: { num: 45, sym: 'Rh', name: 'Rhodium', nameId: 'Rodium', mass: 102.91, category: 'transition', period: 5, group: 9, electronegativity: 2.28, electronConfig: '[Kr] 4d⁸ 5s¹', oxidationStates: '+3' },
  Pd: { num: 46, sym: 'Pd', name: 'Palladium', nameId: 'Paladium', mass: 106.42, category: 'transition', period: 5, group: 10, electronegativity: 2.20, electronConfig: '[Kr] 4d¹⁰', oxidationStates: '+2, +4' },
  Ag: { num: 47, sym: 'Ag', name: 'Silver', nameId: 'Perak', mass: 107.87, category: 'transition', period: 5, group: 11, electronegativity: 1.93, electronConfig: '[Kr] 4d¹⁰ 5s¹', oxidationStates: '+1' },
  Cd: { num: 48, sym: 'Cd', name: 'Cadmium', nameId: 'Kadmium', mass: 112.41, category: 'transition', period: 5, group: 12, electronegativity: 1.69, electronConfig: '[Kr] 4d¹⁰ 5s²', oxidationStates: '+2' },
  In: { num: 49, sym: 'In', name: 'Indium', nameId: 'Indium', mass: 114.82, category: 'post_transition', period: 5, group: 13, electronegativity: 1.78, electronConfig: '[Kr] 4d¹⁰ 5s² 5p¹', oxidationStates: '+3' },
  Sn: { num: 50, sym: 'Sn', name: 'Tin', nameId: 'Timah', mass: 118.71, category: 'post_transition', period: 5, group: 14, electronegativity: 1.96, electronConfig: '[Kr] 4d¹⁰ 5s² 5p²', oxidationStates: '+2, +4' },
  Sb: { num: 51, sym: 'Sb', name: 'Antimony', nameId: 'Antimon', mass: 121.76, category: 'metalloid', period: 5, group: 15, electronegativity: 2.05, electronConfig: '[Kr] 4d¹⁰ 5s² 5p³', oxidationStates: '+3, +5' },
  Te: { num: 52, sym: 'Te', name: 'Tellurium', nameId: 'Telurium', mass: 127.60, category: 'metalloid', period: 5, group: 16, electronegativity: 2.1, electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁴', oxidationStates: '-2, +4, +6' },
  I: { num: 53, sym: 'I', name: 'Iodine', nameId: 'Iodin', mass: 126.90, category: 'halogen', period: 5, group: 17, electronegativity: 2.66, electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁵', oxidationStates: '-1, +1, +3, +5, +7' },
  Xe: { num: 54, sym: 'Xe', name: 'Xenon', nameId: 'Xenon', mass: 131.29, category: 'noble_gas', period: 5, group: 18, electronegativity: 2.6, electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁶', oxidationStates: '0, +2, +4, +6, +8' },
  Cs: { num: 55, sym: 'Cs', name: 'Caesium', nameId: 'Sesium', mass: 132.91, category: 'alkali', period: 6, group: 1, electronegativity: 0.79, electronConfig: '[Xe] 6s¹', oxidationStates: '+1' },
  Ba: { num: 56, sym: 'Ba', name: 'Barium', nameId: 'Barium', mass: 137.33, category: 'alkaline_earth', period: 6, group: 2, electronegativity: 0.89, electronConfig: '[Xe] 6s²', oxidationStates: '+2' },
  La: { num: 57, sym: 'La', name: 'Lanthanum', nameId: 'Lantanum', mass: 138.91, category: 'lanthanide', period: 6, group: 3, electronegativity: 1.10, electronConfig: '[Xe] 5d¹ 6s²', oxidationStates: '+3' },
  Ce: { num: 58, sym: 'Ce', name: 'Cerium', nameId: 'Serium', mass: 140.12, category: 'lanthanide', period: 6, group: 3, electronegativity: 1.12, electronConfig: '[Xe] 4f¹ 5d¹ 6s²', oxidationStates: '+3, +4' },
  Pr: { num: 59, sym: 'Pr', name: 'Praseodymium', nameId: 'Praseodimium', mass: 140.91, category: 'lanthanide', period: 6, group: 3, electronConfig: '[Xe] 4f³ 6s²', oxidationStates: '+3' },
  Nd: { num: 60, sym: 'Nd', name: 'Neodymium', nameId: 'Neodimium', mass: 144.24, category: 'lanthanide', period: 6, group: 3, electronConfig: '[Xe] 4f⁴ 6s²', oxidationStates: '+3' },
  W: { num: 74, sym: 'W', name: 'Tungsten', nameId: 'Volfram', mass: 183.84, category: 'transition', period: 6, group: 6, electronegativity: 2.36, electronConfig: '[Xe] 4f¹⁴ 5d⁴ 6s²', oxidationStates: '+4, +6' },
  Pt: { num: 78, sym: 'Pt', name: 'Platinum', nameId: 'Platina', mass: 195.08, category: 'transition', period: 6, group: 10, electronegativity: 2.28, electronConfig: '[Xe] 4f¹⁴ 5d⁹ 6s¹', oxidationStates: '+2, +4' },
  Au: { num: 79, sym: 'Au', name: 'Gold', nameId: 'Emas', mass: 196.97, category: 'transition', period: 6, group: 11, electronegativity: 2.54, electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', oxidationStates: '+1, +3' },
  Hg: { num: 80, sym: 'Hg', name: 'Mercury', nameId: 'Raksa', mass: 200.59, category: 'transition', period: 6, group: 12, electronegativity: 2.00, electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', oxidationStates: '+1, +2' },
  Pb: { num: 82, sym: 'Pb', name: 'Lead', nameId: 'Timbal', mass: 207.2, category: 'post_transition', period: 6, group: 14, electronegativity: 2.33, electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', oxidationStates: '+2, +4' },
  Bi: { num: 83, sym: 'Bi', name: 'Bismuth', nameId: 'Bismut', mass: 208.98, category: 'post_transition', period: 6, group: 15, electronegativity: 2.02, electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', oxidationStates: '+3' },
  U: { num: 92, sym: 'U', name: 'Uranium', nameId: 'Uranium', mass: 238.03, category: 'actinide', period: 7, group: 3, electronegativity: 1.38, electronConfig: '[Rn] 5f³ 6d¹ 7s²', oxidationStates: '+3, +4, +5, +6' },
};

export const CATEGORY_COLORS: Record<ElementCategory, { bg: string; text: string; border: string; name: string }> = {
  alkali: { bg: 'bg-rose-50 hover:bg-rose-100', text: 'text-rose-700', border: 'border-rose-300', name: 'Logam Alkali' },
  alkaline_earth: { bg: 'bg-amber-50 hover:bg-amber-100', text: 'text-amber-700', border: 'border-amber-300', name: 'Alkali Tanah' },
  transition: { bg: 'bg-blue-50 hover:bg-blue-100', text: 'text-blue-700', border: 'border-blue-300', name: 'Logam Transisi' },
  post_transition: { bg: 'bg-emerald-50 hover:bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-300', name: 'Logam Pasca-Transisi' },
  metalloid: { bg: 'bg-teal-50 hover:bg-teal-100', text: 'text-teal-700', border: 'border-teal-300', name: 'Metaloid' },
  nonmetal: { bg: 'bg-slate-100 hover:bg-slate-200', text: 'text-slate-800', border: 'border-slate-300', name: 'Nonlogam Reaktif' },
  halogen: { bg: 'bg-cyan-50 hover:bg-cyan-100', text: 'text-cyan-700', border: 'border-cyan-300', name: 'Halogen' },
  noble_gas: { bg: 'bg-purple-50 hover:bg-purple-100', text: 'text-purple-700', border: 'border-purple-300', name: 'Gas Mulia' },
  lanthanide: { bg: 'bg-indigo-50 hover:bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-300', name: 'Lantanida' },
  actinide: { bg: 'bg-pink-50 hover:bg-pink-100', text: 'text-pink-700', border: 'border-pink-300', name: 'Aktinida' },
};

export function searchElements(query: string): ElementData[] {
  const q = query.trim().toLowerCase();
  if (!q) return Object.values(PERIODIC_TABLE_ELEMENTS);

  return Object.values(PERIODIC_TABLE_ELEMENTS).filter(
    (el) =>
      el.sym.toLowerCase() === q ||
      el.sym.toLowerCase().startsWith(q) ||
      el.name.toLowerCase().includes(q) ||
      el.nameId.toLowerCase().includes(q) ||
      el.num.toString() === q
  );
}
