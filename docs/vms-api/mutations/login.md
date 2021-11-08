### Used to login into admin panel

```graphql
mutation login {
  login(email: "email", password: "password", rememberMe: true) {
    user {
      id
      roles {
        name
      }
      email
      firstName
      middleName
      lastName
    }
    token
  }
}
```

cURL request

```bash
curl --location --request POST '<API_ENDPOINT>' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation login {\n login(\n email: \"email\"\n password: \"password\" \n rememberMe: true\n ) {\n user {\n id\n roles {\n name\n }\n email\n firstName\n middleName\n lastName\n }\n token\n }\n}","variables":{}}'
```
