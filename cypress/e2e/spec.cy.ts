describe('dashboard', () => {
  beforeEach(() => {
    cy.visit('https://devopsweek6.web.app/dashboard');
  });

  it(`has title 'Tour of Heroes'`, () => {
    cy.contains('Tour of Heroes');
    cy.get('h1').should('contain', 'Tour of Heroes');
    cy.title().should('eq', 'Tour of Heroes');
  });

  it(`has the correct header`, () => {
    cy.contains('Dashboard');
    cy.get('nav a').eq(1).should('contain', 'Heroes');
    cy.contains('Top Heroes');
  });

  it(`has the correct search header`, () => {
    cy.contains('Hero Search');
    cy.get('app-hero-search').should('contain', 'Hero Search');
  });

  it(`Search for Tollywoord`, () => {
    cy.contains('Top Heroes - in Tollywood');
  });

  it('can search', () => {
    cy.get('#search-box').type('Bombasto');
    cy.get('.search-result li').contains('Bombasto').click();
    cy.url().should('include', '/detail/13');
  });
});
