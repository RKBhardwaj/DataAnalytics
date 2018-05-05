import express from 'express';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import path from 'path';
import Keys from './config/keys';
import './models/index';
import { AuthRoutes, AppRoutes } from './routes/index';

const mongoose = require('mongoose');

// Connecting mongodb
mongoose.connect(Keys.mongoURI);

// creating an server instance
const server = express();

// bodyParser is middleware for express and for use that middleware we need to use in that express server.
server.use(bodyParser.json());

// Cookie session is middleware which is used to maintain cookies in the system
server.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [Keys.cookieKey]
}));

server.use('/api/auth', AuthRoutes);
// server.use((req, res, next) => {
//   requireLogin(req, res, next);
// });
server.use('/api', AppRoutes);


if (process.env.NODE_ENV === 'production') {
  // express will serve up production assets like our main.js file  or main.css file
  server.use(express.static('client/build'));

  // express will server up index.html if it is not recognize the routes
  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

export default server;
