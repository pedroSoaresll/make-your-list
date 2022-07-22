import {
  Button,
  FormControl,
  FormErrorMessage,
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
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import {
  useMutationDeleteWeddingGift,
  useMutationUpdateWeddingGift,
} from '../../common/hooks'
import { WeddingGift } from '../../common/types'
import { ModalModifyWeddingGiftProps } from './types'

export const ModalModifyWeddingGift: React.FC<ModalModifyWeddingGiftProps> = ({
  isOpen,
  onClose,
  weddingGift,
}) => {
  const deleteMutation = useMutationDeleteWeddingGift()
  const updateMutation = useMutationUpdateWeddingGift()
  const { register, handleSubmit, formState, reset } = useForm<WeddingGift>()
  const handleOnClose = useCallback(() => {
    reset()
    onClose()
  }, [onClose, reset])

  useEffect(() => {
    if (deleteMutation.isSuccess) {
      deleteMutation.reset()
      handleOnClose()
    }
  }, [deleteMutation, handleOnClose])

  useEffect(() => {
    if (updateMutation.isSuccess) {
      updateMutation.reset()
      handleOnClose()
    }
  }, [updateMutation, handleOnClose])

  if (!weddingGift?.id) return null

  const handleOnRemoveWeddingGift = () => {
    deleteMutation.mutate({ id: weddingGift.id })
  }

  const submit = ({ name, assigned }: WeddingGift) => {
    updateMutation.mutate({ id: weddingGift.id, name, assigned })
  }

  return (
    <Modal isOpen={isOpen} onClose={handleOnClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Modificar presente</ModalHeader>

        <form onSubmit={handleSubmit(submit)}>
          <ModalBody>
            <Stack spacing="6">
              <FormControl isInvalid={!!formState.errors.name?.type}>
                <FormLabel>Nome:</FormLabel>
                <Input
                  defaultValue={weddingGift?.name}
                  {...register('name', { required: true })}
                />
                {formState.errors.name?.type === 'required' && (
                  <FormErrorMessage>
                    O campo nome é obrigatório
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Responsável:</FormLabel>
                <Input
                  defaultValue={weddingGift?.assigned ?? ''}
                  {...register('assigned')}
                />
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
            <Button
              type="submit"
              colorScheme="twitter"
              isLoading={updateMutation.isLoading}
            >
              Salvar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default ModalModifyWeddingGift
