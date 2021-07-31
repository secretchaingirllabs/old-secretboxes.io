import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, ReactNode } from 'react'

export const Dropdown: React.FC<{
  items: { id: string; element: ReactNode[] | string }[]
  onItemClick: () => void
}> = ({ children, items }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {children}
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
          className="absolute z-50 w-full mt-2 origin-center bg-white divide-y divide-gray-100 rounded-md shadow-md focus:outline-none ring-1 ring-gray-label border-opacity-40"
        >
          <div className="py-1">
            {items.map((i) => (
              <Menu.Item key={i.id}>
                {({ active }) => (
                  <div
                    className={clsx(
                      active && 'bg-primary font-semibold text-gray-body',
                      'group flex items-center w-full px-3 py-2 space-x-3'
                    )}
                  >
                    {i.element}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
