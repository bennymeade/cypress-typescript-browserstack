/// <reference path = "../support/index.d.ts" />
describe("one test of ts on bs", () => {
  it("passes a test", function () {
    cy.visit('/');
    cy.refreshPage();
    cy.url().should('contain', 'google');
  });
});
  