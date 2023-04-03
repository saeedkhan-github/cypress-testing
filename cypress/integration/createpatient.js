/// <reference types="cypress"/>

// import { contains } from "cypress/types/jquery";

describe('My First Test', () => {
    it('Login into hucu staging as qa.test1', () => {
    //   expect(true).to.equal(true)
      
    cy.visit('https://webapp.hucu.us/login');
    cy.get('.fluid > input').click();
    cy.get('.fluid > input').type('{backspace}');
    cy.get('.fluid > input').type('{backspace}');
    cy.get('.fluid > input').type('qa.test1');
    cy.get('.large').click();
    cy.get('form').submit();
    cy.get('.icon > input').click();
    cy.get('.icon > input').type('Saeed123@');
    cy.get('.large').click();
    cy.get('form').submit();
    cy.get('.pincode-input-text:nth-child(1)').type('1');
    cy.get('.pincode-input-text:nth-child(2)').type('1');
    cy.get('.pincode-input-text:nth-child(3)').type('1');
    cy.get('.pincode-input-text:nth-child(4)').type('1');
    cy.get('.pincode-input-text:nth-child(1)').type('1');
    cy.get('.pincode-input-text:nth-child(2)').type('1');
    cy.get('.pincode-input-text:nth-child(3)').type('1');
    cy.get('.pincode-input-text:nth-child(4)').type('1');

    cy.get('.list-header:nth-child(2) > .icon-container > .ui').click().then(()=>{
         // cy.get('.required:nth-child(1) input').click()
        //  cy.get('.ui primary button create_btn').click();
        cy.get('.four > .ui').click();
         cy.get('.required:nth-child(1) input').type('shah');
         cy.get('.required:nth-child(2) input').type('khalid');
         cy.get('.required:nth-child(3) input').type('10/10/2001');
         cy.get('.selection').click();
         cy.get('.selected').click();
         cy.get('.blue').click();
         cy.get('form').submit().then(()=>{

            // cy.get('header modal-header');
            return;

            // should('have.text', 'The patient channel you are trying to create already exists: shah khalid 10/10/2001');

         });
         cy.get('#create-patient-modal:nth-child(1)').
         should('have.text','Patient channel already existsThe patient channel you are trying to create already exists: shah khalid 10/10/2001BackJoin Channel');
         cy.get('#ui blue button submit-btn').click();

    }  
    );


    
   

     


    });
   
  })// close of describe