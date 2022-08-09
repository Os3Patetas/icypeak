let hostVood = "http://localhost:4200/";

Cypress.Commands.add("visitVood", (hostVood: string) => {
  cy.visit(hostVood);
});
