'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8082;

const appRouter = require('./router/login');

app.use(express.urlencoded());

app.use(express.static('public'));

app.use('/', appRouter);

app.listen(PORT, () => {
    console.log(`the app listen to ${PORT}`);
})