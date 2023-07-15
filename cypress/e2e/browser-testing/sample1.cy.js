/*
  Abra o arquivo cypress/e2e/browser-testing/sample1.cy.js, e em vez de clicar link que contém o texto Login, 
  verifique somente que tal elemento possui o valor correto para a propriedade href, além de verificar que tal elemento não possui a propriedade target
*/

describe('Browser testing bad practice - anchor href', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com')
  })

  it('directs the user to the login page when clicking the login link', () => {
    /* Antes
    cy.contains('.nav a', 'Login').click()
    cy.url().should('be.equal', 'https://notes-serverless-app.com/login')
    */

    cy.contains('.nav a', 'Login').should('have.attr', 'href', '/login').and('not.have.attr', 'target')
  })
})
