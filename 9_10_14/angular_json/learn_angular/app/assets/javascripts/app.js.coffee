# Define my application
TestApp = angular.module "TestApp", []

# Create a controller
TestApp.controller "IndexCtrl", ['$scope', ($scope) ->
  # $scope.title = "Let's learn Angular and Coffee!"
  # $scope.checked = true

  # $scope.friends = [{
  #   name: "Steph",
  #   style: "red"
  # },
  # {
  #   name: "Alli",
  #   style: "green"
  # },
  # {
  #   name: "Connie",
  #   style: "blue"
  # },
  # {
  #   name: "Palmer",
  #   style: "navy"
  # }]

  # $scope.$watch "typing", ->
  #   console.log $scope.typing
  #   if $scope.typing == "secret"
  #     $scope.notice = "You got it!"
  #     $scope.removed = true

  # $scope.value = 0

  # $scope.addOne = ->
  #   $scope.value += 1

  # $scope.subtractOne = ->
  #   $scope.value -= 1

  $scope.books = [{
    title: "What If?: Serious Scientific Answers to Absurd Hypothetical Questions",
    rating: 4.8,
    price: 14.65
  },
  {
    title: "Player's Handbook (Dungeons & Dragons)",
    rating: 4.6,
    price: 29.95
  },
  {
    title: "100 Days of Real Food: How We Did It, What We Learned, and 100 Easy, Wholesome Recipes Your Family Will Love",
    rating: 4.8,
    price: 17.99
  },
  {
    title: "Campbell Biology (10th Edition)",
    rating: 3.8,
    price: 180.56
  },
  {
    title: "Edge of Eternity: Book Three of The Century Trilogy",
    rating: 4.5,
    price: 21.59
  }]

  $scope.boughtBook = (book) ->
    $scope.books.splice($scope.books.indexOf(book), 1)

]

TestApp.filter 'addTax', ->
  (item, rate) ->
    item * (1 + rate)