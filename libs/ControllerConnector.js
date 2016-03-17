/**
 * Created by Esenor on 11/03/2016.
 */
/**
 *
 * @param express_application app
 * @param string controller
 */
var connect = function (app, controller) {
    require('../controllers/' + controller + "Controller")(app);
};
exports.connect = connect;