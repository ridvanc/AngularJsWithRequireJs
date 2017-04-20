require.config({
    baseUrl: "/app",
    paths: {
        "angular": "/scripts/angular.min",
        "angular-route": "/scripts/angular-route",
        "angular-cookies": "/scripts/angular-cookies",
        "jquery": "/scripts/jquery.min",
        "bootstrap": "/scripts/bootstrap.min",
        
    },
    shim: {
        "app": {
            deps: ["angular", "angular-route", "angular-cookies", "bootstrap"]
        },
        "angular-route": {
            deps: ["angular"]
        },
        "angular-cookies": {
            deps: ["angular"]
        },
        "bootstrap": {
            deps: ["jquery"]
        }

    }
});
require
(
    [
        "app"
    ],
    function (app) {
        angular.bootstrap(document, ["app"]);
    }
);