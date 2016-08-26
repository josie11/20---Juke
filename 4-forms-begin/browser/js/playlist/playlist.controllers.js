juke.controller('PlaylistCtrl', function ($scope, $rootScope, PlaylistFactory) {

  $scope.create = PlaylistFactory.create;

  $scope.submit = function() {
    console.log('i worked');
    $scope.playlist.name = "";
  };

});
