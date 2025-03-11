import LoginPage from "../../support/pages/LoginPage";
import credentials from "../../fixtures/credentials.json";

describe("Hikal CRM Login Test", () => {
  beforeEach(() => {
    cy.fixture("credentials").then((credentials) => {
      cy.wrap(credentials).as("credentials");
    });
  });

  it("should log in successfully", function () {
    // Visit the login page
    LoginPage.visit();

    // Use credentials from fixture
    LoginPage.enterEmail(this.credentials.email);
    LoginPage.enterPassword(this.credentials.password);

    // Click Sign In button
    LoginPage.clickSignIn();
    LoginPage.validateDashboard();
  });
});
