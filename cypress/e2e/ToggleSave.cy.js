describe("Toggle Save Functionality", () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:3000");

    cy.intercept("POST", "http://localhost:5000/graphql", (req) => {
      if (req.body.operationName === "GetMushroomMatches") {
        req.reply({ fixture: "mushroomMatches.json" });
      }
    }).as("getMushroomMatches");
  });

  it('should successfully upload the image via drag and display results with ToggleSave functionality', () => {
      cy.uploadImage('cypress/fixtures/HappyPath.JPG');
    
      cy.wait('@getMushroomMatches');
    
      cy.get('.user-image').should('be.visible');
    
      cy.get('.upload-new-button').should('be.visible');
    
      cy.get('.homepage-right-container').should('be.visible');

      cy.get('.mushroom-card').should('have.length', 3);


    cy.get(':nth-child(1) > .toggle-save-container').should('exist');
    cy.get(':nth-child(2) > .toggle-save-container').should('exist');
    cy.get(':nth-child(3) > .toggle-save-container').should('exist');
  
    cy.get('.my-field-guide-btn').click();

    
  });

});





