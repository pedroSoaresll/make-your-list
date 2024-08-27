import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest'

import { List } from '../../../infra'
import { deleteList, updateList } from '../../../infra/services'
import { renderWithProviders } from '../../../tests/helpers/render-with-providers'
import ModalModifyList from '.'

vi.mock('../../../infra/services/lists-api')

describe('modules - lists - Modify', () => {
  let list: List

  beforeEach(() => {
    list = {
      assigned: 'Jeho',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      id: 'list-id',
      spaceId: 'space-id',
      name: 'item name',
    }
  })

  test('should not render the Modal if list was not valid or passed', () => {
    renderWithProviders(
      <ModalModifyList isOpen onClose={() => {}} spaceId="" />
    )

    expect(screen.queryByText('Modificar lista')).not.toBeInTheDocument()
  })

  test('should render the Modal and check the input values', () => {
    renderWithProviders(
      <ModalModifyList
        isOpen
        onClose={() => {}}
        spaceId="space-id"
        list={list}
      />
    )

    expect(screen.getByText('Modificar lista')).toBeInTheDocument()
    expect(screen.getByLabelText('Nome:')).toHaveValue('item name')
    expect(screen.getByLabelText('Responsável:')).toHaveValue('Jeho')
    expect(screen.getByLabelText('Última atualização:')).toHaveValue(
      list.updatedAt
    )
    expect(screen.getByLabelText('Última atualização:')).toHaveProperty(
      'disabled',
      true
    )
    expect(screen.getByLabelText('Criado em:')).toHaveValue(list.createdAt)
    expect(screen.getByLabelText('Criado em:')).toHaveProperty('disabled', true)
  })

  test('should emit onClose event when click to close the modal', async () => {
    const onClose = vi.fn()

    renderWithProviders(
      <ModalModifyList
        isOpen
        onClose={onClose}
        spaceId="space-id"
        list={list}
      />
    )

    const [closeButton] = screen.getAllByRole('button')

    expect(closeButton).toHaveAttribute('aria-label', 'Close')

    await userEvent.click(closeButton)

    expect(onClose).toHaveBeenCalled()
  })

  test('should render empty value when list.assigned is null', () => {
    list.assigned = null

    renderWithProviders(
      <ModalModifyList
        isOpen
        onClose={() => {}}
        spaceId="space-id"
        list={list}
      />
    )

    expect(screen.getByLabelText('Responsável:')).toHaveValue('')
  })

  test('should trigger updateMutation when submit the formulary', async () => {
    const onClose = vi.fn()

    ;(updateList as Mock).mockImplementation(() => ({}))

    renderWithProviders(
      <ModalModifyList
        isOpen
        onClose={onClose}
        spaceId="space-id"
        list={list}
      />
    )

    await userEvent.click(screen.getByText('Salvar'))

    await waitFor(() => {
      expect(onClose).toHaveBeenCalled()
    })
  })

  test('should trigger deleteMutation when click on remove item', async () => {
    const onClose = vi.fn()

    ;(deleteList as Mock).mockImplementation(() => ({}))

    renderWithProviders(
      <ModalModifyList
        isOpen
        onClose={onClose}
        spaceId="space-id"
        list={list}
      />
    )

    await userEvent.click(screen.getByText('Remover'))

    await waitFor(() => {
      expect(onClose).toHaveBeenCalled()
    })
  })

  test('should show form error message when try to submit form without item name', async () => {
    list.name = ''

    renderWithProviders(
      <ModalModifyList
        isOpen
        onClose={() => {}}
        spaceId="space-id"
        list={list}
      />
    )

    await userEvent.click(screen.getByText('Salvar'))

    const errorMessage = await screen.findByText('O campo nome é obrigatório')
    expect(errorMessage).toBeInTheDocument()
  })
})
