class ProductPage {
    visit() {
        cy.url()
        .should('include', '/inventory.html')
        cy.contains('Products');
    } 

    addFirstTShirtOnShoppingCart() {
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    }

    addSecondTShirtOnShoppingCart() {
        cy.get('div#inventory_container > div > div#inventory_container > div.inventory_list > div.inventory_item:nth-child(6)  > div.inventory_item_description > div.pricebar > button').click()
    }

    goToShoppingCart() {
        cy.get('a.shopping_cart_link').click()
    }
}

export default ProductPage;