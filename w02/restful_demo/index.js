/*
See: https://www.youtube.com/watch?v=pKd0Rpw7O48
Create RESTful_demo dir
Install packages
 npm init --yes
 npm i express

Create a web server
 Create index.js
*/

// Load express module and create a reference to the function
const express = require('express');
const methods = require('methods');
// Call the function and store results in a constant called 'app'
const app = express();

// Define a route for GET method
app.get('/', (req, res) => {
    res.send('Hello World');
});

// from terminal run node index.js
// 'Lstening on port 3000...'

//From browser go to localhost:3000
// 'Hello World'

// Define another route
app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]) // send dummy data for now
});

// restart process
// Ctrl-C

// from terminal run node index.js
// 'Lstening on port 3000...'

//From browser go to localhost:3000/api/courses
// '[1,2,3]'

// npm i -g nodemon   - install globally. Will auto restart process after every change.
// NOW run apps using 'nodemon'...unles 'running scripts is disbaled on this system'

// Use environmental variable for a dynamic (vs fixed) PORT
// For windows use SET command or the .env file
const port =  process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));