import { DetailedHTMLProps, FC } from 'react'

export const BoxCircleIcon: FC<
  DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => (
  <div className="flex items-center justify-center p-2 border-2 rounded-full" {...props}>
    <svg
      className="filter dark:invert"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9688 16V8.00002C21.9684 7.6493 21.8758 7.30483 21.7003 7.00119C21.5248 6.69754 21.2725 6.44539 20.9688 6.27002L13.9688 2.27002C13.6647 2.09449 13.3198 2.00208 12.9688 2.00208C12.6177 2.00208 12.2728 2.09449 11.9688 2.27002L4.96875 6.27002C4.66501 6.44539 4.41273 6.69754 4.23721 7.00119C4.06169 7.30483 3.96911 7.6493 3.96875 8.00002V16C3.96911 16.3508 4.06169 16.6952 4.23721 16.9989C4.41273 17.3025 4.66501 17.5547 4.96875 17.73L11.9688 21.73C12.2728 21.9056 12.6177 21.998 12.9688 21.998C13.3198 21.998 13.6647 21.9056 13.9688 21.73L20.9688 17.73C21.2725 17.5547 21.5248 17.3025 21.7003 16.9989C21.8758 16.6952 21.9684 16.3508 21.9688 16Z"
        stroke="#111111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.23877 6.96002L12.9688 12.01L21.6988 6.96002"
        stroke="#111111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9688 22.08V12"
        stroke="#111111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)
