const authRoutes = require('./authRoutes');

module.exports = app => {
    authRoutes(app);
};