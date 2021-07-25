import { useState } from 'react'

export interface MailingListFormValues {
  name: string
  email: string
  agreeToRecieve?: boolean
}
export type SignUpResponse = 'failed' | 'success'
interface MailingListSignupProps {
  onSubmit: (values: MailingListFormValues) => Promise<SignUpResponse>
}
export const MailingListSignup: React.FC<MailingListSignupProps> = ({ onSubmit }) => {
  const [values, setValues] = useState<MailingListFormValues>({
    name: '',
    email: '',
    agreeToRecieve: false,
  })

  const setValue = (field: keyof MailingListFormValues, value: any) => {
    setValues((p) => ({ ...p, [field]: value }))
  }

  return (
    <div className="text-dark-text">
      <p className="mb-2 text-2xl font-semibold font-body">
        Sign up for the Mailing List
      </p>
      <p className="mb-10 text-sm">
        We don’t send these very often so you know if you get an
        <br />
        email from us, it’s gonna be good and it’s gonna be worth
        <br />
        reading!
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.persist()
          onSubmit(values)
        }}
      >
        <div className="mb-6">
          <label htmlFor="name">
            <span data-testid="name-label" className="block mb-3">
              Name
            </span>
            <input
              data-testid="name-field"
              type="text"
              className="max-w-md px-2 py-1 rounded-lg focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary"
              placeholder="Laura"
              onChange={(e) => setValue('name', e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="email">
            <span data-testid="email-label" className="block mb-3">
              Email
            </span>
            <input
              data-testid="email-field"
              type="email"
              className="max-w-md px-2 py-1 rounded-lg focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary"
              placeholder="joe@email.com"
              onChange={(e) => setValue('email', e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="space-x-3" htmlFor="IAgreeToRecieveCoolStuff">
            <input
              className="text-gray-body ring"
              type="checkbox"
              name="IAgreeToRecieveCoolStuff"
              id="IAgreeToRecieveCoolStuff"
              data-testid="i-agree"
              onChange={(e) => setValue('agreeToRecieve', e.target.checked)}
            />
            <span>I agree to receive cool stuff from the Secret Boxes Team!</span>
          </label>
        </div>
        <button
          type="submit"
          className="px-6 py-2 font-semibold text-white transition rounded-lg bg-gray-body hover:bg-gray-label"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}
