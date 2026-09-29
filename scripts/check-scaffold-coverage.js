import fs from 'fs';

const c = fs.readFileSync('./src/data/smaQuestionsTopic2Data.ts', 'utf8');
const qs = c.split(/\{\s*id:\s*/).slice(1);
for (const q of qs) {
  const id = q.match(/^(\d+)/)?.[1];
  const title = q.match(/title:\s*'([^']+)'/)?.[1];
  const hasScaffold = q.includes('solution_framework_template:');
  console.log(`${id}: ${hasScaffold ? 'HAS SCAFFOLD' : 'MISSING'} - ${title}`);
}
