export type ProjectType = {
  id: string
  name: string
  date: string
  endDate?: string
  description: string
  posterUrl: string
}

export const projects: ProjectType[] = [
  {
    id: 'out-west-trip',
    name: 'Out West Trip',
    date: '04-27-2021',
    description: 'Three week van trip out west with Ben.',
    posterUrl: '/images/projects/out-west-trip-poster.webp',
  },
  {
    id: 'japan-2023',
    name: 'Japan 2023',
    date: '04-25-2023',
    description:
      'Three week solo trip to Japan exploring Sapporo, Tokyo, Kyoto, and Osaka.',
    posterUrl: '/images/projects/japan-2023-poster.webp',
  },
].sort((a, b) => {
  const dateA = new Date(a.date)
  const dateB = new Date(b.date)
  return dateB.getTime() - dateA.getTime() // newest first
})
