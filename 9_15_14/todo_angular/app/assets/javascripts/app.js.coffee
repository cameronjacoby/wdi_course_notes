ToDoApp = angular.module("ToDoApp", ["ngRoute", "templates"])

ToDoApp.config ["$routeProvider", "$locationProvider", ($routeProvider, $locationProvider) ->
  $routeProvider
    .when "/",
      templateUrl: "index.html"
]