export const requireLogin = (req, res, next) => {
  /* if(!req.user) {
    return res.status(404).send({error: 'Please login to continue !!!'});
  } */
  next();
}
