import { RequestSubmittedModal } from '@/components/common/modals/RequestSubmittedModal'
import { SupportTicketForm } from '@/components/forms/SupportTicketForm'
import { MainLayout } from '@/components/Layouts/MainLayout'
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
    <MainLayout title="Support">
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
        {/* eslint-disable-next-line no-console */}
        <SupportTicketForm onSubmit={onRequestTicketSubmit} />
      </div>
    </MainLayout>
  )
}

export default Support
