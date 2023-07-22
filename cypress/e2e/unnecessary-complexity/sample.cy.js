/*
Abra o arquivo cypress/e2e/unnecessary-complexity/sample.cy.js e 
remova toda a complexidade desnecessária do teste com o simples uso do comando .check() do Cypress.
*/

describe('Unnecessary complexity bad practice', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')
    cy.randomlyTogglePurchaseAgreement()
  })

  Cypress._.times(5, () => {
    it('checks the checkbox only if not checked', () => {
      /*cy.get('body', { log: false }).then($body => {
        if ($body.find('#agree:checked').length) {
          cy.log('check box was checked')
          return
        }
        cy.log('check box was unchecked')
        $body.find('#agree').click()
        return
      })*/

      cy.get('#agree').check()

      cy.get('#agree', { log: false })
        .should('be.checked')
    })
  })
})