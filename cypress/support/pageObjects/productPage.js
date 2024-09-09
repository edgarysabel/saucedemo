class ProductPage {
  cartButton() {
    return cy.get('[data-test="shopping-cart-link"]');
  }

  pageTitle() {
    return cy.get(".app_logo");
  }

  addToCart(item) {
    const handle = item.toLowerCase();
    cy.get(`[data-test="add-to-cart-${handle.split(" ").join("-")}"]`).click();
  }

  removeBtn(item) {
    const handle = item.toLowerCase();
    return cy.get(`[data-test="remove-${handle.split(" ").join("-")}"]`);
  }

  clickOnCartButton() {
    this.cartButton().click();
  }
}

export default ProductPage;
