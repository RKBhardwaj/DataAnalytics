const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./server/config/keys');

require('./server/models/index');

mongoose.connect(keys.mongoURI);

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

require('./server/routes/index')(app);

if (process.env.NODE_ENV === 'production') {
    //express will serve up production assets like our main.js file  or main.css file
    app.use(express.static('client/build'));

    //express will server up index.html if it is not recognize the routes
    const path = require('path');
    app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;
console.log('Listening on port :', port);
app.listen(port);