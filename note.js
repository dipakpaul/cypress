// Alert
cy.visit()
cy.get("button[onClick='jsAlert()']").click()
cy.on('window.alert', (t) => {
    expect(t).to.contains('msg in the alert window')
})
// 