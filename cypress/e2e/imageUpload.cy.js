describe("Image Upload functionality", () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:3000");

    cy.intercept("POST", "http://localhost:5000/graphql", (req) => {
      if (req.body.operationName === "GetMushroomMatches") {
        req.reply({ fixture: "mushroomMatches.json" });
      }
    }).as("getMushroomMatches");
  });

  it('should successfully upload the image via drag and drop, send a query, and display results', () => {
      cy.uploadImage('cypress/fixtures/HappyPath.JPG');
    
      cy.wait('@getMushroomMatches');
    
      cy.get('.user-image').should('be.visible');
    
      cy.get('.upload-new-button').should('be.visible');
    
      cy.get('.homepage-right-container').should('be.visible');

      cy.get('.mushroom-card').should('have.length', 3);
    

      cy.get('.mushroom-card').first().should('contain.text', "Coker's Amanita");
      cy.get('.mushroom-card').first().should('contain.text', "Amanita cokeri");

    // need to add more checks... 

  });

});

