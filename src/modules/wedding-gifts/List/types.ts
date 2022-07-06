import { UseModalProps } from '@chakra-ui/react'

import { WeddingGift } from '../../common/types'

export interface WeddingGiftListItemProps {
  weddingGift: WeddingGift
  onModifyItem(item: WeddingGift): void
}

export interface ModalModifyWeddingGiftProps extends UseModalProps {
  weddingGift?: WeddingGift
}
