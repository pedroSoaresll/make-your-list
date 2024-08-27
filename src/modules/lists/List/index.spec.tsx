import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test, vi } from 'vitest'

import { Space } from '../../../infra'
import { fetchSpace } from '../../../infra/services'
import { renderWithProviders } from '../../../tests/helpers/render-with-providers'
import { ListView } from '.'

vi.mock('../../../infra/services/lists-api')

describe('modules - gifts - <List />', () => {
  test('should render the loading state when request is loading and after show the empty state', async () => {
    ;(fetchSpace as jest.Mock).mockImplementation(() => ({}))

    renderWithProviders(<ListView spaceId={spaceMocked.id} />)

    expect(screen.getByTestId('list-loading-state')).toBeInTheDocument()

    await screen.findByText('Nenhum presente cadastrado.')
  })

  test('should render the error state when request fail', async () => {
    ;(fetchSpace as jest.Mock).mockImplementation(() => Promise.reject())

    renderWithProviders(<ListView spaceId={spaceMocked.id} />)

    const errorMessage = await screen.findByText(
      'Algo de errado não esta certo :/'
    )

    expect(errorMessage).toBeInTheDocument()
  })

  test('should render the list if data is received from request', async () => {
    ;(fetchSpace as jest.Mock).mockImplementation(() => ({
      data: spaceMocked,
    }))

    renderWithProviders(<ListView spaceId={spaceMocked.id} />)

    const item1Element = await screen.findByText('Item #1')
    const itemAssigned = await screen.findByText('Mr. Drone')

    expect(item1Element).toBeInTheDocument()
    expect(itemAssigned).toBeInTheDocument()
  })

  test.only('should open modal to modify the item when click on an item from list without an assigner', async () => {
    ;(fetchSpace as jest.Mock).mockImplementation(() => ({
      data: spaceMocked,
    }))

    renderWithProviders(<ListView spaceId={spaceMocked.id} />)

    const listItem = await screen.findByRole('button', { name: 'Item #1' })

    await userEvent.click(listItem)

    await waitFor(() => {
      expect(screen.queryByLabelText('Nome:')).toHaveValue('Item #1')
    })
  })

  test('should open modal to modify the item when click on an item from list with an assigner', async () => {
    ;(fetchSpace as jest.Mock).mockImplementation(() => ({
      data: spaceMocked,
    }))

    renderWithProviders(<ListView spaceId={spaceMocked.id} />)

    const listItem = await screen.findByText('Mr. Drone')
    await userEvent.click(listItem)

    expect(screen.getByLabelText('Responsável:')).toHaveValue('Mr. Drone')
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
