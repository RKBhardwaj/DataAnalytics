/**
 * @description authRoutes file will contains all the routes and api routes
 */
const _ = require('lodash');
const Path = require('path-parser');
const URL = require('url');
const responseObj = require('./createResonse').responseObj;

module.exports = (app) => {
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.post('/api/auth-login', (req, res) => {
        const { username, password } = req.body;
        const respObj = Object.assign({}, responseObj);
        if (username && password) {
            respObj.isSuccess = true;
            respObj.successMsg = 'Valid User';
            respObj.responseData = [];
        } else {
            respObj.isError = true;
            respObj.errorMsg = 'Invalid user credentials';
        }
        res.send(respObj);
    });
};