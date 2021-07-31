import { Avatar } from '@/components/common/Avatar'
import Image from 'next/image'

export const HightLightsRightCard = () => (
  <div className="p-8 bg-white shadow-md hover:shadow-lg">
    <div className="mb-6">
      <Image
        className="overflow-hidden rounded-lg"
        src="/images/news_richie_rich.webp"
        height="238px"
        width="363px"
      />
    </div>
    <h2 className="mb-1 text-2xl font-semibold">Richie Rich Secret Box</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      <br />
      adipiscing elit. Consectetur ut diam lorem
      <br />
      id. Vel nisl, placerat lorem ac et a libero
      <br />
      iaculis pellentesque...
    </p>
    <div className="flex mb-1 space-x-2">
      <span>Mar 3</span>
      <span>&bull;</span>
      <span>8 min read</span>
    </div>
    <Avatar authorName="Secret Agent" />
  </div>
)
