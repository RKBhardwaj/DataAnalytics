/**
 * @description authRoutes file will contains all the routes and api routes
 */
const _ = require('lodash');
const Path = require('path-parser');
const URL = require('url');
const createResponseObj = require('./createResonse');

module.exports = (app) => {
    app.post('/api/auth-login', (req, res) => {
        console.log(req.body);
        const { username, password } = req.body.loginDetails;
        const respObj = createResponseObj();
        if (username && password) {
            respObj.isSuccess = true;
            respObj.successMsg = 'Valid User';
            respObj.responseData = res;
        } else {
            respObj.isError = true;
            respObj.errorMsg = 'Invalid user credentials';
        }
        res.send(respObj);
    });
};