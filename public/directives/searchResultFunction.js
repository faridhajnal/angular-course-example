var myApp = angular.module('angularApp');

myApp.directive("searchResultFunction", function() { //camel case is standarizzed to search-reslut by angular for the html tags
   return {
       restrict: 'AECM', //attribute,element,class,comments((claass comments not commonly used...)) ... this tells angular that directives can be used as this type<<AE by default>>
       templateUrl: 'directives/searchresultfunction.html',
       replace: true, //by default false, better for bootstrap
       scope:{
           //isolating the scope <<MODEL FOR DIRECTIVE ITSELF>>
           personObject : "=", //equals denotes that is two way binding and allows passing an object
           formattedAddressFunction : "&" //functions for using in template where the directive is

        }
   }
});