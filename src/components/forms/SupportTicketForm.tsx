import { useState } from 'react'
import { PrimaryButton } from '../common/PrimaryButton'
import { OperatingSystemDropdown } from '../Pages/Support/OperatingSystemDropdown'

interface SupportTicketFormValues {
  email: string
  subject: string
  description: string
  nodeVersion: string
  npmVersion: string
}

export const SupportTicketForm: React.FC<{
  onSubmit: (values: SupportTicketFormValues) => void
}> = ({ onSubmit }) => {
  const [values, setValues] = useState<SupportTicketFormValues>({
    email: '',
    subject: '',
    description: '',
    nodeVersion: '',
    npmVersion: '',
  })

  const setValue = (field: keyof SupportTicketFormValues, value: any) => {
    setValues((p) => ({ ...p, [field]: value }))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.persist()
        onSubmit(values)
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
            onChange={(e) => setValue('email', e.target.value)}
            required
          />
        </label>
      </div>
      <OperatingSystemDropdown />
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
            onChange={(e) => setValue('subject', e.target.value)}
            required
          />
        </label>
      </div>
      <div className="mb-8">
        <label htmlFor="description">
          <span data-testid="description-label" className="block mb-2 sr-only">
            Description
          </span>
          <textarea
            id="description"
            data-testid="description-field"
            className="h-[200px] w-[500px] max-w-lg p-4 focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary border-2 rounded-sm border-2"
            placeholder="I need help with getting my environment setup."
            onChange={(e) => setValue('description', e.target.value)}
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
            id="subject"
            type="text"
            className="w-full max-w-xs px-2 mb-2 border-2 rounded-lg focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary"
            placeholder="/"
            onChange={(e) => setValue('subject', e.target.value)}
            required
          />
        </label>
        <span className="block ml-4 text-xs text-gray-body">
          Run the `node --version` command
        </span>
      </div>
      <div className="mb-9">
        <label htmlFor="npmVersion">
          <span data-testid="npmVersion-label" className="block mb-1 text-sm">
            npm version
          </span>
          <input
            id="npmVersion"
            data-testid="npmVersion-field"
            type="text"
            className="w-full max-w-xs px-2 mb-2 border-2 rounded-lg focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary"
            placeholder="/"
            onChange={(e) => setValue('npmVersion', e.target.value)}
            required
          />
        </label>
        <span className="block ml-4 text-xs text-gray-body">
          Run the `npm --version` command
        </span>
      </div>
      <PrimaryButton type="submit" className="w-full max-w-xs mb-7">
        Submit A Request
      </PrimaryButton>
    </form>
  )
}
