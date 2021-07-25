import { boxes } from '@/config/boxes'
import { NavLink as NavLinkType } from '@/config/navLinks'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BoxesDropdown } from './BoxesDropdown'
import { NavLink } from './NavLink'

const Nav: React.FC<{ navLinks: NavLinkType[] }> = ({ navLinks }) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const { asPath } = useRouter()
  const [currentPath, setCurrentPath] = useState('')

  // After mounting, we have access to the theme
  useEffect(() => {
    if (!mounted) setMounted(true)
    setCurrentPath(asPath)
  }, [asPath])

  return (
    <nav className="text-lg font-bold text-gray-body font-body">
      {mounted && (
        <div className="z-20 fixed bottom-[500px] right-[50px]">
          <button
            type="button"
            className="dark:text-dark-body"
            onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
          >
            click me for {resolvedTheme === 'light' ? 'dark' : 'light'} theme
          </button>
        </div>
      )}
      <div className="relative max-w-[1152px] h-[136px] flex items-center justify-center mx-auto bg-white dark:bg-dark">
        <div className="absolute left-[10px] top-[32px]">
          <Link href="/">
            <a data-testid="logo">
              <Image
                src={`/images/nav_logo_${resolvedTheme}.webp`}
                width="72px"
                height="72px"
              />
            </a>
          </Link>
        </div>
        <ul className="flex space-x-[35px] items-center">
          <li className="-mr-3">
            <BoxesDropdown boxes={boxes} />
          </li>
          {navLinks.map((n) => (
            <li key={n.label}>
              <NavLink navLink={n} isActive={currentPath === n.href} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
