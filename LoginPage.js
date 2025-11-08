class LoginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    getUsernameInput() {
        return cy.get('input[name="username"]')
    }

    getPasswordInput() {
        return cy.get('input[name="password"]')
    }

    getLoginButton() {
        return cy.get('button[type="submit"]')
    }

    login(username, password) {
        this.getUsernameInput().type(username)
        this.getPasswordInput().type(password)
        this.getLoginButton().click()
    }
}

export default new LoginPage()
