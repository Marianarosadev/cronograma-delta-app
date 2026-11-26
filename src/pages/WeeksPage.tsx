import type { ReactNode } from 'react'
import type { Week } from '../data/types'
import { phases } from '../data/plan'
import { PageHeader, Section } from '../components/ui'
import { phaseOf, todayISO } from '../lib/dates'
import { href } from '../lib/routes'
import { blockKey, type Progress } from '../lib/useProgress'

type Props = {
  weeks: Week[]
  progress: Progress
}

export default function WeeksPage({ weeks, progress }: Props) {
  const today = todayISO()

  return (
    <div className="space-y-14">
      <PageHeader
        eyebrow="Estudo"
        title="Quinze semanas"
        accent="até 14 de março"
        aside={
          <p className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-texto-suave">
            <Legend className="bg-rose-acento">simulado ou discursiva</Legend>
            <Legend className="bg-taupe">em andamento</Legend>
            <Legend className="bg-vinho">concluído</Legend>
          </p>
        }
      />

      {phases.map((p) => (
        <Section key={p.name} title={p.name}>
          <div className="grid gap-4 xl:grid-cols-2">
            {weeks
              .filter((w) => phaseOf(w.days[0].date) === p.name)
              .map((w) => {
                const keys = w.days.flatMap((d) => d.blocks.map((_, i) => blockKey(d.date, i)))
                const done = keys.filter((k) => progress.done.has(k)).length
                const pct = keys.length ? Math.round((done / keys.length) * 100) : 0
                const current = w.days.some((d) => d.date === today)

                return (
                  <div key={w.n} className={`rounded-marca border bg-superficie p-4 ${current ? 'border-vinho' : 'border-linha'}`}>
                    <div className="mb-3 flex items-baseline justify-between gap-3">
                      <p className="flex items-baseline gap-2">
                        <span className="font-serif text-xl">Semana {w.n}</span>
                        <span className="text-[13px] text-texto-suave">{w.range}</span>
                      </p>
                      <span className="text-[13px] font-semibold text-vinho">{pct}%</span>
                    </div>

                    <div className="grid grid-cols-7 gap-1.5">
                      {w.days.map((d) => {
                        const dayKeys = d.blocks.map((_, i) => blockKey(d.date, i))
                        const dayDone = dayKeys.filter((k) => progress.done.has(k)).length
                        const complete = dayKeys.length > 0 && dayDone === dayKeys.length
                        const partial = dayDone > 0 && !complete
                        const special = /Simulado|Discursiva|PROVA/.test(d.title)

                        return (
                          <a
                            key={d.date}
                            href={href('dia', d.date)}
                            title={d.title}
                            className={`flex flex-col items-center rounded-[2px] border px-1 py-2 text-[13px] transition-colors ${
                              complete
                                ? 'border-vinho bg-vinho text-fundo hover:bg-vinho-hover'
                                : d.rest
                                  ? 'border-transparent text-taupe/70 hover:border-linha'
                                  : 'border-linha bg-fundo hover:border-texto'
                            } ${d.date === today ? 'ring-2 ring-vinho ring-offset-1 ring-offset-superficie' : ''}`}
                          >
                            <span className="font-semibold">{d.weekday}</span>
                            <span className="opacity-75">{d.date.slice(8)}</span>
                            <span className={`mt-1 size-1.5 rounded-full ${partial ? 'bg-taupe' : special && !complete ? 'bg-rose-acento' : 'bg-transparent'}`} />
                          </a>
                        )
                      })}
                    </div>
                    {w.note && <p className="mt-3 text-[13px] text-texto-suave">{w.note}</p>}
                  </div>
                )
              })}
          </div>
        </Section>
      ))}
    </div>
  )
}

function Legend({ className, children }: { className: string; children: ReactNode }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`size-2 rounded-full ${className}`} />
      {children}
    </span>
  )
}
