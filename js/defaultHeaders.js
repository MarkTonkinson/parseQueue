var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function(){
	return {
		request: function(config) {
			config.headers = {'X-Parse-Application-Id': 'LhbMz7hIlb4mqI2OTkrLY09JBzh9FU7j78w8FjoS' , 'X-Parse-REST-API-Key': 'JJpp215LnH9Zghp3nWDy8L2AUC8KduahrS6lp9Wo'}
			return config;
		}
	};
});