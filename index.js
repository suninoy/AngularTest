angular.module('indexModule', ['ui.router','oc.lazyLoad','loginModule','mainModule'])
.controller('indexCtrl', ['$scope','$state',function ($scope,$state) {


}])
.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){

 $urlRouterProvider.when('', '/login');
}])