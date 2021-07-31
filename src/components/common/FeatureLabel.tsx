import clsx from 'clsx'
import { DetailedHTMLProps } from 'react'

// @ts-ignore
interface FeatureLabelProps
  extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}
export const FeatureLabel: React.FC<FeatureLabelProps> = ({
  className,
  children,
  size = 'md',
  ...props
}) => {
  const padding = clsx(
    [size === 'sm' && 'px-2 py-1'],
    [size === 'md' && 'py-2 px-3'],
    [size === 'lg' && 'p-4']
  )

  return (
    <div
      className={clsx(
        'bg-[#FFF1AF] text-sm rounded-lg text-gray-body dark:text-dark-body relative focus:outline-none focus:shadow-light-button-shadow flex items-center justify-center transition-colors group space-x-2',
        padding,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
