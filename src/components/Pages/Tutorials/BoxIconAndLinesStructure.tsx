import Image from 'next/image'
import { BoxCircleIcon } from './BoxCircleIcon'

export const BoxIconAndLinesStructure = () => {
  return (
    <div className="flex flex-col select-none">
      <div className="self-end -mt-1 transform translate-x-1/2">
        <BoxCircleIcon />
      </div>
      <div style={{ transform: 'scaleX(-1)' }} className="select-none filter dark:invert">
        <Image src="/images/tutorials_long_line.png" height="476px" width="878px" />
      </div>
      <div className="self-start -mt-1 transform -translate-x-1/2">
        <BoxCircleIcon />
      </div>
      <div className="select-none filter dark:invert">
        <Image src="/images/tutorials_long_line.png" height="476px" width="878px" />
      </div>
      <div className="self-end -mt-1 transform translate-x-1/2">
        <BoxCircleIcon />
      </div>
      <div className="flex flex-col self-end">
        <div className="self-end filter dark:invert">
          <Image src="/images/tutorials_short_line.png" height="470px" width="445px" />
        </div>
        <div className="self-start -mt-1 transform -translate-x-1/2">
          <BoxCircleIcon />
        </div>
      </div>
    </div>
  )
}
