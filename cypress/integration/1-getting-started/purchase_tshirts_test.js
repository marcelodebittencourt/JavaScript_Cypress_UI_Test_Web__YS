import HomePage from '../elements/pages/HomePage'
import ProductsPage from '../elements/pages/ProductsPage'
import CartPage from '../elements/pages/CartPage'
import CheckoutPage from '../elements/pages/CheckoutPage'
import CheckoutOverviewPage from '../elements/pages/CheckoutOverviewPage'
import CheckoutCompletePage from '../elements/pages/CheckoutCompletePage'

describe('E-commerce full purchase', function() {
    it('sign in and buy t-shirts', () => {
        const home = new HomePage();
        home.visit();
        home.fillUsername('standard_user');
        home.fillPassword('secret_sauce')
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
        checkout.fillFirstName('Marcelo');
        checkout.fillLastName('Bittencourt');
        checkout.fillPostalCode('123456');
        checkout.goToCheckoutOverview();

        const checkoutOverview = new CheckoutOverviewPage();
        checkoutOverview.visit();
        checkoutOverview.finishPurchase();        

        const checkoutComplete = new CheckoutCompletePage();
        checkoutComplete.visit();
        checkoutComplete.checkThankYouMessage();
    })
})