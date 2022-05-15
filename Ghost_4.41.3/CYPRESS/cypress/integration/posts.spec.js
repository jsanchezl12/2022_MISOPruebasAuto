var count = 0;
function ScreenShot(){
    // const uuidd = () => Cypress._.random(0, 1e6)
    // const id = uuidd()
    const testname = `screenshot_${count}`
    cy.screenshot(testname);
    cy.wait(2000);
    count++;
}
describe('Testing Ghost Posts', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(7000)
        cy.get("#ember7").type('mf.moraless1@uniandes.edu.co')
        cy.get("#ember9").type('Aranda2020*')
        cy.get('#ember11').click()
        cy.wait(10000)
    })
    
    it('Create_Publish_Post', ()=>{
        cy.get('#ember27').click();
        cy.wait(1000);
        ScreenShot();
        cy.get('.ember-text-area').type('Segunda Guerra Mundial 3');
        cy.wait(1000);
        ScreenShot();
        cy.get('.koenig-editor__editor').type('Guerra entre los aliados y las potencias del Eje');
        cy.wait(1000);
        ScreenShot();
        cy.get('.ember-basic-dropdown-trigger').click()
        cy.wait(1000);
        ScreenShot();
        cy.get('.gh-publishmenu-button').click()
        cy.wait(1000);
        ScreenShot();
        cy.get('.gh-btn-black').click()
        cy.wait(1000);
        ScreenShot();
        cy.get('div.gh-editor-post-status  > span > div').should("have.text",
            "\n        Published\n")

    })


it('Update_Publish_Post', ()=>{
        cy.get('#ember26').click();
        cy.wait(9000)
        ScreenShot();
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').contains("Segunda Guerra Mundial 3").click()
        cy.get('.gh-editor-title').clear()
        cy.get('.gh-editor-title').type('Esta es una pagina de prueba actualizada 2')
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


it('Publish_to_unpublish', ()=>{
        cy.get('#ember26').click();
        cy.wait(9000)
        ScreenShot();
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').contains("Esta es una pagina de prueba actualizada 2").click()
        ScreenShot();
        cy.get('.gh-publishmenu').click()
        ScreenShot();
        cy.get('.gh-publishmenu-radio-label').contains("Unpublished").click()
        ScreenShot();
        cy.get('.gh-publishmenu-button > span').contains("Unpublish").click()
        ScreenShot();
        })
})  