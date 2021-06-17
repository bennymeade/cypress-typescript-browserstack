// custom commands - see /support/index.d.ts for docs link
Cypress.on('uncaught:exception', _err => {
    return false;
});
  
Cypress.Commands.add('refreshPage', () => {
    cy.wait(1000);
    cy.reload();
});