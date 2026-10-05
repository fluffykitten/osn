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
];
