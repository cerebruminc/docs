### Create Submission Data
```graphql
mutation {
  createSubmissionData(
    data: {
      fileNumber: 0 # unique file number
      submissionComplete: false # indicate whether submission is completed or not
      processingStage: ""  # indicate processing stage
      submittedDateTime: "" # submission date and time
      fullName: "" # full name of user
      email: "" # user email
      dateOfBirth: "" # user date of birth
      phoneNumber: "" # user phone number
      vaccineType: "" # vaccine type
      firstVaccinationDate: "" # first vaccine date
      firstVaccinationLocation: "" # first vaccine location
      secondVaccinationDate: "" # 2nd vaccine date
      secondVaccinationLocation: "" # 2nd vaccine location
      organization: { connect: { shortName: "<ORG_SHORT_NAME>" } } # org shortname with which we want to connect this submission 
      frontCardImage: {
        create: { 
	        name: "" , # file name
	        type: "",  # file type
	        bucket: "", # s3 bucket
	        key: "", # s3 file location/key
	        region: "" # s3 file region
	      }
      }
      backCardImage: {
        create: { 
	        name: "" , # file name
	        type: "",  # file type
	        bucket: "", # s3 bucket
	        key: "", # s3 file location/key
	        region: "" # s3 file region
	      }
      }
      qrCodeImage: {
        create: { 
	        name: "" , # file name
	        type: "",  # file type
	        bucket: "", # s3 bucket
	        key: "", # s3 file location/key
	        region: "" # s3 file region
	      }
      }
    }
  ) {
    id
    fileNumber
    submissionComplete
    processingStage
    submittedDateTime
    ipAddress
    formConsentChecked
    dateOfBirth
    fullName
    email
    phoneNumber
    vaccineType
    firstVaccinationDate
    firstVaccinationLocation
    secondVaccinationDate
    secondVaccinationLocation
    createdAt
    updatedAt
  }
}
```
cURL request
```bash
curl --location --request POST '<API_ENDPOINT>' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation {\n createSubmissionData(\n data: {\n fileNumber: 0 \n submissionComplete: false \n processingStage: \"\" \n submittedDateTime: \"\" \n fullName: \"\" \n email: \"\" \n dateOfBirth: \"\" \n phoneNumber: \"\" \n vaccineType: \"\" \n firstVaccinationDate: \"\" \n firstVaccinationLocation: \"\" \n secondVaccinationDate: \"\" \n secondVaccinationLocation: \"\" \n organization: { connect: { shortName: \"<ORG_SHORT_NAME>\" } } \n frontCardImage: {\n create: { \n\t name: \"\" , \n\t type: \"\", \n\t bucket: \"\", \n\t key: \"\", \n\t region: \"\" \n\t }\n }\n backCardImage: {\n create: { \n\t name: \"\" , \n\t type: \"\", \n\t bucket: \"\", \n\t key: \"\", \n\t region: \"\" \n\t }\n }\n qrCodeImage: {\n create: { \n\t name: \"\" , \n\t type: \"\", \n\t bucket: \"\", \n\t key: \"\", \n\t region: \"\" \n\t }\n }\n }\n ) {\n id\n fileNumber\n submissionComplete\n processingStage\n submittedDateTime\n ipAddress\n formConsentChecked\n dateOfBirth\n fullName\n email\n phoneNumber\n vaccineType\n firstVaccinationDate\n firstVaccinationLocation\n secondVaccinationDate\n secondVaccinationLocation\n createdAt\n updatedAt\n }\n}\n","variables":{}}'
```
