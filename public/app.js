var myApp = angular.module('angularApp',['ngRoute']); //injecting the route providerz

myApp.config(function($routeProvider){
   
   $routeProvider
   
   .when('/', {
       
       templateUrl : 'pages/main.htm', //physical location
       controller: 'mainControl' //connect the HTM to a specific controller
       
   })
   
   .when('/second', { 
       
       templateUrl :'pages/second.htm',
       controller : 'secondControl'
       
   })
    
   .when('/second/:num', { //as many patterns as desired.
       
       templateUrl :'pages/second.htm',
       controller : 'secondControl'
       
   })
    
});

