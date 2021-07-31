export interface DocsHomeCard {
  label: string
  description: string
  image: {
    src: string
    style: {
      top: string
      right: string
      width: string
      height: string
      left?: string
    }
  }
}

export const docsHomeCards: DocsHomeCard[] = [
  {
    label: 'Start Here',
    description: 'Steps to make you<br/>awesome.',
    image: {
      src: '/images/docs_start-here.svg',
      style: { top: '0px', right: '17.5px', width: '200px', height: '200px' },
    },
  },
  {
    label: 'Boxes',
    description: 'Awesome kits for<br/>developers.',
    image: {
      src: '/images/docs_boxes.svg',
      style: {
        top: '17px',
        right: '17.5px',
        left: '17.5px',
        width: '230px',
        height: '138px',
      },
    },
  },
  {
    label: 'Essentials',
    description: 'Learn how we use<br/>the Blockchain.',
    image: {
      src: '/images/docs_essentials.svg',
      style: {
        top: '17px',
        left: '17.5px',
        right: '17.5px',
        width: '240px',
        height: '138px',
      },
    },
  },
  {
    label: 'Lorem Ipsum',
    description: 'Learn how we use<br/>the Blockchain.',
    image: {
      src: '/images/docs_essentials.svg',
      style: {
        top: '17px',
        left: '17.5px',
        right: '17.5px',
        width: '240px',
        height: '138px',
      },
    },
  },
]

export const docsContactCards = [
  { description: 'Join us on Discord', image: '/images/docs_discord.svg' },
  { description: 'Join us on Telegram', image: '/images/docs_telegram.svg' },
  { description: 'Follow us on Twitterd', image: '/images/docs_twitter.svg' },
]
