const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./server/config/keys');

//creating an app instance
const app = express();

//bodyParser is middleware for express and for use that middleware we need to use in that express app.
app.use(bodyParser.json());

//Cookie session is middleware which is used to maintain cookies in the system
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

require('./server/routes')(app);

const port = process.env.port || 5000;
app.listen(port);