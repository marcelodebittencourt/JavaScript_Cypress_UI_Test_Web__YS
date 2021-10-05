class CheckoutOverviewPage {
    visit() {
        cy.url()
             .should('include', 'checkout-step-two.html')
        cy.contains('Checkout: Overview')
    }

    finishPurchase() {
        const buttonFinish = cy.get('#finish');
        buttonFinish.click();
    }

}

export default CheckoutOverviewPage;