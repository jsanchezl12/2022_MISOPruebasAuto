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

  it("Post: titulo con  universidad y descripción con numeros e imagen (animales)", function () {
    // 1. Escenario positivo - pseudo
    Post_Esc_1();
  });

  it("Post: titulo con hora y descripción con compañias", function () {
    // 2. Escenario positivo - pseudo
    Post_Esc_2();
  });

  it("Post: titulo con  nombres de peliculas y descripción automoviles", function () {
    // 3. Escenario positivo - pseudo
    Post_Esc_3();
  });

  it("Post: titulo con  tiempo  y descripción con caracteres raros.", function () {
    // 4. Escenario positivo - pseudo
    Post_Esc_4();
  });

  it("Post: titulo con numeros de calles y descripción con caracteres raro y Excerpt con parrafos que exceden el campo", function () {
    // 5. Escenario positivo - pseudo
    Post_Esc_5();
  });

  it("Post: titulo con numeros de calles y descripción con caracteres raros y Excerpt con nombres de animales ", function () {
    // 6. Escenario positivo - pseudo
    Post_Esc_6();
  });

  it("Post: titulo con universidades, descripción con parrafos y autor vacío", function () {
    // 7. Escenario positivo - pseudo
    Post_Esc_7();
  });

   it("Post: titulo con universidades, descripción con parrafos y autor con números", function () {
    // 8. Escenario positivo - pseudo
    Post_Esc_8();
  });
  it("Post: titulo con automoviles, descripción con parrafos, autor con hora y  url meta data con corta descripción", function () {
    // 9. Escenario positivo - pseudo
    Post_Esc_9();
  });

  it("Post: titulo con descripcion corta, descripción con universidades, autor con compañia y url meta data con números", function () {
    // 10. Escenario positivo - pseudo
    Post_Esc_10();
  });
});

function Post_Esc_1() {
  cy.request({
    method: "GET",
    url: "https://my.api.mockaroo.com/a_priori.json?key=27a4f860",
    responseType: "application/json",
  }).then((response) => {
    expect(response).property("status").to.equal(200);
    const body = response.body;
    var keys = Object.keys(body);
    var obj = body[keys[(keys.length * Math.random()) << 0]];

    cy.wait(1000);
    cy.get(".gh-nav-new-post").click();
    cy.wait(1000);
    cy.get(".gh-editor-feature-image-unsplash > svg").invoke("show").click();
    cy.wait(1000);
    cy.get(".gh-unsplash-search").type(obj["text_image"]);
    cy.get(
      ":nth-child(2) > :nth-child(1) > .gh-unsplash-photo-container > .gh-unsplash-photo-overlay > .gh-unsplash-photo-footer > .gh-unsplash-button"
    ).click();
    cy.get(".ember-text-area").type(obj["university"]);
    cy.wait(1000);
    cy.get(".koenig-editor__editor").type(obj["numbers"]);

    cy.get(".ember-view").contains("Publish").click();
    cy.wait(2000);
    cy.get(".gh-btn-black").contains("Publish").click();
    cy.wait(2000);
    cy.get(".gh-btn-black").contains("Publish").click();
    cy.wait(2000);
    cy.get(".gh-editor-back-button").click();
    cy.wait(2000);
  });
}

function Post_Esc_2() {
  cy.request({
    method: "GET",
    url: "https://my.api.mockaroo.com/a_priori.json?key=27a4f860",
    responseType: "application/json",
  }).then((response) => {
    expect(response).property("status").to.equal(200);
    const body = response.body;
    var keys = Object.keys(body);
    var obj = body[keys[(keys.length * Math.random()) << 0]];

    cy.wait(1000);
    cy.get(".gh-nav-new-post").click();
    cy.wait(1000);
    cy.get(".ember-text-area").type(obj["time"]);
    cy.wait(1000);
    cy.get(".koenig-editor__editor").type(obj["company"]);
    cy.get(".ember-view").contains("Publish").click();
    cy.wait(2000);
    cy.get(".gh-btn-black").contains("Publish").click();
    cy.wait(2000);
    cy.get(".gh-btn-black").contains("Publish").click();
    cy.wait(2000);
    cy.get(".gh-editor-back-button").click();
    cy.wait(2000);
  });
}


