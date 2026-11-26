# Cronograma Delta

App pessoal de estudos da Mariana para o concurso de **Delegado da PC PE** (prova em 14/03/2027) e, depois, da **PC GO**. Mostra o cronograma de 15 semanas (30/11/2026 a 14/03/2027) com um checklist por dia.

## Comandos

```bash
npm run dev      # servidor de desenvolvimento (Vite)
npm run build    # checa tipos (tsc) e gera o build em dist/
```

Não há testes. Antes de dar uma mudança por pronta, rode `npm run build` e confira no navegador, no desktop e em 375 px.

## Stack

React 19, Vite 8, Tailwind 4 (via `@tailwindcss/vite`, tokens em `@theme` no `src/index.css`), TypeScript, ícones `lucide-react`, fontes `@fontsource-variable/newsreader` e `@fontsource-variable/manrope`. Sem roteador nem gerenciador de estado: as rotas são por hash.

## Estrutura

- `src/data/checklist.ts`: as 15 semanas, dia a dia, com os blocos (horário, rótulo, duração, descrição). Foi gerado por script a partir do documento original e agora é editado à mão.
- `src/data/plan.ts`: o resto do plano (resumo, rotina, ciclo semanal, fases, simulados, disciplinas, peças, editais, materiais) e as datas-chave (`START_DATE`, `EXAM_DATE`, `phases`).
- `src/data/types.ts`: tipos dos dados.
- `src/lib/routes.ts`: páginas, grupos da sidebar e `useRoute` (rotas como `#/dia/2026-12-01`, `#/rotina`).
- `src/lib/useProgress.ts`: blocos concluídos, salvos no `localStorage` com a chave `cronograma-delta:done` e o formato `AAAA-MM-DD#índice`.
- `src/lib/dates.ts`: datas em ISO local, formatação pt-BR e a fase de cada dia.
- `src/components/layout/`: `Sidebar` (bordô, recolhível no desktop, estado salvo em `cronograma-delta:sidebar-recolhida`) e `Navbar`.
- `src/components/ui.tsx`: componentes base (`PageHeader`, `Section`, `Card`, `Rows`, `DataTable`, `List`, `Label`).
- `src/pages/`: `DayPage` (checklist do dia), `WeeksPage` (as 15 semanas por fase) e `PlanPages` (as 6 páginas do plano).

## Conteúdo

- O conteúdo é **fixo no código**. A fonte original é o documento "Cronograma Delegado PC PE + PC GO" no Claude Docs (https://claude.ai/artifact/KhUSPnfqnJvTPA6w8h1ri3), com as abas do plano e do checklist diário. Se o documento mudar, atualize `plan.ts` e `checklist.ts`.
- Mudar os índices dos blocos de um dia em `checklist.ts` desalinha o progresso já salvo desse dia, porque a chave usa a posição do bloco.
- O progresso fica só no navegador. Não há backend.

## Identidade visual

Segue a identidade "rubi" do arquivo `../adv/marca/identidade-visual.md` (projeto da advogada Giovanna Cabral), usando **só a linguagem visual**: nada de nome, monograma ou logo dela.

- Cores (tokens no `@theme`): fundo `fundo` #F6F3EF, `fundo-alt`, `superficie`, texto `texto` e `texto-suave`, ações em `vinho` (rubi #8C2638), faixas escuras em `vinho-forte` (#3E1A24), rosé só como acento (`rose-acento` no claro, `rose-claro` no escuro), divisórias em `linha`. Não há verde: "concluído" é rubi.
- Fontes: Newsreader nos títulos e números, Manrope no texto.
- Cantos de 4 px (`rounded-marca`), linhas finas, ícones Lucide com traço 1,5.
- Só modo claro.

## Preferências da Mariana

- Interface, textos e comentários em português do Brasil, diretos e sem enrolação: só o necessário.
- Sidebar sem logo.
- No dia, o tema de estudo fica no topo do card de checklist, sem rótulo, separado da data.
- Nas páginas do plano, nenhum título quebra linha nem muda de cor no meio: títulos curtos, numa cor só.

## Git

- Repositório: https://github.com/Marianarosadev/cronograma-delta-app (branch `main`).
- O remote usa o atalho SSH `github-pessoal` (`git@github-pessoal:Marianarosadev/cronograma-delta-app.git`), porque o `github.com` padrão desta máquina é a conta de trabalho.
- O `user.email` deste repositório é o pessoal (`marianarosa.dev@gmail.com`), configurado só aqui.
