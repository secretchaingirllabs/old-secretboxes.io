import { RichieRichLottie } from '@/components/Lotties/RichieRichLottie'
import clsx from 'clsx'
import { useState } from 'react'

export const RichieRichBox = () => {
  const [open, setOpen] = useState(false)

  return (
    // eslint-disable-next-line
    <div
      onClick={() => setOpen((p) => !p)}
      className="flex items-center space-x-4 cursor-pointer focus:outline-none"
    >
      <RichieRichLottie style={{ width: '264px', height: '186px' }} />
      <div>
        <div className="flex items-center mb-4 space-x-4">
          <h4 className="text-5xl font-display">Richie Rich</h4>
          <button
            type="button"
            className="px-2 py-1 bg-white border rounded-lg border-gray-body text-gray-body"
          >
            Coming Soon
          </button>
        </div>
        <div
          className={clsx(open ? 'h-[120px]' : 'h-0', 'overflow-hidden transition-all')}
        >
          <p className="mb-6 text-sm tracking-tight text-left">
            The secret box based on Yao’s Millionaires’ Problem.
            <br />
            Subscribe to get notified.
          </p>
          <div className="flex space-x-4">
            <button
              type="button"
              className="px-6 py-2 font-semibold text-white transition-colors rounded-lg bg-gray-body hover:bg-gray-label"
            >
              Subscribe
            </button>
            <button
              type="button"
              className="px-6 py-2 font-bold bg-white border rounded-lg border-gray-body text-gray-body"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
