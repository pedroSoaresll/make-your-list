import { Heading, Spinner, Stack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { Card } from '../../components'
import { useSpace } from '../../infra'
import { Add } from '../../modules/lists/Add'
import { ListView } from '../../modules/lists/List'
import { Layout } from '../common/layouts'

const RenderContent = ({ spaceId }: Record<string, string>) => {
  const { data: { data: space } = {}, isFetching } = useSpace(spaceId)

  if (!space) return null

  return (
    <Card>
      <Heading colorScheme="blackAlpha">{space.name}</Heading>
      <ListView spaceId={spaceId} />

      <Stack direction="row" justifyContent="space-between">
        {isFetching ? <Spinner /> : <div></div>}

        <Add spaceId={spaceId} />
      </Stack>
    </Card>
  )
}

const List = () => {
  const params = useParams()

  if (!params.spaceId) return null

  return (
    <Layout>
      <RenderContent spaceId={params.spaceId} />
    </Layout>
  )
}

export default List
