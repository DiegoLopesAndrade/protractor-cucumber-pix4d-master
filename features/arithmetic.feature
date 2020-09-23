Feature: Pix4d flight plan
  As a user of the Pix4d flight plan
  I want to create a new route to the flight plan and save it

  Scenario: Create a flight plan
    Given The stupendous plan is open
    When Click on "+" to insert a new flight plan
    And Click on the location on map to start the flight plan
    #And Click on the second location flight plan
    Then Click on "+" button to save it