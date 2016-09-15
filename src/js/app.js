require("bootstrap-sass");
require("../sass/main.scss");

var app = angular.module("Portfolio", ["ngSanitize"]);

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