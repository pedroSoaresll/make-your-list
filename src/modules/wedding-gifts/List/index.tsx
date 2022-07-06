import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Divider,
  Flex,
  List,
  ListItem,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react'

import { useWeddingGifts } from '../../common/hooks'
import { WeddingGiftListItemProps } from './types'

const LoadingState = () => {
  return (
    <Stack spacing="8">
      <Stack spacing="6">
        <Skeleton height="24px" />
        <Skeleton height="24px" />
        <Skeleton height="24px" />
        <Skeleton height="24px" />
      </Stack>
    </Stack>
  )
}

const ErrorState = () => {
  return (
    <Flex>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Algo de errado não esta certo :/</AlertTitle>
        <AlertDescription>
          Por agora não foi possível carregar a lista de presentes. Tente
          novamente daqui a pouco.
        </AlertDescription>
      </Alert>
    </Flex>
  )
}

const WeddingGiftListItem: React.FC<WeddingGiftListItemProps> = ({
  weddingGift,
}) => {
  if (weddingGift.assigned)
    return (
      <ListItem>
        <Flex columnGap="8px" flexWrap="wrap">
          <Button variant="link" colorScheme="twitter">
            {weddingGift.assigned}
          </Button>
          <Text colorScheme="blackAlpha">-</Text>
          <Text colorScheme="blackAlpha" textDecoration="line-through">
            {weddingGift.name}
          </Text>
        </Flex>
      </ListItem>
    )

  return (
    <ListItem>
      <Button variant="link" colorScheme="twitter">
        {weddingGift.name}
      </Button>
    </ListItem>
  )
}

export const ListWeddingGifts = () => {
  const { isLoading, isError, data } = useWeddingGifts()

  if (isLoading) return <LoadingState />

  if (isError) return <ErrorState />

  return (
    <Stack>
      <List>
        <Stack spacing="4" divider={<Divider />}>
          {data?.data.map((weddingGift) => (
            <WeddingGiftListItem
              key={weddingGift.id}
              weddingGift={weddingGift}
            />
          ))}
        </Stack>
      </List>
    </Stack>
  )
}
