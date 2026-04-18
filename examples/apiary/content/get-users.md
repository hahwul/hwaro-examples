+++
title = "List Users"
description = "Retrieve a paginated list of all users in the system."
template = "page"
tags = ["users", "get"]
weight = 1

[extra]
method = "GET"
path = "/api/v1/users"

example_request = '''
curl -X GET "https://api.apiary.example/v1/users?limit=2" \\
  -H "Authorization: Bearer YOUR_TOKEN"
'''

example_response = '''
{
  "data": [
    {
      "id": "usr_123",
      "email": "alice@example.com",
      "created_at": "2023-01-15T10:00:00Z"
    },
    {
      "id": "usr_124",
      "email": "bob@example.com",
      "created_at": "2023-01-16T11:00:00Z"
    }
  ],
  "meta": {
    "has_more": true,
    "next_cursor": "c3VwZXJfc2VjcmV0X2N1cnNvcg=="
  }
}
'''

[[extra.parameters]]
name = "limit"
type = "integer"
required = false
description = "A limit on the number of objects to be returned, between 1 and 100."

[[extra.parameters]]
name = "starting_after"
type = "string"
required = false
description = "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list."
+++

Retrieve a paginated list of users. The users are returned sorted by creation date, with the most recently created users appearing first.

If no limit is specified, the default is 10.
