class CommonPage {
  menuBtn() {
    return cy.get("#react-burger-menu-btn");
  }

  logoutBtn() {
    return cy.get('[data-test="logout-sidebar-link"]');
  }

  clickMenuBtn() {
    this.menuBtn().click();
  }

  logout() {
    this.logoutBtn().click();
  }
}

export default CommonPage;
