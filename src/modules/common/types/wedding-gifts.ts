export type WeddingGift = {
  id: string
  assigned: string | null
  name: string
  createdAt: string
  updatedAt: string
}

export type PostGift = Pick<WeddingGift, 'name'>

export type DeleteGift = Pick<WeddingGift, 'id'>

export type UpdateGift = Pick<WeddingGift, 'id' | 'name' | 'assigned'>
