const angular = require('angular');

var app = angular.module("Portfolio", [require('angular-sanitize')]);

app.filter('startFrom', function() {
// Fetched from http://stackoverflow.com/a/28411525
  return function(input, start) {
    if(input) {
      start = +start; //parse to int
      return input.slice(start);
    }
    return [];
  }
});

module.exports = app;