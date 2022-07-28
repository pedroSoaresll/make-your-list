import { render } from '@testing-library/react'

import { withProviders } from '../../app/helpers/with-providers'

export const renderWithProviders = (ui: React.ReactElement) => {
  return render(ui, {
    wrapper({ children }) {
      const WithProviders = withProviders(() => children)
      return <WithProviders />
    },
  })
}
