import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'

import { useWeddingGifts } from '../../common/hooks'
import { WeddingGift } from '../../common/types'
import { ModalModifyWeddingGiftProps, WeddingGiftListItemProps } from './types'

export const ListWeddingGifts = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { isLoading, isError, data } = useWeddingGifts()
  const [weddingGiftToModify, setWeddingGiftToModify] = useState<WeddingGift>()

  if (isLoading) return <LoadingState />

  if (isError) return <ErrorState />

  const handleOnModifyItem = (weddingGift: WeddingGift) => {
    setWeddingGiftToModify(weddingGift)
    onOpen()
  }

  const handleOnCloseModal = () => {
    onClose()
    setWeddingGiftToModify(undefined)
  }

  return (
    <>
      <Stack>
        <List>
          <Stack spacing="4" divider={<Divider />}>
            {data?.data.map((weddingGift) => (
              <WeddingGiftListItem
                key={weddingGift.id}
                weddingGift={weddingGift}
                onModifyItem={handleOnModifyItem}
              />
            ))}
          </Stack>
        </List>
      </Stack>

      <ModalModifyWeddingGift
        isOpen={isOpen}
        onClose={handleOnCloseModal}
        weddingGift={weddingGiftToModify}
      />
    </>
  )
}

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

const ModalModifyWeddingGift: React.FC<ModalModifyWeddingGiftProps> = ({
  isOpen,
  onClose,
  weddingGift,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Modificar presente</ModalHeader>

        <ModalBody>
          <Stack spacing="6">
            <FormControl>
              <FormLabel>Nome:</FormLabel>
              <Input defaultValue={weddingGift?.name} />
            </FormControl>

            <FormControl>
              <FormLabel>Responsável:</FormLabel>
              <Input defaultValue={weddingGift?.assigned} />
              <FormHelperText>
                Este campo indica a pessoa responsável por levar o presente.
              </FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel>Última atualização:</FormLabel>
              <Input isDisabled defaultValue={weddingGift?.updatedAt} />
            </FormControl>

            <FormControl>
              <FormLabel>Criado em:</FormLabel>
              <Input isDisabled defaultValue={weddingGift?.createdAt} />
            </FormControl>
          </Stack>
        </ModalBody>

        <ModalFooter columnGap="2">
          <Button variant="ghost" colorScheme="red">
            Remover
          </Button>
          <Button colorScheme="twitter">Salvar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
