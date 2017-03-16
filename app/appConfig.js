/**
 * Created by stefan.trajkovic on 17.3.2017..
 */
angular.module('app').config(function ($provide) {
    $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
        return function (exception, cause) {
            $delegate(exception, cause);
            //alert(exception.message);
        };
    }]);
});