import HomePage from '../elements/pages/HomePage'
import ProductsPage from '../elements/pages/ProductsPage'

describe('E-commerce full puchase', function() {
    it('sign in and buy t-shirts', () => {
        const home = new HomePage();
        home.visit();

        home.fillUsername('standard_user');
        home.fillPassword('secret_sauce')
        home.submit();

        const products = new ProductsPage();
        products.visit();

        // //Click on T-shirt products
        // cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        // cy.get('div#inventory_container > div > div#inventory_container > div.inventory_list > div.inventory_item:nth-child(6)  > div.inventory_item_description > div.pricebar > button').click()
        // cy.get('a.shopping_cart_link').click()

        // cy.url()
        //     .should('include', 'cart.html')
        // cy.contains('Your Cart')
        // cy.get('#checkout').click()

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