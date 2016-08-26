juke.controller('PlaylistCtrl', function ($scope, $state, PlaylistFactory) {

  $scope.create = PlaylistFactory.create;
  $scope.id = {};

//scope.playlist = playlist;

  $scope.setId = function (id){
    $scope.id = id;
  }

  $scope.submit = function(id) {
    console.log(id);
    // $state.go('playlist', {playlistId: $scope.id});
  };

});

juke.controller('PlaylistsCtrl', function ($scope, PlaylistFactory) {

  PlaylistFactory.fetchAll();
  $scope.playlists = PlaylistFactory.getPlaylists();
  console.log($scope.playlists);

});

juke.controller('APlaylistCtrl', function ($scope, PlaylistFactory, playlist) {

  $scope.playlist = playlist;
  console.log(playlist);
});
