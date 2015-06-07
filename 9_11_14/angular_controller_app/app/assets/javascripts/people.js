var PersonCtrl = function ($scope) {

  $scope.people = [];

  $scope.handleSubmit = function () {
    console.log(this.person);
    this.people.push(this.person);
    this.person = {};
  };

};