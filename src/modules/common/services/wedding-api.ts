import axios from 'axios'

import { DeleteGift, PostGift, UpdateGift, WeddingGift } from '../types'

const service = axios.create({
  baseURL: 'http://localhost:8000',
})

export const fetchWeddingGifts = () =>
  service.get<WeddingGift[]>('/wedding-gifts')

export const createWeddingGifts = (data: PostGift) =>
  service.post('/wedding-gifts', data)

export const deleteWeddingGifts = ({ id }: DeleteGift) =>
  service.delete(`/wedding-gifts/${id}`)

export const updateWeddingGifts = ({ id, ...data }: UpdateGift) =>
  service.patch(`/wedding-gifts/${id}`, data)
