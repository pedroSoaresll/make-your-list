export type Space = {
  id: string
  name: string
  lists: List[]
}

export type List = {
  id: string
  spaceId: string
  assigned: string | null
  name: string
  createdAt: string
  updatedAt: string
}

export type PostList = Pick<List, 'name'>

export type DeleteList = Pick<List, 'id'>

export type UpdateList = Pick<List, 'id' | 'name' | 'assigned' | 'spaceId'>
