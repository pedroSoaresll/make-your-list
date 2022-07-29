import axios from 'axios'

import { DeleteList, PostList, Space, UpdateList } from '../types'

const service = axios.create({
  baseURL: process.env.REACT_APP_LISTS_API,
})

export const fetchSpace = (spaceId: string) =>
  service.get<Space>(`/spaces/${spaceId}`)

export const createList = (data: PostList) =>
  service.post('/wedding-gifts', data)

export const deleteList = ({ id }: DeleteList) =>
  service.delete(`/wedding-gifts/${id}`)

export const updateList = ({ id, ...data }: UpdateList) =>
  service.patch(`/wedding-gifts/${id}`, data)
