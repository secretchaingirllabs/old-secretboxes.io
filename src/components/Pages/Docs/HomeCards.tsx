import { DocsHomeCard as DocsHomeCardType } from '@/config/docsHomeCards'
import Image from 'next/image'

export const DocsHomeCard: React.FC<{ docsHomeCard: DocsHomeCardType }> = ({
  docsHomeCard,
}) => {
  return (
    <div className="relative rounded h-[232px] text-dark hover:bg-[#FFE672] transition bg-primary">
      <div style={{ ...docsHomeCard.image.style }} className="absolute">
        <Image src={docsHomeCard.image.src} layout="fill" />
      </div>
      <div className="absolute z-10 bottom-4 left-4">
        <h2 className="text-lg font-semibold">{docsHomeCard.label}</h2>
        <p
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: docsHomeCard.description }}
        />
      </div>
    </div>
  )
}
