/**
 * Created by Esenor on 11/03/2016.
 */
module.exports = function (app) {
    var scope = '/chart';
    // factory route
    app.get(scope + "/:sample/:population", function (req, res) {
        res.render('factory.twig',
            {
                'parent_url': req.headers.host,
                'sample': req.params.sample,
                'population': req.params.population
            });
    });
}
