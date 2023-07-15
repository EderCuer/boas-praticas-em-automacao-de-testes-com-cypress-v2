/*
Abra o arquivo cypress/e2e/duplication/sample3.cy.js, e em vez de executar 3 vezes a mesma ação e verificação, 
utilize a funcionalidade .times() do lodash (que já vem empacotado com o Cyperss) para remover toda e qualquer duplicacão.
*/

describe('Code duplication bad practice - repetitive actions and assertions', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('searches for the same term 3 times', () => {

    Cypress._.times(3, ()=> { 
      cy.search('cypress.io')

      cy.get('.table-row')
        .its('length')
        .should('be.at.least', 1)
    })
  })
})
