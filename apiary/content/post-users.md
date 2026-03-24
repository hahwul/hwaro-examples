+++
title = "Create User"
description = "Create a new user account in the system."
template = "page"
tags = ["users", "post"]
weight = 2

[extra]
method = "POST"
path = "/api/v1/users"

example_request = '''
curl -X POST "https://api.apiary.example/v1/users" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "charlie@example.com",
    "name": "Charlie"
  }'
'''

example_response = '''
{
  "id": "usr_125",
  "email": "charlie@example.com",
  "name": "Charlie",
  "created_at": "2023-01-17T09:30:00Z"
}
'''

[[extra.parameters]]
name = "email"
type = "string"
required = true
description = "The user's email address."

[[extra.parameters]]
name = "name"
type = "string"
required = false
description = "The user's full name."
+++

Creates a new user account with the specified email address and optional name.

The API will return the newly created user object, including its unique `id` and `created_at` timestamp.
