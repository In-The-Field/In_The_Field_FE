describe("Entire user flow", () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('should successfully upload the image via drag and drop, send a query, and display results', () => {

    cy.intercept("POST", "https://in-the-field.onrender.com/graphql", (req) => {
      if (req.body.operationName === "GetMushroomMatches") {
        req.reply({ fixture: "mushroomMatches.json" });
      }
    }).as("getMushroomMatches");

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

// assert for the messagse

      cy.get('.homepage-btn').click()
      
      cy.get(':nth-child(1) > .toggle-save-container > .toggle-image').click()

      cy.get('.my-field-guide-btn').click();

      cy.get('.mushroom-card').should('have.length', 1);

      cy.get('.mushroom-card').click()

      cy.get(".name-holder").should('be.visible').find('h2').should('contain.text', "Amanita cokeri")

      cy.get('.name-holder > p').should('contain.text',"Coker's amanita")

      cy.get('.details-image').should('be.visible').should('have.attr', 'src').should('include','https://mushroom-id.ams3.cdn.digitaloceanspaces.com/knowledge_base/wikid')

      cy.get('.toggle-image').should('be.visible')

      cy.get('.taxonomy').should('be.visible')

      cy.get('.taxonomy > :nth-child(2)').should('contain.text', 'Genus: Amanita')

      cy.get('.taxonomy > :nth-child(3)').should('contain.text', 'Order: Agaricales')

      cy.get('.taxonomy > :nth-child(4)').should('contain.text', 'Family: Amanitaceae')

      cy.get('.taxonomy > :nth-child(5)').should('contain.text', 'Phylum: Basidiomycota')

      cy.get('.taxonomy > :nth-child(6)').should('contain.text', 'Kingdom: Fungi')
      cy.get('.info').should("be.visible")

      cy.get('.info > :nth-child(1)').should('contain.text', 'Edibility:  poisonous ')

      cy.get('.info > :nth-child(2)').should('contain.text', 'Lookalike:  not provided')

      cy.get('.info > :nth-child(3)').should('contain.text', 'Psychoactive:  false')

      cy.get('.description > p').should('contain.text', "Description: Amanita cokeri, commonly known as Coker's amanita and solitary lepidella, is a mushroom in the family Amanitaceae. The  mushroom is poisonous. First described as Lepidella cokeri in 1928, it was transferred to the genus Amanita in 1940.")

      cy.get('.toggle-image').click()
      cy.get('.my-field-guide-btn').click()

      cy.get('p').should('contain.text', "You have no mushrooms saved.")
      

  });

});
