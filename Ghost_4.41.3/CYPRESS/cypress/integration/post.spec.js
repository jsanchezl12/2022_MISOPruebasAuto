const user = "d.moralesa2@uniandes.edu.co";
const password = "Bogota2022";

describe("Probando cypress sobre Ghost", function () {
    beforeEach(()=>{
        cy.visit(MainPage + 'ghost/#/signin');
        cy.wait(3000)
        cy.get("#ember7").type(user)
        cy.get("#ember9").type(password)
        cy.get('#ember11').click()
        cy.wait(3000)
    })
    it("Create_Publish_Post", function () {
        Create_Publish_Post();
    });
    it("Update_Publish_Post", function () {
        Update_Publish_Post();
    });
    it("Publish_to_unpublish", function () {
        Publish_to_unpublish();
    });
    it("Deleting_Post", function () {
        Deleting_Post();
    });
});

function Login(user, password) {
    // Pruebas pra hacer login y empezar a realizar las pruebas
    cy.visit("http://localhost:2368/ghost/#/site");
    cy.get('#ember8').type(user);
    cy.get('#ember10').type(password);
    cy.get('#ember12 > span').click();
    cy.wait(1000);
}

function Create_Publish_Post(){
    cy.get('.ember-view').contains('Posts').click();
    cy.wait(1000);
    cy.get('#ember29 > span').click();
    cy.wait(1000);
    cy.get('.gh-editor-title').type('Segunda Guerra Mundial');
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type('Guerra entre los aliados y las potencias del Eje');
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type('{enter}');
    cy.wait(1000);
    cy.get('.gh-publishmenu').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);
    cy.get('.fw3').click();
    cy.wait(5000);
}

function Update_Publish_Post(){
    cy.get('.ember-view').contains('Posts').click();
    cy.wait(1000);
    cy.get('.posts-list > :nth-child(2)').click();
    cy.wait(1000);
    cy.get('.gh-editor-title').clear();
    cy.get('.gh-editor-title').type('Primera Guerra Mundial');
    cy.wait(1000);
    cy.get('.koenig-editor__editor').clear();
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type('La Primera Guerra Mundial, anteriormente llamada la Gran Guerra, fue una confrontación bélica centrada en Europa que empezó el 28 de julio de 1914 y finalizó el 11 de noviembre de 1918, cuando Alemania aceptó las condiciones del armisticio.');
    cy.wait(1000);
    cy.get('.gh-publishmenu').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);
    cy.get('.fw3').click();

}

function Publish_to_unpublish(){
    cy.get('.ember-view').contains('Posts').click();
    cy.wait(1000);
    cy.get('.posts-list > :nth-child(2)').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu').click();
    cy.wait(2000);
    cy.get('.gh-publishmenu-radio-content').contains('Unpublished').click();
    cy.wait(2000);
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);
    cy.get('.fw3').click();
}
function Deleting_Post(){
    cy.get('.ember-view').contains('Posts').click();
    cy.wait(1000);
    cy.get('.posts-list > :nth-child(2)').click();
    cy.wait(1000);
    cy.get('.post-settings').click();
    cy.wait(1000);
    cy.get('form > .gh-btn > span').click();
    cy.wait(1000);
    cy.get('.gh-btn-red').click();
    cy.wait(1000);}