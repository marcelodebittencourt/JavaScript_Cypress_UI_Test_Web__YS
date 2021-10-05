class HomePage {
    visit() {
        cy.visit('https://www.saucedemo.com');
        cy.contains('Accepted usernames are');
    }

    fillUsername(value) {
        const field = cy.get('#user-name');
        field.clear();
        field.type(value);
    }

    fillPassword(value) {
        const field = cy.get('#password');
        field.clear();
        field.type(value);
    }
    
    submit() {
        const button = cy.get('#login-button');
        button.click();
    }
}

export default HomePage;
