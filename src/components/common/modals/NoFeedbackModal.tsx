import { FC } from 'react'
import { PrimaryButton } from '../PrimaryButton'
import { SecondaryButton } from '../SecondaryButton'
import { Modal } from './Modal'

export const NoFeedbackModal: FC<{
  onSkip?: () => void
  onSeeTutorial?: () => void
}> = () => {
  return (
    <Modal modalView="NoFeedback">
      <div className="flex flex-col p-8 text-black bg-primary w-[700px] rounded-lg">
        <h1 className="mb-2 text-5xl tracking-wide text-left font-display">
          We are Sorry!
        </h1>
        <p className="text-left">Please let us know how we can improve.</p>
        <textarea
          id="description"
          data-testid="description-field"
          className="h-[100px] w-[500px] my-4 max-w-lg p-4 focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary border-2 rounded-sm border-2"
          placeholder="Write a comment"
          required
        />
        <div className="flex space-x-2">
          <PrimaryButton>Send</PrimaryButton>
          <SecondaryButton>Skip For Now</SecondaryButton>
        </div>
      </div>
    </Modal>
  )
}
