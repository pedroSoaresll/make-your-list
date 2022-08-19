import { v4 as uuid } from 'uuid'

import { List, Space } from '../../infra'

export class SpaceRepository {
  spaces: Space[] = []

  private SESSION_STORAGE_SPACE_KEY = 'spaces'

  constructor() {
    const spacesRaw = window.sessionStorage.getItem(
      this.SESSION_STORAGE_SPACE_KEY
    )

    if (spacesRaw) {
      this.overrideSpaces(JSON.parse(spacesRaw))
    }
  }

  private overrideSpaces(newSpace: Space[]) {
    this.spaces = newSpace

    window.sessionStorage.setItem(
      this.SESSION_STORAGE_SPACE_KEY,
      JSON.stringify(this.spaces)
    )
  }

  create(spaceId: string, name: string) {
    const newSpace = { id: spaceId, name, lists: [] }
    const spaces = [...this.spaces, newSpace]

    this.overrideSpaces(spaces)
  }

  get(spaceId: string) {
    return this.spaces.find((item) => item.id === spaceId)
  }

  createList(spaceId: string, list: List) {
    const spaces = this.spaces.map((space) => {
      if (space.id === spaceId) {
        const dateNow = new Date().toISOString()

        list.id = uuid()
        list.spaceId = spaceId
        list.createdAt = dateNow
        list.updatedAt = dateNow

        space.lists.push(list)
      }

      return space
    })

    this.overrideSpaces(spaces)
  }

  deleteList(spaceId: string, listId: string) {
    const spaces = this.spaces.map((space) => {
      if (space.id === spaceId) {
        space.lists = space.lists.filter((list) => list.id !== listId)
      }

      return space
    })

    this.overrideSpaces(spaces)
  }

  patchList(spaceId: string, listId: string, body: List) {
    const spaces = this.spaces.map((space) => {
      if (space.id === spaceId) {
        space.lists = space.lists.map((list) => {
          if (list.id === listId) {
            list.assigned = body.assigned
            list.name = body.name
          }

          return list
        })
      }

      return space
    })

    this.overrideSpaces(spaces)
  }
}
