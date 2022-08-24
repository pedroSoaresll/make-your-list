import axios from 'axios'

import { CreateSpace, DeleteList, PostList, Space, UpdateList } from '../types'

const baseURL =
  process.env.REACT_APP_USE_API_MOCKED === 'true'
    ? '/api'
    : process.env.REACT_APP_LISTS_API

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
