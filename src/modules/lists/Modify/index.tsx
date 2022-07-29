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
  List,
  useMutationDeleteList,
  useMutationUpdateList,
} from '../../../infra'
import { ModalModifyListProps } from './types'

export const ModalModifyList: React.FC<ModalModifyListProps> = ({
  isOpen,
  onClose,
  list,
  spaceId,
}) => {
  const deleteMutation = useMutationDeleteList()
  const updateMutation = useMutationUpdateList()
  const { register, handleSubmit, formState, reset } = useForm<List>()
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

  if (!list?.id) return null

  const handleOnRemoveList = () => {
    deleteMutation.mutate({ spaceId, id: list.id })
  }

  const submit = ({ name, assigned }: List) => {
    updateMutation.mutate({ spaceId, id: list.id, name, assigned })
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
                  defaultValue={list?.name}
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
                  defaultValue={list?.assigned ?? ''}
                  {...register('assigned')}
                />
                <FormHelperText>
                  Este campo indica a pessoa responsável por levar o presente.
                </FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Última atualização:</FormLabel>
                <Input isDisabled defaultValue={list?.updatedAt} />
              </FormControl>

              <FormControl>
                <FormLabel>Criado em:</FormLabel>
                <Input isDisabled defaultValue={list?.createdAt} />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter columnGap="2">
            <Button
              variant="ghost"
              colorScheme="red"
              onClick={handleOnRemoveList}
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

export default ModalModifyList
