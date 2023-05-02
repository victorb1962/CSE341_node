// Do I need this is the root for Render to succesfully deploy?

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
