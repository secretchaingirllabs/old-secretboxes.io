import { FC, useEffect, useRef, useState } from 'react'
import lottie from 'lottie-web'

export const RichieRichLottie: FC<
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
      path: '/assets/lottieFiles/richieRich.json',
      speed: 1,
      loop: true,
      autoplay: false,
      name: 'richieRich',
    })
    return () => lottie.destroy('richieRich')
  }, [])

  useEffect(() => {
    if (hovered) lottie.play('richieRich')
    if (!hovered) lottie.stop('richieRich')
  }, [hovered])

  return (
    // eslint-disable-next-line
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid="richie-rich-lottie"
      ref={container}
      {...props}
    />
  )
}
