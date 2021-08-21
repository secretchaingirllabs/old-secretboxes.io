import { MainLayout } from '@/components/Layouts/MainLayout'
import { HighlightsCard } from '@/components/Pages/Updates/HighlightsCard'
import { HightLightsRightCard } from '@/components/Pages/Updates/HightLightsRightCard'
import { ImportantUpdatesCard } from '@/components/Pages/Updates/ImportantUpdatesCard'
import { SkeletonImportantUpdatesCard } from '@/components/Pages/Updates/SkeletonImportantUpdatesCard'
import { UpdatesSection } from '@/components/Pages/Updates/UpdatesSection'
import { updateSections } from '@/config/updatesSections'
import Image from 'next/image'

const Updates = () => {
  return (
    <MainLayout title="Updates">
      <div className="h-[197px] w-[100vw] relative mb-14">
        <Image src="/images/updates_banner.png" layout="fill" />
        <div className="flex items-center space-x-8 absolute top-[3rem] left-[318px]">
          <h1 className="text-white font-display text-8xl">News & Updates</h1>
          <div className="relative">
            <input
              data-testid="email-field"
              className="pl-9 h-10 max-w-md px-2 py-1 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:ring-offset-0 focus:ring-offset-primary w-[371px]"
              placeholder="Search"
              type="text"
            />
            <svg
              className="absolute w-4 h-4 left-2 top-3"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.84394"
                cy="7.84394"
                r="5.99237"
                stroke="#200E32"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0117 12.3223L14.3611 14.6655"
                stroke="#200E32"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
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
          <div className="flex flex-col flex-grow space-y-4 pb-14">
            <ImportantUpdatesCard />
            <ImportantUpdatesCard />
            <SkeletonImportantUpdatesCard />
          </div>
        </UpdatesSection>
      </div>
    </MainLayout>
  )
}

export default Updates
