import { Avatar } from '@/components/common/Avatar'
import Image from 'next/image'
import Link from 'next/link'
import { UploadDataAndReadTime } from './UploadDataAndReadTime'

export const HightLightsRightCard = () => (
  <Link href="updates/griptape-secret-box-launching">
    <a>
      <div className="p-8 transition bg-white shadow-md hover:shadow-lg">
        <div className="mb-6">
          <Image
            className="overflow-hidden rounded-lg"
            src="/images/news_richie_rich.webp"
            height="238px"
            width="363px"
          />
        </div>
        <h2 className="mb-1 text-2xl font-medium">Richie Rich Secret Box</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit. Consectetur ut diam lorem
          <br />
          id. Vel nisl, placerat lorem ac et a libero
          <br />
          iaculis pellentesque...
        </p>
        <div className="my-2">
          <UploadDataAndReadTime readTime="8 min read" uploadDate="Mar 3" />
        </div>
        <Avatar authorName="Secret Agent" />
      </div>
    </a>
  </Link>
)
