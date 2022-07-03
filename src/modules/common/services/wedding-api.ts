import axios from 'axios'

import { WeddingGift } from '../types'

const service = axios.create({
  baseURL: 'http://localhost:8000',
})

export const fetchWeddingGifts = () =>
  service.get<WeddingGift[]>('/wedding-gifts')
