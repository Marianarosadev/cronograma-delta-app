import type { ReactNode } from 'react'
import type { Note, Table } from '../data/types'

/** Título em duas linhas: a 1ª no tom do texto e a 2ª em rosé itálico. */
export function PageHeader({ eyebrow, title, accent, aside }: { eyebrow?: string; title: string; accent?: string; aside?: ReactNode }) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
      <div>
        {eyebrow && <Label>{eyebrow}</Label>}
        <h1 className="mt-2 font-serif text-[34px] leading-[1.05] tracking-[-0.02em] md:text-[48px]">
          <span className="block first-letter:uppercase">{title}</span>
          {accent && <span className="block italic text-rose-acento">{accent}</span>}
        </h1>
      </div>
      {aside}
    </header>
  )
}

export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-[13px] font-semibold uppercase tracking-[0.12em] text-vinho ${className}`}>{children}</p>
}

export function Section({ title, lead, children }: { title: string; lead?: string; children: ReactNode }) {
  return (
    <section className="space-y-5">
      <div className="border-b border-linha pb-3">
        <h2 className="font-serif text-[26px] leading-[1.1] tracking-[-0.01em]">{title}</h2>
        {lead && <p className="mt-1.5 max-w-2xl text-texto-suave">{lead}</p>}
      </div>
      {children}
    </section>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-marca border border-linha bg-superficie ${className}`}>{children}</div>
}

/** Linhas finas com o rótulo à esquerda e o conteúdo à direita. */
export function Rows({ items }: { items: { label: ReactNode; content: ReactNode }[] }) {
  return (
    <dl className="divide-y divide-linha border-y border-linha">
      {items.map((item, i) => (
        <div key={i} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
          <dt className="font-serif text-lg italic text-rose-acento">{item.label}</dt>
          <dd className="text-texto-suave">{item.content}</dd>
        </div>
      ))}
    </dl>
  )
}

export function NoteRows({ notes }: { notes: Note[] }) {
  return <Rows items={notes.map((n) => ({ label: n.title, content: n.text }))} />
}

export function List({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className={`space-y-2 pl-5 text-texto-suave marker:text-vinho ${ordered ? 'list-decimal' : 'list-disc'}`}>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </Tag>
  )
}

export function DataTable({ table }: { table: Table }) {
  return (
    <Card className="overflow-x-auto">
      <table className="w-full text-left text-[15px]">
        <thead className="border-b border-linha bg-fundo-alt/60">
          <tr>
            {table.head.map((h) => (
              <th key={h} className="whitespace-nowrap px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-texto-suave">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-linha">
          {table.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={i} className={`px-4 py-3 align-top ${i === 0 ? 'whitespace-nowrap font-semibold' : 'text-texto-suave'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
