import { user, password, MainPage } from '../config';

var count = 0;
function ScreenShot(){
    // const uuidd = () => Cypress._.random(0, 1e6)
    // const id = uuidd()
    const testname = `screenshot_${count}`
    cy.screenshot(testname);
    cy.wait(2000);
    count++;
}

describe("Probando cypress sobre Ghost", function () {
    it("Create_Publish_Post", function () {
        //Función para loguearse en la app
        Login(user, password);
        Create_Publish_Post();
    });
    it("Update_Publish_Post", function () {
        //Función para loguearse en la app
        Login(user, password);
        Update_Publish_Post();
    });
    it("Publish_to_unpublish", function () {
        //Función para loguearse en la app
        Login(user, password);
        Publish_to_unpublish();
    });
});

function Login(user, password) {
    // Pruebas pra hacer login y empezar a realizar las pruebas
    cy.visit(MainPage + "ghost/#/site");
    cy.get('[name="identification"]').type(user);
    cy.get('[name="password"]').type(password);
    cy.get('.login').click()
    cy.wait(1000);
}

function Create_Publish_Post(){
    cy.get('.ember-view').contains('Posts').click();
    ScreenShot();
    cy.wait(1000);
    cy.get('#ember29 > span').click();
    cy.wait(1000);
    cy.get('.gh-editor-title').type('Segunda Guerra Mundial');
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type('Guerra entre los aliados y las potencias del Eje');
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type('{enter}');
    cy.wait(1000);
    ScreenShot();
    cy.get('.gh-publishmenu').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);
    cy.get('.fw3').click();
    cy.wait(5000);
    ScreenShot();
}

function Update_Publish_Post(){
    cy.get('.ember-view').contains('Posts').click();
    cy.wait(1000);
    ScreenShot();
    cy.get('.posts-list > :nth-child(2)').click();
    cy.wait(1000);
    cy.get('.gh-editor-title').clear();
    cy.get('.gh-editor-title').type('Primera Guerra Mundial');
    cy.wait(1000);
    cy.get('.koenig-editor__editor').clear();
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type('La Primera Guerra Mundial, anteriormente llamada la Gran Guerra, fue una confrontación bélica centrada en Europa que empezó el 28 de julio de 1914 y finalizó el 11 de noviembre de 1918, cuando Alemania aceptó las condiciones del armisticio.');
    cy.wait(1000);
    ScreenShot();
    cy.get('.gh-publishmenu').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);
    cy.get('.fw3').click();
    ScreenShot();
}

function Publish_to_unpublish(){
    cy.get('.ember-view').contains('Posts').click();
    cy.wait(1000);
    ScreenShot();
    cy.get('.posts-list > :nth-child(2)').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu').click();
    cy.wait(2000);
    ScreenShot();
    cy.get('.gh-publishmenu-radio-content').contains('Unpublished').click();
    cy.wait(2000);
    ScreenShot();
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);
    cy.get('.fw3').click();
    ScreenShot();
}
