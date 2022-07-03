import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

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
        {colorMode === 'light' ? (
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

  return (
    <Layout>
      <ToggleTheme />

      <Grid
        rowGap="10"
        bg={bg}
        padding="16px 24px"
        borderRadius="xl"
        width="100%"
      >
        <Heading colorScheme="blackAlpha">Presentes de casamento</Heading>

        <ListWeddingGifts />
      </Grid>
    </Layout>
  )
}

export default Home
