import { PrimaryButton } from '@/components/common/PrimaryButton'
import { ISupportCard } from '@/config/supportCards'
import Image from 'next/image'

export const SupportCard: React.FC<{ supportCard: ISupportCard }> = ({ supportCard }) => {
  return (
    <div className="flex items-center space-x-13 p-6 max-w-[772px] shadow-md hover:shadow-lg transition bg-white flex-col md:flex-row">
      <Image
        className="overflow-hidden rounded-lg"
        quality={100}
        src={supportCard.image}
        width="212px"
        height="212px"
      />
      <div className="w-full">
        <h2 className="mb-3 text-2xl">{supportCard.title}</h2>
        <p
          className="mb-3 text-sm"
          dangerouslySetInnerHTML={{ __html: supportCard.body }}
        />
        <PrimaryButton className="px-5" size="sm">
          {supportCard.link.label}
          <div className="transition-all opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:ml-2">
            <svg
              className="hidden group-hover:block"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.167 7.81718L3.16699 7.81718"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.13379 3.80089L13.1671 7.81689L9.13379 11.8336"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </PrimaryButton>
      </div>
    </div>
  )
}
