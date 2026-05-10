/**
 * Validator — Atividade 3 — Suíte Native UI Espresso/XCUITest (TAM).
 *
 * Critérios (15 pts total):
 *   1. Estrutura androidTest/ ou androidTest java/kotlin       — 4pts
 *   2. Estrutura iOSUITests target ou *UITests/                 — 4pts
 *   3. Mín 5 @Test methods (Espresso) — heurística textual      — 3pts
 *   4. Mín 5 func test methods iOS XCTest                       — 3pts
 *   5. README descrevendo flows + comando de execução           — 1pt
 */

import { writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import {
  type GradeCriterion,
  type GradeResult,
  buildBreakdowns,
  computeScore,
  passThreshold,
} from '../compute-score.js';
import { parseArgs, findFiles, findReadme, readFileSafe } from '../utils.js';

async function main() {
  const args = parseArgs();
  const criteria: GradeCriterion[] = [];

  // Critério 1: androidTest
  const ktTestFiles = findFiles(args.entrega, ['.kt', '.java']).filter((f) =>
    /androidTest|instrumentTest|InstrumentTest|UITest/i.test(f)
  );
  const hasAndroidTests = ktTestFiles.length > 0 || existsSync(join(args.entrega, 'android', 'app', 'src', 'androidTest'));
  criteria.push({
    id: 'android-test-structure',
    description: 'Estrutura androidTest (Espresso UI tests)',
    weight: 4,
    earned: hasAndroidTests ? 4 : 0,
    publicNote: hasAndroidTests ? `${ktTestFiles.length} arquivo(s) de teste Android encontrado(s)` : 'androidTest não encontrado',
  });

  // Critério 2: iOSUITests
  const swiftTestFiles = findFiles(args.entrega, ['.swift']).filter((f) =>
    /UITest|XCUITest|UITests/i.test(f)
  );
  const hasIosTests = swiftTestFiles.length > 0;
  criteria.push({
    id: 'ios-test-structure',
    description: 'Estrutura iOSUITests (XCUITest)',
    weight: 4,
    earned: hasIosTests ? 4 : 0,
    publicNote: hasIosTests ? `${swiftTestFiles.length} arquivo(s) de teste iOS encontrado(s)` : 'XCUITest não encontrado',
  });

  // Critério 3: 5+ @Test (Espresso)
  let espressoTestCount = 0;
  for (const f of ktTestFiles) {
    const content = readFileSafe(f) ?? '';
    const matches = content.match(/@Test\b/g);
    if (matches) espressoTestCount += matches.length;
  }
  const minMethods = 5;
  criteria.push({
    id: 'espresso-methods',
    description: `Mín ${minMethods} @Test methods Espresso`,
    weight: 3,
    earned: espressoTestCount >= minMethods ? 3 : +(Math.min(espressoTestCount, minMethods) / minMethods * 3).toFixed(2),
    publicNote: `${espressoTestCount}/${minMethods} @Test methods encontrados`,
  });

  // Critério 4: 5+ func test* (XCUITest)
  let xcuiTestCount = 0;
  for (const f of swiftTestFiles) {
    const content = readFileSafe(f) ?? '';
    const matches = content.match(/func\s+test\w+/g);
    if (matches) xcuiTestCount += matches.length;
  }
  criteria.push({
    id: 'xcuitest-methods',
    description: `Mín ${minMethods} func test methods XCUITest`,
    weight: 3,
    earned: xcuiTestCount >= minMethods ? 3 : +(Math.min(xcuiTestCount, minMethods) / minMethods * 3).toFixed(2),
    publicNote: `${xcuiTestCount}/${minMethods} func test methods encontrados`,
  });

  // Critério 5: README
  const readme = findReadme(args.entrega);
  criteria.push({
    id: 'readme',
    description: 'README descrevendo flows + execução',
    weight: 1,
    earned: readme ? 1 : 0,
    publicNote: readme ? 'README encontrado' : 'README ausente',
  });

  const { total, score } = computeScore(criteria);
  const minimo = passThreshold(total, 60);
  const { publicBreakdown, privateBreakdown } = buildBreakdowns(criteria);

  const result: GradeResult = {
    atividade: 'TAM-A3-Native-UI-Suite',
    total,
    score: +score.toFixed(2),
    minimo,
    pass: score >= minimo,
    criteria,
    publicBreakdown,
    privateBreakdown,
    metadata: {
      studentLogin: args.studentLogin,
      entregaPath: args.entrega,
      timestamp: new Date().toISOString(),
      commitSha: args.commitSha,
    },
  };

  writeFileSync(args.output, JSON.stringify(result, null, 2));
  console.log(`Grade: ${result.score}/${result.total} (min ${result.minimo}) — ${result.pass ? 'PASS' : 'FAIL'}`);
  process.exit(result.pass ? 0 : 1);
}

main().catch((e) => {
  console.error('Validator error:', e);
  process.exit(2);
});
