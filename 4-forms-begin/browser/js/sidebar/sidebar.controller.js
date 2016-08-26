'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory) {

  $scope.getPlaylists = PlaylistFactory.fetchAll;

});
