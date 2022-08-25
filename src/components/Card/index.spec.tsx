import { Text } from '@chakra-ui/react'
import { screen } from '@testing-library/react'

import { renderWithProviders } from '../../tests/helpers/render-with-providers'
import { Card } from '.'

describe('components - Card', () => {
  test('should render children correctly', () => {
    const text = 'Hello World'

    renderWithProviders(
      <Card>
        <Text>{text}</Text>
      </Card>
    )

    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
