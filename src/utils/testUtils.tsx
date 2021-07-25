import { render as defaultRender } from '@testing-library/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { NextRouter } from 'next/router'
import { ReactNode } from 'react'

type DefaultParams = Parameters<typeof defaultRender>
type RenderUI = DefaultParams[0]
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> }

export const mockRouter: NextRouter = {
  basePath: '/',
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/',
  push: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
  reload: jest.fn(() => Promise.resolve(true)),
  prefetch: jest.fn(() => Promise.resolve()),
  back: jest.fn(() => Promise.resolve(true)),
  beforePopState: jest.fn(() => Promise.resolve(true)),
  isFallback: false,
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
}

export const Noop = ({ children }: { children: ReactNode }) => <>{children}</>
function customRender(ui: RenderUI, { wrapper, ...options }: RenderOptions = {}) {
  if (!wrapper) {
    // eslint-disable-next-line no-param-reassign
    wrapper = ({ children }) => (
      <RouterContext.Provider value={{ ...mockRouter }}>
        <>{children}</>
      </RouterContext.Provider>
    )
  }

  return defaultRender(ui, { wrapper, ...options })
}

export * from '@testing-library/react'
// override render method
export { customRender as render }
