Feature: members of ghost application

@user14 @web
Scenario: Check Metadata Tags - Tags
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click next
    And I wait for 5 seconds
    And I go to tags element
    And I wait for 2 seconds
    And I select first element of list tags
    And I wait for 2 seconds
    And I select meta btn
    And I wait for 2 seconds
    And I set meta title as "<META_TAG_TITLE>"
    And I wait for 2 seconds
    And I set meta desc as "<META_TAG_DESC>"
    And I click save btn
    And I wait for 3 seconds

    