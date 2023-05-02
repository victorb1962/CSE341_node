/* 
This is a duplicate of app.js
Needed for deployment to Render.

Create a collection in MongoDB called contacts. 
Insert at least three documents either for people in this class or people that you know. 
Each document should have the following fields: firstName, lastName, email, favoriteColor, birthday.

.env used to store MongoDB connection string.

Create a new route file in your node project called contacts.js to:
1. GET all of the documents in the contacts collection.
2. GET a single document in the contacts collection with Id from a query parameter.

Use VS Code debugger. 
Use REST client to make http requests to web server.
*/

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
