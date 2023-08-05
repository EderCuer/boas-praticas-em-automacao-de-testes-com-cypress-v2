describe('Dependent tests bad practice', () => {
  beforeEach(() => {
    cy.visit('http://notes-serverless-app.com/login')
    cy.intercept('GET', 'https://90xbti2sk5.execute-api.eu-central-1.amazonaws.com/prod/notes').as('getNotes')
    cy.intercept('POST', 'https://90xbti2sk5.execute-api.eu-central-1.amazonaws.com/prod/notes').as('postNotes')
    cy.intercept('PUT', 'https://90xbti2sk5.execute-api.eu-central-1.amazonaws.com/prod/notes/**').as('putNotes')
    cy.intercept('DELETE', 'https://90xbti2sk5.execute-api.eu-central-1.amazonaws.com/prod/notes/**').as('deleteNotes')

    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'), { log: false })
    cy.get('button[type="submit"]').click()

    cy.wait('@getNotes')
    
    cy.contains('h1', 'Your Notes').should('be.visible')
  })

  it('CRUD note', () => {
    // Create the note
    cy.contains('Create a new note').click()
    cy.get('#content').type('My note')
    cy.contains('Create').click()
    cy.wait('@postNotes')
    cy.get('.list-group').should('contain', 'My note')

    // Update the note
    cy.get('.list-group').contains('My note').click()
    cy.get('#content').type(' updated')
    cy.contains('Save').click()
    cy.wait('@putNotes')
    cy.get('.list-group').should('contain', 'My note updated')
    cy.get('.list-group:contains(My note updated)').should('be.visible')

    // Delete the note
    cy.get('.list-group').contains('My note updated').click()
    cy.contains('Delete').click()
    cy.wait('@deleteNotes')
    cy.get('.list-group:contains(My note updated)').should('not.exist')
  })
})
