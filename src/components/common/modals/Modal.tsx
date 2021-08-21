import { ModalViews, useUI } from '@/hooks/useUI'
import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'

export const Modal: FC<{
  onConfirm?: () => void
  onSeeTutorial?: () => void
  modalView: ModalViews
}> = ({ children, modalView: mv }) => {
  const { displayModal, modalView, closeModal } = useUI()

  return (
    <Transition appear show={displayModal && modalView === mv} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              style={{ backdropFilter: 'blur(3px)' }}
              className="fixed inset-0 bg-[#646464] bg-opacity-75"
            />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true" />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-flex flex-col overflow-hidden text-center align-middle transition-all transform">
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
