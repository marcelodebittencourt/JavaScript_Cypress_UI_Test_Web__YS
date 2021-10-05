class CartPage {
    visit() {
        cy.url()
             .should('include', 'cart.html');
        cy.contains('Your Cart');
    }

    goToCheckout() {
        const buttonCheckout = cy.get('#checkout');
        buttonCheckout.click();
    }

}

export default CartPage;