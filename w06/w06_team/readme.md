## About this code

This code came from the lesson 4 prove solution. There may be slight modifications to it, but it will be very similar, if not exactly the same.

## Team Activity Purpose

The purpose of this activity is to get practice adding error handling and data validation to our node applications.

## Video Walkthrough

[Walkthrough video of example solution](https://www.youtube.com/watch?v=S0przpEKKGU)

## How to run it

Run npm install and npm start from the backend folder in the terminal
Test the endpoints in the routes.rest file with Rest Client or another similar tool.

- Run npm install in the terminal
- npm install --save-dev swagger-autogen See https://www.npmjs.com/package/swagger-autogen
- npm install swagger-ui-express See https://www.npmjs.com/package/swagger-ui-express
- npm start

## Things to look out for

- Examine the routes and try a couple with your rest client.
- If you try to run it, you'll get an authentication error from MongoDB.
- Modify your .env file to include your mongoDB username and your db password.
- Import the temples.json file into your mongoDB database in a new collection called temples.

Browser test:

1. Local test - use routes.rest on http://localhost:8080/
2. Production - use

### Checklist

Update swagger.json to use production URL before uploading to GitHub & Render
See \middleware\validate.js for rules

- You can stake validation rules, see \routes\contacts.js
- controller\contacts.js contains some validation because others were already handled in \routes\contacts.js
- helpers\validate.js required per lesson reading documentation
