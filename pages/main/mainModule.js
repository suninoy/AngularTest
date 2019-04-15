angular.module('mainModule', [])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $stateProvider.state({
            name: 'main',
            url: '/main',
            templateUrl: '/pages/main/main.html',
            controller: 'mainCtrl',
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("pages/main/mainCtrl.js");
                }]
            }
        })
    }])