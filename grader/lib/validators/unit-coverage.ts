/**
 * Validator — Atividade 2 — Setup + Suíte Unitária (TAM).
 *
 * Critérios (10 pts total):
 *   1. package.json com Jest configurado                      — 2pts
 *   2. Mín 5 arquivos *.test.{ts,js} ou *.spec.{ts,js}        — 3pts
 *   3. Configuração de cobertura (jest --coverage ou similar) — 2pts
 *   4. Estrutura iOS (XCTest target ou .xcodeproj)            — 1pt
 *   5. Estrutura Android (build.gradle com test deps)         — 1pt
 *   6. README com comandos de execução                         — 1pt
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
import { parseArgs, findFiles, fileMatchesAny, findReadme, readJsonSafe, readFileSafe } from '../utils.js';

async function main() {
  const args = parseArgs();
  const criteria: GradeCriterion[] = [];

  // Critério 1: Jest config
  const pkgPath = join(args.entrega, 'package.json');
  const pkg = readJsonSafe<any>(pkgPath);
  const allDeps = pkg ? { ...(pkg.dependencies ?? {}), ...(pkg.devDependencies ?? {}) } : {};
  const hasJest = 'jest' in allDeps || existsSync(join(args.entrega, 'jest.config.js')) || existsSync(join(args.entrega, 'jest.config.ts'));
  criteria.push({
    id: 'jest-config',
    description: 'Jest configurado (package.json ou jest.config)',
    weight: 2,
    earned: hasJest ? 2 : 0,
    publicNote: hasJest ? 'Jest detectado' : 'Jest não encontrado',
  });

  // Critério 2: arquivos de teste
  const testFiles = findFiles(args.entrega, ['.test.ts', '.test.tsx', '.test.js', '.spec.ts', '.spec.js']);
  const minTests = 5;
  criteria.push({
    id: 'min-tests',
    description: `Mín ${minTests} arquivos de teste (*.test/*.spec)`,
    weight: 3,
    earned: testFiles.length >= minTests ? 3 : +(testFiles.length / minTests * 3).toFixed(2),
    publicNote: `${testFiles.length}/${minTests} arquivos encontrados`,
  });

  // Critério 3: cobertura
  const pkgScripts = pkg?.scripts ?? {};
  const hasCoverageScript = Object.values(pkgScripts).some((s: any) =>
    typeof s === 'string' && /coverage/.test(s)
  );
  const coverageInConfig = readFileSafe(join(args.entrega, 'jest.config.js'))?.includes('collectCoverage')
    || readFileSafe(join(args.entrega, 'jest.config.ts'))?.includes('collectCoverage');
  criteria.push({
    id: 'coverage',
    description: 'Configuração de cobertura (script ou jest.config)',
    weight: 2,
    earned: hasCoverageScript || coverageInConfig ? 2 : 0,
    publicNote: hasCoverageScript ? 'Script com --coverage detectado' : coverageInConfig ? 'collectCoverage no config' : 'Nenhum',
  });

  // Critério 4: iOS
  const iosFiles = findFiles(args.entrega, ['.swift', '.xcodeproj', '.pbxproj']);
  const hasIos = iosFiles.length > 0 || existsSync(join(args.entrega, 'ios'));
  criteria.push({
    id: 'ios-structure',
    description: 'Estrutura iOS (Swift/Xcode)',
    weight: 1,
    earned: hasIos ? 1 : 0,
    publicNote: hasIos ? 'iOS detectado' : 'Pasta ios/ ou .swift não encontrados',
  });

  // Critério 5: Android
  const androidFiles = findFiles(args.entrega, ['.gradle', '.kt', '.java']);
  const hasAndroid = androidFiles.length > 0 || existsSync(join(args.entrega, 'android'));
  criteria.push({
    id: 'android-structure',
    description: 'Estrutura Android (Gradle/Kotlin)',
    weight: 1,
    earned: hasAndroid ? 1 : 0,
    publicNote: hasAndroid ? 'Android detectado' : 'Pasta android/ ou .kt/.java não encontrados',
  });

  // Critério 6: README
  const readme = findReadme(args.entrega);
  criteria.push({
    id: 'readme',
    description: 'README com comandos de execução',
    weight: 1,
    earned: readme ? 1 : 0,
    publicNote: readme ? 'README encontrado' : 'README ausente',
  });

  const { total, score } = computeScore(criteria);
  const minimo = passThreshold(total, 60);
  const { publicBreakdown, privateBreakdown } = buildBreakdowns(criteria);

  const result: GradeResult = {
    atividade: 'TAM-A2-Unit-Coverage',
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
