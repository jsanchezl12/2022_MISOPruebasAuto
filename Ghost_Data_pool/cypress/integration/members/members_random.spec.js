import {faker} from '@faker-js/faker'
import { user,password, MainPage } from '../../config';

describe('Testing Ghost Members', () => {
    beforeEach(()=>{
        cy.visit(MainPage + 'ghost/#/signin')
        cy.wait(3000)
        cy.get("#ember7").type(user)
        cy.get("#ember9").type(password)
        cy.get('#ember11').click()
        cy.wait(5000)
    })

    it('crear un nuevo miembro', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('#member-email').type(faker.internet.email())
        cy.wait(2000)
        cy.get('#member-name').type(faker.name.findName())
        cy.wait(2000)
        cy.get('.ember-power-select-trigger-multiple-input').type(faker.company.companyName())
        cy.wait(2000)
        cy.get('#member-note').type(faker.commerce.productDescription())
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('.gh-main-section-header').should('have.text', 'Engagement')
        cy.wait(2000)
     }) 
     

     it('validación nuevo miembro (email) obligatorio @', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('#member-email').type(faker.name.firstName())
        cy.wait(2000)
        cy.get('#member-name').type(faker.name.firstName())
        cy.wait(2000)
        cy.get('.ember-power-select-trigger-multiple-input').type(faker.company.companyName())
        cy.wait(2000)
        cy.get('#member-note').type(faker.commerce.productDescription())
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.xpath('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/p').should('have.text', '\n    Invalid Email.\n')
        cy.wait(2000)
     }) 

     it('validación nuevo miembro (email) obligatorio .com', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('#member-email').type('prueba@uniandes')
        cy.wait(2000)
        cy.get('#member-name').type(faker.name.firstName())
        cy.wait(2000)
        cy.get('.ember-power-select-trigger-multiple-input').type(faker.company.companyName())
        cy.wait(2000)
        cy.get('#member-note').type(faker.commerce.productDescription())
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.xpath('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/p').should('have.text', '\n    Invalid Email.\n')
        cy.wait(2000)
     }) 

     it('validación nuevo miembro (email) vacio', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('.ember-power-select-trigger-multiple-input').type(faker.company.companyName())
        cy.wait(2000)
        cy.get('#member-name').type(faker.name.firstName())
        cy.wait(2000)
        cy.get('#member-note').type(faker.commerce.productDescription())
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.xpath('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/p').should('have.text', "\n    Please enter an email.\n")
        cy.wait(2000)
     })

     it('validación nuevo miembro (email) caracteres especiales', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('#member-email').type('?=)(/&!"·$(/&%$')
        cy.wait(2000)
        cy.get('#member-name').type(faker.name.firstName())
        cy.wait(2000)
        cy.get('.ember-power-select-trigger-multiple-input').type(faker.company.companyName())
        cy.wait(2000)
        cy.get('#member-note').type(faker.commerce.productDescription())
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.xpath('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/p').should('have.text', '\n    Invalid Email.\n')
        cy.wait(2000)
     }) 
     
     it('validación nuevo miembro (Description) máximo de caracteres', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('#member-email').type(faker.internet.email())
        cy.wait(2000)
        cy.get('#member-name').type(faker.name.firstName())
        cy.wait(2000)
        cy.get('.ember-power-select-trigger-multiple-input').type(faker.company.companyName())
        cy.wait(2000)
        cy.get('#member-note').type(faker.commerce.productDescription() + (faker.commerce.productDescription() + (faker.commerce.productDescription() + (faker.commerce.productDescription() + (faker.commerce.productDescription() + (faker.commerce.productDescription()))))))
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('.response').should('have.text', '\n    \n\n    \n\n    Note is too long.\n')
        cy.wait(2000)
     }) 
    
     it('editar nombre de un miembro', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('#member-email').type(faker.internet.email())
        cy.wait(2000)
        cy.get('#member-name').type(faker.name.findName())
        cy.wait(2000)
        cy.get('.ember-power-select-trigger-multiple-input').type(faker.company.companyName())
        cy.wait(2000)
        cy.get('#member-note').type(faker.commerce.productDescription())
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        //inicio editar
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-members-list-name').first().click()
        cy.wait(2000)
        cy.get('#member-name').clear()
        cy.wait(2000)
        cy.get('#member-email').click()
        cy.wait(2000)
        cy.get('#member-name').type(faker.name.findName())
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('.gh-main-section-header').should('have.text', 'EngagementActivity')
        cy.wait(2000)
     })

     it('editar email de un miembro', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('#member-email').type(faker.internet.email())
        cy.wait(2000)
        cy.get('#member-name').type(faker.name.findName())
        cy.wait(2000)
        cy.get('.ember-power-select-trigger-multiple-input').type(faker.company.companyName())
        cy.wait(2000)
        cy.get('#member-note').type(faker.commerce.productDescription())
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        //inicio editar
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-members-list-name').first().click()
        cy.wait(2000)
        cy.get('#member-email').clear()
        cy.wait(2000)
        cy.get('#member-name').click()
        cy.wait(2000)
        cy.get('#member-email').type(faker.internet.email())
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('.gh-main-section-header').should('have.text', 'EngagementActivity')
        cy.wait(2000)
     })
   
     it('editar label de un miembro', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('#member-email').type(faker.internet.email())
        cy.wait(2000)
        cy.get('#member-name').type(faker.name.findName())
        cy.wait(2000)
        cy.get('.ember-power-select-trigger-multiple-input').type(faker.company.companyName())
        cy.wait(2000)
        cy.get('#member-note').type(faker.commerce.productDescription())
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        //inicio editar
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-members-list-name').first().click()
        cy.wait(2000)
        cy.get('.ember-power-select-trigger-multiple-input').clear()
        cy.wait(2000)
        cy.get('#member-name').click()
        cy.get('.ember-power-select-trigger-multiple-input').type(faker.company.companyName())
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('.gh-main-section-header').should('have.text', 'EngagementActivity')
        cy.wait(2000)
     })

     it('editar nota de un miembro', ()=>{
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('#member-email').type(faker.internet.email())
        cy.wait(2000)
        cy.get('#member-name').type(faker.name.findName())
        cy.wait(2000)
        cy.get('.ember-power-select-trigger-multiple-input').type(faker.company.companyName())
        cy.wait(2000)
        cy.get('#member-note').type(faker.commerce.productDescription())
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        //inicio editar
        cy.get('#members_svg__Regular').click()
        cy.wait(2000)
        cy.get('.gh-members-list-name').first().click()
        cy.wait(2000)
        cy.get('#member-note').clear()
        cy.wait(2000)
        cy.get('#member-name').click()
        cy.wait(2000)
        cy.get('#member-note').type(faker.commerce.productDescription())
        cy.wait(2000)
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
        cy.get('.gh-main-section-header').should('have.text', 'EngagementActivity')
        cy.wait(2000)
     })
    
})