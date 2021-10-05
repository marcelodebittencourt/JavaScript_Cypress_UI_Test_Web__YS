class CheckoutPage {
    visit() {
        cy.url()
             .should('include', 'checkout-step-one.html');
        cy.contains('Checkout: Your Information');
    }

    fillFirstName(value){
        const fieldFirstName = cy.get('#first-name');
        fieldFirstName.type(value);
    }

    fillLastName(value){
        const fieldLastName = cy.get('#last-name');
        fieldLastName.type(value);
    }

    fillPostalCode(value){
        const fieldPostalCode = cy.get('#postal-code');
        fieldPostalCode.type(value);
    }

    goToCheckoutOverview() {
        const buttonContinue = cy.get('#continue');
        buttonContinue.click();
    }

}

export default CheckoutPage;