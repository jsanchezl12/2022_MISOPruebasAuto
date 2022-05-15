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
       cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(7000)
        cy.get("#ember7").type('mf.moraless1@uniandes.edu.co')
        cy.get("#ember9").type('Aranda2020*')
        cy.get('#ember11').click()
        cy.wait(7000)
    })

    
	
	it('Publicar una nueva pagina', ()=>{
        cy.get('#ember28').click()
        cy.wait(9000)
        ScreenShot();
        cy.get('.gh-btn-primary').click()
        cy.wait(7000)
        ScreenShot();
        cy.get('.gh-editor-title').type('Esta es una pagina de prueba')
        cy.wait(7000)
        ScreenShot();
        cy.get('.koenig-editor__editor').type('Este es mi contenido')
        cy.wait(7000)
        ScreenShot();
        cy.get('.ember-basic-dropdown-trigger').click()
        cy.wait(7000)
        ScreenShot();
        cy.get('.gh-publishmenu-button').click()
        cy.wait(7000)
        ScreenShot();
        cy.get('div.gh-editor-post-status  > span > div').should("have.text",
        "\n        Published\n")
        
    }) 
       
       
    it('Actualizar titulo y contenido de  una  pagina', ()=>{
        cy.get('#ember28').click()
        cy.wait(9000)
        ScreenShot();
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').contains("Esta es una pagina de prueba").click()
        cy.get('.gh-editor-title').clear()
        cy.get('.gh-editor-title').type('Esta es una pagina de prueba actualizada')
        cy.wait(9000)
        ScreenShot();
        cy.get('.koenig-editor__editor').clear()
        cy.get('.koenig-editor__editor').type('Este es mi contenido actualizado')
        cy.wait(7000)
        ScreenShot();
        cy.get('.ember-basic-dropdown-trigger').click()
        ScreenShot();
        cy.get('.gh-publishmenu-button').click()
        ScreenShot();
        cy.get('div.gh-editor-post-status  > span > div').should("have.text",
        "\n        Published\n")
        }) 


    it('Quitar pagina publicada', ()=>{
        cy.get('#ember28').click()
        cy.wait(9000)
        ScreenShot();
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').contains("Esta es una pagina de prueba actualizada").click()
        cy.wait(7000)
        ScreenShot();
        cy.get('.ember-basic-dropdown-trigger').click()
        ScreenShot();
        cy.get('.gh-publishmenu-radio-label').contains("Unpublished").click()
        ScreenShot();
        cy.get('.gh-publishmenu-button').click()
        ScreenShot();
        cy.get('div.gh-editor-post-status  > span > div').should("have.text",
        "\n        Draft\n        - Saved\n    ")
        })  		
    })  

