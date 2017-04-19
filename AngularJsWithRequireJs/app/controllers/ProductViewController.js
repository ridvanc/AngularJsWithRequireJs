define(['app'], function (app) {
    app.controller('ProductViewController',
        [
            '$scope',

            function ($scope) {
                $scope.page =
                    {
                        heading: 'Products'
                    };
            }
        ]);
});