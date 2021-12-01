const express = require('express');
require('./db/mongoose');

const app = express();
const port = process.env.PORT;

const propertyRouters = require('./routes/propertyRoutes')

app.use(express.json());
app.use(propertyRouters)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})

