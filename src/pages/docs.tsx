import { SecondaryButton } from '@/components/common/SecondaryButton'
import DocsLayout from '@/components/Layouts/DocsLayout/DocsLayout'
import { DocsHomeCard } from '@/components/Pages/Docs/HomeCards'
import { docsContactCards, docsHomeCards } from '@/config/docsHomeCards'
import Image from 'next/image'
import Link from 'next/link'

const Docs = () => {
  return (
    <DocsLayout title="Documentation">
      <div className="w-full">
        <h1 className="mb-2 text-5xl tracking-wide font-display">
          Secret Box Documentation
        </h1>
        <p className="mb-6 text-xl">Find cool topics in each of these sections.</p>
        <ul className="grid w-full grid-cols-3 gap-3 mb-13">
          {docsHomeCards.map((d) => (
            <li key={d.label}>
              <Link href="/docs/errors-and-how-to-resolve-them">
                <a>
                  <DocsHomeCard docsHomeCard={d} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="bg-[#2F3133] flex items-center justify-center relative h-[316px] rounded-lg mb-13">
          <div className="absolute bottom-0 select-none left-3 right-3 top-10">
            <Image src="/images/docs_devs-newsletter-bg.svg" layout="fill" />
          </div>
          <div className="relative z-20 flex flex-col items-center justify-center">
            <h1 className="mb-4 text-6xl font-display">Developers Newsletter</h1>
            <p className="mb-4 text-lg">
              Subscribe to the latest News or Updates on Secret Network.
            </p>
            <form>
              <div className="flex items-start mb-4 space-x-2 ">
                <label htmlFor="email">
                  <span data-testid="email-label" className="block mb-3 sr-only">
                    Email
                  </span>
                  <input
                    data-testid="email-field"
                    type="email"
                    className="h-10 max-w-md px-2 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="grayman.foo.com"
                  />
                </label>
                <SecondaryButton type="submit">Subscribe</SecondaryButton>
              </div>
            </form>
          </div>
        </div>
        <ul className="grid w-full grid-cols-3 gap-4 mb-24">
          {docsContactCards.map((d) => (
            <li
              key={d.image}
              className="hover:bg-[#2F3133] rounded-lg flex flex-col items-center justify-between p-8 h-[276px] transition"
            >
              <Image src={d.image} height="122px" width="122px" />
              <p>{d.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </DocsLayout>
  )
}

export default Docs
