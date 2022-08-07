import { UseModalProps } from '@chakra-ui/react'

import { List } from '../../../infra'

export interface ModalModifyListProps extends UseModalProps {
  list?: List
  spaceId: string
}
