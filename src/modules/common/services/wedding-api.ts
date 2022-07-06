import axios from 'axios'

import { PostGift, WeddingGift } from '../types'

const service = axios.create({
  baseURL: 'http://localhost:8000',
})

export const fetchWeddingGifts = () =>
  service.get<WeddingGift[]>('/wedding-gifts')

export const createWeddingGifts = (data: PostGift) =>
  service.post('/wedding-gifts', data)
