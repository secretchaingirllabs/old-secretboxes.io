import { FigmentLearnLottie } from '@/components/Lotties/FigmentLearnLottie'
import clsx from 'clsx'
import { useState } from 'react'

export const FigmentLearnBox = () => {
  const [open, setOpen] = useState(false)

  return (
    // eslint-disable-next-line
    <div
      onClick={() => setOpen((p) => !p)}
      className="flex items-center space-x-4 cursor-pointer focus:outline-none"
    >
      <FigmentLearnLottie style={{ width: '264px', height: '186px' }} />
      <div>
        <div className="flex items-center mb-4 space-x-4">
          <h4 className="text-5xl font-display">Figment Learn</h4>
          <button
            type="button"
            className="px-2 py-1 bg-white border rounded-lg border-gray-body text-gray-body"
          >
            New
          </button>
        </div>
        <div
          className={clsx(open ? 'h-[120px]' : 'h-0', 'overflow-hidden transition-all')}
        >
          <p className="mb-4 text-sm tracking-tight text-left">
            The learn pathway for devs using Figment’s DataHub
            <br />
            gateway to access the Secret Network and deploy
            <br />
            secret contracts.
          </p>
          <div className="flex space-x-4">
            <button
              type="button"
              className="px-6 py-2 font-semibold text-white transition-colors rounded-lg bg-gray-body hover:bg-gray-label"
            >
              Let&apos;s Go!
            </button>
            <button
              type="button"
              className="px-6 py-2 font-bold bg-white border rounded-lg border-gray-body text-gray-body"
            >
              Docs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
