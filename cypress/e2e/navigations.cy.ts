describe("My navigation test suits", () => {
    it("Navigation tests", () => {
        cy.visit('https://demo.nopcommerce.com')
        cy.title().should('eq', 'nopCommerce demo store')

        cy.get('.ico-register').contains('Reg').click()
        cy.title().should('eq', 'nopCommerce demo store. Register')

        cy.go('back')
        cy.title().should('eq', 'nopCommerce demo store')

        cy.go('forward')
        cy.title().should('eq', 'nopCommerce demo store. Register')

        cy.go(-1)
        cy.title().should('eq', 'nopCommerce demo store')

        cy.go(1)
        cy.title().should('eq', 'nopCommerce demo store. Register')

        cy.reload()
    })
})