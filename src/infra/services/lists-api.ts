import axios from 'axios'

import { DeleteList, List, PostList, UpdateList } from '../types'

const service = axios.create({
  baseURL: process.env.REACT_APP_LISTS_API,
})

export const fetchLists = () => service.get<List[]>('/wedding-gifts')

export const createList = (data: PostList) =>
  service.post('/wedding-gifts', data)

export const deleteList = ({ id }: DeleteList) =>
  service.delete(`/wedding-gifts/${id}`)

export const updateList = ({ id, ...data }: UpdateList) =>
  service.patch(`/wedding-gifts/${id}`, data)
