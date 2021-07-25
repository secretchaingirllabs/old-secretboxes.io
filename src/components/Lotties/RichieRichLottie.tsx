import { FC, useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export const RichieRichLottie: FC<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = (props) => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      // @ts-ignore
      container: container.current,
      path: '/assets/lottieFiles/richieRich.json',
      speed: 1,
      loop: true,
      autoplay: true,
      name: 'richieRich',
    })
    return () => lottie.destroy('richieRich')
  }, [])

  return <div {...props} data-testid="richie-rich-lottie" ref={container} />
}
