import { useEffect, useState } from 'react'
import {
  BookOpen,
  CalendarCheck,
  CalendarRange,
  ClipboardCheck,
  Clock,
  Compass,
  FileText,
  PenLine,
  type LucideIcon,
} from 'lucide-react'

export type PageId = 'dia' | 'semanas' | 'visao' | 'rotina' | 'simulados' | 'disciplinas' | 'discursiva' | 'editais'

type RouteDef = { id: PageId; label: string; icon: LucideIcon }

export const navGroups: { title: string; routes: RouteDef[] }[] = [
  {
    title: 'Estudo',
    routes: [
      { id: 'dia', label: 'Dia', icon: CalendarCheck },
      { id: 'semanas', label: 'Semanas', icon: CalendarRange },
    ],
  },
  {
    title: 'Plano',
    routes: [
      { id: 'visao', label: 'Visão geral', icon: Compass },
      { id: 'rotina', label: 'Rotina', icon: Clock },
      { id: 'simulados', label: 'Simulados', icon: ClipboardCheck },
      { id: 'disciplinas', label: 'Disciplinas', icon: BookOpen },
      { id: 'discursiva', label: 'Discursiva', icon: PenLine },
      { id: 'editais', label: 'Editais e materiais', icon: FileText },
    ],
  },
]

const allRoutes = navGroups.flatMap((g) => g.routes.map((r) => ({ ...r, group: g.title })))

export const routeInfo = (id: PageId) => allRoutes.find((r) => r.id === id)!

export type Route = { page: PageId; param?: string }

function parse(hash: string): Route {
  const [page, param] = hash.replace(/^#\/?/, '').split('/')
  return allRoutes.some((r) => r.id === page) ? { page: page as PageId, param } : { page: 'dia' }
}

export function href(page: PageId, param?: string) {
  return `#/${page}${param ? `/${param}` : ''}`
}

/** Rotas por hash (#/dia/2026-11-30), para o link funcionar ao recarregar sem precisar de servidor. */
export function useRoute() {
  const [route, setRoute] = useState(() => parse(location.hash))

  useEffect(() => {
    const onChange = () => {
      setRoute(parse(location.hash))
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}
