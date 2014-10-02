var app = angular.module('parseQ');

app.controller('mainController', function($scope, parseService){
	

	$scope.getQuestion =function(){
		parseService.getParseData()
		.then(function(data){
			console.log(data);
			$scope.questions = data.data.results;	
		})
		
	}
	$scope.getQuestion();
	

	$scope.postQuestion = function(){
		if(!$scope.studentQuestion){  
			alert("You forgot to ask a question.");
		} else {
		parseService.postParseData($scope.studentQuestion)
		.then(function(data){
			$scope.getQuestion();
		});
		$scope.studentQuestion = "";	
	}
	}

	$scope.changeStatus = function(question){
		console.log(question);
		parseService.updateParseData(question)
		.then(function(data){
			$scope.getQuestion();
		})
	}

	$scope.deleteQuestion = function(question){
		parseService.deleteParseData(question)
		.then(function(data){
			$scope.getQuestion();
		})
	}
});