describe("Test that my site is working", () => {
  it("Visits the localhost of my site", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("Test that h2 has the right id", () => {
  it("Visits the localhost of my site", () => {
    cy.visit("http://localhost:3000");
    cy.get("#id-test").contains("Hello World!");
  });
});
