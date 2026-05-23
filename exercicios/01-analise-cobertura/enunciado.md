# Atividade 1 — Análise de Cobertura de Testes (15 pts)

**Disciplina:** Testes de Aplicações Mobile
**Entrega:** até **27/05/2026** (quarta-feira, antes da Aula 2)
**Modalidade:** individual

---

## Contexto

QA mobile falha por falta de **estratégia consciente**. Antes de automatizar, é preciso entender o que existe e o que falta. Nesta atividade, você vai escolher **um** app mobile open source real, descobrir a estratégia de testes dele, identificar gaps e propor melhorias.

## Tarefa

1. **Escolher 1 app** entre os 5 sugeridos abaixo (cada um analisado e validado por mim — você não vai cair em repo abandonado ou sem testes):

   | App | Stack | Stars | Repo |
   |---|---|---|---|
   | **Immich Mobile** (photo backup) | Flutter (Android+iOS) | 101k ⭐ | <https://github.com/immich-app/immich> (pasta `/mobile`) |
   | **Bluesky social-app** | React Native + Expo | 18k ⭐ | <https://github.com/bluesky-social/social-app> |
   | **DuckDuckGo Android** | Kotlin nativo | 4.7k ⭐ | <https://github.com/duckduckgo/Android> |
   | **Saber** (notes/handwriting) | Flutter (Android+iOS+desktop) | 4.5k ⭐ | <https://github.com/saber-notes/saber> |
   | **Wikipedia iOS** | Swift nativo | 3.4k ⭐ | <https://github.com/wikimedia/wikipedia-ios> |

   > **Pode escolher QUALQUER outro app open-source** (≥100 stars, commits últimos 6 meses) — desde que tenha **testes visíveis** no repo. Mas **fica mais difícil**:
   > - Pode cair em repo sem testes (= nada pra analisar)
   > - Pode cair em repo com docs ruins ou desatualizadas (= horas perdidas garimpando)
   > - Pode escolher app não-mobile sem perceber (web/backend/desktop)
   > - Tem que validar critérios sozinho (stars, atividade, mobile-only, testes visíveis)
   >
   > **Os 3 sugeridos já foram pré-validados por mim** — material rico garantido, vão te economizar tempo. **Recomendo fortemente escolher um dos 3.**

2. **Investigar** a estratégia atual seguindo o **`guia-investigacao.md`** (passo a passo de **onde olhar** pra descobrir cada coisa).
   > **Não fique só no código.** Knott (2014) prega 40% da pirâmide mobile como manual/exploratório. Investigue também: `CONTRIBUTING.md`, beta programs (TestFlight / Firebase App Distribution), bug bounty, issues triadas, reviews da loja, crash reporting. Tudo conta como estratégia de QA.

3. **Preencher o `template-relatorio.md`** com suas descobertas + análise crítica.

4. **Entregar** via GitHub (ver guia "Como entregar atividades pelo GitHub" no Canvas).

## Critérios de avaliação

| Critério | Pontos |
|---|---|
| App escolhido apropriado + justificativa de escolha | 2 |
| Mapeamento da estratégia atual (tipos de teste, ferramentas, CI) — completo e correto | 4 |
| Análise de gaps (o que falta, por que importa, qual risco descoberto) | 4 |
| Proposta de melhorias com priorização justificada (impacto × esforço) | 3 |
| ≥3 referências (≥1 acadêmica) pertinentes | 2 |

> **Dica:** se ficar perdido em qualquer pergunta do template, abra o `guia-investigacao.md` e veja a seção correspondente. Tudo está documentado lá.

## Recomendado (não obrigatório)

**Instale o app** que vai analisar — só pra ter noção do que ele faz como usuário. Você consegue entender melhor riscos e gaps quando conhece o produto.

| App | Onde baixar |
|---|---|
| Immich | iOS: <https://apps.apple.com/app/immich/id1613945652> · Android: <https://play.google.com/store/apps/details?id=app.alextran.immich> |
| Bluesky | iOS: <https://apps.apple.com/app/bluesky-social/id6444370199> · Android: <https://play.google.com/store/apps/details?id=xyz.blueskyweb.app> |
| DuckDuckGo Android | <https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android> |
| Saber | iOS: <https://apps.apple.com/app/saber/id1671523739> · Android: <https://play.google.com/store/apps/details?id=com.adilhanney.saber> |
| Wikipedia iOS | <https://apps.apple.com/app/wikipedia/id324715238> |

> 5min usando o app já dá contexto pra você raciocinar: "esse fluxo de criar conta… deveria ter teste E2E? Tem?".

## Dica: clone o repo e use IA assistida pra acelerar

Em vez de só ler no GitHub via browser, **clone o repo** e abra com sua ferramenta de IA preferida. **A IA acelera muito a análise** — você pergunta e ela varre o repo por você.

```bash
git clone https://github.com/duckduckgo/Android.git    # ou outro dos 4 sugeridos
cd Android
# abre com seu IDE / agente IA
```

### Ferramentas IA (gratuitas/com tier free, vistas na aula 1)

| Ferramenta | Como rodar | Free? |
|---|---|---|
| **Gemini CLI** (Google) | `gemini` no terminal | ✅ Free (open source) |
| **Cursor** | abre o repo no Cursor | ✅ Free tier (2000 completions/mês) |
| **Claude Code** | `claude` no terminal | 💲 ChatGPT-like, Pro $20/mês |
| **GitHub Copilot** | extensão VS Code | ✅ Free pra estudantes/OSS |
| **ChatGPT / Gemini / Claude (browser)** | <chat.com>, <gemini.google.com> | ✅ Free tier |
| **Codex CLI** (OpenAI) | `codex` no terminal | 💲 Plus $20/mês |

> **Sem orçamento?** Recomendado: **Gemini CLI** (terminal) + **Cursor free** (IDE). Cobrem 90%.

### Prompts úteis pra essa atividade

Cole no agente depois de clonar:

> "Liste todos os tipos de teste presentes neste repo (unit, UI, E2E, snapshot, performance, accessibility, security). Mostre paths e ferramentas usadas."

> "Resumo dos workflows em `.github/workflows/`: qual roda em PR, qual roda nightly, quais testam o quê."

> "Que dependências de teste estão em `app/build.gradle` (Android) ou `package.json` (RN)? Agrupe por categoria: unit, mock, UI, perf."

> "Identifique 3-5 gaps de teste neste repo (o que NÃO está sendo testado). Justifique cada gap com risco real."

> **Atenção:** IA é ajudante, não substituto. **Valide o que ela disser** abrindo o arquivo no GitHub. Aluno que cola texto de IA sem revisar perde nota — gaps inventados ou ferramentas erradas ficam óbvios na correção.

## O que você NÃO precisa fazer

- **Não precisa rodar os testes** (só ler o código deles)
- Não precisa compilar o repo localmente
- Não precisa ler todo o código-fonte
- **Você é um auditor** olhando o repo do GitHub + usando o app brevemente, tirando conclusões a partir do que está visível

## Entrega

- Formato: **markdown** (`.md`) ou PDF gerado de markdown
- Tamanho: 3-5 páginas
- Estrutura: copiar `template-relatorio.md` e preencher
- Submeter via Canvas (módulo Atividade 1) com link do commit GitHub

## Material de apoio

- `guia-investigacao.md` — **leia primeiro!** Como descobrir cada coisa
- `template-relatorio.md` — preencha esse, é sua entrega
- Material de apoio aula 1 (Fowler, Knott, Linares-Vásquez, Google Testing, ISTQB) — use como referência teórica
