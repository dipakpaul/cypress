describe('Alerts', () => {
  it.skip('JS Alerts', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onClick='jsAlert()']").click()
    cy.on('window.alert', (t) => {
        expect(t).to.contains('I am a JS Alert')
    })
    // alert window automatically closed by cypress
    cy.get('#result').should('have.text', 'You successfully clicked an alert')
  })
  it('JS confirm Alerts', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:confirm', (t) => {
      expect(t).to.contain('I am a JS Confirm')
    })
    cy.get('#result').should('have.text', 'You clicked: Ok')
  })
})