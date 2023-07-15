/*
Abra o arquivo cypress/e2e/duplication/sample4.cy.js, e em vez de fazer um .check() por checkbox, 
tire proveito do fato de que tal comando pode marcar mais de um checkbox com uma única chamada. Basta você encontrar o seletor correto.
*/

describe('Code duplication bad practice - multiple checks', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')
  })
 
  it('checks all checkboxes from a specific fieldset', () => {
    cy.get('fieldset div input[type="checkbox"]')
      .as('checkboxes')
      .check()
  })
})
