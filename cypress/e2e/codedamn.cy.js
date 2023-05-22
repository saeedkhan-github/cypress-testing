/// <reference types="cypress"/>

describe("Basic Tests",()=>{

    it('The webpage Loads, at least ',()=>{
        cy.visit('https://codedamn.com/');
    })

    it('Login page loads',()=>{
        cy.viewport(1280,720);
        cy.contains('Sign in').click();
    })

})

