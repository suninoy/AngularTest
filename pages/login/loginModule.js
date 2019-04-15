angular.module('loginModule', [])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $stateProvider.state({
            name: 'login',
            url: '/login',
            templateUrl: '/pages/login/login.html',
            controller: 'loginCtrl',
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("pages/login/loginCtrl.js");
                }]
            }
        })
    }])
    // .run('$ocLazyLoad', '$injector', function ($ocLazyLoad,$injector) {
    //     $ocLazyLoad.load({
    //         files: ['pages/login/loginService.js']
    //     }).then(function () {
    //         $injector.get('loginService')
    //     })
    // })