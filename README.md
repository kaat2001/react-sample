# Sample front-end React app for Sample Api

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


How to generate api client (based on axios):
npx swagger-typescript-api `
--axios `
--single-http-client `
--path .\src\swagger.json `
--api-class-name GeneratedApiClient `
--output .\src\api `
--name GeneratedApiClient.ts 

