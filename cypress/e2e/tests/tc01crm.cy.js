describe("Hikal CRM Login Test", () => {
    it("should log in successfully", () => {
      // Visit the login page
      cy.visit("https://test.hikalcrm.com/");
  
      // Enter email
      cy.get("#email").type("Admin");
  
      // Enter password
      cy.get("#password").type("testadmin@001");
  
      // Click Sign In button
      cy.contains(
        "Sign in"
      ).click();
  
      // Validate successful login by checking the URL or dashboard presence
      cy.url().should("include", "/dashboard");
      cy.contains("Performance").should("be.visible"); 
    });
  });
  