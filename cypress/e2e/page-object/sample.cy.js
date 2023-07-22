/*
Abra o arquivo cypress/e2e/page-object/sample.cy.js e em vez de utilizar o método .updateInfo() 
do módulo editDestinationPage (ou seja, do Page Object), 
crie um comando customizado chamado updateDestination, o qual pode ser utilizado em vez do método do Page Object.
*/

import { faker } from '@faker-js/faker'

describe('Page Object bad practice', () => {
  const randomDestination = Math.floor(Math.random() * 15) + 1

  beforeEach(() => {
    cy.visit(`https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}/edit`)
  })

  it('updates destination info', () => {
    const info = {
      name: faker.random.words(5),
      description: faker.random.words(5)
    }

    cy.updateDestination(info)

    cy.url()
      .should(
        'be.equal',
        `https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}`
      )
    cy.contains('h2', info.name)
      .should('be.visible')
    cy.contains('p', info.description)
      .should('be.visible')
  })
})
