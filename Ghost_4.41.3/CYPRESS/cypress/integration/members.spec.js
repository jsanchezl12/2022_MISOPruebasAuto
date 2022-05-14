var count = 0;
function ScreenShot(){
    // const uuidd = () => Cypress._.random(0, 1e6)
    // const id = uuidd()
    const testname = `screenshot_${count}`
    cy.screenshot(testname);
    cy.wait(2000);
    count++;
}


describe('Testing Ghost Members', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(3000)
        cy.get("#ember7").type('e.tapia@uniandes.edu.co')
        cy.get("#ember9").type('12345678910')
        cy.get('#ember11').click()
        cy.wait(5000)
    })

    it('Explorar opciones de members', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('.gh-setting-title').should('have.text', 'Subscribed to newsletter')
        cy.wait(2000)
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-action-icon').contains("Filter").click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').should('have.text', '\n                Apply filters\n            New member')
        cy.wait(2000)
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-members-header-search').type('Prueba')
        cy.wait(2000)
        cy.get('.gh-members-empty').should('have.text', '\n                        \n                        No members match the current filter\n                        \n                            Show all members\n                        \n                    ')
        cy.wait(2000)
    })

    it('crear un nuevo miembro', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('#member-email').type('prueba_cypres@test.com')
        cy.wait(2000)
        cy.get('#member-name').type('Test User')
        cy.wait(2000)
        cy.get('.ember-power-select-trigger-multiple-input').type('Universidad de los andes')
        cy.wait(2000)
        cy.get('#member-note').type('Esta es una nota para el miembro creado ')
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('.gh-main-section-header').should('have.text', 'Engagement')
        cy.wait(2000)
     }) 

     it('Filtrar por miembro', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(3000)
        cy.get('.gh-members-header-search').type('Prueba')
        cy.wait(3000)
        cy.get('.gh-members-list-name').should('have.text', 'Test User')
    }) 

    it('Gestionar Filtros', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-action-icon').contains("Filter").click()
        cy.wait(2000)
        cy.get('.gh-add-filter').click()
        cy.wait(2000)
        cy.get('.gh-add-filter').click()
        cy.wait(2000)
        cy.get('.gh-add-filter').click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').should('have.text', '\n                Apply filters\n            New member')
    }) 

    it('Eliminar un miembro', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-members-list-name').contains("Test User").click()
        cy.get('.gh-btn-action-icon').click()
        cy.wait(2000)
        cy.get('.mr2').contains("Delete member").click()
        cy.wait(2000)
        cy.get('.gh-btn-icon').contains("Delete member").click()
        cy.wait(2000)
        cy.get('.gh-members-header-search').type('Prueba')
        cy.wait(3000)
        cy.get('.gh-members-list-name').should('not.exist', 'Test User')
        cy.wait(2000)
     })  
})
