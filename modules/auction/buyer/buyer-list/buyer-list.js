angular.module('auction').controller('BuyerListCtrl',function($scope,buyerService){

    $scope.readBuyers = function() {
        buyerService.readBuyers().
        success(function( data ) {
            $scope.buyers = data;
        }).
        error(function(data) {
            console.log(data);
        });
    };

    $scope.readBuyers();

});