import { Footer as DefaultFooter } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { SocialsNav } from '@/components/Navigation/Socials'
import { navLinks } from '@/config/navLinks'
import { appDescription, appTitle, SITE_URL } from '@/config/seo'
import { socials } from '@/config/socials'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Layout: React.FC<{ Footer?: () => JSX.Element; title?: string }> = ({
  children,
  Footer = DefaultFooter,
  title,
  ...customMeta
}) => {
  const router = useRouter()
  const meta: any = {
    title: title ? `${title} – ${appTitle}` : appTitle,
    description: appDescription,
    image: `${SITE_URL}/images/cover.png`,
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="canonical" href={`${SITE_URL}/${router.asPath}`} />

        <meta property="og:url" content={`${SITE_URL}/${router.asPath}`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:site_name" content={appTitle} />
        <meta property="og:type" content={meta.type} />

        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:site" content="@SecretNetwork" />
        <meta name="twitter:card" content="summary_large_image" />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>

      <div className="bg-primary">
        <div className="max-w-[1152px] mx-auto flex justify-end px-2">
          <div>
            <SocialsNav socials={socials} />
          </div>
        </div>
      </div>
      <div className="relative max-w-[1152px] h-[136px] flex items-center justify-center mx-auto">
        <div className="absolute left-[10px] top-[32px]">
          <Link href="/">
            <a data-testid="logo">
              <span className="sr-only">To Homepage</span>
              <Image
                src="/images/nav_logo_light.svg"
                alt="logo"
                width="72px"
                height="72px"
              />
            </a>
          </Link>
        </div>
        <Navigation navLinks={navLinks} />
      </div>
      <div className="min-h-[calc(100vh-186px)] flex flex-col">
        <main className="flex-1 dark:bg-dark">
          <div className="relative">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
