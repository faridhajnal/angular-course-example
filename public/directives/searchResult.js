var myApp = angular.module('angularApp');

myApp.directive("searchResult", function() { //camel case is standarizzed to search-reslut by angular for the html tags
   return {
       restrict: 'AECM', //attribute,element,class,comments((claass comments not commonly used...)) ... this tells angular that directives can be used as this type<<AE by default>>
       templateUrl: '/directives/searchresult.html',
       replace: true, //by default false, better for bootstrap
       scope:{
           //isolating the scope <<MODEL FOR DIRECTIVE ITSELF>>
           personName : "@", //just text, using normalized names <<@: no extra formatting>>     
           personAddress: "@" //available on the main.htm as attributes for directive!! (coming from the controller scope)
       }
   }
});