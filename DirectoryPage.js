class DirectoryPage {
    visit() {
        // asumsi setelah login, url directory adalah:
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')
    }

    getSearchInput() {
        return cy.get('input[placeholder="Search"]') // sesuaikan selector
    }

    searchEmployee(name) {
        this.getSearchInput().type(name + '{enter}')
    }

    getResultRows() {
        return cy.get('div.employee-row') // sesuaikan selector
    }
}

export default new DirectoryPage()
