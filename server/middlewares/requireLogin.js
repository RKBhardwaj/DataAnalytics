const createResponseObj = require('../routes/createResonse');

module.exports = (req, res, next) => {
  /* if(!req.user) {
    return res.status(404).send({error: 'Please login to continue !!!'});
  } */

  next();
};