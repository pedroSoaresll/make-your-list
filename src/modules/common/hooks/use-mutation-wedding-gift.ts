import { useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient } from 'react-query'

import { createWeddingGifts } from '../services'
import { PostGift } from '../types'
import { USE_WEDDING_GIFTS_KEY } from './use-wedding-gifts'

export const useMutationWeddingGift = () => {
  const queryClient = useQueryClient()
  const toast = useToast()
  return useMutation<unknown, unknown, PostGift>(createWeddingGifts, {
    onSuccess() {
      queryClient.invalidateQueries(USE_WEDDING_GIFTS_KEY)
    },
    onError(_, variables) {
      toast({
        status: 'error',
        title: 'Falha',
        description: `Não foi possível adicionar o item: ${variables.name}`,
      })
    },
  })
}
