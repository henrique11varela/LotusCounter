// https://on.cypress.io/api

describe('Main menu functionality', () => {
  it('Should open the menu page on layout button', () => {
    cy.visit('/')
    cy.get('[data-cy="menu-button"]').click()
    cy.get('[data-cy="menu-page"]').should('exist')
  })
})
