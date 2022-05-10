import { user, password, MainPage } from '../config';

describe('Testing Ghost members option', () => {
    beforeEach(()=>{
        cy.visit(MainPage + 'ghost/#/signin')
        cy.wait(3000)
        cy.get('[name="identification"]').type(user);
        cy.get('[name="password"]').type(password);
        cy.get('.login').click()
        cy.wait(3000)
    })

    it('Explorar opciones de members', ()=>{
        cy.get('[href="#/settings/labs/"]').click();
        var MembersEnabled = false;
        cy.get('[href="#/settings/labs/members/"]').then(function(members){
            //console.log(members[0].innerHTML);
            if(members[0].innerHTML.includes('Enabled')){
                MembersEnabled = true;
            }else{
                MembersEnabled = false;
            }
            //console.log(MembersEnabled);
            if(MembersEnabled == false){
                cy.get('[href="#/settings/labs/members/"]').first().click();
                cy.wait(3000)
                cy.get('.input-toggle-component').first().click()
                cy.get('[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click();
            }
            cy.get('[href="#/members/"]').click()
            cy.wait(2000)
            cy.get('.gh-btn-primary').click()
            cy.wait(2000)
            cy.get('.gh-setting-title').should('have.text', 'Subscribed to newsletter')
            cy.wait(2000)
            cy.get('[href="#/members/"]').click()
            cy.wait(2000)
            cy.get('.gh-btn-action-icon').contains("Filter").click()
            cy.wait(2000)
            cy.get('.gh-btn-primary').should('have.text', '\n                Apply filters\n            New member')
            cy.wait(2000)
            cy.get('[href="#/members/"]').click()
            cy.wait(2000)
            cy.get('.gh-members-header-search').type('Prueba')
            cy.wait(2000)
            cy.get('.gh-members-empty').should('have.text', '\n                        \n                        No members match the current filter\n                        \n                            Show all members\n                        \n                    ')
            cy.wait(2000)
        })        
    })
/*
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
    })  */
})