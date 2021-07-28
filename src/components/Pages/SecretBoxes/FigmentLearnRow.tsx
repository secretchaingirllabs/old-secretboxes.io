import { PrimaryButton } from '@/components/common/PrimaryButton'
import { SecondaryButton } from '@/components/common/SecondaryButton'
import { FigmentLearnLottie } from '@/components/Lotties/FigmentLearnLottie'

export const FigmentLearnRow = () => {
  return (
    <section className="flex flex-row-reverse items-center justify-between">
      <div className="flex flex-col">
        <h1 className="mb-6 text-6xl font-display dark:text-primary">Figment Learn</h1>
        <p className="mb-8 text-gray-body dark:text-dark-body">
          Figment Learn is a fun learning pathway to help
          <br />
          developers quickly learn about working with the Secret Network. Using the
          <br />
          DataHub gateway you’ll be taken through the steps to deploy a<br />
          secret contract to the testnet, and even get some SCRT tokens for
          <br />
          your efforts!
        </p>
        <div className="flex space-x-4">
          <PrimaryButton>
            Learn More
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
          <SecondaryButton>Docs</SecondaryButton>
        </div>
      </div>
      <div>
        <FigmentLearnLottie style={{ width: '384px', height: '248px' }} />
      </div>
    </section>
  )
}
