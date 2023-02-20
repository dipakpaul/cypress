describe("UI Elements", () => {
  it("Verify Input box and radio buttons", () => {
    cy.visit("http://demo.automationtesting.in/Register.html")

    cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
    cy.get('#checkbox1').uncheck().should('not.be.checked')
    cy.get('input[type=checkbox]').check(['cricket','hockey'])
  })

  it("verify drop down", () => {
    // static drop down
    cy.get('#skills').select('Android').should('have.value', 'Android')

    // multi select
    cy.get('#msdd').click()
    cy.get('.ui-corner-all').contains('English').click()
    cy.get('.ui-corner-all').contains('Japanese').click()

    // select coutry
    cy.get('[role=combobox]').click({force: true})
    cy.get('.select2-search__field').type('Ind')
    cy.get('.select2-search__field').type('{enter}')

  })
})