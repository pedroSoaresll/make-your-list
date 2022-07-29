import { useQuery } from 'react-query'

import { fetchLists } from '../services/lists-api'

export const USE_LISTS_KEY = 'fetch_lists'

export const useLists = () => useQuery(USE_LISTS_KEY, fetchLists)
