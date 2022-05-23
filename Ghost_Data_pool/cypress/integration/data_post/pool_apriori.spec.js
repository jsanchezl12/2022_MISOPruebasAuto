function Login() {
  // Pruebas pra hacer login y empezar a realizar las pruebas
  cy.visit("http://localhost:2368/ghost/#/site");

  cy.get("#ember7").type('mf.moraless1@uniandes.edu.co');
  cy.get("#ember9").type('Aranda2020*');
  cy.get("#ember11").click();
  cy.wait(1000);
}
describe("Testing Ghost Posts", () => {
  beforeEach(() => {
    Login();
  })

 it("Post; titulo y descripción", function () {
    // 1. Escenario positivo - a priori
    Post_Esc_1();
  });

  it("Post: titulo vacio y descripción", function () {
    // 2. Escenario positivo - a priori
    Post_Esc_2();
  });

  
  it("Post: titulo con numeros y descripción vacío", function () {
    // 3. Escenario positivo - a priori
    Post_Esc_3();
  });

  it("Post: titulo con expresiones regulares y descripción vacío", function () {
    // 4. Escenario positivo - a priori
    Post_Esc_4();
  });

  it("Post: titulo con universidades, descripción vacío e imagen", function () {
    // 5. Escenario positivo - a priori
    Post_Esc_5();
  });

  it("Post: titulo con nombre de compañias y opciones hora expresiones regulares", function () {
    // 6. Escenario negativo - a priori
    Post_Esc_6();
  });
 
  it("Post: titulo con universidades y descripción y opciones fecha numeros", function () {
    // 7. Escenario negativo - a priori
    Post_Esc_7();
  });
  
  
  it("Post: titulo con  animales y descripción corta  y Post URL con expresiones numeros", function () {
    // 8. Escenario negativo - a priori
    Post_Esc_8();
  });
 
  
  it("Post: titulo con  animales y descripción corta  y Post URL con expresiones regulares", function () {
    // 9. Escenario negativo - a priori
    Post_Esc_9();
  });
 
  it("Post: titulo vacío y descripción y Post URL con nombres de peliculas", function () {
    // 10. Escenario negativo - a priori
    Post_Esc_10();
  });

});


function Post_Esc_1() {
  cy.readFile("cypress/fixtures/pool_apriori.json").then((obj) => {
    var keys = Object.keys(obj);
    var obj = obj[keys[(keys.length * Math.random()) << 0]];
    cy.wait(1000);

    cy.get('.gh-nav-new-post').click();
    cy.wait(1000);
    cy.get('.ember-text-area').type(obj['title']);
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type(obj['paragraph']);
    cy.wait(1000);
    cy.get('.ember-basic-dropdown-trigger').click()
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click()
    cy.wait(1000);
    cy.get('.gh-btn-black').click()
    cy.wait(1000);
    cy.get('div.gh-editor-post-status  > span > div').should("have.text",
      "\n        Published\n")
    cy.wait(1000);
  })

}

function Post_Esc_2() {
  cy.readFile("cypress/fixtures/pool_apriori.json").then((obj) => {
    var keys = Object.keys(obj);
    var obj = obj[keys[(keys.length * Math.random()) << 0]];
    cy.wait(1000);

    cy.get('.gh-nav-new-post').click();
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type(obj['paragraph']);
    cy.wait(1000);
    cy.get('.ember-basic-dropdown-trigger').click()
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click()
    cy.wait(1000);
    cy.get('.gh-btn-black').click()
    cy.wait(1000);
    cy.get('div.gh-editor-post-status  > span > div').should("have.text",
      "\n        Published\n")
    cy.wait(1000);
  })

}


function Post_Esc_3() {
  cy.readFile("cypress/fixtures/pool_apriori.json").then((obj) => {
    var keys = Object.keys(obj);
    var obj = obj[keys[(keys.length * Math.random()) << 0]];
    cy.wait(1000);

    cy.get('.gh-nav-new-post').click();
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type(obj['tititle_street_numbers']);
    cy.wait(1000);
    cy.get('.ember-basic-dropdown-trigger').click()
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click()
    cy.wait(1000);
    cy.get('.gh-btn-black').click()
    cy.wait(1000);
    cy.get('div.gh-editor-post-status  > span > div').should("have.text",
      "\n        Published\n")
    cy.wait(1000);
  })

}

function Post_Esc_4() {
  cy.readFile("cypress/fixtures/pool_apriori.json").then((obj) => {
    var keys = Object.keys(obj);
    var obj = obj[keys[(keys.length * Math.random()) << 0]];
    cy.wait(1000);

    cy.get('.gh-nav-new-post').click();
    cy.wait(1000);
    cy.get('.ember-text-area').type(obj['regular_expresion']);
    cy.wait(1000);
    cy.get('.koenig-editor__editor').click();
    cy.wait(1000);
    cy.get('.ember-basic-dropdown-trigger').click()
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click()
    cy.wait(1000);
    cy.get('.gh-btn-black').click()
    cy.wait(1000);
    cy.get('div.gh-editor-post-status  > span > div').should("have.text",
      "\n        Published\n")
    cy.wait(1000);
  })

}

