const mongoose = require('mongoose');
const Promise = require('promise');
const UsersModel = mongoose.model('users');

class Users {
  static login(loginObj) {
    return new Promise((resolve) => (
      resolve(
        UsersModel.find(loginObj)
      )
    ));
  }

  static getAllRoles() {
    return new Promise((resolve) => {
      resolve (
        UsersModel.find({})
      )
    });
  }

  static getAllUsers() {
    return new Promise((resolve) => {
      resolve (
        UsersModel.find({})
      )
    });
  }

  static getUser(userId) {
    return new Promise((resolve) => {
      resolve (
        UsersModel.find({ _id: userId })
      )
    });
  }

  static saveUser(userObj) {
    const user = new UsersModel({
      username: userObj.username,
      password: userObj.updatedPassword,
      email: userObj.email,
      roles: userObj.roles
    });
    return new Promise((resolve) => {
      resolve(
        user.save()
      )
    });
  }

  static deleteUser(userId) {
    return new Promise((resolve) => {
      resolve(
        Users.deleteOne({ _id: userId })
      )
    });
  }
}

export default Users;
