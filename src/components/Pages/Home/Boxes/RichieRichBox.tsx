import { FeatureLabel } from '@/components/common/FeatureLabel'
import { PrimaryButton } from '@/components/common/PrimaryButton'
import { SecondaryButton } from '@/components/common/SecondaryButton'
import { RichieRichLottie } from '@/components/Lotties/RichieRichLottie'

export const RichieRichBox = () => {
  return (
    <div
      id="richieRich"
      className="flex items-center space-x-4 cursor-pointer focus:outline-none group"
    >
      <RichieRichLottie style={{ width: '264px', height: '186px' }} />
      <div>
        <div className="flex items-center mb-4 space-x-4">
          <h2 className="text-5xl select-none font-display">Richie Rich</h2>
          <FeatureLabel>Coming Soon</FeatureLabel>
        </div>
        <div className="group-hover:h-[120px] h-0 overflow-hidden transition-all">
          <p className="mb-6 text-sm tracking-tight select-none">
            The secret box based on Yao’s Millionaires’ Problem.
            <br />
            Subscribe to get notified.
          </p>
          <div className="flex space-x-4">
            <PrimaryButton>Subscribe</PrimaryButton>
            <SecondaryButton>Learn More</SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
