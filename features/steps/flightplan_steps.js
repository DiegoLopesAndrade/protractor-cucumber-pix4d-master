var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var FlightPlanSteps = function () {

  var FlightPlanPage = require("../pages/flightplan_page.js");

  this.World = function MyRoute() {
    this.page = new FlightPlanPage();
  };

  this.Given('The stupendous plan is open', function (callback) {
    this.page.get();
    callback();
  });

  this.When('Click on "+" to insert a new flight plan', function () {
    this.page.insertButton();
  });

  this.When('Click on the location on map to start the flight plan', function () {
    this.page.firstClickMap();
  });
  
  this.When('Click on the second location flight plan', function () {
    this.page.secondClickMap();
  });

  this.When('Click on "+" button to save it', function () {
    this.page.clickToSave();
  });
};

module.exports = FlightPlanSteps;