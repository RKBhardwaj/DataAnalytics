const _ = require('lodash');
const Path = require('path-parser');
const URL = require('url');
const responseObj = require('./createResonse').responseObj;
const mongoose = require('mongoose');

const Users = mongoose.model('users');

module.exports = (app) => {
    app.get('/api/get-users', async (req, res) => {
        const respObj = Object.assign({}, responseObj);
        const result = await Users.find({});
        if (result) {
            respObj.isError = false;
            respObj.message = 'Users details found successfully';
            respObj.responseData = result;
        } else {
            respObj.isError = true;
            respObj.message = 'Users details not found';
            respObj.responseData = [];
        }
        res.send(respObj);
    });
};