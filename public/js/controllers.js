'use strict';

var registerControllers = angular.module('registerControllers', ['ngResource']);

registerControllers.controller('curriculumListCtrl', ['$scope', '$rootScope', '$http','$routeParams', '$resource',
	function($scope, $rootScope, $http, $routeParams, $resource){

		$scope.SearchedCurriculaId = $routeParams.searchedCurriculaId;

		//Liigi lugemine andmebaasist
		var ThesisType = $resource('api/thesisTypes');

		ThesisType.query(function(results){
			$scope.thesisTypes = results;
		});

		//Õppekavade lugemine andmebaasist
		var Curriculas = $resource('api/curriculas');

		var CurriculaId = $resource('api/curriculas/:curricula_id');

		Curriculas.query(function(results){
			$scope.curriculas = results;
		});

		$scope.refreshCurriculas = function(){
			Curriculas.query(function(results){
				$scope.curriculas = results;
			});
		};

		//Õppekava otsimine Id järgi
		if (Boolean($routeParams.searchedCurriculaId)){
			console.log("If tötöab");
			$http.get('api/curriculas/' + $routeParams.searchedCurriculaId).success(function (data) {
        		$scope.curriculasByIdData = data;
        		console.log(data);
				console.log($scope.curriculaId);
			});
		};

		$scope.editCurricula = function(data){
			console.log(curricula);
			$http.get('api/curriculas/' + $routeParams.searchedCurriculaId).success(function (data) {
        		$scope.curriculasByIdData = data;
			
			$scope.refreshCurriculas();
			});
		};

		$scope.changeEdits = function(){
			$http.get('api/curriculas/' + $routeParams.searchedCurriculaId).success(function (data) {
        		$scope.underEditCurricula = data;

        	});
        		
        		$scope.nextCurricula = {
        			"title": $scope.currivulaTitle,
        			"title_box": $scope.currivulaTitle,
        			"thesis_type_id": $scope.currivulaTitle,
        			"short": $scope.currivulaTitle
        		};

        	$http.put('api/curriculas/'+ $routeParams.searchedCurriculaId, $scope.nextCurricula).success(function(){
        		console.log($scope.nextCurricula);
      			//$scope.reset();
      			//$scope.activePath = $location.path('/');
    		});
		};
		

		//$rootScope.curriculasName =[];

		/*$scope.addCurricula = function (data){
				console.log(data);
				$rootScope.curriculasName= data;
		};*/

		$scope.curriculaId =[]

		$scope.remove = function (curricula){
				console.log("Removing:"+curricula);
				$http.delete('api/curriculas/'+curricula._id)
                .then(function(response) {
                    return response.data;
                });

                $scope.refreshCurriculas();		
		};


		$scope.curriculas = []

		$scope.createCurricula = function (){
			var curricula = new Curriculas();
			curricula.title = $scope.currivulaTitle;
			curricula.title_box = $scope.currivulaBoxTitle;
			curricula.thesis_type_id =$scope.currivulaType;
			curricula.short = $scope.currivulaShort;
			console.log(curricula);
			curricula.$save(function(result){
				$scope.curriculas.push(result);
				
				$scope.currivulaTitle = '';
				$scope.currivulaBoxTitle = '';
				$scope.currivulaType = '';
				$scope.currivulaShort = '';
			});

			$scope.refreshCurriculas();
		}


/*
		$http.get('data/curricula.json').success(function(data){
			$scope.curriculas = data;
		});
*/
		$scope.date = 'age';


}]);



registerControllers.controller('workListCtrl', ['$scope', '$rootScope', '$http','$routeParams', '$resource',
	function($scope, $rootScope, $http,$routeParams,$resource){
		
		
		$scope.curriculaShort = $routeParams.curriculaShort;

		/*if($scope.curriculaShort && $scope.curriculaShort == "IFbak"){
			$rootScope.curriculasName= "Informaatika (bakalaureusetöö)";
		}*/
		//$scope.curriculaName = $root.curriculasName;

		
		//Õppekavade lugemine andmebaasist
		var Work = $resource('/api/works');

		Work.query(function(results){
			$scope.works = results;
		});

		//$scope.works = []
/*
		$http.get('data/works.json').success(function(data){
			$scope.works = data;
		});
*/
	}]);

registerControllers.controller('defWorkListCtrl', ['$scope', '$rootScope', '$http','$routeParams', '$resource',
	function($scope, $rootScope, $http,$routeParams,$resource){
		
		$scope.defCurriculaShort = $routeParams.defCurriculaShort;

		$scope.curriculaShort = $routeParams.curriculaShort;
		
		//Õppekavade lugemine andmebaasist
		var Work = $resource('/api/works');

		Work.query(function(results){
			$scope.works = results;
		});

		//$scope.works = []

/*
		$http.get('data/works.json').success(function(data){
			$scope.works = data;
		});
*/
	}]);

registerControllers.controller('opnWorkListCtrl', ['$scope', '$rootScope', '$http','$routeParams', '$resource',
	function($scope, $rootScope, $http,$routeParams, $resource){
		
		$scope.opnCurriculaShort = $routeParams.opnCurriculaShort;

		$scope.curriculaShort = $routeParams.curriculaShort;

		var Work = $resource('/api/works');

		Work.query(function(results){
			$scope.works = results;
		});

		var WorkById = $resource('/api/works/:work_id')

		$scope.works = []

/*
		$http.get('data/works.json').success(function(data){
			$scope.works = data;
		});
*/
	}]);
registerControllers.controller('supervisorCtrl', ['$scope', '$http','$routeParams', '$resource',
	function($scope, $http, $routeParams, $resource){
		
		$scope.supervisorName = $routeParams.supervisorName;

		var Supervisor = $resource('/api/supervisor');

		Supervisor.query(function(results){
			$scope.users = results;
		});


		$scope.users =[]

		var Work = $resource('/api/works');

		Work.query(function(results){
			$scope.works = results;
		});

		//$scope.works = []

		$scope.createUser = function (){
			var supervisor = new Supervisor();
			supervisor.firstname = $scope.userFirstName;
			supervisor.lastname = $scope.userLastName;
			supervisor.email = $scope.userEmail;
			supervisor.password = $scope.userPassword;
			supervisor.info = $scope.userInfo;
			supervisor.phone = $scope.userPhone;
			supervisor.room = $scope.userRoom;
			supervisor.consultation = $scope.userConsultation;
			supervisor.tag = $scope.userTag;
			supervisor.$save(function(result){
				$scope.users.push(result);
				$scope.userFirstName = '';
			});
		}
	}]);

registerControllers.controller('loginCtrl', ['$scope', '$http','$routeParams', '$rootScope','$resource','$location',
	function($scope, $http, $routeParams, $rootScope, $resource, $location){

		$scope.login = function(data){
			$http.get('api/supervisor/' + $scope.userMeil +'/meil').success(function (data) {
        		$scope.loginData = data;
        		console.log($scope.loginData);
        	
        		if($scope.userMeil == data.email && $scope.userPas == data.password){
				$rootScope.loggedIn = true;
				console.log('Nice')
				$location.path('/dashboard');
				}else{
				alert('Bad')
				}

        	});
			

		};

	}]);