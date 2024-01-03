describe('<SearchFood/>', () => {
  beforeEach(() => {
    // cy.visit('https://ayngie.github.io/natural-guide-to-gestational-diabetes/'); //deployed page
    cy.visit('http://localhost:3000/natural-guide-to-gestational-diabetes/'); //local page

    cy.viewport(1280, 720);
    cy.get('[data-cy="desktop-nav-search-link"]').click();
  });
  
  it('should (in desktop view) be able to write input, click button, and go to search results', () => {
    cy.get('input').type('Banan');
    cy.get('[data-cy="search-food-btn"]').click();
    cy.get('h3').should('contain', 'Sökresultat:');
  })

  it('should also in mobile view be able to write input, click button, and go to search results', () => {
    cy.viewport(400, 720);

    cy.get('[data-cy="mobile-nav-toggle-menu"]').click();
    cy.get('[data-cy="mobile-nav-search-link"]').click();

    cy.get('input').type('Banan');
    cy.get('[data-cy="search-food-btn"]').click();
    cy.get('h3').should('contain', 'Sökresultat:');
  })

})