import { FC, useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export const AlienWithBoxesLottie: FC<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = (props) => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      // @ts-ignore
      container: container.current,
      path: '/assets/lottieFiles/alienWithBoxes.json',
      speed: 1,
      loop: true,
      autoplay: true,
      name: 'alientWithBoxes',
    })
    return () => lottie.destroy('alientWithBoxes')
  }, [])

  return <div {...props} data-testid="alien-with-boxes-lottie" ref={container} />
}
