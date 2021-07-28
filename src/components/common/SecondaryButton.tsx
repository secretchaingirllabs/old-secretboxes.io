import clsx from 'clsx'
import { DetailedHTMLProps } from 'react'

// @ts-ignore
export interface ButtonProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
}
export const SecondaryButton: React.FC<ButtonProps> = ({
  className,
  type,
  children,
  size = 'md',
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
        'disabled:border-[#C8C7D0] disabled:text-[#DEDDE2] focus:outline-none focus:shadow-light-button-shadow flex items-center justify-center font-bold transition bg-white border rounded-lg hover:bg-primary-light border-gray-body text-gray-body',
        padding,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
