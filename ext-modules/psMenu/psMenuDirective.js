/**
 * Created by stefan.trajkovic on 17.3.2017..
 */
"use strict";

angular.module('psMenu').directive('psMenu', function() {
    return {
        scope: {

        },
        transclude: true,
        templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
        controller: 'psMenuController',
        link: function(scope, el, attr) {

        }
    };
});