import { Avatar } from '@/components/common/Avatar'
import Image from 'next/image'
import Link from 'next/link'
import { UploadDataAndReadTime } from './UploadDataAndReadTime'

export const HighlightsCard = () => (
  <Link href="updates/griptape-secret-box-launching">
    <a>
      <div className="flex items-center justify-between p-6 space-x-10 transition shadow-md hover:shadow-lg">
        <div>
          <div className="mb-1">
            <Avatar authorName="Secret Agent" />
          </div>
          <h3 className="text-xl">Richie Rich Secret Box</h3>
          <UploadDataAndReadTime uploadDate="Mar 3" readTime="8 min read" />
        </div>
        <div
          className="flex items-center justify-center flex-none overflow-hidden bg-black rounded-lg"
          style={{ width: '122px', height: '122px' }}
        >
          <Image src="/images/news_sienna_network.webp" width="82px" height="82px" />
        </div>
      </div>
    </a>
  </Link>
)
