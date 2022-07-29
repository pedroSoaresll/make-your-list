import { useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient } from 'react-query'

import { deleteList } from '../services'
import { DeleteList } from '../types'
import { USE_LISTS_KEY } from './use-list'

export const useMutationDeleteList = () => {
  const queryClient = useQueryClient()
  const toast = useToast()

  return useMutation<unknown, unknown, DeleteList>(deleteList, {
    onSuccess() {
      queryClient.invalidateQueries(USE_LISTS_KEY)
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
