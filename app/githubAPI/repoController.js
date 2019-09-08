(function(){
  
  var module = angular.module("gitHubViewer");
  
  var repoController = function($scope, $routeParams, github){
    
    var onRepo = function(data){
      $scope.repo = data;
    };
    
    var onError = function(reason){
      $scope.error = reason;
    }
    
    var repoName = $routeParams.reponame;
    var username = $routeParams.username;
    
      github.getRepoDetails(username, repoName)
        .then(onRepo, onError);
  };
  
  module.controller("repoController", repoController);
  
}());