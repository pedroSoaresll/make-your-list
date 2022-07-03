import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Home from '../pages/Home'
import theme from './libraries/chakra-theme'

const client = new QueryClient()

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <Home />

        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
