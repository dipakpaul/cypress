describe("Locating Elements", () => {
  it("verify types of locators", () => {
    cy.visit("https://demo.nopcommerce.com/")
    cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
    cy.get('button[type=submit]').click()
    cy.get(".product-box-add-to-cart-button").click()
    cy.get("#product_enteredQuantity_4").clear().type('3')
    cy.get("#add-to-cart-button-4").click()
    cy.wait(5000)
    cy.get("#topcartlink > a > span.cart-label").click()
    cy.wait(3000)
    cy.get(".product-subtotal").contains('$5,400.00')
  })
})