function Post_Esc_5() {
  cy.readFile("cypress/fixtures/pool_apriori.json").then((obj) => {
    var keys = Object.keys(obj);
    var obj = obj[keys[(keys.length * Math.random()) << 0]];
    cy.wait(1000);
   
    cy.get('.gh-nav-new-post').click();
    cy.wait(1000); 
    cy.get('.gh-editor-feature-image-unsplash > svg').click();
    cy.wait(1000);
    cy.get('.gh-unsplash-search').type(obj['text_image']);
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(1) > .gh-unsplash-photo-container > .gh-unsplash-photo-overlay').click();
    cy.wait(1000);
    cy.get('.absolute > .gh-unsplash-photo > .gh-unsplash-photo-container > .gh-unsplash-photo-overlay > .gh-unsplash-photo-footer > .gh-unsplash-button').click();
    cy.wait(1000);
    cy.get('.ember-text-area').type(obj['university']);
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type(obj['paragraph']);
    cy.wait(1000);
    cy.get('.ember-basic-dropdown-trigger').click()
    cy.wait(1000);
    
    cy.get('.gh-publishmenu-button').click()
    cy.wait(1000);
    cy.get('.gh-btn-black').click()
    cy.wait(1000);
    cy.get('div.gh-editor-post-status  > span > div').should("have.text",
      "\n        Published\n")
    cy.wait(1000);
  })

}

function Post_Esc_6() {
  cy.readFile("cypress/fixtures/pool_apriori.json").then((obj) => {
    var keys = Object.keys(obj);
    var obj = obj[keys[(keys.length * Math.random()) << 0]];
    cy.wait(1000);
    cy.get(".gh-nav-new-post").click();
    cy.wait(1000);
    cy.get(".ember-text-area").type(obj["company"]);
    cy.wait(1000);
    cy.get(".settings-menu-toggle > span").click();
    cy.wait(1000);
    cy.get(".gh-date-time-picker-time").click();
    cy.wait(1000);
    cy.get(".gh-date-time-picker-time").type(obj["regular_expresion"]);
    cy.wait(1000);
    cy.get("form").click();
    cy.wait(1000);
  });
}

function Post_Esc_7() {
  cy.readFile("cypress/fixtures/pool_apriori.json").then((obj) => {
    var keys = Object.keys(obj);
    var obj = obj[keys[(keys.length * Math.random()) << 0]];
    cy.wait(1000);
    cy.get(".gh-nav-new-post").click();
    cy.wait(1000);
    cy.get(".ember-text-area").type(obj["university"]);
    cy.wait(1000);
    cy.get(".koenig-editor__editor").type(obj["paragraph"]);
    cy.wait(1000);
    cy.get(".settings-menu-toggle > span").click();
    cy.wait(1000);
    cy.get(".gh-date-time-picker-date").click();
    cy.wait(1000);
    cy.get(".gh-date-time-picker-date").type(obj["title_numbers"]);
    cy.wait(1000);
    cy.get("form").click();
    cy.wait(1000);
  });
}

function Post_Esc_8() {
  cy.readFile("cypress/fixtures/pool_apriori.json").then((obj) => {
    var keys = Object.keys(obj);
    var obj = obj[keys[(keys.length * Math.random()) << 0]];
    cy.wait(1000);
    cy.get(".gh-nav-new-post").click();
    cy.wait(1000);
    cy.get(".ember-text-area").type(obj["automoviles"]);
    cy.wait(1000);
    cy.get(".koenig-editor__editor").click();
    cy.wait(1000);
    //cy.get('.koenig-editor').type(obj['paragraph']);
    cy.wait(1000);
    cy.get(".settings-menu-toggle > span").click();
    cy.wait(1000);
    cy.get("#url").type(obj["numbers"]);
    cy.wait(1000);
    cy.get("form").click();
  });
}

function Post_Esc_9() {
  cy.readFile("cypress/fixtures/pool_apriori.json").then((obj) => {
    var keys = Object.keys(obj);
    var obj = obj[keys[(keys.length * Math.random()) << 0]];
    cy.wait(1000);
    cy.get(".gh-nav-new-post").click();
    cy.wait(1000);
    cy.get(".ember-text-area").type(obj["text_image"]);
    cy.wait(1000);
    cy.get(".koenig-editor__editor").click();
    cy.wait(1000);
    //cy.get('.koenig-editor').type(obj['description']);
    cy.wait(1000);
    cy.get(".settings-menu-toggle > span").click();
    cy.wait(1000);
    cy.get("#url").type(obj["regular_expresion"]);
    cy.wait(1000);
    cy.get("form").click();
  });
}
function Post_Esc_10() {
  cy.readFile("cypress/fixtures/pool_apriori.json").then((obj) => {
    var keys = Object.keys(obj);
    var obj = obj[keys[(keys.length * Math.random()) << 0]];
    cy.wait(1000);
    cy.get(".gh-nav-new-post").click();
    cy.wait(1000);
    cy.get(".koenig-editor__editor").click();
    cy.wait(1000);
    cy.get('.koenig-editor').type(obj['description']);
    cy.wait(1000);
    cy.get(".settings-menu-toggle > span").click();
    cy.wait(1000);
    cy.get("#url").type(obj["title"]);
    cy.wait(1000);
    cy.get("form").click();
  });
}
