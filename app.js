const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = 8080;

app.use(bodyParser.json()); // application/json

const feedRoutes = require('./routes/feed')

app.use('/feed' , feedRoutes) // now all feedRoutes routes will have /feed at the start

app.listen(PORT, () => {
    console.log(`Using Port ${PORT}`)
});