describe('Alerts', () => {
  it('JS Alerts', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onClick='jsAlert()']").click()
    cy.on('window.alert', (t) => {
        expect(t).to.contains('msg in the alert window')
    })
    // alert window automatically closed by cypress
    cy.get('#result').should('have.text', 'You successfully clicked an alert')
  })
  it('JS confirm Alerts', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onClick='jsAlert()']").click()
    cy.on('window.alert', (t) => {
        expect(t).to.contains('msg in the alert window')
    })
    // alert window automatically closed by cypress
    cy.get('#result').should('have.text', 'You successfully clicked an alert')
  })
})