import Link from 'next/link'
import { Social } from 'config/socials'

interface IconStyle {
  backgroundColor?: string
  hoveredBackgroundColor?: string
  iconColor?: string
  hoveredIconColor?: string
}
export const SocialsNav: React.FC<{
  dark?: boolean
  socials: Social[]
  iconStyle?: IconStyle
}> = ({ socials, iconStyle }) => {
  return (
    <ul className="h-[50px] flex justify-end items-center space-x-3">
      {socials.map((s) => (
        <li key={s.label}>
          <Link href={s.href}>
            <a
              target="_blank"
              rel="noopener"
              data-testid={`${s.label}-social`}
              style={{ background: iconStyle && iconStyle.backgroundColor }}
              className="text-gray-body h-[30px] w-[30px] flex items-center justify-center bg-white rounded-full hover:text-gray-label transition-colors"
            >
              <span className="sr-only">{s.label}</span>
              {s.icon}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
