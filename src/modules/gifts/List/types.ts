import { WeddingGift } from '../../common/types'

export interface WeddingGiftListItemProps {
  weddingGift: WeddingGift
  onModifyItem(item: WeddingGift): void
}
