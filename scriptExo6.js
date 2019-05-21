var myApp = angular.module('myApp', []);
myApp.controller('showController', ['$scope', function($scope) {
  $scope.textShow1 = true; // les 2 paragraphes sont cachés
  $scope.textShow2 = true;

  $scope.show1 = function() {
    $scope.textShow1 = false; // affiche le premier paragraphe
    $scope.textShow2 = true;
  }
  $scope.show2 = function() {
    $scope.textShow2 = false; // affiche le second paragraphe
    $scope.textShow1 = true;
  }
}]);
