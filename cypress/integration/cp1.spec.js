/// <reference types="cypress"/>

describe("Basic Tests",()=>{

   
   it("visit the site",function(){

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.product').find('.product').eq(2).contains('ADD TO CART').click();

   })

})

