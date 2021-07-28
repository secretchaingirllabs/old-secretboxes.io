export interface ISupportCard {
  title: string
  body: string
  image: string
  link: {
    label: string
    href: string
  }
}

export const supportCards = [
  {
    title: 'Chat on Discord',
    body: 'If you’re looking for real-time discussions, check out the Secret<br />Network discord. This is the best place to chat, get help or make<br /> suggestions!',
    image: '/images/support_discord.svg',
    link: { label: 'Learn More', href: 'https://discord.com/invite/SJK32GY' },
  },

  {
    title: 'Post on the Forum',
    body: 'The Secret Network forum is where you can participate in more<br />thoughtful discussions, ideas and more.',
    image: '/images/support_forum.svg',
    link: { label: 'Check Forum', href: 'https://discord.com/invite/SJK32GY' },
  },
  {
    title: 'Find us on Github',
    body: 'If you want to report an issue or make a suggestion, come find us.<br />We welcome your feedback!',
    image: '/images/support_github.svg',
    link: { label: 'Open An Issue', href: 'https://discord.com/invite/SJK32GY' },
  },
]
