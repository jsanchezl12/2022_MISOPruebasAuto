const localghostlink = "http://localhost:2368/ghost/#/signin";
const user = "juans.sanchezlopez@gmail.com";
const psw = "MISO123456789";
const local_data_pool_tags = "cypress/fixtures/datapool_apriori_tag.json";
describe('Testing Ghost Tags [APRIORI]', () => {
    beforeEach(()=>{
        cy.visit(localghostlink)
        cy.wait(2000)
        cy.get("#ember7").type(user)
        cy.get("#ember9").type(psw)
        cy.get('#ember11').click()
        cy.wait(2000)
    })

/*
POOL DE DATOS

tag_name: Construction Role
colorid: Hex Color
slug_name: Construction Material
description: Construction Standard Cost Code
long_description: Words from 510 to 600
*/
    
///TEST POOL APRIORI

    it('1. Create New Tag Complete', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.readFile(local_data_pool_tags).then((obj) => {
            var keys = Object.keys(obj);
            var obj = obj[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            console.log(tagname);
            cy.get('#tag-name').type(tagname);
            cy.wait(1000);
            cy.get('.input-color > input').type(colorcode);
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription);
            cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
        }) ;
        
    }) 

    it('2. Create New Tag Half Complete', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.readFile(local_data_pool_tags).then((obj) => {
            var keys = Object.keys(obj);
            var obj = obj[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            console.log(tagname);
            cy.get('#tag-name').type(tagname);
            cy.wait(1000);
            //cy.get('.input-color > input').type(colorcode);
            //cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            //cy.get('#tag-description').type(tagdescription);
            //cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
        }) ;
    }) 

    it('3. Create New Tag without color', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.readFile(local_data_pool_tags).then((obj) => {
            var keys = Object.keys(obj);
            var obj = obj[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            console.log(tagname);
            cy.get('#tag-name').type(tagname);
            cy.wait(1000);
            //cy.get('.input-color > input').type(colorcode);
            //cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription);
            cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
        }) ;
    }) 

    it('4. Create New Tag Empty', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.readFile(local_data_pool_tags).then((obj) => {
            var keys = Object.keys(obj);
            var obj = obj[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            console.log(tagname);
            //cy.get('#tag-name').type(tagname);
            //cy.wait(1000);
            //cy.get('.input-color > input').type(colorcode);
            //cy.wait(1000);
            //cy.get('#tag-slug').click();
            //cy.wait(1000);
            //cy.get('#tag-description').type(tagdescription);
            //cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
            cy.get('.error').first().should('have.text','\n                            \n    You must specify a name for the tag.\n\n\n                            \n    \n\n\n                        ');
        }) ;
    }) 

    it('5. Create Tag Without Tag name', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.readFile(local_data_pool_tags).then((obj) => {
            var keys = Object.keys(obj);
            var obj = obj[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            console.log(tagname);
            //cy.get('#tag-name').type(tagname);
            //cy.wait(1000);
            cy.get('.input-color > input').type(colorcode);
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription);
            cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
            cy.get('.error').first().should('have.text','\n                            \n    You must specify a name for the tag.\n\n\n                            \n    \n\n\n                        ');
        }) ;
    }) 

    it('6. Edit Entire Tag', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.readFile(local_data_pool_tags).then((obj) => {
            var keys = Object.keys(obj);
            var obj = obj[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            cy.get('.gh-tags-list-item > a > h3').first().click()
            cy.wait(1000);
            cy.get('[id="tag-name"]').clear();
            cy.wait(1000);
            cy.get('[id="tag-name"]').type(tagname,{force: true});
            cy.wait(1000);
            cy.get('.input-color > input').clear();
            cy.wait(1000);
            cy.get('.input-color > input').type(colorcode,{force: true});
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').clear();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription,{force: true});
            cy.wait(1000);
            cy.get('.gh-btn-primary').click();
        }) ;
    })


    it('7. Edit Tag without color', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.readFile(local_data_pool_tags).then((obj) => {
            var keys = Object.keys(obj);
            var obj = obj[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            cy.get('.gh-tags-list-item > a > h3').first().click()
            cy.wait(1000);
            cy.get('[id="tag-name"]').clear();
            cy.wait(1000);
            cy.get('[id="tag-name"]').type(tagname,{force: true});
            cy.wait(1000);
            //cy.get('.input-color > input').clear();
            cy.wait(1000);
            //cy.get('.input-color > input').type(colorcode,{force: true});
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').clear();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription,{force: true});
            cy.wait(1000);
            cy.get('.gh-btn-primary').click();
        }) ;
    })


    it('8. Edit Tag without Tag Name', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.readFile(local_data_pool_tags).then((obj) => {
            var keys = Object.keys(obj);
            var obj = obj[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            cy.get('.gh-tags-list-item > a > h3').first().click()
            cy.wait(1000);
            cy.get('[id="tag-name"]').clear();
            //cy.wait(1000);
            //cy.get('[id="tag-name"]').type(tagname,{force: true});
            cy.wait(1000);
            cy.get('.input-color > input').clear();
            cy.wait(1000);
            cy.get('.input-color > input').type(colorcode,{force: true});
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').clear();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription,{force: true});
            cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
            cy.get('.error').first().should('have.text','\n                        Name\n                        \n                        \n                            \n    You must specify a name for the tag.\n\n\n                            \n    \n\n\n                        \n                        \n                            Start with # to create internal tags\n                            Learn more\n                        \n                    ');
        }) ;
    })

    it('9. Edit Tag and erase all and save it', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.readFile(local_data_pool_tags).then((obj) => {
            var keys = Object.keys(obj);
            var obj = obj[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            cy.get('.gh-tags-list-item > a > h3').first().click()
            cy.wait(1000);
            cy.get('[id="tag-name"]').clear();
            cy.wait(1000);
            //cy.get('[id="tag-name"]').type(tagname,{force: true});
            //cy.wait(1000);
            //cy.get('.input-color > input').clear();
            cy.wait(1000);
            //cy.get('.input-color > input').type(colorcode,{force: true});
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').clear();
            cy.wait(1000);
            //cy.get('#tag-description').type(tagdescription,{force: true});
            //cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
            cy.get('.error').first().should('have.text','\n                        Name\n                        \n                        \n                            \n    You must specify a name for the tag.\n\n\n                            \n    \n\n\n                        \n                        \n                            Start with # to create internal tags\n                            Learn more\n                        \n                    ');
        }) ;
    })

    it('10. Edit Tag and type a big amount of text in description and try to save it', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.readFile(local_data_pool_tags).then((obj) => {
            var keys = Object.keys(obj);
            var obj = obj[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            var taglongdescription = obj['long_description'];
            cy.get('.gh-tags-list-item > a > h3').first().click()
            cy.wait(1000);
            //cy.get('[id="tag-name"]').clear();
            //cy.wait(1000);
            //cy.get('[id="tag-name"]').type(tagname,{force: true});
            //cy.wait(1000);
            //cy.get('.input-color > input').clear();
            //cy.wait(1000);
            //cy.get('.input-color > input').type(colorcode,{force: true});
            //cy.wait(1000);
            //cy.get('#tag-slug').click();
            //cy.wait(1000);
            cy.get('#tag-description').clear();
            cy.wait(1000);
            cy.get('#tag-description').type(taglongdescription,{force: true});
            //cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
            if(taglongdescription.length > 500){
                cy.get('[class="no-margin form-group error ember-view"]').first().should('contain','Description cannot be longer than 500 characters');
            }
        }) ;
    })

/// TEST POOL PSEUDO


/// TEST POOL RANDOM

/*
    it('Eliminar Tag', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('.gh-tags-list-item > a > h3').contains("Noticias7").click()
        cy.wait(1000);
        cy.get('.gh-btn-red').click()
        cy.wait(1000);
        cy.get('.modal-footer > .gh-btn-red').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/tags')  
    })*/

    
})
