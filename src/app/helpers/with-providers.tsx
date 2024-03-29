import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import theme from '../libraries/chakra-theme'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: process.env.NODE_ENV !== 'test',
    },
  },
})

export const withProviders = (Component: React.ComponentType) => {
  return (props: any) => (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <Component {...props} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
