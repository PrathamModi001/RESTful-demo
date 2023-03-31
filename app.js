const express = require('express');

const app = express();
const PORT = 8080;

const feedRoutes = require('./routes/feed')

app.use('/feed' , feedRoutes) // now all feedRoutes routes will have /feed at the start

app.listen(PORT, () => {
    console.log(`Using Port ${PORT}`)
});