githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  return {
    query: function(searchTerm) {
      return $http({
        method: 'GET',
        url: queryUrl,
        params: {
          'q': searchTerm
        }
      })
    }
  }
}]);
