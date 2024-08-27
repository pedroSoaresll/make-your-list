import { http, HttpResponse } from 'msw'

import { List } from '../infra'
import { SpaceRepository } from './repositories/space'

const spaceRepository = new SpaceRepository()

export const handlers = [
  /**
   * Spaces handlers
   */

  http.post('/api/spaces', async ({ request }) => {
    const body = (await request.json()) as { id: string; name: string }
    spaceRepository.create(body.id, body.name)
    return new HttpResponse(undefined, { status: 201 })
  }),

  http.get('/api/spaces/:spaceId', ({ params }) => {
    return HttpResponse.json(spaceRepository.get(params.spaceId as string))
  }),

  /**
   * Lists from space handlers
   */

  http.post('/api/spaces/:spaceId/lists', async ({ request, params }) => {
    const body = (await request.json()) as List
    spaceRepository.createList(params.spaceId as string, body)

    return new HttpResponse(undefined, { status: 201 })
  }),

  http.delete('/api/spaces/:spaceId/lists/:listId', ({ params }) => {
    spaceRepository.deleteList(
      params.spaceId as string,
      params.listId as string
    )

    return new HttpResponse(undefined, { status: 204 })
  }),

  http.patch(
    '/api/spaces/:spaceId/lists/:listId',
    async ({ request, params }) => {
      const body = (await request.json()) as List
      console.log('body from msw', body)

      spaceRepository.patchList(
        params.spaceId as string,
        params.listId as string,
        body
      )

      return new HttpResponse(undefined, { status: 204 })
    }
  ),
]
