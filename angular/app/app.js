'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'ngMaterial',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]).controller('toastController', toastController);

function toastController($scope, $mdToast, $document) {
    $scope.showToast1 = function () {
        $mdToast.show(
            $mdToast.simple()
                .textContent('Hello World!')
                .hideDelay(3000)
        );
    };

    $scope.showToast2 = function () {
        var toast = $mdToast.simple()
            .textContent('Hello World!')
            .action('OK')
            .highlightAction(false);

        $mdToast.show(toast).then(function (response) {
            if (response == 'ok') {
                alert('You clicked \'OK\'.');
            }
        });
    }
}
