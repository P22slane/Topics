'use strict';

var registriApp = angular.module('registriApp', [
  'ngRoute',
  'registerControllers'
]);

registriApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'parts/curriculas_simple.html',
				controller: 'curriculumListCtrl'
			}).
			when('/simple', {
				templateUrl: 'parts/curriculas.html',
				controller: 'curriculumListCtrl'
			}).
			when('/edit/curricula', {
				templateUrl: 'parts/create_curriculas.html',
				controller: 'curriculumListCtrl'
			}).
			when('/edit/curricula/:searchedCurriculaId', {
				templateUrl: 'parts/create_curriculas.html',
				controller: 'curriculumListCtrl'
			}).
			when('/:curriculaShort/reg', {
				templateUrl: 'parts/reg.html',
				controller: 'workListCtrl'
			}).
			when('/reg', {
				templateUrl: 'parts/reg.html',
				controller: 'workListCtrl'
			}).
			when('/:defCurriculaShort/def', {
				templateUrl: 'parts/def.html',
				controller: 'defWorkListCtrl'
			}).
			when('/def', {
				templateUrl: 'parts/def.html',
				controller: 'defWorkListCtrl'
			}).
			when('/:opnCurriculaShort/opn', {
				templateUrl: 'parts/opn.html',
				controller: 'opnWorkListCtrl'
			}).
			when('/opn', {
				templateUrl: 'parts/opn.html',
				controller: 'opnWorkListCtrl'
			}).
			when('/user/:supervisorName/reg', {
				templateUrl: 'parts/sup.html',
				controller: 'supervisorCtrl'
			}).
			when('/user/:supervisorName/opn', {
				templateUrl: 'parts/sup.html',
				controller: 'supervisorCtrl'
			}).
			when('/sup/:supervisorName/def', {
				templateUrl: 'parts/sup.html',
				controller: 'supervisorCtrl'
			}).
			when('/user', {
				templateUrl: 'parts/sup_list.html',
				controller: 'supervisorCtrl'
			}).
			when('/edit/:supervisorName', {
				templateUrl: 'parts/edit.html',
				controller: 'supervisorCtrl'
			}).
			when('/create_user', {
				templateUrl: 'parts/create_user.html',
				controller: 'supervisorCtrl'
			}).
			when('/create_topic', {
				templateUrl: 'parts/create_topic.html',
				controller: 'workListCtrl'
			}).
			when('/work/:workTitle', {
				templateUrl: 'parts/create_topic.html',
				controller: 'workListCtrl'
			}).
			when('/login', {
				templateUrl: 'parts/login.html',
				controller: 'loginCtrl'
			}).
			when('/dashboard', {
				resolve:{
					"check": function($location,$rootScope){
						if(!$rootScope.loggedIn){
							$location.path('/login');
						}
					}
				},
				templateUrl: 'parts/dashboard.html',
				controller: 'loginCtrl'
			}).


			otherwise({
				redirectTo:'/'
			});
	}]);