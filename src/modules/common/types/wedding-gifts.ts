export type WeddingGift = {
  id: string
  assigned: string
  name: string
  createdAt: string
  updatedAt: string
}

export type PostGift = Pick<WeddingGift, 'name'>

export type DeleteGift = Pick<WeddingGift, 'id'>
