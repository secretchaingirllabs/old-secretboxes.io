import { FeatureLabel } from '@/components/common/FeatureLabel'
import { PrimaryButton } from '@/components/common/PrimaryButton'
import { RichieRichLottie } from '@/components/Lotties/RichieRichLottie'

export const RichieRichRow = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-col ">
        <div className="flex items-center mb-6 space-x-4">
          <h1 className="text-6xl font-display dark:text-primary">Richie Rich</h1>
          <FeatureLabel>Coming Soon</FeatureLabel>
        </div>
        <p className="mb-8 text-gray-body dark:text-dark-body">
          How do you find out who’s the richest without revealing your net
          <br />
          worth to the world? This secret box, based on Yao’s Millionaires’
          <br />
          Problem, illustrates how that can be done with secret contracts.
        </p>
        <div className="flex space-x-4">
          <PrimaryButton>Subscribe</PrimaryButton>
        </div>
      </div>
      <div>
        <RichieRichLottie style={{ width: '384px', height: '248px' }} />
      </div>
    </section>
  )
}
