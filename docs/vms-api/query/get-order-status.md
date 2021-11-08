### Get Order Status

```graphql
query {
  getOrderStatus(fileNumber: Int) {
    processingStage
    submissionComplete
    submittedDateTime
  }
}
```

cURL request
```bash
curl --location --request POST 'http://localhost:4000/graphql' \
--header 'apiKey: xyz' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query {\n  getOrderStatus(fileNumber: 10) {\n    processingStage\n    submissionComplete\n    submittedDateTime\n  }\n}","variables":{}}'
```