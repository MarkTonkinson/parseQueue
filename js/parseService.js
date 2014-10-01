var app = angular.module('parseQ');

app.service('parseService', function($http, $q){  //dont put app.service = !!!!!!!!! it's app.service()
	this.postParseData = function(question){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/parseq',
			data: {
				content: question,  //i'm assigning content as the key, message is the parameter it pulls in
				status: "red"
			}
		}).then(function(data){
			console.log(data);
			deferred.resolve(data);//this resolve is a method that is being called on $q?
		})
		return deferred.promise;
	};

	this.updateParseData = function(question){
		var deferred = $q.defer();
		$http({
			method: 'PUT',
			url: 'https://api.parse.com/1/classes/parseq/' + question.objectId,
			data: {status: "yellow"}
		}).then(function(data){
			deferred.resolve(data);
		})
		return deferred.promise;
	};


	this.getParseData = function(){
		return $http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/parseq?order=-createdAt'
		})
	};

	this.deleteParseData = function(question){
		var deferred = $q.defer();
		$http({
			method: 'DELETE',
			url: 'https://api.parse.com/1/classes/parseq/' + question.objectId,
		}).then(function(data){
			deferred.resolve(data);
		})
		return deferred.promise;
	}
});