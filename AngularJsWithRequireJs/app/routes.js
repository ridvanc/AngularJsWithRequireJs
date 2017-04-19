define([], function () {
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: '/partials/home.html',
                dependencies: [
                    'controllers/HomeViewController'
                ]
            },
            '/products': {
                templateUrl: '/partials/products.html',
                dependencies: [
                    'controllers/ProductViewController'
                ]
            },
            '/about/:person': {
                templateUrl: '/partials/about.html',
                dependencies: [
                    'controllers/AboutViewController',
                    'directives/app-color'
                ]
            }
        }
    };
});