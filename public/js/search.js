/**
 * Search Functionality
 * @todo Custom Directive http://www.ng-newsletter.com/posts/beginner2expert-directives.html
 * @todo Custom Service http://www.ng-newsletter.com/posts/beginner2expert-services.html
*/

var app = angular.module('mymp3', []);

app.controller('SearchController', ['$scope', '$http', function($scope, $http){

	$scope.doSearch = function() {
		//Artist search
		$http({
			url : 'http://musicbrainz.org/ws/2/artist?fmt=json&query=' + $scope.searchQuery
		}).success(function(data, status, headers, config) {
			console.log(['Artist results', data]);
			$scope.artists = data.artists;
			$scope.artistCount = data.count;
			$scope.artistData = true;
		});

		//Album Search
		$http({
			url : 'http://musicbrainz.org/ws/2/release?fmt=json&query=' + $scope.searchQuery
		}).success(function(data, status, headers, config) {
			console.log(['Album results', data]);
			$scope.releases = data.releases;
			$scope.releaseCount = data.count;
			$scope.releaseData = true;
		});
	}
}]);