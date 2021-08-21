import clsx from 'clsx'
import { NavLink as NavLinkType } from '@/config/navLinks'
import Link from 'next/link'

export const NavLink: React.FC<{
  navLink: NavLinkType
  isActive: boolean
  dark?: boolean
}> = ({ navLink, isActive, dark }) => {
  return (
    <Link href={navLink.href}>
      <a
        data-testid={`${navLink.label}-link`}
        className="flex flex-col items-center group"
      >
        <span className={clsx(dark && 'text-dark-body', 'text-2xl font-semibold')}>
          {navLink.label}
        </span>
        <div
          className={clsx(
            isActive ? 'border-primary' : 'border-opacity-0 border-white',
            'w-11/12 border-b-2 group-hover:border-primary'
          )}
        />
      </a>
    </Link>
  )
}
