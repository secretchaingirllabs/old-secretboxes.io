import { boxes } from '@/config/boxes'
import { NavLink as NavLinkType } from '@/config/navLinks'
import clsx from 'clsx'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { BoxesDropdown } from './BoxesDropdown'
import { NavLink } from './NavLink'

const Nav: React.FC<{ navLinks: NavLinkType[]; dark?: boolean }> = ({
  navLinks,
  dark,
}) => {
  const [mounted, setMounted] = useState(false)
  const { asPath } = useRouter()
  const [currentPath, setCurrentPath] = useState('')

  // After mounting, we have access to the theme
  useEffect(() => {
    if (!mounted) setMounted(true)
    setCurrentPath(asPath)
  }, [asPath])

  return (
    <nav
      className={clsx(dark ? 'bg-dark' : 'bg-white', 'text-lg text-gray-body font-body')}
    >
      <div
        className={clsx(
          dark ? 'bg-dark' : 'bg-white',
          'flex items-center justify-center mx-auto'
        )}
      >
        <ul className="flex space-x-[35px] items-center">
          <li className="-mr-3">
            <BoxesDropdown dark={dark} boxes={boxes} />
          </li>
          {navLinks.map((n) => (
            <li key={n.label}>
              <NavLink dark={dark} navLink={n} isActive={currentPath === n.href} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
