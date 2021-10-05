import HomePage from '../elements/pages/HomePage'
import ProductsPage from '../elements/pages/ProductsPage'
import CartPage from '../elements/pages/CartPage'

describe('E-commerce full puchase', function() {
    it('sign in and buy t-shirts', () => {
        const home = new HomePage();
        home.visit();

        home.fillUsername('standard_user');
        home.fillPassword('secret_sauce')
        home.submit();

        const products = new ProductsPage();
        products.visit();

        products.addFirstTShirtOnShoppingCart();
        products.addSecondTShirtOnShoppingCart();
        products.goToShoppingCart();     
        
        const cart = new CartPage();
        cart.visit()
        cart.goToCheckout();

        // cy.url()
        //     .should('include', 'checkout-step-one.html')
        // cy.contains('Checkout: Your Information')

        // //Fill out the client information
        // cy.get('#first-name').type('Marcelo')
        // cy.get('#last-name').type('Bittencourt')
        // cy.get('#postal-code').type('123456');
        // cy.get('#continue').click()

        // cy.url()
        //     .should('include', 'checkout-step-two.html')
        // cy.contains('Checkout: Overview')
        // cy.get('#finish').click()

        // cy.url()
        //     .should('include', 'checkout-complete.html')
        // cy.contains('THANK YOU FOR YOUR ORDER')
    })
})