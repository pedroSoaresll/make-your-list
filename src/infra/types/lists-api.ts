export type List = {
  id: string
  assigned: string | null
  name: string
  createdAt: string
  updatedAt: string
}

export type PostList = Pick<List, 'name'>

export type DeleteList = Pick<List, 'id'>

export type UpdateList = Pick<List, 'id' | 'name' | 'assigned'>
