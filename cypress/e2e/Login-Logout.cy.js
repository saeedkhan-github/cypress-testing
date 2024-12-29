
import "cypress-iframe";

describe('Test Case for Login-LogOut', () => {
  it.skip('Test-Case Login', () => {
    cy.visit('/').then(() => {
      cy.window().should('have.property', 'document').and('have.property', 'readyState', 'complete');
    });
    cy.get('.icon-close-circle', { timeout: 10000 }).should('be.visible').click();
    cy.get('div>span').contains('Sign in').click();

  })

  it('LOGIN',()=>{
    // cy.visit('account/signin.html').then(() => {
    //   cy.window().should('have.property', 'document').and('have.property', 'readyState', 'complete');
    // });
    cy.visit('http://www.agoda.com/account/signin.html')
    cy.get('[data-cy="ul-app-frame"]');
    cy.frameLoaded();
   
  })

});
