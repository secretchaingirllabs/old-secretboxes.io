import { footerLinks } from '@/config/footerLinks'
import { socials, supportEmail } from '@/config/socials'
import Image from 'next/image'
import Link from 'next/link'
import {
  MailingListFormValues,
  MailingListSignup,
  SignUpResponse,
} from './forms/MailingListSignup'
import { SocialsNav } from './Navigation/Socials'

export const FooterWithSignup = () => {
  const onMailListSubmit = async (
    values: MailingListFormValues
  ): Promise<SignUpResponse> => {
    // eslint-disable-next-line no-console
    console.log({ values })

    return Promise.resolve().then(() => 'success' as SignUpResponse)
  }

  return (
    <footer className="relative">
      <div className="md:flex">
        <div className="relative w-full md:w-7/12 bg-primary pb-80">
          <div className="absolute z-10 top-24 -right-32">
            <Image
              alt="floating boxes"
              src="/images/footer_boxes.webp"
              height="650"
              width="322"
            />
          </div>
          <div className="absolute bottom-52 left-1/2 -right-1/2">
            <Image
              alt="ufo"
              src="/images/footer_ufo_left.webp"
              height="105"
              width="170"
            />
          </div>
          <div className="flex items-end">
            <div className="ml-auto md:mr-[330px] mt-[166px] inline-flex px-[10px]">
              <MailingListSignup onSubmit={onMailListSubmit} />
            </div>
          </div>
        </div>
        <div className="relative md:w-5/12 bg-gray-primary">
          <div className="absolute transform bottom-32 right-20 rotate-3">
            <Image
              alt="ufo"
              src="/images/footer_ufo_right.webp"
              height="105"
              width="145"
            />
          </div>
          <div className="px-[10px] pb-[300px] md:pb-0 md:ml-[94px] mr-auto pt-[232px] max-w-[600px]">
            <ul className="space-y-6 text-5xl text-white font-display mb-13">
              <li>Contact Us</li>
              <li>Team</li>
              <li>Github</li>
            </ul>
            <p className="mb-4 leading-5 text-white">
              We’d love to hear from you! Feel free to contact us
              <br />
              with your ideas or feedback.
              <br />
              And check out our GitHub to see how you can
              <br />
              contribute.
            </p>
            <p className="font-semibold text-white">{supportEmail}</p>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col max-w-[1352px] px-[10px] mx-auto left-0 right-0 bottom-8">
        <div className="flex items-start mb-4">
          <div className="self-start">
            <SocialsNav socials={socials} />
          </div>
        </div>
        <div className="bg-[#14142B] h-[1px] mb-9" />
        <div className="flex flex-col justify-between w-full md:flex-row">
          <ul className="flex space-x-5">
            {footerLinks.map((fl) => (
              <li key={fl.label}>
                <Link href={fl.href}>
                  <a>{fl.label}</a>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-white">© 2021 SecretChainGirl Foundation</p>
        </div>
      </div>
    </footer>
  )
}
