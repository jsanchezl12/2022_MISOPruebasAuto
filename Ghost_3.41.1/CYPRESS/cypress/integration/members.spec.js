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
            cy.get('[href="#/members/"]').first().click()
            cy.wait(2000)
            ScreenShot();
            cy.get('[href="#/members/new/"]').first().click()
            cy.wait(2000)
            cy.get('.gh-setting-title').should('have.text', 'Subscribed to newsletter')
            cy.wait(2000)
            ScreenShot();
            cy.get('[href="#/members/"]').first().click()
            cy.wait(2000)
            cy.get('[placeholder="Search members..."]').click()
            cy.wait(2000)
            cy.get('input[placeholder="Search members..."]').should('have.text', '')
            cy.wait(2000)
            cy.get('[href="#/members/"]').first().click()
            cy.wait(2000)
            cy.get('.gh-members-header-search').type('Prueba')
            ScreenShot();
            cy.wait(2000)
            cy.get('.no-posts').should('have.text', '\n                        \n                            \n                                \n                                    No members match the current filter\n                            \n                        \n                \n                                \n                                    No members match the current filter\n                            ')
            cy.wait(2000)
            ScreenShot();
        })        
    })

    it('crear un nuevo miembro', ()=>{
        cy.get('[href="#/members/"]').first().click()
        cy.wait(2000)
        ScreenShot();
        cy.get('[href="#/members/new/"]').first().click()
        cy.wait(2000)
        ScreenShot();
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        cy.get('#member-email').type(`prueba_cypres${id}@test.com`)
        cy.wait(2000)
        cy.get('#member-name').type(`Test User ${id}`)
        cy.wait(2000)
        cy.get('.ember-power-select-trigger-multiple-input').type('Universidad de los andes')
        cy.wait(2000)
        cy.get('#member-note').type('Esta es una nota para el miembro creado ')
        cy.wait(2000)
        ScreenShot();
        cy.get('[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
        cy.wait(2000)
        cy.get('.gh-canvas-title').should('have.text', `\n            Members\n            \n                Test User ${id}\n        `)
        cy.wait(2000)
        ScreenShot();
    }) 

    it('Filtrar por miembro', ()=>{
        cy.get('[href="#/members/"]').first().click()
        cy.wait(3000)
        cy.get('.gh-members-header-search').type('Prueba')
        cy.wait(3000)
        cy.get('.gh-members-list-name').should('contain', 'Test User')
        ScreenShot();
    }) 
/*
    it('Gestionar Filtros', ()=>{
        cy.get('[href="#/members/"]').first().click()
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
    }) */

    it('Eliminar un miembro', ()=>{
        cy.get('[href="#/members/"]').first().click()
        cy.wait(2000)
        cy.get('.gh-members-list-name').contains("Test User").click()
        cy.wait(2000)
        ScreenShot();
        cy.get('[id="member-name"]').invoke('val').then((val) => {        
            var valueUser = `${val}`;
            ScreenShot();
            cy.get('.gh-btn-red').click()
            cy.wait(2000)
            ScreenShot();
            cy.get('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click()
            cy.wait(2000)
            cy.get('.gh-members-header-search').type(valueUser)
            cy.wait(3000)
            cy.get('.gh-members-list-name').should('not.exist', valueUser)
            cy.wait(2000)
            ScreenShot();
        });
        
    })  
})