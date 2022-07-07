import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react'
import { useEffect } from 'react'

import { useMutationDeleteWeddingGift } from '../../common/hooks'
import { ModalModifyWeddingGiftProps } from './types'

export const ModalModifyWeddingGift: React.FC<ModalModifyWeddingGiftProps> = ({
  isOpen,
  onClose,
  weddingGift,
}) => {
  const deleteMutation = useMutationDeleteWeddingGift()

  const handleOnRemoveWeddingGift = () => {
    if (!weddingGift?.id) return
    deleteMutation.mutate({ id: weddingGift.id })
  }

  useEffect(() => {
    if (deleteMutation.isSuccess) {
      deleteMutation.reset()
      onClose()
    }
  }, [deleteMutation, onClose])

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
          <Button
            variant="ghost"
            colorScheme="red"
            onClick={handleOnRemoveWeddingGift}
            isLoading={deleteMutation.isLoading}
          >
            Remover
          </Button>
          <Button colorScheme="twitter">Salvar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
