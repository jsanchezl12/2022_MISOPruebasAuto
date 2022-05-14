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

describe('Testing Ghost Pages', () => {
    beforeEach(()=>{
        cy.visit(MainPage + 'ghost/#/signin')
        cy.wait(3000)
        cy.get('[name="identification"]').type(user);
        cy.get('[name="password"]').type(password);
        cy.get('.login').click()
        cy.wait(3000)
    })

    
	it('Publicar una nueva pagina', ()=>{
        cy.get('[href="#/pages/"]').first().click()
        cy.wait(3000)
        ScreenShot();
        cy.get('[href="#/editor/page/"]').first().click()
        cy.wait(3000)
        ScreenShot();
        cy.get('[placeholder="Page Title"]').type('Esta es una pagina de prueba')
        cy.get('[data-placeholder="Begin writing your page..."]').type('Este es mi contenido')
        cy.wait(3000)
        ScreenShot();
        cy.get('.ember-basic-dropdown-trigger').first().click()
        cy.get('.gh-publishmenu-button').click()
        cy.wait(5000)
        cy.get('.items-center').should("contain",
        "Published")
        ScreenShot();
    }) 
    
    it('Actualizar titulo y contenido de  una  pagina', ()=>{
        cy.get('[href="#/pages/"]').click()
        cy.wait(3000)
        ScreenShot();
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').contains("Esta es una pagina de prueba").first().click()
        cy.wait(3000)
        cy.get('[placeholder="Page Title"]').clear()
        cy.get('[placeholder="Page Title"]').type('Esta es una pagina de prueba actualizada')
        cy.get('[data-placeholder="Begin writing your page..."]').clear()
        cy.get('[data-placeholder="Begin writing your page..."]').type('Este es mi contenido actualizado')
        ScreenShot();
        cy.wait(3000)
        cy.get('.ember-basic-dropdown-trigger').first().click()
        cy.get('.gh-publishmenu-button').click()
        cy.get('.items-center').should("contain","Published")
        ScreenShot();
    }) 


    it('Quitar pagina publicada', ()=>{
        cy.get('[href="#/pages/"]').click()
        cy.wait(3000)
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').contains("Esta es una pagina de prueba actualizada").first().click()
        cy.wait(3000)
        ScreenShot();
        cy.get('.ember-basic-dropdown-trigger').first().click()
        cy.get('.gh-publishmenu-radio-label').contains("Unpublished").click()
        ScreenShot();
        cy.get('.gh-publishmenu-button').click()
        cy.wait(5000)
        cy.get('.items-center').should("contain","Draft")
        ScreenShot();
        })  		
})  