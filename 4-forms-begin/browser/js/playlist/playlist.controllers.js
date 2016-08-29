juke.controller('PlaylistCtrl', function ($scope, $state, PlaylistFactory) {

  $scope.create = function() {
    PlaylistFactory.create($scope.playlist)
    .then(function(playlist){
      $state.go('playlist', {playlistId: playlist.id});
    });
  };

//scope.playlist = playlist;


  $scope.submit = function() {
    console.log();
  };

});

juke.controller('PlaylistsCtrl', function ($scope, PlaylistFactory) {

  PlaylistFactory.fetchAll();
  $scope.playlists = PlaylistFactory.getPlaylists();
});

juke.controller('APlaylistCtrl', function ($scope, PlaylistFactory, playlist, SongFactory, allSongs) {
  $scope.playlist = playlist;
  $scope.allSongs = allSongs;
  $scope.addSong = PlaylistFactory.addSong;
});
