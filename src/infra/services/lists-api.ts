import axios from 'axios'

import { CreateSpace, DeleteList, PostList, Space, UpdateList } from '../types'

const baseURL =
  import.meta.env.VITE_USE_API_MOCKED === 'true'
    ? '/api'
    : import.meta.env.VITE_LISTS_API

const service = axios.create({
  baseURL,
})

export const fetchSpace = (spaceId: string) =>
  service.get<Space>(`/spaces/${spaceId}`)

export const createSpace = (data: CreateSpace) => service.post('/spaces', data)

export const createList = ({ spaceId, ...data }: PostList) =>
  service.post(`/spaces/${spaceId}/lists`, data)

export const deleteList = ({ id, spaceId }: DeleteList) =>
  service.delete(`/spaces/${spaceId}/lists/${id}`)

export const updateList = ({ id, spaceId, ...data }: UpdateList) =>
  service.patch(`/spaces/${spaceId}/lists/${id}`, data)
