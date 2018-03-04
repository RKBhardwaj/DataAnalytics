/**
 * @description authRoutes file will contains all the routes and api routes
 */
const _ = require('lodash');
const Path = require('path-parser');
const URL = require('url');
const responseObj = require('./createResonse').responseObj;
const mongoose = require('mongoose');
const md5 = require('md5');

const Users = mongoose.model('users');

module.exports = (app) => {
    app.post('/api/auth-login', async (req, res) => {
        const { username, password } = req.body;
        const respObj = Object.assign({}, responseObj);
        if (username && password) {
            const loginObj = { "username": username, "password": md5(password) };
            const result = await Users.find(loginObj);
            console.log(result);
            if (result) {
                respObj.isError = false;
                respObj.message = 'Valid User';
                respObj.responseData = result;
            } else {
                respObj.isError = true;
                respObj.message = 'Invalid User';
                respObj.responseData = [];
            }
        } else {
            respObj.isError = true;
            respObj.message = 'Invalid user credentials';
        }
        res.send(respObj);
    });
};