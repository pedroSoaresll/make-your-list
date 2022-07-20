import { UseModalProps } from '@chakra-ui/react'

import { WeddingGift } from '../../common/types'

export interface ModalModifyWeddingGiftProps extends UseModalProps {
  weddingGift?: WeddingGift
}
