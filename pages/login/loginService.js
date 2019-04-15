angular.module('loginModule')
.service('loginService',[function(){
    this.click = function(aaa){
        return alert(aaa+1);
    }
}])