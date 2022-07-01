import { ChakraProvider } from '@chakra-ui/react'
import Home from '../pages/Home'

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  )
}

export default App
