angular.module('auction', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('auction').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('buyer-list', {
        url: '/buyer-list',
        templateUrl: 'modules/auction/buyer/buyer-list/buyer-list.html'
    });
    $stateProvider.state('buyer-new', {
        url: '/buyer-new',
        templateUrl: 'modules/auction/buyer/buyer-new/buyer-new.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('auction').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

// http://thegreenpizza.github.io/2013/05/25/building-minification-safe-angular.js-applications/

angular.module('auction').service('constantsService', [ function() {
    var constantsService = {
        apiGetEndpoint: function( ) {
            return 'http://localhost:8000/api/v1';
        }
    };
    return constantsService;
}]);
