import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { useIsFetching } from 'react-query'

import { USE_WEDDING_GIFTS_KEY } from '../../modules/common/hooks'
import { Add } from '../../modules/wedding-gifts/Add'
import { ListWeddingGifts } from '../../modules/wedding-gifts/List'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex minHeight="100vh" justifyContent="center">
      <Flex
        width="100%"
        maxWidth="500px"
        justifyContent="center"
        alignItems="center"
        marginY="16"
        flexDirection="column"
        padding="2"
      >
        {children}
      </Flex>
    </Flex>
  )
}

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box mb="3" alignSelf="flex-end">
      <Button onClick={toggleColorMode} size="xs">
        {colorMode !== 'light' ? (
          <Flex columnGap="2">
            <MoonIcon />
            <Text>Escuro</Text>
          </Flex>
        ) : (
          <Flex columnGap="2">
            <SunIcon />
            <Text>Claro</Text>
          </Flex>
        )}
      </Button>
    </Box>
  )
}

const Home = () => {
  const bg = useColorModeValue('gray.50', 'blackAlpha.200')
  const isFetching = useIsFetching([USE_WEDDING_GIFTS_KEY])

  return (
    <Layout>
      <ToggleTheme />

      <Stack
        spacing="8"
        bg={bg}
        paddingY="8"
        paddingX="6"
        borderRadius="xl"
        width="100%"
      >
        <Heading colorScheme="blackAlpha">Lista de presentes</Heading>
        <ListWeddingGifts />

        <Stack direction="row" justifyContent="space-between">
          {isFetching ? <Spinner /> : <div></div>}

          <Add />
        </Stack>
      </Stack>
    </Layout>
  )
}

export default Home
