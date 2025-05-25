import { browser } from "$app/environment"

export type CardData = {
  id: string
  front: string
  back: string
  createdAt: number
}

export function getCards(): CardData[] {
  if (!browser) {
    return []
  }

  const cards: CardData[] = []

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)!
    const value = localStorage.getItem(key)!
    cards.push(JSON.parse(value))
  }

  cards.sort((a, b) => a.createdAt - b.createdAt)

  return cards
}
