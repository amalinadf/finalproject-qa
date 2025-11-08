class ForgotPasswordPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.contains('Forgot your password?').click() 
    }

    getEmailInput() {
        return cy.get('input[name="email"]') 
    }

    getSubmitButton() {
        return cy.get('button[type="submit"]') 
    }

    resetPassword(email) {
        this.getEmailInput().type(email)
        this.getSubmitButton().click()
    }
}

export default new ForgotPasswordPage()
