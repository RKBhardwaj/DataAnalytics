const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @description User schema
 */
const UsersSchema = new Schema({
    username: String,
    password: String,   
    email: String,
    roles: [String],
});

module.exports = UsersSchema;