import { PrimaryButton } from '@/components/common/PrimaryButton'
import { FigmentLearnBox } from './Boxes/FigmentLearnBox'
import { RichieRichBox } from './Boxes/RichieRichBox'
import { SecretCounterBox } from './Boxes/SecretCounterBox'

export const SecretBoxesSection = () => {
  return (
    <section>
      <div className="max-w-[1152px] mx-auto flex justify-between items-center">
        <div className="mx-auto space-y-4 text-dark-text dark:text-dark-body md:mx-0">
          <div className="mb-8">
            <h1 className="text-6xl tracking-wide font-display dark:text-primary">
              What are secret boxes?
            </h1>
          </div>
          <p>
            Secret Boxes are quickstarts to help you build decentralized,
            <br />
            privacy preserving dApps on the Secret Network.
          </p>
          <p>
            Each box comes with everything you need to start building
            <br />
            and includes libraries, secret contracts and beautiful UI
            <br />
            elements so you can focus on coding your functionality.
          </p>
          <p className="mb-8">
            Secret Boxes can be anything from use case blueprints to
            <br />
            chain integrations, technical bootstraps and more.
          </p>
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
        </div>
        <div className="hidden space-y-5 md:block">
          <SecretCounterBox />
          <FigmentLearnBox />
          <RichieRichBox />
        </div>
      </div>
    </section>
  )
}
