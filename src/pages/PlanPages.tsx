import {
  afterExam,
  assumptions,
  dailyRoutine,
  disciplines,
  EXAM_DATE,
  exams,
  keyFacts,
  phaseDetails,
  pieceModels,
  pieceNotes,
  routineRules,
  simuladoAnalysis,
  simulados,
  sources,
  START_DATE,
  summary,
  weeklyCycle,
} from '../data/plan'
import { Card, DataTable, Label, List, NoteRows, PageHeader, Rows, Section } from '../components/ui'
import { daysBetween, formatDate, todayISO } from '../lib/dates'

export function OverviewPage() {
  const stats = [
    { value: Math.max(0, daysBetween(todayISO(), EXAM_DATE)), label: 'dias até a prova' },
    { value: Math.ceil(daysBetween(START_DATE, EXAM_DATE) / 7), label: 'semanas de estudo' },
    { value: '4h', label: 'por dia, seg a sáb' },
    { value: simulados.length, label: 'simulados' },
  ]

  return (
    <div className="space-y-14">
      <PageHeader eyebrow="Plano" title="Visão geral" />
      <p className="max-w-3xl font-serif text-2xl leading-snug md:text-[28px]">{summary}</p>

      <div className="grid grid-cols-2 gap-px border-y border-linha bg-linha md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-fundo px-4 py-6">
            <p className="font-serif text-[40px] leading-none md:text-[48px]">{s.value}</p>
            <p className="mt-2 text-[13px] text-texto-suave">{s.label}</p>
          </div>
        ))}
      </div>

      <Section title="Como funciona">
        <NoteRows notes={keyFacts} />
      </Section>

      <Section title="Fases até a prova">
        <Rows
          items={phaseDetails.map((p) => ({
            label: p.name,
            content: (
              <>
                <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-vinho">{p.period}</span>
                <span className="mt-1 block font-semibold text-texto">{p.focus}</span>
                <span className="mt-1 block">{p.how}</span>
              </>
            ),
          }))}
        />
        <p className="text-texto-suave">{afterExam}</p>
      </Section>

      <Section title="Suposições a confirmar">
        <List items={assumptions} />
      </Section>
    </div>
  )
}

export function RoutinePage() {
  return (
    <div className="space-y-14">
      <PageHeader eyebrow="Plano" title="Rotina diária" />

      <Section title="Os blocos do dia" lead="Segunda a sexta: uma principal (2h30), uma secundária (50 min) e os blocos fixos de revisão e jurisprudência.">
        <Rows items={dailyRoutine.rows.map(([time, block, what]) => ({ label: time, content: <><strong className="block font-semibold text-texto">{block}</strong>{what}</> }))} />
        <List items={routineRules} />
      </Section>

      <Section title="Ciclo de 2 semanas" lead="A semana A termina com discursiva e a semana B com simulado. A primeira semana A começa em 30/11/2026.">
        <DataTable table={weeklyCycle} />
      </Section>
    </div>
  )
}

export function SimuladosPage() {
  return (
    <div className="space-y-14">
      <PageHeader eyebrow="Plano" title="Simulados" />

      <Section title="Datas e metas" lead="Sempre no sábado da semana B: 100 questões em 3h45 e 15 min de correção. A prova real dá 5h.">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {simulados.map((s, i) => (
            <Card key={s.date} className="p-4">
              <Label>
                Nº {i + 1} · {formatDate(s.date)}
              </Label>
              <p className="mt-3 font-serif text-[34px] leading-none">{s.goal}</p>
              <p className="mt-2 text-[13px] text-texto-suave">{s.note || s.phase}</p>
            </Card>
          ))}
        </div>
        <p className="text-[15px] text-texto-suave">As metas são uma estimativa. O mínimo do edital é 50, e a nota de corte real depende da concorrência.</p>
      </Section>

      <Section title="Análise do simulado" lead="A revisão passa de 15 para 30 min e vira análise do simulado; a teoria encurta 15 min.">
        <List items={simuladoAnalysis} ordered />
      </Section>
    </div>
  )
}

export function DisciplinesPage() {
  return (
    <div className="space-y-14">
      <PageHeader eyebrow="Plano" title="Disciplinas" />
      <Section title="Cruzamento PE × GO" lead="11 das 12 disciplinas de PE servem para GO. As cinco pesadas somam 64 das 100 questões e ficam com um dia fixo cada.">
        <DataTable table={disciplines} />
      </Section>
      <Section title="Legislação específica">
        <Rows
          items={[
            { label: 'Pernambuco', content: 'Constituição de PE, arts. 101 a 105-B; Lei 6.425/1972; Lei 6.123/1968; LC 137/2008; LC 317/2015. Leitura de lei seca, sem doutrina.' },
            { label: 'Goiás', content: 'Depois de 14/03/2027: Constituição de Goiás, lei orgânica da PC GO, Lei 20.756/2020 e, se voltar a cair, Realidade de Goiás. Guardar espaço para Criminalística.' },
          ]}
        />
      </Section>
    </div>
  )
}

export function DiscursivaPage() {
  return (
    <div className="space-y-14">
      <PageHeader eyebrow="Plano" title="Discursiva" />

      <Section title="Modelos de peça" lead="A peça vale 70 dos 100 pontos. Estudar a estrutura, os requisitos legais e escrever um esqueleto de uma página.">
        <DataTable table={pieceModels} />
        <p className="text-texto-suave">A partir de 27/01/2027, a quarta passa a ter uma peça completa, com casos que pedem mais de uma medida.</p>
      </Section>

      <Section title="Sábado de discursiva" lead="05/12, 19/12, 02/01, 16/01, 30/01, 13/02 e 27/02 (este último em formato de simulado).">
        <Rows
          items={[
            { label: '2h', content: 'Uma peça completa, à mão, em folha de 60 linhas, com o tema das duas últimas quartas.' },
            { label: '45 min', content: 'Duas questões de até 10 linhas, sobre os temas da quinzena.' },
            { label: '1h15', content: 'Corrigir com o espelho, contar erros de português e reescrever os trechos fracos.' },
          ]}
        />
      </Section>

      <Section title="Regras da peça">
        <NoteRows notes={pieceNotes} />
      </Section>
    </div>
  )
}

export function EditaisPage() {
  return (
    <div className="space-y-14">
      <PageHeader eyebrow="Plano" title="Editais e materiais" />

      <Section title="PC PE e PC GO" lead="PE tem edital aberto e prova marcada; GO só tem o concurso de 2022 como referência.">
        <DataTable table={exams} />
        <p className="text-texto-suave">
          O edital de PE teve as retificações nº 2 (15/10/2026) e nº 3 (09/11/2026). Confira a versão atualizada no site do Cebraspe.
        </p>
      </Section>

      <Section title="Materiais">
        <NoteRows notes={sources} />
      </Section>
    </div>
  )
}
