/**
@toc
1. setup - whitelist, appPath, html5Mode
*/

'use strict';


angular.module('myApp', [
'ui.router', 'ngSanitize', 'ngTouch',		//additional angular modules
'daywiss.angular-user'
])
.run(['dpaConstants',function(Constants){
  //override contsants in here 
  //Constants.states.errorState='app.err'
}])
.config(['$urlRouterProvider'
    ,'$locationProvider'
    ,'$compileProvider'
    ,'$stateProvider', function(
      $urlRouterProvider
      ,$locationProvider
      ,$compileProvider
      ,$stateProvider) {
	/**                                                                 
	setup - whitelist, appPath, html5Mode
	@toc 1.
	*/
	$locationProvider.html5Mode(false);		//can't use this with github pages / if don't have access to the server
	
	// var staticPath ='/';
	var staticPath;
	// staticPath ='/angular-services/angular-user/';		//local
	staticPath ='/';		//nodejs (local)
	// staticPath ='/angular-user/';		//gh-pages
	var appPathRoute ='/';
	var pagesPath =staticPath;
	
  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('app.home',
      {
        url:'/'
        ,templateUrl:pagesPath+'partials/home'
        ,controller:'HomeCtrl'
        ,accessLevel:window.accessLevels.public
      })
    .state('app.admin',
      {
        url:'/admin'
        ,templateUrl:pagesPath+'partials/admin'
        ,controller:'AdminCtrl'
        ,accessLevel:window.accessLevels.admin
      })
    .state('app.error',
      {
        url:'/error'
        ,controller:'ErrorCtrl'
        ,templateUrl:pagesPath+'partials/error'
      })
    .state('app.login',
      {
        url:'/login'
        ,controller:'LoginCtrl'
        ,templateUrl:pagesPath+'partials/login'
      })
	
	//$routeProvider.when(appPathRoute+'home', {templateUrl: pagesPath+'home/home.html'});

	//$routeProvider.otherwise({redirectTo: appPathRoute+'home'});
	
}]);
