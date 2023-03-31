const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(bodyParser.json()); // application/json

const feedRoutes = require('./routes/feed')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed' , feedRoutes) // now all feedRoutes routes will have /feed at the start

app.listen(PORT, () => {
    console.log(`Using Port ${PORT}`)
});