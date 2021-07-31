import { Menu, Transition } from '@headlessui/react'
import { Box } from 'config/boxes'
import { Fragment } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

export const BoxesDropdown: React.FC<{ boxes: Box[]; dark?: boolean }> = ({
  boxes,
  dark,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          data-testid="boxes-dropdown-trigger"
          className="inline-flex items-center justify-center w-full px-4 py-2 space-x-2 text-2xl font-semibold rounded-md text-gray-body bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {({ open }) => (
            <>
              <span
                className={clsx(dark && 'text-dark-body', 'flex flex-col items-center')}
              >
                Boxes
                <div
                  className={clsx(
                    open ? 'border-primary' : 'border-opacity-0 border-white',
                    'w-11/12 border-b-2 transition-colors'
                  )}
                />
              </span>
              <svg
                className={clsx(
                  open ? 'rotate-180' : 'rotate-0',
                  'transform transition-transform h-4 w-4',
                  dark && 'text-dark-body'
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
            </>
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          data-testid="dropdown-content"
          className="absolute z-50 right-0 w-56 mt-2 origin-top -mr-4 bg-white divide-y divide-gray-100 rounded-md shadow-md focus:outline-none max-w-[163px] ring-1 ring-gray-label border-opacity-40"
        >
          <div className="py-1">
            {boxes.map((b) => (
              <Link key={b.label} href={b.href}>
                <a>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={clsx(
                          active && 'bg-primary',
                          'group flex items-center w-full px-3 py-2 space-x-3'
                        )}
                      >
                        {b.icon}
                        <span className="text-2xl font-display text-dark-secondary">
                          {b.label}
                        </span>
                      </div>
                    )}
                  </Menu.Item>
                </a>
              </Link>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
