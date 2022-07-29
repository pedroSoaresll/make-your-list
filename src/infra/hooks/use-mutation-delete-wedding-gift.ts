import { useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient } from 'react-query'

import { deleteWeddingGifts } from '../services'
import { DeleteGift } from '../types'
import { USE_WEDDING_GIFTS_KEY } from './use-wedding-gifts'

export const useMutationDeleteWeddingGift = () => {
  const queryClient = useQueryClient()
  const toast = useToast()

  return useMutation<unknown, unknown, DeleteGift>(deleteWeddingGifts, {
    onSuccess() {
      queryClient.invalidateQueries(USE_WEDDING_GIFTS_KEY)
    },
    onError() {
      toast({
        status: 'error',
        title: 'Falha',
        description: `Não foi possível remover o item da lista no momento.`,
      })
    },
  })
}
