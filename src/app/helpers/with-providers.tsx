import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import theme from '../libraries/chakra-theme'

const client = new QueryClient()

export const withProviders = <T = unknown,>(
  Component: React.ComponentType<T>
) => {
  return (props: T) => (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <Component {...props} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
