class CheckoutPage {
    visit() {
        cy.url()
             .should('include', 'checkout-step-one.html');
        cy.contains('Checkout: Your Information');
    }

    fillFirstName(value){
        cy.get('#first-name').type(value);
    }

    fillLastName(value){
        cy.get('#last-name').type(value);
    }

    fillPostalCode(value){
        cy.get('#postal-code').type(value);
    }

    goToCheckoutStepTwo() {
        cy.get('#continue').click()
    }

}

export default CheckoutPage;