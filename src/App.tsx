import { useState, type ComponentType } from 'react'
import { weeks } from './data/checklist'
import { EXAM_DATE, START_DATE } from './data/plan'
import { todayISO } from './lib/dates'
import { useProgress } from './lib/useProgress'
import { useRoute, type PageId } from './lib/routes'
import Sidebar from './components/layout/Sidebar'
import Navbar from './components/layout/Navbar'
import DayPage from './pages/DayPage'
import WeeksPage from './pages/WeeksPage'
import { DisciplinesPage, DiscursivaPage, EditaisPage, OverviewPage, RoutinePage, SimuladosPage } from './pages/PlanPages'

const allDays = weeks.flatMap((w) => w.days.map((d) => ({ ...d, week: w.n, weekNote: w.note })))
export type PlanDay = (typeof allDays)[number]

const totalBlocks = allDays.reduce((n, d) => n + d.blocks.length, 0)

/** Fora do período do cronograma, abre no primeiro ou no último dia. */
function resolveDate(param?: string) {
  const iso = param ?? todayISO()
  if (allDays.some((d) => d.date === iso)) return iso
  return iso < START_DATE ? START_DATE : EXAM_DATE
}

const COLLAPSED_KEY = 'cronograma-delta:sidebar-recolhida'

function loadCollapsed() {
  try {
    return localStorage.getItem(COLLAPSED_KEY) === 'true'
  } catch {
    return false
  }
}

const planPages:Partial<Record<PageId, ComponentType>> = {
  visao: OverviewPage,
  rotina: RoutinePage,
  simulados: SimuladosPage,
  disciplinas: DisciplinesPage,
  discursiva: DiscursivaPage,
  editais: EditaisPage,
}

export default function App() {
  const { page, param } = useRoute()
  const [menuOpen, setMenuOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(loadCollapsed)
  const progress = useProgress()
  const PlanPage = planPages[page]

  const toggleCollapsed = () => {
    setCollapsed((c) => {
      try {
        localStorage.setItem(COLLAPSED_KEY, String(!c))
      } catch {
        // sem armazenamento: a preferência vale só nesta sessão
      }
      return !c
    })
  }

  return (
    <div className="min-h-screen">
      <Sidebar
        page={page}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        collapsed={collapsed}
        onToggleCollapsed={toggleCollapsed}
        doneCount={progress.done.size}
        total={totalBlocks}
      />

      <div className={`transition-[padding] duration-300 ${collapsed ? 'lg:pl-[72px]' : 'lg:pl-72'}`}>
        <Navbar page={page} onMenu={() => setMenuOpen(true)} />
        <main key={`${page}/${param ?? ''}`} className="aparecer mx-auto max-w-5xl px-4 pb-24 pt-8 md:px-8 md:pt-12">
          {page === 'dia' && <DayPage days={allDays} date={resolveDate(param)} progress={progress} />}
          {page === 'semanas' && <WeeksPage weeks={weeks} progress={progress} />}
          {PlanPage && <PlanPage />}
        </main>
      </div>
    </div>
  )
}
