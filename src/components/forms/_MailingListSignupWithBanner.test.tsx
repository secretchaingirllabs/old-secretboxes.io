import { render } from '@/utils/testUtils'
import userEvent from '@testing-library/user-event'
import { MailingListSignup } from './MailingListSignup'

describe.skip('MailingListSignup', () => {
  let expectedOnSubmit: jest.Mock
  beforeEach(() => {
    expectedOnSubmit = jest.fn()
  })

  it('should display email, name, and checkbox labels and fields', () => {
    const { getByTestId } = render(<MailingListSignup onSubmit={expectedOnSubmit} />)

    expect(getByTestId('name-label')).toHaveTextContent('Name')
    expect(getByTestId('email-label')).toHaveTextContent('Email')
    expect(getByTestId('name-field')).toBeVisible()
    expect(getByTestId('email-field')).toBeVisible()
  })

  it('should be able to fill up the fields and submit', () => {
    const { getByTestId, getByText } = render(
      <MailingListSignup onSubmit={expectedOnSubmit} />
    )
    userEvent.type(getByTestId('name-field'), 'Hello Word')
    userEvent.type(getByTestId('email-field'), 'hello@world.com')
    userEvent.click(getByText('Subscribe'))

    expect(expectedOnSubmit).toHaveBeenCalledWith({
      agreeToRecieve: false,
      email: 'hello@world.com',
      name: 'Hello Word',
    })

    userEvent.click(getByTestId('i-agree'))
    userEvent.click(getByText('Subscribe'))

    expect(expectedOnSubmit).toHaveBeenCalledWith({
      agreeToRecieve: true,
      email: 'hello@world.com',
      name: 'Hello Word',
    })
  })
})
