import clsx from 'clsx'
import { ButtonProps } from './SecondaryButton'

export const PrimaryButton: React.FC<ButtonProps> = ({
  className,
  type,
  size = 'md',
  children,
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
        'disabled:bg-[#4E4B66] disabled:text-[#DEDDE2] disabled:bg-opacity-30 disabled:outline-none focus:outline-none focus:shadow-light-button-shadow flex items-center justify-center font-semibold text-white transition-colors rounded-lg group bg-gray-body hover:bg-gray-label',
        padding,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
