import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { PrimaryButton } from '../common/PrimaryButton'

export interface MailingListFormValues {
  name: string
  email: string
  agreeToRecieve?: boolean
}
export type SignUpResponse = 'failed' | 'success'
interface MailingListSignupProps {
  onSubmit: (values: MailingListFormValues) => Promise<SignUpResponse>
}
const mailingListSchema: yup.SchemaOf<MailingListFormValues> = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Must be a valid email'),
  agreeToRecieve: yup.boolean(),
})

export const MailingListSignup: React.FC<MailingListSignupProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailingListFormValues>({
    resolver: yupResolver(mailingListSchema),
  })

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative mb-6">
          <label htmlFor="name">
            <span
              data-testid="name-label"
              className={clsx(errors.name?.message && 'text-error', 'block mb-2')}
            >
              Name
            </span>
            <input
              data-testid="name-field"
              type="text"
              className={clsx(
                errors.name?.message && 'border-2 border-error',
                'max-w-md px-2 py-1 rounded-lg focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary'
              )}
              placeholder="Laura"
              {...register('name')}
            />
            {errors.name?.message && (
              <p className="absolute pl-4 text-sm -bottom-5 text-error">
                {errors.name?.message}
              </p>
            )}
          </label>
        </div>
        <div className="relative mb-5">
          <label htmlFor="email">
            <span
              data-testid="email-label"
              className={clsx(errors.name?.message && 'text-error', 'block mb-2')}
            >
              Email
            </span>
            <input
              data-testid="email-field"
              type="email"
              className={clsx(
                errors.email?.message && 'border-2 border-error',
                'max-w-md px-2 py-1 rounded-lg focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary'
              )}
              placeholder="joe@email.com"
              {...register('email')}
            />
          </label>
          {errors.email?.message && (
            <p className="absolute pl-4 text-sm -bottom-5 text-error">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="space-x-3" htmlFor="IAgreeToRecieveCoolStuff">
            <input
              className="border-2 text-gray-body focus:ring-2 focus:ring-white/80 focus:border-primary focus:ring-offset-1 focus:ring-offset-primary"
              type="checkbox"
              id="IAgreeToRecieveCoolStuff"
              data-testid="i-agree"
              {...register('agreeToRecieve')}
            />
            <span>I agree to receive cool stuff from the Secret Boxes Team!</span>
          </label>
        </div>
        <PrimaryButton type="submit">Subscribe</PrimaryButton>
      </form>
    </div>
  )
}
