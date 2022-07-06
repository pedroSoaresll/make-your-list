import {
  Button,
  Flex,
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

import { useMutationCreateWeddingGift } from '../../common/hooks'
import { AddWeddingGiftFormData } from './types'

const ModalAddWeddingGift: React.FC<UseModalProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState, reset } =
    useForm<AddWeddingGiftFormData>()

  const mutation = useMutationCreateWeddingGift()

  const submit = ({ name }: AddWeddingGiftFormData) => mutation.mutate({ name })

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

export const Add = () => {
  const { onOpen, isOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex justifyContent="flex-end">
        <Button onClick={onOpen} colorScheme="twitter">
          Adicionar presente
        </Button>
      </Flex>

      <ModalAddWeddingGift isOpen={isOpen} onClose={onClose} />
    </>
  )
}
