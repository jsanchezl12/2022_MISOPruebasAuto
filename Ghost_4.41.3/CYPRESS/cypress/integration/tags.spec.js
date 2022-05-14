describe('Testing Ghost Tags', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(7000)
        cy.get("#ember7").type('e.tapia@uniandes.edu.co')
        cy.get("#ember9").type('12345678910')
        cy.get('#ember11').click()
        cy.wait(7000)
    })


    

it('Create New Tag', ()=>{
    cy.get('[href="#/tags/"]').click();
    cy.wait(1000);
    cy.get('[href="#/tags/new/"]').click();
    cy.wait(1000);
    cy.get('#tag-name').type('Noticias7');
    cy.wait(1000);
    cy.get('.input-color > input').type('e03e3e');
    cy.wait(1000);
    cy.get('#tag-slug').click();
    cy.wait(1000);
    cy.get('#tag-description').type('tag description');
    cy.wait(1000);
    cy.get('.gh-btn-primary').click();
    cy.wait(3000);
    }) 



it('Edit Tag', ()=>{
    cy.get('[href="#/tags/"]').click();
    cy.wait(1000);
    cy.get('.gh-tags-list-item > a > h3').contains("Noticias7").click()
    cy.wait(1000);
    cy.get('#tag-name').type('Noticias act');
    cy.wait(1000);
    cy.get('.input-color > input').type('e03e3e');
    cy.wait(1000);
    cy.get('#tag-slug').click();
    cy.wait(1000);
    cy.get('#tag-description').type('   tag description actualizada');
    cy.wait(1000);
    cy.get('.gh-btn-primary').click();
    })


it('Eliminar Tag', ()=>{
    cy.get('[href="#/tags/"]').click();
    cy.wait(1000);
    cy.get('.gh-tags-list-item > a > h3').contains("Noticias7").click()
    cy.wait(1000);
    cy.get('.gh-btn-red').click()
    cy.wait(1000);
    cy.get('.modal-footer > .gh-btn-red').click()
    cy.url().should('eq', 'http://localhost:2368/ghost/#/tags')  
})


    


    it('Associate Post to Tag', ()=>{
        cy.get('#ember26').click();
        cy.wait(1000)
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').first().click();
        cy.wait(1000)
        cy.get('.settings-menu-toggle > span > svg').click()
        cy.wait(1000)
        cy.get('#tag-input').click()
        cy.wait(1000)
        cy.get('.ember-power-select-option').contains("Noticias6").click()
        cy.wait(1000)
        cy.get('.settings-menu-toggle > span > svg').click()
        cy.wait(1000)
        cy.get('.ember-basic-dropdown-trigger').click()
        cy.wait(1000)
        cy.get('.gh-publishmenu-button').click()
        cy.wait(1000)
        cy.get('.gh-btn-black').click()

    

    



        
        }) 


    
})






