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
  useDisclosure,
  UseModalProps,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useMutationCreateList } from '../../../infra'
import { AddListFormData } from './types'

interface ModalAddListProps extends UseModalProps {
  spaceId: string
}

const ModalAddList: React.FC<ModalAddListProps> = ({
  isOpen,
  onClose,
  spaceId,
}) => {
  const { register, handleSubmit, formState, reset } =
    useForm<AddListFormData>()

  const mutation = useMutationCreateList()

  const submit = ({ name }: AddListFormData) =>
    mutation.mutate({ spaceId, name })

  useEffect(() => {
    if (mutation.isSuccess || mutation.isError) {
      mutation.reset()
      reset()
      onClose()
    }
  }, [mutation, reset, onClose])

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Adicionar presente</ModalHeader>
        <form onSubmit={handleSubmit(submit)}>
          <ModalBody>
            <FormControl isInvalid={!!formState.errors.name?.type}>
              <FormLabel>Nome:</FormLabel>
              <Input
                placeholder="Ex: Caixa de som Edifier mega blaster"
                {...register('name', { required: true })}
              />
              {formState.errors.name?.type === 'required' && (
                <FormErrorMessage>Preencha o nome.</FormErrorMessage>
              )}
              <FormHelperText>
                O valor digitado no campo acima é acrescentado na lista de
                presentes.
              </FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter columnGap="2">
            <Button
              type="submit"
              colorScheme="twitter"
              isLoading={mutation.isLoading}
            >
              Adicionar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

interface AddProps {
  spaceId: string
}

export const Add: React.FC<AddProps> = ({ spaceId }) => {
  const { onOpen, isOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen} colorScheme="twitter">
        Adicionar presente
      </Button>

      <ModalAddList spaceId={spaceId} isOpen={isOpen} onClose={onClose} />
    </>
  )
}
