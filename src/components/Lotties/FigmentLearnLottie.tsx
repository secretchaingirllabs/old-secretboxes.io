import { FC, useEffect, useRef, useState } from 'react'
import lottie from 'lottie-web'

export const FigmentLearnLottie: FC<
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
      path: '/assets/lottieFiles/figmentLearn.json',
      speed: 1,
      loop: true,
      autoplay: false,
      name: 'figmentLearn',
    })
    return () => lottie.destroy('figmentLearn')
  }, [])

  useEffect(() => {
    if (hovered) lottie.play('figmentLearn')
    if (!hovered) lottie.stop('figmentLearn')
  }, [hovered])

  return (
    // eslint-disable-next-line
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid="figment-learn-lottie"
      ref={container}
      {...props}
    />
  )
}
