import { FooterWithSignup } from '@/components/FooterWithSignup'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { HeroSection } from '@/components/Pages/Home/HeroSection'
import { NewsSection } from '@/components/Pages/Home/NewsSection'
import { SecretBoxesSection } from '@/components/Pages/Home/SecretBoxesSection'

const Home = () => {
  return (
    <MainLayout title="Home" Footer={FooterWithSignup}>
      <div className="py-8 bg-dark-body dark:bg-dark">
        <HeroSection />
      </div>
      <div id="secretBoxes" className="pt-[88px] pb-[232px]">
        <SecretBoxesSection />
      </div>
      <div id="updates" className="pt-8 pb-36 bg-dark-body dark:bg-dark">
        <NewsSection />
      </div>
    </MainLayout>
  )
}

export default Home
