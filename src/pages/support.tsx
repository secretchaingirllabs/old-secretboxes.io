import { RequestSubmittedModal } from '@/components/common/modals/RequestSubmittedModal'
import { PrimaryButton } from '@/components/common/PrimaryButton'
import { OperatingSystemDropdown } from '@/components/Pages/Support/OperatingSystemDropdown'
import { SupportCard } from '@/components/Pages/Support/SupportCard'
import { SupportHeader } from '@/components/Pages/Support/SupportHeader'
import { supportCards } from '@/config/supportCards'
import { useUI } from '@/hooks/useUI'

const Support = () => {
  const { openModal } = useUI()

  const onRequestTicketSubmit = () => {
    openModal('RequestSubmitted')
  }

  return (
    <>
      <RequestSubmittedModal />
      <div className="max-w-[1152px] mx-[auto] pt-12 px-3 md:px-0">
        <SupportHeader />
        <div className="flex flex-col mb-20 space-y-8">
          {supportCards.map((sc) => (
            <SupportCard key={sc.title} supportCard={sc} />
          ))}
        </div>
        <h1 className="text-6xl font-display mb-7 text-gray-label">Support Ticket</h1>
        <p className="mb-10">
          The best way to get support directly from SecretChainGirl Foundation! Open a
          support ticket to start
          <br />a conversation with us. This will help us in building our FAQ to assist
          future Secret Boxers!
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.persist()
            onRequestTicketSubmit()
          }}
        >
          <div className="mb-9">
            <label htmlFor="email">
              <span data-testid="email-label" className="block mb-2">
                Email Address
              </span>
              <input
                data-testid="email-field"
                type="email"
                className="w-full max-w-xs px-2 border-2 rounded-lg focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary"
                placeholder="wumpus@foo.com"
                // onChange={(e) => setValue('email', e.target.value)}
                required
              />
            </label>
          </div>
          <div className="flex mb-12 space-x-10">
            <OperatingSystemDropdown />
            <OperatingSystemDropdown />
          </div>
          <div className="mb-9">
            <label htmlFor="subject">
              <span data-testid="subject-label" className="block mb-2">
                Subject
              </span>
              <input
                data-testid="subject-field"
                type="text"
                className="w-full max-w-xs px-2 border-2 rounded-lg focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary"
                placeholder="How do..."
                // onChange={(e) => setValue('subject', e.target.value)}
                required
              />
            </label>
          </div>
          <div className="mb-8">
            <label htmlFor="name">
              <span data-testid="name-label" className="block mb-2 sr-only">
                Description
              </span>
              <textarea
                data-testid="description-field"
                className="h-[200px] w-[500px] max-w-lg p-4 rounded-none focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary"
                placeholder="I need help with getting my environment setup."
                // onChange={(e) => setValue('description', e.target.value)}
                required
              />
            </label>
          </div>
          <div className="mb-9">
            <label htmlFor="subject">
              <span data-testid="subject-label" className="block mb-1 text-sm">
                node version
              </span>
              <input
                data-testid="subject-field"
                type="text"
                className="w-full max-w-xs px-2 border-2 rounded-lg focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary"
                placeholder="/"
                // onChange={(e) => setValue('subject', e.target.value)}
                required
              />
            </label>
            <span className="block text-xs text-gray-body">
              Run the `node --version` command
            </span>
          </div>
          <div className="mb-9">
            <label htmlFor="subject">
              <span data-testid="subject-label" className="block mb-1 text-sm">
                npm version
              </span>
              <input
                data-testid="subject-field"
                type="text"
                className="w-full max-w-xs px-2 border-2 rounded-lg focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary"
                placeholder="/"
                // onChange={(e) => setValue('subject', e.target.value)}
                required
              />
            </label>
            <span className="block text-xs text-gray-body">
              Run the `node --version` command
            </span>
          </div>
          <PrimaryButton type="submit" className="w-full max-w-xs mb-7">
            Submit A Request
          </PrimaryButton>
        </form>
      </div>
    </>
  )
}

export default Support
