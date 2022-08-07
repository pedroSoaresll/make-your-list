import { screen } from '@testing-library/react'

import { Space, useSpace } from '../../../infra'
import { renderWithProviders } from '../../../tests/helpers/render-with-providers'
import { ListView } from '.'

jest.mock('../../../infra')

describe('modules - gifts - <List />', () => {
  test('should render the loading state when request is loading', () => {
    ;(useSpace as jest.Mock).mockImplementation(() => ({
      isLoading: true,
    }))

    renderWithProviders(<ListView spaceId={spaceMocked.id} />)

    expect(screen.getByTestId('list-loading-state')).toBeInTheDocument()
  })

  test('should render the error state when request fail', () => {
    ;(useSpace as jest.Mock).mockImplementation(() => ({
      isError: true,
    }))

    renderWithProviders(<ListView spaceId={spaceMocked.id} />)

    expect(screen.getByTestId('list-error-state')).toBeInTheDocument()
  })

  test('should render the list if data is received from request', async () => {
    ;(useSpace as jest.Mock).mockImplementation(() => ({
      data: { data: spaceMocked },
    }))

    renderWithProviders(<ListView spaceId={spaceMocked.id} />)

    const item1Element = await screen.findByText('Item #1')
    const itemAssigned = await screen.findByText('Mr. Drone')

    expect(item1Element).toBeInTheDocument()
    expect(itemAssigned).toBeInTheDocument()
  })
})

const spaceMocked: Space = {
  id: 'd5babc3d-9e90-4770-aa10-8e04be75e369',
  name: 'Space name',
  lists: [
    {
      id: 'e322fb88-1e91-4322-aa2a-8df87d225673',
      spaceId: 'd5babc3d-9e90-4770-aa10-8e04be75e369',
      assigned: null,
      name: 'Item #1',
      createdAt: '2022-07-01T14:32:00',
      updatedAt: '2022-07-01T16:40:00',
    },
    {
      id: '89a8d729-fb2c-4d96-854c-db49d8f7dca8',
      spaceId: 'd5babc3d-9e90-4770-aa10-8e04be75e369',
      assigned: null,
      name: 'Item #2',
      createdAt: '2022-07-01T14:32:00',
      updatedAt: '2022-07-01T16:40:00',
    },
    {
      id: '9f50d004-be35-4db8-81f2-ddc55ff1cd2d',
      spaceId: 'd5babc3d-9e90-4770-aa10-8e04be75e369',
      assigned: 'Mr. Drone',
      name: 'Item #3',
      createdAt: '2022-07-01T14:32:00',
      updatedAt: '2022-07-01T16:40:00',
    },
    {
      id: '7e8ac12d-390b-4a16-aa76-d67d974f593a',
      spaceId: 'd5babc3d-9e90-4770-aa10-8e04be75e369',
      assigned: null,
      name: 'Item #4',
      createdAt: '2022-07-01T14:32:00',
      updatedAt: '2022-07-01T16:40:00',
    },
  ],
}
