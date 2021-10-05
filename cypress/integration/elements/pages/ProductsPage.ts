import Util from './Util'
var assert = chai.assert;

class ProductPage {
    util: Util;
    
    constructor() {
        this.util = new Util();
    }

    visit() {
        cy.url()
        .should('include', '/inventory.html')
        cy.contains('Products');
    } 

    addTShirtItensOnShoppingCart(){
        let text:string = '';
        let foundText:boolean = false;
        cy.get('div.inventory_item_description').each(($el, index, $list) => {
            foundText = false;
            cy.wrap($el).find('.inventory_item_name').should(($div) => {
                text = $div.text();   
                //foundText = text.includes('T-Shirt')                
                //if(foundText){
                if(text.indexOf('T-Shirt') !== -1) {   
                    cy.wrap($el).get('button').click();
                }
            })                       
        })        
    }

    addFirstTShirtOnShoppingCart() {
        //this.util.clickElement("#add-to-cart-sauce-labs-bolt-t-shirt");
        
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

    checkNumberOfItensShoppingCart(value) {
        cy.get('span.shopping_cart_badge').contains(value);
    }
}

export default ProductPage;