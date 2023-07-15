/*
1. Abra o arquivo cypress/e2e/duplication/sample2.cy.js e 
remova a duplicação existente nas ações dos testes (não nas verificações) com o uso de um comando customizado

2. Ainda no arquivo cypress/e2e/duplication/sample2.cy.js, logo após o beforeEach e antes dos testes, 
crie uma variável chamada terms a qual representará um array com os valores reactjs e vuejs (como strings).
Logo após, com o uso da funcionalidade .forEach() do JavaScript, itere sobre cada elemento do array executando um único bloco it, 
o qual irá criar um teste para cada item do array.
*/


describe('Code duplication bad practice - repetitive tests', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'redux')
      .as('searchField')
      .clear()
  })
  

  let terms = ['reactjs', 'vuejs']

  /*
  it('searches for "reactjs"', () => {
    
    cy.get('@searchField')
      .type('reactjs{enter}')
    

    cy.search('reactjs')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })

  it('searches for "vuejs"', () => {
    
    cy.get('@searchField')
      .type('vuejs{enter}')
    
    
    cy.search('vuejs')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })
  */
 
  terms.forEach(element => {
    it(`searches for "${element}"`, () => {
      cy.search(element)

      cy.wait('@getStories')

      cy.get('.table-row')
        .should('have.length', 100)

    })
  });
})
