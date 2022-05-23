import {faker} from '@faker-js/faker'

const localghostlink = "http://localhost:2368/ghost/#/signin";
const user = "juans.sanchezlopez@gmail.com";
const psw = "MISO123456789";
//npm install @faker-js/faker --save-dev

describe( `Testing Ghost Tags [RANDOM]`, function() {

    beforeEach(()=>{
        cy.visit(localghostlink)
        cy.wait(2000)
        cy.get("#ember7").type(user)
        cy.get("#ember9").type(psw)
        cy.get('#ember11').click()
        cy.wait(2000)
    })


    it(`1. Create Tag with Twitter Title`, function() { 
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        var tagname = faker.commerce.product();
        var colorcode = faker.internet.color();
        var colorcode = colorcode.replace("#","");
        var tagdescription = faker.hacker.phrase();
        var meta_title = faker.animal.type();
        var meta_description = faker.address.streetAddress();
        var meta_url = faker.internet.url();
        var twitter_title = "@" + faker.internet.userName();
        var twitter_description = faker.commerce.productDescription();
        var twitter_long_description = faker.lorem.sentence(126);
        var facebook_title = faker.commerce.productName();
        var facebook_description = faker.commerce.productDescription();
        var facebook_long_description = faker.lorem.sentence(110);

        cy.get('#tag-name').type(tagname);
        cy.wait(1000);
        cy.get('.input-color > input').type(colorcode);
        cy.wait(1000);
        cy.get('#tag-slug').click();
        cy.wait(1000);
        cy.get('#tag-description').type(tagdescription);
        cy.wait(1000);
        cy.get("[class='gh-expandable']").first().find("[class='gh-expandable-block']").first().next().find("[class='gh-expandable-header']").find("[class='gh-btn gh-btn-expand']")
        .first().click();
        cy.wait(1000);
        cy.get("#twitter-title").type(twitter_title);
        cy.wait(1000);
        cy.get('[class="gh-canvas-header-content"]').first().find('[class="view-actions"]').find('[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(1000);
    })

    it(`2. Create Tag with Twitter Title and description`, function() { 
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        var tagname = faker.commerce.product();
        var colorcode = faker.internet.color();
        var colorcode = colorcode.replace("#","");
        var tagdescription = faker.hacker.phrase();
        var meta_title = faker.animal.type();
        var meta_description = faker.address.streetAddress();
        var meta_url = faker.internet.url();
        var twitter_title = "@" + faker.internet.userName();
        var twitter_description = faker.commerce.productDescription();
        var twitter_long_description = faker.lorem.sentence(126);
        var facebook_title = faker.commerce.productName();
        var facebook_description = faker.commerce.productDescription();
        var facebook_long_description = faker.lorem.sentence(110);

        cy.get('#tag-name').type(tagname);
        cy.wait(1000);
        cy.get('.input-color > input').type(colorcode);
        cy.wait(1000);
        cy.get('#tag-slug').click();
        cy.wait(1000);
        cy.get('#tag-description').type(tagdescription);
        cy.wait(1000);
        cy.get("[class='gh-expandable']").first().find("[class='gh-expandable-block']").first().next().find("[class='gh-expandable-header']").find("[class='gh-btn gh-btn-expand']")
        .first().click();
        cy.wait(1000);
        cy.get("#twitter-title").type(twitter_title);
        cy.wait(1000);
        cy.get('#twitter-description').type(twitter_description);
        cy.wait(1000);
        cy.get('[class="gh-canvas-header-content"]').first().find('[class="view-actions"]').find('[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(1000);
    })
    
    it(`3. Create Tag with Twitter Title and long description`, function() { 
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        var tagname = faker.commerce.product();
        var colorcode = faker.internet.color();
        var colorcode = colorcode.replace("#","");
        var tagdescription = faker.hacker.phrase();
        var meta_title = faker.animal.type();
        var meta_description = faker.address.streetAddress();
        var meta_url = faker.internet.url();
        var twitter_title = "@" + faker.internet.userName();
        var twitter_description = faker.commerce.productDescription();
        var twitter_long_description = faker.lorem.sentence(126);
        var facebook_title = faker.commerce.productName();
        var facebook_description = faker.commerce.productDescription();
        var facebook_long_description = faker.lorem.sentence(110);

        cy.get('#tag-name').type(tagname);
        cy.wait(1000);
        cy.get('.input-color > input').type(colorcode);
        cy.wait(1000);
        cy.get('#tag-slug').click();
        cy.wait(1000);
        cy.get('#tag-description').type(tagdescription);
        cy.wait(1000);
        cy.get("[class='gh-expandable']").first().find("[class='gh-expandable-block']").first().next().find("[class='gh-expandable-header']").find("[class='gh-btn gh-btn-expand']")
        .first().click();
        cy.wait(1000);
        cy.get("#twitter-title").type(twitter_title);
        cy.wait(1000);
        cy.get('#twitter-description').type(twitter_long_description);
        cy.wait(1000);
        if(twitter_long_description.length > 125) {
            cy.get('[class="gh-twitter-settings"]').find('[class="form-group ember-view"]').find("span[class='word-count']").first()
            .should('have.css', 'color', 'rgb(226, 84, 64)');
            cy.wait(1000);
        }else{
            cy.get('[class="gh-twitter-settings"]').find('[class="form-group ember-view"]').find("span[class='word-count']").first()
            .should('have.css', 'color', 'rgb(48, 207, 67)');
            cy.wait(1000);
        }
        cy.get('[class="gh-canvas-header-content"]').first().find('[class="view-actions"]').find('[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(1000);

    })
    
    it(`4. Create Tag with Twitter Title and description and check information`, function() { 
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        var tagname = faker.commerce.product();
        var colorcode = faker.internet.color();
        var colorcode = colorcode.replace("#","");
        var tagdescription = faker.hacker.phrase();
        var meta_title = faker.animal.type();
        var meta_description = faker.address.streetAddress();
        var meta_url = faker.internet.url();
        var twitter_title = "@" + faker.internet.userName();
        var twitter_description = faker.commerce.productDescription();
        var twitter_long_description = faker.lorem.sentence(126);
        var facebook_title = faker.commerce.productName();
        var facebook_description = faker.commerce.productDescription();
        var facebook_long_description = faker.lorem.sentence(110);

        cy.get('#tag-name').type(tagname);
        cy.wait(1000);
        cy.get('.input-color > input').type(colorcode);
        cy.wait(1000);
        cy.get('#tag-slug').click();
        cy.wait(1000);
        cy.get('#tag-description').type(tagdescription);
        cy.wait(1000);
        cy.get("[class='gh-expandable']").first().find("[class='gh-expandable-block']").first().next().find("[class='gh-expandable-header']").find("[class='gh-btn gh-btn-expand']")
        .first().click();
        cy.wait(1000);
        cy.get("#twitter-title").type(twitter_title);
        cy.wait(1000);
        cy.get('[class="gh-social-twitter-preview-title"]').should('contain',twitter_title);
        cy.wait(1000);
        cy.get('#twitter-description').type(twitter_description);
        cy.wait(1000);
        cy.get('[class="gh-social-twitter-preview-desc"]').should('contain',twitter_description);
        cy.wait(1000);
        cy.get('[class="gh-canvas-header-content"]').first().find('[class="view-actions"]').find('[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(1000);

    })
    it(`5. Create Tag with Facebook Title`, function() { 
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        var tagname = faker.commerce.product();
        var colorcode = faker.internet.color();
        var colorcode = colorcode.replace("#","");
        var tagdescription = faker.hacker.phrase();
        var meta_title = faker.animal.type();
        var meta_description = faker.address.streetAddress();
        var meta_url = faker.internet.url();
        var twitter_title = "@" + faker.internet.userName();
        var twitter_description = faker.commerce.productDescription();
        var twitter_long_description = faker.lorem.sentence(126);
        var facebook_title = faker.commerce.productName();
        var facebook_description = faker.commerce.productDescription();
        var facebook_long_description = faker.lorem.sentence(110);

        cy.get('#tag-name').type(tagname);
        cy.wait(1000);
        cy.get('.input-color > input').type(colorcode);
        cy.wait(1000);
        cy.get('#tag-slug').click();
        cy.wait(1000);
        cy.get('#tag-description').type(tagdescription);
        cy.wait(1000);
        cy.get("[class='gh-expandable']").first().find("[class='gh-expandable-block']").first().next().next().find("[class='gh-expandable-header']").find("[class='gh-btn gh-btn-expand']")
        .first().click();
        cy.wait(1000);
        cy.get("#og-title").type(facebook_title);
        cy.wait(1000);
        cy.get('[class="gh-canvas-header-content"]').first().find('[class="view-actions"]').find('[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(1000);

    })
    it(`6. Create Tag with Facebook Title and description`, function() { 
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        var tagname = faker.commerce.product();
        var colorcode = faker.internet.color();
        var colorcode = colorcode.replace("#","");
        var tagdescription = faker.hacker.phrase();
        var meta_title = faker.animal.type();
        var meta_description = faker.address.streetAddress();
        var meta_url = faker.internet.url();
        var twitter_title = "@" + faker.internet.userName();
        var twitter_description = faker.commerce.productDescription();
        var twitter_long_description = faker.lorem.sentence(126);
        var facebook_title = faker.commerce.productName();
        var facebook_description = faker.commerce.productDescription();
        var facebook_long_description = faker.lorem.sentence(110);

        cy.get('#tag-name').type(tagname);
        cy.wait(1000);
        cy.get('.input-color > input').type(colorcode);
        cy.wait(1000);
        cy.get('#tag-slug').click();
        cy.wait(1000);
        cy.get('#tag-description').type(tagdescription);
        cy.wait(1000);
        cy.get("[class='gh-expandable']").first().find("[class='gh-expandable-block']").first().next().next().find("[class='gh-expandable-header']").find("[class='gh-btn gh-btn-expand']")
        .first().click();
        cy.wait(1000);
        cy.get("#og-title").type(facebook_title);
        cy.wait(1000);
        cy.get('#og-description').type(facebook_description);
        cy.wait(1000);
        cy.get('[class="gh-canvas-header-content"]').first().find('[class="view-actions"]').find('[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(1000);
    })
    it(`7. Create Tag with Facebook Title and long description`, function() { 
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        var tagname = faker.commerce.product();
        var colorcode = faker.internet.color();
        var colorcode = colorcode.replace("#","");
        var tagdescription = faker.hacker.phrase();
        var meta_title = faker.animal.type();
        var meta_description = faker.address.streetAddress();
        var meta_url = faker.internet.url();
        var twitter_title = "@" + faker.internet.userName();
        var twitter_description = faker.commerce.productDescription();
        var twitter_long_description = faker.lorem.sentence(126);
        var facebook_title = faker.commerce.productName();
        var facebook_description = faker.commerce.productDescription();
        var facebook_long_description = faker.lorem.sentence(110);

        cy.get('#tag-name').type(tagname);
        cy.wait(1000);
        cy.get('.input-color > input').type(colorcode);
        cy.wait(1000);
        cy.get('#tag-slug').click();
        cy.wait(1000);
        cy.get('#tag-description').type(tagdescription);
        cy.wait(1000);
        cy.get("[class='gh-expandable']").first().find("[class='gh-expandable-block']").first().next().next().find("[class='gh-expandable-header']").find("[class='gh-btn gh-btn-expand']")
        .first().click();
        cy.wait(1000);
        cy.get("#og-title").type(facebook_title);
        cy.wait(1000);
        cy.get('#og-description').type(facebook_long_description);
        cy.wait(1000);
        if(facebook_long_description.length > 125) {
            cy.get('[class="gh-og-settings"]').find('[class="form-group ember-view"]').next().find("span[class='word-count']").first()
            .should('have.css', 'color', 'rgb(226, 84, 64)');
            cy.wait(1000);
        }else{
            cy.get('[class="gh-og-settings"]').find('[class="form-group ember-view"]').next().find("span[class='word-count']").first()
            .should('have.css', 'color', 'rgb(48, 207, 67)');
            cy.wait(1000);
        }
        cy.get('[class="gh-canvas-header-content"]').first().find('[class="view-actions"]').find('[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(1000);
    })
    it(`8. Create Tag with Facebook Title and description and check information`, function() { 
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        var tagname = faker.commerce.product();
        var colorcode = faker.internet.color();
        var colorcode = colorcode.replace("#","");
        var tagdescription = faker.hacker.phrase();
        var meta_title = faker.animal.type();
        var meta_description = faker.address.streetAddress();
        var meta_url = faker.internet.url();
        var twitter_title = "@" + faker.internet.userName();
        var twitter_description = faker.commerce.productDescription();
        var twitter_long_description = faker.lorem.sentence(126);
        var facebook_title = faker.commerce.productName();
        var facebook_description = faker.commerce.productDescription();
        var facebook_long_description = faker.lorem.sentence(110);

        cy.get('#tag-name').type(tagname);
        cy.wait(1000);
        cy.get('.input-color > input').type(colorcode);
        cy.wait(1000);
        cy.get('#tag-slug').click();
        cy.wait(1000);
        cy.get('#tag-description').type(tagdescription);
        cy.wait(1000);
        cy.get("[class='gh-expandable']").first().find("[class='gh-expandable-block']").first().next().next().find("[class='gh-expandable-header']").find("[class='gh-btn gh-btn-expand']")
        .first().click();
        cy.wait(1000);
        cy.get("#og-title").type(facebook_title);
        cy.wait(1000);
        cy.get('[class="gh-social-og-preview-title"]').should('contain',facebook_title);
        cy.wait(1000);
        cy.get('#og-description').type(facebook_description);
        cy.wait(3000);
        cy.get('[class="gh-social-og-preview-desc"]').should('contain',facebook_description);
        cy.wait(1000);
        cy.get('[class="gh-canvas-header-content"]').first().find('[class="view-actions"]').find('[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(1000);

    })
    it(`9. Create Tag with Meta and Twitter information`, function() { 
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        var tagname = faker.commerce.product();
        var colorcode = faker.internet.color();
        var colorcode = colorcode.replace("#","");
        var tagdescription = faker.hacker.phrase();
        var meta_title = faker.animal.type();
        var meta_description = faker.address.streetAddress();
        var meta_url = faker.internet.url();
        var twitter_title = "@" + faker.internet.userName();
        var twitter_description = faker.commerce.productDescription();
        var twitter_long_description = faker.lorem.sentence(126);
        var facebook_title = faker.commerce.productName();
        var facebook_description = faker.commerce.productDescription();
        var facebook_long_description = faker.lorem.sentence(110);

        cy.get('#tag-name').type(tagname);
        cy.wait(1000);
        cy.get('.input-color > input').type(colorcode);
        cy.wait(1000);
        cy.get('#tag-slug').click();
        cy.wait(1000);
        cy.get('#tag-description').type(tagdescription);
        cy.wait(1000);
        cy.get("[class='gh-expandable']").first().find("[class='gh-expandable-block']").first().find("[class='gh-expandable-header']").find("[class='gh-btn gh-btn-expand']")
        .first().click();
        cy.wait(1000);
        cy.get('#meta-title').type(meta_title);
        cy.wait(1000);
        cy.get('#meta-description').type(meta_description);
        cy.wait(1000);
        cy.get('#canonical-url').type(meta_url);
        cy.wait(1000);
        cy.get("[class='gh-expandable']").first().find("[class='gh-expandable-block']").first().next().find("[class='gh-expandable-header']").find("[class='gh-btn gh-btn-expand']")
        .first().click();
        cy.wait(1000);
        cy.get("#twitter-title").type(twitter_title);
        cy.wait(1000);
        cy.get('#twitter-description').type(twitter_description);
        cy.wait(1000);
        cy.get('[class="gh-canvas-header-content"]').first().find('[class="view-actions"]').find('[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(1000);
    })
    it(`10. Create Tag with Meta and Twitter and facebook information`, function() { 
        cy.get('[href="#/tags/"]').click();
        cy.wait(1000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(1000);
        var tagname = faker.commerce.product();
        var colorcode = faker.internet.color();
        var colorcode = colorcode.replace("#","");
        var tagdescription = faker.hacker.phrase();
        var meta_title = faker.animal.type();
        var meta_description = faker.address.streetAddress();
        var meta_url = faker.internet.url();
        var twitter_title = "@" + faker.internet.userName();
        var twitter_description = faker.commerce.productDescription();
        var twitter_long_description = faker.lorem.sentence(126);
        var facebook_title = faker.commerce.productName();
        var facebook_description = faker.commerce.productDescription();
        var facebook_long_description = faker.lorem.sentence(110);

        cy.get('#tag-name').type(tagname);
        cy.wait(1000);
        cy.get('.input-color > input').type(colorcode);
        cy.wait(1000);
        cy.get('#tag-slug').click();
        cy.wait(1000);
        cy.get('#tag-description').type(tagdescription);
        cy.wait(1000);
        cy.get("[class='gh-expandable']").first().find("[class='gh-expandable-block']").first().find("[class='gh-expandable-header']").find("[class='gh-btn gh-btn-expand']")
        .first().click();
        cy.wait(1000);
        cy.get('#meta-title').type(meta_title);
        cy.wait(1000);
        cy.get('#meta-description').type(meta_description);
        cy.wait(1000);
        cy.get('#canonical-url').type(meta_url);
        cy.wait(1000);
        cy.get("[class='gh-expandable']").first().find("[class='gh-expandable-block']").first().next().find("[class='gh-expandable-header']").find("[class='gh-btn gh-btn-expand']")
        .first().click();
        cy.wait(1000);
        cy.get("#twitter-title").type(twitter_title);
        cy.wait(1000);
        cy.get('#twitter-description').type(twitter_description);
        cy.wait(1000);
        cy.get("[class='gh-expandable']").first().find("[class='gh-expandable-block']").first().next().next().find("[class='gh-expandable-header']").find("[class='gh-btn gh-btn-expand']")
        .first().click();
        cy.wait(1000);
        cy.get("#og-title").type(facebook_title);
        cy.wait(1000);
        cy.get('#og-description').type(facebook_description);
        cy.wait(1000);
        cy.get('[class="gh-canvas-header-content"]').first().find('[class="view-actions"]').find('[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(1000);
    })

})