import HomePage from '../elements/pages/HomePage'
import ProductsPage from '../elements/pages/ProductsPage'
import CartPage from '../elements/pages/CartPage'
import CheckoutPage from '../elements/pages/CheckoutPage'
import CheckoutOverviewPage from '../elements/pages/CheckoutOverviewPage'
import CheckoutCompletePage from '../elements/pages/CheckoutCompletePage'

describe('E-commerce full purchase', function () {
    before(function () {
        cy.fixture('userdata').then(function(userdata) {
            this.userdata = userdata;
        })
    })

    it('sign in and buy t-shirts', function () {
        const home = new HomePage();
        home.visit();
        home.fillUsername(this.userdata.username);
        home.fillPassword(this.userdata.password)
        home.submit();

        const products = new ProductsPage();
        products.visit();
        //products.addTShirtItensOnShoppingCart();
       
        
        products.addFirstTShirtOnShoppingCart();
        products.checkNumberOfItensShoppingCart('1')
        products.addSecondTShirtOnShoppingCart();
        
        
        products.checkNumberOfItensShoppingCart('2');
        products.goToShoppingCart();     
        
        const cart = new CartPage();
        cart.visit()
        cart.goToCheckout();

        const checkout = new CheckoutPage();
        checkout.visit();                
        checkout.fillFirstName(this.userdata.firstName);
        checkout.fillLastName(this.userdata.lastName);
        checkout.fillPostalCode(this.userdata.postalCode);
        checkout.goToCheckoutOverview();

        const checkoutOverview = new CheckoutOverviewPage();
        checkoutOverview.visit();
        checkoutOverview.finishPurchase();        

        const checkoutComplete = new CheckoutCompletePage();
        checkoutComplete.visit();
        checkoutComplete.checkThankYouMessage();
    })
})