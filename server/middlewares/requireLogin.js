const createResponseObj = require('../routes/createResonse');

module.exports = (req, res, next) => {
  if(!req.user) {
    const respObj = createResponseObj();
    respObj.isError = true;
    respObj.errorMsg = 'Please login to continue !!!';
    return res.status(404).send(respObj);
  }

  next();
};