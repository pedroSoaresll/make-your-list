import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, Mock, test, vi } from 'vitest'

import { useMutationCreateList } from '../../../infra/hooks/use-mutation-create-list'
import { renderWithProviders } from '../../../tests/helpers/render-with-providers'
import { Add } from '.'

vi.mock('../../../infra/hooks/use-mutation-create-list')

describe(`<Add />`, () => {
  test('should do not allow submit button when form is invalid', async () => {
    const spaceId = '44572e78-aeac-49f4-b74a-c918e40ebbaf'
    const mutateFn = vi.fn()

    ;(useMutationCreateList as Mock).mockImplementation(() => ({
      mutate: mutateFn,
    }))

    renderWithProviders(<Add spaceId={spaceId} />)

    // open modal
    await userEvent.click(
      screen.getByRole('button', { name: 'Adicionar presente' })
    )

    // click into submit button
    await userEvent.click(screen.getByRole('button', { name: 'Adicionar' }))

    expect(mutateFn).not.toHaveBeenCalled()
    expect(screen.getByText('Preencha o nome.')).toBeInTheDocument()
  })

  test('should submit the form', async () => {
    const spaceId = '44572e78-aeac-49f4-b74a-c918e40ebbaf'
    const itemName = 'Novo item'
    const mutateFn = vi.fn()

    ;(useMutationCreateList as Mock).mockImplementation(() => ({
      mutate: mutateFn,
    }))

    renderWithProviders(<Add spaceId={spaceId} />)

    // open modal
    await userEvent.click(
      screen.getByRole('button', { name: 'Adicionar presente' })
    )

    // write into input
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Nome:' }),
      itemName
    )

    // click into submit button
    await userEvent.click(screen.getByRole('button', { name: 'Adicionar' }))

    expect(mutateFn).toHaveBeenCalledTimes(1)
    expect(mutateFn).toHaveBeenCalledWith({ spaceId, name: itemName })
  })
})
