# Temple API

This API is intended for a team assignment in CSE 341 to learn how to use Swagger for API Documentation.

## Instructions to run application

- Run npm install in the terminal
- npm install --save-dev swagger-autogen See https://www.npmjs.com/package/swagger-autogen
- npm install swagger-ui-express See https://www.npmjs.com/package/swagger-ui-express
- npm start

## Things to look out for

- Examine the routes and try a couple with your rest client.
- If you try to run it, you'll get an authentication error from MongoDB.
- Modify your .env file to include your mongoDB username and your db password.
- Import the temples.json file into your mongoDB database in a new collection called temples.

Browser tests:
1. http://localhost:8080/
2. http://localhost:8080/swagger < default page
3. http://localhost:8080/api-docs/

To test GET /temples/ from /api-docs/
a. get own API Key from MongoDB: Data API / Create API Key
b. Paste it into /controllers/temples.js, replacing the current api key

Make sure to add documentation as you are developing.

To upload temple.json to MongoDB
1. Don't use MonDB from VS Code - too difficult to get working properly
2. You can download and install MongoDB Compass - https://www.mongodb.com/try/download/compass
3. Or you can simple use MongoDB Atlas and cut/paste temple.json script
   a. Go to temple collection / Insert document
   b. Select option for: {}
   c. Then cut/paste temple.json script
   d. Click insert