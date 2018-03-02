/**
 * @description authRoutes file will contains all the routes and api routes
 */
const _ = require('lodash');
const Path = require('path-parser');
const URL = require('url');
const responseObj = require('./createResonse').responseObj;
const mongoose = require('mongoose');
const md5 = require('md5');

const Users = mongoose.model('Users');

module.exports = (app) => {
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.post('/api/auth-login', async (req, res) => {
        const { username, password } = req.body;
        const respObj = Object.assign({}, responseObj);
        if (username && password) {
            const loginObj = { "username": username, "password": md5(password) };
            const result = await Users.find(loginObj);
            console.log(result);
            if (result) {
                respObj.isSuccess = true;
                respObj.successMsg = 'Valid User';
                respObj.responseData = result;
            } else {
                respObj.isError = true;
                respObj.errorMsg = 'Invalid User';
                respObj.responseData = [];
            }
        } else {
            respObj.isError = true;
            respObj.errorMsg = 'Invalid user credentials';
        }
        res.send(respObj);
    });
};