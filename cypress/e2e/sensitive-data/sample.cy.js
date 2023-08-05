/*
Primeiro, crie um arquivo chamado cypress.env.json na raiz do projeto.
Agora, abra o arquivo cypress/e2e/sensitive-data/sample.cy.js e em vez de digitar o usuário e senha com dados hardcoded, utilize as variáveis recém configuradas.

Além disso, não deixe o Cypress imprimir no log de comandos do runner a senha digitada.
*/

describe('Sensitive data bad practice', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com/login')
  })

  it('fills the form leaking sensitive data', () => {
    cy.get('#email').type(Cypress.env('user_email'), { log: false })
    cy.get('#password').type(Cypress.env('user_password'), { log: false })
  })
})
