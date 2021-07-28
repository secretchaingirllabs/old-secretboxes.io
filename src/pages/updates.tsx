import { HighlightsCard } from '@/components/Pages/Updates/HighlightsCard'
import { HightLightsRightCard } from '@/components/Pages/Updates/HightLightsRightCard'
import { ImportantUpdatesCard } from '@/components/Pages/Updates/ImportantUpdatesCard'
import { SkeletonImportantUpdatesCard } from '@/components/Pages/Updates/SkeletonImportantUpdatesCard'
import { UpdatesSection } from '@/components/Pages/Updates/UpdatesSection'
import { updateSections } from '@/config/updatesSections'
import Image from 'next/image'

const Updates = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto pt-12 relative mb-14">
        <Image src="/images/updates_banner.png" height="197px" width="1440px" />
        <div className="absolute top-[5.5rem] left-[318px]">
          <h1 className="text-white font-display text-8xl">News & Updates</h1>
        </div>
      </div>
      <div className="max-w-[900px] mx-[auto]">
        <UpdatesSection {...updateSections[0]}>
          <div className="flex mb-16 space-x-9">
            <div className="flex flex-col flex-grow space-y-4">
              <HighlightsCard />
              <HighlightsCard />
              <HighlightsCard />
            </div>
            <div className="flex-none w-[427px] h-[502px]">
              <HightLightsRightCard />
            </div>
          </div>
        </UpdatesSection>
        <UpdatesSection {...updateSections[1]}>
          <div className="flex flex-col flex-grow space-y-4">
            <ImportantUpdatesCard />
            <SkeletonImportantUpdatesCard />
          </div>
        </UpdatesSection>
      </div>
    </div>
  )
}

export default Updates
