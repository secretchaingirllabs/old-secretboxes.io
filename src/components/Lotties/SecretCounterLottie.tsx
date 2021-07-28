import { FC, useEffect, useRef, useState } from 'react'
import lottie from 'lottie-web'

export const SecretCounterLottie: FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    width?: string
    height?: string
  }
> = ({ width, height, ...props }) => {
  const container = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    lottie.loadAnimation({
      // @ts-ignore
      container: container.current,
      path: '/assets/lottieFiles/secretCounter.json',
      speed: 1,
      autoplay: false,
      loop: false,
      name: 'secretCounter',
    })

    return () => lottie.destroy('secretCounter')
  }, [])

  useEffect(() => {
    if (hovered) lottie.play('secretCounter')
    if (!hovered) lottie.stop('secretCounter')
  }, [hovered])

  return (
    // eslint-disable-next-line
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid="secret-counter-lottie"
      ref={container}
      {...props}
    />
  )
}
