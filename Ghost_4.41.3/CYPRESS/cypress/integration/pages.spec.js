import { user, password, MainPage } from '../config';

describe('Testing Ghost Pages', () => {
    beforeEach(()=>{
        cy.visit(MainPage + 'ghost/#/signin');
        cy.wait(3000)
        cy.get("#ember7").type(user)
        cy.get("#ember9").type(password)
        cy.get('#ember11').click()
        cy.wait(3000)
    })

    
	
	it('Publicar una nueva pagina', ()=>{
        cy.get('#ember28').click()
        cy.wait(9000)
        cy.get('.gh-btn-primary').click()
        cy.wait(7000)
        cy.get('.gh-editor-title').type('Esta es una pagina de prueba')
        cy.get('.koenig-editor__editor').type('Este es mi contenido')
        cy.wait(7000)
        cy.get('.ember-basic-dropdown-trigger').click()
        cy.get('.gh-publishmenu-button').click()
        cy.get('div.gh-editor-post-status  > span > div').should("have.text",
        "\n        Published\n")
    }) 

    it('Actualizar titulo y contenido de  una  pagina', ()=>{
        cy.get('#ember28').click()
        cy.wait(9000)
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').contains("Esta es una pagina de prueba").click()
        cy.get('.gh-editor-title').clear()
        cy.get('.gh-editor-title').type('Esta es una pagina de prueba actualizada')
        cy.get('.koenig-editor__editor').clear()
        cy.get('.koenig-editor__editor').type('Este es mi contenido actualizado')
        cy.wait(7000)
        cy.get('.ember-basic-dropdown-trigger').click()
        cy.get('.gh-publishmenu-button').click()
        cy.get('div.gh-editor-post-status  > span > div').should("have.text",
        "\n        Published\n")
        }) 


    it('Quitar pagina publicada', ()=>{
        cy.get('#ember28').click()
        cy.wait(9000)
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').contains("Esta es una pagina de prueba actualizada").click()
        cy.wait(7000)
        cy.get('.ember-basic-dropdown-trigger').click()
        cy.get('.gh-publishmenu-radio-label').contains("Unpublished").click()
        
        cy.get('.gh-publishmenu-button').click()
        cy.get('div.gh-editor-post-status  > span > div').should("have.text",
        "\n        Draft\n        - Saved\n    ")
        })  		


    it('Eliminar pagina', ()=>{
        cy.get('#ember28').click()
        cy.wait(9000)
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').contains("Esta es una pagina de prueba actualizada").click()
        cy.wait(7000)
        cy.get('.settings-menu-toggle > span > svg').click()
        cy.get('form > .gh-btn > span').click()
        cy.get('.gh-btn-red').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        })  
    })  

