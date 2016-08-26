juke.factory('PlaylistFactory', function ($http) {

  var cachedPlaylists = [];
  var PlaylistFactory = {};
  var currentPlaylist = {};

  PlaylistFactory.fetchAll = function () {
    return $http.get('/api/playlists')
    .then(function (response) {
      angular.copy(response.data, cachedPlaylists);
      return cachedPlaylists;
    });
  };

  PlaylistFactory.fetchById = function (id) {
    return $http.get('/api/playlists/' + id)
    .then(function (response) {
      return playlist = response.data;
    })
    .then(function(playlist){
    });
  };

  PlaylistFactory.create = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (response) {
      var playlist = response.data;
      cachedPlaylists.push(playlist);
      return playlist;
    });
  };

  PlaylistFactory.getPlaylists = function(){
    return cachedPlaylists;
  };

  PlaylistFactory.getCurrentPlaylist = function(){
    return currentPlaylist;
  };

  return PlaylistFactory;

});
