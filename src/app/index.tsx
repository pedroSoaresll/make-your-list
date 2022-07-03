import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Home from '../pages/Home'

const client = new QueryClient()

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={client}>
        <Home />

        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
