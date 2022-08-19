import { Space } from '../../infra'

export class SpaceRepository {
  private SESSION_STORAGE_SPACE_KEY = 'spaces'
  spaces: Space[] = []

  constructor() {
    const spacesRaw = window.sessionStorage.getItem(
      this.SESSION_STORAGE_SPACE_KEY
    )

    if (spacesRaw) {
      this.spaces = JSON.parse(spacesRaw)
    }
  }

  create(id: string, name: string) {
    this.spaces.push({
      id,
      name,
      lists: [],
    })

    window.sessionStorage.setItem(
      this.SESSION_STORAGE_SPACE_KEY,
      JSON.stringify(this.spaces)
    )
  }

  get(id: string) {
    return this.spaces.find((item) => item.id === id)
  }
}
