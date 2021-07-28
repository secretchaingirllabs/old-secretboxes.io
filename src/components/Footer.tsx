import { footerLinks } from '@/config/footerLinks'
import { socials } from '@/config/socials'
import Link from 'next/link'
import { SocialsNav } from './Navigation/Socials'

export const Footer = () => {
  return (
    <footer className="max-w-[1152px] pt-16 mx-[auto] px-3 md:px-0">
      <div className="flex items-start mb-4">
        <div className="self-start">
          <p className="text-gray-body dark:text-dark-body">
            © 2021 SecretChainGirl Foundation
          </p>
        </div>
      </div>
      <div className="bg-[#14142B] dark:bg-dark-body h-[1px] w-[1200px] mb-9 hidden lg:block" />
      <div className="flex flex-col-reverse items-center justify-between w-full md:flex-row mb-9">
        <ul className="flex space-x-5">
          {footerLinks.map((fl) => (
            <li key={fl.label}>
              <Link href={fl.href}>
                <a>{fl.label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <SocialsNav iconStyle={{ backgroundColor: '#F7F7FC' }} socials={socials} />
        </div>
      </div>
    </footer>
  )
}
