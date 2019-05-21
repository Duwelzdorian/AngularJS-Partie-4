var myApp = angular.module('myApp', []); //creation d'une variable pour l'application
myApp.controller('showController', ['$scope', function($scope) { // Ajout dune fonction scope au controller
  $scope.Show = false; // textShow = False pour que le paragraphe s'affiche au lancement

  $scope.Hide = function() { // fonction au click sur le bouton cacher
    $scope.textHide = true; // au clic le paragraphe est affiché
  }
  $scope.Show = function() { // fonction au click sur le bouton afficher
    $scope.textHide = false; // au clic le paragraphe est caché
  }
}]);
