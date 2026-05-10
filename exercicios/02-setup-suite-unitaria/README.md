# Atividade 2 — Setup + Suíte Unitária (10 pts)

> **TAM** | **Aula:** 2 (28/05/2026) | **Auto-grade:** ✅

## Objetivo

Setup ambiente iOS + Android funcional + suíte unitária com Jest cobrindo data + domain layers (≥ 70% cobertura).

## Estrutura

```
exercicios/02-setup-suite-unitaria/aluno-<github-username>/
├── package.json                # Jest configurado
├── src/
│   ├── data/__tests__/         # ≥ 5 testes
│   └── domain/__tests__/       # ≥ 5 testes
├── android/                     # build.gradle com test deps
├── ios/                         # Xcode project com test target
└── README.md
```

## Critérios (10 pts)

| # | Critério | Peso |
|---|----------|------|
| 1 | Jest configurado (package.json ou jest.config) | 2 |
| 2 | Mín 5 *.test/*.spec | 3 |
| 3 | Cobertura configurada | 2 |
| 4 | Estrutura iOS | 1 |
| 5 | Estrutura Android | 1 |
| 6 | README | 1 |

## Vídeo

`npm test -- --coverage` rodando + relatório de cobertura HTML.
