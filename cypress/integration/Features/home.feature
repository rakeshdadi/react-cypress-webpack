Feature: Home Page

Scenario: Mock user
    Given the user visits login page for the first time
    Then the user enter login details
    Then the user should see loader
    Then the user should see home page header and should not see loader
