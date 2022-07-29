import { Heading, Spinner, Stack } from '@chakra-ui/react'
import { useIsFetching } from 'react-query'

import { Card } from '../../components'
import { USE_SPACE_KEY } from '../../infra'
import { Add } from '../../modules/lists/Add'
import { ListView } from '../../modules/lists/List'
import { Layout } from '../common/layouts'

const List = () => {
  const isFetching = useIsFetching([USE_SPACE_KEY])

  return (
    <Layout>
      <Card>
        <Heading colorScheme="blackAlpha">Lista de presentes</Heading>
        <ListView />

        <Stack direction="row" justifyContent="space-between">
          {isFetching ? <Spinner /> : <div></div>}

          <Add />
        </Stack>
      </Card>
    </Layout>
  )
}

export default List
