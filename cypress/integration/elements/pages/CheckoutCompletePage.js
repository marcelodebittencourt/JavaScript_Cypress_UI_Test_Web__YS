class CheckoutCompletePage{
    visit() {
        cy.url()
             .should('include', 'checkout-complete.html');        
    }

    checkThankYouMessage() {
        cy.contains('THANK YOU FOR YOUR ORDER');
    }
}

export default CheckoutCompletePage;