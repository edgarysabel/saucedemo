/// <reference types="cypress" />
import LoginPage from "../../support/pageObjects/loginPage";
import ProductPage from "../../support/pageObjects/productPage";
import CartPage from "../../support/pageObjects/cartPage";
import CheckoutPage from "../../support/pageObjects/checkoutPage";
import CommonPage from "../../support/pageObjects/commonPage";
import { randFirstName, randLastName, randZipCode } from "@ngneat/falso";
import "cypress-iframe";

const loginPage = new LoginPage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const commonPage = new CommonPage();

const FRONTEND_URL = Cypress.env("FRONTEND_URL");

const user = {
  firstName: randFirstName(),
  lastName: randLastName(),
  zipCode: randZipCode(),
};

describe("End to End Automation Excercise", function () {
  beforeEach(() => {
    cy.visit(`${FRONTEND_URL}`);
    cy.fixture("users").then(function (data) {
      this.userData = data;
    });
    cy.fixture("products").then(function (data) {
      this.productsData = data;
    });
  });

  it("E2E", function () {
    //Login
    loginPage.loginLogo().should("be.visible");
    loginPage.typeLoginEmailAndPassword(
      this.userData.standardUser,
      this.userData.password
    );
    loginPage.clickOnLoginButton();
    productPage.pageTitle().should("be.visible");

    productPage.addToCart(this.productsData.backpackName);
    productPage.removeBtn(this.productsData.backpackName).should("be.visible");

    productPage.addToCart(this.productsData.bikeName);
    productPage.removeBtn(this.productsData.bikeName).should("be.visible");

    productPage.clickOnCartButton();
    cartPage.cartContainer().should("be.visible");
    productPage.removeBtn(this.productsData.bikeName).should("be.visible");
    productPage.removeBtn(this.productsData.backpackName).should("be.visible");

    cartPage.removeItem(this.productsData.bikeName);
    productPage.removeBtn(this.productsData.bikeName).should("not.exist");
    cartPage.clickOnCheckoutBtn();

    checkoutPage.checkoutContainer().should("be.visible");
    checkoutPage.typeName(user.firstName);
    checkoutPage.typeLastName(user.lastName);
    checkoutPage.typeZipPostalCode(user.zipCode);
    checkoutPage.clickCheckoutBtn();
    checkoutPage.paymentInfo().should("be.visible");

    commonPage.clickMenuBtn();
    commonPage.logout();
    loginPage.loginLogo().should("be.visible");
  });
});
