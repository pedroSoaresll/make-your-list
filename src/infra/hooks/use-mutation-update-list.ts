import { useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient } from 'react-query'

import { updateList } from '../services'
import { UpdateList } from '../types'
import { USE_SPACE_KEY } from './use-space'

export const useMutationUpdateList = () => {
  const queryClient = useQueryClient()
  const toast = useToast()

  return useMutation<unknown, unknown, UpdateList>(updateList, {
    onSuccess() {
      queryClient.invalidateQueries(USE_SPACE_KEY)
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
