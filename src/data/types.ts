export type Block = {
  time: string
  label: string
  duration: string
  desc: string
}

export type Note = {
  title: string
  text: string
}

export type Day = {
  date: string
  weekday: string
  title: string
  rest: boolean
  notes: Note[]
  blocks: Block[]
}

export type Week = {
  n: number
  range: string
  note: string | null
  days: Day[]
}

export type Rule = Note

export type Table = {
  head: string[]
  rows: string[][]
}
