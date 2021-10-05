class ProductPage {
    visit() {
        cy.url()
        .should('include', '/inventory.html')
        cy.contains('Products');
    } 
}

export default ProductPage;