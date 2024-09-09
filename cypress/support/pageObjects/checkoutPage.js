class CheckoutPage {
  checkoutContainer() {
    return cy.get('[data-test="checkout-info-container"]');
  }

  nameBox() {
    return cy.get('[data-test="firstName"]');
  }

  lastNameBox() {
    return cy.get('[data-test="lastName"]');
  }

  zipPostalCode() {
    return cy.get('[data-test="postalCode"]');
  }

  checkoutBtn() {
    return cy.get('[data-test="continue"]');
  }

  paymentInfo() {
    return cy.get('[data-test="payment-info-label"]');
  }

  typeName(name) {
    this.nameBox().type(name);
  }

  typeLastName(lastName) {
    this.lastNameBox().type(lastName);
  }

  typeZipPostalCode(zipCode) {
    this.zipPostalCode().type(zipCode);
  }

  clickCheckoutBtn() {
    this.checkoutBtn().click();
  }
}

export default CheckoutPage;
