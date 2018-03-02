const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
//const cors = require('cors');
const keys = require('./server/config/keys');

require('./server/models/index');

mongoose.connect(keys.mongoURI);

//creating an app instance
const app = express();

//bodyParser is middleware for express and for use that middleware we need to use in that express app.
app.use(bodyParser.json());

//CORS module is for cross site reference
//app.use(cors);

//Cookie session is middleware which is used to maintain cookies in the system
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

require('./server/routes/index')(app);

const port = process.env.port || 5000;
console.log('Listening on port :', port);
app.listen(port);