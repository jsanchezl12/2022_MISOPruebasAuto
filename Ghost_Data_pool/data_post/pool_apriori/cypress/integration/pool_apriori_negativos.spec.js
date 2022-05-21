function Login() {
  // Pruebas pra hacer login y empezar a realizar las pruebas
  cy.visit("http://localhost:2368/ghost/#/site");

  cy.get("#ember7").type('d.moralesa2@uniandes.edu.co');
  cy.get("#ember9").type('Bogota2022');
  cy.get("#ember11").click();
  cy.wait(1000);
}
describe("Testing Ghost Posts", () => {
  beforeEach(() => {
    Login();
  })

 it("Post: titulo con nombre de compañias y opciones fecha expresiones regualares", function () {
    // 1. Escenario negativo - a priori
    //Post_Esc_1();
  });
 
  it("Post: titulo con universidades y descripción  y opciones fecha numeros", function () {
    // 2. Escenario positivo - a priori
    Post_Esc_2();
  });

  /*
  it("Post: titulo con numeros y descripción vacío", function () {
    // 3. Escenario positivo - a priori
    Post_Esc_3();
  });

  it("Post: titulo con expresiones regulares y descripción vacío", function () {
    // 4. Escenario positivo - a priori
    //Post_Esc_4();
  });

  it("Post: titulo con universidades, descripción vacío e imagen", function () {
    // 5. Escenario positivo - a priori
    Post_Esc_5();
  });
*/
});


function Post_Esc_1() {
  cy.readFile("cypress/data/pool_apriori.json").then((obj) => {
    var keys = Object.keys(obj);
    var obj = obj[keys[(keys.length * Math.random()) << 0]];
    cy.wait(1000);
    cy.get('.gh-nav-new-post').click();
    cy.wait(1000);
    cy.get('.ember-text-area').type(obj['company']);
    cy.wait(1000);
    cy.get('.settings-menu-toggle > span').click();
    cy.wait(1000);
    cy.get('.gh-date-time-picker-time').click();
    cy.wait(1000);
    cy.get('.gh-date-time-picker-time').type(obj['regular_expresion']);
    cy.wait(1000);
    cy.get('form').click();
    cy.wait(1000);
  })

}

function Post_Esc_2() {
  cy.readFile("cypress/data/pool_apriori.json").then((obj) => {
    var keys = Object.keys(obj);
    var obj = obj[keys[(keys.length * Math.random()) << 0]];
    cy.wait(1000);
    cy.get('.gh-nav-new-post').click();
    cy.wait(1000);
    cy.get('.ember-text-area').type(obj['university']);
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type(obj['paragraph']);
    cy.wait(1000);
    cy.get('.settings-menu-toggle > span').click();
    cy.wait(1000);
    cy.get('.gh-date-time-picker-date').click();
    cy.wait(1000);
    cy.get('.gh-date-time-picker-date').type(obj['title_numbers']);
    cy.wait(1000);
    cy.get('form').click();
    cy.wait(1000);
  })

}
