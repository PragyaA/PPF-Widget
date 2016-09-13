'use strict';
angular
        .module('firstApplication', ['ngMaterial'])
        .controller('TestCtrl', ['$scope',function($scope) 
        {
        	$scope.calculate = function(){
		       window.location = "page2/page2.html";
		 	}
        }]);
    