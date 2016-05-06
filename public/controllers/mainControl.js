var myApp = angular.module('angularApp');

myApp.controller('mainControl', ['$scope', '$location', '$log',
 function(scope, location, log){
    //this objects can also be used on the directives that are WITHIN the html attached to the controller
    scope.person = {
        
        name: 'Some Name',
        address: '555 Main St., New York, NY 11111'
        
    }
    
    scope.objectPerson = {
        
        name: 'el gran solin',
        address: 'krottendorf 8, Kapfenberg AT'
        
    }
    
    scope.text = 'Faglord';
    log.info(location.path()); //grab what is in the hash
    
}]);