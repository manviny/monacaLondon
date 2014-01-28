// This is a JavaScript file

'use strict';

/*
    Obtiene datos de configuracion de la app
	imagen de portada, datos para contactar...
*/
angular.module('patrimonio24App')
  .controller('MainCtrl', function ($scope, $http) { 
        
        $http.get(  'http://patrimonio24.com/municipios/poblacion/lliria.json',{ cache:false } ).success(function (response) { 
            $scope.data = response.lits;   
        })
        
    });