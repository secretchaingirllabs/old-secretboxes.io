import { FeatureLabel } from '@/components/common/FeatureLabel'
import { PrimaryButton } from '@/components/common/PrimaryButton'
import { SecondaryButton } from '@/components/common/SecondaryButton'
import { FigmentLearnLottie } from '@/components/Lotties/FigmentLearnLottie'

export const FigmentLearnBox = () => {
  return (
    <div
      id="figmentLearn"
      className="flex items-center space-x-4 cursor-pointer focus:outline-none group"
    >
      <FigmentLearnLottie style={{ width: '264px', height: '186px' }} />
      <div>
        <div className="flex items-center mb-4 space-x-4">
          <h2 className="text-5xl select-none font-display">Figment Learn</h2>
          <FeatureLabel>New</FeatureLabel>
        </div>
        <div className="group-hover:h-[120px] h-0 overflow-hidden transition-all">
          <p className="mb-4 text-sm tracking-tight select-none">
            The learn pathway for devs using Figment’s DataHub
            <br />
            gateway to access the Secret Network and deploy
            <br />
            secret contracts.
          </p>
          <div className="flex space-x-4">
            <PrimaryButton>Let&apos;s Go!</PrimaryButton>
            <SecondaryButton>Docs</SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
