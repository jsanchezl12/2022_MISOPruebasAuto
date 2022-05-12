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
    Then I confirm member created 
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
    
@user4 @web
Scenario: Como usuario administrador quiero poder gestionar los filtros en la biusqueda de miembros
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
    And I click filter button
    And I wait for 3 seconds
    And I click filter item
    And I wait for 3 seconds
    And I click filter operator
    And I wait for 3 seconds
    And I enter filter parameter "<FILTER_ITEM>"
    And I wait for 3 seconds

@user5 @web
Scenario: Como usuario administrador quiero poder eliminar un miembro
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
    And I click on memeber list item 
    And I wait for 3 seconds
    And I click on settings members
    And I wait for 3 seconds


    #Scenarios Andres

@user6 @web
Scenario: Como usuario inicio sesion y creo una nueva Pagina
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 3 seconds
    And I click next
    And I wait for 3 seconds
    And I click Pages
    And I wait for 3 seconds
    And I click New-Page
    And I wait for 3 seconds
    And I written Page_title 'PAGINA1'
    And I wait for 3 seconds
    And I written Page_content 'PAGINA DESCRIPCION'
    And I click Publish_drop
    And I wait for 3 seconds
    And I click Publish
    And I wait for 3 seconds

@user7 @web
Scenario: Como usuario actualizo una Pagina Existente
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click next
    And I wait for 3 seconds
    And I click Pages
    And I wait for 3 seconds
    And I edit last page
    And I wait for 3 seconds
    And I written Page_title 'PAGETITLE2'
    And I wait for 3 seconds
    And I clear Page_content
    And I wait for 3 seconds
    And I written Page_content 'DESCRIPTION2'
    And I wait for 3 seconds
    And I click Publish_drop
    And I wait for 3 seconds
    And I click Publish

@user8 @web
Scenario: Como usuario elimino una Pagina Existente
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click next
    And I wait for 7 seconds
    And I click Pages
    And I wait for 5 seconds
    And I edit last page
    And I wait for 10 seconds
    And I click Page settings
    And I wait for 5 seconds
    And I click Delete Page
    And I wait for 5 seconds
    And I click Delete


@user9 @web
Scenario: Como usuario filtro las paginas publicadas del listado de paginas
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click next
    And I wait for 7 seconds
    And I click Pages
    And I wait for 10 seconds
    And I select all pages
    And I wait for 5 seconds
    And I select all published pages

#Scenarios Juan

@user10 @web
Scenario: Inicio de Sesion - Tags
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click next
    And I wait for 5 seconds
    And I go to tags element
    And I wait for 5 seconds


@user11 @web
Scenario: Update Tag MetaData - Tags
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

@user12 @web
Scenario: Update Tag TwitterData - Tags
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
    And I select twitter btn
    And I wait for 2 seconds
    And I set twitter title as "<TWITTER_TAG_TITLE>"
    And I wait for 2 seconds
    And I set twitter desc as "<TWITTER_TAG_DESC>"
    And I click save btn
    And I wait for 3 seconds

@user13 @web
Scenario: Update Tag FacebookData - Tags
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
    And I select facebook btn
    And I wait for 2 seconds
    And I set facebook title as "<FACEBOOK_TAG_TITLE>"
    And I wait for 2 seconds
    And I set facebook desc as "<FACEBOOK_TAG_DESC>"
    And I click save btn
    And I wait for 3 seconds

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

#Escenarios David

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

@user17 @web
Scenario: Cambiar Post de estado Publish a Draft
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
    And I wait for 2 seconds
    And I click update
    And I wait for 2 seconds
    And I click dropdown publish select
    And I wait for 2 seconds
    And I select only memebers option
    And I wait for 2 seconds
    And I go back to post menu

@user18 @web
Scenario: Cambiar Post de estado Publish a Draft
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
    And I wait for 2 seconds
    And I click update
    And I wait for 2 seconds
    And I click delete button
    And I wait for 2 seconds
    And I delete post
    And I wait for 2 seconds

@user19 @web
Scenario: Como usuario quiero visitar la pagina principal de staff
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click next
    And I wait for 3 seconds
    And I click on setting general button
    And I wait for 3 seconds
    And I click on staff button
    And I wait for 3 seconds

@user20 @web
Scenario: Como usuario quiero invitar personas a mi staff
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click next
    And I wait for 3 seconds
    And I click on setting general button
    And I wait for 3 seconds
    And I click on staff button
    And I wait for 3 seconds
    And I click on invite people button
    And I wait for 3 seconds
    And I enter email user invite "<INVITE_STAFF>"
    And I wait for 3 seconds
    And I click on send invite