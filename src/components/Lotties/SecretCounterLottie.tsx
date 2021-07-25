import { FC, useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export const SecretCounterLottie: FC<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = (props) => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      // @ts-ignore
      container: container.current,
      path: '/assets/lottieFiles/secretCounter.json',
      speed: 1,
      loop: true,
      autoplay: true,
      name: 'secretCounter',
    })

    return () => lottie.destroy('secretCounter')
  }, [])

  return <div {...props} data-testid="secret-counter-lottie" ref={container} />
}
