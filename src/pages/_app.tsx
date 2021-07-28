import { Footer as DefaultFooter } from '@/components/Footer'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { UIProvider } from '@/hooks/useUI'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Footer = ((Component as any).Footer as any) ?? DefaultFooter

  return (
    <ThemeProvider
      themes={['light', 'dark', 'yellow']}
      defaultTheme="yellow"
      enableSystem={false}
      attribute="class"
    >
      <UIProvider>
        <MainLayout Footer={Footer}>
          <Component {...pageProps} />
        </MainLayout>
      </UIProvider>
    </ThemeProvider>
  )
}

export default MyApp
