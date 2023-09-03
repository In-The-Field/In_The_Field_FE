describe('Initial Page Load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display the nav elements', () => {
    cy.get('.nav-container').should('be.visible');
    cy.get('.logo').should('be.visible');
    cy.get('.homepage-btn').should('contain', 'Home').and('be.visible');
    cy.get('.my-field-guide-btn').should('contain', 'My Field Guide').and('be.visible');
  });

  it('should display the main homepage content', () => {
    cy.get('.content-container h1').should('contain', 'Welcome to In The Field!').and('be.visible');
    cy.get('.content-container p').should('contain', 'Drag and Drop -or- Upload your mushroom image here!').and('be.visible');
    cy.get('.upload-button').should('contain', 'Upload Photo').and('be.visible');
  });
});