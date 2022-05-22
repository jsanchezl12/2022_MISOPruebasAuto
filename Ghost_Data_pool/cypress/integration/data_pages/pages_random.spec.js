import { faker } from '@faker-js/faker';

describe("Testing Ghost Pages", () => {
  beforeEach(() => {
    cy.visit("http://localhost:2368/ghost/#/signin");
    cy.wait(7000);
    cy.get("#ember7").type("e.tapia@uniandes.edu.co");
    cy.get("#ember9").type("12345678910");
    cy.get("#ember11").click();
    cy.wait(7000);
  });

  it("1. Publicar una nueva pagina completa", () => {
    cy.get("#ember28").click();
    cy.wait(9000);
    cy.get(".gh-btn-primary").click();
    cy.wait(7000);
    cy.get(".gh-editor-title").type(faker.lorem.sentences());
    cy.wait(1000);
    cy.get(".koenig-editor__editor").type(faker.lorem.paragraph());
    cy.wait(7000);
    cy.get(".koenig-editor__editor").click();
    cy.get(".ember-basic-dropdown-trigger").click();
    cy.get(".gh-publishmenu-button").click();
    cy.get("div.gh-editor-post-status  > span > div").should(
      "have.text",
      "\n        Published\n"
    );
  });

  it("2. Publicar una nueva pagina sin contenido", () => {
    cy.get("#ember28").click();
    cy.wait(9000);
    cy.get(".gh-btn-primary").click();
    cy.wait(7000);
    cy.get(".gh-editor-title").type(faker.lorem.sentences());
    cy.wait(7000);
    cy.get(".koenig-editor__editor").click();
    cy.get(".ember-basic-dropdown-trigger").click();
    cy.get(".gh-publishmenu-button").click();
    cy.get("div.gh-editor-post-status  > span > div").should(
      "have.text",
      "\n        Published\n"
    );
  });

  it("3. Publicar una nueva pagina sin titulo", () => {
    cy.get("#ember28").click();
    cy.wait(9000);
    cy.get(".gh-btn-primary").click();
    cy.wait(7000);
    cy.get(".koenig-editor__editor").type(faker.lorem.paragraph());
    cy.wait(7000);
    cy.get(".koenig-editor__editor").click();
    cy.get(".ember-basic-dropdown-trigger").click();
    cy.get(".gh-publishmenu-button").click();
    cy.get("div.gh-editor-post-status  > span > div").should(
      "have.text",
      "\n        Published\n"
    );
  });

  it("4. Publicar una nueva pagina Vacia", () => {
    cy.get("#ember28").click();
    cy.wait(9000);
    cy.get(".gh-btn-primary").click();
    cy.wait(7000);
    cy.get(".gh-editor-title").type(faker.lorem.sentences());
    cy.wait(1000);
    cy.get(".koenig-editor__editor").click();
    cy.wait(7000);
    cy.get(".gh-editor-title").clear();
    cy.get(".koenig-editor__editor").click();
    cy.get(".ember-basic-dropdown-trigger").click();
    cy.get(".gh-publishmenu-button").click();
    cy.get("div.gh-editor-post-status  > span > div").should(
      "have.text",
      "\n        Published\n"
    );
  });

  it("5. Publicar una nueva pagina titulo numero", () => {
    cy.get("#ember28").click();
    cy.wait(9000);
    cy.get(".gh-btn-primary").click();
    cy.wait(7000);
    cy.get(".gh-editor-title").type(faker.datatype.number());
    cy.wait(1000);
    cy.get(".koenig-editor__editor").click();
    cy.wait(7000);
    cy.get(".gh-editor-title").clear();
    cy.get(".koenig-editor__editor").click();
    cy.get(".ember-basic-dropdown-trigger").click();
    cy.get(".gh-publishmenu-button").click();
    cy.get("div.gh-editor-post-status  > span > div").should(
      "have.text",
      "\n        Published\n"
    );
  });

  it("6. Actualizar titulo y contenido de  una  pagina", () => {
    cy.get("#ember28").click();
    cy.wait(9000);
    cy.get(".gh-posts-list-item > a > .gh-content-entry-title").first().click();
    cy.get(".gh-editor-title").clear();
    cy.get(".gh-editor-title").type(faker.lorem.sentences());
    cy.get(".koenig-editor__editor").clear();
    cy.get(".koenig-editor__editor").type(faker.lorem.paragraph());
    cy.wait(7000);
    cy.get(".koenig-editor__editor").click();
    cy.get(".ember-basic-dropdown-trigger").click();
    cy.get(".gh-publishmenu-button").click();
    cy.get("div.gh-editor-post-status  > span > div").should(
      "have.text",
      "\n        Published\n"
    );
  });

  it("7. Publicar una nueva pagina titulo url", () => {
    cy.get("#ember28").click();
    cy.wait(9000);
    cy.get(".gh-btn-primary").click();
    cy.wait(7000);
    cy.get(".gh-editor-title").type(faker.image.abstract());
    cy.wait(1000);
    cy.wait(7000);
    cy.get(".koenig-editor__editor").click();
    cy.get(".ember-basic-dropdown-trigger").click();
    cy.get(".gh-publishmenu-button").click();
    cy.get("div.gh-editor-post-status  > span > div").should(
      "have.text",
      "\n        Published\n"
    );
  });

  it("8. Contar palabras contenido", () => {
    cy.get("#ember28").click();
    cy.wait(9000);
    cy.get(".gh-btn-primary").click();
    cy.wait(7000);
    cy.get(".gh-editor-title").type(faker.lorem.sentences());
    cy.wait(1000);
    cy.get(".koenig-editor__editor").type(faker.lorem.sentence(5));
    cy.wait(3000);
    cy.get(".gh-editor-wordcount").should(
      "have.text",
      "\n                    5 words\n                "
    );
  });

  it("9. Titulo con mas de un parrafo", () => {
    cy.get("#ember28").click();
    cy.wait(9000);
    cy.get(".gh-btn-primary").click();
    cy.wait(7000);
    cy.get(".gh-editor-title").type(faker.lorem.paragraphs(5));
    cy.wait(7000);
    cy.get(".koenig-editor__editor").click();
    cy.get(".ember-basic-dropdown-trigger").click();
    cy.get(".gh-publishmenu-button").click();
    cy.get("div.gh-editor-post-status  > span > div").should(
      "have.text",
      "\n        Published\n"
    );
  });

  it("10.Publicar una nueva pagina con url de imagen", () => {
    cy.get("#ember28").click();
    cy.wait(9000);
    cy.get(".gh-btn-primary").click();
    cy.wait(7000);
    cy.get(".gh-editor-title").type(faker.lorem.sentences());
    cy.wait(1000);
    cy.get(".koenig-editor__editor").click();
    cy.wait(1000);
    cy.get(".koenig-plus-menu-button > .w4 > path").click();
    cy.wait(1000);
    cy.get(".koenig-cardmenu").scrollTo("bottom");
    cy.wait(5000);
    cy.get(".fw4").contains("Other...").click({ force: true });
    cy.get(".miw-100").type("hola");
    cy.wait(2000);
    cy.get("span.mr3").should(
      "have.text",
      "There was an error when parsing the URL."
    );
  });
});
