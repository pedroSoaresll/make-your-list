import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { Card } from '../../components'
import { useMutationCreateSpace } from '../../infra/hooks/use-mutation-create-space'
import { Layout } from '../common/layouts'

interface CreateSpaceFormData {
  spaceName: string
}

const Home = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<CreateSpaceFormData>()
  const createSpace = useMutationCreateSpace()

  const submit = handleSubmit((formData) => {
    const { spaceName: name } = formData
    const id = uuidv4()

    createSpace.mutate(
      {
        id,
        name,
      },
      {
        onSuccess() {
          navigate(`/spaces/${id}/lists`)
        },
      }
    )
  })

  return (
    <Layout>
      <Card>
        <Heading>Listas</Heading>
        <Text>Crie e compartilhe listas com grupo de pessoas</Text>

        <Stack as="form" onSubmit={submit} spacing="6">
          <FormControl>
            <FormLabel>Nome da lista</FormLabel>
            <Input
              placeholder="Ex: presentes de casamento, mercado..."
              autoFocus
              {...register('spaceName', { required: true })}
            />
          </FormControl>

          <Button colorScheme="twitter">Criar lista</Button>
        </Stack>
      </Card>
    </Layout>
  )
}

export default Home
