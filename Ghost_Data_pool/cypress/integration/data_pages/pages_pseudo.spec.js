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
    cy.request({
      method: "GET",
      url: "https://my.api.mockaroo.com/pages_test.json?key=26dc8050",
      responseType: "application/json",
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      const body = response.body;
      var keys = Object.keys(body);
      var obj = body[keys[(keys.length * Math.random()) << 0]];
      cy.wait(9000);
      cy.get(".gh-btn-primary").click();
      cy.wait(7000);
      cy.get(".gh-editor-title").type(obj["title"]);
      cy.wait(1000);
      cy.get(".koenig-editor__editor").type(obj["Paragraphs"]);
      cy.wait(7000);
      cy.get(".koenig-editor__editor").click();
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get("div.gh-editor-post-status  > span > div").should(
        "have.text",
        "\n        Published\n"
      );
    });
  });

  it("2. Publicar una nueva pagina sin titulo", () => {
    cy.get("#ember28").click();
    cy.request({
      method: "GET",
      url: "https://my.api.mockaroo.com/pages_test.json?key=26dc8050",
      responseType: "application/json",
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      const body = response.body;
      var keys = Object.keys(body);
      var obj = body[keys[(keys.length * Math.random()) << 0]];
      cy.wait(9000);
      cy.get(".gh-btn-primary").click();
      cy.wait(7000);
      cy.get(".koenig-editor__editor").type(obj["Paragraphs"]);
      cy.wait(7000);
      cy.get(".koenig-editor__editor").click();
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get("div.gh-editor-post-status  > span > div").should(
        "have.text",
        "\n        Published\n"
      );
    });
  });

  it("3. Publicar una nueva pagina Vacia", () => {
    cy.get("#ember28").click();
    cy.request({
      method: "GET",
      url: "https://my.api.mockaroo.com/pages_test.json?key=26dc8050",
      responseType: "application/json",
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      const body = response.body;
      var keys = Object.keys(body);
      var obj = body[keys[(keys.length * Math.random()) << 0]];
      cy.wait(9000);
      cy.get(".gh-btn-primary").click();
      cy.wait(7000);
      cy.get(".gh-editor-title").type(obj["title"]);
      cy.wait(1000);
      cy.get(".koenig-editor__editor").click();
      cy.wait(7000);
      cy.get(".gh-editor-title").clear();
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get("div.gh-editor-post-status  > span > div").should(
        "have.text",
        "\n        Published\n"
      );
    });
  });

  it("4. Publicar una nueva pagina titulo Naughty String", () => {
    cy.get("#ember28").click();
    cy.request({
      method: "GET",
      url: "https://my.api.mockaroo.com/pages_test.json?key=26dc8050",
      responseType: "application/json",
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      const body = response.body;
      var keys = Object.keys(body);
      var obj = body[keys[(keys.length * Math.random()) << 0]];
      cy.wait(9000);
      cy.get(".gh-btn-primary").click();
      cy.wait(7000);
      cy.get(".gh-editor-title").type(obj["test-field"]);
      cy.wait(1000);
      cy.get(".koenig-editor__editor").click();
      cy.wait(7000);
      cy.get(".gh-editor-title").clear();
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get("div.gh-editor-post-status  > span > div").should(
        "have.text",
        "\n        Published\n"
      );
    });
  });

  it("5. Actualizar titulo y contenido de  una  pagina", () => {
    cy.get("#ember28").click();
    cy.request({
      method: "GET",
      url: "https://my.api.mockaroo.com/pages_test.json?key=26dc8050",
      responseType: "application/json",
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      const body = response.body;
      var keys = Object.keys(body);
      var obj = body[keys[(keys.length * Math.random()) << 0]];
      cy.wait(9000);
      cy.get(".gh-posts-list-item > a > .gh-content-entry-title")
        .first()
        .click();
      cy.get(".gh-editor-title").clear();
      cy.get(".gh-editor-title").type(obj["title"]);
      cy.get(".koenig-editor__editor").clear();
      cy.get(".koenig-editor__editor").type(obj["Paragraphs"]);
      cy.wait(7000);
      cy.get(".koenig-editor__editor").click();
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get("div.gh-editor-post-status  > span > div").should(
        "have.text",
        "\n        Published\n"
      );
    });
  });

  it("6. Contar palabras contenido", () => {
    cy.get("#ember28").click();
    cy.request({
      method: "GET",
      url: "https://my.api.mockaroo.com/pages_test.json?key=26dc8050",
      responseType: "application/json",
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      const body = response.body;
      var keys = Object.keys(body);
      var obj = body[keys[(keys.length * Math.random()) << 0]];
      cy.wait(9000);
      cy.get(".gh-btn-primary").click();
      cy.wait(7000);
      cy.get(".gh-editor-title").type(obj["title"]);
      cy.wait(1000);
      cy.get(".koenig-editor__editor").type(obj["words_5"]);
      cy.wait(3000);
      cy.get(".gh-editor-wordcount").should(
        "have.text",
        "\n                    5 words\n                "
      );
    });
  });

  it("7. Publicar una nueva pagina titulo url", () => {
    cy.get("#ember28").click();
    cy.request({
      method: "GET",
      url: "https://my.api.mockaroo.com/pages_test.json?key=26dc8050",
      responseType: "application/json",
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      const body = response.body;
      var keys = Object.keys(body);
      var obj = body[keys[(keys.length * Math.random()) << 0]];
      cy.wait(9000);
      cy.get(".gh-btn-primary").click();
      cy.wait(7000);
      cy.get(".gh-editor-title").type(obj["image_url"]);
      cy.wait(1000);
      cy.get(".koenig-editor__editor").click();
      cy.wait(7000);
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get("div.gh-editor-post-status  > span > div").should(
        "have.text",
        "\n        Published\n"
      );
    });
  });

  it("8. Titulo con mas de un parrafo", () => {
    cy.get("#ember28").click();
    cy.request({
      method: "GET",
      url: "https://my.api.mockaroo.com/pages_test.json?key=26dc8050",
      responseType: "application/json",
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      const body = response.body;
      var keys = Object.keys(body);
      var obj = body[keys[(keys.length * Math.random()) << 0]];
      cy.wait(9000);
      cy.get(".gh-btn-primary").click();
      cy.wait(7000);
      cy.get(".gh-editor-title").type(obj["Paragraphs"]);
      cy.wait(3000);
      cy.get(".koenig-editor__editor").click();
      cy.wait(7000);
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get("div.gh-editor-post-status  > span > div").should(
        "have.text",
        "\n        Published\n"
      );
    });
  });

  it("9. Publicar una nueva pagina sin contenido", () => {
    cy.get("#ember28").click();
    cy.request({
      method: "GET",
      url: "https://my.api.mockaroo.com/pages_test.json?key=26dc8050",
      responseType: "application/json",
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      const body = response.body;
      var keys = Object.keys(body);
      var obj = body[keys[(keys.length * Math.random()) << 0]];
      cy.wait(9000);
      cy.get(".gh-btn-primary").click();
      cy.wait(7000);
      cy.get(".gh-editor-title").type(obj["title"]);
      cy.wait(1000);
      cy.get(".koenig-editor__editor").click();
      cy.wait(7000);
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get("div.gh-editor-post-status  > span > div").should(
        "have.text",
        "\n        Published\n"
      );
    });
  });

  it("10. Publicar una nueva pagina titulo numero", () => {
    cy.get("#ember28").click();
    cy.request({
      method: "GET",
      url: "https://my.api.mockaroo.com/pages_test.json?key=26dc8050",
      responseType: "application/json",
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      const body = response.body;
      var keys = Object.keys(body);
      var obj = body[keys[(keys.length * Math.random()) << 0]];
      cy.wait(9000);
      cy.get(".gh-btn-primary").click();
      cy.wait(7000);
      cy.get(".gh-editor-title").type(obj["number"]);
      cy.wait(1000);
      cy.get(".koenig-editor__editor").click();
      cy.wait(7000);
      cy.get(".gh-editor-title").clear();
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get("div.gh-editor-post-status  > span > div").should(
        "have.text",
        "\n        Published\n"
      );
    });
  });
});
