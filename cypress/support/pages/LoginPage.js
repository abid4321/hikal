class LoginPage {
  visit() {
    cy.visit("https://test.hikalcrm.com/");
  }

  enterEmail(email) {
    cy.get("#email").type(email);
  }

  enterPassword(password) {
    cy.get("#password").type(password);
  }

  clickSignIn() {
    cy.contains("Sign in").click();
  }

  validateDashboard() {
    cy.url().should("include", "/dashboard");
    cy.contains("Performance").should("be.visible");
  }
}

export default new LoginPage(); // ✅ Ensure we export an instance
