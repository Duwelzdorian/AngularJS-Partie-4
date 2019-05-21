var app = angular.module('carsApp', []);

app.controller('carsCtrl', function($scope) {
    $scope.cars = [
    		{"marque":"Renault", "couleur":"verte"},
    		{"marque":"Citroen", "couleur":"grise"},
    		{"marque":"Opel", "couleur":"or"},
    		{"marque":"Ferrari", "couleur":"rouge"},
    		{"marque":"Peugeot", "couleur":"bleu"},
    		{"marque":"Nissan", "couleur":"verte"}
    ];
});
