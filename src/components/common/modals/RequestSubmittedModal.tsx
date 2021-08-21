import { Dialog } from '@headlessui/react'
import { FC } from 'react'
import { PrimaryButton } from '../PrimaryButton'
import { SecondaryButton } from '../SecondaryButton'
import { Modal } from './Modal'

export const RequestSubmittedModal: FC<{
  onSkip?: () => void
  onSeeTutorial?: () => void
}> = () => {
  return (
    <Modal modalView="RequestSubmitted">
      <div className="inline-flex flex-col p-6 px-32 py-24 my-8 overflow-hidden text-center align-middle transition-all transform bg-primary">
        <Dialog.Title as="h3" className="text-5xl leading-6 tracking-wide font-display">
          Request Submitted
        </Dialog.Title>
        <button type="button" className="absolute top-3 right-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6L18.7742 18.7742"
              stroke="#14142B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 18.7734L18.7742 5.99924"
              stroke="#14142B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="mt-6">
          <p className="text-sm tracking-tighter text-gray-500">
            We have some tutorials that might help if
            <br />
            you’de like to check them out?
          </p>
        </div>
        <div className="flex mx-auto mt-8 space-x-2">
          <PrimaryButton>
            See Tutorial
            <div className="transition-all opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:ml-2">
              <svg
                className="hidden group-hover:block"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.167 7.81718L3.16699 7.81718"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.13379 3.80089L13.1671 7.81689L9.13379 11.8336"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </PrimaryButton>
          <SecondaryButton>Skip</SecondaryButton>
        </div>
      </div>
    </Modal>
  )
}
