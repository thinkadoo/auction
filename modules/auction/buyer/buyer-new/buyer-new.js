angular.module('auction').controller('BuyerNewCtrl',function($scope,$location,buyerService){

    $scope.addBuyer = function(buyer){
        buyerService.createBuyer(buyer)
        .success(function(data){
            $location.path('/buyer-list');
        })
        .error(function(data){
            console.log(data);
        });
    };

});