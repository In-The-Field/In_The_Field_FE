Cypress.Commands.add("uploadImage", (fileName) => {
  cy.get('input[type="file').selectFile('cypress/fixtures/HappyPath.JPG', { force: true });
});
