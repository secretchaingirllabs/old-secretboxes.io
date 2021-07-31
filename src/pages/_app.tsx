import { MainLayout } from '@/components/Layouts/MainLayout'
import { UIProvider } from '@/hooks/useUI'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.css'

interface Page {
  (): JSX.Element
  title: string
  Footer: () => JSX.Element
  Layout?: () => JSX.Element
}

const MyApp = ({ Component, pageProps }: AppProps & { Component: Page }) => {
  const Layout = Component.Layout ?? MainLayout

  return (
    <ThemeProvider
      themes={['light', 'dark', 'yellow']}
      defaultTheme="yellow"
      enableSystem={false}
      attribute="class"
    >
      <UIProvider>
        <Layout {...Component}>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </ThemeProvider>
  )
}

export default MyApp
