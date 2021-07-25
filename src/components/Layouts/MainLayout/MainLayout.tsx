import { Footer as DefaultFooter } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { SocialsNav } from '@/components/Navigation/Socials'
import { navLinks } from '@/config/navLinks'
import { socials } from '@/config/socials'

const Layout: React.FC<{ Footer?: () => JSX.Element }> = ({
  children,
  Footer = DefaultFooter,
}) => {
  return (
    <>
      <div className="bg-primary">
        <div className="max-w-[1152px] mx-auto flex justify-end px-2">
          <div>
            <SocialsNav socials={socials} />
          </div>
        </div>
      </div>
      <Navigation navLinks={navLinks} />
      <div className="min-h-[calc(100vh-186px)] flex flex-col">
        <main className="flex-1 dark:bg-dark">
          <div className="px-[10px]">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
