require("express-async-error");
require('dotenv/config')
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes')


const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);


const SERVER_PORT = process.env.PORT || 3333

app.listen(SERVER_PORT, () => {
    console.log(`Server is running at ${SERVER_PORT}`)
});
