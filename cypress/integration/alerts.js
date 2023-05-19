/// <reference types="cypress"/>


describe('My First Test', () => {
    it('click on alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get(':nth-child(1) > button').click()

        cy.on('window:alert',(text)=>{
            expect(text).to.contain('I am a JS Alert');
        })
    })

    it('CLICK ON CONFIRM',()=>{
        cy.get(':nth-child(2) > button').click();
    })
    
  })