import { rest } from 'msw'

import { SpaceRepository } from './repositories/space'

const spaceRepository = new SpaceRepository()

export const handlers = [
  rest.post('/api/spaces', async (req, res, ctx) => {
    const body = await req.json()
    spaceRepository.create(body.id, body.name)

    return res(ctx.status(201))
  }),

  rest.get('/api/spaces/:id', async (req, res, ctx) =>
    res(ctx.json(spaceRepository.get(req.params.id as string)))
  ),
]
