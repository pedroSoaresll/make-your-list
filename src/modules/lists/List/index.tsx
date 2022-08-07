import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Flex,
  List,
  ListItem,
  Skeleton,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { Suspense, useCallback, useState } from 'react'

import { List as ListAPI, useSpace } from '../../../infra'
import { ListItemProps } from './types'

const ModalModifyList = React.lazy(() => import('../Modify'))

interface ListViewProps {
  spaceId: string
}

export const ListView: React.FC<ListViewProps> = ({ spaceId }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { isLoading, isError, data: { data: space } = {} } = useSpace(spaceId)
  const [ListToModify, setListToModify] = useState<ListAPI>()

  const handleOnModifyItem = (list: ListAPI) => {
    setListToModify(list)
    onOpen()
  }

  const handleOnCloseModal = useCallback(() => {
    onClose()
    setListToModify(undefined)
  }, [onClose])

  if (isLoading) return <LoadingState />

  if (isError) return <ErrorState />

  if (!space?.lists.length)
    return (
      <Alert status="warning">
        <AlertIcon />
        <AlertTitle>Nenhum presente cadastrado.</AlertTitle>
        <AlertDescription>Os novos presentes aparecerão aqui.</AlertDescription>
      </Alert>
    )

  return (
    <>
      <Stack>
        <List spacing="8">
          {space.lists.map((list) => (
            <ListItemView
              key={list.id}
              list={list}
              onModifyItem={handleOnModifyItem}
            />
          ))}
        </List>
      </Stack>

      {isOpen && (
        <Suspense fallback="Carregando...">
          <ModalModifyList
            spaceId={spaceId}
            isOpen={isOpen}
            onClose={handleOnCloseModal}
            list={ListToModify}
          />
        </Suspense>
      )}
    </>
  )
}

const LoadingState = () => {
  return (
    <Stack spacing="8" data-testid="list-loading-state">
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
    <Flex data-testid="list-error-state">
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

const ListItemView: React.FC<ListItemProps> = ({ list, onModifyItem }) => {
  if (list.assigned)
    return (
      <ListItem>
        <Flex columnGap="8px" flexWrap="wrap">
          <Button
            onClick={() => onModifyItem(list)}
            variant="link"
            colorScheme="twitter"
          >
            {list.assigned}
          </Button>
          <Text colorScheme="blackAlpha">-</Text>
          <Text colorScheme="blackAlpha" textDecoration="line-through">
            {list.name}
          </Text>
        </Flex>
      </ListItem>
    )

  return (
    <ListItem>
      <Button
        variant="link"
        colorScheme="twitter"
        onClick={() => onModifyItem(list)}
      >
        {list.name}
      </Button>
    </ListItem>
  )
}
