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
    
    scope.people =[
        {
        
        name: 'Don Ramon',
        address: 'Machetero 8',
        city : 'Cuicuilapan',
        state: 'CDMX',
        zip: '15712'
        
        },
        {
        name: 'Hardcoude Value',
        address: 'Krottendorf 98372',
        city : 'Kapfenberg',
        state: 'AT',
        zip: '1123'
        },
        
        {
        name: 'San perra',
        address: 'Oceanía # 17.5',
        city : 'La Merced',
        state: 'EdoMex',
        zip: '666'
        }
        
        ]
    
    scope.formattedAddress = function(personWithFunction){
        
        
        return personWithFunction.address + ', ' + personWithFunction.city + ', ' + personWithFunction.state + ' ' + personWithFunction.zip;
         
        
        
    }
    
    scope.text = 'Faglord';
    log.info(location.path()); //grab what is in the hash
    
}]);