function Post_Esc_3() {
    cy.request({
      method: "GET",
      url: "https://my.api.mockaroo.com/a_priori.json?key=27a4f860",
      responseType: "application/json",
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      const body = response.body;
      var keys = Object.keys(body);
      var obj = body[keys[(keys.length * Math.random()) << 0]];
  
      cy.wait(1000);
      cy.get(".gh-nav-new-post").click();
      cy.wait(1000);
      cy.get(".ember-text-area").type(obj["title"]);
      cy.wait(1000);
      cy.get(".koenig-editor__editor").type(obj["automoviles"]);
      cy.get(".ember-view").contains("Publish").click();
      cy.wait(2000);
      cy.get(".gh-btn-black").contains("Publish").click();
      cy.wait(2000);
      cy.get(".gh-btn-black").contains("Publish").click();
      cy.wait(2000);
      cy.get(".gh-editor-back-button").click();
      cy.wait(2000);
    });
  }

function Post_Esc_4() {
cy.request({
    method: "GET",
    url: "https://my.api.mockaroo.com/a_priori.json?key=27a4f860",
    responseType: "application/json",
}).then((response) => {
    expect(response).property("status").to.equal(200);
    const body = response.body;
    var keys = Object.keys(body);
    var obj = body[keys[(keys.length * Math.random()) << 0]];

    cy.wait(1000);
    cy.get(".gh-nav-new-post").click();
    cy.wait(1000);
    cy.get(".ember-text-area").type(obj["automoviles"]);
    cy.wait(1000);
    cy.get(".koenig-editor__editor").type(obj["regular_expresion"]);
    cy.get(".ember-view").contains("Publish").click();
    cy.wait(2000);
    cy.get(".gh-btn-black").contains("Publish").click();
    cy.wait(2000);
    cy.get(".gh-btn-black").contains("Publish").click();
    cy.wait(2000);
    cy.get(".gh-editor-back-button").click();
    cy.wait(2000);
});
}


