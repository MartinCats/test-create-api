require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;
const cors = require('cors');
const db = require('./models/products');
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

app.listen(port, () => {
    console.log('api test server STARTO');
})

module.exports = app;