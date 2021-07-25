import { mockRouter, render } from '@/utils/testUtils'
import userEvent from '@testing-library/user-event'
import { MainLayout } from '.'

describe('MainLayout', () => {
  it('should go to homepage when logo is clicked', () => {
    const { getByTestId } = render(<MainLayout />)

    userEvent.click(getByTestId('logo'))

    expect(mockRouter.push).toHaveBeenCalledWith('/', '/', {
      locale: undefined,
      scroll: true,
      shallow: undefined,
    })
  })
  it('should display all navigation links', () => {
    const { getByTestId } = render(<MainLayout />)

    expect(getByTestId('Docs-link')).toBeVisible()
    expect(getByTestId('Updates-link')).toBeVisible()
    expect(getByTestId('Tutorials-link')).toBeVisible()
    expect(getByTestId('Support-link')).toBeVisible()
  })

  it('should click navigation links and be redirected to its url', () => {
    const { getByTestId } = render(<MainLayout />)

    userEvent.click(getByTestId('Docs-link'))
    expect(mockRouter.push).toHaveBeenCalledWith('/docs', '/docs', {
      locale: undefined,
      scroll: true,
      shallow: undefined,
    })
    userEvent.click(getByTestId('Updates-link'))
    expect(mockRouter.push).toHaveBeenCalledWith('/docs', '/docs', {
      locale: undefined,
      scroll: true,
      shallow: undefined,
    })
    userEvent.click(getByTestId('Tutorials-link'))
    expect(mockRouter.push).toHaveBeenCalledWith('/docs', '/docs', {
      locale: undefined,
      scroll: true,
      shallow: undefined,
    })
    userEvent.click(getByTestId('Support-link'))
    expect(mockRouter.push).toHaveBeenCalledWith('/docs', '/docs', {
      locale: undefined,
      scroll: true,
      shallow: undefined,
    })
  })
  it('should display all social links', () => {
    const { getAllByTestId } = render(<MainLayout />)
    // top and bottom social links
    expect(getAllByTestId('Github-social')).toHaveLength(2)
    expect(getAllByTestId('Telegram-social')).toHaveLength(2)
    expect(getAllByTestId('Discord-social')).toHaveLength(2)
    expect(getAllByTestId('Twitter-social')).toHaveLength(2)
    expect(getAllByTestId('Youtube-social')).toHaveLength(2)
  })
  it('should toggle the boxes dropdown', () => {
    const { getByTestId, getByText } = render(<MainLayout />)

    userEvent.click(getByTestId('boxes-dropdown-trigger'))

    expect(getByTestId('dropdown-content')).toBeVisible()
    expect(getByText('Secret Counter')).toBeVisible()
    expect(getByText('Figment Learn')).toBeVisible()
    expect(getByText('Richie Rich')).toBeVisible()
  })
})
