///<reference types = "Cypress"/>
describe('template spec', () => {
  it('test cypress io examples page', () => {
    cy.visit('https://example.cypress.io')
cy.url().should('eql', 'https://example.cypress.io/')

  })
})
