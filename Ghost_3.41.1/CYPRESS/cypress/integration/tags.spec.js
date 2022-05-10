import { user, password, MainPage } from '../config';

function stringGen(len) {
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    var atPos = Math.floor(Math.random() * (len - 2)) + 1;

    for( var i=0; i < len; i++ ) {
        if(i==atPos) {
            text += '@'
        } else {
            text += charset.charAt(Math.floor(Math.random() * charset.length));
        }
    }

    return text;
}

describe('Testing Ghost Tags', () => {

    beforeEach(()=>{
        cy.visit(MainPage + 'ghost/#/signin');
        cy.wait(2000)
        cy.get('[name="identification"]').type(user);
        cy.get('[name="password"]').type(password);
        cy.get('.login').click()
        cy.wait(2000);
        cy.visit(MainPage+'ghost/#/tags');
        cy.wait(2000);
    })

    it('1. Visits Tag Main Page', () => {
        cy.get('[href="#/tags/"]').click()
        cy.wait(2000);
        cy.get('.gh-canvas-title').should('contain', 'Tags');
    })
    
    it('2. Create New Tag', () => {
        cy.get('[href="#/tags/new/"]').click()
        cy.wait(2000);
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `testname${id}`
        //Escribir nombre tag
        cy.get('[name="name"]').type(testname);
        const randomColor = Math.floor(100000 + Math.random() * 900000);
        //Escribir un color
        cy.get('[name="accent-color"]').type(randomColor);
        cy.get('[name="slug"]').invoke('val').then((val) => {        
            cy.get('.ghost-url-preview').invoke('text').then((text) => {
                //revisar url tag
                const baseURL = MainPage.replace("http://","") +"tag/" + val + "/" ;
                expect(text.trim()).equal(baseURL)
            });
        });
        
        cy.get('[name="description"]').type(stringGen(501), {force: true});
        //Verificar descripcion mayor a 500 caracteres
        cy.get('.word-count')
        .should('contain', '501')
        .invoke('css', 'color')
        .should('equal', 'rgb(226, 84, 64)');

        cy.wait(2000);
        //Borrar descripcion
        cy.get('[name="description"]').clear({force: true});

        
        cy.get('[name="description"]').type(stringGen(500), {force: true});
        //Verificar descripcion con 500 caracteres
        cy.get('.word-count')
        .should('contain', '500')
        .invoke('css', 'color')
        .should('equal', 'rgb(159, 187, 88)');
        //Guardar tag
        cy.get('.view-actions').click()
        //Regresar a la pagina principal
        cy.get('[href="#/tags/"]').first().click();
        cy.wait(2000);
        //Revisar que si este creado el tag
        cy.get('[href="#/tags/' + testname.replace(" ","-") + '/"]')
        .get('[class="gh-tag-list-name"]').should('contain', testname);
    })
    
    it('3. Edit Tag', () => {
        cy.get('[href="#/tags/"]').first().click();
        cy.wait(2000);
        cy.get('.tags-list').first().find('[class="gh-tag-list-name"]').first().click()
        cy.wait(2000);
        cy.get('[name="name"]').invoke('val').then((val) => {
            var valueChg = `${val}_edited`;
            valueChg = valueChg.toLowerCase();
            cy.get('[name="name"]').clear({force: true});
            cy.get('[name="name"]').type(valueChg,{force: true});
            cy.wait(2000);
            cy.get('[id="tag-slug"]').clear({force: true});
            cy.get('[id="tag-slug"]').type(valueChg,{force: true});
            //Guardar tag
            cy.get('.view-actions').click()
            //Regresar a la pagina principal
            cy.get('[href="#/tags/"]').first().click();
            cy.wait(2000);
            //Revisar que si este creado el tag
            cy.get('[href="#/tags/' + valueChg.replace(" ","-") + '/"]')
            .should('contain', valueChg, { matchCase: false });
        });
    });
    //borrar tag de la lista
    it('4. Delete Tag', () => {
        cy.get('[href="#/tags/"]').first().click();
        cy.wait(2000);
        cy.get('.tags-list').last().find('[class="gh-tag-list-name"]').last().click()
        cy.wait(2000);
        cy.get('[class="gh-btn gh-btn-red gh-btn-icon mb15"]').click()
        cy.wait(2000);
        cy.get('[name="name"]').invoke('val').then((val) => {
            var valuedel = `${val}`;
            console.log(valuedel);
            cy.get('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click(); 
            cy.wait(2000);
            cy.get('.tags-list').should('not.contain', valuedel , { matchCase: false })
        });
    });

    //asociar post a tag
    it('5. Associate Post to Tag', () => {
        cy.get('[href="#/posts/"]').first().click();
        cy.wait(2000);
        cy.get('.posts-list').first().find('[class="gh-list-row gh-posts-list-item"]').first().click();
        cy.wait(2000);
        cy.get('[title="Settings"]').click();
        cy.get('[class="ember-power-select-trigger-multiple-input"]').first().click();
        cy.get('[class="ember-power-select-options"]').find('[class="ember-power-select-option"]').first().click();
        cy.get('[placeholder="Post Title"]').invoke('val').then((valP) => {
            var valuepost = `${valP}`;
            console.log(valuepost);
            cy.get('[class="ember-power-select-multiple-options sortable-objects ember-view"]')
            .first().get('[class="ember-power-select-multiple-option tag-token js-draggableObject draggable-object ember-view"]').first().invoke('text').then((valT) => {
                var valueTag = `${valT}`;
                var valueTag = valueTag.replace(" ","").replace("\n","").trim();
                console.log(valueTag);
                cy.get('[class="close settings-menu-header-action"]').click();
                cy.wait(2000);
                cy.get('[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]').click();
                cy.get('footer').get('[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click();
                cy.wait(6000);
                cy.get('[href="#/posts/"]').first().click();
                cy.wait(2000);
                cy.get('[href="#/tags/"]').first().click();
                cy.wait(2000);
                cy.get(`[href="#/posts/?tag=${valueTag.replace(" ","-")}"]`).click();
                cy.wait(2000);
                cy.get('[class="content-list"]').should('contain', valuepost);
            });
        });
    });
    //desasociar post a tag


})