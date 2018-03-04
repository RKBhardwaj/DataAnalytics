const mongoose = require('mongoose');

const UserSchema = require('./UserSchema');

mongoose.model('users', UserSchema);