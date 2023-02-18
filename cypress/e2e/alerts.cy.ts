describe('Alerts', () => {
  it('JS Alerts', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onClick='jsAlert()']").click()
    cy.on('window.alert', (t) => {
        expect(t).to.contains('I am a JS Alert')
    })
    // alert window automatically closed by cypress
    cy.get('#result').should('have.text', 'You successfully clicked an alert')
  })

  it('JS confirm Alerts - Ok', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:confirm', (t) => {
      expect(t).to.contain('I am a JS Confirm')
    })
    cy.get('#result').should('have.text', 'You clicked: Ok')
  })

  it('JS confirm Alerts - Cancel', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:confirm', () => false)
    cy.get('#result').should('have.text', 'You clicked: Cancel')
  })

  it('JS promp Alerts', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    /*
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns('welcome')
    })
    cy.get("button[onclick='jsPrompt()']").click()
    // cypress will automatically close promted alert - it will use OK button - by default
    cy.get('#result').should('have.text', 'You entered: welcome')
    */
    cy.get("button[onclick='jsPrompt()']").click()
    cy.on('window:prompt', () => false)
  })

  it.only('Authenticated alert', () => {
    // approch 1
    /*
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    })
    cy.get("div[class='example'] p").should('have.contain', 
    'Congratulations! You must have the proper credentials.')
    */

    // approach 2
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example'] p").should('have.contain', 
    'Congratulations! You must have the proper credentials.')
  })
})