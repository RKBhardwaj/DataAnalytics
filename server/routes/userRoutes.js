const _ = require('lodash');
const Path = require('path-parser');
const URL = require('url');
const responseObj = require('./createResonse').responseObj;
const mongoose = require('mongoose');
const md5 = require('md5');
const requireLogin = require('../middlewares/requireLogin');

const Users = mongoose.model('users');

module.exports = (app) => {
    app.get('/api/get-users', requireLogin, async (req, res) => {
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

    app.post('/api/delete-user', requireLogin, async (req, res) => {
        const respObj = Object.assign({}, responseObj);
        const userId = req.body.userId;
        if (userId) {
            try {
                const response = await Users.deleteOne({_id: userId});
                const result = await Users.find({});
                if (result) {
                    respObj.isError = false;
                    respObj.message = 'User deleted successfully';
                    respObj.responseData = result;
                } else {
                    respObj.isError = true;
                    respObj.message = 'User not deleted.';
                    respObj.responseData = [];
                }
            } catch (err) {
                respObj.isError = true;
                respObj.message = 'Error occurred while deleteing user.';
                respObj.responseData = [];
                res.send(respObj);
            }
        } else {
            respObj.isError = true;
            respObj.message = 'Error occurred while deleteing user.';
            respObj.responseData = [];
        }
        res.send(respObj);
    });

    app.post('/api/save-user', requireLogin, (req, res) => {
        const respObj = Object.assign({}, responseObj);
        const {username, password, email, roles} = req.body;
        const updatedPassword = md5(password);
        const rolesArray = [roles];
        try {
            const user = new Users({
                username,
                password: updatedPassword,
                email,
                roles: JSON.stringify(rolesArray)
            });
            user.save().then((response) => {
                Users.find({}).then((result) => {
                    if (result) {
                        respObj.isError = false;
                        respObj.message = 'User saved successfully';
                        respObj.responseData = result;
                    } else {
                        respObj.isError = true;
                        respObj.message = 'User not saved.';
                        respObj.responseData = [];
                    }
                    res.send(respObj);
                });
            });
        } catch (err) {
            respObj.isError = true;
            respObj.message = 'Error occurred while saving user.';
            respObj.responseData = [];
            res.send(respObj);
        }
    });

    app.post('/api/update-user', requireLogin, async (req, res) => {
        const respObj = Object.assign({}, responseObj);
        const {username, password, email, roles, userId} = req.body;
        const updatedPassword = md5(password);
        try {
            const user = await Users.findOne({_id: userId});
            user.username = username;
            user.password = updatedPassword;
            user.email = email;
            user.roles = roles;

            const reponse = await user.save();
            const result = await Users.find({});
            if (result) {
                respObj.isError = false;
                respObj.message = 'User saved successfully';
                respObj.responseData = result;
            } else {
                respObj.isError = true;
                respObj.message = 'User not saved.';
                respObj.responseData = [];
            }
        } catch (err) {
            respObj.isError = true;
            respObj.message = 'Error occurred while updating user.';
            respObj.responseData = [];
            res.send(respObj);
        }
    });

    app.post('/api/get-user-details', requireLogin, async (req, res) => {
        const userId = req.body.userId;
        try {
            const user = await Users.findOne({_id: userId});
            if (user) {
                respObj.isError = false;
                respObj.message = 'User found.';
                respObj.responseData = user;
            } else {
                respObj.isError = true;
                respObj.message = 'User not found.';
                respObj.responseData = [];
            }
        } catch (err) {
            respObj.isError = true;
            respObj.message = 'Error occurred while finding user.';
            respObj.responseData = [];
            res.send(respObj);
        }
    });
};