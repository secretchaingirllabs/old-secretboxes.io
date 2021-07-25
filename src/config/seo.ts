export const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://localhost:3000'
    : 'https://secretboxes.vercel.app'

export const appTitle = 'Secret Boxes'
export const appDescription =
  'Get started with creating decentralized apps with Secret Network'
