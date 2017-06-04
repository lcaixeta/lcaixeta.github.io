var moduleIndexVar = angular.module('moduleIndex', []);

moduleIndexVar.controller('indexController', function($scope, $http) {

    $(document).ready(function(){
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
    });


});
