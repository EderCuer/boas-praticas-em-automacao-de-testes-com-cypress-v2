/*
Abra o arquivo cypress/e2e/browser-testing/sample2.cy.js, e em vez de remover o target da âncora com o texto Política de Privacidade e 
clicar no mesmo, simplesmente verifique que tal elemento possui os valores corretos para as propriedades href e target
*/

describe('Browser testing bad practice - anchor with target _blank', () => {
  beforeEach(() => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('directs the user to the privacy page after removing the target and clicking the link', () => {
    /* Antes
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()

    cy.url()
      .should('be.equal', 'https://cac-tat.s3.eu-central-1.amazonaws.com/privacy.html')
    */

    cy.contains('a', 'Política de Privacidade').should('have.attr', 'href', 'privacy.html').and('have.attr', 'target', '_blank')
  })
})
