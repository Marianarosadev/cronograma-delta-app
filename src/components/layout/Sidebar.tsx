import { PanelLeftClose, PanelLeftOpen, X } from 'lucide-react'
import { EXAM_DATE } from '../../data/plan'
import { daysBetween, todayISO } from '../../lib/dates'
import { href, navGroups, type PageId } from '../../lib/routes'

type Props = {
  page: PageId
  open: boolean
  onClose: () => void
  collapsed: boolean
  onToggleCollapsed: () => void
  doneCount: number
  total: number
}

export default function Sidebar({ page, open, onClose, collapsed, onToggleCollapsed, doneCount, total }: Props) {
  const pct = Math.round((doneCount / total) * 100)
  const daysLeft = Math.max(0, daysBetween(todayISO(), EXAM_DATE))
  // O modo recolhido só vale no desktop; no celular a sidebar abre sempre inteira.
  const hide = collapsed ? 'lg:hidden' : ''

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-vinho-forte/40 transition-opacity lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-vinho-forte text-fundo transition-[transform,width] duration-300 lg:translate-x-0 ${
          collapsed ? 'lg:w-[72px]' : ''
        } ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className={`flex h-20 items-center justify-between gap-2 px-6 ${collapsed ? 'lg:justify-center lg:px-0' : ''}`}>
          <a href={href('dia')} onClick={onClose} className={`min-w-0 ${hide}`}>
            <span className="block truncate font-serif text-xl leading-tight">Cronograma Delta</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-rodape-suave">Delegado PC PE + GO</span>
          </a>
          <button onClick={onClose} aria-label="Fechar menu" className="p-1 text-rodape-suave lg:hidden">
            <X className="size-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={onToggleCollapsed}
            aria-label={collapsed ? 'Expandir menu' : 'Recolher menu'}
            title={collapsed ? 'Expandir menu' : 'Recolher menu'}
            className="hidden size-9 shrink-0 items-center justify-center rounded-marca text-rodape-suave transition-colors hover:bg-white/10 hover:text-fundo lg:flex"
          >
            {collapsed ? <PanelLeftOpen className="size-5" strokeWidth={1.5} /> : <PanelLeftClose className="size-5" strokeWidth={1.5} />}
          </button>
        </div>

        <nav className="flex-1 space-y-7 overflow-y-auto overflow-x-hidden px-3 py-2">
          {navGroups.map((g) => (
            <div key={g.title}>
              <p className={`px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-rodape-suave/70 ${hide}`}>{g.title}</p>
              {collapsed && <div className="mx-3 mb-2 hidden border-t border-rodape-linha lg:block" />}
              <ul className="space-y-0.5">
                {g.routes.map((r) => {
                  const active = r.id === page
                  const Icon = r.icon
                  return (
                    <li key={r.id}>
                      <a
                        href={href(r.id)}
                        onClick={onClose}
                        title={collapsed ? r.label : undefined}
                        aria-label={r.label}
                        aria-current={active ? 'page' : undefined}
                        className={`relative flex items-center gap-3 rounded-marca px-3 py-2.5 text-[15px] transition-colors ${
                          collapsed ? 'lg:justify-center lg:px-0' : ''
                        } ${active ? 'bg-white/10 font-semibold text-fundo' : 'text-rodape-suave hover:bg-white/5 hover:text-fundo'}`}
                      >
                        {active && <span className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-rose-claro" />}
                        <Icon className={`size-[18px] shrink-0 ${active ? 'text-rose-claro' : ''}`} strokeWidth={1.5} />
                        <span className={`truncate ${hide}`}>{r.label}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className={`m-3 rounded-marca border border-rodape-linha p-4 ${hide}`}>
          <div className="flex items-baseline justify-between">
            <span className="font-serif text-4xl leading-none">{daysLeft}</span>
            <span className="text-[13px] text-rodape-suave">dias até 14/03</span>
          </div>
          <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-rose-claro transition-all" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-2 text-[13px] text-rodape-suave">
            {pct}% do cronograma · {doneCount} de {total} blocos
          </p>
        </div>
        {collapsed && (
          <div className="m-3 hidden flex-col items-center rounded-marca border border-rodape-linha py-3 lg:flex" title={`${daysLeft} dias até 14/03 · ${pct}% concluído`}>
            <span className="font-serif text-xl leading-none">{daysLeft}</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.12em] text-rodape-suave">dias</span>
          </div>
        )}
      </aside>
    </>
  )
}
