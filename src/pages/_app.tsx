import { UIProvider } from '@/hooks/useUI'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      themes={['light', 'dark', 'yellow']}
      defaultTheme="yellow"
      enableSystem={false}
      attribute="class"
    >
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </ThemeProvider>
  )
}

export default MyApp
