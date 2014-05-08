angular.module('auction').factory('buyerService',function($http,constantsService) {
    var buyerService = {
        readBuyer: function( userID ) {
            return $http.get( constantsService.apiGetEndpoint() + '/buyers/' + userID + '.json' );
        },
        readBuyers: function() {
            return $http.get( constantsService.apiGetEndpoint() + '/buyers.json' );
        },
        createBuyer: function( buyerDetails ) {
            return $http.post( constantsService.apiGetEndpoint() + '/buyers.json', buyerDetails );
        }
    };
    return buyerService;
});
