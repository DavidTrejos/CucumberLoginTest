Feature: Login functionality

  Scenario: User logs in with invalid credentials
    Given the user navigates to the login page
    When the user enters valid credentials
    And clicks the login button
    Then the user should be redirected to the dashboard
