var myApp = angular.module('angularApp');


myApp.controller('secondControl', ['$scope','$location', '$log', '$routeParams',
function(scope,location,log,routeParams){ //routeParams comes from ng-route module.
    
    scope.text = 'Faggathard';
    //if(typeof routeParams.num === "undefined"){ console.log('not defined'); scope.num = "no route value";}
    //else{scope.num = routeParams.num;} 
    scope.num = routeParams.num || 'NO VALUE';//same name as in top IMPORTANT, this makes availability for view
    log.info(location.path());
    
}]);