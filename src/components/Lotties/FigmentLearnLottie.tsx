import { FC, useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export const FigmentLearnLottie: FC<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = (props) => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      // @ts-ignore
      container: container.current,
      path: '/assets/lottieFiles/figmentLearn.json',
      speed: 1,
      loop: true,
      autoplay: true,
      name: 'figmentLearn',
    })

    return () => lottie.destroy('figmentLearn')
  }, [])

  return <div {...props} data-testid="figment-learn-lottie" ref={container} />
}
