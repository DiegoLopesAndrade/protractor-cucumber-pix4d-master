var FlightPlanPage = function () {

  this.get = function () {
    browser.get('https://stupendous-birth.surge.sh');
  };

  this.insertButton = function () {
    element(by.css('.md-list-avatar-icon')).click();
  };

  this.firstClickMap = function () {
    element(by.css('.leaflet-zoom-animated:nth-child(1)')).click();
  };
  
  this.secondClickMap = function () {
    element(by.css('.leaflet-overlay-pane > .leaflet-zoom-animated')).click();
  };

  this.clickToSave = function () {
    element(by.css('.md-list-avatar-icon')).click();
  };
};

module.exports = FlightPlanPage;