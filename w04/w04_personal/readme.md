Most of w04_personal objects were simply copied from w03-personal.

# How to run it

Run npm install and npm start from the backend folder in the terminal

- Run npm install in the terminal
- npm install --save-dev swagger-autogen See https://www.npmjs.com/package/swagger-autogen
- npm install swagger-ui-express See https://www.npmjs.com/package/swagger-ui-express
- npm run swagger To recreate swagger.json
- npm start

Test the endpoints in the routes.rest file with Rest Client or another similar tool.

Browser tests:

1. http://localhost:8080/ < 'Cannot GET /'
2. http://localhost:8080/contacts
3. http://localhost:8080/api-docs
   - GET / contacts /
   - GET / contacts / {id}

4. Verify from MongoDB

5. Before uploading to GitHub run the following to make sure you have no issues
- npm run lint
- npm run format


4. http://localhost:8080/ < use routes.rest file



### Video

[Video Example for Students without showing all code](https://youtu.be/0iVptecZ0-E)
