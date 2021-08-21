import { Avatar } from '@/components/common/Avatar'
import Image from 'next/image'
import Link from 'next/link'
import { UploadDataAndReadTime } from './UploadDataAndReadTime'

export const ImportantUpdatesCard = () => (
  <Link href="updates/griptape-secret-box-launching">
    <a>
      <div className="flex items-center justify-between p-6 space-x-10 transition shadow-md hover:shadow-lg">
        <div className="flex flex-col">
          <div className="flex-grow">
            <div className="mb-1">
              <Avatar authorName="Secret Agent" />
            </div>
            <h3 className="mb-1 text-xl">“GripTape” Secret Box Launching</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. placerat
              <br />
              lorem ac et a libero iaculis pellentesque...
            </p>
          </div>
          <div className="flex-none flex-shrink ">
            <UploadDataAndReadTime uploadDate="Mar 3" readTime="8 min read" />
          </div>
        </div>
        <div
          className="flex items-center justify-center flex-none"
          style={{ width: '244px', height: '177px' }}
        >
          <Image
            className="overflow-hidden rounded-lg"
            src="/images/news_griptape.webp"
            width="225px"
            height="160px"
          />
        </div>
      </div>
    </a>
  </Link>
)
