var app4 = angular.module("app4",[])

app4.controller("eventCtrl", function($scope){
    $scope.blur = 0
})
app4.controller("ctrl1", function($scope){
    $scope.disableButton = false
    $scope.dayTimeButton = false

    $scope.cities = [
        {"City": "Istanbul",
        "Code": "34"},
        {"City": "Ankara",
        "Code": "06"},
        {"City": "Izmir",
        "Code": "35"},
    ]
})