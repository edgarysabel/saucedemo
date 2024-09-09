class LoginPage {
  loginLogo() {
    return cy.get(".login_logo");
  }

  loginEmailInputBox() {
    return cy.get("#user-name");
  }

  loginPasswordInputBox() {
    return cy.get("#password");
  }

  loginButton() {
    return cy.get("#login-button");
  }

  clickOnLoginButton() {
    this.loginButton().click();
  }

  typeLoginEmailAndPassword(user, password) {
    this.loginEmailInputBox().type(user);
    this.loginPasswordInputBox().type(password);
  }
}

export default LoginPage;
