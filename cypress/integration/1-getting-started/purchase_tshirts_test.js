describe('My First Test', function() {
    it('Visit SauceDemo site', function() {
        cy.visit('https://www.saucedemo.com')
        cy.contains('Accepted usernames are')

        //Fill out the login form
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.url()
            .should('include', '/inventory.html')
        cy.contains('Products')

        //Click on T-shirt products
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.get('div#inventory_container > div > div#inventory_container > div.inventory_list > div.inventory_item:nth-child(6)  > div.inventory_item_description > div.pricebar > button').click()
        cy.get('a.shopping_cart_link').click()

        cy.url()
            .should('include', 'cart.html')
        cy.contains('Your Cart')
        cy.get('#checkout').click()

        cy.url()
            .should('include', 'checkout-step-one.html')
        cy.contains('Checkout: Your Information')

        //Fill out the client information
        cy.get('#first-name').type('Marcelo')
        cy.get('#last-name').type('Bittencourt')
        cy.get('#postal-code').type('123456');
        cy.get('#continue').click()

        cy.url()
            .should('include', 'checkout-step-two.html')
        cy.contains('Checkout: Overview')
        cy.get('#finish').click()

        cy.url()
            .should('include', 'checkout-complete.html')
        cy.contains('THANK YOU FOR YOUR ORDER')
    })
})