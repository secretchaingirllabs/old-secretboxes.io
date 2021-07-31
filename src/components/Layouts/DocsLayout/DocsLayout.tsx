import { Footer as DefaultFooter } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { Sidebar } from '@/components/Pages/Docs/Sidebar'
import { navLinks } from '@/config/navLinks'
import { appDescription, appTitle, SITE_URL } from '@/config/seo'
import { sidebarItems } from '@/config/sidebarItems'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Layout: React.FC<{ Footer?: () => JSX.Element; title: string }> = ({
  children,
  Footer = DefaultFooter,
  title,
  ...customMeta
}) => {
  const router = useRouter()
  const meta: any = {
    title: `${title} – ${appTitle}`,
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
      <div className="bg-dark">
        <div className="relative max-w-[1204px] h-[136px] flex items-center justify-between mx-auto">
          <Link href="/">
            <a data-testid="logo" className="flex items-center space-x-4">
              <Image
                src="/images/nav_logo_dark.svg"
                alt="logo"
                width="62px"
                height="62px"
              />
              <span className="text-4xl tracking-wide text-white font-display">
                Secret Box Guide
              </span>
            </a>
          </Link>
          <Navigation dark navLinks={navLinks} />
          <div className="relative">
            <input
              data-testid="email-field"
              className="pl-9 h-10 max-w-md px-2 py-1 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:ring-offset-0 focus:ring-offset-primary w-[334px]"
              placeholder="Search"
              type="text"
            />
            <svg
              className="absolute w-4 h-4 left-2 top-3"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.84394"
                cy="7.84394"
                r="5.99237"
                stroke="#200E32"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0117 12.3223L14.3611 14.6655"
                stroke="#200E32"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="min-h-[calc(100vh-136px)] flex flex-col bg-dark">
        <main className="flex-1 bg-[#1E2022]">
          <div className="relative max-w-[1204px] mx-auto pt-14">
            <div className="flex items-start space-x-24 text-white">
              <div className="flex-none">
                <Sidebar items={sidebarItems} />
              </div>
              {children}
            </div>
          </div>
        </main>
        <Footer dark />
      </div>
    </>
  )
}

export default Layout
