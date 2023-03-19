/// <reference types="cypress"/>

describe("Basic Tests",()=>{

   
   it("visit the site",function(){

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
   //  cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

   cy.get('.brand').then(function(logo){

      cy.log(logo.text);
   })

   cy.get('.brand').should('have.text','GREENKART');


   })

})

