import { Dropdown } from '@/components/common/Dropdown'
import { Menu } from '@headlessui/react'
import clsx from 'clsx'

const operatingSystems = [
  { id: 'macos', element: 'Macos' },
  { id: 'windows', element: 'Windows' },
  { id: 'linux', element: 'Linux' },
  { id: 'ubuntu', element: 'Ubuntu' },
]

export const OperatingSystemDropdown = () => {
  return (
    <Dropdown onItemClick={() => {}} items={operatingSystems}>
      <Menu.Button>
        {({ open }) => (
          <button
            type="button"
            data-testid="boxes-dropdown-trigger"
            className="inline-flex items-center justify-center w-full p-4 space-x-2 border rounded-md bg-gray-bg focus:outline-none hover:bg-opacity-30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 border-gray-placeholder"
          >
            <span className="flex flex-col items-center dark:text-dark-body">
              Operating System
            </span>
            <svg
              className={clsx(
                open ? '-rotate-180' : '-rotate-90',
                'transform transition-transform h-3 w-3 dark:text-dark-body'
              )}
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L9 9L17 1"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </Menu.Button>
    </Dropdown>
  )
}
