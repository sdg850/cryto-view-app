describe("Testing crypto-view App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should reload initial crypto currencies", () => {
    cy.get(".card-item-container").should("have.length", 8);
    cy.window()
      .scrollTo("top", { easing: "linear", duration: 1000 })
      .scrollTo("bottom", { easing: "linear", duration: 10000 })
      .then(() => {
        cy.get(".card-item-container").should("have.length", 200);
      });
  });

  it("Should get especific crypto currencies ", () => {
    cy.get("input")
      .should("be.visible")
      .type("bitcoin")
      .wait(2000)
      .then(() => {
        cy.get(".card-item-container")
          .should("have.length", 6)
          .should("be.visible");
      });
  });

  it("Should click 'More Cryptos' button and display more crypto currencies", () => {
    cy.wait(4000);
    cy.get("button")
      .contains("More Cryptos")
      .should("be.visible")
      .click()
      .wait(4000);
    cy.window()
      .scrollTo("top", { easing: "linear", duration: 2000 })
      .scrollTo("bottom", { easing: "linear", duration: 15000 })
      .then(() => {
        cy.get(".card-item-container").should("have.length", 200);
      });
  });
});
