export interface News {
  title: string
  description: string
  images: string[]
}

export const news: News[] = [
  {
    title: '“GripTape” Secret Box Launching Soon',
    description:
      'Brought to you by the Stake or Die! team, GripTape makes it easy to interact with the network.',
    images: ['/images/news_griptape.webp'],
  },
  {
    title: '“Richie Rich” Secret Box',
    description: 'Who’s the richest?',
    images: ['/images/news_richie_rich.webp'],
  },
  {
    title: 'Secret Voting Box',
    description: 'Vote early, often and in private.',
    images: ['/images/news_secret_voting.webp', '/images/news_secret_voting_fg.webp'],
  },
  {
    title: 'Sienna Network',
    description: 'First DeFi Protocol built on Secret Network.',
    images: ['/images/news_sienna_network.webp'],
  },
]
