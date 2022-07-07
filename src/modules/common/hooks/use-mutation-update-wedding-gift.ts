import { useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient } from 'react-query'

import { updateWeddingGifts } from '../services'
import { UpdateGift } from '../types'
import { USE_WEDDING_GIFTS_KEY } from './use-wedding-gifts'

export const useMutationUpdateWeddingGift = () => {
  const queryClient = useQueryClient()
  const toast = useToast()

  return useMutation<unknown, unknown, UpdateGift>(updateWeddingGifts, {
    onSuccess() {
      queryClient.invalidateQueries(USE_WEDDING_GIFTS_KEY)
    },
    onError() {
      toast({
        status: 'error',
        title: 'Falha',
        description: 'Não foi possível atualizar este item no momento.',
      })
    },
  })
}
