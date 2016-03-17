/**
 * Created by Esenor on 11/03/2016.
 */
module.exports = function (app) {
    var scope = '/';
    // home route
    app.get(scope, function (req, res) {
        res.render('index.twig', {'msg': 'Welcome in the tiny robot factory'});
    });
}
