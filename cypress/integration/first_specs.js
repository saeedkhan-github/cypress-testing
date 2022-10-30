/// <reference types="cypress"/>

describe('My First Test', () => {
    it('Does not do much!', () => {
    //   expect(true).to.equal(true)
        cy.visit('https://www.google.com')
        cy.get('.gLFyf').type('saeedullah89{enter}');
    })
    it.only('Login to OrangeHRM Demo',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard');
        cy.get('#txtUsername').type('admin');
        cy.get('#txtPassword').type('admin123');
        cy.get('#btnLogin').click();

    })
  })