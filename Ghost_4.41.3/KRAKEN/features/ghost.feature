Feature: members of ghost application

@user1 @web
Scenario: Como usuario registrado quiero acceder a la opción members y visualizar las opciones existentes
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click next
    And I wait for 3 seconds
    And I click members button
    And I wait for 3 seconds
    And I click new member button
    And I wait for 3 seconds
    And I click members button

@user2 @web
Scenario: Como usuario administrador quiero poder crear un nuevo miembro
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click next
    And I wait for 3 seconds
    And I click members button
    And I wait for 3 seconds
    And I click new member button
    And I wait for 3 seconds
    And I enter name new memeber "<NAME_NEW_MEMBER>"
    And I wait for 3 seconds
    And I enter email new memeber "<EMAIL_NEW_MEMBER>"
    And I wait for 3 seconds
    And I enter labels new memeber "<LABELS_NEW_MEMBER>"
    And I wait for 3 seconds
    And I enter notes new memeber "<NOTE_NEW_MEMBER>"
    And I wait for 3 seconds
    And I click save button
    And I wait for 3 seconds

@user3 @web
Scenario: Como usuario administrador quiero poder filtrar en la lista de miembros
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click next
    And I wait for 3 seconds
    And I click members button
    And I wait for 3 seconds
    And I click search members "<SEARCH_USER>"
    And I wait for 3 seconds

@user15 @web
Scenario: Creación y publicación de un Post
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME>"
    And I wait for 3 seconds
    And I enter password "<PASSWORD>"
    And I wait for 3 seconds
    And I click next
    And I wait for 1 seconds 
    When I click on post buttom 
    And I wait for 3 seconds
    When I write a post title "<POSTITLE>"
    And I wait for 1 seconds
    When I write a post description "<DESCRIPTION1>"
    And I wait for 1 seconds
    And I click to create a post
    And I wait for 1 seconds
    And I publish a post
    And I wait for 1 seconds
    And I go back to post menu

@user16 @web
Scenario: Actualización de un Post
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME>"
    And I wait for 3 seconds
    And I enter password "<PASSWORD>"
    And I wait for 3 seconds
    And I click next
    And I wait for 1 seconds
    And I click post
    And I wait for 1 seconds
    And I click a post created
    And I wait for 1 seconds
    When I write a post title "<POSTITLE>"
    And I wait for 1 seconds
    When I write a post description "<DESCRIPTION1>"
    And I wait for 1 seconds
    And I click to create a post
    And I wait for 1 seconds
    And I publish a post
    And I wait for 1 seconds
    And I go back to post menu