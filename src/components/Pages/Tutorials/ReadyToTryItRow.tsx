import { LinkButton } from '@/components/common/LinkButton'
import Link from 'next/link'

export const ReadyToTryItRow = () => (
  <div className="flex flex-col items-center ">
    <h1 className="mb-3 text-2xl font-bold tracking-tight text-center">
      Now You’re Ready to Try It!
    </h1>
    <p className="mb-5 text-center">
      Tutorial description Lorem ipsum dolor sit amet,
      <br />
      consectetur adipiscing elit. Auctor neque interdum
      <br />
      cursus natoque. Libero, viverra egestas faucibus
      <br />
      sollicitudin non adipiscing morbi.
    </p>
    <Link href="/tutorials/launching-your-developer-secret-network">
      <a>
        <LinkButton>
          <span>See It In Action</span>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.84108 0.811584V3.52185H0.489476C0.219285 3.52185 0 3.73607 0 4.00002C0 4.26397 0.219285 4.47819 0.489476 4.47819H5.84108V7.18845C5.84108 7.3625 5.93767 7.52317 6.09431 7.60733C6.25029 7.69149 6.44086 7.68575 6.59096 7.5933L11.7709 4.40487C11.9139 4.31688 12 4.16451 12 4.00002C12 3.83553 11.9139 3.68315 11.7709 3.59517L8.54756 1.61172C8.31979 1.47082 8.01697 1.53776 7.87274 1.76091C7.72916 1.98469 7.79768 2.27988 8.02676 2.42078L10.5916 4.00002L6.82004 6.32265V0.811584C6.82004 0.547634 6.60075 0.333415 6.33056 0.333415C6.06037 0.333415 5.84108 0.547634 5.84108 0.811584Z"
              fill="currentColor"
            />
          </svg>
        </LinkButton>
      </a>
    </Link>
  </div>
)
