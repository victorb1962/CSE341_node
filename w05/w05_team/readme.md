# Lesson 5 Class Activity

## How to run it

Run npm install and npm start in the terminal. You'll need a database to connect to and an .env file with MONGODB_URI


- npm install
- npm install --save express body-parser dotenv mongodb swagger-ui-express 
- npm install --save-dev nodemon
- npm start

Start MongoDB connection in VS Code to verify connection

Browser tests:

- http://localhost:8080/ < 'Cannot GET /'
- http://localhost:8080/api-docs

   - GET / user / 'Victor'
     - verify that name was reversed

Note: 
- For localhost  you are using schemes: ["http"]  with host: "localhost:8080"              < set in swagger.json
- For production you are using schemes: ["https"] with host: "victor-341w01.onrender.com"  < set in swagger.json

Deploy to GitHub & Render and test.

### Video

[Video Walkthrough](https://youtu.be/8QENCujndUQ)

## vb Notes
Add data from /backend/user.json to MongoDB / cluster0 / database / test / user
In Render add environmental veriable: NODE_VERSION = 16.14.2
In Render add environmental veriable: MONGODB_URI = <connection string>
