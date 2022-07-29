import axios from 'axios'

import { DeleteList, PostList, Space, UpdateList } from '../types'

const service = axios.create({
  baseURL: process.env.REACT_APP_LISTS_API,
})

export const fetchSpace = (spaceId: string) =>
  service.get<Space>(`/spaces/${spaceId}`)

export const createList = ({ spaceId, ...data }: PostList) =>
  service.post(`/spaces/${spaceId}/lists`, data)

export const deleteList = ({ id, spaceId }: DeleteList) =>
  service.delete(`/spaces/${spaceId}/lists/${id}`)

export const updateList = ({ id, spaceId, ...data }: UpdateList) =>
  service.patch(`/spaces/${spaceId}/lists/${id}`, data)
