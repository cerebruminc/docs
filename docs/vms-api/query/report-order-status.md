### Get Order Status

```graphql
query {
  reportOrderStatus(organizationId: "", startDate: "", endDate: "") {
    csvFileUrl
  }
}
```

cURL request
```bash
curl --location --request POST 'http://localhost:4000/graphql' \
--header 'apiKey: xyz' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query {\n  reportOrderStatus(organizationId: \"\", startDate: \"\", endDate: \"\") {\n    csvFileUrl\n  }\n}","variables":{}}'
```