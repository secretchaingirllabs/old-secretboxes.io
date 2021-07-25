import { render, screen } from '@/utils/testUtils'

describe.skip('Homepage', () => {
  it('should be able to find the hello text', () => {
    const { queryByText } = screen
    render(<div>Hello</div>)
    expect(queryByText('Hello')).toBeInTheDocument()
  })
})
