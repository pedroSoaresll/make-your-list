import { useQuery } from 'react-query'

import { fetchWeddingGifts } from '../services/wedding-api'

const USE_WEDDING_GIFTS_KEY = 'fetch_wedding_gifts'

export const useWeddingGifts = () =>
  useQuery(USE_WEDDING_GIFTS_KEY, fetchWeddingGifts)
