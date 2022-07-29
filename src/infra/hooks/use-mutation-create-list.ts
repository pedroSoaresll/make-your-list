import { useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient } from 'react-query'

import { createList } from '../services'
import { PostList } from '../types'
import { USE_LISTS_KEY } from './use-list'

export const useMutationCreateList = () => {
  const queryClient = useQueryClient()
  const toast = useToast()

  return useMutation<unknown, unknown, PostList>(createList, {
    onSuccess() {
      queryClient.invalidateQueries(USE_LISTS_KEY)
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
