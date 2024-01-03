describe('<SearchFood/>', () => {
  it('should enter input, click button, and go to search results', () => {
    cy.visit('http://localhost:3000/natural-guide-to-gestational-diabetes/search')

    cy.get('input').type('Banan')
    cy.get('[data-cy="search-food-btn"]').click()

    cy.get('h3').should('contain', 'Sökresultat:')
  })
})