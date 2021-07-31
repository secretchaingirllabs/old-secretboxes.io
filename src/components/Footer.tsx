import { footerLinks } from '@/config/footerLinks'
import { socials } from '@/config/socials'
import clsx from 'clsx'
import Link from 'next/link'
import { SocialsNav } from './Navigation/Socials'

export const Footer: React.FC<{ dark?: boolean }> = ({ dark }) => {
  return (
    <footer className={clsx('max-w-[1152px] pt-16 mx-[auto] px-3 md:px-0')}>
      <div className="flex items-start mb-4">
        <div className="self-start">
          <p className={clsx(dark ? 'text-dark-body' : 'text-gray-body')}>
            © 2021 SecretChainGirl Foundation
          </p>
        </div>
      </div>
      <div
        className={clsx(
          dark ? 'bg-dark-body' : 'bg-[#14142B]',
          'h-[1px] w-[1200px] mb-9 hidden lg:block'
        )}
      />
      <div className="flex flex-col-reverse items-center justify-between w-full md:flex-row pb-9">
        <ul className={clsx(dark && 'text-dark-body', 'flex space-x-5')}>
          {footerLinks.map((fl) => (
            <li key={fl.label}>
              <Link href={fl.href}>
                <a>{fl.label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <SocialsNav dark iconStyle={{ backgroundColor: '#F7F7FC' }} socials={socials} />
        </div>
      </div>
    </footer>
  )
}
