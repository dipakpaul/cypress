describe("My table test", () => {
    it("Table test", () => {
        cy.visit('https://testautomationpractice.blogspot.com')

        // check the value presence anywhere in the table
        cy.get("table[name=BookTable]")
        .contains('td', 'Learn Selenium')
        .should('be.visible')

        // check the value presence in specific row & column
        cy.get("table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)")
        .contains('Selenium')
        .should('be.visible')

        // verify the book name "Master In Java" whose author is Amod
        cy.get("table[name=BookTable] > tbody > tr td:nth-child(2)").each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Amod')) {
                cy.get("table[name=BookTable] > tbody > tr td:nth-child(1)").eq(index).then((name) => {
                    const bookname = name.text()
                    expect(bookname).to.equal("Master In Java")
                })
            }
        })
        
    })
});