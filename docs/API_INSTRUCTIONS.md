# Make Your List API

The goal is to have a space that contains list and other information to each people have a unique space with your own lists to manage the way that they want.

This document is a API contract to serve the web application "make-your-list" built in React (CRA).

All the resources and payload needed to the web application will be written below to explain how do you can create your backend to serve it.

## Main resources

- Space
- List (belongs to Space)

## Entities

```ts
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
```

## Payloads

### Create a space

`POST /spaces`

Request body:

```json
{
  "id": "88773b46-9046-40d2-8cb1-87a4ccbd31d6",
  "name": "Nova lista"
}
```

Response:

`201 Created`

### Get a space

`GET /spaces/:spaceId`

Response:

`200 OK`

```json
{
  "id": "88773b46-9046-40d2-8cb1-87a4ccbd31d6",
  "name": "Nova lista",
  "lists": []
}
```

### Add an item to a list

`POST /spaces/:spaceId/lists`

Request body:

```json
{
  "name": "Item 1"
}
```

Response:

`201 Created`

### Update an item from a list

`PATCH /spaces/:spaceId/lists/:listId`

Request body:

```json
{
  "name": "Item 1",
  "assigned": "Pessoa 1"
}
```

Response:

`200 OK`

### Delete an item from a list

`DELETE /spaces/:spaceId/lists/:listId`

Response:

`200 OK`

## Rules

- By default, new items must starts `assigned` as null and `createdAt` and `updatedAt` as date now;
- `updatedAt` needs to be updated on every changes
