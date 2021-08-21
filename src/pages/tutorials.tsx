import { MainLayout } from '@/components/Layouts/MainLayout'
import { AddDebugMessageRow } from '@/components/Pages/Tutorials/AddDebugMessageRow'
import { BoxIconAndLinesStructure } from '@/components/Pages/Tutorials/BoxIconAndLinesStructure'
import { CreateHelloWorldRow } from '@/components/Pages/Tutorials/CreateHelloWorldRow'
import { LaunchBlockChainRow } from '@/components/Pages/Tutorials/LaunchBlockChainRow'
import { ReadyToTryItRow } from '@/components/Pages/Tutorials/ReadyToTryItRow'
import { TutorialsHeader } from '@/components/Pages/Tutorials/TutorialsHeader'
import Image from 'next/image'

const Tutorials = () => {
  return (
    <MainLayout title="Tutorials">
      <div className="pt-4 bg-dark-body dark:bg-dark">
        <TutorialsHeader />
        <div className="my-[178px] relative">
          <div className="absolute top-[500px] -right-2 select-none">
            <Image
              src="/images/tutorials_yellow_planet.png"
              width="422px"
              height="912px"
            />
          </div>
          <div className="absolute top-[510px] -left-2 select-none">
            <Image
              src="/images/tutorials_stars_and_yellow_planet.png"
              width="381px"
              height="410px"
            />
          </div>
          <div className="relative max-w-[878px] mx-auto pb-40">
            <BoxIconAndLinesStructure />
            <div className="absolute left-0 right-0 -top-10 flex flex-col justify-center space-y-[235px]">
              <LaunchBlockChainRow />
              <CreateHelloWorldRow />
              <div className="relative pt-20 pl-5 ">
                <AddDebugMessageRow />
              </div>
              <div className="relative -bottom-60">
                <ReadyToTryItRow />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center select-none">
          <div className="w-screen h-[360px]">
            <Image src="/images/tutorials_pine_trees.png" layout="fill" />
          </div>
          <div className="absolute transform -translate-x-1/2 -top-14 left-1/2">
            <Image
              src="/images/tutorials_alien_abduction.png"
              width="526px"
              height="424px"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Tutorials
