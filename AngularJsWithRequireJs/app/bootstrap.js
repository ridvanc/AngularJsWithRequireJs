require.config({
    baseUrl: "/app",
    paths: {
        "angular": "/scripts/angular",
        "angular-route": "/scripts/angular-route",
        "angular-cookies": "/scripts/angular-cookies",
        "jquery": "/scripts/jquery.min",
    },
    shim: {
        "app": {
            deps: ["angular", "angular-route", "angular-cookies", "jquery"]
        },
        "angular-route": {
            deps: ["angular"]
        },
        "angular-cookies": {
            deps: ["angular"]
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