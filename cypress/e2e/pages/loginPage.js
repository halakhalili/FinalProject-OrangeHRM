class LoginPageAction {

    navigate() {
        cy.visit('https://opensource-demo.orangehrmlive.com');
        return this;
    }

    EnterUserName(username) {
        cy.get('input[name=username]').type(username);
        return this;
    }

    EnterPassword(password) {
        cy.get('input[name=password]').type(password);
        return this;
    }

    submit() {
        cy.get('button').contains('Login').click();
        return this;
    }

    AssertionDashboardURL() {
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }

    AssertionLoginURL() {
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
}

export default LoginPageAction;