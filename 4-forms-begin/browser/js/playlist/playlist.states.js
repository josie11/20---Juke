
juke.config(function($stateProvider){

  $stateProvider.state('newPlaylist', {
      url: '/playlists/new',
      templateUrl: '/js/playlist/templates/playlist-form.html',
      controller: 'PlaylistCtrl'
  });

    $stateProvider.state('playlist', {
      url: '/playlists/:playlistId',
      templateUrl: '/js/playlist/templates/playlist.html',
      controller: 'APlaylistCtrl',
      resolve: {
        playlist: function(PlaylistFactory, $stateParams) {
          return PlaylistFactory.fetchById($stateParams.playlistId);
        },
        allSongs: function(SongFactory) {
          return SongFactory.fetchAllSongs();
        }
      }
  });

});
