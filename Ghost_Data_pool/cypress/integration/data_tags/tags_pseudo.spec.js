const localghostlink = "http://localhost:2368/ghost/#/signin";
const user = "juans.sanchezlopez@gmail.com";
const psw = "MISO123456789";
const url_api_mockaroo_tags = `https://api.mockaroo.com/api/3d565790?count=10&key=e1476070`;

/*
POOL DE DATOS

tag_name: Construction Role
colorid: Hex Color
slug_name: Construction Material
description: Construction Standard Cost Code
meta_title: App Name
meta_description: ICD10 Dx Desc (Short)
meta_url: URL
meta_description_long: words
*/

describe('Testing Ghost Tags [PSEUDO]', () => {
    beforeEach(()=>{
        cy.visit(localghostlink)
        cy.wait(2000)
        cy.get("#ember7").type(user)
        cy.get("#ember9").type(psw)
        cy.get('#ember11').click()
        cy.wait(2000)
    })

    /// TEST POOL PSEUDO
    
    it('1. Create Tag and Associate Post to Tag', ()=>{

        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.request({
            method : 'GET',
            url:url_api_mockaroo_tags, 
            responseType : 'application/json'
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            const body = (response.body)
            console.log(body)
            var keys = Object.keys(body);
            var obj = body[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            console.log(tagname);
            //CREATE TAG
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
            //ASSOCIATE TAG TO POST
            cy.get('[href="#/posts/"]').first().click();
            cy.wait(1000)
            cy.get('.gh-posts-list-item > a > .gh-content-entry-title').first().click();
            cy.wait(1000)
            cy.get('.settings-menu-toggle > span > svg').click()
            cy.wait(1000)
            cy.get('#tag-input').click()
            cy.wait(1000)
            cy.get('#tag-input').type(tagname,{force: true});
            cy.wait(1000)
            //cy.get('.ember-power-select-option').contains(tagname).click()
            //cy.get('.ember-power-select-option').first().click()
            cy.wait(1000)
            cy.get('.settings-menu-toggle > span > svg').click()
            cy.wait(1000)
            cy.get('.ember-basic-dropdown-trigger').click()
            cy.wait(1000)
            cy.get('.gh-publishmenu-button').click()
            cy.wait(1000)
            cy.get('.gh-btn-black').click()
        });
    }) 

    it('2. Create Tag from Post', ()=>{
        cy.get('[href="#/posts/"]').first().click();
        cy.wait(1000)
        cy.get('.gh-posts-list-item > a > .gh-content-entry-title').first().click();
        cy.wait(1000)
        cy.get('.settings-menu-toggle > span > svg').click()
        cy.wait(1000)
        cy.request({
            method : 'GET',
            url:url_api_mockaroo_tags, 
            responseType : 'application/json'
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            const body = (response.body)
            console.log(body)
            var keys = Object.keys(body);
            var obj = body[keys[ keys.length * Math.random() << 0]];
            const uuid = () => Cypress._.random(0, 1e6)
            const id = uuid()
            var tagname = obj['tag_name'] + `${id}`;
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            console.log(tagname);
            //ASSOCIATE TAG TO POST
            cy.get('#tag-input').first().click();
            cy.get('#tag-input').first().click();
            cy.wait(1000);
            cy.get('#tag-input').type(tagname,{force: true});
            cy.wait(1000);
            cy.get('#tag-input').type('{enter}');
            //cy.get('#tag-input').first().focus().type(tagname,{force: true}).type('{enter}');
            cy.wait(1000)
            //cy.get('#tag-input').type(tagname,{force: true});
            cy.wait(1000)
            cy.get('.ember-power-select-option').first().click()
            cy.wait(1000)
            cy.get('.settings-menu-toggle > span > svg').click()
            cy.wait(1000)
            cy.get('.ember-basic-dropdown-trigger').click()
            cy.wait(1000)
            cy.get('.gh-publishmenu-button').click()
            cy.wait(1000)
            cy.get('.gh-btn-black').click()            
        });
    }) 

    it('3. Create Tag With Metadata Title', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.request({
            method : 'GET',
            url:url_api_mockaroo_tags, 
            responseType : 'application/json'
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            const body = (response.body)
            console.log(body)
            var keys = Object.keys(body);
            var obj = body[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            var meta_title = obj['meta_title'];
            var meta_description = obj['meta_description'];
            var meta_url = obj['meta_url'];
            var meta_description_long = obj['meta_description_long'];
            console.log(tagname);
            //CREATE TAG
            cy.get('#tag-name').type(tagname);
            cy.wait(1000);
            cy.get('.input-color > input').type(colorcode);
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription);
            cy.wait(1000);
            cy.get('[class="gh-btn gh-btn-expand"]').first().click();
            cy.wait(1000);
            cy.get('#meta-title').type(meta_title);
            cy.wait(1000);
            //cy.get('#meta-description').type(meta_description);
            //cy.wait(1000);
            //cy.get('#canonical-url').type(meta_url);
            //cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
        });

    });
    

    it('4. Create Tag With Metadata Title and Metadescription', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.request({
            method : 'GET',
            url:url_api_mockaroo_tags, 
            responseType : 'application/json'
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            const body = (response.body)
            console.log(body)
            var keys = Object.keys(body);
            var obj = body[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            var meta_title = obj['meta_title'];
            var meta_description = obj['meta_description'];
            var meta_url = obj['meta_url'];
            var meta_description_long = obj['meta_description_long'];
            console.log(tagname);
            //CREATE TAG
            cy.get('#tag-name').type(tagname);
            cy.wait(1000);
            cy.get('.input-color > input').type(colorcode);
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription);
            cy.wait(1000);
            cy.get('[class="gh-btn gh-btn-expand"]').first().click();
            cy.wait(1000);
            cy.get('#meta-title').type(meta_title);
            cy.wait(1000);
            cy.get('#meta-description').type(meta_description);
            cy.wait(1000);
            //cy.get('#canonical-url').type(meta_url);
            //cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
        });

    });

    it('5. Create Tag With Metadata Title and Metadescription and canonical URL', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.request({
            method : 'GET',
            url:url_api_mockaroo_tags, 
            responseType : 'application/json'
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            const body = (response.body)
            console.log(body)
            var keys = Object.keys(body);
            var obj = body[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            var meta_title = obj['meta_title'];
            var meta_description = obj['meta_description'];
            var meta_url = obj['meta_url'];
            var meta_description_long = obj['meta_description_long'];
            console.log(tagname);
            //CREATE TAG
            cy.get('#tag-name').type(tagname);
            cy.wait(1000);
            cy.get('.input-color > input').type(colorcode);
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription);
            cy.wait(1000);
            cy.get('[class="gh-btn gh-btn-expand"]').first().click();
            cy.wait(1000);
            cy.get('#meta-title').type(meta_title);
            cy.wait(1000);
            cy.get('#meta-description').type(meta_description);
            cy.wait(1000);
            cy.get('#canonical-url').type(meta_url);
            cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
        });
    });

    it('6. Create Tag With Metadescription and canonical URL', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.request({
            method : 'GET',
            url:url_api_mockaroo_tags, 
            responseType : 'application/json'
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            const body = (response.body)
            console.log(body)
            var keys = Object.keys(body);
            var obj = body[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            var meta_title = obj['meta_title'];
            var meta_description = obj['meta_description'];
            var meta_url = obj['meta_url'];
            var meta_description_long = obj['meta_description_long'];
            console.log(tagname);
            //CREATE TAG
            cy.get('#tag-name').type(tagname);
            cy.wait(1000);
            cy.get('.input-color > input').type(colorcode);
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription);
            cy.wait(1000);
            cy.get('[class="gh-btn gh-btn-expand"]').first().click();
            cy.wait(1000);
            //cy.get('#meta-title').type(meta_title);
            //cy.wait(1000);
            cy.get('#meta-description').type(meta_description);
            cy.wait(1000);
            cy.get('#canonical-url').type(meta_url);
            cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
        });
    });

    it('7. Create Tag With Metadata Title and canonical URL', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.request({
            method : 'GET',
            url:url_api_mockaroo_tags, 
            responseType : 'application/json'
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            const body = (response.body)
            console.log(body)
            var keys = Object.keys(body);
            var obj = body[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            var meta_title = obj['meta_title'];
            var meta_description = obj['meta_description'];
            var meta_url = obj['meta_url'];
            var meta_description_long = obj['meta_description_long'];
            console.log(tagname);
            //CREATE TAG
            cy.get('#tag-name').type(tagname);
            cy.wait(1000);
            cy.get('.input-color > input').type(colorcode);
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription);
            cy.wait(1000);
            cy.get('[class="gh-btn gh-btn-expand"]').first().click();
            cy.wait(1000);
            cy.get('#meta-title').type(meta_title);
            cy.wait(1000);
            //cy.get('#meta-description').type(meta_description);
            //cy.wait(1000);
            cy.get('#canonical-url').type(meta_url);
            cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
        });
    });
    
    it('8. Create Tag With canonical URL', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.request({
            method : 'GET',
            url:url_api_mockaroo_tags, 
            responseType : 'application/json'
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            const body = (response.body)
            console.log(body)
            var keys = Object.keys(body);
            var obj = body[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            var meta_title = obj['meta_title'];
            var meta_description = obj['meta_description'];
            var meta_url = obj['meta_url'];
            var meta_description_long = obj['meta_description_long'];
            console.log(tagname);
            //CREATE TAG
            cy.get('#tag-name').type(tagname);
            cy.wait(1000);
            cy.get('.input-color > input').type(colorcode);
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription);
            cy.wait(1000);
            cy.get('[class="gh-btn gh-btn-expand"]').first().click();
            cy.wait(1000);
            //cy.get('#meta-title').type(meta_title);
            //cy.wait(1000);
            //cy.get('#meta-description').type(meta_description);
            //cy.wait(1000);
            cy.get('#canonical-url').type(meta_url);
            cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
        });
    });

    it('9. Create Tag With Metadata Title and Metadescription superior of 156', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.request({
            method : 'GET',
            url:url_api_mockaroo_tags, 
            responseType : 'application/json'
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            const body = (response.body)
            console.log(body)
            var keys = Object.keys(body);
            var obj = body[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            var meta_title = obj['meta_title'];
            var meta_description = obj['meta_description'];
            var meta_url = obj['meta_url'];
            var meta_description_long = obj['meta_description_long'];
            console.log(tagname);
            //CREATE TAG
            cy.get('#tag-name').type(tagname);
            cy.wait(1000);
            cy.get('.input-color > input').type(colorcode);
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription);
            cy.wait(1000);
            cy.get('[class="gh-btn gh-btn-expand"]').first().click();
            cy.wait(1000);
            cy.get('#meta-title').type(meta_title);
            cy.wait(1000);
            cy.get('#meta-description').type(meta_description_long);
            cy.wait(1000);
            if(meta_description_long.length > 0){
                cy.get("[class='gh-seo-settings']").find("[class='form-group ember-view']").find("span[class='word-count']").first()
                .should('have.css', 'color', 'rgb(226, 84, 64)');
                cy.wait(1000);
            }else{
                cy.get("[class='gh-seo-settings']").find("[class='form-group ember-view']").find("span[class='word-count']").first()
                .should('have.css', 'color', 'rgb(48, 207, 67)');
                cy.wait(1000);
            }
            cy.get('#canonical-url').type(meta_url);
            cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(3000);
        });
    });

    it('10. Create Tag With Metadata Title and Metadescription and wrong url', ()=>{
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.request({
            method : 'GET',
            url:url_api_mockaroo_tags, 
            responseType : 'application/json'
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            const body = (response.body)
            console.log(body)
            var keys = Object.keys(body);
            var obj = body[keys[ keys.length * Math.random() << 0]];
            var tagname = obj['tag_name'];
            var colorcode = obj['colorid'];
            var colorcode = colorcode.replace("#","");
            var tagdescription = obj['description'];
            var meta_title = obj['meta_title'];
            var meta_description = obj['meta_description'];
            var meta_url = obj['meta_url'];
            var meta_description_long = obj['meta_description_long'];
            console.log(tagname);
            //CREATE TAG
            cy.get('#tag-name').type(tagname);
            cy.wait(1000);
            cy.get('.input-color > input').type(colorcode);
            cy.wait(1000);
            cy.get('#tag-slug').click();
            cy.wait(1000);
            cy.get('#tag-description').type(tagdescription);
            cy.wait(1000);
            cy.get('[class="gh-btn gh-btn-expand"]').first().click();
            cy.wait(1000);
            cy.get('#meta-title').type(meta_title);
            cy.wait(1000);
            cy.get('#meta-description').type(meta_description);
            cy.wait(1000);
            cy.get('#canonical-url').type(meta_title);
            cy.wait(1000);
            cy.get('.gh-btn-primary').click();
            cy.wait(2000);
            cy.get("[class='gh-seo-settings']").find("[class='form-group error ember-view']").find("p[class='response']")
            .first().should('contain','The url should be a valid url');
            cy.wait(1000);
        });
    });

})