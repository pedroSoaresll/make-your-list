import { Heading, Spinner, Stack } from '@chakra-ui/react'
import { useIsFetching } from 'react-query'

import { Card } from '../../components'
import { USE_WEDDING_GIFTS_KEY } from '../../modules/common/hooks'
import { Add } from '../../modules/gifts/Add'
import { ListWeddingGifts } from '../../modules/gifts/List'
import { Layout } from '../common/layouts'

const List = () => {
  const isFetching = useIsFetching([USE_WEDDING_GIFTS_KEY])

  return (
    <Layout>
      <Card>
        <Heading colorScheme="blackAlpha">Lista de presentes</Heading>
        <ListWeddingGifts />

        <Stack direction="row" justifyContent="space-between">
          {isFetching ? <Spinner /> : <div></div>}

          <Add />
        </Stack>
      </Card>
    </Layout>
  )
}

export default List
