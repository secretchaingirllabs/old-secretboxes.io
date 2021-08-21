import clsx from 'clsx'
import { ButtonProps } from './SecondaryButton'

export const LinkButton: React.FC<ButtonProps> = ({
  className,
  type,
  children,
  size,
  ...props
}) => {
  const padding = clsx(
    [size === 'sm' && 'px-2 py-1'],
    [size === 'md' && 'py-2 px-4'],
    [size === 'lg' && 'p-4']
  )

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type ?? 'button'}
      className={clsx(
        'focus:text-[#4867F8] hover:text-gray-primary hover:underline text-gray-body dark:text-dark-body relative disabled:outline-none focus:outline-none flex items-center justify-center font-semibold transition-colors group space-x-2',
        padding,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
