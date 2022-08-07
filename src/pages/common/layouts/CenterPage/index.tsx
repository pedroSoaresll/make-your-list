import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Text, useColorMode } from '@chakra-ui/react'

interface LayoutProps {
  children?: React.ReactNode
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

export const Layout: React.FC<LayoutProps> = ({ children }) => {
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
        <ToggleTheme />

        {children}
      </Flex>
    </Flex>
  )
}
