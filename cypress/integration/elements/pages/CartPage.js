class CartPage {
    visit() {
        cy.url()
             .should('include', 'cart.html');
        cy.contains('Your Cart');
    }

    goToCheckout() {
        cy.get('#checkout').click();
    }

}

export default CartPage;