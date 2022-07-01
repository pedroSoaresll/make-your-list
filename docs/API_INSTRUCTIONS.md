# Wedding Gifts API

## Payload

Below we have a list of gifts

```json
[
  {
    "id": "e322fb88-1e91-4322-aa2a-8df87d225673",
    "assigned": null,
    "name": "Caixa de som edifier top das galaxias",
    "createdAt": "2022-07-01T14:32:00",
    "updatedAt": "2022-07-01T16:40:00"
  }
]
```

## Resources

`GET - /wedding-gifts`

```json
// status code: 200 - OK
// response:
[
  {
    "id": "e322fb88-1e91-4322-aa2a-8df87d225673",
    "assigned": null,
    "name": "Caixa de som edifier top das galaxias",
    "createdAt": "2022-07-01T14:32:00",
    "updatedAt": "2022-07-01T16:40:00"
  }
]
```

`POST - /wedding-gifts`

```json
// body payload:
{
  "name": "Gift name here"
}
```

```json
// status code: 201 - Created
// response: empty
```

`PATCH - /wedding-gifts/:weddingGiftId`

```json
// body payload:
{
  "assigned": "A person name"
}

// status code: 200 - OK
// response: empty
```

## Rules

- By default, new gifts must starts `assigned` as null and `createdAt` and `updatedAt` as date now;
- `updatedAt` needs to be updated on every changes
