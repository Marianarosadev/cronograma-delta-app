import { Check, ChevronLeft, ChevronRight, Coffee, Info, Plus, TriangleAlert } from 'lucide-react'
import type { ReactNode } from 'react'
import type { PlanDay } from '../App'
import { rules, rulesNote } from '../data/checklist'
import { Card, PageHeader } from '../components/ui'
import { formatDate, phaseOf, todayISO } from '../lib/dates'
import { href } from '../lib/routes'
import { blockKey, type Progress } from '../lib/useProgress'

type Props = {
  days: PlanDay[]
  date: string
  progress: Progress
}

export default function DayPage({ days, date, progress }: Props) {
  const index = Math.max(0, days.findIndex((d) => d.date === date))
  const day = days[index]
  const prev = days[index - 1]
  const next = days[index + 1]
  const keys = day.blocks.map((_, i) => blockKey(day.date, i))
  const doneCount = keys.filter((k) => progress.done.has(k)).length
  const allDone = keys.length > 0 && doneCount === keys.length
  const isToday = day.date === todayISO()
  const phase = phaseOf(day.date)

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow={`Semana ${day.week}${phase ? ` · ${phase}` : ''}${isToday ? ' · Hoje' : ''}`}
        title={formatDate(day.date, { weekday: 'long', day: 'numeric', month: 'long' })}
        aside={
          <div className="flex gap-2">
            <DayLink to={prev?.date} label="Dia anterior">
              <ChevronLeft className="size-5" strokeWidth={1.5} />
            </DayLink>
            <DayLink to={next?.date} label="Próximo dia">
              <ChevronRight className="size-5" strokeWidth={1.5} />
            </DayLink>
          </div>
        }
      />

      {day.weekNote && day.weekday === 'Seg' && (
        <Callout icon={<Info className="size-[18px]" strokeWidth={1.5} />}>{day.weekNote}</Callout>
      )}
      {day.notes.map((n) => (
        <Callout key={n.title} icon={<TriangleAlert className="size-[18px]" strokeWidth={1.5} />}>
          <strong className="font-semibold text-texto">{n.title}:</strong> {n.text}
        </Callout>
      ))}

      <Card>
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-linha px-5 py-5">
          <div>
            <h2 className="font-serif text-[28px] italic leading-[1.1] tracking-[-0.01em] text-rose-acento md:text-[32px]">{day.title}</h2>
            {keys.length > 0 && (
              <p className="mt-1 text-[15px] text-texto-suave">
                {doneCount} de {keys.length} blocos concluídos
              </p>
            )}
          </div>
          {keys.length > 0 && (
            <button
              onClick={() => progress.toggle(keys, !allDone)}
              className={`group flex min-h-11 items-center gap-3 rounded-marca py-1.5 pl-4 pr-1.5 text-[15px] font-medium transition-colors ${
                allDone ? 'border border-texto text-texto hover:bg-fundo-alt' : 'bg-vinho text-fundo hover:bg-vinho-hover'
              }`}
            >
              {allDone ? 'Dia concluído' : 'Concluir dia'}
              <span className={`flex size-8 items-center justify-center rounded-[2px] ${allDone ? 'bg-vinho text-fundo' : 'bg-fundo text-vinho'}`}>
                <Check className="size-4" strokeWidth={2} />
              </span>
            </button>
          )}
        </div>

        {day.blocks.length === 0 ? (
          <div className="flex flex-col items-center gap-3 px-5 py-16 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-fundo-alt text-vinho">
              <Coffee className="size-5" strokeWidth={1.5} />
            </span>
            <p className="font-serif text-2xl italic text-rose-acento">Dia de descanso</p>
          </div>
        ) : (
          <ul className="divide-y divide-linha">
            {day.blocks.map((b, i) => {
              const key = keys[i]
              const checked = progress.done.has(key)
              return (
                <li key={key}>
                  <label className="flex cursor-pointer gap-4 px-5 py-4 transition-colors hover:bg-fundo/70">
                    <input type="checkbox" className="peer sr-only" checked={checked} onChange={(e) => progress.toggle([key], e.target.checked)} />
                    <span
                      className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-[2px] border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-vinho/40 ${
                        checked ? 'border-vinho bg-vinho text-fundo' : 'border-taupe bg-superficie'
                      }`}
                    >
                      {checked && <Check className="size-3.5" strokeWidth={2.5} />}
                    </span>
                    <span className="w-14 shrink-0 font-serif text-lg leading-6 text-rose-acento">{b.time}</span>
                    <span className={`min-w-0 flex-1 transition-opacity ${checked ? 'opacity-45' : ''}`}>
                      <span className="flex flex-wrap items-baseline gap-x-2">
                        <span className={`font-semibold ${checked ? 'line-through decoration-taupe' : ''}`}>{b.label}</span>
                        {b.duration && <span className="text-[13px] text-texto-suave">{b.duration}</span>}
                      </span>
                      {b.desc && <span className="mt-0.5 block text-[15px] text-texto-suave first-letter:uppercase">{b.desc}</span>}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>
        )}
      </Card>

      <details className="group border-y border-linha">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium">
          Regras fixas, para todos os dias
          <span className="flex size-7 shrink-0 items-center justify-center rounded-[2px] border border-texto transition-transform group-open:rotate-45">
            <Plus className="size-4" strokeWidth={1.5} />
          </span>
        </summary>
        <div className="space-y-3 pb-5 text-[15px]">
          {rules.map((r) => (
            <p key={r.title}>
              <strong className="font-semibold">{r.title}:</strong> <span className="text-texto-suave">{r.text}</span>
            </p>
          ))}
          <p className="text-texto-suave">{rulesNote}</p>
        </div>
      </details>
    </div>
  )
}

function DayLink({ to, label, children }: { to?: string; label: string; children: ReactNode }) {
  const cls = 'flex size-11 items-center justify-center rounded-marca border border-linha bg-superficie transition-colors'
  if (!to) return <span className={`${cls} opacity-30`}>{children}</span>
  return (
    <a href={href('dia', to)} aria-label={label} className={`${cls} hover:border-texto`}>
      {children}
    </a>
  )
}

function Callout({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex gap-3 border-l-2 border-vinho bg-fundo-alt/70 px-4 py-3 text-[15px] text-texto-suave">
      <span className="mt-0.5 shrink-0 text-vinho">{icon}</span>
      <p>{children}</p>
    </div>
  )
}
