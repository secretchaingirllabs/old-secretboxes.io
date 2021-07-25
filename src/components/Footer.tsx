import { socials } from '@/config/socials'
import { SocialsNav } from './Navigation/Socials'

export const Footer = () => {
  return (
    <div className="bottom-8 max-w-[1152px] mx-[144px] left">
      <div className="flex items-start mb-4">
        <div className="self-start">
          <p className="text-gray-body dark:text-dark-body">
            © 2021 SecretChainGirl Foundation
          </p>
        </div>
      </div>
      <div className="bg-[#14142B] dark:bg-dark-body h-[1px] w-[1200px] mb-9 hidden lg:block" />
      <div className="flex items-center justify-between w-full mb-9">
        <ul className="flex space-x-5">
          <li>SCG Foundation</li>
          <li>Contact</li>
          <li>Support</li>
        </ul>
        <div>
          <SocialsNav iconStyle={{ backgroundColor: '#F7F7FC' }} socials={socials} />
        </div>
      </div>
    </div>
  )
}
