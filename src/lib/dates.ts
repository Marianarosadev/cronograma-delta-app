import { phases } from '../data/plan'

const DAY_MS = 86_400_000

export function todayISO() {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export function daysBetween(from: string, to: string) {
  return Math.round((Date.parse(to) - Date.parse(from)) / DAY_MS)
}

export function formatDate(iso: string, opts: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit' }) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', opts)
}

export function phaseOf(iso: string) {
  return phases.find((p) => iso >= p.start && iso <= p.end)?.name ?? null
}
