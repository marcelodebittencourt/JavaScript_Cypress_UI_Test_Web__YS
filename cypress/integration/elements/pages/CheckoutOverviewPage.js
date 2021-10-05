class CheckoutOverviewPage {
    visit() {
        cy.url()
             .should('include', 'checkout-step-two.html')
        cy.contains('Checkout: Overview')
    }

    finishPurchase() {
        cy.get('#finish').click()
    }

}

export default CheckoutOverviewPage;