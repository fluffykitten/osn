import katex from 'katex';
import 'katex/dist/contrib/mhchem.mjs';

function fixFormula(raw: string): string {
  let s = raw;
  // 1. Gas arrow ^ at end of chemical species
  s = s.replace(/(\b[A-Za-z0-9]+\(g\))\s*\^/g, '$1 (\\uparrow)');
  s = s.replace(/(\(g\))\^/g, '$1 (\\uparrow)');
  s = s.replace(/(\b[A-Za-z0-9]+)\s+\^([\}\$,]|\s*$)/g, '$1 (\\uparrow)$2');

  // 2. Alignment tab & inside \ce{...}
  s = s.replace(/\\ce\{([^{}]*?)&([<>=]+)([^{}]*?)\}/g, '\\ce{$1} &$2 \\ce{$3}');
  s = s.replace(/\\ce\{([^{}]*?)&([^{}]*?)\}/g, '\\ce{$1} & \\ce{$2}');

  // 3. Triple bond # in \ce{...}
  // If # is used for enzymatic cleavage like -Lys # X-
  s = s.replace(/\\ce\{([A-Za-z0-9_-]+)\s*#\s*([A-Za-z0-9_-]+)\}/g, '\\text{$1}\\!\\#\\!\\text{$2}');
  // Otherwise triple bond in chemistry
  s = s.replace(/#(?=[A-Za-z0-9\\:])/g, '\\equiv ');
  s = s.replace(/(?<=[A-Za-z0-9\\:])#/g, ' \\equiv ');

  return s;
}

const cases = [
  { id: 'OSN 2 (1)', raw: '\\ce{[:\\underset{\\cdot\\cdot}{\\ddot{S}}-C#N:]^-}' },
  { id: 'OSN 2 (2)', raw: '\\ce{[:S#C-\\underset{\\cdot\\cdot}{\\ddot{N}}:]^-}' },
  { id: 'OSN 9 (1)', raw: '\\ce{C#C, C#N}' },
  { id: 'OSN 9 (2)', raw: '[\\ce{R-CO-R\'}]^{+\\bullet} \\to [\\ce{R-C#O^+}] + R\'^{\\bullet} \\quad (m/z = 43 \\text{ untuk } [\\ce{CH3CO}]^+)' },
  { id: 'OSN 10 (1)', raw: '[\\ce{HC#C:}]^-' },
  { id: 'SMA 101 (1)', raw: '\\ce{Ca(s) + 2H2O(l) -> Ca(OH)2(aq) + H2(g)^}' },
  { id: 'SMA 101 (2)', raw: '\\ce{2 H2O2(aq) -> 2 H2O(l) + O2(g)^}' },
  { id: 'SMA 105 (1)', raw: '\\ce{Zn(s) + 2 HCl(aq) -> ZnCl2(aq) + H2(g)^}' },
  { id: 'SMA 105 (2)', raw: '\\ce{CaCO3(s) ->[\\Delta] CaO(s) + CO2(g)^}' },
  { id: 'SMA 108 (1)', raw: '\\begin{aligned}\n \\ce{H2O(g) &<=> H2(g) + 1/2 O2(g)} && K\'_1 = 2.0 \\times 10^{-5} \\\\\n \\ce{CO(g) + 1/2 O2(g) &<=> CO2(g)} && K\'_2 = 2.5 \\times 10^5 \\\\\n \\hline\n \\ce{CO(g) + H2O(g) &<=> CO2(g) + H2(g)} && K_{\\text{target}} = K\'_1 \\times K\'_2\n \\end{aligned}' },
  { id: 'SMA 116 (1)', raw: '\\ce{2R-OH + 2Na -> 2R-ONa + H2 ^}' },
  { id: 'SMA 116 (2)', raw: '\\ce{R-OH + PCl5 -> R-Cl + POCl3 + HCl ^}' },
  { id: 'SMA 116 (3)', raw: '\\ce{-Lys # X-} \\quad \\text{dan} \\quad \\ce{-Arg # X-} \\quad (\\text{Kecuali } \\ce{X = Pro})' },
  { id: 'SMA 116 (4)', raw: '\\ce{-Phe # X-}, \\quad \\ce{-Tyr # X-}, \\quad \\ce{-Trp # X-}' },
  { id: 'SMA 116 (5)', raw: '\\ce{2R-OH + 2Na -> 2R-ONa + H2 ^}' },
  { id: 'SMA 116 (6)', raw: '\\ce{2CH3-CH(OH)-CH2-CH3 + 2Na -> 2CH3-CH(ONa)-CH2-CH3 + H2 ^}' },
  { id: 'SMA 116 (7)', raw: '\\ce{2R-OH + 2Na -> 2R-ONa + H2 ^}' },
];

for (const c of cases) {
  const fixed = fixFormula(c.raw);
  try {
    katex.renderToString(fixed, { throwOnError: true, displayMode: true });
    console.log(`✅ [${c.id}] FIXED & CLEAN`);
  } catch (err: any) {
    console.log(`❌ [${c.id}] ERROR:`, err.message, '| FIXED:', fixed);
  }
}
