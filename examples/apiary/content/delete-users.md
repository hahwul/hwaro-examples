+++
title = "Delete User"
description = "Permanently deletes a user account from the system."
template = "page"
tags = ["users", "delete"]
weight = 3

[extra]
method = "DELETE"
path = "/api/v1/users/{user_id}"

example_request = '''
curl -X DELETE "https://api.apiary.example/v1/users/usr_123" \\
  -H "Authorization: Bearer YOUR_TOKEN"
'''

example_response = '''
{
  "deleted": true,
  "id": "usr_123"
}
'''

[[extra.parameters]]
name = "user_id"
type = "string"
required = true
description = "The unique identifier of the user to be deleted. Specified in the path."
+++

Permanently deletes a user. It cannot be undone.

Note that if the user has any associated sub-resources, those may also be deleted depending on the system's cascade settings.
