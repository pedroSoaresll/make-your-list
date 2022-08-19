import { rest } from 'msw'

import { SpaceRepository } from './repositories/space'

const spaceRepository = new SpaceRepository()

export const handlers = [
  /**
   * Spaces handlers
   */

  rest.post('/api/spaces', async (req, res, ctx) => {
    const body = await req.json()
    spaceRepository.create(body.id, body.name)

    return res(ctx.status(201))
  }),

  rest.get('/api/spaces/:spaceId', async (req, res, ctx) =>
    res(ctx.json(spaceRepository.get(req.params.spaceId as string)))
  ),

  /**
   * Lists from space handlers
   */

  rest.post('/api/spaces/:spaceId/lists', async (req, res, ctx) => {
    const body = await req.json()
    spaceRepository.createList(req.params.spaceId as string, body)

    return res(ctx.status(201))
  }),

  rest.delete('/api/spaces/:spaceId/lists/:listId', (req, res, ctx) => {
    spaceRepository.deleteList(
      req.params.spaceId as string,
      req.params.listId as string
    )

    return res(ctx.status(200))
  }),

  rest.patch('/api/spaces/:spaceId/lists/:listId', async (req, res, ctx) => {
    const body = await req.json()

    spaceRepository.patchList(
      req.params.spaceId as string,
      req.params.listId as string,
      body
    )

    return res(ctx.status(200))
  }),
]
