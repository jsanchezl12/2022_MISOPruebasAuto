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

describe('Testing Ghost Staff', () => {

    beforeEach(()=>{
        cy.visit(MainPage + 'ghost/#/signin');
        cy.wait(2000)
        cy.get('[name="identification"]').type(user);
        cy.get('[name="password"]').type(password);
        cy.get('.login').click()
        cy.wait(2000);
        
    })

    it('1. Visits Staff Main Page', () => {
        cy.get('[href="#/staff/"]').first().click()
        cy.wait(2000);
        cy.get('.gh-canvas-title').should('contain', 'Staff users');
        ScreenShot();
    });

    it('2. Create New Staff', () => {
        cy.get('[href="#/staff/"]').first().click()
        cy.wait(2000);
        cy.get('[class="gh-btn gh-btn-green"]').click();
        cy.wait(2000);
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `testname${id}`
        //Escribir nombre tag
        cy.get('[id="new-user-email"]').type(testname+'@uniandes.edu.co');
        //cy.wait(2000);
        //cy.get('[id="new-user-role"]').click();
        cy.wait(2000);
        cy.get('[id="new-user-role"]').select('Editor');
        cy.wait(2000);
        ScreenShot();
        cy.get('[class="gh-btn gh-btn-green gh-btn-icon ember-view"]').click();
        cy.wait(2000);
        cy.get('[class="gh-alert-content"]').should('contain','Error sending email! Error sending email: Failed to send email.')
        cy.wait(2000);
        ScreenShot();
        cy.reload();
        cy.wait(2000);
        cy.get('[href="#/staff/"]').first().click()
        cy.wait(2000);
        cy.get('[class="apps-grid"]').should('contain',testname)
        ScreenShot();
    });

    it('3. Revoke Staff', () => {
        cy.get('[href="#/staff/"]').first().click()
        cy.wait(2000);
        cy.get('[class="apps-configured-action red-hover"]').first().click()
        cy.wait(2000);
        cy.get('.gh-notification-title').should('contain','Invitation revoked');
        ScreenShot();
    });

    it('4. Update Staff Name', () => {
        cy.get('[href="#/staff/"]').first().click()
        cy.wait(2000);
        cy.get('[class="apps-card-app-title"]').should('contain','Ghost').first().click()
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `Ghost${id}`
        cy.wait(2000);
        cy.get('[id="user-name"]').type(testname);
        ScreenShot();
        cy.get('[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click();
        cy.wait(2000);
        cy.get('[href="#/staff/"]').first().click()
        cy.wait(2000);
        cy.get('[class="apps-card-app-title"]').should('contain',testname)
        ScreenShot();

    });

});