import clsx from 'clsx'
import { NavLink as NavLinkType } from '@/config/navLinks'
import Link from 'next/link'

export const NavLink: React.FC<{ navLink: NavLinkType; isActive: boolean }> = ({
  navLink,
  isActive,
}) => {
  return (
    <Link href={navLink.href}>
      <a data-testid={`${navLink.label}-link`} className="flex flex-col items-center">
        <span className="text-2xl font-semibold dark:text-dark-body">
          {navLink.label}
        </span>
        <div
          className={clsx(
            isActive ? 'border-primary' : 'border-white dark:border-dark',
            'w-11/12 border-b-2'
          )}
        />
      </a>
    </Link>
  )
}
