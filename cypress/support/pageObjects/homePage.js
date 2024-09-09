class HomePage {
	viewProduct() {
		return cy.get(':nth-child(24) > .product-image-wrapper > .choose > .nav > li > a');
	}

	cartHeader () {
		return cy.get('.shop-menu > .nav > :nth-child(3) > a');
	}

	logoutHeader () {
		return cy.get('.shop-menu > .nav > :nth-child(4) > a');
	}

	contactUsHeader() {
		return cy.get('.nav > :nth-child(9)');
	}

	clickOnViewProduct() {
		this.viewProduct().should('be.visible');
		this.viewProduct().click();
	}

	clickOnCartHeader() {
		this.cartHeader().should('be.visible');
		this.cartHeader().click()
	}
	clickOnLogoutHeader() {
		this.logoutHeader().should('be.visible');
		this.logoutHeader().click()
	}
	clickOnContactUSHeader() {
		this.contactUsHeader().should('be.visible');
		this.contactUsHeader().click()
	}
}

export default HomePage;