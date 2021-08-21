import { SidebarItem as SidebarItemType } from '@/config/sidebarItems'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SidebarItem = ({
  label,
  items,
  depthStep = 45,
  depth = 0,
  icon,
  active,
  ...rest
}: SidebarItemType & { depthStep?: number; depth?: number; active?: boolean }) => {
  const [itemsOpen, setItemsOpen] = useState(false)

  return (
    <>
      <li {...rest} style={{ paddingLeft: depth * depthStep }}>
        <button
          type="button"
          onClick={() => setItemsOpen((p) => !p)}
          className={clsx(
            active && 'bg-[#2F3133] text-primary',
            'w-full font-semibold flex items-center p-[10px] space-x-2 hover:bg-[#2F3133] hover:text-primary rounded'
          )}
        >
          {icon} <span>{label}</span>
          {Array.isArray(items) ? (
            <svg
              className={clsx(
                itemsOpen ? '-rotate-90' : 'rotate-0',
                'transform transition'
              )}
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66699 1.33268L6.33366 5.99935L1.66699 10.666"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : null}
        </button>
      </li>
      {itemsOpen &&
        (Array.isArray(items) ? (
          <ul className="space-y-2">
            {items.map((subItem) => (
              <SidebarItem
                SidebarItemType
                key={subItem.name}
                depth={depth + 1}
                depthStep={icon ? depthStep : depthStep - 10}
                {...subItem}
              />
            ))}
          </ul>
        ) : null)}
    </>
  )
}

export const Sidebar: React.FC<{
  items: SidebarItemType[]
  depthStep?: number
  depth?: number
}> = ({ items, depthStep, depth }) => {
  const { asPath } = useRouter()

  return (
    <div className="flex sidebar">
      <ul className="flex flex-col p-2 space-y-2">
        {items.map((sidebarItem) => (
          <SidebarItem
            active={asPath === sidebarItem.href}
            key={sidebarItem.name}
            depthStep={depthStep}
            depth={depth}
            {...sidebarItem}
          />
        ))}
      </ul>
    </div>
  )
}
