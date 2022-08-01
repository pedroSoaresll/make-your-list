import { useToast } from '@chakra-ui/react'
import { useMutation } from 'react-query'

import { createSpace } from '../services'
import { CreateSpace } from '../types'

export const useMutationCreateSpace = () => {
  const toast = useToast()

  return useMutation<unknown, unknown, CreateSpace>(createSpace, {
    onError() {
      toast({
        status: 'error',
        title: 'Falha',
        description: `Não foi possível remover o item da lista no momento.`,
      })
    },
  })
}
