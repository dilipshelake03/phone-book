'use strict'
var app = angular.module('app', ['ngRoute', 'toaster']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.

        when('/contact-list', {
            templateUrl: '/src/views/contact-list.html', controller: 'contactListCtrl',
            css: '/src/common.css'
        }).

        otherwise({
            redirectTo: '/contact-list'
        });
}]);
