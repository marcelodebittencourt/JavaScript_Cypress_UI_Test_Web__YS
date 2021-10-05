import cypress from 'cypress';

class ProductPage {
    visit() {
        cy.url()
        .should('include', '/inventory.html')
        cy.contains('Products');
    } 

    checkItemDescriptions(){
        //listItemDescription: ElementArrayFinder;
        //listItemDescription = cy.get('div.inventory_item_description');

    }

    addFirstTShirtOnShoppingCart() {
        const buttonAdd = cy.get('#add-to-cart-sauce-labs-bolt-t-shirt');
        buttonAdd.click();
    }

    addSecondTShirtOnShoppingCart() {
        const buttonAdd = cy.get('div#inventory_container > div > div#inventory_container > div.inventory_list > div.inventory_item:nth-child(6)  > div.inventory_item_description > div.pricebar > button');
        buttonAdd.click();
    }

    goToShoppingCart() {
        const buttonShoppingCart = cy.get('a.shopping_cart_link');
        buttonShoppingCart.click();
    }
}

export default ProductPage;