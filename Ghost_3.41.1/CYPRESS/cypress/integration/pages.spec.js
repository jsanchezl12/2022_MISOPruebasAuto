import { user, password, MainPage } from '../config';


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
        cy.get('[href="#/pages/"]').click()
        cy.wait(3000)
        cy.get('[href="#/editor/page/"]').click()
        cy.wait(3000)
        cy.get('[placeholder="Page Title"]').type('Esta es una pagina de prueba')
        cy.get('[data-placeholder="Begin writing your page..."]').type('Este es mi contenido')
        cy.wait(3000)
        cy.get('.ember-basic-dropdown-trigger').first().click()
        cy.get('.gh-publishmenu-button').click()
        cy.wait(5000)
        cy.get('.items-center').should("contain",
        "Published")
    }) 
    
    it('Actualizar titulo y contenido de  una  pagina', ()=>{
        cy.get('[href="#/pages/"]').click()
        cy.wait(3000)
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').contains("Esta es una pagina de prueba").first().click()
        cy.wait(3000)
        cy.get('[placeholder="Page Title"]').clear()
        cy.get('[placeholder="Page Title"]').type('Esta es una pagina de prueba actualizada')
        cy.get('[data-placeholder="Begin writing your page..."]').clear()
        cy.get('[data-placeholder="Begin writing your page..."]').type('Este es mi contenido actualizado')
        cy.wait(3000)
        cy.get('.ember-basic-dropdown-trigger').first().click()
        cy.get('.gh-publishmenu-button').click()
        cy.get('.items-center').should("contain","Published")
    }) 


    it('Quitar pagina publicada', ()=>{
        cy.get('[href="#/pages/"]').click()
        cy.wait(3000)
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').contains("Esta es una pagina de prueba actualizada").first().click()
        cy.wait(3000)
        cy.get('.ember-basic-dropdown-trigger').first().click()
        cy.get('.gh-publishmenu-radio-label').contains("Unpublished").click()
        cy.get('.gh-publishmenu-button').click()
        cy.wait(5000)
        cy.get('.items-center').should("contain","Draft")
        })  		

    it('Eliminar pagina', ()=>{
        cy.get('[href="#/pages/"]').click()
        cy.wait(3000)
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').contains("Esta es una pagina de prueba actualizada").first().click()
        cy.wait(3000)
        cy.get('.post-settings').first().click()
        cy.get('form > .gh-btn > span').click()
        cy.wait(3000)
        cy.get('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
    })  
    
})  