import { List } from '../../../infra'

export interface ListItemProps {
  list: List
  onModifyItem(item: List): void
}
