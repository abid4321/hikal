describe("Visit Hikal CRM", () => {
    it("should load the website successfully", () => {
      cy.visit("https://test.hikalcrm.com/");
      
      // Validate the page loaded by checking the title
      cy.title().should("not.be.empty");
  
      // Optional: Check if the login form is present
      cy.get("#email").should("be.visible");
    });
  });
  