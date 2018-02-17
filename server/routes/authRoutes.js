/**
 * @description authRoutes file will contains all the routes and api routes
 */

module.exports = (app) => {
    app.get('/auth/user', (req, res) => {
        res.redirect('/validUser');
    });

    app.get('/auth/google/callback', (req, res) => {
        res.redirect('/Dashboard');
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};