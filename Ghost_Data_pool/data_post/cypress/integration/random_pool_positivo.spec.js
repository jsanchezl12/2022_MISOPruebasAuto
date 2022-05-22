
const faker = require('faker');

function Login() {
  // Pruebas pra hacer login y empezar a realizar las pruebas
  cy.visit("http://localhost:2368/ghost/#/site");
  cy.get("#ember7").type("d.moralesa2@uniandes.edu.co");
  cy.get("#ember9").type("Bogota2022");
  cy.get("#ember11").click();
  cy.wait(1000);
}
describe("Testing Ghost Posts", () => {
  beforeEach(() => {
    Login();
  });

  it("Post: Asoaciando un post con un titulo y una descripción y el post con un tag con un nombre", function () {
    // 1. Escenario positivo - random
    Post_Esc_1();
  });

  it("Post: Asoaciando un post con un titulo y una descripción con un tag con un slug", function () {
    // 2. Escenario positivo - random
    Post_Esc_2();
  });

  it("Post: Asoaciando un post con un titulo y una descripción con un tag con una descripcion.", function () {
    // 3. Escenario positivo - random
    Post_Esc_3();
  });

  it("Post: Post con un titulo, descripción y con un titulo meta data.", function () {
    // 4. Escenario positivo - random
    Post_Esc_4();
  });

  it("Post: Post con un titulo, descripción y con un titulo y una descripcion meta data.", function () {
    // 5. Escenario positivo - random
    Post_Esc_5();
  });

  it("Post: Asociando un post con un titulo y una descripción con un tag con error en url metada.", function () {
    // 6. Escenario negativo - random
    Post_Esc_6();
  });

  it("Post: Asociando un post con un titulo y una descripción con un tag con error en nombre de ciduad y url company name de metada.", function () {
    // 7. Escenario negativo - random
    Post_Esc_7();
  });

  it("Post: Asociando un post con un titulo y una descripción con un tag con error en nombre, descripción y url de metada.", function () {
    // 8. Escenario negativo - random
    Post_Esc_8();
  });
 
  it("Post: Post con un titulo, descripción y con meta data y error en nombre, descripción y url de metada", function () {
    // 9. Escenario negativo - random
    Post_Esc_9();
  });

  it("Post: Post con un titulo y una descripción con meta data y error en url.", function () {
    // 10 Escenario negativo - random
    Post_Esc_10();
  });

});
function Post_Esc_1() {
  cy.wait(1000)
  cy.get('a[href*="#/tags/"]').click();
  cy.wait(2000);
  cy.get('.gh-btn-primary').contains('New tag').click()
  cy.wait(2000);
  cy.get('#tag-name').type(faker.company.companyName())
  cy.get('.gh-btn-icon').contains('Save').click();
  cy.wait(2000);
  cy.get('a[href*="#/editor/post/"]').click();
  cy.get(".ember-text-area").type(faker.music.genre());
  cy.wait(1000);
  cy.get(".koenig-editor__editor").type(faker.lorem.text());
  cy.wait(1000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(1000);
  cy.get("#tag-input").click();
  cy.wait(1000);
  cy.get('.ember-power-select-option').first().click();
  cy.wait(1000);
  cy.get('.settings-menu-open').click();
  cy.wait(1000);
  cy.get('.ember-view').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-editor-back-button').click();
}

function Post_Esc_2() {
  cy.wait(1000);
  cy.get('a[href*="#/tags/"]').click();
  cy.wait(2000);
  cy.get('.gh-btn-primary').contains('New tag').click();
  cy.wait(2000);
  cy.get('#tag-name').type(faker.company.companyName());
  cy.wait(2000);
  cy.get('#tag-slug').type((faker.animal.bear()));
  cy.wait(2000);
  cy.get('.gh-btn-icon').contains('Save').click();
  cy.wait(2000);
  cy.get('a[href*="#/editor/post/"]').click();
  cy.get(".ember-text-area").type(faker.music.genre());
  cy.wait(1000);
  cy.get(".koenig-editor__editor").type(faker.lorem.text());
  cy.wait(1000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(1000);
  cy.get("#tag-input").click();
  cy.wait(1000);
  cy.get('.ember-power-select-option').first().click();
  cy.wait(1000);
  cy.get('.settings-menu-open').click();
  cy.wait(1000);
  cy.get('.ember-view').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-editor-back-button').click();
} 

function Post_Esc_3() {
  cy.wait(1000);
  cy.get('a[href*="#/tags/"]').click();
  cy.wait(2000);
  cy.get('.gh-btn-primary').contains('New tag').click();
  cy.wait(2000);
  cy.get('#tag-name').type(faker.company.companyName());
  cy.wait(2000);
  cy.get('#tag-description').type((faker.lorem.lines()));
  cy.wait(2000);
  cy.get('.gh-btn-icon').contains('Save').click();
  cy.wait(2000);
  cy.get('a[href*="#/editor/post/"]').click();
  cy.get(".ember-text-area").type(faker.music.genre());
  cy.wait(1000);
  cy.get(".koenig-editor__editor").type(faker.lorem.text());
  cy.wait(1000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(1000);
  cy.get("#tag-input").click();
  cy.wait(1000);
  cy.get('.ember-power-select-option').first().click();
  cy.wait(1000);
  cy.get('.settings-menu-open').click();
  cy.wait(1000);
  cy.get('.ember-view').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-editor-back-button').click();
}  

function Post_Esc_4(){
  cy.get('a[href*="#/editor/post/"]').click();
  cy.get(".ember-text-area").type(faker.music.genre());
  cy.wait(1000);
  cy.get(".koenig-editor__editor").type(faker.lorem.text());
  cy.wait(1000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(1000);
  cy.get('.nav-list > :nth-child(1) > button').click();
  cy.wait(1000);
  cy.get('#meta-title').type(faker.company.companyName())
  cy.wait(1000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(1000);
  cy.get('.ember-view').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-editor-back-button').click();
}

function Post_Esc_5(){
  cy.get('a[href*="#/editor/post/"]').click();
  cy.wait(1000);
  cy.get(".ember-text-area").type(faker.music.genre());
  cy.wait(1000);
  cy.get(".koenig-editor__editor").type(faker.lorem.text());
  cy.wait(1000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(1000);
  cy.get('.nav-list > :nth-child(1) > button').click();
  cy.wait(1000);
  cy.get('#meta-title').type(faker.company.companyName())
  cy.wait(1000);
  cy.get('#meta-description').type(faker.company.companyName())
  cy.wait(1000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(1000);
  cy.get('.ember-view').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(1000);
  cy.get('.gh-editor-back-button').click();
}


function Post_Esc_6() {
  cy.get('a[href*="#/editor/post/"]').click();
  cy.wait(2000);
  cy.get(".ember-text-area").type(faker.music.genre());
  cy.wait(2000);
  cy.get(".koenig-editor__editor").type(faker.lorem.text());
  cy.wait(2000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(2000);
  cy.get("#tag-input").click();
  cy.wait(2000);
  cy.get('.ember-power-select-option').first().click();
  cy.wait(2000);
  cy.get('.settings-menu-open').click();
  cy.wait(2000);
  cy.get('.ember-view').contains('Publish').click();
  cy.wait(2000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(2000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(2000);
  cy.get('.gh-editor-back-button').click();
  cy.wait(2000);
  cy.get('a[href*="#/tags/"]').click();
  cy.wait(2000);
  cy.get('.w6').click();
  cy.wait(2000);
  cy.get('.gh-expandable > :nth-child(1)').click();
  cy.get(':nth-child(1) > .gh-expandable-header > .gh-btn > span').click();
  cy.wait(2000);
  cy.get('#canonical-url').type(faker.company.companyName())
  cy.wait(2000);
  cy.get('.gh-btn-icon').contains('Save').click();
  cy.wait(2000);
}


function Post_Esc_7() {
  cy.get('a[href*="#/editor/post/"]').click();
  cy.wait(2000);
  cy.get(".ember-text-area").type(faker.music.genre());
  cy.wait(2000);
  cy.get(".koenig-editor__editor").type(faker.lorem.text());
  cy.wait(2000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(2000);
  cy.get("#tag-input").click();
  cy.wait(2000);
  cy.get('.ember-power-select-option').first().click();
  cy.wait(2000);
  cy.get('.settings-menu-open').click();
  cy.wait(2000);
  cy.get('.ember-view').contains('Publish').click();
  cy.wait(2000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(2000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(2000);
  cy.get('.gh-editor-back-button').click();
  cy.wait(2000);
  cy.get('a[href*="#/tags/"]').click();
  cy.wait(2000);
  cy.get('.w6').click();
  cy.wait(2000);
  cy.get('.gh-expandable > :nth-child(1)').click();
  cy.get(':nth-child(1) > .gh-expandable-header > .gh-btn > span').click();
  cy.wait(2000);
  cy.get('#meta-title').type(faker.address.county())
  cy.wait(2000);
  cy.get('#canonical-url').type(faker.company.companyName())
  cy.wait(2000);
  cy.get('.gh-btn-icon').contains('Save').click();
  cy.wait(2000);
}


function Post_Esc_8() {
  cy.get('a[href*="#/editor/post/"]').click();
  cy.wait(2000);
  cy.get(".ember-text-area").type(faker.music.genre());
  cy.wait(2000);
  cy.get(".koenig-editor__editor").type(faker.lorem.text());
  cy.wait(2000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(2000);
  cy.get("#tag-input").click();
  cy.wait(2000);
  cy.get('.ember-power-select-option').first().click();
  cy.wait(2000);
  cy.get('.settings-menu-open').click();
  cy.wait(2000);
  cy.get('.ember-view').contains('Publish').click();
  cy.wait(2000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(2000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(2000);
  cy.get('.gh-editor-back-button').click();
  cy.wait(2000);
  cy.get('a[href*="#/tags/"]').click();
  cy.wait(2000);
  cy.get('.w6').click();
  cy.wait(2000);
  cy.get('.gh-expandable > :nth-child(1)').click();
  cy.get(':nth-child(1) > .gh-expandable-header > .gh-btn > span').click();
  cy.wait(2000);
  cy.get('#meta-title').type(faker.address.county())
  cy.wait(2000);
  cy.get('#canonical-url').type(faker.company.companyName())
  cy.wait(2000);
  cy.get('#meta-description').type(faker.lorem.sentence(5))
  cy.wait(2000);
  cy.get('.gh-btn-icon').contains('Save').click();
  cy.wait(2000);
}


function Post_Esc_9() {
  cy.get('a[href*="#/editor/post/"]').click();
  cy.wait(2000);
  cy.get(".ember-text-area").type(faker.music.genre());
  cy.wait(2000);
  cy.get(".koenig-editor__editor").type(faker.lorem.text());
  cy.wait(2000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(2000);
  cy.get('.nav-list > :nth-child(1) > button').click();
  cy.wait(2000);
  cy.get('#meta-title').type(faker.address.county())
  cy.get('.post-setting-meta-description').type(faker.lorem.sentence(5))
  cy.wait(2000);
  cy.get('.post-setting-canonicalUrl').type(faker.company.companyName())
  cy.wait(2000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(2000);
  cy.get('.ember-view').contains('Publish').click();
  cy.wait(2000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(2000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(2000);
}

function Post_Esc_10() {
  cy.get('a[href*="#/editor/post/"]').click();
  cy.wait(2000);
  cy.get(".ember-text-area").type(faker.music.genre());
  cy.wait(2000);
  cy.get(".koenig-editor__editor").type(faker.lorem.text());
  cy.wait(2000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(2000);
  cy.get('.nav-list > :nth-child(1) > button').click();
  cy.wait(2000);
  cy.get('.post-setting-canonicalUrl').type(faker.company.companyName())
  cy.wait(2000);
  cy.get(".settings-menu-toggle > span").click();
  cy.wait(2000);
  cy.get('.ember-view').contains('Publish').click();
  cy.wait(2000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(2000);
  cy.get('.gh-btn-black').contains('Publish').click();
  cy.wait(2000);
}
