/**
 * Created by Esenor on 11/03/2016.
 */
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(404).send('This page are lost in the factory.');
    });
}
