require('./db/mongoose');

const express = require('express');
const propertyRouters = require('./routes/propertyRoutes')

const app = express();

app.use(express.json());
app.use(propertyRouters)

module.exports = app;

