import { useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient } from 'react-query'

import { createList } from '../services'
import { PostList } from '../types'
import { USE_SPACE_KEY } from './use-space'

export const useMutationCreateList = () => {
  const queryClient = useQueryClient()
  const toast = useToast()

  return useMutation<unknown, unknown, PostList>(createList, {
    onSuccess() {
      queryClient.invalidateQueries(USE_SPACE_KEY)
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
