import { Footer as DefaultFooter } from '@/components/Footer'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const Footer = ((Component as any).Footer as any) ?? DefaultFooter

  return (
    <ThemeProvider attribute="class">
      <MainLayout Footer={Footer}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default MyApp
