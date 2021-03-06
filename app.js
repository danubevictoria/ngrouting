
// Declare app level module which depends on views, and components

//We inject ngRoute here in order to use it in our app
angular.module('myApp', [
  'ngRoute'
]).

//use route provider to return certain templates when a user requests
//a page
config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/home', {
	    templateUrl: 'views/home.html', //this is the page we will return
	    controller: 'HomeCtrl' //this is the controller we will use
	  })
  .when('/pageone', {
      templateUrl: 'views/pageOne.html', //this is the page we will return
      controller: 'pageOneCtrl' //this is the controller we will use
    })
  .when('/pagetwo', {
      templateUrl: 'views/pageTwo.html', //this is the page we will return
      controller: 'pageTwoCtrl' //this is the controller we will use
    })


    //TODO:
    //Uh oh, looks like the routes for pageOne and pageTwo are missing!!!
    //using the same syntax as the above route, add routes for the missing views

    //here is our failsafe -- if a user requests a route we don't have
    //set up, we will just direct them back to home
  	.otherwise({redirectTo: '/home'
	});


}]);
