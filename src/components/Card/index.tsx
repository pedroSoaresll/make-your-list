import { Stack, useColorModeValue } from '@chakra-ui/react'

export const Card: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const bg = useColorModeValue('gray.50', 'blackAlpha.200')

  return (
    <Stack
      spacing="8"
      bg={bg}
      paddingY="8"
      paddingX="6"
      borderRadius="xl"
      width="100%"
    >
      {children}
    </Stack>
  )
}
