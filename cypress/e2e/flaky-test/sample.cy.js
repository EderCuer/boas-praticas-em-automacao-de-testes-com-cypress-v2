import { faker } from '@faker-js/faker'


//Abra o arquivo cypress/e2e/flaky-test/sample.cy.js e em vez de verificar que o componente com o texto Loading ... 
//é exibido e depois não mais, aguarde por uma requisição do tipo GET para a rota **/search** antes de seguir adiante

describe('Flaky tests bad practice', () => {
  beforeEach(() => {
    cy.intercept(
      'GET', 
      '**/search**',
      { fixture: 'stories' }
    ).as('waitSearch')
    cy.visit('https://wlsf82-hacker-stories.web.app')
  })

  Cypress._.times(10, () => {
    it('shows a max of 5 buttons for the last searched terms', () => {
      Cypress._.times(6, () => {
        cy.search(faker.random.word())
      })

      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})
