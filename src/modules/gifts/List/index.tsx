import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Flex,
  List,
  ListItem,
  Skeleton,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { Suspense, useCallback, useState } from 'react'

import { useWeddingGifts } from '../../common/hooks'
import { WeddingGift } from '../../common/types'
import { WeddingGiftListItemProps } from './types'

const ModalModifyWeddingGift = React.lazy(() => import('../Modify'))

export const ListWeddingGifts = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { isLoading, isError, data } = useWeddingGifts()
  const [weddingGiftToModify, setWeddingGiftToModify] = useState<WeddingGift>()

  const handleOnModifyItem = (weddingGift: WeddingGift) => {
    setWeddingGiftToModify(weddingGift)
    onOpen()
  }

  const handleOnCloseModal = useCallback(() => {
    onClose()
    setWeddingGiftToModify(undefined)
  }, [onClose])

  if (isLoading) return <LoadingState />

  if (isError) return <ErrorState />

  if (!data?.data.length)
    return (
      <Alert status="warning">
        <AlertIcon />
        <AlertTitle>Nenhum presente cadastrado.</AlertTitle>
        <AlertDescription>Os novos presentes aparecerão aqui.</AlertDescription>
      </Alert>
    )

  return (
    <>
      <Stack>
        <List spacing="8">
          {data?.data.map((weddingGift) => (
            <WeddingGiftListItem
              key={weddingGift.id}
              weddingGift={weddingGift}
              onModifyItem={handleOnModifyItem}
            />
          ))}
        </List>
      </Stack>

      {isOpen && (
        <Suspense fallback="Carregando...">
          <ModalModifyWeddingGift
            isOpen={isOpen}
            onClose={handleOnCloseModal}
            weddingGift={weddingGiftToModify}
          />
        </Suspense>
      )}
    </>
  )
}

const LoadingState = () => {
  return (
    <Stack spacing="8" data-testid="list-loading-state">
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
    <Flex data-testid="list-error-state">
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
  onModifyItem,
}) => {
  if (weddingGift.assigned)
    return (
      <ListItem>
        <Flex columnGap="8px" flexWrap="wrap">
          <Button
            onClick={() => onModifyItem(weddingGift)}
            variant="link"
            colorScheme="twitter"
          >
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
      <Button
        variant="link"
        colorScheme="twitter"
        onClick={() => onModifyItem(weddingGift)}
      >
        {weddingGift.name}
      </Button>
    </ListItem>
  )
}
