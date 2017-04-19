define(['routes', 'dependencyResolverFor'], function (config, dependencyResolverFor) {
    var app = angular.module('app', ['ngRoute', 'ngCookies']);
    app.config(
        [
            '$routeProvider',
            '$locationProvider',
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',
            function ($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;

                $locationProvider.html5Mode(true);

                if (config.routes !== undefined) {
                    angular.forEach(config.routes, function (route, path) {
                        $routeProvider.when(path, { templateUrl: route.templateUrl, resolve: dependencyResolverFor(route.dependencies) });
                    });
                }

                if (config.defaultRoutePaths !== undefined) {
                    $routeProvider.otherwise({ redirectTo: config.defaultRoutePaths });
                }
            }
        ]);
    app.run(['$rootScope', '$location', function ($rootScope, $location) {
        $rootScope.$on('$routeChangeStart', function (event) {
            
        });
    }]);
    app.controller('MainController', function ($scope, $location) {
        $scope.isLoggedIn = false;
        $scope.appMenu = [];
        $scope.appMenu.push({ Name: 'Home Page', Link: '/' });
        $scope.appMenu.push({ Name: 'Products', Link: '/products' });

    });
    return app;
});