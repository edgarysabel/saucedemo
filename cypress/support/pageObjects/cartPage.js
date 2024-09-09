import ProductPage from "./productPage";

const productPage = new ProductPage();

class CartPage {
  cartContainer() {
    return cy.get("#cart_contents_container");
  }

  checkoutBtn() {
    return cy.get('[data-test="checkout"]');
  }

  removeItem(item) {
    productPage.removeBtn(item).click();
  }

  clickOnCheckoutBtn() {
    this.checkoutBtn().click();
  }
}

export default CartPage;
