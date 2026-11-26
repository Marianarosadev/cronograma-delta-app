import { Menu } from 'lucide-react'
import { phaseOf, todayISO } from '../../lib/dates'
import { href, routeInfo, type PageId } from '../../lib/routes'

export default function Navbar({ page, onMenu }: { page: PageId; onMenu: () => void }) {
  const route = routeInfo(page)
  const phase = phaseOf(todayISO())

  return (
    <div className="sticky top-0 z-20 border-b border-linha bg-fundo/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-3 px-4 md:px-8">
        <button onClick={onMenu} aria-label="Abrir menu" className="-ml-1 p-1.5 text-texto lg:hidden">
          <Menu className="size-5" strokeWidth={1.5} />
        </button>

        <p className="min-w-0 truncate text-[15px]">
          <span className="text-texto-suave">{route.group}</span>
          <span className="mx-2 text-linha">/</span>
          <span className="font-semibold">{route.label}</span>
        </p>

        <div className="ml-auto flex items-center gap-3">
          <span className="hidden rounded-marca border border-linha px-2.5 py-1 text-[13px] text-texto-suave sm:inline">
            Fase: <strong className="font-semibold text-texto">{phase ?? 'antes do início'}</strong>
          </span>
          <a
            href={href('dia', todayISO())}
            className="rounded-marca border border-texto px-3 py-1.5 text-[15px] font-medium transition-colors hover:bg-texto hover:text-fundo"
          >
            Hoje
          </a>
        </div>
      </div>
    </div>
  )
}
