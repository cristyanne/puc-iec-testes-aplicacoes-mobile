# Atividade 1 — Análise de Cobertura — [Seu Nome]

> **Como usar:** copia este arquivo, renomeia pra `<seu-nome>-analise.md`, preenche os campos `[...]` com suas descobertas. Apaga este aviso no fim.

---

## 0. Identificação

- **Aluno:** [seu nome completo]
- **Data:** [DD/MM/2026]
- **App escolhido:** [DuckDuckGo Android / Wikipedia iOS / Bluesky social-app / outro]
- **Repo:** [URL do GitHub]
- **Stack:** [Kotlin nativo / Swift nativo / React Native / Flutter]

### Justificativa da escolha
[Por que escolheu esse app? 1-3 frases. Ex: "Escolhi Wikipedia iOS porque uso o app pessoalmente, é maduro (mais de 10 anos de história) e tem documentação clara de Test Plans."]

---

## 1. Estratégia de testes atual

### 1.1 Tipos de teste presentes

| Tipo | Existe? | Onde fica | Quantidade aproximada |
|---|---|---|---|
| Unit tests | [Sim/Não] | [path] | [~ N arquivos] |
| Integration / Instrumented | [Sim/Não] | [path] | [~ N] |
| UI tests nativos (Espresso/XCUITest/Detox) | [Sim/Não] | [path] | [~ N] |
| E2E cross-platform (Maestro/Appium) | [Sim/Não] | [path] | [~ N flows] |
| Snapshot / Visual regression | [Sim/Não] | [path] | [~ N] |
| Performance / Benchmark | [Sim/Não] | [path] | [observações] |
| Accessibility | [Sim/Não] | [path ou —] | — |
| Security / SAST | [Sim/Não] | [path ou —] | — |

### 1.2 Ferramentas detectadas

- **Unit:** [JUnit 4, MockK, Robolectric, Turbine, Mockito, XCTest, Jest, etc.]
- **UI nativo:** [Espresso, UI Automator, XCUITest, Detox, etc.]
- **E2E:** [Maestro, Appium, etc.]
- **Outras:** [SwiftLint, ktlint, jest-junit, flashlight, etc.]

### 1.3 CI / CD

| Workflow | Evento | O que faz | Plataforma |
|---|---|---|---|
| [nome.yml] | [push / PR / nightly] | [build / unit / E2E / lint] | [Android / iOS / Web] |
| [nome.yml] | [...] | [...] | [...] |

**Observações:**
- [Roda em PR? Em nightly? Tem matrix de OS/API level?]
- [E2E está bloqueante de PR ou só manual/nightly?]

### 1.4 Cobertura declarada

- [ ] Badge no README
- [ ] Workflow gera relatório de cobertura
- [ ] Não há cobertura medida

**Detalhe:** [Ex: "Script `test:coverage` existe no `package.json` mas não é invocado em nenhum workflow — cobertura só local."]

---

## 2. Análise de gaps

> Liste 3-5 gaps reais. Pra cada um: **o que falta**, **por que importa** (risco), **fundamento** (qual heurística/paper sustenta).

### Gap 1: [Título curto]

- **O que falta:** [descrição]
- **Risco:** [o que pode dar errado em produção sem isso]
- **Fundamento:** [referência — Knott 2014, Linares-Vásquez 2017, etc.]

### Gap 2: [Título]
[...]

### Gap 3: [Título]
[...]

---

## 3. Proposta de melhorias (Top 3)

### Matriz impacto × esforço

| Gap / Melhoria | Impacto (1-5) | Esforço (1-5) | Score (I/E) | Prioridade |
|---|---|---|---|---|
| [Melhoria 1] | [N] | [N] | [N] | 🥇 / 🥈 / 🥉 |
| [Melhoria 2] | [N] | [N] | [N] | [...] |
| [Melhoria 3] | [N] | [N] | [N] | [...] |

### Detalhamento das Top 3

#### 🥇 [Melhoria 1]

- **O que implementar:** [ex: adicionar accessibility checks no Espresso via `AccessibilityChecks.enable()`]
- **Como:** [bullet points concretos]
- **Esforço estimado:** [horas/dias]
- **Justificativa do impacto:** [por que essa primeiro? cite dado]

#### 🥈 [Melhoria 2]
[...]

#### 🥉 [Melhoria 3]
[...]

---

## 4. Referências

### Acadêmicas (≥1 obrigatória)

1. [LINARES-VÁSQUEZ, M. et al. (2017). *Continuous, Evolutionary and Large-Scale: A New Perspective for Automated Mobile App Testing*. ICSME 2017.]

### Industry / Padrões

2. [FOWLER, M. (2018). *The Practical Test Pyramid*. martinfowler.com.]
3. [KNOTT, D. (2014). *The Mobile Test Pyramid*. Ministry of Testing.]

---

## 5. Observações finais (opcional)

[Algo que aprendeu fazendo a atividade? Pergunta que ficou em aberto? Insight que não cabe nas seções acima?]
