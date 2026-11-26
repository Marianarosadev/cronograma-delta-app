import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'cronograma-delta:done'

function load(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'))
  } catch {
    return new Set()
  }
}

export const blockKey = (date: string, index: number) => `${date}#${index}`

/** Guarda no navegador quais blocos já foram concluídos. */
export function useProgress() {
  const [done, setDone] = useState(load)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...done]))
    } catch {
      // sem armazenamento disponível: o progresso vale só para esta sessão
    }
  }, [done])

  const toggle = useCallback((keys: string[], value: boolean) => {
    setDone((prev) => {
      const next = new Set(prev)
      keys.forEach((k) => (value ? next.add(k) : next.delete(k)))
      return next
    })
  }, [])

  return { done, toggle }
}

export type Progress = ReturnType<typeof useProgress>
