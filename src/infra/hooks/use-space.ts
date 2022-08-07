import { useQuery } from 'react-query'

import { fetchSpace } from '../services'

export const USE_SPACE_KEY = 'fetch_space'

export const useSpace = (spaceId: string) =>
  useQuery(USE_SPACE_KEY, () => fetchSpace(spaceId))
