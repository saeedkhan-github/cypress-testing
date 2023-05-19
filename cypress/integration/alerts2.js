/// <reference types="cypress"/>

describe('JavaScript alerts', () => {
    it('Handles JS alert', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
      cy.contains('button', 'Click for JS Alert').click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('I am a JS Alert');
      });
    });
  
    it('Handles JS confirm', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
      cy.contains('button', 'Click for JS Confirm').click();
      cy.on('window:confirm', (str) => {
        expect(str).to.equal('I am a JS Confirm');
        return false;
      });
      cy.contains('Result', 'You clicked: Cancel');
    });
  
    it('Handles JS prompt', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
      cy.contains('button', 'Click for JS Prompt').click();
      cy.on('window:confirm', (str) => {
        expect(str).to.equal('I am a JS prompt');
        return 'Test value';
      });
      cy.contains('Result', 'You entered: Test value');
    });
  });
  