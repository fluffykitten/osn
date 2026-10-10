/**
 * igcseTopicsMeta.ts
 * Lightweight metadata for Cambridge IGCSE Chemistry (0620) topics.
 */

export interface IgcseTopicMeta {
  id: number;
  topic_number: number;
  title: string;
  slug: string;
  category: string;
  level: 'IGCSE';
  tier: 'Core' | 'Extended' | 'Both';
  cambridgeRef: string;
  yearGroup: 'Year 10' | 'Year 11';
  readTimeMinutes: number;
  summary: string;
  allTags: string[];
}

export const IGCSE_TOPICS_META: IgcseTopicMeta[] = [
  {
    id: 201,
    topic_number: 1,
    title: 'Solids, Liquids & Gases',
    slug: 'solids-liquids-gases',
    category: 'Physical Chemistry',
    level: 'IGCSE',
    tier: 'Both',
    cambridgeRef: '1.1 - 1.4',
    yearGroup: 'Year 10',
    readTimeMinutes: 25,
    summary:
      'The kinetic particle theory of matter, arrangements and properties of solids, liquids, and gases, phase changes, heating and cooling curves with latent heat, gas pressure and volume, and the rate of diffusion relative to molecular mass.',
    allTags: [
      'kinetic-theory',
      'states-of-matter',
      'solids-liquids-gases',
      'particle-model',
      'melting-freezing',
      'boiling-evaporation',
      'condensation-sublimation',
      'heating-curves',
      'cooling-curves',
      'gas-pressure',
      'gas-volume',
      'diffusion',
      'molecular-mass-diffusion',
      'ammonia-hcl-diffusion',
    ],
  },
  {
    id: 202,
    topic_number: 2,
    title: 'Atoms, Elements & Compounds',
    slug: 'atoms-elements-compounds',
    category: 'Inorganic Chemistry',
    level: 'IGCSE',
    tier: 'Both',
    cambridgeRef: '2.1 - 2.7',
    yearGroup: 'Year 10',
    readTimeMinutes: 30,
    summary:
      'Atomic structure and subatomic particles, isotopes, electronic configurations, elements vs compounds, ionic lattices and bonding, covalent bonding in simple molecules, giant covalent allotropes (diamond, graphite, SiO2), and metallic bonding with alloys.',
    allTags: [
      'atomic-structure',
      'subatomic-particles',
      'isotopes',
      'relative-atomic-mass',
      'electronic-configuration',
      'periodic-table',
      'elements-compounds-mixtures',
      'ions',
      'ionic-bonding',
      'giant-ionic-lattice',
      'covalent-bonding',
      'dot-and-cross-diagrams',
      'simple-molecules',
      'giant-covalent-structures',
      'allotropes-of-carbon',
      'diamond-and-graphite',
      'silicon-dioxide',
      'metallic-bonding',
      'alloys',
    ],
  },
  {
    id: 203,
    topic_number: 3,
    title: 'Stoichiometry',
    slug: 'stoichiometry',
    category: 'Physical Chemistry',
    level: 'IGCSE',
    tier: 'Both',
    cambridgeRef: '3.1 - 3.3',
    yearGroup: 'Year 10',
    readTimeMinutes: 40,
    summary:
      'Chemical formulae, valency rules, balanced chemical and ionic equations, relative atomic and formula mass, the mole concept, reacting masses and limiting reactants, molar gas volume (24 dm3), solution concentration and titrations, empirical and molecular formulae, water of crystallisation, percentage yield, and percentage purity.',
    allTags: [
      'stoichiometry',
      'chemical-formulae',
      'valency',
      'swap-and-drop',
      'balancing-equations',
      'state-symbols',
      'ionic-equations',
      'spectator-ions',
      'relative-atomic-mass',
      'relative-formula-mass',
      'carbon-12-standard',
      'mole-concept',
      'avogadro-constant',
      'reacting-masses',
      'limiting-reactants',
      'molar-gas-volume',
      'gas-calculations',
      'solution-concentration',
      'titration-calculations',
      'empirical-formula',
      'molecular-formula',
      'hydrated-salts',
      'water-of-crystallisation',
      'percentage-yield',
      'percentage-purity',
      'percentage-composition',
    ],
  },
];
