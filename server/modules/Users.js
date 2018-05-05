import md5 from 'md5';
import _ from 'lodash';
import Path from 'path-parser';
import URL from 'url';
import Users from '../services/Users';
import {
    SERVER_ERROR_CODE,
    API_RESPONSE,
    SERVER_ERROR_MSG,
    FAILED_MSG,
    SUCCESS,
    FAILED,
    SUCCESS_CODE,
    SUCCESS_MSG,
    NOT_FOUND_CODE,
    NOT_FOUND_MESSAGE
} from '../common/constant';
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const Login = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    const sendObj = Object.assign(API_RESPONSE, {}, msg = NOT_FOUND_MESSAGE);
    res.status(NOT_FOUND_CODE).send(sendObj);
  }

  const loginObj = { username: username, password: md5(password) };
  Users.login(loginObj).then((response) => {
    const respObj = { ...API_RESPONSE, data: response, status: SUCCESS, msg: SUCCESS_MSG};
    res.status(SUCCESS_CODE).send(respObj);
  }).catch((error) => {
    const errObj = { ...API_RESPONSE, data: {}, status: FAILED, msg: FAILED_MSG};
    res.status(SERVER_ERROR_CODE).send(errObj);
  });
};

/**
 * @description
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const GetAllUsers = (req, res, next) => {
  Users.getAllUsers().then((response) => {
    const respObj = { ...API_RESPONSE, data: response, status: SUCCESS, msg: SUCCESS_MSG};
    res.status(SUCCESS_CODE).send(respObj);
  }).catch((error) => {
    const errObj = { ...API_RESPONSE, data: {}, status: FAILED, msg: FAILED_MSG};
    res.status(SERVER_ERROR_CODE).send(errObj);
  });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const GetUser = (req, res, next) => {
  const userId = req.body.userId;
  Users.getUser(userId).then((response) => {
    const respObj = { ...API_RESPONSE, data: response, status: SUCCESS, msg: SUCCESS_MSG};
    res.status(SUCCESS_CODE).send(respObj);
  }).catch((error) => {
    const errObj = { ...API_RESPONSE, data: {}, status: FAILED, msg: FAILED_MSG};
    res.status(SERVER_ERROR_CODE).send(errObj);
  });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const SaveUser = (req, res, next) => {
  const {
    username, password, email, roles
  } = req.body;
  const updatedPassword = md5(password);
  const rolesArray = [roles];
  const userObj = {
    username,
    password,
    email,
    roles: JSON.stringify(User.rolesArray)
  };
  Users.saveUser(userObj).then((response) => {
    Users.getAllUsers().then((result) => {
      const respObj = { ...API_RESPONSE, data: response, status: SUCCESS, msg: SUCCESS_MSG};
    res.status(SUCCESS_CODE).send(respObj);;
    }).catch((error) => {
      const errObj = { ...API_RESPONSE, data: {}, status: FAILED, msg: FAILED_MSG};
    res.status(SERVER_ERROR_CODE).send(errObj);
    });
  }).catch((error) => {
    const errObj = { ...API_RESPONSE, data: {}, status: FAILED, msg: FAILED_MSG};
    res.status(SERVER_ERROR_CODE).send(errObj);
  });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const DeleteUser = (req, res, next) => {
  const userId = req.body.userId;
  if (!userId) {
  }

  Users.deleteUser(userId).then((response) => {
    Users.getAllUsers().then((result) => {
      const respObj = { ...API_RESPONSE, data: response, status: SUCCESS, msg: SUCCESS_MSG};
    res.status(SUCCESS_CODE).send(respObj);
    }).catch((error) => {
      const errObj = { ...API_RESPONSE, data: {}, status: FAILED, msg: FAILED_MSG};
    res.status(SERVER_ERROR_CODE).send(errObj);
    });
  }).catch((error) => {
    const errObj = { ...API_RESPONSE, data: {}, status: FAILED, msg: FAILED_MSG};
    res.status(SERVER_ERROR_CODE).send(errObj);
  });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const UpdateUser = (req, res, next) => {
  const {
    username, password, email, roles, userId
  } = req.body;
  const updatedPassword = md5(password);

  Users.getUser(userId).then((user) => {
    user.username = username;
    user.password = updatedPassword;
    user.email = email;
    user.roles = roles;
    Users.saveUser(user).then((response) => {
      Users.getAllUsers().then((result) => {
        const respObj = { ...API_RESPONSE, data: response, status: SUCCESS, msg: SUCCESS_MSG};
    res.status(SUCCESS_CODE).send(respObj);
      }).catch((error) => {
        const errObj = { ...API_RESPONSE, data: {}, status: FAILED, msg: FAILED_MSG};
    res.status(SERVER_ERROR_CODE).send(errObj);
      });
    }).catch((error) => {
      const errObj = { ...API_RESPONSE, data: {}, status: FAILED, msg: FAILED_MSG};
    res.status(SERVER_ERROR_CODE).send(errObj);
    });
  }).catch((error) => {
    const errObj = { ...API_RESPONSE, data: {}, status: FAILED, msg: FAILED_MSG};
    res.status(SERVER_ERROR_CODE).send(errObj);
  });
};