function Post_Esc_5() {
    cy.request({
        method: "GET",
        url: "https://my.api.mockaroo.com/a_priori.json?key=27a4f860",
        responseType: "application/json",
    }).then((response) => {
        expect(response).property("status").to.equal(200);
        const body = response.body;
        var keys = Object.keys(body);
        var obj = body[keys[(keys.length * Math.random()) << 0]];
    
        cy.wait(1000);
        cy.get(".gh-nav-new-post").click();
        cy.wait(1000);
        cy.get(".ember-text-area").type(obj["title_street_numbers"]);
        cy.wait(1000);
        cy.get(".koenig-editor__editor").type(obj["regular_expresion"]);
        cy.get('.settings-menu-toggle > span > svg').click()

        cy.get('#custom-excerpt').click();
        cy.get('#custom-excerpt').type(obj["text_image"]);
        cy.get('.settings-menu-toggle > span > svg').click()
        cy.get(".ember-view").contains("Publish").click();
        cy.wait(2000);
        cy.get(".gh-btn-black").contains("Publish").click();
        cy.wait(2000);
        cy.get(".gh-btn-black").contains("Publish").click();
        cy.wait(2000);
    });
    }

    function Post_Esc_6() {
      cy.request({
        method: "GET",
        url: "https://my.api.mockaroo.com/a_priori.json?key=27a4f860",
        responseType: "application/json",
      }).then((response) => {
        expect(response).property("status").to.equal(200);
        const body = response.body;
        var keys = Object.keys(body);
        var obj = body[keys[(keys.length * Math.random()) << 0]];
    
        cy.wait(1000);
        cy.get(".gh-nav-new-post").click();
        cy.wait(1000);
        cy.get(".ember-text-area").type(obj["title_street_numbers"]);
        cy.wait(1000);
        cy.get(".koenig-editor__editor").type(obj["regular_expresion"]);
        cy.get(".settings-menu-toggle > span > svg").click();
        cy.get("#custom-excerpt").click();
        cy.get("#custom-excerpt").type(obj["paragraph"]);
        cy.get(".settings-menu-toggle > span > svg").click();
        cy.get(".ember-view").contains("Publish").click();
        cy.wait(2000);
        cy.get(".gh-btn-black").contains("Publish").click();
        cy.wait(2000);
        cy.get(".gh-btn-black").contains("Publish").click();
        cy.wait(2000);
      });
    }
    
    function Post_Esc_7() {
      cy.request({
        method: "GET",
        url: "https://my.api.mockaroo.com/a_priori.json?key=27a4f860",
        responseType: "application/json",
      }).then((response) => {
        expect(response).property("status").to.equal(200);
        const body = response.body;
        var keys = Object.keys(body);
        var obj = body[keys[(keys.length * Math.random()) << 0]];
    
        cy.wait(1000);
        cy.get(".gh-nav-new-post").click();
        cy.wait(1000);
        cy.get(".ember-text-area").type(obj["university"]);
        cy.wait(1000);
        cy.get(".koenig-editor__editor").type(obj["paragraph"]);
        cy.get(".settings-menu-toggle > span > svg").click();
        cy.wait(2000);
        cy.get("#author-list").type("{backspace}");
        cy.wait(2000);
        cy.get("#author-list").click();
        cy.wait(2000);
        cy.get(".gh-editor-back-button").click();
      });
    }
    function Post_Esc_8() {
      cy.request({
        method: "GET",
        url: "https://my.api.mockaroo.com/a_priori.json?key=27a4f860",
        responseType: "application/json",
      }).then((response) => {
        expect(response).property("status").to.equal(200);
        const body = response.body;
        var keys = Object.keys(body);
        var obj = body[keys[(keys.length * Math.random()) << 0]];
    
        cy.wait(1000);
        cy.get(".gh-nav-new-post").click();
        cy.wait(1000);
        cy.get(".ember-text-area").type(obj["university"]);
        cy.wait(1000);
        cy.get(".koenig-editor__editor").type(obj["paragraph"]);
        cy.get(".settings-menu-toggle > span > svg").click();
        cy.wait(2000);
        cy.get("#author-list").type("{backspace}");
        cy.wait(2000);
        cy.get("#author-list").type(obj["title_street_numbers"]);
        cy.wait(2000);
        cy.get("#author-list").click();
        cy.wait(2000);
        cy.get(".gh-editor-back-button").click();
      });
    }
    
    function Post_Esc_9() {
      cy.request({
        method: "GET",
        url: "https://my.api.mockaroo.com/a_priori.json?key=27a4f860",
        responseType: "application/json",
      }).then((response) => {
        expect(response).property("status").to.equal(200);
        const body = response.body;
        var keys = Object.keys(body);
        var obj = body[keys[(keys.length * Math.random()) << 0]];
    
        cy.wait(1000);
        cy.get(".gh-nav-new-post").click();
        cy.wait(1000);
        cy.get(".ember-text-area").type(obj["automoviles"]);
        cy.wait(1000);
        cy.get(".koenig-editor__editor").type(obj["paragraph"]);
        cy.get(".settings-menu-toggle > span > svg").click();
        cy.wait(2000);
        cy.get("#author-list").type("{backspace}");
        cy.wait(2000);
        cy.get("#author-list").type(obj["title_street_numbers"]);
        cy.wait(2000);
        cy.get("#author-list").click();
        cy.wait(2000);
        cy.get(".nav-list > :nth-child(1) > button").click();
        cy.wait(2000);
        cy.get(".post-setting-canonicalUrl").type(obj["description"]);
        cy.wait(2000);
        cy.get(".active > .settings-menu-content").click();
      });
    }
    
    function Post_Esc_10() {
      cy.request({
        method: "GET",
        url: "https://my.api.mockaroo.com/a_priori.json?key=27a4f860",
        responseType: "application/json",
      }).then((response) => {
        expect(response).property("status").to.equal(200);
        const body = response.body;
        var keys = Object.keys(body);
        var obj = body[keys[(keys.length * Math.random()) << 0]];
    
        cy.wait(1000);
        cy.get(".gh-nav-new-post").click();
        cy.wait(1000);
        cy.get(".ember-text-area").type(obj["description"]);
        cy.wait(1000);
        cy.get(".koenig-editor__editor").type(obj["university"]);
        cy.get(".settings-menu-toggle > span > svg").click();
        cy.wait(2000);
        cy.get("#author-list").type("{backspace}");
        cy.wait(2000);
        cy.get("#author-list").type(obj["company"]);
        cy.wait(2000);
        cy.get("#author-list").click();
        cy.wait(2000);
        cy.get(".nav-list > :nth-child(1) > button").click();
        cy.wait(2000);
        cy.get(".post-setting-canonicalUrl").type(obj["title_street_numbers"]);
        cy.wait(2000);
        cy.get(".active > .settings-menu-content").click();
      });
    }
    
    